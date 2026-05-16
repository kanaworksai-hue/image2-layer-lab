import { createServer } from "node:http";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = resolve(__dirname, "public");
const generatedDir = resolve(__dirname, "generated");
const generatedManifestPath = resolve(generatedDir, "manifest.json");
const spendStatsPath = resolve(__dirname, ".image2-spend.json");

loadEnvFile(resolve(__dirname, ".env"));

const PORT = Number(process.env.PORT || 3000);
const API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_GENERATIONS_URL = "https://api.openai.com/v1/images/generations";
const OPENAI_EDITS_URL = "https://api.openai.com/v1/images/edits";
const DEFAULT_USD_JPY = Number(process.env.USD_JPY_RATE || 158.4);

const IMAGE_MODELS = new Set([
  "gpt-image-2",
  "chatgpt-image-latest",
  "gpt-image-1.5",
  "gpt-image-1",
  "gpt-image-1-mini"
]);

const QUALITIES = new Set(["auto", "low", "medium", "high"]);
const FORMATS = new Set(["png", "jpeg", "webp"]);
const BACKGROUNDS = new Set(["auto", "opaque", "transparent"]);
const MODERATION = new Set(["auto", "low"]);
const BASE_SIZES = new Set(["auto", "1024x1024", "1536x1024", "1024x1536"]);
const ALLOWED_IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);
const MAX_REFERENCE_IMAGES = 8;
const MAX_REFERENCE_IMAGE_BYTES = 50 * 1024 * 1024;
const MAX_MULTIPART_BYTES = 220 * 1024 * 1024;
const MAX_JSON_BYTES = 8 * 1024 * 1024;

const PRICE_BOOK = {
  updated: "2026-05-15",
  defaultUsdJpy: DEFAULT_USD_JPY,
  models: {
    "gpt-image-2": {
      textInput: 5,
      imageInput: 8,
      imageOutput: 30,
      calculator: "gpt-image-2"
    },
    "chatgpt-image-latest": {
      textInput: 5,
      imageInput: 8,
      imageOutput: 32,
      legacyAlias: "gpt-image-1.5"
    },
    "gpt-image-1.5": {
      textInput: 5,
      imageInput: 8,
      imageOutput: 32,
      legacyAlias: "gpt-image-1.5"
    },
    "gpt-image-1": {
      textInput: 5,
      imageInput: 10,
      imageOutput: 40,
      legacyAlias: "gpt-image-1"
    },
    "gpt-image-1-mini": {
      textInput: 2,
      imageInput: 2.5,
      imageOutput: 8,
      legacyAlias: "gpt-image-1-mini"
    }
  }
};

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

let exchangeRateCache = null;
let spendWriteQueue = Promise.resolve();
let generatedManifestQueue = Promise.resolve();

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/health") {
      return sendJson(res, 200, {
        ok: true,
        hasApiKey: Boolean(API_KEY),
        models: Array.from(IMAGE_MODELS)
      });
    }

    if (req.method === "GET" && url.pathname === "/api/pricing") {
      const exchange = await getUsdJpyRate();
      return sendJson(res, 200, {
        ok: true,
        priceBook: PRICE_BOOK,
        exchange
      });
    }

    if (req.method === "GET" && url.pathname === "/api/spend-stats") {
      const stats = await readSpendStats();
      return sendJson(res, 200, {
        ok: true,
        stats
      });
    }

    if (req.method === "GET" && url.pathname === "/api/saved-images") {
      const manifest = await readGeneratedManifest();
      return sendJson(res, 200, {
        ok: true,
        images: manifest.images
      });
    }

    if (req.method === "POST" && url.pathname === "/api/generate") {
      return handleGenerate(req, res);
    }

    if (req.method === "POST" && url.pathname === "/api/fill-background") {
      return handleFillBackground(req, res);
    }

    if ((req.method === "GET" || req.method === "HEAD") && url.pathname.startsWith("/generated/")) {
      return serveGenerated(req, res, url.pathname);
    }

    if (req.method === "GET" || req.method === "HEAD") {
      return serveStatic(req, res, url.pathname);
    }

    sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`Image2 Layer Lab running at http://localhost:${PORT}`);
  if (!API_KEY) {
    console.log("OPENAI_API_KEY is not set. Add it to .env before generating images.");
  }
});

async function handleGenerate(req, res) {
  if (!API_KEY) {
    return sendJson(res, 500, {
      error: "OPENAI_API_KEY is missing. Add it to .env and restart the server."
    });
  }

  let incoming;
  try {
    incoming = await readRequestPayload(req);
  } catch (error) {
    return sendJson(res, 400, { error: error.message || "Invalid request body" });
  }

  const validation = validateGenerationPayload(incoming.fields, incoming.files);
  if (!validation.ok) {
    return sendJson(res, 400, { error: validation.error });
  }

  const mentionResolution = await applyPromptImageMentions(validation.value);
  if (!mentionResolution.ok) {
    return sendJson(res, 400, { error: mentionResolution.error });
  }
  validation.value = mentionResolution.value;

  const hasReferenceImages = validation.value.referenceImages.length > 0;
  const requestBody = hasReferenceImages
    ? buildOpenAIMultipartRequest(validation.value)
    : buildOpenAIJsonRequest(validation.value);

  const headers = {
    "Authorization": `Bearer ${API_KEY}`
  };

  if (!hasReferenceImages) {
    headers["Content-Type"] = "application/json";
  }

  const openaiResponse = await fetch(hasReferenceImages ? OPENAI_EDITS_URL : OPENAI_GENERATIONS_URL, {
    method: "POST",
    headers,
    body: hasReferenceImages ? requestBody : JSON.stringify(requestBody)
  });

  const responseText = await openaiResponse.text();
  let data;
  try {
    data = JSON.parse(responseText);
  } catch {
    data = { raw: responseText };
  }

  if (!openaiResponse.ok) {
    const message = data?.error?.message || data?.error || "OpenAI image generation failed";
    return sendJson(res, openaiResponse.status, {
      error: message,
      requestId: openaiResponse.headers.get("x-request-id") || undefined
    });
  }

  const images = Array.isArray(data.data)
    ? data.data
        .filter((item) => item?.b64_json)
        .map((item) => ({
          b64: item.b64_json,
          revisedPrompt: item.revised_prompt || null
        }))
    : [];

  if (images.length === 0) {
    return sendJson(res, 502, {
      error: "The API response did not contain image data.",
      requestId: openaiResponse.headers.get("x-request-id") || undefined
    });
  }

  const requestId = openaiResponse.headers.get("x-request-id") || undefined;
  const outputFormat = data.output_format || validation.value.output_format || "png";
  let savedImages = [];
  let autoSaveError = null;
  try {
    savedImages = await saveGeneratedImages({
      images,
      request: validation.value,
      mode: hasReferenceImages ? "edit" : "generate",
      outputFormat,
      requestId
    });
  } catch (error) {
    console.error("Auto-save failed:", error);
    autoSaveError = "图片已生成，但自动保存失败。请先手动下载。";
  }
  const exchange = await getUsdJpyRate();
  const spend = await recordSpend({
    usage: data.usage || null,
    request: validation.value,
    mode: hasReferenceImages ? "edit" : "generate",
    images: images.length,
    requestId,
    exchange
  });

  sendJson(res, 200, {
    images,
    mode: hasReferenceImages ? "edit" : "generate",
    referenceImageCount: validation.value.referenceImages.length,
    mentionReferences: validation.value.mentionReferences,
    created: data.created || null,
    background: data.background || validation.value.background || null,
    output_format: outputFormat,
    quality: data.quality || validation.value.quality || null,
    size: data.size || validation.value.size || null,
    usage: data.usage || null,
    savedImages,
    autoSaveError,
    spend,
    requestId
  });
}

async function handleFillBackground(req, res) {
  if (!API_KEY) {
    return sendJson(res, 500, {
      error: "OPENAI_API_KEY is missing. Add it to .env and restart the server."
    });
  }

  let incoming;
  try {
    incoming = await readRequestPayload(req);
  } catch (error) {
    return sendJson(res, 400, { error: error.message || "Invalid request body" });
  }

  const validation = validateFillBackgroundPayload(incoming.fields, incoming.files);
  if (!validation.ok) {
    return sendJson(res, 400, { error: validation.error });
  }

  const form = buildOpenAIFillRequest(validation.value);
  const openaiResponse = await fetch(OPENAI_EDITS_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    },
    body: form
  });

  const responseText = await openaiResponse.text();
  let data;
  try {
    data = JSON.parse(responseText);
  } catch {
    data = { raw: responseText };
  }

  const requestId = openaiResponse.headers.get("x-request-id") || undefined;
  if (!openaiResponse.ok) {
    const message = data?.error?.message || data?.error || "OpenAI image edit failed";
    return sendJson(res, openaiResponse.status, {
      error: message,
      requestId
    });
  }

  const image = Array.isArray(data.data)
    ? data.data.find((item) => item?.b64_json)
    : null;

  if (!image) {
    return sendJson(res, 502, {
      error: "The API response did not contain image data.",
      requestId
    });
  }

  let spend = null;
  try {
    const exchange = await getUsdJpyRate();
    spend = await recordSpend({
      usage: data.usage || null,
      request: {
        model: validation.value.model,
        quality: validation.value.quality,
        size: "auto",
        referenceImages: [validation.value.image]
      },
      mode: "mask-edit",
      images: 1,
      requestId,
      exchange
    });
  } catch (error) {
    console.error("Spend tracking failed:", error);
  }

  sendJson(res, 200, {
    ok: true,
    image: {
      b64: image.b64_json,
      revisedPrompt: image.revised_prompt || null
    },
    output_format: data.output_format || "png",
    usage: data.usage || null,
    spend,
    requestId
  });
}

async function readRequestPayload(req) {
  const contentType = req.headers["content-type"] || "";

  if (contentType.includes("multipart/form-data")) {
    const boundary = getMultipartBoundary(contentType);
    if (!boundary) {
      throw new Error("Missing multipart boundary");
    }

    const body = await readRawBody(req, MAX_MULTIPART_BYTES);
    return parseMultipartFormData(body, boundary);
  }

  if (contentType.includes("application/json")) {
    const body = await readRawBody(req, MAX_JSON_BYTES);
    const fields = JSON.parse(body.toString("utf8"));
    return { fields, files: [] };
  }

  throw new Error("Unsupported content type");
}

function validateGenerationPayload(fields, files) {
  const prompt = String(fields?.prompt || "").trim();
  if (!prompt) {
    return { ok: false, error: "请输入提示词。" };
  }

  if (prompt.length > 8000) {
    return { ok: false, error: "提示词太长，请控制在 8000 个字符以内。" };
  }

  const model = String(fields?.model || "gpt-image-2");
  if (!IMAGE_MODELS.has(model)) {
    return { ok: false, error: "不支持的模型。" };
  }

  const size = String(fields?.size || "1024x1024");
  if (!isValidSize(size, model)) {
    return { ok: false, error: "图片尺寸不符合当前模型支持范围。" };
  }

  const quality = String(fields?.quality || "auto");
  if (!QUALITIES.has(quality)) {
    return { ok: false, error: "不支持的质量设置。" };
  }

  const outputFormat = String(fields?.output_format || "png");
  if (!FORMATS.has(outputFormat)) {
    return { ok: false, error: "不支持的输出格式。" };
  }

  const background = String(fields?.background || "auto");
  if (!BACKGROUNDS.has(background)) {
    return { ok: false, error: "不支持的背景设置。" };
  }

  if (model === "gpt-image-2" && background === "transparent") {
    return { ok: false, error: "gpt-image-2 当前不支持透明背景，请选择 auto 或 opaque。" };
  }

  const moderation = String(fields?.moderation || "auto");
  if (!MODERATION.has(moderation)) {
    return { ok: false, error: "不支持的内容过滤设置。" };
  }

  const count = Number(fields?.n || 1);
  if (!Number.isInteger(count) || count < 1 || count > 4) {
    return { ok: false, error: "一次最多生成 4 张图片。" };
  }

  const compression = Number(fields?.output_compression ?? 80);
  if (!Number.isInteger(compression) || compression < 0 || compression > 100) {
    return { ok: false, error: "压缩率需要在 0 到 100 之间。" };
  }

  const aliasParse = parseReferenceAliases(fields?.reference_aliases);
  if (!aliasParse.ok) {
    return aliasParse;
  }

  const usedAliases = new Set();
  const referenceImages = files.filter((file) =>
    file.fieldName === "reference_images" || file.fieldName === "image" || file.fieldName === "image[]"
  ).map((file, index) => {
    const explicitAlias = aliasParse.value[index] || "";
    const fallbackAlias = makeUniqueReferenceAlias(defaultReferenceAlias(file.filename, index), usedAliases);
    const alias = explicitAlias || fallbackAlias;
    usedAliases.add(alias.toLowerCase());
    return {
      ...file,
      source: "upload",
      alias
    };
  });

  const imageValidation = validateReferenceImages(referenceImages);
  if (!imageValidation.ok) {
    return imageValidation;
  }

  const aliasValidation = validateReferenceAliases(referenceImages);
  if (!aliasValidation.ok) {
    return aliasValidation;
  }

  return {
    ok: true,
    value: {
      prompt,
      model,
      size,
      quality,
      output_format: outputFormat,
      background,
      moderation,
      n: count,
      output_compression: compression,
      referenceImages
    }
  };
}

function validateFillBackgroundPayload(fields, files) {
  const prompt = String(fields?.prompt || "").trim();
  if (!prompt) {
    return { ok: false, error: "请输入 GPT 补洞提示词。" };
  }

  if (prompt.length > 4000) {
    return { ok: false, error: "GPT 补洞提示词太长，请控制在 4000 个字符以内。" };
  }

  const model = String(fields?.model || "gpt-image-2");
  if (!IMAGE_MODELS.has(model)) {
    return { ok: false, error: "不支持的图像模型。" };
  }

  const quality = String(fields?.quality || "medium");
  if (!QUALITIES.has(quality)) {
    return { ok: false, error: "不支持的质量设置。" };
  }

  const image = files.find((file) =>
    file.fieldName === "image" || file.fieldName === "image[]" || file.fieldName === "source"
  );
  const mask = files.find((file) => file.fieldName === "mask");

  if (!image || !mask) {
    return { ok: false, error: "需要同时上传原图和 mask。" };
  }

  if (image.buffer.length > MAX_REFERENCE_IMAGE_BYTES || mask.buffer.length > MAX_REFERENCE_IMAGE_BYTES) {
    return { ok: false, error: "原图和 mask 均不能超过 50MB。" };
  }

  if (image.contentType !== "image/png" || mask.contentType !== "image/png") {
    return { ok: false, error: "GPT mask 编辑要求原图和 mask 使用 PNG，并且 mask 带 alpha 通道。" };
  }

  return {
    ok: true,
    value: {
      prompt: buildMaskInpaintPrompt(prompt),
      model,
      quality,
      image,
      mask
    }
  };
}

function buildMaskInpaintPrompt(userPrompt) {
  return [
    "Use the provided alpha mask as the area to edit. Change only the masked region.",
    "Preserve all unmasked pixels, camera perspective, lighting, color, texture, and composition as closely as possible.",
    "For object removal, fill the removed area naturally so the final image looks like the element was never there.",
    "",
    userPrompt
  ].join("\n");
}

function parseReferenceAliases(rawValue) {
  if (rawValue === undefined || rawValue === null || String(rawValue).trim() === "") {
    return { ok: true, value: [] };
  }

  try {
    const parsed = JSON.parse(String(rawValue));
    const items = Array.isArray(parsed) ? parsed : [];
    return {
      ok: true,
      value: items.map((item) => {
        if (typeof item === "string") {
          return normalizeReferenceAlias(item);
        }
        return normalizeReferenceAlias(item?.alias || item?.name || "");
      })
    };
  } catch {
    return { ok: false, error: "参考图别名数据格式不正确。" };
  }
}

function normalizeReferenceAlias(value) {
  return String(value || "")
    .replace(/^@+/, "")
    .replace(/\s+/g, "")
    .replace(/[，。,.!?！？、；;：:"'“”‘’（）()【】\[\]{}<>《》]/g, "")
    .slice(0, 60);
}

function defaultReferenceAlias(filename, index) {
  const stem = String(filename || "")
    .replace(/\.[^.]+$/, "")
    .trim();
  return normalizeReferenceAlias(stem) || `参考图${index + 1}`;
}

function makeUniqueReferenceAlias(baseAlias, usedAliases) {
  const base = normalizeReferenceAlias(baseAlias) || "参考图";
  let candidate = base;
  let suffix = 2;

  while (usedAliases.has(candidate.toLowerCase())) {
    candidate = `${base}${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function validateReferenceAliases(referenceImages) {
  const seen = new Map();

  for (const image of referenceImages) {
    if (!image.alias) {
      continue;
    }

    const key = image.alias.toLowerCase();
    if (seen.has(key)) {
      return { ok: false, error: `参考图别名不能重复：@${image.alias}。请给每张图一个不同名字。` };
    }
    seen.set(key, image);
  }

  return { ok: true };
}

function validateReferenceImages(files) {
  if (files.length > MAX_REFERENCE_IMAGES) {
    return { ok: false, error: `参考图最多上传 ${MAX_REFERENCE_IMAGES} 张。` };
  }

  for (const file of files) {
    if (!file.buffer.length) {
      return { ok: false, error: "参考图文件为空。" };
    }

    if (file.buffer.length > MAX_REFERENCE_IMAGE_BYTES) {
      return { ok: false, error: "单张参考图不能超过 50MB。" };
    }

    if (!ALLOWED_IMAGE_TYPES.has(file.contentType)) {
      return { ok: false, error: "参考图只支持 PNG、JPG 或 WebP。" };
    }
  }

  return { ok: true };
}

async function applyPromptImageMentions(value) {
  const mentions = extractPromptMentions(value.prompt);
  const uploadAliases = new Map(
    value.referenceImages
      .filter((image) => image.alias)
      .map((image) => [normalizeReferenceAlias(image.alias).toLowerCase(), image])
  );

  if (mentions.length === 0 && value.referenceImages.length === 0) {
    return {
      ok: true,
      value: {
        ...value,
        mentionReferences: []
      }
    };
  }

  let imagesByFilename = null;
  const mentionFiles = [];
  const missing = [];
  const unknown = [];
  const seen = new Set();

  for (const mention of mentions) {
    const aliasKey = normalizeReferenceAlias(mention.name).toLowerCase();
    if (aliasKey && uploadAliases.has(aliasKey)) {
      continue;
    }

    if (!isImageFilenameMention(mention.name)) {
      if (!seen.has(`unknown:${mention.name}`)) {
        unknown.push(mention.name);
        seen.add(`unknown:${mention.name}`);
      }
      continue;
    }

    if (!imagesByFilename) {
      const manifest = await readGeneratedManifest();
      imagesByFilename = new Map(
        manifest.images.map((image) => [String(image.filename || "").toLowerCase(), image])
      );
    }

    const key = mention.name.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);

    const image = imagesByFilename.get(key);
    if (!image) {
      missing.push(mention.name);
      continue;
    }

    const file = await readGeneratedImageReference(image);
    if (!file.ok) {
      missing.push(mention.name);
      continue;
    }

    mentionFiles.push({
      ...file.value,
      source: "saved",
      alias: mention.name
    });
  }

  if (unknown.length > 0) {
    return {
      ok: false,
      error: `找不到这些 @引用：${unknown.join("、")}。请确认它们是上传参考图的别名，或是 generated 里自动保存的图片文件名。`
    };
  }

  if (missing.length > 0) {
    return {
      ok: false,
      error: `找不到这些 @参考图：${missing.join("、")}。请确认它们已经在 generated 里自动保存。`
    };
  }

  const referenceImages = [...value.referenceImages, ...mentionFiles];
  const imageValidation = validateReferenceImages(referenceImages);
  if (!imageValidation.ok) {
    return imageValidation;
  }

  return {
    ok: true,
    value: {
      ...value,
      prompt: buildReferenceAwarePrompt(value.prompt, referenceImages),
      originalPrompt: value.prompt,
      referenceImages,
      mentionReferences: buildPromptReferenceSummaries(referenceImages)
    }
  };
}

function extractPromptMentions(prompt) {
  const pattern = /@([^@\s，。,.!?！？、；;：:"'“”‘’（）()【】\[\]{}<>《》]+)/g;
  const mentions = [];
  let match;

  while ((match = pattern.exec(prompt)) !== null) {
    const name = String(match[1] || "").trim();
    if (!name) {
      continue;
    }
    mentions.push({
      raw: match[0],
      name,
      index: match.index
    });
  }

  return mentions;
}

function isImageFilenameMention(value) {
  return /\.(?:png|jpe?g|webp)$/i.test(String(value || ""));
}

function buildReferenceAwarePrompt(prompt, referenceImages) {
  if (referenceImages.length === 0) {
    return prompt;
  }

  const lines = referenceImages.map((image, index) => {
    const marker = image.alias ? `@${image.alias}` : `第${index + 1}张参考图`;
    const source = image.source === "saved" ? "自动保存图片" : "上传参考图";
    const filename = image.filename ? `（${image.filename}）` : "";
    return `${index + 1}. ${marker} = 第${index + 1}张${source}${filename}`;
  });

  return [
    "重要参考图映射：用户提示词中的 @名称 必须按下面的图片对应关系理解，不要混淆不同人物、背景或物体。",
    "当提示词写 @某个名字 时，只指向对应编号的参考图。",
    ...lines,
    "",
    "用户提示词：",
    prompt
  ].join("\n");
}

function buildPromptReferenceSummaries(referenceImages) {
  return referenceImages.map((image, index) => ({
    index: index + 1,
    source: image.source || "upload",
    alias: image.alias || null,
    filename: image.filename || null,
    url: image.url || null,
    path: image.path || null,
    size: image.size || null,
    quality: image.quality || null,
    model: image.model || null
  }));
}

async function readGeneratedImageReference(image) {
  if (!image?.path || !image?.filename) {
    return { ok: false };
  }

  const filePath = normalize(resolve(image.path));
  if (filePath !== generatedDir && !filePath.startsWith(`${generatedDir}/`)) {
    return { ok: false };
  }

  const contentType = imageContentType(filePath);
  if (!ALLOWED_IMAGE_TYPES.has(contentType)) {
    return { ok: false };
  }

  try {
    const buffer = await readFile(filePath);
    return {
      ok: true,
      value: {
        fieldName: "image[]",
        filename: image.filename,
        contentType,
        buffer,
        source: "mention",
        path: image.path,
        url: image.url
      }
    };
  } catch {
    return { ok: false };
  }
}

function imageContentType(filePath) {
  const extension = extname(filePath).toLowerCase();
  if (extension === ".jpg" || extension === ".jpeg") {
    return "image/jpeg";
  }
  if (extension === ".webp") {
    return "image/webp";
  }
  return "image/png";
}

function buildOpenAIJsonRequest(value) {
  const body = {
    model: value.model,
    prompt: value.prompt,
    n: value.n,
    size: value.size,
    quality: value.quality,
    output_format: value.output_format,
    background: value.background,
    moderation: value.moderation
  };

  if (value.output_format === "jpeg" || value.output_format === "webp") {
    body.output_compression = value.output_compression;
  }

  return body;
}

function buildOpenAIMultipartRequest(value) {
  const form = new FormData();
  const body = buildOpenAIJsonRequest(value);

  for (const [key, fieldValue] of Object.entries(body)) {
    form.append(key, String(fieldValue));
  }

  for (const image of value.referenceImages) {
    form.append(
      "image[]",
      new File([image.buffer], image.filename || "reference.png", {
        type: image.contentType
      })
    );
  }

  return form;
}

function buildOpenAIFillRequest(value) {
  const form = new FormData();
  form.append("model", value.model);
  form.append("prompt", value.prompt);
  form.append("quality", value.quality);
  form.append("size", "auto");
  form.append("output_format", "png");
  form.append("background", "auto");
  form.append("moderation", "auto");
  form.append(
    "image[]",
    new File([value.image.buffer], value.image.filename || "source.png", {
      type: "image/png"
    })
  );
  form.append(
    "mask",
    new File([value.mask.buffer], value.mask.filename || "mask.png", {
      type: "image/png"
    })
  );
  return form;
}

function isValidSize(size, model) {
  if (BASE_SIZES.has(size)) {
    return true;
  }

  if (model !== "gpt-image-2") {
    return false;
  }

  const match = size.match(/^(\d{3,4})x(\d{3,4})$/);
  if (!match) {
    return false;
  }

  const width = Number(match[1]);
  const height = Number(match[2]);
  const longEdge = Math.max(width, height);
  const shortEdge = Math.min(width, height);
  const pixels = width * height;

  return (
    width % 16 === 0 &&
    height % 16 === 0 &&
    longEdge <= 3840 &&
    longEdge / shortEdge <= 3 &&
    pixels >= 655360 &&
    pixels <= 8294400
  );
}

function parseMultipartFormData(body, boundary) {
  const boundaryBuffer = Buffer.from(`--${boundary}`);
  const delimiterBuffer = Buffer.from(`\r\n--${boundary}`);
  const headerSeparator = Buffer.from("\r\n\r\n");
  const fields = {};
  const files = [];
  let position = body.indexOf(boundaryBuffer);

  while (position !== -1) {
    position += boundaryBuffer.length;

    if (body[position] === 45 && body[position + 1] === 45) {
      break;
    }

    if (body[position] === 13 && body[position + 1] === 10) {
      position += 2;
    }

    const headerEnd = body.indexOf(headerSeparator, position);
    if (headerEnd === -1) {
      break;
    }

    const rawHeaders = body.slice(position, headerEnd).toString("utf8");
    const contentStart = headerEnd + headerSeparator.length;
    const nextBoundary = body.indexOf(delimiterBuffer, contentStart);
    if (nextBoundary === -1) {
      break;
    }

    const content = body.slice(contentStart, nextBoundary);
    const part = parsePartHeaders(rawHeaders);

    if (part.name) {
      if (part.filename) {
        files.push({
          fieldName: part.name,
          filename: sanitizeFilename(part.filename),
          contentType: part.contentType || "application/octet-stream",
          buffer: content
        });
      } else {
        fields[part.name] = content.toString("utf8");
      }
    }

    position = nextBoundary + 2;
  }

  return { fields, files };
}

function parsePartHeaders(rawHeaders) {
  const lines = rawHeaders.split("\r\n");
  const result = {};

  for (const line of lines) {
    const separator = line.indexOf(":");
    if (separator === -1) {
      continue;
    }

    const name = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (name === "content-disposition") {
      const nameMatch = value.match(/name="([^"]+)"/);
      const filenameMatch = value.match(/filename="([^"]*)"/);
      result.name = nameMatch?.[1] || "";
      result.filename = filenameMatch?.[1] || "";
    }

    if (name === "content-type") {
      result.contentType = value.toLowerCase();
    }
  }

  return result;
}

function getMultipartBoundary(contentType) {
  const match = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  return match?.[1] || match?.[2] || "";
}

function sanitizeFilename(filename) {
  return filename.replace(/[^\w.\- ]+/g, "_").slice(0, 160) || "reference.png";
}

async function saveGeneratedImages({ images, request, mode, outputFormat, requestId }) {
  const savedAt = new Date();
  const day = savedAt.toISOString().slice(0, 10);
  const dayDir = resolve(generatedDir, day);
  await mkdir(dayDir, { recursive: true });

  const savedImages = [];
  for (const [index, image] of images.entries()) {
    const buffer = Buffer.from(image.b64, "base64");
    const filename = buildGeneratedFilename({
      date: savedAt,
      model: request.model,
      size: request.size,
      quality: request.quality,
      index,
      outputFormat
    });
    const filePath = resolve(dayDir, filename);

    if (!filePath.startsWith(`${dayDir}/`)) {
      throw new Error("Invalid generated file path");
    }

    await writeFile(filePath, buffer);

    const url = `/generated/${day}/${filename}`;
    savedImages.push({
      filename,
      url,
      path: filePath,
      bytes: buffer.length,
      format: outputFormat,
      createdAt: savedAt.toISOString(),
      model: request.model,
      size: request.size,
      width: parseImageWidth(request.size),
      height: parseImageHeight(request.size),
      quality: request.quality,
      mode,
      referenceImageCount: request.referenceImages.length,
      requestId: requestId || null,
      revisedPrompt: image.revisedPrompt || null
    });
  }

  await appendGeneratedManifest(savedImages, request.originalPrompt || request.prompt);
  return savedImages;
}

function buildGeneratedFilename({ date, model, size, quality, index, outputFormat }) {
  const stamp = date.toISOString().replace(/[:.]/g, "-");
  const safeModel = safeFilenamePart(model);
  const safeSize = safeFilenamePart(size);
  const safeQuality = safeFilenamePart(quality);
  const extension = outputFormat === "jpeg" ? "jpg" : outputFormat;
  return `${stamp}_${safeModel}_${safeSize}_${safeQuality}_${index + 1}.${extension}`;
}

function safeFilenamePart(value) {
  return String(value || "image").replace(/[^a-zA-Z0-9_-]+/g, "_").slice(0, 80);
}

function parseImageWidth(size) {
  const match = String(size || "").match(/^(\d+)x(\d+)$/);
  return match ? Number(match[1]) : null;
}

function parseImageHeight(size) {
  const match = String(size || "").match(/^(\d+)x(\d+)$/);
  return match ? Number(match[2]) : null;
}

async function appendGeneratedManifest(savedImages, prompt) {
  generatedManifestQueue = generatedManifestQueue.then(async () => {
    const manifest = await readGeneratedManifest();
    const entries = savedImages.map((image) => ({
      ...image,
      prompt: prompt.slice(0, 500)
    }));
    const next = {
      version: 1,
      updatedAt: new Date().toISOString(),
      images: [...entries, ...manifest.images].slice(0, 500)
    };
    await writeGeneratedManifest(next);
  });

  await generatedManifestQueue;
}

async function readGeneratedManifest() {
  try {
    const raw = await readFile(generatedManifestPath, "utf8");
    const manifest = JSON.parse(raw);
    return {
      version: 1,
      updatedAt: manifest?.updatedAt || "",
      images: Array.isArray(manifest?.images) ? manifest.images : []
    };
  } catch {
    return {
      version: 1,
      updatedAt: "",
      images: []
    };
  }
}

async function writeGeneratedManifest(manifest) {
  await mkdir(generatedDir, { recursive: true });
  const tempPath = `${generatedManifestPath}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  await rename(tempPath, generatedManifestPath);
}

async function recordSpend(entryInput) {
  const entry = buildSpendEntry(entryInput);

  spendWriteQueue = spendWriteQueue.then(async () => {
    const stats = await readSpendStats();
    const nextStats = applySpendEntry(stats, entry);
    await writeSpendStats(nextStats);
  });

  await spendWriteQueue;
  return entry;
}

function buildSpendEntry({ usage, request, mode, images, requestId, exchange }) {
  const cost = calculateActualSpend(usage, request.model);
  const usd = cost.usd;
  const jpy = usd * exchange.rate;

  return {
    id: requestId || `local_${Date.now()}`,
    timestamp: new Date().toISOString(),
    model: request.model,
    mode,
    quality: request.quality,
    size: request.size,
    images,
    referenceImages: request.referenceImages.length,
    usd,
    jpy,
    usdJpy: exchange.rate,
    costSource: cost.source,
    inputTokens: usage?.input_tokens ?? 0,
    outputTokens: usage?.output_tokens ?? 0,
    totalTokens: usage?.total_tokens ?? 0,
    textInputTokens: usage?.input_tokens_details?.text_tokens ?? 0,
    imageInputTokens: usage?.input_tokens_details?.image_tokens ?? 0,
    imageOutputTokens: usage?.output_tokens_details?.image_tokens ?? usage?.output_tokens ?? 0,
    requestId: requestId || null
  };
}

function calculateActualSpend(usage, model) {
  const prices = PRICE_BOOK.models[model];
  if (!usage || !prices) {
    return { usd: 0, source: "unavailable" };
  }

  const textTokens = usage.input_tokens_details?.text_tokens ?? usage.input_tokens ?? 0;
  const imageInputTokens = usage.input_tokens_details?.image_tokens ?? 0;
  const imageOutputTokens = usage.output_tokens_details?.image_tokens ?? usage.output_tokens ?? 0;
  const usd =
    (textTokens * prices.textInput) / 1_000_000 +
    (imageInputTokens * prices.imageInput) / 1_000_000 +
    (imageOutputTokens * prices.imageOutput) / 1_000_000;

  return { usd, source: "usage" };
}

async function readSpendStats() {
  try {
    const raw = await readFile(spendStatsPath, "utf8");
    return normalizeSpendStats(JSON.parse(raw));
  } catch {
    return createEmptySpendStats();
  }
}

async function writeSpendStats(stats) {
  const tempPath = `${spendStatsPath}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(stats, null, 2)}\n`, "utf8");
  await rename(tempPath, spendStatsPath);
}

function createEmptySpendStats() {
  const now = new Date().toISOString();
  return {
    version: 1,
    startedAt: now,
    updatedAt: now,
    totals: {
      requests: 0,
      images: 0,
      usd: 0,
      jpy: 0,
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
      referenceImages: 0
    },
    byModel: {},
    byMode: {
      generate: createSpendBucket(),
      edit: createSpendBucket()
    },
    recent: []
  };
}

function normalizeSpendStats(stats) {
  const empty = createEmptySpendStats();
  return {
    ...empty,
    ...stats,
    totals: {
      ...empty.totals,
      ...(stats?.totals || {})
    },
    byModel: stats?.byModel || {},
    byMode: {
      ...empty.byMode,
      ...(stats?.byMode || {})
    },
    recent: Array.isArray(stats?.recent) ? stats.recent : []
  };
}

function createSpendBucket() {
  return {
    requests: 0,
    images: 0,
    usd: 0,
    jpy: 0,
    inputTokens: 0,
    outputTokens: 0,
    totalTokens: 0
  };
}

function applySpendEntry(stats, entry) {
  const next = normalizeSpendStats(stats);
  next.updatedAt = entry.timestamp;
  addToBucket(next.totals, entry);

  if (!next.byModel[entry.model]) {
    next.byModel[entry.model] = createSpendBucket();
  }
  addToBucket(next.byModel[entry.model], entry);

  if (!next.byMode[entry.mode]) {
    next.byMode[entry.mode] = createSpendBucket();
  }
  addToBucket(next.byMode[entry.mode], entry);

  next.totals.referenceImages += entry.referenceImages;
  next.recent = [entry, ...next.recent].slice(0, 80);
  return next;
}

function addToBucket(bucket, entry) {
  bucket.requests += 1;
  bucket.images += entry.images;
  bucket.usd += entry.usd;
  bucket.jpy += entry.jpy;
  bucket.inputTokens += entry.inputTokens;
  bucket.outputTokens += entry.outputTokens;
  bucket.totalTokens += entry.totalTokens;
}

async function getUsdJpyRate() {
  const envRate = Number(process.env.USD_JPY_RATE);
  if (Number.isFinite(envRate) && envRate > 0) {
    return {
      rate: envRate,
      source: "env",
      updatedAt: new Date().toISOString()
    };
  }

  const now = Date.now();
  if (exchangeRateCache && now - exchangeRateCache.fetchedAt < 60 * 60 * 1000) {
    return exchangeRateCache.value;
  }

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", {
      signal: AbortSignal.timeout(2500)
    });
    const data = await response.json();
    const rate = Number(data?.rates?.JPY);

    if (response.ok && Number.isFinite(rate) && rate > 0) {
      exchangeRateCache = {
        fetchedAt: now,
        value: {
          rate,
          source: "open.er-api.com",
          updatedAt: data?.time_last_update_utc || new Date().toISOString()
        }
      };
      return exchangeRateCache.value;
    }
  } catch {
    // Use a recent fallback when the live FX endpoint is unavailable.
  }

  return {
    rate: DEFAULT_USD_JPY,
    source: "fallback",
    updatedAt: new Date().toISOString()
  };
}

async function serveStatic(req, res, pathname) {
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = normalize(join(publicDir, safePath));

  if (filePath !== publicDir && !filePath.startsWith(`${publicDir}/`)) {
    return sendText(res, 403, "Forbidden");
  }

  try {
    const content = await readFile(filePath);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    if (req.method !== "HEAD") {
      res.end(content);
    } else {
      res.end();
    }
  } catch {
    sendText(res, 404, "Not found");
  }
}

async function serveGenerated(req, res, pathname) {
  const relative = decodeURIComponent(pathname.replace(/^\/generated\/?/, ""));
  const filePath = normalize(join(generatedDir, relative));

  if (filePath !== generatedDir && !filePath.startsWith(`${generatedDir}/`)) {
    return sendText(res, 403, "Forbidden");
  }

  try {
    const content = await readFile(filePath);
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    if (req.method !== "HEAD") {
      res.end(content);
    } else {
      res.end();
    }
  } catch {
    sendText(res, 404, "Not found");
  }
}

function readRawBody(req, limit) {
  return new Promise((resolveBody, rejectBody) => {
    const chunks = [];
    let size = 0;

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        req.destroy();
        rejectBody(new Error("Request body too large"));
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => resolveBody(Buffer.concat(chunks)));
    req.on("error", rejectBody);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, text) {
  res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(text);
}

function loadEnvFile(envPath) {
  if (!existsSync(envPath)) {
    return;
  }

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

const elements = {
  keyStatus: document.querySelector("#keyStatus"),
  languageSelect: document.querySelector("#languageSelect"),
  sourceImage: document.querySelector("#sourceImage"),
  uploadBox: document.querySelector(".upload-box"),
  layerName: document.querySelector("#layerName"),
  layerCategory: document.querySelector("#layerCategory"),
  brushSize: document.querySelector("#brushSize"),
  brushSizeValue: document.querySelector("#brushSizeValue"),
  magicTolerance: document.querySelector("#magicTolerance"),
  magicToleranceValue: document.querySelector("#magicToleranceValue"),
  magicGrow: document.querySelector("#magicGrow"),
  magicGrowValue: document.querySelector("#magicGrowValue"),
  undoSelectionButton: document.querySelector("#undoSelectionButton"),
  redoSelectionButton: document.querySelector("#redoSelectionButton"),
  invertSelectionButton: document.querySelector("#invertSelectionButton"),
  cleanupSelectionButton: document.querySelector("#cleanupSelectionButton"),
  imageModel: document.querySelector("#imageModel"),
  imageQuality: document.querySelector("#imageQuality"),
  inpaintPrompt: document.querySelector("#inpaintPrompt"),
  peelQuickButton: document.querySelector("#peelQuickButton"),
  peelAiButton: document.querySelector("#peelAiButton"),
  peelOnlyButton: document.querySelector("#peelOnlyButton"),
  healButton: document.querySelector("#healButton"),
  exportPsdButton: document.querySelector("#exportPsdButton"),
  exportPngButton: document.querySelector("#exportPngButton"),
  clearMaskButton: document.querySelector("#clearMaskButton"),
  resetButton: document.querySelector("#resetButton"),
  message: document.querySelector("#message"),
  canvasStage: document.querySelector("#canvasStage"),
  dropHint: document.querySelector("#dropHint"),
  backgroundCanvas: document.querySelector("#backgroundCanvas"),
  selectionCanvas: document.querySelector("#selectionCanvas"),
  imageTitle: document.querySelector("#imageTitle"),
  canvasMeta: document.querySelector("#canvasMeta"),
  selectionStats: document.querySelector("#selectionStats"),
  layerList: document.querySelector("#layerList"),
  layerCount: document.querySelector("#layerCount")
};

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    eyebrow: "Progressive Layer Lab",
    language: "语言",
    sourceImage: "原图",
    chooseImage: "选择或拖入图片",
    imageHint: "PNG / JPG / WebP，建议先用 1K 到 2K 尺寸做分层",
    promo: "Want more? Follow me",
    layerName: "图层名",
    semanticLevel: "语义层级",
    catDistractor: "干扰元素",
    catSecondary: "次要物品",
    catPrimary: "人物/主体",
    catText: "文字/标识",
    catScene: "场景结构",
    catBackground: "背景",
    selection: "选择",
    brush: "画笔",
    erase: "擦除",
    rect: "矩形",
    magic: "魔术棒",
    undo: "撤销上一步",
    redo: "重做",
    invert: "反选",
    cleanup: "填洞/平滑",
    brushSize: "画笔大小",
    magicTolerance: "魔术棒容差",
    magicGrow: "魔术棒扩边",
    peel: "剥离",
    peelQuick: "剥离 + 快速补洞",
    peelAi: "剥离 + GPT补洞",
    peelOnly: "仅剥离成图层",
    quickHeal: "快速补当前选择",
    inpaintPrompt: "GPT补洞提示词",
    imageModel: "图像模型",
    quality: "质量",
    export: "导出",
    exportPsd: "导出 PSD",
    exportPng: "导出合成 PNG",
    clearSelection: "清空选择",
    resetCanvas: "重置画布",
    waitingImage: "等待图片",
    notLoaded: "未加载",
    dropStart: "拖入图片开始",
    dropHint: "用选择工具圈出人物、物品、文字或场景区域",
    layers: "图层",
    emptyLayer: "剥离后的元素会保留在这里，并在 PSD 中作为独立图层导出。",
    readImage: "读取一张图片后即可开始分层。",
    keyReady: "已配置",
    keyMissing: "缺少 Key",
    keyOffline: "离线",
    selectionStats: "选择 {count} px",
    topLayer: "顶部",
    layerOrder: "第 {index} 层",
    show: "显示",
    hide: "隐藏",
    moveUp: "上移",
    moveDown: "下移",
    delete: "删除"
  },
  en: {
    htmlLang: "en",
    eyebrow: "Progressive Layer Lab",
    language: "Language",
    sourceImage: "Source",
    chooseImage: "Choose or drop an image",
    imageHint: "PNG / JPG / WebP. 1K to 2K images are best for layering.",
    promo: "Want more? Follow me",
    layerName: "Layer name",
    semanticLevel: "Semantic level",
    catDistractor: "Distractor",
    catSecondary: "Secondary object",
    catPrimary: "Person / subject",
    catText: "Text / logo",
    catScene: "Scene structure",
    catBackground: "Background",
    selection: "Selection",
    brush: "Brush",
    erase: "Erase",
    rect: "Rectangle",
    magic: "Magic wand",
    undo: "Undo",
    redo: "Redo",
    invert: "Invert",
    cleanup: "Fill holes / smooth",
    brushSize: "Brush size",
    magicTolerance: "Magic tolerance",
    magicGrow: "Magic grow",
    peel: "Peel",
    peelQuick: "Peel + quick fill",
    peelAi: "Peel + GPT fill",
    peelOnly: "Peel to layer only",
    quickHeal: "Quick fill selection",
    inpaintPrompt: "GPT fill prompt",
    imageModel: "Image model",
    quality: "Quality",
    export: "Export",
    exportPsd: "Export PSD",
    exportPng: "Export composite PNG",
    clearSelection: "Clear selection",
    resetCanvas: "Reset canvas",
    waitingImage: "Waiting for image",
    notLoaded: "Not loaded",
    dropStart: "Drop an image to start",
    dropHint: "Select people, objects, text, or scene areas with the tools.",
    layers: "Layers",
    emptyLayer: "Peeled elements stay here and export as independent PSD layers.",
    readImage: "Load an image to start layering.",
    keyReady: "Ready",
    keyMissing: "No key",
    keyOffline: "Offline",
    selectionStats: "Selection {count} px",
    topLayer: "Top",
    layerOrder: "Layer {index}",
    show: "Show",
    hide: "Hide",
    moveUp: "Up",
    moveDown: "Down",
    delete: "Delete"
  },
  ja: {
    htmlLang: "ja",
    eyebrow: "Progressive Layer Lab",
    language: "言語",
    sourceImage: "元画像",
    chooseImage: "画像を選択またはドロップ",
    imageHint: "PNG / JPG / WebP。レイヤー作成には 1K から 2K 推奨。",
    promo: "Want more? Follow me",
    layerName: "レイヤー名",
    semanticLevel: "意味レベル",
    catDistractor: "不要要素",
    catSecondary: "補助オブジェクト",
    catPrimary: "人物 / 主役",
    catText: "文字 / ロゴ",
    catScene: "シーン構造",
    catBackground: "背景",
    selection: "選択",
    brush: "ブラシ",
    erase: "消しゴム",
    rect: "矩形",
    magic: "自動選択",
    undo: "元に戻す",
    redo: "やり直す",
    invert: "反転",
    cleanup: "穴埋め / 平滑化",
    brushSize: "ブラシサイズ",
    magicTolerance: "自動選択の許容差",
    magicGrow: "選択範囲を拡張",
    peel: "切り出し",
    peelQuick: "切り出し + 簡易補完",
    peelAi: "切り出し + GPT補完",
    peelOnly: "レイヤー化のみ",
    quickHeal: "選択範囲を簡易補完",
    inpaintPrompt: "GPT補完プロンプト",
    imageModel: "画像モデル",
    quality: "品質",
    export: "書き出し",
    exportPsd: "PSDを書き出し",
    exportPng: "合成PNGを書き出し",
    clearSelection: "選択をクリア",
    resetCanvas: "キャンバスをリセット",
    waitingImage: "画像待ち",
    notLoaded: "未読み込み",
    dropStart: "画像をドロップして開始",
    dropHint: "人物、物、文字、シーン領域をツールで選択します。",
    layers: "レイヤー",
    emptyLayer: "切り出した要素はここに残り、PSD の独立レイヤーとして書き出されます。",
    readImage: "画像を読み込むとレイヤー作成を開始できます。",
    keyReady: "設定済み",
    keyMissing: "キーなし",
    keyOffline: "オフライン",
    selectionStats: "選択 {count} px",
    topLayer: "最上部",
    layerOrder: "{index} 番目",
    show: "表示",
    hide: "非表示",
    moveUp: "上へ",
    moveDown: "下へ",
    delete: "削除"
  }
};

const state = {
  imageLoaded: false,
  imageName: "image",
  tool: "brush",
  isDrawing: false,
  startPoint: null,
  lastPoint: null,
  selectionSnapshot: null,
  originalCanvas: document.createElement("canvas"),
  layers: [],
  history: [],
  redo: []
};

const MASK_COLOR = "rgba(23, 107, 135, 0.46)";
const MASK_THRESHOLD = 18;
const HISTORY_LIMIT = 24;
const SUPPORTED_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);

const backgroundCtx = elements.backgroundCanvas.getContext("2d", { willReadFrequently: true });
const selectionCtx = elements.selectionCanvas.getContext("2d", { willReadFrequently: true });

elements.backgroundCanvas.hidden = true;
elements.selectionCanvas.hidden = true;

checkHealth();
renderLayers();
syncRangeLabels();
applyLanguage(getInitialLanguage());
setMessage(t("readImage"));

elements.languageSelect.addEventListener("change", () => {
  applyLanguage(elements.languageSelect.value);
  localStorage.setItem("image2:language", elements.languageSelect.value);
  updateSelectionStats();
  renderLayers();
});

elements.sourceImage.addEventListener("change", async () => {
  const file = elements.sourceImage.files?.[0];
  if (file) {
    await loadSourceImage(file);
  }
  elements.sourceImage.value = "";
});

elements.uploadBox.addEventListener("dragover", (event) => {
  event.preventDefault();
  elements.uploadBox.classList.add("dragging");
});

elements.uploadBox.addEventListener("dragleave", () => {
  elements.uploadBox.classList.remove("dragging");
});

elements.uploadBox.addEventListener("drop", async (event) => {
  event.preventDefault();
  elements.uploadBox.classList.remove("dragging");
  await loadFirstImageFromDrop(event.dataTransfer?.files || []);
});

elements.canvasStage.addEventListener("dragover", (event) => {
  event.preventDefault();
  elements.canvasStage.classList.add("dragging");
});

elements.canvasStage.addEventListener("dragleave", () => {
  elements.canvasStage.classList.remove("dragging");
});

elements.canvasStage.addEventListener("drop", async (event) => {
  event.preventDefault();
  elements.canvasStage.classList.remove("dragging");
  await loadFirstImageFromDrop(event.dataTransfer?.files || []);
});

document.querySelectorAll("[data-tool]").forEach((button) => {
  button.addEventListener("click", () => {
    state.tool = button.dataset.tool || "brush";
    document.querySelectorAll("[data-tool]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});

elements.brushSize.addEventListener("input", syncRangeLabels);
elements.magicTolerance.addEventListener("input", syncRangeLabels);
elements.magicGrow.addEventListener("input", syncRangeLabels);
elements.undoSelectionButton.addEventListener("click", undoStep);
elements.redoSelectionButton.addEventListener("click", redoStep);
elements.invertSelectionButton.addEventListener("click", invertSelection);
elements.cleanupSelectionButton.addEventListener("click", cleanupSelection);
elements.peelQuickButton.addEventListener("click", () => void peelAndQuickHeal());
elements.peelAiButton.addEventListener("click", () => void peelAndAiHeal());
elements.peelOnlyButton.addEventListener("click", () => peelSelection({ clearAfter: false, recordHistory: true }));
elements.healButton.addEventListener("click", () => quickHealSelection({ clearAfter: false, recordHistory: true }));
elements.exportPsdButton.addEventListener("click", exportPsd);
elements.exportPngButton.addEventListener("click", exportCompositePng);
elements.clearMaskButton.addEventListener("click", () => clearSelection({ recordHistory: true }));
elements.resetButton.addEventListener("click", resetCanvas);

elements.selectionCanvas.addEventListener("pointerdown", onPointerDown);
elements.selectionCanvas.addEventListener("pointermove", onPointerMove);
elements.selectionCanvas.addEventListener("pointerup", onPointerUp);
elements.selectionCanvas.addEventListener("pointercancel", onPointerUp);
elements.selectionCanvas.addEventListener("pointerleave", onPointerUp);

window.addEventListener("keydown", (event) => {
  const isUndoKey = event.key.toLowerCase() === "z" && (event.metaKey || event.ctrlKey);
  if (!isUndoKey) {
    return;
  }

  event.preventDefault();
  if (event.shiftKey) {
    redoStep();
  } else {
    undoStep();
  }
});

function getInitialLanguage() {
  const saved = localStorage.getItem("image2:language");
  if (saved && I18N[saved]) {
    return saved;
  }

  const language = navigator.language.toLowerCase();
  if (language.startsWith("ja")) {
    return "ja";
  }
  if (language.startsWith("zh")) {
    return "zh";
  }
  return "en";
}

function t(key, replacements = {}) {
  const lang = elements.languageSelect?.value || "zh";
  let text = I18N[lang]?.[key] || I18N.zh[key] || key;
  for (const [name, value] of Object.entries(replacements)) {
    text = text.replace(`{${name}}`, String(value));
  }
  return text;
}

function applyLanguage(language) {
  const nextLanguage = I18N[language] ? language : "zh";
  elements.languageSelect.value = nextLanguage;
  document.documentElement.lang = I18N[nextLanguage].htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  if (!state.imageLoaded) {
    elements.imageTitle.textContent = t("waitingImage");
    elements.canvasMeta.textContent = t("notLoaded");
  }

  checkHealth();
}

async function checkHealth() {
  try {
    const response = await fetch("/api/health");
    const data = await response.json();
    elements.keyStatus.textContent = data.hasApiKey ? t("keyReady") : t("keyMissing");
    elements.keyStatus.classList.toggle("ready", data.hasApiKey);
    elements.keyStatus.classList.toggle("missing", !data.hasApiKey);
  } catch {
    elements.keyStatus.textContent = t("keyOffline");
    elements.keyStatus.classList.add("missing");
  }
}

async function loadFirstImageFromDrop(files) {
  const image = Array.from(files).find((file) => SUPPORTED_TYPES.has(file.type));
  if (!image) {
    setMessage("请拖入 PNG、JPG 或 WebP 图片。", true);
    return;
  }
  await loadSourceImage(image);
}

async function loadSourceImage(file) {
  if (!SUPPORTED_TYPES.has(file.type)) {
    setMessage("只支持 PNG、JPG 或 WebP 图片。", true);
    return;
  }

  try {
    const url = URL.createObjectURL(file);
    const image = await loadImage(url);
    URL.revokeObjectURL(url);

    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    setCanvasSize(width, height);

    state.originalCanvas.width = width;
    state.originalCanvas.height = height;
    state.originalCanvas.getContext("2d").drawImage(image, 0, 0, width, height);

    backgroundCtx.clearRect(0, 0, width, height);
    backgroundCtx.drawImage(image, 0, 0, width, height);
    clearSelection({ recordHistory: false });

    state.layers = [];
    state.history = [];
    state.redo = [];
    state.imageLoaded = true;
    state.imageName = file.name.replace(/\.[^.]+$/, "") || "image";
    elements.imageTitle.textContent = file.name;
    elements.canvasMeta.textContent = `${width} x ${height}`;
    elements.dropHint.hidden = true;
    elements.backgroundCanvas.hidden = false;
    elements.selectionCanvas.hidden = false;
    elements.layerName.value = "剥离图层 1";
    renderLayers();
    syncHistoryButtons();
    setMessage("图片已加载。", false, true);
  } catch (error) {
    setMessage(error.message || "图片加载失败。", true);
  }
}

function setCanvasSize(width, height) {
  [elements.backgroundCanvas, elements.selectionCanvas].forEach((canvas) => {
    canvas.width = width;
    canvas.height = height;
  });
}

function onPointerDown(event) {
  if (!state.imageLoaded) {
    return;
  }

  event.preventDefault();
  const point = getCanvasPoint(event);

  if (state.tool === "magic") {
    const snapshot = captureSnapshot("魔术棒选择");
    const mode = event.altKey ? "subtract" : event.shiftKey ? "add" : "replace";
    const result = magicSelect(point.x, point.y, { mode });
    if (result.changed) {
      pushSnapshot(snapshot);
      const action = mode === "add" ? "加选" : mode === "subtract" ? "减选" : "选择";
      const hint = result.transparent && result.ratio > 0.2 ? "已选中透明背景；点反选可得到主体。" : `魔术棒已${action} ${formatPixels(result.pixels)} px。`;
      setMessage(hint, false, true);
    }
    return;
  }

  pushHistory(`${toolLabel(state.tool)}选择`);
  state.isDrawing = true;
  state.startPoint = point;
  state.lastPoint = point;
  elements.selectionCanvas.setPointerCapture(event.pointerId);

  if (state.tool === "rect") {
    state.selectionSnapshot = selectionCtx.getImageData(
      0,
      0,
      elements.selectionCanvas.width,
      elements.selectionCanvas.height
    );
    drawRectSelection(point);
    return;
  }

  drawBrush(point, point);
}

function onPointerMove(event) {
  if (!state.isDrawing || !state.imageLoaded) {
    return;
  }

  const point = getCanvasPoint(event);
  if (state.tool === "rect") {
    drawRectSelection(point);
    return;
  }

  drawBrush(state.lastPoint || point, point);
  state.lastPoint = point;
}

function onPointerUp(event) {
  if (!state.isDrawing) {
    return;
  }

  if (elements.selectionCanvas.hasPointerCapture(event.pointerId)) {
    elements.selectionCanvas.releasePointerCapture(event.pointerId);
  }

  state.isDrawing = false;
  state.selectionSnapshot = null;
  state.startPoint = null;
  state.lastPoint = null;
  updateSelectionStats();
}

function drawBrush(from, to) {
  const size = Number(elements.brushSize.value || 36);
  selectionCtx.save();
  selectionCtx.lineCap = "round";
  selectionCtx.lineJoin = "round";
  selectionCtx.lineWidth = size;
  selectionCtx.globalCompositeOperation = state.tool === "erase" ? "destination-out" : "source-over";
  selectionCtx.strokeStyle = state.tool === "erase" ? "rgba(0, 0, 0, 1)" : MASK_COLOR;
  selectionCtx.beginPath();
  selectionCtx.moveTo(from.x, from.y);
  selectionCtx.lineTo(to.x, to.y);
  selectionCtx.stroke();
  selectionCtx.restore();
}

function drawRectSelection(currentPoint) {
  if (!state.selectionSnapshot || !state.startPoint) {
    return;
  }

  const left = Math.min(state.startPoint.x, currentPoint.x);
  const top = Math.min(state.startPoint.y, currentPoint.y);
  const width = Math.abs(currentPoint.x - state.startPoint.x);
  const height = Math.abs(currentPoint.y - state.startPoint.y);

  selectionCtx.putImageData(state.selectionSnapshot, 0, 0);
  selectionCtx.save();
  selectionCtx.fillStyle = MASK_COLOR;
  selectionCtx.fillRect(left, top, width, height);
  selectionCtx.restore();
}

function magicSelect(x, y, { mode = "replace" } = {}) {
  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const source = backgroundCtx.getImageData(0, 0, width, height).data;
  const existingMask = mode === "replace"
    ? new Uint8Array(width * height)
    : getSelectionMaskArray();
  let deltaMask = new Uint8Array(width * height);
  const seedIndex = (y * width + x) * 4;
  const target = [
    source[seedIndex],
    source[seedIndex + 1],
    source[seedIndex + 2],
    source[seedIndex + 3]
  ];
  const tolerance = Number(elements.magicTolerance.value || 28);
  const grow = Number(elements.magicGrow.value || 0);
  const seedLimit = tolerance * 1.28 + 6;
  const localLimit = tolerance * 1.9 + 10;
  const edgeLimit = tolerance * 2.1 + 30;
  const seedTransparent = target[3] < 96;
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;
  let selectedPixels = 0;

  queue[tail++] = y * width + x;
  visited[y * width + x] = 1;

  while (head < tail) {
    const index = queue[head++];
    const px = index % width;
    const py = Math.floor(index / width);
    const colorIndex = index * 4;
    const alpha = source[colorIndex + 3];
    const distance = colorDistance(source, colorIndex, target);

    if (seedTransparent) {
      if (alpha >= 96) {
        continue;
      }
    } else if (alpha < 32 || distance > seedLimit) {
      continue;
    }

    deltaMask[index] = 1;
    selectedPixels += 1;

    pushNeighbor(px - 1, py, index);
    pushNeighbor(px + 1, py, index);
    pushNeighbor(px, py - 1, index);
    pushNeighbor(px, py + 1, index);
  }

  if (selectedPixels === 0) {
    setMessage("魔术棒没有找到可选区域，请提高一点容差。", true);
    return { changed: false, pixels: 0 };
  }

  if (!seedTransparent && selectedPixels > width * height * 0.62) {
    setMessage("这次魔术棒会选中大半张图，已取消。请降低容差或点在更明确的颜色区域。", true);
    return { changed: false, pixels: 0 };
  }

  if (grow > 0) {
    deltaMask = dilateMask(deltaMask, width, height, grow);
  }
  deltaMask = smoothMask(deltaMask, width, height, 1);

  for (let index = 0; index < existingMask.length; index += 1) {
    if (mode === "subtract" && deltaMask[index]) {
      existingMask[index] = 0;
    } else if (deltaMask[index]) {
      existingMask[index] = 1;
    }
  }

  applySelectionMaskArray(existingMask);
  const nextPixels = countMaskPixels(deltaMask);
  return {
    changed: true,
    pixels: nextPixels,
    transparent: seedTransparent,
    ratio: nextPixels / (width * height)
  };

  function pushNeighbor(nx, ny, fromIndex) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) {
      return;
    }
    const next = ny * width + nx;
    if (visited[next]) {
      return;
    }

    const nextPixel = next * 4;
    const fromPixel = fromIndex * 4;
    if (!seedTransparent) {
      const localDistance = simpleColorDistance(source, fromPixel, nextPixel);
      if (localDistance > localLimit || localDistance > edgeLimit) {
        return;
      }
    }

    visited[next] = 1;
    queue[tail++] = next;
  }
}

function colorDistance(data, index, target) {
  const dr = data[index] - target[0];
  const dg = data[index + 1] - target[1];
  const db = data[index + 2] - target[2];
  const luminance = 0.2126 * dr + 0.7152 * dg + 0.0722 * db;
  const chromaA = dr - dg;
  const chromaB = db - dg;
  return Math.sqrt(
    0.42 * dr * dr +
    0.68 * dg * dg +
    0.42 * db * db +
    0.38 * luminance * luminance +
    0.16 * chromaA * chromaA +
    0.16 * chromaB * chromaB
  );
}

function simpleColorDistance(data, a, b) {
  const dr = data[a] - data[b];
  const dg = data[a + 1] - data[b + 1];
  const db = data[a + 2] - data[b + 2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function getSelectionMaskArray() {
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const data = selectionCtx.getImageData(0, 0, width, height).data;
  const mask = new Uint8Array(width * height);

  for (let index = 0; index < mask.length; index += 1) {
    mask[index] = data[index * 4 + 3] > MASK_THRESHOLD ? 1 : 0;
  }

  return mask;
}

function applySelectionMaskArray(mask) {
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const image = selectionCtx.createImageData(width, height);

  for (let index = 0; index < mask.length; index += 1) {
    if (!mask[index]) {
      continue;
    }
    const pixel = index * 4;
    image.data[pixel] = 23;
    image.data[pixel + 1] = 107;
    image.data[pixel + 2] = 135;
    image.data[pixel + 3] = 118;
  }

  selectionCtx.putImageData(image, 0, 0);
  updateSelectionStats();
}

function dilateMask(mask, width, height, iterations = 1) {
  let current = mask;

  for (let pass = 0; pass < iterations; pass += 1) {
    const next = new Uint8Array(current);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = y * width + x;
        if (current[index]) {
          continue;
        }

        if (
          (x > 0 && current[index - 1]) ||
          (x < width - 1 && current[index + 1]) ||
          (y > 0 && current[index - width]) ||
          (y < height - 1 && current[index + width])
        ) {
          next[index] = 1;
        }
      }
    }
    current = next;
  }

  return current;
}

function erodeMask(mask, width, height, iterations = 1) {
  let current = mask;

  for (let pass = 0; pass < iterations; pass += 1) {
    const next = new Uint8Array(current);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = y * width + x;
        if (!current[index]) {
          continue;
        }

        if (
          x === 0 ||
          y === 0 ||
          x === width - 1 ||
          y === height - 1 ||
          !current[index - 1] ||
          !current[index + 1] ||
          !current[index - width] ||
          !current[index + width]
        ) {
          next[index] = 0;
        }
      }
    }
    current = next;
  }

  return current;
}

function smoothMask(mask, width, height) {
  return erodeMask(dilateMask(mask, width, height, 1), width, height, 1);
}

function countMaskPixels(mask) {
  let count = 0;
  for (let index = 0; index < mask.length; index += 1) {
    if (mask[index]) {
      count += 1;
    }
  }
  return count;
}

function fillMaskHoles(mask, width, height) {
  const outside = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  for (let x = 0; x < width; x += 1) {
    enqueue(x);
    enqueue((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    enqueue(y * width);
    enqueue(y * width + width - 1);
  }

  while (head < tail) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    enqueueNeighbor(x - 1, y);
    enqueueNeighbor(x + 1, y);
    enqueueNeighbor(x, y - 1);
    enqueueNeighbor(x, y + 1);
  }

  const filled = new Uint8Array(mask);
  for (let index = 0; index < filled.length; index += 1) {
    if (!mask[index] && !outside[index]) {
      filled[index] = 1;
    }
  }

  return filled;

  function enqueue(index) {
    if (index < 0 || index >= mask.length || mask[index] || outside[index]) {
      return;
    }
    outside[index] = 1;
    queue[tail++] = index;
  }

  function enqueueNeighbor(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return;
    }
    enqueue(y * width + x);
  }
}

function invertSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  pushHistory("反选");
  const mask = getSelectionMaskArray();
  for (let index = 0; index < mask.length; index += 1) {
    mask[index] = mask[index] ? 0 : 1;
  }
  applySelectionMaskArray(mask);
  setMessage("已反选当前选区。", false, true);
}

function cleanupSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  if (!hasSelection()) {
    setMessage("当前没有可清理的选区。", true);
    return;
  }

  pushHistory("填洞/平滑");
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  let mask = getSelectionMaskArray();
  mask = fillMaskHoles(mask, width, height);
  mask = erodeMask(dilateMask(mask, width, height, 1), width, height, 1);
  applySelectionMaskArray(mask);
  setMessage("已填洞并平滑选区边缘。", false, true);
}

async function peelAndQuickHeal() {
  if (!ensureReadyWithSelection()) {
    return;
  }

  pushHistory("剥离 + 快速补洞");
  const layer = peelSelection({ clearAfter: false, recordHistory: false });
  if (!layer) {
    return;
  }
  quickHealSelection({ clearAfter: true, recordHistory: false });
}

async function peelAndAiHeal() {
  if (!ensureReadyWithSelection()) {
    return;
  }

  pushHistory("剥离 + GPT补洞");
  const layer = peelSelection({ clearAfter: false, recordHistory: false });
  if (!layer) {
    return;
  }
  await aiHealSelection({ clearAfter: true, recordHistory: false });
}

function peelSelection({ clearAfter, recordHistory = false }) {
  if (!ensureReadyWithSelection()) {
    return null;
  }

  if (recordHistory) {
    pushHistory("剥离成图层");
  }

  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const source = state.originalCanvas.getContext("2d").getImageData(0, 0, width, height);
  const mask = selectionCtx.getImageData(0, 0, width, height);
  const layerCanvas = document.createElement("canvas");
  layerCanvas.width = width;
  layerCanvas.height = height;
  const layerCtx = layerCanvas.getContext("2d");
  const output = layerCtx.createImageData(width, height);
  let selectedPixels = 0;

  for (let index = 0; index < mask.data.length; index += 4) {
    const maskAlpha = mask.data[index + 3];
    if (maskAlpha <= MASK_THRESHOLD) {
      continue;
    }

    const alphaScale = Math.min(1, maskAlpha / 118);
    output.data[index] = source.data[index];
    output.data[index + 1] = source.data[index + 1];
    output.data[index + 2] = source.data[index + 2];
    output.data[index + 3] = Math.round(source.data[index + 3] * alphaScale);
    selectedPixels += 1;
  }

  if (selectedPixels === 0) {
    setMessage("当前选择为空。", true);
    return null;
  }

  layerCtx.putImageData(output, 0, 0);
  const name = uniqueLayerName(elements.layerName.value.trim() || "剥离图层");
  const layer = {
    id: crypto.randomUUID(),
    name,
    category: elements.layerCategory.value,
    canvas: layerCanvas,
    visible: true,
    pixels: selectedPixels,
    createdAt: new Date().toISOString()
  };

  state.layers.unshift(layer);
  elements.layerName.value = nextLayerName();
  renderLayers();

  if (clearAfter) {
    clearSelection({ recordHistory: false });
  } else {
    updateSelectionStats(selectedPixels);
  }

  setMessage(`已创建图层：${name}。`, false, true);
  return layer;
}

function quickHealSelection({ clearAfter, recordHistory = false }) {
  if (!ensureReadyWithSelection()) {
    return false;
  }

  if (recordHistory) {
    pushHistory("快速补洞");
  }

  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const maskCanvas = createBinaryMaskCanvas();
  const fillCanvas = document.createElement("canvas");
  fillCanvas.width = width;
  fillCanvas.height = height;
  const fillCtx = fillCanvas.getContext("2d");
  const filledImage = buildNearestBackgroundFill();
  fillCtx.putImageData(filledImage, 0, 0);

  const smoothCanvas = document.createElement("canvas");
  smoothCanvas.width = width;
  smoothCanvas.height = height;
  const smoothCtx = smoothCanvas.getContext("2d");
  smoothCtx.filter = "blur(5px)";
  smoothCtx.drawImage(fillCanvas, 0, 0);
  smoothCtx.filter = "none";
  fillCtx.clearRect(0, 0, width, height);
  fillCtx.drawImage(smoothCanvas, 0, 0);

  fillCtx.globalCompositeOperation = "destination-in";
  fillCtx.drawImage(maskCanvas, 0, 0);
  fillCtx.globalCompositeOperation = "source-over";

  backgroundCtx.drawImage(fillCanvas, 0, 0);

  if (clearAfter) {
    clearSelection({ recordHistory: false });
  }

  setMessage("已用本地快速补洞更新背景。", false, true);
  return true;
}

function buildNearestBackgroundFill() {
  const width = elements.backgroundCanvas.width;
  const height = elements.backgroundCanvas.height;
  const total = width * height;
  const image = backgroundCtx.getImageData(0, 0, width, height);
  const mask = selectionCtx.getImageData(0, 0, width, height).data;
  const nearest = new Int32Array(total);
  const distance = new Int32Array(total);
  nearest.fill(-1);
  distance.fill(2147483647);

  for (let index = 0; index < total; index += 1) {
    const alpha = mask[index * 4 + 3];
    if (alpha <= MASK_THRESHOLD) {
      nearest[index] = index;
      distance[index] = 0;
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      considerNearest(index, x, y, index - 1, x > 0);
      considerNearest(index, x, y, index - width, y > 0);
      considerNearest(index, x, y, index - width - 1, x > 0 && y > 0);
      considerNearest(index, x, y, index - width + 1, x < width - 1 && y > 0);
    }
  }

  for (let y = height - 1; y >= 0; y -= 1) {
    for (let x = width - 1; x >= 0; x -= 1) {
      const index = y * width + x;
      considerNearest(index, x, y, index + 1, x < width - 1);
      considerNearest(index, x, y, index + width, y < height - 1);
      considerNearest(index, x, y, index + width - 1, x > 0 && y < height - 1);
      considerNearest(index, x, y, index + width + 1, x < width - 1 && y < height - 1);
    }
  }

  const output = new ImageData(new Uint8ClampedArray(image.data), width, height);
  for (let index = 0; index < total; index += 1) {
    const pixel = index * 4;
    if (mask[pixel + 3] <= MASK_THRESHOLD || nearest[index] < 0) {
      continue;
    }

    const sourcePixel = nearest[index] * 4;
    output.data[pixel] = image.data[sourcePixel];
    output.data[pixel + 1] = image.data[sourcePixel + 1];
    output.data[pixel + 2] = image.data[sourcePixel + 2];
    output.data[pixel + 3] = image.data[pixel + 3];
  }

  return output;

  function considerNearest(index, x, y, candidate, isValid) {
    if (!isValid || nearest[candidate] < 0) {
      return;
    }

    const source = nearest[candidate];
    const sx = source % width;
    const sy = Math.floor(source / width);
    const dx = x - sx;
    const dy = y - sy;
    const nextDistance = dx * dx + dy * dy;
    if (nextDistance < distance[index]) {
      nearest[index] = source;
      distance[index] = nextDistance;
    }
  }
}

async function aiHealSelection({ clearAfter, recordHistory = false }) {
  if (!ensureReadyWithSelection()) {
    return false;
  }

  if (recordHistory) {
    pushHistory("GPT补洞");
  }

  setBusy(true);
  setMessage("正在调用 GPT 图像编辑补洞，复杂图片可能需要一两分钟。");

  try {
    const imageBlob = await canvasToBlob(elements.backgroundCanvas);
    const maskBlob = await canvasToBlob(createBinaryMaskCanvas());
    const formData = new FormData();
    formData.append("image", imageBlob, "source.png");
    formData.append("mask", maskBlob, "mask.png");
    formData.append("prompt", elements.inpaintPrompt.value.trim());
    formData.append("model", elements.imageModel.value);
    formData.append("quality", elements.imageQuality.value);

    const response = await fetch("/api/fill-background", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "GPT补洞失败。");
    }

    const image = await loadImage(`data:image/png;base64,${data.image.b64}`);
    backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
    backgroundCtx.drawImage(image, 0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);

    if (clearAfter) {
      clearSelection({ recordHistory: false });
    }

    const requestId = data.requestId ? ` Request ID: ${data.requestId}` : "";
    setMessage(`GPT补洞完成。${requestId}`, false, true);
    return true;
  } catch (error) {
    setMessage(error.message || "GPT补洞失败。", true);
    return false;
  } finally {
    setBusy(false);
  }
}

function createBinaryMaskCanvas() {
  const width = elements.selectionCanvas.width;
  const height = elements.selectionCanvas.height;
  const source = selectionCtx.getImageData(0, 0, width, height);
  const maskCanvas = document.createElement("canvas");
  maskCanvas.width = width;
  maskCanvas.height = height;
  const maskCtx = maskCanvas.getContext("2d");
  const output = maskCtx.createImageData(width, height);

  for (let index = 0; index < source.data.length; index += 4) {
    if (source.data[index + 3] <= MASK_THRESHOLD) {
      continue;
    }
    output.data[index] = 255;
    output.data[index + 1] = 255;
    output.data[index + 2] = 255;
    output.data[index + 3] = 255;
  }

  maskCtx.putImageData(output, 0, 0);
  return maskCanvas;
}

function clearSelection({ recordHistory = false } = {}) {
  if (recordHistory && state.imageLoaded && hasSelection()) {
    pushHistory("清空选择");
  }

  selectionCtx.clearRect(0, 0, elements.selectionCanvas.width, elements.selectionCanvas.height);
  updateSelectionStats(0);
}

function resetCanvas() {
  if (!state.imageLoaded) {
    return;
  }

  pushHistory("重置画布");
  backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
  backgroundCtx.drawImage(state.originalCanvas, 0, 0);
  clearSelection({ recordHistory: false });
  state.layers = [];
  renderLayers();
  elements.layerName.value = "剥离图层 1";
  setMessage("画布已重置到原图。");
}

function exportCompositePng() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  const composite = renderCompositeCanvas();
  composite.toBlob((blob) => {
    if (!blob) {
      setMessage("合成 PNG 导出失败。", true);
      return;
    }
    downloadBlob(blob, `${safeBaseName(state.imageName)}-composite.png`);
    setMessage("合成 PNG 已导出。", false, true);
  }, "image/png");
}

function exportPsd() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return;
  }

  if (!window.agPsd?.writePsd) {
    setMessage("PSD 写入库未加载。", true);
    return;
  }

  try {
    const children = [
      ...state.layers.map((layer) => ({
        name: `${layer.category} - ${layer.name}`,
        canvas: cloneCanvas(layer.canvas),
        opacity: 255,
        hidden: !layer.visible
      })),
      {
        name: "Filled background",
        canvas: cloneCanvas(elements.backgroundCanvas),
        opacity: 255,
        hidden: false
      },
      {
        name: "Original reference",
        canvas: cloneCanvas(state.originalCanvas),
        opacity: 255,
        hidden: true
      }
    ];

    const psd = {
      width: elements.backgroundCanvas.width,
      height: elements.backgroundCanvas.height,
      canvas: renderCompositeCanvas(),
      children
    };
    const buffer = window.agPsd.writePsd(psd, {
      generateThumbnail: true,
      trimImageData: false
    });
    const blob = new Blob([buffer], { type: "image/vnd.adobe.photoshop" });
    downloadBlob(blob, `${safeBaseName(state.imageName)}-layers.psd`);
    setMessage(`PSD 已导出，包含 ${state.layers.length + 2} 个图层。`, false, true);
  } catch (error) {
    setMessage(error.message || "PSD 导出失败。", true);
  }
}

function renderCompositeCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = elements.backgroundCanvas.width;
  canvas.height = elements.backgroundCanvas.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(elements.backgroundCanvas, 0, 0);

  [...state.layers].reverse().forEach((layer) => {
    if (layer.visible) {
      ctx.drawImage(layer.canvas, 0, 0);
    }
  });

  return canvas;
}

function renderLayers() {
  elements.layerList.replaceChildren();
  elements.layerCount.textContent = String(state.layers.length);

  if (state.layers.length === 0) {
    const empty = document.createElement("p");
    empty.className = "layer-empty";
    empty.textContent = t("emptyLayer");
    elements.layerList.append(empty);
    return;
  }

  state.layers.forEach((layer, index) => {
    const card = document.createElement("article");
    card.className = "layer-card";
    card.classList.toggle("hidden-layer", !layer.visible);

    const thumb = document.createElement("canvas");
    thumb.width = 64;
    thumb.height = 64;
    const thumbCtx = thumb.getContext("2d");
    thumbCtx.clearRect(0, 0, 64, 64);
    drawCanvasContained(thumbCtx, layer.canvas, 64, 64);

    const info = document.createElement("div");
    info.className = "layer-info";

    const title = document.createElement("strong");
    title.textContent = layer.name;

    const meta = document.createElement("span");
    const orderText = index === 0 ? t("topLayer") : t("layerOrder", { index: index + 1 });
    meta.textContent = `${categoryLabel(layer.category)} · ${formatPixels(layer.pixels)} px · ${orderText}`;

    const actions = document.createElement("div");
    actions.className = "layer-actions";

    const toggle = createMiniButton(layer.visible ? t("hide") : t("show"), () => {
      pushHistory(layer.visible ? "隐藏图层" : "显示图层");
      layer.visible = !layer.visible;
      renderLayers();
    });
    const up = createMiniButton(t("moveUp"), () => moveLayer(index, -1));
    const down = createMiniButton(t("moveDown"), () => moveLayer(index, 1));
    const save = createMiniButton("PNG", () => downloadLayerPng(layer));
    const remove = createMiniButton(t("delete"), () => removeLayer(layer.id), "warn");

    up.disabled = index === 0;
    down.disabled = index === state.layers.length - 1;

    actions.append(toggle, up, down, save, remove);
    info.append(title, meta, actions);
    card.append(thumb, info);
    elements.layerList.append(card);
  });
}

function createMiniButton(label, onClick, modifier = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = modifier ? `mini-button ${modifier}` : "mini-button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function moveLayer(index, direction) {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= state.layers.length) {
    return;
  }

  pushHistory("移动图层");
  const [layer] = state.layers.splice(index, 1);
  state.layers.splice(nextIndex, 0, layer);
  renderLayers();
}

function removeLayer(id) {
  pushHistory("删除图层");
  state.layers = state.layers.filter((layer) => layer.id !== id);
  renderLayers();
}

function downloadLayerPng(layer) {
  layer.canvas.toBlob((blob) => {
    if (!blob) {
      setMessage("图层 PNG 导出失败。", true);
      return;
    }
    downloadBlob(blob, `${safeBaseName(layer.name)}.png`);
  }, "image/png");
}

function pushHistory(label) {
  if (!state.imageLoaded) {
    return;
  }

  pushSnapshot(captureSnapshot(label));
}

function pushSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }

  state.history.push(snapshot);
  if (state.history.length > HISTORY_LIMIT) {
    state.history.shift();
  }
  state.redo = [];
  syncHistoryButtons();
}

function undoStep() {
  if (!state.history.length) {
    setMessage("没有可撤销的步骤。");
    return;
  }

  state.redo.push(captureSnapshot("重做点"));
  const snapshot = state.history.pop();
  restoreSnapshot(snapshot);
  syncHistoryButtons();
  setMessage(`已撤销：${snapshot.label || "上一步"}。`, false, true);
}

function redoStep() {
  if (!state.redo.length) {
    setMessage("没有可重做的步骤。");
    return;
  }

  state.history.push(captureSnapshot("撤销点"));
  const snapshot = state.redo.pop();
  restoreSnapshot(snapshot);
  syncHistoryButtons();
  setMessage("已重做。", false, true);
}

function captureSnapshot(label) {
  return {
    label,
    background: cloneCanvas(elements.backgroundCanvas),
    selection: cloneCanvas(elements.selectionCanvas),
    layers: cloneLayers(state.layers),
    layerName: elements.layerName.value,
    imageLoaded: state.imageLoaded,
    imageName: state.imageName,
    imageTitle: elements.imageTitle.textContent,
    canvasMeta: elements.canvasMeta.textContent
  };
}

function restoreSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }

  state.imageLoaded = snapshot.imageLoaded;
  state.imageName = snapshot.imageName;
  elements.imageTitle.textContent = snapshot.imageTitle;
  elements.canvasMeta.textContent = snapshot.canvasMeta;
  elements.layerName.value = snapshot.layerName;

  setCanvasSize(snapshot.background.width, snapshot.background.height);
  backgroundCtx.clearRect(0, 0, elements.backgroundCanvas.width, elements.backgroundCanvas.height);
  backgroundCtx.drawImage(snapshot.background, 0, 0);
  selectionCtx.clearRect(0, 0, elements.selectionCanvas.width, elements.selectionCanvas.height);
  selectionCtx.drawImage(snapshot.selection, 0, 0);

  state.layers = cloneLayers(snapshot.layers);
  elements.dropHint.hidden = state.imageLoaded;
  elements.backgroundCanvas.hidden = !state.imageLoaded;
  elements.selectionCanvas.hidden = !state.imageLoaded;
  renderLayers();
  updateSelectionStats();
}

function cloneLayers(layers) {
  return layers.map((layer) => ({
    ...layer,
    canvas: cloneCanvas(layer.canvas)
  }));
}

function syncHistoryButtons() {
  elements.undoSelectionButton.disabled = !state.history.length;
  elements.redoSelectionButton.disabled = !state.redo.length;
}

function ensureReadyWithSelection() {
  if (!state.imageLoaded) {
    setMessage("请先加载图片。", true);
    return false;
  }

  if (!hasSelection()) {
    setMessage("请先选中需要剥离或补洞的区域。", true);
    return false;
  }

  return true;
}

function hasSelection() {
  const data = selectionCtx.getImageData(
    0,
    0,
    elements.selectionCanvas.width,
    elements.selectionCanvas.height
  ).data;

  for (let index = 3; index < data.length; index += 4) {
    if (data[index] > MASK_THRESHOLD) {
      return true;
    }
  }

  return false;
}

function updateSelectionStats(knownCount = null) {
  if (!state.imageLoaded) {
    elements.selectionStats.textContent = t("selectionStats", { count: "0" });
    return;
  }

  const count = knownCount ?? countSelectionPixels();
  elements.selectionStats.textContent = t("selectionStats", { count: formatPixels(count) });
}

function countSelectionPixels() {
  const data = selectionCtx.getImageData(
    0,
    0,
    elements.selectionCanvas.width,
    elements.selectionCanvas.height
  ).data;
  let count = 0;

  for (let index = 3; index < data.length; index += 4) {
    if (data[index] > MASK_THRESHOLD) {
      count += 1;
    }
  }

  return count;
}

function getCanvasPoint(event) {
  const rect = elements.selectionCanvas.getBoundingClientRect();
  const x = Math.round(((event.clientX - rect.left) / rect.width) * elements.selectionCanvas.width);
  const y = Math.round(((event.clientY - rect.top) / rect.height) * elements.selectionCanvas.height);
  return {
    x: clamp(x, 0, elements.selectionCanvas.width - 1),
    y: clamp(y, 0, elements.selectionCanvas.height - 1)
  };
}

function uniqueLayerName(base) {
  const names = new Set(state.layers.map((layer) => layer.name.toLowerCase()));
  let candidate = base;
  let suffix = 2;

  while (names.has(candidate.toLowerCase())) {
    candidate = `${base} ${suffix}`;
    suffix += 1;
  }

  return candidate;
}

function nextLayerName() {
  let index = state.layers.length + 1;
  let candidate = `剥离图层 ${index}`;
  const names = new Set(state.layers.map((layer) => layer.name.toLowerCase()));

  while (names.has(candidate.toLowerCase())) {
    index += 1;
    candidate = `剥离图层 ${index}`;
  }

  return candidate;
}

function setBusy(isBusy) {
  [
    elements.peelQuickButton,
    elements.peelAiButton,
    elements.peelOnlyButton,
    elements.healButton,
    elements.exportPsdButton,
    elements.exportPngButton,
    elements.clearMaskButton,
    elements.resetButton,
    elements.invertSelectionButton,
    elements.cleanupSelectionButton
  ].forEach((button) => {
    button.disabled = isBusy;
  });

  if (!isBusy) {
    syncHistoryButtons();
  }
}

function setMessage(text, isError = false, isGood = false) {
  elements.message.textContent = text;
  elements.message.classList.toggle("error", Boolean(isError));
  elements.message.classList.toggle("good", Boolean(isGood) && !isError);
}

function syncRangeLabels() {
  elements.brushSizeValue.textContent = elements.brushSize.value;
  elements.magicToleranceValue.textContent = elements.magicTolerance.value;
  elements.magicGrowValue.textContent = elements.magicGrow.value;
}

function toolLabel(tool) {
  const labels = {
    brush: t("brush"),
    erase: t("erase"),
    rect: t("rect"),
    magic: t("magic")
  };
  return labels[tool] || "选区";
}

function categoryLabel(category) {
  const keys = {
    Distractor: "catDistractor",
    Secondary: "catSecondary",
    Primary: "catPrimary",
    Text: "catText",
    Scene: "catScene",
    Background: "catBackground"
  };
  return t(keys[category] || "catDistractor");
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("图片无法读取。"));
    image.src = url;
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("画布转换失败。"));
      }
    }, "image/png");
  });
}

function cloneCanvas(source) {
  const canvas = document.createElement("canvas");
  canvas.width = source.width;
  canvas.height = source.height;
  canvas.getContext("2d").drawImage(source, 0, 0);
  return canvas;
}

function drawCanvasContained(ctx, source, width, height) {
  const scale = Math.min(width / source.width, height / source.height);
  const drawWidth = source.width * scale;
  const drawHeight = source.height * scale;
  const left = (width - drawWidth) / 2;
  const top = (height - drawHeight) / 2;
  ctx.drawImage(source, left, top, drawWidth, drawHeight);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function safeBaseName(value) {
  return String(value || "image")
    .replace(/\.[^.]+$/, "")
    .replace(/[^\p{L}\p{N}._-]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "image";
}

function formatPixels(value) {
  return new Intl.NumberFormat("zh-CN").format(value || 0);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

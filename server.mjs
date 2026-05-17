import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = resolve(__dirname, "public");
const PORT = Number(process.env.PORT || 3000);

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

const server = createServer(async (req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return sendText(res, 405, "Method not allowed");
  }

  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const pathname = decodeURIComponent(url.pathname);
    const filePath = resolve(publicDir, `.${pathname.endsWith("/") ? `${pathname}index.html` : pathname}`);

    if (filePath !== publicDir && !filePath.startsWith(`${publicDir}${sep}`)) {
      return sendText(res, 403, "Forbidden");
    }

    const body = await readFile(filePath);
    const contentType = MIME_TYPES[extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store"
    });
    if (req.method !== "HEAD") {
      res.end(body);
    } else {
      res.end();
    }
  } catch (error) {
    if (error instanceof URIError) {
      return sendText(res, 400, "Bad request");
    }
    sendText(res, 404, "Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Layer Lab running at http://localhost:${PORT}`);
});

function sendText(res, status, text) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(text);
}

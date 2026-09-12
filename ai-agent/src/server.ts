import "dotenv/config";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { runAgentTurn, MODEL, type ChatMessage } from "./agent.js";
import { loadHistory, saveHistory, clearHistory } from "./memory.js";

if (!process.env.OPENROUTER_API_KEY) {
  console.error("OPENROUTER_API_KEY manquante. Copie .env.example vers .env et renseigne ta clé.");
  process.exit(1);
}

// Bound to localhost by default: this exposes tools (call_api, code_execution)
// that run with your local machine's privileges — don't put it on a public
// or shared network interface without adding real authentication first.
const HOST = process.env.HOST ?? "127.0.0.1";
const PORT = Number(process.env.PORT ?? 3939);

const PUBLIC_DIR = path.resolve(import.meta.dirname, "../public");

async function readJsonBody(req: import("node:http").IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  const raw = Buffer.concat(chunks).toString("utf-8");
  return raw ? JSON.parse(raw) : {};
}

let history: ChatMessage[] = await loadHistory();

const server = createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url === "/") {
      const html = await readFile(path.join(PUBLIC_DIR, "index.html"), "utf-8");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    }

    if (req.method === "GET" && req.url === "/api/history") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ history }));
      return;
    }

    if (req.method === "POST" && req.url === "/api/reset") {
      history = [];
      await clearHistory();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    if (req.method === "POST" && req.url === "/api/chat") {
      const body = (await readJsonBody(req)) as { message?: string };
      const message = (body.message ?? "").trim();
      if (!message) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Message vide." }));
        return;
      }
      const { text, history: updated } = await runAgentTurn(history, message);
      history = updated;
      await saveHistory(history);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ text }));
      return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: (err as Error).message }));
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Modèle : ${MODEL}`);
  console.log(`Agent autonome disponible sur http://${HOST}:${PORT}`);
});

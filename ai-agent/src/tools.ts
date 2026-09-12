import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { lookup } from "node:dns/promises";
import vm from "node:vm";

export interface ToolDef {
  name: string;
  description: string;
  // JSON Schema (OpenAI/OpenRouter "function calling" format)
  parameters: Record<string, unknown>;
  run: (input: any) => Promise<string>;
}

// Sandbox root for the file/RAG tool: the agent can only read files under
// this directory, never anywhere else on disk.
const KNOWLEDGE_DIR = path.resolve(import.meta.dirname, "../knowledge");

function resolveInsideKnowledgeDir(relativePath: string): string {
  const resolved = path.resolve(KNOWLEDGE_DIR, relativePath);
  if (resolved !== KNOWLEDGE_DIR && !resolved.startsWith(KNOWLEDGE_DIR + path.sep)) {
    throw new Error("Chemin refusé : en dehors du dossier knowledge/.");
  }
  return resolved;
}

export const listFiles: ToolDef = {
  name: "list_files",
  description: "Liste les fichiers disponibles dans la base de connaissances locale (dossier knowledge/).",
  parameters: { type: "object", properties: {}, additionalProperties: false },
  run: async () => {
    const entries = await readdir(KNOWLEDGE_DIR, { recursive: true, withFileTypes: true });
    const files = entries.filter((e) => e.isFile()).map((e) => path.join(e.parentPath ?? "", e.name));
    return files.length > 0 ? files.join("\n") : "(dossier knowledge/ vide)";
  },
};

export const readLocalFile: ToolDef = {
  name: "read_file",
  description:
    "Lit le contenu d'un fichier texte de la base de connaissances locale (dossier knowledge/). Utilise list_files d'abord pour connaître les chemins disponibles.",
  parameters: {
    type: "object",
    properties: {
      path: { type: "string", description: "Chemin relatif au dossier knowledge/, ex: notes/produit.md" },
    },
    required: ["path"],
    additionalProperties: false,
  },
  run: async (input: { path: string }) => {
    const filePath = resolveInsideKnowledgeDir(input.path);
    try {
      return await readFile(filePath, "utf-8");
    } catch {
      return `Erreur : impossible de lire "${input.path}".`;
    }
  },
};

// Basic SSRF guard: the agent picks the URL autonomously, so block requests
// aimed at loopback/private/link-local addresses before they leave the box.
const BLOCKED_IP_RANGES = [
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[0-1])\./,
  /^169\.254\./,
  /^0\./,
  /^::1$/,
  /^fe80:/i,
  /^fc00:/i,
  /^fd/i,
];

async function assertPublicHost(hostname: string): Promise<void> {
  if (hostname === "localhost") {
    throw new Error("Hôte refusé (localhost).");
  }
  const { address } = await lookup(hostname);
  if (BLOCKED_IP_RANGES.some((re) => re.test(address))) {
    throw new Error(`Hôte refusé (adresse privée/locale résolue : ${address}).`);
  }
}

export const callApi: ToolDef = {
  name: "call_api",
  description:
    "Appelle une API HTTP(S) externe et renvoie la réponse (statut + corps tronqué à 4000 caractères). N'accepte que http/https et refuse les hôtes privés/locaux.",
  parameters: {
    type: "object",
    properties: {
      url: { type: "string", description: "URL complète (http:// ou https://)" },
      method: { type: "string", enum: ["GET", "POST", "PUT", "PATCH", "DELETE"], default: "GET" },
      headers: { type: "object", additionalProperties: { type: "string" }, description: "En-têtes HTTP additionnels" },
      body: { type: "string", description: "Corps de la requête (JSON déjà sérialisé en string, si besoin)" },
    },
    required: ["url"],
    additionalProperties: false,
  },
  run: async (input: { url: string; method?: string; headers?: Record<string, string>; body?: string }) => {
    let url: URL;
    try {
      url = new URL(input.url);
    } catch {
      return "Erreur : URL invalide.";
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return "Erreur : seuls les protocoles http/https sont autorisés.";
    }
    try {
      await assertPublicHost(url.hostname);
    } catch (err) {
      return `Erreur : ${(err as Error).message}`;
    }

    const res = await fetch(url, {
      method: input.method ?? "GET",
      headers: input.headers,
      body: input.body,
    });
    const text = await res.text();
    const truncated = text.length > 4000 ? text.slice(0, 4000) + "\n...(tronqué)" : text;
    return `Statut HTTP: ${res.status}\n${truncated}`;
  },
};

// Best-effort free web search via DuckDuckGo's HTML "lite" endpoint (no API
// key). This scrapes an HTML page rather than calling a documented API, so
// it's fragile — DuckDuckGo can change markup or rate-limit without notice.
// Swap this for a real search API (Tavily, Brave Search, SerpAPI...) if you
// need reliability.
export const webSearch: ToolDef = {
  name: "web_search",
  description: "Recherche sur le web (best-effort, via DuckDuckGo) et renvoie les premiers résultats (titre + URL + extrait).",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "Termes de recherche" },
    },
    required: ["query"],
    additionalProperties: false,
  },
  run: async (input: { query: string }) => {
    const res = await fetch(`https://duckduckgo.com/html/?q=${encodeURIComponent(input.query)}`, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; ai-agent-cli/0.1)" },
    });
    if (!res.ok) {
      return `Erreur : recherche web indisponible (HTTP ${res.status}).`;
    }
    const html = await res.text();
    const strip = (s: string) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

    // Primary pattern: DuckDuckGo's no-JS HTML results page (result__a / result__snippet).
    const linkRe = /<a[^>]+class="[^"]*\bresult__a\b[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
    const snippetRe = /<a[^>]+class="[^"]*\bresult__snippet\b[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
    let links = [...html.matchAll(linkRe)].map((m) => ({ url: m[1], title: strip(m[2]) }));
    const snippets = [...html.matchAll(snippetRe)].map((m) => strip(m[1]));

    // Fallback: any external link, in case the markup differs from what we expect.
    if (links.length === 0) {
      const genericRe = /<a[^>]+href="(https?:\/\/(?!duckduckgo\.com)[^"]+)"[^>]*>([^<]+)<\/a>/g;
      links = [...html.matchAll(genericRe)].map((m) => ({ url: m[1], title: strip(m[2]) }));
    }

    if (links.length === 0) {
      // Nothing matched at all — dump the full raw response next to the
      // project instead of failing silently, so the actual markup can be
      // inspected and the regex fixed on real data.
      const { writeFile, mkdir } = await import("node:fs/promises");
      const debugDir = path.resolve(import.meta.dirname, "../debug");
      await mkdir(debugDir, { recursive: true });
      const debugPath = path.join(debugDir, `search-${Date.now()}.html`);
      await writeFile(debugPath, html, "utf-8");
      return `Aucun résultat extrait (HTTP ${res.status}, ${html.length} octets reçus). HTML complet sauvegardé dans ${debugPath} pour diagnostic.`;
    }

    return links
      .slice(0, 5)
      .map((l, i) => `${i + 1}. ${l.title}\n   ${l.url}\n   ${snippets[i] ?? ""}`)
      .join("\n\n");
  },
};

// Best-effort local code execution. `vm` is NOT a real security sandbox
// (it can be escaped) — this is fine for a single-user local CLI you
// control, never for an agent exposed to untrusted input or other users.
export const codeExecution: ToolDef = {
  name: "code_execution",
  description: "Exécute un extrait de code JavaScript (Node.js) et renvoie sa sortie console + valeur retournée. Pas d'accès réseau/fichiers dans ce contexte.",
  parameters: {
    type: "object",
    properties: {
      code: { type: "string", description: "Code JavaScript à exécuter. Utilise `return` pour renvoyer une valeur." },
    },
    required: ["code"],
    additionalProperties: false,
  },
  run: async (input: { code: string }) => {
    const logs: string[] = [];
    const sandboxConsole = {
      log: (...args: unknown[]) => logs.push(args.map(String).join(" ")),
    };
    const context = vm.createContext({ console: sandboxConsole });
    try {
      const wrapped = `(function() { ${input.code} })()`;
      const result = vm.runInContext(wrapped, context, { timeout: 3000 });
      const parts = [...logs];
      if (result !== undefined) parts.push(`=> ${JSON.stringify(result)}`);
      return parts.length > 0 ? parts.join("\n") : "(aucune sortie)";
    } catch (err) {
      return `Erreur d'exécution : ${(err as Error).message}`;
    }
  },
};

export const allTools: ToolDef[] = [listFiles, readLocalFile, callApi, webSearch, codeExecution];

import "dotenv/config";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { runAgentTurn, type ChatMessage } from "./agent.js";
import { loadHistory, saveHistory, clearHistory } from "./memory.js";

if (!process.env.OPENROUTER_API_KEY) {
  console.error(
    "OPENROUTER_API_KEY manquante. Copie .env.example vers .env et renseigne ta clé.",
  );
  process.exit(1);
}

// Load history before creating the readline interface: any `await` between
// createInterface() and the first question() risks losing already-buffered
// input — readline emits 'line' events immediately, with nothing to catch
// them until a question() is pending, and a dropped event is gone for good.
let history: ChatMessage[] = await loadHistory();
const rl = createInterface({ input: stdin, output: stdout });
let closed = false;
rl.on("close", () => {
  closed = true;
});

console.log(
  history.length > 0
    ? `Agent autonome prêt (mémoire chargée : ${history.length} messages). Tape ta demande ('reset' pour oublier, 'exit' pour quitter).\n`
    : "Agent autonome prêt. Tape ta demande (ou 'exit' pour quitter).\n",
);

while (!closed) {
  const input = await rl.question("> ").catch(() => null);
  if (input === null || input.trim().toLowerCase() === "exit") break;
  if (!input.trim()) continue;
  if (input.trim().toLowerCase() === "reset") {
    history = [];
    await clearHistory();
    console.log("\nMémoire effacée.\n");
    continue;
  }

  try {
    const { text, history: updated } = await runAgentTurn(history, input);
    history = updated;
    await saveHistory(history);
    console.log(`\n${text}\n`);
  } catch (err) {
    console.error(`\nErreur : ${(err as Error).message}\n`);
  }
}

rl.close();

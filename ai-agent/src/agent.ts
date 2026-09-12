import Anthropic from "@anthropic-ai/sdk";
import { allTools } from "./tools.js";

const client = new Anthropic();

const SYSTEM_PROMPT = `Tu es un agent autonome. Tu peux chercher sur le web, exécuter du code,
lire des fichiers dans la base de connaissances locale (knowledge/) et appeler des API externes.
Décompose les tâches complexes en étapes, utilise les outils quand c'est utile, et donne une
réponse finale claire et directe une fois le travail terminé.`;

export type ChatMessage = Anthropic.Beta.BetaMessageParam;

/**
 * Runs one agent turn (multi-step ReAct loop handled by the SDK's tool
 * runner) and returns the assistant's final text plus the updated history.
 */
export async function runAgentTurn(
  history: ChatMessage[],
  userInput: string,
): Promise<{ text: string; history: ChatMessage[] }> {
  const messages: ChatMessage[] = [...history, { role: "user", content: userInput }];

  const runner = client.beta.messages.toolRunner({
    model: "claude-opus-5",
    max_tokens: 16000,
    system: SYSTEM_PROMPT,
    tools: allTools,
    messages,
  });

  let final: Anthropic.Beta.BetaMessage | undefined;
  for await (const message of runner) {
    final = message;
    // The tool runner does not auto-resume a paused server-tool turn.
    if (message.stop_reason === "pause_turn") {
      runner.pushMessages({ role: "assistant", content: message.content });
    }
  }

  if (!final) {
    throw new Error("L'agent n'a produit aucune réponse.");
  }

  const text = final.content
    .filter((block): block is Anthropic.Beta.BetaTextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  return { text, history: [...messages, { role: "assistant", content: final.content }] };
}

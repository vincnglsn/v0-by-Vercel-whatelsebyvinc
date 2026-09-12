import { PDFParse } from "pdf-parse";
import type { ChatCompletionContentPart } from "openai/resources/index.js";

export interface AttachmentInput {
  name: string;
  mimeType: string;
  dataBase64: string;
}

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const MAX_TEXT_CHARS = 12000;

const TEXT_EXTENSIONS = [
  ".txt", ".md", ".csv", ".json", ".js", ".ts", ".tsx", ".jsx",
  ".py", ".html", ".css", ".yaml", ".yml", ".xml", ".log",
];

function extensionOf(name: string): string {
  const i = name.lastIndexOf(".");
  return i === -1 ? "" : name.slice(i).toLowerCase();
}

function truncate(text: string): { text: string; truncated: boolean } {
  if (text.length <= MAX_TEXT_CHARS) return { text, truncated: false };
  return { text: text.slice(0, MAX_TEXT_CHARS), truncated: true };
}

/**
 * Turns a raw uploaded file into content part(s) understood by the chat
 * completions API — an image part for vision-capable models, or extracted/
 * embedded text otherwise. Returns an error message instead when the file
 * is too large or of an unsupported type.
 */
export async function buildAttachmentParts(
  attachment: AttachmentInput,
): Promise<{ parts: ChatCompletionContentPart[] } | { error: string }> {
  const buffer = Buffer.from(attachment.dataBase64, "base64");
  if (buffer.length > MAX_BYTES) {
    return { error: `Fichier trop volumineux (max ${MAX_BYTES / (1024 * 1024)} Mo).` };
  }

  if (attachment.mimeType.startsWith("image/")) {
    return {
      parts: [
        { type: "image_url", image_url: { url: `data:${attachment.mimeType};base64,${attachment.dataBase64}` } },
      ],
    };
  }

  if (attachment.mimeType === "application/pdf" || extensionOf(attachment.name) === ".pdf") {
    let extracted: string;
    try {
      const parser = new PDFParse({ data: buffer });
      const result = await parser.getText();
      await parser.destroy();
      extracted = result.text;
    } catch (err) {
      return { error: `Impossible d'extraire le texte du PDF "${attachment.name}" : ${(err as Error).message}` };
    }
    const { text, truncated } = truncate(extracted);
    return {
      parts: [
        {
          type: "text",
          text: `Fichier joint "${attachment.name}" (PDF, texte extrait${truncated ? ", tronqué" : ""}) :\n\n${text}`,
        },
      ],
    };
  }

  const looksTextual = attachment.mimeType.startsWith("text/") || TEXT_EXTENSIONS.includes(extensionOf(attachment.name));
  if (looksTextual) {
    const { text, truncated } = truncate(buffer.toString("utf-8"));
    return {
      parts: [
        { type: "text", text: `Fichier joint "${attachment.name}"${truncated ? " (tronqué)" : ""} :\n\n${text}` },
      ],
    };
  }

  return {
    error: `Type de fichier non supporté (${attachment.mimeType || extensionOf(attachment.name) || "inconnu"}). Formats supportés : images, texte/code, PDF.`,
  };
}

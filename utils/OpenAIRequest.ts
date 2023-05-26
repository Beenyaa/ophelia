import { OpenAIChatPayload } from "./types";

export async function OpenAIRequest(payload: OpenAIChatPayload) {
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
  };

  if (process.env.OPENAI_API_ORG) {
    requestHeaders["OpenAI-Organization"] = process.env.OPENAI_API_ORG;
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: requestHeaders,
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  // Parse response as JSON
  const json = await res.json();

  // Extract the 'text' value
  const text = json.choices[0].delta?.content || "";

  return text;
}

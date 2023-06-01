import { OpenAIImagePayload } from "./types";

export async function OpenAIImageRequest(payload: OpenAIImagePayload) {
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
  };

  if (process.env.OPENAI_API_ORG) {
    requestHeaders["OpenAI-Organization"] = process.env.OPENAI_API_ORG;
  }

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    headers: requestHeaders,
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  // Parse response as JSON
  const json = await res.json();

  // Extract the image json
  const image = json.data[0].url;

  return image;
}

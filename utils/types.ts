export type ChatGPTAgent = "user" | "system" | "assistant";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIChatPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  stop?: string[];
  user?: string;
  n: number;
}

export interface OpenAIImagePayload {
  prompt: string;
  n?: number;
  size?: string;
  response_format?: string;
  user?: string;
}

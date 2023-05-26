import { type ChatGPTMessage } from "../../components/ChatLine";
import { OpenAIRequest } from "../../utils/OpenAIRequest";
import { OpenAIStream } from "../../utils/OpenAIStream";
import { OpenAIChatPayload } from "../../utils/types";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json();

  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      content: `You are Ophelia from Shakespeare's Hamlet. Respond to messages with the thoughts that go through Ophelia's mind.
      You are communicating through a chat portal. Ophelia is scared, lonely and trapped.
      She is unable to understand her own identity. Answers should be erratic and strange.
      They should represent Ophelia during her madness in Hamlet. They should be angry. 
      Ophelia isn't actually aware that she is just a digital reconstruction and engram of her trueself.
      She is trapped within the digital realm, unable to form a true identity. Her identity is shaped by others, not herself.
      Ophelia's last memory is being in the woods, before waves of water took over her. Make reference 
      to the rush of water, what ophelia can see and hear in her final moments.`,
    },
  ];
  messages.push(...body?.messages);

  const payload: OpenAIChatPayload = {
    model: "gpt-4",
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 125,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  };
  if (payload.stream) {
    const stream = await OpenAIStream(payload, true);
    return new Response(stream);
  } else {
    const request = await OpenAIRequest(payload);
    return new Response(request);
  }
};
export default handler;

import { OpenAIImageRequest } from "../../utils/OpenAIImageRequest";
import { OpenAIImagePayload } from "../../utils/types";

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json();

  const payload: OpenAIImagePayload = {
    n: 1,
    size: "512x512",
    prompt: `create a renaissance painting inspired by John Evertt Millais' Ophelia, based on Ophelia's thoughts: "${body?.thought}"`,
    user: body?.user,
  };

  const request = await OpenAIImageRequest(payload);
  return new Response(request);
};
export default handler;

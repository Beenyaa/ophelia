# Ophelia's Chatroom

This applications implements a simple chat bot mimicking Ophelia's personality using Next.js, API Routes, and [OpenAI ChatGPT API](https://beta.openai.com/docs/api-reference/completions/create).

This project was bespokely created for an art exhibition in collaboration with the artist themselves.

### Components

- Next.js
- OpenAI API (ChatGPT) - streaming
- API Routes (Edge runtime) - streaming

## How to Use

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI](https://beta.openai.com/account/api-keys) secret key.

Next, run Next.js in development mode:

```bash
pnpm dev
```

The app should be up and running at http://localhost:3000.

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).


## Credits
This project was initially based off of [Vercel's ai-gpt3-chatbot Example project](https://vercel.com/new/templates/next.js/ai-gpt3-chatbot) which has massively sped up the development of this bespoke web application.

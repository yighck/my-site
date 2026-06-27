# My Site

This project is a `Next.js` site with a server-side instrumentation problem solver.

## Local development

1. Copy `.env.example` to `.env.local`
2. Fill in `OPENAI_API_KEY`
3. Optionally set `OPENAI_MODEL`
4. Run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Instrumentation solver

The page at `/instrumentation` accepts a contest problem statement, a problem
image, or both, and calls the OpenAI Responses API on the server to generate a
structured solution draft.

## Environment variables

- `OPENAI_API_KEY`
  Required. Server-side API key for OpenAI.
- `OPENAI_MODEL`
  Optional. Defaults to `gpt-5.5`.

## Deployment

This app now requires a runtime that supports Next.js server routes.

Recommended targets:

- Vercel
- Railway
- Render
- A self-hosted Node.js environment

GitHub Pages static export is no longer suitable because the solver uses a
server-side API route at `src/app/api/instrumentation-plan/route.ts`.

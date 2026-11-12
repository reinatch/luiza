# Luísa Martelo

A landing page for Luísa Martelo, a multidisciplinary designer. The page presents her introduction and contact links over an animated background. Its current content describes the wider website as under construction.

Built with Next.js, React, TypeScript, and Tailwind CSS using the Pages Router. The design and biographical content belong to the project; this README does not grant reuse rights to its text, fonts, or imagery.

## Run locally

Install dependencies with pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. The `pnpm lint` script invokes Next.js lint; initial ESLint configuration may be required in this revision. `pnpm build` generates the static site in `out/`. `next.config.js` enables static export and trailing slashes. For hosting under a subdirectory, set `NEXT_PUBLIC_BASE_PATH` before building. Serve the exported files with a static web server; `next start` is not the server for this export.

## Content and structure

- `pages/index.tsx` renders the landing page and reads its content at build time.
- `public/data/data.json` holds the name, introduction, and social links. Paragraphs support HTML and should only contain trusted project content.
- `styles/` contains global styling; `public/` contains the background and other static assets.

A deployment URL has not been confirmed for this checkout.

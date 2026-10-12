# zerobitconsulting.com

Marketing site for ZeroBit Consulting, built with SvelteKit 3, Svelte 5, and Tailwind CSS 4. Every route is prerendered to static HTML.

## Getting started

This project uses [pnpm](https://pnpm.io) and Node.js 22.17+. With Corepack enabled (`corepack enable`), the pinned pnpm version in `package.json` is used automatically.

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Scripts

| Command        | What it does                               |
| -------------- | ------------------------------------------ |
| `pnpm dev`     | Start the Vite dev server                  |
| `pnpm build`   | Production build (Vercel Build Output API) |
| `pnpm preview` | Serve the production build locally         |
| `pnpm check`   | Type-check with `svelte-check`             |
| `pnpm lint`    | Prettier check + ESLint (flat config)      |
| `pnpm format`  | Format everything with Prettier            |

## Structure

- `src/routes/` – pages (`/`, `/about`, `/services`, `/contact`) and the shared layout; `+layout.ts` turns on prerendering
- `src/lib/components/` – header, footer, page intro, SEO tags, social icons, and the animated `BitField` hero
- `src/lib/site.ts` – site copy: contact info, nav, and service descriptions (import from `#lib`)
- `src/app.css` – Tailwind import and design tokens (colors, fonts, animations)
- `static/` – files served as-is (`favicon.ico`, `robots.txt`)

Fonts are self-hosted with [Fontsource](https://fontsource.org) and imported in `src/routes/+layout.svelte`.

## Deploying

Deploys to Vercel through `@sveltejs/adapter-vercel`, configured in `vite.config.ts` with the `nodejs24.x` runtime. The Vercel project's framework preset must be **SvelteKit**.

# Fuel Lab

An evidence-based course and documentation site about **nutritional science** — how food and supplements shape performance, recovery, and body composition. It's built for **athletes** first, but covers the same principles that drive **fat loss** and everyday health: protein and amino acids, carbohydrates and fat, vitamins and minerals, supplements worth taking (and the ones that aren't), nutrient timing, and where the current research actually stands.

The course starts with the fundamentals and builds toward the more advanced, contested edges — so it works whether you're new to this or already know your way around a macro spreadsheet.

> **Note:** This site is for educational purposes and is not a substitute for individualised advice from a registered dietitian, sports nutritionist, or physician — especially if you have a medical condition, are pregnant, or are considering high-dose supplements.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React with UI components built from scratch — no third-party component libraries
- Tailwind CSS with themed tokens in `app/globals.css`
- [motion](https://motion.dev) for animation (via `LazyMotion` in `components/motion-provider.tsx`)
- Hosted on [Vercel](https://vercel.com)

## Getting started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding course material

Every chapter is a single Markdown file in `content/`. See [`content/README.md`](content/README.md) for the frontmatter format and ordering conventions — the site picks up new files automatically.

## Project structure

- `app/` — routes, layout, and global styles
- `components/` — UI components
- `content/` — course chapters as Markdown (one file per chapter)
- `lib/` — utilities (`content.ts` chapter loader, `cn()` class merging, `Slot` for the `asChild` pattern)
- `public/icons/` — PWA icons referenced by `app/manifest.webmanifest`

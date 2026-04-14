# RecipeRush

Premium one-page coming soon website for `www.reciperush.ch`, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

The site is designed to present RecipeRush as a polished board game project with a warm editorial aesthetic, clear contact paths, and strong SEO foundations for launch and early conversations.

## Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint + Prettier

## Project Structure

```text
app/
  contact/page.tsx
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  layout/
  sections/
  shared/
  ui/
lib/
  seo.ts
  site-config.ts
  utils.ts
public/
  icons/
  images/brand/
  og/
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

## Deploy To Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

No custom environment variables are required for the current version.

## Content Customization

Most brand content is centralized in [lib/site-config.ts](/Users/angeloroselli/Desktop/recipe-rush/lib/site-config.ts).

Update this file to change:

- contact information
- navigation items
- hero copy
- features
- showcase content
- metadata defaults

## Replacing Images Or Brand Assets

The current implementation uses generated SVG brand assets and decorative visual components instead of external photography or card renders.

To replace them:

1. Add your final assets under `public/images/`.
2. Update section components in `components/sections/`.
3. Replace the social sharing asset in `public/og/recipe-rush-og.svg` if needed.
4. Update the favicon or icon files in `public/icons/`.

## SEO Notes

The project includes:

- page-level metadata
- canonical URLs
- Open Graph metadata
- Twitter card metadata
- `robots.ts`
- `sitemap.ts`
- JSON-LD for `Organization`, `Product`, and `WebSite`

## Design Notes

The interface is intentionally warm, tactile, and product-led:

- parchment-inspired backgrounds
- chestnut and terracotta accents
- serif-led editorial typography
- subtle motion only where it supports hierarchy
- minimal sections with clear contact intent

## Production Checklist

Before going live, it is recommended to:

- verify the final legal copy
- replace placeholder SVG brand assets with final approved visual assets if available
- confirm final domain setup in Vercel
- run Lighthouse and accessibility checks after dependency installation

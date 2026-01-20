# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

hellonellwyn.com is a personal website for Nellwyn Thomas built with Astro 5.x. It's a minimal static site featuring a home page with hero section, about page, and contact page. The site uses Tailwind CSS for styling and supports MDX for rich content.

## Common Commands

| Command | Purpose |
|---------|---------|
| `pnpm start` or `pnpm dev` | Start development server at localhost:4321 with hot reload |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro <command>` | Run any Astro CLI command |

## Project Structure

### `/src`
- **`/components`** - Reusable Astro components (Button, Header, Footer, Hero, Nav, etc.)
- **`/layouts`** - Layout templates (BaseLayout wraps all pages with header/footer/nav)
- **`/pages`** - Route definitions (Astro file-based routing)
- **`/content`** - Content collections managed through Astro Content API
  - `/pages` - Static pages (About, Contact)
  - `/blog` - Blog posts (currently disabled with `_` prefix)
  - `/projects` - Project showcases (currently disabled with `_` prefix)
- **`/data`** - Data files
  - `site-config.json` - Main configuration (title, nav links, social links, hero text)
  - `site-config.ts` - TypeScript config loader
- **`/utils`** - Utility functions
  - `common-utils.ts` - General utilities
  - `data-utils.ts` - Data manipulation helpers (e.g., `sortItemsByDateDesc`)
- **`/icons`** - SVG icon components
- **`env.d.ts`** - TypeScript environment declarations

### Root Config Files
- `astro.config.mjs` - Astro configuration with MDX, sitemap, Tailwind integrations
- `tsconfig.json` - TypeScript settings
- `package.json` - pnpm dependencies (Astro 5.x, Tailwind, MDX, plugins)
- `pnpm-lock.yaml` - Dependency lock file

## Key Architecture Patterns

### Content Collections
Content is managed through Astro's Content API (`src/content/config.ts`). Collections define schemas for different content types:
- **Pages** - Simple pages with title and optional SEO metadata
- **Blog/Projects** - Currently disabled but infrastructure exists (see "Archiving Content" below)

Content collections are queried at build time using `getCollection()` to generate routes and previews.

### Page Generation
- **Static routes** - Pages like `/` and `/contact` use static `.astro` files
- **Dynamic routes** - The `[...slug].astro` pattern generates dynamic pages for pages collection
- Blog/project routes exist but are disabled since collections are inactive

### Layouts & Components
- `BaseLayout.astro` is the main wrapper providing:
  - HTML structure with dark mode support via localStorage
  - Nav component (theme toggle, navigation links)
  - Header component
  - Footer component
  - Astro's ViewTransitions for smooth page transitions
- All pages extend BaseLayout by importing and wrapping content with it

### Styling
Tailwind CSS with Typography plugin. Styles are composed through utility classes in HTML. Custom theme variables are likely in `globals.css` (check astro-default or BaseHead for imports).

### Site Configuration
All site-wide text and links are centralized in `src/data/site-config.json`:
- Hero section text and buttons
- Navigation links (header/footer)
- Social media links
- Site title, description, image
- Posts/projects per page settings

Modify this file to update site content without touching components.

## Archiving/Re-enabling Content

### To Disable a Collection
1. Prefix files with `_` (e.g., `_post-1.md`, `_project-1.md`)
2. Comment out the collection in `src/content/config.ts`

### To Re-enable a Collection
1. Rename files to remove `_` prefix
2. Uncomment the collection schema in `src/content/config.ts`:
```typescript
// Uncomment the relevant collection definition and add to exports
const blog = defineCollection({ /* schema */ });
const projects = defineCollection({ /* schema */ });
export const collections = { pages, blog, projects };
```

## Development Notes

- Astro uses file-based routing: files in `/src/pages/` become routes automatically
- MDX support is enabled for `.mdx` content files
- ViewTransitions provide client-side navigation animations (no full page reload)
- The site is static (no server-side rendering by default)
- TypeScript is used throughout but configuration is minimal (extends Astro defaults)

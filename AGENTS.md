# AGENTS.md

This file provides guidance for agentic coding agents working on this repository.

## Project Overview

hellonellwyn.com is a personal website built with Astro 5.x, TypeScript, and Tailwind CSS. It's a static site with content collections for pages, blog posts, and projects.

## Build, Lint, and Test Commands

| Command                    | Purpose                                                           |
| -------------------------- | ----------------------------------------------------------------- |
| `pnpm dev` or `pnpm start` | Start development server at http://localhost:4321 with hot reload |
| `pnpm build`               | Build production site to `./dist/`                                |
| `pnpm preview`             | Preview the production build locally                              |
| `pnpm astro <command>`     | Run any Astro CLI command                                         |

**Formatting:**

```bash
pnpm exec prettier --write "src/**/*.{astro,ts,js,json}"
```

No test framework is currently configured. If adding tests, use Vitest (works well with Astro).

## Code Style Guidelines

### TypeScript

- Use explicit type annotations for function parameters and return types when not inferrable
- Use `type` over `interface` for object types
- Use `export type` for public types, `type` for internal types
- Prefer `astro:content` types like `CollectionEntry<'pages'>` for content collections

### Imports

- Use absolute imports from `astro:content`, `astro:client`, etc.
- Use relative imports for local modules (e.g., `./components`, `../data/site-config`)
- Use `import { type X }` syntax for type-only imports
- Sort imports: absolute → relative, with empty line between groups

### Astro Components

- Frontmatter script goes between `---` fences at the top
- Props interfaces should be exported and documented
- Use `<slot />` for content projection
- Avoid side effects in frontmatter; use utility functions instead

### Tailwind CSS

- Use Tailwind utility classes for all styling
- Apply `@tailwindcss/typography` prose classes for Markdown content
- Use `class` attribute on components to accept external classes (camelCase)
- Avoid custom CSS; use Tailwind config or `@apply` in `<style>` blocks sparingly

### Naming Conventions

- **Files**: kebab-case for Astro/React components (`nav-link.astro`), PascalCase for icons
- **Variables/Functions**: camelCase (`sortItemsByDateDesc`)
- **Types/Interfaces**: PascalCase (`SiteConfig`, `CollectionEntry`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase otherwise
- **CSS classes**: kebab-case (Tailwind utilities)

### Error Handling

- Use optional chaining (`?.`) and nullish coalescing (`??`) for safe property access
- Handle potential `undefined` values from JSON configs with fallback defaults
- Wrap content collection queries with try/catch for development clarity

### General Patterns

- All site configuration lives in `src/data/site-config.json`; avoid hardcoding text
- Use Astro Content Collections (`src/content/`) for structured content with type safety
- SVG icons as components in `src/icons/`
- Utilities in `src/utils/` for reusable logic

### Formatting

- Run Prettier before committing: `pnpm exec prettier --write "src/**/*.{astro,ts,js,json,md,mdx}"`
- Prettier is configured with Tailwind plugin (see `package.json`)
- 2-space indentation in Astro frontmatter, consistent with file format

## Directory Structure

```
src/
├── components/    # Reusable Astro components
├── layouts/       # BaseLayout and variants
├── pages/         # File-based routing (.astro files)
├── content/       # Content collections (pages/, blog/, projects/)
├── data/          # JSON config and TypeScript loaders
├── utils/         # Utility functions
├── icons/         # SVG icon components
└── env.d.ts       # TypeScript declarations
```

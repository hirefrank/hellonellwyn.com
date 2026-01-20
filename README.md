# hellonellwyn.com

Personal website for Nellwyn Thomas. Built on [Astro](https://astro.build/) with the Dante theme.

## Site Configuration

Edit `src/data/site-config.json` to customize the site:

| Property          | Description                                                 |
| :---------------- | :---------------------------------------------------------- |
| `title`           | Site title (displayed in header/logo and footer copyright)  |
| `subtitle`        | Optional subtitle shown below title in header               |
| `description`     | Site description for SEO and Open Graph                     |
| `image`           | Default OG image (src/alt)                                  |
| `hero`            | Hero section: `title`, `text`, `image`, `actions` (buttons) |
| `subscribe`       | Newsletter section: `title`, `text`, `formUrl`              |
| `postsPerPage`    | Blog posts per page (if blog enabled)                       |
| `projectsPerPage` | Projects per page (if projects enabled)                     |
| `headerNavLinks`  | Navigation links in header                                  |
| `footerNavLinks`  | Links in footer navigation                                  |
| `socialLinks`     | Social media links shown in footer                          |

### Example hero action

```json
"actions": [
    { "text": "Contact Me", "href": "/contact" },
    { "text": "View Work", "href": "/projects" }
]
```

## Sections

Currently enabled:

- Home (with hero section)
- About page
- Contact page

## Archived Content

Reference content is preserved in `archive/` for potential future use:

- `archive/blog/` - Blog post templates
- `archive/projects/` - Project case study templates
- `archive/pages/_terms.md` - Terms page template

To re-enable a section:

1. Move files from `archive/` to `src/content/`
2. Add the collection schema to `src/content.config.ts`
3. Uncomment/update relevant page routes in `src/pages/`

## Commands

| Command        | Action                             |
| :------------- | :--------------------------------- |
| `pnpm start`   | Start dev server at localhost:4321 |
| `pnpm build`   | Build production site to `./dist/` |
| `pnpm preview` | Preview build locally              |

## Tech Stack

- Astro 5.x
- Tailwind CSS
- MDX support

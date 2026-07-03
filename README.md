# Space Tourism

Multi-page SPA built for the [Frontend Mentor Space Tourism challenge](https://www.frontendmentor.io/challenges/space-tourism-multipage-website). Explore destinations, crew, and launch technology through a responsive, accessible interface.

## Stack

- React 19 + TypeScript
- React Router 7
- Vite 8
- SCSS (design tokens, responsive backgrounds, BEM-style components)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server with HMR |
| `npm run build` | Type-check and production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint`  | Run Oxlint               |

## Deployment

### GitHub Pages

Live site: **https://filipkoniuszewski.github.io/space-tourism/**

Pushes to `main` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`).

This app uses client-side routing (`BrowserRouter`). The build copies `index.html` to `404.html` so direct links like `/destination` work on GitHub Pages.

For other hosts, configure SPA fallback to `index.html` (Netlify `_redirects`, Vercel rewrites, nginx `try_files`, etc.).

```bash
npm run build
```

## Project structure

```
src/
├── components/   # Header, ErrorBoundary
├── hooks/        # useTabs (ARIA tab pattern)
├── pages/        # Home, Destination, Crew, Technology, NotFound
├── routes.ts     # Shared route metadata (nav + document titles)
├── data.json     # Static content
├── types.ts      # Content type definitions
└── styles/       # SCSS modules per page/component
```

## Design references

Local Figma exports live in `design-refs/` (gitignored). They are not required to run or build the app.

## License

Private — Frontend Mentor starter assets and challenge content.

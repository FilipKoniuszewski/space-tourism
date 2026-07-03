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

This app uses client-side routing (`BrowserRouter`). Configure your host to serve `index.html` for all routes (e.g. Netlify `_redirects`, Vercel rewrites, or nginx `try_files`).

```bash
npm run build
```

Deploy the contents of `dist/`.

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

# Hoysal Chengappa — Developer Portfolio

A responsive portfolio built with React and Vite. It highlights Hoysal's background,
skills, selected projects, research interests, and contact links.

## Getting started

Requirements: Node.js 18.x, 20.x, or 22+, and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Before publishing

Review the `profile` and `projects` data in `src/main.jsx`. Replace the example email
address, verify profile and project links, and update descriptions and statuses to
reflect the latest work.

## Deployment

Deploy the contents of `dist/` to a static hosting provider. For Vercel or Netlify,
the default Vite settings work:

- Build command: `npm run build`
- Output directory: `dist`

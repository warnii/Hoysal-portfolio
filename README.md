# Hoysal Chengappa — Developer Portfolio

A responsive, minimal professional light-theme portfolio built with React + Vite.

## Requirements
- Node.js 20.19+ or 22.12+ (recommended)
- npm

## Run locally
1. Extract this project folder.
2. Open a terminal in `hoysal-portfolio`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
Open `src/main.jsx` and update the `profile` object:
- `email`: replace `YOUR_EMAIL@example.com`
- `linkedin`: replace `YOUR-LINKEDIN` with your actual LinkedIn profile slug

Review project descriptions and add repository-specific URLs, screenshots, demos, and verified completion/status details before publishing. The project cards intentionally avoid claiming unverified metrics or deployment status.

## Deploy
You can deploy the `dist/` folder after `npm run build` to GitHub Pages, Netlify, or Vercel. For Vercel/Netlify, importing the repository and using the default Vite build settings is usually enough:
- Build command: `npm run build`
- Output directory: `dist`

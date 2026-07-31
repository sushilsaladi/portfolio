# Sushil Saladi — Portfolio

A React + Vite single-page portfolio, styled as a browsable REST API.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and deploys automatically on every push to `main`.

**One-time setup:**

1. Create a new GitHub repo (e.g. `saladi-portfolio`) and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. In `vite.config.js`, set `base` to match your repo name:
   ```js
   base: "/<your-repo>/"
   ```
   (If deploying to a user/org page repo named `<your-username>.github.io`, use `base: "/"` instead.)

3. In your GitHub repo: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.

4. Push again (or re-run the workflow from the **Actions** tab). Your site
   will be live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

## Project structure

```
saladi-portfolio/
├── index.html          # Vite entry HTML
├── vite.config.js       # Vite config (set base path here for Pages)
├── package.json
├── src/
│   ├── main.jsx         # React root
│   └── App.jsx          # The portfolio component
└── .github/workflows/deploy.yml   # Auto-build + deploy on push
```

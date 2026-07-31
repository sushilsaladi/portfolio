import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace 'saladi-portfolio' below with your actual GitHub repo name.
// e.g. if your repo is github.com/yourname/my-site, set base: '/my-site/'
// If you deploy to a "yourname.github.io" *user/org* page repo instead of a
// project repo, set base: '/' instead.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio",
});

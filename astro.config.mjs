import { defineConfig } from "astro/config";

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow; locally and on
// root-domain hosts (Netlify, Vercel, Cloudflare) they stay unset.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || "/",
});

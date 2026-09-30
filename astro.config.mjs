import { defineConfig } from "astro/config";

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow; locally and on
// root-domain hosts (Netlify, Vercel, Cloudflare) they stay unset.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || "/",
  // Inline CSS in each page so a stale cache or a failed stylesheet request
  // can never leave a page unstyled.
  build: { inlineStylesheets: "always" },
});

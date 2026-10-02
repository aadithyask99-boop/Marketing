import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const PAGES = ["/", "/services", "/work", "/work/design", "/blog", "/about", "/contact", "/website-starter", "/privacy", "/terms"];

export const GET: APIRoute = async ({ site }) => {
  const origin = (site ?? new URL("https://maximusmediascape.com")).origin;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const posts = (await getCollection("blog")).filter((p) => !p.data.draft);
  const entry = (path: string, lastmod?: Date) =>
    `  <url><loc>${origin}${base}${path}</loc>${lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ""}</url>`;
  const body = [...PAGES.map((p) => entry(p)), ...posts.map((p) => entry(`/blog/${p.id}`, p.data.date))].join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};

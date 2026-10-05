import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(["case-studies", "ai-search", "seo-content", "web-automation", "brand-social"]),
    author: z.string().default("Maximus Team"),
    date: z.coerce.date(),
    readMins: z.number().default(5),
    tldr: z.string(),
    tags: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: image().optional(),
    imageAlt: z.string().optional(),
    // A client logo shown on a cream tile instead of a photo (case studies).
    logo: image().optional(),
    logoAlt: z.string().optional(),
  }),
});

export const collections = { blog };

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
    // The logo has its own background colour: fill the whole tile with it instead of sitting on cream.
    logoFill: z.boolean().default(false),
    // Hero background: red (default) or ink for posts whose imagery clashes with red.
    // "editorial" = calm banner + title above the paragraphs; "classic" = the red split header.
    heroStyle: z.enum(["classic", "editorial"]).default("classic"),
    heroLabel: z.string().optional(),
    heroTone: z.enum(["red", "ink", "cream"]).default("red"),
  }),
});

export const collections = { blog };

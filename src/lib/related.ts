import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"blog">;

// Topic clusters: posts in the same cluster are the most useful next read, so they rank first.
const CLUSTERS: [RegExp, number][] = [
  [/customer-journey/, 8],
  [/prompt/, 8],
  [/chatgpt|ads-in/, 5],
  [/google-search-console/, 7],
  [/ai-mode|brand-mentions|content-ai|ai-overviews|people-search/, 4],
  [/london|surrey|tunbridge|google-business-profile/, 4],
  [/website|enquiry|ux-and-cro|seo-red|internal-linking/, 4],
  [/brand|social|niche/, 3],
];
const GENERIC = new Set(["small business", "marketing", "case study", "ai", "tips"]);
const STOP = new Set(["the", "and", "for", "your", "how", "what", "with", "that", "from", "into", "are", "you", "why", "most", "business", "businesses", "small"]);
const words = (s: string) => new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3 && !STOP.has(w)));

export function relatedPosts(post: Post, posts: Post[], n = 6): Post[] {
  const mine = words(post.data.title);
  const myTags = new Set(post.data.tags.map((t) => t.toLowerCase()).filter((t) => !GENERIC.has(t)));
  const score = (p: Post) => {
    let s = p.data.category === post.data.category ? 2 : 0;
    for (const [re, w] of CLUSTERS) if (re.test(p.id) && re.test(post.id)) s += w;
    for (const t of p.data.tags) if (myTags.has(t.toLowerCase())) s += 1.5;
    for (const w of words(p.data.title)) if (mine.has(w)) s += 1;
    return s;
  };
  return posts
    .filter((p) => p.id !== post.id)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.data.date.getTime() - a.p.data.date.getTime())
    .slice(0, n)
    .map((x) => x.p);
}

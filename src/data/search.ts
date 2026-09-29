export interface Rule {
  id: string;
  keywords: string[];
  label: string;
  option: string;
  headline: string;
  body: string;
  steps: [string, string, string];
}

export const RULES: Rule[] = [
  {
    id: "geo",
    keywords: [
      "chatgpt", "gemini", "perplexity", "copilot", "llm", "ai search", "ai answer",
      "ai answers", "generative", "geo", "aeo", "answer engine", "cited", "citation",
      "show up in ai", "ai overview", "ai overviews",
    ],
    label: "GEO + AEO",
    option: "GEO",
    headline: "get recommended by AI assistants",
    body: "People now ask ChatGPT, Gemini and Perplexity before they ever open a search page. We structure your content, entities and proof so AI systems cite you and answer engines pick you.",
    steps: [
      "Audit how AI assistants describe you today",
      "Rebuild key pages as clear, quotable answers",
      "Track citations and share of answer monthly",
    ],
  },
  {
    id: "seo",
    keywords: [
      "seo", "google", "rank", "ranking", "rankings", "traffic", "organic", "keyword",
      "keywords", "search engine", "backlink", "backlinks", "visibility", "found online",
    ],
    label: "SEO",
    option: "SEO",
    headline: "earn durable visibility in search",
    body: "Technical fixes, content people actually search for, and authority that compounds. We aim for traffic that turns into enquiries, not vanity clicks.",
    steps: [
      "Technical and content audit with a ranked fix list",
      "Build pages around the questions buyers really ask",
      "Earn links and track leads, not just positions",
    ],
  },
  {
    id: "branding",
    keywords: [
      "brand", "branding", "rebrand", "logo", "identity", "positioning", "voice",
      "tagline", "naming", "startup",
    ],
    label: "Branding",
    option: "Branding",
    headline: "become recognised and remembered",
    body: "Positioning, identity and voice that make you the obvious choice. We start with what you stand for, then design everything that carries it.",
    steps: [
      "Positioning workshop and competitor map",
      "Identity, voice and messaging system",
      "Launch kit for web, social and sales",
    ],
  },
  {
    id: "social",
    keywords: [
      "social", "instagram", "tiktok", "linkedin", "facebook", "youtube", "reels",
      "followers", "community", "influencer", "influencers", "viral",
    ],
    label: "Social + Marketing",
    option: "Marketing",
    headline: "turn attention into a following that buys",
    body: "Platform-native content and community management that earns attention and moves people from scrolling to spending.",
    steps: [
      "Pick the two channels where your buyers already are",
      "Ship a repeatable content engine, not one-off posts",
      "Measure saves, shares and pipeline, not just likes",
    ],
  },
  {
    id: "paid",
    keywords: [
      "ads", "ad", "ppc", "paid", "adwords", "roas", "cpc", "meta ads", "conversions",
      "leads", "campaign", "campaigns", "advertising", "sales",
    ],
    label: "Paid Marketing",
    option: "Marketing",
    headline: "make every ad dollar work harder",
    body: "Full-funnel paid media with creative that converts and reporting you can read. We scale what works and cut what does not.",
    steps: [
      "Account and tracking audit",
      "Creative and audience tests in the first 30 days",
      "Scale winners against a cost-per-lead target",
    ],
  },
  {
    id: "website",
    keywords: [
      "website", "site", "landing", "page", "pages", "ux", "shopify", "wordpress",
      "checkout", "web", "redesign",
    ],
    label: "Creative + Web",
    option: "Creative",
    headline: "turn your website into your best salesperson",
    body: "Design and copy built around one job: getting the right visitor to take the next step. Fast, clear and ready to be found.",
    steps: [
      "Review the journey from first click to enquiry",
      "Redesign the pages that lose the most people",
      "A/B test headlines and calls to action",
    ],
  },
  {
    id: "content",
    keywords: [
      "content", "blog", "copy", "copywriting", "video", "newsletter", "email",
      "storytelling", "podcast",
    ],
    label: "Creative",
    option: "Creative",
    headline: "make content people remember and share",
    body: "Ideas, writing and video with a point of view. We plan for search and AI answers from the start so it keeps working after publish day.",
    steps: [
      "Content strategy tied to real customer questions",
      "A calendar you can actually keep",
      "Repurpose each hero piece across every channel",
    ],
  },
  {
    id: "ai",
    keywords: [
      "ai", "automation", "automate", "workflow", "workflows", "chatbot", "agent",
      "agents", "gpt", "machine learning", "efficiency",
    ],
    label: "AI",
    option: "AI",
    headline: "use AI to move faster without losing quality",
    body: "AI-assisted research, production and reporting with humans steering. Faster delivery, sharper insight, no generic output.",
    steps: [
      "Map where your team loses the most time",
      "Automate the repeatable, keep humans on the craft",
      "Set guardrails for quality and brand voice",
    ],
  },
];

export const LOCAL: Rule = {
  id: "local",
  keywords: [
    "bakery", "restaurant", "cafe", "coffee", "shop", "store", "local", "near me",
    "small business", "salon", "clinic", "gym", "plumber", "dentist", "boutique",
  ],
  label: "Local + Marketing",
  option: "Marketing",
  headline: "get local customers through your door",
  body: "For local businesses, being found nearby is everything: a sharp maps listing, real reviews, local search and simple ads that bring people in this week.",
  steps: [
    "Fix your maps listing, hours and reviews",
    "Local pages and posts that answer what neighbours ask",
    "A small always-on ad budget aimed at your postcode",
  ],
};

export const FALLBACK: Rule = {
  id: "audit",
  keywords: [],
  label: "Full-funnel audit",
  option: "Marketing",
  headline: "start with a clear picture of what is working",
  body: "Tell us the goal and we will look at how people find you today, where they drop off and what is worth fixing first. Then we build the plan.",
  steps: [
    "Free audit of search, AI answers, site and social",
    "A short plan ranked by impact and effort",
    "Kick off the first quick wins in week one",
  ],
};

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function hits(query: string, keyword: string): boolean {
  if (keyword.length <= 3 || keyword.includes(" ")) {
    return new RegExp(`(^|[^a-z0-9])${escapeRe(keyword)}([^a-z0-9]|$)`).test(query);
  }
  return query.includes(keyword);
}

export function match(rawQuery: string): Rule {
  const query = rawQuery.toLowerCase();
  let best: Rule = FALLBACK;
  let bestScore = 0;
  for (const rule of [...RULES, LOCAL]) {
    const score = rule.keywords.reduce((n, k) => n + (hits(query, k) ? 1 : 0), 0);
    if (score > bestScore) {
      best = rule;
      bestScore = score;
    }
  }
  return best;
}

export const CHIPS = [
  "marketing agency for my bakery",
  "how do I show up in ChatGPT answers",
  "rebrand our startup",
  "why is my traffic dropping",
];

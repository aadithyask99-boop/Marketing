const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path: string) => `${base}${path}`;

export const SITE = {
  name: "Maximus Mediascape",
  tagline: "Search, story and strategy under one roof.",
  email: "hello@example.com",
  description:
    "Maximus Mediascape is a marketing agency for creative, SEO, branding, marketing, AI, GEO and AEO.",
};

// TODO: set PUBLIC_LEAD_ENDPOINT (e.g. a Formspree URL) in Vercel env vars to
// deliver leads server-side. Until then the form opens the visitor's email app.
export const LEAD = {
  heading: "What do you want to be found for?",
  lede: "One line is enough. We'll come back with a real plan, not a sales pitch.",
  placeholder: "e.g. get my bakery found when people ask ChatGPT",
  reply: "Good one. Where should we send the plan?",
  success: "Thanks, we've got it. We'll be in touch soon.",
  privacy: "We only use this to reply to you. No spam.",
};

export const STORY = {
  paragraph:
    "Buyers research on Google, TikTok and ChatGPT long before they talk to you. We make sure your brand is the one they find, trust and choose.",
  finaleLead: "an agency built for what's next,",
  finaleAccent: "from Google to ChatGPT.",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ROTATING_WORDS = ["Creative", "SEO", "Branding", "Marketing", "AI", "GEO", "AEO"];

export const SERVICES = [
  {
    name: "Creative",
    desc: "Campaign ideas, art direction and content that stop the scroll and stay on message.",
  },
  {
    name: "SEO",
    desc: "Technical, content and authority work that earns durable visibility in search.",
  },
  {
    name: "Branding",
    desc: "Positioning, identity and voice so your business is recognised and remembered.",
  },
  {
    name: "Marketing",
    desc: "Full-funnel strategy and channel execution across paid, social, email and lifecycle.",
  },
  {
    name: "AI",
    desc: "AI-assisted workflows, automation and analysis that speed up delivery without diluting quality.",
  },
  {
    name: "GEO",
    desc: "Generative Engine Optimisation: making your brand a source that AI assistants cite and recommend.",
  },
  {
    name: "AEO",
    desc: "Answer Engine Optimisation: structuring content to win featured answers and voice results.",
  },
];

export const WORK = [
  { title: "Project One", category: "Branding", tone: "blue" },
  { title: "Project Two", category: "SEO + Content", tone: "ink" },
  { title: "Project Three", category: "Creative Campaign", tone: "cream" },
  { title: "Project Four", category: "GEO + AEO", tone: "cream" },
  { title: "Project Five", category: "Marketing", tone: "blue" },
  { title: "Project Six", category: "AI Workflows", tone: "ink" },
];

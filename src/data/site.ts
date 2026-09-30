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
  heading: "Now it's your turn.",
  question: "What do you want to be found for?",
  lede: "Type what you want to be found for. We'll come back with a real plan, not a sales pitch.",
  placeholder: "e.g. get my bakery found by AI",
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

export interface Service {
  slug: string;
  name: string;
  summary: string;
  included: string[];
  note?: string;
}

export const SERVICES_INTRO = "Everything you need to grow your business online, under one roof.";

export const SERVICES: Service[] = [
  {
    slug: "ai-search",
    name: "AI Search Optimisation (GEO & AEO)",
    summary: "Get recommended by ChatGPT, Gemini, Perplexity and Google's AI answers.",
    included: [
      "AI Visibility Audit",
      "Generative Engine Optimisation (GEO)",
      "Answer Engine Optimisation (AEO)",
      "Structured Data & Schema Markup",
      "Entity & Brand Mentions",
      "Content Rewritten as Quotable Answers",
      "Citation & Share-of-Answer Tracking",
    ],
  },
  {
    slug: "website-design",
    name: "Website Design & Development",
    summary: "Fast, modern websites built to turn visitors into customers.",
    included: [
      "UI/UX Design",
      "SEO & Accessibility",
      "Animations & Interactions",
      "Integrations & Migrations",
      "Landing Page Optimisation",
      "E-commerce Solutions",
    ],
    note: "Platforms: Webflow, Framer, WordPress, Squarespace, Custom Code (React, Next.js)",
  },
  {
    slug: "website-redesign",
    name: "Website Redesign & Optimisation",
    summary: "Transform an outdated website into a modern experience that performs.",
    included: [
      "Full Visual Overhaul",
      "Improved User Journeys",
      "Speed & Performance Fixes",
      "Conversion Rate Improvements",
      "Mobile Optimisation",
      "Technical SEO Fixes",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI, Automation & Chatbot Solutions",
    summary: "Intelligent automation that works for your business 24/7.",
    included: [
      "Custom AI Chatbot Development",
      "Lead Qualification & Capture",
      "Automated Customer Support",
      "CRM & Calendar Integration",
      "Appointment Booking Systems",
      "Workflows & Pipelines",
      "Funnel Building",
      "AI Automation",
    ],
    note: "Why it matters: capture leads whilst you sleep, answer customer questions instantly, and free up your team for higher-value work.",
  },
  {
    slug: "advertising",
    name: "Digital Marketing & Advertising",
    summary: "Targeted campaigns that bring in qualified leads.",
    included: [
      "Google Ads Management",
      "Social Media Advertising",
      "Audience Research & Demographics",
      "Ad Copywriting",
      "Retargeting Campaigns",
    ],
  },
  {
    slug: "seo-content",
    name: "SEO & Content Creation",
    summary: "Get found by the right people at the right time.",
    included: [
      "Keyword Research",
      "Trend Analysis",
      "Content Strategy",
      "On-Page & Technical SEO",
      "Article & Blog Writing",
      "Sales Copywriting",
      "Video Production",
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    summary: "Consistent, engaging content across all your channels.",
    included: [
      "Graphics & Visual Assets",
      "Content Calendar Planning",
      "Scheduling & Publication",
      "Copywriting",
      "Performance Insights",
    ],
  },
  {
    slug: "email-sms",
    name: "Email & SMS Marketing",
    summary: "Nurture leads and stay top of mind with automated campaigns.",
    included: [
      "List Building",
      "Lead Nurturing Sequences",
      "Automation & Workflows",
      "Email & SMS Templates",
    ],
  },
  {
    slug: "brand-identity",
    name: "Brand & Identity",
    summary: "Build a brand that stands out and stays consistent.",
    included: [
      "Brand Naming",
      "Logo & Identity Design",
      "Brand Messaging & Positioning",
      "Brand Guidelines",
      "Pitch Decks",
      "Design Assets & Custom Graphics",
    ],
  },
];

export interface Category {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  shape: "rings" | "spiral" | "grid" | "stack";
}

export const CATEGORIES: Category[] = [
  {
    id: "ai-search",
    title: "AI Search & Visibility",
    blurb: "Be the brand AI assistants and search engines recommend.",
    tags: [
      "GEO",
      "AEO",
      "AI visibility audits",
      "SEO",
      "Structured data & schema",
      "Citation & mention tracking",
      "Content built for AI answers",
    ],
    shape: "rings",
  },
  {
    id: "growth",
    title: "Performance & Growth",
    blurb: "We track, measure and optimise so results keep compounding.",
    tags: [
      "Google Ads",
      "Social advertising",
      "Retargeting",
      "Analytics & reporting",
      "Campaign tracking & optimisation",
      "Conversion rate optimisation",
      "Email & SMS marketing",
    ],
    shape: "spiral",
  },
  {
    id: "web",
    title: "Websites & Automation",
    blurb: "Fast websites and smart automation that turn visitors into customers.",
    tags: [
      "Web design & development",
      "Website redesign",
      "E-commerce",
      "Landing pages",
      "AI chatbots",
      "Workflow automation",
      "CRM & booking integrations",
    ],
    shape: "grid",
  },
  {
    id: "brand",
    title: "Brand & Content",
    blurb: "A brand that stands out and content that keeps you visible.",
    tags: [
      "Brand identity",
      "Naming & messaging",
      "Pitch decks",
      "Content creation",
      "Video production",
      "Social media management",
      "Copywriting",
    ],
    shape: "stack",
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

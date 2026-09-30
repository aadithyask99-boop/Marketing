const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path: string) => `${base}${path}`;

export const SITE = {
  name: "Maximus Mediascape",
  tagline: "Search, story and strategy under one roof.",
  email: "hello@example.com",
  // PLACEHOLDER: replace with the real WhatsApp number (international format, digits only).
  whatsapp: "https://wa.me/15550000000",
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
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ROTATING_WORDS = ["Creative", "SEO", "Branding", "Marketing", "AI", "GEO", "AEO"];

export interface Service {
  slug: string;
  short: string;
  name: string;
  summary: string;
  included: string[];
  note?: string;
  category: "ai-search" | "growth" | "web" | "brand";
  detail: string;
  bestFor: string;
}

export const SERVICES_INTRO = "Everything you need to grow your business online, under one roof.";

export const SERVICES: Service[] = [
  {
    slug: "ai-search",
    category: "ai-search",
    detail: "Assistants like ChatGPT, Gemini and Perplexity answer questions with a handful of brands. We find out whether you are one of them, fix why you are not, and track your share of answers month by month.",
    bestFor: "Brands whose customers now ask AI before they search.",
    short: "AI Search",
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
    category: "web",
    detail: "Fast, accessible sites designed around one job: turning visitors into enquiries. Built on the platform that suits your team, from Webflow to custom code.",
    bestFor: "New brands, launches and teams outgrowing a template.",
    short: "Websites",
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
    category: "web",
    detail: "We audit what is slowing and confusing visitors, then rebuild the pages that matter most without losing the rankings you have earned.",
    bestFor: "Sites that look dated or quietly leak leads.",
    short: "Redesign",
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
    category: "web",
    detail: "Chatbots, booking flows and CRM hand-offs that answer instantly and pass warm leads to your team. Start with one repetitive task and grow from there.",
    bestFor: "Teams buried in repeat questions and manual follow-ups.",
    short: "AI & Automation",
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
    category: "growth",
    detail: "Clear targeting, sharp copy and tight tracking. We test fast, cut what does not pay back and scale what does.",
    bestFor: "Businesses that want qualified leads now, not in six months.",
    short: "Advertising",
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
    category: "ai-search",
    detail: "Rankings still drive trust and traffic. We pair technical SEO with content built to win the click and to be quoted in AI summaries, so one piece of work pays off in both places.",
    bestFor: "Teams with a good site that is under-found.",
    short: "SEO & Content",
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
    category: "brand",
    detail: "A calendar, the assets and the posting handled for you, with monthly insight on what is working so content earns its place.",
    bestFor: "Brands that know they should post but cannot keep up.",
    short: "Social Media",
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
    category: "growth",
    detail: "Most leads are not ready on day one. Automated sequences keep you in their inbox and on their phone until they are.",
    bestFor: "Brands with a list that has gone quiet, or none yet.",
    short: "Email & SMS",
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
    category: "brand",
    detail: "From name to guidelines: a brand that stands out in a crowded feed and is easy for people, and AI models, to recognise and remember.",
    bestFor: "Startups, rebrands and brands entering new markets.",
    short: "Brand & Identity",
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
  id: "ai-search" | "growth" | "web" | "brand";
  intro: string;
  title: string;
  blurb: string;
  tags: string[];
  shape: "rings" | "spiral" | "grid" | "stack";
}

export const CATEGORIES: Category[] = [
  {
    id: "ai-search",
    intro: "Buyers now ask ChatGPT and Google before they ask you. We make sure your brand is the one that shows up, gets cited and is trusted, in classic search and in AI answers alike.",
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
    intro: "Attention is easy to buy and easy to waste. We run campaigns tracked end to end, so every pound points at qualified leads and the results keep compounding.",
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
    intro: "Your site is where every channel lands. We design it to be fast, clear and easy to act on, then automate the follow-up so no enquiry waits.",
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
    intro: "A brand people remember makes every other channel work harder. We shape the identity, the voice and the everyday content that keeps you visible.",
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

export const CLIENTS = [
  "Panasonic",
  "Siemens",
  "WHO",
  "Shell Orbit",
  "Latvian Government",
  "Sweethawk",
  "GEA",
  "Apple",
  "OpenAI",
  "Microsoft",
  "Sony",
  "Flowergrid",
  "Sitemate",
  "Magic Personnel",
  "Bakwa",
];

// PLACEHOLDER testimonials: replace with real quotes before launch.
export const TESTIMONIALS = [
  {
    quote:
      "Working with the team felt effortless. They understood the brief fast, moved quickly, and the results spoke for themselves.",
    role: "Marketing Lead",
    company: "Client name",
    placeholder: true,
  },
  {
    quote:
      "Clear communication, sharp ideas and no fluff. Our search visibility and enquiries have both moved in the right direction.",
    role: "Head of Growth",
    company: "Client name",
    placeholder: true,
  },
  {
    quote:
      "They took a complicated project and made it simple. Professional, creative and genuinely fun to work with.",
    role: "Founder",
    company: "Client name",
    placeholder: true,
  },
];

// Placeholder links: replace "#" with the real profile URLs.
export const SOCIALS = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Facebook", href: "#" },
];

export const WORK = [
  { title: "Project One", category: "Branding", tone: "blue" },
  { title: "Project Two", category: "SEO + Content", tone: "ink" },
  { title: "Project Three", category: "Creative Campaign", tone: "cream" },
  { title: "Project Four", category: "GEO + AEO", tone: "cream" },
  { title: "Project Five", category: "Marketing", tone: "blue" },
  { title: "Project Six", category: "AI Workflows", tone: "ink" },
];

export const BLOG_CATEGORIES = [
  { slug: "case-studies", label: "Case Studies", shape: "stack" },
  { slug: "ai-search", label: "AI Search (GEO & AEO)", shape: "rings" },
  { slug: "seo-content", label: "SEO & Content", shape: "spiral" },
  { slug: "web-automation", label: "Web & Automation", shape: "grid" },
  { slug: "brand-social", label: "Brand & Social", shape: "stack" },
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]["slug"];

// PLACEHOLDER process copy and timings: adjust to how the team really works.
export const PROCESS = [
  {
    title: "Planning & Analysis",
    time: "Weeks 2-4",
    steps: [
      { name: "Discovery", text: "We learn your goals, audience and how visible you are today on Google and in AI answers.", get: "A clear brief and success metrics", icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 5v4l3 2" },
      { name: "Research", text: "An AI-visibility audit, competitor review and the questions your customers actually ask.", get: "Audit report and opportunity list", icon: "M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM16 16l5 5" },
      { name: "Strategy & roadmap", text: "We turn findings into priorities, a plan and the numbers we will be judged on.", get: "Roadmap with KPIs", icon: "M4 19V5M4 19h16M8 15l4-4 3 3 5-6" },
    ],
  },
  {
    title: "Design",
    time: "Weeks 4-10*",
    steps: [
      { name: "Brand & UX", text: "Identity, layout and prototypes that look like you and guide visitors to act.", get: "Design system and prototypes", icon: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" },
      { name: "Content architecture", text: "Page structure, schema plan and answer-ready copy so search and AI can quote you.", get: "Sitemap, schema plan, content briefs", icon: "M5 5h14v4H5zM5 12h6v7H5zM14 12h5v7h-5z" },
      { name: "Review & approval", text: "Feedback rounds until you are happy, then a clean sign-off before we build.", get: "Approved designs and copy", icon: "M5 12l4 4 10-10" },
    ],
  },
  {
    title: "Implementation",
    time: "Week 10 onwards",
    steps: [
      { name: "Build & automate", text: "The website, chatbots, workflows and integrations, built fast and tested properly.", get: "Live site and automations", icon: "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" },
      { name: "Launch & campaigns", text: "SEO, ads, social and email go live together so results build from day one.", get: "Campaigns running across channels", icon: "M5 19c1-6 5-10 14-14-1 9-5 13-11 14zM9 15l-4 4" },
      { name: "Measure & optimise", text: "We track citations, traffic and enquiries, report clearly and keep improving.", get: "Monthly reporting and support", icon: "M5 20V10M12 20V4M19 20v-7" },
    ],
  },
];

// PLACEHOLDER results: replace with real, verified numbers.
export const RESULTS = [
  { value: "+180%", label: "AI answer citations" },
  { value: "2.3x", label: "Qualified enquiries" },
  { value: "10 wks", label: "Typical time to launch*" },
];

// About page. The facts (2021, University of Surrey, cafes/salons/shops, UAE 2024, India 2025,
// 10+ projects) are the client's; the wording and everything else is a first draft to review.
export const ABOUT = {
  lede: "A marketing agency that began with friends helping local businesses, and now works across three countries.",
  chapters: [
    {
      year: "2021",
      place: "Guildford, UK",
      title: "It began with a shop window.",
      body: "At the University of Surrey, a few friends started helping cafes, salons and shops around Guildford with the basics: a website that worked, an Instagram that was not empty, and a Google listing people could actually find.",
      office: { label: "UK", tz: "Europe/London" },
    },
    {
      year: "2022",
      place: "Guildford, UK",
      title: "Learning by doing.",
      body: "One shop owner told another. Every project taught the same lesson: clear messages, fast pages and being easy to find at the exact moment someone searches beat noise every time.",
    },
    {
      year: "2024",
      place: "United Arab Emirates",
      title: "A second home.",
      body: "Clients beyond the UK wanted the same thing, so the UAE office opened in 2024 and gave us a window into a market that moves fast and expects polish.",
      office: { label: "UAE", tz: "Asia/Dubai" },
    },
    {
      year: "2025",
      place: "India",
      title: "Growing the team.",
      body: "The India office followed in 2025, adding design and build capacity and putting us across three time zones, so someone is always online.",
      office: { label: "India", tz: "Asia/Kolkata" },
    },
    {
      year: "2026",
      place: "Wherever people ask",
      title: "From Google to ChatGPT.",
      body: "People now ask AI before they ask anyone. What we learned on the high street became our GEO and AEO work: be found, cited and chosen wherever the question is asked.",
    },
  ],
  belief: [{ t: "People ask before they buy. We make sure the answer is " }, { hl: "you." }],
  // "10+" projects is the client's figure. "3 time zones" follows from the three offices.
  numbers: [
    { value: 2021, from: 2015, suffix: "", label: "Founded" },
    { value: 3, from: 0, suffix: "", label: "Countries" },
    { value: 10, from: 0, suffix: "+", label: "Projects" },
    { value: 3, from: 0, suffix: "", label: "Time zones, someone is always online" },
  ],
  values: [
    { title: "Be found", body: "Visibility across search and AI answers comes first.", shape: "rings", tone: "white" },
    { title: "Be clear", body: "Sharp positioning and copy that says one thing well.", shape: "grid", tone: "ink" },
    { title: "Be accountable", body: "Goals agreed up front and reported on plainly.", shape: "stack", tone: "red" },
    { title: "Be curious", body: "We test, read and try things before we recommend them.", shape: "spiral", tone: "white" },
    { title: "Be human", body: "Plain language and real people, never a wall of jargon.", shape: "rings", tone: "ink" },
  ],
} as const;

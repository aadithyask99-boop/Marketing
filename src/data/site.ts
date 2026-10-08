const base = import.meta.env.BASE_URL.replace(/\/$/, "");
// Internal page URLs end in a slash, matching the previous site (/our-services/, /blogs/slug/).
export const url = (path: string) => {
  const m = path.match(/^([^?#]*)(.*)$/)!;
  const p = m[1] === "/" || m[1].endsWith("/") || /\.\w+$/.test(m[1]) ? m[1] : `${m[1]}/`;
  return `${base}${p}${m[2]}`;
};

export const SITE = {
  name: "Maximus Mediascape",
  tagline: "Search, story and strategy under one roof.",
  email: "hello@maximusmediascape.com",
  whatsapp: "https://wa.me/447824678418",
  domain: "https://maximusmediascape.com",
  companyNumber: "15595795",
  founded: "2021",
  description:
    "Maximus Mediascape is a marketing agency for creative, SEO, branding, marketing, AI, GEO and AEO.",
};

// Enquiries and newsletter sign-ups post to this Formspree form, which emails them to the team.
// The address is public by design, so it lives in code and needs no hosting settings.
// Set PUBLIC_LEAD_ENDPOINT at build time to override it.
export const FORM_ENDPOINT: string = import.meta.env.PUBLIC_LEAD_ENDPOINT || "https://formspree.io/f/mkjgapej";

// Google Analytics 4 Measurement ID (starts with G-). If gaId is ever emptied the site adds no tracking and shows no cookie notice.
// Set it here, or at build time with PUBLIC_GA_ID. mode:
//   "notice" = a one-button notice ("Okay"); Google Analytics runs on the real domain unless the visitor switches it off on the privacy page (current choice).
//   "optin"  = Accept / Necessary only bar; Google loads only after Accept (use this before remarketing or ads).
//   "none"   = no notice, Google Analytics runs for everyone on the real domain.
export const ANALYTICS = { gaId: (import.meta.env.PUBLIC_GA_ID as string | undefined) || "G-1CLZBLNEDP", adsId: (import.meta.env.PUBLIC_ADS_ID as string | undefined) || "AW-16686403752", metaPixelId: (import.meta.env.PUBLIC_META_PIXEL_ID as string | undefined) || "1106508811857683", clarityId: (import.meta.env.PUBLIC_CLARITY_ID as string | undefined) || "vfspk7jbc0", mode: "notice" as "none" | "notice" | "optin" };

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

export interface NavItem { href: string; label: string; children?: { href: string; label: string; note: string }[] }
export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Services", children: [
    { href: "/our-services/starter-plan", label: "Starter Plan", note: "Website, one off, from £999" },
    { href: "/our-services/care-and-growth-plans", label: "Care and Growth Plans", note: "Monthly plans from £599" },
  ] },
  { href: "/work", label: "Work", children: [{ href: "/work/portfolio", label: "Portfolio", note: "Brand identity, websites, apps and Instagram grids" }] },
  { href: "/blogs", label: "Blog" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
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

// Real client quotes. "Undisclosed Client" is used where the client asked not to be named.
export const TESTIMONIALS = [
  {
    quote: "Maximus Mediascape brought our app idea to life and made the whole process seamless. I couldn\u2019t recommend their team more!",
    name: "Mathew Chiweda",
    detail: "Co-Founder, iAudit Global",
  },
  {
    quote: "Maximus Mediascape helped us turn Bakwa\u2019s story into something people wanted to talk about. From social media to PR, they helped us get noticed and featured by The Better India. Couldn\u2019t recommend the team more!",
    name: "Aswin J",
    detail: "Co-Founder, Bakwa",
  },
  {
    quote: "Maximus Mediascape transformed our website and helped us build a much stronger presence on Google. The team understood what we needed, delivered brilliantly, and we couldn\u2019t recommend them more.",
    name: "Undisclosed Client",
    detail: "Web Development & SEO",
  },
  {
    quote: "Maximus Mediascape helped put our brand on the map in ChatGPT and AI search. We\u2019re now showing up where our customers are searching, and we couldn\u2019t be happier with the results.",
    name: "Undisclosed Client",
    detail: "Head Of Marketing, FMCG Company London",
  },
];

export const OFFICES = [
  {
    country: "United Kingdom",
    code: "GB",
    street: "17 Hawthorn Road",
    locality: "Woking",
    region: "Surrey",
    postcode: "GU22 0BA",
    phone: "+44 7824 678418",
    tel: "+447824678418",
  },
  {
    country: "United Arab Emirates",
    code: "AE",
    street: "FOB50951 Compass Building, Al Shohad",
    locality: "Ras Al Khaimah",
    region: "",
    postcode: "",
    phone: "+971 56 800 7976",
    tel: "+971568007976",
  },
];

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/maximus-mediascape/" },
  { name: "Instagram", href: "https://www.instagram.com/maximusmediascape/" },
  { name: "Medium", href: "https://medium.com/@maximusmediascape" },
];

export const BLOG_CATEGORIES = [
  { slug: "case-studies", label: "Case Studies", shape: "stack" },
  { slug: "ai-search", label: "AI Search (GEO & AEO)", shape: "rings" },
  { slug: "seo-content", label: "SEO & Content", shape: "spiral" },
  { slug: "web-automation", label: "Web & Automation", shape: "grid" },
  { slug: "brand-social", label: "Brand & Social", shape: "stack" },
] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number]["slug"];

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

// Results come from our case studies (see the blog). "reported" means the client gave us the figure.
export const RESULTS = [
  { value: "3,000+", label: "Enquiries", who: "Bakwa, 3 months, zero ad spend", reported: true, href: "/blogs/bakwa-brand-from-scratch" },
  { value: "31.0%", label: "AI-search visibility", who: "Croydon wellness brand, up from 7.4% in 12 months", reported: false, href: "/blogs/croydon-wellness-ai-search" },
  { value: "5,000", label: "AI citations", who: "iAudit Global", reported: true, href: "/blogs/iaudit-global-organic-growth" },
];
// About page.
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
  ],
  belief: [{ t: "People ask before they buy. We make sure the answer is " }, { hl: "you." }],
  clocks: [
    { city: "United Kingdom", short: "UK", tz: "Europe/London", lat: 51.24, lon: -0.57 },
    { city: "United Arab Emirates", short: "UAE", tz: "Asia/Dubai", lat: 25.2, lon: 55.27 },
    { city: "India", short: "India", tz: "Asia/Kolkata", lat: 20.6, lon: 78.9 },
  ],
  values: [
    { title: "Be found", body: "Visibility across search and AI answers comes first.", image: "found" },
    { title: "Be clear", body: "Sharp positioning and copy that says one thing well.", image: "clear" },
    { title: "Be accountable", body: "Goals agreed up front and reported on plainly.", image: "accountable" },
    { title: "Be curious", body: "We test, read and try things before we recommend them.", image: "curious" },
    { title: "Be human", body: "Plain language and real people, never a wall of jargon.", image: "human" },
  ],
} as const;

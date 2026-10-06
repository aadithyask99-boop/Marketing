// Copy for /plans, supplied by the client and kept verbatim. British English, no dashes as punctuation.
// Prices exclude VAT. Do not add plans, features, discounts, statistics or promises about rankings, AI citations, links or press.

export const PLANS_META = {
  title: "Care and Growth plans",
  description: "Monthly plans that keep your business visible on the map, in search and in AI answers. Care is £599 a month and Growth is £999 a month, plus VAT.",
};

export const HERO = {
  h1: "Plans that keep you found, trusted and contacted",
  intro: "Buyers now ask ChatGPT and Google before they ask you. Our plans keep your business visible on the map, in search and in AI answers, then turn that visibility into enquiries.",
  primary: { label: "Compare plans", href: "#plans" },
  secondary: { label: "See everything we do", href: "/our-services/" },
  vat: "All prices exclude VAT.",
};

export const STARTER_HREF = "/plans/starter/";
export const CUSTOM_HREF = "/contact-us/?service=Custom%20Plan";

export const JOURNEY = {
  h2: "Start with the foundation, then grow",
  steps: [
    { name: "Website Starter", price: "from £999", unit: "one off", desc: "A fast, search ready five page website, built as the foundation for everything else.", link: { label: "Website Starter", href: STARTER_HREF } },
    { name: "Care", price: "£599", unit: "a month", desc: "Stay visible while you run the business." },
    { name: "Growth", price: "£999", unit: "a month", desc: "Turn visibility into enquiries." },
    { name: "Custom", price: "Quoted", unit: "", desc: "For larger or multi location businesses.", link: { label: "Talk to us", href: CUSTOM_HREF } },
  ],
  helper: "Already have a website? You can start straight on Care or Growth. We will work with what you have.",
};

export interface PlanRow { label: string; text: string }
export interface Plan {
  id: string;
  name: string;
  price: string;
  unit: string;
  term: string;
  badge?: string;
  headline: string;
  summary: string;
  monthOne: { title: string; items: string[] };
  monthly: { title: string; rows: PlanRow[] };
  note?: string;
  cta: { label: string; href: string };
}

export const PLANS: { care: Plan; growth: Plan } = {
  care: {
    id: "care",
    name: "Care",
    price: "£599",
    unit: "a month, plus VAT",
    term: "Three month minimum, then rolling monthly.",
    headline: "Be the business people find: on Google, on the map and in AI answers.",
    summary: "A steady, done for you presence that keeps you visible while you run the business.",
    monthOne: {
      title: "Month one: we set the foundation",
      items: [
        "A visibility baseline report showing how you appear in Google, maps, ChatGPT, Gemini and Perplexity",
        "Google Business Profile audit and optimisation",
        "Directory listings cleaned up so your details match everywhere",
        "Schema fixes so search and AI tools can read your site",
        "A 30 day quick wins list and a 90 day roadmap",
        "Founder profile and entity alignment",
      ],
    },
    monthly: {
      title: "Every month: we keep you visible",
      rows: [
        { label: "Local presence", text: "4 Google Business Profile posts, photo and Q&A updates, a review request link and QR code, and drafted replies to new reviews" },
        { label: "Search and AI", text: "2 SEO and GEO articles, GEO and AEO foundations, and AI visibility checks" },
        { label: "Social", text: "4 posts and stories, with a content calendar, scheduling and location tags. Good reviews become social posts." },
        { label: "Website", text: "Updates, plus speed and security checks" },
        { label: "Reporting", text: "A monthly report on rankings, profile views, calls, directions, reviews and AI visibility, plus a quarterly strategy call" },
      ],
    },
    cta: { label: "Start with Care", href: "/contact-us/?service=Care%20Plan" },
  },
  growth: {
    id: "growth",
    name: "Growth",
    price: "£999",
    unit: "a month, plus VAT",
    term: "Six month minimum, then rolling monthly.",
    badge: "Most popular",
    headline: "Turn visibility into enquiries.",
    summary: "Local search, AI visibility, ads and follow up working as one system, reported in calls, forms and cost per lead.",
    monthOne: {
      title: "Month one: we build the engine",
      items: [
        "Everything in Care's month one, plus a competitor comparison",
        "Call, form and enquiry tracking",
        "Your first paid campaign, built and launched",
        "AI lead chatbot and CRM set up",
        "Your first local SEO page",
      ],
    },
    monthly: {
      title: "Every month: we get you found, trusted and contacted",
      rows: [
        { label: "Get found", text: "1 local SEO page (a service page or a town or area page, with local schema, an embedded map and FAQs), 4 SEO and GEO articles, weekly Google Business Profile posts, review automation with managed replies, and listings upkeep" },
        { label: "Get trusted", text: "Entity and brand mention work, authority building on relevant third party platforms such as Medium, Substack and industry communities, link opportunities and digital PR outreach" },
        { label: "Get leads", text: "1 managed Google or Meta campaign with setup and management included, 1 email campaign with lead nurturing, and your chatbot and CRM kept running" },
        { label: "Social", text: "8 posts and stories (2 in the founder's voice), replies to comments and messages within one working day, and reviews and local wins turned into posts" },
        { label: "Reporting", text: "A monthly report on enquiries, calls, forms, cost per lead and AI share of answers, plus a monthly strategy call" },
      ],
    },
    note: "Ad spend is paid separately. We recommend at least £500 a month, with £300 as the minimum.",
    cta: { label: "Start with Growth", href: "/contact-us/?service=Growth%20Plan" },
  },
};

// Third panel, after Growth. Draft for sign-off: built from the existing Custom plan line ("larger or multi location businesses") and the add-ons.
export const EVERYTHING: Plan = {
  id: "everything",
  name: "Want everything?",
  price: "Quoted",
  unit: "around your business",
  term: "Agreed with you before we start.",
  headline: "One plan for the whole business.",
  summary: "For larger or multi location businesses that want local search, AI visibility, ads, follow up and social covered together.",
  monthOne: {
    title: "What it can bring together",
    items: [
      "Everything in Growth: local search, AI visibility, a managed campaign, email follow up and social",
      "Every extra location, each with its own Google Business Profile, listings and reviews",
      "Any add-on from the table below, such as email and SMS, the chatbot, short form video or digital PR",
      "Extra campaigns, articles and video where your business needs more",
    ],
  },
  monthly: {
    title: "How we put it together",
    rows: [
      { label: "Tell us", text: "What you want to be found for, where you work and how many locations you run" },
      { label: "Your plan", text: "We come back with a plan and a price built around your business, not a fixed package" },
      { label: "The price", text: "Quoted before we start. Prices exclude VAT." },
    ],
  },
  cta: { label: "Talk to us about everything", href: CUSTOM_HREF },
};

export const COMPARE = {
  h2: "What changes when you move up",
  caption: "Care and Growth compared",
  head: ["", "Care", "Growth"],
  rows: [
    ["Price", "£599 a month", "£999 a month"],
    ["Minimum term", "3 months", "6 months"],
    ["Best for", "Staying visible locally and in AI answers", "Turning visibility into enquiries"],
    ["Local SEO page build", "Add on", "1 a month"],
    ["SEO and GEO articles", "2 a month", "4 a month"],
    ["Social posts and stories", "4 a month", "8 a month"],
    ["Paid ads", "Add on", "1 managed campaign included"],
    ["Email", "Add on", "1 campaign a month"],
    ["AI chatbot and CRM", "Add on", "Included"],
    ["Authority building and digital PR", "Not included", "Included"],
    ["Reporting", "Monthly report", "Monthly report"],
    ["Strategy call", "Quarterly", "Monthly"],
  ],
};

// Content section after the comparison: how to choose. Draft written from the plan copy, for sign-off.
export const CHOOSE = {
  label: "Choosing a plan",
  h2: "Which plan is right for you?",
  paras: [
    `Choose <strong>Care</strong> if the business is doing well and you want to stay found. We keep your Google Business Profile, listings, articles and social posts up to date, and report each month on how you appear on Google, on maps and in AI answers.`,
    `Choose <strong>Growth</strong> if you want more calls and forms. It adds local pages, a managed Google or Meta campaign, a chatbot and email follow up, and we report in enquiries and cost per lead.`,
    `Both are built from the services we run day to day: <a href="/our-services/#ai-search">AI search and visibility</a>, <a href="/our-services/#seo-content">SEO and content</a>, <a href="/our-services/#advertising">paid advertising</a>, <a href="/our-services/#ai-automation">automation and chatbots</a>, <a href="/our-services/#website-design">websites</a> and <a href="/our-services/#social-media">social media</a>. You can move from Care to Growth at any time, and add only what you need.`,
  ],
};

export interface Addon { cells: [string, string, string, string]; sub?: [string, string, string, string]; subLabel?: string }
export const ADDONS: { h2: string; intro: string; head: string[]; rows: Addon[]; more: { text: string; link: { label: string; href: string } } } = {
  h2: "Add what you need",
  intro: "Add or remove add-ons month by month. Prices are per month unless stated, excluding VAT.",
  head: ["Add-on", "What it does", "Price", "Available on"],
  rows: [
    { cells: ["Paid ads (Google or Meta)", "Start getting enquiries from paid search or social", "£250 a month, plus £149 setup", "Care"], sub: ["Second campaign or platform", "Reach more of your market", "£149 a month", "Growth"] },
    { cells: ["Email and SMS", "One email campaign a month to follow up leads and bring customers back, plus text campaigns, messages charged at cost", "£250 a month", "Care, Growth"], sub: ["Extra campaign", "One more campaign", "£99 each", "Care, Growth"] },
    { cells: ["Additional local SEO page", "A new service, town or area page", "£150", "Care, Growth"] },
    { cells: ["AI lead chatbot", "Answers visitors and captures leads around the clock", "£299 setup, plus £39 a month", "Care"] },
    { cells: ["Review automation", "Automated review requests and follow ups", "£59 a month", "Care"] },
    { cells: ["Extra location", "Google Business Profile, listings and reviews for each extra location", "From £149 a month", "Care, Growth"] },
    { cells: ["Extra SEO and GEO article", "One more article", "£99", "Care, Growth"] },
    { cells: ["Short form video", "A Reel edited from your own clips", "£75 each", "Care, Growth"] },
    { cells: ["Digital PR campaign", "Earn mentions that build trust and AI visibility. Placements cannot be guaranteed.", "From £299", "Care, Growth"] },
  ],
  more: { text: "Need something else? We build custom plans for larger or multi location businesses.", link: { label: "Talk to us", href: CUSTOM_HREF } },
};

export const FAQ_SECTION = {
  h2: "Questions people ask",
  items: [
    { q: "Can I start with Care and move to Growth later?", a: "Yes. You can upgrade at any time. The Growth minimum term starts from the month you move up." },
    { q: "Do I need a new website first?", a: `Not necessarily. If your site is in good shape, we work with it. If it is not, our <a href="${STARTER_HREF}">Website Starter</a>, from £999, gives you a fast, search ready five page site to build on.` },
    { q: "What does ad spend look like?", a: "Ad spend is paid directly to Google or Meta and is separate from our fee. We recommend at least £500 a month, with £300 as the minimum. Platform charges and taxes are in addition." },
    { q: "Do you guarantee rankings or AI citations?", a: "No, and nobody honestly can. We report on the activity and the results we can measure, month by month." },
    { q: "How long until I see results?", a: "Local search results typically take three to six months to show movement. You will see quick wins and reporting from month one." },
    { q: "Who owns the accounts and content?", a: "You do. Your ad accounts, analytics, content and website stay yours." },
    { q: "What if I have more than one location?", a: "Each extra location is an add-on, from £149 a month." },
    { q: "What about rebrands, redesigns, video or e-commerce?", a: `Those are projects, quoted separately. <a href="/our-services/">See all services</a>.` },
    { q: "What does support cover?", a: "Support covers the services in your plan. New projects and extra services are quoted separately. We include up to two rounds of revisions per piece, with a five working day approval window. Late approvals move content to the next month." },
    { q: "How do founder voice posts work?", a: "They depend on a 20 minute monthly call with the founder. We write the posts from that conversation." },
  ],
  smallPrint: "Prices exclude VAT and ad spend. Social channels are agreed at onboarding. Authority building platforms are chosen for relevance, and we do not guarantee placements or mentions.",
};

export const FINAL_CTA = {
  h2: "Not sure which plan fits?",
  body: "Tell us what you want to be found for and we will come back with a real plan, not a sales pitch.",
};

export const FAQ_SIDE = { line: "Still unsure? Ask us anything.", cta: { label: "Talk to us", href: "/contact-us/" } };

// First draft for sign-off, built from the client's own phrases
export const NOTE = {
  label: "A note from the team",
  statement: "You do not have to buy everything at once.",
  paras: [
    "Start with the foundation, then add monthly help when you are ready. Care keeps you visible while you run the business. Growth turns that visibility into enquiries. If you already have a website, you can start straight on Care or Growth.",
    "If it is not the right fit, we will say so. Tell us what you want to be found for and we will come back with a real plan, not a sales pitch.",
  ],
  sign: "The Maximus Mediascape team",
};

export const PATH = {
  label: "Pick your path to progress",
  rows: [
    { name: "Starter plan", price: "from £999, one off", text: "A fast, search ready five page website, built as the foundation for everything else.", link: "See the Starter plan", href: STARTER_HREF },
    { name: "Care", price: "£599 a month", text: "Stay visible while you run the business.", link: "See Care", href: "#care" },
    { name: "Growth", price: "£999 a month", text: "Turn visibility into enquiries.", link: "See Growth", href: "#growth" },
    { name: "Everything", price: "Quoted", text: "For larger or multi location businesses.", link: "See Everything", href: "#everything" },
  ],
};

// Copy for /our-services/starter-plan. First drafts: wording to be signed off by the client (see HANDOVER.md).
// Everything here restates facts already on the plans pages or in the published Bakwa case study.

export const panelCopy: Record<string, { statement: string; cta: string }> = {
  Understand: { statement: "Know your market before a single page is designed, so every pound goes where it counts.", cta: "Start with the plan" },
  Build: { statement: "A fast, mobile-ready site made for you, not squeezed into a template.", cta: "Get a quote for yours" },
  "Get found": { statement: "Set up to be found nearby, on Google, on maps and in AI search.", cta: "Get found nearby" },
  "Hand over": { statement: "You leave ready to run it, with a plan for the first 90 days.", cta: "Start your project" },
};

// "Not a fit?" lines: only what the page already says is not included
export const notFit = [
  "You need an online shop or a booking system: we quote those separately.",
  "You need extensive copywriting or photography: we quote those separately.",
  "You need a full brand identity first: tell us and we will quote it.",
];

// Note from the team. First draft for sign-off; no founder name or photo yet.
export const teamNote = {
  statement: "A good website should not need an agency budget.",
  paras: [
    "If you are starting out, or running a small business on a tight budget, you do not need a big retainer to get a good website. You need a clear plan, a site that loads fast on a phone, and someone who tells you plainly what it costs and what it does not.",
    "That is what the Starter package is. We look at your market first, then design and build the site around your customers, set it up to be found on Google and in AI search, and hand it over so you can run it yourself. The price is fixed, you own the result, and anything outside the package is quoted before we start.",
    "If it is not the right fit, we will say so. Tell us what you are building and we will come back with an honest plan and a start date.",
  ],
  sign: "The Maximus Mediascape team",
};

// Monthly plans shown after the FAQ. Copy and prices come from the plans page (src/data/plans.ts); no other plans exist.
import { PLANS } from "./plans";
export const programs = [
  { title: "Care", price: "£599 a month, plus VAT", tag: "(Local presence and AI visibility)", text: PLANS.care.summary, href: "/our-services/care-and-growth-plans#care", art: "care", label: "Care" },
  { title: "Growth", price: "£999 a month, plus VAT", tag: "(Enquiries, ads and follow up)", text: PLANS.growth.summary, href: "/our-services/care-and-growth-plans#growth", art: "growth", label: "Growth" },
];

// Website designs from the portfolio (ids in DESIGN_WALL, src/data/design.ts), shown with the price
export const designPicks = ["web-bakwa", "web-diagramx", "web-flowergrid"];

export const audience = [
  { name: "New startups", text: "You have an idea and need a credible home online before you launch." },
  { name: "Local service businesses", text: "You want to be found on maps and in local search when people nearby look for you." },
  { name: "Consultants and professionals", text: "You need a site that says clearly what you do and makes it easy to get in touch." },
  { name: "Studios and makers", text: "You want a site that looks the part without an agency-sized budget." },
  { name: "Growing small businesses", text: "Your current site is slow or dated and you want a fresh start, with a plan to grow." },
];

// iAudit Global: client-reported figures from the published case study (/blogs/iaudit-global-organic-growth).
// The AI citations figure is the Microsoft Copilot count from the Bing Webmaster Tools screenshot in the case study (3 months), not an all-time total.
export const auditProof = [
  { name: "Website pages", desc: "Built from scratch", tag: "(Website)", prefix: "", to: 80, dec: 0, suffix: "+", tone: "cream", n: 3 },
  { name: "SEO-led articles", desc: "Published and growing", tag: "(Content)", prefix: "~", to: 40, dec: 0, suffix: "", tone: "ink", n: 3 },
  { name: "Countries", desc: "With website impressions", tag: "(Reach)", prefix: "", to: 129, dec: 0, suffix: "", tone: "red", n: 3 },
  { name: "AI citations", desc: "Microsoft Copilot, 3 months", tag: "(AI search)", prefix: "", to: 1.6, dec: 1, suffix: "K", tone: "cream", n: 3.4 },
  { name: "Organic LinkedIn followers", desc: "With no paid spend", tag: "(LinkedIn)", prefix: "", to: 872, dec: 0, suffix: "", tone: "ink", n: 3 },
];
export const AUDIT_NOTE = "Figures reported by iAudit Global and the platforms named. This was a 12-month engagement, not the Starter package; it shows what steady, organic work builds.";

// Two extra questions for startups, added to the shared starter FAQ
export const extraFaq = [
  { q: "I'm a new business with no brand yet. Is this right for me?", a: "Yes, if you know what you offer and who it's for. Bring your business details and anything you already have, such as a logo or photos, and we shape the strategy and design plan around them. If you need a full brand identity as well, tell us and we'll quote it separately." },
  { q: "Can I start small and add more later?", a: "Yes. The Starter package covers up to 5 pages. You can add pages later, and we offer monthly care and growth plans after launch. Anything extra is quoted before we start." },
];

export const marquee = ["Startups", "Small businesses", "Local brands", "New ventures"];

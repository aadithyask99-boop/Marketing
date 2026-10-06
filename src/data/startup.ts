// Copy for /website-for-startups. First drafts: wording to be signed off by the client (see HANDOVER.md).
// Everything here restates facts already on /website-starter or in the published Bakwa case study.

export const panelCopy: Record<string, { statement: string; cta: string }> = {
  Understand: { statement: "Know your market before a single page is designed, so every pound goes where it counts.", cta: "Start with the plan" },
  Build: { statement: "A fast, mobile-ready site made for you, not squeezed into a template.", cta: "Get a quote for yours" },
  "Get found": { statement: "Set up to be found nearby, on Google, on maps and in AI search.", cta: "Get found nearby" },
  "Hand over": { statement: "You leave ready to run it, with a plan for the first 90 days.", cta: "Start your project" },
};

export const budget = [
  { n: "01", title: "One fixed price", tag: "(Fixed price)", text: "From £999, one-time. 50% to start and 50% on launch, with no surprises along the way.", link: "See the price", href: "#price", art: "price", label: "£999" },
  { n: "02", title: "Made for you", tag: "(Built for you)", text: "Bespoke, not a template. Up to 5 pages and 2 rounds of revisions, with extras quoted before we start.", link: "See what's included", href: "#included", art: "site", label: "Bespoke" },
  { n: "03", title: "You own it", tag: "(Yours to keep)", text: "Once the final payment is made, the website and its content are yours.", link: "Read the questions", href: "#faq-title", art: "key", label: "Yours" },
];

export const audience = [
  { name: "New startups", text: "You have an idea and need a credible home online before you launch." },
  { name: "Local service businesses", text: "You want to be found on maps and in local search when people nearby look for you." },
  { name: "Consultants and professionals", text: "You need a site that says clearly what you do and makes it easy to get in touch." },
  { name: "Studios and makers", text: "You want a site that looks the part without an agency-sized budget." },
  { name: "Growing small businesses", text: "Your current site is slow or dated and you want a fresh start, with a plan to grow." },
];

// Bakwa: client-reported figures from the published case study (/blogs/bakwa-brand-from-scratch).
// The pound revenue figure is a purchasing-power estimate of the rupee figure Bakwa reported, marked with an asterisk (see BAKWA_NOTE).
export const bakwa = [
  { label: "Organic Instagram followers", to: 5.3, dec: 1, suffix: "K+", text: "in three months, with no paid follower growth." },
  { label: "Enquiries generated", to: 3000, dec: 0, suffix: "+", text: "through one page and one enquiry form." },
  { label: "Revenue generated", prefix: "£", to: 30, dec: 0, suffix: "K", star: true, text: "from a limited budget." },
  { label: "Spent on advertising", prefix: "£", to: 0, dec: 0, suffix: "", text: "no paid advertising behind the campaign." },
];
export const BAKWA_NOTE = "* Bakwa reported ₹10 lakh+ in revenue. £30K is our estimate of what that is worth in UK buying power (a purchasing-power equivalent), not a currency conversion.";

// Two extra questions for startups, added to the shared starter FAQ
export const extraFaq = [
  { q: "I'm a new business with no brand yet. Is this right for me?", a: "Yes, if you know what you offer and who it's for. Bring your business details and anything you already have, such as a logo or photos, and we shape the strategy and design plan around them. If you need a full brand identity as well, tell us and we'll quote it separately." },
  { q: "Can I start small and add more later?", a: "Yes. The Starter package covers up to 5 pages. You can add pages later, and we offer monthly care and growth plans after launch. Anything extra is quoted before we start." },
];

export const marquee = ["Startups", "Small businesses", "Local brands", "New ventures"];

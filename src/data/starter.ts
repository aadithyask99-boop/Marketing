// Starter package content, shared by /our-services/starter-plan
export const START = "I'd like the Starter website package (from £999)";
export const CHECK = "I'd like a free 15-minute website check";

// 16 items, grouped by stage
export const stages = [
  {
    name: "Understand",
    line: "Know the market before we build.",
    items: [
      ["Market and competitor analysis", "See who you're up against and where the gaps are."],
      ["Keyword and competitor snapshot", "A one-page report: the searches to target and who ranks today."],
      ["Website strategy and design plan", "A plan and a look built around your customers."],
    ],
  },
  {
    name: "Build",
    line: "A fast, mobile-ready site made for you.",
    items: [
      ["Bespoke website development", "Built for you, not squeezed into a template."],
      ["Mobile-optimised and local-SEO-ready", "Fast on phones and set up to be found nearby."],
      ["Conversion basics", "Click-to-call, WhatsApp button and a contact form that works."],
      ["Speed and launch checks", "Mobile and speed checks plus a launch checklist before going live."],
      ["Legal pages and cookie notice", "Privacy, Terms and a cookie notice done for you."],
    ],
  },
  {
    name: "Get found",
    line: "Set up to be found nearby.",
    items: [
      ["Google Business Profile set-up", "Set up and optimised so you show up on maps and local search."],
      ["AI-search ready", "FAQ content and structured data so assistants like ChatGPT can quote you."],
      ["Analytics and Search Console", "Tracking set up, with a simple monthly view of what's working."],
      ["Reviews kit", "QR code, short link and message templates to collect Google reviews."],
    ],
  },
  {
    name: "Hand over",
    line: "You're ready to run it.",
    items: [
      ["Basic training and handover", "A recorded walkthrough so you can manage it yourself."],
      ["90-day implementation plan", "A clear step-by-step plan for the first three months."],
      ["30 days post-launch support", "Questions and small fixes after launch."],
      ["Business email set-up*", "An address on your own domain, such as hello@yourbusiness.co.uk."],
    ],
  },
];

export const steps = [
  ["Weeks 1 to 2", "Analysis and strategy", "We study your market and competitors and agree the plan.", "A one-page market and competitor snapshot"],
  ["Weeks 3 to 4", "Design", "You see the look and layout and tell us what to change.", "Design mock-ups to review"],
  ["Weeks 5 to 7", "Build", "We develop, connect your local SEO set-up and test everything.", "A tested, mobile-ready site"],
  ["Week 8", "Launch and training", "Go live, then a handover call.", "Your live site and a recorded walkthrough"],
  ["Next 90 days", "Your growth plan", "You follow the plan, with 30 days of support from us.", "Your 90-day plan and support"],
];
export const included = ["Everything listed above", "Up to 5 pages", "2 rounds of revisions", "You own the site and content"];
export const notIncluded = ["Domain, hosting and email running costs", "Paid advertising", "Extensive copywriting or photography", "E-commerce or booking systems, quoted separately"];

export const faq = [
  { q: "How much does it cost?", a: "The Starter package is £999 as a one-time fee, with 50% to start and 50% on launch. Domain, hosting and business email have separate running costs charged by the provider." },
  { q: "How long does it take?", a: "About two months from kick-off to launch. Timelines depend on how quickly we can get your content and feedback, and can extend for bigger requirements." },
  { q: "What do I need to provide?", a: "Your business details, any logos or photos you already have, and a few hours across the project for feedback. We guide you through the rest." },
  { q: "How many pages and revisions are included?", a: "The package covers up to 5 pages and 2 rounds of revisions. Anything beyond that is quoted before we start so there are no surprises." },
  { q: "Who owns the website?", a: "You do. Once the final payment is made, the website and its content are yours." },
  { q: "Do you guarantee rankings?", a: "No one can honestly guarantee rankings. We build the site and set-up properly for local search and AI search, give you a clear plan and show you what to do next." },
  { q: "What isn't included?", a: "Paid advertising, extensive copywriting or photography, e-commerce or booking systems, and the running costs of domain, hosting and email. We can quote any of these separately." },
  { q: "What happens after launch?", a: "You get 30 days of support and a 90-day plan to follow. If you'd like us to keep going, we offer monthly SEO, content and care plans." },
];

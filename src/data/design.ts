import type { ImageMetadata } from "astro";

// Design work shown on /work/design. Images live in src/assets/design/<slug>/ (WebP, rendered from the
// clients' brand books). Add a project here and it appears in the rail and the page automatically.
// PLACEHOLDER: the stories below are first drafts written from facts the team gave us and the brand books. Review before launch.

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/design/**/*.webp", { eager: true });
const img = (slug: string, file: string): ImageMetadata => {
  const hit = files[`../assets/design/${slug}/${file}.webp`];
  if (!hit) throw new Error(`Missing design image: ${slug}/${file}.webp`);
  return hit.default;
};

export type DesignKind = "brand" | "social" | "web";

export const DESIGN_KINDS: Record<DesignKind, string> = {
  brand: "Brand identity",
  social: "Social grids",
  web: "Web design",
};

export interface DesignTile {
  src: ImageMetadata;
  alt: string;
  caption: string;
  /** Width in a 12-column grid on desktop. Height follows the image's own ratio. */
  w: number;
}

export interface Swatch {
  name: string;
  /** Shown only where the client's brand book states it. */
  hex?: string;
  /** Fill colour for the swatch. */
  color: string;
}

export interface DesignIdea {
  title: string;
  items: { k: string; v: string }[];
}

export interface DesignStory {
  /** Shown as the H3 of the story block. Written for people first, with the search term used naturally. */
  heading: string;
  /** Three short paragraphs. The first is a plain answer: who, where, what we made. */
  paras: [string, string, string];
  /** "At a glance" rows. Only facts the client or brand book gave us. */
  glance: { k: string; v: string }[];
  /** For JSON-LD keywords. */
  keywords: string[];
  /** For JSON-LD contentLocation. Left out where the client's location is not public. */
  place?: string;
}

export interface DesignProject {
  slug: string;
  kind: DesignKind;
  name: string;
  tagline: string;
  story: DesignStory;
  made: string[];
  tags: string[];
  palette: Swatch[];
  type: string[];
  /** The concept behind the identity, taken from the client's brand book. */
  idea: DesignIdea;
  /** Placeholder colour behind tiles while images load. */
  tint: string;
  tiles: DesignTile[];
}

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    slug: "magic-personnel",
    kind: "brand",
    name: "Magic Personnel",
    tagline: "Housekeeping and personal assistance, London",
    story: {
      heading: "A housekeeping brand in London, with a little magic added",
      paras: [
        "Magic Personnel is a housekeeping and personal assistance business in London. The founder wanted a brand that felt simple and aesthetic, and she already had a logo that worked beautifully.",
        "So we didn't start again. We kept the logo and added the small details that tell the story: a keyhole in the M for trust, a wand for the I, a serving cloche in the e for hospitality, and a roof with a spark over the top for home. Easy to miss at first glance, hard to unsee after.",
        "Then we built the rest of the brand around it: a black, blue and gold palette, a clean geometric typeface, and a brand book showing the logo on totes, caps, boxes and print. It is branding for a small business done lightly: respect what already works, and add the details people remember.",
      ],
      glance: [
        { k: "Client", v: "Housekeeping and personal assistance" },
        { k: "Where", v: "London" },
        { k: "Brief", v: "Simple and aesthetic" },
        { k: "Starting point", v: "An existing logo we refined" },
      ],
      keywords: ["branding for small businesses", "housekeeping brand London", "logo refinement", "brand book"],
      place: "London",
    },
    made: ["Logo and wordmark", "Logo concept and meaning", "Colour palette and typography", "Brand book", "Merchandise and print mockups"],
    tags: ["Logo", "Identity", "Brand book"],
    palette: [
      { name: "Black", hex: "#000000", color: "#000000" },
      { name: "Magic Blue", hex: "#00A2C7", color: "#00a2c7" },
      { name: "Magic Gold", hex: "#F2C047", color: "#f2c047" },
      { name: "White", hex: "#FFFFFF", color: "#ffffff" },
    ],
    type: ["Gilroy Semibold", "Script display"],
    idea: {
      title: "Four ideas, one wordmark",
      items: [
        { k: "The lock", v: "Trust, security and discretion. The M carries a keyhole." },
        { k: "The wand", v: "Magic, ease and service. The I becomes a wand." },
        { k: "The roof", v: "Home, household and care, with a spark at the peak." },
        { k: "The cloche", v: "Hospitality and personal service. The E carries a serving dish." },
      ],
    },
    tint: "#fffbea",
    tiles: [
      { src: img("magic-personnel", "01-cover"), alt: "Magic Personnel logo lockup with a roof, a magic wand and a cloche, between hand-drawn illustrations", caption: "Logo lockup", w: 8 },
      { src: img("magic-personnel", "09-cap"), alt: "Cap printed with the Magic Personnel logo", caption: "Cap", w: 4 },
      { src: img("magic-personnel", "08-jar"), alt: "White jar with the keyhole M mark", caption: "The keyhole M", w: 5 },
      { src: img("magic-personnel", "02-logo-concept"), alt: "Logo concept: the lock, the magic wand, the roof and the serving dish combine into the logo", caption: "Logo concept", w: 7 },
      { src: img("magic-personnel", "07-tote"), alt: "Tote bag with the Magic Personnel logo", caption: "Tote bag", w: 4 },
      { src: img("magic-personnel", "12-tee"), alt: "T-shirt printed with the keyhole M mark", caption: "T-shirt", w: 3 },
      { src: img("magic-personnel", "10-sweatshirt"), alt: "Sweatshirt printed with the keyhole M mark", caption: "Sweatshirt", w: 5 },
      { src: img("magic-personnel", "03-palette"), alt: "Colour palette: black, magic blue, magic gold and white", caption: "Colour palette", w: 6 },
      { src: img("magic-personnel", "04-typography"), alt: "Typography page showing Gilroy and a script typeface", caption: "Typography", w: 6 },
      { src: img("magic-personnel", "11-wall-print"), alt: "Large wall print of the Magic Personnel logo", caption: "Wall print", w: 6 },
      { src: img("magic-personnel", "13-booklet"), alt: "Brochure with the Magic Personnel logo beside a wooden spoon and roses", caption: "Brochure", w: 6 },
    ],
  },
  {
    slug: "ultraseal",
    kind: "brand",
    name: "UltraSeal Waterproofing",
    tagline: "Waterproofing solutions by Vogelcorp",
    story: {
      heading: "A mascot-led brand for a waterproofing company",
      paras: [
        "UltraSeal Waterproofing Solutions, by Vogelcorp, is an engineer-led waterproofing business. We designed its brand from scratch around protection, visibility on site and durability.",
        "A crab mascot in safety goggles, holding a roller and a bucket, stands for precision and heavy-duty moisture protection, paired with a clean geometric wordmark. Amber makes it easy to spot on a job site, brick red grounds it in masonry, and black and white keep technical documents and field adverts easy to read.",
        "The brand book sets the rules so it stays consistent: how the logo adapts to amber, brick and black backgrounds, which typeface to use, and how it looks on a bucket, a cap, a box and a bus shelter. Waterproofing company branding has to work on site and on paper.",
      ],
      glance: [
        { k: "Client", v: "Waterproofing (UltraSeal, by Vogelcorp)" },
        { k: "Built around", v: "Protection, visibility on site, durability" },
        { k: "Starting point", v: "Designed from scratch, mascot included" },
      ],
      keywords: ["waterproofing company branding", "mascot logo design", "brand identity", "brand guidelines"],
    },
    made: ["Mascot logo", "Logo adaptability rules", "Typography", "Colour palette", "Packaging and merchandise mockups"],
    tags: ["Logo", "Mascot", "Packaging"],
    palette: [
      { name: "Amber", hex: "#EF9F09", color: "#ef9f09" },
      { name: "Brick", hex: "#A6351D", color: "#a6351d" },
      { name: "Black", hex: "#000000", color: "#000000" },
      { name: "White", hex: "#FFFFFF", color: "#ffffff" },
    ],
    type: ["Queensides"],
    idea: {
      title: "Built to be seen on site",
      items: [
        { k: "The mascot", v: "Precision, heavy-duty moisture resilience and active surface protection." },
        { k: "Amber", v: "High energy and immediate notice on a job site." },
        { k: "Brick", v: "Earthy masonry and structural brickwork." },
        { k: "Black and white", v: "Crisp legibility on technical documents and field advertising." },
      ],
    },
    tint: "#f6f5f0",
    tiles: [
      { src: img("ultraseal", "01-cover"), alt: "UltraSeal Waterproofing Solutions logo with a crab mascot beside a paint roller", caption: "Brand guidelines cover", w: 8 },
      { src: img("ultraseal", "07-cap"), alt: "Cap printed with the UltraSeal logo", caption: "Cap", w: 4 },
      { src: img("ultraseal", "02-logo"), alt: "Logo guidelines showing the mascot alone and the mascot with the wordmark", caption: "Logo guidelines", w: 6 },
      { src: img("ultraseal", "03-adaptability"), alt: "The logo adapted to amber, brick red and black backgrounds", caption: "Logo adaptability", w: 6 },
      { src: img("ultraseal", "06-bucket"), alt: "UltraSeal bucket with an amber lid on a building site floor", caption: "Product bucket", w: 7 },
      { src: img("ultraseal", "09-box"), alt: "Shipping box printed with the UltraSeal logo", caption: "Shipping box", w: 5 },
      { src: img("ultraseal", "04-typography"), alt: "Typography page showing Queensides in four weights", caption: "Typography", w: 6 },
      { src: img("ultraseal", "05-palette"), alt: "Colour palette: amber, brick, black and white", caption: "Colour palette", w: 6 },
    ],
  },
  {
    slug: "flower-grid",
    kind: "brand",
    name: "Flower Grid",
    tagline: "Yoga and wellness",
    story: {
      heading: "A warm, welcoming logo for a holistic wellness brand in Croydon",
      paras: [
        "Flower Grid is a holistic wellness brand based in Croydon. The brief was a logo that feels warm and welcoming and shows, at a glance, what they do.",
        "We designed it from scratch by joining two simple ideas: a seated yoga figure and a flower. Interlocking petals form a circular badge with the figure at its centre, drawn in a fine gold line so it feels precise but warm, never ornate.",
        "Then we made it work in real life: black and gold versions, app icon tiles, a solid black and white version for stamps and receipts, and a tote and letterhead mockup. A small wellness business needs one mark that works on a screen, a bag and a certificate.",
      ],
      glance: [
        { k: "Client", v: "Holistic wellness" },
        { k: "Where", v: "Croydon" },
        { k: "Brief", v: "Warm, welcoming, shows what they do" },
        { k: "Starting point", v: "Designed from scratch" },
      ],
      keywords: ["holistic wellness logo", "logo design Croydon", "wellness branding", "brand identity"],
      place: "Croydon",
    },
    made: ["Logo badge", "Logo evolution", "App icon tiles", "Monochrome versions", "Stationery and tote mockups"],
    tags: ["Logo", "Badge", "Stationery"],
    palette: [
      { name: "Gold", color: "#f0b40d" },
      { name: "Black", color: "#13100e" },
      { name: "White", color: "#ffffff" },
    ],
    type: ["Serif wordmark"],
    idea: {
      title: "Yoga plus flower",
      items: [
        { k: "The figure", v: "A simplified seated yoga figure for human-centred practice." },
        { k: "The petals", v: "Interlocking petals form a calm, symmetrical flower grid." },
        { k: "The line", v: "Fine gold linework: precise yet warm, without feeling ornate." },
        { k: "Monochrome", v: "Solid black on white and white on black, for stamps, receipts and embroidery." },
      ],
    },
    tint: "#ffffff",
    tiles: [
      { src: img("flower-grid", "01-badge"), alt: "Flower Grid gold line badge above the serif wordmark", caption: "Logo badge", w: 5 },
      { src: img("flower-grid", "03-about-logo"), alt: "About the logo: the gold badge on black beside the design rationale", caption: "About the logo", w: 7 },
      { src: img("flower-grid", "04-icons-tote"), alt: "App icon tiles in black and gold, and a black tote bag with the logo", caption: "Icons and tote", w: 6 },
      { src: img("flower-grid", "07-letterhead"), alt: "Letterhead in metallic silver on black stock", caption: "Letterhead", w: 6 },
      { src: img("flower-grid", "02-evolution"), alt: "Logo evolution: a yoga figure plus a flower pattern", caption: "Logo evolution", w: 6 },
      { src: img("flower-grid", "06-monochrome"), alt: "Monochrome versions of the badge on white and on black", caption: "Monochrome", w: 6 },
    ],
  },
];

// Hero collage: real work floating in the showcase panel. x / y / w are percentages of the panel.
export const HERO_CARDS = [
  { src: img("magic-personnel", "02-logo-concept"), alt: "Magic Personnel logo concept", x: 3, y: 7, w: 52, rot: -4, depth: 14, delay: 0 },
  { src: img("magic-personnel", "09-cap"), alt: "Cap printed with the Magic Personnel logo", x: 62, y: 3, w: 24, rot: 5, depth: -18, delay: -2 },
  { src: img("ultraseal", "06-bucket"), alt: "UltraSeal product bucket", x: 31, y: 47, w: 46, rot: 3, depth: 22, delay: -4 },
  { src: img("flower-grid", "01-badge"), alt: "Flower Grid gold badge logo", x: 2, y: 63, w: 34, rot: -5, depth: -12, delay: -1 },
  { src: img("magic-personnel", "07-tote"), alt: "Tote bag with the Magic Personnel logo", x: 68, y: 58, w: 29, rot: -3, depth: 10, delay: -3 },
];

export const HERO_STRIP = ["Logos", "Identities", "Brand books", "Mascots", "Packaging", "Mockups"];

// PLACEHOLDER: first-draft copy written from the brand books and the site's positioning. Review before launch.
export const BRAND_BOOK = {
  kicker: "Brand books",
  lead: "A brand book is the instruction manual for how a brand looks, sounds and behaves.",
  body: "It puts the logo, colours, typefaces, imagery and rules in one place, so anyone can use the brand correctly: a printer, a developer, a new hire, a shop that wants to stock your product. No guessing, no redoing, no calling the designer to ask which blue.",
  why: "That consistency is what makes a brand feel trustworthy. People rarely notice it when it is right, but they always notice when it is wrong.",
};

export const DESIGN_STEPS = [
  { t: "Listen", d: "We learn what you do, who you serve and what you want to be known for.", get: "A short brief" },
  { t: "Explore", d: "Sketches, symbols and directions, with the thinking behind each one.", get: "Logo routes to react to" },
  { t: "Shape", d: "One route is refined: mark, colour and type, tested on light, dark and small sizes.", get: "The final logo set" },
  { t: "Test in the world", d: "We put it on caps, boxes, signs, screens and stationery to see it work for real.", get: "Mockups" },
  { t: "Hand over", d: "Everything goes into a brand book, so the brand stays consistent after we step away.", get: "Your brand book" },
];

export const DESIGN_WHY = [
  { n: "01", t: "Search-aware design", d: "We also work on SEO and AI search, so your name, mark and messaging are built to be found, remembered and quoted, not only admired.", tone: "red" },
  { n: "02", t: "Made to be used", d: "Light, dark, small and one-colour versions, with the rules to match. A brand that holds up on a bucket as well as on a billboard.", tone: "ink" },
  { n: "03", t: "One team", d: "Brand, website and search under one roof, so nothing gets lost between agencies and the story stays the same everywhere.", tone: "cream" },
];

// PLACEHOLDER: first-draft answers written only from facts on this page. Review before launch.
export const DESIGN_FAQ = [
  {
    q: "Can you build on a logo we already have?",
    a: "Yes. For Magic Personnel, a housekeeping business in London, the founder already had a logo she loved. We kept it and added small details: a keyhole in the M, a wand as the I, a cloche in the e, and a roof with sparkles. If your logo works, we will say so and build around it.",
  },
  {
    q: "Do you design logos from scratch?",
    a: "Yes. Flower Grid, a holistic wellness brand in Croydon, and UltraSeal Waterproofing Solutions both started with a blank page. We designed the logo, the colours, the typefaces and the rules for using them.",
  },
  {
    q: "What does a brand identity project include?",
    a: "It depends on the business. The projects on this page include a logo and its variations, a colour palette, typefaces, mockups on real products and a brand book that pulls it all together.",
  },
  {
    q: "Can you help people find the brand online too?",
    a: "Yes. We also work on SEO, AI search and websites, so your name, logo and messaging are built to be found as well as remembered.",
  },
];

// The interactive brand book in "What's a brand book?": Magic Personnel's real brand book.
// Image spreads are the brand-book slides re-composed onto a two-page grid (the spine sits in whitespace).
// "contents" and "cta" spreads are live HTML. Page numbers run 2 per spread (spread 1 = pages 01-02).
export const BOOK = {
  name: "Magic Personnel",
  kicker: "Brand book",
  place: "London",
  logo: img("book-magic-personnel", "00-cover-logo"),
  logoAlt: "Magic Personnel logo",
  cta: {
    headline: "Want something similar for your business?",
    text: "Tell us about it and we'll come back with a real plan, not a sales pitch.",
    button: "Start your brand",
  },
  spreads: [
    { type: "contents", title: "Contents" },
    { type: "image", src: img("book-magic-personnel", "01-mission"), title: "Our mission", photoRight: true, alt: "Our mission: to provide a service that alleviates the stress of everyday and last-minute situations, to be peace of mind, and a brand you can trust, beside the keyhole M on a cushion" },
    { type: "image", src: img("book-magic-personnel", "02-values"), title: "Brand values", photoRight: true, alt: "Brand values: competence, consistency and trust, beside the keyhole M on a tote bag" },
    { type: "image", src: img("book-magic-personnel", "03-logo"), title: "The logo", alt: "The Magic Personnel logo with its construction grid, and the logo on white and black cards" },
    { type: "image", src: img("book-magic-personnel", "04-logo-concept"), title: "Logo concept", alt: "Logo concept: the lock, the magic wand, the roof and the serving dish combine into the logo" },
    { type: "image", src: img("book-magic-personnel", "05-palette"), title: "Colour palette", alt: "Colour palette: black, magic blue, magic gold and white, with their hex codes" },
    { type: "image", src: img("book-magic-personnel", "06-typography"), title: "Typography", alt: "Typography: Gilroy for the logo, with the full alphabet, and a script typeface for display" },
    { type: "image", src: img("book-magic-personnel", "07-in-the-world"), title: "In the world", alt: "The brand on a tote bag, cup, jar, cap, sweatshirt, hang tag and box" },
    { type: "image", src: img("book-magic-personnel", "08-in-the-world-2"), title: "In the world, continued", alt: "The brand on a t-shirt, brochure, wall print, card and paper" },
    { type: "cta", title: "Work with us" },
  ],
  // Table of contents: which spread each entry turns to
  contents: [
    { t: "Mission and values", spread: 2 },
    { t: "Logo and how to use it", spread: 4 },
    { t: "Colours, with codes", spread: 6 },
    { t: "Typefaces", spread: 7 },
    { t: "Imagery and mockups", spread: 8 },
    { t: "Work with us", spread: 10 },
  ],
};

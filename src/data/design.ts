import type { ImageMetadata } from "astro";

// Design work shown on /work/design. Images live in src/assets/design/<slug>/ (WebP, rendered from the
// clients' brand books). Add a project here and it appears in the rail and the page automatically.
// PLACEHOLDER: the briefs below are first drafts written from the brand books. Review before launch.

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

export interface DesignProject {
  slug: string;
  kind: DesignKind;
  name: string;
  tagline: string;
  brief: string;
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
    brief:
      "A lock for trust, a wand for ease, a roof for home and a cloche for service, built into one wordmark. The identity carries a quiet sense of magic into a premium household service.",
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
    brief:
      "An engineered crab mascot in safety goggles, holding a roller and a bucket, paired with a clean geometric wordmark. Built to be seen on site and to hold up in extreme tropical weather.",
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
    brief:
      "A seated figure held inside interlocking petals: a fine gold-line badge with a serif wordmark, with monochrome versions for stamps, receipts and embroidery.",
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
  inside: [
    { t: "Logo and how to use it", d: "The mark, its variations, clear space and what never to do." },
    { t: "Colours, with codes", d: "Exact values, so print and screen match." },
    { t: "Typefaces", d: "What to use for headlines, text and numbers." },
    { t: "Imagery and mockups", d: "The brand on a cap, a box, a sign or a screen." },
    { t: "Values and voice", d: "What the brand stands for and how it speaks." },
  ],
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

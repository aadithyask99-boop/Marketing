import type { ImageMetadata } from "astro";

// Design work shown on /work/portfolio. Images live in src/assets/design/<slug>/ (WebP, rendered from the
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
  {
    slug: "mic-studios",
    kind: "brand",
    name: "MIC Studios",
    tagline: "Pregnancy and postnatal fitness",
    story: {
      heading: "A confident, warm logo for a pregnancy and postnatal fitness studio",
      paras: [
        "MIC (Make It Count) Studios is a women-centric fitness and Zumba studio for pregnant women and new mothers. The brief was a logo that shows pregnancy and fitness together, without fear or fragility.",
        "The mark is a stylised silhouette of a pregnant woman standing tall and confident, held inside a circle. The circle stands for wholeness, safety and care; the upright posture says pregnancy and wellness can go together. Soft pink and white keep it warm and welcoming, never aggressive or overly athletic.",
        "It is deliberately simple so it stays recognisable on a phone screen, a poster, a t-shirt or a sign. We set it out in pink, white and reversed versions, tested it on a framed print, a tee, a box, a tablet and a laptop, and put the reasoning into a brand book.",
      ],
      glance: [
        { k: "Client", v: "Women's fitness and Zumba studio for pregnant women and new mothers" },
        { k: "Brief", v: "Supportive, empowering and warm, not aggressive or athletic" },
        { k: "Delivered", v: "Logo, variations, palette, typography, mockups and a brand book" },
      ],
      keywords: ["fitness studio logo design", "pregnancy fitness branding", "women's fitness brand identity", "brand book"],
    },
    made: ["Logo and wordmark", "Logo concept and meaning", "Colour palette and typography", "Logo variations", "Brand book", "Print, apparel and device mockups"],
    tags: ["Logo", "Identity", "Brand book"],
    palette: [
      { name: "Soft pink", hex: "#F3457E", color: "#f3457e" },
      { name: "White", hex: "#FFFFFF", color: "#ffffff" },
    ],
    type: ["Rounded uppercase logotype"],
    idea: {
      title: "A circle and a confident silhouette",
      items: [
        { k: "The silhouette", v: "A pregnant woman standing upright: motherhood and life, with fitness, strength and confidence." },
        { k: "The circle", v: "Wholeness, safety and care, and the cycle of life. A shape that feels protective." },
        { k: "The pink", v: "Warmth, compassion and a nurturing space, without harsh fitness branding." },
        { k: "The lettering", v: "Clean, rounded capitals: approachable, confident and clear." },
      ],
    },
    tint: "#fde9f0",
    tiles: [
      { src: img("mic-studios", "01-cover"), alt: "MIC Studios logo: a pink circle with a silhouette of a pregnant woman standing confidently, above the wordmark", caption: "Logo", w: 8 },
      { src: img("mic-studios", "02-poster-concrete"), alt: "Framed MIC Studios logo print on a concrete wall", caption: "Framed print", w: 4 },
      { src: img("mic-studios", "04-logo-concept"), alt: "Logo concept: a circle plus a pregnant woman silhouette equals the MIC Studios mark", caption: "Logo concept", w: 7 },
      { src: img("mic-studios", "07-palette"), alt: "Colour palette: soft pink #F3457E and white #FFFFFF", caption: "Colour palette", w: 5 },
      { src: img("mic-studios", "05-tee"), alt: "White t-shirt on a hanger with the MIC Studios logo, against pink", caption: "T-shirt", w: 4 },
      { src: img("mic-studios", "11-model"), alt: "Woman in a white sweatshirt printed with the MIC Studios logo", caption: "Sweatshirt", w: 4 },
      { src: img("mic-studios", "10-box"), alt: "White hanging box printed with the MIC Studios logo", caption: "Packaging", w: 4 },
      { src: img("mic-studios", "06-typography"), alt: "Typography page: rounded uppercase letters and numerals in white on pink", caption: "Typography", w: 6 },
      { src: img("mic-studios", "08-variations"), alt: "Four logo versions: pink on white, white on pink, and reversed circle versions", caption: "Logo versions", w: 6 },
      { src: img("mic-studios", "09-devices"), alt: "MIC Studios logo on a tablet and a phone", caption: "On screens", w: 5 },
      { src: img("mic-studios", "13-plant-paper"), alt: "Hand holding a printed MIC Studios logo beside a plant", caption: "Print", w: 7 },
    ],
  },
];

// The websites and Instagram grids section: scattered tiles with their own left rail, shown by type and sector, not under a client.
// PLACEHOLDER: sector labels are drawn from what each design shows. Confirm them before launch.
export type WallKind = "web" | "app" | "social";
export interface WallTile {
  id: string;
  src: ImageMetadata;
  kind: WallKind;
  /** Short, anonymous sector label shown under the tile and in the rail. */
  sector: string;
  alt: string;
  /** Desktop column (0 or 1) and the extra space above the tile in rem, so the wall looks scattered. */
  col: 0 | 1;
  top: number;
  /** Tilt in degrees (kept small). */
  rot: number;
  /** Scroll drift in px; the sign sets the direction. */
  depth: number;
  /** Instagram profile screens sit to one side of their column. */
  side?: "l" | "r";
  /** Order in the single-column phone layout, so websites and grids alternate. */
  mo: number;
  /** A live view that opens only when asked: nothing is loaded until the visitor clicks. */
  live?: { url: string; title: string; mic?: boolean };
  /** A plain link out (opens in a new tab) for work that cannot be shown live. */
  href?: string;
}

export const WALL_KINDS: Record<WallKind, string> = { web: "Website", app: "App", social: "Instagram grid" };
export const WALL_GROUPS: Record<WallKind, string> = { web: "Websites", app: "Apps & software", social: "Instagram grids" };

export const DESIGN_WALL: WallTile[] = [
  { id: "ig-magic", src: img("wall", "ig-magic"), kind: "social", sector: "Housekeeping", alt: "Complete Instagram profile and grid design for a housekeeping brand, in black, gold and photography", col: 0, top: 0, rot: 1.4, depth: -16, side: "r", mo: 2 },
  { id: "web-workplace", src: img("wall", "web-workplace"), kind: "web", sector: "Workplace software", alt: "Website homepage design for workplace software: a white serif headline on a glowing orange gradient", col: 0, top: 0, rot: -1.2, depth: 12, mo: 1 },
  { id: "ig-bakwa", src: img("wall", "ig-bakwa"), kind: "social", sector: "Sustainable packaging", alt: "Complete Instagram profile and grid design for a plastic-free water brand, with green branding and nature imagery", col: 0, top: 0, rot: -1.2, depth: 10, side: "l", mo: 4 },
  { id: "web-flowergrid", src: img("wall", "web-flowergrid"), kind: "web", sector: "Wellness", alt: "Website homepage design for a wellness centre: a calm portrait in warm light with a wave-shaped cream panel", col: 0, top: 0, rot: 1.1, depth: -10, mo: 7 },
  { id: "app-luna", src: img("wall", "app-luna"), kind: "app", sector: "Wellness", alt: "Luna, an AI wellness companion chatbot: a friendly flame mascot above a chat box and a few suggested topics, beside a brown side menu", col: 0, top: 0, rot: 1, depth: -8, mo: 5, live: { url: "https://luna.flowergrid.co.uk/", title: "Luna, an AI wellness companion", mic: true } },
  { id: "web-diagramx", src: img("wall", "web-diagramx"), kind: "web", sector: "Architecture and engineering", alt: "Website homepage design for an architecture and engineering consultancy: three large words over a timber house", col: 0, top: 0, rot: -1, depth: 8, mo: 9 },
  { id: "web-manavatty", src: img("wall", "web-manavatty"), kind: "web", sector: "Spirits", alt: "Website homepage design for a spirits brand: a bottle in an arched rainforest frame between two serif headlines", col: 1, top: 5, rot: 1.2, depth: -12, mo: 3 },
  { id: "ig-manavatty", src: img("wall", "ig-manavatty"), kind: "social", sector: "Spirits", alt: "Complete Instagram profile and grid design for a spirits brand: bottles shot in rainforest and studio settings", col: 1, top: 0, rot: 1.3, depth: 14, side: "l", mo: 6 },
  { id: "app-iaudit", src: img("wall", "app-iaudit"), kind: "app", sector: "ISO audit software", alt: "ISO audit software dashboard: findings and audit status charts, self-assessment and gap analysis scores, and a side menu of audit tools", col: 1, top: 0, rot: -1.1, depth: 10, mo: 10, href: "https://www.iaudit.global/" },
  { id: "web-bakwa", src: img("wall", "web-bakwa"), kind: "web", sector: "Sustainable packaging", alt: "Website homepage design for a plant-based bottle brand: a tilted green-labelled bottle beside a large headline", col: 1, top: 0, rot: -1, depth: 9, mo: 11 },
  { id: "ig-flowergrid", src: img("wall", "ig-flowergrid"), kind: "social", sector: "Wellness", alt: "Complete Instagram profile and grid design for a wellness brand mixing warm photography with gold and brown quote posts", col: 1, top: 0, rot: -1.2, depth: -14, side: "r", mo: 8 },
];

export const HERO_STRIP = ["Logos", "Identities", "Brand books", "Mascots", "Packaging", "Websites", "Apps", "Instagram grids", "Mockups"];

// PLACEHOLDER: first-draft copy written from the brand books and the site's positioning. Review before launch.
export const BRAND_BOOK = {
  kicker: "Brand books",
  lead: "A brand book is the instruction manual for how a brand looks, sounds and behaves.",
  body: "It puts the logo, colours, typefaces, imagery and rules in one place, so anyone can use the brand correctly: a printer, a developer, a new hire, a shop that wants to stock your product. No guessing, no redoing, no calling the designer to ask which blue.",
  why: "That consistency is what makes a brand feel trustworthy. People rarely notice it when it is right, but they always notice when it is wrong.",
  note: "* For illustration only. A full brand book is far more extensive.",
};

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
    q: "Do you design websites and Instagram grids as well?",
    a: "Yes. The websites and Instagram grids further down are ones we have designed for small businesses, from wellness and spirits to packaging and consultancy. If you already have a brand we can design the site and the feed to match it; if you don't, we can start with the brand.",
  },
  {
    q: "Do you build software and chatbots too?",
    a: "Yes. We built Luna, an AI wellness companion chatbot for a wellness clinic (you can try it live in the Portfolio above), and an ISO audit software platform for iAudit Global. Both are shown with the websites and Instagram grids.",
  },
  {
    q: "Can you help people find the brand online too?",
    a: "Yes. We also work on SEO, AI search and websites, so your name, logo and messaging are built to be found as well as remembered.",
  },
];

// The page-level contents block before "Brand identity". Counts and names are filled in from the data.
// PLACEHOLDER: first-draft copy.
export const CONTENTS_CTA = { title: "Something bespoke?", text: "Tell us what you're after and we'll make it yours.", button: "Start yours" };

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

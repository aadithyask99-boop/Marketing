# Maximus Mediascape: design and brand guide

Written from a full read of the code (`src/`) and screenshots of every page at 1440px and mobile. Use it as the brief when building new pages.

Stack: Astro (static), plain CSS in `src/styles/`, no UI framework, no Tailwind. Hosted on Vercel from the default branch.

---

## 1. Brand in one paragraph

A marketing agency (UK, UAE, India, founded 2021) selling **search, story and strategy under one roof**, with an AI-search angle (GEO, AEO: "be the brand ChatGPT recommends"). The look is **loud, confident and playful but tidy**: a saturated red, warm cream and near-black ink, huge condensed uppercase headlines, an elegant italic serif accent word, pill-shaped everything, and small touches of motion. It should feel like an agency with a point of view, not a template.

## 2. Colour

Defined in `src/styles/global.css` `:root`. Use the tokens, never new hex values.

| Token | Value | Role |
|---|---|---|
| `--red` | `#e10600` | Brand colour. Page hero backgrounds, accents on cream, primary buttons on ink |
| `--cream` | `#f5efe8` | Text on red/ink, light section backgrounds, cards, footer card |
| `--ink` | `#17090a` | Text on cream, dark section backgrounds, nav CTA, footer shell |
| `--royal` | `#064a2a` | Dark green. Used only for stickers: the hero asterisk, "Let's grow" badge, the Starter £999 badge |
| `--butter`, `--dot` | | Defined, unused. Ignore |

Rules seen across the site:

- **Three surface colours alternate down a page: red, cream, ink.** Every page opens on red (the hero), then alternates cream and ink sections. The page ends on ink (or red for contact, 404 and Starter), then the footer card sits on that colour.
- Text is cream on red and ink, and ink on cream. An accent word is red on cream, and ink or cream on red.
- Translucent tints of the same two colours do the secondary work: `rgba(245,239,232,.x)` for borders and chips on dark/red, `rgba(23,9,10,.x)` for borders and shadows on light. No greys.
- Errors: soft pink `#ffb3ad` (border) and `#ffd0cb` (text) on dark or red. Success needs no colour.
- Playful pastel blobs (`#cdebd6` mint, `#c9ceff` periwinkle, `#ffe6a3` butter, `#ffc9c2` blush, `#ffd3e6` pink) appear **only inside the line-art stickers** (`Sticker.astro`).
- Selected-state, hover and focus colours are red on light surfaces, cream on dark surfaces. Focus ring: 3px `--ink` (cream on dark sections).

## 3. Typography

Three fonts, all self-hosted through `@fontsource`.

| Font | Use | How |
|---|---|---|
| **Bebas Neue** (`--display`) | Every headline, big numbers, nav-menu items, card titles | Class `.display`: uppercase, weight 400, `line-height: 0.88` |
| **Mulish** 400/600 (`--body`) | Everything else: body, buttons, labels, nav | 600 for emphasis, buttons, nav, labels. Never bold 700 |
| **Instrument Serif** italic | The one **accent word** in a headline: "All the ways we *grow brands*", "Ideas worth *ranking*", "This is how we *work*", "Talk to us if you *need:*" | `font-style: italic; text-transform: none; font-size: 1.05em`. Import `@fontsource/instrument-serif/400-italic.css` on pages that use it. Also used for testimonial quotes and short taglines such as "from Google to ChatGPT." |

Scale (all fluid with `clamp`):

- `.page-title` `clamp(4rem, 15vw, 13rem)` is the big single-word/name hero.
- Section/hero headlines `clamp(3rem, 9vw, 7.5rem)` (`.section-title`), or page-specific, e.g. services `clamp(3.5rem, 12vw, 10rem)`.
- `.eyebrow`: 0.85rem, 600, 0.14em tracking, uppercase, sits above the headline ("SERVICES", "BLOG").
- `.lede`: `clamp(1.05rem, 1.6vw, 1.4rem)`, max-width 40rem, under the headline.
- Body 1rem / 1.5.

**Headline pattern:** Bebas phrase + one Instrument Serif italic word (see above). Do not italicise more than one or two words.

**X-ray hover:** big headlines are marked `data-xray` and initialised with `initXray(el, radiusRem)` from `src/scripts/xray.ts`. Letters near the cursor flip colour (cream to ink on red). Desktop mouse only. Use it on page-hero headlines and the footer wordmark.

## 4. Layout and spacing

- Container: sections span full width with `padding-inline: var(--gutter)` (`clamp(1rem, 2.2vw, 2rem)`); inner content is capped around `90rem` where needed.
- Vertical rhythm: `.section` = `clamp(3.5rem, 9vw, 8rem)` top and bottom.
- **Every page hero fills the viewport**: `.page-top.page-hero` (flex column, `min-height: 100svh`, top padding clears the fixed header). Eyebrow, then headline, then lede, left-aligned, content sitting low.
- Grids: `.grid`, `.grid--2`, `.grid--3` (1 column on mobile, 2 at 600px, 3 at 900px).
- Breakpoints actually used: **900px** is the main desktop switch (24 uses), 600 and 700 for small tweaks, 599 and 899 for max-width mobile rules. Everything is mobile-first and tested at about 390px.
- Rows/lists: hairline rules (`1px solid currentColor` or 18% alpha), big Bebas names left, description right.

## 5. Shape language, motion and details

- **Pills and circles.** `border-radius: 999px` is used 35 times, `50%` 28 times. Buttons, chips, nav, inputs, search bars and badges are all pills. Cards and panels use large radii: `1.25rem` to `1.75rem`; the footer card up to `2.25rem`.
- **Primary button (`.btn`)**: transparent, 2px currentColor border, pill, 3rem tall, 600 weight; hover fills with cream/red. Solid variants: ink (nav CTA), red (form send), cream.
- **Arrow button idiom:** a "↗" arrow, often in its own circle (`Get started ↗`, nav CTA, footer social, "Talk about this ↗"). On hover the arrow turns 45 degrees or shifts up-right.
- **Shadows** are rare and soft: `0 1.5rem 4rem rgba(23,9,10,.3)` on floating bars/panels. Otherwise flat.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for movement and reveals, `cubic-bezier(0.34, 1.56, 0.64, 1)` for springy hover and tap, `cubic-bezier(0.2, 0.7, 0.2, 1)` for slow count/roll effects. Hover transitions 0.2 to 0.35s.
- **Always honour `prefers-reduced-motion`**: every animated component has a reduce block and pinned/scroll scenes fall back to static.
- **Custom cursor** (`Cursor.astro`, mouse only): cream arrow with ink outline; add `data-cursor="Go"` to links and buttons to show a pill label.
- **Scroll-driven moments** (signature of the site): pinned horizontal headline with stickers (home), typed search demo (home), sticky category sidebar with progress line (services), dotted S-curve process path (work), year-by-year story (about), word-by-word light-up statements.
- **Decorative geometry** (`OfferShape.astro`): concentric rings, spiral, grid of circles, stacked ellipses, in cream/red. Used as hero ornaments and illustration in lists.
- **Stickers** (`Sticker.astro`): hand-drawn 3.5px ink line-art icons on a pastel blob: thumb, magnifier, chart, chat, megaphone, phone, heart.
- **Brand mark:** the "M" glyph in `public/logo-m.png` (cream) and `logo-m-ink.png` (ink), swapped automatically by the header depending on the background behind it. Wordmark "MAXIMUS MEDIASCAPE" in huge Bebas in the footer.
- **Icons** are inline SVG, 2 to 2.4px strokes, round caps and joins, `currentColor`. Never an icon font or emoji.

## 6. Global components (already in `BaseLayout`)

`src/layouts/BaseLayout.astro` wraps every page and provides: skip link, `Header` (floating glass pill nav that hides on scroll down, WhatsApp QR hover card on "Talk to us", mobile `MenuOverlay`), `Footer` (cream rounded card on ink or red, with newsletter, links, giant wordmark, legal), `ScrollTop`, `Cursor`, SEO and JSON-LD.

Props: `title`, `description`, `footerTone="ink" | "red"` (set it to match the colour of the last section), `schema` (extra JSON-LD), `noindex`, `image`, and `landing` (minimal header with a single CTA, no menu: used for campaign pages like the Starter page).

Reusable sections:

| Component | What it is |
|---|---|
| `ClosingCta` | The "Now it's your turn." AI-style search-bar lead form (step 1 message, step 2 email and phone, step 3 thanks) with example chips. Props `tone="ink"/"red"`, `heading`, `eyebrow`, `title`, `lede`, `service`. Posts to Formspree via `submitLead`. **Put this at the end of every page.** |
| `Proof` | Client logo marquee (`tone="cream"/"ink"`) |
| `Voices` | Testimonial carousel in Instrument Serif (`tone` too). Currently placeholder quotes |
| `Offerings`, `ServiceBlocks`, `Process`, `FeaturedWork`, `AboutStory`, etc. | Page-specific but reusable |
| `Faq` | Accordion |
| `StickyCta` | Mobile bottom bar that appears after the hero (landing pages) |

Data lives in `src/data/site.ts` (`SITE`, `NAV`, `SERVICES`, `CATEGORIES`, `CLIENTS`, `OFFICES`, `PROCESS`, `ABOUT`…), so copy changes happen there, not in components.

## 7. Voice and copy

- Plain, warm, direct British English ("optimise", "£"). Short sentences. No jargon walls ("Be human" is a stated value).
- Lowercase, conversational headline fragments are fine in big display type ("we wanna be where your customers search, scroll and ask AI").
- Promise clarity, not hype: "a real plan, not a sales pitch", "No one can honestly guarantee rankings."
- Values: Be found, Be clear, Be accountable, Be curious, Be human.
- CTA words: "Talk to us", "Get started", "Send it over", "Start a project", "Book a free consultation".
- Prices in £, "one-time", "from".
- Anything not verified is marked `PLACEHOLDER` in `site.ts` (testimonials, process timings, results, work projects, blog posts). Keep that convention.

## 8. How to build a new page (recipe)

1. Create `src/pages/<name>.astro` using `BaseLayout` with `title`, `description`, and `schema` from `src/lib/schema.ts` (`webPage(...)`, `breadcrumbs(...)`).
2. **Hero:** `<section class="section page-top page-hero">` with `<p class="eyebrow">`, `<h1 class="display …">` (Bebas phrase + `<span>` Instrument Serif accent word, `data-xray`), and `<p class="lede">`. Red background comes from `body`.
3. **Body:** alternate cream (`.section--cream`) and ink sections. Put each page's CSS in `src/styles/<page>.css`, imported in the page, and scope it with a prefix (the Starter page uses `st-`). Reuse tokens only.
4. Optional social proof: `Proof`, `Voices`.
5. End with `<ClosingCta />` (ink) or `<ClosingCta tone="red" />`, and set `footerTone` to match.
6. Add the page to `NAV` in `site.ts` if it belongs in the menu, and always add its path to the hardcoded `PAGES` list in `src/pages/sitemap.xml.ts`.
7. Test at 390px and 1440px. Check reduced motion. Make sure the headline fits at 390px (use `clamp`/`vw`). Never let a decorative element cover text (the Starter hero badge did).

## 9. The Starter page (`/website-starter`) as a variant

A campaign landing page built on the same system with a few deliberate differences: `landing` header (logo plus one "Get started" button), `footerTone="red"`, its own `starter.css` (`st-` prefix), pill buttons with a circle arrow (`.st-pill`), a green £999 badge sticker, pinned scroll scenes (statement and "how it works" on desktop; the statement is also pinned on mobile), stage tabs, a payment path, an impact carousel, glow-edged plan cards, an FAQ with one-open-at-a-time, and a sticky mobile CTA. It does **not** use the Instrument Serif accent in its headlines, which is the main place it drifts from the rest of the site; add one if you want it to feel closer to the main pages.

## 10. Things to watch

- Keep one idea per section and one primary CTA per view. The hero CTA on the Starter page is a single left-aligned button.
- `.card--blue` is not blue (it is ink). Legacy class name.
- Text over red needs cream, not ink, for contrast on small sizes.
- The 900px breakpoint drives pinning, sticky sidebars and the nav. Test just below and above it.

## 11. Portfolio pattern: `/work/portfolio`

For showcasing client work (brand boards, Instagram grids, web designs) on one page, without a page per project:

- Red `.page-hero`, then a **cream body** with a **sticky left rail** (`DesignRail`) and one **board per project** (`DesignBoard`). Styles in `src/styles/design.css` (`dz-` prefix).
- Rail sticks at `top: calc(var(--header-h) + 1rem)` from 900px up, with a scroll-spy marker. Under 900px it becomes a sticky pill strip at the top.
- Each board: number, Bebas name, Instrument Serif tagline, tags, brief, "what we made", palette (hex only when the client's brand book states it) and type, then a **scattered gallery**: 12-column grid, per-tile widths (`w`), uneven tops, hover tilt, "View" cursor label. Tiles open a native `<dialog>` lightbox (prev/next, Esc, swipe, focus return).
- Content lives in `src/data/design.ts`; images in `src/assets/design/<slug>/*.webp` (about 1600px wide, under 100KB). Add a project (or `kind: "social"` / `"web"`) and it appears in the rail automatically.
- Do not publish contact details printed in client brand books.

Hero, story and rail details (added with the second pass):

- **Hero** (`DesignHero`): giant Bebas headline with one Instrument Serif word, a cream **showcase panel** holding a floating collage of real work (`HERO_CARDS` in `design.ts`, pointer parallax), a green scalloped `Badge` sticker, and a Bebas **marquee strip** with the green asterisk. "Please scroll down" cue at the bottom.
- **Story sections** (`DesignStory`): "What's a brand book?" (ink, right after the hero), then the rail and boards, then "How we design a brand" (ink, 5-step timeline) and "Why work with us" (3 colour-blocked cards). Copy lives in `BRAND_BOOK`, `DESIGN_STEPS`, `DESIGN_WHY`. Surfaces alternate red / ink / cream / ink / cream / ink.
- **Rail** (`DesignRail`): "M" mark and project count, thumbnail cards for each project with a sliding ink highlight and a red scroll-progress line, and a red "Got a brand in mind?" contact card (CTA, WhatsApp, email, sticker). Under 900px it becomes a sticky strip of pills with small round thumbnails.
- **The idea strip** under each board header: 3 to 4 concept chips (`idea` in `design.ts`), taken from the client's own brand book.


Story and SEO pattern (per project board and page):

- Each project has a `story` in `src/data/design.ts`: a serif H3 heading, three short paragraphs in a warm "we" voice (the first is a plain, quotable answer: who the client is, where, what we made), and an "At a glance" list. **Only facts the team confirmed go in**; anything unknown is left out (UltraSeal has no location or client brief on purpose).
- Search terms are used naturally in headings and body ("branding for small businesses", "housekeeping brand in London", "waterproofing company branding"), never stuffed.
- Page `<title>` and description are set around the target terms; the H1 stays the brand headline. JSON-LD: `CollectionPage`, `ItemList` of `CreativeWork` (with `description`, `keywords`, `genre`, `contentLocation` where public), `FAQPage` (`DESIGN_FAQ`) and breadcrumbs.
- Each story links to `/services#brand-identity` and to the contact form with the service pre-filled.

Interactive brand book (`DesignBook.astro`, in "What's a brand book?"):

- A simulated hardcover that opens by dragging: pure CSS 3D (`perspective`, leaves hinged at the spine with `transform-origin: left`) plus pointer events and a small requestAnimationFrame tween. No library.
- Content: Magic Personnel's real brand book, one slide per spread, split down the middle across two pages (`BOOK` in `src/data/design.ts`, images in `src/assets/design/book-magic-personnel/`). The cover is a designed approximation.
- Drag a page edge to turn it; release decides by angle and flick speed. Also: click a page, Previous / Next, arrow keys, Home / End. There is no Enlarge button: the pinned book already fills the screen.
- **Contents is a real spread inside the book** (spread 1, live HTML): serif title on the left, a table of contents with dotted leaders and page numbers on the right. Each entry turns the book (`BOOK.contents` in `design.ts`); the entry for the open spread is highlighted. On phones, where the book is small, a row of chapter chips under it does the same job (`.dz-chapters`).
- **Spread types** in `BOOK.spreads`: `image` (a re-composed slide, split in half), `contents` and `cta` (live HTML, built in `DesignBookPage.astro`, sized with container query units so they scale with the book). The last spread (10) is the call to action: script headline "Want something similar for your business?", a red underline that draws on open, a "Start your brand" button to `/contact?service=Brand%20%26%20Identity`, WhatsApp and email from `SITE`, and "Back to the cover".
- **Safari gotcha**: Safari ignores `backface-visibility: hidden` on faces that hold positioned or blended children, so the back of a page showed through mirrored. `paint()` therefore hides the wrong face of each leaf by hand (`visibility` on `.dz-front` / `.dz-back` at 90deg) and no `mix-blend-mode` is used inside the book. To test without Safari, force `backface-visibility: visible` on `.dz-face, .dz-face *` in Chromium: nothing should leak.
- Taps on links and buttons inside pages do not turn the page; a drag that starts on one still does.
- **Hit-testing gotcha**: in Chromium, tiny `translateZ` offsets between stacked leaves make real clicks miss children (clicks landed on a buried page). So only the visible leaves are rendered (`visibility`), and `translateZ(2px)` is applied only to leaves that are moving.
- `touch-action: pan-y` keeps vertical scrolling working on phones. Reduced motion: no peek, instant turns. Tested in Chromium (desktop and mobile emulation); Safari / iOS not tested.

Pinned scene (all widths, motion allowed): the section is ~260svh tall with a sticky 100svh stage. Scroll progress sets `--c` (copy fades and drifts up) and `--g` (book rises and grows to fill the viewport, about 1308x736 at 1440x900) and dispatches `dz:scrub`, which opens the cover until the visitor first touches the book. Wheel scrolling is never hijacked. With reduced motion there is no pin: copy, then the book at full width, then the chips. Grid note: `.dz-intro-in` uses `minmax(0, 1fr)` so the nowrap chips cannot widen the book.

Spreads are re-composed (not just split) on a shared page grid, 2000x1125 per spread, margins 90 outer / 70 gutter keep-out / 110 top / 100 bottom: each element (title, text, lockup, cards, swatches, photos) is cut from the original 300dpi render by bounding box and placed again, so nothing crosses the spine and titles share a top-left. The generating script lives outside the repo; re-do it from the client's PDF if a spread changes. Micro details: folios and a running footer on every page, page-stack edges that thin and thicken as you turn, a dog-ear that lifts on hover, a foil sheen that follows the pointer, a slight lean toward the pointer, paper grain, a short haptic tick on phones.

**Portrait phones (under 600px wide)** use a single-page book (`.is-single` on the section): a window one page wide (`.dz-book-turn`, about 388x436 on a 412px phone) slides over the full spread (`.dz-book`, positioned with `--pan`, 0 = left page, 1 = right page). The page sequence is cover, then every page in order (20 pages). Swiping forward from a right page turns its leaf while the window pans to the left page of the next spread; swiping forward from a left page just slides to its right page; the reverse mirrors this. `side` and `pan` in `DesignBook.astro` track the view; taps on the left/right half of the page step back/forward; Prev / Next, arrow keys and the chapter chips use the same `step()` / `setTurned()`. Chips land on the left page of a spread. The book stays `touch-action: pan-y`, so vertical swipes always scroll the page (no scroll trap), and the cover does not open on scroll in this mode. The back-to-top button is hidden while the scene is held (`body.dz-holding`). The hero's "Please scroll down" cue (`.dz-cue`, same `.dz-scroll` look) sits under the chips, centred in the space left to the bottom of the screen so the gap above and below it is equal; tapping it scrolls past the pinned scene. The gallery lightbox sits in the top layer above the custom cursor, so `.dz-lb` restores the native cursor.

Hero: no client names; the "Please scroll down" cue is centred; the word strip renders 6 copies and moves by exactly one copy (`-100%/6`) so it stays full on screens up to ~5000px. With reduced motion the strip is static by design.

**Websites and Instagram grids (`DesignWall.astro`, `DESIGN_WALL` in `design.ts`)**: after the client boards, on the same cream surface and with the same left rail pattern. `DesignRail` takes `groups`, `title`, `noun` and `contact` so it can serve both lists; this one is headed "Websites & feeds" (Websites, Instagram grids), shows sector names (never client names), and has no contact card (the page's closing CTA covers that). The tiles sit in two scattered columns (`col`, `top`, `rot`, `depth` per tile; phone profiles sit left or right of their column; on phones one column in `mo` order so websites and grids alternate). Websites are in a browser-bar frame; Instagram pieces are the **complete** profile screens in a phone bezel (nothing cropped; the viewer scrolls tall images, `.dz-lb.is-tall`). Tiles settle in on arrival and drift a few px with scroll (off for reduced motion). The rail script in `portfolio.astro` runs once per `.dz-layout`; scattered layouts pick the tile nearest the 40% line, boards use "top has passed". Labels are type + sector only, e.g. "Website · Spirits". Images are in `src/assets/design/wall/` (Instagram: rendered from the long profile PDFs at about 25 dpi, 900px wide).

**Page naming and structure**: the page is "Portfolio" at `/work/portfolio` (it was `/work/design`; redirected in `astro.config.mjs` and `vercel.json`). Portfolio is made of Brand identity (the client boards, rail headed "Brand identity") and Websites & social (the scattered tiles, rail headed "Websites & social"); each half opens with the same kicker + H2 + lede header (`.dz-wallhead`). Order: hero (big type + starred word strip, no side panel) -> "What's a brand book?" (pinned book, with a footnote "* For illustration only. A full brand book is far more extensive.") -> Brand identity -> Websites and Instagram grids -> How we design a brand -> FAQ. The old "Why work with us?" section was removed.

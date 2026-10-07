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

Three fonts, all free and self-hosted: Bebas Neue and Mulish through `@fontsource`, and Boska (Fontshare, ITF Free Font License) from `src/assets/fonts`. None is bespoke; the accent font is one CSS variable (`--accent` in `global.css`), so a licensed or commissioned face is a one-line swap.

| Font | Use | How |
|---|---|---|
| **Bebas Neue** (`--display`) | Every headline, big numbers, nav-menu items, card titles | Class `.display`: uppercase, weight 400, `line-height: 0.88` |
| **Mulish** 400/600 (`--body`) | Everything else: body, buttons, labels, nav | 600 for emphasis, buttons, nav, labels. Never bold 700 |
| **Boska** Medium Italic (`--accent`) | The one **accent word** in a headline: "All the ways we *grow brands*", "Ideas worth *ranking*", "This is how we *work*", "Talk to us if you *need:*" | `font-family: var(--accent); font-style: italic; text-transform: none; font-size: 1.05em`. The `@font-face` (Medium and Medium Italic) lives in `global.css`; nothing to import per page. Replaced Boska, which is very common on AI-built sites. Also used for testimonial quotes and short taglines such as "from Google to ChatGPT." |

Scale (all fluid with `clamp`):

- `.page-title` `clamp(4rem, 15vw, 13rem)` is the big single-word/name hero.
- Section/hero headlines `clamp(3rem, 9vw, 7.5rem)` (`.section-title`), or page-specific, e.g. services `clamp(3.5rem, 12vw, 10rem)`.
- `.eyebrow`: 0.85rem, 600, 0.14em tracking, uppercase, sits above the headline ("SERVICES", "BLOG").
- `.lede`: `clamp(1.05rem, 1.6vw, 1.4rem)`, max-width 40rem, under the headline.
- Body 1rem / 1.5.

**Headline pattern:** page heroes (every `h1`) are plain Bebas with **no italic accent word**, so they all read the same (changed 7 Oct 2026). The Boska italic accent word is kept for section headings further down a page only; do not italicise more than one or two words there.

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

Props: `title`, `description`, `footerTone="ink" | "red"` (set it to match the colour of the last section), `schema` (extra JSON-LD), `noindex`, `image`, and `landing` (minimal header with a single CTA, no menu, for campaign pages; no page uses it now, the Starter plan page switched back to the normal header and menu).

Reusable sections:

| Component | What it is |
|---|---|
| `ClosingCta` | The "Now it's your turn." AI-style search-bar lead form (step 1 message, step 2 email and phone, step 3 thanks) with example chips. Props `tone="ink"/"red"`, `heading`, `eyebrow`, `title`, `lede`, `service`. Posts to Formspree via `submitLead`. **Put this at the end of every page.** |
| `Proof` | Client logo marquee (`tone="cream"/"ink"`) |
| `Voices` | Testimonial carousel in Boska (`tone` too). Four real client quotes in `TESTIMONIALS` (`name` plus `detail` line; "Undisclosed Client" where the client asked not to be named) |
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
- Never invent client facts or figures. Anything client-reported is labelled as such on the page, and anything still unconfirmed is listed in `HANDOVER.md` (open items), not left as a code comment.

## 8. How to build a new page (recipe)

1. Create `src/pages/<name>.astro` using `BaseLayout` with `title`, `description`, and `schema` from `src/lib/schema.ts` (`webPage(...)`, `breadcrumbs(...)`).
2. **Hero:** `<section class="section page-top page-hero">` with `<h1 class="display …">` (one plain Bebas phrase in a `data-xray` span, no accent word), and `<p class="lede">`. Red background comes from `body`.
3. **Body:** alternate cream (`.section--cream`) and ink sections. Put each page's CSS in `src/styles/<page>.css`, imported in the page, and scope it with a prefix (the Starter page uses `st-`). Reuse tokens only.
4. Optional social proof: `Proof`, `Voices`.
5. End with `<ClosingCta />` (ink) or `<ClosingCta tone="red" />`, and set `footerTone` to match.
6. Add the page to `NAV` in `site.ts` if it belongs in the menu, and always add its path to the hardcoded `PAGES` list in `src/pages/sitemap.xml.ts`.
7. Test at 390px and 1440px. Check reduced motion. Make sure the headline fits at 390px (use `clamp`/`vw`). Never let a decorative element cover text (the Starter hero badge did).

## 9. The old Starter page (removed; see sections 21 and 22)

A campaign landing page built on the same system with a few deliberate differences: `landing` header (logo plus one "Get started" button), `footerTone="red"`, its own `starter.css` (`st-` prefix), pill buttons with a circle arrow (`.st-pill`), a green £999 badge sticker, pinned scroll scenes (statement and "how it works" on desktop; the statement is also pinned on mobile), stage tabs, a payment path, an impact carousel, glow-edged plan cards, an FAQ with one-open-at-a-time, and a sticky mobile CTA. It does **not** use the Boska accent in its headlines, which is the main place it drifts from the rest of the site; add one if you want it to feel closer to the main pages.

## 10. Things to watch

- Keep one idea per section and one primary CTA per view. The hero CTA on the Starter page is a single left-aligned button.
- `.card--blue` is not blue (it is ink). Legacy class name.
- Text over red needs cream, not ink, for contrast on small sizes.
- The 900px breakpoint drives pinning, sticky sidebars and the nav. Test just below and above it.

## 11. Portfolio pattern: `/work/portfolio`

For showcasing client work (brand boards, Instagram grids, web designs) on one page, without a page per project:

- Red `.page-hero`, then a **cream body** with a **sticky left rail** (`DesignRail`) and one **board per project** (`DesignBoard`). Styles in `src/styles/design.css` (`dz-` prefix).
- Rail sticks at `top: calc(var(--header-h) + 1rem)` from 900px up, with a scroll-spy marker. Under 900px the rail is hidden; its projects are listed in the phone pill (`DesignPageNavMobile.astro`, see the phone navigation section).
- Each board: number, Bebas name, Boska tagline, tags, brief, "what we made", palette (hex only when the client's brand book states it) and type, then a **scattered gallery**: 12-column grid, per-tile widths (`w`), uneven tops, hover tilt, "View" cursor label. Tiles open a native `<dialog>` lightbox (prev/next, Esc, swipe, focus return).
- Content lives in `src/data/design.ts`; images in `src/assets/design/<slug>/*.webp` (about 1600px wide, under 100KB). Add a project (or `kind: "social"` / `"web"`) and it appears in the rail automatically.
- Do not publish contact details printed in client brand books.

Hero, story and rail details (added with the second pass):

- **Hero** (`DesignHero`): giant Bebas headline with one Boska word and a short lede, on red. (The moving word strip and the "Please scroll down" cue were removed from the hero.)
- **Story sections** (`DesignStory`): "What's a brand book?" (ink, right after the hero), then the rail and boards, then the FAQ. Copy lives in `BRAND_BOOK`, `DESIGN_STEPS`, `DESIGN_WHY`. Surfaces alternate red / ink / cream / ink / cream / ink.
- **Rail** (`DesignRail`): "M" mark and project count, thumbnail cards for each project with a sliding ink highlight and a red scroll-progress line, and a red "Got a brand in mind?" contact card (CTA, WhatsApp, email, sticker). Under 900px it is hidden and the phone pill lists the projects instead.
- **The idea strip** under each board header: 3 to 4 concept chips (`idea` in `design.ts`), taken from the client's own brand book.


Story and SEO pattern (per project board and page):

- Each project has a `story` in `src/data/design.ts`: a serif H3 heading, three short paragraphs in a warm "we" voice (the first is a plain, quotable answer: who the client is, where, what we made), and an "At a glance" list. **Only facts the team confirmed go in**; anything unknown is left out (UltraSeal has no location or client brief on purpose).
- Search terms are used naturally in headings and body ("branding for small businesses", "housekeeping brand in London", "waterproofing company branding"), never stuffed.
- Page `<title>` and description are set around the target terms; the H1 stays the brand headline. JSON-LD: `CollectionPage`, `ItemList` of `CreativeWork` (with `description`, `keywords`, `genre`, `contentLocation` where public), `FAQPage` (`DESIGN_FAQ`) and breadcrumbs.
- Each story links to `/our-services/#brand-identity` and to the contact form with the service pre-filled.

Interactive brand book (`DesignBook.astro`, in "What's a brand book?"):

- A simulated hardcover that opens by dragging: pure CSS 3D (`perspective`, leaves hinged at the spine with `transform-origin: left`) plus pointer events and a small requestAnimationFrame tween. No library.
- Content: Magic Personnel's real brand book, one slide per spread, split down the middle across two pages (`BOOK` in `src/data/design.ts`, images in `src/assets/design/book-magic-personnel/`). The cover is a designed approximation.
- Drag a page edge to turn it; release decides by angle and flick speed. Also: click a page, Previous / Next, arrow keys, Home / End. There is no Enlarge button: the pinned book already fills the screen.
- **Contents is a real spread inside the book** (spread 1, live HTML): serif title on the left, a table of contents with dotted leaders and page numbers on the right. Each entry turns the book (`BOOK.contents` in `design.ts`); the entry for the open spread is highlighted. On phones, where the book is small, a row of chapter chips under it does the same job (`.dz-chapters`).
- **Spread types** in `BOOK.spreads`: `image` (a re-composed slide, split in half), `contents` and `cta` (live HTML, built in `DesignBookPage.astro`, sized with container query units so they scale with the book). The last spread (10) is the call to action: script headline "Want something similar for your business?", a red underline that draws on open, a "Start your brand" button to `/contact-us/?service=Brand%20%26%20Identity`, WhatsApp and email from `SITE`, and "Back to the cover".
- **Safari gotcha**: Safari ignores `backface-visibility: hidden` on faces that hold positioned or blended children, so the back of a page showed through mirrored. `paint()` therefore hides the wrong face of each leaf by hand (`visibility` on `.dz-front` / `.dz-back` at 90deg) and no `mix-blend-mode` is used inside the book. To test without Safari, force `backface-visibility: visible` on `.dz-face, .dz-face *` in Chromium: nothing should leak.
- Taps on links and buttons inside pages do not turn the page; a drag that starts on one still does.
- **Hit-testing gotcha**: in Chromium, tiny `translateZ` offsets between stacked leaves make real clicks miss children (clicks landed on a buried page). So only the visible leaves are rendered (`visibility`), and `translateZ(2px)` is applied only to leaves that are moving.
- `touch-action: pan-y` keeps vertical scrolling working on phones. Reduced motion: no peek, instant turns. Tested in Chromium (desktop and mobile emulation); Safari / iOS not tested.

Pinned scene (all widths, motion allowed): the section is ~260svh tall with a sticky 100svh stage. Scroll progress sets `--c` (copy fades and drifts up) and `--g` (book rises and grows to fill the viewport, about 1308x736 at 1440x900) and dispatches `dz:scrub`, which opens the cover until the visitor first touches the book. Wheel scrolling is never hijacked. With reduced motion there is no pin: copy, then the book at full width, then the chips. Grid note: `.dz-intro-in` uses `minmax(0, 1fr)` so the nowrap chips cannot widen the book.

Spreads are re-composed (not just split) on a shared page grid, 2000x1125 per spread, margins 90 outer / 70 gutter keep-out / 110 top / 100 bottom: each element (title, text, lockup, cards, swatches, photos) is cut from the original 300dpi render by bounding box and placed again, so nothing crosses the spine and titles share a top-left. The generating script lives outside the repo; re-do it from the client's PDF if a spread changes. Micro details: folios and a running footer on every page, page-stack edges that thin and thicken as you turn, a dog-ear that lifts on hover, a foil sheen that follows the pointer, a slight lean toward the pointer, paper grain, a short haptic tick on phones.

**Portrait phones (under 600px wide)** use a single-page book (`.is-single` on the section): a window one page wide (`.dz-book-turn`, about 388x436 on a 412px phone) slides over the full spread (`.dz-book`, positioned with `--pan`, 0 = left page, 1 = right page). The page sequence is cover, then every page in order (20 pages). Swiping forward from a right page turns its leaf while the window pans to the left page of the next spread; swiping forward from a left page just slides to its right page; the reverse mirrors this. `side` and `pan` in `DesignBook.astro` track the view; taps on the left/right half of the page step back/forward; Prev / Next, arrow keys and the chapter chips use the same `step()` / `setTurned()`. Chips land on the left page of a spread. The book stays `touch-action: pan-y`, so vertical swipes always scroll the page (no scroll trap), and the cover does not open on scroll in this mode. The back-to-top button is hidden while the scene is held (`body.dz-holding`). The hero's "Please scroll down" cue (`.dz-cue`, same `.dz-scroll` look) sits under the chips, centred in the space left to the bottom of the screen so the gap above and below it is equal; tapping it scrolls past the pinned scene. The gallery lightbox sits in the top layer above the custom cursor, so `.dz-lb` restores the native cursor.

Hero: no client names; no word strip or scroll cue any more.

**Websites and Instagram grids (`DesignWall.astro`, `DESIGN_WALL` in `design.ts`)**: after the client boards, on the same cream surface and with the same left rail pattern. `DesignRail` takes `groups`, `title`, `noun` and `contact` so it can serve both lists; this one is headed "Websites & feeds" (Websites, Instagram grids), shows sector names (never client names), and has no contact card (the page's closing CTA covers that). The tiles run in a fixed order, Websites, then Apps & software, then Instagram grids (the order of `DESIGN_WALL`, matching the rail), laid out in a two-column grid that keeps the scatter with per-tile `top` offsets, tilt and drift; phone profiles are centred in their cell on desktop; on phones one column in the same order, profiles alternating left and right. Websites are in a browser-bar frame; Instagram pieces are the **complete** profile screens in a phone bezel (nothing cropped; the viewer scrolls tall images, `.dz-lb.is-tall`). Tiles settle in on arrival and drift a few px with scroll (off for reduced motion). The rail script in `portfolio.astro` runs once per `.dz-layout`; scattered layouts pick the tile nearest the 40% line, boards use "top has passed". Labels are type + sector only, e.g. "Website · Spirits". Images are in `src/assets/design/wall/` (Instagram: rendered from the long profile PDFs at about 25 dpi, 900px wide).

**Page naming and structure**: the page is "Portfolio" at `/work/portfolio`. Portfolio is made of Brand identity (the client boards, rail headed "Brand identity") and Websites & social (the scattered tiles, rail headed "Websites & social"); each half opens with the same kicker + H2 + lede header (`.dz-wallhead`). Order: hero (big type, no side panel) -> "What's a brand book?" (pinned book, with a footnote "* For illustration only. A full brand book is far more extensive.") -> Brand identity -> Websites and Instagram grids -> FAQ. On desktop a page navigation bar (`DesignPageNav.astro`: Brand identity, Websites, Apps & software, Instagram grids, Questions) takes over from the site header while you are inside the portfolio: it shows exactly when the real header slides away on scroll down and hides when the real header returns on scroll up (it mirrors the header's `is-hidden` class and is built from the header's own `nav-pill` classes, so it looks identical). Under 900px it is replaced by the phone pill (`DesignPageNavMobile.astro`). Links smooth-scroll and then correct themselves if lazy images shift the layout, and the clicked link stays lit while the page travels there. The old "Why work with us?" section was removed.

**Apps and live views**: the second part of the Portfolio is "Websites, apps and Instagram grids" (rail "Digital & social"; groups Websites, Apps & software, Instagram grids). Apps are tiles in the same browser frame (`kind: "app"` in `DESIGN_WALL`) with a pill: `live: { url, title, mic? }` shows **Try it live** and opens the `.dz-live` viewer, `href` shows **Visit site** (new tab). Nothing from the client's site loads before the click: the iframe is created on click (sandboxed, `referrerpolicy=no-referrer`, microphone allowed only when `mic` is set), a preconnect is added on hover/focus only, and the frame is removed on close. The viewer always shows an "Open in new tab" link in case the client later blocks framing, and a note not to enter personal information. Luna (wellness chatbot) is live; the iAudit dashboard is behind a login, so it is a screenshot plus a link to the product site. A rail taller than the screen scrolls itself to keep the current row visible.

## 12. Status and handover

Current status, open items and decisions waiting on the client live in `HANDOVER.md` at the repo root. Read it first in any new session. Working conventions are in section 20 below.

## 13. Case study infographic pattern (blog posts in `case-studies`)

First used by `src/content/blog/iaudit-global-organic-growth.md`. Styles in `src/styles/casestudy.css` (`cs-` prefix, imported by `src/pages/blogs/[slug].astro`).

- **Linear style:** thin 2px lines, round caps, `currentColor` line icons (24px viewBox, same stroke as the Process icons), pills, tokens only. Red is the line that "travels"; ink is structure.
- **Because posts are `.md`**, figures are raw single-line HTML blocks (no blank lines inside, or markdown breaks them). Each is a `<figure class="fig cs-...">`, so the existing observer in `[slug].astro` adds `.is-in` and the lines draw once on scroll. No script is needed per figure; with reduced motion or no JS everything is simply shown.
- **Figures:** `cs-line` (vertical rail on phones, horizontal route from 700px; `--n` sets the stop count; used for the route and the question-to-platform funnel), `cs-pillars` + `cs-base` (cards on one foundation bar), `cs-tree` (root, branches), `cs-tools` (pills under a red baseline), `cs-feed` (sources converging on a node, SVG with `preserveAspectRatio="none"` and non-scaling strokes), `cs-grow` (zero to a number), `cs-chips` (stat chips), `cs-ledger` (hairline rows of Bebas numbers), `cs-shot` (screenshot in a browser-bar frame).
- **Screenshots** live in `public/case-studies/<slug>/*.webp` and are raw `<img>` tags with `width`/`height`. Do not use markdown `![]()` for dashboards in case studies: `.prose p:has(> img)` crops to 16:9 (the red tint has been removed, but the crop remains for case-study photos). Clicking one opens a native `<dialog>` (`.cs-lb`, Esc or the close button; focus returns to the image).
- **Numbers always carry their period and source** (e.g. "Search Console, 12-month view"). Use the client's own screenshots as the source of truth; never merge figures from different periods into one claim.
- To redraw a chart from real data later, use the `dataviz` skill and keep the screenshot beside it as proof.

**Logo heroes and more figures (second pass):**
- A post can set `logo` (and `logoAlt`) in its frontmatter. The hero tile and the blog card then show the client's logo, centred on a cream tile with no photo tint (`.a-tile.has-logo`, `.post-cover.has-logo`). Use it for case studies; trim transparent padding off the logo first.
- `cs-line--num` puts a big figure on each stop. `cs-reach` is one linear bar for a split (e.g. followers vs non-followers). `cs-swap` pairs "Instead of" with "We chose" using a line and arrow.
- `cs-embed` is a click-to-load third-party player: nothing is requested until the visitor presses play, the caption always carries a plain link, and the script in `[slug].astro` creates a sandboxed iframe on click.
- A post with `draft: true` is not built, not in the sitemap and not on `/blogs/`.


## 14. Article header (default for every blog post)

The editorial header replaced the old red split header on all posts (no `heroStyle` or `heroTone` any more). A calm layout modelled on a simple case-study page:
- **Banner** (`.a-banner`): full width, about 80svh with a rounded cream dome at the bottom. Photo posts: black-and-white photo under an ink fade with a centred Bebas label (`heroLabel`, default the category). Logo posts (`logo`, `logoFill`): the logo is the label, on its own colour. The site header floats over it; it samples the banner's CSS background colour to pick the light or dark mark, so keep a background colour on the banner.
- **Title block above the paragraphs** (`.a-intro`, inside the article column so the contents rail starts level with it): back link, outlined category pill with a red dot, date, read time, big ink Bebas H1, author, short answer as a plain block with a red rule, Ask AI as outlined pills, hairline rule, then the article.
- **Colour budget:** cream and ink; red only on small accents (pill dot, short-answer rule, links, the 3px reading-progress line, hover). Images supply the colour.
- The label is hidden when a post has a `logo`. Author line: Maximus M badge + "By Maximus Mediascape"; the summary block is labelled TLDR.

## 15. URLs and redirects
- **URLs match the previous WordPress site** so rankings carry over: `/our-services/`, `/about-us/`, `/contact-us/`, `/blogs/`, `/blogs/<slug>/`. Every URL ends in a slash (`trailingSlash: "always"` in `astro.config.mjs`; `url()` in `src/data/site.ts` adds it to internal links; canonicals, the sitemap and JSON-LD keep it). Never hard-code `/blog`, `/services`, `/about` or `/contact`.
- **Old URLs that no longer exist** are 301-redirected in `vercel.json`: the old location pages (`/digital-marketing-agency-in-london/`, `-surrey/`, `-tunbridge-wells/`, `/full-stack-marketing-agency/`, `/full-stack-marketing-agency-london/`) and `/services/` go to `/our-services/`; `/locations/*` (with and without trailing slash, both rules are needed) goes to `/our-services/`; `/blogs/tag/*` and `/tag/*` go to `/blogs/`; `/blog/<slug>/` goes to `/blogs/<slug>/`. Blog posts still link to the old location addresses on purpose so any ranking on them carries over via the redirect.
- After launch: export the old site's indexed URLs from Search Console, check each maps to a page or a redirect, submit the new sitemap.

## 16. The blog
- **Content:** 42 posts in `src/content/blog` (3 case studies plus 39 posts migrated from the WordPress export, original dates and slugs kept; schema in `src/content.config.ts`). Posts are markdown with FAQ in frontmatter. `/blogs/` lists newest first.
- **Heroes and cards** are black-and-white photos (case studies use client logos). Nine posts use true 2048px CC0 originals (WordPress Photo Directory and Wikimedia, found through the Openverse API); the other 30 are 960px StockSnap photos resampled to 1920px with light sharpening and grain, so they are softer. Replace with larger photos when available. The banner `Image` serves up to 2400px.
- **Inline images** (`public/blog-media/`, markdown `![]()`) show whole and in true colour; images smaller than the column are never stretched (centred at natural size with a soft shadow).
- **Show more:** `/blogs/` shows 12 cards then adds 12 per click, rounded up to complete rows at the current width (the lead card spans several columns on wide screens, so the first row holds fewer cards). Every card stays in the HTML for crawlers; filters and search cover all posts and reset the limit; the expanded count is remembered in `sessionStorage`.
- **Keep reading** (`PostCarousel.astro`): the same looping drag carousel as "Our values shape the work we do". Shared behaviour in `src/scripts/dragCarousel.ts`, shared styles in `src/styles/carousel.css`. Six related posts are rendered once in the HTML; the script clones the set twice for the loop. Lesson: clones must never be `inert` (it makes them unclickable); they use `tabindex="-1"` and `aria-hidden` instead. Nothing moves on its own.
- **Related posts** are scored automatically in `src/lib/related.ts` (same category, topic cluster by slug keyword, shared tags, shared title words). 32 posts also carry a hand-added "Related guides" line near the end linking to sister posts; that line is not automatic.
- **Contents:** desktop has the sticky side rail (`ArticleToc.astro`, FAQ entry only when the post has FAQs); phones have the Contents pill (see section 18). `src/lib/toc.ts` lists H2 headings, falling back to H2 plus H3 for posts with few H2s.

## 17. Guide figures in posts
Figures are single-line raw HTML blocks (no blank lines) using `casestudy.css`: `cs-line` route (numbered stops, optional `li.is-here` and links; the customer-journey posts link to each other), `cs-check` checklist rail (big red numbers, plain rows), `cs-cards` topic cards (two columns, big red number), `cs-pull` pull quote (one sentence copied from the post), `cs-swap` instead-of pairs. One figure per post, neighbouring posts (by date) use different formats, and every item comes from the post's own text. Never add invented numbers.

## 18. Phone navigation: pills that swap with the header
- **Pattern:** below 900px, a pill in the same liquid-glass shape as the site header (3.4rem tall, rounded, blur and shadow, ink round button on the right) takes the header's place when the header slides away on scroll down, and flips away (rotateX) when the header returns on scroll up. The state is keyed to the header's `is-hidden` class (a `MutationObserver`).
- **Blog** (`ArticleTocMobile.astro`): a "Contents" bar sits under the intro, pins to the top and shows the current section; tap opens a dropdown of sections.
- **Portfolio** (`DesignPageNavMobile.astro`): shows only while the portfolio is on screen; lists the five sections and, under them, all projects (built at runtime from the page's own rails, which are hidden on phones). Section detection is shared with the desktop bar in `src/lib/portfolio-section.ts`.
- **Header focus rule:** the header stays pinned only for keyboard focus (`:focus-visible`). A tap on the menu button used to leave focus in the header, which stopped it hiding and so stopped the pills returning.
- Tried and removed: a cartoon "M" mascot that opened a contents sheet (replaced by the pills at the user's request).

## 19. Navigation, pages and details changed
- **Cursor labels on parents:** nav items with a dropdown (Services, Work) carry `data-cursor="to services"` / `"to work"`, the same pill the logo shows ("to home"), so people know the parent itself is a link.
- **Work dropdown:** `NAV` items can have `children` (Work > Portfolio). Desktop shows a chevron on Work and a liquid-glass panel (`.nav-sub`, a sibling of the pill because the pill clips) on hover or focus; ArrowDown enters it, Escape closes it. The phone menu and footer list Portfolio under Work.
- **Featured work** (`/work/`, `FeaturedWork.astro`; the small star above its heading was removed on 7 Oct 2026): three real cards (Bakwa case study, Luna wellness chat, Bakwa Instagram grid, showing the top of the profile screenshot) plus the "Shhh" card. The results strip (`RESULTS` in `site.ts`) holds three figures from the case studies, each naming its client; client-reported figures carry an asterisk.
- **About hero:** the floating shapes were removed. **Portfolio hero:** the word strip and scroll cue were removed.
- **Contact page:** fully **ink** and seamless (changed 7 Oct 2026): the form is the hero (`ClosingCta tone="ink" hero heading="h1"`; `hero` adds page-top spacing and centring, `.closer--hero`; on ink it is not forced to full screen height), then `Offices tone="ink"` (skeleton boxes: transparent with a cream hairline, red border on hover) on the same ink, then the ink footer with its cream card. A scoped `body:has(...)` rule makes the page colour ink here so no red seam shows. About keeps the cream offices band; the red `ClosingCta` variant is now used only by the 404 page.
- **Testimonials** are real (see Voices).

## 20. Conventions
- British English, no em dashes, plain wording. Work and push only on `claude/fervent-clarke-uctw7x` (the branch Vercel deploys); do not create or push other branches. No pull requests.
- Use `url()` for every internal link; all internal URLs end in a slash; never hard-code old paths.
- Verify before saying done: `npm run build`, preview, screenshot at 390px and 1440px, run the built-site link crawl (no missing targets, no dead anchors). Never claim a deploy is confirmed until the live URL has been checked.
- Client facts are never invented. Ask first, label client-reported figures.
- Long unbroken strings (bare URLs in post bodies) must wrap: `.prose a` uses `overflow-wrap: anywhere`. Check any new page for horizontal scroll at 390px.
- Meta descriptions: 50 to 170 characters. For posts this is the `excerpt`, so keep it short.
- No em dashes anywhere in copy, including migrated posts (use commas or full stops).

## 20b. Titles and links (SEO)
- Tab titles stay within 60 characters: `BaseLayout` appends " | Maximus Mediascape" only when it fits. For a long post title add `seoTitle` to the post's frontmatter. Posts set `article` so the layout writes `og:type=article` and publish and modify times.
- Every new page needs links to it from the body of at least a few other pages (not only the nav and footer). Link to `/our-services/`, never to the old location addresses.

## 21. Stacking panels: the Starter plan, `/our-services/starter-plan`
A second version of the Starter offer, written for startups and SMEs with a small budget. Inspired by wearemotto.com/services (studied from a screen recording, not its code). It replaced the earlier `/website-starter` page (deleted; no redirects needed because it was never live) and is now indexable and in the sitemap.
- **Files:** `src/pages/our-services/starter-plan.astro`, `src/styles/startup.css` (prefix `su-`; also loads `starter.css` for pills, price, timeline, carousel and FAQ), `src/scripts/stackPanels.ts`, `src/data/startup.ts` (new copy). Shared Starter content (stages, steps, included lists, FAQ, CTA presets) lives in `src/data/starter.ts` and is used by both pages.
- **Stack:** `.su-stack` holds `.su-panel` sections. Each is `position: sticky; top: 0` with a rising `--z`, so the next panel slides over it. `initStack` writes `--cover` (0 to 1) on a panel as the next one covers it; CSS turns that into a dim overlay (ink on cream panels, black on ink panels) and a small upward drift of `.su-body`. No scaling. Panels taller than the screen get `top: -(height - viewport)` so their bottom sticks and all content scrolls past first. Panels alternate ink and cream; the first panel follows the cream hero.
- **Panel anatomy:** hairline, title row (stage name left, number right), statement, two-column item list, underlined link, small line illustration. Titles rise out of a mask once (`.su-rise`).
- **Reduced motion:** `is-live` is never added, so panels are ordinary stacked sections; the marquee stops and headlines show at once. The stack works the same on phones (smaller type, one column).
- **Plans intro now carries the note from the team** (`teamNote`): small `(A note from the team)` label left; right the line "A good website should not need an agency budget." as a medium statement, three small paragraphs, the team signature and a "See the plans" link; then a `(Pick your path to progress)` label row and three plain near-white plan cards (title over a hairline, bracketed tag, short text, underlined link; no numbers, bullets or inversion; hover lifts and a small tilted tile follows the cursor, mouse only). Data: `programs` in `src/data/startup.ts` (placeholders until the user supplies plan details). No prices.
- **Price and designs:** the light price block also carries stage chips (anchor to each panel) and three portfolio website designs (Sustainable packaging, Architecture and engineering, Wellness) in browser frames with a "See the portfolio" CTA. Captions say they are portfolio designs, never what £999 buys. Grid sections need `grid-template-columns: minmax(0, 1fr)` or wide children blow the column out on phones.
- **Light price:** `su-price--light` (cream, ink pills, a light outlined seal instead of the green one, ink hairlines, red payment fill) overrides the shared red `.st-price` without touching `starter.css`. Page rhythm (no two neighbours alike): hero cream, panels ink/cream/ink/cream, who ink, price and designs cream, iAudit proof ink, testimonials cream (`Voices`), FAQ ink, note and plans cream, closing CTA ink (`ClosingCta tone="ink"`, `footerTone="ink"`).
- **Currency (UK pages):** pounds lead. Bakwa revenue shows as `£30K*` on the case study page, with the asterisk note naming the ₹10 lakh+ Bakwa reported and saying £30K is a purchasing-power estimate, not a conversion. Never show a market-rate conversion.
- **Proof tiles (modelled on the reference's "Recent work"):** big borderless tiles in a drag row, one giant Bebas numeral as the whole visual (sized from the tile width with container units so it bleeds slightly past the edge, count-up when the tile scrolls into view), captions underneath in two columns (name and descriptor left, bracketed tag right), a small circular arrow on the logo tile. No bordered cards with small text inside: they read as generic.
- **Proof on the startups page** is the iAudit Global case study (`auditProof`, `AUDIT_NOTE` in `src/data/startup.ts`): pages, articles, countries, 1.6K AI citations (Microsoft Copilot, 3 months, from the Bing screenshot in the case study) and LinkedIn followers, all client-reported. The user-supplied 5,000 total is deliberately not used.
- **Other pieces:** hero marquee with asterisks; "Who it's for" list where the row nearest the middle of the screen darkens and expands; timeline on ink (reuses `.st-flow`); Bakwa proof carousel (client-reported figures, labelled; the case study is not the Starter package and the page says so).
- **x-ray:** `data-xray` flattens its element's text, so put it on plain-text spans only, never around the accent word. On cream, override `--xr-base` to ink.
- **Hero (phones):** On phones (below 900px) the £999 sticker sits beside the button (not by the headline), headline line height is 0.95, the lede is 1.0625rem at 1.6, and blocks are 1.75rem apart. Keep tag, headline, lede and buttons each on their own breathing line; never put a sticker on the same row as the tag.
- **Who it's for** ends with a `(Not a fit?)` strip (`notFit`), only restating what is not included. **A note from the team** (`teamNote`) sits on cream right after the testimonials; it is signed by the team until a founder name and photo exist.

## 22. The plans page: `/our-services/care-and-growth-plans`
Retainer pricing (Care and Growth). **No boxes:** no bordered or filled cards, tiles or badge shapes. Structure comes only from big type, hairline rules, whitespace and alternating cream and ink bands (hero and journey cream, Care ink, Growth cream, Everything red, comparison ink, who-it's-for cream, add-ons ink, FAQ cream, closing CTA ink).
- **Files:** `src/pages/our-services/care-and-growth-plans.astro`, `src/styles/plans.css` (prefix `pl-`; also loads `startup.css` for the stacking panels and `starter.css` for pills and the FAQ), `src/data/plans.ts` (all copy, verbatim from the client; the single source of truth, also read by the Starter page's plan section).
- **Copy rules (from the client):** British English, no em or en dashes as punctuation, prices and terms exactly as written, prices exclude VAT (stated), no testimonials, statistics or case-study figures, no invented plans, features or discounts, no promises about rankings, AI citations, links or press. Client logos are shown by the client's request (shared `Proof` strip, same status as on the home page).
- **Hero:** fills the screen like the Starter page, with the same moving Bebas word strip along its bottom (`.su-marq`, words in `MARQUEE` in `src/data/plans.ts`; the client logo strip is no longer used here). The H1 is auto x-rayed by the layout, so plain text parts carry `data-xray` and the accent word does not; base colour is ink (`.pl-h1 [data-xray]`).
- **Journey rail removed (7 Oct 2026):** the hero and word strip now run straight into the plan panels. The client line "Already have a website? You can start straight on Care or Growth..." is the note at the bottom of the Care panel.
- **Plans:** four stacking panels (`stackPanels.ts`: Care ink, Growth cream, **Starter ink**, Everything red). The Starter panel (`STARTER_PANEL` in `plans.ts`) is built only from `src/data/starter.ts` (stage item names, price, 50/50 terms, not-included list; the left list is "Who is this for?", draft copy for startups and SMEs) and its button goes to `/our-services/starter-plan/`: left the name, giant price, term, headline, summary and button; right hairline rows ("Month one" lines, then "Every month" rows with bracketed labels).
- **Comparison and add-ons (second reference: serious.business):** still no boxes, and now **one design for both**. Each is an ink band with the heading sticky at the left (small bracketed tag, big Bebas title) and a real `<table class="pl-table pl-addons">` at the right: small uppercase column labels over one rule, tall ruled rows, big row names, Bebas prices (`.pl-price-cell`), other rows fade on hover. The comparison ("What changes when you move up") adds `pl-compare` for its three columns (feature, Care, Growth); "Add on" and "Not included" are muted and a small red dot marks what Growth gains. **Add-ons** also has a small price tile that follows the cursor on hover (mouse only, `data-peek`); **Paid ads** and **Email and SMS** each carry a second line (second campaign, extra campaign) held in a linked `.pl-subrow`: collapsed to zero height, it slides out on hover or keyboard focus of the parent row (the parent row is `tabindex=0`). Below 760px both tables stack with labelled values ("Care:", "Growth:"); on phones the sub rows are always visible, prefixed "Also:". Reduced motion: no transition.
- **Who it's for:** the Starter page's pattern (`su-who`: big names, the row nearest the middle of the screen lights up, description and red number appear), on cream (`.pl-who`) so it sits between the ink comparison and ink add-ons. Rows are tailored to Care and Growth (`WHO` in `src/data/plans.ts`, draft for sign-off); there is no "Not a fit?" block here.
- **Third panel, "Want everything?":** `EVERYTHING` in `src/data/plans.ts`, same panel layout as Care and Growth plus a third list, "Add-ons you can bring in" (`EVERYTHING_EXTRA`, five add-ons with prices pulled from `ADDONS`) so the red panel fills a tall screen, **red** (`.su-panel--red`) so the stack runs ink, cream, red and the ink comparison follows without two neighbours sharing a tone. Quoted price, built from the existing Custom plan line ("larger or multi location businesses") and the add-ons; CTA goes to `/contact-us/?service=Custom%20Plan`. It is not in the OfferCatalog schema (no fixed price). Draft copy for sign-off.
- **FAQ:** the Starter page's pattern (`st-faq` numbered hairline accordion, one open at a time, side column with email, WhatsApp and a "Talk to us" pill), on cream with ink overrides (`.pl-faq`). Below it, in the same cream area, the small print. After the FAQ comes the Starter page's closing pattern, reused: `(A note from the team)` (the Starter's `teamNote` from `src/data/startup.ts`, same text and design) and `(Pick your path to progress)` with three cards (`su-card`, `PATH` in `src/data/plans.ts`): Starter plan (to `/our-services/starter-plan/`), Care and Growth (to `#care`, `#growth`), joined to the FAQ by a hairline. The cards carry the Starter page's cursor-following art tile (mouse only; drawings in `ARTS` in `plans.astro`).
- **Path cards component:** `src/components/PathCards.astro` holds the "Pick your path to progress" cards (Starter plan, Care, Growth from `PATH` in `plans.ts`), the cursor-following tile and its script. `tone="cream"` is the base design (startup.css); `tone="ink"` is the dark version (`src/styles/pathcards.css`) used on `/our-services/` just before the closing form (`.svc-path` in `services.css`). `local` keeps `#care` and `#growth` as in-page anchors on the plans page; elsewhere they link to the plans page.
- **Mobile sticky CTA:** the same `StickyCta` as the Starter page ("Talk to us about a plan"): appears after the hero (`data-hero`), hides when the closing form is on screen, hidden from 900px up.
- **Contact links:** `/contact-us/?service=Care%20Plan` etc. work as-is; `ClosingCta` pre-fills the message with "I'd like to talk about: Care Plan".
- **Interlinking:** `NAV` has a **Services dropdown** with two items: Starter Plan (`/our-services/starter-plan/`) and Care and Growth Plans (`/our-services/care-and-growth-plans/`); the Services link itself still goes to `/our-services/`. The header dropdown, phone menu and footer all render `NAV` children, and Services is marked current on any of the three pages. There is no top-level Plans link. Links also come from the services hero, work hero, home Offerings, every blog post footer, and the Starter page; `/our-services/care-and-growth-plans/` and `/our-services/starter-plan/` are in the sitemap.

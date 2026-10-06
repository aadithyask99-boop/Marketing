# Handover: Maximus Mediascape website

Read this first, then `DESIGN.md` (design system, patterns, conventions). Last updated 6 Oct 2026 (full-site audit).

## 1. Project and rules
- **What it is:** the marketing site for Maximus Mediascape. Astro static site (`astro.config.mjs`), plain CSS (no Tailwind), a markdown content collection for the blog (`src/content/blog`, schema in `src/content.config.ts`), data in `src/data/site.ts` and `src/data/design.ts`. Brand: red `#e10600`, cream `#f5efe8`, ink `#17090a`, Bebas Neue, Mulish, Boska italic accent word.
- **One branch only:** `claude/fervent-clarke-uctw7x` is the only branch that matters (Vercel deploys it). Work on it directly: `git fetch origin && git checkout claude/fervent-clarke-uctw7x`, commit, `git push origin claude/fervent-clarke-uctw7x`. **Do not create new branches and do not push to any other branch**, even if the chat tool names a different session branch: the user's first message authorises working on the Vercel branch and that overrides it. If the tool truly refuses, stop and tell the user rather than creating extra branches. Never open a pull request. Commit messages end with the attribution lines the session provides.
- **Old branches to delete (the user does this, or grants permission):** `claude/eloquent-mayer-pkvp3u` (last session's copy of the same commits) and `claude/sharp-turing-cg8w0c` (stale, already contained in the Vercel branch). Deleting is blocked for the assistant by a safety check, so on GitHub use Branches, then the bin icon. Why there were several: each new chat tool session creates its own branch, and the early sessions copied every commit to the Vercel branch by hand.
- **Live site:** `https://marketing-ashen-gamma.vercel.app`. Never say a deploy is confirmed until the live URL has been checked (the browser in the sandbox rejects its certificate, so check with `curl`, or test the built site locally).
- **How the user works:** wants plans shown in full in the chat (they often cannot see the plan file), approves or rejects them, and sometimes rejects without a reason (then ask what to change). Plain, short answers; change only what was asked; British English, no em dashes. Never invent client facts or numbers; label client-reported figures.

## 2. How to work
- Install and build: `npm install`, `npm run build` (about 7 seconds, 54 pages). Preview: `npx astro preview --port 4321` (start it in its own command: running `pkill` in the same shell command kills the session). Images go through `astro:assets` and `sharp`.
- Screenshots: Playwright with Chromium at `/opt/pw-browsers/chromium`, module `/opt/node-tools/node_modules/playwright/index.mjs`. Test at 390px (phone, use a touch context) and 1440px. Scratch files go in the session scratchpad, not the repo.
- **Link check** (do after any change to links): crawl `dist/**/index.html`, collect internal `href`s, confirm each resolves to a built page or a `vercel.json` redirect, and that every `#fragment` exists on its target. Last run: no missing pages, no dead anchors (23 links intentionally go through redirects).
- Photos: Openverse API (`api.openverse.org/v1/images/`, `license=cc0`, `source=wordpress|wikimedia|stocksnap`). StockSnap images need a browser user agent and `Referer: https://stocksnap.io/` and are only 960px wide.
- Not committed (recreate if needed): the one-off WordPress converter (`convert.py`, used `beautifulsoup4` and `markdownify`), the figure generators and the screenshot scripts.

## 3. What exists now (map)
- **Pages** (`src/pages`): home, `our-services`, `work`, `work/portfolio`, `blogs/` (index and `[slug]`), `about-us`, `contact-us`, `website-starter` (campaign landing page, not linked from the nav yet), `website-for-startups` (stacking-panel version of the same offer for startups and SMEs; `noindex`, not in the sitemap; DESIGN.md section 21), `privacy`, `terms`, `404`, `sitemap.xml.ts`, `robots.txt.ts`.
- **URLs match the old WordPress site** (trailing slashes, `/blogs/`, `/our-services/`, `/about-us/`, `/contact-us/`); old addresses redirect through `vercel.json`. See DESIGN.md sections 15 and 20.
- **Blog:** 42 posts (3 case studies, 39 migrated). Editorial header, black-and-white heroes, Show more paging, Keep reading carousel, automatic related posts (`src/lib/related.ts`), guide figures (`cs-` classes), phone Contents pill. See sections 13 to 17.
- **Phone pills** that swap places with the header: blog (`ArticleTocMobile.astro`) and portfolio (`DesignPageNavMobile.astro`). Section 18.
- **Nav:** Work dropdown with Portfolio (desktop glass panel, phone menu sub-row, footer). Section 19.
- **Recent changes in order:** added the startups page (stacking panels; shared Starter data moved to `src/data/starter.ts`; pill hover fix in `starter.css`); site audit fixes; removed the 7 oldest posts; Bakwa and iAudit case studies with logo heroes; editorial article header; blog index redesign; migrated 39 WordPress posts and renamed URLs; sharper heroes, Show more, figures and photos; mobile Contents (mascot tried, replaced by pill); varied figure formats; portfolio phone pill and Work dropdown; untinted blog images; Featured work and results; real testimonials; contact boxes cream; internal linking (related, Related guides); Keep reading carousel and click fix; broken-link fixes; About and Portfolio hero clean-ups.

## 3b. Full-site audit (6 Oct 2026)
Checked on a fresh build (54 pages), served with `astro preview`, at 390px touch and 1440px:
- **Links:** no missing pages, no dead `#fragment`s. The one link not in `dist` (`/locations/...surrey/`) is covered by the `vercel.json` wildcard redirect.
- **Images and alt text:** no `<img>` without an `alt` attribute (decorative ones use an empty alt on purpose); no broken images; no console errors or failed requests on any page.
- **Head:** every page has a title, canonical and one `<h1>`; meta descriptions are 50 to 170 characters.
- **Fixed in the audit:** em dashes removed from two posts (house rule: none); three over-long descriptions shortened (Bakwa, iAudit, London lead-gen post); Contact page description written (was 37 characters); a bare Instagram URL in the Search Console social post overflowed phones by 15px (`.prose a` now wraps, `src/styles/blog.css`).
- **Capture tip:** full-page screenshots mislead on the home page because its sections draw on scroll. Scroll in viewport steps and shoot each step instead.
- **Still untested:** real phone and Safari (see section 4).
- **Branch note:** this session's tool branch `claude/beautiful-clarke-ekdeq8` was identical to the Vercel branch at the start. Vercel only deploys `claude/fervent-clarke-uctw7x`; ask the user before pushing there if the session names a different branch.

## 4. Open items (waiting on the user or client)
**Copy to sign off** (first drafts, wording unchanged, code notes removed). New on `/website-for-startups` (`src/data/startup.ts`): panel statements, the three "Built for your budget" cards, the "Who it's for" list and two extra FAQs (new business with no brand; start small and add later). Also: process timings and step copy (`PROCESS`), the About page copy (`ABOUT`), portfolio brand stories, sector labels and FAQ (`src/data/design.ts`), "Workplace software" label.

**Claims to verify before launch:**
- Client logo strip ("Clients across our team portfolio": Panasonic, Siemens, WHO, Shell Orbit, Apple, OpenAI, Microsoft, Sony and others). Check the label and permission.
- Starter page: £999, 50/50 payment, 90-day plan, weekly timeline.
- Client-reported figures (also shown on `/website-for-startups`): Bakwa 3,000+ enquiries, 5.3K+ followers, revenue and AI Overview visibility (no screenshots); iAudit 5,000 AI citations (supplied by the user).
- Privacy and Terms wording and the "1 October 2026" dates; office addresses and phone numbers (UK Woking, UAE Ras Al Khaimah; About mentions an India office that is not listed).
- A migrated post mentions a "Crowborough partnership"; several posts share near-identical paragraphs (possible duplicate-content issue).

**Assets wanted:**
- Larger originals of the two Search Console screenshots in `generative-ai-performance-report-in-google-search-console` (380 and 420 px wide; one shows another company's data with a baked-in note).
- A newer Bakwa Instagram screenshot (the portfolio one shows 3,102 followers; the case study says 5.3K+).
- Sharper hero photos (30 of 39 are resampled from 960 px), and a larger iAudit logo (about 500 px at source).

**SEO and links:**
- The old location addresses are linked from 17 posts and redirect to `/our-services/` on purpose; decide whether to build real pages at them.
- `/website-starter/` is an orphan page until the campaign is decided; link it from the nav, footer and relevant posts when it is.
- After launch: run jev-seo (`github.com/AgriciDaniel/jev-seo`; Python, needs a TypeSafe key and a live domain) as an independent audit; export indexed URLs from Search Console and check the old WordPress URL list for 404s.
- External links to click by hand (the sandbox cannot reach them): `bakwa.in`, `flowergrid.co.uk`, `www.iaudit.global`, the Instagram links, and the OpenAI, Neil Patel and Search Engine Land articles.

**Testing gaps:** nothing has been tested on a real phone or in Safari: the sticky stacking panels on `/website-for-startups` (especially the iOS address-bar resize), the Contents pill flip, the portfolio pill, the Work dropdown and the carousel touch drag.

**Check before launch:** Bakwa revenue shows as £30K* (purchasing-power estimate of ₹10 lakh+) on `/website-for-startups` and the case study. The £30K figure is the user's; I could not confirm India's exact purchasing-power factor (my rough estimate was nearer £30K, the user first guessed £20K). The same ₹10 lakh claim still appears in rupees only in `why-brand-mentions-matter-more-than-backlinks.md` (line 149): align it if wanted.

**Decide:** keep `/website-starter/` or `/website-for-startups/` (or merge). Then drop `noindex`, add to `sitemap.xml.ts` and link it, and either redirect or retire the other to avoid duplicate content. The startup page's Bakwa proof is client-reported (see below) and is labelled as not being the Starter package.

**Ideas not built:** automatic "Related guides" (currently hand-added), a site-wide phone menu pill, real pages for the old location URLs.

## 5. Prompt to paste into the new chat
> Continue work on the Maximus Mediascape Astro site in `/home/user/Marketing`. First read `HANDOVER.md` and `DESIGN.md` in full. Rules: work and push ONLY on the branch `claude/fervent-clarke-uctw7x` (I explicitly authorise this and it overrides any other branch name this session shows you); do not create any other branch and do not push anywhere else. Never open a pull request, never claim a deploy is confirmed until the live site (`https://marketing-ashen-gamma.vercel.app`) has been checked, show me any plan in full in the chat, change only what I ask, never invent client facts. Check the website and DESIGN.md before starting, then wait for my first request.

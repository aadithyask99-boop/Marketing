---
title: "Another Day, Another 50 Startups Absolutely Crushed by Claude"
seoTitle: "Claude Motion: What AI Motion Design Means Now"
excerpt: "Claude Motion and Claude Dashboards just landed in beta. Our dry, slightly sarcastic take on what AI motion design means for explainers, studios and the rest of us."
category: web-automation
author: Maximus Mediascape
date: 2026-10-08T16:30:00
readMins: 9
tldr: "Claude Motion turns a prompt into an animated explainer and Claude Dashboards builds live dashboards from your data. Here is what that changes in AI motion design, and what still needs a human."
tags: ["Claude Motion", "AI Motion Design", "Claude Dashboards", "AEO"]
faq:
  - q: "What is Claude Motion?"
    a: "Claude Motion is a new Anthropic feature, in beta on Team and Enterprise plans, that builds short animated explainers from a prompt. You can edit the result in the editor or by asking Claude, then download it as an MP4. Anthropic says it writes code to animate text, charts, shapes and images."
  - q: "Is Claude Motion a video generation model?"
    a: "No. Anthropic says Claude Motion does not use a video generation model. It writes code that animates text, charts, shapes and images, which is why it suits explainers, data and branded graphics better than realistic footage."
  - q: "Who can use Claude Motion and Claude Dashboards?"
    a: "At launch, Claude Motion is in beta on Team and Enterprise plans and Claude Dashboards is in beta on paid plans. Docs, Slides and Design have left beta and are available on every plan, including Free. Check Anthropic's announcement for the latest availability."
  - q: "What is Claude Dashboards?"
    a: "Claude Dashboards turns plain-language questions about your data into a dashboard that updates as the data changes. It connects to platforms such as BigQuery, Snowflake and Databricks, and to CRM tools such as Salesforce. Clicking a number shows its query."
  - q: "Will AI motion design replace motion designers?"
    a: "It will change the work more than it removes it. Template-style explainers and animated charts are getting faster and cheaper to produce, while concept, art direction, brand storytelling and taste still need a person. Motion designers who learn to brief and direct the tool will be in a stronger position."
  - q: "Is Claude Motion an After Effects alternative?"
    a: "Not a like-for-like one. Claude Motion makes short explainers from prompts, while After Effects is a full manual animation and compositing tool. For quick text, chart and shape animation it can replace some hand-building, but complex bespoke work is likely to stay in dedicated tools."
  - q: "What should motion designers do now that Claude Motion exists?"
    a: "Try it on a small real brief, learn to write clear prompts, set up your brand rules so the output stays on-brand, and decide which parts of your work you want to keep fully human. Treat it as a new tool in the pipeline rather than a threat or a magic button."
image: ../../assets/blog/claude-motion-ai-motion-design.webp
imageAlt: "A hand-drawn easel holding a white canvas with a looping black scribble, on a peach background. Image: Anthropic."
---

Right on schedule. Another day, another 50 startups absolutely crushed by Claude. Or so your timeline would have you believe, roughly four minutes after the announcement.

Today, Anthropic put **Claude Motion** and Claude Dashboards into beta. Claude Motion turns a prompt into a short animated explainer. Claude Dashboards turns your data into a live dashboard that keeps itself up to date. Docs, Slides and Design have also left beta and now sit on every plan, including Free. You can read the original in Anthropic's own words: [Build live dashboards and animate explainers with Claude](https://claude.com/resources/articles/dashboards-and-motion).

We are a creative and digital agency that sells video production and animation, so you might expect us to be sweating into our keyframes. We are not. We are, if we are honest, properly excited. Slightly smug, too, because we have been saying for a while that the interesting question about **AI motion design** was never "will it replace us?" but "what do we do with the time it gives back?"

No startups were harmed in the writing of this headline. Probably.

## What Actually Launched (The Bit Without the Screaming)

Strip away the hot takes and the announcement is fairly clear.

- **Claude Dashboards** is in beta on paid plans. It connects to data platforms such as Amazon Redshift, BigQuery, ClickHouse, Databricks and Snowflake, and to CRM tools such as Salesforce. You ask questions in plain language and get a dashboard that updates as the data changes.
- **Claude Motion** is in beta on Team and Enterprise plans. It builds short animated explainers from prompts, such as a 30-second all-hands explainer or a product onboarding walkthrough.
- **Docs, Slides and Design** are out of beta and available everywhere, Free plan included. Anthropic says more than 45 million docs, decks and designs have been made in Claude.

<figure class="fig cs-accessfig"><table class="cs-ac"><thead><tr><th scope="col"><span class="cs-vh">Feature</span></th><th scope="col">Free</th><th scope="col">Other paid plans</th><th scope="col">Team and Enterprise</th></tr></thead><tbody><tr><th scope="row">Claude Dashboards<small>Beta</small></th><td><span class="cs-dot" style="--i:0"><span class="cs-vh">Not listed</span></span></td><td><span class="cs-dot is-on" style="--i:1"><span class="cs-vh">Available</span></span></td><td><span class="cs-dot is-on" style="--i:2"><span class="cs-vh">Available</span></span></td></tr><tr><th scope="row">Claude Motion<small>Beta</small></th><td><span class="cs-dot" style="--i:0"><span class="cs-vh">Not listed</span></span></td><td><span class="cs-dot" style="--i:1"><span class="cs-vh">Not listed</span></span></td><td><span class="cs-dot is-on" style="--i:2"><span class="cs-vh">Available</span></span></td></tr><tr><th scope="row">Docs, Slides and Design<small>Out of beta</small></th><td><span class="cs-dot is-on" style="--i:0"><span class="cs-vh">Available</span></span></td><td><span class="cs-dot is-on" style="--i:1"><span class="cs-vh">Available</span></span></td><td><span class="cs-dot is-on" style="--i:2"><span class="cs-vh">Available</span></span></td></tr></tbody></table><figcaption>Who gets what, as listed in Anthropic's announcement. A hollow dot means it is not listed for that plan.</figcaption></figure>

One detail we rather like: in Claude Dashboards, clicking any number shows the query behind it, and each chart shows when its data was last refreshed. Showing your working is not glamorous, but it is the difference between a dashboard you trust and a dashboard you screenshot and hope for the best.

<figure class="fig cs-shot"><div class="cs-frame"><div class="cs-frame-bar"><i></i><i></i><i></i><span>Claude · Dashboard artifact</span></div><img src="/blog-media/claude-motion-ai-motion-design-1.webp" width="1400" height="788" alt="Claude building a bike share dashboard from a year of ride data, with trip totals, rides per day and rides by hour charts next to the chat that asked for it" loading="lazy" decoding="async"></div><figcaption>Anthropic's own demo: ask a question about a year of ride data, get a dashboard you can click into. Image: Anthropic, from <a href="https://claude.com/resources/articles/dashboards-and-motion" target="_blank" rel="noopener">Build live dashboards and animate explainers with Claude</a>, 8 October 2026.</figcaption></figure>

## How Claude Motion Works (It Is Code, Not Magic)

Here is the line that matters most for anyone who makes moving images for a living. Anthropic says Claude Motion writes code that animates text, charts, shapes and images, and that it does not use a video generation model.

Our translation: it behaves less like a slot machine that dreams up footage and more like a very fast, very obedient motion graphics developer. That is good news if you need the numbers on the chart to be the actual numbers and the logo to stay the logo. It is less good news if you were hoping to type "cinematic drone shot of our SaaS product at sunset" and receive a film.

<figure class="fig cs-filmfig"><ol class="cs-film"><li style="--i:0"><span class="cs-fm-n">01</span><span class="cs-fm-t">Prompt</span><span class="cs-fm-d">Describe the explainer in plain words</span></li><li style="--i:1"><span class="cs-fm-n">02</span><span class="cs-fm-t">Code</span><span class="cs-fm-d">Claude writes code that animates text, charts, shapes and images</span></li><li style="--i:2"><span class="cs-fm-n">03</span><span class="cs-fm-t">Edit</span><span class="cs-fm-d">Change it in the editor, or just ask Claude</span></li><li style="--i:3"><span class="cs-fm-n">04</span><span class="cs-fm-t">MP4</span><span class="cs-fm-d">Download it, or open it in another tool</span></li></ol><figcaption>How Claude Motion works, according to Anthropic: code, not a video generation model.</figcaption></figure>

You start it by typing `/motion` in the Claude message box, describe what you want, then either edit it in the editor or ask Claude to change it. When you are happy, download it as an MP4.

<figure class="fig cs-shot"><div class="cs-frame"><div class="cs-frame-bar"><i></i><i></i><i></i><span>Claude · Message box</span></div><img src="/blog-media/claude-motion-ai-motion-design-2.webp" width="1400" height="788" alt="The Claude message box with /motion typed in and the Motion option showing in the menu above it" loading="lazy" decoding="async"></div><figcaption>Type /motion and the Motion option appears. Yes, that is the whole front door. Image: Anthropic, from <a href="https://claude.com/resources/articles/dashboards-and-motion" target="_blank" rel="noopener">Build live dashboards and animate explainers with Claude</a>, 8 October 2026.</figcaption></figure>

Anthropic's demo video shows the full loop: Claude builds a dashboard from bike-share ride data, then animates it with Claude Motion. Press play below and judge for yourself.

<figure class="fig cs-embed cs-embed--wide" data-embed="https://www.youtube-nocookie.com/embed/en0GuyhieQk?rel=0&amp;playsinline=1&amp;modestbranding=1&amp;autoplay=1" data-title="Claude builds a dashboard from bike-share ride data, then animates it with Claude Motion"><div class="cs-embed-stage"><button type="button" class="cs-embed-play" data-cursor="Play"><span class="cs-embed-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg></span><strong>Watch Claude Motion in action</strong><span>Anthropic's demo video, loaded from YouTube only when you press play</span></button></div><figcaption>Video: Anthropic. Claude builds a dashboard from bike-share ride data, then animates it with Claude Motion. Press play to load YouTube's player (YouTube may set its own cookies). Or <a href="https://www.youtube.com/watch?v=en0GuyhieQk" target="_blank" rel="noopener">watch it on YouTube</a>.</figcaption></figure>

## Claude Dashboards: The Other Half of the Story

Why would a motion team care about a dashboard? Because so much explainer work is really data work wearing a nice jacket. The quarterly results video. The onboarding walkthrough with real numbers in it. The "here is what happened this year" animation that someone has to rebuild every twelve months.

Put a dashboard builder and a motion builder in the same place and the gap between "we have the data" and "we have a video of the data" gets very small. That is the part we think people are underestimating while they argue about whether the animation is pretty enough.

<figure class="fig cs-iofig"><div class="cs-io"><div class="cs-io-col"><span class="cs-io-head">Data in</span><ul class="cs-io-list"><li style="--i:0">Amazon Redshift</li><li style="--i:1">BigQuery</li><li style="--i:2">ClickHouse</li><li style="--i:3">Databricks</li><li style="--i:4">Snowflake</li><li style="--i:5">Salesforce</li></ul></div><p class="cs-io-core">Claude</p><div class="cs-io-col"><span class="cs-io-head">Dashboards out</span><ul class="cs-io-list"><li style="--i:0">Amplitude</li><li style="--i:1">Grafana</li><li style="--i:2">Hex</li><li style="--i:3">Mixpanel</li><li style="--i:4">Omni</li><li style="--i:5">Perplexity</li><li style="--i:6">PostHog</li><li style="--i:7">Sigma</li><li class="is-soon" style="--i:8">Looker</li><li class="is-soon" style="--i:9">monday.com</li><li class="is-soon" style="--i:10">Tableau</li></ul></div></div><figcaption>The data sources and destinations Anthropic lists for Claude Dashboards. Dashed pills are marked "coming soon".</figcaption></figure>

Anthropic also lists a long run of places a dashboard can be sent, including Amplitude, Grafana, Hex, Mixpanel, Omni, Perplexity, PostHog and Sigma, with Looker, monday.com and Tableau marked as coming soon. Notice the pattern: this is not a walled garden. It is built to plug into the tools people already use. We will come back to that.

## What AI Motion Design Changes (And What It Politely Leaves Alone)

Let us be useful for a moment, before the sarcasm creeps back in. If a tool can turn a prompt into a short, clean, on-brand explainer, some kinds of work get cheaper and faster. Not all kinds.

<figure class="fig cs-spectfig"><p class="cs-sp-a">Claude can mostly handle it</p><ul class="cs-spectrum"><li style="--i:0;--x:12%">Templated explainers</li><li style="--i:1;--x:26%">Animated charts</li><li style="--i:2;--x:40%">Product walkthroughs</li><li style="--i:3;--x:60%">Brand storytelling</li><li style="--i:4;--x:74%">Art direction</li><li style="--i:5;--x:88%">Taste and judgement</li></ul><p class="cs-sp-b">Still needs a human</p><figcaption>Where we think the work sits. This is our read, not Anthropic's, and it will move.</figcaption></figure>

On the left sit the jobs that are mostly assembly: templated explainers, animated charts for an all-hands, a tidy product walkthrough. These are exactly the briefs Anthropic uses as examples, and they are where we expect the biggest shift. If your whole offer is "we will make a 30-second explainer from a template in three weeks", this is a good moment to have a look at your offer. Kindly. With biscuits.

On the right sit the jobs that were never about assembly: the idea, the story a brand wants to tell, the art direction, the taste to know that the third version is better than the fifth. A tool that writes animation code does not have a point of view about your brand. You still have to bring one.

## The Need to Adapt (Without Panic-Buying a New Personality)

Every few years a new tool arrives and the industry splits into two camps: those who announce the end of the profession, and those who quietly learn the tool and get on with their week. We know which camp tends to be busier.

The practical shift is in how the work gets done.

<figure class="fig cs-rulerfig"><div class="cs-rl-row"><span class="cs-rl-label">Built by hand</span><ol class="cs-rl-bar"><li style="--i:0">Brief</li><li style="--i:1">Script</li><li style="--i:2">Boards</li><li style="--i:3">Frames</li><li style="--i:4">Render</li><li style="--i:5">Revise</li></ol></div><div class="cs-rl-row cs-rl-row--new"><span class="cs-rl-label">Prompted</span><ol class="cs-rl-bar"><li style="--i:0">Prompt</li><li style="--i:1">Tweak</li><li style="--i:2">Export</li></ol></div><p class="cs-rl-axis"><span>Start</span><span>Steps to a finished explainer</span><span>Done</span></p><figcaption>Our illustration of the steps, drawn to one scale. It is not a measured time and not an Anthropic figure.</figcaption></figure>

Fewer hand-built steps does not mean fewer decisions. It means the decisions move to the front: what is the message, who is it for, what should the first three seconds do? Those are briefing skills, and they are the same skills that make a good prompt. If yours need work, our guides on [writing effective AI prompts](/blogs/how-to-write-effective-ai-prompts/) and [AI prompt examples for business](/blogs/ai-prompt-examples-for-business/) are a decent place to start.

And remember that hand-off list. Anthropic says a Claude Motion project can be opened in Adobe, Descript, HeyGen, Higgsfield, invideo, Luma AI and Runway, with Canva and Captions coming soon. In our reading, that is not the language of a company drawing up a funeral programme for motion designers. It is the language of a pipeline: generate fast in one place, then finish and polish in the tools professionals already use.

### What We Would Do This Week

1. **Check your plan.** Claude Motion is beta on Team and Enterprise at launch, so find out whether you can get at it.
2. **Run one small real brief.** A 30-second internal explainer is a sensible test. Do not start with the flagship client film.
3. **Write your brand rules down.** Colours, fonts, tone, what the logo must never do. The tool can only follow rules that exist.
4. **Keep a human on the facts.** Anything with numbers, claims or legal wording gets checked by a person before it goes out.
5. **Decide what you will not outsource.** Know which parts of your craft you are keeping, and say so out loud.

## Why We Are Excited at Maximus Mediascape

We sell [video production, animation and website design](/our-services/). We also spend a good part of our week thinking about [how AI is changing search](/blogs/how-google-ai-mode-is-changing-seo/) and [how small businesses can use AI in their marketing](/blogs/ai-for-small-business-marketing/). Claude Motion sits right in the middle of all three.

Here is why it excites us rather than worries us. Rough storyboards, data explainers and first-draft motion can now be explored in minutes instead of days. That leaves more of our time, and more of our clients' budgets, for the part that actually decides whether a piece of work is remembered: the idea and the finish. We will be putting Claude Motion through its paces as access allows, and we will share what works and what does not. If you want to talk about what this means for your own video and motion plans, [get in touch](/contact-us/) or have a look at [our work](/work/).

## A Few Honest Caveats

Beta means beta. Features, plans and limits can change, so treat this article as a snapshot from launch day and check Anthropic's page for the latest. Do not expect feature-film animation from a prompt. And do not publish anything with numbers in it until a person has checked the numbers.

None of that is a reason to ignore it. It is a reason to try it with your eyes open.

**Source and credits:** the announcement, images and demo video belong to Anthropic. See [Build live dashboards and animate explainers with Claude](https://claude.com/resources/articles/dashboards-and-motion) (8 October 2026). We are not affiliated with Anthropic, and the opinions above are ours.

**Related guides:** [How to Write Effective AI Prompts: A Business Checklist](/blogs/how-to-write-effective-ai-prompts/), [AI Prompt Examples for Business You Can Copy and Adapt](/blogs/ai-prompt-examples-for-business/), [How Google AI Mode Is Changing SEO](/blogs/how-google-ai-mode-is-changing-seo/).

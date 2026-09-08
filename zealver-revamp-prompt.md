# Build Prompt — Zealver Clubs Website Revamp

> Paste this into an AI website builder (Claude, v0, Lovable, etc.) or hand it to a dev team.
> It is written to be self-contained. Attach `zealver-clubs-wireframes-mobile.pdf` alongside it.

---

## 1. Role and goal

You are a senior product designer and front-end engineer. Rebuild the website **zealverclubs.com** from scratch as a modern, accessible, senior-friendly experience. The current site content stays, but the structure, design, and code quality are upgraded to today's best practices.

The single biggest change: the **home page is split into two clear worlds** that a visitor scrolls through top to bottom:

1. **Experience** — everything Zealver Clubs does today: the seated dance fitness, live classes, clubs, videos, events.
2. **Knowledge Hub** — a growing library of health articles for older adults, organised A–Z, in the spirit of babycenter.com (browsable topics and guides).

Design for **mobile first**, then scale up to desktop. Follow the attached wireframe PDF for layout and stacking order.

---

## 2. Who this is for

Women aged 50+ (the brand voice says "For Women 50+"). Assume some users have reduced vision, less steady hands, and low patience for clutter or tiny controls. Every decision favours **clarity and calm over density and cleverness**.

> Note: the wireframe PDF says "60+" and orders the tagline "Fun · Fitness · Friendship". The live brand uses "50+" and "Fun. Friendship. Fitness." Use the live-brand wording unless the client says otherwise.

---

## 3. Tech stack and quality bar

- **Next.js (App Router)** + **TypeScript**.
- **Tailwind CSS** + **shadcn/ui** for the component system (clean, accessible primitives).
- **next/image** for all images, **next/font** for fonts.
- Content modelled so **Topics and Guides are data**, not hard-coded pages. Use a simple content layer (MDX, a `content/` folder, or a headless CMS adapter) so non-technical staff can add articles later. Each Topic and Guide is one content entry with a slug.
- Ship clean, commented, componentised code. No unused dependencies.
- Target **Lighthouse 95+** on Performance, Accessibility, Best Practices, SEO.
- Semantic HTML, correct heading order, proper landmarks (`header`, `nav`, `main`, `footer`).

---

## 4. Accessibility and senior-friendly rules (non-negotiable)

- **WCAG 2.2 AA** minimum.
- Base body font **18px minimum**; large, comfortable line height (1.6+). Generous spacing.
- **Tap targets at least 48x48px** with clear gaps. No cramped rows.
- Text contrast **at least 4.5:1**; important UI at least 3:1. Never rely on colour alone.
- Every image has meaningful `alt` text. Decorative placeholders get empty `alt`.
- Full **keyboard navigation** with a visible focus ring on every interactive element.
- Respect `prefers-reduced-motion`; keep animation subtle and optional.
- Buttons and links read as what they do ("Explore Experience", not "Click here").
- Smooth scrolling, no layout shift, no autoplaying sound.
- Forms (contact, host signup) have visible labels, clear errors, and large fields.
- Support a comfortable "larger text" experience by using `rem` units so browser zoom works cleanly.

---

## 5. Brand and content (real, from the live site)

Use this real content. Fill any gaps with lorem ipsum, clearly placeholder, so the client can drop in final copy.

- **Name:** Zealver Clubs
- **Hero tagline:** "Healthy Ageing, Done Together"
- **Sub-tagline:** "Fun. Friendship. Fitness. For Women 50+"
- **What it is:** Vibrant communities for women 50+ built around **Zealver Seated Dance Fitness** — chair-based, music-led fitness. Sessions run twice weekly, online or in person. No dance or fitness experience needed.
- **The 4M framework:** Movement, Music, Memory, Meaning. Use this as a recurring visual/content motif.
- **Positioning line:** "Scientifically designed social clubs blending Music, Memory, Movement, and Meaning into a simple weekly rhythm."
- **Primary nav:** Home · Our Approach · Activities · Clubs · Become a Host
- **Contact:** WhatsApp +91 91521 58933 · info@zealverclubs.com
- **Social:** Instagram, Facebook, YouTube, LinkedIn
- **Media:** classes and topic videos embed from the Zealver YouTube channel.

**Placeholder policy:** wherever a real photo or video will go, render a labelled **image placeholder** (grey box, diagonal hatch, and a caption such as "Photo — Experience, class in session" or "Video — Fall prevention"). Never ship a blank or a stock image. Lorem ipsum is fine for body copy; keep real copy for headings and buttons.

---

## 6. Information architecture

Single vertical flow on mobile. The whole site sits under a clean top bar (logo + hamburger on mobile, full nav on desktop; sticky on scroll).

```
HOME — "Healthy Ageing, Done Together"
  │
  ├── EXPERIENCE  (block on home + its own page)
  │     ├── In-Person  → club / batch listing → class detail page
  │     └── Online     → class listing → class detail page
  │
  └── KNOWLEDGE HUB  (block on home + its own page)
        ├── Topics (A–Z)  → Topic page: video + write-up
        └── Guides (A–Z)  → Guide page: multi-topic walkthrough
```

**Topic vs Guide:** a **Topic** is one subject on its own (e.g. "Fall prevention"). A **Guide** is an actionable walkthrough toward a goal (e.g. "Lower your blood sugar") that links several Topics. Guides link to multiple Topics; a Topic can appear in multiple Guides. Model this cross-linking in the content layer.

---

## 7. Page specs (follow the wireframe PDF exactly)

### 7.1 Home (`/`) — wireframe p.01
Order, top to bottom:
1. **Top bar** — logo left, hamburger right on mobile (full nav on desktop), sticky.
2. **Hero** — "Healthy Ageing, Done Together" + "Fun. Friendship. Fitness. For Women 50+", centred.
3. **Experience card** — full-width: image placeholder ("Photo — Experience, class in session"), short intro, primary button **"Explore Experience"** → `/experience`.
4. **Knowledge Hub card** — full-width: image placeholder ("Photo — Knowledge Hub, trainer explaining"), short intro, primary button **"Explore Knowledge Hub"** → `/knowledge-hub`.
5. **"From the Knowledge Hub"** — a horizontal **swipe rail**, single row of Topic/Guide cards (not a 4-column grid).
6. **"Follow our journey"** — horizontal swipe rail of social/media cards (Instagram, Facebook, YouTube, LinkedIn).
7. **Footer** — nav links, contact, social icons.

> On desktop the Experience/Knowledge split may sit side by side; on mobile it is strictly top then bottom. Rails stay horizontal-swipe on all sizes for consistency.

### 7.2 Experience (`/experience`) — wireframe p.02
1. Breadcrumb: Home / Experience. Heading **"Choose your experience"**.
2. **Two big stacked chooser cards** (the only decision on the screen): **In-Person** and **Online**, each a large tap target with image placeholder + button ("Choose In-Person" / "Choose Online").
3. **"Clubs & Events"** — vertical stacked list of Club/Batch cards, Event cards, Instructor/Trainer cards.
4. Each card opens a **class detail page**: schedule, pricing, trainer, and a **"Related reading"** block linking 2–3 Knowledge Hub topics.
5. Footer.

### 7.3 Knowledge Hub (`/knowledge-hub`) — wireframe p.03
1. Breadcrumb + heading **"Knowledge Hub"**. **Search bar** ("Search topics & guides…").
2. **Topics** section: an **A–Z strip that scrolls horizontally on its own single row**; below it a normal vertical list of topic links, paginated with "Show more Topics".
3. **Guides** section, stacked directly below Topics (not beside it): same A–Z pattern, then Guide cards. Guides keep equal visual weight via card size, not a second column.
4. Footer.

### 7.4 Topic page template (`/knowledge-hub/topics/[slug]`) — wireframe p.04
Stacked, single column, never side by side:
1. Title + category chip (e.g. "Fall prevention" / "Balance & safety").
2. **Video** — full-width 16:9, first thing after the title (embedded YouTube from Zealver channel). Placeholder if none.
3. **Summary** — short intro directly under the video.
4. **Full write-up** — the crawlable article body.
5. **Related Topics** — stacked chips/list, full width.
6. **"Appears in these guides"** — links to the Guides this topic belongs to.
7. Footer.

### 7.5 Guide page template (`/knowledge-hub/guides/[slug]`) — wireframe p.05
1. Title + meta chip (e.g. "7-step guide · reviewed by trainer") + intro photo above the text.
2. Short intro.
3. **Step-by-step sections** — numbered; each step number and its content sit inline as one row, each linking to a related Topic ("Links to: Nutrition basics").
4. **"All topics in this guide"** — stacked topic index (not a 2-column block).
5. **"Other guides you may like"** — related guide card(s).
6. Footer.

---

## 8. Design language

- Clean and warm, in the shadcn/ui spirit: lots of whitespace, soft rounded cards, gentle shadows, one clear accent colour, restrained palette.
- Large, friendly headings; comfortable body text; obvious primary buttons.
- Consistent card component reused across Experience listings, Topic cards, Guide cards, and rails.
- One reusable **ImagePlaceholder** component (labelled grey hatch box) and one **MediaEmbed** component (YouTube).
- Reusable **AZStrip** component (horizontal-scroll letter index) shared by Topics and Guides.
- Mobile breakpoints first; enhance layout at `md` and `lg`. Never introduce horizontal page scroll (only the intended rails/strips scroll sideways).
- **No em dashes in UI copy.** Keep language simple and short.

---

## 9. Deliverables

1. Full Next.js + Tailwind + shadcn/ui project, mobile-first, matching the wireframe stacking order.
2. Home, Experience, Knowledge Hub pages plus Topic and Guide **templates** driven by a content layer, seeded with 4–6 sample Topics and 2–3 sample Guides (real titles from the wireframe: Fall prevention, Balance exercises for seniors, Dementia-friendly movement, Lower your blood sugar guide, Anti-inflammatory diet guide).
3. Shared components: TopBar, Footer, Card, Rail, AZStrip, ImagePlaceholder, MediaEmbed, SearchBar.
4. Accessibility pass documented (contrast, focus, keyboard, alt text, reduced motion).
5. A short README: content model, how to add a Topic or Guide, where to swap placeholders for real media.

---

## 10. Acceptance checklist

- [ ] Home scrolls Experience → Knowledge Hub → rails → footer, exactly as the wireframe.
- [ ] Every tap target ≥ 48px; body text ≥ 18px; contrast ≥ 4.5:1.
- [ ] Full keyboard navigation with visible focus everywhere.
- [ ] Topics and Guides are data-driven and cross-linked.
- [ ] All media are labelled placeholders or real embeds, never blank or stock.
- [ ] No horizontal page scroll except the intended A–Z strips and rails.
- [ ] Lighthouse Accessibility and Best Practices ≥ 95.

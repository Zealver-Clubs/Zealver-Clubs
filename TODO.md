# Zealver Clubs — Website TODO

Source: **"Zealver Clubs Website Revamp Brainstorming"** (Sep 8, brainstorming call).
Focus areas: **accessibility**, **AI discoverability**, and the supporting content /
lead / editability work needed to launch.

Legend: `[x]` done in current build · `[ ]` to do · **(P1)** launch-critical ·
**(P2)** soon after · **(P3)** later / future.

---

## 1. Accessibility (senior-friendly)

The audience is women 60+ and the Indian diaspora abroad, actively *learning* from the
site. Aim: better execution than typical government accessibility toolbars.

- [x] Mobile-first layout, large tap targets (≥48px), readable body text, visible keyboard focus, `prefers-reduced-motion`, alt text on images
- [x] **(P1)** Text-size control (A / A+ / A++) that scales the whole page, remembered per visitor — in the top-bar accessibility menu
- [x] **(P1)** "Listen" / read-aloud on every article (browser text-to-speech, play/pause/stop) — will pair with the audio repository in §3
- [x] **(P1)** Light / Dark / High-contrast (black & orange) themes, remembered, applied before paint (no flash)
- [ ] **(P2)** Screen-reader audit: landmarks, heading order, ARIA on the carousels / video sliders, skip links (menu + Listen ship with ARIA; full sweep pending)
- [ ] **(P2)** Keyboard-only pass across every slider and menu
- [ ] Dropped by decision: captions / transcripts for embedded videos
- [ ] **(P3)** Accessibility statement page

## 2. AI discoverability (LLM + agent readiness)

People increasingly find Zealver through ChatGPT / Gemini / Claude, not only Google.
Goal: raise the "agent score" so LLMs describe and recommend Zealver accurately.

- [x] **(P1)** `/llms.txt` — who Zealver is, key facts, and links to the key pages
- [x] **(P1)** `/llms-full.txt` — full crawlable content so agents can answer without scraping the site
- [x] **(P1)** Structured data (schema.org): `Organization`/`LocalBusiness` (site-wide), `WebSite`, `Article` (+`VideoObject` when a topic has a video), `HowTo` on guides
- [x] **(P1)** Every Knowledge Hub article is real, semantic, crawlable HTML (write-up in the page, not only media)
- [ ] **(P2)** SEO-friendly titles + subheadings generated from each YouTube script (per-page titles/descriptions done; refine from scripts)
- [x] **(P2)** `robots.txt` + XML `sitemap.xml` (auto-generated); still to do: verify site in Google Search Console
- [x] **(P2)** Per-page metadata (title, description, Open Graph, canonical, keywords)
- [ ] **(P2)** Local pages/terms people actually search ("seniors activity Andheri", "chair fitness South Bombay")
- [ ] **(P3)** Track how Zealver appears in ChatGPT / Gemini / Claude answers and iterate on `llms*.txt`

## 3. Knowledge Hub ("BabyCenter for healthy ageing")

Activity-oriented, **not** medical. One place per subject with read / listen / watch.

- [x] Topic vs Guide model in place (Topic = one subject, Guide = longer walkthrough e.g. "Lower your blood sugar")
- [x] A–Z index + search
- [ ] **(P1)** Seed 20–30 real topics, then keep adding continuously
- [ ] **(P1)** Each page offers three formats on one URL: **Watch** (YouTube) · **Read** (article) · **Listen** (audio)
- [ ] **(P2)** Central audio/podcast repository (auto-generated from the video/Zoom recordings)
- [ ] **(P2)** End-of-article "next topics / related guides" to deepen engagement

## 4. Experience & events (needs dynamism)

- [x] Online + in-person classes represented
- [ ] **(P1)** Events / workshops section that can be added and removed over time (Garba workshops, corporate 5-workshop packages, IPL/World-Cup meetups)
- [ ] **(P1)** Prompt-based editing workflow so Namrata can add a topic / article / event / image / video from her phone in plain language — no manual deployment (GitHub → Vercel)

## 5. Lead capture (WhatsApp-first, no email newsletter)

- [ ] **(P1)** Two distinct calls to action: **"Join the Club"** (membership) vs **"Keep me updated"** (Knowledge Hub / WhatsApp broadcast) — they must trigger different lists
- [ ] **(P1)** WhatsApp opt-in via `wa.me` with a first-message greeting; rotate group links as each fills (1000/group, up to ~100 groups in a community)
- [ ] **(P2)** "Keep me updated" CTA at the end of every Knowledge Hub page
- [ ] Skipped by decision: email newsletter (audience prefers WhatsApp)

## 6. Content, media & social proof

- [ ] **(P1)** Replace placeholder copy with real write-ups (from YouTube scripts)
- [ ] **(P1)** Use the curated photo set Namrata provides (~20–50), keep pages light and fast
- [x] Instagram feed embedded (real @zealverclubs reels)
- [ ] **(P2)** Encourage and display Google reviews (feedback is strong but under-collected)
- [x] Positioning fixed to **60+** everywhere (logo and copy now match)

## 7. Performance & hosting

- [ ] **(P1)** Keep it fast and light (good PageSpeed): optimize images, self-host/loop short video, lazy-load embeds
- [ ] **(P1)** Deploy on GitHub + Vercel with the custom domain; static in nature, so no AWS needed for the marketing site
- [ ] **(P3)** Optional later migration alongside the rest of the Ziva stack

## 8. Future (post-launch)

- [ ] **(P3)** Members-only content/app (Namrata's ~15–20 min lectures) as a retention layer, separate from the public discovery site
- [ ] **(P3)** "Seated sport fitness" product for men 60+ (cricket / racket-sport movements) — separate product, shares many movements

---

### Notes / open decisions
- Marketing site is public and discovery-focused; the members app is a separate service.
- Some Knowledge Hub content stays public (for discovery); richer content gates behind membership later.
- Design intent: simple, senior-friendly, visual + content-rich but lightweight; black & orange for maximum contrast.

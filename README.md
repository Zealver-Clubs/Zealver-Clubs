# Zealver Clubs — Website

A revamped, mobile-first, senior-friendly website for Zealver Clubs, built with
**Next.js (App Router) + TypeScript + Tailwind CSS v4**. The home page is split
into two worlds you scroll through: **Experience** and the **Knowledge Hub**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender)
```

## What is where

```
src/
  app/
    layout.tsx                         # fonts, TopBar, Footer, skip link
    globals.css                        # design tokens + senior-friendly base styles
    page.tsx                           # HOME: hero, Experience + Knowledge Hub, rails
    experience/
      page.tsx                         # In-Person / Online chooser + listings
      [slug]/page.tsx                  # class detail (schedule, price, related reading)
    knowledge-hub/
      page.tsx                         # search + Topics + Guides
      topics/[slug]/page.tsx           # Topic template: video, summary, write-up
      guides/[slug]/page.tsx           # Guide template: numbered steps
  components/                          # TopBar, Footer, Logo, cards, Rail, AZStrip, etc.
  content/                             # the content layer (edit these to add content)
    site.ts        topics.ts    guides.ts    experience.ts
```

## Editing content (no code changes to layout needed)

- **Add a Topic** → add an object to `src/content/topics.ts`. A Topic is one
  subject. Set `youtubeId` to embed a real Zealver video; leave it `null` for a
  video placeholder. Cross-link via `relatedTopics` and `guides` (slugs).
- **Add a Guide** → add an object to `src/content/guides.ts`. A Guide is a
  multi-step walkthrough that links several Topics.
- **Add a class / club / event** → add to `src/content/experience.ts`. `mode`
  (`in-person` | `online`) controls which chooser it appears under.
- **Contact, social, nav** → `src/content/site.ts`.

New Topics and Guides appear automatically in the A–Z index, search, and cross-links.

## Media

Images render through `<MediaImage src label />`: when `src` is set it shows a
real photo, otherwise a labelled placeholder in the same box. Videos use
`<MediaEmbed youtubeId />` (embedded from the Zealver YouTube channel).

**Real assets already wired in (all from the client's own channels):**

- Logo: `public/logo.png` — the real Zealver Clubs wordmark.
- Photos in `public/images/` from zealverclubs.com and the club's shared
  Google Photos album:
  - `home-experience.jpg` — women mid seated-dance (home Part 1 hero, from album)
  - `class-seated-dance.jpg` — the seated dance class (Online, guides)
  - `instructor-class.jpg` — an instructor leading a class (home Part 2, instructor)
  - `community-celebration.jpg` — group celebration (In-Person, clubs, events)
- Videos: the home hero is a self-hosted, muted, looping background video
  (`public/videos/hero.mp4`, no player chrome). Testimonials and "The Zealver
  story" use real Zealver YouTube embeds, and the Fall prevention, Balance
  exercises and Dementia-friendly movement topics each embed a real video.
- The "Follow our journey" section is a real Instagram feed: official
  Instagram embeds of public @zealverclubs reels (via embed.js, no API key).
  Update the reel codes in `src/components/instagram-feed.tsx` to refresh it,
  or swap in a managed widget (Behold/SnapWidget) if you want it fully automatic.

**Web / Creative Commons images** (used only for generic health topics, per
request): `topic-nutrition.jpg` and `topic-anti-inflammatory.jpg` are CC-BY 2.0.
Their required credit shows on the topic page (`imageCredit`) — keep it visible.

**Not available programmatically:** Instagram post images/videos. The public
Instagram page only exposes a 100×100 profile thumbnail; posts sit behind login
and anti-scraping. The social rail therefore reuses the club's own photos and
links out to the real Instagram / Facebook / YouTube / LinkedIn profiles. To use
real IG posts, export them manually or wire the Instagram Graph API with a token.

To add more real media: drop files in `public/images/` and set the `image`
field on the relevant Topic / Guide / Experience entry, or a Topic's `youtubeId`.

## Design system

- **Palette** (from the live site): primary orange `#F5760A`, indigo `#2E3194`,
  slate text, warm cream backgrounds. Tokens live in `globals.css` under
  `@theme` — change them there and the whole site follows.
- **Fonts**: Nunito (headings) + Atkinson Hyperlegible (body — designed for
  low-vision readability), loaded via `next/font`.

## Accessibility (senior-friendly)

- Base text 18px, generous line height, large tap targets (≥ 48px).
- Strong visible keyboard focus, skip-to-content link, semantic landmarks.
- Respects `prefers-reduced-motion`; labelled images; A–Z uses real buttons.
- WCAG 2.2 AA target; no horizontal page scroll except the intended rails/strips.

## Notes

- Copy uses **"For Women 60+"** throughout, matching the logo art. Change in
  `src/content/site.ts` (`subTagline`) if the audience shifts.
- Body copy is lorem ipsum placeholder; headings, labels and real details are live.

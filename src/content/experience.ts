/**
 * Experience content: clubs, batches, events and instructors.
 * `mode` filters against the In-Person / Online chooser.
 * Each item opens a class detail page by slug.
 */

export type ExperienceMode = "in-person" | "online";
export type ExperienceKind = "club" | "event" | "instructor";

export type ExperienceItem = {
  slug: string;
  kind: ExperienceKind;
  mode: ExperienceMode;
  title: string;
  meta: string;
  blurb: string;
  image?: string; // real club photo; falls back to a placeholder if absent
  schedule: string;
  price: string;
  trainer: string;
  relatedTopics: string[]; // Knowledge Hub topic slugs
};

export const experienceItems: ExperienceItem[] = [
  {
    slug: "seated-dance-morning-batch",
    kind: "club",
    mode: "online",
    title: "Seated Dance Fitness · Morning batch",
    meta: "Online · Zoom · Twice weekly",
    blurb:
      "Chair-based, music-led fitness to start your day with movement, music and a friendly community. No experience needed.",
    image: "/images/class-seated-dance.jpg",
    schedule: "Tuesdays & Thursdays, 9:00–9:45 AM IST",
    price: "Free trial, then membership",
    trainer: "Zealver certified instructor",
    relatedTopics: ["balance-exercises", "movement-and-blood-sugar", "dementia-friendly-movement"],
  },
  {
    slug: "seated-dance-evening-batch",
    kind: "club",
    mode: "online",
    title: "Seated Dance Fitness · Evening batch",
    meta: "Online · Zoom · Twice weekly",
    blurb:
      "The same joyful seated dance session, timed for the evening. Move to music, wind down and connect.",
    image: "/images/home-experience.jpg",
    schedule: "Mondays & Wednesdays, 6:00–6:45 PM IST",
    price: "Free trial, then membership",
    trainer: "Zealver certified instructor",
    relatedTopics: ["sleep-and-recovery", "balance-exercises"],
  },
  {
    slug: "neighbourhood-club-meetup",
    kind: "club",
    mode: "in-person",
    title: "Neighbourhood Club meet-up",
    meta: "In-person · Weekly",
    blurb:
      "Meet your local Zealver community in person for seated dance, tea and friendship close to home.",
    image: "/images/community-celebration.jpg",
    schedule: "Saturdays, 10:00–11:00 AM",
    price: "Free trial, then membership",
    trainer: "Local club host",
    relatedTopics: ["fall-prevention", "balance-exercises"],
  },
  {
    slug: "festival-celebration-event",
    kind: "event",
    mode: "in-person",
    title: "Festival celebration event",
    meta: "In-person · Special event",
    blurb:
      "A themed celebration with music, movement and community. Open to members and their friends.",
    image: "/images/home-experience.jpg",
    schedule: "Next date announced monthly",
    price: "Included with membership",
    trainer: "Zealver community team",
    relatedTopics: ["dementia-friendly-movement"],
  },
  {
    slug: "meet-your-instructor",
    kind: "instructor",
    mode: "online",
    title: "Meet your instructor",
    meta: "Instructor spotlight",
    blurb:
      "Get to know the certified trainers who lead every session with warmth, patience and energy.",
    image: "/images/instructor-class.jpg",
    schedule: "Available in every session",
    price: "-",
    trainer: "Zealver certified instructors",
    relatedTopics: ["balance-exercises"],
  },
];

export const experienceBySlug = new Map(
  experienceItems.map((e) => [e.slug, e]),
);

export function getExperienceItem(slug: string) {
  return experienceBySlug.get(slug) ?? null;
}

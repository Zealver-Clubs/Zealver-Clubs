/**
 * Experience content: clubs, batches, events and instructors.
 * The Experience chooser offers three categories: in-person classes, online
 * classes, and events. An item's category is its `mode`, unless its `kind` is
 * "event", which puts it under events wherever it is held.
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
  /**
   * What is on, session by session. Written out month by month, so it needs
   * replacing when the month turns rather than quietly going stale.
   */
  timetable?: {
    heading: string;
    note?: string;
    sessions: { date: string; talk: string; dance: string }[];
  };
  /** Where it happens. Absent for online sessions. */
  location?: {
    name: string;
    address: string;
    /** Opens the Maps app on a phone, rather than a search results page. */
    mapUrl: string;
  };
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
    slug: "seated-dance-in-person-class",
    kind: "club",
    mode: "in-person",
    title: "Seated Dance Fitness · In-person class",
    meta: "In-person · Andheri West · Twice weekly",
    blurb:
      "The same chair-based, music-led session, in a room with other people. Tuesdays and Thursdays at the Yoga Room in Andheri West.",
    image: "/images/community-celebration.jpg",
    schedule: "Tuesdays & Thursdays, 11:00 AM – 1:00 PM",
    price: "Free trial. WhatsApp us for fees.",
    trainer: "Zealver certified instructor",
    timetable: {
      heading: "September 2026",
      note: "Each session is a 15-minute health talk followed by 30 minutes of dance fitness.",
      sessions: [
        { date: "Tuesday 1 September", talk: "Stress management", dance: "Red theme" },
        { date: "Thursday 3 September", talk: "Sleep", dance: "Krishna, for Janmashtami" },
        { date: "Tuesday 8 September", talk: "Sunlight and vitamin D", dance: "Blue theme" },
        { date: "Thursday 10 September", talk: "Strength training", dance: "Green theme" },
        { date: "Tuesday 15 September", talk: "The importance of relationships", dance: "Ganesh Chaturthi special" },
        { date: "Thursday 17 September", talk: "Smart eating", dance: "Madhuri Dixit" },
        { date: "Tuesday 22 September", talk: "Insulin resistance", dance: "Govinda" },
        { date: "Thursday 24 September", talk: "Karisma Kapoor", dance: "Orange theme" },
        { date: "Tuesday 29 September", talk: "Madh Island picnic", dance: "Aqua theme" },
      ],
    },
    location: {
      name: "Yoga Room, The Classique Club, Andheri West",
      address:
        "Inside The Classique Club, behind Infiniti Mall, Phase D, Shastri Nagar, Andheri West, Mumbai",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=The%20Classique%20Club%2C%20Shastri%20Nagar%2C%20Andheri%20West%2C%20Mumbai",
    },
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

/** The three things the clubs run. Each has its own page under /experience. */
export type ExperienceCategory = "in-person" | "online" | "events";

/**
 * An event is an event wherever it is held, so `kind` is checked before
 * `mode`. Instructor spotlights are neither a class nor an event and belong
 * to no category.
 */
export function experienceCategoryOf(
  item: ExperienceItem,
): ExperienceCategory | null {
  if (item.kind === "instructor") return null;
  return item.kind === "event" ? "events" : item.mode;
}

export type ExperienceCategoryInfo = {
  category: ExperienceCategory;
  /** URL segment under /experience. */
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  image: string;
};

export const experienceCategories: ExperienceCategoryInfo[] = [
  {
    category: "in-person",
    slug: "in-person-classes",
    title: "Weekly classes in person",
    blurb:
      "Meet face to face for seated dance, tea and friendship afterwards.",
    intro:
      "Chair-based, music-led sessions in a room with other people, twice a week in Andheri West. No experience needed, and the first one is free.",
    image: "/images/community-celebration.jpg",
  },
  {
    category: "online",
    slug: "online-classes",
    title: "Weekly classes online",
    blurb:
      "Join live sessions from home over Zoom, twice a week, with a friendly community.",
    intro:
      "The same sessions, live over Zoom, so you can join from your own chair at home. Twice a week, morning or evening.",
    image: "/images/class-seated-dance.jpg",
  },
  {
    category: "events",
    slug: "events",
    title: "Events",
    blurb:
      "Festival celebrations and get-togethers, open to members and their friends.",
    intro:
      "Celebrations through the year, with music, movement and company. Open to members and the people they bring along.",
    image: "/images/home-experience.jpg",
  },
];

export const experienceCategoryBySlug = new Map(
  experienceCategories.map((c) => [c.slug, c]),
);

/** The items in one category, in the order they are listed above. */
export function experienceItemsIn(
  category: ExperienceCategory,
): ExperienceItem[] {
  return experienceItems.filter((i) => experienceCategoryOf(i) === category);
}

export function getExperienceItem(slug: string) {
  return experienceBySlug.get(slug) ?? null;
}

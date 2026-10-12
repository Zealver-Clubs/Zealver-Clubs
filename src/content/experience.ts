/**
 * Experience content: clubs, batches, events and instructors.
 * The Experience chooser offers in-person classes and online classes. An
 * item's category is its `mode`.
 * Each item opens a class detail page by slug.
 */

import type { AspectRatio } from "@/lib/aspect-ratio";
import type { FaqItem } from "@/components/faq";

export type ExperienceMode = "in-person" | "online";
export type ExperienceKind = "club";

export type ExperienceItem = {
  slug: string;
  kind: ExperienceKind;
  mode: ExperienceMode;
  title: string;
  meta: string;
  blurb: string;
  image?: string; // real club photo; falls back to a placeholder if absent
  imageAlt?: string; // describe the photo itself; defaults to the title
  imageRatio?: AspectRatio; // hero aspect; defaults to 16/9
  /**
   * More photographs of this club. Each keeps its own proportions rather
   * than being cropped to a common tile, because these are group photographs
   * and a crop takes somebody out of the picture.
   */
  gallery?: { src: string; alt: string; ratio: AspectRatio }[];
  schedule: string;
  price: string;
  trainer: string;
  /**
   * The WhatsApp enquiry for this item. Its message names the thing the
   * reader was looking at, so the reply does not have to start by asking
   * which class they meant.
   */
  cta?: { label: string; message: string };
  /** Questions answered on this item's own page. */
  faqs?: FaqItem[];
  /**
   * What is on, session by session. Written out month by month, so it needs
   * replacing when the month turns rather than quietly going stale.
   */
  timetables?: {
    heading: string;
    subheading?: string;
    note?: string;
    sessions: {
      date: string;
      talk?: string;
      dance?: string;
      activity?: string;
      /** A day that is not a normal session, described across the row. */
      special?: string;
    }[];
  }[];
  /**
   * A branch that is announced but not running yet. It appears in the
   * listing so people can see it is coming, and has no detail page to open.
   */
  comingSoon?: boolean;
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
    slug: "india-online-batch",
    kind: "club",
    mode: "online",
    title: "India online batch",
    meta: "Online \u00b7 Zoom \u00b7 Twice weekly",
    blurb:
      "Chair-based, music-led fitness over Zoom, twice a week. A health talk, a workout and time for questions, without leaving home.",
    image: "/images/home-experience.jpg",
    schedule: "Tuesdays & Thursdays, 4:00 \u2013 5:00 PM IST",
    price: "\u20b92,499 per month.",
    trainer: "Zealver certified instructor",
    cta: {
      label: "Ask about the online batch",
      message: "Hi, tell me more about the India online batch.",
    },
    faqs: [
      {
        question: "What happens in the hour?",
        answer: ["The class runs to the same shape every time:"],
        points: [
          "10 minutes: a health talk from Dr Namrata, on a new topic each class.",
          "40 minutes: the chair dance workout, guided live, with corrections to posture, movement or technique as they are needed.",
          "10 minutes: questions and answers.",
        ],
      },
      {
        question: "What does it cost?",
        answer: ["\u20b92,499 per month."],
      },
      {
        question: "Is it cheaper to commit for longer?",
        answer: ["Yes. Taking a membership brings the monthly fee down:"],
        points: [
          "Monthly membership: 10% off",
          "Three-month membership: 20% off",
        ],
      },
      {
        question: "Can I try it before I join?",
        answer: ["Yes. Every participant can take one free trial class."],
      },
      {
        question: "How does the Zoom link work?",
        answer: [
          "The link is sent twenty minutes before the class. Please keep it to yourself rather than passing it on, and join on time.",
          "Everyone is muted during the session so the class runs smoothly. There is time for questions at the end.",
        ],
      },
    ],
    relatedTopics: ["sleep-and-recovery", "balance-exercises"],
  },
  {
    slug: "andheri-west",
    kind: "club",
    mode: "in-person",
    title: "Andheri West",
    meta: "In-person · Twice weekly",
    blurb:
      "Tuesdays and Thursdays at the Yoga Room, inside The Classique Club.",
    image: "/images/community-celebration.jpg",
    imageAlt:
      "Members of the Andheri West club gathered together holding their Zealver Clubs certificates, with marigold decorations behind them.",
    gallery: [
      {
        src: "/images/andheri-class-in-session.jpg",
        alt: "Members of the Andheri West club in the Yoga Room at The Classique Club, some seated on chairs and some standing behind, smiling at the camera after a session.",
        ratio: "4/3",
      },
      {
        src: "/images/andheri-celebration.jpg",
        alt: "Members of the Andheri West club standing together in the Yoga Room wearing flower garlands and holding paper fans, at a themed session.",
        ratio: "1812/2000",
      },
      {
        src: "/images/andheri-lunch-outing.jpg",
        alt: "Members of the Andheri West club around a long table at a restaurant, dressed in yellow, on a group lunch outing.",
        ratio: "1165/784",
      },
    ],
    schedule: "Tuesdays & Thursdays, 11:00 AM – 1:00 PM",
    price: "\u20b94000 per month.",
    trainer: "Zealver certified instructor",
    cta: {
      label: "Ask about the Andheri class",
      message: "Hi, tell me more about the Andheri classes.",
    },
    faqs: [
      {
        question: "What does it cost?",
        answer: ["\u20b94000 per month."],
      },
      {
        question: "Is it cheaper to commit for longer?",
        answer: ["Yes. Taking a membership brings the monthly fee down:"],
        points: [
          "Monthly membership: 10% off",
          "Three-month membership: 20% off",
        ],
      },
      {
        question: "Can I try it before I join?",
        answer: [
          "Yes. Every participant can take one free trial class.",
        ],
      },
    ],
    timetables: [
      {
        heading: "October 2026",
        subheading: "Mental Health Awareness Month",
        note: "A 15-minute health talk, 30 minutes of dance fitness, and an activity to finish.",
        sessions: [
          { date: "Tuesday 13 October", talk: "Mindfulness", dance: "Garba and dandiya", activity: "Jewellery making" },
          { date: "Thursday 15 October", talk: "The importance of friendships", dance: "Garba and dandiya", activity: "Singing" },
          { date: "Tuesday 20 October", talk: "Laughter and joy", dance: "Garba and dandiya, for Dussehra", activity: "Games and fun activities" },
          { date: "Thursday 22 October", talk: "Purpose and meaning in life", dance: "70s retro", activity: "Mandala art" },
          { date: "Tuesday 27 October", talk: "Coping with loneliness", dance: "80s retro", activity: "Canvas painting" },
          { date: "Thursday 29 October", talk: "Self-care and daily happiness habits", dance: "90s retro", activity: "Birthday lunch celebration" },
        ],
      },
    ],
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
    slug: "south-mumbai",
    kind: "club",
    mode: "in-person",
    title: "South Mumbai",
    meta: "In-person \u00b7 Tardeo \u00b7 Event series",
    blurb:
      "Seated dance to retro Bollywood, in Tardeo. Seated Garba, Kishore Kumar and the hits of every decade since.",
    image: "/images/instructor-class.jpg",
    imageAlt:
      "A Zealver certified instructor leading a seated dance session for a group of women.",
    schedule: "5:00 \u2013 6:00 PM on event days",
    price: "\u20b9600 per event, including taxes. One free trial per person.",
    trainer: "Zealver certified instructor",
    location: {
      name: "Assembly Hall, Sundatta High School, Tardeo",
      address: "Sundatta High School, Tardeo, South Mumbai",
      mapUrl: "https://maps.app.goo.gl/bhjnQYKkRAMPAfrLA",
    },
    cta: {
      label: "Ask about South Mumbai",
      message: "Hi, tell me more about the South Mumbai events.",
    },
    timetables: [
      {
        heading: "October 2026",
        subheading: "Seated Garba",
        note: "Seated Garba and Dandiya-inspired movement, to music you already know.",
        sessions: [
          { date: "Monday 12 October", special: "Seated Garba." },
          { date: "Wednesday 14 October", special: "Seated Garba." },
          { date: "Monday 19 October", special: "Seated Garba." },
        ],
      },
      {
        heading: "November 2026",
        subheading: "Kishore Kumar and retro classics",
        sessions: [
          { date: "Monday 16 November", special: "Kishore Kumar hits." },
          { date: "Wednesday 18 November", special: "1960s Bollywood hits." },
          { date: "Monday 23 November", special: "1970s Bollywood hits." },
        ],
      },
      {
        heading: "December 2026",
        subheading: "Bollywood through the decades",
        sessions: [
          { date: "Wednesday 9 December", special: "1980s Bollywood hits." },
          { date: "Monday 14 December", special: "1990s Bollywood hits." },
          { date: "Wednesday 16 December", special: "2000s Bollywood hits." },
        ],
      },
    ],
    faqs: [
      {
        question: "Who are these events for?",
        answer: [
          "Women 60 and over. Everything is done sitting down, to music most people in the room grew up with, so no experience and no particular fitness is needed.",
        ],
      },
      {
        question: "What does it cost?",
        answer: [
          "\u20b9600 per event, including taxes.",
          "Every participant can take one free trial class.",
        ],
      },
      {
        question: "Is it cheaper to book several?",
        answer: ["Yes. Booking more than one event brings the price down:"],
        points: [
          "2 events: 5% off",
          "4 events: 10% off",
          "6 events: 15% off",
          "8 events: 20% off",
        ],
      },
      {
        question: "Will there be regular weekly classes?",
        answer: [
          "Yes, from January 2027, on Mondays and Wednesdays from 5:00 to 6:00 PM at the same venue. Message us and we will tell you when booking opens.",
        ],
      },
    ],
    relatedTopics: [
      "garba-and-dandiya-for-seniors",
      "music-memory-and-mood",
      "chair-dance-fitness-benefits",
    ],
  },
];

export const experienceBySlug = new Map(
  experienceItems.map((e) => [e.slug, e]),
);

/** What the clubs run. Each has its own page under /experience. */
export type ExperienceCategory = "in-person" | "online";

export function experienceCategoryOf(
  item: ExperienceItem,
): ExperienceCategory {
  return item.mode;
}

export type ExperienceCategoryInfo = {
  category: ExperienceCategory;
  /** URL segment under /experience. */
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  image: string;
  /** The WhatsApp enquiry shown at the foot of the category page. */
  cta: { heading: string; blurb: string; label: string; message: string };
  /** Questions answered on the category page. */
  faqs?: FaqItem[];
};

export const experienceCategories: ExperienceCategoryInfo[] = [
  {
    category: "in-person",
    slug: "in-person-classes",
    title: "Weekly classes in person",
    blurb:
      "Join live sessions in person, twice a week, with a friendly community.",
    intro:
      "Chair-based, music-led sessions in a room with other people. Choose your branch below. No experience needed, and the first session is free.",
    image: "/images/community-celebration.jpg",
    cta: {
      heading: "Come to a class in Andheri",
      blurb:
        "Your first session is free. Send us a message and we will tell you what to expect, what to wear and where to come.",
      label: "Ask about the Andheri class",
      message: "Hi, tell me more about the Andheri classes.",
    },
  },
  {
    category: "online",
    slug: "online-classes",
    title: "Weekly classes online",
    blurb:
      "Join live sessions from home over Zoom, twice a week, with a friendly community.",
    intro:
      "The same sessions, live over Zoom, so you can join from your own chair at home. Tuesdays and Thursdays, late afternoon.",
    image: "/images/class-seated-dance.jpg",
    cta: {
      heading: "Try an online class",
      blurb:
        "Your first session is free. Send us a message and we will share the joining link and the timings.",
      label: "Ask about online classes",
      message: "Hi, tell me more about the online classes.",
    },
    faqs: [
      {
        question: "What do I need to have ready before the class?",
        answer: ["Very little, and nothing you have to buy."],
        points: [
          "A sturdy chair without wheels. If you use a wheelchair, lock the brakes before the class begins.",
          "Comfortable clothes and closed-toe shoes.",
          "A water bottle within reach.",
          "A stable internet connection.",
        ],
      },
      {
        question: "How do I join, and when?",
        answer: [
          "The Zoom link is shared on WhatsApp twenty minutes before the class. Join five to ten minutes early so you are settled before we begin.",
          "When you join, please rename yourself with your full name and your city, for example Meena Sharma \u2013 Jaipur.",
        ],
      },
      {
        question: "Do I have to keep my camera on?",
        answer: [
          "Yes, please keep your video on for the whole class. It is how the instructor can see you and check that you are moving comfortably.",
          "Keep your microphone muted unless the instructor asks you to unmute.",
        ],
      },
      {
        question: "How should I set up my device and camera?",
        answer: [
          "The aim is simply that the instructor can see all of you while you are sitting down.",
        ],
        points: [
          "Use a phone or tablet on a stand, or put a laptop on a table.",
          "Place the camera a little away from your chair, so your whole body is visible while you are seated.",
          "Position it directly in front of you, not off to one side.",
          "Keep the device at about eye level.",
          "Make sure the room is well lit.",
          "Sit so that your arms and legs can move freely.",
        ],
      },
      {
        question: "What is expected of me during the class?",
        answer: ["Nothing beyond moving at a pace that suits you."],
        points: [
          "Exercise at your own pace. This is not a competition.",
          "Stop immediately if you feel pain, dizziness or discomfort.",
          "Follow the instructor's directions.",
          "Enjoy it. Moving together is most of the point.",
        ],
      },
      {
        question: "What if something goes wrong, or I need help?",
        answer: [
          "Call or message us on WhatsApp and we will help you get set up, before or during the class.",
        ],
      },
    ],
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

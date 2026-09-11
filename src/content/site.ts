/** Global site details, pulled from the live zealverclubs.com. */

export const site = {
  name: "Zealver Clubs",
  legalName: "Zealver Living Pvt. Ltd.",
  url: "https://zealver-clubs.vercel.app",
  legal: {
    privacy: "https://www.zealver.life/privacy-policy/",
    terms: "https://www.zealver.life/terms-conditions/",
  },
  tagline: "Healthy Ageing, Done Together",
  subTagline: "Fun. Friendship. Fitness. For Women 60+",
  positioning:
    "Scientifically designed social clubs blending Music, Memory, Movement, and Meaning into a simple weekly rhythm.",
  description:
    "Zealver Clubs runs joyful, chair-based Zealver Seated Dance Fitness for women 60+, online and in person, plus a growing Knowledge Hub of activity-first guidance for healthy ageing.",
  // One-line "about" for the footer and metadata.
  oneLiner:
    "Zealver Clubs is a community for women 60+ that blends chair-based Seated Dance Fitness with real friendship and a trusted Knowledge Hub, so healthy ageing happens together.",
  areaServed: ["Mumbai (Andheri)", "Online worldwide"],
  contact: {
    whatsapp: "+91 91521 58933",
    whatsappHref: "https://wa.me/919152158933",
    email: "info@zealverclubs.com",
  },
  /**
   * Knowledge Hub community group. Deliberately separate from `joinHref`:
   * that one is the membership enquiry, this is the free "keep me updated"
   * list, and they are different audiences at different stages.
   * WhatsApp groups cap at 1000 members, so swap this link when it fills.
   */
  knowledgeHubCommunity: {
    href: "https://chat.whatsapp.com/G9WNE225xi8ByRdDEr8J78?mode=gi_t",
    name: "Zealver Clubs Knowledge Hub",
    heading: "Join our WhatsApp Community, free",
    blurb:
      "Get new topics and guides as we publish them, plus healthy ageing tips, in a friendly group of women 60+. Free to join, and you can leave any time.",
    cta: "Join the free WhatsApp Community",
  },
  // "Join Our Club" opens WhatsApp with a friendly prefilled message.
  joinHref:
    "https://wa.me/919152158933?text=Hi%2C%20tell%20me%20more%20about%20Zealver%20Clubs",
  social: {
    instagram: "https://www.instagram.com/zealverclubs/",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  instagramHandle: "zealverclubs",
} as const;

/**
 * Medical reviewer. Knowledge Hub content is written by the Zealver Clubs team
 * (with AI assistance) and reviewed by Dr Namrata Bagaria before publishing.
 * Deliberately "reviewed by", not "medically reviewed": the Hub is
 * activity-first guidance, not medical content.
 * `lastReviewed` is the date of the most recent review pass, in ISO form.
 */
export const reviewer = {
  honorificPrefix: "Dr",
  name: "Namrata Bagaria",
  fullName: "Dr Namrata Bagaria",
  credentials: "MBBS, MPH (Harvard)",
  jobTitle: "Founder, Zealver Clubs",
  href: "/about/editorial-review",
  lastReviewed: "2026-09-11",
  lastReviewedLabel: "11 September 2026",
  bio: [
    "Dr Namrata Bagaria is the founder of Zealver Clubs and reviews every article and guide in the Knowledge Hub before it is published.",
    "She holds an MBBS and a Master of Public Health from Harvard, and her work focuses on active ageing: helping women 60+ stay strong, steady and connected through movement, community and practical everyday habits.",
    "Zealver Clubs runs chair-based Seated Dance Fitness online and in person, alongside a growing library of activity-first guidance for healthy ageing.",
  ],
} as const;

/** Shown at the end of every Knowledge Hub article and guide. */
export const contentPolicy = {
  disclaimerHeading: "About this article",
  disclaimer:
    "This article is for general information and education. It is not a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your doctor or another qualified health provider with any questions you have about a medical condition. Never disregard professional medical advice, or delay seeking it, because of something you have read here.",
  aiNote:
    "Written by the Zealver Clubs team with AI assistance, and reviewed before publishing.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Experience", href: "/experience" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Become a Host", href: "/become-a-host" },
] as const;

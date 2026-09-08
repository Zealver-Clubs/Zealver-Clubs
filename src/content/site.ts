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
  // "Join the Club" opens WhatsApp with a friendly prefilled message.
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

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Experience", href: "/experience" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Become a Host", href: "/become-a-host" },
] as const;

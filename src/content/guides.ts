/**
 * Knowledge Hub - Guides.
 * A Guide is an actionable, multi-step walkthrough toward a goal, and it
 * links several Topics. Guides are data too, so more can be added later.
 *
 * Copy is activity-first and general in nature, not medical advice.
 */

export type GuideStep = {
  n: number;
  heading: string;
  text: string;
  topicSlug: string;
  topicLabel: string;
};

export type Guide = {
  slug: string;
  title: string;
  meta: string;
  intro: string;
  image?: string; // real club photo; falls back to a placeholder if absent
  imageAlt?: string; // describe the image itself; defaults to the guide title
  imageCredit?: string; // visible credit / provenance line under the image
  imageRatio?: "16/9" | "4/3" | "3/2" | "1/1"; // hero aspect; defaults to 16/9
  steps: GuideStep[];
  topics: string[]; // topic slugs covered
  relatedGuides: string[]; // guide slugs
};

export const guides: Guide[] = [
  {
    slug: "fall-prevention-guide",
    title: "Fall prevention guide",
    meta: "3-step guide",
    intro:
      "A gentle, practical plan to help you stay steady and confident on your feet, one small step at a time.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Make your home safer",
        text: "Start with your surroundings, since it is the quickest win. Clear the floors and stairs of loose rugs and clutter, brighten dim spots on your walking routes, and add a grab rail and non-slip mat in the bathroom.",
        topicSlug: "home-safety-checklist",
        topicLabel: "Home safety checklist",
      },
      {
        n: 2,
        heading: "Build your balance",
        text: "Spend ten easy minutes on most days doing seated and chair-supported balance moves, marching, heel-to-toe steps, and standing on one foot. Steadier balance and stronger legs are what keep you upright.",
        topicSlug: "balance-exercises",
        topicLabel: "Balance exercises for seniors",
      },
      {
        n: 3,
        heading: "Choose the right footwear",
        text: "Finish with your feet. Wear shoes with a firm non-slip sole and a back that holds the heel, indoors as well as out, and retire worn-out slippers. If you use a stick or frame, set it to the correct height.",
        topicSlug: "footwear-and-mobility",
        topicLabel: "Footwear & mobility",
      },
    ],
    topics: ["home-safety-checklist", "balance-exercises", "footwear-and-mobility", "fall-prevention"],
    relatedGuides: ["anti-inflammatory-diet-guide"],
  },
  {
    slug: "lower-your-blood-sugar-guide",
    title: "Lower your blood sugar guide",
    meta: "3-step guide",
    intro:
      "Everyday habits around food, movement and rest that work together to help keep your blood sugar steady.",
    image: "/images/class-seated-dance.jpg",
    steps: [
      {
        n: 1,
        heading: "Start with nutrition basics",
        text: "Build each meal around protein and plenty of vegetables, keep portions steady, and swap sugary drinks for water. Even, balanced meals give you even, steady energy.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 2,
        heading: "Move a little after meals",
        text: "A gentle few minutes after eating helps your body use the meal. A slow stroll, seated marches, or standing to tidy up all count, aim for about ten minutes after your main meal.",
        topicSlug: "movement-and-blood-sugar",
        topicLabel: "Movement & blood sugar",
      },
      {
        n: 3,
        heading: "Rest and recover well",
        text: "Good sleep supports steady energy the next day. Keep regular sleep times, get morning daylight, and wind down calmly in the last hour before bed.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    topics: ["nutrition-basics", "movement-and-blood-sugar", "sleep-and-recovery"],
    relatedGuides: ["anti-inflammatory-diet-guide", "diabetes-management-guide"],
  },
  {
    slug: "anti-inflammatory-diet-guide",
    title: "Anti-inflammatory diet guide",
    meta: "2-step guide",
    intro:
      "Simple, food-first swaps that help calm inflammation and support how you feel day to day.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Learn the basics",
        text: "Lean towards whole, colourful foods, vegetables and fruit, whole grains, beans, nuts, olive oil, and gentle additions like turmeric and ginger, and ease back on packaged, sugary snacks.",
        topicSlug: "anti-inflammatory-basics",
        topicLabel: "Anti-inflammatory basics",
      },
      {
        n: 2,
        heading: "Build balanced plates",
        text: "Put it into practice one meal at a time: half the plate vegetables and fruit, a quarter protein, a quarter whole grains. Changing one meal at a time makes the habit last.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
    ],
    topics: ["anti-inflammatory-basics", "nutrition-basics"],
    relatedGuides: ["lower-your-blood-sugar-guide"],
  },
  {
    slug: "diabetes-management-guide",
    title: "Diabetes management guide for seniors",
    meta: "6-step guide",
    intro:
      "Everyday food, movement and rest habits that help women 60+ keep blood sugar steady, with chair-based movement at the centre. General lifestyle guidance, not medical advice.",
    image: "/images/healthy-plate-diagram.jpg",
    imageAlt:
      "Healthy plate diagram for diabetes: half the plate non-starchy vegetables and salad such as leafy greens, cucumber, tomato, carrot, capsicum, broccoli, cabbage, beans and beetroot; a quarter protein-rich foods such as paneer, tofu, dal, beans, lentils, eggs, fish, chicken and Greek yogurt; a quarter complex carbohydrates such as brown rice, quinoa, millets, oats, whole wheat roti and sweet potato; plus daily healthy fats from avocado, nuts and seeds, olive oil and ghee.",
    imageRatio: "1/1",
    imageCredit:
      "Illustration created for Zealver Clubs with ChatGPT (OpenAI), reviewed by Dr Namrata Bagaria.",
    steps: [
      {
        n: 1,
        heading: "Build a balanced plate",
        text: "Fill half your plate with vegetables, a quarter with protein, and a quarter with roti or rice. Choose whole fruit over juice, apple, orange, pear, guava and papaya are all good everyday choices. Keep sugar, mithai, soft drinks, white bread and maida for occasions rather than every day.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 2,
        heading: "Put protein in every meal",
        text: "Protein protects the muscle that burns glucose, and it keeps blood sugar steadier through the day. Dal, rajma, chole, paneer, tofu, soy and dahi all count, as do eggs, chicken and fish. Aim for some at breakfast, lunch and dinner rather than only at one meal.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 3,
        heading: "Walk for ten minutes after meals",
        text: "A short walk after eating helps your body use the meal rather than store it. Ten to fifteen unhurried minutes after your main meal is enough, and seated marches work just as well on days you would rather stay indoors.",
        topicSlug: "movement-and-blood-sugar",
        topicLabel: "Movement & blood sugar",
      },
      {
        n: 4,
        heading: "Build muscle two or three days a week",
        text: "Muscle is the body's largest user of glucose, so the more you keep, the better insulin works. Chair-based dance fitness builds strength, balance and mood together. Aim for about 150 minutes of movement across the week, with two or three of those days including strength work, which matters especially after menopause.",
        topicSlug: "balance-exercises",
        topicLabel: "Balance exercises for seniors",
      },
      {
        n: 5,
        heading: "Protect your sleep and ease stress",
        text: "Short sleep and constant stress both push blood sugar up. Keep regular sleep and waking times, aim for seven to eight hours, get daylight in the morning, and drink water steadily through the day.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
      {
        n: 6,
        heading: "Choose your fats well, and keep up your checks",
        text: "Nuts, seeds, olive oil, mustard oil and groundnut oil support steady energy, while deep-fried food, bakery items and packaged snacks are worth easing back on. Keep up your regular checks alongside, HbA1c, blood pressure, cholesterol, kidney function, eyes and feet, so you and your doctor can see what is working.",
        topicSlug: "anti-inflammatory-basics",
        topicLabel: "Anti-inflammatory basics",
      },
    ],
    topics: [
      "nutrition-basics",
      "movement-and-blood-sugar",
      "balance-exercises",
      "sleep-and-recovery",
      "anti-inflammatory-basics",
    ],
    relatedGuides: ["lower-your-blood-sugar-guide", "anti-inflammatory-diet-guide"],
  },
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string) {
  return guidesBySlug.get(slug) ?? null;
}

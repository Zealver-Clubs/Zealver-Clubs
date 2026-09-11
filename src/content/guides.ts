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

import type { Reference } from "./references";

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
  references?: Reference[];
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
    topics: [
      "anti-inflammatory-basics",
      "anti-inflammatory-swaps-indian-kitchen",
      "nutrition-basics",
    ],
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
    references: [
      {
        title: "Standards of Care in Diabetes",
        publisher: "American Diabetes Association",
        year: "2025",
        url: "https://diabetesjournals.org/care/issue/48/Supplement_1",
        supports:
          "The Diabetes Plate proportions in step 1, and the role of protein and carbohydrate quality in steps 1 and 2.",
      },
      {
        title: "Guidelines on physical activity and sedentary behaviour",
        publisher: "World Health Organization",
        year: "2020",
        url: "https://www.who.int/publications/i/item/9789240015128",
        supports:
          "The 150 minutes of weekly activity and two to three days of strength work in step 4, including the guidance for adults aged 65 and over.",
      },
      {
        title: "Dietary Guidelines for Indians",
        publisher: "ICMR\u2013National Institute of Nutrition",
        year: "2024",
        url: "https://www.nin.res.in/",
        supports:
          "Indian portion and food guidance across steps 1, 2 and 6, including dal, roti, rice and cooking oils.",
      },
      {
        title: "Guidelines for Management of Type 2 Diabetes",
        publisher: "Indian Council of Medical Research",
        year: "2018",
        url: "https://www.icmr.gov.in/",
        supports:
          "Lifestyle management of type 2 diabetes in Indian adults, and the monitoring schedule in step 6.",
      },
      {
        title:
          "Advice to walk after meals is more effective for lowering postprandial glycaemia than advice that does not specify timing",
        publisher: "Diabetologia",
        year: "2016",
        url: "https://link.springer.com/article/10.1007/s00125-016-4085-2",
        supports:
          "Walking shortly after eating, rather than at any time of day, in step 3.",
      },
    ],
  },
  {
    slug: "stay-strong-after-menopause-guide",
    title: "Stay strong and steady after menopause",
    meta: "5-step guide",
    intro:
      "Bone, muscle and balance work as one system, and all three respond to what you do each week. A practical plan for women 60+ to stay strong enough to live independently.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Challenge your muscles twice a week",
        text: "This is the step that does the most and the one most often skipped. Sit-to-stands, resistance bands, light weights or steady stair climbing all count. The principle is simple: your muscles need to be asked to do slightly more than they are used to, and what was hard last month should feel easier this month.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Let chair dance carry the habit",
        text: "Movement you enjoy is movement you keep doing, and consistency beats intensity over a year. Chair dance gives you rhythm, coordination and company every week, and you can build real strength into it by rising without your hands, holding a leg out longer, or adding heel raises at the chair back.",
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 3,
        heading: "Train your balance on purpose",
        text: "Balance is a skill and it fades if it is never practised. A few minutes most days of heel-to-toe steps, weight shifting and standing on one foot with a chair within reach is enough. A fracture usually needs both a vulnerable bone and a fall, and this is the half of that equation you can work on directly.",
        topicSlug: "balance-exercises",
        topicLabel: "Balance exercises for seniors",
      },
      {
        n: 4,
        heading: "Eat enough protein to hold your muscle",
        text: "Muscle cannot be maintained without the material to maintain it, and protein at one meal a day is not the same as protein spread across three. Dahi, milk, paneer, dal, rajma, soy and tofu all count, as do eggs, fish and chicken. Protein and strength work go together: neither does the job alone.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 5,
        heading: "Get calcium from food, and keep Vitamin D in perspective",
        text: "Lean on food first for calcium: dairy, calcium-set tofu, some leafy greens, fortified foods and small fish eaten with the bones. Vitamin D helps you absorb it, but it is not a muscle builder and it is not a substitute for exercise. Whether you need testing or a supplement is a question for your own doctor.",
        topicSlug: "vitamin-d-what-it-does",
        topicLabel: "Vitamin D: what it does, and what it does not",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "chair-dance-for-bone-and-muscle",
      "balance-exercises",
      "nutrition-basics",
      "vitamin-d-what-it-does",
      "bone-health-after-menopause",
      "osteopenia-and-osteoporosis",
    ],
    relatedGuides: ["fall-prevention-guide", "diabetes-management-guide"],
    references: [
      {
        title: "Guidelines on physical activity and sedentary behaviour",
        publisher: "World Health Organization",
        year: "2020",
        url: "https://www.who.int/publications/i/item/9789240015128",
        supports:
          "Muscle-strengthening on two or more days a week, and multicomponent balance training for adults aged 65 and over, in steps 1 and 3.",
      },
      {
        title:
          "Vitamin D for the Prevention of Disease: an Endocrine Society Clinical Practice Guideline",
        publisher: "The Journal of Clinical Endocrinology & Metabolism",
        year: "2024",
        url: "https://academic.oup.com/jcem/article/109/8/1907/7685305",
        supports:
          "Vitamin D in perspective in step 5: correcting a genuine shortfall rather than routine high-dose supplementation for everyone.",
      },
      {
        title: "Vitamin D and Calcium Supplementation to Prevent Fractures",
        publisher: "US Preventive Services Task Force",
        year: "2024",
        url: "https://www.uspreventiveservicestaskforce.org/",
        supports:
          "Why supplementation is not assumed to prevent fractures in healthy adults without deficiency, in step 5.",
      },
    ],
  },
  {
    slug: "five-minutes-a-day-for-stress-guide",
    title: "Five minutes a day for stress",
    meta: "5-step guide",
    intro:
      "One minute each of moving, breathing, music, remembering and company. A small daily routine for women 60+ that works on the body and the mind together.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "One minute: move",
        text: "Start with the body, because it is the quickest to answer. Roll the shoulders, turn the head slowly side to side, circle the ankles, open and close the hands, and stretch gently wherever you feel held. Seated is completely fine. You are loosening what the day has tightened, not exercising.",
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 2,
        heading: "One minute: breathe",
        text: "Four or five slow breaths, and make the breath out longer than the breath in. That longer breath out is the part that settles things. If your mind is circling, this is also where the four-step pause fits: stop, breathe, notice what is actually going round, then ask whether you can do anything about it right now.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "When your mind will not stop: a four-step pause",
      },
      {
        n: 3,
        heading: "One minute: music",
        text: "Put on a song from your younger years, not something new. The one that was playing when you were twenty, at a wedding, on the radio in your mother's kitchen. Let it play properly rather than in the background.",
        topicSlug: "music-memory-and-mood",
        topicLabel: "Why an old song does so much",
      },
      {
        n: 4,
        heading: "One minute: remember",
        text: "Let the song bring something back, and give it a question to answer. What does this remind me of? How old was I? What was life like then? The remembering is not a detour from the exercise, it is a large part of what makes it work.",
        topicSlug: "dementia-friendly-movement",
        topicLabel: "Dementia-friendly movement",
      },
      {
        n: 5,
        heading: "One minute: connect",
        text: "Tell someone. A friend, a daughter, a neighbour, whoever is nearby or at the end of a phone. Share the memory the song brought back and ask what it brings back for them. A worry carried alone weighs more than the same worry spoken aloud, and this is the step people skip.",
        topicSlug: "understanding-stress",
        topicLabel: "Understanding stress (\u0924\u0928\u093e\u0935)",
      },
    ],
    topics: [
      "understanding-stress",
      "stop-breathe-notice-choose",
      "music-memory-and-mood",
      "dementia-friendly-movement",
      "chair-dance-for-bone-and-muscle",
      "sleep-and-recovery",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
  },
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string) {
  return guidesBySlug.get(slug) ?? null;
}

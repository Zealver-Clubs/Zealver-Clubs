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
  /** Lead paragraph. A step needs nothing more than this. */
  text: string;
  /** A list inside the step, for things that read badly as a sentence. */
  bullets?: string[];
  /** Paragraphs after the list, to close the step off. */
  more?: string[];
  /** A step that stands on its own needs no onward link. */
  topicSlug?: string;
  topicLabel?: string;
};

import type { Reference } from "./references";

export type Guide = {
  slug: string;
  title: string;
  meta: string;
  intro: string;
  /** Further intro paragraphs, after the lead. */
  introMore?: string[];
  /**
   * Search description. The intro is used when this is absent, trimmed to its
   * first sentence if it runs long; set this where that trim reads poorly.
   */
  metaDescription?: string;
  image?: string; // real club photo; falls back to a placeholder if absent
  imageAlt?: string; // describe the image itself; defaults to the guide title
  imageCredit?: string; // visible credit / provenance line under the image
  imageRatio?: "16/9" | "4/3" | "3/2" | "1/1" | "6/5" | "4/5"; // hero aspect; defaults to 16/9
  steps: GuideStep[];
  /**
   * Sections after the steps. For closing advice that belongs in the guide
   * but is not itself a step to work through.
   */
  sections?: {
    heading: string;
    body: string[];
    bullets?: string[];
    /** Paragraphs after the list, to close the section off. */
    more?: string[];
    /** Sub-blocks within the section, each able to link onward to a topic. */
    items?: {
      heading: string;
      body: string[];
      topicSlug?: string;
      topicLabel?: string;
    }[];
  }[];
  topics: string[]; // topic slugs covered
  relatedGuides: string[]; // guide slugs
  references?: Reference[];
};

export const guides: Guide[] = [
  {
    slug: "fall-prevention-guide",
    title: "Falls: preventing them and staying steady",
    meta: "5-step guide",
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
      {
        n: 4,
        heading: "Build leg strength, and the speed to catch yourself",
        text: "Balance keeps you upright; strength is what saves you when balance goes. Rising from a chair without using your hands is the single most useful exercise here. Work on producing force quickly as well as slowly, because a stumble gives you a fraction of a second, not time to think.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 5,
        heading: "Keep the bone underneath strong",
        text: "A fracture needs two things: a fall, and a bone fragile enough to break. The first four steps deal with the fall. This one deals with the bone, through weight-bearing movement, enough protein and calcium-rich food. Worth doing both, because it is the combination that keeps you independent.",
        topicSlug: "bone-health-after-menopause",
        topicLabel: "Bone health after menopause",
      },
    ],
    topics: [
      "home-safety-checklist",
      "balance-exercises",
      "footwear-and-mobility",
      "fall-prevention",
      "muscle-strength-and-ageing",
      "bone-health-after-menopause",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide", "arthritis-and-joint-comfort-guide"],
  },
  {
    slug: "lower-your-blood-sugar-guide",
    title: "Blood sugar: everyday habits to keep it steady",
    meta: "4-step guide",
    intro:
      "The order you eat your meal can help reduce the rise in blood sugar after eating. Combined with balanced meals, movement and good sleep, this simple habit can support steadier energy throughout the day.",
    introMore: [
      "Eat your meal in this order: protein first, then vegetables, then healthy fats, and carbohydrates last.",
      "Starting with protein and fibre-rich vegetables, followed by fats and then carbohydrates, can slow the rate at which glucose enters your bloodstream and may help reduce the post-meal blood sugar rise.",
    ],
    metaDescription:
      "Eat protein first, then vegetables, then healthy fats, and carbohydrates last. A simple change to meal order that can steady blood sugar, plus movement and sleep.",
    image: "/images/eating-order-blood-sugar.jpg",
    imageAlt:
      "Eating order that balances blood sugar. Four plates in sequence. One, protein first: paneer, tofu, eggs, chicken, fish, dal, beans or Greek yogurt, which keeps you full, supports muscles and reduces sugar spikes. Two, salad and vegetables second: leafy greens, cucumber, tomato, carrot or sprouts, whose fibre slows carbohydrate absorption and improves digestion. Three, healthy fats third: avocado, nuts and seeds, olive oil, ghee or olives, which keep you satisfied and help the body absorb nutrients. Four, carbohydrates later: brown rice, quinoa, millets, whole wheat roti or sweet potato. Why this order works: it helps reduce blood sugar spikes, improves digestion, and keeps you full while reducing cravings. The golden rule is protein, then salad, then healthy fats, then carbohydrates.",
    imageRatio: "4/5",
    imageCredit:
      "Illustration created for Zealver Clubs with ChatGPT (OpenAI), reviewed by Dr Namrata Bagaria.",
    steps: [
      {
        n: 1,
        heading: "Start with protein",
        text: "Begin your meal with a protein-rich food such as dal, beans, eggs, paneer, tofu, fish, chicken or Greek yoghurt.",
        more: [
          "Protein helps with fullness, supports muscle health, and starting with it also helps reduce the rise in blood sugar after the meal.",
        ],
      },
      {
        n: 2,
        heading: "Next, eat vegetables",
        text: "Have your salad or non-starchy vegetables next: leafy greens, cucumber, tomato, carrots, cabbage, broccoli or sprouts.",
        more: [
          "Their fibre can slow digestion and carbohydrate absorption, and it supports digestion more generally.",
        ],
      },
      {
        n: 3,
        heading: "Add healthy fats",
        text: "Include foods such as nuts, seeds, avocado, olives, olive oil or a little ghee.",
        more: [
          "These add staying power to the meal and make it more satisfying. Fat also helps your body absorb the vitamins in the meal that need it, including vitamins A, D, E and K.",
        ],
      },
      {
        n: 4,
        heading: "Eat carbohydrates last",
        text: "Have your carbohydrate foods after the protein and vegetables: whole wheat roti, brown rice, quinoa, millets or sweet potato. Complex carbohydrates suit this better than refined ones.",
        more: [
          "You do not need to eliminate carbohydrates. The goal is to choose sensible portions and change the order in which you eat them.",
          "The golden rule: protein, then vegetables, then healthy fats, then carbohydrates.",
        ],
      },
    ],
    sections: [
      {
        heading: "Why this order works",
        body: [
          "Eating the same meal in a different order changes how quickly the carbohydrate in it reaches your bloodstream. Three things follow from that:",
        ],
        bullets: [
          "It helps reduce the rise in blood sugar after eating.",
          "It supports digestion.",
          "It keeps you full for longer, which tends to reduce cravings later in the day.",
        ],
        more: [
          "Done most days rather than occasionally, this supports steadier energy, and it makes a sensible portion of carbohydrate easier to stick to.",
        ],
      },
      {
        heading: "Three more everyday habits for steadier blood sugar",
        body: [],
        items: [
          {
            heading: "Move after meals",
            body: [
              "A gentle ten-minute walk, seated marches or simply standing and moving around after a meal can help your muscles use glucose.",
            ],
            topicSlug: "movement-and-blood-sugar",
            topicLabel: "Movement & blood sugar",
          },
          {
            heading: "Keep meals balanced",
            body: [
              "Build meals around protein, vegetables and a sensible portion of carbohydrates, and choose water instead of sugary drinks.",
            ],
            topicSlug: "nutrition-basics",
            topicLabel: "Nutrition basics",
          },
          {
            heading: "Sleep and recover well",
            body: [
              "Regular, adequate sleep supports healthy energy regulation and glucose metabolism. Keep consistent sleep times, get morning daylight and give yourself time to wind down before bed.",
            ],
            topicSlug: "sleep-and-recovery",
            topicLabel: "Sleep & recovery",
          },
        ],
      },
      {
        heading: "Eating out",
        body: [
          "The order still works when someone else has cooked. Ask for the salad or a vegetable dish to come first, eat the paneer, dal or chicken before the rice or naan, and keep the bread to a sensible portion rather than refusing it.",
          "Apple cider vinegar is often suggested here, taken diluted before a carbohydrate-rich meal. The studies behind it are small and short-term, and they do suggest a modest reduction in the rise in blood sugar after a meal. It is worth being clear about what that means: a small effect, alongside the meal order rather than instead of it, and nothing like the effect of medication.",
        ],
        bullets: [
          "Always dilute it in water. Never drink it neat, and do not take it as a shot.",
          "It is acidic, so it can worsen reflux and wear down tooth enamel. Rinse your mouth with water afterwards.",
          "If you take medication for diabetes, ask your doctor before adding it, since the effects can add together.",
          "If it does not suit you, you lose very little. The meal order is doing most of the work.",
        ],
      },
      {
        heading: "One small change to remember",
        body: [
          "You do not have to completely change what you eat. Start by changing the order:",
        ],
        bullets: [
          "Protein, then vegetables, then healthy fats, then carbohydrates.",
        ],
        more: [
          "Small change. Big potential impact.",
          "If you take medication for diabetes, changes that lower your blood sugar can add to what your medication is already doing. It is worth telling your doctor what you are changing.",
        ],
      },
    ],
    topics: [
      "diabetes-what-is-happening",
      "protein-at-every-meal",
      "nutrition-basics",
      "movement-and-blood-sugar",
      "sleep-and-recovery",
    ],
    relatedGuides: ["anti-inflammatory-diet-guide", "diabetes-management-guide"],
  },
  {
    slug: "anti-inflammatory-diet-guide",
    title: "Anti-inflammatory eating: where to start",
    meta: "2-step guide",
    intro:
      "Eating to support lower inflammation does not mean following a strict diet or giving up everything you enjoy. It is mostly about what you eat regularly and often: more vegetables, fruit, whole grains, beans, nuts and seeds, and less highly processed and sugary food.",
    introMore: [
      "You do not need to change everything at once. A few simple swaps can make your everyday meals more nourishing.",
    ],
    image: "/images/anti-inflammatory-eating.webp",
    imageAlt:
      "Anti-inflammatory eating. A large bowl holding dal, brown rice, sauteed greens, broccoli, peppers, carrots and a chopped cucumber and tomato salad, with side bowls of curd, orange and pomegranate, and walnuts and almonds. Fresh turmeric, ginger, garlic and olive oil sit alongside. Notes read: more whole foods, meaning vegetables, fruit, whole grains, beans, nuts and seeds; everyday flavour from turmeric, ginger, garlic and other spices; and less processed food, meaning sugary snacks, packaged foods and refined carbohydrates. Small changes make a big difference.",
    imageRatio: "3/2",
    imageCredit:
      "Illustration created for Zealver Clubs with ChatGPT (OpenAI), reviewed by Dr Namrata Bagaria.",
    steps: [
      {
        n: 1,
        heading: "Learn what an anti-inflammatory eating pattern looks like",
        text: "Think more whole foods, more variety, and less highly processed food. Build your meals around:",
        bullets: [
          "Vegetables: leafy greens, gourds, beans, carrots, tomatoes, cauliflower, cabbage and other seasonal vegetables",
          "Fruit: whole fruit such as oranges, guava, berries, apples and papaya",
          "Protein-rich foods: dal, beans, chana, rajma, curd, paneer, eggs, fish or other foods you eat",
          "Whole grains and traditional staples: oats, brown rice, whole-wheat roti, millets and other minimally refined grains",
          "Nuts and seeds: walnuts, almonds, peanuts, flaxseeds and chia seeds",
          "Healthy fats: mainly unsaturated fats such as those found in nuts, seeds and olive oil",
          "Flavour from herbs and spices: turmeric, ginger, garlic, cumin and other spices can make healthy food more enjoyable",
        ],
        more: [
          "At the same time, try to eat less of foods that are easy to overconsume and provide little nutritional value, such as sugary drinks, sweets, packaged snacks and heavily processed foods.",
          "This is not about labelling foods as \u201cgood\u201d or \u201cbad\u201d. Your overall eating pattern matters more than any single food.",
        ],
        topicSlug: "anti-inflammatory-basics",
        topicLabel: "Anti-inflammatory basics",
      },
      {
        n: 2,
        heading: "Build a balanced plate",
        text: "You do not need a special recipe or expensive ingredients. Start with the meal in front of you. A simple guide is:",
        bullets: [
          "Half the plate: vegetables",
          "A quarter of the plate: protein, such as dal, beans, paneer, curd, eggs or fish",
          "A quarter of the plate: whole grains or other minimally refined carbohydrates such as roti, brown rice or millets",
        ],
        more: [
          "Add a portion of whole fruit when it fits the meal, and use nuts or seeds regularly in sensible portions.",
          "For an Indian meal, this could be as simple as vegetable sabzi, dal, roti, curd and a piece of fruit. Or vegetable pulao, raita, a side of beans or paneer, and fruit.",
          "You do not have to make every meal perfect. Improving one meal at a time is a much easier habit to maintain.",
        ],
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
    ],
    sections: [
      {
        heading: "A simple way to start this week",
        body: ["Rather than changing your entire diet, try these swaps:"],
        bullets: [
          "Replace a biscuit or packaged snack with fruit and a few nuts.",
          "Add one extra vegetable to lunch or dinner.",
          "Choose dal, beans, curd, paneer, eggs or fish more regularly as your protein source.",
          "Use whole fruit instead of juice most of the time.",
          "Add walnuts, flaxseeds or chia seeds to meals you already eat.",
          "Choose home-cooked food more often when possible.",
        ],
      },
      {
        heading:
          "What about turmeric, ginger and other anti-inflammatory foods?",
        body: [
          "Turmeric, ginger, garlic, berries, nuts and other foods contain compounds that have been studied for their potential effects on inflammation. But no single food or spice can make an overall unhealthy diet anti-inflammatory.",
          "Think of these foods as useful additions to a balanced eating pattern, not as treatments.",
        ],
      },
      {
        heading: "One thing to remember",
        body: [
          "You do not need to buy special anti-inflammatory products. The food already in an Indian kitchen can give you most of what you need: vegetables, fruit, dal, beans, whole grains, nuts, seeds, curd and spices.",
          "The goal is not a perfect diet. It is a pattern of eating that you can enjoy and maintain.",
        ],
      },
    ],
    topics: [
      "anti-inflammatory-basics",
      "anti-inflammatory-swaps-indian-kitchen",
      "nutrition-basics",
      "protein-at-every-meal",
    ],
    relatedGuides: ["lower-your-blood-sugar-guide"],
  },
  {
    slug: "diabetes-management-guide",
    title: "Diabetes: managing it day to day",
    meta: "6-step guide",
    intro:
      "Everyday food, movement and rest habits that help women 60+ keep blood sugar steady, with chair-based movement at the centre. General lifestyle guidance, not medical advice.",
    image: "/images/healthy-plate-diagram.jpg",
    imageAlt:
      "Healthy plate diagram for diabetes: half the plate non-starchy vegetables and salad such as leafy greens, cucumber, tomato, carrot, capsicum, broccoli, cabbage, beans and beetroot; a quarter protein-rich foods such as paneer, tofu, lentils, beans, eggs, fish, chicken and Greek yogurt; a quarter complex carbohydrates such as brown rice, quinoa, millets, oats, whole wheat flatbread and sweet potato; plus daily healthy fats from avocado, nuts and seeds, olive oil and ghee.",
    imageRatio: "1/1",
    imageCredit:
      "Illustration created for Zealver Clubs with ChatGPT (OpenAI), reviewed by Dr Namrata Bagaria.",
    steps: [
      {
        n: 1,
        heading: "Build a balanced plate",
        text: "Fill half your plate with vegetables, a quarter with protein, and a quarter with bread or rice. Choose whole fruit over juice, apple, orange, pear, guava and papaya are all good everyday choices. Keep sugar, sweets, soft drinks, white bread and refined flour for occasions rather than every day.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 2,
        heading: "Put protein in every meal",
        text: "Protein protects the muscle that burns glucose, and it keeps blood sugar steadier through the day. Lentils, kidney beans, chickpeas, paneer, tofu, soy and curd all count, as do eggs, chicken and fish. Aim for some at breakfast, lunch and dinner rather than only at one meal.",
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
      "diabetes-what-is-happening",
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
          "Indian portion and food guidance across steps 1, 2 and 6, including lentils, breads, rice and cooking oils.",
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
    title: "Bone and muscle strength after menopause",
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
        text: "Muscle cannot be maintained without the material to maintain it, and protein at one meal a day is not the same as protein spread across three. Curd, milk, paneer, lentils, kidney beans, soy and tofu all count, as do eggs, fish and chicken. Protein and strength work go together: neither does the job alone.",
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
    slug: "five-things-you-can-do-for-stress-guide",
    title: "Stress: five things you can do",
    meta: "5-step guide",
    intro:
      "Move, breathe, play an old song, let it bring something back, and tell someone. Five simple things for women 60+ that work on the body and the mind together, and none of them take long.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Move your body a little",
        text: "Start with the body, because it is the quickest to answer. Roll the shoulders, turn the head slowly side to side, circle the ankles, open and close the hands, and stretch gently wherever you feel held. Seated is completely fine. You are loosening what the day has tightened, not exercising.",
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 2,
        heading: "Slow your breathing",
        text: "Four or five slow breaths, and make the breath out longer than the breath in. That longer breath out is the part that settles things. If your mind is circling, this is also where the four-step pause fits: stop, breathe, notice what is actually going round, then ask whether you can do anything about it right now.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "Worry: a four-step pause when your mind will not stop",
      },
      {
        n: 3,
        heading: "Put on an old song",
        text: "Put on a song from your younger years, not something new. The one that was playing when you were twenty, at a wedding, on the radio in your mother's kitchen. Let it play properly rather than in the background.",
        topicSlug: "music-memory-and-mood",
        topicLabel: "Music and memory: why an old song does so much",
      },
      {
        n: 4,
        heading: "Let it bring something back",
        text: "Let the song bring something back, and give it a question to answer. What does this remind me of? How old was I? What was life like then? The remembering is not a detour from the exercise, it is a large part of what makes it work.",
        topicSlug: "dementia-friendly-movement",
        topicLabel: "Dementia-friendly movement",
      },
      {
        n: 5,
        heading: "Tell someone",
        text: "Tell someone. A friend, a daughter, a neighbour, whoever is nearby or at the end of a phone. Share the memory the song brought back and ask what it brings back for them. A worry carried alone weighs more than the same worry spoken aloud, and this is the step people skip.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
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
  {
    slug: "arthritis-and-joint-comfort-guide",
    title: "Arthritis and joint pain: living well",
    meta: "5-step guide",
    intro:
      "Joint pain can make you want to move less. But for many people with osteoarthritis and everyday joint stiffness, the right kind of regular movement can actually make daily life easier.",
    introMore: [
      "You do not have to exercise hard or push through pain. The aim is to keep your joints moving, strengthen the muscles that support them, eat well, sleep well and know when joint pain needs medical attention.",
      "This guide focuses mainly on osteoarthritis and general joint stiffness. Rheumatoid arthritis, gout and other inflammatory joint conditions are different and may need different treatment.",
    ],
    metaDescription:
      "Gentle, practical habits for women 60+ with osteoarthritis or everyday joint stiffness: keep moving, build strength, eat and sleep well, and know when to ask.",
    image: "/images/arthritis-joint-pain.webp",
    imageAlt:
      "Arthritis and joint pain: living well. A smiling older woman sits on a wooden chair in a bright room, holding one knee drawn up towards her. Five numbered points read: move the joint gently most days, to keep joints active and mobile; start seated and warm up first, with gentle moves to ease stiffness; build the muscle around the joint, because stronger muscles take load off joints; eat in a way that helps, since nourishing food and a healthy weight make a difference; and protect your sleep and know when to ask, resting well and seeking medical advice when needed.",
    imageRatio: "3/2",
    imageCredit:
      "Illustration created for Zealver Clubs with ChatGPT (OpenAI), reviewed by Dr Namrata Bagaria.",
    steps: [
      {
        n: 1,
        heading: "Keep the joint moving, gently and regularly",
        text: "When a joint is sore, complete rest can seem like the obvious answer. But for osteoarthritis, regular gentle movement is usually more helpful than prolonged inactivity.",
        more: [
          "Movement helps maintain joint mobility and keeps the muscles around the joint working. Start with what feels manageable: a short walk, gentle stretching, ankle circles, knee movements or seated exercises.",
          "You do not need to do everything at once. A few minutes several times a day still counts.",
          "The goal is not to exercise through significant pain. If a movement causes sharp pain, makes your symptoms substantially worse or leaves you much more sore afterwards, reduce the intensity or stop and seek advice if it continues.",
        ],
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 2,
        heading: "Start seated if standing is uncomfortable",
        text: "A chair can be a useful starting point when your knees, hips or ankles are painful or you are not yet confident exercising while standing. Try gentle movements such as:",
        bullets: [
          "Ankle circles",
          "Straightening and bending the knees",
          "Seated marching",
          "Shoulder rolls",
          "Gentle wrist and finger movements",
        ],
        more: [
          "Start slowly, particularly if you feel stiff after waking or after sitting for a long time. A few easy movements can help you loosen up before doing more.",
          "Chair-based exercise is not lesser exercise. It can be a practical way to work on mobility, coordination and strength while reducing the load on the legs.",
        ],
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 3,
        heading: "Strengthen the muscles around the joint",
        text: "Strong muscles help support the joints and make everyday activities easier.",
        more: [
          "This is particularly important for painful knees and hips. Exercises such as seated leg extensions, sit-to-stands, heel raises and other light resistance exercises can gradually build strength.",
          "Aim for muscle-strengthening activity at least twice a week, if it is appropriate for you. Start with a level that feels manageable and increase gradually.",
          "You may feel your muscles working during exercise, but sharp or significant joint pain is a reason to stop or modify the movement.",
          "If you have severe joint pain, a recent injury, major swelling or another medical condition affecting movement, ask your doctor or physiotherapist which exercises are appropriate for you.",
        ],
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 4,
        heading: "Eat to support your overall health",
        text: "There is no food that cures arthritis. Be cautious of anyone promising a particular spice, supplement or arthritis diet that will make joint pain disappear.",
        more: [
          "What matters more is your overall eating pattern.",
          "Make vegetables, fruit, beans and lentils, whole grains, nuts and seeds regular parts of your diet. Include protein-rich foods such as dal, beans, curd, paneer, eggs or fish, depending on what you eat. Choose mostly unsaturated fats and keep deep-fried and highly processed foods as occasional choices.",
          "If you are carrying extra weight, even a modest amount of weight loss can reduce symptoms and improve function in knee osteoarthritis. You do not need to aim for dramatic weight loss to see a benefit.",
          "And remember: this is not about giving up foods you enjoy. It is about making the healthier choice more often.",
        ],
        topicSlug: "anti-inflammatory-swaps-indian-kitchen",
        topicLabel: "Anti-inflammatory swaps for an Indian kitchen",
      },
      {
        n: 5,
        heading: "Sleep well and know when to ask for help",
        text: "Pain and poor sleep can feed into each other. Pain can make it harder to sleep, while poor sleep can make pain feel harder to cope with. Keep a reasonably regular sleep and wake time, give yourself time to wind down before bed and try to stay physically active during the day. Just as importantly, know when joint pain needs medical attention. See your doctor if:",
        bullets: [
          "A joint becomes hot, red or markedly swollen",
          "Pain becomes suddenly severe or unbearable",
          "You have a fever along with joint pain",
          "Morning stiffness is prolonged, particularly if it lasts an hour or more",
          "Your joint has changed shape or you suddenly cannot use it normally",
          "Pain or stiffness is persistent or interfering with your everyday activities",
          "You are unsure whether your symptoms are osteoarthritis or another type of arthritis",
        ],
        more: [
          "These symptoms can sometimes point to conditions such as rheumatoid arthritis, gout or an infection, which need different treatment.",
          "Getting the right diagnosis matters. You do not have to simply accept persistent joint pain as an inevitable part of ageing.",
        ],
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    sections: [
      {
        heading: "The simple takeaway",
        body: [
          "You do not need to protect painful joints by avoiding movement. Think:",
        ],
        bullets: [
          "Move gently.",
          "Build strength.",
          "Eat well.",
          "Sleep well.",
          "Ask when something does not feel right.",
        ],
        more: [
          "The aim is not to have pain-free joints every minute of the day. It is to keep doing the things that matter to you, with as much comfort, strength and independence as possible.",
        ],
      },
    ],
    topics: [
      "arthritis-three-kinds",
      "movement-healthy-aging",
      "chair-dance-for-bone-and-muscle",
      "muscle-strength-and-ageing",
      "anti-inflammatory-swaps-indian-kitchen",
      "sleep-and-recovery",
    ],
    relatedGuides: [
      "stay-strong-after-menopause-guide",
      "anti-inflammatory-diet-guide",
    ],
  },
  {
    slug: "blood-pressure-guide",
    title: "Blood pressure: everyday habits that help",
    meta: "5-step guide",
    intro:
      "Move, muscle, meals, mind and measure: the five everyday things that keep blood pressure steady. Lifestyle guidance, not a substitute for your doctor.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Find the salt you are not thinking about",
        text: "Most salt does not come from the salt cellar. It comes from packets: savoury snacks, biscuits, pickles, papad, ready sauces, instant noodles and bakery items. Cutting those back does far more than cooking blander food. Herbs, lemon, garlic, ginger, cumin and coriander give you the flavour back.",
        topicSlug: "anti-inflammatory-swaps-indian-kitchen",
        topicLabel: "Anti-inflammatory swaps for an Indian kitchen",
      },
      {
        n: 2,
        heading: "Walk most days",
        text: "Regular gentle activity is one of the most reliable things you can do for blood pressure, and it does not need to be strenuous. Thirty minutes most days, which can be split into three lots of ten, is a sensible target. A walk after meals counts.",
        topicSlug: "movement-and-blood-sugar",
        topicLabel: "Movement & blood sugar",
      },
      {
        n: 3,
        heading: "Eat for potassium as well as less salt",
        text: "Vegetables, fruit, beans and lentils bring potassium, which works against sodium rather than simply avoiding it. Build meals around them, keep portions steady, and favour whole foods over packaged ones. If you have kidney problems, ask your doctor before increasing potassium-rich foods.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 4,
        heading: "Take stress seriously",
        text: "Constant low-level stress and short sleep both push blood pressure up, and both are easy to treat as unavoidable when they are not. A few slow breaths with a longer breath out, a short pause when worry circles, and a settled sleep routine are small and they add up.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "Worry: a four-step pause when your mind will not stop",
      },
      {
        n: 5,
        heading: "Keep your checks, and keep taking what you are given",
        text: "High blood pressure has no symptoms, which is exactly why it needs measuring rather than guessing. Have it checked as often as your doctor advises. And if you are on medication for it, none of the above replaces it: these habits work alongside treatment, never instead of it, and stopping a medicine is a decision only your doctor should make.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    topics: [
      "blood-pressure-in-women",
      "heart-attack-signs-in-women",
      "anti-inflammatory-swaps-indian-kitchen",
      "movement-and-blood-sugar",
      "nutrition-basics",
      "stop-breathe-notice-choose",
      "sleep-and-recovery",
    ],
    relatedGuides: ["diabetes-management-guide", "anti-inflammatory-diet-guide"],
  },
  {
    slug: "cholesterol-guide",
    title: "Cholesterol: eating and moving for healthier levels",
    meta: "5-step guide",
    intro:
      "Practical changes to fats, fibre and movement that support healthier cholesterol, using food already in an Indian kitchen.",
    image: "/images/class-seated-dance.jpg",
    steps: [
      {
        n: 1,
        heading: "Change the kind of fat, not just the amount",
        text: "This matters more than cutting fat altogether. Nuts, seeds, olive, mustard and groundnut oil, and oily fish are the ones to lean on. What is worth easing back on is deep-fried food, bakery items, cream-heavy gravies and packaged snacks, where the fats are the least helpful kind.",
        topicSlug: "anti-inflammatory-swaps-indian-kitchen",
        topicLabel: "Anti-inflammatory swaps for an Indian kitchen",
      },
      {
        n: 2,
        heading: "Eat more soluble fibre",
        text: "Oats, barley, beans, lentils, apples, guava and okra all carry the kind of fibre that helps carry cholesterol out rather than letting it circulate. This is one of the few dietary changes with a direct and well-established effect, and it costs nothing extra to do.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 3,
        heading: "Bring in soy and other plant protein",
        text: "Soy in its various forms, tofu, soy chunks and soy milk, alongside dal, rajma and chole, is worth putting in place of some of the meat and full-fat dairy in a week. Plant protein brings fibre with it and leaves out the saturated fat, which is the combination that helps here.",
        topicSlug: "soy-milk-and-plant-milks",
        topicLabel: "Soy milk and other plant milks",
      },
      {
        n: 4,
        heading: "Move regularly, and keep muscle",
        text: "Activity nudges the helpful side of the cholesterol picture upward, which diet alone does less for. Regular walking, chair-based dance and light strength work a couple of days a week all count, and keeping muscle matters as much as the walking does.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 5,
        heading: "Get it measured, and treat this as alongside",
        text: "Cholesterol has no symptoms, so a blood test is the only way to know where you stand. Have it checked as your doctor advises. If you have been prescribed something for it, keep taking it: food and movement work with treatment, not instead of it. This is general food and activity guidance, not medical advice.",
        topicSlug: "anti-inflammatory-basics",
        topicLabel: "Anti-inflammatory basics",
      },
    ],
    topics: [
      "anti-inflammatory-swaps-indian-kitchen",
      "nutrition-basics",
      "soy-milk-and-plant-milks",
      "movement-healthy-aging",
      "anti-inflammatory-basics",
    ],
    relatedGuides: ["anti-inflammatory-diet-guide", "diabetes-management-guide"],
  },
  {
    slug: "vitamin-d-guide",
    title: "Vitamin D: getting it right",
    meta: "4-step guide",
    intro:
      "What Vitamin D actually does, where it comes from, and why more is not better. A short, sensible guide for women 60+.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Understand what it is for",
        text: "Vitamin D behaves more like a hormone than a vitamin, and its clearest job is helping your gut absorb calcium, which is the raw material bone is built from. Muscle responds to it too. That is worth knowing before deciding anything, because it explains both why it matters and why it cannot work alone.",
        topicSlug: "vitamin-d-what-it-does",
        topicLabel: "Vitamin D: what it does, and what it does not",
      },
      {
        n: 2,
        heading: "Let food and daylight do their part",
        text: "Your skin makes Vitamin D from sunlight, and some comes from food and fortified products, including many soy milks. Ordinary daylight is enough; deliberately sitting out to burn is not a sensible way to go about it, and it carries its own risk.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 3,
        heading: "Do not expect it to replace the work",
        text: "This is where most people go wrong. Vitamin D is not a muscle builder, and it is not a substitute for exercise, which remains the strongest signal you can send to both muscle and bone. A perfectly normal Vitamin D result does not mean your bones are fine. More is not better either: the goal is having enough, not reaching the highest number you can.",
        topicSlug: "bone-health-after-menopause",
        topicLabel: "Bone health after menopause",
      },
      {
        n: 4,
        heading: "Let your doctor decide about testing and supplements",
        text: "Whether you need a blood test, and whether you need a supplement and at what dose, depends on your own circumstances, and those are questions for your doctor rather than for a website or a shop shelf. Take this page as background for that conversation, not as a substitute for it.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
    ],
    topics: [
      "vitamin-d-what-it-does",
      "bone-health-after-menopause",
      "nutrition-basics",
      "muscle-strength-and-ageing",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide"],
  },
  {
    slug: "dementia-engagement-guide",
    title: "Dementia: staying engaged and connected",
    meta: "5-step guide",
    intro:
      "Practical ways to keep someone with dementia moving, joining in and enjoying company. For families, carers and clubs.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Lead with music they grew up with",
        text: "Familiar songs from someone's youth reach further than almost anything else, and often keep working when other kinds of recall have faded. They arrive with the time attached: where they were, who they were with. Start there rather than with instructions, and you will often get participation you were not expecting.",
        topicSlug: "music-memory-and-mood",
        topicLabel: "Music and memory: why an old song does so much",
      },
      {
        n: 2,
        heading: "Keep the movements short and repeat them",
        text: "Clap to the beat, sway side to side, reach up and out, tap the feet. Say the action aloud as you do it and do it together, so there is a pattern to follow rather than an instruction to remember. Seated throughout is completely fine and usually better.",
        topicSlug: "dementia-friendly-movement",
        topicLabel: "Dementia-friendly movement",
      },
      {
        n: 3,
        heading: "Keep everything familiar",
        text: "The same room, the same faces, the same shape to the session, at the same time each week. Predictability lowers anxiety, and lower anxiety is what makes joining in possible at all. Novelty is rarely the gift it seems; familiarity is.",
        topicSlug: "memory-cognitive-health-seniors",
        topicLabel: "Memory and cognition: how social clubs help",
      },
      {
        n: 4,
        heading: "Follow their energy on the day",
        text: "Some days will go better than others and that is not a failure of anything. Celebrate joining in rather than getting it right, let them set the pace, and let a quiet day be a quiet day. Correcting someone rarely helps; going along with where they are usually does.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Keep the company, and look after the carer",
        text: "Connection is doing as much work here as any activity. Keep them among people rather than apart. And if you are the carer, your own rest, company and support are not an indulgence; they are what makes it possible to keep going. This is a supportive activity approach for wellbeing and connection, not a medical therapy, and care decisions belong with your doctor.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
    ],
    topics: [
      "dementia-friendly-movement",
      "music-memory-and-mood",
      "memory-cognitive-health-seniors",
      "meaning-belonging-healthy-aging",
      "understanding-stress",
    ],
    relatedGuides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "friendship-later-in-life-guide",
    title: "Friendship: making new friends and keeping the old",
    meta: "5-step guide",
    intro:
      "Friendship is not a luxury at 60+, it is one of the strongest things you can do for your health. How to build it when the old routes have closed.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Take it as seriously as exercise",
        text: "Loneliness is not simply sad, it affects health in the way that smoking and inactivity do, and longitudinal studies have linked it to something in the region of a thirty per cent higher risk of dementia. The association is consistent, though researchers are still working out how much of it is cause. Social connection supports motivation, self-worth, mood and the will to keep doing everything else on this list. If you would not skip your walk for a month, do not let a month go by without company either.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 2,
        heading: "Understand why it got harder",
        text: "It is not you. Work, school gates and neighbourhoods used to supply friends without anyone having to try. Retirement, moving, widowhood and children living elsewhere all remove those routes at once. Friendship after 60 has to be arranged on purpose, and knowing that stops it feeling like a personal failing.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
      {
        n: 3,
        heading: "Go somewhere regular rather than somewhere new",
        text: "Friendship needs repetition more than it needs chemistry. The same group, the same day, the same faces, week after week, is what turns acquaintances into friends. One large event will not do it; a small thing you attend every week will. That is the whole design of a club.",
        topicSlug: "monthly-activities-zealver-clubs",
        topicLabel: "Activities at Zealver Clubs",
      },
      {
        n: 4,
        heading: "Make the first small move",
        text: "Almost everybody in the room is waiting for somebody else to speak first. Ask a question and let them talk. Remember one thing and ask about it next week. Sit somewhere different. None of it is dramatic, and all of it works, because what people remember is being asked about, not being impressed.",
        topicSlug: "music-memory-and-mood",
        topicLabel: "Music and memory: why an old song does so much",
      },
      {
        n: 5,
        heading: "Tend the friendships you already have",
        text: "Old friends are easier to keep than new ones are to find, and they usually lapse through drift rather than falling out. A phone call rather than a message, on a day you decide in advance. Say the thing you were going to leave unsaid. Most people are delighted to hear from someone and were simply waiting too.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
    ],
    topics: [
      "meaning-belonging-healthy-aging",
      "monthly-activities-zealver-clubs",
      "understanding-stress",
      "music-memory-and-mood",
      "10-essentials-healthy-aging-social-clubs",
    ],
    relatedGuides: ["five-things-you-can-do-for-stress-guide", "dementia-engagement-guide"],
  },
  {
    slug: "acid-reflux-guide",
    title: "Acidity and reflux: settling it",
    meta: "5-step guide",
    intro:
      "Everyday changes to when and how you eat that settle reflux, and the signs that mean you should see your doctor rather than manage it yourself.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Eat smaller, and earlier",
        text: "Two changes do most of the work here. Smaller meals put less pressure on the valve at the top of the stomach, so three modest meals sit better than one large one. And leave three to four hours between your last meal and lying down, which usually means moving dinner earlier rather than eating less at it. Some people also find starting the meal with protein, then vegetables, and leaving the rice or roti until later sits more comfortably. Carrying less weight around the middle takes real pressure off too.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 2,
        heading: "Stay upright after eating",
        text: "Gravity is doing useful work while you are upright. Avoid lying down or reclining for a couple of hours after a meal, and skip the after-dinner nap. A gentle walk instead helps digestion, though save anything vigorous for later. Stay well hydrated across the day, but if large drinks with meals make things worse, take most of your fluid between meals instead. If you smoke, stopping helps reflux as much as it helps everything else.",
        topicSlug: "movement-and-blood-sugar",
        topicLabel: "Movement & blood sugar",
      },
      {
        n: 3,
        heading: "Find your own triggers",
        text: "Triggers differ from person to person, so a general list is less useful than your own. Common ones are deep-fried and very oily food, heavy chilli, tomato, citrus, chocolate, mint, coffee, fizzy drinks and alcohol. Keep a simple food and symptom diary for a fortnight and the pattern usually shows itself. Do not cut out more than you need to. One thing worth saying plainly: a food allergy panel is not the way to find reflux triggers. Most triggers are sensitivities rather than allergies, those panels are not recommended for this, and they tend to produce a long list of foods to avoid for no good reason. A diary costs nothing and tells you more.",
        topicSlug: "anti-inflammatory-swaps-indian-kitchen",
        topicLabel: "Anti-inflammatory swaps for an Indian kitchen",
      },
      {
        n: 4,
        heading: "Raise the head of the bed",
        text: "For reflux that troubles you at night, raising the head end of the bed by six inches, with blocks under the legs rather than extra pillows, works better than most things. Extra pillows bend you at the waist, which can make it worse. Lying on your left side helps some people too.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
      {
        n: 5,
        heading: "Know what is not ordinary heartburn",
        text: "Most reflux is a nuisance rather than a danger, but some things should be seen rather than managed. Difficulty or pain on swallowing, food sticking, vomiting blood, black stools, unexplained weight loss, or symptoms that are new and persistent after 50 all warrant a doctor. So does needing antacids most days. Chest pain with breathlessness or sweating is an emergency, not reflux until proven otherwise.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
    ],
    topics: [
      "nutrition-basics",
      "movement-and-blood-sugar",
      "anti-inflammatory-swaps-indian-kitchen",
      "sleep-and-recovery",
      "understanding-stress",
    ],
    relatedGuides: ["anti-inflammatory-diet-guide"],
  },
  {
    slug: "bladder-leaks-and-pelvic-floor-guide",
    title: "Bladder leaks and pelvic floor exercises",
    meta: "5-step guide",
    intro:
      "Leaking when you cough, laugh or hurry to the loo is common after 60 and very often improvable. How to do pelvic floor exercises properly, and why they work.",
    image: "/images/class-seated-dance.jpg",
    steps: [
      {
        n: 1,
        heading: "Know that common does not mean normal, or permanent",
        text: "A great many women leak a little and almost none of them mention it, which is why it goes untreated for years. It is not an inevitable part of getting older and it is not something to simply live with. Pelvic floor training helps most women who do it properly and keep it up, and it is free.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Find the right muscles first",
        text: "This is the step most people skip and it is the one that decides whether any of it works. The muscles you want are the ones you would use to stop yourself passing wind, or to stop the flow of urine midstream. Use that only as a way to identify them, never as the exercise itself, which can cause problems. Your stomach, thighs and buttocks should stay relaxed, and nobody should be able to tell you are doing it.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 3,
        heading: "Do them properly, twice a day",
        text: "Two kinds, in one short session. Slow: squeeze, lift and hold for up to ten seconds, then rest for the same, ten times. Fast: squeeze and release quickly, ten times. Breathe normally throughout. Twice a day is plenty, it takes a few minutes, and you can do it sitting in a chair with nobody knowing.",
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 4,
        heading: "Give it three months",
        text: "This is a muscle like any other, and muscles take time. Most women notice a difference at around six to twelve weeks, and stopping means losing it again, so it works best as something permanent rather than a course. Tie it to something you already do daily, which is what makes it stick.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
      {
        n: 5,
        heading: "Do not drink less, and do ask for help",
        text: "Cutting down on fluid is the common instinct and it backfires: concentrated urine irritates the bladder and makes urgency worse. Keep drinking normally and ease back on caffeine and fizzy drinks instead. And do raise it with your doctor. There are several different causes, some straightforward to treat, and a women's health physiotherapist can check you are exercising correctly, which makes a large difference.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "movement-healthy-aging",
      "chair-dance-for-bone-and-muscle",
      "10-essentials-healthy-aging-social-clubs",
      "nutrition-basics",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide"],
  },
  {
    slug: "grief-and-loss-guide",
    title: "Grief: living through the loss of a partner",
    meta: "5-step guide",
    intro:
      "There is no fixing grief and nothing here tries to. Some gentle, practical things that help in the months and years after losing a spouse.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Let grief take the shape it takes",
        text: "There are no stages to work through in order and no timetable you are behind on. Grief comes in waves, often unannounced, and a good week followed by a terrible one is ordinary rather than a setback. Anniversaries, festivals and small domestic moments catch people hardest. None of this means you are doing it wrong.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
      {
        n: 2,
        heading: "Hold on to the ordinary shape of a day",
        text: "When the person who structured your days is gone, the days lose their edges, and that is its own kind of exhaustion. Getting up at a set time, eating proper meals and going out once a day sound trivial and are not. A small fixed rhythm gives you something to stand on while everything else moves.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
      {
        n: 3,
        heading: "Eat and move, even without appetite",
        text: "Appetite often disappears and cooking for one can feel pointless. Eat something anyway, simply and regularly, because being undernourished makes everything else harder to bear. Gentle movement helps mood in a way that is genuinely physical, not a matter of cheering up, and a walk with somebody counts twice.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 4,
        heading: "Let people in, even when you would rather not",
        text: "Widowhood is the single biggest cause of loneliness in later life, and the instinct to withdraw is strongest exactly when company helps most. You do not have to talk about it to benefit from being among people. A regular group with familiar faces asks very little of you and gives back more than an occasional visit does.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Know when grief has become something else",
        text: "Grief and depression overlap and are not the same. If months on you feel stuck rather than gradually changing, cannot function day to day, are drinking more, feel no pleasure in anything at all, or have thoughts of not wanting to be here, that needs a doctor, and asking is not weakness or disloyalty. Bereavement counselling exists and it helps. This page is companionship, not treatment.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "Worry: a four-step pause when your mind will not stop",
      },
    ],
    topics: [
      "understanding-stress",
      "sleep-and-recovery",
      "movement-healthy-aging",
      "meaning-belonging-healthy-aging",
      "stop-breathe-notice-choose",
    ],
    relatedGuides: ["friendship-later-in-life-guide", "loneliness-guide"],
  },
  {
    slug: "low-mood-and-worry-guide",
    title: "Low mood and worry: what helps day to day",
    meta: "5-step guide",
    intro:
      "Everyday habits that support mood and ease worry, and clear pointers on when to stop managing alone and speak to your doctor.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Move, because it works on mood physically",
        text: "Of everything on this list, regular gentle movement has the most reliable effect on mood, and it is not a matter of distraction or cheering up. It changes how you feel through the body. It does not need to be strenuous: a daily walk, a chair-based session, anything you will actually keep doing.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 2,
        heading: "Protect sleep first",
        text: "Poor sleep worsens mood and worry, and low mood wrecks sleep, which is a circle that tightens quickly. Regular sleep and waking times, morning daylight, and a calm last hour without television do more than people expect. Alcohol and late caffeine both look like they help and do not.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
      {
        n: 3,
        heading: "Interrupt the circling",
        text: "Worry loops: the same thought comes round heavier each time without anything new being added. Stop, take four or five slow breaths with a longer breath out, name what is actually going round, then ask whether you can do something about it right now. If yes, one small thing. If no, you may set it down for the moment.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "Worry: a four-step pause when your mind will not stop",
      },
      {
        n: 4,
        heading: "Keep company in the diary, not in intention",
        text: "Low mood tells you to cancel, and cancelling makes it worse, which is why this needs to be arranged rather than left to how you feel on the day. Something regular, with familiar faces, that does not depend on being good company. Turning up is the whole of it.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Ask for help sooner than you think you should",
        text: "Please treat this as the most important step. Low mood that lasts more than two weeks, worry you cannot switch off, losing interest in everything, not eating or sleeping, or any thought of harming yourself or not wanting to be here, all need a doctor rather than a website. Depression and anxiety are common, treatable, and not a weakness of character. Nothing here is treatment for either. If you are in crisis, tell your doctor today, or ask someone you trust to take you to the nearest hospital. Please do not sit with it alone.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
    ],
    topics: [
      "movement-healthy-aging",
      "sleep-and-recovery",
      "stop-breathe-notice-choose",
      "meaning-belonging-healthy-aging",
      "understanding-stress",
    ],
    relatedGuides: ["five-things-you-can-do-for-stress-guide", "loneliness-guide"],
  },
  {
    slug: "loneliness-guide",
    title: "Loneliness and being on your own",
    meta: "5-step guide",
    intro:
      "Loneliness is a health matter, not a character flaw. What it does, why it creeps up after 60, and the things that genuinely shift it.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Take it as seriously as a physical symptom",
        text: "Persistent loneliness affects health in ways comparable to well-known physical risks, and it is associated with poorer sleep, low mood, and worse outcomes across the board. Naming it as a health matter rather than a private embarrassment is the first useful thing. There is also a finding worth knowing, because of what it does to the shame: brain imaging work has shown that a spell of social isolation produces activity strikingly like the craving you feel when hungry. Wanting company appears to be wired in as a signal, much as hunger and thirst are. Feeling lonely is not a failure of character or a sign you are poor company. It is a body asking for something it needs.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 2,
        heading: "Know that alone and lonely are different",
        text: "People can be content on their own and painfully lonely in a full house. What matters is not how many people are nearby but whether you feel known by any of them. That distinction matters, because the fix is rarely more company in general; it is a few connections with some depth.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
      {
        n: 3,
        heading: "Understand why it crept up",
        text: "It is usually circumstance rather than anything you did. Retirement removes daily contact, children move away, friends die or become unwell, driving or mobility narrows, and widowhood removes the person you spoke to most. Several of those often arrive close together. Seeing it as circumstantial makes it far easier to address.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
      {
        n: 4,
        heading: "Choose something regular over something big",
        text: "One weekly thing with the same faces beats an occasional large gathering every time, because familiarity is what turns contact into connection. It also asks less of you on a bad day, since turning up is enough and nobody expects you to perform. This is precisely what a neighbourhood club is for.",
        topicSlug: "monthly-activities-zealver-clubs",
        topicLabel: "Activities at Zealver Clubs",
      },
      {
        n: 5,
        heading: "Have something to offer, not only to attend",
        text: "The strongest antidote is being needed rather than merely included. Teaching something, welcoming a newcomer, keeping the tea going, checking on someone who missed a week. Being useful to other people does more for loneliness than being entertained by them. If low mood persists alongside it, speak to your doctor as well.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
    ],
    topics: [
      "meaning-belonging-healthy-aging",
      "understanding-stress",
      "sleep-and-recovery",
      "monthly-activities-zealver-clubs",
      "10-essentials-healthy-aging-social-clubs",
    ],
    relatedGuides: ["friendship-later-in-life-guide", "grief-and-loss-guide"],
  },
  {
    slug: "staying-active-through-cancer-treatment-guide",
    title: "Cancer: staying active and connected through treatment",
    meta: "5-step guide",
    intro:
      "Movement and company during and after treatment for breast or other cancers. About living alongside treatment, not about the treatment itself.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Ask your team what is right for you",
        text: "This is the first step because it has to be. What is safe depends entirely on your treatment, your blood counts, any surgery and your own recovery, and only your oncology team can tell you. Ask them specifically what movement they recommend and what to avoid. Everything below assumes you have had that conversation.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Move gently, even when tired",
        text: "The instinct during treatment is to rest completely, and complete rest tends to deepen fatigue rather than relieve it. Gentle activity, within what your team has agreed, usually helps energy, appetite, sleep and mood. Little and often, stopping well before exhaustion, and nothing on the days your body says no.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 3,
        heading: "Hold on to muscle where you can",
        text: "Treatment and inactivity both cost muscle, and muscle is what carries you through recovery and back into ordinary life. Gentle, light resistance work, if your team agrees it is safe, protects more than strength: it protects independence. After surgery involving the arm or chest, follow the specific exercises your physiotherapist gives you rather than general advice.",
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 4,
        heading: "Do not disappear from company",
        text: "People often withdraw during treatment, from tiredness, from appearance, from not wanting to be the ill one in the room. Company helps, and a group where nothing is expected of you is easier than seeing people one at a time. Turning up occasionally and sitting out most of it is entirely fine.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Look after mood and sleep too",
        text: "Anxiety, low mood and broken sleep are common alongside treatment and are worth raising rather than enduring, both with your team and with your own doctor. Ask what support is available: many cancer services have counselling and support groups, and using them is sensible rather than self-indulgent. Nothing on this page is medical advice or guidance on treatment.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "movement-healthy-aging",
      "chair-dance-for-bone-and-muscle",
      "meaning-belonging-healthy-aging",
      "sleep-and-recovery",
    ],
    relatedGuides: ["low-mood-and-worry-guide", "loneliness-guide"],
  },
  {
    slug: "eyes-and-eyesight-guide",
    title: "Eyes: looking after your sight",
    meta: "5-step guide",
    intro:
      "Sight loss is not simply inconvenient. It costs you falls, confidence and company, and a great deal of it is correctable.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Have your eyes tested, whether or not they seem fine",
        text: "Most sight loss after 60 comes on so gradually that you adapt without noticing. A test every year or two catches cataracts, glaucoma and macular changes while something can still be done, and many of these have no symptoms at all in the early stages.",
        topicSlug: "fall-prevention",
        topicLabel: "Fall prevention",
      },
      {
        n: 2,
        heading: "Understand what poor sight costs you beyond seeing",
        text: "Falls, largely. Also withdrawal: if you cannot read faces across a room or follow what is on a page, you stop going. Vision loss is on the list of dementia risk factors for exactly that reason, and correcting it is one of the more fixable things on that list.",
        topicSlug: "dementia-what-it-is-and-lowering-risk",
        topicLabel: "Dementia: what it is, and what lowers the risk",
      },
      {
        n: 3,
        heading: "Get the light right at home",
        text: "Older eyes need considerably more light than younger ones, and most homes are lit for someone of thirty. Brighter bulbs on stairs, a lamp by your chair, a light on the route to the bathroom at night. This is cheap and it prevents falls.",
        topicSlug: "home-safety-checklist",
        topicLabel: "Home safety checklist",
      },
      {
        n: 4,
        heading: "Wear the right glasses for the job",
        text: "Varifocals and bifocals distort the ground at the edge of your vision, which matters going down stairs or over a kerb. Many people do better with a separate distance pair for walking outdoors. If you have had a fall, mention your glasses to your optician.",
        topicSlug: "footwear-and-mobility",
        topicLabel: "Footwear & mobility",
      },
      {
        n: 5,
        heading: "Look after the eyes from the inside too",
        text: "Blood pressure and blood sugar both damage the small vessels at the back of the eye, often before you notice anything. Keeping both in hand is eye care. So is not smoking, and eating plenty of colourful vegetables.",
        topicSlug: "blood-pressure-in-women",
        topicLabel: "Blood pressure in women, and why it changes after 55",
      },
    ],
    topics: [
      "fall-prevention",
      "dementia-what-it-is-and-lowering-risk",
      "home-safety-checklist",
      "footwear-and-mobility",
      "blood-pressure-in-women",
    ],
    relatedGuides: ["fall-prevention-guide", "blood-pressure-guide"],
  },
  {
    slug: "hearing-guide",
    title: "Hearing: why it matters more than you think",
    meta: "5-step guide",
    intro:
      "Straining to follow conversation withdraws you from company and understimulates the brain. Untreated hearing loss is one of the largest preventable risks for dementia.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Notice the signs, since you will not hear them going",
        text: "Hearing fades so slowly that other people usually notice first. Turning the television up, asking people to repeat themselves, finding restaurants and group conversation exhausting, missing the doorbell. If your family has mentioned it more than once, they are probably right.",
        topicSlug: "memory-cognitive-health-seniors",
        topicLabel: "Memory and cognition: how social clubs help",
      },
      {
        n: 2,
        heading: "Take it seriously as brain care, not just convenience",
        text: "This is the part nobody is told. Untreated hearing loss is among the larger modifiable risk factors for dementia. The brain that cannot hear properly is both understimulated and working hard to fill gaps, and the person attached to it slowly stops going out.",
        topicSlug: "dementia-what-it-is-and-lowering-risk",
        topicLabel: "Dementia: what it is, and what lowers the risk",
      },
      {
        n: 3,
        heading: "Get tested, and do not wait years",
        text: "People delay hearing aids for a decade on average, usually out of vanity or a sense that it is not bad enough yet. The brain adapts better to aids the earlier they come, so waiting makes the eventual adjustment harder rather than easier.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
      {
        n: 4,
        heading: "Make conversation easier while you are at it",
        text: "Face the person speaking. Ask for the television or music to go down rather than struggling on. In a group, sit with your back to the wall and the room in front of you. None of this is defeat; it is arranging things so you can take part.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Keep going out, especially if it has become harder",
        text: "The instinct with poor hearing is to stop attending things, and that is the outcome worth avoiding above all. Smaller groups, quieter rooms and familiar faces are all easier than a crowded hall, which is one of the arguments for a regular small club.",
        topicSlug: "monthly-activities-zealver-clubs",
        topicLabel: "Activities at Zealver Clubs",
      },
    ],
    topics: [
      "dementia-what-it-is-and-lowering-risk",
      "memory-cognitive-health-seniors",
      "meaning-belonging-healthy-aging",
      "monthly-activities-zealver-clubs",
      "10-essentials-healthy-aging-social-clubs",
    ],
    relatedGuides: ["dementia-engagement-guide", "loneliness-guide"],
  },
  {
    slug: "independence-at-home-guide",
    title: "Independence: staying in your own home safely",
    meta: "5-step guide",
    intro:
      "What actually decides whether someone keeps living independently, and the small changes that buy years of it.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Know what independence really rests on",
        text: "Not willpower. It rests on a handful of specific abilities: getting out of a chair and off the toilet, managing stairs, walking to the gate, carrying something while walking, and getting up again if you go down. Each of those can be practised.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Protect the one that matters most",
        text: "Rising from a chair without using your hands is the single ability most predictive of staying independent. Practise it deliberately: sit to stand a few times, slowly, most days. It is dull and it is the most valuable thing on this page.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
      {
        n: 3,
        heading: "Fix the house before it fixes you",
        text: "Clear floors, good light on stairs and the night route, a rail where you pull yourself up, non-slip in the bathroom, and everyday things within reach so you are not stretching or climbing. One change a week is enough.",
        topicSlug: "home-safety-checklist",
        topicLabel: "Home safety checklist",
      },
      {
        n: 4,
        heading: "Do not let help quietly take your abilities away",
        text: "Families take over tasks out of love, and the ability goes with the task. If somebody else now carries the shopping, opens the jars and manages the money, those capacities fade. Keep doing what you can still do, and say so kindly when help goes too far.",
        topicSlug: "what-makes-life-worth-living-after-60",
        topicLabel: "Purpose, belonging and what makes life worth living after 60",
      },
      {
        n: 5,
        heading: "Plan while you are well, not during a crisis",
        text: "The hardest decisions get made in hospital corridors after a fall. Talk about what you would want, what would need changing, and who would do what, at a time when nothing is wrong. It is a far better conversation then.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "chair-dance-fitness-benefits",
      "home-safety-checklist",
      "what-makes-life-worth-living-after-60",
      "meaning-belonging-healthy-aging",
    ],
    relatedGuides: ["fall-prevention-guide", "stay-strong-after-menopause-guide"],
  },
  {
    slug: "joint-replacement-guide",
    title: "Joint replacement: before and after a new knee or hip",
    meta: "5-step guide",
    intro:
      "What to do in the months before surgery, and what recovery actually asks of you afterwards.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Get stronger before, not just after",
        text: "This is the step most people miss and it changes everything. The stronger your legs going in, the faster and better you come out, because recovery is largely about rebuilding what you already had. Weeks of sit-to-stands and gentle strength work before surgery are worth more than the same work afterwards.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Sort the house out in advance",
        text: "You will not want to be arranging things on crutches. Clear the floors, move what you need to waist height, sort the bathroom rails, decide where you will sleep if stairs are a problem, and arrange who is helping in the first fortnight.",
        topicSlug: "home-safety-checklist",
        topicLabel: "Home safety checklist",
      },
      {
        n: 3,
        heading: "Follow the physiotherapy exactly, especially when it hurts",
        text: "The exercises you are given in the first weeks decide your range of movement for years. They are uncomfortable and they are not optional. Do the prescribed ones rather than substituting anything you read elsewhere, including on this page.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 4,
        heading: "Expect the mood dip and plan company for it",
        text: "Weeks of limited movement, disturbed sleep and dependence flatten most people, and nobody warns them. Arrange visitors, phone calls and something to look forward to. Getting back among people as soon as you safely can is part of the recovery, not a reward for it.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Come back to activity gradually, and keep going",
        text: "A new joint is an opportunity, not a repair that finishes. Seated and supported movement is usually possible early, with your surgeon's agreement, and building strength around the new joint is what makes it last and keeps the other one from following it.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "home-safety-checklist",
      "movement-healthy-aging",
      "meaning-belonging-healthy-aging",
      "chair-dance-fitness-benefits",
    ],
    relatedGuides: ["arthritis-and-joint-comfort-guide", "stay-strong-after-menopause-guide"],
  },
  {
    slug: "knee-pain-guide",
    title: "Knees: easing pain and keeping them working",
    meta: "5-step guide",
    intro:
      "Sore knees are the commonest reason women stop moving, and stopping is what makes them worse.",
    image: "/images/class-seated-dance.jpg",
    steps: [
      {
        n: 1,
        heading: "Strengthen the thigh, because the knee cannot help itself",
        text: "The muscle at the front of the thigh takes load the knee would otherwise carry, and it is usually the weakest thing about a painful knee. Straightening the leg against gravity while seated, held for a few seconds, is the single most useful exercise there is.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Keep it moving through its range",
        text: "Cartilage has no blood supply and depends on movement to stay nourished, so a knee that is rested completely stiffens and hurts more. Seated bending and straightening, ankle circles and gentle marching keep it fed without loading it.",
        topicSlug: "arthritis-three-kinds",
        topicLabel: "Arthritis: the three common kinds, and telling them apart",
      },
      {
        n: 3,
        heading: "Take weight off it where you can",
        text: "Leverage is unforgiving here. Every extra kilogram you carry puts roughly three to four kilograms through the knee at each step, so losing five to ten per cent makes a real difference to pain. Good shoes with cushioning help too.",
        topicSlug: "metabolism-and-the-weighing-scale",
        topicLabel: "Metabolism: why the weighing scale is the wrong measure",
      },
      {
        n: 4,
        heading: "Sit and stand in ways that ask less of it",
        text: "A higher chair is far easier than a low soft one. Rise by shuffling forward, leaning your nose over your toes and pushing up through your legs. Going downstairs leads with the sore leg; going up leads with the good one.",
        topicSlug: "footwear-and-mobility",
        topicLabel: "Footwear & mobility",
      },
      {
        n: 5,
        heading: "Know when it is not ordinary wear",
        text: "See a doctor if the knee is hot and red, suddenly very swollen, gives way under you, locks, or if pain wakes you regularly at night. Those suggest something other than everyday arthritis and are treated differently.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "arthritis-three-kinds",
      "metabolism-and-the-weighing-scale",
      "footwear-and-mobility",
      "chair-dance-fitness-benefits",
    ],
    relatedGuides: ["arthritis-and-joint-comfort-guide", "joint-replacement-guide"],
  },
  {
    slug: "menopause-guide",
    title: "Menopause and the years after it",
    meta: "5-step guide",
    intro:
      "What changes, what it means for bone, heart, sleep and mood, and what actually helps. Not only about hot flushes.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Understand what oestrogen was doing",
        text: "It was not only about periods. Oestrogen helped keep bone being rebuilt, blood vessels flexible, and a good deal else steady. When it falls, bone is lost faster, arteries stiffen, fat shifts to the middle, the body handles sugar less well and salt matters more.",
        topicSlug: "bone-health-after-menopause",
        topicLabel: "Bone health after menopause",
      },
      {
        n: 2,
        heading: "Protect bone from the start, not after a fracture",
        text: "The years around and after menopause are when bone is lost fastest, and that is exactly when most women are not thinking about it. Weight-bearing movement, strength work, enough protein and calcium-rich food. This is the most time-sensitive thing on the list.",
        topicSlug: "bones-that-matter-most",
        topicLabel: "Bones to protect after 60, and why these five",
      },
      {
        n: 3,
        heading: "Take the heart seriously now",
        text: "Cardiovascular risk in women rises after menopause and is consistently underestimated, by women and sometimes by their doctors. Blood pressure, cholesterol and blood sugar all deserve checking from here on, and knowing how a heart attack presents in women is worth an afternoon.",
        topicSlug: "blood-pressure-in-women",
        topicLabel: "Blood pressure in women, and why it changes after 55",
      },
      {
        n: 4,
        heading: "Treat sleep and mood as real, not as weakness",
        text: "Broken sleep, low mood, anxiety and a mind that will not settle are common through this and afterwards, and they are not something to simply endure. Sleep that does not improve, or low mood lasting weeks, is worth taking to a doctor.",
        topicSlug: "which-kind-of-poor-sleeper",
        topicLabel: "Sleep: which kind of poor sleeper are you?",
      },
      {
        n: 5,
        heading: "Build muscle, because it changes everything else",
        text: "Muscle is lost faster from here, and it is the lever on bone, blood sugar, balance and independence at once. Strength work two or three times a week, protein at every meal. Ask your doctor about hormone therapy and anything else if symptoms are affecting your life; that conversation is worth having rather than assuming you must cope.",
        topicSlug: "muscle-as-your-bodys-engine",
        topicLabel: "Muscle as your body's engine, not just for moving",
      },
    ],
    topics: [
      "bone-health-after-menopause",
      "bones-that-matter-most",
      "blood-pressure-in-women",
      "which-kind-of-poor-sleeper",
      "muscle-as-your-bodys-engine",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide", "blood-pressure-guide"],
  },
  {
    slug: "neck-and-shoulder-guide",
    title: "Neck and shoulders: easing stiffness and pain",
    meta: "4-step guide",
    intro:
      "Most neck and shoulder trouble after 60 comes from posture, tension and disuse rather than damage, and responds well to gentle movement.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Move them daily, gently and through their full range",
        text: "Shoulders lose range faster than almost any other joint, mostly because we stop reaching overhead. Slow shoulder rolls, reaching up and out, and turning the head unhurriedly from side to side. A few minutes daily beats a long session weekly.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
      {
        n: 2,
        heading: "Look at where you sit and what you look at",
        text: "A head held forward for hours, a phone in your lap, a chair with no support, a pillow too high or too flat. Bring the screen to eye level, support the lower back, and change position every half hour rather than holding one for the evening.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
      {
        n: 3,
        heading: "Treat tension as part of it",
        text: "Shoulders creep up towards the ears under stress and stay there without being noticed. A few slow breaths with a longer breath out, and a deliberate drop of the shoulders, several times a day. The neck often holds what the mind is carrying.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "Worry: a four-step pause when your mind will not stop",
      },
      {
        n: 4,
        heading: "Know what should be looked at",
        text: "See a doctor for pain going down the arm with numbness, tingling or weakness, pain after a fall, a shoulder you genuinely cannot lift, neck pain with fever or unexplained weight loss, or any pain that keeps waking you.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
    ],
    topics: [
      "chair-dance-fitness-benefits",
      "sleep-and-recovery",
      "stop-breathe-notice-choose",
      "muscle-strength-and-ageing",
    ],
    relatedGuides: ["arthritis-and-joint-comfort-guide", "posture-and-back-guide"],
  },
  {
    slug: "oral-health-guide",
    title: "Oral health: teeth, gums and why they matter elsewhere",
    meta: "4-step guide",
    intro:
      "Gum disease is common, largely silent, and linked to heart disease and dementia. It is also one of the most neglected parts of ageing well.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Take gums as seriously as teeth",
        text: "Bleeding when you brush is not normal and is not something to brush more gently around. Gum disease is common after 60, usually painless until late, and it is the main reason teeth are lost. Bleeding, receding gums, persistent bad breath or loose teeth all warrant a dentist.",
        topicSlug: "anti-inflammatory-basics",
        topicLabel: "Anti-inflammatory basics",
      },
      {
        n: 2,
        heading: "Know why it reaches beyond your mouth",
        text: "Gum disease is a long-running low-grade infection, and chronic inflammation of that kind is associated with heart disease and with dementia risk. Looking after your gums is not vanity; it is part of the same inflammation story as diet and movement.",
        topicSlug: "dementia-what-it-is-and-lowering-risk",
        topicLabel: "Dementia: what it is, and what lowers the risk",
      },
      {
        n: 3,
        heading: "Deal with a dry mouth, which most people ignore",
        text: "Many common medicines reduce saliva, and saliva is what protects teeth. A dry mouth means more decay, sore gums and difficulty with dentures. Sip water through the day, and ask your doctor or pharmacist whether anything you take is the cause.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 4,
        heading: "Make sure you can still chew what you need to eat",
        text: "This is the part that links back to everything else. Painful teeth or poorly fitting dentures quietly push people towards soft, sweet, low-protein food, and that costs muscle. If eating has become difficult, that is a reason to see a dentist rather than to change what you eat.",
        topicSlug: "muscle-as-your-bodys-engine",
        topicLabel: "Muscle as your body's engine, not just for moving",
      },
    ],
    topics: [
      "anti-inflammatory-basics",
      "dementia-what-it-is-and-lowering-risk",
      "nutrition-basics",
      "muscle-as-your-bodys-engine",
    ],
    relatedGuides: ["anti-inflammatory-diet-guide", "dementia-engagement-guide"],
  },
  {
    slug: "posture-and-back-guide",
    title: "Posture and back pain: standing taller, hurting less",
    meta: "4-step guide",
    intro:
      "A rounding back is not simply how you are made now. Much of it is muscle, habit and disuse, and much of it improves.",
    image: "/images/class-seated-dance.jpg",
    steps: [
      {
        n: 1,
        heading: "Know what is habit and what is bone",
        text: "Some rounding of the upper back comes from vertebrae that have compressed, which is a bone matter. A great deal of it is simply weak back muscles and years of sitting forward, and that part genuinely improves with work. If you have lost noticeable height, mention it to your doctor.",
        topicSlug: "bone-health-after-menopause",
        topicLabel: "Bone health after menopause",
      },
      {
        n: 2,
        heading: "Strengthen the back, not just stretch the front",
        text: "Most posture advice is about stretching, and what actually holds you upright is muscle. Squeezing the shoulder blades together, lifting the breastbone, gently pressing the back of the head towards a wall. Little and often, every day.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 3,
        heading: "Set up your chair, your bed and your kitchen",
        text: "Feet flat, hips slightly above knees, lower back supported by a cushion if the chair does not. Work surfaces at a height you do not stoop to. A mattress and pillow that keep your neck in line with your spine. Small, permanent changes beat willpower.",
        topicSlug: "home-safety-checklist",
        topicLabel: "Home safety checklist",
      },
      {
        n: 4,
        heading: "Keep moving, because backs hate stillness",
        text: "Bed rest for back pain went out decades ago and it makes most backs worse. Gentle, regular movement within comfort is the treatment. See a doctor for pain after a fall, pain with numbness or weakness in the legs, any loss of bladder or bowel control, or pain with fever or weight loss.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
    ],
    topics: [
      "bone-health-after-menopause",
      "muscle-strength-and-ageing",
      "home-safety-checklist",
      "movement-healthy-aging",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide", "neck-and-shoulder-guide"],
  },
  {
    slug: "questions-for-your-doctor-guide",
    title: "Questions to ask your doctor, and how to be heard",
    meta: "5-step guide",
    intro:
      "Ten minutes goes quickly and older women are listened to less than they should be. How to get what you need from an appointment.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Write three things down before you go",
        text: "Not ten. Three, in order of what worries you most, on paper you can hand over. Appointments run short and the thing you were most anxious about is frequently the one raised at the door, when there is no time left for it.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
      {
        n: 2,
        heading: "Say the frightening thing first",
        text: "Doctors work from what you lead with. If the real worry is that this might be serious, say so at the start rather than circling it. Being direct is not being difficult, and it gets you a better ten minutes.",
        topicSlug: "understanding-stress",
        topicLabel: "Stress: what it is, and why not all of it is bad",
      },
      {
        n: 3,
        heading: "Refuse being told it is just your age",
        text: "A great deal that gets attributed to ageing is treatable: exhaustion, low mood, breathlessness, pain, sleeping badly, memory changes. Common at 70 is not the same as normal at 70. It is entirely reasonable to ask what else could be causing this.",
        topicSlug: "which-kind-of-poor-sleeper",
        topicLabel: "Sleep: which kind of poor sleeper are you?",
      },
      {
        n: 4,
        heading: "Ask four questions about anything proposed",
        text: "What is this for. What happens if I do nothing. What are the side effects. And how will we know whether it is working. Those four apply to a tablet, a scan or an operation, and they turn being treated into taking part.",
        topicSlug: "blood-pressure-in-women",
        topicLabel: "Blood pressure in women, and why it changes after 55",
      },
      {
        n: 5,
        heading: "Bring the list and a second pair of ears",
        text: "Take a current list of everything you take, including anything bought without a prescription. Take somebody with you for anything significant, because two people remember more than one. And ask for it written down if you are not sure you have followed it.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
    ],
    topics: [
      "10-essentials-healthy-aging-social-clubs",
      "understanding-stress",
      "which-kind-of-poor-sleeper",
      "blood-pressure-in-women",
      "meaning-belonging-healthy-aging",
    ],
    relatedGuides: ["low-mood-and-worry-guide", "blood-pressure-guide"],
  },
  {
    slug: "recovering-after-illness-guide",
    title: "Recovering after illness or a hospital stay",
    meta: "5-step guide",
    intro:
      "A week in bed costs more strength at 70 than most people expect, and the weeks afterwards decide how much of it comes back.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Understand what the bed rest actually cost",
        text: "Muscle is lost strikingly fast when it is not used, and far faster at 70 than at 40. A week or two in bed can take strength that took months to build, which is why some people never quite return to how they were. Knowing that is the reason to start early.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Start moving sooner than feels natural",
        text: "Within whatever your doctor has agreed, begin gently and early rather than waiting to feel ready. Sitting up, standing, walking to the next room. Waiting until you feel strong enough is the trap, because strength returns through use, not through rest.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 3,
        heading: "Eat properly, especially protein",
        text: "Appetite disappears after illness exactly when your body most needs building material. Small, frequent and protein-containing beats waiting for hunger: curd, dal, eggs, paneer, milk. Under-eating now is what turns a short illness into a long decline.",
        topicSlug: "eating-before-and-after-exercise",
        topicLabel: "Eating before and after a class",
      },
      {
        n: 4,
        heading: "Expect to feel low, and do not sit with it alone",
        text: "Illness, disrupted sleep and sudden dependence flatten people, and it is rarely mentioned on the way out of hospital. Company helps genuinely. So does a small daily routine, and something in the diary to return to.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
      {
        n: 5,
        heading: "Rebuild deliberately rather than drifting",
        text: "Recovery does not happen by waiting; it happens by asking a little more of yourself each week. Sit-to-stands, a slightly longer walk, getting back to your class as soon as it is safe. Tell whoever leads it what you have been through so they can adjust.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "movement-healthy-aging",
      "eating-before-and-after-exercise",
      "meaning-belonging-healthy-aging",
      "chair-dance-fitness-benefits",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
  },
  {
    slug: "travel-after-60-guide",
    title: "Travel: going away with confidence after 60",
    meta: "5-step guide",
    intro:
      "Trips get quietly abandoned over worries that are all manageable. What to plan so the holiday happens.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Sort the medicines before anything else",
        text: "Take more than you need in case of delays, keep them in hand luggage in their original boxes, and carry a written list of everything with doses. If you cross time zones, ask your doctor how to space anything that matters, particularly diabetes medication.",
        topicSlug: "diabetes-what-is-happening",
        topicLabel: "Diabetes: what it is, and what is happening in the body",
      },
      {
        n: 2,
        heading: "Keep moving on the journey itself",
        text: "Long sitting is the real risk of travel. Get up and walk every hour or two where you can, and when you cannot, circle the ankles, press the feet down, straighten the knees. Drink water regularly rather than rationing it to avoid the toilet.",
        topicSlug: "movement-and-blood-sugar",
        topicLabel: "Movement & blood sugar",
      },
      {
        n: 3,
        heading: "Ask for the help that already exists",
        text: "Assistance at airports and stations is free, it is not only for wheelchair users, and booking it removes most of what people dread about travelling. Requesting it is not an admission of anything; it is using something that is there.",
        topicSlug: "footwear-and-mobility",
        topicLabel: "Footwear & mobility",
      },
      {
        n: 4,
        heading: "Plan the days at your own pace",
        text: "The trips that go badly are the overpacked ones. One main thing a day, rest in the afternoon, and somewhere sensible to sit. You are not obliged to see everything, and enjoying half of it beats exhausting yourself through all of it.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
      {
        n: 5,
        heading: "Keep the habits that keep you well",
        text: "Sleep and waking times roughly as usual, protein at meals, water, and some movement every day. Holidays are precisely when routines lapse, and a fortnight of none of it is felt on the way home.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    topics: [
      "diabetes-what-is-happening",
      "movement-and-blood-sugar",
      "footwear-and-mobility",
      "10-essentials-healthy-aging-social-clubs",
      "sleep-and-recovery",
    ],
    relatedGuides: ["diabetes-management-guide", "recovering-after-illness-guide"],
  },
  {
    slug: "urine-infections-guide",
    title: "Urine infections: spotting them early in older women",
    meta: "4-step guide",
    intro:
      "Common, easily missed, and in older women they often show up as confusion rather than as anything to do with passing water.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "Know that they often look like something else",
        text: "This is the important one. In older women a urine infection frequently presents as sudden confusion, unsteadiness, a fall, or simply not being herself, with none of the burning or urgency you would expect. Families often assume dementia has worsened overnight. Sudden confusion is a reason to think infection and call a doctor.",
        topicSlug: "dementia-what-it-is-and-lowering-risk",
        topicLabel: "Dementia: what it is, and what lowers the risk",
      },
      {
        n: 2,
        heading: "Know the ordinary signs too",
        text: "Burning or stinging, needing to go far more often, urgency, cloudy or strong-smelling urine, pain low in the abdomen or back. Fever, shivering, back pain or vomiting mean it may have reached the kidneys, which needs seeing the same day.",
        topicSlug: "which-kind-of-poor-sleeper",
        topicLabel: "Sleep: which kind of poor sleeper are you?",
      },
      {
        n: 3,
        heading: "Reduce the chances sensibly",
        text: "Drink enough water through the day rather than cutting back to avoid the toilet, which is the common instinct and makes things worse. Do not hold on for long periods, and empty fully. Wipe front to back. After menopause, dryness makes infections more likely, and that is treatable, so it is worth raising.",
        topicSlug: "nutrition-basics",
        topicLabel: "Nutrition basics",
      },
      {
        n: 4,
        heading: "Get it properly diagnosed rather than guessed",
        text: "Symptoms overlap with other things, and treating without testing leads to antibiotics being used when they are not needed. Ask for a urine test. If you get them repeatedly, that is worth investigating rather than treating again and again.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
    ],
    topics: [
      "dementia-what-it-is-and-lowering-risk",
      "which-kind-of-poor-sleeper",
      "nutrition-basics",
      "muscle-strength-and-ageing",
    ],
    relatedGuides: ["bladder-leaks-and-pelvic-floor-guide", "dementia-engagement-guide"],
  },
  {
    slug: "walking-well-guide",
    title: "Walking well: gait, confidence and getting out",
    meta: "5-step guide",
    intro:
      "How you walk predicts a great deal about how you age. Most of it is trainable, and a stick is not a defeat.",
    image: "/images/class-seated-dance.jpg",
    steps: [
      {
        n: 1,
        heading: "Know that walking speed matters, not just distance",
        text: "How fast you walk is one of the better predictors of health and independence in later life, which sounds odd until you realise it summarises strength, balance, heart, lungs and confidence in one measure. Slowing down is worth noticing rather than accepting.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 2,
        heading: "Build the strength that walking rests on",
        text: "Walking alone does not build much strength, which is why people who walk daily can still struggle out of a chair. Sit-to-stands, heel raises and stepping practice are what make walking easier, and they are best done seated or supported.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
      {
        n: 3,
        heading: "Sort the feet and the shoes",
        text: "A firm non-slip sole, a back that holds the heel, and a fastening you can manage. Indoors as well as out, because slippers cause a great many falls. Painful feet change how you walk and the change travels up to the knees, hips and back, so foot pain is worth treating.",
        topicSlug: "footwear-and-mobility",
        topicLabel: "Footwear & mobility",
      },
      {
        n: 4,
        heading: "Use a stick properly if you need one, without shame",
        text: "A stick that keeps you walking is worth more than pride that keeps you indoors. It must be the right height, wrist crease at the handle when your arm hangs, and held on the opposite side to the sore leg. Wrongly used, it makes things worse, so ask to be shown.",
        topicSlug: "fall-prevention",
        topicLabel: "Fall prevention",
      },
      {
        n: 5,
        heading: "Keep going out, and go with somebody",
        text: "Confidence fades fastest when walking becomes something you only do indoors. A regular walk with company happens far more reliably than one you intend to do alone, and it does something for your mood that the same steps on your own do not.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
    ],
    topics: [
      "muscle-strength-and-ageing",
      "chair-dance-fitness-benefits",
      "footwear-and-mobility",
      "fall-prevention",
      "meaning-belonging-healthy-aging",
    ],
    relatedGuides: ["fall-prevention-guide", "friendship-later-in-life-guide"],
  },
  {
    slug: "yoga-chair-guide",
    title: "Yoga: a chair-based practice for stiffness and calm",
    meta: "4-step guide",
    intro:
      "Chair yoga keeps the breathing, the stretching and the calm, and removes the part that stops people trying it.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Start with the breath, because it is the half people skip",
        text: "Most of what yoga does for stress lives in the breathing rather than the shapes. Sitting tall, breathing in through the nose and out slowly for longer than you breathed in, four or five times. That alone settles the body and can be done anywhere.",
        topicSlug: "stop-breathe-notice-choose",
        topicLabel: "Worry: a four-step pause when your mind will not stop",
      },
      {
        n: 2,
        heading: "Work the joints through their range, gently",
        text: "Neck turns, shoulder rolls, a gentle seated twist holding the chair, forward folds over the thighs, ankle circles, wrists and fingers. Move to where you feel a stretch, never into pain, and let the breath stay easy throughout.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
      {
        n: 3,
        heading: "Add balance work with the chair as your safety net",
        text: "Standing behind the chair with your hands on the back: heel raises, weight shifting, lifting one foot briefly. This is balance training with no real risk of falling, which is the only way most people will practise it.",
        topicSlug: "balance-exercises",
        topicLabel: "Balance exercises for seniors",
      },
      {
        n: 4,
        heading: "Make it regular, and keep the calm at the end",
        text: "Ten unhurried minutes most days does more than an hour on a Sunday. Finish with a few minutes of quiet sitting rather than rushing off, since the settling at the end is a real part of it. If you have glaucoma, recent surgery, or unstable blood pressure, check which positions suit you first.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    topics: [
      "stop-breathe-notice-choose",
      "chair-dance-fitness-benefits",
      "balance-exercises",
      "sleep-and-recovery",
    ],
    relatedGuides: ["five-things-you-can-do-for-stress-guide", "arthritis-and-joint-comfort-guide"],
  },
  {
    slug: "xrays-and-scans-guide",
    title: "X-rays and scans: what they show, and what they miss",
    meta: "4-step guide",
    intro:
      "Why a normal scan does not always mean nothing is wrong, why an abnormal one does not always mean something is, and what to ask.",
    image: "/images/home-experience.jpg",
    steps: [
      {
        n: 1,
        heading: "A normal scan does not always mean no problem",
        text: "This catches people out and it is worth understanding. Plenty of real conditions do not show on imaging. Women in particular may have genuine heart trouble in the very small vessels while a scan of the large ones looks reassuring. If you feel unwell and the picture is clear, that is a reason to keep asking, not to stop.",
        topicSlug: "heart-attack-signs-in-women",
        topicLabel: "Heart attack signs in women, and why they are missed",
      },
      {
        n: 2,
        heading: "An abnormal scan does not always mean trouble",
        text: "The reverse is just as true, and more common. Scan enough backs, knees and shoulders of healthy people over 60 and most of them show wear that causes no symptoms at all. A worrying-sounding report may be describing something you have had painlessly for twenty years.",
        topicSlug: "arthritis-three-kinds",
        topicLabel: "Arthritis: the three common kinds, and telling them apart",
      },
      {
        n: 3,
        heading: "Ask what the scan will change",
        text: "The most useful question before any imaging is what will be done differently depending on the result. If the answer is nothing, the scan may add worry without adding anything else. If the answer is clear, it is worth having.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "Ten essentials of healthy ageing",
      },
      {
        n: 4,
        heading: "Ask for the result in words you can use",
        text: "Reports are written for doctors. Ask what it means for you, whether anything needs doing, and whether anything on it needs watching. Take somebody with you or ask for it written down. And keep your own copies, because they save repeating things later.",
        topicSlug: "bones-that-matter-most",
        topicLabel: "Bones to protect after 60, and why these five",
      },
    ],
    topics: [
      "heart-attack-signs-in-women",
      "arthritis-three-kinds",
      "10-essentials-healthy-aging-social-clubs",
      "bones-that-matter-most",
    ],
    relatedGuides: ["questions-for-your-doctor-guide", "arthritis-and-joint-comfort-guide"],
  },
  {
    slug: "zealver-first-session-guide",
    title: "Zealver Clubs: what to expect at your first session",
    meta: "5-step guide",
    intro:
      "For anyone who has been meaning to come for months and keeps not coming. What actually happens, and what nobody expects of you.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Nobody is watching you, because nobody can",
        text: "The commonest reason women do not come is the fear of being the one who cannot keep up. In a circle everybody is facing everybody and doing the same thing at their own depth, and honestly nobody can tell who is finding it harder. Most people in the room felt exactly as you do on their first day.",
        topicSlug: "chair-dance-fitness-benefits",
        topicLabel: "Chair dance fitness: what it actually does for you",
      },
      {
        n: 2,
        heading: "You can sit down for all of it",
        text: "Sessions are chair-based, so seated is the normal way to take part rather than the concession. Stand if and when you want to, hold the chair whenever you like, and sit out anything at all without explaining yourself. Nobody will ask why.",
        topicSlug: "monthly-activities-zealver-clubs",
        topicLabel: "Activities at Zealver Clubs",
      },
      {
        n: 3,
        heading: "You need no experience, no kit and no fitness",
        text: "There is nothing to learn beforehand. Wear something comfortable and shoes with a back and a non-slip sole rather than slippers. Bring water. That is the whole of the preparation.",
        topicSlug: "footwear-and-mobility",
        topicLabel: "Footwear & mobility",
      },
      {
        n: 4,
        heading: "Tell the host what they should know",
        text: "Anything that affects you: a sore knee, poor balance, a recent operation, a heart condition, diabetes medication, hearing difficulty. Not so you can be excluded, but so the session can be adjusted around you and somebody knows.",
        topicSlug: "eating-before-and-after-exercise",
        topicLabel: "Eating before and after a class",
      },
      {
        n: 5,
        heading: "Come twice before deciding",
        text: "A first session is mostly nerves and unfamiliar faces, and it is a poor sample. By the second or third it is a room you know, and that is when people usually discover they were coming for the company as much as the movement.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Meaning and belonging in healthy ageing",
      },
    ],
    topics: [
      "chair-dance-fitness-benefits",
      "monthly-activities-zealver-clubs",
      "footwear-and-mobility",
      "eating-before-and-after-exercise",
      "meaning-belonging-healthy-aging",
    ],
    relatedGuides: ["friendship-later-in-life-guide", "fall-prevention-guide"],
  },
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string) {
  return guidesBySlug.get(slug) ?? null;
}

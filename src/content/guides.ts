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
    title: "Five things you can do for stress",
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
        topicLabel: "When your mind will not stop: a four-step pause",
      },
      {
        n: 3,
        heading: "Put on an old song",
        text: "Put on a song from your younger years, not something new. The one that was playing when you were twenty, at a wedding, on the radio in your mother's kitchen. Let it play properly rather than in the background.",
        topicSlug: "music-memory-and-mood",
        topicLabel: "Why an old song does so much",
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
        topicLabel: "Understanding stress",
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
    title: "Living well with stiff and painful joints",
    meta: "5-step guide",
    intro:
      "Gentle, practical habits for women 60+ living with arthritis or everyday joint stiffness. Moving well rather than resting more.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Move the joint, gently, most days",
        text: "The instinct with a sore joint is to rest it, and resting it more than a day or two usually makes it worse. Joints are fed by movement: cartilage has no blood supply and relies on gentle use to stay nourished. Small, frequent, comfortable movement beats either pushing through pain or stopping altogether.",
        topicSlug: "movement-healthy-aging",
        topicLabel: "Movement as a community habit",
      },
      {
        n: 2,
        heading: "Start seated, and warm up first",
        text: "A chair takes the load off hips, knees and ankles while still letting you move them through their range. Begin with ankle circles, knee straightening, shoulder rolls and gentle wrist and finger movement. Stiffness is usually worst in the morning, so give yourself a few unhurried minutes before expecting much of your body.",
        topicSlug: "chair-dance-for-bone-and-muscle",
        topicLabel: "Chair dance for bone and muscle",
      },
      {
        n: 3,
        heading: "Build the muscle around the joint",
        text: "Strong muscle takes load off the joint it surrounds, which is why leg strength matters so much for sore knees and hips. Light resistance a couple of days a week, within a comfortable range, does more for joint pain over months than any amount of resting. Stop at discomfort, not at pain.",
        topicSlug: "muscle-strength-and-ageing",
        topicLabel: "Muscle strength and ageing",
      },
      {
        n: 4,
        heading: "Eat in a way that helps rather than hinders",
        text: "No food cures arthritis, and anyone promising that is selling something. What is worth doing is the ordinary pattern: plenty of vegetables and fruit, whole grains, beans and lentils, nuts, oily fish and sensible oils, with less deep-fried and packaged food. Carrying less weight also takes real load off knees and hips.",
        topicSlug: "anti-inflammatory-swaps-indian-kitchen",
        topicLabel: "Anti-inflammatory swaps for an Indian kitchen",
      },
      {
        n: 5,
        heading: "Protect your sleep, and know when to ask",
        text: "Pain disrupts sleep and poor sleep makes pain feel worse, which is a circle worth breaking early. Keep regular sleep times and wind down properly. And see your doctor rather than managing alone if a joint is hot, swollen or suddenly much worse, if pain wakes you nightly, or if stiffness lasts well past the morning.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
      },
    ],
    topics: [
      "movement-healthy-aging",
      "chair-dance-for-bone-and-muscle",
      "muscle-strength-and-ageing",
      "anti-inflammatory-swaps-indian-kitchen",
      "sleep-and-recovery",
    ],
    relatedGuides: ["stay-strong-after-menopause-guide", "anti-inflammatory-diet-guide"],
  },
  {
    slug: "blood-pressure-guide",
    title: "Everyday habits for steadier blood pressure",
    meta: "5-step guide",
    intro:
      "The daily things that help keep blood pressure steady: salt, movement, sleep, stress and weight. Lifestyle guidance, not a substitute for your doctor.",
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
        topicLabel: "When your mind will not stop: a four-step pause",
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
    title: "Eating and moving for healthier cholesterol",
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
    title: "Getting Vitamin D right",
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
    title: "Staying engaged and connected with dementia",
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
        topicLabel: "Why an old song does so much",
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
        topicLabel: "How social clubs strengthen memory and cognition",
      },
      {
        n: 4,
        heading: "Follow their energy on the day",
        text: "Some days will go better than others and that is not a failure of anything. Celebrate joining in rather than getting it right, let them set the pace, and let a quiet day be a quiet day. Correcting someone rarely helps; going along with where they are usually does.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Why meaning and belonging matter in healthy ageing",
      },
      {
        n: 5,
        heading: "Keep the company, and look after the carer",
        text: "Connection is doing as much work here as any activity. Keep them among people rather than apart. And if you are the carer, your own rest, company and support are not an indulgence; they are what makes it possible to keep going. This is a supportive activity approach for wellbeing and connection, not a medical therapy, and care decisions belong with your doctor.",
        topicSlug: "understanding-stress",
        topicLabel: "Understanding stress",
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
    title: "Making friends later in life, and keeping the old ones",
    meta: "5-step guide",
    intro:
      "Friendship is not a luxury at 60+, it is one of the strongest things you can do for your health. How to build it when the old routes have closed.",
    image: "/images/community-celebration.jpg",
    steps: [
      {
        n: 1,
        heading: "Take it as seriously as exercise",
        text: "Loneliness is not simply sad, it affects health in the way that smoking and inactivity do. Social connection supports motivation, self-worth, mood and the will to keep doing everything else on this list. If you would not skip your walk for a month, do not let a month go by without company either.",
        topicSlug: "meaning-belonging-healthy-aging",
        topicLabel: "Why meaning and belonging matter in healthy ageing",
      },
      {
        n: 2,
        heading: "Understand why it got harder",
        text: "It is not you. Work, school gates and neighbourhoods used to supply friends without anyone having to try. Retirement, moving, widowhood and children living elsewhere all remove those routes at once. Friendship after 60 has to be arranged on purpose, and knowing that stops it feeling like a personal failing.",
        topicSlug: "understanding-stress",
        topicLabel: "Understanding stress",
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
        topicLabel: "Why an old song does so much",
      },
      {
        n: 5,
        heading: "Tend the friendships you already have",
        text: "Old friends are easier to keep than new ones are to find, and they usually lapse through drift rather than falling out. A phone call rather than a message, on a day you decide in advance. Say the thing you were going to leave unsaid. Most people are delighted to hear from someone and were simply waiting too.",
        topicSlug: "10-essentials-healthy-aging-social-clubs",
        topicLabel: "10 essentials of healthy ageing",
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
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string) {
  return guidesBySlug.get(slug) ?? null;
}

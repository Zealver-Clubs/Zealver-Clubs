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
    topics: [
      "diabetes-what-is-happening",
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
      "Gentle, practical habits for women 60+ living with osteoarthritis or everyday joint stiffness. Moving well rather than resting more.",
    image: "/images/instructor-class.jpg",
    steps: [
      {
        n: 1,
        heading: "Move the joint, gently, most days",
        text: "The instinct with a sore joint is to rest it, and resting it more than a day or two usually makes it worse. Joints are fed by movement: cartilage has no blood supply and relies on gentle use to stay nourished. Small, frequent, comfortable movement beats either pushing through pain or stopping altogether. This guide is written for osteoarthritis and everyday stiffness; rheumatoid arthritis and gout are different conditions needing different treatment, so it is worth knowing which you have.",
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
        text: "No food cures arthritis, and anyone promising that is selling something. What is worth doing is the ordinary pattern: plenty of vegetables and fruit, whole grains, beans and lentils, nuts, oily fish and sensible oils, with less deep-fried and packaged food. Weight matters here more than it sounds like it should: every extra kilogram puts roughly three to four kilograms of additional load through the knee with each step, so losing five to ten per cent makes a real difference to pain.",
        topicSlug: "anti-inflammatory-swaps-indian-kitchen",
        topicLabel: "Anti-inflammatory swaps for an Indian kitchen",
      },
      {
        n: 5,
        heading: "Protect your sleep, and know when to ask",
        text: "Pain disrupts sleep and poor sleep makes pain feel worse, which is a circle worth breaking early. Keep regular sleep times and wind down properly. And see your doctor rather than managing alone if a joint is hot and red, markedly swollen or suddenly unbearable, if morning stiffness lasts over an hour, if there is fever alongside the pain, if it has gone on more than six weeks, or if a joint has changed shape. Several of those point to rheumatoid arthritis or gout, which are treated quite differently.",
        topicSlug: "sleep-and-recovery",
        topicLabel: "Sleep & recovery",
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
    relatedGuides: ["stay-strong-after-menopause-guide", "anti-inflammatory-diet-guide"],
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
        text: "Please treat this as the most important step. Low mood that lasts more than two weeks, worry you cannot switch off, losing interest in everything, not eating or sleeping, or any thought of harming yourself or not wanting to be here, all need a doctor rather than a website. Depression and anxiety are common, treatable, and not a weakness of character. Nothing here is treatment for either. If you are in crisis, contact your doctor or a mental health helpline today.",
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
];

export const guidesBySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string) {
  return guidesBySlug.get(slug) ?? null;
}

/**
 * Knowledge Hub - Topics.
 * A Topic is one subject on its own. Each is data, not a hard-coded page,
 * so staff can add more later. `youtubeId` null renders a video placeholder.
 *
 * Copy is activity-first and general in nature (movement, habits, confidence) -
 * not medical advice. Replace/expand with the write-ups drawn from each
 * Zealver YouTube script as they are produced.
 */

import type { Reference } from "./references";

export type Topic = {
  slug: string;
  title: string;
  category: string;
  youtubeId: string | null;
  image?: string; // used when there is no video; can be a web/CC photo
  imageAlt?: string; // describe the image itself; defaults to the topic title
  imageRatio?: "16/9" | "4/3" | "3/2" | "1/1"; // hero aspect; defaults to 16/9
  imageCredit?: string; // visible credit / provenance line under the image
  summary: string;
  /** Scannable takeaways, shown in an "In short" box above the article. */
  keyPoints?: string[];
  /**
   * Preferred shape: each section renders its own H2, which gives the page a
   * real heading outline instead of one generic "What to know".
   * `body` stays supported for shorter topics that do not need subheadings.
   */
  sections?: { heading: string; body: string[] }[];
  body: string[];
  relatedTopics: string[]; // slugs
  guides: string[]; // guide slugs this topic appears in
  references?: Reference[];
  /** Optional next step, shown after the write-up. */
  cta?: { label: string; href: string };
};

export const topics: Topic[] = [
  {
    slug: "fall-prevention",
    title: "Fall prevention",
    category: "Balance & safety",
    youtubeId: null,
    summary:
      "Simple daily habits and gentle exercises that help you stay steady on your feet and move with confidence.",
    keyPoints: [
      "Most falls come down to balance, leg strength, safe surroundings and changing position slowly.",
      "A minute behind a sturdy chair, shifting weight and rising onto your toes, builds steadiness.",
      "Stand up in stages: sit forward, push up with your hands, pause before you walk.",
      "Small and regular beats occasional and ambitious.",
    ],
    body: [
      "Most falls come down to a few everyday things we can each work on: steadier balance, stronger legs, safer surroundings, and moving a little more slowly when we change position. None of it needs a gym, small, regular practice is what builds confidence.",
      "Begin with a minute of standing tall behind a sturdy chair, feet hip-width apart, holding the back lightly. Practise shifting your weight from one foot to the other, then rising onto your toes and back down. A few rounds, most days, gently trains the muscles and reflexes that keep you upright.",
      "When you stand up, do it in stages: sit forward, push up with your hands, pause a moment before you walk. That short pause lets your body settle. This is general guidance to move well, not medical advice, if you feel dizzy or have had a recent fall, check with your doctor first.",
    ],
    relatedTopics: ["balance-exercises", "home-safety-checklist", "footwear-and-mobility"],
    guides: ["fall-prevention-guide"],
  },
  {
    slug: "balance-exercises",
    title: "Balance exercises for seniors",
    category: "Movement",
    youtubeId: null,
    summary:
      "A short set of seated and standing moves to build the balance and leg strength that keep you independent.",
    keyPoints: [
      "Balance is a skill, and it improves with practice like any other.",
      "Start seated with marches, knee straightening and ankle circles.",
      "Standing at a chair, try heel-to-toe steps and standing on one foot for a slow count of five.",
      "Ten unhurried minutes most days beats one long session a week.",
    ],
    body: [
      "Balance is a skill, and like any skill it improves with a little practice. This short set mixes seated warm-ups with standing moves you can do while holding a chair, so you always feel supported.",
      "Seated, try marching on the spot, straightening one knee at a time, and gentle ankle circles to wake up the feet. Standing at the chair, practise heel-to-toe steps and standing on one foot for a slow count of five, then swap. Breathe easily and keep your gaze on a fixed point ahead.",
      "Aim for ten unhurried minutes on most days rather than a long session once a week. Stop if anything hurts, and keep support within reach. This is gentle, general movement guidance, not a treatment plan.",
    ],
    relatedTopics: ["fall-prevention", "footwear-and-mobility"],
    guides: ["fall-prevention-guide"],
  },
  {
    slug: "dementia-friendly-movement",
    title: "Dementia-friendly movement",
    category: "Memory",
    youtubeId: null,
    summary:
      "Gentle, music-led movement that supports memory and mood, designed to be easy to follow and enjoyable.",
    keyPoints: [
      "Movement set to familiar music is easy to join in with and genuinely uplifting.",
      "Keep the moves short and repeat them: clap, sway, reach, tap the feet.",
      "Calling the action out loud gives everyone an easy pattern to follow.",
      "Follow the person's energy, and celebrate joining in over getting it right.",
    ],
    body: [
      "Movement set to familiar music is easy to join in with and genuinely uplifting. Well-loved songs, simple repeated actions, and a warm group make the session feel more like fun than exercise, which is exactly the point.",
      "Keep the moves short and repeat them: clap to the beat, sway side to side, reach up and out, tap the feet. Calling the action out loud as you do it, and doing it together, gives everyone an easy pattern to follow and a shared moment of connection.",
      "Follow the person's energy on the day, celebrate joining in over getting it 'right', and keep the mood light. This is a supportive activity approach for wellbeing and connection, not a medical therapy.",
    ],
    relatedTopics: ["balance-exercises", "sleep-and-recovery"],
    guides: [],
  },
  {
    slug: "home-safety-checklist",
    title: "Home safety checklist",
    category: "Balance & safety",
    youtubeId: null,
    summary:
      "Room-by-room checks that remove trip hazards and make everyday spaces safer and easier to move around.",
    keyPoints: [
      "A room-by-room walk catches most of the hazards that cause trips.",
      "Look for loose rugs, trailing cables and clutter on floors and stairs.",
      "Add light where it is dim, especially on stairs and the route to the bathroom at night.",
      "Tick off one fix a day rather than trying to do everything at once.",
    ],
    body: [
      "A quick walk through your home, room by room, catches most of the little hazards that cause trips. The goal is simple: clear paths, good light, and something steady to hold where you need it.",
      "Look for loose rugs, trailing cables, and clutter on the floor and stairs. Add a lamp or brighter bulb where the light is dim, especially on stairs and the route to the bathroom at night. In the bathroom, a non-slip mat and a grab rail make a real difference, and keeping everyday items within easy reach saves a lot of stretching and bending.",
      "Do the walk-through with a family member if you can, a second pair of eyes spots things we stop noticing. Tick off one fix a day rather than trying to do everything at once.",
    ],
    relatedTopics: ["fall-prevention", "footwear-and-mobility"],
    guides: ["fall-prevention-guide"],
  },
  {
    slug: "footwear-and-mobility",
    title: "Footwear & mobility",
    category: "Balance & safety",
    youtubeId: null,
    summary:
      "What to look for in supportive, comfortable shoes and how the right pair helps you walk with confidence.",
    keyPoints: [
      "Shoes with a firm non-slip sole and a back that holds the heel make walking steadier.",
      "Wear proper shoes indoors as well as out, and retire worn-out slippers.",
      "If you use a stick or frame, check it is set to the right height.",
      "Good footwear is one of the quickest wins for staying steady.",
    ],
    body: [
      "The right pair of shoes is one of the easiest ways to feel steadier. Look for a firm, non-slip sole, a low and stable heel, and a back that holds your heel in place rather than a loose slip-on.",
      "Shop later in the day, when feet are at their largest, and choose a fastening you can manage comfortably, laces, a strap, or a good elastic. Around the house, swap loose slippers for something with a proper sole and back; worn-out soles are a common, easily-fixed hazard.",
      "If walking has become harder, a stick or frame used at the correct height helps you stand tall and move with confidence, there is nothing to feel self-conscious about. This is general comfort-and-confidence guidance, not clinical fitting advice.",
    ],
    relatedTopics: ["fall-prevention", "balance-exercises"],
    guides: ["fall-prevention-guide"],
  },
  {
    slug: "nutrition-basics",
    title: "Nutrition basics",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Everyday eating habits that give you steady energy and support strength, bones and overall wellbeing.",
    keyPoints: [
      "Build each meal around protein and plenty of vegetables.",
      "Keep portions steady rather than swinging between large and small.",
      "Swap sugary drinks for water.",
      "Even, balanced meals give you even, steady energy.",
    ],
    body: [
      "Eating well later in life is less about strict rules and more about steady, everyday habits: enough protein, plenty of colour on the plate, and staying comfortably hydrated through the day.",
      "Try to include a protein source at each meal, lentils, beans, eggs, dairy, cheese, fish or chicken, to help maintain muscle and strength. Fill half the plate with vegetables and fruit for fibre and vitamins, and keep a glass of water in sight, since the feeling of thirst fades as we age.",
      "Small, regular meals often sit better than one large one, and sharing food with company makes it more enjoyable. This is general healthy-eating guidance; for specific dietary needs, your doctor or a dietitian can tailor it to you.",
    ],
    relatedTopics: ["movement-and-blood-sugar", "anti-inflammatory-basics"],
    guides: ["lower-your-blood-sugar-guide", "anti-inflammatory-diet-guide"],
  },
  {
    slug: "movement-and-blood-sugar",
    title: "Movement & blood sugar",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "How light activity after meals can help keep blood sugar steady, and easy ways to fit it into your day.",
    keyPoints: [
      "A gentle few minutes after eating helps your body use the meal.",
      "A slow stroll, seated marches, or standing to tidy up all count.",
      "Aim for about ten minutes after your main meal.",
      "Regular small amounts work better than occasional long sessions.",
    ],
    body: [
      "A little movement after eating is one of the simplest habits for steady energy. Even a gentle few minutes helps your body use up the meal rather than letting energy dip and spike.",
      "It needn't be a walk outdoors: a slow stroll around the house, a few seated marches, or standing to do the dishes all count. Ten easy minutes after your main meal is a friendly target, and doing it at the same time each day helps it stick.",
      "Pair it with the eating habits in Nutrition basics for the best effect. This is general activity guidance, if you monitor your blood sugar or take medication for it, follow your doctor's advice on what is right for you.",
    ],
    relatedTopics: ["nutrition-basics", "sleep-and-recovery"],
    guides: ["lower-your-blood-sugar-guide"],
  },
  {
    slug: "sleep-and-recovery",
    title: "Sleep & recovery",
    category: "Rest",
    youtubeId: null,
    summary:
      "Calming routines that help you fall asleep more easily and wake up feeling more rested and refreshed.",
    keyPoints: [
      "Good sleep supports steady energy the whole of the next day.",
      "Keep regular sleep and waking times, even at weekends.",
      "Get daylight in the morning to help set your body clock.",
      "Wind down calmly in the last hour before bed.",
    ],
    body: [
      "Good sleep is built during the day as much as at night. Daylight, gentle activity, and a calm wind-down routine all tell your body when it is time to rest.",
      "Try to keep to similar sleep and wake times, get some natural light in the morning, and ease off tea and coffee in the afternoon. In the last hour before bed, dim the lights, set screens aside, and do something soothing, slow breathing, a few gentle stretches, or quiet music.",
      "If none of that is shifting it, the reason matters more than the rules. Sleep goes wrong in several different ways, and the answer depends on which one is yours: trouble dropping off, waking repeatedly, or sleeping plenty and still waking exhausted. That last one in particular is worth a doctor rather than another remedy.",
      "If your mind is busy, a warm, dark, quiet room and a slow count of your breaths can help you drift off. This is general rest guidance; if sleep is a persistent struggle, it is worth mentioning to your doctor.",
    ],
    relatedTopics: [
      "which-kind-of-poor-sleeper","nutrition-basics", "dementia-friendly-movement"],
    guides: ["lower-your-blood-sugar-guide"],
  },
  {
    slug: "anti-inflammatory-basics",
    title: "Anti-inflammatory basics",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "The everyday foods that help calm inflammation, and simple swaps you can make one meal at a time.",
    keyPoints: [
      "Lean towards whole, colourful foods: vegetables, fruit, whole grains, beans, nuts and olive oil.",
      "Gentle additions like turmeric and ginger fit naturally into everyday cooking.",
      "Ease back on packaged and sugary snacks.",
      "Change one meal at a time so the habit lasts.",
    ],
    body: [
      "You do not need a special diet to eat in a way that is kind to your joints and energy, mostly it means leaning towards whole, colourful foods and easing back on heavily processed ones.",
      "Build meals around vegetables and fruit, whole grains, beans and lentils, nuts, and sources of healthy fat such as olive oil. Colourful produce, herbs and spices like turmeric and ginger, and oily fish are gentle, everyday additions. Where you can, swap sugary drinks and packaged snacks for fruit, nuts or a small handful of roasted chickpeas.",
      "Change one meal at a time so it feels easy and lasting rather than a big overhaul. This is general food-first guidance for wellbeing, not medical or medication advice.",
    ],
    relatedTopics: ["nutrition-basics", "movement-and-blood-sugar"],
    guides: ["anti-inflammatory-diet-guide"],
  },
  {
    slug: "bone-health-after-menopause",
    title: "Bone health after menopause",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "Why bone changes around menopause, and the everyday things that help you hold on to your strength.",
    keyPoints: [
      "Bone is living tissue that is constantly being renewed, not a finished structure.",
      "Oestrogen keeps bone breakdown in check, so bone is lost faster after menopause. This happens to everyone.",
      "Bone responds to being used: when muscle pulls on it, it gets the signal to stay strong.",
      "Strength work a couple of times a week, enough protein and calcium-rich food are what help most.",
    ],
    sections: [
      {
        heading: "What bone actually is",
        body: [
          "Bone is not the dry, finished thing most of us picture. It is living tissue, and your skeleton is being quietly renewed all the time, a little taken away, a little rebuilt, year after year. Think of a building under continuous renovation rather than one that was finished long ago.",
        ],
      },
      {
        heading: "Why menopause changes things",
        body: [
          "In younger adulthood the taking away and the building sit in rough balance. Around menopause that balance shifts, because oestrogen helps keep the taking-away side in check, and oestrogen falls. Bone is then lost faster than it is replaced. This is ordinary and it happens to everybody, so it is not a personal failing and it is not the end of the story.",
        ],
      },
      {
        heading: "What keeps bone strong",
        body: [
          "What makes the difference is what happens next. Bone responds to being used. When muscle pulls on bone, the bone gets a signal that it is needed and should stay strong, which is why strength work and being on your feet matter so much here. Enough protein and calcium-rich food give your body the material to work with.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "The habit to build is unhurried and regular rather than dramatic: move most days, challenge your muscles a couple of times a week, eat well, and keep your balance sharp so a stumble stays a stumble. This is general guidance on staying strong, not a diagnosis or a treatment plan. If you have questions about your own bone health, that is a conversation for your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "muscle-strength-and-ageing",
      "osteopenia-and-osteoporosis",
      "chair-dance-for-bone-and-muscle",
      "balance-exercises",
    ],
    guides: ["stay-strong-after-menopause-guide"],
  },
  {
    slug: "osteopenia-and-osteoporosis",
    title: "Osteopenia and osteoporosis explained",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "What the two words actually mean, why neither is a verdict, and what sits in your hands either way.",
    keyPoints: [
      "The two words are points on one line, not two separate diseases.",
      "Osteopenia means bone has thinned somewhat. Many people with it never go further.",
      "Osteoporosis means bone is fragile enough that a modest fall could cause a fracture.",
      "Where you sit is your doctor's call, from a scan and your whole health picture.",
      "Neither word means nothing can be done. Preventing the fall is the half most within reach.",
    ],
    sections: [
      {
        heading: "Two words on one line",
        body: [
          "These two words come up a lot and they worry people more than they need to, usually because they sound like two separate diseases. They are better understood as points along one line. Bone strength runs from healthy, through a middle stretch where it has thinned somewhat, to a point where it has thinned enough that a fall is more likely to break something.",
        ],
      },
      {
        heading: "What each word means",
        body: [
          "Osteopenia is the middle stretch. It is closer to a early notice than a diagnosis of illness: bone is not as strong as it once was, and that is worth knowing, but plenty of people with it never go on to develop anything more serious. Osteoporosis is further along the same line, where bone has become fragile enough that a modest fall could cause a fracture, most often at the hip, spine or wrist.",
        ],
      },
      {
        heading: "Two things worth holding on to",
        body: [
          "Two things are worth holding on to. The first is that where you sit on that line is decided by your doctor, using a scan and the whole picture of your health, not by anything you can read on a website. The second is that neither word means there is nothing to be done. Both ends of the problem can be worked on: the strength of the bone, and the likelihood of the fall that would test it.",
        ],
      },
      {
        heading: "The half you can work on",
        body: [
          "That second half is often overlooked and it is the part most within reach. Stronger legs, steadier balance, good light on the stairs, sensible shoes and a clear floor all reduce the chance of falling in the first place. This page is for understanding the words, not for diagnosing yourself, and any decision about tests or treatment belongs with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "bone-health-after-menopause",
      "fall-prevention",
      "home-safety-checklist",
      "footwear-and-mobility",
    ],
    guides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
  },
  {
    slug: "muscle-strength-and-ageing",
    title: "Muscle strength and ageing",
    category: "Movement",
    youtubeId: null,
    summary:
      "Why muscle matters far beyond how you look, and the difference between strength and speed when you stumble.",
    keyPoints: [
      "Muscle is what gets you out of a chair, up the stairs and steady on your feet.",
      "We lose strength faster than we lose size, so a muscle can look the same and have less to give.",
      "Power, how quickly you produce force, is what saves you when you trip.",
      "Muscle responds to training at any age, and pulling on bone keeps bone strong too.",
    ],
    sections: [
      {
        heading: "Why muscle matters more than it looks",
        body: [
          "Muscle is what lets you get out of a chair, climb the stairs, carry the shopping and hold yourself upright. It is the difference between managing your own day and needing someone else to manage it for you, which is why it deserves more attention than it usually gets.",
        ],
      },
      {
        heading: "What changes with age",
        body: [
          "We all lose some muscle as the years pass, and we lose strength faster than we lose size. That distinction matters: a muscle can look much the same and still have less to give. There is a further distinction worth knowing, which is between strength and power. Strength is how much force you can produce. Power is how quickly you can produce it.",
        ],
      },
      {
        heading: "Strength, power, and why the difference matters",
        body: [
          "Power is the one that saves you when you trip. A stumble does not give you a few seconds to gather yourself and push back; the correction has to happen almost immediately. That is why training that asks your muscles to work briskly, not only slowly and heavily, is part of staying steady on your feet.",
        ],
      },
      {
        heading: "The encouraging part",
        body: [
          "The encouraging part is how well muscle responds at any age. It adapts to being asked to do a little more than it is used to, and it keeps adapting into later life. Alongside that, muscle pulling on bone is one of the strongest signals bone gets to stay strong, so the same work pays into both. This is general movement guidance, not a prescription, and it is worth checking with your doctor before starting something new if you have a health condition.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "bone-health-after-menopause",
      "chair-dance-for-bone-and-muscle",
      "balance-exercises",
      "nutrition-basics",
    ],
    guides: ["stay-strong-after-menopause-guide"],
  },
  {
    slug: "vitamin-d-what-it-does",
    title: "Vitamin D: what it does, and what it does not",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "A clear look at what Vitamin D is actually for, and the common beliefs about it that do not hold up.",
    keyPoints: [
      "Vitamin D behaves more like a hormone. Its clearest job is helping you absorb calcium.",
      "Correcting a genuine shortfall can help. Topping up someone who has enough does not.",
      "It is not a muscle builder, and it is not a substitute for exercise.",
      "More is not better. The goal is having enough, not the highest number.",
      "A normal Vitamin D result does not mean your bones are fine.",
      "Whether you need testing or a supplement is a question for your doctor.",
    ],
    sections: [
      {
        heading: "What Vitamin D is for",
        body: [
          "Vitamin D behaves more like a hormone than a standard vitamin. Its best understood job is helping your gut absorb calcium from the food you eat, and calcium is the raw material your bones are built from. Your skin can make Vitamin D from sunlight, and some comes from food and fortified products.",
        ],
      },
      {
        heading: "Vitamin D and muscle",
        body: [
          "Muscle is part of the picture too. Muscle cells respond to Vitamin D, and where someone is genuinely short of it, weakness and difficulty getting around can be part of how that shows up. Correcting a real shortfall can help. That is a different thing from topping up someone who already has enough.",
        ],
      },
      {
        heading: "What Vitamin D is not",
        body: [
          "Which brings us to what Vitamin D is not. It is not a muscle-building supplement, and taking more of it will not make an already well-nourished person stronger. It is not a substitute for exercise, which remains the strongest signal you can send to both muscle and bone. And more is not better: with Vitamin D the goal is having enough, not having the highest number you can reach.",
        ],
      },
      {
        heading: "The belief worth setting aside",
        body: [
          "One more belief worth setting aside is that a normal Vitamin D result means your bones are fine. It does not. You can have perfectly adequate Vitamin D and still have bone that has thinned with the years, because Vitamin D is one contributor among several.",
        ],
      },
      {
        heading: "A useful way to hold it together",
        body: [
          "A useful way to hold all this: think of bone as the house, calcium as the bricks, Vitamin D as part of what gets the bricks delivered, and exercise as the instruction to build. You need all of it, and a great deal of one will not make up for the absence of another. Whether you need testing or a supplement is a question for your doctor, who can look at your own circumstances. Sunlight helps your body make Vitamin D, but deliberately sitting out to burn is not a sensible way to go about it.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "bone-health-after-menopause",
      "nutrition-basics",
      "muscle-strength-and-ageing",
      "anti-inflammatory-basics",
    ],
    guides: ["stay-strong-after-menopause-guide"],
  },
  {
    slug: "chair-dance-for-bone-and-muscle",
    title: "Chair dance for bone and muscle",
    category: "Movement",
    youtubeId: null,
    summary:
      "What chair-based dance genuinely does for strength, balance and bone, and how to get more out of it.",
    keyPoints: [
      "Chair dance works partly because people keep doing it. The movement you actually do is what counts.",
      "A session builds leg strength, coordination, postural control and mobility.",
      "Gentle seated arm movement is mobility and company, not resistance work. Both are worth having.",
      "Rising without your hands, rising slower, or heel raises at the chair back make a session ask more.",
      "Treat it as the foundation, with strength work built on top rather than instead.",
    ],
    sections: [
      {
        heading: "Why chair dance earns its place",
        body: [
          "Chair dance earns its place for a reason that is easy to underrate: people keep doing it. Music, company and something that feels like enjoyment rather than exercise will get you moving every week in a way that a programme you dread never will, and the movement you actually do is the movement that counts.",
        ],
      },
      {
        heading: "What is actually happening in a session",
        body: [
          "Within a session there is more going on than it looks. Standing up and sitting down works the legs in the way you use them every day. Straightening a knee and holding it works the thigh. Ankle circles wake up the feet and help circulation. Reaching, turning and following a pattern to a beat ask your body for coordination and postural control, and ask your mind for something too.",
        ],
      },
      {
        heading: "Being honest about the limits",
        body: [
          "Being honest about the limits is what makes the rest trustworthy. If a session is mostly gentle arm movements while seated, it is good mobility and good company, but it is not the same as asking your muscles to work against real resistance. Muscle grows stronger when it is regularly asked to do a bit more than it is comfortable with, and that principle does not change because the setting is friendly.",
        ],
      },
      {
        heading: "How to make it ask more of you",
        body: [
          "The good news is that a chair is a fine place to start building that in. Rising without using your hands, rising more slowly, adding a pause at the bottom, holding a leg out a little longer, or standing behind the chair for heel raises and weight shifts all make a session ask more of you. Done regularly, that is strength and balance work, not just movement.",
        ],
      },
      {
        heading: "Every movement is rehearsing something",
        body: [
          "This is the part worth saying to anyone who thinks a chair dance class is only dancing. Nearly every movement in a session is a rehearsal for something you need to do anyway.",
          "Standing up and sitting down is getting off the toilet and out of an armchair. Marching is walking more safely. Stepping to the side is what saves you when you catch your foot. Reaching overhead is the top shelf. Twisting is turning over in bed, and looking behind you. Arm movements are carrying the shopping in from the car. Holding yourself upright through all of it is the posture that keeps your back from aching.",
          "So you are not simply exercising. You are practising the movements that independence is actually made of, which is why the effect shows up in daily life rather than only in a class.",
        ],
      },
      {
        heading: "It works the brain as well",
        body: [
          "A session asks more of you than the movements suggest. Remembering what comes next, keeping to a rhythm, coordinating arms with legs, moving while talking or counting, reacting when the pattern changes. That is attention, memory and coordination being used together.",
          "Doing two things at once, thinking while moving, is closer to real life than either on its own, and it is a large part of why music-led movement suits this age group so well.",
        ],
      },
      {
        heading: "Where it fits",
        body: [
          "A way of putting it that tends to land: muscle is your retirement savings, and every session is a deposit. What you build and keep now is what you will have to spend on independence later.",
          "So the way to think about chair dance is as the foundation and the habit, with strength work built on top of it rather than instead of it. This is general activity guidance, not a treatment plan. If you have osteoporosis, have had a fracture, or are unsure what is safe for you, ask your doctor or a physiotherapist to help shape it around you.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "chair-dance-fitness-benefits",
      "muscle-strength-and-ageing",
      "balance-exercises",
      "bone-health-after-menopause",
      "fall-prevention",
    ],
    guides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
  },
  {
    slug: "prebiotics-and-probiotics",
    title: "Prebiotics, probiotics and synbiotics: what is the difference",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Which one is the bacteria and which one is the food, what each does for you, and the everyday pairings that give you both.",
    keyPoints: [
      "Probiotics are the helpful bacteria themselves. Prebiotics are the fibre that feeds them. A synbiotic is both together.",
      "Think of a garden: probiotics are the seeds, prebiotics are what makes them grow.",
      "Prebiotics: oats, bananas, onions, garlic, apples, beans, lentils, flaxseed.",
      "Probiotics: curd with live cultures, fermented batters, fermented vegetables.",
      "You do not need a product. Curd with banana, or a fermented rice cake with lentil broth, does the same job.",
      "Responses vary a lot between people, and these foods do not treat digestive illness.",
    ],
    sections: [
      {
        heading: "Probiotics, prebiotics, synbiotics",
        body: [
          "Your gut is home to an enormous community of bacteria, and most of them are doing useful work for you. Two words come up constantly when people talk about looking after that community, and they are easy to mix up. Probiotics are the helpful bacteria themselves. Prebiotics are the fibres that feed them. A synbiotic is simply both together, on the principle that sending bacteria in with something to eat gives them a better chance than sending them in alone.",
        ],
      },
      {
        heading: "The easiest way to remember which is which",
        body: [
          "Picture your gut as a garden. Probiotics are the seeds, the helpful bacteria themselves. Prebiotics are what makes them grow, the fibre they feed on. Neither does much alone, which is the whole point of the comparison.",
          "There is a practical difference too. Prebiotics are ordinary fibre and survive cooking and storage without difficulty. Probiotics are alive, so heat and time can reduce them, which is why fermented food is usually eaten fresh rather than boiled.",
        ],
      },
      {
        heading: "What each one is doing",
        body: [
          "Prebiotics feed the bacteria already living in you, help digestion along, and in the process the bacteria produce compounds that appear to support blood sugar and heart health. Oats, bananas, onions, garlic, apples, beans, lentils and flaxseed all carry them.",
          "Probiotics add more helpful bacteria to the mix. They are most useful after a course of antibiotics has thinned things out, and some people find they ease certain kinds of upset stomach or irritable bowel symptoms. Curd with live cultures, fermented batters and fermented vegetables all bring them.",
        ],
      },
      {
        heading: "How they work together",
        body: [
          "The idea is straightforward once you picture it. Bacteria arrive in the gut, the fibre that came along with them gives them something to live on, and they are more likely to settle in and multiply rather than passing straight through. That combination is what the word synbiotic describes, and it is why the two are often sold in one product.",
        ],
      },
      {
        heading: "The pairings already in your kitchen",
        body: [
          "You do not need a product to do this. The pairing happens naturally at the table, and your own kitchen is full of it. A bowl of curd with a sliced banana is a synbiotic. So is buttermilk alongside a meal with onions and garlic, or steamed rice cakes and pancakes made from properly fermented batter served with a lentil and vegetable broth. Fermented pickles and other fermented foods all bring the bacteria; bananas, onions, garlic, oats, whole grains, lentils and beans bring the fibre that feeds them.",
        ],
      },
      {
        heading: "What this is, and what it is not",
        body: [
          "It is worth being clear about what this is and is not. Some people find their digestion settles, feels more regular, or is less uncomfortable, and some find no difference at all. Responses vary a great deal from person to person, and the research is much stronger on some uses than others. These foods are not a treatment for a digestive illness, and no supplement replaces one.",
        ],
      },
      {
        heading: "A sensible approach",
        body: [
          "For most people the sensible approach is the unglamorous one: eat fermented foods you enjoy, eat plenty of fibre from vegetables, fruit, whole grains and lentils, and let the two arrive together as they naturally do in a good meal. If you have a serious medical condition or a weakened immune system, or you are thinking about a supplement rather than food, speak to your doctor first. This is general food guidance, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "nutrition-basics",
      "anti-inflammatory-basics",
      "movement-and-blood-sugar",
    ],
    guides: [],
    references: [
      {
        title:
          "The ISAPP consensus statement on the definition and scope of synbiotics",
        publisher: "Nature Reviews Gastroenterology & Hepatology",
        year: "2020",
        url: "https://www.nature.com/articles/s41575-020-0344-2",
        supports:
          "The definition of a synbiotic as probiotics and prebiotics combined to work together.",
      },
    ],
  },
  {
    slug: "after-a-heavy-week",
    title: "After a heavy week: why you feel puffy, and what helps",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "A wedding, a festival or a run of big meals leaves most of us feeling heavy and foggy. What is actually going on, and the calm way back.",
    keyPoints: [
      "A quick two or three kilo gain after a heavy week is mostly water, not fat.",
      "Stored carbohydrate holds water with it, so it arrives fast and leaves fast.",
      "Go back to normal portions at the next meal. Keep carbohydrates in rather than cutting them.",
      "Protein on every plate, plenty of vegetables, steady water, and a gentle walk.",
      "Skip the punishment. Long stretches without eating cost muscle and can be unsafe on medication.",
      "If the week also meant late nights, sleep is likely the biggest lever of all.",
    ],
    sections: [
      {
        heading: "What you are feeling",
        body: [
          "A wedding, a festival, a week of visitors, a stretch of meals that were bigger and richer than usual. Afterwards you feel heavy and a little puffy, your rings are tight, your face looks fuller in the mirror and your head feels slow. If the scale has jumped by two or three kilos in a few days, that is the part worth understanding first.",
        ],
      },
      {
        heading: "What is actually going on",
        body: [
          "It is very unlikely to be what you fear. When you eat more carbohydrate than usual, your body stores some of it, and that store holds on to water with it, several times its own weight. Add more food moving through your system than normal and a few salty meals, and you are carrying extra water rather than much else. It arrived quickly and it tends to leave quickly too, over a few ordinary days.",
        ],
      },
      {
        heading: "The calm way back",
        body: [
          "So the way back is unglamorous and it works. Go straight back to your usual portions, starting with the very next meal rather than tomorrow or Monday. Keep carbohydrates in, at normal amounts, rather than cutting them out. Put protein on every plate, fill up on vegetables and some fruit, drink water steadily through the day, and go easy on very salty and packaged food for a few days. A gentle walk after meals helps, and it is enough.",
        ],
      },
      {
        heading: "What does not help",
        body: [
          "What does not help is punishment. Skipping meals for long stretches, crash dieting, or trying to exercise the week off tends to leave you more tired and no lighter in any way that lasts. For women over 60 there is a particular reason to be careful: going long periods without eating costs you muscle, and muscle is the thing you most want to keep, because it is what gets you out of a chair and keeps you steady on your feet. It can also be genuinely unsafe if you take regular medication, and blood sugar medicines especially.",
        ],
      },
      {
        heading: "The thing most people skip",
        body: [
          "The thing most likely to make the real difference is the one people skip. If the heavy week also came with late nights, television until all hours and short sleep, that alone will show up as a puffy face and a foggy head. Turning the television off an hour before bed and getting a few proper nights of sleep often does more for how you look and feel than anything you change on your plate.",
        ],
      },
      {
        heading: "Give it a few days",
        body: [
          "Be patient with the mirror for a few days and the rest usually sorts itself out. This is general food and lifestyle guidance, not medical advice. If the swelling is one-sided, came on suddenly, affects your breathing, or does not settle after a week of normal eating, that is worth seeing your doctor about rather than waiting.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "sleep-and-recovery",
      "nutrition-basics",
      "muscle-strength-and-ageing",
      "movement-and-blood-sugar",
    ],
    guides: [],
  },
  {
    slug: "soy-milk-and-plant-milks",
    title: "Soy milk and other plant milks",
    category: "Food & energy",
    youtubeId: null,
    image: "/images/soy-milk-comparison.png",
    imageAlt:
      "Soy milk infographic. A glass of soy milk with soybeans, noting that it is made from whole soybeans, is a high-quality plant protein, is often fortified with calcium and vitamin B12, and is naturally dairy-free. A comparison of protein per 240 to 250 ml glass shows soy milk at 7 to 9 grams, almond milk about 1 gram, oat milk 2 to 4 grams, and rice milk 0 to 1 gram.",
    imageRatio: "1/1",
    imageCredit:
      "Illustration created for Zealver Clubs with ChatGPT (OpenAI), reviewed by Dr Namrata Bagaria.",
    summary:
      "What soy milk actually is, why it is the one plant milk with real protein, and what to look for on the label.",
    keyPoints: [
      "Soy milk is soaked soybeans ground with water and strained. \u201cMylk\u201d on a carton is a brand spelling for the same drink.",
      "It carries roughly seven to nine grams of protein a glass, close to dairy. Oat is well behind at two to four, and almond and rice barely register.",
      "Check two things on the label: whether it is fortified with calcium and B12, and how much sugar has been added.",
      "Unsweetened fortified soy milk is the most useful everyday choice.",
      "If curd, milk and cheese suit you, there is no reason to switch.",
    ],
    sections: [
      {
        heading: "What soy milk is",
        body: [
          "Soy milk is made by soaking soybeans, grinding them with water and straining the result. That is the whole process. You will sometimes see it written as soy mylk on a carton, which is a spelling some brands use to mark a drink out as plant-based rather than dairy. It is the same thing.",
        ],
      },
      {
        heading: "Why soy stands apart from other plant milks",
        body: [
          "What makes it worth knowing about is protein. A glass of soy milk gives you somewhere around seven to nine grams, which puts it close to dairy milk and well ahead of every other plant milk on the shelf. Oat drinks come next and are some way behind at roughly two to four grams, while almond and rice drinks barely register, often around a gram or less.",
          "If you are reaching for a plant milk partly to help you hold on to muscle, soy is the one that does that job. The others are fine as drinks; they are simply not doing much for your protein.",
        ],
      },
      {
        heading: "What to check on the label",
        body: [
          "The first thing is whether it is fortified. Calcium and vitamin B12 are added to many soy milks but not all, and the fortified ones are considerably more useful if you are not getting much dairy.",
          "The second is sugar. A lot of what sells is sweetened, sometimes quite heavily, and unsweetened is the sensible everyday choice with sweetened kept as a treat.",
        ],
      },
      {
        heading: "Using it in an Indian kitchen",
        body: [
          "It slots in easily enough. Soy milk works in tea, over oats or muesli, in rice pudding and in most places you would use milk, though it behaves a little differently when heated hard.",
          "Soy will already be familiar to you in other forms, as tofu, soy chunks and soya granules, and those count towards your protein just as the drink does.",
        ],
      },
      {
        heading: "Where dairy still fits",
        body: [
          "None of this is an argument for giving up dairy. If curd, milk and cheese suit you, they are excellent sources of protein and calcium and there is no reason to replace them.",
          "Soy milk is genuinely useful if you are avoiding dairy, if it does not agree with you, or if you simply want another way to get protein into the day. This is general food guidance, not medical advice, and any specific concerns about soy in your own diet are worth raising with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "muscle-strength-and-ageing",
      "bone-health-after-menopause",
      "nutrition-basics",
      "prebiotics-and-probiotics",
    ],
    guides: [],
  },
  {
    slug: "understanding-stress",
    title: "Stress: what it is, and why not all of it is bad",
    category: "Rest",
    youtubeId: null,
    summary:
      "The different kinds of stress, in plain terms, and the surprising idea that too little going on can trouble you as much as too much.",
    keyPoints: [
      "Stress is what happens when something feels bigger than what you feel able to handle.",
      "It shows up in the body, in the mind, and in the way the body reacts to what the mind is carrying.",
      "Not all stress is bad. The useful kind has a name: eustress.",
      "Too little going on leaves you flat. Too much overwhelms. Somewhere in between is where you feel alive.",
      "The aim is not a life with no stress in it. It is having ways to meet it.",
    ],
    sections: [
      {
        heading: "What we mean by stress",
        body: [
          "Stress is not a bad word and it is not a character flaw. It is simply what happens when something in front of you feels bigger than what you feel able to handle at that moment. Everybody meets it, at every age.",
          "It helps to notice that it arrives in more than one form, because the thing that helps is different for each.",
        ],
      },
      {
        heading: "Stress in the body",
        body: [
          "Sometimes the load is physical. Too much housework, standing for too long, pain or stiffness that will not settle, too little sleep, or simply doing more in a day than the body had in it.",
          "What the body wants here is movement, not punishment. A few shoulder rolls, some slow neck and ankle movement, a proper stretch and a few deep breaths will do more than pushing through will.",
        ],
      },
      {
        heading: "Stress in the mind",
        body: [
          "Often there is nothing in front of you at all, and the whole thing is running in your head. What will happen to the children. What will happen to my health. Nobody listens to me any more. I am not the person I used to be.",
          "Worry about people you love, a house that has gone quiet, friends you have lost, the feeling of being less useful than you were: these weigh a great deal, and they weigh more when carried alone.",
        ],
      },
      {
        heading: "When the mind shows up in the body",
        body: [
          "The two are not separate, and this catches people out. When the mind feels under pressure, the body answers: the heart goes faster, breathing shortens, shoulders and jaw tighten, sleep breaks up, digestion changes.",
          "It is why you can say quite honestly that nothing has happened today, and still be exhausted by evening. Nothing did happen. You were carrying something anyway.",
        ],
      },
      {
        heading: "The good kind of stress",
        body: [
          "Here is the part that surprises people. There is a word for stress that does you good: eustress. The nervousness before you go on stage, the flutter before a wedding, the excitement before a journey, the challenge of learning something new, the small thrill of a competition. Your body is doing many of the same things it does under bad stress. What differs is the meaning it carries and whether you feel able to meet it.",
          "So the goal is not to strip life back until nothing is happening. Too little going on leaves people flat and disengaged, and that does its own harm. Too much overwhelms. Somewhere in between is where you feel awake, interested and alive, and that is the place worth aiming for.",
          "This is general wellbeing guidance, not medical advice. If low mood, worry or sleeplessness has been with you for weeks, or is getting in the way of ordinary life, please talk to your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "stop-breathe-notice-choose",
      "music-memory-and-mood",
      "sleep-and-recovery",
      "dementia-friendly-movement",
    ],
    guides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "stop-breathe-notice-choose",
    title: "Worry: a four-step pause when your mind will not stop",
    category: "Rest",
    youtubeId: null,
    summary:
      "A short, portable way to interrupt worry that is going round and round, in four steps you can remember.",
    keyPoints: [
      "Stop. Just pause where you are for a moment.",
      "Breathe. Four or five slow breaths, with the breath out longer than the breath in.",
      "Notice. Ask yourself plainly what is going round in your mind.",
      "Choose. Can I do something about this right now?",
      "If yes, one small thing. If no, you do not have to keep carrying it this minute.",
    ],
    sections: [
      {
        heading: "Why a pause helps",
        body: [
          "Worry has a way of circling. The same thought comes round, then round again, and each time it feels a little heavier though nothing new has been added. What breaks the circle is rarely an answer. It is usually an interruption.",
          "This is a small one you can do anywhere, sitting where you are, without anyone noticing.",
        ],
      },
      {
        heading: "Stop, and breathe",
        body: [
          "First, stop. Whatever you are doing, let it wait for a moment. You are not solving anything yet, you are only stepping out of the circle.",
          "Then breathe. Four or five slow breaths, and let the breath out be longer than the breath in. That longer breath out is the part that settles the body, and the body settling is what gives the mind room.",
        ],
      },
      {
        heading: "Notice what is actually there",
        body: [
          "Now ask yourself plainly: what is going round in my mind just now? Name it in ordinary words, the way you would to a friend. Worry that has been named is easier to hold than worry that has only been felt.",
          "You may find it is one thing wearing several disguises, which is often the case.",
        ],
      },
      {
        heading: "Choose what happens next",
        body: [
          "Then one question, and it is the whole point of the exercise. Can I do something about this right now?",
          "If you can, do one small thing. Make the call, write the note, ask the question. Small is fine; small is usually enough to break the spell.",
          "If you cannot, and very often you cannot, then this: I do not have to carry this right this minute. It is not being ignored and it is not being solved. You are setting it down for now, which you are allowed to do.",
          "Like anything, this works better with practice than on the first try. This is general wellbeing guidance, not medical advice, and worry that will not lift over weeks is worth raising with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "understanding-stress",
      "sleep-and-recovery",
      "music-memory-and-mood",
    ],
    guides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "music-memory-and-mood",
    title: "Music and memory: why an old song does so much",
    category: "Memory",
    youtubeId: null,
    summary:
      "A familiar song from your younger years does several things at once, which is why it lifts a room the way it does.",
    keyPoints: [
      "A song from your youth arrives with the time attached to it, not just the tune.",
      "It works on several things at once: the senses, memory, feeling, movement and conversation.",
      "That is why music gets people moving when an instruction to exercise does not.",
      "Sharing the memory matters as much as hearing the song.",
      "This is an activity for wellbeing and enjoyment, not a treatment for any condition.",
    ],
    sections: [
      {
        heading: "More than a tune",
        body: [
          "Play a song somebody loved at twenty and something happens that does not happen with a song they heard last week. It arrives with the time attached: where they were, who they were with, what they were hoping for. The tune is only the doorway.",
        ],
      },
      {
        heading: "Several things at once",
        body: [
          "That is really why music earns its place in a session. In three or four minutes it is doing the work of several different activities at the same time. There is something to hear. There is a memory coming back. There is feeling attached to it. Feet and hands start moving almost without asking. And then there is someone beside you who remembers the same song.",
          "Very few activities manage all of that together, and none of them feel as little like an exercise class.",
        ],
      },
      {
        heading: "Why it gets people moving",
        body: [
          "Ask a room to do ten minutes of exercise and you will see what you expect. Put on a song they grew up with and the same room is clapping, swaying and tapping before anybody has been asked to. The movement arrives as a by-product of enjoyment, which is the most reliable way to get it.",
        ],
      },
      {
        heading: "The part people skip",
        body: [
          "The memory is worth as much as the music, and it needs a question to come out. What does this song remind you of? How old were you when you used to hear it? What was life like then?",
          "Then let two people share what came up. That turns a song into a conversation, and a conversation into company, which is very often the thing that was actually missing.",
          "This is an activity for enjoyment and wellbeing. It is not a treatment for dementia, depression or any medical condition, and it is not offered as one.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "dementia-friendly-movement",
      "understanding-stress",
      "chair-dance-for-bone-and-muscle",
      "balance-exercises",
    ],
    guides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "anti-inflammatory-swaps-indian-kitchen",
    title: "Anti-inflammatory swaps for an Indian kitchen",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Practical everyday swaps using food you already cook, and an important word about what is not actually the problem.",
    keyPoints: [
      "Biscuits and savoury packet snacks \u2192 roasted chickpeas, puffed lotus seeds, peanuts, nuts and seeds.",
      "Deep-fried snacks \u2192 baked or air-fried versions, or steamed ones instead.",
      "Sweet tea \u2192 unsweetened or barely sweetened, with cinnamon, ginger or cardamom.",
      "Refined white flour \u2192 gram flour, mung bean flour, oats and less refined flours, or almond flour if the budget allows.",
      "A carb-heavy plate \u2192 half vegetables, a quarter protein, a quarter grain.",
      "No single food is automatically inflammatory. It is the overall pattern that counts.",
    ],
    sections: [
      {
        heading: "A better way to think about it",
        body: [
          "It is tempting to sort food into good and bad lists, but that is not really how this works. Very little is inflammatory on its own. What matters is the pattern: a lot of refined flour, added sugar, deep-fried food and heavily processed packets, eaten often, over years.",
          "So read what follows as swaps worth making most of the time, not as a list of things you are now forbidden. A fried snack at a wedding is not the problem. A fried snack most afternoons is a different question.",
        ],
      },
      {
        heading: "Flours and grains",
        body: [
          "Refined white flour is the one worth looking at first, because it turns up everywhere: flatbreads, biscuits, white bread, most bakery items. Gram flour and mung bean flour are excellent in its place, and a savoury pancake made from either is quicker than most people expect. Oats and less refined flours work well for everyday flatbreads.",
          "Almond flour makes a very good flatbread too, low in starch and high in protein, and it is worth trying if you can afford it. It costs a good deal more than gram flour or mung bean flour, so treat it as a nice option rather than the one to aim for. Gram flour, mung bean flour and oats do the same job on an ordinary budget, and a swap you can keep up every week beats a better one you cannot.",
          "Rice is not the villain it is sometimes made out to be. It is usually the portion rather than the grain. A smaller serving alongside plenty of vegetables and lentils does a very different thing from a plate that is mostly rice. Hand-pounded and brown rice are worth trying if they suit you.",
        ],
      },
      {
        heading: "Snacks, which is where most of it happens",
        body: [
          "This is the swap that changes the most for the least effort. Savoury packet snacks, crisps and biscuits are the things that get eaten absent-mindedly with tea, and they add up quietly. Roasted chickpeas, puffed lotus seeds, peanuts, almonds, walnuts and seeds do the same job for your hands and considerably more for the rest of you.",
          "For fried snacks, the method matters more than the item. Deep-fried pastries and fritters are fine occasionally, and baked or air-fried versions are genuinely good. Steamed savoury cakes, rice cakes and pancakes are steamed rather than fried and belong in the regular rotation.",
        ],
      },
      {
        heading: "Sweet things and what you drink",
        body: [
          "Sweets and desserts are for occasions, and there are plenty of occasions. On ordinary days, fruit with a few nuts does more than you would think: apple, guava, orange, papaya, or berries if you can get them.",
          "Sweet tea is worth attention simply because of how often it is drunk. Cutting the sugar down gradually works better than stopping outright, and cinnamon, ginger, cardamom or clove give you flavour back. One thing worth saying plainly: jaggery and honey are still sugar. They are not anti-inflammatory alternatives, whatever you may have read.",
          "Packaged juices and soft drinks are best treated as sweets rather than drinks. Whole fruit with water, or water with lemon, does the job.",
        ],
      },
      {
        heading: "Oils, gravies and the salt question",
        body: [
          "Ghee and butter are not poison, and a reasonable amount of ghee in Indian cooking is entirely fine. The issue is quantity. Mustard, groundnut and olive oil in moderate amounts, plus the fats that come naturally in nuts and seeds, are a sensible base.",
          "Cream-heavy gravies are the bigger change. A tomato and onion base, or curd, or blended nuts and seeds, gives you a rich gravy without the cream. Full-fat cheese and large amounts of paneer are worth moderating, with lentils, kidney beans, chickpeas and tofu carrying more of the protein.",
          "For salt, the packets are usually the problem rather than the salt cellar. Oily, salty pickles and packaged sauces are easy to replace with a fresh chopped salad, a coriander or mint chutney, or a curd-based dip. Herbs, lemon, garlic, ginger, cumin, coriander and turmeric do a great deal of the work that salt was doing.",
        ],
      },
      {
        heading: "What to build the kitchen around",
        body: [
          "Rather than a list of things to avoid, it is easier to stock what you want to be eating. Leafy greens and fenugreek, broccoli, cauliflower, cabbage, okra, aubergine, bottle gourd, ridge gourd, carrots, peppers, tomatoes and mushrooms. Mung beans, red lentils, chickpeas, kidney beans, sprouts, tofu, and curd and paneer in moderation. Walnuts, almonds, pistachios, chia, flaxseed, sesame and pumpkin seeds.",
          "And the spice box you already own: turmeric with a little black pepper, ginger, garlic, cinnamon, cumin, coriander, cloves and cardamom.",
          "One caution about spices. Turmeric and ginger belong in an anti-inflammatory way of eating, but they are not medicines and no single spice will undo the rest of the diet. The pattern is what does the work. This is general food guidance, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "anti-inflammatory-basics",
      "nutrition-basics",
      "movement-and-blood-sugar",
      "prebiotics-and-probiotics",
    ],
    guides: ["anti-inflammatory-diet-guide"],
    references: [
      {
        title: "Foods that fight inflammation",
        publisher: "Harvard Health Publishing, Harvard Medical School",
        year: "2024",
        url: "https://www.health.harvard.edu/staying-healthy/foods-that-fight-inflammation",
        supports:
          "Which foods and patterns to limit, namely sweetened drinks, refined carbohydrates, fried food and saturated fats, and which to favour.",
      },
      {
        title: "Dietary Guidelines for Indians",
        publisher: "ICMR\u2013National Institute of Nutrition",
        year: "2024",
        url: "https://www.nin.res.in/",
        supports:
          "Indian food, oil and portion guidance behind the swaps throughout.",
      },
    ],
  },
  {
    slug: "4m-framework-healthy-aging",
    title: "Four Ms of healthy ageing, the framework",
    category: "Healthy ageing",
    youtubeId: null,
    summary:
      "Movement, Music, Memory and Meaning, and why the four together do what none of them manage alone.",
    keyPoints: [
      "Healthy ageing usually fails for want of structure, not information.",
      "Ageing well happens when physical, cognitive, emotional and social systems are activated together, repeatedly, somewhere familiar.",
      "Movement builds strength, balance and the conditions for a healthy brain.",
      "Music opens a direct path to the brain and makes taking part feel easy.",
      "Memory is about how experience is encoded, not only what is recalled.",
      "Meaning is what decides whether anybody comes back next week.",
    ],
    sections: [
      {
        heading: "Why healthy ageing needs a framework, not just activities",
        body: [
          "Advice about ageing well tends to arrive in pieces. Exercise more. Eat better. Stay positive. Keep the mind busy. Each piece is sound, and almost none of it lasts, because a list of good intentions is not a structure.",
          "What is missing is rarely information. It is a shape that holds the pieces together. Our work with older adults rests on one idea drawn from gerontology, behavioural science and neuroscience: ageing well happens when the physical, cognitive, emotional and social systems are activated together, repeatedly, in a place that feels familiar.",
          "That idea is what the Zealver 4M Framework is built on.",
        ],
      },
      {
        heading: "Movement: the foundation of body and brain",
        body: [
          "Movement supports strength, balance and mobility, coordination and gait, and the brain's capacity to keep adapting. Regular movement improves thinking and mood through better blood flow to the brain and the release of the chemistry that helps brain cells maintain themselves.",
          "The point that surprises people is how little it takes. Low-intensity, seated or supported movement gives older adults measurable benefit. In practice that means chair-based yoga and stretching, dance-based mobility, posture and balance work, and movement games that ask for a little coordination and attention at once.",
          "Movement here is not about intensity. It is about consistency and confidence.",
        ],
      },
      {
        heading: "Music: a direct path to the brain",
        body: [
          "Music supports thinking, emotional steadiness and social bonding, and it does so by lighting up several parts of the brain at once, including those handling memory, language, emotion and movement. Work on music in older populations consistently reports better mood, better recall, and groups that move together more readily.",
          "In a session that looks like rhythm-based warm-ups, singing together, clapping and call-and-response, music paired with movement, and games built on melody and recall.",
          "Music's real contribution is that it lowers the barrier. It makes joining in feel like less of an effort than it is.",
        ],
      },
      {
        heading: "Memory: more than recall",
        body: [
          "Memory supports attention, emotional steadiness, the handling of stress and the resilience to keep going. It is not simply remembering facts: it is about how an experience gets stored and what feeling gets attached to it.",
          "Engagement paired with positive emotion strengthens the pathways involved, and memory does its best work where things feel safe, familiar and enjoyable. In practice that is number and word games, rhythm and pattern recognition, reminiscence prompted by music and stories, small rituals with feeling attached, and a proper wind-down at the end.",
        ],
      },
      {
        heading: "Meaning: the part that decides whether anyone returns",
        body: [
          "Meaning supports motivation, self-worth and emotional resilience, and a strong sense of purpose in later life is associated with less depression, greater life satisfaction and more consistent health behaviour.",
          "The practical version of that is blunt. People do not come back to something because it is good for them. They come back because they feel valued and needed. So a session carries storytelling and shared reflection, cultural expression through songs and traditions, roles and responsibilities for members, skill-sharing, and celebration of the things that matter to individuals.",
          "Meaning is what turns taking part into belonging.",
        ],
      },
      {
        heading: "Why the four work together",
        body: [
          "Separately each of the four helps. Together they compound. When movement, music, memory and meaning arrive in one shared social setting, effort feels lighter, taking part becomes a habit, joy becomes something that lasts, and health improves quietly in the background.",
          "That is not wellbeing by accident. It is designed for.",
        ],
      },
      {
        heading: "From interventions to environments",
        body: [
          "Most attempts to improve ageing focus on adding effort. This framework focuses on removing friction.",
          "Where the routine is predictable, the faces are familiar, the activities feel culturally comfortable and nobody is under pressure, healthy ageing becomes something people live into rather than something they chase.",
          "Longevity is not only about adding years to life. It is about adding movement, memory, meaning and connection to those years. This is general guidance on ageing well, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "movement-healthy-aging",
      "music-brain-health-seniors",
      "memory-cognitive-health-seniors",
      "meaning-belonging-healthy-aging",
      "monthly-activities-zealver-clubs",
    ],
    guides: [],
  },
  {
    slug: "movement-healthy-aging",
    title: "Movement as a community habit",
    category: "Movement",
    youtubeId: null,
    summary:
      "Why consistency beats intensity after 60, and how a chair makes movement possible for almost everybody.",
    keyPoints: [
      "For older adults, how often you move matters more than how hard.",
      "Seated and supported movement gives real, measurable benefit.",
      "Muscle pulling on bone is one of the strongest signals bone gets to stay strong.",
      "Confidence is the quiet outcome: fear of moving is itself a risk.",
      "Movement done with other people, on a fixed day, is the movement that actually happens.",
    ],
    sections: [
      {
        heading: "Consistency over intensity",
        body: [
          "The instruction most older adults have absorbed about exercise is the wrong one. It is about effort, sweat and pushing through, and it puts a great many people off entirely, which is the worst possible outcome.",
          "What the body responds to after 60 is regularity. Ten unhurried minutes on most days does more than an hour once a fortnight, because strength, balance and confidence are all built by repetition rather than by intensity.",
        ],
      },
      {
        heading: "Why a chair changes who can take part",
        body: [
          "A chair removes the two things that stop people: the fear of falling and the fear of being the one who cannot keep up. Seated and chair-supported movement lets someone with poor balance, low stamina or sore joints do the same session as everybody else, at their own depth.",
          "That is not a lesser version of exercise. Rising from a chair without using your hands is the single most functional leg exercise there is, and it is the movement that decides whether someone can get themselves out of a chair at 85.",
        ],
      },
      {
        heading: "What movement is doing underneath",
        body: [
          "Movement supports strength, balance, mobility, coordination and gait, and it improves mood and thinking through better blood flow to the brain.",
          "It is also the main signal bone receives. When muscle contracts it pulls on bone, and that pull is what tells bone it is being used and should stay strong. So the same session pays into both systems at once, which matters a great deal after menopause.",
        ],
      },
      {
        heading: "How it shows up in a session",
        body: [
          "Chair-based yoga and stretching for joint mobility, flexibility and breathing. Dance-based mobility for coordination and circulation. Posture and balance work for steadiness. Light resistance with bands or small weights for strength, posture and grip. Movement games that ask for coordination and attention together.",
          "Following a sequence is itself cognitive work, so structured movement quietly engages attention and working memory alongside the body.",
        ],
      },
      {
        heading: "Why doing it together is the whole point",
        body: [
          "Movement you intend to do alone is movement that gets postponed. A fixed day, a familiar room and people who notice whether you came is what turns intention into habit, and habit is the only thing that produces results over years.",
          "Confidence is the outcome people mention most. Fear of movement leads to less movement, which leads to weaker legs and worse balance, which justifies the fear. Doing it in a group, supported, breaks that circle. This is general movement guidance, not a treatment plan; check with your doctor before starting something new if you have a health condition.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "4m-framework-healthy-aging",
      "chair-dance-for-bone-and-muscle",
      "muscle-strength-and-ageing",
      "balance-exercises",
      "monthly-activities-zealver-clubs",
    ],
    guides: ["stay-strong-after-menopause-guide"],
  },
  {
    slug: "music-brain-health-seniors",
    title: "Music and brain health in seniors",
    category: "Memory",
    youtubeId: null,
    summary:
      "Music is not entertainment around the edges of a session. It is the thing that makes the rest of it possible.",
    keyPoints: [
      "Music activates memory, language, emotion, attention and movement at once.",
      "It lowers the barrier to taking part more effectively than encouragement does.",
      "Familiar songs reach long-term and emotional memory, even where recall is fading.",
      "Singing together supports lyrical recall, breath and confidence.",
      "Its real job is making movement joyful, which is what makes people come back.",
    ],
    sections: [
      {
        heading: "A brain tool, not a backing track",
        body: [
          "Music in a session for older adults is often treated as atmosphere. That undersells it considerably. Music reaches the brain by a direct and unusually wide route, waking cognitive, emotional and motor systems at the same moment, which makes it one of the most useful and most accessible things available.",
          "It earns its place for three reasons: it lowers the barrier to joining in, it makes effort feel lighter than it is, and it turns something that could feel like a health intervention into something that feels like an afternoon worth having.",
        ],
      },
      {
        heading: "Several parts of the brain at once",
        body: [
          "Most activities ask one thing of the brain at a time. Music asks several. Memory, language, emotion, attention and motor coordination are all engaged together, which is why a song can get a room moving when an instruction cannot.",
          "Paired with movement and with remembering, that wide activation is what makes a session more than the sum of its parts.",
        ],
      },
      {
        heading: "Nostalgia reaches what nothing else does",
        body: [
          "A song somebody loved at twenty arrives with the time attached to it. Familiar music reaches long-term and emotional memory in a way that new material does not, and it often keeps working where other kinds of recall have begun to fade.",
          "That is why the music chosen matters. Songs a person grew up with do the work; unfamiliar music, however pleasant, does not.",
        ],
      },
      {
        heading: "Singing, recall and fluency",
        body: [
          "Singing involves language processing, lyric recall and keeping to a sequence, all of which support verbal fluency and mental agility. Karaoke encourages recall and expression in front of a friendly group. Antakshari asks for rapid recall, language and teamwork at speed, wrapped in enough laughter that nobody notices they are working.",
          "Devotional singing adds something else again: emotional steadiness, breath control, and for many people a deep cultural familiarity that makes participation feel natural rather than performed.",
        ],
      },
      {
        heading: "Movement, made joyful",
        body: [
          "Rhythm supports timing, coordination, balance and gentle cardiovascular work. Seated dance to familiar music improves circulation and coordination while feeling like enjoyment rather than exercise.",
          "This is the most important sentence about music in this context: joy is what drives consistency. People return to what they enjoyed. Everything else in a session depends on their coming back, so making movement joyful is not decoration, it is the mechanism.",
          "This is an activity for wellbeing and enjoyment. It is not a treatment for dementia, depression or any medical condition.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "4m-framework-healthy-aging",
      "music-memory-and-mood",
      "memory-cognitive-health-seniors",
      "dementia-friendly-movement",
      "monthly-activities-zealver-clubs",
    ],
    guides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "memory-cognitive-health-seniors",
    title: "Memory and cognition: how social clubs help",
    category: "Memory",
    youtubeId: null,
    summary:
      "Cognitive health is not built alone with a puzzle book. It grows through routine, emotion, movement and company.",
    keyPoints: [
      "Memory does its best work where things feel safe, familiar and enjoyable.",
      "Gentle, regular engagement beats demanding exercises nobody keeps up.",
      "Attention comes first: you cannot recall what you never properly took in.",
      "Predictable routine lowers stress, and lower stress supports memory.",
      "Positive emotion is not a bonus. It is part of how memory forms.",
    ],
    sections: [
      {
        heading: "Why a puzzle book is not enough",
        body: [
          "The standard advice for an ageing memory is to do puzzles. Puzzles are fine, and they are also solitary, silent and easy to abandon after a fortnight.",
          "What the evidence keeps pointing at is combination: thinking, moving, feeling and being with people, activated together and repeatedly in a setting that has become familiar. That combination is hard to arrange alone and straightforward in a group that meets on the same day every week.",
        ],
      },
      {
        heading: "Attention comes before memory",
        body: [
          "Nothing is recalled that was never properly taken in, so attention is where memory work actually starts. Activities built on focused listening do more for recall than they appear to.",
          "Housie is the clearest example. Listening for a number, holding it, finding it, and doing that repeatedly in a room full of people is sustained attention training that nobody experiences as training.",
        ],
      },
      {
        heading: "Movement and thinking, together",
        body: [
          "Following a sequence of movements is a cognitive task as much as a physical one. Remembering what comes next, coordinating limbs, keeping to a rhythm: attention and working memory are all engaged.",
          "That is why movement and cognitive work are not separate halves of a session. Chair-based dance, yoga sequences and structured strength work all carry thinking inside them.",
        ],
      },
      {
        heading: "Reminiscence, language and expression",
        body: [
          "Memory strengthens when paired with positive emotion and shared experience. Music listening and guided conversation draw out reminiscence and storytelling, which reinforces recall while building the relationships that make people return.",
          "Language-based recall matters too. Singing and word games support fluency and confidence, and reading and discussion support comprehension, expression and a sense of one's own mind still being interesting, which is not a small thing after retirement.",
        ],
      },
      {
        heading: "Routine, safety and feeling",
        body: [
          "Familiar routine lowers stress, and stress is bad for memory. A club that meets on the same days, in the same room, with the same faces and a recognisable shape to the session, makes engagement possible for people who would find a new environment each week too much to manage.",
          "The last part is the one most easily missed: memory is strengthened by how an experience felt, not only by repetition. Friendship, laughter and being pleased to be somewhere are not the pleasant surround to the cognitive work. They are part of how it works.",
          "This is general guidance on staying mentally engaged, not medical advice or a treatment for any condition.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "4m-framework-healthy-aging",
      "music-brain-health-seniors",
      "dementia-friendly-movement",
      "meaning-belonging-healthy-aging",
      "monthly-activities-zealver-clubs",
    ],
    guides: [],
  },
  {
    slug: "meaning-belonging-healthy-aging",
    title: "Meaning and belonging in healthy ageing",
    category: "Healthy ageing",
    youtubeId: null,
    summary:
      "Purpose is not a soft extra. It is the thing that determines whether anybody shows up next week.",
    keyPoints: [
      "Purpose in later life is linked to less depression and greater life satisfaction.",
      "People return to a place because they feel valued, not because it is good for them.",
      "Predictable rituals and familiar faces are what build trust.",
      "Dignity is a design decision: a room can be warm or it can feel clinical.",
      "Belonging needs accessibility. If someone cannot join in, they cannot belong.",
    ],
    sections: [
      {
        heading: "The part that decides everything else",
        body: [
          "Meaning supports motivation, self-worth and emotional resilience, and a strong sense of purpose in later life is associated with lower depression, greater life satisfaction and steadier health behaviour.",
          "Stated plainly: meaning is not the reward for participating. It is the reason participation continues. Every other benefit of a weekly club depends on people coming back, and people come back to places where they feel wanted.",
        ],
      },
      {
        heading: "Social first",
        body: [
          "Doing things alone is hard, and doing them without anybody to do them with has very little joy in it. Social connection supports motivation, self-worth and emotional health more reliably than any individual activity.",
          "Small, neighbourhood groups where the same faces appear each week let friendship, trust and small rituals form on their own. Given time, the group stops being an activity and becomes people you know.",
        ],
      },
      {
        heading: "Ritual, rhythm and familiarity",
        body: [
          "Routine brings comfort and confidence, and predictability lowers the effort of deciding. Knowing what day it is, what the room will look like and roughly how the hour will go removes most of the anxiety that stops people attending anything new.",
          "Shared rituals do something more: they turn a series of activities into something that feels like ours rather than something being delivered to us.",
        ],
      },
      {
        heading: "Dignity, culture and being recognised",
        body: [
          "Fear and embarrassment end participation faster than anything physical. A room that feels like a gym or a clinic tells people they are a problem being managed; a warm, ordinary, non-clinical room tells them they are people meeting people.",
          "Meaning deepens where culture and identity can be expressed: the songs, the traditions, the devotional music that carries decades of association. And recognition matters plainly, through birthdays and celebrations that mark a person as somebody whose milestones are worth noticing.",
        ],
      },
      {
        heading: "Belonging requires access",
        body: [
          "There is no belonging without accessibility. If the movement is too hard, the room too far, or the format too fast, the message is that this place is for other people.",
          "Chair-based and inclusive design means someone with poor balance or low stamina takes part alongside everyone else, without apology. That is the whole of it: everybody belongs, or the word means nothing.",
          "This is general guidance on wellbeing and community, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "4m-framework-healthy-aging",
      "memory-cognitive-health-seniors",
      "music-brain-health-seniors",
      "monthly-activities-zealver-clubs",
      "10-essentials-healthy-aging-social-clubs",
    ],
    guides: [],
  },
  {
    slug: "monthly-activities-zealver-clubs",
    title: "Activities at Zealver Clubs",
    category: "Healthy ageing",
    youtubeId: null,
    summary:
      "What actually happens in a session, and which of the four Ms each activity is quietly working on.",
    keyPoints: [
      "Activities are the delivery mechanism for the four Ms, not entertainment around them.",
      "Clubs meet three times a week, with one movement activity and one cognitive or social one each session.",
      "Activities rotate across the month, so no single session has to do everything.",
      "Chair yoga, chair dance and chair strength carry the movement.",
      "Music listening, bhajans, karaoke and antakshari carry music and memory together.",
      "Housie, puzzles, quizzes, reading and celebrations carry memory and meaning.",
    ],
    sections: [
      {
        heading: "Activities are the method, not the add-on",
        body: [
          "Activities here are not chosen because they pass the time. Each one is the means by which one or more of the four Ms actually reaches a person, and the mix is deliberate.",
          "Healthy ageing does not come from doing one activity well. It comes from meeting the right mix, repeatedly, among people you know.",
        ],
      },
      {
        heading: "How a week is shaped",
        body: [
          "Clubs meet three times a week and every session pairs one chair-based movement activity with one cognitive or social one. Activities rotate through the month rather than repeating identically, and no single session tries to cover everything.",
          "The benefit comes from familiarity, repetition, rhythm and shared experience, not from novelty.",
        ],
      },
      {
        heading: "Movement: chair yoga, chair dance, chair strength",
        body: [
          "Chair yoga works on joint mobility, flexibility, balance and breathing, and its predictability is part of the point: a calm, familiar ritual is what makes people comfortable enough to return.",
          "Chair dance pairs seated rhythmic movement with familiar retro film music, which lifts circulation, coordination and mood, and pulls memory and emotion along with it.",
          "Chair strength uses light resistance, bands or small dumbbells, for muscle, posture, grip and the functional confidence that keeps daily life independent. Following the sequence engages attention and working memory too.",
        ],
      },
      {
        heading: "Music and memory: listening, bhajans, karaoke, antakshari",
        body: [
          "Curated retro film music listening draws out reminiscence, conversation and emotional expression, strengthening recall and social bonds at the same time.",
          "Bhajans and devotional singing support emotional regulation, breath control and collective participation, and for many members carry deep cultural meaning.",
          "Karaoke encourages lyrical recall and vocal confidence in a supportive room. Antakshari asks for rapid recall, language processing and teamwork, and generates a great deal of laughter while doing it.",
        ],
      },
      {
        heading: "Cognitive and social: housie, games, quizzes, reading",
        body: [
          "Housie engages attention, listening and number recognition, and works as a social ritual as much as a game.",
          "Games, puzzles and quizzes stimulate logic, pattern recognition and recall without stress or competition, which keeps them open to every ability level.",
          "Reading and discussion support comprehension, recall, language and self-expression, and reinforce intellectual identity, which matters particularly after retirement.",
        ],
      },
      {
        heading: "Celebration",
        body: [
          "Birthdays and community celebrations mark personal milestones with music, conversation and shared ritual. Being recognised strengthens emotional wellbeing and makes belonging concrete rather than theoretical.",
        ],
      },
      {
        heading: "Why the mix is the point",
        body: [
          "No single activity produces healthy ageing. The effect comes because activities repeat, faces stay familiar, the feeling is positive, and effort stays light.",
          "Across a month a member gets movement with safety, music with joy, memory with comfort, and meaning through belonging. These are not classes to attend. They are anchors in a weekly rhythm, which is how healthy ageing stops feeling like a task and starts feeling like somewhere you belong.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "4m-framework-healthy-aging",
      "movement-healthy-aging",
      "music-brain-health-seniors",
      "memory-cognitive-health-seniors",
      "meaning-belonging-healthy-aging",
    ],
    guides: [],
    cta: { label: "See our classes, clubs and events", href: "/experience" },
  },
  {
    slug: "10-essentials-healthy-aging-social-clubs",
    title: "Ten essentials of healthy ageing",
    category: "Healthy ageing",
    youtubeId: null,
    summary:
      "The things that consistently matter for ageing well, and why doing them with other people is what makes them last.",
    keyPoints: [
      "Consistency beats intensity: regular gentle movement outperforms occasional effort.",
      "Cognitive engagement works best alongside movement and company, not alone.",
      "Social connection supports motivation, self-worth and emotional health.",
      "A predictable weekly rhythm removes the friction that ends good intentions.",
      "Music makes participation feel effortless; meaning makes people return.",
      "Dignity, accessibility and being close to home decide who can take part at all.",
    ],
    sections: [
      {
        heading: "Not doing more, doing it together",
        body: [
          "Ageing well is not about attempting more. It is about doing a few right things consistently, with other people. Individual effort matters, but what sustains it is a repeatable pattern somebody enjoys enough to come back to.",
          "Most advice gives the ingredients and leaves out the structure. A club built around integration is that structure.",
        ],
      },
      {
        heading: "Move often, not hard",
        body: [
          "Regular movement supports strength, balance, mobility and the brain's adaptability, and for older adults how often matters more than how hard. Seated and low-impact movement delivers measurable benefit.",
          "Chair yoga, chair dance and chair strength three times a week build a reliable rhythm, and with it the confidence that keeps people moving.",
        ],
      },
      {
        heading: "Keep the mind engaged, in company",
        body: [
          "Ongoing cognitive engagement supports memory, attention and emotional resilience, and does more when paired with positive feeling.",
          "That is why every session carries a thinking or social component alongside the movement: housie, puzzles, quizzes, guided conversation. Gentle and familiar, rather than demanding.",
        ],
      },
      {
        heading: "Connection, rhythm and music",
        body: [
          "Social connection is not a nice extra; doing things without people has little joy and less staying power. Small neighbourhood groups where the same faces appear let trust and friendship form on their own.",
          "Routine does the rest. Predictable schedules reduce decision fatigue, and a clear weekly shape turns healthy behaviour into habit. Music lowers the resistance further, making effort feel lighter and participation feel natural.",
        ],
      },
      {
        heading: "Purpose, dignity and strength",
        body: [
          "A sense of purpose in later life is linked with lower depression, greater satisfaction and better longevity, and it is built through shared routines, friendships, rituals and celebration rather than announced.",
          "Environments matter just as much. Fear or embarrassment ends participation quickly, so sessions need to feel gentle, familiar and non-clinical. And functional strength deserves naming on its own: light resistance work and balance practice are what keep daily independence intact.",
        ],
      },
      {
        heading: "Integration, and keeping it close to home",
        body: [
          "Ageing well happens when systems are activated together rather than in isolation, which is why a session blends movement, music, memory and meaning: chair yoga followed by housie, chair dance paired with karaoke.",
          "The last essential is the most practical. Habits survive when they are near home and emotionally familiar. A club in your own neighbourhood, with faces you recognise, removes the friction that quietly ends most good intentions.",
          "Healthy ageing should not feel forced. It should feel familiar, enjoyable and worth returning to. This is general guidance on ageing well, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "4m-framework-healthy-aging",
      "movement-healthy-aging",
      "memory-cognitive-health-seniors",
      "meaning-belonging-healthy-aging",
      "monthly-activities-zealver-clubs",
    ],
    guides: [],
  },
  {
    slug: "migraine-and-gut-health",
    title: "Migraine and gut health",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "The gut and the brain really do talk to each other. What that means for migraine, and why gut health is one piece of the puzzle rather than the whole of it.",
    keyPoints: [
      "The gut and brain communicate constantly, through nerves, hormones and the immune system.",
      "People who get migraines do have higher rates of digestive problems.",
      "Improving gut health helps some people, particularly those who also have digestive symptoms.",
      "Migraine is a neurological condition with a strong family component. Gut health is not its main cause.",
      "Hormones, sleep, stress, dehydration and individual triggers all matter too.",
      "Any new, severe or changing pattern of headaches needs a doctor.",
    ],
    sections: [
      {
        heading: "The gut and the brain are genuinely connected",
        body: [
          "This is not a fringe idea. The gut and the brain are in constant communication through nerves, hormones and the immune system, and most of the body's serotonin is made in the gut rather than the head. That connection is real and well established.",
          "It shows up in the numbers too. People who get migraines are more likely than others to also have irritable bowel syndrome, constipation, reflux, coeliac disease or inflammatory bowel disease. The two travel together often enough to be worth noticing.",
        ],
      },
      {
        heading: "What that means in practice",
        body: [
          "For some people, and particularly for those who have digestive symptoms alongside their headaches, looking after gut health does seem to reduce how often migraines come. Some studies on particular probiotic strains point the same way, though the findings are mixed and none of this is standard treatment.",
          "So it is a reasonable thing to work on, especially if your stomach is troubling you anyway. It is not a cure and should not be treated as one.",
        ],
      },
      {
        heading: "Where the claim goes too far",
        body: [
          "You will see it said that migraine is largely a gut problem. That is stronger than the evidence supports, and believing it can lead people away from things that would help them more.",
          "Migraine is a neurological condition with a strong family component. Hormonal changes, poor sleep, stress, dehydration, skipped meals, certain medicines, bright light and individual food triggers all play their part, and for many people one of those matters far more than digestion does.",
          "The honest version is this: gut health is one piece of the migraine puzzle, not the whole puzzle. Worth attending to, unlikely to be the answer on its own.",
        ],
      },
      {
        heading: "What is worth doing anyway",
        body: [
          "The things that support gut health are things worth doing regardless: plenty of fibre from vegetables, fruit, beans, lentils and whole grains, a variety of plant foods across the week, fermented foods if they suit you, less ultra-processed food, regular movement, decent sleep and some handle on stress.",
          "For migraine specifically, the unglamorous basics tend to do more than anything exotic. Eat regularly rather than leaving long gaps, keep hydrated, protect your sleep, and keep a simple diary for a few weeks to find your own patterns rather than working from someone else's trigger list.",
          "This is general food and lifestyle guidance, not medical advice. Headaches that are new, severe, different from your usual pattern, or coming with other symptoms should be seen by a doctor rather than managed from a website.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "prebiotics-and-probiotics",
      "nutrition-basics",
      "sleep-and-recovery",
      "understanding-stress",
    ],
    guides: ["acid-reflux-guide"],
  },
  {
    slug: "bones-that-matter-most",
    title: "Bones to protect after 60, and why these five",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "Not every bone carries the same consequences. The five that most often break, and what each one costs you if it does.",
    keyPoints: [
      "Adults have 206 bones. Five of them account for most of the trouble after 60.",
      "Hip: the one that most often ends independence rather than just causing pain.",
      "Spine: collapses quietly, causing height loss, stooped posture and back pain.",
      "Wrist: usually the first to go, and often the first sign that bone has thinned.",
      "Shoulder and pelvis: less talked about, and both make daily life very hard.",
      "The five share one protection: stronger legs, steadier balance and stronger bone.",
    ],
    sections: [
      {
        heading: "Why five bones and not all 206",
        body: [
          "An adult skeleton has 206 bones, and a baby is born with around 270, many of which fuse as they grow. Most of them will never give you a moment's trouble.",
          "A small number account for nearly all the serious consequences after 60, because of where they sit and what they let you do. Knowing which they are makes prevention feel less like a vague instruction and more like protecting something specific.",
        ],
      },
      {
        heading: "The hip",
        body: [
          "The thigh bone is the strongest bone in the body, which tells you something about what it takes to break one. A hip fracture is the injury that most often changes a life rather than interrupting it: hospital, surgery, a long recovery, and a great many people never return to the independence they had before it.",
          "This is the one behind almost all fall-prevention advice, and it is why leg strength and balance matter more than they sound like they should.",
        ],
      },
      {
        heading: "The spine",
        body: [
          "Spinal fractures are different from the others because they often happen without a fall at all. A weakened vertebra can simply compress under everyday load, sometimes without a dramatic moment to point to.",
          "What follows is gradual and easy to mistake for ordinary ageing: losing height, a rounded upper back, persistent back pain, and eventually less room for the lungs to work in. If someone has lost noticeable height or their posture has changed, that is worth mentioning to a doctor rather than accepting.",
        ],
      },
      {
        heading: "The wrist",
        body: [
          "This is the one that comes first. Falling forward, the hand goes out, and the wrist takes the whole weight. It is often the earliest fracture of the group and frequently the first real sign that bone has been thinning quietly for years.",
          "A broken wrist is rarely life-changing in itself, and it is worth treating as a warning rather than bad luck. It is the moment to ask about bone health, not simply to wait for it to heal.",
        ],
      },
      {
        heading: "The shoulder and the pelvis",
        body: [
          "These two get talked about least and cause more difficulty than people expect. The upper arm bone breaks readily in a sideways fall, and a shoulder you cannot use makes dressing, washing, cooking and reaching almost impossible, all at once.",
          "The pelvis is what you stand, walk and balance on. Pelvic fractures in older adults can take months to settle, and that length of reduced movement costs muscle and confidence on its own.",
        ],
      },
      {
        heading: "One set of protections for all five",
        body: [
          "The encouraging part is that you do not need five different plans. Every one of these breaks in the same circumstances: a fall onto bone that has thinned.",
          "So the protection is shared. Stronger legs and better balance mean fewer falls. Weight-bearing movement, enough protein and calcium-rich food keep the bone underneath more able to take a knock. Safe floors, decent light and sensible shoes remove the trips in the first place.",
          "This page is for understanding what is at stake, not for diagnosing yourself. Any concern about your own bone health belongs with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "bone-health-after-menopause",
      "osteopenia-and-osteoporosis",
      "muscle-strength-and-ageing",
      "fall-prevention",
    ],
    guides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
  },
  {
    slug: "muscle-as-your-bodys-engine",
    title: "Muscle as your body's engine, not just for moving",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "Muscle burns your fuel, steadies your blood sugar and sends chemical messages round the body. Why losing it costs far more than strength.",
    keyPoints: [
      "You have around 600 to 650 skeletal muscles. Together they are your largest metabolic organ.",
      "Muscle is where glucose goes after a meal, so more muscle means steadier blood sugar.",
      "Working muscle releases myokines: chemical messengers that calm inflammation and signal bone to build.",
      "Losing muscle slows metabolism, raises blood sugar and worsens balance all at once.",
      "Sarcopenia and osteoporosis usually arrive together, and each makes the other worse.",
    ],
    sections: [
      {
        heading: "More than something that moves you",
        body: [
          "Muscle gets thought of as the thing that lifts the shopping, and that undersells it considerably. Taken together, your skeletal muscles are the largest metabolic organ you have: they burn fuel, store it, generate heat, hold your joints together, keep you upright, and steady your balance.",
          "Which means losing muscle is not simply becoming weaker. It changes how your whole body runs.",
        ],
      },
      {
        heading: "Where your blood sugar goes",
        body: [
          "After a meal, much of the glucose in your blood is taken up by muscle and stored there for later. Muscle is the largest place it can go.",
          "So the more muscle you keep, the more room there is for that glucose, and the steadier blood sugar tends to be. This is the direct link between strength work and blood sugar control, and it is why the two subjects keep turning up together.",
        ],
      },
      {
        heading: "Muscle talks to the rest of you",
        body: [
          "This is the part that has changed how researchers think about it. Contracting muscle releases chemical messengers called myokines, which travel round the body and do a surprising amount: calming inflammation, improving how well insulin works, supporting the brain, and signalling bone to build.",
          "Bone answers back with signals of its own. Muscle and bone are increasingly treated as one connected system rather than two neighbouring ones, which is why the same session pays into both.",
        ],
      },
      {
        heading: "What it runs on",
        body: [
          "Muscle draws on different fuels depending on what you are asking of it. A sudden effort of a few seconds runs on energy already sitting in the cell. A longer, brisker effort mostly burns glucose. At rest and during gentle, sustained activity, fat does most of the work.",
          "Protein is the exception. It is meant for building and repairing muscle, not for burning, and the body only turns to it for fuel when food or protein has been short for a long while. That is worth knowing, because eating too little protein means taking apart the very thing you are trying to keep.",
        ],
      },
      {
        heading: "Why the two losses travel together",
        body: [
          "Muscle loss with age has a name, sarcopenia, and so does bone loss, osteoporosis. They very often arrive in the same person, and they feed each other: less muscle means less pull on bone and less signal to stay strong, while weaker bone and poorer balance make people move less, which costs more muscle.",
          "Together they raise the risk of falls, fractures and losing independence far more than either would alone. The cheering news is that the same things address both: regular movement, work against some resistance, and enough protein to build with. This is general guidance on staying strong, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "muscle-strength-and-ageing",
      "bones-that-matter-most",
      "chair-dance-for-bone-and-muscle",
      "movement-and-blood-sugar",
    ],
    guides: ["stay-strong-after-menopause-guide", "diabetes-management-guide"],
  },
  {
    slug: "diabetes-what-is-happening",
    title: "Diabetes: what it is, and what is happening in the body",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Insulin as a key, the liver as a sugar bank, muscle as the biggest customer. The picture that makes the advice make sense.",
    keyPoints: [
      "Insulin is the key that lets sugar out of the blood and into your cells.",
      "In type 2, the key still turns but the lock has stiffened, so sugar stays in the blood.",
      "The liver is your sugar bank, and in diabetes it keeps paying out when it should not.",
      "Muscle is the biggest customer for that sugar, which is why strength work matters.",
      "It is rarely one cause. Family history, menopause, weight around the middle, inactivity, poor sleep and stress all contribute.",
      "Losing five to ten per cent of body weight makes a real difference.",
    ],
    sections: [
      {
        heading: "The key and the lock",
        body: [
          "Everything you eat that contains carbohydrate is broken down into glucose, a sugar, which travels in the blood. It is useless there. It has to get inside your cells to be burnt for energy.",
          "Insulin, made by the pancreas, is the key that opens the cell door and lets it in. Diabetes is what happens when that system stops working: either there is no key, or the key no longer turns easily. Either way the sugar stays in the blood instead of getting where it is needed, which is why blood sugar rises and why you can feel tired despite eating plenty.",
        ],
      },
      {
        heading: "The different kinds, plainly",
        body: [
          "In type 1, the body has stopped making insulin at all, because the immune system has attacked the cells that produce it. There is no key, so insulin has to be given. It is not caused by diet or weight.",
          "Type 2 is by far the most common. The pancreas is still making insulin, but the body has stopped responding to it properly, which is called insulin resistance. The key still turns, but the lock has stiffened. Over years the pancreas tires from working harder, and may make less.",
          "Prediabetes is the stage before: blood sugar higher than it should be, but not yet in the diabetes range. This is the most hopeful point on the whole path, because changes made here can genuinely prevent what comes next. There are other, less common kinds too, including diabetes caused by damage to the pancreas itself, and diabetes that appears during pregnancy.",
        ],
      },
      {
        heading: "Why type 2 arrives",
        body: [
          "It is almost never one thing. Family history matters a great deal, and so does getting older. For women, menopause changes the picture, and so can polycystic ovary syndrome earlier in life.",
          "Then the everyday contributors: weight carried around the middle in particular, sitting a great deal, a diet heavy in refined carbohydrate, poor sleep, long-running stress, a fatty liver, and some medicines, steroids especially.",
          "Reading that list is meant to be useful rather than accusing. Several of those are things you can work on, which is precisely why the advice exists.",
        ],
      },
      {
        heading: "The liver is your sugar bank",
        body: [
          "This is the part that explains something puzzling. People often find their blood sugar is high first thing in the morning, before they have eaten anything at all, and assume the reading must be wrong.",
          "Your liver stores glucose after meals and releases it back out between them, so you do not run empty overnight. It is a bank: deposits after eating, withdrawals when needed. In diabetes, the bank keeps paying out even when there is plenty already in circulation, and a fatty liver makes that worse.",
          "The good news about a fatty liver is that it responds. Weight loss, movement and better eating improve it, often considerably.",
        ],
      },
      {
        heading: "Muscle is the biggest customer",
        body: [
          "Of everywhere that glucose can go, muscle takes the most. It is the body's largest store for it, which makes muscle central to this rather than incidental.",
          "Two things follow. More muscle means more room for the glucose in your blood to go, so blood sugar tends to be steadier. And exercise lets muscle take up glucose more readily even when insulin is not working well, which is why a walk after a meal has an effect you can measure.",
          "That is the argument for strength work, and it matters especially after menopause, when muscle is being lost anyway.",
        ],
      },
      {
        heading: "What a day of eating can look like",
        body: [
          "The plate is the simplest rule: half vegetables, a quarter protein, a quarter carbohydrate, with some nuts or a sensible oil.",
          "Vegetarian, that might be a gram flour or mung bean pancake with curd at breakfast; vegetables, lentils or kidney beans or chickpeas, paneer or tofu, a flatbread or a little rice, and salad at lunch; and vegetables with protein and a soup at night.",
          "Non-vegetarian, an omelette and curd at breakfast; chicken or fish with vegetables and salad at lunch; a curry with vegetables and a flatbread or a little rice at night.",
          "Fruit is allowed and often wrongly avoided. Eat it whole rather than drinking it as juice: apple, orange, pear, guava, papaya, and mango in modest quantity.",
        ],
      },
      {
        heading: "Six things worth remembering",
        body: [
          "Insulin is the key. The liver is the sugar bank. Muscle is the biggest customer and the biggest burner. Exercise works like medicine. Protein protects the muscle that does the work. And balance matters more than cutting every carbohydrate out.",
          "One more that surprises people: losing five to ten per cent of body weight, where there is weight to lose, makes a real difference to all of this. Not a transformation, a tenth.",
          "Diabetes is not only about a number on a meter. It affects the heart, kidneys, eyes, nerves and feet, which is why the regular checks matter as much as the daily habits. This is general guidance for understanding your condition, not medical advice, and your own treatment belongs with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "movement-and-blood-sugar",
      "muscle-as-your-bodys-engine",
      "nutrition-basics",
      "anti-inflammatory-swaps-indian-kitchen",
    ],
    guides: ["diabetes-management-guide", "lower-your-blood-sugar-guide"],
  },
  {
    slug: "blood-pressure-in-women",
    title: "Blood pressure in women, and why it changes after 55",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "Menopause changes your blood vessels, your salt sensitivity and your risk. What the numbers mean, and why women were studied last.",
    keyPoints: [
      "Around 120/80 or below is the usual target; 130/80 and above is generally treated as high.",
      "Much of the original research was done in men. Women's risk may begin rising at lower numbers.",
      "After menopause, arteries stiffen, belly fat rises and the body holds on to salt more readily.",
      "After 60 the top number matters more than the bottom one for predicting stroke.",
      "Pregnancy complications decades ago still predict risk today, and few women are told this.",
      "High blood pressure damages the brain as well as the heart. There are usually no symptoms.",
    ],
    sections: [
      {
        heading: "It is not really a number, it is a report on your blood vessels",
        body: [
          "Blood pressure gets treated as a score you pass or fail. It is better understood as a reading on how flexible and healthy your arteries are, which is why it matters far beyond the heart.",
          "As a rough guide, around 120/80 or below is where most people want to be. Between about 120 and 129 on the top number is usually called elevated, a signal to change something rather than a diagnosis. From 130/80 upward is generally treated as high blood pressure. Your own targets may differ, and your doctor sets them, not a website.",
        ],
      },
      {
        heading: "Women were studied last, and it shows",
        body: [
          "For a long time the research that shaped these thresholds was done largely in men, and the numbers were applied to everyone. More recent work suggests women's cardiovascular risk may begin climbing at lower pressures than men's, somewhere nearer 110 than 120 on the top number.",
          "The official thresholds have not changed on the back of that. The practical message has: if you have been told your blood pressure is only slightly high, that is not a reason to relax about it.",
        ],
      },
      {
        heading: "What menopause changes",
        body: [
          "Oestrogen keeps blood vessels relaxed and flexible. When it falls, arteries stiffen, and several other things shift at the same time: more fat carried around the middle, muscle quietly lost year on year, the body responding less well to insulin, and the kidneys holding on to salt more readily than they used to.",
          "That last one is worth dwelling on. Two women can eat identical amounts of salt and see very different effects on their blood pressure, and salt sensitivity generally rises after menopause. If cutting salt seems to matter more to you than it used to, you are not imagining it.",
          "Stiffer arteries also change the shape of the reading. A widening gap between the two numbers, something like 160 over 70, is itself a sign of stiffness rather than a reassuringly low bottom number.",
        ],
      },
      {
        heading: "After 60, watch the top number",
        body: [
          "Many older women have a high top number with a perfectly ordinary bottom one, and it gets dismissed on the strength of the second figure. That is the wrong way round.",
          "Past about 60, the top number is the better predictor of stroke, heart failure and cognitive decline. If yours is high and the bottom is fine, that still deserves attention.",
        ],
      },
      {
        heading: "What happened in pregnancy still counts",
        body: [
          "This is the fact that surprises women most, and almost nobody is told it. High blood pressure during pregnancy, pre-eclampsia, or diabetes that appeared while you were pregnant all predict a higher lifetime risk of high blood pressure, stroke, heart and kidney disease, decades later.",
          "Pregnancy works rather like a stress test for the heart and blood vessels. If yours flagged something forty years ago, that information is still relevant now, and it is worth telling your doctor even if nobody has ever asked.",
        ],
      },
      {
        heading: "Why it is called the silent killer",
        body: [
          "You will usually feel completely well while high blood pressure is doing its damage, which is why it can only be caught by measuring rather than by noticing.",
          "And it is not only about the heart. Sustained high pressure damages the brain, raising the risk of stroke, vascular dementia and gradual cognitive decline, as well as the kidneys and the small vessels in the eyes. What is good for your heart really is good for your brain.",
          "Sleep belongs here too. Broken sleep and sleep apnoea become more common after menopause, often without the loud snoring people expect, and poor sleep pushes morning pressure up.",
        ],
      },
      {
        heading: "Five things to hold on to",
        body: [
          "Move, most days, and in company if you can manage it. Build and keep muscle, because working muscle releases messengers that relax blood vessels and improve how insulin works. Eat for it: enough protein, plenty of fibre and potassium from vegetables, fruit and pulses, and less salt from packets. Mind your sleep and your stress. And measure, because nothing else on this list tells you where you stand.",
          "Home readings are worth taking, since clinic readings can run high simply because you are at the clinic. Take them at the same time of day, sitting, after a few minutes of rest, and write them down.",
          "This page is for understanding your readings, not for diagnosing or treating yourself. If you take medication for blood pressure, none of this replaces it, and stopping is a decision only your doctor should make.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "heart-attack-signs-in-women",
      "muscle-as-your-bodys-engine",
      "bone-health-after-menopause",
      "sleep-and-recovery",
    ],
    guides: ["blood-pressure-guide"],
  },
  {
    slug: "heart-attack-signs-in-women",
    title: "Heart attack signs in women, and why they are missed",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "A heart attack in a woman often does not look like the one in films. The signs that get mistaken for acidity, and why waiting costs you.",
    keyPoints: [
      "Chest discomfort is still the commonest sign, but it is often pressure or tightness rather than pain.",
      "Women more often also get breathlessness, unusual exhaustion, nausea, sweating or dizziness.",
      "Pain in the jaw, neck, shoulder, upper back or between the shoulder blades counts too.",
      "These get mistaken for acidity, stress or tiredness, which is why women reach hospital later.",
      "Heart muscle dies while you wait. Call for an ambulance rather than driving or waiting to see.",
      "It is better to be wrong and sent home than right and too late.",
    ],
    sections: [
      {
        heading: "Why the picture in your head is the wrong one",
        body: [
          "Most of us carry a mental image of a heart attack from films: a man clutching his chest and collapsing. For a great many women it does not look like that, and that mismatch is dangerous, because people wait for the dramatic version before taking themselves seriously.",
          "Part of the reason is physical. Women's coronary arteries are smaller, and women more often have disease in the very small vessels rather than a single obvious blockage in a large one. That can mean real, damaging reduced blood flow even when the usual scans look reassuring.",
        ],
      },
      {
        heading: "What to actually look for",
        body: [
          "Chest discomfort remains the most common sign in women, so do not dismiss it. But it may be pressure, tightness, squeezing or a heaviness rather than sharp pain, and it may be mild.",
          "Alongside it, or sometimes instead of it, women more often have: breathlessness out of proportion to what you are doing; exhaustion that is sudden and unlike ordinary tiredness; nausea or vomiting; a cold sweat; light-headedness; and pain or discomfort in the jaw, neck, one or both shoulders, an arm, the upper back or between the shoulder blades.",
          "A great many of these are put down to acidity, indigestion, stress or simply being run down. That is precisely the confusion that delays treatment.",
        ],
      },
      {
        heading: "Why waiting is the thing that costs you",
        body: [
          "During a heart attack, heart muscle is dying, and how much of it survives depends largely on how quickly blood flow is restored. Every half hour of delay means more permanent damage.",
          "Women tend to arrive at hospital later than men do, and a large part of that is not wanting to make a fuss, or being fairly sure it is only acidity. Doctors would far rather see a hundred women with indigestion than miss one heart attack. Being sent home is a good outcome, not an embarrassment.",
        ],
      },
      {
        heading: "What to do",
        body: [
          "If these signs come on suddenly, are severe, or are simply not like you, treat it as an emergency. Call for an ambulance straight away rather than waiting to see whether it passes, and do not drive yourself.",
          "Sit down, stay as calm as you can, and unlock the door so help can get in. If you are with someone who has these signs, stay with them and make the call yourself rather than leaving it to them to decide.",
          "This page is to help you recognise an emergency, not to diagnose or treat one. If in doubt at all, make the call.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "blood-pressure-in-women",
      "muscle-as-your-bodys-engine",
      "movement-healthy-aging",
    ],
    guides: ["blood-pressure-guide"],
  },
  {
    slug: "arthritis-three-kinds",
    title: "Arthritis: the three common kinds, and telling them apart",
    category: "Bones & strength",
    youtubeId: null,
    summary:
      "Osteoarthritis, rheumatoid and gout are different conditions needing different things. Which is which, and the signs that mean see a doctor now.",
    keyPoints: [
      "Arthritis is not one disease. The three common kinds need different treatment.",
      "Osteoarthritis is no longer thought of as simple wear and tear. It affects the whole joint, with low-grade inflammation contributing.",
      "Rheumatoid is autoimmune: inflammation comes first, and early treatment prevents permanent damage.",
      "Morning stiffness under about 30 minutes suggests osteoarthritis; over an hour suggests rheumatoid.",
      "Gout is sudden, severe, often the big toe, often at night, with a red and hot joint.",
      "Movement helps all of them. Complete rest makes them worse.",
    ],
    sections: [
      {
        heading: "Arthritis is not one thing",
        body: [
          "The word covers several quite different conditions, and lumping them together is how people end up managing the wrong one. The three you will hear about most are osteoarthritis, rheumatoid arthritis and gout. They start differently, they look somewhat different, and they need different things done about them.",
        ],
      },
      {
        heading: "Osteoarthritis, and why the old explanation was too simple",
        body: [
          "This is much the most common kind. For decades it was described as a wear and tear disease, as though a joint were a tyre wearing thin. That explanation is still what most people have been told, and current understanding has moved on from it.",
          "It is better described as a disease of the whole joint. The cartilage does gradually break down, but the bone beneath it, the joint lining, the ligaments and the surrounding muscle are all involved, and a low level of ongoing inflammation contributes to how it progresses. It is a more active process than simply wearing out.",
          "What raises the risk: getting older, menopause, carrying extra weight, weak muscle around the joint, an injury years ago, and family history. Typical signs are pain going up stairs or getting out of a chair, a grating or cracking sound, reduced movement, and morning stiffness that eases within about half an hour.",
        ],
      },
      {
        heading: "Rheumatoid arthritis, where inflammation comes first",
        body: [
          "This one is different in kind. It is an autoimmune disease: the immune system attacks the lining of the joint, and the damage to cartilage and bone follows from that inflammation rather than causing it.",
          "The pattern differs too. It usually affects the same joints on both sides, often the small joints of the hands. Morning stiffness lasts well over an hour rather than easing quickly. Joints look swollen and feel warm. There is often real fatigue, and sometimes a low fever or weight loss.",
          "This is the one where timing genuinely matters. Early treatment can prevent permanent joint damage, and the window for that is not indefinite. If this pattern sounds like yours, that is a reason to see a doctor soon rather than to try exercising your way through it.",
        ],
      },
      {
        heading: "Gout",
        body: [
          "Gout is caused by uric acid forming crystals inside a joint. It announces itself unmistakably: sudden, severe pain, very often in the big toe and very often at night, with the joint red, hot and swollen enough that even a bedsheet hurts.",
          "It comes in attacks rather than grumbling along, and it is managed through diet, medication and bringing uric acid down, so it is worth being diagnosed properly rather than guessed at.",
        ],
      },
      {
        heading: "Why women, and why after menopause",
        body: [
          "Arthritis is more common in women, and the gap widens after menopause. Falling oestrogen appears to accelerate cartilage damage, and it arrives alongside muscle loss, bone loss and weight gain, each of which adds to the load a joint carries.",
          "Which is also why the same things keep coming up: keeping muscle, keeping weight sensible, and keeping moving.",
        ],
      },
      {
        heading: "Motion is lotion, and other things worth knowing",
        body: [
          "The single most useful idea here is that movement nourishes a joint rather than wearing it out. Cartilage has no blood supply of its own and depends on gentle use to stay fed. Complete rest makes arthritis worse, not better.",
          "Weight matters more than it sounds like it should, because of leverage. Every extra kilogram you carry puts roughly three to four kilograms of additional load through the knee with each step. Losing five to ten per cent of body weight, where there is weight to lose, makes a genuine difference to pain.",
          "On monsoon: many people are certain their joints are worse in damp weather, and the evidence for weather directly worsening arthritis is genuinely mixed. What is likely is that cold muscles tighten, people move less, and there is less sunlight. Those are worth addressing whatever the cause of the feeling.",
          "Three beliefs worth setting down. Pain does not mean you should rest completely; safe movement is treatment. Arthritis is not simply old age, since weight, muscle, hormones, injury and genetics all play their part. And sensible exercise does not wear joints out; it nourishes them and strengthens the muscle that protects them.",
        ],
      },
      {
        heading: "When to see a doctor rather than manage it",
        body: [
          "Some things should be looked at rather than worked around: a joint that is hot and red, marked swelling, morning stiffness lasting over an hour, sudden unbearable pain, joint pain with a fever, pain that has gone on more than six weeks, or a joint that has visibly changed shape.",
          "Several of those point towards rheumatoid arthritis or gout rather than osteoarthritis, and both are treated quite differently. Getting the right name for it is what gets you the right treatment. This page is to help you understand the differences, not to diagnose yourself.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "muscle-strength-and-ageing",
      "bone-health-after-menopause",
      "chair-dance-for-bone-and-muscle",
      "anti-inflammatory-basics",
    ],
    guides: ["arthritis-and-joint-comfort-guide"],
  },
  {
    slug: "which-kind-of-poor-sleeper",
    title: "Sleep: which kind of poor sleeper are you?",
    category: "Rest",
    youtubeId: null,
    summary:
      "Sleeping badly is not one problem, so it does not have one answer. Find which of the five it is, and treat that.",
    keyPoints: [
      "Good sleep is judged by waking refreshed, not by eight hours or a bedtime.",
      "Busy brain: you cannot drop off. The fix is winding down, not lying there longer.",
      "Interrupted: you wake repeatedly. Find out what is waking you and treat that.",
      "Unrefreshed: you sleep plenty and wake exhausted. This one needs a doctor.",
      "Sleepy all day, or a loud snorer with pauses in breathing: both deserve investigating.",
      "Change one thing, not ten. Pick the biggest obstacle and start there.",
    ],
    sections: [
      {
        heading: "Why the usual list of rules does not work",
        body: [
          "You will have read the advice: bed by ten, no screens, warm milk, no naps. If one set of rules worked for everybody, nobody would have a sleep problem.",
          "When someone says they are not sleeping well, the useful question is not what time they go to bed. It is what actually happens during their night. The reason you sleep badly may be nothing like the reason the woman next to you does, and the same advice given to both will help at most one of you.",
        ],
      },
      {
        heading: "What good sleep actually looks like",
        body: [
          "Before deciding yours is poor, it helps to know what you are aiming at. Someone sleeping well tends to drop off within about fifteen to thirty minutes, stays asleep through most of the night with brief wakings that do not count against them, wakes feeling refreshed, has the energy for the day, and does not keep nodding off in a chair.",
          "Notice what is not on that list: eight hours, and a particular bedtime. Sleep is not judged by how long you were unconscious but by whether you recovered. The first question worth asking yourself is simply whether you wake up feeling refreshed.",
        ],
      },
      {
        heading: "The busy brain",
        body: [
          "You get into bed and cannot drop off. The mind starts on tomorrow's list, or yesterday's conversation, or a worry that waited all day for a quiet moment.",
          "Common reasons are stress, caffeine later in the day than you think, an irregular routine, or simply going to bed before you are actually sleepy. The answer here is winding down rather than lying there trying harder, and a four-step pause when the thoughts start circling.",
        ],
      },
      {
        heading: "The interrupted sleeper",
        body: [
          "You fall asleep easily enough and then wake again and again. This is the group where being a detective pays off, because the treatment depends entirely on what is waking you.",
          "Ask yourself honestly: is it pain, needing the toilet, acidity, noise, a room too hot or too cold, or a mind that starts up the moment you surface? Each of those has its own answer, and none of them is fixed by a general instruction to sleep better.",
        ],
      },
      {
        heading: "The unrefreshed sleeper",
        body: [
          "You sleep seven or eight hours and wake exhausted. This is the group that matters most, and the one most often shrugged off.",
          "Sleep that does not restore you can have real causes: sleep apnoea, thyroid problems, anaemia, depression, long-standing pain, or the medicines you take. If you are getting enough sleep and never feel refreshed, please do not simply conclude you are getting older. This is worth a doctor and possibly a blood test, rather than another herbal tea.",
        ],
      },
      {
        heading: "Sleepy all day, and the snorer",
        body: [
          "If you can drop off sitting on the sofa, nod off in front of the television, or feel sleepy most afternoons, your sleep is either not enough or not restoring you. Either is worth getting to the bottom of.",
          "And this one is worth asking your family about, because you cannot observe it yourself. Do they say you snore loudly? Have they noticed you stop breathing? Do you wake choking? That is not simply hearty snoring. It may be obstructive sleep apnoea, which is common, more so with extra weight, and importantly it is treatable.",
        ],
      },
      {
        heading: "There is no perfect bedtime",
        body: [
          "One myth worth putting down. Some perfectly healthy people sleep nine until five, others half past ten until half past six, others half past eleven until half past seven.",
          "What matters is getting enough, going to bed and getting up at roughly consistent times, and waking refreshed. Your body cares far more about regularity than about a particular number on the clock.",
        ],
      },
      {
        heading: "Your own one change",
        body: [
          "Here is a way to find where to start. Score yourself out of ten on four things: how easily you fall asleep, how well you stay asleep, how refreshed you feel on waking, and how much energy you have through the day. The lowest score is where your sleep journey begins.",
          "Then pick one thing, not ten. Stop caffeine after lunch. Walk in the morning. Deal with the pain before bed rather than after. Keep the same waking time every day. Ask the doctor about the snoring. One targeted change beats overhauling everything, because it is the one you will still be doing in a month.",
          "This is general guidance on sleep, not medical advice. Sleep that does not improve, daytime sleepiness, or snoring with pauses in breathing all deserve a conversation with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "sleep-and-recovery",
      "stop-breathe-notice-choose",
      "understanding-stress",
      "blood-pressure-in-women",
    ],
    guides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "dementia-what-it-is-and-lowering-risk",
    title: "Dementia: what it is, and what lowers the risk",
    category: "Memory",
    youtubeId: null,
    summary:
      "Not a disease but a syndrome, and not a normal part of getting older. Around 45 per cent of cases may be preventable or delayed.",
    keyPoints: [
      "Dementia is a syndrome, not one disease, and forgetting a name is not dementia.",
      "Around 45 per cent of cases worldwide may be preventable or delayed by addressing known risk factors.",
      "Hearing loss, vision loss, loneliness and air pollution are on that list, alongside blood pressure and diabetes.",
      "Brain health starts in the body: inflammation, muscle, sleep and blood sugar all reach the brain.",
      "Think hardware and software. Damage cannot always be repaired; the software can often be improved.",
      "Warning signs worth a doctor: repeating questions, trouble planning, money slipping, personality change.",
    ],
    sections: [
      {
        heading: "What the word actually means",
        body: [
          "Dementia is not the name of a disease. It is a syndrome, a pattern: thinking, memory, judgement and the ability to manage daily life declining together, enough to interfere with ordinary living.",
          "Two things it is not. Forgetting a name or walking into a room and losing the thread is not dementia; that happens to everybody and more so when tired or stressed. And it is not a normal part of getting older. Common at older ages, certainly. Normal, no. That distinction matters, because treating it as inevitable is what stops people acting.",
          "There are several kinds. Alzheimer's disease is the most common. Vascular dementia follows damage to blood vessels in the brain and is closely tied to blood pressure, diabetes and stroke. There are others, including Lewy body and frontotemporal dementia, and many people have more than one kind at once.",
        ],
      },
      {
        heading: "Think of hardware and software",
        body: [
          "Here is a way to hold it. If a computer stops working properly, the first question is whether the trouble is hardware or software.",
          "The brain has both. The hardware is the physical part: the cells, the blood vessels, the connections between them, and that is what Alzheimer's disease or a stroke damages. The software is how the brain runs: remembering, paying attention, finding words, planning, solving problems, and adapting when something changes.",
          "The encouraging part is that while damaged hardware often cannot be repaired, the software can frequently be improved. The brain goes on making new connections throughout life, which is called neuroplasticity, and it does it in response to being used: moving, dancing, music, learning something unfamiliar, meeting people, playing games.",
          "One particular kind of software is worth naming. Cognitive flexibility is the ability to adapt when things change: a new route, a new step in a routine, a plan that shifts. Finding change increasingly difficult can be an early sign, and practising it is one of the things a dance class quietly does.",
        ],
      },
      {
        heading: "Around 45 per cent may be preventable",
        body: [
          "This is the most hopeful number in the whole subject, and most people have never heard it. Reviewing the evidence, the Lancet Commission concluded that a large share of dementia cases worldwide, in the region of 45 per cent, could be prevented or delayed by addressing known risk factors across a lifetime.",
          "Not all of them, and not for everybody. Age and family history are not negotiable. But nearly half is a great deal more than nothing, and it is the opposite of the fatalism most people carry about this.",
        ],
      },
      {
        heading: "What is on the list",
        body: [
          "Some are the ones you would expect: high blood pressure, diabetes, high cholesterol, obesity, smoking, heavy drinking, physical inactivity, depression, head injury.",
          "Others surprise people. Untreated hearing loss is one of the larger ones, and hearing aids are the remedy nobody thinks of as brain care. Vision loss is on the list too, and much of it is correctable. So are air pollution, loneliness and social isolation, and poor sleep.",
          "Loneliness deserves a line of its own, because it is the one most often dismissed as merely sad. Long-term studies have associated it with something like a thirty per cent higher risk of dementia. How much of that is cause and how much is company that a declining memory drives away is still being worked out, but it is more than enough reason to treat company as part of looking after your brain rather than a pleasant extra.",
          "Hearing and vision are worth acting on precisely because they are so fixable. If you are straining to follow conversation, that is not merely inconvenient; it withdraws you from company and understimulates the brain at the same time.",
        ],
      },
      {
        heading: "Brain health starts in the body",
        body: [
          "The biggest shift in this field is that the brain is no longer thought of on its own. What happens in the rest of the body reaches it.",
          "Chronic inflammation is a fire that never quite goes out, and over years it damages blood vessels and brain cells. Diabetes, extra weight around the middle, smoking, poor diet, inactivity, stress and bad sleep all keep it burning.",
          "Muscle works the other way. Active muscle steadies blood sugar, lowers inflammation and releases messengers that reach the brain, which is why strength work belongs in a conversation about memory.",
          "Sleep is when the brain does its clearing up. During deep sleep it washes out waste that has accumulated through the day, including the proteins associated with Alzheimer's disease. Poor sleep also raises blood pressure, worsens blood sugar and adds to inflammation, so it costs you twice. Untreated sleep apnoea is worth taking seriously here.",
          "And protein supplies the raw material for the chemical messengers the brain runs on, as well as protecting the muscle that does all of the above.",
        ],
      },
      {
        heading: "Signs worth taking to a doctor",
        body: [
          "Asking the same question repeatedly. Putting things down and losing them regularly. Struggling to plan or follow steps that used to be automatic. Difficulty keeping track of money. A change in personality or temperament. Becoming distressed by any change in routine. Everyday tasks starting to feel hard. Withdrawing from company.",
          "None of these proves anything on its own, and several have other explanations entirely, including depression, thyroid problems, medication and poor sleep, some of which are straightforwardly treatable. That is exactly why it is worth being looked at rather than worried about privately.",
        ],
      },
      {
        heading: "What to do about it",
        body: [
          "Move most days, and do something strengthening a couple of times a week. Eat enough protein. Keep blood pressure, blood sugar and cholesterol in hand. Sleep properly and get snoring checked. Get your hearing and your eyes tested and use the aids if you need them. Stay among people. Keep learning things.",
          "Brain health does not start in the brain. It starts with the whole body, and almost everything on that list is something you can begin this week.",
          "This is general guidance on reducing risk, not medical advice, and not a way to diagnose yourself or anybody else. Any concern about memory belongs with a doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "memory-cognitive-health-seniors",
      "dementia-friendly-movement",
      "which-kind-of-poor-sleeper",
      "blood-pressure-in-women",
    ],
    guides: ["dementia-engagement-guide", "five-things-you-can-do-for-stress-guide"],
    references: [
      {
        title:
          "Dementia prevention, intervention, and care: 2024 report of the Lancet standing Commission",
        publisher: "The Lancet",
        year: "2024",
        url: "https://www.thelancet.com/commissions/dementia2024",
        supports:
          "The estimate that around 45 per cent of dementia cases may be preventable or delayed, and the list of modifiable risk factors including hearing and vision loss.",
      },
    ],
  },
  {
    slug: "metabolism-and-the-weighing-scale",
    title: "Metabolism: why the weighing scale is the wrong measure",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Two women at the same weight can be in completely different health. What the scale misses, where fat is stored, and the hormones behind it.",
    keyPoints: [
      "The scale tells you what you weigh, not what you are made of.",
      "Muscle, fat under the skin, and fat around the organs are three different things.",
      "Indian bodies commonly carry more fat and less muscle at any given weight.",
      "Fat around the organs, in the liver and inside muscle is the fat that causes trouble.",
      "Carbohydrate, insulin and fat burning sit in a chain: high insulin means storing rather than burning.",
      "Muscle is the lever. Build it and the rest gets easier.",
    ],
    sections: [
      {
        heading: "What the scale cannot tell you",
        body: [
          "A weighing scale gives you one number, and that number cannot distinguish between muscle and fat, or tell you where the fat is sitting. Two women of identical weight and height can be in quite different health.",
          "What is worth knowing instead is your body composition: roughly how much of you is muscle, how much is fat, and how much of that fat is packed around your organs rather than under your skin. Many gyms and clinics can measure this, and it is a far more useful conversation than the one the bathroom scale starts.",
          "It also explains something that frustrates people. Someone doing strength work may see the scale barely move while their shape, strength and blood results all improve, because they are gaining muscle as they lose fat. That is progress, and the scale reports it as failure.",
        ],
      },
      {
        heading: "Why this matters particularly for Indian bodies",
        body: [
          "This is the part most worth knowing, and it is rarely said. At any given weight or body mass index, Indian bodies tend to carry more fat and less muscle than the European bodies those measurements were originally based on, and to carry more of that fat around the middle.",
          "It is sometimes called the thin-fat pattern: someone who looks slim, whose weight is entirely unremarkable, and who nonetheless has a high proportion of body fat, little muscle, and a raised risk of diabetes and heart disease.",
          "The practical consequence is simple. If you are Indian, being a normal weight is not by itself reassurance. What you are made of matters more than what you weigh.",
        ],
      },
      {
        heading: "Where fat gets stored, and why that matters more than how much",
        body: [
          "Fat under the skin, on hips, thighs and arms, is the least troublesome kind. It is doing roughly what fat is meant to do.",
          "The fat that causes problems is elsewhere. Visceral fat packs in around the organs in the abdomen. Fat accumulates in the liver, which is what fatty liver means. It gathers inside muscle, where it interferes with how well muscle responds to insulin. And it collects in the pancreas, the organ making the insulin in the first place.",
          "That is why a waist measurement tells you more than a weight does, and why two people carrying the same extra weight in different places face different risks.",
        ],
      },
      {
        heading: "The chain: carbohydrate, insulin, fat",
        body: [
          "These three are not separate subjects, they run in order. Carbohydrate is broken down to glucose, glucose in the blood prompts insulin, and insulin moves it into muscle and liver to be used or stored. Whatever exceeds what those stores can hold is converted to fat.",
          "The part worth holding on to is what insulin does while it is high: the body is in storing mode rather than burning mode. Fat is released and burned most readily when insulin has come down and energy is needed.",
          "So the order matters. If carbohydrate handling is working well, insulin does its job and settles, fat burning becomes easier, and muscle is preserved. If it is not, insulin stays up, fat burning is suppressed, and more of what you eat is directed into storage. That is the whole argument for eating three proper meals rather than grazing all day, and for a decent gap overnight.",
        ],
      },
      {
        heading: "Four hormones worth knowing by name",
        body: [
          "Insulin decides whether you are storing or burning. It responds most to refined carbohydrate, and it settles with protein at meals, fewer episodes of eating, and strength work.",
          "Leptin is the signal that says you have had enough. In long-standing excess weight the brain can stop responding to it properly, which is why fullness stops registering. Protein, proper sleep and regular activity all help.",
          "Ghrelin is the one that makes you hungry, and it rises sharply with poor sleep. A bad night genuinely makes you hungrier the next day; that is chemistry, not weak will.",
          "Cortisol is the stress hormone, and sustained stress pushes fat towards the abdomen and worsens insulin resistance. Which is why stress and sleep belong in a conversation about weight at all.",
        ],
      },
      {
        heading: "What actually slows things down",
        body: [
          "Low muscle mass is the largest one, and the most fixable. Then insulin resistance, poor sleep, untreated sleep apnoea, long-running stress, sitting for most of the day, and a diet heavy in refined carbohydrate.",
          "Two deficiencies are worth testing for rather than guessing at, vitamin B12 and vitamin D, both common and both correctable. Some medications slow things too, which is a conversation with your doctor rather than a reason to stop anything.",
        ],
      },
      {
        heading: "What to do with all this",
        body: [
          "Three balanced meals rather than constant grazing. Protein at each of them. A reasonable gap overnight, ten to twelve hours between dinner and breakfast, which most people manage without calling it fasting. Refined carbohydrate swapped for whole. Water. Strength work two or three times a week and movement most days. Seven to nine hours of sleep. Stress taken seriously.",
          "And the change of target: stop chasing the number on the scale and chase what it is made of. Build muscle, reduce the fat around your middle, improve how your body handles sugar. Those are the things that decide how well you age, and the scale is nearly silent on all three.",
          "This is general guidance on health and habits, not medical advice, and not a weight-loss programme. Body composition, blood tests and any medication are matters for your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "muscle-as-your-bodys-engine",
      "diabetes-what-is-happening",
      "which-kind-of-poor-sleeper",
      "movement-and-blood-sugar",
    ],
    guides: ["diabetes-management-guide", "stay-strong-after-menopause-guide"],
  },
  {
    slug: "rice-and-roti",
    title: "Rice and roti: you do not have to give them up",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Neither is the villain. What matters is the portion, what you eat alongside, and the order you eat it in.",
    keyPoints: [
      "Rice and roti are both carbohydrate. Neither is inherently better than the other.",
      "Millets are carbohydrate too. Jowar, bajra and ragi are not free foods.",
      "Brown or red rice is not automatically better for you than white. Responses differ.",
      "Eating order helps: protein first, then vegetables, then fats, carbohydrate last.",
      "One roti, or a small serving of rice, with the rest of the plate doing the work.",
      "Cooled and reheated rice, and a little vinegar with the meal, both nudge the response down.",
    ],
    sections: [
      {
        heading: "Start with the permission",
        body: [
          "You do not have to give up rice or roti. A great deal of dietary advice arrives as prohibition, people cannot keep to it, and they conclude they have failed rather than that the advice was unliveable.",
          "Both are carbohydrate, and neither is inherently superior to the other. Which you eat is mostly culture and preference, and those are good reasons. The question worth asking is not which to abandon but how much, alongside what, and in what order.",
        ],
      },
      {
        heading: "The millet misunderstanding",
        body: [
          "This one is worth saying plainly, because there is a great deal of enthusiasm for millets at the moment and it has hardened into a belief that they are somehow free.",
          "Jowar, bajra, ragi, rajgira and makka are all carbohydrate. They bring useful fibre and minerals with them, which is a genuine advantage, and they will still raise your blood sugar. A large plate of bajra rotis is a large plate of carbohydrate. Swapping the grain is worth doing; swapping the grain and then eating twice as much is not.",
          "The same caution applies to rice. Brown and red rice are not automatically better for you than white, and people respond differently to all of them. Long-grain tends to raise blood sugar less than short-grain, but that is a tendency rather than a rule about you.",
        ],
      },
      {
        heading: "What to eat instead, if you want alternatives",
        body: [
          "For roti, a moong dal or gram flour pancake is filling, high in protein and genuinely quick. Moong dal khakhra works as a lighter option. Almond flour roti is low in starch and high in protein, bound with a little psyllium husk, and it is considerably more expensive, so treat it as a nice option rather than the standard to aim for.",
          "For rice, cauliflower rice and konjac rice are both very low in carbohydrate, though neither tastes like rice and it is worth knowing that before you buy a packet.",
          "There is also a small trick with ordinary rice: cooking it, cooling it properly, and reheating it changes some of the starch into a form your body absorbs less readily. The effect is modest rather than transformative, and it costs nothing to do with yesterday's rice.",
        ],
      },
      {
        heading: "Order matters more than people expect",
        body: [
          "This is the most useful thing on this page and it requires you to give up nothing at all. Eat the protein first, then the vegetables or salad, then the fats, and leave the rice or roti until last.",
          "The same meal, eaten in that order, tends to produce a smaller rise in blood sugar than the same food eaten carbohydrate-first. You are not eating less; you are eating it in a different sequence. For anyone who has found every other piece of advice unbearable, start here.",
        ],
      },
      {
        heading: "Portion, and what fills the rest of the plate",
        body: [
          "If you want ordinary wheat roti, have one, and let protein, vegetables and a sensible fat do the rest of the work. If you want rice, take a modest serving and build the plate around it rather than under it.",
          "That is really the plate method said another way: half vegetables, a quarter protein, a quarter the grain you like. The grain is not removed, it is just no longer the largest thing on the plate.",
        ],
      },
      {
        heading: "Two more things, with caveats",
        body: [
          "Some people find a little vinegar taken with a carbohydrate-rich meal blunts the rise afterwards. In Japan rice is often prepared with rice vinegar, which is one way to get it in without it tasting like medicine. It suits some people and not others, and if you have reflux or sensitive teeth it may not suit you at all, so treat it as an experiment.",
          "And the honest answer to which grain is best for you is that nobody can tell you from a page. Responses genuinely differ between people. Some use a continuous glucose monitor for a few weeks to find out what their own body does with different meals, which is a conversation to have with your doctor rather than something to order on impulse.",
          "The principle that holds all of this together: the best approach is the one you can keep up, that fits how you actually eat, and that your own body responds well to. This is general food guidance, not medical advice.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "diabetes-what-is-happening",
      "anti-inflammatory-swaps-indian-kitchen",
      "nutrition-basics",
      "movement-and-blood-sugar",
    ],
    guides: ["diabetes-management-guide", "lower-your-blood-sugar-guide"],
  },
  {
    slug: "eating-before-and-after-exercise",
    title: "Eating before and after a class",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "Whether you need to eat first, what to have if you do, and the one meal that actually matters, which is the one afterwards.",
    keyPoints: [
      "For a gentle, chair-based session, most people do not need to eat beforehand at all.",
      "If you want something, keep it small and have it about half an hour before.",
      "A piece of fruit is ideal. Fruit with a few nuts is fine; a handful of nuts alone sits heavily.",
      "Avoid starting straight after a large meal, and avoid going in light-headed on nothing.",
      "The meal that matters most is the one after: protein within a couple of hours.",
      "If you take medication for diabetes, exercise can lower blood sugar. Ask your doctor first.",
    ],
    sections: [
      {
        heading: "Do you need to eat first at all?",
        body: [
          "For a gentle, chair-based hour, usually not. This is not a two-hour training session and your body has plenty in reserve for it. Most people are perfectly comfortable coming as they are.",
          "There are two situations where it matters. If you tend to feel light-headed or shaky when you have not eaten, do not go in on nothing. And if you have just finished a large meal, give it an hour or two, because moving about on a full stomach is uncomfortable and worse if you are prone to reflux.",
        ],
      },
      {
        heading: "If you do want something",
        body: [
          "Keep it small and have it around half an hour before, not five minutes before. A piece of fruit on its own is close to ideal: a banana, an apple, a couple of dates. It is easy to digest and gives you something to work with.",
          "Fruit with a small handful of nuts is fine too. Nuts on their own, or a large quantity of them, are worth avoiding right before moving: the fat slows digestion and you feel it. A little curd or a boiled egg alongside the fruit works well if you want something more substantial.",
          "And drink some water before you start rather than waiting until you are thirsty.",
        ],
      },
      {
        heading: "The meal that actually matters",
        body: [
          "Most attention goes on what to eat before, and the one that counts is the meal afterwards. Movement gives muscle the signal to rebuild; protein gives it the material. Without the second, the first achieves considerably less.",
          "Aim for a proper protein-containing meal within about two hours of the session. Curd, dal, paneer, tofu, eggs, fish or chicken all do the job, and it does not need to be anything special or immediate. This matters more after 60 than it did at 40, because muscle is harder to hold on to and easier to lose.",
        ],
      },
      {
        heading: "One caution, if you take medication for diabetes",
        body: [
          "Exercise lowers blood sugar, which is mostly the point. If you take insulin or certain tablets for diabetes, that effect can combine with your medication and take your blood sugar lower than intended, sometimes during the session and sometimes hours afterwards.",
          "This is not a reason to avoid exercise; it is one of the best things you can do. It is a reason to talk to your doctor about timing, about whether anything needs adjusting, and about whether you should carry something sugary with you. Tell whoever is leading the session too, so somebody else knows.",
          "This is general guidance around activity and food, not medical advice, and anything involving your medication belongs with your doctor.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "muscle-as-your-bodys-engine",
      "nutrition-basics",
      "movement-and-blood-sugar",
      "chair-dance-for-bone-and-muscle",
    ],
    guides: ["stay-strong-after-menopause-guide", "diabetes-management-guide"],
  },
  {
    slug: "garba-and-dandiya-for-seniors",
    title: "Garba and dandiya: dance that happens to be exercise",
    category: "Movement",
    youtubeId: null,
    summary:
      "Steps you already know, music you grew up with, and a circle where everybody faces everybody. Why it works so well after 60.",
    keyPoints: [
      "Nobody has to learn it. The steps and the songs are already in you.",
      "Clapping to a beat trains timing, coordination and using both sides together.",
      "Dandiya sticks add a target to hit, which sharpens reaction and attention.",
      "Seated dandiya keeps people in the room who cannot stand for an hour.",
      "The circle is the point: everybody faces everybody, and nobody is at the back.",
      "It need not wait for Navratri. The benefit comes from doing it often.",
    ],
    sections: [
      {
        heading: "The advantage it starts with",
        body: [
          "Most exercise for older adults has to be taught before it can be done, and being taught something new in front of other people is exactly what puts people off.",
          "Garba does not have that problem. The steps are already in you, the songs are ones you have known for fifty years, and nobody in the room feels like a beginner. That is a considerable head start, and it is why a Garba session gets people moving who would never come to an exercise class.",
        ],
      },
      {
        heading: "What the clapping is doing",
        body: [
          "The clap is not decoration. Keeping to a beat is timing. Clapping while stepping is doing two things at once with two halves of the body, which is coordination and attention working together.",
          "Arms come up and out, which is shoulder range most people stop using. Turning through the circle asks for balance and for the small corrections that keep you upright. None of it announces itself as exercise, which is precisely why people keep doing it.",
        ],
      },
      {
        heading: "Why dandiya adds something",
        body: [
          "Sticks change the task. Now there is a target to meet, another person's timing to match, and a consequence if you are late. That sharpens reaction and attention in a way that moving alone does not.",
          "It is also naturally partnered, so the movement carries a conversation with it. You are not performing beside somebody, you are doing something with them.",
        ],
      },
      {
        heading: "Seated dandiya, and who it keeps in the room",
        body: [
          "Not everybody can stand and turn for an hour, and the usual outcome is that those women sit at the edge and watch. Seated dandiya removes that.",
          "The arms, the rhythm, the striking, the partner and the music are all intact. What has gone is the standing, which for many people is the only part that was ever the problem. Someone with poor balance, sore knees or low stamina does the same session as everybody else, and that changes how they feel about being there.",
        ],
      },
      {
        heading: "The circle is not incidental",
        body: [
          "Look at the shape. In a class everybody faces the front and the back row is anonymous. In a circle everybody faces everybody, there is no back, and you can see whether the woman opposite has come this week.",
          "That is why these sessions build friendships faster than a class does. The formation is doing social work while the music is doing the movement.",
        ],
      },
      {
        heading: "It need not wait for Navratri",
        body: [
          "The obvious limitation is that Garba belongs to nine nights of the year. It does not have to. The benefit of any movement comes from doing it regularly, and there is nothing about the steps or the music that expires in October.",
          "Dancing it in July is not a diminished version of the real thing. It is the same movement, the same music and the same company, available fifty-two weeks a year instead of one.",
          "This is general activity guidance, not medical advice. Move at your own pace, sit out anything that does not feel right, and check with your doctor before starting something new if you have a health condition.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "chair-dance-for-bone-and-muscle",
      "music-memory-and-mood",
      "balance-exercises",
      "meaning-belonging-healthy-aging",
    ],
    guides: ["five-things-you-can-do-for-stress-guide"],
  },
  {
    slug: "chair-dance-fitness-benefits",
    title: "Chair dance fitness: what it actually does for you",
    category: "Movement",
    youtubeId: null,
    summary:
      "Five things a seated, music-led session gives you, why the chair is the reason it works, and what it does not do.",
    keyPoints: [
      "Strength and energy: the legs, arms and core all work, seated.",
      "Balance: practised safely, with something solid within reach.",
      "Joint comfort: movement feeds joints, and resting them makes stiffness worse.",
      "Mood: music, company and moving all lift it, and they arrive together.",
      "Independence: the point of all four, and the reason any of it matters.",
      "Five to ten minutes most days does more than an hour once a fortnight.",
    ],
    sections: [
      {
        heading: "Why the chair is the reason it works",
        body: [
          "The chair is usually read as a limitation, something for people who cannot do the real thing. It is closer to the opposite: it is the feature that lets almost anybody take part.",
          "Two fears stop older women exercising, and the chair answers both. The fear of falling goes, because you are seated or holding something solid. And the fear of being the one who cannot keep up goes, because everybody is doing the same session at their own depth, and nobody can tell who is finding it harder.",
          "That is not a lesser form of exercise. It is what gets someone into the room who would never go to a gym, and the movement that happens is the movement that counts.",
        ],
      },
      {
        heading: "Strength and energy",
        body: [
          "A session works more than it looks like it does. Rising from the chair and sitting back down is the most functional leg exercise there is. Straightening and holding a knee works the thigh. Arms lifting and reaching work the shoulders through a range most people stop using. Holding yourself upright throughout is the core doing its job.",
          "The energy part is what people notice first and doubt beforehand. Moving regularly makes you less tired rather than more, because strength makes ordinary tasks cost less. There is a deeper reason too: muscle is the body's largest metabolic organ, which is a subject in itself.",
        ],
      },
      {
        heading: "Balance, practised safely",
        body: [
          "Balance is a skill, and like any skill it fades when it is never used. The difficulty is that the people who most need to practise it are the ones for whom practising it feels dangerous.",
          "A chair solves that. Weight shifting, heel raises, standing on one foot, stepping to the side, all done with something solid within reach. You can work at the edge of your balance without any real risk of going over, which is the only way anybody improves.",
        ],
      },
      {
        heading: "Joints that move more comfortably",
        body: [
          "The instinct with a sore knee or a stiff shoulder is to rest it, and beyond a day or two that usually makes it worse. Cartilage has no blood supply of its own and relies on gentle movement to stay nourished.",
          "Seated movement lets you take a joint through its range without loading it with your whole body weight, which is why it suits stiff hips, sore knees and painful shoulders particularly well. Stronger muscle around a joint also carries load the joint would otherwise take.",
        ],
      },
      {
        heading: "Mood, and why it is not a soft benefit",
        body: [
          "Three things that reliably lift mood arrive at once here: movement, music you grew up with, and other people. Each works on its own, and together they do more than any of them would separately.",
          "This is not the pleasant extra around the real business of exercise. Enjoyment is the mechanism, because it is what decides whether anyone comes back next week, and everything else on this page depends on coming back.",
        ],
      },
      {
        heading: "Independence, which is the point of the other four",
        body: [
          "Strength, balance, comfortable joints and decent spirits are not ends in themselves. What they add up to is getting out of a chair without help, managing the stairs, carrying your own shopping, going out without calculating the risk, and living in your own home on your own terms.",
          "That is what is actually being protected, and it is worth naming, because five minutes of seated marching does not feel like it is protecting anything. It is.",
        ],
      },
      {
        heading: "What it does not do",
        body: [
          "Being honest about the limits is what makes the rest of it trustworthy. A gentle seated session is mobility, coordination and light endurance. It is not the same as asking your muscles to work against real resistance, and muscle grows stronger only when it is regularly asked for a bit more than it is comfortable with.",
          "The answer is not to do something else instead. It is to build a little resistance into what you are already doing: rising without using your hands, rising more slowly, holding a leg out longer, heel raises at the chair back. Treat chair dance as the foundation and the habit, with strength work on top rather than instead.",
          "Five to ten unhurried minutes most days does more than an hour once a fortnight. This is general activity guidance, not medical advice, and it is worth checking with your doctor before starting something new if you have a health condition.",
        ],
      },
    ],
    body: [],
    relatedTopics: [
      "chair-dance-for-bone-and-muscle",
      "muscle-as-your-bodys-engine",
      "balance-exercises",
      "garba-and-dandiya-for-seniors",
    ],
    guides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
    cta: { label: "See our classes, clubs and events", href: "/experience" },
  },
];

/** Every paragraph of a topic, whichever shape it uses. */
export function topicParagraphs(t: Topic): string[] {
  return t.sections?.length ? t.sections.flatMap((sec) => sec.body) : t.body;
}

export const topicsBySlug = new Map(topics.map((t) => [t.slug, t]));

export function getTopic(slug: string) {
  return topicsBySlug.get(slug) ?? null;
}

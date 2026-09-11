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
  imageCredit?: string; // required visible credit for CC-BY images
  summary: string;
  body: string[];
  relatedTopics: string[]; // slugs
  guides: string[]; // guide slugs this topic appears in
  references?: Reference[];
};

export const topics: Topic[] = [
  {
    slug: "fall-prevention",
    title: "Fall prevention",
    category: "Balance & safety",
    youtubeId: null,
    summary:
      "Simple daily habits and gentle exercises that help you stay steady on your feet and move with confidence.",
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
    body: [
      "Eating well later in life is less about strict rules and more about steady, everyday habits: enough protein, plenty of colour on the plate, and staying comfortably hydrated through the day.",
      "Try to include a protein source at each meal, dal, beans, eggs, dairy, paneer, fish or chicken, to help maintain muscle and strength. Fill half the plate with vegetables and fruit for fibre and vitamins, and keep a glass of water in sight, since the feeling of thirst fades as we age.",
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
    body: [
      "Good sleep is built during the day as much as at night. Daylight, gentle activity, and a calm wind-down routine all tell your body when it is time to rest.",
      "Try to keep to similar sleep and wake times, get some natural light in the morning, and ease off tea and coffee in the afternoon. In the last hour before bed, dim the lights, set screens aside, and do something soothing, slow breathing, a few gentle stretches, or quiet music.",
      "If your mind is busy, a warm, dark, quiet room and a slow count of your breaths can help you drift off. This is general rest guidance; if sleep is a persistent struggle, it is worth mentioning to your doctor.",
    ],
    relatedTopics: ["nutrition-basics", "dementia-friendly-movement"],
    guides: ["lower-your-blood-sugar-guide"],
  },
  {
    slug: "anti-inflammatory-basics",
    title: "Anti-inflammatory basics",
    category: "Food & energy",
    youtubeId: null,
    summary:
      "The everyday foods that help calm inflammation, and simple swaps you can make one meal at a time.",
    body: [
      "You do not need a special diet to eat in a way that is kind to your joints and energy, mostly it means leaning towards whole, colourful foods and easing back on heavily processed ones.",
      "Build meals around vegetables and fruit, whole grains, beans and lentils, nuts, and sources of healthy fat such as olive oil. Colourful produce, herbs and spices like turmeric and ginger, and oily fish are gentle, everyday additions. Where you can, swap sugary drinks and packaged snacks for fruit, nuts or a small handful of roasted chana.",
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
    body: [
      "Bone is not the dry, finished thing most of us picture. It is living tissue, and your skeleton is being quietly renewed all the time, a little taken away, a little rebuilt, year after year. Think of a building under continuous renovation rather than one that was finished long ago.",
      "In younger adulthood the taking away and the building sit in rough balance. Around menopause that balance shifts, because oestrogen helps keep the taking-away side in check, and oestrogen falls. Bone is then lost faster than it is replaced. This is ordinary and it happens to everybody, so it is not a personal failing and it is not the end of the story.",
      "What makes the difference is what happens next. Bone responds to being used. When muscle pulls on bone, the bone gets a signal that it is needed and should stay strong, which is why strength work and being on your feet matter so much here. Enough protein and calcium-rich food give your body the material to work with.",
      "The habit to build is unhurried and regular rather than dramatic: move most days, challenge your muscles a couple of times a week, eat well, and keep your balance sharp so a stumble stays a stumble. This is general guidance on staying strong, not a diagnosis or a treatment plan. If you have questions about your own bone health, that is a conversation for your doctor.",
    ],
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
    body: [
      "These two words come up a lot and they worry people more than they need to, usually because they sound like two separate diseases. They are better understood as points along one line. Bone strength runs from healthy, through a middle stretch where it has thinned somewhat, to a point where it has thinned enough that a fall is more likely to break something.",
      "Osteopenia is the middle stretch. It is closer to a early notice than a diagnosis of illness: bone is not as strong as it once was, and that is worth knowing, but plenty of people with it never go on to develop anything more serious. Osteoporosis is further along the same line, where bone has become fragile enough that a modest fall could cause a fracture, most often at the hip, spine or wrist.",
      "Two things are worth holding on to. The first is that where you sit on that line is decided by your doctor, using a scan and the whole picture of your health, not by anything you can read on a website. The second is that neither word means there is nothing to be done. Both ends of the problem can be worked on: the strength of the bone, and the likelihood of the fall that would test it.",
      "That second half is often overlooked and it is the part most within reach. Stronger legs, steadier balance, good light on the stairs, sensible shoes and a clear floor all reduce the chance of falling in the first place. This page is for understanding the words, not for diagnosing yourself, and any decision about tests or treatment belongs with your doctor.",
    ],
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
    body: [
      "Muscle is what lets you get out of a chair, climb the stairs, carry the shopping and hold yourself upright. It is the difference between managing your own day and needing someone else to manage it for you, which is why it deserves more attention than it usually gets.",
      "We all lose some muscle as the years pass, and we lose strength faster than we lose size. That distinction matters: a muscle can look much the same and still have less to give. There is a further distinction worth knowing, which is between strength and power. Strength is how much force you can produce. Power is how quickly you can produce it.",
      "Power is the one that saves you when you trip. A stumble does not give you a few seconds to gather yourself and push back; the correction has to happen almost immediately. That is why training that asks your muscles to work briskly, not only slowly and heavily, is part of staying steady on your feet.",
      "The encouraging part is how well muscle responds at any age. It adapts to being asked to do a little more than it is used to, and it keeps adapting into later life. Alongside that, muscle pulling on bone is one of the strongest signals bone gets to stay strong, so the same work pays into both. This is general movement guidance, not a prescription, and it is worth checking with your doctor before starting something new if you have a health condition.",
    ],
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
    body: [
      "Vitamin D behaves more like a hormone than a standard vitamin. Its best understood job is helping your gut absorb calcium from the food you eat, and calcium is the raw material your bones are built from. Your skin can make Vitamin D from sunlight, and some comes from food and fortified products.",
      "Muscle is part of the picture too. Muscle cells respond to Vitamin D, and where someone is genuinely short of it, weakness and difficulty getting around can be part of how that shows up. Correcting a real shortfall can help. That is a different thing from topping up someone who already has enough.",
      "Which brings us to what Vitamin D is not. It is not a muscle-building supplement, and taking more of it will not make an already well-nourished person stronger. It is not a substitute for exercise, which remains the strongest signal you can send to both muscle and bone. And more is not better: with Vitamin D the goal is having enough, not having the highest number you can reach.",
      "One more belief worth setting aside is that a normal Vitamin D result means your bones are fine. It does not. You can have perfectly adequate Vitamin D and still have bone that has thinned with the years, because Vitamin D is one contributor among several.",
      "A useful way to hold all this: think of bone as the house, calcium as the bricks, Vitamin D as part of what gets the bricks delivered, and exercise as the instruction to build. You need all of it, and a great deal of one will not make up for the absence of another. Whether you need testing or a supplement is a question for your doctor, who can look at your own circumstances. Sunlight helps your body make Vitamin D, but deliberately sitting out to burn is not a sensible way to go about it.",
    ],
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
    body: [
      "Chair dance earns its place for a reason that is easy to underrate: people keep doing it. Music, company and something that feels like enjoyment rather than exercise will get you moving every week in a way that a programme you dread never will, and the movement you actually do is the movement that counts.",
      "Within a session there is more going on than it looks. Standing up and sitting down works the legs in the way you use them every day. Straightening a knee and holding it works the thigh. Ankle circles wake up the feet and help circulation. Reaching, turning and following a pattern to a beat ask your body for coordination and postural control, and ask your mind for something too.",
      "Being honest about the limits is what makes the rest trustworthy. If a session is mostly gentle arm movements while seated, it is good mobility and good company, but it is not the same as asking your muscles to work against real resistance. Muscle grows stronger when it is regularly asked to do a bit more than it is comfortable with, and that principle does not change because the setting is friendly.",
      "The good news is that a chair is a fine place to start building that in. Rising without using your hands, rising more slowly, adding a pause at the bottom, holding a leg out a little longer, or standing behind the chair for heel raises and weight shifts all make a session ask more of you. Done regularly, that is strength and balance work, not just movement.",
      "So the way to think about chair dance is as the foundation and the habit, with strength work built on top of it rather than instead of it. This is general activity guidance, not a treatment plan. If you have osteoporosis, have had a fracture, or are unsure what is safe for you, ask your doctor or a physiotherapist to help shape it around you.",
    ],
    relatedTopics: [
      "muscle-strength-and-ageing",
      "balance-exercises",
      "bone-health-after-menopause",
      "fall-prevention",
    ],
    guides: ["stay-strong-after-menopause-guide", "fall-prevention-guide"],
  },
];

export const topicsBySlug = new Map(topics.map((t) => [t.slug, t]));

export function getTopic(slug: string) {
  return topicsBySlug.get(slug) ?? null;
}

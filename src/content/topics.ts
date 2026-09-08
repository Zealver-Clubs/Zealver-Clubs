/**
 * Knowledge Hub - Topics.
 * A Topic is one subject on its own. Each is data, not a hard-coded page,
 * so staff can add more later. `youtubeId` null renders a video placeholder.
 *
 * Copy is activity-first and general in nature (movement, habits, confidence) -
 * not medical advice. Replace/expand with the write-ups drawn from each
 * Zealver YouTube script as they are produced.
 */

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
];

export const topicsBySlug = new Map(topics.map((t) => [t.slug, t]));

export function getTopic(slug: string) {
  return topicsBySlug.get(slug) ?? null;
}

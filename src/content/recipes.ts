import type { Reference } from "./references";

/**
 * Knowledge Hub recipes.
 *
 * Each recipe files under its own dish name in the A-Z, and also under the
 * first letter of its `tag`, so every salad is reachable from S whatever it
 * is called.
 */
export type Recipe = {
  slug: string;
  title: string;
  /** Dish type, e.g. "Salad". Also gives the recipe a second letter in the A-Z. */
  tag: string;
  category: string;
  summary: string;
  keyPoints?: string[];
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  serves: string;
  prepTime: string;
  /** ISO 8601 duration, for Recipe structured data. */
  prepTimeIso: string;
  intro: string[];
  ingredients: { group?: string; items: string[] }[];
  method: string[];
  notes?: string[];
  relatedTopics: string[];
  guides: string[];
  references?: Reference[];
};

export const recipes: Recipe[] = [
  {
    slug: "cucumber-potato-dill-salad",
    title: "Cucumber, potato and dill salad",
    tag: "Salad",
    category: "Food & energy",
    summary:
      "A cool, no-fuss salad for a hot afternoon. Nothing to cook but the potatoes, and it is better made ahead.",
    keyPoints: [
      "Serves 4, ready in about 20 minutes plus chilling.",
      "Only the potatoes need cooking, so it suits a hot day.",
      "Chickpeas turn it from a side dish into a light meal.",
      "Curd works perfectly well in place of Greek yogurt.",
      "Better made an hour ahead, so it is useful when people are coming.",
    ],
    serves: "4",
    prepTime: "20 minutes, plus 30 minutes chilling",
    prepTimeIso: "PT20M",
    intro: [
      "This is a classic combination in German, Scandinavian and Eastern European cooking, where potato, cucumber and dill turn up together all summer. Dill will be familiar to you as suva or shepu, and it is what makes the dish taste like itself, so do not leave it out.",
      "It suits a hot afternoon because nothing needs cooking except the potatoes, and it improves for sitting in the fridge an hour, which makes it a genuinely useful thing to have in your repertoire when people are coming.",
    ],
    ingredients: [
      {
        items: [
          "2 medium potatoes, boiled and cut into bite-sized cubes",
          "1 large cucumber, thinly sliced",
          "1 tin of chickpeas, drained and rinsed, or a cupful cooked",
          "2 to 3 tbsp fresh dill (suva), chopped",
          "1 small red onion, thinly sliced (optional)",
        ],
      },
      {
        group: "For the dressing",
        items: [
          "2 tbsp thick curd, hung curd or Greek yogurt",
          "1 tbsp mustard: wholegrain or Dijon if you have it, otherwise a teaspoon of mustard paste or kasundi",
          "1 tbsp olive oil",
          "1 tbsp lemon juice",
          "Salt and freshly ground black pepper",
        ],
      },
    ],
    method: [
      "Boil the potatoes until just tender, no further, or they will break up when you toss them. Let them cool a little, then cut into bite-sized cubes.",
      "Slice the cucumber thinly. For a crunchier salad, salt the slices lightly, leave them for ten minutes, then pat them dry, which draws out some of the water.",
      "Whisk the curd, mustard, olive oil and lemon juice together with a good pinch of salt and plenty of black pepper. Taste it now, while you can still adjust it.",
      "Tip the potatoes, cucumber, chickpeas, dill and onion into a bowl and fold the dressing through gently.",
      "Chill for twenty to thirty minutes before serving. It will taste better than it did when you mixed it.",
    ],
    notes: [
      "The chickpeas are what make this a light meal rather than a side dish, and they bring protein and fibre with them. Worth putting in rather than treating as optional.",
      "A handful of toasted pumpkin or sunflower seeds on top adds crunch and a little more protein.",
      "If you are watching your blood sugar, keep the potato modest and let the chickpeas and vegetables do more of the work, and eat it alongside something with protein rather than on its own.",
      "Paneer, crumbled over, works well in place of the feta this is often made with.",
    ],
    relatedTopics: [
      "nutrition-basics",
      "anti-inflammatory-swaps-indian-kitchen",
      "prebiotics-and-probiotics",
    ],
    guides: [],
  },
  {
    slug: "coffee-chocolate-mug-cake",
    title: "Coffee and chocolate mug cake",
    tag: "Dessert",
    category: "Food & energy",
    summary:
      "Eggless, made with rice flour, and ready in about five minutes in a mug. A treat, and honestly labelled as one.",
    keyPoints: [
      "Serves one, and about five minutes from cupboard to spoon.",
      "Eggless, and gluten-free if your rice flour is.",
      "Baking powder gives the best rise. Baking soda on its own will not work here.",
      "No oven needed: a microwave, or steamed in a dosa maker or covered pan.",
      "This is a treat rather than an everyday food. One mug, now and then.",
    ],
    serves: "1",
    prepTime: "5 minutes",
    prepTimeIso: "PT5M",
    intro: [
      "Sometimes you want something sweet and you want it now, and the alternative is a packet of biscuits. This takes about five minutes, uses what is already in most Indian kitchens, needs no oven and no eggs, and it comes out as a single portion, which is rather the point.",
      "It is a treat. There is sugar in it and rice flour is a refined carbohydrate, so this belongs with the sweets that are for occasions rather than with everyday eating. Having it in a mug settles the portion question by itself.",
    ],
    ingredients: [
      {
        items: [
          "1/2 cup rice flour",
          "1 tbsp cocoa powder",
          "1 tsp instant coffee",
          "2 tbsp sugar, or less to taste",
          "1 tsp baking powder",
          "A pinch of salt",
          "1/4 cup milk",
          "1 tbsp ghee or butter, melted",
          "2 to 3 tbsp water, as needed",
        ],
      },
    ],
    method: [
      "Mix the rice flour, cocoa, coffee, sugar, baking powder and salt in a greased mug or small microwave-safe bowl.",
      "Add the milk and the melted ghee, then enough water to make a smooth, thick batter. Thick, not runny: it should drop off the spoon rather than pour.",
      "Microwave for two to three minutes, checking at two. It is done when the top is set and a knife comes out clean.",
      "Or steam it instead: cover and steam on low to medium heat for twenty to twenty-five minutes, in a dosa maker or a covered pan.",
      "Eat it warm, out of the mug.",
    ],
    notes: [
      "On the raising agent: baking powder is the one to use, and it works on its own. Baking soda will not, because it needs an acid to react with and there is none in this batter. If baking soda is all you have, add a teaspoon of lemon juice or vinegar with it, and stir it in at the last moment before cooking. Without that you get a flat cake with a faintly soapy taste.",
      "For the lightest result, use half a teaspoon of baking powder plus a quarter teaspoon of Eno, stirring the Eno in right at the end and cooking immediately.",
      "The microwave gives a softer, fluffier cake. Steaming gives a denser, more traditional one. Rice flour is denser than wheat either way, so do not expect a sponge.",
      "A little vanilla improves it considerably if you have some. Chocolate chips or chopped nuts on top are worth the trouble.",
      "If you are watching your blood sugar, halve the sugar, add nuts for a little protein and fat, and have it after a meal rather than on an empty stomach.",
    ],
    relatedTopics: [
      "rice-and-roti",
      "anti-inflammatory-swaps-indian-kitchen",
      "diabetes-what-is-happening",
    ],
    guides: [],
  },
];

export const recipesBySlug = new Map(recipes.map((r) => [r.slug, r]));

export function getRecipe(slug: string) {
  return recipesBySlug.get(slug) ?? null;
}

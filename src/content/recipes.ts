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
  {
    slug: "besan-chilla",
    title: "Besan chilla (gram flour pancake)",
    tag: "Breakfast",
    category: "Food & energy",
    summary:
      "A savoury pancake that takes ten minutes, needs no soaking or fermenting, and carries real protein.",
    keyPoints: [
      "About 10 minutes start to finish, no soaking and no fermenting.",
      "Gram flour brings roughly six grams of protein per chilla.",
      "Vegetables go straight into the batter, so it is a whole breakfast.",
      "Soft to chew, which suits anyone with dental trouble.",
      "Makes a good light dinner as well as breakfast.",
    ],
    serves: "2 (4 chillas)",
    prepTime: "10 minutes",
    prepTimeIso: "PT10M",
    intro: [
      "This is the breakfast to know if you are trying to get more protein into the morning without much effort. Gram flour is already in the house, nothing needs soaking the night before, and the whole thing takes about as long as making tea.",
      "It is also soft, which matters more than people admit. Anyone with sore gums, loose dentures or a dry mouth finds toast and biscuits hard work, and quietly eats less protein as a result.",
    ],
    ingredients: [
      {
        items: [
          "1 cup gram flour (besan)",
          "1 small onion, finely chopped",
          "1 small tomato, finely chopped",
          "A handful of spinach or coriander, chopped",
          "1 green chilli, chopped, optional",
          "1/2 tsp turmeric",
          "1/2 tsp cumin",
          "Salt to taste",
          "About 1 cup water",
          "Oil for cooking",
        ],
      },
    ],
    method: [
      "Put the gram flour in a bowl with the turmeric, cumin and salt. Add water a little at a time, whisking, until you have a smooth batter about the thickness of cream. Lumps now are lumps later, so take a moment over it.",
      "Stir in the onion, tomato, greens and chilli. Let it sit for five minutes if you have time; it is fine if you do not.",
      "Heat a little oil in a pan over medium heat. Pour in a ladleful and spread it gently outwards into a round.",
      "Cook for two to three minutes until the edges lift and the underside is golden, then turn and give it another minute or two.",
      "Serve hot with curd or a coriander chutney.",
    ],
    notes: [
      "For more protein still, whisk two tablespoons of curd into the batter, or serve it with a bowl of curd rather than chutney.",
      "Grated bottle gourd or carrot disappears into the batter and adds fibre without changing the taste much.",
      "The batter keeps in the fridge for a day, so making double is worth the effort.",
      "If you are watching your blood sugar, this is a good breakfast: high protein, high fibre and slow to raise it.",
    ],
    relatedTopics: [
      "nutrition-basics",
      "muscle-as-your-bodys-engine",
      "diabetes-what-is-happening",
    ],
    guides: [],
  },
  {
    slug: "moong-dal-dhokla",
    title: "Dhokla made with moong dal",
    tag: "Snack",
    category: "Food & energy",
    summary:
      "Steamed, soft, high in protein and not fried. The snack to have with tea instead of the packet.",
    keyPoints: [
      "Steamed rather than fried, and genuinely high in protein.",
      "Soft and easy to chew, which suits most people at 70.",
      "Keeps for two days, so one batch covers several teatimes.",
      "Replaces the biscuits and namkeen that tea usually comes with.",
      "Needs soaking, so start it the night before.",
    ],
    serves: "4",
    prepTime: "20 minutes, plus soaking overnight",
    prepTimeIso: "PT20M",
    intro: [
      "Tea is where most of the unhelpful eating of the day happens. Biscuits, namkeen, something fried, eaten without much thought. Having a batch of dhokla in the fridge changes that without requiring any willpower.",
      "Made with moong dal rather than gram flour it is higher in protein and lighter on the stomach, and because it is steamed there is no oil in it to speak of.",
    ],
    ingredients: [
      {
        items: [
          "1 cup split yellow moong dal",
          "2 tbsp curd",
          "1 inch ginger and 1 green chilli, ground to a paste",
          "1/2 tsp turmeric",
          "Salt to taste",
          "1 tsp fruit salt (Eno) or 1/2 tsp baking soda with 1 tsp lemon juice",
        ],
      },
      {
        group: "For the tempering",
        items: [
          "1 tbsp oil",
          "1 tsp mustard seeds",
          "A few curry leaves",
          "1 tbsp chopped coriander",
          "1 tbsp grated coconut, optional",
        ],
      },
    ],
    method: [
      "Soak the moong dal in plenty of water for four hours or overnight. Drain it well.",
      "Grind it with the curd and a very little water to a smooth, thick batter. Stir in the ginger and chilli paste, turmeric and salt, and leave it to rest for twenty minutes.",
      "Grease a steamer plate. Bring water to the boil in your steamer or a covered pan.",
      "Stir the fruit salt into the batter, mix gently for a few seconds only, and pour it straight into the plate. It must go into the steam immediately or the rise is lost.",
      "Steam for twelve to fifteen minutes, until a knife comes out clean. Let it cool a little before cutting into squares.",
      "Heat the oil, add mustard seeds, and when they pop add the curry leaves. Pour over the dhokla and scatter with coriander and coconut.",
    ],
    notes: [
      "The fruit salt is what makes it rise, and it works for seconds rather than minutes, so have everything ready before you add it.",
      "It keeps two days covered in the fridge. Steam for two minutes to freshen, or eat at room temperature.",
      "Serve with a coriander and mint chutney rather than a sweet one if blood sugar is a consideration.",
      "Soft, moist and easy to swallow, which makes it one of the better snacks for anyone with a dry mouth or dentures.",
    ],
    relatedTopics: [
      "nutrition-basics",
      "muscle-as-your-bodys-engine",
      "xerostomia-dry-mouth",
    ],
    guides: [],
  },
  {
    slug: "ragi-and-moong-porridge",
    title: "Ragi and moong porridge",
    tag: "Breakfast",
    category: "Food & energy",
    summary:
      "A warm breakfast with calcium from the ragi and protein from the dal. Gentle on the stomach and easy to chew.",
    keyPoints: [
      "Ragi is one of the better plant sources of calcium.",
      "Adding moong dal turns a carbohydrate porridge into a protein one.",
      "Warm, soft and easy to digest, which suits early mornings and poor appetite.",
      "Takes about fifteen minutes with no soaking if you use flour.",
      "Can be sweet or savoury; the savoury version raises blood sugar less.",
    ],
    serves: "2",
    prepTime: "15 minutes",
    prepTimeIso: "PT15M",
    intro: [
      "Ragi porridge is a familiar breakfast and it is usually mostly carbohydrate. Adding a little moong dal changes what it does: you get the calcium of the ragi and enough protein to actually see you through to lunch.",
      "It is also warm, soft and undemanding, which matters on mornings when appetite is poor or chewing is uncomfortable.",
    ],
    ingredients: [
      {
        items: [
          "1/4 cup ragi (finger millet) flour",
          "2 tbsp split yellow moong dal",
          "2 cups water or milk, or a mixture",
          "A pinch of salt",
        ],
      },
      {
        group: "To finish, savoury",
        items: [
          "1/2 tsp cumin",
          "A little chopped coriander",
          "Buttermilk or curd on the side",
        ],
      },
      {
        group: "Or to finish, sweet",
        items: [
          "1 tsp jaggery or sugar",
          "A pinch of cardamom",
          "A few chopped almonds",
        ],
      },
    ],
    method: [
      "Dry roast the moong dal in a pan for two or three minutes until it smells nutty, then grind it coarsely. This can be done in advance and kept in a jar.",
      "Mix the ragi flour and the ground dal with half a cup of cold water, whisking until completely smooth. Starting cold is what prevents lumps.",
      "Bring the remaining water or milk to a simmer in a pan, then pour in the paste slowly, stirring the whole time.",
      "Cook on low heat for eight to ten minutes, stirring often, until it thickens and loses any raw smell.",
      "Finish savoury with cumin and coriander, or sweet with a little jaggery, cardamom and almonds.",
    ],
    notes: [
      "Roasting and grinding a large batch of moong dal at once makes this a five-minute breakfast on the day.",
      "Milk rather than water adds more protein and calcium again.",
      "The savoury version raises blood sugar noticeably less than the sweet one, and is worth trying even if it sounds odd at first.",
      "A handful of chopped almonds or a spoon of ground flaxseed on top adds protein, fibre and healthy fat.",
    ],
    relatedTopics: [
      "bone-health-after-menopause",
      "nutrition-basics",
      "rice-and-roti",
    ],
    guides: [],
  },
  {
    slug: "sprouted-moong-salad",
    title: "Sprouted moong salad",
    tag: "Salad",
    category: "Food & energy",
    summary:
      "Raw, crunchy and about fourteen grams of protein a bowl. Sprouting makes the dal easier to digest.",
    keyPoints: [
      "Around fourteen grams of protein in a good bowlful.",
      "Sprouting increases the vitamins and makes moong easier on the stomach.",
      "No cooking at all once the sprouts are ready.",
      "Steam them briefly if raw sprouts do not agree with you.",
      "Keeps in the fridge, so make enough for two or three days.",
    ],
    serves: "2",
    prepTime: "10 minutes, plus 2 days sprouting",
    prepTimeIso: "PT10M",
    intro: [
      "This is about the cheapest protein there is, and one of the easiest. Whole green moong sprouts in two days on a kitchen counter with no equipment, and a bowl of it carries as much protein as an egg and a half, with fibre the egg does not have.",
      "Sprouting is not only tradition. It increases certain vitamins and makes the dal considerably easier to digest, which matters if pulses have tended to trouble you.",
    ],
    ingredients: [
      {
        group: "To sprout",
        items: [
          "1 cup whole green moong",
        ],
      },
      {
        group: "For the salad",
        items: [
          "1 small onion, finely chopped",
          "1 tomato, chopped",
          "1 small cucumber, chopped",
          "1 green chilli, chopped, optional",
          "Juice of half a lemon",
          "1/2 tsp roasted cumin powder",
          "Salt and black pepper",
          "Chopped coriander",
          "1 tbsp grated coconut or roasted peanuts, optional",
        ],
      },
    ],
    method: [
      "Rinse the moong and soak it in plenty of water for eight hours or overnight.",
      "Drain it completely, tie it loosely in a clean damp cloth or put it in a covered container with air holes, and leave it somewhere warm.",
      "Rinse and drain once a day. Small white tails appear within a day or two. That is it; they are ready.",
      "If raw sprouts do not suit you, steam them for four or five minutes, which keeps the crunch and makes them gentler.",
      "Toss the sprouts with the onion, tomato, cucumber, chilli, lemon, cumin, salt and pepper. Scatter with coriander and the coconut or peanuts.",
    ],
    notes: [
      "Steaming briefly is worth doing for anyone with a delicate stomach, and for anyone whose immunity is low, where raw sprouts are best avoided altogether.",
      "Peanuts or roasted chana on top push the protein higher still.",
      "This travels well in a box and keeps two days in the fridge, so it solves several lunches at once.",
      "Eat it before the rice rather than after, which blunts the rise in blood sugar from the meal.",
    ],
    relatedTopics: [
      "nutrition-basics",
      "muscle-as-your-bodys-engine",
      "rice-and-roti",
    ],
    guides: [],
  },
  {
    slug: "paneer-bhurji",
    title: "Paneer bhurji",
    tag: "Main",
    category: "Food & energy",
    summary:
      "Ten minutes, soft to eat, and around eighteen grams of protein a portion. The fastest protein in the house.",
    keyPoints: [
      "About eighteen grams of protein per portion.",
      "Ten minutes, and nothing needs soaking or planning.",
      "Soft, so it suits sore gums, dentures or a dry mouth.",
      "Works for breakfast, lunch or dinner equally.",
      "Tofu can replace the paneer if you are avoiding dairy.",
    ],
    serves: "2",
    prepTime: "10 minutes",
    prepTimeIso: "PT10M",
    intro: [
      "When somebody tells me they cannot manage enough protein, this is the recipe I reach for. Paneer needs no preparation, it cooks in minutes, and a modest portion carries more protein than most people get in a whole breakfast.",
      "It is also soft and moist, which is not a small thing. A great deal of high-protein food is chewy, and chewy food is quietly dropped by anyone with dental trouble.",
    ],
    ingredients: [
      {
        items: [
          "200 g paneer, crumbled",
          "1 onion, finely chopped",
          "1 tomato, finely chopped",
          "1 green chilli, chopped, optional",
          "1/2 inch ginger, grated",
          "1/2 tsp turmeric",
          "1/2 tsp cumin seeds",
          "1/2 tsp coriander powder",
          "Salt to taste",
          "1 tbsp oil",
          "Chopped coriander to finish",
        ],
      },
    ],
    method: [
      "Heat the oil in a pan and add the cumin seeds. When they darken slightly, add the onion and cook until soft and just golden.",
      "Add the ginger and chilli, stir for half a minute, then the tomato, turmeric, coriander powder and salt.",
      "Cook until the tomato collapses and the mixture pulls together, three or four minutes.",
      "Crumble in the paneer and stir gently to coat. Cook for two minutes only. Longer makes paneer rubbery, which is the one mistake to avoid.",
      "Finish with coriander and eat with a flatbread, or on its own with a salad.",
    ],
    notes: [
      "Tofu works in place of paneer and brings the saturated fat down considerably. Press out the water first.",
      "Adding a handful of peas, chopped spinach or grated carrot lifts the fibre without changing the character.",
      "Paneer is high in protein and also in saturated fat, so a modest portion alongside vegetables suits most people better than a large one alone.",
      "This is one of the better things to eat within a couple of hours after a movement class.",
    ],
    relatedTopics: [
      "muscle-as-your-bodys-engine",
      "eating-before-and-after-exercise",
      "nutrition-basics",
    ],
    guides: [],
  },
  {
    slug: "oats-and-moong-chilla",
    title: "Oats and moong chilla",
    tag: "Breakfast",
    category: "Food & energy",
    summary:
      "Soluble fibre from the oats, protein from the dal, and no fermenting. Good for cholesterol and for blood sugar.",
    keyPoints: [
      "Oats bring the soluble fibre that helps with cholesterol.",
      "Moong dal turns it from a carbohydrate breakfast into a balanced one.",
      "No fermenting and no waiting, unlike idli or dosa batter.",
      "Soft and quick, and it reheats badly so make what you will eat.",
      "One of the better breakfasts if you are watching blood sugar.",
    ],
    serves: "2 (4 chillas)",
    prepTime: "15 minutes, plus 30 minutes soaking",
    prepTimeIso: "PT15M",
    intro: [
      "Oats usually arrive at breakfast as something sweet and milky, which wastes them. Their real value is soluble fibre, the kind that helps carry cholesterol out, and that works just as well in something savoury.",
      "Combined with moong dal you get fibre and protein in one pan, which is a considerably better start to the day than either alone.",
    ],
    ingredients: [
      {
        items: [
          "1/2 cup rolled oats",
          "1/2 cup split yellow moong dal",
          "1 small onion, finely chopped",
          "1 carrot, grated",
          "A handful of coriander, chopped",
          "1 green chilli, chopped, optional",
          "1/2 tsp cumin",
          "Salt to taste",
          "Water as needed",
          "Oil for cooking",
        ],
      },
    ],
    method: [
      "Soak the moong dal in water for thirty minutes. Drain.",
      "Grind the oats to a coarse powder, then grind the drained dal with a little water to a smooth paste. Mix the two with enough water to make a batter the thickness of cream.",
      "Stir in the onion, carrot, coriander, chilli, cumin and salt.",
      "Heat a little oil in a pan over medium heat, pour in a ladleful and spread it gently into a round.",
      "Cook two to three minutes a side, until golden. Serve hot with curd or chutney.",
    ],
    notes: [
      "Grinding a batch of oats to powder in advance saves five minutes every morning.",
      "A spoon of curd in the batter makes it softer and adds a little more protein.",
      "Eat these fresh. They go leathery on reheating, so make what you will actually eat.",
      "Between the oats and the dal this is a genuinely useful breakfast for anyone working on cholesterol or blood sugar.",
    ],
    relatedTopics: [
      "nutrition-basics",
      "rice-and-roti",
      "diabetes-what-is-happening",
    ],
    guides: [],
  },
  {
    slug: "khichdi-with-extra-dal",
    title: "Khichdi with extra dal",
    tag: "Main",
    category: "Food & energy",
    summary:
      "The comfort food of choice when unwell or tired, made properly so it carries protein rather than just starch.",
    keyPoints: [
      "Most khichdi is mostly rice. This one shifts the ratio towards dal.",
      "Soft, warm and easy to digest, which is why it suits illness and recovery.",
      "One pot, minimal effort, and it keeps.",
      "Add vegetables and it becomes a complete meal.",
      "The single most useful thing to know how to make for a poor appetite.",
    ],
    serves: "3",
    prepTime: "30 minutes",
    prepTimeIso: "PT30M",
    intro: [
      "Khichdi is what everybody eats when they are unwell, tired or have no appetite, and the usual version is mostly rice with a token handful of dal. That gets you comfort and very little protein at exactly the time your body needs it most.",
      "Shifting the ratio, equal dal to rice or more dal than rice, changes what it does without changing what it is. It still tastes like khichdi. It just feeds you properly.",
    ],
    ingredients: [
      {
        items: [
          "3/4 cup split yellow moong dal",
          "1/2 cup rice",
          "1 small carrot, diced",
          "A handful of peas or chopped beans",
          "1 tomato, chopped",
          "1/2 tsp turmeric",
          "1 inch ginger, grated",
          "Salt to taste",
          "4 cups water",
        ],
      },
      {
        group: "For the tempering",
        items: [
          "1 tbsp ghee",
          "1 tsp cumin seeds",
          "A pinch of asafoetida",
          "A few curry leaves",
        ],
      },
    ],
    method: [
      "Rinse the dal and rice together until the water runs clear.",
      "Put them in a pressure cooker or heavy pan with the vegetables, turmeric, ginger, salt and water.",
      "Cook for three or four whistles, or simmer covered for about twenty-five minutes, until everything is soft and collapsing together. It should be loose rather than stiff; add hot water if it thickens too much.",
      "Heat the ghee in a small pan, add the cumin, let it darken, then the asafoetida and curry leaves.",
      "Pour the tempering over the khichdi and stir through. Serve hot with curd.",
    ],
    notes: [
      "A bowl of curd alongside adds protein again, and the two together are gentle on the stomach.",
      "For someone recovering from illness or with a poor appetite, this is the meal to make: soft, warm, protein-containing and easy to eat small amounts of often.",
      "It thickens as it sits. Loosen with hot water rather than serving it stiff, which is harder to swallow.",
      "The ghee is not optional in flavour terms and a spoonful is entirely fine. It is the quantity, not the ghee, that ever matters.",
    ],
    relatedTopics: [
      "muscle-as-your-bodys-engine",
      "nutrition-basics",
      "xerostomia-dry-mouth",
    ],
    guides: [],
  },
  {
    slug: "tofu-and-vegetable-stir-fry",
    title: "Tofu and vegetable stir fry",
    tag: "Main",
    category: "Food & energy",
    summary:
      "Plant protein with no saturated fat, on the table in fifteen minutes.",
    keyPoints: [
      "Tofu brings protein without the saturated fat of paneer.",
      "Fifteen minutes, one pan.",
      "Soy is useful for cholesterol as well as for protein.",
      "Press the tofu first or it will not brown.",
      "Any vegetables in the fridge will do.",
    ],
    serves: "2",
    prepTime: "15 minutes",
    prepTimeIso: "PT15M",
    intro: [
      "Tofu tends to be dismissed as bland, and that is almost always a technique problem rather than an ingredient problem. Pressed properly and cooked hot enough to brown, it holds flavour well and behaves much like paneer.",
      "It is worth having in the rotation because it gives you the protein of paneer without the saturated fat, and soy has a useful part to play if you are working on cholesterol.",
    ],
    ingredients: [
      {
        items: [
          "200 g firm tofu, cut into cubes",
          "1 onion, sliced",
          "1 capsicum, sliced",
          "1 carrot, sliced thin",
          "A handful of beans or cabbage, sliced",
          "2 cloves garlic, chopped",
          "1 inch ginger, chopped",
          "1 tbsp soy sauce",
          "1/2 tsp black pepper",
          "1 tbsp oil",
          "Salt to taste",
        ],
      },
    ],
    method: [
      "Wrap the tofu in a clean cloth, put a plate and something heavy on top, and leave it fifteen minutes. This is the step that decides whether it browns or steams.",
      "Heat the oil in a wide pan until properly hot. Add the tofu in one layer and leave it alone for two or three minutes so it colours, then turn and colour the other side. Lift it out.",
      "In the same pan cook the garlic and ginger for half a minute, then add the vegetables. Keep the heat high and keep them moving; they want four or five minutes and should stay with some bite.",
      "Return the tofu, add the soy sauce, pepper and a little salt, and toss for a minute.",
      "Serve on its own, or with a small serving of rice.",
    ],
    notes: [
      "Pressing the tofu matters more than anything else here. Skip it and you get a pale, wet result.",
      "Soy sauce is salty, so taste before adding more salt, particularly if blood pressure is a consideration.",
      "Soy chunks, soaked and squeezed dry, work in place of tofu and are cheaper.",
      "Eating the tofu and vegetables before the rice blunts the rise in blood sugar.",
    ],
    relatedTopics: [
      "soy-milk-and-plant-milks",
      "muscle-as-your-bodys-engine",
      "rice-and-roti",
    ],
    guides: [],
  },
  {
    slug: "chana-chaat",
    title: "Chana chaat",
    tag: "Snack",
    category: "Food & energy",
    summary:
      "Chickpeas, onion, tomato and lemon. Ten minutes, no cooking, and around twelve grams of protein.",
    keyPoints: [
      "Around twelve grams of protein in a bowl.",
      "No cooking at all if you use tinned or pre-boiled chana.",
      "High in fibre, which is useful for cholesterol as well as digestion.",
      "A proper snack that replaces the fried ones.",
      "Better after an hour in the fridge, so it suits making ahead.",
    ],
    serves: "2",
    prepTime: "10 minutes",
    prepTimeIso: "PT10M",
    intro: [
      "This is the snack to keep in the fridge if you are trying to stop eating namkeen with tea. It takes ten minutes, needs no cooking if you have tinned or already-boiled chana, and it is filling in a way that fried things are not.",
      "A bowl carries about as much protein as two eggs, with a good deal of fibre alongside.",
    ],
    ingredients: [
      {
        items: [
          "2 cups boiled or tinned chickpeas (kabuli chana), drained",
          "1 onion, finely chopped",
          "1 tomato, chopped",
          "1 small cucumber, chopped",
          "1 green chilli, chopped, optional",
          "Juice of one lemon",
          "1 tsp roasted cumin powder",
          "1/2 tsp chaat masala",
          "Salt and black pepper",
          "Plenty of chopped coriander",
          "1 tbsp pomegranate seeds, optional",
        ],
      },
    ],
    method: [
      "If using dried chana, soak overnight and pressure cook until soft. Tinned is entirely fine and much faster; rinse it well.",
      "Tip the chana into a bowl with the onion, tomato and cucumber.",
      "Add the lemon juice, cumin, chaat masala, salt and pepper, and mix.",
      "Taste and adjust; it wants to be sharp rather than shy.",
      "Scatter with coriander and pomegranate, and chill for half an hour if you can before eating.",
    ],
    notes: [
      "Better after an hour in the fridge, so make it in the morning for the evening.",
      "A spoon of curd stirred in makes it creamier and adds a little more protein.",
      "Chaat masala is quite salty, so go easy on additional salt if blood pressure matters.",
      "Kala chana works just as well and is higher in fibre still.",
    ],
    relatedTopics: [
      "nutrition-basics",
      "muscle-as-your-bodys-engine",
      "prebiotics-and-probiotics",
    ],
    guides: [],
  },
];

export const recipesBySlug = new Map(recipes.map((r) => [r.slug, r]));

export function getRecipe(slug: string) {
  return recipesBySlug.get(slug) ?? null;
}

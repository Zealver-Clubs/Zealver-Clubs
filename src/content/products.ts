/**
 * Things we suggest buying, linked through our Amazon Associates store.
 *
 * Products live here once and pages point at them by `id`, so the same item
 * can sit on a topic, a recipe and a guide without being copied about.
 * Keep `why` plain and true wherever the product appears; it is advice, not
 * an advert, and nothing here should be something we would not buy ourselves.
 */

/** Amazon.in Associates store ID. Every product link carries it. */
export const amazonTag = "zealverclubs-21";

export type Product = {
  id: string;
  name: string;
  why: string;
} & (
  /** Amazon.in product ID, the ten characters after /dp/ in the address. */
  | { asin: string; options?: never }
  /** Several brands to choose between, each its own Amazon.in product ID. */
  | { asin?: never; options: { label: string; asin: string }[] }
);

export const products: Product[] = [
  // Safety at home
  {
    id: "anti-slip-bath-mat",
    name: "ishro home anti-skid bathroom mat",
    asin: "B09C6DWSLT",
    why: "A rubber mat with suction grips for the shower floor, the wettest spot in the house and where a slip is most likely.",
  },
  {
    id: "grab-bar",
    name: "Plantex 13 inch stainless steel grab bar",
    asin: "B097GL4FZQ",
    why: "Something solid to hold beside the toilet or in the shower. Screw it into the wall: suction rails can let go just when you lean on them.",
  },
  {
    id: "night-light",
    name: "HOARD plug-in night lamp with automatic sensor",
    asin: "B08YWZ62QZ",
    why: "Comes on by itself when the room goes dark, so the route to the bathroom at night is never pitch black. One in the bedroom, one in the passage.",
  },
  {
    id: "shower-chair",
    name: "KosmoCare height-adjustable shower bench",
    asin: "B01FO1787C",
    why: "Lets you sit to wash, which takes the balancing out of the most slippery few minutes of the day.",
  },
  {
    id: "reacher-grabber",
    name: "Foldable reacher grabber tool, pack of 2",
    asin: "B0CMR332QB",
    why: "Picks things up off the floor or down from a high shelf without bending or climbing. Keep one in the bedroom and one in the kitchen.",
  },
  {
    id: "raised-toilet-seat",
    name: "Simon's 4 inch raised toilet seat",
    asin: "B0CV159VJ3",
    why: "Raises the seat so sitting down and standing up need less bend at the hip and knee. Especially useful in the weeks after a hip or knee operation.",
  },
  {
    id: "shoe-horn",
    name: "Long-handled metal shoe horn",
    asin: "B094WB45QP",
    why: "Gets your heel into a shoe without bending down, which matters after a hip operation and on stiff mornings.",
  },
  {
    id: "walking-stick",
    name: "Rehand folding walking stick",
    asin: "B09BJ7MY7Q",
    why: "Height-adjustable, stands up on its own when you let go, and folds into a bag. Set the handle at wrist height when your arm hangs by your side.",
  },
  {
    id: "magnifier",
    name: "ZIVIK magnifying glass with LED light",
    asin: "B09BB45JXG",
    why: "Magnifies and lights small print at once, for medicine labels and packet instructions. Not a substitute for an eye test.",
  },
  {
    id: "day-clock",
    name: "SSYA digital calendar day clock",
    asin: "B07Y3F84PP",
    why: "Shows the day, the date and whether it is morning or evening in large words, which helps someone with memory problems keep their bearings.",
  },

  // Checking your numbers
  {
    id: "bp-monitor-omron-7120",
    name: "Upper arm blood pressure monitors",
    why: "One-button upper arm monitors, the kind doctors prefer to wrist models. Check the cuff fits your arm before you buy.",
    options: [
      { label: "Omron HEM 7120", asin: "B00F38B3NW" },
      { label: "Dr. Morepen BP-02", asin: "B01N14XN87" },
      { label: "Dr Trust 101", asin: "B08CHH9YD8" },
      { label: "Beurer BM 32", asin: "B0FBGVR44Q" },
    ],
  },
  {
    id: "glucometer",
    name: "Glucometers for finger-prick checks",
    why: "Straightforward home blood sugar meters. Before choosing, check the price and local availability of the test strips, which cost more over time than the meter. Ask your doctor how often to test.",
    options: [
      { label: "Accu-Chek Active", asin: "B01GO0HBF6" },
      { label: "OneTouch Select Plus Simple", asin: "B07M7NN54C" },
      { label: "Dr. Morepen BG-03", asin: "B07DHTQRFY" },
      { label: "Dr Trust", asin: "B0D66VGNST" },
      { label: "Contour Plus", asin: "B00JIRT9VM" },
    ],
  },

  // Wearables
  {
    id: "cgm",
    name: "Continuous glucose monitors (CGM)",
    why: "A small sensor on the back of your arm reads your sugar every few minutes for about two weeks, so you can see what each meal, walk and night's sleep actually does. Talk to your doctor first, especially if you take insulin or tablets that can cause lows.",
    options: [
      { label: "Abbott FreeStyle Libre", asin: "B0849WHJQN" },
      { label: "Abbott FreeStyle Libre 2", asin: "B0FHGQDT6H" },
      { label: "Ultrahuman M1", asin: "B0FVT21PSM" },
      { label: "BeatO CGM", asin: "B0FKBKBRPS" },
      { label: "Sugar.fit CGM", asin: "B0DPL2Z6V3" },
    ],
  },
  {
    id: "step-counter",
    name: "Fitness bands that count steps and sleep",
    why: "Count your steps, track heart rate and sleep, and show the time in clear numbers. Seeing today's count is often what gets people out for a second walk.",
    options: [
      { label: "Fitbit Inspire 3", asin: "B0B75RC9C3" },
      { label: "Samsung Galaxy Fit3", asin: "B0CVN3NK42" },
      { label: "Huawei Band 11", asin: "B0GKRGHNQ1" },
      { label: "Noise ColorFit Pulse Air", asin: "B0H3BM7WP6" },
    ],
  },
  {
    id: "sleep-ring",
    name: "Smart rings for sleep tracking",
    why: "Worn on a finger, so there is nothing bulky on your wrist at night. They track how long and how deeply you sleep, how often you wake, and your resting heart rate. Each link opens one size; get the brand's sizing kit first and pick your size on the page.",
    options: [
      { label: "Ultrahuman Ring Air", asin: "B0D97QWFD4" },
      { label: "Oura Ring 4", asin: "B0D9WT1S2T" },
      { label: "Samsung Galaxy Ring", asin: "B0DTQ25996" },
      { label: "Amazfit Helio Ring", asin: "B0D5LPZHLB" },
    ],
  },
  {
    id: "fall-detection-watch",
    name: "Smartwatches with fall detection",
    why: "If you fall hard and do not respond, the watch can call a family member or emergency services. Switch fall detection on in its settings, as it is not always on by default. Apple Watch needs an iPhone; Samsung and Pixel need an Android phone; Garmin's detection works during walks and workouts.",
    options: [
      { label: "Apple Watch SE 3", asin: "B0FQFH9P4T" },
      { label: "Samsung Galaxy Watch8 LTE", asin: "B0FDQK5KSZ" },
      { label: "Google Pixel Watch 3", asin: "B0D91268TH" },
      { label: "Garmin Vivoactive 5", asin: "B0CKVTGBG1" },
    ],
  },
  {
    id: "weighing-scale",
    name: "HealthSense digital bathroom scale",
    asin: "B0CHJ4BK2C",
    why: "A plain, clear-display scale. Weigh yourself at the same time of day, and look at the trend over weeks rather than any one morning.",
  },
  {
    id: "thermometer",
    name: "Dr Trust flexible tip digital thermometer",
    asin: "B07GSRD84M",
    why: "A quick, easy-to-read thermometer, so you can tell your doctor an actual temperature rather than a feeling.",
  },
  {
    id: "pill-organiser",
    name: "PharmEasy 7 day weekly pill box",
    asin: "B08NXZWDMV",
    why: "Fill it once a week and you can see at a glance whether today's tablets have been taken. Take it to appointments too.",
  },

  // Moving and strength
  {
    id: "resistance-bands-set",
    name: "Fashnex resistance bands set with handles",
    asin: "B09G9W3WFL",
    why: "Five tubes of different strengths with soft handles, so you can start light and move up as you get stronger, sitting or standing.",
  },
  {
    id: "dumbbells",
    name: "Lifelong neoprene dumbbells, 1 kg pair",
    asin: "B0D2ZQTGY8",
    why: "Light, soft-coated hand weights that will not slip. One kilo is a sensible start for arm and shoulder work in a chair.",
  },
  {
    id: "ankle-weights",
    name: "Amazon Basics ankle weights, 0.5 kg pair",
    asin: "B0D151TSK2",
    why: "Strap on for seated leg lifts and knee straightening, the moves that build the thigh strength that gets you out of a chair.",
  },
  {
    id: "yoga-mat",
    name: "Boldfit anti-slip yoga mat",
    asin: "B0B75B9M2D",
    why: "A cushioned, non-slip surface for floor stretches, and to stop a chair sliding on a smooth floor.",
  },
  {
    id: "yoga-strap-block",
    name: "Yoga blocks with belt, pack of 2",
    asin: "B0BGQ2796C",
    why: "The strap lets you reach your feet without straining, and the blocks bring the floor closer. Both make stretches gentler, not harder.",
  },
  {
    id: "water-bottle",
    name: "Attro 1 litre bottle with time markings",
    asin: "B0C8DGYR7C",
    why: "Marked through the day, so you can see whether you are keeping up. Thirst gets less reliable with age, so a visible guide helps.",
  },
  {
    id: "dandiya",
    name: "BookMyCostume dandiya sticks",
    asin: "B08KT8SRYN",
    why: "Light, colourful sticks for a garba or dandiya session at home or with friends.",
  },

  // Comfort and sleep
  {
    id: "heating-pad",
    name: "Flamingo electric heating pad, XL",
    asin: "B09HMRGV5S",
    why: "Gentle warmth eases stiffness before you move. Use it on a low setting, never while asleep, and not on skin with reduced feeling.",
  },
  {
    id: "jar-opener",
    name: "OXO Good Grips twisting jar opener",
    asin: "B09ZC55TP2",
    why: "Grips the lid and gives you leverage, so stiff or sore hands can open jars without straining.",
  },
  {
    id: "cervical-pillow",
    name: "Utopia Bedding memory foam cervical pillow",
    asin: "B0GN8XQL2K",
    why: "Shaped to support the curve of your neck, so it is not bent forward or sideways all night.",
  },
  {
    id: "lumbar-cushion",
    name: "FOVERA back support cushion for chairs",
    asin: "B0CH33D6GN",
    why: "Fills the gap between your lower back and the chair, which makes sitting upright much less effort.",
  },
  {
    id: "wedge-pillow",
    name: "Frido wedge cushion",
    asin: "B0D3XX9TJZ",
    why: "Raises your head and chest at a gentle slope, which helps keep stomach acid down at night. Better than piling up ordinary pillows.",
  },
  {
    id: "eye-mask",
    name: "Boldfit sleep eye mask",
    asin: "B0BQM83QVL",
    why: "Blocks early morning light and streetlights, useful if you wake too early or nap in the afternoon.",
  },
  {
    id: "earplugs",
    name: "3M 1100 soft foam earplugs",
    asin: "B01IU9ZDVI",
    why: "Soft foam that cuts out snoring, traffic and early household noise.",
  },
  {
    id: "neck-pillow",
    name: "Amazon Basics memory foam travel neck pillow",
    asin: "B0C7BM18PB",
    why: "Keeps your head from dropping on long train, car or flight journeys. Comes with an eye mask and earplugs.",
  },
  {
    id: "bladder-pads",
    name: "FRIENDS adult insert pads",
    asin: "B082GC313N",
    why: "Discreet, absorbent pads made for bladder leaks rather than periods, so you can keep going out while the exercises do their work.",
  },

  // Teeth and mouth
  {
    id: "electric-toothbrush",
    name: "Oral-B Vitality rechargeable electric toothbrush",
    asin: "B07JKXSJMX",
    why: "Does more of the work for you, which helps if your hands are stiff, and its timer makes sure you brush for the full two minutes.",
  },
  {
    id: "interdental-brush",
    name: "ICPA Thermoseal Proxa interdental brushes",
    asin: "B06XC1F69L",
    why: "Tiny brushes for the gaps between teeth, where a toothbrush cannot reach and gum disease usually starts. Easier to hold than floss.",
  },

  // Music and company
  {
    id: "bt-speaker",
    name: "JBL Go 3 portable Bluetooth speaker",
    asin: "B08FB396L1",
    why: "Small, loud and simple, so you can play the old songs properly from your phone wherever you sit.",
  },
  {
    id: "echo-dot",
    name: "Amazon Echo Dot smart speaker",
    asin: "B09B917Z8D",
    why: "Ask out loud for an old song, a bhajan or the radio, with no phone or buttons. Very easy for someone who finds a screen difficult.",
  },
  {
    id: "journal",
    name: "The Journal Lab undated daily planner",
    asin: "B08LSGD2V7",
    why: "A page a day for what you did, how you felt and what went well, which makes patterns easier to see.",
  },

  // Kitchen
  {
    id: "sprout-maker-steel",
    name: "Sumeet stainless steel sprout maker",
    asin: "B07HK9THFX",
    why: "A covered steel container with air holes. It does not hold smells, and moong sprouts evenly in it without a damp cloth.",
  },
  {
    id: "idli-steamer-steel",
    name: "QSEC stainless steel idli maker and steamer",
    asin: "B08KRMRKQM",
    why: "Idli plates plus a flat steaming plate, so the same pot does idli, dhokla and steamed vegetables.",
  },
  {
    id: "pressure-cooker",
    name: "Prestige 3 litre stainless steel pressure cooker",
    asin: "B0843YL5RH",
    why: "The right size for dal, chana and vegetables for two to four people, and steel rather than aluminium.",
  },
  {
    id: "kadai",
    name: "Hawkins ceramic nonstick 2.5 litre kadhai",
    asin: "B0C152KFVG",
    why: "A deep nonstick kadhai that needs very little oil, with a lid. Works on gas and induction.",
  },
  {
    id: "tawa",
    name: "Prestige Omega granite nonstick dosa tawa",
    asin: "B00QWQ0XWG",
    why: "A flat nonstick tawa for chilla and dosa that needs only a few drops of oil and turns easily.",
  },
  {
    id: "spatula",
    name: "AGARO silicone spatula set of 3",
    asin: "B0CV3MK62Z",
    why: "Wide, heat-resistant spatulas that slide under a chilla without scratching a nonstick pan.",
  },
  {
    id: "hand-blender",
    name: "Philips HR3705 hand blender",
    asin: "B07GDR7VZ3",
    why: "Light enough to hold comfortably, and blends straight in the bowl or pan, so there is less to wash.",
  },
  {
    id: "veg-chopper",
    name: "Pigeon handy chopper",
    asin: "B07GS7NYJJ",
    why: "Pull the cord a few times and onion, tomato and chilli are finely chopped, with no knife work for stiff or unsteady hands.",
  },
  {
    id: "measuring-set",
    name: "Dynore stainless steel measuring cups and spoons",
    asin: "B01F7B2JCI",
    why: "Proper cup and spoon measures, so the recipe comes out the same every time, and portions of oil and sugar stay honest.",
  },
  {
    id: "mug",
    name: "Clay Craft 350 ml ceramic mug",
    asin: "B0CQRC55DK",
    why: "A microwave-safe mug big enough for the batter to rise without spilling over.",
  },

  // Pantry
  {
    id: "flaxseed",
    name: "True Elements roasted flax seeds, 500 g",
    asin: "B07BSHM94V",
    why: "A spoonful a day over porridge, curd or salad adds fibre and plant omega-3. Grind them first, or they pass through whole.",
  },
  {
    id: "walnuts",
    name: "Tata Sampann walnut kernels, 200 g",
    asin: "B0C65WVW3W",
    why: "A small handful a day adds plant omega-3 fats, protein and fibre. Keep them in the fridge so they stay fresh.",
  },
  {
    id: "mustard-oil",
    name: "Tata Simply Better cold pressed mustard oil",
    asin: "B0C81GZF1H",
    why: "A traditional cooking oil with a good balance of fats. Still oil, so measure it rather than pouring.",
  },
  {
    id: "oats",
    name: "True Elements rolled oats, 1 kg",
    asin: "B01LN5RJD6",
    why: "Whole rolled oats, not the instant flavoured kind. Their soluble fibre is what helps with cholesterol and blood sugar.",
  },
  {
    id: "ragi-flour",
    name: "Jiwa ragi flour, 1 kg",
    asin: "B08BVPZJN9",
    why: "Finger millet flour, naturally rich in calcium, for porridge, roti and chilla.",
  },
  {
    id: "soya-chunks",
    name: "Saffola soya chunks, 1 kg",
    asin: "B08WQPZ1JB",
    why: "About half protein by weight, cheap and quick to cook. Soak, squeeze and add to any curry.",
  },
  {
    id: "roasted-chana",
    name: "Mithila Foods roasted chana, 1 kg",
    asin: "B0CY84RYRG",
    why: "Ready to eat, high in protein and fibre, and a far better snack than biscuits. A small handful is a portion.",
  },
  {
    id: "sesame",
    name: "True Elements white sesame seeds, 400 g",
    asin: "B0C2KP5G56",
    why: "Toasted til for tempering and sprinkling. Sesame also brings calcium.",
  },
  {
    id: "cocoa",
    name: "Hershey's cocoa powder, 225 g",
    asin: "B00SGUK4V6",
    why: "Plain unsweetened cocoa, so you decide how much sugar goes in.",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function amazonUrl(asin: string) {
  return `https://www.amazon.in/dp/${asin}?tag=${amazonTag}`;
}

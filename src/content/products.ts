/**
 * Things we suggest buying, linked through our Amazon Associates store.
 *
 * Products live here once and pages point at them by `id`, so the same item
 * can sit on a topic, a recipe and a guide without being copied about.
 * Keep `why` plain and specific to how the page uses it; it is advice, not
 * an advert, and nothing here should be something we would not buy ourselves.
 */

/** Amazon.in Associates store ID. Every product link carries it. */
export const amazonTag = "zealverclubs-21";

export type Product = {
  id: string;
  name: string;
  /** Amazon.in product ID, the ten characters after /dp/ in the address. */
  asin: string;
  why: string;
};

export const products: Product[] = [
  {
    id: "sprout-maker-steel",
    name: "Sumeet stainless steel sprout maker",
    asin: "B07HK9THFX",
    why: "The covered container with air holes from step two. Steel, so it does not hold smells, and the moong sprouts evenly without a damp cloth.",
  },
  {
    id: "anti-slip-bath-mat",
    name: "ishro home anti-skid bathroom mat",
    asin: "B09C6DWSLT",
    why: "A rubber mat with suction grips for the shower floor, the wettest spot in the house and where a slip is most likely.",
  },
  {
    id: "bp-monitor-omron-7120",
    name: "Omron HEM 7120 upper arm blood pressure monitor",
    asin: "B00F38B3NW",
    why: "A simple one-button upper arm monitor, the kind doctors prefer to wrist models. Fits arms 22 to 32 cm.",
  },
  {
    id: "resistance-bands-set",
    name: "Fashnex resistance bands set with handles",
    asin: "B09G9W3WFL",
    why: "Five tubes of different strengths with soft handles, so you can start light and move up as you get stronger, sitting or standing.",
  },
  {
    id: "idli-steamer-steel",
    name: "QSEC stainless steel idli maker and steamer",
    asin: "B08KRMRKQM",
    why: "Idli plates plus a flat steaming plate, so the same pot does idli, dhokla and steamed vegetables.",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function amazonUrl(asin: string) {
  return `https://www.amazon.in/dp/${asin}?tag=${amazonTag}`;
}

/**
 * An image's aspect ratio, written "width/height".
 *
 * The common shapes have names, and any exact pair works too, so an image
 * whose proportions are not a neat fraction can declare its own rather than
 * being cropped into the nearest preset.
 */
export type AspectRatio = `${number}/${number}`;

/** The CSS `aspect-ratio` value for a ratio. */
export function aspectRatioValue(ratio: AspectRatio): string {
  return ratio.replace("/", " / ");
}

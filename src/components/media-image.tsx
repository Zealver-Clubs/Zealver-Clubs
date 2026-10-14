import Image from "next/image";
import { cn } from "@/lib/utils";
import { type AspectRatio, aspectRatioValue } from "@/lib/aspect-ratio";

/**
 * Renders a real photo when `src` is provided (all photos are the club's own,
 * from zealverclubs.com), otherwise a labelled placeholder in the same box.
 */
export function MediaImage({
  src,
  alt,
  label,
  ratio = "16/9",
  fit = "cover",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src?: string | null;
  alt?: string;
  label: string;
  ratio?: AspectRatio;
  /** "contain" fits a whole image inside the box, for artwork that must not be cropped. */
  fit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  /*
   * Nothing to show, so show nothing. A dashed "photo goes here" box is
   * useful while a site is being built and looks unfinished once it is
   * live, so a card or an article without a picture is simply text until
   * one is added.
   */
  if (!src) return null;
  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={{ aspectRatio: aspectRatioValue(ratio) }}
    >
      <Image
        src={src}
        alt={alt ?? label}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}

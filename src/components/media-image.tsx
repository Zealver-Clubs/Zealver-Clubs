import Image from "next/image";
import { ImagePlaceholder } from "./image-placeholder";
import { cn } from "@/lib/utils";

const ratioValue: Record<string, string> = {
  "16/9": "16 / 9",
  "4/3": "4 / 3",
  "3/2": "3 / 2",
  "1/1": "1 / 1",
};

/**
 * Renders a real photo when `src` is provided (all photos are the club's own,
 * from zealverclubs.com), otherwise a labelled placeholder in the same box.
 */
export function MediaImage({
  src,
  alt,
  label,
  ratio = "16/9",
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src?: string | null;
  alt?: string;
  label: string;
  ratio?: "16/9" | "4/3" | "3/2" | "1/1";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!src) {
    return <ImagePlaceholder label={label} ratio={ratio} className={className} />;
  }
  return (
    <div
      className={cn("relative overflow-hidden bg-muted", className)}
      style={{ aspectRatio: ratioValue[ratio] }}
    >
      <Image
        src={src}
        alt={alt ?? label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

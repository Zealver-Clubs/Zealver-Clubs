import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Labelled image placeholder. Shows exactly where a real photo will go,
 * with a caption so the client knows what belongs there. Decorative, so
 * it is hidden from assistive tech via aria-hidden and the caption text.
 */
export function ImagePlaceholder({
  label,
  className,
  ratio = "16/9",
}: {
  label: string;
  className?: string;
  ratio?: "16/9" | "4/3" | "1/1" | "3/2" | "6/5" | "4/5";
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted text-muted-foreground",
        className,
      )}
      style={{
        aspectRatio: ratio.replace("/", " / "),
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.035) 0, rgba(0,0,0,0.035) 12px, transparent 12px, transparent 24px)",
      }}
    >
      <ImageIcon aria-hidden className="h-7 w-7 opacity-60" />
      <span className="px-4 text-center text-sm font-bold">{label}</span>
    </div>
  );
}

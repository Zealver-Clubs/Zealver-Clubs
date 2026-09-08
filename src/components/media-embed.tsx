import { PlayCircle } from "lucide-react";
import { ImagePlaceholder } from "./image-placeholder";

/**
 * Video block. When a YouTube id is present it embeds the Zealver channel
 * video; otherwise it renders a labelled play placeholder in the same 16:9 box.
 */
export function MediaEmbed({
  youtubeId,
  title,
  label,
}: {
  youtubeId?: string | null;
  title: string;
  label: string;
}) {
  if (!youtubeId) {
    return (
      <div className="relative">
        <ImagePlaceholder label={label} ratio="16/9" />
        <PlayCircle
          aria-hidden
          className="pointer-events-none absolute inset-0 m-auto h-16 w-16 text-secondary/70"
        />
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-black" style={{ aspectRatio: "16 / 9" }}>
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

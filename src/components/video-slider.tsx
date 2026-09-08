"use client";

import { SliderRail } from "@/components/slider-rail";

type Video = { id: string; title: string };

function VerticalVideo({ v }: { v: Video }) {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-border bg-black"
      style={{ aspectRatio: "9 / 16" }}
    >
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${v.id}`}
        title={v.title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

/**
 * Vertical (9:16) testimonial videos. On desktop they sit centered in a row
 * with no controls; on mobile they become a swipeable slider with arrows/dots.
 */
export function VideoSlider({ videos }: { videos: Video[] }) {
  return (
    <>
      {/* Desktop: centered row, no arrows */}
      <div className="hidden justify-center gap-5 md:flex">
        {videos.map((v) => (
          <div key={v.id} className="w-full max-w-[280px]">
            <VerticalVideo v={v} />
          </div>
        ))}
      </div>

      {/* Mobile: slider */}
      <div className="md:hidden">
        <SliderRail
          ariaLabel="Zealver testimonial videos"
          basis="clamp(240px, 78vw, 300px)"
          showDots
        >
          {videos.map((v) => (
            <VerticalVideo key={v.id} v={v} />
          ))}
        </SliderRail>
      </div>
    </>
  );
}

"use client";

import { useEffect } from "react";
import { SliderRail } from "@/components/slider-rail";
import { site } from "@/content/site";

/**
 * Real Instagram feed: renders official Instagram embeds for a set of the
 * club's public reels, using Instagram's embed.js (no API key needed). Each
 * blockquote degrades to a captioned link if the script is blocked.
 */

// Recent public reels from instagram.com/zealverclubs.
const REELS = [
  "Da5A4qFIfYL",
  "DalDHWasGCz",
  "DashhTsIA4r",
  "Dc8LKanOEl4",
  "Dc5rzTJu-cj",
  "Dc5Sv33Ia50",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramFeed() {
  useEffect(() => {
    const id = "instagram-embed-js";
    const process = () => window.instgrm?.Embeds?.process?.();
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      process();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = process;
    document.body.appendChild(s);
  }, []);

  return (
    <SliderRail
      ariaLabel={`Recent reels from @${site.instagramHandle}`}
      basis="clamp(280px, 86vw, 330px)"
      showDots
    >
      {REELS.map((code) => {
        const permalink = `https://www.instagram.com/reel/${code}/`;
        return (
          <blockquote
            key={code}
            className="instagram-media"
            data-instgrm-permalink={`${permalink}?utm_source=ig_embed`}
            data-instgrm-version="14"
            style={{
              background: "#fff",
              border: 0,
              margin: 0,
              padding: 0,
              width: "100%",
              borderRadius: "16px",
            }}
          >
            <a
              href={permalink}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-link"
            >
              View this reel from @{site.instagramHandle} on Instagram
            </a>
          </blockquote>
        );
      })}
    </SliderRail>
  );
}

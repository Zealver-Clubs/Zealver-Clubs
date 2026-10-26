import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Page metadata in one place.
 *
 * Every page used to inherit the home page's Open Graph block, so sharing a
 * recipe or a guide on WhatsApp showed the home page's title, description
 * and photograph. These build a card that describes the page being shared.
 *
 * `description` does double duty as the search snippet and the share
 * preview, so it is trimmed to roughly what a search engine will show
 * rather than being cut off mid-word.
 */

const MAX_DESCRIPTION = 160;

/** Trim to whole sentences, then whole words, within the search snippet. */
export function searchDescription(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= MAX_DESCRIPTION) return clean;

  const sentence = clean.match(/^.*?[.!?](\s|$)/)?.[0]?.trim();
  if (sentence && sentence.length <= MAX_DESCRIPTION) return sentence;

  const cut = clean.slice(0, MAX_DESCRIPTION);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** An absolute URL, which Open Graph requires. */
export function absolute(path: string): string {
  return path.startsWith("http") ? path : `${site.url}${path}`;
}

/**
 * The share image: a card drawn from the page's title, for every page.
 *
 * Pages used to share their own photograph, but most guides and topics
 * reuse the same few class photos, so every link pasted into WhatsApp
 * looked identical. The title card tells the reader which page they have
 * been sent. The page's photograph still appears on the page itself.
 */
export function shareImage(opts: {
  title: string;
  kicker?: string;
}): { url: string; width: number; height: number; alt: string } {
  const params = new URLSearchParams({ title: opts.title });
  if (opts.kicker) params.set("kicker", opts.kicker);
  return {
    url: absolute(`/api/og?${params.toString()}`),
    width: 1200,
    height: 630,
    alt: opts.title,
  };
}

export function pageMeta(opts: {
  /** Shown in the tab and the search result. The site name is added. */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/knowledge-hub". */
  path: string;
  /** Accepted for callers' convenience; the share card is always drawn. */
  image?: string;
  imageAlt?: string;
  /** A short label on the generated share card, e.g. "Guide". */
  kicker?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = absolute(opts.path);
  const description = searchDescription(opts.description);
  const image = shareImage(opts);
  const fullTitle = `${opts.title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: opts.type ?? "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_IN",
      images: [image],
      ...(opts.type === "article"
        ? {
            publishedTime: opts.publishedTime,
            modifiedTime: opts.modifiedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

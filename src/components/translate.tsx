"use client";

/**
 * Page translation.
 *
 * Site-wide rather than per-article: someone who needs to read in Hindi needs
 * it on every page, and making them choose again on each one is exactly the
 * friction this audience does not need.
 *
 * This hands the page to Google Translate's own proxy rather than running the
 * in-page widget. The widget is deprecated, and because it rewrites text nodes
 * underneath React it reverts on any re-render, which in testing meant it
 * translated only some of the time. The proxy renders the whole site
 * server-side, keeps working as the reader navigates on through it, and cannot
 * be undone by a re-render. The trade is that the reader sits on a
 * translate.goog address while reading, and comes back here on English.
 */

export const LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
] as const;

/** The site's own origin, used to get back from the translated proxy. */
const CANONICAL_HOST = "zealver-clubs.vercel.app";

function onProxy() {
  return (
    typeof window !== "undefined" &&
    window.location.hostname.endsWith(".translate.goog")
  );
}

/** Which language the reader is currently seeing. */
export function currentLanguage(): string {
  if (typeof window === "undefined") return "en";
  if (!onProxy()) return "en";
  return new URLSearchParams(window.location.search).get("_x_tr_tl") || "en";
}

/** The same page back on the real site, without the proxy's parameters. */
function canonicalUrl(): string {
  const { pathname } = window.location;
  const params = new URLSearchParams(window.location.search);
  for (const k of [...params.keys()]) {
    if (k.startsWith("_x_tr_")) params.delete(k);
  }
  const q = params.toString();
  return `https://${CANONICAL_HOST}${pathname}${q ? `?${q}` : ""}`;
}

/** Switches language for the whole site, keeping the reader on this page. */
export function setLanguage(code: string) {
  const target = onProxy() ? canonicalUrl() : window.location.href;

  if (code === "en") {
    window.location.href = target;
    return;
  }

  window.location.href = `https://translate.google.com/translate?sl=en&tl=${encodeURIComponent(
    code,
  )}&u=${encodeURIComponent(target)}`;
}

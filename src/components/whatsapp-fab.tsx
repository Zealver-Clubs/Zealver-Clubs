import { WhatsAppIcon } from "@/components/icons/social";
import { site } from "@/content/site";

/**
 * Sticky WhatsApp button, bottom-right on every page. Opens WhatsApp with a
 * friendly prefilled message. Uses the official WhatsApp green.
 */
export function WhatsAppFab() {
  return (
    <a
      href={site.joinHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Zealver Clubs on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none sm:h-16 sm:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      <WhatsAppIcon className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
    </a>
  );
}

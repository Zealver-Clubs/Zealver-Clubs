import { WhatsAppIcon } from "@/components/icons/social";
import { site } from "@/content/site";

/**
 * End-of-article call to action for the Knowledge Hub.
 *
 * This is the "keep me updated" ask, and it is deliberately not the same as
 * "Join Our Club" in the top bar: someone reading an article is often not
 * ready to enquire about membership, but is happy to follow along for free.
 * Keeping the two separate means they reach different lists.
 */
export function HubCta() {
  const c = site.knowledgeHubCommunity;

  return (
    <aside className="mt-12 rounded-2xl border-2 border-primary/30 bg-primary-soft/50 p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold text-heading">{c.heading}</h2>
      <p className="mt-2 text-lg leading-relaxed text-foreground">{c.blurb}</p>
      <a
        href={c.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-14 items-center gap-3 rounded-full px-7 text-lg font-extrabold text-white shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-none"
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon className="h-6 w-6 shrink-0" aria-hidden />
        {c.cta}
      </a>
      <p className="mt-3 text-sm text-muted-foreground">
        Opens WhatsApp in a new tab · {c.name} group
      </p>
    </aside>
  );
}

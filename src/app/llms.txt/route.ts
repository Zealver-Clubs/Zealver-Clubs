import { site, parentOrg, reviewer, nav } from "@/content/site";
import { topics } from "@/content/topics";
import { guides } from "@/content/guides";
import { experienceItems } from "@/content/experience";

/**
 * /llms.txt — the index an assistant reads first.
 *
 * Generated from the content files rather than hand-maintained, because the
 * previous static version listed 9 topics after the Hub had grown to 28. A
 * stale index is worse than none: it tells an assistant the site is smaller
 * and older than it is.
 */
export const dynamic = "force-static";

export function GET() {
  const u = (path: string) => `${site.url}${path}`;
  const byCategory = new Map<string, typeof topics>();
  for (const t of topics) {
    byCategory.set(t.category, [...(byCategory.get(t.category) ?? []), t]);
  }

  const body = `# ${site.name}

> ${site.description}

Key facts:
- Who it is for: women 60+ (seniors). Everything is designed for older adults.
- Parent brand: ${parentOrg.name}. ${parentOrg.description}
- The name: ${parentOrg.nameOrigin}
- Approach: the 4Ms — Movement, Music, Memory, Meaning — in a simple weekly rhythm. Chair-based and music-led; no dance or fitness experience needed.
- Where: ${site.areaServed.join("; ")}.
- Content model: a "Topic" is one subject, a "Guide" is a step-by-step walkthrough linking several Topics.
- Editorial: every Knowledge Hub article and guide is reviewed by ${reviewer.fullName}, ${reviewer.credentials}, ${reviewer.jobTitle}. Articles are written with AI assistance and reviewed before publishing. Last review: ${reviewer.lastReviewedLabel}.
- The Knowledge Hub is activity-first and explicitly not medical advice.
- Contact: WhatsApp ${site.contact.whatsapp}, email ${site.contact.email}.

## Pages
${nav.map((n) => `- [${n.label}](${u(n.href)})`).join("\n")}
- [How we write and review](${u(reviewer.href)})

## Experiences
${experienceItems.map((e) => `- [${e.title}](${u(`/experience/${e.slug}`)}): ${e.mode}, ${e.kind}. ${e.blurb}`).join("\n")}

## Knowledge Hub — Guides (${guides.length})
${guides.map((g) => `- [${g.title}](${u(`/knowledge-hub/guides/${g.slug}`)}): ${g.intro}`).join("\n")}

## Knowledge Hub — Topics (${topics.length})
${[...byCategory.entries()]
  .map(
    ([cat, list]) =>
      `\n### ${cat}\n${list
        .map((t) => `- [${t.title}](${u(`/knowledge-hub/topics/${t.slug}`)}): ${t.summary}`)
        .join("\n")}`,
  )
  .join("\n")}

## Legal
- [Privacy Policy](${u(site.legal.privacy)})
- [Terms & Conditions](${u(site.legal.terms)})
- [Participant Agreement](${u(site.legal.participantAgreement)})

## Full content
- [llms-full.txt](${u("/llms-full.txt")}): the complete text of every topic and guide.
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

import { site, parentOrg, reviewer, contentPolicy, vision, mission, values, team } from "@/content/site";
import { topics, topicParagraphs } from "@/content/topics";
import { guides } from "@/content/guides";
import { experienceItems } from "@/content/experience";

/**
 * /llms-full.txt — the whole Knowledge Hub as plain text, so an assistant can
 * answer from it without crawling every page. Generated, for the same reason
 * as llms.txt: hand-maintained copies of the content go stale immediately.
 */
export const dynamic = "force-static";

export function GET() {
  const u = (path: string) => `${site.url}${path}`;

  const head = `# ${site.name} — full content

> ${site.description}

${parentOrg.description}
${parentOrg.clubsLine}
The name: ${parentOrg.nameOrigin}

Vision: ${vision.headline}
Mission: ${mission.intro} ${mission.points.join("; ")}.
Values: ${values.map((v) => `${v.name} — ${v.text}`).join(" ")}

Team:
${team.map((m) => `- ${m.name}, ${m.role}${"credentials" in m && m.credentials ? `, ${m.credentials}` : ""}. ${m.bio}`).join("\n")}

Editorial policy: ${contentPolicy.aiNote} Reviewed by ${reviewer.fullName}, ${reviewer.credentials}. Last reviewed ${reviewer.lastReviewedLabel}.
Disclaimer applying to all Knowledge Hub content: ${contentPolicy.disclaimer}

Contact: WhatsApp ${site.contact.whatsapp}, email ${site.contact.email}. Areas served: ${site.areaServed.join("; ")}.
`;

  const experience = `

---

# Experiences

${experienceItems
  .map(
    (e) => `## ${e.title}
URL: ${u(`/experience/${e.slug}`)}
Mode: ${e.mode}. Kind: ${e.kind}. ${e.meta}
Schedule: ${e.schedule}. Price: ${e.price}. Led by: ${e.trainer}.

${e.blurb}`,
  )
  .join("\n\n")}`;

  const guideText = `

---

# Knowledge Hub — Guides

${guides
  .map(
    (g) => `## ${g.title}
URL: ${u(`/knowledge-hub/guides/${g.slug}`)}
${g.meta}

${g.intro}

${g.steps.map((s) => `### Step ${s.n}. ${s.heading}\n${s.text}\nRelated topic: ${s.topicLabel} (${u(`/knowledge-hub/topics/${s.topicSlug}`)})`).join("\n\n")}${
      g.references?.length
        ? `\n\nSources:\n${g.references.map((r) => `- ${r.title}. ${r.publisher}, ${r.year}.${r.url ? ` ${r.url}` : ""} Supports: ${r.supports}`).join("\n")}`
        : ""
    }`,
  )
  .join("\n\n")}`;

  const topicText = `

---

# Knowledge Hub — Topics

${topics
  .map(
    (t) => `## ${t.title}
URL: ${u(`/knowledge-hub/topics/${t.slug}`)}
Category: ${t.category}

${t.summary}
${t.keyPoints?.length ? `\nIn short:\n${t.keyPoints.map((k) => `- ${k}`).join("\n")}\n` : ""}
${
  t.sections?.length
    ? t.sections.map((sec) => `### ${sec.heading}\n${sec.body.join("\n\n")}`).join("\n\n")
    : topicParagraphs(t).join("\n\n")
}${
      t.references?.length
        ? `\n\nSources:\n${t.references.map((r) => `- ${r.title}. ${r.publisher}, ${r.year}.${r.url ? ` ${r.url}` : ""} Supports: ${r.supports}`).join("\n")}`
        : ""
    }`,
  )
  .join("\n\n")}
`;

  return new Response(head + experience + guideText + topicText, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

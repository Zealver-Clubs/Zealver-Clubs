import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { HubBrowser } from "@/components/hub-browser";
import { topics } from "@/content/topics";
import { guides } from "@/content/guides";
import { recipes } from "@/content/recipes";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Knowledge Hub",
  description:
    "Health topics, step-by-step guides and Indian recipes for women 60+, reviewed by a doctor before publishing. Browse A–Z or search.",
  path: "/knowledge-hub",
  kicker: "Knowledge Hub",
});

export default function KnowledgeHubPage() {
  return (
    <Section className="py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Knowledge Hub" }]} />
      <SectionHeading
        as="h1"
        title="Knowledge Hub"
        intro="Clear, trustworthy reading on healthy ageing. Start with a single topic, or follow a step-by-step guide."
      />
      <div className="mt-8">
        <HubBrowser topics={topics} guides={guides} recipes={recipes} />
      </div>
    </Section>
  );
}

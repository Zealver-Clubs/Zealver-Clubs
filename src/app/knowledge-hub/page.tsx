import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { HubBrowser } from "@/components/hub-browser";
import { topics } from "@/content/topics";
import { guides } from "@/content/guides";
import { recipes } from "@/content/recipes";

export const metadata: Metadata = {
  title: "Knowledge Hub | Zealver Clubs",
  description:
    "Trusted health topics and step-by-step guides for healthy ageing. Browse A–Z or search for what matters to you.",
};

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

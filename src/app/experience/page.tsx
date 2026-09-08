import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { ExperienceChooser } from "@/components/experience-chooser";
import { experienceItems } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience | Zealver Clubs",
  description:
    "Choose in-person or online Zealver Seated Dance Fitness. Browse clubs, events and instructors made for women 60+.",
};

export default function ExperiencePage() {
  return (
    <Section className="py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Experience" }]} />
      <SectionHeading
        as="h1"
        title="Choose your experience"
        intro="Pick how you would like to join. You can change your choice at any time."
      />
      <div className="mt-8">
        <ExperienceChooser items={experienceItems} />
      </div>
    </Section>
  );
}

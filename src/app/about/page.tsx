import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Target, Heart } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/social";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { JsonLd } from "@/components/json-ld";
import { site, parentOrg, vision, mission, values, team } from "@/content/site";

export const metadata: Metadata = {
  title: "About Zealver Clubs | Zealver Clubs",
  description:
    "Zealver Clubs is the community wellbeing vertical of Zealver, one of India's established SeniorCare brands. Our vision, mission, values and the team behind the clubs.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Zealver Clubs",
    url: `${site.url}/about`,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      description: site.description,
      parentOrganization: {
        "@type": "Organization",
        name: parentOrg.name,
        description: parentOrg.description,
      },
      employee: team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        description: m.bio,
        ...("href" in m && m.href ? { url: `${site.url}${m.href}` } : {}),
        sameAs: [m.linkedin],
      })),
    },
  };

  return (
    <Section className="max-w-3xl py-8">
      <JsonLd data={schema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <SectionHeading
        as="h1"
        title="About Zealver Clubs"
        intro="Where community becomes care."
      />

      {/* Who we are */}
      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-heading">Who we are</h2>
        <div className="mt-3 flex flex-col gap-4 text-lg leading-relaxed text-foreground">
          <p>{parentOrg.description}</p>
          <p>{parentOrg.clubsLine}</p>
        </div>
      </div>

      {/* Vision */}
      <div className="mt-10 rounded-2xl border-2 border-primary/25 bg-primary-soft/40 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-sm font-bold text-primary">
          <Compass className="h-5 w-5 shrink-0" aria-hidden /> Our vision
        </p>
        <h2 className="mt-2 text-2xl font-extrabold leading-snug text-heading">
          {vision.headline}
        </h2>
      </div>

      {/* Mission */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-heading">
          <Target className="h-6 w-6 shrink-0 text-primary" aria-hidden /> Our
          mission
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-foreground">
          {mission.intro}
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {mission.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 rounded-xl border border-border bg-card p-4 text-lg leading-relaxed text-foreground"
            >
              <ArrowRight
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Values */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2 text-2xl font-extrabold text-heading">
          <Heart className="h-6 w-6 shrink-0 text-primary" aria-hidden /> Our
          values
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <li key={v.name}>
              <Card className="h-full">
                <CardBody>
                  <h3 className="text-xl font-extrabold text-heading">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{v.text}</p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      </div>

      {/* Team */}
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">Our team</h2>
        <ul className="mt-4 flex flex-col gap-4">
          {team.map((m) => (
            <li key={m.name}>
              <Card className="h-full">
                <CardBody>
                  <h3 className="text-xl font-extrabold text-heading">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-baseline gap-2 underline decoration-primary decoration-2 underline-offset-4 hover:text-secondary"
                    >
                      {m.name}
                      <LinkedinIcon
                        className="h-4 w-4 shrink-0 self-center"
                        aria-hidden
                      />
                      <span className="sr-only">
                        {" "}
                        on LinkedIn (opens in a new tab)
                      </span>
                    </a>
                  </h3>
                  <p className="mt-1 font-bold text-secondary">{m.role}</p>
                  {"credentials" in m && m.credentials ? (
                    <p className="text-muted-foreground">{m.credentials}</p>
                  ) : null}
                  <p className="mt-3 text-lg leading-relaxed text-foreground">
                    {m.bio}
                  </p>
                  {"href" in m && m.href ? (
                    <Link
                      href={m.href}
                      className="mt-3 inline-flex items-center gap-1.5 font-bold text-secondary underline decoration-primary decoration-2 underline-offset-4"
                    >
                      How we write and review
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  ) : null}
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

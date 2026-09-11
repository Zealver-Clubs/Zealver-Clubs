import type { Metadata } from "next";
import {
  Activity,
  Music,
  Brain,
  HeartHandshake,
  ShieldCheck,
  Home as HomeIcon,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { MediaImage } from "@/components/media-image";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Approach | Zealver Clubs",
  description:
    "A simple, human framework for healthy ageing built around the 4Ms: Movement, Music, Memory and Meaning, delivered together, consistently and with dignity.",
};

const pillars = [
  {
    label: "Movement",
    Icon: Activity,
    text: "Chair-based, guided movement that builds strength, balance and everyday confidence.",
  },
  {
    label: "Music",
    Icon: Music,
    text: "Joyful, music-led sessions that make taking part feel easy, familiar and uplifting.",
  },
  {
    label: "Memory",
    Icon: Brain,
    text: "Well-loved songs and gentle routines that keep the mind active and engaged.",
  },
  {
    label: "Meaning",
    Icon: HeartHandshake,
    text: "Belonging, friendship and purpose in a group that knows you by name.",
  },
];

const realLife = [
  "Gentle, joyful, music-led movement",
  "Weekly social events that grow into real friendships",
  "Chair-based guided movement for strength and balance",
  "A predictable weekly rhythm, familiar faces, and no performance pressure",
];

const values = [
  {
    Icon: ShieldCheck,
    title: "Respect and dignity",
    text: "Every session is designed to feel calm, kind and never patronising.",
  },
  {
    Icon: HomeIcon,
    title: "Safe, familiar space",
    text: "The same friendly setting and faces each week, so it feels like home.",
  },
  {
    Icon: FlaskConical,
    title: "Science-based, humanity-delivered",
    text: "Grounded in how healthy ageing really works, led with warmth by real people.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      <Section className="py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Approach" }]} />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-primary">
              Our Approach
            </p>
            <h1 className="text-4xl font-extrabold text-heading sm:text-5xl">
              Our approach to healthy ageing
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              A simple, human framework built around how seniors actually live, feel
              and connect. Healthy ageing is not about doing more. It is about doing
              the right things, together, consistently, and with dignity.
            </p>
          </div>
          <MediaImage
            src="/images/instructor-class.jpg"
            alt="A Zealver instructor leading a warm, seated session"
            label="Photo, Zealver session"
            ratio="4/3"
            priority
            className="rounded-2xl border border-border"
          />
        </div>
      </Section>

      {/* Why activities alone don't work */}
      <Section className="py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardBody>
              <h2 className="text-2xl font-extrabold text-heading">
                Why activities alone do not work
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Most programmes offer isolated activities: an exercise class here, a
                brain game there, the occasional social event. Each one helps a little,
                but on its own it rarely lasts.
              </p>
            </CardBody>
          </Card>
          <div className="flex flex-col justify-center rounded-2xl bg-secondary p-6 text-secondary-foreground sm:p-8">
            <p className="text-xl font-extrabold sm:text-2xl">
              Healthy ageing works when the physical, mental, emotional and social
              sides are activated together, repeatedly, in a familiar setting.
            </p>
          </div>
        </div>
      </Section>

      {/* 4M framework */}
      <Section className="py-8">
        <SectionHeading
          align="center"
          eyebrow="The 4M framework"
          title="Four pillars, one integrated system"
          intro="Movement, Music, Memory and Meaning work together in a simple weekly rhythm."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ label, Icon, text }) => (
            <li key={label}>
              <Card className="h-full">
                <CardBody className="flex h-full flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-heading">{label}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* In real life */}
      <Section className="py-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <MediaImage
            src="/images/home-experience.jpg"
            alt="Women taking part in a joyful seated dance session"
            label="Photo, seated dance session"
            ratio="4/3"
            className="rounded-2xl border border-border"
          />
          <div>
            <h2 className="text-2xl font-extrabold text-heading sm:text-3xl">
              What it looks like in real life
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {realLife.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-foreground">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="py-8">
        <SectionHeading align="center" title="What we hold to" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          {values.map(({ Icon, title, text }) => (
            <li key={title}>
              <Card className="h-full">
                <CardBody className="flex h-full flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary-soft text-secondary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-heading">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{text}</p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <Section className="py-10">
        <div className="rounded-2xl bg-muted px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-heading sm:text-3xl">
            See the approach in action
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/experience" size="lg">
              Explore Experiences
            </ButtonLink>
            <ButtonLink href="/knowledge-hub" variant="secondary" size="lg">
              Read the Knowledge Hub
            </ButtonLink>
            <ButtonLink href={site.joinHref} variant="outline" size="lg" target="_blank" rel="noreferrer">
              Join Our Club
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

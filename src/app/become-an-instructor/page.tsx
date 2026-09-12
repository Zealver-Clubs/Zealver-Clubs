import type { Metadata } from "next";
import {
  Users,
  HeartHandshake,
  ShieldCheck,
  MessageCircleHeart,
  Clock,
  Sparkles,
  BookOpen,
  CalendarCheck,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { MediaImage } from "@/components/media-image";
import { WhatsAppIcon } from "@/components/icons/social";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Become an Instructor | Zealver Clubs",
  description:
    "Train as a Zealver certified instructor and lead chair-based sessions for women 60+. No prior experience needed, and we train and support you throughout.",
};

const duties = [
  { Icon: Users, title: "Welcome members", text: "Greet everyone warmly and help them feel at home." },
  { Icon: HeartHandshake, title: "Guide sessions gently", text: "Lead simple, chair-based activities using our ready-made plans." },
  { Icon: ShieldCheck, title: "Keep things safe", text: "Hold a calm, respectful and safe space for all abilities." },
  { Icon: Sparkles, title: "Build community", text: "Turn a weekly session into real, lasting friendships." },
];

const support = [
  { Icon: BookOpen, title: "Training guides", text: "Clear, step-by-step guides, no prior experience needed." },
  { Icon: CalendarCheck, title: "Weekly session plans", text: "Ready-made plans so preparation stays simple." },
  { Icon: Users, title: "Community support", text: "A team and fellow instructors to lean on." },
  { Icon: LifeBuoy, title: "Troubleshooting help", text: "Someone to call when you need a hand." },
];

const benefits = [
  "Purpose without pressure",
  "Build real relationships in your neighbourhood",
  "Strengthen your communication and leadership",
  "Personal fulfilment from helping others",
  "A flexible schedule that fits your life",
];

const steps = [
  { n: 1, title: "Apply", text: "Send a quick message to start your application." },
  { n: 2, title: "We connect", text: "Our team reviews it and has a friendly chat with you." },
  { n: 3, title: "Train and certify", text: "Complete our training and become a Zealver certified instructor." },
  { n: 4, title: "Start teaching", text: "Begin your sessions with our ongoing support." },
];

export default function BecomeAnInstructorPage() {
  return (
    <>
      <Section className="py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Become an Instructor" }]} />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-extrabold uppercase tracking-wide text-primary">
              Become an Instructor
            </p>
            <h1 className="text-4xl font-extrabold text-heading sm:text-5xl">
              Become a Zealver certified instructor
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Help seniors connect, move and belong, right in your
              neighbourhood. No prior experience needed: we train you and you
              qualify as a Zealver certified instructor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={site.joinHref} size="lg" target="_blank" rel="noreferrer">
                <WhatsAppIcon className="h-5 w-5" aria-hidden />
                Apply to become an instructor
              </ButtonLink>
              <ButtonLink href="/experience" variant="outline" size="lg">
                See the Experiences
              </ButtonLink>
            </div>
          </div>
          <MediaImage
            src="/images/community-celebration.jpg"
            alt="A Zealver Clubs community gathering"
            label="Photo, Zealver community"
            ratio="4/3"
            priority
            className="rounded-2xl border border-border"
          />
        </div>
      </Section>

      {/* What an instructor does */}
      <Section className="py-8">
        <SectionHeading
          align="center"
          eyebrow="The role"
          title="What does an instructor do?"
          intro="Four simple things, and none of them need a fitness or dance background."
        />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {duties.map(({ Icon, title, text }) => (
            <li key={title}>
              <Card className="h-full">
                <CardBody className="flex h-full flex-col">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary">
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

      {/* Support + time commitment */}
      <Section className="py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-heading">We support you all the way</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {support.map(({ Icon, title, text }) => (
                <li key={title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <Icon className="h-6 w-6 flex-none text-secondary" aria-hidden />
                  <div>
                    <h3 className="font-extrabold text-heading">{title}</h3>
                    <p className="mt-1 text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-muted p-6">
            <h2 className="flex items-center gap-2 text-xl font-extrabold text-heading">
              <Clock className="h-6 w-6 text-primary" aria-hidden /> Time commitment
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                About 3 sessions per week
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                1 to 2 hours per session
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                Simple prep with ready-made guides
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                Flexible pacing that fits your life
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Why become an instructor */}
      <Section className="py-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-heading sm:text-3xl">
              <MessageCircleHeart className="h-7 w-7 text-primary" aria-hidden /> Why do it?
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg text-foreground">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-none text-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <MediaImage
            src="/images/instructor-class.jpg"
            alt="A Zealver certified instructor leading a warm, seated session"
            label="Photo, instructor leading a session"
            ratio="4/3"
            className="rounded-2xl border border-border"
          />
        </div>
      </Section>

      {/* Steps */}
      <Section className="py-8">
        <SectionHeading align="center" eyebrow="Getting started" title="How to become an instructor" />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n}>
              <Card className="h-full">
                <CardBody className="flex h-full flex-col">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-lg font-extrabold text-secondary-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-heading">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </CardBody>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <Section className="py-10">
        <div className="rounded-2xl bg-secondary px-6 py-10 text-center text-secondary-foreground sm:px-10">
          <h2 className="text-2xl font-extrabold text-secondary-foreground sm:text-3xl">
            Ready to bring Zealver to your neighbourhood?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg opacity-90">
            All abilities welcome. We will guide you from your first message to your
            first session.
          </p>
          <div className="mt-6">
            <ButtonLink href={site.joinHref} size="lg" target="_blank" rel="noreferrer">
              <WhatsAppIcon className="h-5 w-5" aria-hidden />
              Apply to become an instructor
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

import { BookOpen, MessageSquareQuote, Film } from "lucide-react";
import { InstagramIcon } from "@/components/icons/social";
import { Section, SectionHeading } from "@/components/section";
import { ButtonLink } from "@/components/ui/button";
import { GuideCard } from "@/components/content-cards";
import { featuredGuides } from "@/content/guides";
import { Card, CardBody } from "@/components/ui/card";
import { MediaImage } from "@/components/media-image";
import { MediaEmbed } from "@/components/media-embed";
import { Ticker } from "@/components/ticker";
import { VideoSlider } from "@/components/video-slider";
import { InstagramFeed } from "@/components/instagram-feed";
import { InView } from "@/components/in-view";
import { site, parentOrg } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-6 pb-3 text-center sm:pt-10">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold text-heading sm:text-5xl lg:max-w-none lg:whitespace-nowrap lg:text-6xl">
          {site.tagline}
        </h1>
        <p
          className="mx-auto mt-3 whitespace-nowrap text-muted-foreground"
          style={{ fontSize: "clamp(0.9rem, 4.3vw, 1.6rem)" }}
        >
          {site.subTagline}
        </p>
      </Section>

      {/* Slow keyword ticker (replaces the static pillars) */}
      <div className="py-4">
        <Ticker />
      </div>

      {/* The two worlds: Experience, then Knowledge Hub */}
      <Section className="grid gap-6 pt-2 pb-10 md:grid-cols-2">
        {/* Experience */}
        <Card className="flex flex-col">
          {/* Clean background video: self-hosted MP4, no player chrome, smooth
              muted autoplay + loop. Falls back to the class photo as a poster
              until /videos/hero.mp4 is added. */}
          <div
            className="relative overflow-hidden border-b border-border bg-black"
            style={{ aspectRatio: "16 / 9" }}
          >
            <video
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/home-experience.jpg"
              aria-label="Zealver Seated Dance Fitness class in motion"
              tabIndex={-1}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              <source src="/videos/hero.webm" type="video/webm" />
            </video>
          </div>
          <CardBody className="flex flex-1 flex-col">
            <p className="text-sm font-extrabold uppercase tracking-wide text-primary">
              Part 1 · Experiences
            </p>
            <h2 className="mt-2 text-[1.35rem] font-extrabold text-heading sm:text-3xl">
              Move, dance and connect
            </h2>
            <p className="mt-3 flex-1 text-lg text-muted-foreground">
              Zealver Seated Dance Fitness, live classes, clubs and events. Chair-based,
              music-led and made for women 60+. No experience needed.
            </p>
            <div className="mt-5">
              <ButtonLink href="/experience" size="lg" className="w-full sm:w-auto">
                Explore Experiences
              </ButtonLink>
            </div>
          </CardBody>
        </Card>

        {/* Knowledge Hub */}
        <Card className="flex flex-col">
          <MediaImage
            src="/images/instructor-class.jpg"
            alt="A Zealver instructor leading a seated class"
            label="Photo, Knowledge Hub, trainer explaining"
            ratio="16/9"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="border-b"
          />
          <CardBody className="flex flex-1 flex-col">
            <p className="text-sm font-extrabold uppercase tracking-wide text-secondary">
              Part 2 · Knowledge Hub
            </p>
            <h2 className="mt-2 text-[1.35rem] font-extrabold text-heading sm:text-3xl">
              Learn at your own pace
            </h2>
            <p className="mt-3 flex-1 text-lg text-muted-foreground">
              A growing library of trusted health topics and step-by-step guides for
              healthy ageing. Browse A–Z or search for what matters to you.
            </p>
            <div className="mt-5">
              <ButtonLink
                href="/knowledge-hub"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Knowledge Hub
              </ButtonLink>
            </div>
          </CardBody>
        </Card>
      </Section>

      {/* From the Knowledge Hub, the finished guides */}
      <Section id="approach" className="py-10">
        <SectionHeading
          eyebrow="From the Knowledge Hub"
          icon={BookOpen}
          title="Explore our guides"
          intro="Step-by-step guides for healthy ageing, written for women 60+ and reviewed before publishing."
        />
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <li key={guide.slug} className="relative">
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ButtonLink href="/knowledge-hub" variant="secondary" size="lg">
            See all guides
          </ButtonLink>
        </div>
      </Section>

      {/* Watch, vertical testimonial video slider */}
      <Section className="py-10">
        <SectionHeading
          eyebrow="Watch"
          icon={MessageSquareQuote}
          title="Hear from our members"
          intro="Short testimonials from women in the Zealver community."
        />
        <div className="mt-6">
          <InView minHeight={360}>
            <VideoSlider
              videos={[
                { id: "zat7MeeY1ts", title: "Zealver member testimonial 1" },
                { id: "xzjOmuFn_kk", title: "Zealver member testimonial 2" },
                { id: "5wbIhfUSWqI", title: "Zealver member testimonial 3" },
              ]}
            />
          </InView>
        </div>
      </Section>

      {/* Follow our journey, real Instagram feed */}
      <Section id="host" className="py-10">
        <SectionHeading
          align="center"
          eyebrow="Follow our journey"
          icon={InstagramIcon}
          title="Fresh from Instagram"
          intro={`Reels and moments from @${site.instagramHandle}, classes, clubs and celebrations.`}
        />
        <div className="mt-5 flex justify-center">
          <ButtonLink
            href={site.social.instagram}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="h-5 w-5" aria-hidden />
            Follow @{site.instagramHandle}
          </ButtonLink>
        </div>
        <div className="mt-8">
          <InView minHeight={520}>
            <InstagramFeed />
          </InView>
        </div>
      </Section>

      {/* Positioning strip */}
      <Section className="py-10">
        <div className="rounded-2xl bg-secondary px-6 py-10 text-center text-secondary-foreground sm:px-10">
          <p className="text-lg font-bold opacity-90 sm:text-xl">
            {parentOrg.nameOrigin}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold sm:text-3xl">
            {site.positioning}
          </p>
          <div className="mt-6">
            <ButtonLink href={site.joinHref} target="_blank" rel="noreferrer" size="lg">
              Join Our Club
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* The Zealver story, feature film before the footer */}
      <Section className="py-10">
        <SectionHeading
          eyebrow="Our film"
          icon={Film}
          title="The Zealver story"
          intro="A closer look at the community, the movement and the meaning behind it all."
        />
        <div className="mx-auto mt-6 max-w-4xl">
          <InView minHeight={320}>
            <MediaEmbed
              youtubeId="_V1ebW410es"
              title="The Zealver Clubs story"
              label="Video, The Zealver story"
            />
          </InView>
        </div>
      </Section>
    </>
  );
}

import Link from "next/link";
import { Mail } from "lucide-react";
import { nav, site } from "@/content/site";
import { Logo } from "@/components/site/logo";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/icons/social";

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo height={44} />
          <p className="mt-3 max-w-sm text-muted-foreground">
            {site.oneLiner}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-3 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center py-2 font-medium text-foreground underline-offset-4 transition-colors hover:text-secondary hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
            Get in touch
          </h2>
          <ul className="mt-3 flex flex-col">
            <li>
              <a
                href={site.contact.whatsappHref}
                className="inline-flex items-center gap-2 py-2 font-medium text-foreground underline-offset-4 transition-colors hover:text-secondary hover:underline"
              >
                <WhatsAppIcon className="h-5 w-5 text-primary" aria-hidden /> WhatsApp {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 py-2 font-medium text-foreground underline-offset-4 transition-colors hover:text-secondary hover:underline"
              >
                <Mail className="h-5 w-5 text-primary" aria-hidden /> {site.contact.email}
              </a>
            </li>
          </ul>

          <h2 className="mt-8 text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
            Follow us
          </h2>
          <ul className="mt-3 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid min-h-12 min-w-12 place-items-center rounded-full border border-border bg-card text-secondary hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={site.legal.privacy}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-secondary hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href={site.legal.terms}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:text-secondary hover:underline"
            >
              Terms &amp; Conditions
            </a>
            <span>By {site.legalName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

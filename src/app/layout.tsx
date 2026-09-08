import type { Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/site/top-bar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { site } from "@/content/site";

// Type pairing adopted from weenable.org: Manrope for confident display
// headings, Public Sans for highly legible body text.
// Variable names are suffixed -src so they do not collide with the Tailwind
// theme tokens (--font-display / --font-sans) that reference them.
const display = Manrope({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Public_Sans({
  variable: "--font-body-src",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Zealver Clubs | Healthy Ageing, Done Together",
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  keywords: [
    "seniors fitness",
    "chair fitness for seniors",
    "seated dance fitness",
    "healthy ageing",
    "senior activities Andheri Mumbai",
    "online fitness for women 60+",
    "elderly wellbeing",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Zealver Clubs | Healthy Ageing, Done Together",
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zealver Clubs | Healthy Ageing, Done Together",
    description: site.description,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.whatsapp,
  areaServed: site.areaServed,
  sameAs: [site.social.instagram],
  slogan: site.tagline,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <head>
        {/* Apply the saved theme + text-size before paint, so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var r=document.documentElement,t=localStorage.getItem('zc-theme'),s=localStorage.getItem('zc-text');if(t&&t!=='light')r.dataset.theme=t;if(s&&s!=='normal')r.dataset.text=s;}catch(e){}",
          }}
        />
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopBar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

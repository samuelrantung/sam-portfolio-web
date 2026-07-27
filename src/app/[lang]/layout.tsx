import type { Metadata, Viewport } from "next";
import { Fredoka, Hanken_Grotesk, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL, GA_ID } from "@/lib/site";
import { organizationJsonLd, jsonLdScript } from "@/lib/schema";
import "../globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import AgencyNavbar from "@/components/agency/AgencyNavbar";
import AgencyFooter from "@/components/agency/AgencyFooter";
import { getDictionary, hasLocale } from "@/lib/i18n";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imaginnative | Partner Digital untuk Bisnis Sulawesi Utara",
    template: "%s | Imaginnative",
  },
  description:
    "Imaginnative membantu bisnis di Sulawesi Utara go digital: dari website profesional dan landing page sampai aplikasi custom dan digitalisasi operasional.",
  keywords: [
    "jasa pembuatan website Manado",
    "jasa pembuatan website Sulawesi Utara",
    "digitalisasi UMKM",
    "jasa pembuatan aplikasi",
    "Imaginnative",
  ],
  authors: [{ name: "Samuel Rantung" }],
  creator: "Imaginnative",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${fredoka.variable} ${hanken.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full bg-paper text-ink antialiased flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationJsonLd()) }}
        />
        <Analytics />
        <ScrollReveal />
        <AgencyNavbar dict={dict} locale={lang} />
        {children}
        <AgencyFooter dict={dict} locale={lang} />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}

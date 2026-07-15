import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imaginnative | Partner Digital untuk Bisnis Sulawesi Utara",
    template: "%s | Imaginnative",
  },
  description:
    "Imaginnative membantu bisnis di Sulawesi Utara go digital — dari website profesional dan landing page sampai aplikasi custom dan digitalisasi operasional.",
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

// Inline script to prevent flashing on theme loads
const themeInitScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (_) {}
  })();
`;

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
      className={`${inter.variable} ${outfit.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased flex flex-col font-sans">
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

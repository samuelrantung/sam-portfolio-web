import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import AgencyNavbar from "@/components/agency/AgencyNavbar";
import AgencyFooter from "@/components/agency/AgencyFooter";
import { getDictionary, defaultLocale } from "@/lib/i18n";

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
  title: {
    default: "Imaginnative | Partner Digital untuk Bisnis Sulawesi Utara",
    template: "%s | Imaginnative",
  },
  description:
    "Imaginnative membantu bisnis di Sulawesi Utara go digital — dari website profesional and landing page sampai aplikasi custom dan digitalisasi operasional.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = getDictionary(defaultLocale);

  return (
    <html
      lang={defaultLocale}
      className={`${inter.variable} ${outfit.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased flex flex-col font-sans">
        <Analytics />
        <ScrollReveal />
        <AgencyNavbar dict={dict} locale={defaultLocale} />
        {children}
        <AgencyFooter dict={dict} locale={defaultLocale} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
import ServicesGrid from "@/components/agency/home/ServicesGrid";
import FinalCta from "@/components/agency/home/FinalCta";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const o = getDictionary(lang).layanan.overview;
  return {
    title: o.metaTitle,
    description: o.metaDescription,
    alternates: alternatesFor(lang, "/layanan"),
  };
}

export default async function LayananPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <main className="flex-1 pt-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4">
          {dict.layanan.overview.h1}
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          {dict.layanan.overview.intro}
        </p>
      </section>
      <ServicesGrid dict={dict} locale={lang} />
      <FinalCta dict={dict} />
    </main>
  );
}

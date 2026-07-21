import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
import Hero from "@/components/agency/home/Hero";
import PainOutcome from "@/components/agency/home/PainOutcome";
import ServicesGrid from "@/components/agency/home/ServicesGrid";
import Proof from "@/components/agency/home/Proof";
import FounderStrip from "@/components/agency/home/FounderStrip";
import ProcessSteps from "@/components/agency/home/ProcessSteps";
import FaqAccordion from "@/components/agency/home/FaqAccordion";
import FinalCta from "@/components/agency/home/FinalCta";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  return { alternates: alternatesFor(lang, "/") };
}

export default async function HomePage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <main className="flex-1 pt-16">
      <Hero dict={dict} locale={lang} />
      <PainOutcome dict={dict} />
      <ServicesGrid dict={dict} locale={lang} />
      <Proof dict={dict} />
      <FounderStrip dict={dict} locale={lang} />
      <ProcessSteps dict={dict} />
      <FaqAccordion
        heading={dict.home.faq.heading}
        items={(["cost", "duration", "nonTech", "after"] as const).map(
          (k) => dict.home.faq.items[k]
        )}
      />
      <FinalCta dict={dict} />
    </main>
  );
}

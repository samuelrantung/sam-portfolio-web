// src/app/page.tsx
import { getDictionary, defaultLocale } from "@/lib/i18n";
import Hero from "@/components/agency/home/Hero";
import PainOutcome from "@/components/agency/home/PainOutcome";
import ServicesGrid from "@/components/agency/home/ServicesGrid";
import Proof from "@/components/agency/home/Proof";
import FounderStrip from "@/components/agency/home/FounderStrip";
import ProcessSteps from "@/components/agency/home/ProcessSteps";
import FaqAccordion from "@/components/agency/home/FaqAccordion";
import FinalCta from "@/components/agency/home/FinalCta";

export default function HomePage() {
  const dict = getDictionary(defaultLocale);

  return (
    <main className="flex-1 pt-16">
      <Hero dict={dict} locale={defaultLocale} />
      <PainOutcome dict={dict} />
      <ServicesGrid dict={dict} locale={defaultLocale} />
      <Proof dict={dict} />
      <FounderStrip dict={dict} locale={defaultLocale} />
      <ProcessSteps dict={dict} />
      <FaqAccordion dict={dict} />
      <FinalCta dict={dict} />
    </main>
  );
}

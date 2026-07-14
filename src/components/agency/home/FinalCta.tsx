// src/components/agency/home/FinalCta.tsx
import { MessageCircle, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/whatsapp";

export default function FinalCta({ dict }: { dict: Dictionary }) {
  const cta = dict.home.finalCta;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="reveal-on-scroll relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-10 md:p-14 text-center">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="relative text-3xl sm:text-4xl font-bold font-display text-foreground mb-3">
          {cta.heading}
        </h2>
        <p className="relative text-muted mb-8">{cta.subheading}</p>
        <div className="relative flex flex-col items-center gap-3">
          <a
            href={whatsappUrl(dict.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            {dict.cta.whatsappLabel}
            <ArrowRight className="w-5 h-5 ml-1" />
          </a>
          <span className="text-xs text-muted">{dict.cta.whatsappNote}</span>
        </div>
      </div>
    </section>
  );
}

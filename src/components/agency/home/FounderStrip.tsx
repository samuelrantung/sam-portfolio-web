// src/components/agency/home/FounderStrip.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

export default function FounderStrip({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const founder = dict.home.founder;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="reveal-on-scroll bg-card rounded-2xl border border-border/40 p-8 flex flex-col sm:flex-row items-center gap-6">
        {/* Initials avatar — replace with next/image when Sam provides a photo */}
        <div className="w-16 h-16 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl">
          SR
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold font-display text-foreground mb-2">
            {founder.heading}
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-3">{founder.body}</p>
          <Link
            href={localePath(locale, "/tentang/samuel")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {founder.linkLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

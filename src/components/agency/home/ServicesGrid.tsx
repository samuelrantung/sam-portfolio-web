// src/components/agency/home/ServicesGrid.tsx
import Link from "next/link";
import { Globe, Smartphone, Workflow, ShieldCheck, ArrowRight } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

const services = [
  { key: "website", href: "/layanan/website", Icon: Globe },
  { key: "aplikasi", href: "/layanan/aplikasi", Icon: Smartphone },
  { key: "digitalisasi", href: "/layanan/digitalisasi", Icon: Workflow },
  { key: "maintenance", href: "/layanan/maintenance", Icon: ShieldCheck },
] as const;

export default function ServicesGrid({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const svc = dict.home.services;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12 reveal-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3">
          {svc.heading}
        </h2>
        <p className="text-muted">{svc.subheading}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map(({ key, href, Icon }) => {
          const item = svc.items[key];
          return (
            <Link
              key={key}
              href={localePath(locale, href)}
              className="reveal-on-scroll group rounded-2xl border border-border/40 bg-card p-6 flex flex-col gap-3 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:scale-[1.02]"
            >
              <Icon className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-bold font-display text-foreground">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.outcome}</p>
              <p className="text-sm font-semibold text-primary">{item.price}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-muted group-hover:text-primary transition-colors mt-auto">
                {svc.cardCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

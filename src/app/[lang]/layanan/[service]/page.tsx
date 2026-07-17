// src/app/layanan/[service]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Globe,
  Smartphone,
  Workflow,
  ShieldCheck,
  Check,
  Users,
  ExternalLink,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { getDictionary, hasLocale, localePath, alternatesFor } from "@/lib/i18n";
import { serviceJsonLd, jsonLdScript } from "@/lib/schema";
import WhatsAppLink from "@/components/agency/WhatsAppLink";
import FaqAccordion from "@/components/agency/home/FaqAccordion";
import FinalCta from "@/components/agency/home/FinalCta";

const serviceConfig = {
  website: {
    Icon: Globe,
    proofHref: "https://seraya-agency.com/",
    proofExternal: true,
    proofImage: "/portfolio/seraya/seraya-hero-section.png",
    proofImageAspect: "aspect-[3438/1616]",
  },
  aplikasi: {
    Icon: Smartphone,
    proofHref: "/tentang/samuel",
    proofExternal: false,
    proofImage: undefined,
    proofImageAspect: undefined,
  },
  digitalisasi: {
    Icon: Workflow,
    proofHref: "/tentang/samuel",
    proofExternal: false,
    proofImage: undefined,
    proofImageAspect: undefined,
  },
  maintenance: {
    Icon: ShieldCheck,
    proofHref: "/tentang/samuel",
    proofExternal: false,
    proofImage: undefined,
    proofImageAspect: undefined,
  },
} as const;

type ServiceKey = keyof typeof serviceConfig;

const isServiceKey = (s: string): s is ServiceKey => s in serviceConfig;

export function generateStaticParams() {
  return Object.keys(serviceConfig).map((service) => ({ service }));
}

export async function generateMetadata(
  props: { params: Promise<{ lang: string; service: string }> }
): Promise<Metadata> {
  const { lang, service } = await props.params;
  if (!hasLocale(lang) || !isServiceKey(service)) return {};
  const item = getDictionary(lang).layanan.items[service];
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: alternatesFor(`/layanan/${service}`),
  };
}

export default async function ServicePage(
  props: { params: Promise<{ lang: string; service: string }> }
) {
  const { lang, service } = await props.params;
  if (!hasLocale(lang)) notFound();
  if (!isServiceKey(service)) notFound();

  const dict = getDictionary(lang);
  const sections = dict.layanan.sections;
  const item = dict.layanan.items[service];
  const config = serviceConfig[service];
  const { Icon } = config;

  return (
    <main className="flex-1 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            serviceJsonLd(item.metaTitle, item.metaDescription, `/layanan/${service}`)
          ),
        }}
      />
      {/* 1. H1 + intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4 leading-tight">
          {item.h1}
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-8">{item.intro}</p>
        <div className="flex flex-col items-center gap-2">
          <WhatsAppLink
            message={item.whatsappMessage}
            source={`service_${service}_hero`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.cta.whatsappLabel}
            <ArrowRight className="w-4 h-4 ml-1" />
          </WhatsAppLink>
          <span className="text-xs text-muted">{dict.cta.whatsappNote}</span>
        </div>
      </section>

      {/* 2. Who it's for */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold font-display text-foreground mb-6 flex items-center gap-2 reveal-on-scroll">
          <Users className="w-6 h-6 text-primary" />
          {sections.audiences}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {item.audiences.map((a) => (
            <li
              key={a}
              className="reveal-on-scroll rounded-xl border border-border/40 bg-card p-4 text-sm text-foreground/90 leading-relaxed"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Deliverables */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold font-display text-foreground mb-6 reveal-on-scroll">
          {sections.deliverables}
        </h2>
        <ul className="space-y-3">
          {item.deliverables.map((d) => (
            <li key={d} className="reveal-on-scroll flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              {d}
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Price anchor */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="reveal-on-scroll rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            {sections.pricing}
          </p>
          <p className="text-xl sm:text-2xl font-bold font-display text-foreground mb-2">
            {item.price}
          </p>
          <p className="text-sm text-muted leading-relaxed">{item.priceNote}</p>
        </div>
      </section>

      {/* 5. Proof */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`reveal-on-scroll bg-card border border-border/40 rounded-3xl p-6 sm:p-8 md:p-10 ${config.proofImage ? "grid grid-cols-1 md:grid-cols-12 gap-8 items-center" : ""}`}>
          <div className={`${config.proofImage ? "md:col-span-7" : ""} space-y-4`}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                {item.proof.label}
              </p>
              <h2 className="text-xl font-bold font-display text-foreground mb-3 leading-tight">
                {item.proof.title}
              </h2>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {item.proof.text}
              </p>
            </div>
            
            <div className="pt-2">
              {config.proofExternal ? (
                <a
                  href={config.proofHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
                >
                  {item.proof.linkLabel}
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-primary/20">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              ) : (
                <Link
                  href={localePath(lang, config.proofHref)}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
                >
                  {item.proof.linkLabel}
                  <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-primary/20">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              )}
            </div>
          </div>

          {config.proofImage && (
            <div className="md:col-span-5">
              <div className="rounded-[1.5rem] border border-border/30 bg-muted/20 p-1.5 shadow-inner">
                <div className={`rounded-[calc(1.5rem-0.375rem)] overflow-hidden relative w-full border border-border/40 bg-muted ${config.proofImageAspect ?? "aspect-[16/10]"}`}>
                  <Image
                    src={config.proofImage}
                    alt={item.proof.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Mini FAQ */}
      <FaqAccordion heading={sections.faq} items={[...item.faq]} />

      {/* 7. Final CTA — service-specific prefill */}
      <FinalCta
        dict={dict}
        whatsappMessage={item.whatsappMessage}
        source={`service_${service}_final`}
      />
    </main>
  );
}

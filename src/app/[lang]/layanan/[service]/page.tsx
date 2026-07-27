// src/app/[lang]/layanan/[service]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Globe, Smartphone, Workflow, ShieldCheck, Check } from "lucide-react";
import { getDictionary, hasLocale, localePath, alternatesFor } from "@/lib/i18n";
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd, jsonLdScript } from "@/lib/schema";
import WhatsAppLink from "@/components/agency/WhatsAppLink";
import FaqAccordion from "@/components/agency/home/FaqAccordion";
import FinalCta from "@/components/agency/home/FinalCta";

interface ServiceMeta {
  Icon: React.ComponentType<{ className?: string }>;
  proofHref: string;
  proofExternal: boolean;
  proofImage?: string;
}

const serviceConfig: Record<string, ServiceMeta> = {
  website: {
    Icon: Globe,
    proofHref: "https://seraya-agency.com/",
    proofExternal: true,
    proofImage: "/portfolio/seraya/seraya-hero-section.png",
  },
  aplikasi: {
    Icon: Smartphone,
    proofHref: "/tentang/samuel",
    proofExternal: false,
  },
  digitalisasi: {
    Icon: Workflow,
    proofHref: "/tentang/samuel",
    proofExternal: false,
  },
  maintenance: {
    Icon: ShieldCheck,
    proofHref: "/tentang/samuel",
    proofExternal: false,
  },
};

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
  const items = getDictionary(lang).layanan.items;
  const item = items[service as keyof typeof items];
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: alternatesFor(lang, `/layanan/${service}`),
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
  const items = dict.layanan.items;
  const item = items[service as keyof typeof items];
  const config = serviceConfig[service];

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            serviceJsonLd(lang, item.metaTitle, item.metaDescription, `/layanan/${service}`)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.services, path: "/layanan" },
              { name: item.h1, path: `/layanan/${service}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqPageJsonLd(item.faq as unknown as Array<{ q: string; a: string }>)),
        }}
      />

      {/* 1. Header (H1 + intro + CTA) */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="idx">Layanan</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "20ch",
            }}
          >
            {item.h1}
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {item.intro}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <WhatsAppLink
              message={item.whatsappMessage}
              source={`service_${service}_hero`}
              className="pill"
            >
              {dict.cta.whatsappLabel}
            </WhatsAppLink>
            <span className="hand muted">{dict.cta.whatsappNote}</span>
          </div>
        </div>
      </section>

      {/* 2. Who it is for */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">01 / {sections.audiences}</span>
            </div>
            <div>
              {(item.audiences as readonly string[]).map((a: string, i: number) => (
                <div
                  key={a}
                  className="reveal-on-scroll py-4 text-ink text-base sm:text-lg border-t border-line"
                  style={{
                    borderBottom:
                      i === item.audiences.length - 1
                        ? "1px solid var(--line)"
                        : "none",
                  }}
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deliverables */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">02 / {sections.deliverables}</span>
            </div>
            <div>
              {(item.deliverables as readonly string[]).map((d: string, i: number) => (
                <div
                  key={d}
                  className="reveal-on-scroll flex items-start gap-3 py-4 text-ink text-base sm:text-lg border-t border-line"
                  style={{
                    borderBottom:
                      i === item.deliverables.length - 1
                        ? "1px solid var(--line)"
                        : "none",
                  }}
                >
                  <Check className="w-5 h-5 text-ink shrink-0 mt-1" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Proof */}
      {config.proofImage ? (
        <section className="bw">
          <div className="k left">
            <div className="inner">
              <span className="idx idx-w">{item.proof.label}</span>
              <h3 className="fk mt-3 mb-4 text-white text-2xl sm:text-3xl">
                {item.proof.title}
              </h3>
              <p className="text-gray-1 leading-relaxed text-base">
                {item.proof.text}
              </p>
            </div>
          </div>
          <div className="w right">
            <div className="inner">
              <Image
                src={config.proofImage}
                alt={item.proof.title}
                width={900}
                height={560}
                className="w-full h-auto border border-line mb-6"
              />
              {config.proofExternal ? (
                <a
                  href={config.proofHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-cta"
                >
                  {item.proof.linkLabel} <span className="arw">&rarr;</span>
                </a>
              ) : (
                <Link
                  href={localePath(lang, config.proofHref)}
                  className="link-cta"
                >
                  {item.proof.linkLabel} <span className="arw">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="sec">
          <div className="wrap">
            <div className="split">
              <div className="lead-col">
                <span className="idx">{item.proof.label}</span>
              </div>
              <div>
                <h2 className="fk text-2xl sm:text-3xl mb-3">
                  {item.proof.title}
                </h2>
                <p className="muted text-base leading-relaxed mb-6 max-w-[52ch]">
                  {item.proof.text}
                </p>
                <Link
                  href={localePath(lang, config.proofHref)}
                  className="link-cta"
                >
                  {item.proof.linkLabel} <span className="arw">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Mini FAQ */}
      <FaqAccordion heading={sections.faq} items={[...(item.faq as unknown as Array<{ q: string; a: string }>)]} />

      {/* 6. Final CTA */}
      <FinalCta
        dict={dict}
        whatsappMessage={item.whatsappMessage}
        source={`service_${service}_final`}
      />
    </main>
  );
}

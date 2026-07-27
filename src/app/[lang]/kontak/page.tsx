// src/app/[lang]/kontak/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";
import { CONTACT_EMAIL } from "@/lib/site";
import WhatsAppLink from "@/components/agency/WhatsAppLink";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const k = getDictionary(lang).kontak;
  return {
    title: k.metaTitle,
    description: k.metaDescription,
    alternates: alternatesFor(lang, "/kontak"),
  };
}

export default async function KontakPage(
  props: { params: Promise<{ lang: string }> }
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const k = dict.kontak;

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.contact, path: "/kontak" },
            ])
          ),
        }}
      />
      {/* Header */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="idx">Kontak</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "16ch",
            }}
          >
            {k.h1}
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {k.intro}
          </p>
        </div>
      </section>

      {/* Contact Rows */}
      <section className="sec">
        <div className="wrap">
          <div className="row-list">
            {/* WhatsApp */}
            <div className="row-item reveal-on-scroll">
              <MessageCircle className="w-5 h-5 text-ink shrink-0 mt-1" />
              <div>
                <h2 className="fk text-xl font-semibold mb-1">
                  {k.whatsapp.title}
                </h2>
                <p className="muted text-base leading-relaxed mb-4 max-w-[50ch]">
                  {k.whatsapp.text}
                </p>
                <WhatsAppLink
                  message={dict.cta.whatsappMessage}
                  source="kontak"
                  className="pill inline-block"
                >
                  {dict.cta.whatsappLabel}
                </WhatsAppLink>
                <span className="hand muted ml-4 inline-block">{dict.cta.whatsappNote}</span>
              </div>
            </div>

            {/* Email */}
            <div className="row-item reveal-on-scroll">
              <Mail className="w-5 h-5 text-ink shrink-0 mt-1" />
              <div>
                <h2 className="fk text-xl font-semibold mb-1">
                  {k.email.title}
                </h2>
                <p className="muted text-base leading-relaxed mb-3 max-w-[50ch]">
                  {k.email.text}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="link-cta"
                >
                  {CONTACT_EMAIL} <span className="arw">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="row-item reveal-on-scroll">
              <MapPin className="w-5 h-5 text-ink shrink-0 mt-1" />
              <div>
                <h2 className="fk text-xl font-semibold mb-1">
                  {k.location.title}
                </h2>
                <p className="muted text-base leading-relaxed max-w-[50ch]">
                  {k.location.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

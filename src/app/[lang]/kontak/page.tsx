// src/app/[lang]/kontak/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
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
    <main className="flex-1 pt-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4">
          {k.h1}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{k.intro}</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 space-y-6">
        {/* WhatsApp — primary */}
        <WhatsAppLink
          message={dict.cta.whatsappMessage}
          source="kontak"
          className="reveal-on-scroll group block rounded-2xl border-2 border-primary/40 bg-primary/5 p-8 transition-all duration-300 hover:border-primary hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold font-display text-foreground mb-1">
                {k.whatsapp.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-3">{k.whatsapp.text}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {dict.cta.whatsappLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <p className="text-xs text-muted mt-1">{dict.cta.whatsappNote}</p>
            </div>
          </div>
        </WhatsAppLink>

        {/* Email */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="reveal-on-scroll block rounded-2xl border border-border/40 bg-card p-8 transition-all duration-300 hover:border-primary/40"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-foreground mb-1">
                {k.email.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-2">{k.email.text}</p>
              <span className="text-sm font-semibold text-primary">{CONTACT_EMAIL}</span>
            </div>
          </div>
        </a>

        {/* Location — informational, no map yet (GBP comes with Sprint 6) */}
        <div className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-foreground mb-1">
                {k.location.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{k.location.text}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

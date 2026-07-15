// src/app/[lang]/tentang/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UserRound, Sparkles, HeartHandshake, Compass, MapPin, ArrowRight } from "lucide-react";
import { getDictionary, hasLocale, alternatesFor, localePath } from "@/lib/i18n";
import FinalCta from "@/components/agency/home/FinalCta";

const approachIcons = {
  direct: UserRound,
  ai: Sparkles,
  stay: HeartHandshake,
} as const;

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).tentang;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor("/tentang"),
  };
}

export default async function TentangPage(
  props: { params: Promise<{ lang: string }> }
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.tentang;

  return (
    <main className="flex-1 pt-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4">
          {t.h1}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{t.intro}</p>
      </section>

      {/* Founding story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold font-display text-foreground mb-6 reveal-on-scroll">
          {t.story.heading}
        </h2>
        <div className="space-y-4 text-foreground/90 text-sm sm:text-base leading-relaxed">
          <p className="reveal-on-scroll">{t.story.p1}</p>
          <p className="reveal-on-scroll">{t.story.p2}</p>
          <p className="reveal-on-scroll">{t.story.p3}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-6">
          <Link
            href={localePath(lang, "/tentang/samuel")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {t.founderLink}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={localePath(lang, "/portofolio")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {t.portfolioLink}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold font-display text-foreground mb-8 text-center reveal-on-scroll">
          {t.approach.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(["direct", "ai", "stay"] as const).map((key) => {
            const Icon = approachIcons[key];
            const item = t.approach.items[key];
            return (
              <div
                key={key}
                className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-6"
              >
                <Icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-base font-bold font-display text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Vision + location */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="reveal-on-scroll rounded-2xl bg-primary/5 border border-primary/20 p-6 flex items-start gap-4">
          <Compass className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="text-base font-bold font-display text-foreground mb-1">
              {t.vision.heading}
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed">{t.vision.text}</p>
          </div>
        </div>
        <div className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-6 flex items-start gap-4">
          <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="text-base font-bold font-display text-foreground mb-1">
              {t.location.heading}
            </h2>
            <p className="text-sm text-muted leading-relaxed">{t.location.text}</p>
          </div>
        </div>
      </section>

      <FinalCta dict={dict} />
    </main>
  );
}

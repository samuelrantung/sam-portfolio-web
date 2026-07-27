// src/app/[lang]/tentang/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Compass, MapPin } from "lucide-react";
import { getDictionary, hasLocale, alternatesFor, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";
import FinalCta from "@/components/agency/home/FinalCta";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).tentang;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(lang, "/tentang"),
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
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.about, path: "/tentang" },
            ])
          ),
        }}
      />

      {/* Header */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="idx">Tentang</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "16ch",
            }}
          >
            {t.h1}
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {t.intro}
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">Cerita kami</span>
            </div>
            <div>
              <h2 className="fk text-2xl sm:text-3xl mb-4">{t.story.heading}</h2>
              <div className="space-y-4 text-ink leading-relaxed">
                <p className="reveal-on-scroll">{t.story.p1}</p>
                <p className="reveal-on-scroll">{t.story.p2}</p>
                <p className="reveal-on-scroll">{t.story.p3}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link
                  href={localePath(lang, "/tentang/samuel")}
                  className="link-cta"
                >
                  {t.founderLink} <span className="arw">&rarr;</span>
                </Link>
                <Link
                  href={localePath(lang, "/portofolio")}
                  className="link-cta"
                >
                  {t.portfolioLink} <span className="arw">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach (3 steps / process pattern) */}
      <section className="sec">
        <div className="wrap">
          <span className="idx">Pendekatan</span>
          <h2 className="fk text-2xl sm:text-3xl mt-2 mb-6">{t.approach.heading}</h2>
          <div className="process-grid">
            {(["direct", "ai", "stay"] as const).map((key, i) => {
              const item = t.approach.items[key];
              const nums = ["01", "02", "03"];
              return (
                <div key={key} className="step reveal-on-scroll">
                  <div className="bignum">{nums[i]}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision + Location */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">Visi &amp; Lokasi</span>
            </div>
            <div className="row-list">
              <div className="row-item reveal-on-scroll">
                <Compass className="w-5 h-5 text-ink shrink-0 mt-1" />
                <div>
                  <h3 className="fk text-lg font-semibold mb-1">
                    {t.vision.heading}
                  </h3>
                  <p className="muted text-base leading-relaxed">{t.vision.text}</p>
                </div>
              </div>
              <div className="row-item reveal-on-scroll">
                <MapPin className="w-5 h-5 text-ink shrink-0 mt-1" />
                <div>
                  <h3 className="fk text-lg font-semibold mb-1">
                    {t.location.heading}
                  </h3>
                  <p className="muted text-base leading-relaxed">{t.location.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta dict={dict} />
    </main>
  );
}

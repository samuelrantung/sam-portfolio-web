// src/app/[lang]/artikel/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, defaultLocale } from "@/lib/i18n";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";
import { articles } from "@/lib/articles";
import FinalCta from "@/components/agency/home/FinalCta";

const TITLE = "Artikel | Panduan digital untuk bisnis Sulawesi Utara";
const DESCRIPTION =
  "Panduan praktis seputar website, aplikasi, dan digitalisasi untuk pemilik usaha di Manado, Bitung, dan sekitarnya.";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (lang !== defaultLocale) return {};
  return {
    title: TITLE,
    description: DESCRIPTION,
    // Indonesian-only section, so no hreflang alternates to declare.
    alternates: { canonical: "/artikel" },
  };
}

export default async function ArtikelIndexPage(
  props: { params: Promise<{ lang: string }> }
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  if (lang !== defaultLocale) notFound();
  const dict = getDictionary(lang);

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.articles, path: "/artikel" },
            ])
          ),
        }}
      />

      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="idx">{dict.nav.articles}</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "20ch",
            }}
          >
            Panduan digital untuk bisnis Sulawesi Utara
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {DESCRIPTION}
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="border-t border-line">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="reveal-on-scroll block py-8 border-b border-line group"
              >
                <span className="idx">
                  {article.readingMinutes} menit baca
                </span>
                <h2 className="fk mt-2.5 text-2xl sm:text-3xl max-w-[24ch]">
                  {article.h1}
                </h2>
                <p className="muted mt-3 max-w-[60ch] text-base leading-relaxed">
                  {article.dek}
                </p>
                <span className="link-cta mt-4 inline-block">
                  Baca selengkapnya <span className="arw">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        dict={dict}
        whatsappMessage={dict.cta.whatsappMessage}
        source="artikel_index_final"
      />
    </main>
  );
}

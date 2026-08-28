// src/app/[lang]/artikel/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, defaultLocale } from "@/lib/i18n";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScript,
} from "@/lib/schema";
import { articles, getArticle } from "@/lib/articles";
import WhatsAppLink from "@/components/agency/WhatsAppLink";
import FaqAccordion from "@/components/agency/home/FaqAccordion";
import FinalCta from "@/components/agency/home/FinalCta";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ lang: string; slug: string }> }
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const article = getArticle(slug);
  if (lang !== defaultLocale || !article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    // Indonesian-only section, so no hreflang alternates to declare.
    alternates: { canonical: `/artikel/${article.slug}` },
  };
}

export default async function ArticlePage(
  props: { params: Promise<{ lang: string; slug: string }> }
) {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) notFound();
  if (lang !== defaultLocale) notFound();
  const article = getArticle(slug);
  if (!article) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.articles, path: "/artikel" },
              { name: article.h1, path: `/artikel/${article.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqPageJsonLd(article.faq)) }}
      />

      {/* 1. Header */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <Link href="/artikel" className="idx hover:text-ink">
            &larr; {dict.nav.articles}
          </Link>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.2rem, 4.6vw, 3.2rem)",
              marginTop: "10px",
              maxWidth: "22ch",
            }}
          >
            {article.h1}
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "56ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {article.dek}
          </p>
          <p className="idx mt-6">
            {article.readingMinutes} menit baca &middot; diperbarui{" "}
            <time dateTime={article.updated}>
              {new Date(article.updated).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
      </section>

      {/* 2. Body */}
      {article.sections.map((section, i) => (
        <section className="sec" key={section.heading}>
          <div className="wrap">
            <div className="split">
              <div className="lead-col">
                <span className="idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="reveal-on-scroll">
                <h2 className="fk text-2xl sm:text-3xl mb-4 max-w-[24ch]">
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p
                    key={p}
                    className="muted text-base sm:text-lg leading-relaxed mb-4 max-w-[62ch]"
                  >
                    {p}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-6 border-t border-line">
                    {section.list.map((li) => (
                      <li
                        key={li}
                        className="py-4 border-b border-line text-ink text-base sm:text-lg max-w-[62ch]"
                      >
                        {li}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Inline CTA */}
      <section className="sec">
        <div className="wrap">
          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppLink
              message={article.whatsappMessage}
              source={`artikel_${article.slug}_inline`}
              className="pill"
            >
              {dict.cta.whatsappLabel}
            </WhatsAppLink>
            <span className="hand muted">{dict.cta.whatsappNote}</span>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <FaqAccordion heading="Pertanyaan lain" items={[...article.faq]} />

      {/* 5. Final CTA */}
      <FinalCta
        dict={dict}
        whatsappMessage={article.whatsappMessage}
        source={`artikel_${article.slug}_final`}
      />
    </main>
  );
}

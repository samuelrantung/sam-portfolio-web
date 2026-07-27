import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";
import ServicesGrid from "@/components/agency/home/ServicesGrid";
import FinalCta from "@/components/agency/home/FinalCta";

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const o = getDictionary(lang).layanan.overview;
  return {
    title: o.metaTitle,
    description: o.metaDescription,
    alternates: alternatesFor(lang, "/layanan"),
  };
}

export default async function LayananPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.services, path: "/layanan" },
            ])
          ),
        }}
      />
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="idx">Layanan</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "16ch",
            }}
          >
            {dict.layanan.overview.h1}
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {dict.layanan.overview.intro}
          </p>
        </div>
      </section>
      <ServicesGrid dict={dict} locale={lang} />
      <FinalCta dict={dict} />
    </main>
  );
}

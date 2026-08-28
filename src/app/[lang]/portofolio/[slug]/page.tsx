// src/app/[lang]/portofolio/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, alternatesFor, localePath } from "@/lib/i18n";
import { caseStudyJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";
import { caseStudies, findCaseStudy, projectConfig } from "@/lib/portfolio";
import WhatsAppLink from "@/components/agency/WhatsAppLink";
import FinalCta from "@/components/agency/home/FinalCta";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ lang: string; slug: string }> }
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const entry = findCaseStudy(slug);
  if (!hasLocale(lang) || !entry) return {};
  const projects = getDictionary(lang).portofolio.projects;
  // Only slugged projects carry meta copy, and `caseStudies` contains exactly
  // those, so this narrowing is safe.
  const project = projects[entry.key] as (typeof projects)[typeof entry.key] & {
    metaTitle: string;
    metaDescription: string;
  };
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: alternatesFor(lang, `/portofolio/${slug}`),
  };
}

export default async function CaseStudyPage(
  props: { params: Promise<{ lang: string; slug: string }> }
) {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) notFound();
  const entry = findCaseStudy(slug);
  if (!entry) notFound();

  const dict = getDictionary(lang);
  const p = dict.portofolio;
  const project = p.projects[entry.key] as (typeof p.projects)[typeof entry.key] & {
    metaTitle: string;
    metaDescription: string;
  };
  const config = projectConfig[entry.key];
  const alts = [project.imageAlt1, project.imageAlt2];

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            caseStudyJsonLd({
              locale: lang,
              slug,
              name: project.name,
              description: project.metaDescription,
              imageUrls: config.images,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.portfolio, path: "/portofolio" },
              { name: project.name, path: `/portofolio/${slug}` },
            ])
          ),
        }}
      />

      {/* 1. Header */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <Link href={localePath(lang, "/portofolio")} className="idx hover:text-ink">
            &larr; {p.backToIndex}
          </Link>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.2rem, 4.6vw, 3.2rem)",
              marginTop: "10px",
              maxWidth: "20ch",
            }}
          >
            {project.name}
          </h1>
          <p className="idx mt-4">
            {project.category}
            {config.isDemo ? ` / ${p.demoLabel}` : ""}
          </p>
          <p
            className="muted"
            style={{ maxWidth: "56ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            <b className="text-ink">{p.roleLabel}:</b> {project.role}
          </p>
        </div>
      </section>

      {/* 2. Screenshots */}
      {config.images.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div
              className={`grid gap-4 ${config.images.length > 1 ? "sm:grid-cols-2" : ""}`}
            >
              {config.images.map((src, i) => (
                <div key={src} className="border border-line">
                  <Image
                    src={src}
                    alt={alts[i] || project.name}
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Problem */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">01 / {p.problemLabel}</span>
            </div>
            <div className="reveal-on-scroll">
              <p className="text-ink text-base sm:text-lg leading-relaxed max-w-[62ch]">
                {project.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">02 / {p.solutionLabel}</span>
            </div>
            <div className="reveal-on-scroll">
              <p className="text-ink text-base sm:text-lg leading-relaxed max-w-[62ch]">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Result */}
      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div className="lead-col">
              <span className="idx">03 / {p.resultLabel}</span>
            </div>
            <div className="reveal-on-scroll">
              <div
                style={{
                  borderLeft: "2px solid var(--ink)",
                  paddingLeft: "20px",
                }}
              >
                <p className="font-semibold text-ink text-base sm:text-lg leading-relaxed max-w-[62ch]">
                  {project.result}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8">
                {config.href && project.linkLabel && (
                  <a
                    href={config.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-cta"
                  >
                    {project.linkLabel} <span className="arw">&rarr;</span>
                  </a>
                )}
                <WhatsAppLink
                  message={dict.cta.whatsappMessage}
                  source={`case_${slug}_body`}
                  className="link-cta"
                >
                  {dict.cta.whatsappLabel} <span className="arw">&rarr;</span>
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Other case studies */}
      <section className="sec">
        <div className="wrap">
          <span className="idx">{p.caseStudyLabel}</span>
          <div className="border-t border-line mt-4">
            {caseStudies
              .filter((e) => e.slug !== slug)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={localePath(lang, `/portofolio/${e.slug}`)}
                  className="flex items-baseline justify-between gap-6 py-5 border-b border-line group"
                >
                  <span className="fk text-lg sm:text-xl text-ink">
                    {p.projects[e.key].name}
                  </span>
                  <span className="arw text-gray-1">&rarr;</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FinalCta dict={dict} source={`case_${slug}_final`} />
    </main>
  );
}

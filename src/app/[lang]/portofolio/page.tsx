// src/app/[lang]/portofolio/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, alternatesFor, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/schema";
import { projectConfig, projectOrder } from "@/lib/portfolio";
import FinalCta from "@/components/agency/home/FinalCta";


export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const p = getDictionary(lang).portofolio;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: alternatesFor(lang, "/portofolio"),
  };
}

export default async function PortofolioPage(
  props: { params: Promise<{ lang: string }> }
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const p = dict.portofolio;

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd(lang, [
              { name: dict.nav.home, path: "/" },
              { name: dict.nav.portfolio, path: "/portofolio" },
            ])
          ),
        }}
      />
      {/* Header */}
      <section className="sec" style={{ borderTop: 0 }}>
        <div className="wrap">
          <span className="idx">Portofolio</span>
          <h1
            className="fk"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              marginTop: "10px",
              maxWidth: "16ch",
            }}
          >
            {p.h1}
          </h1>
          <p
            className="muted"
            style={{ maxWidth: "52ch", marginTop: "14px", fontSize: "1.14rem" }}
          >
            {p.intro}
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="sec">
        <div className="wrap">
          <div>
            {projectOrder.map((key, idx) => {
              const project = p.projects[key];
              const config = projectConfig[key];
              const alts = [project.imageAlt1, project.imageAlt2];
              return (
                <article
                  key={key}
                  className="reveal-on-scroll py-12 border-t border-line"
                  style={{
                    borderBottom:
                      idx === projectOrder.length - 1
                        ? "1px solid var(--line)"
                        : "none",
                  }}
                >
                  <span className="idx">
                    {project.category}
                    {config.isDemo ? ` / ${p.demoLabel}` : ""}
                  </span>
                  <h2 className="fk text-2xl sm:text-3xl mt-2 mb-1">
                    {config.slug ? (
                      <Link
                        href={localePath(lang, `/portofolio/${config.slug}`)}
                        className="hover:underline underline-offset-4"
                      >
                        {project.name}
                      </Link>
                    ) : (
                      project.name
                    )}
                  </h2>
                  <p className="muted text-sm mb-6">
                    <b className="text-ink">{p.roleLabel}:</b> {project.role}
                  </p>

                  {config.images.length > 0 && (
                    <div
                      className={`grid gap-4 mb-6 ${config.images.length > 1 ? "sm:grid-cols-2" : ""
                        }`}
                    >
                      {config.images.map((src, i) => (
                        <div key={src} className="border border-line">
                          <Image
                            src={src}
                            alt={alts[i] ?? project.name}
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-ink leading-relaxed mb-3">
                    {project.problem}
                  </p>
                  <p className="text-ink leading-relaxed mb-4">
                    {project.solution}
                  </p>

                  <div
                    style={{
                      borderLeft: "2px solid var(--ink)",
                      paddingLeft: "20px",
                      margin: "20px 0",
                    }}
                  >
                    <p className="idx" style={{ marginBottom: "4px" }}>
                      {p.resultLabel}
                    </p>
                    <p className="font-semibold text-ink leading-relaxed">
                      {project.result}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    {config.slug && (
                      <Link
                        href={localePath(lang, `/portofolio/${config.slug}`)}
                        className="link-cta"
                      >
                        {p.readCaseStudy} <span className="arw">&rarr;</span>
                      </Link>
                    )}
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
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta dict={dict} />
    </main>
  );
}

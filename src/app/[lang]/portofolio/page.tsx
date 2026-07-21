// src/app/[lang]/portofolio/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, MessageCircle, ArrowRight } from "lucide-react";
import { getDictionary, hasLocale, alternatesFor } from "@/lib/i18n";
import WhatsAppLink from "@/components/agency/WhatsAppLink";
import FinalCta from "@/components/agency/home/FinalCta";

// Non-translated project facts: images and external links.
const projectConfig = {
  campaignBlast: {
    images: [] as string[],
    href: "https://github.com/samuelrantung/campaign-blast-poc",
  },
  seraya: {
    images: [
      "/portfolio/seraya/seraya-hero-section.png",
      "/portfolio/seraya/seraya-google-indexed.png",
    ],
    href: "https://seraya-agency.com/",
  },
  manadoPost: {
    images: ["/portfolio/manado-post/mp-app-carousel.png"],
    href: "https://play.google.com/store/apps/details?id=com.mp.manadopost&hl=id",
  },
  hospital: {
    images: [] as string[],
    href: "",
  },
} as const;

const projectOrder = ["campaignBlast", "hospital", "seraya", "manadoPost"] as const;

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
    <main className="flex-1 pt-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-foreground mb-4">
          {p.h1}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{p.intro}</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {projectOrder.map((key) => {
          const project = p.projects[key];
          const config = projectConfig[key];
          const alts = [project.imageAlt1, project.imageAlt2];
          return (
            <article
              key={key}
              className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-8 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                {project.category}
              </p>
              <h2 className="text-2xl font-bold font-display text-foreground mb-1">
                {project.name}
              </h2>
              <p className="text-sm text-muted mb-6">
                <span className="font-semibold">{p.roleLabel}:</span> {project.role}
              </p>

              {config.images.length > 0 && (
                <div className={`grid gap-4 mb-6 ${config.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {config.images.map((src, i) => (
                    <div key={src} className="rounded-xl border border-border/40 overflow-hidden">
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

              <p className="text-sm text-foreground/90 leading-relaxed mb-3">{project.problem}</p>
              <p className="text-sm text-foreground/90 leading-relaxed mb-4">{project.solution}</p>

              <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                  {p.resultLabel}
                </p>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {project.result}
                </p>
              </div>

              {config.href && project.linkLabel && (
                <a
                  href={config.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {project.linkLabel}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </article>
          );
        })}

        {/* Next-project CTA card */}
        <article className="reveal-on-scroll rounded-2xl border-2 border-dashed border-primary/40 p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold font-display text-foreground mb-3">
            {p.nextProject.title}
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-xl mx-auto mb-6">
            {p.nextProject.text}
          </p>
          <WhatsAppLink
            message={dict.cta.whatsappMessage}
            source="portfolio_next"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm shadow-md transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.cta.whatsappLabel}
            <ArrowRight className="w-4 h-4 ml-1" />
          </WhatsAppLink>
        </article>
      </section>

      <FinalCta dict={dict} />
    </main>
  );
}

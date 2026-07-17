// src/components/agency/home/Proof.tsx
import { ExternalLink } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import Image from "next/image";

// Testimonial draft awaits the Seraya owner's written approval.
// Flip to true ONLY after Sam confirms the client approved the wording.
const TESTIMONIAL_APPROVED = false;

export default function Proof({ dict }: { dict: Dictionary }) {
  const proof = dict.home.proof;
  const cs = proof.caseStudy;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground text-center mb-12 reveal-on-scroll">
        {proof.heading}
      </h2>

      {/* Case study card */}
      <div className="reveal-on-scroll rounded-3xl border border-border/40 bg-card p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
              <Image
                src="/clients/seraya.png"
                alt="Seraya Bahari Agensi"
                width={48}
                height={48}
                className="w-8 h-8 rounded"
                style={{ backgroundColor: "white", padding: 2 }}
              />
            </div>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-1">
                {cs.label}
              </span>
              <h3 className="text-xl font-bold font-display text-foreground leading-tight">
                {cs.client}
              </h3>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              {cs.industry}
            </p>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {cs.story}
            </p>
          </div>

          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
              {cs.resultLabel}
            </h4>
            <p className="text-sm font-medium text-foreground leading-relaxed">
              {cs.result}
            </p>
          </div>

          <div>
            <a
              href="https://seraya-agency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
            >
              {cs.visit}
              <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 group-hover/btn:bg-primary/20">
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Double-bezel container for the project images */}
        <div className="md:col-span-5 relative py-4">
          <div className="relative w-full aspect-[1.6]">
            {/* Google Indexed image (Base) */}
            <div className="w-[85%] rounded-[1.5rem] border border-border/30 bg-muted/20 p-1.5 shadow-inner">
              <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden relative aspect-[1644/742] w-full border border-border/40 bg-muted">
                <Image
                  src="/portfolio/seraya/seraya-google-indexed.png"
                  alt="Seraya Bahari Agensi Google Indexed"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Website Preview image (Overlay) */}
            <div className="absolute bottom-0 right-0 w-[55%] rounded-xl border border-border/40 p-1 bg-card shadow-2xl">
              <div className="rounded-lg overflow-hidden relative aspect-[3438/1616] w-full border border-border/40">
                <Image
                  src="/portfolio/seraya/seraya-hero-section.png"
                  alt="Seraya Bahari Agensi Website Preview"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial — WhatsApp-bubble style; gated until client approves */}
      {TESTIMONIAL_APPROVED && (
        <div className="mt-10 reveal-on-scroll">
          <h3 className="text-lg font-bold font-display text-foreground text-center mb-6">
            {proof.testimonial.heading}
          </h3>
          <figure className="max-w-xl mx-auto">
            <blockquote className="relative rounded-2xl rounded-bl-sm bg-primary/10 border border-primary/20 p-5 text-sm text-foreground leading-relaxed">
              {proof.testimonial.quote}
            </blockquote>
            <figcaption className="mt-2 ml-1 text-xs text-muted">
              — {proof.testimonial.attribution}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

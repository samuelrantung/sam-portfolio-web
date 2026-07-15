// src/components/agency/home/Proof.tsx
import { ExternalLink } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import Image from "next/image";

// Testimonial draft awaits the Seraya owner's written approval.
// Flip to true ONLY after Sam confirms the client approved the wording.
const TESTIMONIAL_APPROVED = true;

export default function Proof({ dict }: { dict: Dictionary }) {
  const proof = dict.home.proof;
  const cs = proof.caseStudy;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground text-center mb-12 reveal-on-scroll">
        {proof.heading}
      </h2>

      {/* Case study card */}
      <div className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Image
            src="/clients/seraya.png"
            alt="Seraya Bahari Agensi"
            width={64}
            height={64}
            className="w-10 h-10 rounded"
            style={{ backgroundColor: "white", padding: 4 }}
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            {cs.label}
          </p>
          <h3 className="text-xl font-bold font-display text-foreground">{cs.client}</h3>
          <p className="text-sm text-muted mb-4">{cs.industry}</p>
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">{cs.story}</p>
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-4 mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
              {cs.resultLabel}
            </p>
            <p className="text-sm font-medium text-foreground leading-relaxed">{cs.result}</p>
          </div>
          <a
            href="https://seraya-agency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {cs.visit}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
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

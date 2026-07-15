// src/components/agency/home/FaqAccordion.tsx
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({
  heading,
  items,
}: {
  heading: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground text-center mb-12 reveal-on-scroll">
        {heading}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="reveal-on-scroll group rounded-2xl border border-border/40 bg-card px-6 py-4 transition-colors duration-200"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-foreground text-sm sm:text-base [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown className="w-5 h-5 text-muted transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
            </summary>
            <p className="mt-3 text-sm text-muted leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

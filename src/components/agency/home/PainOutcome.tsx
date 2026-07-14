// src/components/agency/home/PainOutcome.tsx
import { SearchX, NotebookPen, EyeOff, ArrowDown } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const icons = {
  visibility: SearchX,
  operations: NotebookPen,
  image: EyeOff,
} as const;

export default function PainOutcome({ dict }: { dict: Dictionary }) {
  const pain = dict.home.pain;
  const keys = ["visibility", "operations", "image"] as const;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground text-center mb-12 reveal-on-scroll">
        {pain.heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {keys.map((key) => {
          const Icon = icons[key];
          const item = pain.items[key];
          return (
            <div
              key={key}
              className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <Icon className="w-8 h-8 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                  {pain.beforeLabel}
                </p>
                <p className="text-sm text-muted leading-relaxed">{item.before}</p>
              </div>
              <ArrowDown className="w-4 h-4 text-primary/60" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                  {pain.afterLabel}
                </p>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  {item.after}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// src/components/agency/home/ProcessSteps.tsx
import { MessageCircle, Hammer, Rocket } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const steps = [
  { key: "consult", Icon: MessageCircle },
  { key: "build", Icon: Hammer },
  { key: "launch", Icon: Rocket },
] as const;

export default function ProcessSteps({ dict }: { dict: Dictionary }) {
  const process = dict.home.process;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground text-center mb-12 reveal-on-scroll">
        {process.heading}
      </h2>
      <ol className="grid md:grid-cols-3 gap-6">
        {steps.map(({ key, Icon }, i) => {
          const step = process.steps[key];
          return (
            <li
              key={key}
              className="reveal-on-scroll rounded-2xl border border-border/40 bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

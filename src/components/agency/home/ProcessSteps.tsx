// src/components/agency/home/ProcessSteps.tsx
import type { Dictionary } from "@/lib/i18n";

export default function ProcessSteps({ dict }: { dict: Dictionary }) {
  const process = dict.home.process;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="split mb-1.5">
          <div className="lead-col">
            <span className="idx">04 / Cara kerja</span>
            <h2 className="fk mt-2.5">{process.heading}</h2>
          </div>
          <p className="muted self-end max-w-[44ch]">
            Dari obrolan pertama sampai website atau sistem Anda hidup dan terawat.
          </p>
        </div>

        <div className="process-grid">
          <div className="step">
            <div className="bignum">01</div>
            <h3>{process.steps.consult.title}</h3>
            <p>{process.steps.consult.desc}</p>
          </div>
          <div className="step">
            <div className="bignum">02</div>
            <h3>{process.steps.build.title}</h3>
            <p>{process.steps.build.desc}</p>
          </div>
          <div className="step">
            <div className="bignum">03</div>
            <h3>{process.steps.launch.title}</h3>
            <p>{process.steps.launch.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

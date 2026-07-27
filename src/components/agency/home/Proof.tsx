// src/components/agency/home/Proof.tsx
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

export default function Proof({ dict }: { dict: Dictionary }) {
  const proof = dict.home.proof;
  const cs = proof.caseStudy;

  return (
    <section className="bw">
      <div className="k left">
        <div className="inner">
          <span className="idx idx-w">03 / Terbukti, bukan janji</span>
          <blockquote className="mt-5">
            &quot;Ada customer baru yang menghubungi kami lewat website, dan nilai investasinya{" "}
            <span className="circ">
              sudah kembali.
              <svg viewBox="0 0 260 70" preserveAspectRatio="none">
                <path
                  className="stroke-w"
                  d="M130 6 C 40 4, 8 20, 12 36 C 16 56, 120 66, 200 60 C 250 55, 258 30, 210 16 C 170 6, 120 8, 90 12"
                />
              </svg>
            </span>
            &quot;
          </blockquote>
          <div className="who">
            <span className="av">S</span>
            <div>
              <b className="text-white">Owner</b>, {cs.client}
            </div>
          </div>
        </div>
      </div>

      <div className="w right">
        <div className="inner">
          <Image
            src="/clients/seraya.png"
            alt="PT Seraya Bahari Agensi logo"
            width={140}
            height={48}
            className="h-10 w-auto object-contain mb-4"
          />
          <span className="idx">{cs.label}</span>
          <h3 className="fk mt-2">{cs.client}</h3>
          <div className="sub">{cs.industry}</div>
          <p>{cs.story}</p>
          <Image
            src="/portfolio/seraya/seraya-hero-section.png"
            alt="Website PT Seraya Bahari Agensi yang kami bangun"
            width={900}
            height={560}
            className="w-full h-auto border border-line my-4"
          />
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://seraya-agency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-cta text-sm"
            >
              {cs.visit} <span className="arw">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

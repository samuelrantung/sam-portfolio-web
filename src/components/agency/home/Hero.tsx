// src/components/agency/home/Hero.tsx
import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";
import WhatsAppLink from "../WhatsAppLink";

export default function Hero({ dict }: { dict: Dictionary; locale: Locale }) {
  const hero = dict.home.hero;

  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-media">
          <Image
            src="/hero/hero-2.jpg"
            alt="Samuel Rantung, Imaginnative"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <span className="cap">halo, dari Sulawesi Utara</span>
        </div>

        <div className="hero-copy">
          <span className="idx">01 / Partner digital, Sulawesi Utara</span>
          <h1>
            Bisnismu layak{" "}
            <span className="u">
              ditemukan
              <svg viewBox="0 0 300 20" preserveAspectRatio="none">
                <path className="stroke" d="M4 13 C 70 4, 150 4, 296 11" />
              </svg>
            </span>{" "}
            &amp; dipercaya.
          </h1>
          <p className="lead">{hero.subtitle}</p>
          <div className="hero-actions">
            <WhatsAppLink
              message={dict.cta.whatsappMessage}
              source="home_hero"
              className="pill"
            >
              {dict.cta.whatsappLabel}
            </WhatsAppLink>
            <span className="hand muted">{dict.cta.whatsappNote}</span>
          </div>
          <div className="trust">
            <div className="t">
              <b>01</b> {hero.trust.founderLed}
            </div>
            <div className="t">
              <b>02</b> {hero.trust.roi}
            </div>
            <div className="t">
              <b>03</b> {hero.trust.local}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

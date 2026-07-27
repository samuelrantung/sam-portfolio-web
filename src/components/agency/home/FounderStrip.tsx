// src/components/agency/home/FounderStrip.tsx
import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

export default function FounderStrip({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const founder = dict.home.founder;

  return (
    <section className="bw">
      <div className="w left">
        <div className="inner founder-text">
          <span className="idx">05 / Di balik Imaginnative</span>
          <h2 className="fk">{founder.heading}</h2>
          <p>{founder.body}</p>
          <Link
            href={localePath(locale, "/tentang/samuel")}
            className="link-cta"
          >
            {founder.linkLabel} <span className="arw">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="k right relative !p-0 min-h-[380px] overflow-hidden border-t-[12px] border-b-[12px] min-[760px]:border-l-[12px] border-ink">
        <Image
          src="/hero/hero-2.jpg"
          alt="Samuel Rantung, Imaginnative"
          fill
          sizes="50vw"
          className="object-cover"
          style={{ filter: "invert(1)" }}
        />
      </div>
    </section>
  );
}

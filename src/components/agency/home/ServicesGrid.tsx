// src/components/agency/home/ServicesGrid.tsx
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

const services = [
  { key: "website", href: "/layanan/website", num: "01" },
  { key: "aplikasi", href: "/layanan/aplikasi", num: "02" },
  { key: "digitalisasi", href: "/layanan/digitalisasi", num: "03" },
  { key: "maintenance", href: "/layanan/maintenance", num: "04" },
] as const;

export default function ServicesGrid({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const svc = dict.home.services;

  return (
    <section className="sec no-top">
      <div className="wrap">
        <div className="split mb-4 reveal-on-scroll">
          <div className="lead-col">
            <span className="idx">02 / Yang kami kerjakan</span>
            <h2 className="fk mt-2.5">
              Punya ide, kebutuhan, atau masalah? Kami bantu wujudkan.
            </h2>
          </div>
          <p className="muted self-end max-w-[46ch]">
            Siapa pun Anda, mau bisnis lebih mudah ditemukan, operasional lebih rapi, atau sekadar punya ide yang belum tahu harus mulai dari mana. Apa pun itu, kami bantu selesaikan lewat teknologi.
          </p>
        </div>

        <div>
          {services.map(({ key, href, num }, index) => {
            const item = svc.items[key];
            return (
              <Link
                key={key}
                href={localePath(locale, href)}
                className="svc-row block reveal-on-scroll"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="n">{num}</span>
                <h3>{item.title}</h3>
                <span className="desc">{item.outcome}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// src/components/agency/home/FinalCta.tsx
import type { Dictionary } from "@/lib/i18n";
import WhatsAppLink from "../WhatsAppLink";

export default function FinalCta({
  dict,
  whatsappMessage,
  source = "final_cta",
}: {
  dict: Dictionary;
  whatsappMessage?: string;
  source?: string;
}) {
  const cta = dict.home.finalCta;
  const message = whatsappMessage ?? dict.cta.whatsappMessage;

  return (
    <section className="final">
      <div className="wrap">
        <span className="kick">ngobrol dulu, yuk</span>
        <h2>{cta.heading}</h2>
        <p>{cta.subheading}</p>
        <WhatsAppLink message={message} source={source} className="pill inv">
          {dict.cta.whatsappLabel}
        </WhatsAppLink>
      </div>
    </section>
  );
}

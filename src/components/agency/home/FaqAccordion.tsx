// src/components/agency/home/FaqAccordion.tsx
export default function FaqAccordion({
  heading,
  items,
}: {
  heading: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="sec">
      <div className="wrap max-w-4xl">
        <div className="mb-8">
          <span className="idx">FAQ</span>
          <h2 className="fk mt-2.5">{heading}</h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-5 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-ink text-base sm:text-lg select-none [&::-webkit-details-marker]:hidden font-display">
                <span>{item.q}</span>
                <span className="hand text-2xl text-gray-1 transition-transform group-open:rotate-45 ml-4">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-1 leading-relaxed text-sm sm:text-base max-w-[65ch]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

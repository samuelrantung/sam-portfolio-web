import { describe, it, expect } from "vitest";
import { faqPageJsonLd, breadcrumbJsonLd, serviceJsonLd, jsonLdScript } from "./schema";

describe("faqPageJsonLd", () => {
  it("maps each Q&A pair to a Question with an accepted answer", () => {
    const out = faqPageJsonLd([
      { q: "Berapa biaya pembuatan website?", a: "Mulai dari Rp 3 juta." },
    ]);

    expect(out["@type"]).toBe("FAQPage");
    expect(out.mainEntity).toEqual([
      {
        "@type": "Question",
        name: "Berapa biaya pembuatan website?",
        acceptedAnswer: { "@type": "Answer", text: "Mulai dari Rp 3 juta." },
      },
    ]);
  });
});

describe("breadcrumbJsonLd", () => {
  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/layanan" },
    { name: "Jasa Pembuatan Website", path: "/layanan/website" },
  ];

  it("numbers positions from 1 and resolves absolute URLs", () => {
    const out = breadcrumbJsonLd("id", crumbs);

    expect(out.itemListElement.map((c) => c.position)).toEqual([1, 2, 3]);
    expect(out.itemListElement.map((c) => c.item)).toEqual([
      "https://imaginnative.com",
      "https://imaginnative.com/layanan",
      "https://imaginnative.com/layanan/website",
    ]);
  });

  it("keeps the trail inside the visitor's locale", () => {
    const out = breadcrumbJsonLd("en", crumbs);

    expect(out.itemListElement.map((c) => c.item)).toEqual([
      "https://imaginnative.com/en",
      "https://imaginnative.com/en/layanan",
      "https://imaginnative.com/en/layanan/website",
    ]);
  });
});

describe("serviceJsonLd", () => {
  it("points at the locale's own URL, not the ID twin", () => {
    expect(serviceJsonLd("en", "Website", "desc", "/layanan/website").url).toBe(
      "https://imaginnative.com/en/layanan/website"
    );
  });
});

describe("jsonLdScript", () => {
  it("escapes < so a stray closing tag cannot break out of the script block", () => {
    const out = jsonLdScript({ name: "</script><img onerror=alert(1)>" });

    expect(out).not.toContain("</script>");
    expect(out).toContain("\\u003c");
  });
});

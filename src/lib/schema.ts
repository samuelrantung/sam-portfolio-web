import { SITE_URL, GOOGLE_MAPS_URL, CONTACT_EMAIL, PHONE_E164, GITHUB_URL } from "./site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "Imaginnative",
    url: SITE_URL,
    logo: `${SITE_URL}/imaginnative-logo.png`,
    email: CONTACT_EMAIL,
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bitung",
      addressRegion: "Sulawesi Utara",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Manado" },
      { "@type": "City", name: "Bitung" },
      { "@type": "AdministrativeArea", name: "Sulawesi Utara" },
    ],
    founder: { "@type": "Person", name: "Samuel Rantung" },
    sameAs: [GITHUB_URL, GOOGLE_MAPS_URL].filter(Boolean),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: "Sulawesi Utara" },
  };
}

export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

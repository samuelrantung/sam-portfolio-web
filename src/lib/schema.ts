import { SITE_URL, GOOGLE_MAPS_URL, CONTACT_EMAIL, PHONE_E164, GITHUB_URL } from "./site";
import { localePath, type Locale } from "./i18n";

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

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
      // Must stay character-for-character in sync with the Google Business
      // Profile listing; a NAP mismatch weakens both signals.
      streetAddress: "Jl. S.H Sarundajang No.1 Blok D, Girian Indah, Kec. Madidir",
      addressLocality: "Bitung",
      addressRegion: "Sulawesi Utara",
      postalCode: "95511",
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

export function serviceJsonLd(
  locale: Locale,
  name: string,
  description: string,
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absolute(localePath(locale, path)),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: "Sulawesi Utara" },
  };
}

type FaqItem = { q: string; a: string };

// Google removed FAQ rich results entirely on 7 May 2026, so this renders no
// visual change in Search. Kept because FAQPage is still a valid schema type
// that Google and AI answer engines parse to understand the page.
export function faqPageJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// `path` is the canonical Indonesian path; the locale prefix is applied here so
// the trail never points a visitor out of their language.
type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(locale: Locale, crumbs: readonly Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absolute(localePath(locale, path)),
    })),
  };
}

export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Article, not BlogPosting: these are standalone reference pages, not a
// chronological blog feed. Both are valid; Article is the honest one here.
export function articleJsonLd(article: {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  published: string;
  updated: string;
}) {
  const url = absolute(`/artikel/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metaTitle,
    description: article.metaDescription,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: article.published,
    dateModified: article.updated,
    inLanguage: "id-ID",
    author: { "@type": "Person", name: "Samuel Rantung" },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function caseStudyJsonLd(caseStudy: {
  locale: Locale;
  slug: string;
  name: string;
  description: string;
  imageUrls: readonly string[];
}) {
  const url = absolute(localePath(caseStudy.locale, `/portofolio/${caseStudy.slug}`));
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.name,
    description: caseStudy.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(caseStudy.imageUrls.length
      ? { image: caseStudy.imageUrls.map((src) => `${SITE_URL}${src}`) }
      : {}),
    creator: { "@id": `${SITE_URL}/#organization` },
    inLanguage: caseStudy.locale === "id" ? "id-ID" : "en",
  };
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { locales, localePath } from "@/lib/i18n";

// Bump a path's date when its content actually changes. Deliberately not
// `new Date()` — stamping every URL with the build time on every deploy makes
// lastmod meaningless, and Google starts ignoring it.
const paths: Record<string, string> = {
  "/": "2026-07-21",
  "/layanan": "2026-07-21",
  "/layanan/website": "2026-07-21",
  "/layanan/aplikasi": "2026-07-21",
  "/layanan/digitalisasi": "2026-07-21",
  "/layanan/maintenance": "2026-07-21",
  "/portofolio": "2026-08-28",
  "/portofolio/seraya-bahari-agensi": "2026-08-28",
  "/portofolio/pempek-bang-arie": "2026-08-28",
  "/portofolio/campaign-blast-whatsapp": "2026-08-28",
  "/portofolio/manado-post": "2026-08-28",
  "/tentang": "2026-07-21",
  "/tentang/samuel": "2026-07-21",
  "/kontak": "2026-07-21",
};

// Indonesian-only section: these pages have no English twin, so they get a
// single self-referential <url> with no hreflang alternates.
const idOnlyPaths: Record<string, string> = {
  "/artikel": "2026-08-28",
  "/artikel/biaya-website-umkm-manado": "2026-08-28",
};

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // Every locale gets its own <url> entry carrying the full set of alternates.
  // hreflang only counts when the annotations are reciprocal, so listing the
  // English pages solely as alternates of the Indonesian ones is not enough.
  const localized = Object.entries(paths).flatMap(([path, lastModified]) => {
    const languages = {
      id: absolute(path),
      en: absolute(localePath("en", path)),
      "x-default": absolute(path),
    };

    return locales.map((locale) => ({
      url: absolute(localePath(locale, path)),
      lastModified,
      alternates: { languages },
    }));
  });

  const idOnly = Object.entries(idOnlyPaths).map(([path, lastModified]) => ({
    url: absolute(path),
    lastModified,
  }));

  return [...localized, ...idOnly];
}

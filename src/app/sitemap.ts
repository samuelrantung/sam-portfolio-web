import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { localePath } from "@/lib/i18n";

const paths = [
  "/",
  "/layanan",
  "/layanan/website",
  "/layanan/aplikasi",
  "/layanan/digitalisasi",
  "/layanan/maintenance",
  "/portofolio",
  "/tentang",
  "/tentang/samuel",
  "/kontak",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        id: `${SITE_URL}${path === "/" ? "" : path}`,
        en: `${SITE_URL}${localePath("en", path)}`,
      },
    },
  }));
}

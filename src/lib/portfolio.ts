// src/lib/portfolio.ts
// Non-translatable facts about each project. Copy lives in the dictionaries
// under `portofolio.projects`; this file only holds images, links, and the
// slug that gives a project its own indexable URL.

export type ProjectMeta = {
  images: readonly string[];
  href: string;
  isDemo: boolean;
  // A project without a slug stays on the index only. Rumah Sakit Advent is
  // confidential and has no screenshots, so a detail page would be thin.
  slug: string | null;
};

export const projectConfig = {
  campaignBlast: {
    images: [],
    href: "https://wa.me/6282187792052?text=Halo imaginnative, saya tertarik demo campaign blast WhatsApp",
    isDemo: true,
    slug: "campaign-blast-whatsapp",
  },
  seraya: {
    images: [
      "/portfolio/seraya/seraya-hero-section.png",
      "/portfolio/seraya/seraya-google-indexed.png",
    ],
    href: "https://seraya-agency.com/",
    isDemo: false,
    slug: "seraya-bahari-agensi",
  },
  pempek: {
    images: ["/portfolio/pempek/hero.png", "/portfolio/pempek/menu.png"],
    href: "https://preview-pempek.imaginnative.com/",
    isDemo: true,
    slug: "pempek-bang-arie",
  },
  manadoPost: {
    images: ["/portfolio/manado-post/mp-app-carousel.png"],
    href: "https://play.google.com/store/apps/details?id=com.mp.manadopost&hl=id",
    isDemo: false,
    slug: "manado-post",
  },
  hospital: {
    images: [],
    href: "",
    isDemo: false,
    slug: null,
  },
} as const satisfies Record<string, ProjectMeta>;

export type ProjectKey = keyof typeof projectConfig;

export const projectOrder = [
  "seraya",
  "pempek",
  "campaignBlast",
  "manadoPost",
  "hospital",
] as const satisfies readonly ProjectKey[];

// Only the projects that earned a detail page, in the same order as the index.
export const caseStudies: readonly { key: ProjectKey; slug: string }[] =
  projectOrder
    .map((key) => ({ key, slug: projectConfig[key].slug as string | null }))
    .filter((e): e is { key: ProjectKey; slug: string } => e.slug !== null);

export const findCaseStudy = (slug: string) =>
  caseStudies.find((e) => e.slug === slug);

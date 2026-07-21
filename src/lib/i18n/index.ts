// src/lib/i18n/index.ts
import { id } from "./dictionaries/id";
import { en } from "./dictionaries/en";

export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

type DeepStringify<T> = { [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string };
export type Dictionary = DeepStringify<typeof id>;

const dictionaries: Record<Locale, Dictionary> = { id, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export const hasLocale = (s: string): s is Locale =>
  (locales as readonly string[]).includes(s);

// `path` is always the canonical Indonesian path (no locale prefix).
// The canonical is self-referential per locale — an English page must point at
// itself, not at its Indonesian twin, or Google drops it as a duplicate.
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      id: path,
      en: localePath("en", path),
      "x-default": path,
    },
  };
}

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

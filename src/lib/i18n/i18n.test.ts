// src/lib/i18n/i18n.test.ts
import { describe, it, expect } from "vitest";
import { getDictionary, localePath, locales, defaultLocale } from "./index";

function leafPaths(obj: object, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === "object" && v !== null
      ? leafPaths(v, `${prefix}${k}.`)
      : [`${prefix}${k}`]
  );
}

describe("dictionaries", () => {
  it("id and en have identical key structure", () => {
    const [id, en] = [getDictionary("id"), getDictionary("en")];
    expect(leafPaths(en).sort()).toEqual(leafPaths(id).sort());
  });

  it("never contains forbidden words (free/gratis)", () => {
    for (const locale of locales) {
      const json = JSON.stringify(getDictionary(locale)).toLowerCase();
      expect(json).not.toMatch(/\bfree\b/);
      expect(json).not.toMatch(/gratis/);
    }
  });
});

describe("localePath", () => {
  it("keeps root paths for the default locale (id)", () => {
    expect(defaultLocale).toBe("id");
    expect(localePath("id", "/")).toBe("/");
    expect(localePath("id", "/tentang/samuel")).toBe("/tentang/samuel");
  });

  it("prefixes /en for English", () => {
    expect(defaultLocale).toBe("id");
    expect(localePath("en", "/")).toBe("/en");
    expect(localePath("en", "/tentang/samuel")).toBe("/en/tentang/samuel");
  });
});

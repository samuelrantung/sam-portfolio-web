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

import { hasLocale } from "./index";
import { resolveLocaleRouting, toggleHref } from "./routing";

describe("hasLocale", () => {
  it("accepts supported locales only", () => {
    expect(hasLocale("id")).toBe(true);
    expect(hasLocale("en")).toBe(true);
    expect(hasLocale("fr")).toBe(false);
  });
});

describe("resolveLocaleRouting", () => {
  it("passes /en paths through", () => {
    expect(resolveLocaleRouting("/en")).toEqual({ action: "passthrough" });
    expect(resolveLocaleRouting("/en/layanan")).toEqual({ action: "passthrough" });
  });

  it("redirects direct /id paths to canonical root", () => {
    expect(resolveLocaleRouting("/id")).toEqual({ action: "redirect", target: "/" });
    expect(resolveLocaleRouting("/id/layanan/website")).toEqual({
      action: "redirect",
      target: "/layanan/website",
    });
  });

  it("rewrites prefix-less paths to /id internally", () => {
    expect(resolveLocaleRouting("/")).toEqual({ action: "rewrite", target: "/id" });
    expect(resolveLocaleRouting("/layanan")).toEqual({
      action: "rewrite",
      target: "/id/layanan",
    });
  });

  it("does not treat /enterprise as an /en path", () => {
    expect(resolveLocaleRouting("/enterprise")).toEqual({
      action: "rewrite",
      target: "/id/enterprise",
    });
  });
});

describe("toggleHref", () => {
  it("maps ID pages to their EN mirror", () => {
    expect(toggleHref("/")).toBe("/en");
    expect(toggleHref("/layanan/website")).toBe("/en/layanan/website");
  });

  it("maps EN pages back to root", () => {
    expect(toggleHref("/en")).toBe("/");
    expect(toggleHref("/en/layanan/website")).toBe("/layanan/website");
  });
});

import { alternatesFor } from "./index";

describe("alternatesFor", () => {
  it("declares ID as canonical with EN alternate", () => {
    expect(alternatesFor("/layanan/website")).toEqual({
      canonical: "/layanan/website",
      languages: {
        id: "/layanan/website",
        en: "/en/layanan/website",
        "x-default": "/layanan/website",
      },
    });
  });
});


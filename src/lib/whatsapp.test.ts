// src/lib/whatsapp.test.ts
import { describe, it, expect } from "vitest";
import { whatsappUrl } from "./whatsapp";

describe("whatsappUrl", () => {
  it("targets the agency number", () => {
    expect(whatsappUrl("Halo")).toBe("https://wa.me/6282187792052?text=Halo");
  });

  it("url-encodes the message", () => {
    expect(whatsappUrl("Halo, saya tertarik")).toBe(
      "https://wa.me/6282187792052?text=Halo%2C%20saya%20tertarik"
    );
  });
});

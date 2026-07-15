import { ImageResponse } from "next/og";
import { getDictionary, hasLocale, defaultLocale } from "@/lib/i18n";

export const alt = "Imaginnative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const serviceKeys = ["website", "aplikasi", "digitalisasi", "maintenance"] as const;
type ServiceKey = (typeof serviceKeys)[number];
const isServiceKey = (s: string): s is ServiceKey =>
  (serviceKeys as readonly string[]).includes(s);

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; service: string }>;
}) {
  const { lang, service } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : defaultLocale);
  const title = isServiceKey(service)
    ? dict.layanan.items[service].h1
    : "Imaginnative";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#222831",
          color: "#EEEEEE",
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 700, display: "flex" }}>
          imagi<span style={{ color: "#FBD46D" }}>nn</span>ative
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            marginTop: 32,
            lineHeight: 1.2,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#4F8A8B", display: "flex" }}>
          imaginnative.com
        </div>
      </div>
    ),
    size
  );
}

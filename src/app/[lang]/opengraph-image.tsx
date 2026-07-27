import { ImageResponse } from "next/og";
import { getDictionary, hasLocale, defaultLocale } from "@/lib/i18n";

export const alt = "Imaginnative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : defaultLocale);

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
          background: "#ffffff",
          color: "#131313",
          borderBottom: "12px solid #131313",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, display: "flex" }}>
          imaginnative
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 24,
            color: "rgba(19, 19, 19, 0.6)",
            display: "flex",
          }}
        >
          {dict.footer.tagline}
        </div>
      </div>
    ),
    size
  );
}

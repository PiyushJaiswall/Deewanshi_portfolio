import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = SITE_CONFIG.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>{SITE_CONFIG.name}</div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#a0a0a0" }}>
          Social Media Marketer & Content Strategist
        </div>
      </div>
    ),
    { ...size }
  );
}

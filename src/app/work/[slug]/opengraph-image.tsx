import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/data-fetchers";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  const title = project?.title ?? "Project";
  const brand = project?.brand ?? "";

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
          padding: 60,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, color: "#60a5fa", marginBottom: 16 }}>
          {brand}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700 }}>{title}</div>
      </div>
    ),
    { ...size }
  );
}

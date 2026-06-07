import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || "Daniel Skerman";
  const subtitle = searchParams.get("subtitle") || "Data Engineer & Mathematician";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0b0b0f",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700, textAlign: "center" }}>
          {title}
        </div>

        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.7 }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
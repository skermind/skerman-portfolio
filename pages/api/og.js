import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || "Daniel Skerman";
  const subtitle = searchParams.get("subtitle") || "Finance Data Engineer & MSc Mathematics Candidate";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0f1117",
          color: "#fcffe9",
          position: "relative",
        }}
      >
        {/* Center container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Accent line */}
          <div
            style={{
              width: "120px",
              height: "4px",
              backgroundColor: "#1DB954",
              marginBottom: "40px",
              borderRadius: "2px",
              boxShadow: "0 0 18px rgba(29,185,84,0.35)",
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              color: "#fcffe9",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "32px",
              marginTop: "24px",
              color: "#9ca3af",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
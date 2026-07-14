import { ImageResponse } from "next/og";

// Route segment config
export const alt = "Learn Russian · Flashcards";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#e5e7eb",
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(60% 60% at 15% -10%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(50% 50% at 95% 0%, rgba(16,185,129,0.22), transparent 50%), radial-gradient(45% 45% at 50% 120%, rgba(139,92,246,0.28), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          Vocabulary Trainer
        </div>
        <div
          style={{
            fontSize: 128,
            fontWeight: 700,
            marginTop: 16,
            color: "white",
          }}
        >
          Learn Russian
        </div>
        <div style={{ fontSize: 40, marginTop: 16, color: "#9ca3af" }}>
          Practice Russian vocabulary with elegant flashcards
        </div>
      </div>
    ),
    { ...size },
  );
}

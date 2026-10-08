import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Barbearia Roman — Seu estilo. Seu corte. Sua identidade.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "radial-gradient(ellipse at 75% 30%, #2a2416 0%, #0a0a0a 60%)",
          color: "#f2efe9",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#c6a663", fontSize: 24, letterSpacing: 8 }}>
          <div style={{ width: 60, height: 2, background: "#c6a663" }} />
          BARBEARIA MASCULINA
        </div>
        <div style={{ fontSize: 112, letterSpacing: 10, marginTop: 28, lineHeight: 1 }}>BARBEARIA</div>
        <div style={{ fontSize: 112, letterSpacing: 10, color: "#c6a663", lineHeight: 1.05 }}>ROMAN</div>
        <div style={{ fontSize: 34, marginTop: 36, color: "#a7a39b" }}>Seu estilo. Seu corte. Sua identidade.</div>
      </div>
    ),
    size,
  );
}

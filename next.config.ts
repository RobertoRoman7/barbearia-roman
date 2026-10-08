import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site 100% estático (pasta /out) — hospede em Vercel, Netlify,
  // Hostinger ou qualquer hospedagem comum.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

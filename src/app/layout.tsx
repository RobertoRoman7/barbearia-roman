import type { Metadata, Viewport } from "next";
import "@fontsource/cinzel/500.css";
import "@fontsource/cinzel/600.css";
import "@fontsource-variable/sora";
import "./globals.css";
import { site } from "@/config/site";

const title = "Barbearia Roman | Corte, Barba e Estilo";
const description =
  "Barbearia Roman — corte de cabelo, barba e sobrancelha. Agende seu horário pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  keywords: ["barbearia", "Barbearia Roman", "corte de cabelo", "barba", "sobrancelha", "barbeiro"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: site.name,
  description,
  url: site.url,
  telephone: "+55 45 99155-2400",
  priceRange: "R$ 10 – R$ 70",
  ...(site.location.address
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: site.location.address,
          addressLocality: "Três Barras do Paraná",
          addressRegion: "PR",
          addressCountry: "BR",
        },
      }
    : {}),
  ...(site.instagram ? { sameAs: [site.instagram.url] } : {}),
  ...(site.location.hours.length
    ? {
        openingHoursSpecification: site.location.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.dayOfWeek,
          opens: h.opens,
          closes: h.closes,
        })),
      }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal only when JS runs; without JS everything stays visible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}

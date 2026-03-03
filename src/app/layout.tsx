import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import React from "react";
import "./globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "ALSOLVED - Certificazioni & Compliance. Risolto.",
  description: "Il partner tecnologico per le aziende moderne. Certificazioni ISO, automazione della compliance e audit strategici.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.alsolvedcertificazioni.com",
    title: "ALSOLVED - Certificazioni & Compliance. Risolto.",
    description: "Il partner tecnologico per le aziende moderne.",
    siteName: "ALSOLVED",
  },
  metadataBase: new URL("https://www.alsolvedcertificazioni.com"),
  appleWebApp: {
    capable: true,
    title: "AlSolved",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Configurazione base per Structured Data B2B
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AlSolved Certificazioni",
    "description": "Il partner tecnologico per le aziende moderne. Certificazioni ISO, automazione della compliance e audit strategici.",
    "url": "https://www.alsolvedcertificazioni.com",
    "telephone": "+39000000000",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IT"
    },
    "sameAs": [
      // In futuro inserire link LinkedIn o altri social se ci sono
    ]
  };

  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${manrope.variable} ${sora.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        {/* Inject Structured Data per la SEO tecnica */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}

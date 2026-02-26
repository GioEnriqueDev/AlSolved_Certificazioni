import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${manrope.variable} ${sora.variable} antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}

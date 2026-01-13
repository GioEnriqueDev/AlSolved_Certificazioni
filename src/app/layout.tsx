import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ALSOLVED - Certificazioni & Compliance. Risolto.",
  description: "Il partner tecnologico per le aziende moderne. Certificazioni ISO, automazione della compliance e audit strategici.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.alsolved.com",
    title: "ALSOLVED - Certificazioni & Compliance. Risolto.",
    description: "Il partner tecnologico per le aziende moderne.",
    siteName: "ALSOLVED",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}

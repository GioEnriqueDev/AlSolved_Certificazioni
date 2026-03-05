"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import CinematicMacroAreas from "@/components/sections/CinematicMacroAreas";

// Lazy loading dei componenti below-the-fold per migliorare LCP e TTI
const ClientLogos = dynamic(() => import("@/components/sections/ClientLogos"), { ssr: true });
const ScrollProgressProcess = dynamic(() => import("@/components/sections/ScrollProgressProcess"), { ssr: false });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <HeroSection />

      <ClientLogos />

      {/* Cinematic Bento Box - The New Certification Hub */}
      <CinematicMacroAreas />

      <div className="relative z-10 pt-10 xl:pt-14">
        {/* Renderizzato dinamicamente solo quando richiesto dal client (pesante di calcoli Framer Motion) */}
        <ScrollProgressProcess />
      </div>

      <FinalCTA />
    </div>
  );
}

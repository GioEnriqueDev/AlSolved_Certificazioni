"use client";

import HeroSection from "@/components/sections/HeroSection";
import AnimatedBackground from "@/components/sections/AnimatedBackground";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import CinematicMacroAreas from "@/components/sections/CinematicMacroAreas";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <AnimatedBackground />

      <HeroSection />

      <ClientLogos />

      {/* Cinematic Bento Box - The New Certification Hub */}
      <CinematicMacroAreas />

      <div className="relative z-10 pt-10 xl:pt-14">
        <ScrollProgressProcess />
      </div>

      <FinalCTA />
    </div>
  );
}

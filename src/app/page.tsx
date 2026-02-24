"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import abstractWavesImg from "@/assets/images/abstract_3d_waves.png";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import CanvasWrapper from "@/components/canvas/CanvasWrapper";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import CinematicMacroAreas from "@/components/sections/CinematicMacroAreas";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollState } from "@/lib/scrollState";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Sync scroll to our vanilla mutable state for the 3D canvas (React Three Fiber)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    scrollState.progress = latest;
  });

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      {/* 3D Canvas fixed in the background reacting to scroll */}
      <CanvasWrapper />

      <HeroSection />

      <ClientLogos />

      {/* Cinematic Bento Box - The New Certification Hub */}
      <CinematicMacroAreas />

      <div className="relative z-10 pt-10">
        <ScrollProgressProcess />
      </div>

      {/* ===================== FINAL CTA ===================== */}
      <section id="cta" className="py-40 bg-white/80 backdrop-blur-md relative overflow-hidden border-t border-border/40 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.03),transparent_70%)] pointer-events-none z-[-1]"></div>

        <motion.div
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8">
            Pronto a Iniziare?
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter text-foreground">
            Smetti di Perdere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Opportunità.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            Ogni giorno senza una certificazione è una gara persa. Prenota oggi la tua analisi di conformità gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contatti">
              <Button
                size="lg"
                className="h-20 px-14 text-2xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_15px_35px_rgba(242,78,107,0.3)] hover:shadow-[0_20px_45px_rgba(242,78,107,0.4)] transition-all duration-500 hover:-translate-y-1"
              >
                Analisi Gratuita
                <ArrowRight className="ml-4 w-7 h-7" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

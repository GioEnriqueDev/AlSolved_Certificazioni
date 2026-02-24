"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import CinematicMacroAreas from "@/components/sections/CinematicMacroAreas";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <AnimatedBackground />

      <HeroSection />

      <ClientLogos />

      {/* Cinematic Bento Box - The New Certification Hub */}
      <CinematicMacroAreas />

      <div className="relative z-10 pt-10">
        <ScrollProgressProcess />
      </div>

      {/* ===================== FINAL CTA ===================== */}
      <section id="cta" className="py-32 md:py-40 bg-white relative overflow-hidden border-t border-border/40 z-10">
        {/* Background mesh gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.04),transparent_60%)]"></div>
          <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.03),transparent_60%)]"></div>
          <div className="absolute top-[60%] right-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_60%)]"></div>
        </div>

        <motion.div
          className="container mx-auto px-6 relative z-10 text-center max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-8">
            Pronto a Iniziare?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter text-foreground">
            Smetti di Perdere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-400">Opportunità.</span>
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            Ogni giorno senza una certificazione è una gara persa.
            <br className="hidden sm:block" />
            Prenota oggi la tua analisi di conformità gratuita.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-8">
            <Link href="/contatti">
              <Button
                size="lg"
                className="h-16 md:h-18 px-12 md:px-16 text-lg md:text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_12px_35px_rgba(242,78,107,0.35)] hover:shadow-[0_18px_50px_rgba(242,78,107,0.45)] transition-all duration-500 hover:-translate-y-1"
              >
                Analisi Gratuita
                <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </Link>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground/60 font-medium">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> Completamente gratuita
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/20"></span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Solo 15 minuti
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/20"></span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3" /> Senza impegno
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

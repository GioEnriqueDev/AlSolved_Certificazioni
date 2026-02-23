"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import abstractWavesImg from "@/assets/images/abstract_3d_waves.png";
import Link from "next/link";
import TypewriterHero from "@/components/ui/TypewriterHero";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import CinematicMacroAreas from "@/components/sections/CinematicMacroAreas";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Pain points for typewriter effect
const painPoints = [
  "Vuoi accedere a nuovi mercati e appalti strutturati?",
  "Devi ottimizzare e certificare i tuoi processi aziendali?",
  "Vuoi garantire la massima sicurezza ai dati dei tuoi clienti?",
  "Vuoi valorizzare il tuo team con la Parità di Genere?",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <AnimatedBackground />

      <TypewriterHero
        painPoints={painPoints}
        solution="Il Partner per le Normative."
        solutionSubtitle="Affidati a un partner tecnologico per l'ottenimento delle certificazioni internazionali. Digitalizziamo la conformità per renderla un vero asset strategico, senza burocrazia inutile."
      />

      <ClientLogos />

      {/* Cinematic Bento Box - The New Certification Hub */}
      <CinematicMacroAreas />

      <div className="relative z-10 pt-10">
        <ScrollProgressProcess />
      </div>

      {/* ===================== FINAL CTA ===================== */}
      <section id="cta" className="py-32 bg-transparent relative overflow-hidden scroll-mt-20 z-10">
        <div className="absolute inset-0 z-[-1] opacity-30 mix-blend-multiply">
          <Image
            src={abstractWavesImg}
            alt="CTA 3D Background"
            fill
            className="object-cover object-center"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-transparent pointer-events-none z-[-1]"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.08),transparent_60%)] pointer-events-none z-[-1]"></div>

        <motion.div
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">
            Pronto a Iniziare?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-foreground drop-shadow-sm">
            Smetti di Perdere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Opportunità.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4">
            Ogni giorno senza una certificazione è una gara persa, un talento sfuggito, un rischio in più. Prenota oggi il tuo check-up gratuito.
          </p>
          <Link href="/contatti">
            <Button
              size="lg"
              className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.4)] hover:shadow-[0_12px_40px_rgba(242,78,107,0.5)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Prenota il Check-up Gratuito
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

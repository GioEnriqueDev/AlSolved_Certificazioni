"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import abstractWavesImg from "@/assets/images/abstract_3d_waves.png";
import Link from "next/link";
import TypewriterHero from "@/components/ui/TypewriterHero";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import BentoStats from "@/components/sections/BentoStats";
import FadeIn from "@/components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Settings2,
  ShieldCheck,
  Leaf,
  HardHat,
  Users,
  ArrowRight,
} from "lucide-react";

// Pain points for typewriter effect
const painPoints = [
  "Vuoi accedere a nuovi mercati e appalti strutturati?",
  "Devi ottimizzare e certificare i tuoi processi aziendali?",
  "Vuoi garantire la massima sicurezza ai dati dei tuoi clienti?",
  "Vuoi valorizzare il tuo team con la Parità di Genere?",
];

// Certification data
const certifications = [
  {
    id: "iso-9001",
    title: "Business OS",
    subtitle: "ISO 9001",
    description:
      "Trasforma il caos in un sistema. Migliora l'efficienza operativa, riduci gli sprechi e aumenta la soddisfazione cliente. Indispensabile per vincere appalti pubblici.",
    icon: Settings2,
    image: "/AlSolved_Certificazioni/images/certificazioni/business_os_iso_9001_1771842010174.png"
  },
  {
    id: "iso-27001",
    title: "Cyber Shield",
    subtitle: "ISO 27001",
    description:
      "Proteggi i dati aziendali e quelli dei tuoi clienti. Rispetta GDPR e NIS2, evita sanzioni milionarie e diventa un partner affidabile.",
    icon: ShieldCheck,
    image: "/AlSolved_Certificazioni/images/certificazioni/cyber_shield_iso_27001_1771842028487.png"
  },
  {
    id: "iso-14001",
    title: "Green Badge",
    subtitle: "ISO 14001",
    description:
      "Dimostra il tuo impegno ambientale. Accedi a bandi ESG, migliora la reputazione e riduci i costi operativi legati all'energia.",
    icon: Leaf,
    image: "/AlSolved_Certificazioni/images/certificazioni/green_badge_iso_14001_1771842046151.png"
  },
  {
    id: "iso-45001",
    title: "Zero Infortuni",
    subtitle: "ISO 45001",
    description:
      "La sicurezza sul lavoro non è un costo, è un investimento. Riduci incidenti, premi assicurativi e rischi legali.",
    icon: HardHat,
    image: "/AlSolved_Certificazioni/images/certificazioni/zero_infortuni_iso_45001_1771842068650.png"
  },
  {
    id: "pdr-125",
    title: "Talent Magnet",
    subtitle: "UNI/PdR 125",
    description:
      "La certificazione Parità di Genere. Attrai i migliori talenti, ottieni sgravi fiscali fino a 50k€/anno e punteggi premiali nei bandi.",
    icon: Users,
    image: "/AlSolved_Certificazioni/images/certificazioni/talent_magnet_pdr_125.png"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <AnimatedBackground />

      {/* TypewriterHero already has its own heavy animations */}
      <TypewriterHero
        painPoints={painPoints}
        solution="Il Partner per le Normative."
        solutionSubtitle="Affidati a un partner tecnologico per l'ottenimento delle certificazioni internazionali. Digitalizziamo la conformità per renderla un vero asset strategico, senza burocrazia inutile."
      />
      <ClientLogos />

      {/* ===================== CERTIFICATIONS SECTION ===================== */}
      <section id="certificazioni" className="py-28 bg-transparent relative scroll-mt-20 z-10">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
              I Nostri Servizi
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground tracking-tight">
              Scegli la Tua <span className="text-primary">Certificazione</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Ogni certificazione è pensata per risolvere un problema specifico. Quale ti serve per crescere?
            </p>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                layoutId={`cert-${cert.id}`}
                onClick={() => setSelectedCert(cert)}
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl border border-border bg-white/95 p-10 h-full hover:border-primary/30 hover:bg-white transition-colors duration-300 md:hover:-translate-y-2 group will-change-transform shadow-sm cursor-pointer"
              >
                <motion.div layoutId={`icon-${cert.id}`} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <cert.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.p layoutId={`subtitle-${cert.id}`} className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">
                  {cert.subtitle}
                </motion.p>
                <motion.h3 layoutId={`title-${cert.id}`} className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                  {cert.title}
                </motion.h3>
                <motion.p layoutId={`desc-${cert.id}`} className="text-muted-foreground leading-relaxed text-sm font-medium">
                  {cert.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cinematic Modal for Certifications */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
            />
            <motion.div
              layoutId={`cert-${selectedCert.id}`}
              className="fixed inset-4 md:inset-10 lg:inset-x-40 lg:inset-y-20 z-[101] flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover opacity-90 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-white/10 mix-blend-overlay" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="sr-only">Chiudi</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <motion.div layoutId={`icon-${selectedCert.id}`} className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-8 shadow-lg">
                  <selectedCert.icon className="w-10 h-10 text-white" />
                </motion.div>

                <motion.p layoutId={`subtitle-${selectedCert.id}`} className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                  {selectedCert.subtitle}
                </motion.p>
                <motion.h3 layoutId={`title-${selectedCert.id}`} className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                  {selectedCert.title}
                </motion.h3>
                <motion.p layoutId={`desc-${selectedCert.id}`} className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-10">
                  {selectedCert.description}
                  {" "}Affidarsi a una certificazione come {selectedCert.subtitle} significa trasformare gli obblighi normativi in un vantaggio competitivo tangibile.
                </motion.p>

                <Link href="/contatti" onClick={() => setSelectedCert(null)}>
                  <Button size="lg" className="w-full md:w-auto h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.4)] transition-all transform hover:scale-105">
                    Richiedi Fattibilità
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <ScrollProgressProcess />
        <BentoStats />
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

        {/* OPTIMIZED: Replaced expensive 150px blur with a lightweight radial gradient */}
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
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-foreground drop-shadow-sm">
            Smetti di Perdere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Opportunità.</span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
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

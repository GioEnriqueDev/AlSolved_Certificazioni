"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import abstractWavesImg from "@/assets/images/abstract_3d_waves.png";
import Link from "next/link";
import TypewriterHero from "@/components/ui/TypewriterHero";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import FaqSection from "@/components/sections/FaqSection";
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
  Target,
  Clock,
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
    description: "Trasforma il caos in un sistema operativo aziendale infallibile.",
    target: "Aziende in crescita, B2B, fornitori PA e aziende che partecipano a bandi o gare d'appalto strutturate.",
    deliverables: ["Gap Analysis completa", "Manuale della Qualità aziendale", "Procedure operative standardizzate (SOP)", "Affiancamento Audit Interno ed Esterno", "Certificato Ufficiale Accreditato"],
    timeline: "Da 8 a 12 settimane",
    whyNow: "Senza la 9001 vieni escluso dalle gare d'appalto sopra certe soglie e perdi affidabilità agli occhi dei grandi committenti.",
    icon: Settings2,
    image: "/AlSolved_Certificazioni/images/certificazioni/business_os_iso_9001_1771842010174.png"
  },
  {
    id: "iso-27001",
    title: "Cyber Shield",
    subtitle: "ISO 27001",
    description: "Proteggi i dati aziendali e quelli dei tuoi clienti, evitando disastri legali e sanzioni.",
    target: "Software House, IT, aziende che gestiscono dati medici/bancari o operano in settori critici (Direttiva NIS2).",
    deliverables: ["Statement of Applicability (SoA)", "Piano di Risk Assessment (RA)", "Policy di Data Breach ed Encryption", "Formazione del personale", "Simulazione Audit di sicurezza"],
    timeline: "Da 12 a 16 settimane",
    whyNow: "La direttiva NIS2 e il GDPR rendono la sicurezza obbligatoria. Un singolo data breach può costare il 4% del fatturato annuo.",
    icon: ShieldCheck,
    image: "/AlSolved_Certificazioni/images/certificazioni/cyber_shield_iso_27001_1771842028487.png"
  },
  {
    id: "iso-14001",
    title: "Green Badge",
    subtitle: "ISO 14001",
    description: "Dimostra il tuo impegno per l'ambiente e accedi ai fondi ESG.",
    target: "Aziende manifatturiere, trasporti, logistica, chimica ed edilizia.",
    deliverables: ["Analisi Ambientale Iniziale", "Registro degli Impatti", "Piano di Gestione Emergenze", "Procedure per la riduzione degli sprechi"],
    timeline: "Da 8 a 12 settimane",
    whyNow: "Il rating ESG è il nuovo standard bancario: senza 14001 sarà sempre più difficile ottenere prestiti agevolati o vincere bandi pubblici.",
    icon: Leaf,
    image: "/AlSolved_Certificazioni/images/certificazioni/green_badge_iso_14001_1771842046151.png"
  },
  {
    id: "iso-45001",
    title: "Zero Infortuni",
    subtitle: "ISO 45001",
    description: "Trasforma la sicurezza sul lavoro in un investimento per evitare cause e blocchi aziendali.",
    target: "Imprese edili, manifattura pesante, industria, logistica complessa.",
    deliverables: ["Valutazione flussi normativi", "Documento di Valutazione Rischi integrato (DVR)", "Piani di sorveglianza sanitaria", "Affiancamento ispettivo"],
    timeline: "Da 10 a 14 settimane",
    whyNow: "Un infortunio grave può bloccare il cantiere e portare a responsabilità penali. La 45001 offre inoltre sgravi INAIL (modello OT23).",
    icon: HardHat,
    image: "/AlSolved_Certificazioni/images/certificazioni/zero_infortuni_iso_45001_1771842068650.png"
  },
  {
    id: "pdr-125",
    title: "Talent Magnet",
    subtitle: "UNI/PdR 125",
    description: "La certificazione sulla Parità di Genere per attrarre talenti e ottenere sgravi.",
    target: "PMI da 15 a 50+ dipendenti interessate al welfare aziendale.",
    deliverables: ["KPI Assessment Gender Gap", "Policy di Parità e Molestie", "Affiancamento comitato guida", "Pratica per esonero contributivo INPS"],
    timeline: "Da 6 a 10 settimane",
    whyNow: "Offre sgravi contributivi INPS fino a 50.000€ l'anno e punteggi premiali imbattibili nelle gare d'appalto pubbliche (PNRR).",
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
              <div className="hidden md:block w-full md:w-2/5 h-64 md:h-full relative overflow-hidden bg-black flex-shrink-0">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover opacity-90 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 mix-blend-overlay" />
              </div>

              {/* Content Side - Scrolling Hub */}
              <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col relative bg-white overflow-y-auto custom-scrollbar">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10 shadow-sm"
                >
                  <span className="sr-only">Chiudi</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="max-w-3xl">
                  <motion.div layoutId={`icon-${selectedCert.id}`} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-6 shadow-md">
                    <selectedCert.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.p layoutId={`subtitle-${selectedCert.id}`} className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
                    {selectedCert.subtitle}
                  </motion.p>
                  <motion.h3 layoutId={`title-${selectedCert.id}`} className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                    {selectedCert.title}
                  </motion.h3>

                  {/* Technical Details Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-10 space-y-8"
                  >
                    <div>
                      <h4 className="flex items-center text-lg font-bold text-foreground mb-3 border-b pb-2">
                        <Users className="w-5 h-5 mr-3 text-primary" /> Per Chi è Essenziale
                      </h4>
                      <p className="text-muted-foreground font-medium leading-relaxed">{selectedCert.target}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center text-lg font-bold text-foreground mb-3 border-b pb-2">
                        <Target className="w-5 h-5 mr-3 text-primary" /> Il Vantaggio Strategico (Perché Ora)
                      </h4>
                      <p className="text-muted-foreground font-medium leading-relaxed">{selectedCert.whyNow}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center text-lg font-bold text-foreground mb-3 border-b pb-2">
                        <Settings2 className="w-5 h-5 mr-3 text-primary" /> Cosa Consegniamo (Deliverables)
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {selectedCert.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm font-medium text-muted-foreground">
                            <ShieldCheck className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center text-lg font-bold text-foreground mb-3 border-b pb-2">
                        <Clock className="w-5 h-5 mr-3 text-primary" /> Timeline
                      </h4>
                      <p className="text-muted-foreground font-medium">{selectedCert.timeline}</p>
                    </div>

                    <div className="pt-8 pb-4">
                      <Link href="/contatti" onClick={() => setSelectedCert(null)}>
                        <Button size="lg" className="w-full md:w-auto h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.4)] transition-all transform hover:scale-105">
                          Prenota Call di 15 min
                          <ArrowRight className="ml-3 w-6 h-6" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <ScrollProgressProcess />
        <FaqSection />
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

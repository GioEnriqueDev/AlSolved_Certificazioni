import { Button } from "@/components/ui/button";
import Link from "next/link";
import TypewriterHero from "@/components/ui/TypewriterHero";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ClientLogos from "@/components/sections/ClientLogos";
import ScrollProgressProcess from "@/components/sections/ScrollProgressProcess";
import BentoStats from "@/components/sections/BentoStats";
// import SpotlightCard from "@/components/ui/SpotlightCard";
import FadeIn from "@/components/animations/FadeIn";
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
  "Perde gare d'appalto?",
  "Subisce controlli fiscali?",
  "Non rispetta la GDPR?",
  "Fatica ad attrarre talenti?",
];

// Certification data
const certifications = [
  {
    title: "Business OS",
    subtitle: "ISO 9001",
    description:
      "Trasforma il caos in un sistema. Migliora l'efficienza operativa, riduci gli sprechi e aumenta la soddisfazione cliente. Indispensabile per vincere appalti pubblici.",
    icon: Settings2,
  },
  {
    title: "Cyber Shield",
    subtitle: "ISO 27001",
    description:
      "Proteggi i dati aziendali e quelli dei tuoi clienti. Rispetta GDPR e NIS2, evita sanzioni milionarie e diventa un partner affidabile.",
    icon: ShieldCheck,
  },
  {
    title: "Green Badge",
    subtitle: "ISO 14001",
    description:
      "Dimostra il tuo impegno ambientale. Accedi a bandi ESG, migliora la reputazione e riduci i costi operativi legati all'energia.",
    icon: Leaf,
  },
  {
    title: "Zero Infortuni",
    subtitle: "ISO 45001",
    description:
      "La sicurezza sul lavoro non è un costo, è un investimento. Riduci incidenti, premi assicurativi e rischi legali.",
    icon: HardHat,
  },
  {
    title: "Talent Magnet",
    subtitle: "UNI/PdR 125",
    description:
      "La certificazione Parità di Genere. Attrai i migliori talenti, ottieni sgravi fiscali fino a 50k€/anno e punteggi premiali nei bandi.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <AnimatedBackground />
      <TypewriterHero
        painPoints={painPoints}
        solution="Certificata e Vincente."
        solutionSubtitle="Ottieni le certificazioni che aprono porte, vincono gare e proteggono il tuo business. Con ALSOLVED, la burocrazia diventa un vantaggio competitivo."
      />
      <ClientLogos />

      {/* ===================== CERTIFICATIONS SECTION ===================== */}
      <section id="certificazioni" className="py-28 bg-background relative scroll-mt-20">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              I Nostri Servizi
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Scegli la Tua <span className="text-primary">Certificazione</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Ogni certificazione è pensata per risolvere un problema specifico. Quale ti serve per crescere?
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-secondary/20 p-8 h-full hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <cert.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  {cert.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollProgressProcess />
      <BentoStats />

      {/* ===================== FINAL CTA ===================== */}
      <section id="cta" className="py-32 bg-background relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
              Pronto a Iniziare?
            </p>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Smetti di Perdere <br />
              <span className="text-primary">Opportunità.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ogni giorno senza una certificazione è una gara persa, un talento sfuggito, un rischio in più. Prenota oggi il tuo check-up gratuito.
            </p>
            <Link href="/contatti">
              <Button
                size="lg"
                className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_4px_30px_rgba(242,78,107,0.4)] hover:shadow-[0_6px_40px_rgba(242,78,107,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                Prenota il Check-up Gratuito
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

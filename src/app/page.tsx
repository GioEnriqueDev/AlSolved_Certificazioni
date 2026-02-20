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
      <section id="certificazioni" className="py-28 bg-white relative scroll-mt-20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-border bg-gray-50/50 p-10 h-full hover:border-primary/20 hover:bg-white hover:shadow-soft-glow transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">
                  {cert.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
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
      <section id="cta" className="py-32 bg-secondary/20 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

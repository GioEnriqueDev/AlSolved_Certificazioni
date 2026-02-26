"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import BookingCTA from "@/components/ui/BookingCTA";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
import { certifications } from "@/data/certificazioniData";
import { useMobileViewport } from "@/hooks/useMobileViewport";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 351 537 1725",
    href: "tel:+393515371725",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@alsolved.com",
    href: "mailto:info@alsolved.com",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Via Bargoni 78, Roma",
    href: "https://www.google.com/maps/dir//Alsolved,+Via+Angelo+Bargoni,+78,+00153+Roma+RM",
  },
  {
    icon: Clock,
    label: "Orari",
    value: "Lun–Ven · 9:00–18:00",
    href: null,
  },
] as const;

function ContattiPageContent() {
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const { isMobile } = useMobileViewport();
  const certId = searchParams.get("cert") ?? "";
  const selectedCert = certifications.find((cert) => cert.id === certId);

  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />

      <section className="section-shell relative px-4 pb-10 pt-24 sm:px-6 sm:pb-14 md:pt-32">
        <div className="container mx-auto max-w-6xl xl:max-w-7xl">
          <motion.div
            className="mx-auto max-w-4xl text-center xl:max-w-5xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Contatti</p>
            <h1 className="text-balance text-3xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.9rem]">
              Richiedi la tua analisi preliminare dal sito e invia il lead direttamente al CRM.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.15rem]">
              Compila il form qui sotto: raccogliamo contesto, certificazione di interesse e timing, poi inviamo i dati al webhook collegato a HubSpot per il follow-up commerciale.
            </p>
            {selectedCert ? (
              <div className="mx-auto mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="size-4 shrink-0" />
                <span className="truncate">Richiesta guidata per {selectedCert.subtitle} ({selectedCert.title})</span>
              </div>
            ) : null}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20 sm:px-6 md:pb-32">
        <div className="container mx-auto grid max-w-[90rem] grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-[1.12fr_0.88fr] xl:gap-8 2xl:max-w-[96rem] 2xl:gap-10">
          {isMobile ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1 scrollbar-none"
            >
              <a href="tel:+393515371725" className="focus-ring flex min-w-[16rem] shrink-0 snap-start items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Phone className="h-[18px] w-[18px]" /></span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Telefono</span>
                  <span className="block text-sm font-semibold text-foreground">+39 351 537 1725</span>
                </span>
              </a>
              <a href="mailto:info@alsolved.com" className="focus-ring flex min-w-[16rem] shrink-0 snap-start items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Mail className="h-[18px] w-[18px]" /></span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Email</span>
                  <span className="block text-sm font-semibold text-foreground">info@alsolved.com</span>
                </span>
              </a>
            </motion.div>
          ) : null}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
          >
            <BookingCTA />
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12 }}
            className="space-y-4 sm:space-y-6 xl:sticky xl:top-28 xl:self-start"
          >
            <div className="rounded-[1.4rem] border border-white/80 bg-white/80 p-4 shadow-[0_20px_56px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Informazioni di contatto</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {contactInfo.map((info) => {
                  const content = (
                    <>
                      <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <info.icon className="h-[18px] w-[18px]" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{info.label}</span>
                        <span className="block text-sm font-semibold text-foreground">{info.value}</span>
                      </span>
                    </>
                  );

                  if (info.href) {
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="focus-ring flex items-start gap-3 rounded-2xl border border-white/75 bg-white/75 p-4 shadow-sm hover:border-primary/20"
                      >
                        {content}
                        <ArrowUpRight className="ml-auto mt-0.5 size-4 text-muted-foreground" />
                      </a>
                    );
                  }

                  return (
                    <div key={info.label} className="flex items-start gap-3 rounded-2xl border border-white/75 bg-white/75 p-4 shadow-sm">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-white/80 bg-white/80 p-4 shadow-[0_20px_56px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Come lavoriamo</p>
              <ul className="space-y-3 text-sm font-medium leading-relaxed text-muted-foreground">
                <li className="rounded-xl border border-white/70 bg-white/70 p-3"><span className="font-semibold text-foreground">1.</span> Analisi del contesto e degli obiettivi commerciali/compliance.</li>
                <li className="rounded-xl border border-white/70 bg-white/70 p-3"><span className="font-semibold text-foreground">2.</span> Priorità certificazioni + valutazione del livello di readiness attuale.</li>
                <li className="rounded-xl border border-white/70 bg-white/70 p-3"><span className="font-semibold text-foreground">3.</span> Roadmap operativa con tempistiche, deliverable e piano di attivazione.</li>
              </ul>
              <Link href="/metodo" className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-semibold text-foreground hover:text-primary">
                Scopri il metodo ALSOLVED
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContattiPageFallback() {
  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />
      <section className="px-4 pb-24 pt-24 sm:px-6 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.5rem] border border-white/80 bg-white/80 p-5 shadow-[0_22px_64px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
            <p className="text-sm font-semibold text-muted-foreground">Caricamento modulo contatti…</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContattiPage() {
  return (
    <Suspense fallback={<ContattiPageFallback />}>
      <ContattiPageContent />
    </Suspense>
  );
}

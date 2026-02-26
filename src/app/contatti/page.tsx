"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import BookingCTA from "@/components/ui/BookingCTA";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
import { certifications } from "@/data/certificazioniData";
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
  const certId = searchParams.get("cert") ?? "";
  const selectedCert = certifications.find((cert) => cert.id === certId);

  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />

      <section className="section-shell relative px-4 pb-14 pt-28 sm:px-6 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Contatti</p>
            <h1 className="text-balance text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Inizia il tuo percorso verso la certificazione con una roadmap chiara.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Raccontaci il contesto della tua azienda: ti aiutiamo a capire quale certificazione è prioritaria, cosa serve per partire e quanto tempo richiede il percorso.
            </p>
            {selectedCert ? (
              <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="size-4" />
                Richiesta guidata per {selectedCert.subtitle} ({selectedCert.title})
              </div>
            ) : null}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 sm:px-6 md:pb-32">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:gap-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08 }}
          >
            <BookingCTA googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSf_placeholder/viewform" />
          </motion.div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.12 }}
            className="space-y-6"
          >
            <div className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_56px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Informazioni di contatto</p>
              <div className="space-y-3">
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

            <div className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_56px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Come lavoriamo</p>
              <ul className="space-y-3 text-sm font-medium leading-relaxed text-muted-foreground">
                <li className="rounded-xl border border-white/70 bg-white/70 p-3"><span className="font-semibold text-foreground">1.</span> Analisi iniziale del contesto e degli obiettivi.</li>
                <li className="rounded-xl border border-white/70 bg-white/70 p-3"><span className="font-semibold text-foreground">2.</span> Scelta della certificazione più strategica (o combinazione di percorsi).</li>
                <li className="rounded-xl border border-white/70 bg-white/70 p-3"><span className="font-semibold text-foreground">3.</span> Roadmap operativa con tempi, deliverable e priorità del team.</li>
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
      <section className="px-4 pb-24 pt-28 sm:px-6 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_22px_64px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl">
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

"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
import BookingCTA from "@/components/ui/BookingCTA";
import { certifications } from "@/data/certificazioniData";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 331 365 3490",
    href: "tel:+393313653490",
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
    value: "Lun-Ven 9:00-18:00",
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

      <section className="section-shell relative px-4 pb-10 pt-24 sm:px-6 sm:pb-14 md:pt-32">
        <div className="container mx-auto max-w-6xl xl:max-w-7xl">
          <motion.div
            className="mx-auto max-w-4xl text-center xl:max-w-5xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">Contatti</p>
            <h1 className="text-balance text-3xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.8rem]">
              Attiviamo il tuo percorso di certificazione.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.14rem]">
              Parlaci del tuo contesto operativo: ti guidiamo su priorita, tempi e investimenti con un approccio concreto e orientato al risultato.
            </p>
            {selectedCert ? (
              <div className="mx-auto mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="size-4 shrink-0" />
                <span className="truncate">Richiesta guidata per {selectedCert.subtitle} ({selectedCert.title})</span>
              </div>
            ) : null}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-20">
        <div className="container mx-auto grid max-w-[92rem] grid-cols-1 gap-5 xl:grid-cols-[1.06fr_0.94fr] xl:gap-7 2xl:max-w-[96rem]">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-5"
          >
            <div className="rounded-[1.45rem] border border-white/76 bg-white/84 p-4 shadow-[0_22px_62px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-6 xl:rounded-[1.8rem] xl:p-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Contatto diretto</p>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
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
                        className="focus-ring flex items-start gap-3 rounded-2xl border border-white/74 bg-white/84 p-4 shadow-sm hover:border-primary/20"
                      >
                        {content}
                        <ArrowUpRight className="ml-auto mt-0.5 size-4 text-muted-foreground" />
                      </a>
                    );
                  }

                  return (
                    <div key={info.label} className="flex items-start gap-3 rounded-2xl border border-white/74 bg-white/84 p-4 shadow-sm">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.45rem] border border-white/76 bg-white/84 p-4 shadow-[0_22px_62px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-6 xl:rounded-[1.8rem] xl:p-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Come lavoriamo</p>
              <ul className="space-y-3 text-sm font-medium leading-relaxed text-muted-foreground">
                <li className="rounded-xl border border-white/72 bg-white/82 p-3">
                  <span className="font-semibold text-foreground">1.</span> Analisi contesto, obiettivi e priorita di business.
                </li>
                <li className="rounded-xl border border-white/72 bg-white/82 p-3">
                  <span className="font-semibold text-foreground">2.</span> Valutazione readiness e selezione certificazione ideale.
                </li>
                <li className="rounded-xl border border-white/72 bg-white/82 p-3">
                  <span className="font-semibold text-foreground">3.</span> Piano operativo con tempi, deliverable e ownership chiare.
                </li>
              </ul>
              <Link href="/metodo" className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full border border-white/78 bg-white/88 px-4 py-2 text-sm font-semibold text-foreground hover:text-primary">
                Scopri il metodo ALSOLVED
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.aside>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.07 }}
          >
            <BookingCTA />
          </motion.div>
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
          <div className="rounded-[1.5rem] border border-white/76 bg-white/86 p-5 shadow-[0_22px_64px_-34px_rgba(15,23,42,0.28)] sm:rounded-[2rem] sm:p-8">
            <p className="text-sm font-semibold text-muted-foreground">Caricamento modulo contatti...</p>
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

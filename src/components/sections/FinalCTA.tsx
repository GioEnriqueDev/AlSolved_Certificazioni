"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPills = [
  { icon: Sparkles, label: "Analisi gratuita" },
  { icon: Clock, label: "Solo 15 minuti" },
  { icon: Shield, label: "Senza impegno" },
  { icon: Rocket, label: "Roadmap chiara" },
] as const;

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="cta" className="relative z-10 overflow-hidden border-t border-white/55 px-4 py-24 sm:px-6 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(242,78,107,0.08),transparent_48%),radial-gradient(circle_at_14%_65%,rgba(59,130,246,0.06),transparent_36%),radial-gradient(circle_at_90%_60%,rgba(251,146,60,0.07),transparent_38%)]" />
        <div className="absolute left-1/2 top-[20%] h-64 w-[48rem] max-w-[96vw] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <motion.div
        className="container relative mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/82 p-8 text-center shadow-[0_32px_90px_-42px_rgba(15,23,42,0.34)] backdrop-blur-2xl sm:p-10 md:p-14"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] ring-1 ring-white/65" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 -translate-x-1/4 translate-y-1/4 rounded-full bg-orange-300/18 blur-3xl" />

        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">Pronto a iniziare?</p>
          <h2 className="text-balance text-3xl font-black leading-[1.02] text-foreground sm:text-4xl md:text-6xl lg:text-7xl">
            Smetti di perdere opportunità per colpa della compliance.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            In una call breve identifichiamo la certificazione più strategica, il livello di readiness della tua azienda e la roadmap operativa per arrivare all’audit.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contatti" className="focus-ring rounded-full">
              <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
                Prenota Analisi Gratuita
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/certificazioni" className="focus-ring rounded-full">
              <Button variant="outline" size="lg" className="h-14 rounded-full border-white/70 bg-white/70 px-8 text-base font-semibold shadow-sm backdrop-blur-xl hover:bg-white/90">
                Esplora Catalogo
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {trustPills.map((pill) => (
              <span key={pill.label} className="pill-chip bg-white/85 text-muted-foreground">
                <pill.icon className="size-3.5 text-primary" />
                <span>{pill.label}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

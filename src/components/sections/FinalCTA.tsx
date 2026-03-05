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
    <section id="cta" className="relative z-10 overflow-hidden border-t border-white/55 px-4 py-14 sm:px-6 sm:py-20 md:py-32 xl:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(242,78,107,0.08),transparent_48%),radial-gradient(circle_at_14%_65%,rgba(59,130,246,0.06),transparent_36%),radial-gradient(circle_at_90%_60%,rgba(251,146,60,0.07),transparent_38%)]" />
        <div className="absolute left-1/2 top-[20%] h-72 w-[52rem] max-w-[96vw] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 70%)' }} />
      </div>

      <motion.div
        className="container relative mx-auto max-w-5xl rounded-[1.25rem] border border-white/50 bg-white/70 p-5 text-center shadow-[0_22px_60px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8 md:p-14 xl:max-w-[90rem] xl:p-12 2xl:max-w-[96rem] 2xl:p-14"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-white/65 sm:rounded-[2.25rem]" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/4 -translate-y-1/4 rounded-full" style={{ background: 'radial-gradient(circle, rgba(242,78,107,0.12) 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/4 translate-y-1/4 rounded-full" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 xl:grid xl:grid-cols-[1.06fr_0.94fr] xl:items-center xl:gap-10 xl:text-left">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">Pronto a iniziare?</p>
            <h2 className="text-balance text-[1.75rem] font-black leading-[1.02] text-foreground sm:text-4xl md:text-6xl lg:text-7xl xl:max-w-4xl xl:text-[4.2rem] 2xl:text-[4.6rem]">
              Smetti di perdere opportunità per colpa della compliance.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl xl:mx-0 xl:mt-7 xl:max-w-[40rem] xl:text-[1.15rem]">
              In una call breve identifichiamo la certificazione più strategica, il livello di readiness della tua azienda e la roadmap operativa per arrivare all’audit.
            </p>
          </div>

          <div className="mt-7 rounded-[1.25rem] border border-white/80 bg-white/70 p-4 shadow-sm sm:mt-8 sm:p-5 xl:mt-0 xl:rounded-[1.6rem] xl:p-6">
            <div className="flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center xl:flex-col xl:items-stretch xl:justify-start">
              <Link href="/check-up" className="focus-ring w-full rounded-full">
                <Button size="lg" className="h-[52px] w-full rounded-full px-6 text-[15px] font-semibold text-white glow-shadow hover:glow-shadow-strong sm:h-14 sm:px-8 sm:text-base">
                  Fai check-up e prenota call
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="#assets-futuri" className="focus-ring w-full rounded-full">
                <Button variant="outline" size="lg" className="h-[52px] w-full rounded-full border-white/70 bg-white/95 px-6 text-[15px] font-semibold shadow-sm hover:bg-white sm:h-14 sm:px-8 sm:text-base">
                  Scarica Checklist (PDF)
                </Button>
              </Link>
            </div>

            <div className="-mx-1 mt-5 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-1 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 xl:mt-6 xl:justify-start">
              {trustPills.map((pill) => (
                <span key={pill.label} className="pill-chip shrink-0 snap-start whitespace-nowrap bg-white/85 text-muted-foreground">
                  <pill.icon className="size-3.5 text-primary" />
                  <span>{pill.label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

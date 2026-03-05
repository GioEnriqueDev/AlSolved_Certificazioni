"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Rocket, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPills = [
  { icon: Sparkles, label: "Analisi gratuita" },
  { icon: Clock, label: "Call da 15 minuti" },
  { icon: Shield, label: "Nessun impegno" },
  { icon: Rocket, label: "Roadmap operativa" },
] as const;

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="cta" className="relative z-10 overflow-hidden border-t border-white/60 px-4 py-14 sm:px-6 sm:py-20 md:py-32 xl:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(14,165,233,0.12),transparent_44%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.1),transparent_46%),radial-gradient(circle_at_50%_84%,rgba(245,158,11,0.08),transparent_40%)]" />
      </div>

      <motion.div
        className="container relative mx-auto max-w-[92rem] rounded-[1.4rem] border border-white/75 bg-white/78 p-5 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.3)] backdrop-blur-2xl sm:rounded-[2rem] sm:p-8 md:p-12 xl:grid xl:grid-cols-[1.04fr_0.96fr] xl:items-center xl:gap-12 xl:p-12 2xl:max-w-[96rem] 2xl:p-14"
        initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-white/68 sm:rounded-[2.3rem]" />
        <div className="pointer-events-none absolute -right-24 top-[-30%] h-80 w-80 rounded-full border border-white/40 opacity-80 animate-halo" />
        <div className="pointer-events-none absolute -left-24 bottom-[-34%] h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl animate-pulse-glow" />

        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-primary">Pronto ad attivare il percorso?</p>
          <h2 className="text-balance text-[1.75rem] font-black leading-[1.02] text-foreground sm:text-4xl md:text-6xl lg:text-[4.05rem] xl:max-w-4xl xl:text-[4.2rem]">
            Trasforma la compliance in un asset che apre mercato.
          </h2>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl xl:mt-7 xl:max-w-[40rem] xl:text-[1.14rem]">
            In una call breve definiamo certificazione prioritaria, readiness attuale e prossimo sprint operativo per arrivare all&apos;audit in modo strutturato.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 xl:mt-8">
            {[
              "Valutazione priorita settore/cliente",
              "Stima tempi e carico interno",
              "Mappa deliverable e milestone",
              "Indicazione investimento su misura",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl border border-white/72 bg-white/82 p-3 text-sm font-semibold text-foreground/84 shadow-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-7 rounded-[1.2rem] border border-white/80 bg-white/80 p-4 shadow-sm sm:mt-8 sm:p-5 xl:mt-0 xl:rounded-[1.6rem] xl:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <Link href="/check-up" className="focus-ring w-full rounded-full">
              <Button size="lg" className="h-[52px] w-full rounded-full px-6 text-[15px] font-semibold text-white glow-shadow hover:glow-shadow-strong sm:h-14 sm:px-8 sm:text-base">
                Avvia check-up strategico
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/contatti#analysis-form" className="focus-ring w-full rounded-full">
              <Button variant="outline" size="lg" className="h-[52px] w-full rounded-full border-white/76 bg-white/94 px-6 text-[15px] font-semibold shadow-sm hover:bg-white sm:h-14 sm:px-8 sm:text-base">
                Richiedi analisi preliminare
              </Button>
            </Link>
          </div>

          <div className="-mx-1 mt-5 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-1 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 xl:mt-6">
            {trustPills.map((pill, index) => (
              <motion.span
                key={pill.label}
                className="pill-chip shrink-0 snap-start whitespace-nowrap bg-white/86 text-muted-foreground"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.2 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <pill.icon className="size-3.5 text-primary" />
                <span>{pill.label}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

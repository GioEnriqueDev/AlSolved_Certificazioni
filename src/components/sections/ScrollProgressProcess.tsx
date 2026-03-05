"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Search, Settings, Target } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { useMobileViewport } from "@/hooks/useMobileViewport";

const steps = [
  {
    number: "01",
    title: "Gap analysis strategica",
    description:
      "Mappiamo processi, ruoli e documenti per identificare il delta rispetto allo standard selezionato.",
    output: "Roadmap prioritaria e stima effort",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "System design documentale",
    description:
      "Disegniamo policy, procedure e registri sulla tua operativita reale, senza template generici.",
    output: "Set completo audit-ready",
    icon: FileText,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    number: "03",
    title: "Implementazione guidata",
    description:
      "Affianchiamo il team interno per attivare il sistema e consolidare le abitudini operative richieste.",
    output: "Processi attivi e team formato",
    icon: Settings,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    number: "04",
    title: "Audit prep e certificazione",
    description:
      "Prepariamo l'ente, gestiamo richieste ispettive e supportiamo l'azienda fino al rilascio del certificato.",
    output: "Audit gestito end-to-end",
    icon: Target,
    gradient: "from-rose-500 to-red-500",
  },
] as const;

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[1.3rem] border border-white/74 bg-white/82 p-5 shadow-[0_18px_48px_-30px_rgba(15,23,42,0.23)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_62px_-30px_rgba(15,23,42,0.28)] sm:rounded-[1.7rem] sm:p-6 xl:p-7">
      <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} text-white shadow-lg sm:h-12 sm:w-12`}>
          <step.icon className="size-5" />
        </div>
        <span className="rounded-full border border-white/80 bg-white/86 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Step {step.number}
        </span>
      </div>

      <h3 className="text-lg font-black tracking-tight text-foreground sm:text-xl">{step.title}</h3>
      <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground sm:text-[0.95rem]">{step.description}</p>

      <div className="mt-4 rounded-xl border border-white/72 bg-white/82 p-3 text-xs font-semibold text-foreground/82 shadow-sm sm:mt-5 sm:text-sm">
        {step.output}
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:mt-5">
        <span>Milestone successiva</span>
        <ArrowRight className="size-3.5" />
      </div>
    </article>
  );
}

function MobileProcess({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section id="metodo" className="relative overflow-hidden border-y border-white/58 bg-white/56 px-4 py-20 sm:px-6">
      <div className="container mx-auto max-w-[92rem] 2xl:max-w-[96rem]">
        <FadeIn className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Il Metodo</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-foreground">
            Quattro fasi, una sola direzione: arrivare pronti all&apos;audit.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">
            Scorri la timeline orizzontale e vedi output concreti di ogni fase.
          </p>
        </FadeIn>

        <div className="mb-4 flex items-center justify-between gap-3 rounded-full border border-white/74 bg-white/78 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
          <span>Scorri per il processo completo</span>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">4 step</span>
        </div>

        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 scrollbar-none">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="w-[86vw] max-w-[22rem] shrink-0 snap-start"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.14) }}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopProcess({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section id="metodo" className="relative overflow-hidden border-y border-white/58 bg-white/56 px-4 py-24 sm:px-6 md:py-32">
      <div className="container mx-auto max-w-[92rem] 2xl:max-w-[96rem]">
        <FadeIn className="mb-16 text-center md:mb-20 xl:mb-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Metodo ALSOLVED</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-6xl xl:text-[4.05rem]">
            Un framework operativo disegnato per non fermare il business.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.2rem]">
            Mentre il tuo team resta focalizzato su clienti e operations, noi presidiamo progettazione, documentazione e readiness ispettiva.
          </p>
        </FadeIn>

        <div className="mb-14 overflow-hidden rounded-full border border-white/72 bg-white/72 p-1 shadow-sm">
          <div className="h-1.5 rounded-full bg-secondary/80">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-sky-500 to-cyan-500"
              initial={reduceMotion ? false : { width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6 2xl:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-border/80 to-transparent 2xl:block" />
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.06} className="relative">
              <StepCard step={step} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ScrollProgressProcess() {
  const reduceMotion = !!useReducedMotion();
  const { isMobile } = useMobileViewport();

  return isMobile ? <MobileProcess reduceMotion={reduceMotion} /> : <DesktopProcess reduceMotion={reduceMotion} />;
}

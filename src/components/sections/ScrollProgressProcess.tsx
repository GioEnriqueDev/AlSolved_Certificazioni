"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Target, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { useMobileViewport } from "@/hooks/useMobileViewport";

const steps = [
  {
    icon: Users,
    number: "01",
    title: "Gap Analysis strategica",
    description:
      "Mappiamo processi, documenti, ruoli e rischi per capire cosa manca rispetto ai requisiti della norma scelta.",
    detail: "Output: roadmap prioritaria e stima tempi",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Progettazione documentale",
    description:
      "Produciamo manuali, policy e procedure realmente aderenti alla tua operatività, senza template generici da riempire.",
    detail: "Output: set documentale audit-ready",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Implementazione & formazione",
    description:
      "Affianchiamo i referenti interni e trasformiamo la norma in prassi di lavoro, con training mirati e verifiche pratiche.",
    detail: "Output: team allineato e processi attivi",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Target,
    number: "04",
    title: "Audit prep & certificazione",
    description:
      "Prepariamo l'audit, gestiamo le richieste dell'ente e ti supportiamo fino al rilascio del certificato.",
    detail: "Output: audit gestito con supporto end-to-end",
    gradient: "from-rose-500 to-red-500",
  },
] as const;

function ProcessCard({ step, desktop = false }: { step: (typeof steps)[number]; desktop?: boolean }) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-[1.5rem] border border-white/75 bg-white/82 p-5 shadow-[0_18px_44px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-6 ${
        desktop ? "xl:rounded-[1.9rem] xl:p-7" : ""
      }`}
    >
      <div className={`absolute -top-3 left-5 sm:left-6 ${desktop ? "xl:left-7" : ""}`}>
        <span className={`inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} px-2 text-xs font-black text-white shadow-md`}>
          {step.number}
        </span>
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg sm:mb-5 sm:h-12 sm:w-12 ${desktop ? "xl:mb-6 xl:h-14 xl:w-14" : ""}`}>
          <step.icon className="size-5" />
        </div>

        <h3 className={`text-base font-black tracking-tight text-foreground sm:text-lg ${desktop ? "xl:text-[1.12rem]" : ""}`}>{step.title}</h3>
        <p className={`mt-3 text-sm font-medium leading-relaxed text-muted-foreground ${desktop ? "xl:text-[0.96rem]" : ""}`}>{step.description}</p>

        <div className={`mt-4 rounded-xl border border-white/70 bg-white/75 p-3 text-xs font-semibold text-foreground/80 shadow-sm sm:mt-5 ${desktop ? "xl:mt-6 xl:p-4 xl:text-[0.8rem]" : ""}`}>
          {step.detail}
        </div>

        <div className={`mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:mt-5 sm:text-xs ${desktop ? "xl:mt-6" : ""}`}>
          <span>Step successivo</span>
          <ArrowRight className="size-3.5" />
        </div>
      </div>
    </article>
  );
}

function MobileProcess({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section id="metodo" className="relative overflow-hidden border-y border-white/55 bg-white/45 px-4 py-20 backdrop-blur-sm sm:px-6">
      <div className="container mx-auto max-w-[90rem] 2xl:max-w-[96rem]">
        <FadeIn className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Il Nostro Metodo</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-foreground">
            Workflow fluido, pensato per mobile e team operativi.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">
            Scorri i 4 step: ogni fase ha deliverable chiari e supporto continuo fino all’audit.
          </p>
        </FadeIn>

        <div className="mb-4 flex items-center justify-between gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
          <span>Scorri orizzontalmente</span>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">4 step</span>
        </div>

        <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 scrollbar-none">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="w-[85vw] max-w-[22rem] shrink-0 snap-start"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.12) }}
            >
              <ProcessCard step={step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopProcess({ reduceMotion }: { reduceMotion: boolean }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="metodo" className="relative overflow-hidden border-y border-white/55 bg-white/45 px-4 py-24 backdrop-blur-sm sm:px-6 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14 overflow-hidden rounded-full border border-white/70 bg-white/70 p-1 shadow-sm xl:mb-16">
          <div className="h-1.5 rounded-full bg-secondary/80">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-rose-400 to-orange-400"
              style={reduceMotion ? undefined : { width: progressWidth }}
              animate={reduceMotion ? { width: "100%" } : undefined}
            />
          </div>
        </div>

        <FadeIn className="mb-16 text-center md:mb-20 xl:mb-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Il Nostro Metodo</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-6xl xl:text-[4.05rem]">
            Un workflow chiaro, progettato per non fermare il business.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.22rem]">
            Tu mantieni il focus su vendite e operations. Noi gestiamo la complessità normativa, la documentazione e la preparazione all’audit.
          </p>
        </FadeIn>

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6 2xl:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-border/80 to-transparent 2xl:block" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.06} className="relative">
              <ProcessCard step={step} desktop />
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

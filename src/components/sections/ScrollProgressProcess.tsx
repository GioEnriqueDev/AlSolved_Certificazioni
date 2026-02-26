"use client";

import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Target, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

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

export default function ScrollProgressProcess() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="metodo" className="relative overflow-hidden border-y border-white/55 bg-white/45 px-4 py-24 backdrop-blur-sm sm:px-6 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-14 overflow-hidden rounded-full border border-white/70 bg-white/70 p-1 shadow-sm">
          <div className="h-1.5 rounded-full bg-secondary/80">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary via-rose-400 to-orange-400"
              style={reduceMotion ? undefined : { width: progressWidth }}
              animate={reduceMotion ? { width: "100%" } : undefined}
            />
          </div>
        </div>

        <FadeIn className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Il Nostro Metodo</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-6xl">
            Un workflow chiaro, progettato per non fermare il business.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Tu mantieni il focus su vendite e operations. Noi gestiamo la complessità normativa, la documentazione e la preparazione all’audit.
          </p>
        </FadeIn>

        <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-border/80 to-transparent xl:block" />

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.06} className="relative">
              <article className="group relative flex h-full flex-col rounded-[1.75rem] border border-white/75 bg-white/82 p-6 shadow-[0_18px_44px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                <div className="absolute -top-3 left-6">
                  <span className={`inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} px-2 text-xs font-black text-white shadow-md`}>
                    {step.number}
                  </span>
                </div>

                <div className="mt-3 flex flex-1 flex-col">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg`}>
                    <step.icon className="size-5" />
                  </div>

                  <h3 className="text-lg font-black tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{step.description}</p>

                  <div className="mt-5 rounded-xl border border-white/70 bg-white/75 p-3 text-xs font-semibold text-foreground/80 shadow-sm">
                    {step.detail}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    <span>Step successivo</span>
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

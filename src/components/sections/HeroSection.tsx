"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { childFadeVariant, fadeUpVariant, staggerContainer } from "@/lib/animations";
import { SplitText } from "@/components/ui/SplitText";
import CountUp from "@/components/ui/CountUp";
import { useMobileViewport } from "@/hooks/useMobileViewport";

const proofData = [
  { label: "Aziende seguite", value: "50+", numValue: 50, suffix: "+", icon: BadgeCheck },
  { label: "Roadmap iniziale", value: "48h", numValue: 48, suffix: "h", icon: Clock3 },
  { label: "Kick-off operativo", value: "15 min", numValue: 15, suffix: " min", icon: TrendingUp },
] as const;

const executionPillars = [
  { icon: Layers3, title: "Design del sistema", text: "Processi reali, non documenti decorativi." },
  { icon: ShieldCheck, title: "Audit readiness", text: "Preparazione completa fino al giorno dell'ente." },
  { icon: Target, title: "Impatto business", text: "Più credibilità commerciale e meno rischio." },
] as const;

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { isMobile } = useMobileViewport();

  return (
    <section className="section-shell relative flex min-h-[88svh] items-center overflow-hidden px-4 pt-24 sm:min-h-[95svh] sm:px-6 md:pt-32 xl:min-h-[98svh]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-sky-300/20 blur-[78px] sm:h-72 sm:w-72 sm:blur-[94px]" />
        <div className="absolute right-[6%] top-[14%] h-64 w-64 rounded-full bg-blue-400/20 blur-[92px] sm:h-80 sm:w-80 sm:blur-[112px]" />
        <div className="absolute bottom-[8%] left-1/2 h-44 w-[30rem] max-w-[94vw] -translate-x-1/2 rounded-full bg-amber-300/12 blur-[82px] sm:h-52 sm:w-[48rem] sm:blur-[96px]" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-[92rem] grid-cols-1 gap-8 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.07fr)_minmax(0,0.93fr)] lg:items-center xl:gap-14 2xl:max-w-[96rem] 2xl:gap-16 2xl:py-16">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="space-y-6 sm:space-y-8 xl:space-y-9"
        >
          <motion.div variants={childFadeVariant} className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/86 px-3 py-2 shadow-sm backdrop-blur-xl sm:px-4">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="size-3.5" />
            </span>
            <span className="truncate text-[11px] font-bold uppercase tracking-[0.13em] text-foreground/82 sm:text-xs">
              Percorsi ISO e Compliance ad alte prestazioni
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariant}
            className="flex flex-col items-start gap-1 text-balance text-[2.15rem] font-black leading-[0.98] text-foreground sm:gap-2 sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[5.15rem] 2xl:text-[5.85rem]"
          >
            {reduceMotion ? (
              <>
                <span>Certificazioni</span>
                <span>progettate per</span>
                <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent">far crescere</span>
                <span className="bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent">la tua azienda.</span>
              </>
            ) : (
              <>
                <SplitText text="Certificazioni" delay={0.09} />
                <SplitText text="progettate per" delay={0.09} />
                <div className="animate-gradient-shift bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent pb-1">
                  <SplitText text="far crescere" delay={0.09} />
                </div>
                <div className="animate-gradient-shift bg-gradient-to-r from-primary via-sky-500 to-cyan-500 bg-clip-text text-transparent pb-1">
                  <SplitText text="la tua azienda." delay={0.09} />
                </div>
              </>
            )}
          </motion.h1>

          <motion.p variants={childFadeVariant} className="max-w-2xl text-[15px] font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-[42rem] xl:text-[1.24rem]">
            Creiamo sistemi di gestione ISO con un approccio business-first: meno attrito operativo, più credibilità su clienti enterprise, bandi e filiere strategiche.
          </motion.p>

          <motion.div variants={childFadeVariant} className="flex flex-col gap-3 sm:flex-row sm:items-center xl:gap-4">
            <Link href="/check-up" className="focus-ring rounded-full sm:w-auto w-full">
              <Button size="lg" className="h-[52px] w-full rounded-full px-6 text-[15px] font-semibold text-white glow-shadow hover:glow-shadow-strong sm:h-14 sm:w-auto sm:px-8 sm:text-base">
                Fai check-up e prenota call
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/certificazioni" className="focus-ring rounded-full sm:w-auto w-full">
              <Button variant="outline" size="lg" className="h-[52px] w-full rounded-full border-white/78 bg-white/92 px-6 text-[15px] font-semibold shadow-sm hover:bg-white sm:h-14 sm:w-auto sm:px-8 sm:text-base">
                Esplora certificazioni
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={childFadeVariant} className="-mx-1 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-1 pb-1 text-xs font-semibold text-muted-foreground scrollbar-none sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 sm:text-sm">
            <span className="pill-chip shrink-0 snap-start whitespace-nowrap">
              <ShieldCheck className="size-3.5 text-primary" /> Affiancamento fino all&apos;audit
            </span>
            <span className="pill-chip shrink-0 snap-start whitespace-nowrap">
              <Sparkles className="size-3.5 text-primary" /> Documentazione su misura
            </span>
            <span className="pill-chip shrink-0 snap-start whitespace-nowrap">
              <TrendingUp className="size-3.5 text-primary" /> Impatto competitivo immediato
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none xl:max-w-[44rem]"
        >
          <div className="cinematic-panel p-4 sm:p-5 xl:p-6">
            <div className="absolute right-[-20%] top-[-28%] h-72 w-72 rounded-full border border-white/35 opacity-80 animate-halo" />
            <div className="absolute left-[-12%] bottom-[-18%] h-64 w-64 rounded-full bg-cyan-300/16 blur-3xl animate-pulse-glow" />

            <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:gap-5">
              <div className="paper-panel col-span-1 rounded-2xl p-4 sm:col-span-2 sm:p-5 xl:rounded-[1.4rem] xl:p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Compliance Architecture</p>
                <h3 className="text-balance text-xl font-black tracking-tight text-foreground sm:text-[1.65rem]">
                  Dalla gap analysis al certificato con un solo framework operativo.
                </h3>
                <p className="mt-2 text-[13px] font-medium leading-relaxed text-muted-foreground sm:text-sm xl:text-[0.95rem]">
                  Pianifichiamo tempi, documenti, ruoli e priorita per ridurre il carico interno e arrivare all&apos;audit con controllo totale.
                </p>
              </div>

              {(isMobile ? proofData.slice(0, 2) : proofData).map((item, index) => (
                <motion.div
                  key={item.label}
                  className="paper-panel rounded-2xl p-4 sm:p-5 xl:rounded-[1.35rem] xl:p-6"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.32 + index * 0.08 }}
                >
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <p className="text-2xl font-black tracking-tight text-foreground xl:text-[1.9rem]">
                    {reduceMotion ? item.value : <CountUp to={item.numValue} suffix={item.suffix} duration={1.7} delay={0.42 + index * 0.12} />}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">{item.label}</p>
                </motion.div>
              ))}

              <div className="paper-panel col-span-1 rounded-2xl p-4 sm:col-span-2 sm:p-5 xl:rounded-[1.4rem] xl:p-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Execution Principles</p>
                <div className="space-y-2.5">
                  {executionPillars.map((pillar) => (
                    <div key={pillar.title} className="flex items-start gap-3 rounded-xl border border-white/70 bg-white/82 p-3 shadow-sm">
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <pillar.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-sm font-black tracking-tight text-foreground">{pillar.title}</p>
                        <p className="mt-0.5 text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm">{pillar.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

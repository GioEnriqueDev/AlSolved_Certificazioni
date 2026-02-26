"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, Sparkles, TrendingUp, ShieldCheck, ScanSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { childFadeVariant, fadeUpVariant, staggerContainer } from "@/lib/animations";

const stats = [
  { label: "Aziende affiancate", value: "50+", icon: BadgeCheck },
  { label: "Analisi iniziale", value: "15 min", icon: Clock3 },
  { label: "Tempo feedback", value: "48h", icon: TrendingUp },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell relative flex min-h-[94svh] items-center overflow-hidden px-4 pt-28 sm:px-6 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-60 w-60 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-[12%] left-1/2 h-48 w-[38rem] max-w-[92vw] -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="space-y-7"
        >
          <motion.div variants={childFadeVariant} className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <BadgeCheck className="size-3.5" />
            </span>
            <span className="text-xs font-semibold tracking-[0.12em] text-foreground/80 uppercase">
              Compliance design per PMI e aziende strutturate
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpVariant}
            className="text-balance text-4xl font-black leading-[0.98] text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Trasformiamo la conformità in
            <span className="relative mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-400 bg-[length:200%_auto]" style={{ animation: reduceMotion ? "none" : "gradient-shift 7s ease-in-out infinite" }}>
              motore di crescita.
            </span>
          </motion.h1>

          <motion.p variants={childFadeVariant} className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Costruiamo sistemi ISO e compliance che aiutano la tua azienda a vincere gare, ridurre rischio operativo e presentarsi come partner affidabile.
            Niente burocrazia sterile: solo processi utili e audit-ready.
          </motion.p>

          <motion.div variants={childFadeVariant} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contatti" className="focus-ring rounded-full">
              <Button size="lg" className="h-14 rounded-full px-7 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
                Prenota Analisi Gratuita
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/certificazioni" className="focus-ring rounded-full">
              <Button variant="outline" size="lg" className="h-14 rounded-full border-white/70 bg-white/70 px-7 text-base font-semibold shadow-sm backdrop-blur-xl hover:bg-white/90">
                Esplora le Certificazioni
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={childFadeVariant} className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground sm:text-sm">
            <span className="pill-chip"><Sparkles className="size-3.5 text-primary" /> Consulenza iniziale gratuita</span>
            <span className="pill-chip"><ShieldCheck className="size-3.5 text-primary" /> Affiancamento fino all’audit</span>
            <span className="pill-chip"><ScanSearch className="size-3.5 text-primary" /> Roadmap chiara in 48h</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(242,78,107,0.14),transparent_55%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,0.12),transparent_48%)]" />

            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="paper-panel rounded-2xl p-5 sm:col-span-2">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Compliance Command Center</p>
                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-foreground">Roadmap di certificazione su misura</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">
                      Analisi gap, documentazione, implementazione e audit in un flusso unico, con milestone condivise e carico operativo ridotto per il tuo team.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                      <span>Stato progetto tipo</span>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">On track</span>
                    </div>
                    <div className="space-y-2">
                      {[78, 56, 92].map((value, index) => (
                        <div key={index}>
                          <div className="mb-1 flex justify-between text-[11px] font-semibold text-muted-foreground">
                            <span>{["Analisi", "Documenti", "Audit Prep"][index]}</span>
                            <span>{value}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-secondary">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400"
                              initial={reduceMotion ? false : { width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.3 + index * 0.08 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="paper-panel rounded-2xl p-5"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.35 + index * 0.08 }}
                >
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <stat.icon className="size-5" />
                  </div>
                  <p className="text-2xl font-black tracking-tight text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}

              <div className="paper-panel rounded-2xl p-5 sm:col-span-2">
                <div className="mb-3 flex flex-wrap gap-2">
                  {[
                    "ISO 9001",
                    "ISO 27001",
                    "ISO 14001",
                    "ISO 45001",
                    "UNI/PdR 125",
                    "ISO 37001",
                  ].map((item) => (
                    <span key={item} className="pill-chip bg-white/90">{item}</span>
                  ))}
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  Approccio progettato per management e operation: obiettivi chiari, timeline realistiche, documentazione pronta per enti certificatori e bandi.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

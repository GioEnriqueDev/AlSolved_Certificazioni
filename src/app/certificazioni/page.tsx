"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import StaticBackground from "@/components/sections/StaticBackground";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certificazioniData";

const palette = [
  { gradient: "from-amber-400 to-orange-500", soft: "bg-amber-50 text-amber-700 border-amber-200", glow: "rgba(245,158,11,0.15)" },
  { gradient: "from-blue-500 to-indigo-600", soft: "bg-blue-50 text-blue-700 border-blue-200", glow: "rgba(59,130,246,0.15)" },
  { gradient: "from-emerald-500 to-green-600", soft: "bg-emerald-50 text-emerald-700 border-emerald-200", glow: "rgba(16,185,129,0.15)" },
  { gradient: "from-rose-500 to-red-500", soft: "bg-rose-50 text-rose-700 border-rose-200", glow: "rgba(244,63,94,0.15)" },
  { gradient: "from-fuchsia-500 to-pink-500", soft: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200", glow: "rgba(217,70,239,0.15)" },
  { gradient: "from-cyan-500 to-sky-600", soft: "bg-cyan-50 text-cyan-700 border-cyan-200", glow: "rgba(6,182,212,0.15)" },
] as const;

function getPalette(index: number) {
  return palette[index % palette.length];
}

export default function CertificazioniPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />

      <section className="section-shell relative px-4 pb-14 pt-28 sm:px-6 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mx-auto max-w-5xl text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
              <ShieldCheck className="size-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Catalogo certificazioni</span>
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Ogni certificazione è una leva di crescita.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Scegli il percorso più strategico per la tua azienda. Ogni progetto include analisi iniziale, documentazione, implementazione, formazione e affiancamento fino all’audit.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="pill-chip bg-white/85"><Sparkles className="size-3.5 text-primary" /> 13+ percorsi disponibili</span>
              <span className="pill-chip bg-white/85"><Clock className="size-3.5 text-primary" /> Timeline da 6 a 24 settimane</span>
              <span className="pill-chip bg-white/85"><TrendingUp className="size-3.5 text-primary" /> Focus su valore competitivo</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => {
              const color = getPalette(index);
              return (
                <motion.div
                  key={cert.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-6%" }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.05 }}
                >
                  <Link href={`/certificazioni/${cert.id}`} className="group focus-ring block rounded-[1.75rem]">
                    <article className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_22px_60px_-38px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white hover:shadow-[0_28px_80px_-36px_rgba(15,23,42,0.32)]">
                      <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundColor: color.glow }} />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${color.gradient} text-white shadow-lg`}>
                            <cert.icon className="size-5" />
                          </div>
                          <span className="rounded-full border border-white/80 bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                            {cert.timeline.replace("Da ", "")}
                          </span>
                        </div>

                        <div className="mb-4">
                          <p className={`text-sm font-bold bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent`}>{cert.title}</p>
                          <h2 className="mt-1 text-2xl font-black tracking-tight text-foreground">{cert.subtitle}</h2>
                        </div>

                        <p className="text-sm font-medium leading-relaxed text-muted-foreground">{cert.description}</p>

                        <div className="mt-5 space-y-2">
                          {cert.benefits.slice(0, 2).map((benefit) => (
                            <div key={benefit} className="flex items-start gap-2 rounded-xl border border-white/70 bg-white/70 p-2.5 shadow-sm">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                              <span className="text-xs font-semibold leading-relaxed text-foreground/85">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/40 pt-4">
                          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${color.soft}`}>
                            {cert.deliverables.length}+ deliverable
                          </span>
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                            Scopri dettagli
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 sm:px-6 md:pb-32">
        <div className="container mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/82 p-8 text-center shadow-[0_26px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Non sai da dove partire?</p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ti aiutiamo a scegliere la certificazione più strategica.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            In una call di analisi iniziale valutiamo settore, clienti, obiettivi e requisiti per costruire una roadmap concreta e sostenibile per il tuo team.
          </p>
          <Link href="/contatti" className="focus-ring mt-8 inline-flex rounded-full">
            <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
              Prenota analisi gratuita
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

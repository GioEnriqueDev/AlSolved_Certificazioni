"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Search, FileText, Settings, Award, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    month: "Mese 1",
    title: "Gap Analysis & check-up iniziale",
    description:
      "Fotografiamo la situazione attuale della tua azienda, mappiamo i processi già esistenti e identifichiamo lo scarto rispetto ai requisiti della norma selezionata.",
    icon: Search,
    color: "from-orange-400 to-amber-500",
  },
  {
    month: "Mese 1–2",
    title: "Progettazione della documentazione operativa",
    description:
      "Scriviamo manuali, procedure, policy e valutazioni necessarie sulla base del tuo modo di lavorare, non su template standardizzati.",
    icon: FileText,
    color: "from-primary to-rose-500",
  },
  {
    month: "Mese 2–3",
    title: "Implementazione & audit interno",
    description:
      "Affianchiamo i referenti nell'applicazione pratica delle procedure, formiamo il team e simuliamo l'audit per correggere eventuali non conformità.",
    icon: Settings,
    color: "from-blue-500 to-indigo-600",
  },
  {
    month: "Mese 3+",
    title: "Audit ente terzo & certificazione",
    description:
      "Ti supportiamo durante l'audit ufficiale dell'ente certificatore, gestendo richieste documentali e chiarimenti fino al rilascio del certificato.",
    icon: Award,
    color: "from-emerald-500 to-green-600",
  },
] as const;

const workloadRows = [
  {
    you: "Un referente interno per raccogliere documenti base (visure, contratti, organigramma).",
    us: "Check-up preliminare completo del modello organizzativo e definizione roadmap compliance.",
  },
  {
    you: "Disponibilità a condividere processi, strumenti e prassi operative reali.",
    us: "Scrittura integrale della documentazione richiesta, pronta per essere adottata e auditata.",
  },
  {
    you: "2–4 ore al mese per interviste, validazioni e approvazioni.",
    us: "Revisione tecnica e legale, implementazione guidata e simulazione audit interno.",
  },
  {
    you: "Presenza operativa durante l'audit dell'ente terzo.",
    us: "Affiancamento attivo e gestione delle richieste ispettive durante l'audit ufficiale.",
  },
] as const;

export default function MetodoPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />

      <section className="section-shell relative px-4 pb-14 pt-28 sm:px-6 md:pt-32">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
              <ShieldCheck className="size-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Processo ALSOLVED</span>
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Zero sorprese. Massima chiarezza operativa.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Abbiamo ingegnerizzato un metodo a fasi per ridurre il carico interno, accelerare la preparazione documentale e arrivare all’audit con un sistema davvero funzionante.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
                className="relative rounded-[1.85rem] border border-white/80 bg-white/80 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl md:p-7"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                    <step.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">{step.month}</p>
                    <h2 className="mt-1 text-xl font-black tracking-tight text-foreground sm:text-2xl">{step.title}</h2>
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24">
        <div className="container mx-auto max-w-7xl rounded-[2rem] border border-white/80 bg-white/82 p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-8">
          <div className="mb-6 text-center md:mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Distribuzione del carico</p>
            <h2 className="text-balance text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Noi facciamo il lavoro pesante. Tu mantieni il focus sul business.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Il metodo è progettato per ridurre il tempo interno richiesto e accelerare la fase documentale e di audit preparation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/80 bg-white/80 shadow-sm">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/2 border-b border-border/50 bg-white/90 p-4 text-sm font-black uppercase tracking-[0.12em] text-muted-foreground md:w-[42%]">
                    Cosa ci serve da voi
                  </th>
                  <th className="border-b border-l border-border/50 bg-primary/8 p-4 text-sm font-black uppercase tracking-[0.12em] text-primary">
                    Cosa facciamo noi (ALSOLVED)
                  </th>
                </tr>
              </thead>
              <tbody>
                {workloadRows.map((row, index) => (
                  <tr key={index}>
                    <td className="border-b border-border/40 p-4 align-top text-sm font-medium leading-relaxed text-muted-foreground">{row.you}</td>
                    <td className="border-b border-l border-border/40 bg-primary/5 p-4 align-top text-sm font-semibold leading-relaxed text-foreground">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              "Timeline realistica, non promesse aggressive",
              "Documentazione scritta sulla tua operatività",
              "Affiancamento fino all'audit ufficiale",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/75 p-3 text-sm font-semibold text-foreground">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="size-3.5" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 sm:px-6 md:pb-32">
        <div className="container mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/82 p-8 text-center shadow-[0_26px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-12">
          <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Vuoi certificarti senza bloccare l’azienda?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            Parliamo 15 minuti e ti diamo una valutazione chiara sui prossimi passi, sul livello di readiness e sulla certificazione più strategica per la tua azienda.
          </p>
          <Link href="/contatti" className="focus-ring mt-8 inline-flex rounded-full">
            <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
              Prenota una call
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, CheckCircle2, FileText, Search, Settings, ShieldCheck } from "lucide-react";

const steps = [
  {
    month: "Fase 01",
    title: "Gap analysis e check-up iniziale",
    description:
      "Fotografiamo stato attuale, processi e requisiti mancanti rispetto alla norma target con un assessment puntuale.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    month: "Fase 02",
    title: "Progettazione documentale su misura",
    description:
      "Costruiamo manuali, policy e procedure aderenti al tuo modo di lavorare, evitando template generici.",
    icon: FileText,
    color: "from-amber-500 to-orange-500",
  },
  {
    month: "Fase 03",
    title: "Implementazione e training operativo",
    description:
      "Affianchiamo referenti interni e team per attivare il sistema in modo sostenibile e realmente adottato.",
    icon: Settings,
    color: "from-emerald-500 to-green-600",
  },
  {
    month: "Fase 04",
    title: "Audit prep e certificazione",
    description:
      "Supportiamo l'azienda durante audit interno ed ente terzo fino al rilascio del certificato ufficiale.",
    icon: Award,
    color: "from-rose-500 to-red-500",
  },
] as const;

const workloadRows = [
  {
    you: "Un referente interno per allineare documenti base e conferme operative.",
    us: "Assessment completo, priorita e roadmap compliance condivisa.",
  },
  {
    you: "Condivisione delle pratiche operative reali in uso oggi.",
    us: "Produzione end-to-end della documentazione richiesta dalla norma.",
  },
  {
    you: "2-4 ore al mese per revisioni, interviste e approvazioni chiave.",
    us: "Implementazione guidata, formazione e simulazione audit interno.",
  },
  {
    you: "Presenza operativa del team durante audit ente terzo.",
    us: "Affiancamento continuo e gestione delle richieste ispettive.",
  },
] as const;

export default function MetodoPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />

      <section className="section-shell relative px-4 pb-14 pt-28 sm:px-6 md:pt-32 xl:pb-16">
        <div className="container mx-auto max-w-5xl text-center xl:max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/84 px-4 py-2 shadow-sm backdrop-blur-xl">
              <ShieldCheck className="size-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Metodo ALSOLVED</span>
            </div>
            <h1 className="text-balance text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.8rem]">
              Workflow rigoroso. Esecuzione pragmatica.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.16rem]">
              Un metodo a fasi progettato per ridurre carico interno, accelerare la readiness documentale e arrivare all&apos;audit con controllo completo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24 xl:pb-28">
        <div className="container mx-auto max-w-[92rem] 2xl:max-w-[96rem]">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6 2xl:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
                className="relative rounded-[1.85rem] border border-white/80 bg-white/82 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl md:p-7 xl:rounded-[2rem] xl:p-8"
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

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24 xl:pb-28">
        <div className="container mx-auto max-w-[92rem] rounded-[2rem] border border-white/80 bg-white/84 p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-8 xl:rounded-[2.2rem] xl:p-10 2xl:max-w-[96rem]">
          <div className="mb-6 text-center md:mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Distribuzione del carico</p>
            <h2 className="text-balance text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Noi eseguiamo il lavoro tecnico. Tu resti focalizzato sul business.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Ogni sprint del metodo e disegnato per mantenere basso l&apos;effort interno e alta la qualita esecutiva.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/80 bg-white/84 shadow-sm">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/2 border-b border-border/50 bg-white/92 p-4 text-sm font-black uppercase tracking-[0.12em] text-muted-foreground md:w-[42%]">
                    Cosa ci serve da voi
                  </th>
                  <th className="border-b border-l border-border/50 bg-primary/8 p-4 text-sm font-black uppercase tracking-[0.12em] text-primary">
                    Cosa facciamo noi
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
              "Timeline realistica e milestone condivise",
              "Documentazione calibrata sui processi aziendali",
              "Supporto continuo fino ad audit ufficiale",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/82 p-3 text-sm font-semibold text-foreground">
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
        <div className="container mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/84 p-8 text-center shadow-[0_26px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-12 xl:max-w-6xl xl:p-14">
          <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl xl:text-[3.3rem]">
            Vuoi certificarti senza rallentare l&apos;azienda?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            In 15 minuti definiamo readiness, priorita e prossime mosse operative per partire subito con la giusta intensita.
          </p>
          <Link href="/contatti#analysis-form" className="focus-ring mt-8 inline-flex rounded-full">
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

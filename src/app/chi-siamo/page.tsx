"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
import { Button } from "@/components/ui/button";
import NeonLogo from "@/components/ui/NeonLogo";
import { ArrowRight, Award, BriefcaseBusiness, Goal, Scale, ShieldCheck, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Garanzia di risultato",
    description: "Ti accompagniamo fino all'ottenimento del certificato con supporto operativo e audit prep.",
  },
  {
    icon: Zap,
    title: "Velocita di esecuzione",
    description: "Sprint chiari e timeline realistiche per non bloccare l'operativita quotidiana.",
  },
  {
    icon: Scale,
    title: "Compliance legale",
    description: "Riduzione del rischio sanzionatorio con sistemi tracciabili e difendibili.",
  },
  {
    icon: Award,
    title: "Valore competitivo",
    description: "Maggior credibilita verso clienti enterprise, PA e partner di filiera.",
  },
] as const;

const principles = [
  {
    icon: BriefcaseBusiness,
    title: "Business-first",
    text: "Ogni deliverable deve migliorare il business, non solo superare una checklist.",
  },
  {
    icon: Goal,
    title: "Execution over theory",
    text: "Meno riunioni, piu produzione concreta di sistema e documentazione utile.",
  },
  {
    icon: Users,
    title: "Affiancamento reale",
    text: "Restiamo al fianco del team fino all'audit e alle prime sorveglianze.",
  },
] as const;

export default function ChiSiamoPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen text-foreground">
      <StaticBackground />

      <section className="section-shell relative px-4 pb-16 pt-28 sm:px-6 md:pt-32 xl:pb-20">
        <div className="container mx-auto max-w-6xl xl:max-w-7xl">
          <motion.div
            className="mx-auto max-w-4xl text-center xl:max-w-5xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">Chi siamo</p>
            <h1 className="text-balance text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.8rem]">
              Trasformiamo la conformita in leva strategica.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.15rem]">
              ALSOLVED e il partner tecnico per certificazioni ISO e governance compliance. Progettiamo sistemi utili, auditabili e orientati alla crescita.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24 xl:pb-28">
        <div className="container mx-auto grid max-w-[92rem] grid-cols-1 gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:gap-8 2xl:max-w-[96rem]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/80 bg-white/82 p-6 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-xl md:p-8 xl:rounded-[2.15rem] xl:p-9"
          >
            <div className="mb-6 inline-flex rounded-2xl border border-white/80 bg-white/86 p-3 shadow-sm">
              <NeonLogo size="sm" />
            </div>
            <h2 className="text-balance text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Il partner tecnico per certificazioni ISO, audit e compliance operativa.
            </h2>
            <div className="mt-6 space-y-4 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Lavoriamo per liberare le PMI dalla complessita normativa e trasformare la certificazione in vantaggio competitivo misurabile.
              </p>
              <p>
                Analizziamo il modello operativo, disegniamo la documentazione su misura e guidiamo il team fino all&apos;audit, senza burocrazia sterile.
              </p>
              <p>
                Che si tratti di qualita, cyber, sostenibilita o sicurezza sul lavoro, il focus resta sempre l&apos;esecuzione concreta.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 xl:mt-10">
              {[
                { label: "Approccio", value: "Pragmatico" },
                { label: "Supporto", value: "End-to-end" },
                { label: "Obiettivo", value: "Audit-ready" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/80 bg-white/84 p-4 text-center shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-lg font-black tracking-tight text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-5">
            {benefits.map((item, index) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
                className="rounded-[1.5rem] border border-white/80 bg-white/82 p-5 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.24)] backdrop-blur-xl xl:rounded-[1.75rem] xl:p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-16 sm:px-6 md:pb-24 xl:pb-28">
        <div className="container mx-auto max-w-[92rem] rounded-[2rem] border border-white/78 bg-white/78 p-6 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl md:p-8 xl:rounded-[2.2rem] xl:p-10 2xl:max-w-[96rem]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start xl:gap-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">Filosofia operativa</p>
              <h2 className="text-balance text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                La certificazione non e un fine: e la prova che l&apos;azienda funziona meglio.
              </h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                Miglioriamo governance, accountability e qualita esecutiva. Il certificato arriva come conseguenza naturale di un sistema ben progettato.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:gap-5">
              {principles.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/80 bg-white/84 p-4 shadow-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-24 sm:px-6 md:pb-32">
        <div className="container mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/84 p-8 text-center shadow-[0_26px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-12 xl:max-w-6xl xl:p-14">
          <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl xl:text-[3.3rem]">
            Vuoi capire quali certificazioni hanno piu impatto sul tuo business?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            Analizziamo gratuitamente il tuo scenario e definiamo le priorita migliori per settore, clienti e obiettivi di crescita.
          </p>
          <Link href="/contatti#analysis-form" className="focus-ring mt-8 inline-flex rounded-full">
            <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
              Richiedi analisi preliminare
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

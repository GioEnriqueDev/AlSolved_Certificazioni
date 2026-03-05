"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Leaf, Settings2, HeartHandshake } from "lucide-react";

const macroAreas = [
  {
    id: "qualita",
    title: "Qualità & Operational Excellence",
    subtitle: "Standard che aumentano affidabilità e punteggio tecnico.",
    description:
      "Sistemi di gestione per rendere i processi ripetibili, auditabili e credibili verso clienti enterprise e committenze pubbliche.",
    icon: Settings2,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.18)",
    chips: ["ISO 9001", "IATF 16949", "AS9100", "ISO 13485", "ISO 22000"],
    links: ["iso-9001", "iatf-16949", "as-9100", "iso-13485", "iso-22000"],
    payoff: "Riduci sprechi, aumenta controllo, entra in filiere ad alta selettività.",
  },
  {
    id: "cyber",
    title: "Cyber Security & IT Governance",
    subtitle: "Difesa del dato, continuità operativa, fiducia di mercato.",
    description:
      "Percorsi pensati per software house, MSP e aziende esposte a GDPR, NIS2 e richieste enterprise su sicurezza e SLA.",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.2)",
    chips: ["ISO 27001", "ISO 20000-1"],
    links: ["iso-27001", "iso-20000"],
    payoff: "Trasforma la compliance in vantaggio competitivo commerciale e legale.",
  },
  {
    id: "esg",
    title: "ESG, Ambiente & Energia",
    subtitle: "Performance ambientale che dialoga con banche e bandi.",
    description:
      "Framework per migliorare rating ESG, gestire impatti ambientali e costruire efficienza energetica misurabile.",
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
    glow: "rgba(16,185,129,0.2)",
    chips: ["ISO 14001", "ISO 50001"],
    links: ["iso-14001", "iso-50001"],
    payoff: "Compliance ambientale + risparmio operativo + posizionamento sostenibile.",
  },
  {
    id: "people",
    title: "Sicurezza, Etica & Governance",
    subtitle: "Riduci rischio umano, reputazionale e ispettivo.",
    description:
      "Percorsi per salute e sicurezza, parità di genere, responsabilità sociale e prevenzione della corruzione.",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-red-500",
    glow: "rgba(244,63,94,0.2)",
    chips: ["ISO 45001", "SA8000", "UNI/PdR 125", "ISO 37001"],
    links: ["iso-45001", "sa-8000", "pdr-125", "iso-37001"],
    payoff: "Meno rischio sanzionatorio, più attrattività verso talenti e committenti.",
  },
] as const;

export default function CinematicMacroAreas() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="aree-intervento" className="section-shell relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-32 xl:py-36">
      <div className="container mx-auto max-w-[90rem] 2xl:max-w-[96rem]">
        <motion.div
          className="mx-auto mb-8 max-w-4xl text-center sm:mb-16 md:mb-20 xl:mb-24 xl:max-w-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Aree di Intervento</p>
          <h2 className="text-balance text-[1.65rem] font-black leading-tight text-foreground sm:text-4xl md:text-6xl xl:text-[4.15rem]">
            Un catalogo progettato come una piattaforma di crescita.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.25rem]">
            Ogni area combina certificazioni, compliance e supporto operativo. L’obiettivo non è solo “ottenere il certificato”, ma migliorare processi, margine e posizionamento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:gap-6">
          {macroAreas.map((area, index) => (
            <motion.article
              key={area.id}
              className="group relative overflow-hidden rounded-[1.15rem] border border-white/70 bg-white/95 p-4 shadow-[0_14px_36px_-26px_rgba(15,23,42,0.22)] sm:rounded-[1.75rem] sm:p-6 md:p-8 xl:min-h-[31rem] xl:rounded-[2.15rem] xl:p-9"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full opacity-70 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle, ${area.glow} 0%, transparent 70%)` }} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4 xl:mb-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}>
                    <area.icon className="size-5" />
                  </div>
                  <span className="rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Area {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-black tracking-tight text-foreground sm:text-2xl md:text-[1.7rem] xl:text-[1.9rem]">{area.title}</h3>
                <p className={`mt-2 text-sm font-bold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent xl:text-[0.95rem]`}>{area.subtitle}</p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground md:text-base xl:text-[1.02rem]">{area.description}</p>

                <div className="mt-4 rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm sm:rounded-2xl sm:p-4 xl:mt-6 xl:p-5">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Valore strategico</p>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/85 xl:text-[0.95rem]">{area.payoff}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 xl:mt-6 xl:gap-2.5">
                  {area.chips.map((chip, chipIndex) => (
                    <Link key={chip} href={`/certificazioni/${area.links[chipIndex]}`} className="focus-ring rounded-xl">
                      <span className="inline-flex items-center rounded-xl border border-white/80 bg-white/85 px-3 py-1.5 text-xs font-bold text-foreground shadow-sm hover:border-primary/20 hover:bg-white">
                        {chip}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/40 pt-3 sm:mt-6 sm:pt-4 xl:mt-7 xl:pt-5">
                  <Link href="/certificazioni" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-foreground hover:text-primary xl:text-[0.95rem]">
                    Vedi catalogo completo
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link href={`/certificazioni/${area.links[0]}`} className="focus-ring rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground xl:px-3.5 xl:py-2">
                    Inizia da {area.chips[0]}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

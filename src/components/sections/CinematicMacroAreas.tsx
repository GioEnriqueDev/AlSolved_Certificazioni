"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HeartHandshake, Leaf, Settings2, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const macroAreas = [
  {
    id: "qualita",
    title: "Qualita e Operational Excellence",
    subtitle: "Sistemi certificati che migliorano performance e affidabilita.",
    icon: Settings2,
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.18)",
    chips: ["ISO 9001", "IATF 16949", "AS9100", "ISO 13485", "ISO 22000"],
    links: ["iso-9001", "iatf-16949", "as-9100", "iso-13485", "iso-22000"],
    payoff: "Riduci errori, aumenta controllo, apri accessi a filiere premium.",
  },
  {
    id: "cyber",
    title: "Cyber Security e IT Governance",
    subtitle: "Protezione dati, continuita operativa e fiducia enterprise.",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.2)",
    chips: ["ISO 27001", "ISO 20000-1"],
    links: ["iso-27001", "iso-20000"],
    payoff: "Conformita robusta su GDPR e NIS2, con posizionamento competitivo.",
  },
  {
    id: "esg",
    title: "ESG, Ambiente e Energia",
    subtitle: "Framework per efficienza, rating ESG e finanza sostenibile.",
    icon: Leaf,
    gradient: "from-emerald-500 to-green-600",
    glow: "rgba(16,185,129,0.2)",
    chips: ["ISO 14001", "ISO 50001"],
    links: ["iso-14001", "iso-50001"],
    payoff: "Taglia sprechi energetici e rafforza il profilo ESG aziendale.",
  },
  {
    id: "people",
    title: "Sicurezza, Etica e Governance",
    subtitle: "Riduzione del rischio umano, legale e reputazionale.",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-red-500",
    glow: "rgba(244,63,94,0.2)",
    chips: ["ISO 45001", "SA8000", "UNI/PdR 125", "ISO 37001"],
    links: ["iso-45001", "sa-8000", "pdr-125", "iso-37001"],
    payoff: "Meno esposizione sanzionatoria, piu valore verso stakeholder e talenti.",
  },
] as const;

export default function CinematicMacroAreas() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="aree-intervento" className="section-shell relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-32 xl:py-36">
      <div className="container mx-auto max-w-[92rem] 2xl:max-w-[96rem]">
        <motion.div
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-16 md:mb-20 xl:max-w-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Certification Design Map</p>
          <h2 className="text-balance text-[1.7rem] font-black leading-tight text-foreground sm:text-4xl md:text-6xl xl:text-[4.05rem]">
            Ogni area e un ecosistema di crescita, non un singolo certificato.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-4xl xl:text-[1.2rem]">
            Costruiamo percorsi integrati tra governance, compliance e operations per trasformare la conformita in vantaggio competitivo reale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:gap-6">
          {macroAreas.map((area, index) => (
            <motion.article
              key={area.id}
              className="group relative overflow-hidden rounded-[1.4rem] border border-white/72 bg-white/78 p-5 shadow-[0_20px_54px_-34px_rgba(15,23,42,0.24)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-34px_rgba(15,23,42,0.3)] sm:rounded-[1.9rem] sm:p-6 xl:min-h-[31rem] xl:rounded-[2.1rem] xl:p-8"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.62, delay: reduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full opacity-70 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(circle, ${area.glow} 0%, transparent 70%)` }} />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.28),transparent_52%)]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4 xl:mb-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}>
                    <area.icon className="size-5" />
                  </div>
                  <span className="rounded-full border border-white/72 bg-white/86 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Area {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-balance text-xl font-black tracking-tight text-foreground sm:text-2xl md:text-[1.8rem]">{area.title}</h3>
                <p className={`mt-2 bg-gradient-to-r ${area.gradient} bg-clip-text text-sm font-bold text-transparent xl:text-[0.98rem]`}>{area.subtitle}</p>

                <div className="mt-5 rounded-xl border border-white/74 bg-white/80 p-4 shadow-sm sm:rounded-2xl xl:mt-6 xl:p-5">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Valore Strategico</p>
                  <p className="text-sm font-semibold leading-relaxed text-foreground/86 xl:text-[0.96rem]">{area.payoff}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 xl:mt-6 xl:gap-2.5">
                  {area.chips.map((chip, chipIndex) => (
                    <Link key={chip} href={`/certificazioni/${area.links[chipIndex]}`} className="focus-ring rounded-xl">
                      <span className="inline-flex min-h-[40px] items-center rounded-xl border border-white/72 bg-white/85 px-3.5 py-1.5 text-xs font-bold text-foreground shadow-sm hover:border-primary/20 hover:bg-white">
                        {chip}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/40 pt-4 sm:pt-5">
                  <Link href="/certificazioni" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-foreground hover:text-primary">
                    Vedi catalogo completo
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link href={`/certificazioni/${area.links[0]}`} className="focus-ring rounded-full border border-white/80 bg-white/84 px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
                    Inizia da {area.chips[0]}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <FadeIn className="mt-10 sm:mt-14">
          <div className="rounded-[1.6rem] border border-white/74 bg-white/74 p-5 text-center shadow-[0_24px_70px_-38px_rgba(15,23,42,0.27)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8 xl:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Strategic Routing</p>
            <h3 className="mx-auto mt-3 max-w-3xl text-balance text-2xl font-black tracking-tight text-foreground sm:text-4xl">
              Ti aiutiamo a scegliere il percorso a maggiore impatto in base a obiettivi, settore e maturita interna.
            </h3>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/check-up" className="focus-ring rounded-full">
                <span className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-[0_16px_34px_-20px_rgba(var(--glow-primary),0.7)]">
                  Avvia check-up strategico
                </span>
              </Link>
              <Link href="/metodo" className="focus-ring rounded-full">
                <span className="inline-flex h-12 items-center justify-center rounded-full border border-white/78 bg-white/88 px-6 text-sm font-semibold text-foreground">
                  Scopri il metodo completo
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

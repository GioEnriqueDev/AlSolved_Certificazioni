"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Leaf,
  HardHat,
  Heart,
  Scale,
  Wifi,
  Car,
  type LucideIcon,
} from "lucide-react";
import { useMobileViewport } from "@/hooks/useMobileViewport";

const logos: Array<{ name: string; label: string; icon: LucideIcon; color: string }> = [
  { name: "ISO 9001", label: "Qualità", icon: ShieldCheck, color: "text-amber-600" },
  { name: "ISO 27001", label: "Cybersecurity", icon: Lock, color: "text-blue-600" },
  { name: "ISO 14001", label: "Ambiente", icon: Leaf, color: "text-emerald-600" },
  { name: "ISO 45001", label: "Sicurezza", icon: HardHat, color: "text-orange-600" },
  { name: "UNI/PdR 125", label: "Parità di genere", icon: Heart, color: "text-rose-500" },
  { name: "GDPR", label: "Compliance DPO", icon: Scale, color: "text-indigo-600" },
  { name: "NIS2", label: "Direttiva EU", icon: Wifi, color: "text-violet-600" },
  { name: "IATF 16949", label: "Automotive", icon: Car, color: "text-slate-600" },
];

function LogoPill({ name, label, icon: Icon, color }: { name: string; label: string; icon: LucideIcon; color: string }) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-5 py-3 shadow-[0_12px_28px_-22px_rgba(15,23,42,0.24)] xl:gap-3.5 xl:px-6 xl:py-3.5">
      <div className={`flex size-10 items-center justify-center rounded-xl border border-white/70 bg-white/85 ${color} xl:size-11`}>
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-foreground xl:text-[0.95rem]">{name}</span>
        <span className="text-[11px] font-semibold text-muted-foreground xl:text-xs">{label}</span>
      </div>
    </div>
  );
}

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();
  const { isMobile } = useMobileViewport();

  return (
    <section className="relative z-10 w-full overflow-hidden border-y border-white/50 bg-white/60 py-12 sm:py-14 xl:py-16">
      <div className="container mx-auto mb-7 max-w-5xl px-4 text-center sm:mb-8 sm:px-6 xl:mb-10 xl:max-w-6xl">
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Standard & Framework
        </motion.p>
        <motion.h3
          className="text-balance text-lg font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl xl:text-[2.15rem]"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          Certificazioni riconosciute a livello globale, implementate in modo pragmatico
        </motion.h3>
      </div>

      {isMobile ? (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent" />
          <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 scrollbar-none">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : Math.min(index * 0.03, 0.12) }}
                className="snap-start"
              >
                <LogoPill name={logo.name} label={logo.label} icon={logo.icon} color={logo.color} />
              </motion.div>
            ))}
          </div>
        </div>
      ) : reduceMotion ? (
        <div className="container mx-auto grid max-w-[90rem] grid-cols-1 gap-3 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4 2xl:max-w-[96rem]">
          {logos.map((logo) => (
            <LogoPill key={logo.name} name={logo.name} label={logo.label} icon={logo.icon} color={logo.color} />
          ))}
        </div>
      ) : (
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent md:w-40 xl:w-56" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent md:w-40 xl:w-56" />
          <div className="flex animate-marquee will-change-transform">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="mx-2">
                <LogoPill name={logo.name} label={logo.label} icon={logo.icon} color={logo.color} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

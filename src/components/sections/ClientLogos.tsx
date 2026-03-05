"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Car,
  HardHat,
  Heart,
  Leaf,
  Lock,
  Scale,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { useMobileViewport } from "@/hooks/useMobileViewport";

const logos: Array<{ name: string; label: string; icon: LucideIcon; tone: string }> = [
  { name: "ISO 9001", label: "Quality systems", icon: ShieldCheck, tone: "bg-amber-50 text-amber-700 border-amber-100" },
  { name: "ISO 27001", label: "InfoSec governance", icon: Lock, tone: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "ISO 14001", label: "Environmental mgmt", icon: Leaf, tone: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { name: "ISO 45001", label: "Workplace safety", icon: HardHat, tone: "bg-orange-50 text-orange-700 border-orange-100" },
  { name: "UNI/PdR 125", label: "Gender equity", icon: Heart, tone: "bg-rose-50 text-rose-700 border-rose-100" },
  { name: "ISO 37001", label: "Anti-bribery", icon: Scale, tone: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { name: "NIS2", label: "EU cyber directive", icon: Wifi, tone: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { name: "IATF 16949", label: "Automotive supply", icon: Car, tone: "bg-slate-50 text-slate-700 border-slate-100" },
];

function LogoPill({ name, label, icon: Icon, tone }: { name: string; label: string; icon: LucideIcon; tone: string }) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/78 bg-white/92 px-5 py-3 shadow-[0_8px_22px_-18px_rgba(15,23,42,0.26)] sm:px-6 sm:py-3.5">
      <div className={`flex size-10 items-center justify-center rounded-xl border ${tone}`}>
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-black tracking-tight text-foreground">{name}</p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.11em] text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();
  const { isMobile } = useMobileViewport();

  return (
    <section className="relative z-10 w-full overflow-hidden border-y border-white/62 bg-white/54 py-9 sm:py-14 xl:py-16">
      <div className="container mx-auto mb-6 max-w-5xl px-4 text-center sm:mb-8 sm:px-6 xl:mb-10 xl:max-w-6xl">
        <motion.p
          className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Standards We Build
        </motion.p>
        <motion.h3
          className="text-balance text-xl font-black tracking-tight text-foreground sm:text-3xl md:text-[2.2rem]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Framework internazionali implementati con metodo operativo e rigore esecutivo.
        </motion.h3>
      </div>

      {isMobile ? (
        <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 scrollbar-none">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="snap-start"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.14) }}
            >
              <LogoPill {...logo} />
            </motion.div>
          ))}
        </div>
      ) : reduceMotion ? (
        <div className="container mx-auto grid max-w-[92rem] grid-cols-2 gap-3 px-6 xl:grid-cols-4 2xl:max-w-[96rem]">
          {logos.map((logo) => (
            <LogoPill key={logo.name} {...logo} />
          ))}
        </div>
      ) : (
        <div className="relative masked-fade-x">
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="mx-2">
                <LogoPill {...logo} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

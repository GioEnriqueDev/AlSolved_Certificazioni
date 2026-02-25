"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Leaf, HardHat, Heart, Scale, Wifi, Car } from "lucide-react";

const logos = [
    { name: "ISO 9001", label: "Qualità", icon: ShieldCheck, color: "text-amber-600" },
    { name: "ISO 27001", label: "Cybersecurity", icon: Lock, color: "text-blue-600" },
    { name: "ISO 14001", label: "Ambiente", icon: Leaf, color: "text-emerald-600" },
    { name: "ISO 45001", label: "Sicurezza", icon: HardHat, color: "text-orange-600" },
    { name: "UNI/PdR 125", label: "Parità di Genere", icon: Heart, color: "text-rose-500" },
    { name: "GDPR", label: "Compliance DPO", icon: Scale, color: "text-indigo-600" },
    { name: "NIS2", label: "Direttiva EU", icon: Wifi, color: "text-violet-600" },
    { name: "IATF 16949", label: "Automotive", icon: Car, color: "text-slate-600" },
];

function LogoPill({ name, label, icon: Icon, color }: { name: string; label: string; icon: any; color: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 mx-3 rounded-2xl bg-white/70 border border-border/40 shadow-[0_1px_6px_rgba(0,0,0,0.03)] hover:border-primary/20 hover:shadow-[0_4px_16px_rgba(242,78,107,0.08)] transition-all duration-300 cursor-default group shrink-0">
            <div className={`w-9 h-9 rounded-xl bg-gray-50 border border-border/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${color}`}>
                <Icon className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-tight">{name}</span>
                <span className="text-[11px] text-muted-foreground font-medium">{label}</span>
            </div>
        </div>
    );
}

export default function ClientLogos() {
    return (
        <section className="py-16 bg-transparent border-y border-border/30 overflow-hidden relative z-10 w-full">
            <div className="container mx-auto px-6 text-center mb-10">
                <motion.p
                    className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Standard & Framework
                </motion.p>
                <motion.h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Certificazioni Riconosciute a Livello Globale
                </motion.h3>
            </div>

            {/* CSS-only Infinite Marquee */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Scrolling Container — pure CSS animation */}
                <div className="flex animate-marquee will-change-transform">
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos].map((logo, i) => (
                        <LogoPill key={i} name={logo.name} label={logo.label} icon={logo.icon} color={logo.color} />
                    ))}
                </div>
            </div>
        </section>
    );
}

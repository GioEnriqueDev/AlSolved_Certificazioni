"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Settings2, HeartHandshake } from "lucide-react";

const macroAreas = [
    {
        id: "qualita",
        title: "Qualità & Eccellenza",
        subtitle: "Il fondamento delle aziende leader.",
        description: "Standard riconosciuti a livello globale per dominare i bandi di gara e garantire processi perfetti.",
        icon: Settings2,
        gradient: "from-amber-500 to-orange-500",
        glowColor: "rgba(245,158,11,0.15)",
        borderHover: "hover:border-amber-300/50",
        chipBg: "bg-amber-50 border-amber-200/60 text-amber-800 hover:bg-amber-100 hover:border-amber-300",
        certifications: [
            { id: "iso-9001", name: "ISO 9001" },
            { id: "iatf-16949", name: "IATF 16949" },
            { id: "as-9100", name: "AS9100" },
            { id: "iso-13485", name: "ISO 13485" },
            { id: "iso-22000", name: "ISO 22000" },
        ],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: "cyber",
        title: "Cyber Security & IT",
        subtitle: "Protezione totale dei dati.",
        description: "Blinda il tuo business contro attacchi informatici e sanzioni GDPR milionarie.",
        icon: ShieldCheck,
        gradient: "from-blue-500 to-indigo-600",
        glowColor: "rgba(59,130,246,0.15)",
        borderHover: "hover:border-blue-300/50",
        chipBg: "bg-blue-50 border-blue-200/60 text-blue-800 hover:bg-blue-100 hover:border-blue-300",
        certifications: [
            { id: "iso-27001", name: "ISO 27001" },
            { id: "iso-20000", name: "ISO 20000-1" },
        ],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "esg",
        title: "ESG & Sostenibilità",
        subtitle: "Il nuovo standard bancario.",
        description: "Accedi a fondi verdi, migliora il rating aziendale e dimostra il tuo impegno per il futuro.",
        icon: Leaf,
        gradient: "from-emerald-500 to-green-600",
        glowColor: "rgba(16,185,129,0.15)",
        borderHover: "hover:border-emerald-300/50",
        chipBg: "bg-emerald-50 border-emerald-200/60 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-300",
        certifications: [
            { id: "iso-14001", name: "ISO 14001" },
            { id: "iso-50001", name: "ISO 50001" },
        ],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: "etica",
        title: "Sicurezza & Etica",
        subtitle: "Zero infortuni, zero cause.",
        description: "Tutela i tuoi lavoratori, ottieni sgravi INAIL ed entra nelle supply chain etiche internazionali.",
        icon: HeartHandshake,
        gradient: "from-rose-500 to-red-500",
        glowColor: "rgba(244,63,94,0.15)",
        borderHover: "hover:border-rose-300/50",
        chipBg: "bg-rose-50 border-rose-200/60 text-rose-800 hover:bg-rose-100 hover:border-rose-300",
        certifications: [
            { id: "iso-45001", name: "ISO 45001" },
            { id: "sa-8000", name: "SA8000" },
            { id: "pdr-125", name: "UNI/PdR 125" },
            { id: "iso-37001", name: "ISO 37001" },
        ],
        className: "md:col-span-2 md:row-span-1",
    },
];

export default function CinematicMacroAreas() {
    return (
        <section id="aree-intervento" className="py-32 bg-transparent relative z-10 w-full overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-5">
                        Aree di Intervento
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter text-foreground">
                        Domina il Tuo Settore.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        Non ti vendiamo &quot;un pezzo di carta&quot;. Costruiamo l&apos;infrastruttura normativa per farti vincere appalti, attrarre talenti e blindare il fatturato.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(320px,auto)] gap-5">
                    {macroAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden rounded-[2rem] bg-white/80 backdrop-blur-sm border border-border/40 transition-all duration-500 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 ${area.borderHover} p-8 md:p-10 flex flex-col justify-between ${area.className}`}
                        >
                            {/* Glow effect on hover */}
                            <div
                                className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[80px]"
                                style={{ backgroundColor: area.glowColor }}
                            />
                            {/* Bottom gradient border glow */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(to right, transparent, ${area.glowColor.replace('0.15', '0.5')}, transparent)` }}
                            />

                            <div className="relative z-10">
                                {/* Icon with gradient background */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-7 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                                    <area.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-foreground">
                                    {area.title}
                                </h3>
                                <p className={`text-base font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r ${area.gradient}`}>
                                    {area.subtitle}
                                </p>
                                <p className="text-muted-foreground font-medium leading-relaxed text-base max-w-md">
                                    {area.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-8 pt-6 border-t border-border/20">
                                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 mb-4">
                                    Certificazioni Incluse
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {area.certifications.map((cert) => (
                                        <Link key={cert.id} href={`/certificazioni/${cert.id}`}>
                                            <span className={`inline-flex items-center px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${area.chipBg}`}>
                                                {cert.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/contatti"
                                    className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-primary transition-colors group/link"
                                >
                                    Richiedi Analisi Gratuita
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

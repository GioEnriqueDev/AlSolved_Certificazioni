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
        color: "from-amber-500/20 to-orange-600/20",
        borderHover: "hover:border-orange-500/50",
        textGradient: "from-amber-600 to-orange-600",
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
        color: "from-blue-500/20 to-indigo-600/20",
        borderHover: "hover:border-blue-500/50",
        textGradient: "from-blue-600 to-indigo-600",
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
        color: "from-emerald-500/20 to-green-600/20",
        borderHover: "hover:border-emerald-500/50",
        textGradient: "from-emerald-600 to-green-600",
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
        color: "from-rose-500/20 to-red-600/20",
        borderHover: "hover:border-rose-500/50",
        textGradient: "from-rose-600 to-red-600",
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
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                        Aree di Intervento
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter text-foreground drop-shadow-sm">
                        Domina il Tuo Settore.
                    </h2>
                    <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        Non ti vendiamo "un pezzo di carta". Costruiamo l'infrastruttura normativa per farti vincere appalti, attrarre talenti e blindare il fatturato.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6">
                    {macroAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-border/60 ${area.borderHover} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-10 flex flex-col justify-between ${area.className}`}
                        >
                            {/* Abstract Ambient Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 shadow-sm group-hover:bg-white transition-colors duration-300">
                                    <area.icon className={`w-8 h-8 text-foreground group-hover:scale-110 transition-transform duration-500`} />
                                </div>
                                <h3 className={`text-3xl md:text-4xl font-black tracking-tight mb-2 text-foreground`}>
                                    {area.title}
                                </h3>
                                <p className={`text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${area.textGradient}`}>
                                    {area.subtitle}
                                </p>
                                <p className="text-muted-foreground font-medium leading-relaxed text-lg max-w-md">
                                    {area.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 pt-8 border-t border-border/40">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Certificazioni Incluse</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {area.certifications.map((cert) => (
                                        <Link key={cert.id} href={`/certificazioni/${cert.id}`}>
                                            <span className="inline-flex items-center px-4 py-2 rounded-xl bg-secondary/30 text-sm font-bold text-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm">
                                                {cert.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/contatti" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary/80 transition-colors group/link">
                                    Richiedi Analisi
                                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

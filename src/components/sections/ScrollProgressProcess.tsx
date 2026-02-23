"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, FileText, Gavel, ShieldCheck, Users, Lightbulb, Target } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const steps = [
    {
        icon: Users,
        title: "1. Analisi Iniziale (Gap Analysis)",
        description:
            "Fotografiamo la situazione attuale della tua azienda per capire cosa manca rispetto ai requisiti della norma scelta.",
    },
    {
        icon: Lightbulb,
        title: "2. Documentazione Pronta & Affiancamento",
        description:
            "Niente burocrazia impossibile. Prepariamo noi i manuali, le procedure e la documentazione tecnica, adattandola alla tua realtà lavorativa senza stravolgerla.",
    },
    {
        icon: ShieldCheck,
        title: "3. Implementazione e Formazione",
        description:
            "Ti affianchiamo nell'applicazione pratica delle procedure. Formiamo il tuo team (se necessario) per far diventare la norma un'abitudine utile, non un peso.",
    },
    {
        icon: Target,
        title: "4. Audit e Rilascio Certificato",
        description:
            "Gestiamo noi il rapporto con l'Ente Certificatore. Ti accompagniamo il giorno dell'Audit per garantire il superamento e il rilascio della certificazione.",
    },
];

export default function ScrollProgressProcess() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

    return (
        <section id="metodo" ref={containerRef} className="py-24 bg-secondary/20 relative overflow-hidden">
            {/* Progress Bar at Top - now part of section header, not sticky */}
            <div className="container mx-auto px-6">
                {/* Progress Bar */}
                <div className="h-1.5 bg-border/50 rounded-full mb-16 overflow-hidden shadow-inner">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full"
                        style={{ width: progressWidth }}
                    />
                </div>

                <FadeIn className="text-center mb-16">
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                        Il Nostro Metodo
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                        4 Step. Zero Burocrazia.
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Il nostro metodo elimina la complessità. Tu concentrati sul business, noi pensiamo alla conformità.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.1}
                            className="relative p-8 rounded-3xl border border-border bg-white hover:bg-gray-50 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group hover:-translate-y-1"
                        >
                            {/* Step Number Background */}
                            <div className="absolute top-4 right-6 text-8xl font-black text-black/[0.03] select-none group-hover:text-primary/5 transition-colors duration-500">
                                {i + 1}
                            </div>

                            <div className="relative z-10 pt-2">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    <step.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

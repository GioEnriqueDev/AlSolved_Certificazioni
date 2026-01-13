"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, FileText, Gavel, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const steps = [
    {
        icon: Search,
        title: "1. Check-up Gratuito",
        description:
            "Analizziamo i tuoi processi attuali e identifichiamo i gap rispetto allo standard. In 48h hai un report chiaro.",
    },
    {
        icon: FileText,
        title: "2. Ottimizzazione & Documenti",
        description:
            "Creiamo tutta la documentazione necessaria con i nostri tool, riducendo il carico sul tuo team al minimo.",
    },
    {
        icon: Gavel,
        title: "3. Audit Interno",
        description:
            "Simuliamo l'ispezione ufficiale per garantire una preparazione impeccabile. Nessuna sorpresa.",
    },
    {
        icon: ShieldCheck,
        title: "4. Certificazione",
        description:
            "Ti affianchiamo durante l'audit dell'ente certificatore fino al rilascio del certificato ufficiale.",
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
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
            {/* Progress Bar at Top - now part of section header, not sticky */}
            <div className="container mx-auto px-6">
                {/* Progress Bar */}
                <div className="h-1 bg-white/5 rounded-full mb-12 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-rose-500 rounded-full"
                        style={{ width: progressWidth }}
                    />
                </div>

                <FadeIn className="text-center mb-16">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                        Il Nostro Metodo
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        4 Step. Zero Burocrazia.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Il nostro metodo elimina la complessità. Tu concentrati sul business, noi pensiamo alla conformità.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.1}
                            className="relative p-6 rounded-2xl border border-white/5 bg-secondary/10 hover:bg-secondary/20 hover:border-primary/20 transition-all duration-300 group"
                        >
                            {/* Step Number Background */}
                            <div className="absolute top-4 right-4 text-8xl font-black text-white/5 select-none group-hover:text-primary/10 transition-colors">
                                {i + 1}
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                                    <step.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
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

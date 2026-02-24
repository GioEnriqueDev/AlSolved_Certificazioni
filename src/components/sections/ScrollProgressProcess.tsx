"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Users, Lightbulb, Target } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const steps = [
    {
        icon: Users,
        number: "01",
        title: "Gap Analysis",
        description:
            "Fotografiamo la situazione attuale della tua azienda per capire cosa manca rispetto ai requisiti della norma scelta.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: Lightbulb,
        number: "02",
        title: "Documentazione & Affiancamento",
        description:
            "Prepariamo noi i manuali, le procedure e la documentazione tecnica, adattandola alla tua realtà lavorativa.",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: ShieldCheck,
        number: "03",
        title: "Implementazione & Formazione",
        description:
            "Ti affianchiamo nell'applicazione pratica. Formiamo il tuo team per far diventare la norma un'abitudine utile.",
        gradient: "from-emerald-500 to-green-600",
    },
    {
        icon: Target,
        number: "04",
        title: "Audit & Certificato",
        description:
            "Gestiamo il rapporto con l'Ente Certificatore. Ti accompagniamo il giorno dell'Audit per garantire il rilascio.",
        gradient: "from-rose-500 to-red-500",
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
        <section id="metodo" ref={containerRef} className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-border/40">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Progress Bar */}
                <div className="h-1 bg-border/30 rounded-full mb-16 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary via-rose-400 to-orange-400 rounded-full"
                        style={{ width: progressWidth }}
                    />
                </div>

                <FadeIn className="text-center mb-20">
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-5">
                        Il Nostro Metodo
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-foreground tracking-tighter leading-tight">
                        4 Step. Zero Burocrazia.
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Tu concentrati sul business, noi pensiamo alla conformità.
                    </p>
                </FadeIn>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-border/0 via-border to-border/0 z-0" />

                    {steps.map((step, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.12}
                            className="relative"
                        >
                            <div className="relative p-8 rounded-[1.75rem] border border-border/40 bg-white hover:border-border/80 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] transition-all duration-500 group h-full flex flex-col">
                                {/* Step Number */}
                                <div className="absolute -top-4 left-8 z-10">
                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} text-white text-xs font-black shadow-md`}>
                                        {step.number}
                                    </span>
                                </div>

                                <div className="relative z-10 pt-4 flex-1 flex flex-col">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg opacity-90 group-hover:opacity-100`}>
                                        <step.icon className="w-5 h-5 text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold mb-3 text-foreground tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

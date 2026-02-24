"use client";

import { motion } from "framer-motion";
import StaticBackground from "@/components/ui/StaticBackground";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

import { certifications } from "@/data/certificazioniData";

const getPremiumColors = (index: number) => {
    const colorClasses = [
        { gradient: "from-amber-400 to-orange-600", glow: "rgba(245,158,11,0.12)", chip: "bg-amber-50 text-amber-700 border-amber-200" },
        { gradient: "from-blue-500 to-indigo-600", glow: "rgba(59,130,246,0.12)", chip: "bg-blue-50 text-blue-700 border-blue-200" },
        { gradient: "from-emerald-400 to-teal-600", glow: "rgba(16,185,129,0.12)", chip: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        { gradient: "from-rose-400 to-red-600", glow: "rgba(244,63,94,0.12)", chip: "bg-rose-50 text-rose-700 border-rose-200" },
        { gradient: "from-fuchsia-400 to-pink-600", glow: "rgba(192,38,211,0.12)", chip: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
        { gradient: "from-slate-400 to-gray-600", glow: "rgba(100,116,139,0.12)", chip: "bg-slate-50 text-slate-700 border-slate-200" },
        { gradient: "from-cyan-400 to-blue-600", glow: "rgba(6,182,212,0.12)", chip: "bg-cyan-50 text-cyan-700 border-cyan-200" },
        { gradient: "from-violet-400 to-purple-600", glow: "rgba(139,92,246,0.12)", chip: "bg-violet-50 text-violet-700 border-violet-200" },
    ];
    return colorClasses[index % colorClasses.length];
};

export default function CertificazioniPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground relative">
            <StaticBackground />

            {/* Premium Hero Section */}
            <section className="pt-40 pb-16 relative px-6">
                <div className="container mx-auto">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-[0.2em] uppercase mb-8 border border-primary/20">
                            <ShieldCheck className="w-4 h-4" />
                            Il Nostro Catalogo
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] text-foreground tracking-tighter">
                            Ogni certificazione è un <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-400">
                                vantaggio competitivo.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                            Scegli la certificazione che manca alla tua azienda. Ogni percorso include analisi, documentazione, formazione e affiancamento fino all&apos;audit.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Catalog Grid Section */}
            <section className="py-16 relative px-6 z-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {certifications.map((cert, index) => {
                            const colors = getPremiumColors(index);
                            return (
                                <Link key={cert.id} href={`/certificazioni/${cert.id}`} className="block group">
                                    <motion.div
                                        className="relative bg-white/80 backdrop-blur-sm border border-border/40 p-7 rounded-[1.75rem] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-border/70 transition-all duration-500 overflow-hidden flex flex-col h-full"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-5%" }}
                                        transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {/* Hover Glow */}
                                        <div
                                            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[60px]"
                                            style={{ backgroundColor: colors.glow }}
                                        />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Header: Icon + Badge */}
                                            <div className="flex justify-between items-start mb-5">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500`}>
                                                    <cert.icon className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground/70 bg-gray-50 px-3 py-1.5 rounded-lg border border-border/30">
                                                    {cert.timeline.replace("Da ", "").split(" settimane")[0]} sett.
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-black mb-1 text-foreground tracking-tight">
                                                {cert.subtitle}
                                            </h3>
                                            <p className={`text-sm font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${colors.gradient}`}>
                                                {cert.title}
                                            </p>

                                            {/* Description */}
                                            <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-5 flex-grow">
                                                {cert.description}
                                            </p>

                                            {/* Top 2 Benefits preview */}
                                            <div className="space-y-2 mb-5">
                                                {cert.benefits.slice(0, 2).map((benefit, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <TrendingUp className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                                        <span className="text-xs font-medium text-foreground/80">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA */}
                                            <div className="pt-4 border-t border-border/30 mt-auto">
                                                <span className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                                                    Scopri i Dettagli
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-24 relative overflow-hidden bg-white border-t border-border/40">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.04),transparent_60%)]"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-5">Non Sai Quale Scegliere?</p>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground tracking-tight">
                            Ti guidiamo noi.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10 font-medium leading-relaxed max-w-xl mx-auto">
                            Prenota un&apos;analisi iniziale gratuita. In 15 minuti identifichiamo la certificazione più strategica per la tua azienda.
                        </p>
                        <Link href="/contatti">
                            <Button
                                size="lg"
                                className="h-14 px-10 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.3)] hover:shadow-[0_12px_40px_rgba(242,78,107,0.4)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <Clock className="mr-2 w-5 h-5" />
                                Prenota Analisi Gratuita
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

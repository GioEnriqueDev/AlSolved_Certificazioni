"use client";

import { motion } from "framer-motion";
import StaticBackground from "@/components/ui/StaticBackground";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import NeonLogo from "@/components/ui/NeonLogo";

import { certifications } from "@/data/certificazioniData";

// Funzione helper per mappare dei colori premium basati sull'indice
const getPremiumColors = (index: number) => {
    const colorClasses = [
        "from-amber-400 to-orange-600",
        "from-blue-500 to-indigo-600",
        "from-emerald-400 to-teal-600",
        "from-rose-400 to-red-600",
        "from-fuchsia-400 to-pink-600",
        "from-slate-400 to-gray-600",
        "from-cyan-400 to-blue-600",
        "from-violet-400 to-purple-600",
    ];
    return colorClasses[index % colorClasses.length];
};

export default function CertificazioniPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground relative">
            <StaticBackground />

            {/* Premium Hero Section */}
            <section className="pt-40 pb-20 relative px-6">
                <div className="container mx-auto">
                    <motion.div
                        className="max-w-5xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-8 border border-primary/20">
                            <ShieldCheck className="w-4 h-4" />
                            Acceleratori di Business
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] text-foreground tracking-tight drop-shadow-sm">
                            Non Vendiamo Carta. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-rose-500 pb-2 inline-block">
                                Vendiamo Vantaggio Competitivo.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                            Il nostro catalogo completo di certificazioni e adeguamenti normativi. Scegli l'arma strategica che manca alla tua azienda per dominare il mercato.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Catalog Grid Section */}
            <section className="py-20 relative px-6 z-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {certifications.map((cert, index) => {
                            const premiumColor = getPremiumColors(index);
                            return (
                                <motion.div
                                    key={cert.id}
                                    className={`group relative bg-white/70 backdrop-blur-3xl border border-border/80 p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
                                >
                                    {/* Hover Gradient Reveal */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${premiumColor} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${premiumColor} p-[1px] shadow-sm transform group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                                                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                                    <cert.icon className="w-8 h-8 text-foreground/80 group-hover:text-foreground transition-colors" />
                                                </div>
                                            </div>
                                            <div className="bg-foreground/5 text-foreground px-4 py-1.5 rounded-full text-sm font-bold tracking-widest text-right ml-4">
                                                {cert.title}
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-black mb-4 text-foreground tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 transition-colors">
                                            {cert.subtitle}
                                        </h3>
                                        <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-10 flex-grow">
                                            {cert.description}
                                        </p>

                                        <div className="pt-6 border-t border-border/50 mt-auto">
                                            <Link href={`/certificazioni/${cert.id}`} className="inline-flex items-center text-primary font-bold hover:text-orange-500 transition-colors group/link text-lg">
                                                Scopri i Dettagli
                                                <ArrowRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mindset Section */}
            <section className="py-32 relative overflow-hidden bg-white/40 backdrop-blur-md border-y border-white/60">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <NeonLogo size="lg" className="mx-auto mb-10" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground tracking-tight">
                            Burocrazia Zero. Solo Risultati.
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 font-medium leading-relaxed">
                            Mentre i consulenti vecchio stampo ti sommergono di manuali faldoni polverosi e procedure infinite per giustificare la loro parcella, noi operiamo come una task force d'élite.
                        </p>
                        <Link href="/contatti">
                            <Button
                                size="lg"
                                className="h-16 px-12 text-xl font-bold rounded-full bg-foreground hover:bg-foreground/90 text-background transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl"
                            >
                                Richiedi un Check-up
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Award,
    Zap,
    Scale,
    Users,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import Link from "next/link";
import NeonLogo from "@/components/ui/NeonLogo";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Garanzia di Risultato",
        description: "Accompagniamo l'azienda fino all'ottenimento del certificato. Nessuna sorpresa."
    },
    {
        icon: Zap,
        title: "Velocità di Esecuzione",
        description: "Protocolli snelli che non bloccano l'operatività aziendale quotidiana."
    },
    {
        icon: Scale,
        title: "Compliance Legale",
        description: "Mettiamo al riparo l'azienda da sanzioni, responsabilità amministrative e rischi penali."
    },
    {
        icon: Award,
        title: "Vittoria Gare d'Appalto",
        description: "I nostri clienti aumentano il punteggio tecnico nelle gare pubbliche in media del 40%."
    },
];

export default function ChiSiamoPage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <AnimatedBackground />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                            Chi Siamo
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Trasformiamo la Burocrazia in <br />
                            <span className="text-primary">Asset Aziendale Strategico</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Non vendiamo "pezzi di carta". Costruiamo sistemi di gestione che permettono alle aziende di vincere appalti, evitare sanzioni e scalare il business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Mission Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block mb-6">
                                <NeonLogo size="sm" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Il Partner Tecnico per le Certificazioni ISO
                            </h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                                <p>
                                    ALSOLVED nasce con un obiettivo preciso: <strong className="text-white">liberare le PMI italiane dalla complessità normativa</strong>.
                                </p>
                                <p>
                                    Troppe aziende vedono le certificazioni come un costo o un obbligo. Noi le trasformiamo in un vantaggio competitivo. Che si tratti di Qualità (9001), Sicurezza Dati (27001) o Sostenibilità (14001), <strong>il nostro approccio è pratico, veloce e orientato al business.</strong>
                                </p>
                                <p>
                                    Non siamo generalisti. Siamo verticali sulle certificazioni. Conosciamo ogni virgola dei regolamenti per farti ottenere il massimo punteggio nel minor tempo possibile.
                                </p>
                            </div>
                        </motion.div>

                        {/* Why Choose Us Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-secondary/10 border border-white/5 p-6 rounded-2xl hover:border-primary/20 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-snug">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Philosophy Section */}
            <section className="py-24 bg-secondary/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Users className="w-12 h-12 text-primary mx-auto mb-8 opacity-80" />
                        <h2 className="text-2xl md:text-4xl font-light italic max-w-4xl mx-auto leading-relaxed text-white/90">
                            "La certificazione non è l'obiettivo finale. L'obiettivo è un'azienda che funziona meglio, rischia meno e guadagna di più. Il certificato è solo la naturale conseguenza."
                        </h2>
                        <div className="mt-8">
                            <p className="font-bold text-lg">Il Team ALSOLVED</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-10 md:p-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            La tua azienda è pronta al salto di qualità?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Verifica gratuitamente se la tua azienda ha i requisiti per le certificazioni ISO e scopri come ottenerle in tempi record.
                        </p>
                        <Link href="/contatti">
                            <Button
                                size="lg"
                                className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(242,78,107,0.3)] transition-transform hover:scale-105"
                            >
                                Richiedi Analisi Preliminare
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

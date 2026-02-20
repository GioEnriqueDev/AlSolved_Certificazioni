"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/ui/StaticBackground";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Award,
    Zap,
    Scale,
    Users,
    ArrowRight,
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
        <div className="min-h-screen bg-transparent text-foreground relative">
            <StaticBackground />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                            Chi Siamo
                        </p>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-foreground tracking-tight drop-shadow-sm">
                            Trasformiamo la Burocrazia in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Asset Strategico</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                            Non vendiamo &quot;pezzi di carta&quot;. Costruiamo sistemi di gestione che permettono alle aziende di vincere appalti, evitare sanzioni e scalare il business.
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
                            <div className="inline-block mb-8 bg-white p-3 rounded-2xl shadow-sm border border-border">
                                <NeonLogo size="sm" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">
                                Il Partner Tecnico per le Certificazioni ISO
                            </h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
                                <p>
                                    ALSOLVED nasce con un obiettivo preciso: <strong className="text-foreground">liberare le PMI italiane dalla complessità normativa</strong>.
                                </p>
                                <p>
                                    Troppe aziende vedono le certificazioni come un costo o un obbligo. Noi le trasformiamo in un vantaggio competitivo. Che si tratti di Qualità (9001), Sicurezza Dati (27001) o Sostenibilità (14001), <strong className="text-foreground">il nostro approccio è pratico, veloce e orientato al business.</strong>
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
                                    className="bg-white border border-border p-8 rounded-3xl hover:border-primary/20 hover:shadow-soft-glow transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-sm">
                                        <item.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Philosophy Section */}
            <section className="py-32 bg-secondary/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Users className="w-16 h-16 text-primary mx-auto mb-10 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-light italic max-w-5xl mx-auto leading-relaxed text-foreground tracking-tight">
                            &quot;La certificazione non è l&apos;obiettivo finale. L&apos;obiettivo è un&apos;azienda che funziona meglio, rischia meno e guadagna di più. Il certificato è solo la naturale conseguenza.&quot;
                        </h2>
                        <div className="mt-12">
                            <p className="font-bold text-xl text-primary tracking-widest uppercase">Il Team ALSOLVED</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-white border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tight">
                                La tua azienda è pronta al salto di qualità?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                Verifica gratuitamente se hai i requisiti per le certificazioni ISO e scopri come ottenerle in tempi record.
                            </p>
                            <Link href="/contatti">
                                <Button
                                    size="lg"
                                    className="h-16 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.4)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                >
                                    Richiedi Analisi Preliminare
                                    <ArrowRight className="w-6 h-6 ml-3" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

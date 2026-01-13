"use client";

import { motion } from "framer-motion";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import {
    Target,
    Rocket,
    LineChart,
    Globe,
    Palette,
    TrendingUp,
    FileCheck,
    Euro,
    Banknote,
    Building2,
    ArrowRight,
    CheckCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
    { icon: LineChart, title: "Campagne Google Ads", description: "Advertising su Google per massimizzare la visibilità e le conversioni." },
    { icon: Globe, title: "Social Media Marketing", description: "Strategie social per costruire community e generare engagement." },
    { icon: Target, title: "Digital Strategy", description: "Pianificazione strategica digitale su misura per i tuoi obiettivi." },
    { icon: Palette, title: "Web Design & SEO", description: "Siti web moderni e ottimizzati per i motori di ricerca." },
    { icon: Rocket, title: "E-commerce", description: "Realizzazione e posizionamento di negozi online performanti." },
];

const finanzaServices = [
    { icon: FileCheck, title: "Voucher Digitalizzazione", description: "Supporto completo per accedere ai voucher digitali regionali e nazionali." },
    { icon: Banknote, title: "Bandi a Fondo Perduto", description: "Assistenza per finanziamenti e contributi che non richiedono restituzione." },
    { icon: Euro, title: "Credito d'Imposta 4.0", description: "Consulenza per investimenti in beni strumentali e trasformazione digitale." },
    { icon: Building2, title: "Nuova Sabatini", description: "Agevolazioni MISE per beni strumentali delle PMI." },
];

const vouchers = [
    "Voucher Digitale Roma",
    "Voucher Digitale Lazio",
    "Voucher Viterbo e Rieti",
    "Voucher Piemonte",
    "Bando Energia Lazio",
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Professionisti del <br />
                            <span className="text-primary">Digitale e della Finanza Agevolata</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            ALSOLVED è una società con sede a Roma, frutto del lavoro e delle idee di una squadra di professionisti del settore digitale e della finanza agevolata.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                                La Nostra Storia
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Soluzioni Su Misura per Ogni Obiettivo
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    L&apos;esperienza acquisita ci ha portato oggi a sfruttare tutte le potenzialità offerte dalla rete, proponendo una <strong className="text-foreground">vasta gamma di servizi web ad altissimo livello</strong>.
                                </p>
                                <p>
                                    Ogni progetto si adatta alle specifiche e diverse esigenze delle aziende e ci pone di fronte a molteplici ed entusiasmanti sfide. Questo è il punto da dove partiamo per offrire ogni giorno ai nostri clienti una <strong className="text-foreground">soluzione su misura</strong>, pensata per centrare gli obiettivi prefissati.
                                </p>
                                <p>
                                    Il nostro motivo di orgoglio è il <strong className="text-foreground">rapporto duraturo</strong> instaurato con i clienti, basato su un contatto fluido, veloce ed efficiente.
                                </p>
                            </div>
                        </motion.div>

                        {/* Values Box */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-secondary/10 border border-white/5 rounded-3xl p-8"
                        >
                            <h3 className="text-xl font-bold mb-6">Perché Scegliere ALSOLVED</h3>
                            <ul className="space-y-4">
                                {[
                                    "Lavoro orientato al raggiungimento dei risultati",
                                    "Attenzione ai piccoli dettagli",
                                    "Team altamente specializzato",
                                    "Servizi innovativi e al passo coi tempi",
                                    "Competenze elevate e massima efficienza",
                                    "Assistenza impeccabile e supporto continuo",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Digital Services Section */}
            <section className="py-20 bg-secondary/5 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                            Servizi Digitali
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Soluzioni Web Ad Altissimo Livello
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Finanza Agevolata Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                            Finanza Agevolata
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Massimizza il Potenziale Finanziario della Tua PMI
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Ogni PMI aderendo all&apos;abbonamento di Finanza Agevolata di ALSOLVED può accedere a bandi regionali, nazionali e voucher per la digitalizzazione.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {finanzaServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                        <p className="text-sm text-muted-foreground">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Vouchers Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/10 to-rose-500/5 border border-primary/20 rounded-3xl p-8"
                    >
                        <h3 className="text-xl font-bold mb-6 text-center">Voucher Digitalizzazione Attivi</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {vouchers.map((voucher, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 rounded-full bg-background/50 border border-white/10 text-sm font-medium"
                                >
                                    {voucher}
                                </span>
                            ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Consulenza gratuita e aggiornamenti nel settore tutto l&apos;anno.
                        </p>
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
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Trasforma le Strategie in Risultati
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Il supporto del team di ALSOLVED aiuta a trasformare le strategie in risultati concreti, grazie ad un&apos;assistenza impeccabile.
                        </p>
                        <Link href="/contatti">
                            <Button
                                size="lg"
                                className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(242,78,107,0.3)]"
                            >
                                Richiedi Consulenza Gratuita
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        label: "Telefono",
        value: "+39 351 537 1725",
        href: "tel:+393515371725",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@alsolved.com",
        href: "mailto:info@alsolved.com",
    },
    {
        icon: MapPin,
        label: "Sede",
        value: "Via Bargoni 78, Roma",
        href: "https://maps.google.com",
    },
    {
        icon: Clock,
        label: "Orari",
        value: "Lun-Ven: 9:00-18:00",
        href: null,
    },
];

const services = [
    "ISO 9001 - Qualità",
    "ISO 27001 - Sicurezza",
    "ISO 14001 - Ambiente",
    "ISO 45001 - Sicurezza Lavoro",
    "UNI/PdR 125 - Parità Genere",
    "Altro / Non so ancora",
];

export default function ContattiPage() {
    const [formData, setFormData] = useState({
        nome: "",
        azienda: "",
        email: "",
        telefono: "",
        servizio: "",
        messaggio: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-background text-foreground relative">
            <AnimatedBackground />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                            Contattaci
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Inizia il Tuo Percorso <br />
                            <span className="text-primary">Verso la Certificazione</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Prenota una consulenza gratuita. Ti guideremo verso la certificazione più adatta alla tua azienda.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {!isSubmitted ? (
                                <div className="bg-secondary/10 border border-white/5 rounded-3xl p-8 md:p-10">
                                    <h2 className="text-2xl font-bold mb-2">Richiedi un Preventivo</h2>
                                    <p className="text-muted-foreground mb-8">
                                        Compila il form e ti ricontatteremo entro 24 ore.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                                    Nome e Cognome *
                                                </label>
                                                <Input
                                                    required
                                                    value={formData.nome}
                                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                                    placeholder="Mario Rossi"
                                                    className="bg-background/50 border-white/10 h-12"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                                    Azienda *
                                                </label>
                                                <Input
                                                    required
                                                    value={formData.azienda}
                                                    onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                                                    placeholder="Nome Azienda S.r.l."
                                                    className="bg-background/50 border-white/10 h-12"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                                    Email *
                                                </label>
                                                <Input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="mario@azienda.it"
                                                    className="bg-background/50 border-white/10 h-12"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                                    Telefono
                                                </label>
                                                <Input
                                                    type="tel"
                                                    value={formData.telefono}
                                                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                                                    placeholder="+39 333 1234567"
                                                    className="bg-background/50 border-white/10 h-12"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                                Certificazione di Interesse *
                                            </label>
                                            <select
                                                required
                                                value={formData.servizio}
                                                onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
                                                className="w-full h-12 px-4 rounded-md bg-background/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                            >
                                                <option value="">Seleziona una certificazione</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="text-sm font-medium text-muted-foreground mb-2 block">
                                                Messaggio
                                            </label>
                                            <Textarea
                                                value={formData.messaggio}
                                                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                                                placeholder="Raccontaci le tue esigenze..."
                                                className="bg-background/50 border-white/10 min-h-[120px]"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-14 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(242,78,107,0.3)]"
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <motion.div
                                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                    Invio in corso...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-2">
                                                    Invia Richiesta
                                                    <Send className="w-5 h-5" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-secondary/10 border border-primary/20 rounded-3xl p-8 md:p-10 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">Richiesta Inviata!</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Grazie per averci contattato. Un nostro consulente ti ricontatterà entro 24 ore lavorative.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSubmitted(false)}
                                        className="rounded-full"
                                    >
                                        Invia un&apos;altra richiesta
                                    </Button>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Informazioni di Contatto</h2>
                                <div className="space-y-4">
                                    {contactInfo.map((info, i) => (
                                        <a
                                            key={i}
                                            href={info.href || undefined}
                                            className={`flex items-center gap-4 p-4 rounded-2xl bg-secondary/10 border border-white/5 transition-all ${info.href ? "hover:border-primary/20 hover:bg-secondary/20 cursor-pointer" : ""
                                                }`}
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <info.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{info.label}</p>
                                                <p className="font-semibold text-foreground">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="bg-gradient-to-br from-primary/10 to-rose-500/5 border border-primary/20 rounded-3xl p-8">
                                <h3 className="text-xl font-bold mb-3">Check-up Gratuito</h3>
                                <p className="text-muted-foreground mb-6">
                                    Scopri quale certificazione può far crescere la tua azienda. Analisi senza impegno.
                                </p>
                                <Button
                                    className="rounded-full bg-primary hover:bg-primary/90 text-white"
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                >
                                    Prenota Ora
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/5 border border-white/5">
                                <div className="text-4xl font-bold text-primary">100%</div>
                                <div>
                                    <p className="font-semibold">Tasso di Successo</p>
                                    <p className="text-sm text-muted-foreground">Tutti gli audit superati al primo tentativo</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

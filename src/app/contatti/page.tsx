"use client";

import { motion } from "framer-motion";
import BookingCTA from "@/components/ui/BookingCTA";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
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

export default function ContattiPage() {
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
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Booking CTA (Replaces Form) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <BookingCTA googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSf_placeholder/viewform" />
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

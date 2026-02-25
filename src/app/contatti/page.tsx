"use client";

import { motion } from "framer-motion";
import BookingCTA from "@/components/ui/BookingCTA";
import Footer from "@/components/sections/Footer";
import StaticBackground from "@/components/sections/StaticBackground";
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
        href: "https://www.google.com/maps/dir//Alsolved,+Via+Angelo+Bargoni,+78,+00153+Roma+RM/@41.8806996,12.4645128,17z/data=!4m17!1m7!3m6!1s0x13258af33987327d:0x2243ca7dd841e0eb!2sAlsolved!8m2!3d41.8806957!4d12.4691262!16s%2Fg%2F11cm0gx4g8!4m8!1m0!1m5!1m1!1s0x13258af33987327d:0x2243ca7dd841e0eb!2m2!1d12.4691262!2d41.8806957!3e3?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
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
        <div className="min-h-screen bg-transparent text-foreground relative">
            <StaticBackground />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                            Contattaci
                        </p>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-foreground tracking-tight drop-shadow-sm">
                            Inizia il Tuo Percorso <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Verso la Certificazione</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
                            Prenota una consulenza gratuita. Ti guideremo verso la certificazione più adatta alla tua azienda.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-32 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Booking CTA (Replaces Form) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-2 rounded-3xl border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        >
                            <BookingCTA googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSf_placeholder/viewform" />
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-10 lg:pl-10"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-8 text-foreground tracking-tight">Informazioni di Contatto</h2>
                                <div className="space-y-4">
                                    {contactInfo.map((info, i) => (
                                        <a
                                            key={i}
                                            href={info.href || undefined}
                                            className={`flex items-center gap-6 p-6 rounded-3xl bg-secondary/20 border border-border transition-all duration-300 ${info.href ? "hover:border-primary/30 hover:bg-white hover:shadow-soft-glow cursor-pointer hover:-translate-y-1" : ""
                                                }`}
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{info.label}</p>
                                                <p className="font-bold text-lg text-foreground mt-1">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-orange-400/5 border border-primary/20 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-rose-600 shrink-0">50+</div>
                                <div className="relative z-10">
                                    <p className="font-bold text-xl text-foreground">Aziende Certificate</p>
                                    <p className="text-sm font-medium text-muted-foreground mt-1">Ti affianchiamo fino al rilascio del certificato, senza sorprese</p>
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

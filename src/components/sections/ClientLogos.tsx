"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder logos - replace with real client logos
const logos = [
    { name: "TechCorp Italia", abbrev: "TC" },
    { name: "Global Logistics", abbrev: "GL" },
    { name: "Finance Group", abbrev: "FG" },
    { name: "Innovate Spa", abbrev: "IS" },
    { name: "Energy Solutions", abbrev: "ES" },
    { name: "Digital Factory", abbrev: "DF" },
];

function LogoPlaceholder({ name, abbrev }: { name: string; abbrev: string }) {
    return (
        <div className="flex items-center gap-3 px-8 group cursor-default">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <span className="text-lg font-bold text-white/50 group-hover:text-primary transition-colors">
                    {abbrev}
                </span>
            </div>
            <span className="text-lg font-semibold text-white/40 group-hover:text-white/70 transition-colors whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

export default function ClientLogos() {
    return (
        <section className="py-16 bg-background border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-10">
                <motion.p
                    className="text-sm font-bold text-primary uppercase tracking-widest"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    I Nostri Clienti
                </motion.p>
                <motion.h3
                    className="text-2xl md:text-3xl font-bold mt-3 text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    Aziende che si fidano di ALSOLVED
                </motion.h3>
            </div>

            {/* Infinite Scrolling Marquee */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Scrolling Container */}
                <motion.div
                    className="flex"
                    animate={{ x: [0, -1200] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the logos for seamless loop */}
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <LogoPlaceholder key={i} name={logo.name} abbrev={logo.abbrev} />
                    ))}
                </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
                className="container mx-auto px-6 mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <div className="text-center">
                    <div className="text-3xl font-bold text-white">250+</div>
                    <div className="text-sm text-muted-foreground">Progetti Completati</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-muted-foreground">Clienti Soddisfatti</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-muted-foreground">Anni di Esperienza</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Audit Superati</div>
                </div>
            </motion.div>
        </section>
    );
}

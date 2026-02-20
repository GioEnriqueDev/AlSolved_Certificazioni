"use client";

import { motion } from "framer-motion";

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
            <div className="w-12 h-12 rounded-xl bg-secondary/30 border border-border/60 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
                <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {abbrev}
                </span>
            </div>
            <span className="text-lg font-semibold text-muted-foreground/70 group-hover:text-foreground transition-colors whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

export default function ClientLogos() {
    return (
        <section className="py-20 bg-transparent border-y border-border/40 overflow-hidden relative z-10 w-full">
            <div className="container mx-auto px-6 text-center mb-12">
                <motion.p
                    className="text-sm font-bold text-primary uppercase tracking-[0.2em]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    I Nostri Clienti
                </motion.p>
                <motion.h3
                    className="text-2xl md:text-4xl font-bold mt-4 text-foreground tracking-tight"
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
                    className="flex py-4 will-change-transform"
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
                className="container mx-auto px-6 mt-16 flex flex-wrap justify-center gap-10 md:gap-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
            >
                <div className="text-center group">
                    <div className="text-4xl font-black text-foreground group-hover:text-primary transition-colors">250+</div>
                    <div className="text-sm font-medium text-muted-foreground mt-2">Progetti Completati</div>
                </div>
                <div className="text-center group">
                    <div className="text-4xl font-black text-foreground group-hover:text-primary transition-colors">98%</div>
                    <div className="text-sm font-medium text-muted-foreground mt-2">Clienti Soddisfatti</div>
                </div>
                <div className="text-center group">
                    <div className="text-4xl font-black text-foreground group-hover:text-primary transition-colors">15+</div>
                    <div className="text-sm font-medium text-muted-foreground mt-2">Anni di Esperienza</div>
                </div>
                <div className="text-center group">
                    <div className="text-4xl font-black text-primary">100%</div>
                    <div className="text-sm font-medium text-muted-foreground mt-2">Audit Superati</div>
                </div>
            </motion.div>
        </section>
    );
}

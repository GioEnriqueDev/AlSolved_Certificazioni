"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, Award, Users } from "lucide-react";

interface StatItem {
    label: string;
    value: number;
    suffix: string;
    icon: React.ElementType;
    span?: string; // For grid sizing
}

const stats: StatItem[] = [
    { label: "Successo Audit", value: 100, suffix: "%", icon: Award, span: "md:col-span-2" },
    { label: "Tempi Medi Ridotti", value: 50, suffix: "%", icon: Clock },
    { label: "Aziende Servite", value: 500, suffix: "+", icon: Users },
    { label: "Risparmio Fiscale Generato", value: 2, suffix: "M €", icon: TrendingUp, span: "md:col-span-2" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-5xl md:text-7xl font-black text-foreground">
            {count}
            <span className="text-primary">{suffix}</span>
        </div>
    );
}

export default function BentoStats() {
    return (
        <section className="py-24 bg-secondary/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Numeri che Parlano</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Risultati concreti per le aziende che hanno scelto ALSOLVED.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative p-8 rounded-3xl border border-white/5 bg-background overflow-hidden group hover:border-primary/20 transition-colors ${stat.span || ""}`}
                        >
                            {/* Icon Background */}
                            <stat.icon className="absolute -bottom-4 -right-4 w-32 h-32 text-white/[0.03] group-hover:text-primary/10 transition-colors" />

                            <div className="relative z-10">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

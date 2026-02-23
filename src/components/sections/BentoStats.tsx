"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Clock, Award, Users, CheckCircle2 } from "lucide-react";

interface StatItem {
    label: string;
    value: number;
    suffix: string;
    description: string;
    icon: React.ElementType;
    colSpan?: string; // For grid sizing
    bgClass: string;
    textClass: string;
}

const stats: StatItem[] = [
    {
        label: "Progetti Completati",
        value: 65,
        suffix: "+",
        description: "Aziende certificate con successo",
        icon: Users,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
        bgClass: "bg-primary/5 border-primary/20",
        textClass: "text-primary",
    },
    {
        label: "Audit Superati 1° Colpo",
        value: 100,
        suffix: "%",
        description: "Garanzia di risultato al primo tentativo",
        icon: CheckCircle2,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-8",
        bgClass: "bg-orange-500/5 border-orange-500/20",
        textClass: "text-orange-500",
    },
    {
        label: "Tempo Medio",
        value: 8,
        suffix: " Sett.",
        description: "Per l'ottenimento della certificazione (variabile a 12 per progetti complessi)",
        icon: Clock,
        colSpan: "col-span-12 lg:col-span-8",
        bgClass: "bg-blue-500/5 border-blue-500/20",
        textClass: "text-blue-500",
    },
    {
        label: "Sanzioni Evitate",
        value: 100,
        suffix: "%",
        description: "Protezione totale su dati e sicurezza (GDPR, Sicurezza Macchine)",
        icon: TrendingUp,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
        bgClass: "bg-emerald-500/5 border-emerald-500/20",
        textClass: "text-emerald-500",
    },
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
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Numeri che Parlano</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto font-medium">
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
                            className={`relative p-10 rounded-3xl border border-border bg-gray-50/50 overflow-hidden group hover:border-primary/20 hover:shadow-lg hover:bg-white transition-all duration-300 hover:-translate-y-1 will-change-transform ${stat.colSpan || ""}`}
                        >
                            {/* Icon Background */}
                            <stat.icon className="absolute -bottom-6 -right-6 w-40 h-40 text-black/[0.02] group-hover:text-primary/5 transition-colors duration-500" />

                            <div className="relative z-10">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.1em] mt-3">
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

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SpotlightCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export default function SpotlightCard({
    title,
    subtitle,
    description,
    icon: Icon,
    className,
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/10 bg-secondary/20 p-8 cursor-pointer group",
                "hover:border-primary/30 transition-colors duration-300",
                className
            )}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(242,78,107,0.15), transparent 40%)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-rose-600 flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title & Subtitle */}
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                    {subtitle}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                    {description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center text-sm font-semibold text-primary group-hover:underline">
                    Scopri come funziona
                    <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}

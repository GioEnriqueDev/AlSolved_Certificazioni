"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TiltedCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export default function TiltedCard({
    title,
    subtitle,
    description,
    icon: Icon,
    className,
}: TiltedCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current!.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative overflow-hidden rounded-3xl bg-secondary/10 border border-white/5 p-8 h-full transition-colors duration-300 group hover:border-primary/40",
                className
            )}
        >
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, rgba(242,78,107,0.1) 0%, transparent 70%)"
                }}
            />

            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/80 to-rose-600/80 flex items-center justify-center mb-6 shadow-lg shadow-primary/20 backdrop-blur-md">
                    <Icon className="w-7 h-7 text-white" />
                </div>

                <p style={{ transform: "translateZ(20px)" }} className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                    {subtitle}
                </p>
                <h3 style={{ transform: "translateZ(30px)" }} className="text-2xl font-bold text-foreground mb-3">
                    {title}
                </h3>
                <p style={{ transform: "translateZ(20px)" }} className="text-muted-foreground leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

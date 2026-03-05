"use client";

import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";

interface ShinyTextProps {
    text: string;
    className?: string;
    speed?: number;
    color?: string;
    shineColor?: string;
    spread?: number;
    disabled?: boolean;
}

export default function ShinyText({
    text,
    className = "",
    speed = 3,
    color = "currentColor",
    shineColor = "rgba(255,255,255,0.9)",
    spread = 120,
    disabled = false,
}: ShinyTextProps) {
    const progress = useMotionValue(0);
    const elapsedRef = useRef(0);
    const lastTimeRef = useRef<number | null>(null);

    const animationDuration = speed * 1000;

    useAnimationFrame((time) => {
        if (disabled) {
            lastTimeRef.current = null;
            return;
        }

        if (lastTimeRef.current === null) {
            lastTimeRef.current = time;
            return;
        }

        const deltaTime = time - lastTimeRef.current;
        lastTimeRef.current = time;
        elapsedRef.current += deltaTime;

        const fullCycle = animationDuration * 2;
        const cycleTime = elapsedRef.current % fullCycle;

        if (cycleTime < animationDuration) {
            progress.set((cycleTime / animationDuration) * 100);
        } else {
            progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
        }
    });

    const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`);

    const gradientStyle = {
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text" as const,
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    return (
        <motion.span
            className={className}
            style={{ ...gradientStyle, backgroundPosition }}
        >
            {text}
        </motion.span>
    );
}

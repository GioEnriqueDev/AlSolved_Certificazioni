"use client";

import { motion } from "framer-motion";

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
    { left: 10, top: 20, delay: 0, duration: 12 },
    { left: 25, top: 80, delay: 1.5, duration: 15 },
    { left: 40, top: 45, delay: 0.8, duration: 18 },
    { left: 55, top: 15, delay: 2.2, duration: 14 },
    { left: 70, top: 60, delay: 0.3, duration: 16 },
    { left: 85, top: 35, delay: 1.8, duration: 13 },
    { left: 15, top: 70, delay: 2.5, duration: 17 },
    { left: 45, top: 90, delay: 0.5, duration: 11 },
    { left: 60, top: 25, delay: 1.2, duration: 19 },
    { left: 90, top: 55, delay: 3.0, duration: 12 },
    { left: 5, top: 50, delay: 1.0, duration: 14 },
    { left: 35, top: 10, delay: 2.8, duration: 16 },
    { left: 75, top: 85, delay: 0.7, duration: 15 },
    { left: 50, top: 40, delay: 1.5, duration: 13 },
    { left: 20, top: 95, delay: 2.0, duration: 18 },
];

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[150px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Animated Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                <motion.line
                    x1="0%"
                    y1="20%"
                    x2="100%"
                    y2="80%"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.line
                    x1="100%"
                    y1="10%"
                    x2="0%"
                    y2="90%"
                    stroke="white"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </svg>

            {/* Floating Particles - Fixed positions */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/20"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-96 h-96 border-l border-t border-white/5 rounded-br-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border-r border-b border-white/5 rounded-tl-[100px]" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        </div>
    );
}

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
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA]">
            {/* Very Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Glowing Mesh Gradients (Light Theme) */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-orange-400/5 blur-[150px]"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Center Premium Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/40 blur-[100px] rounded-full mix-blend-overlay"></div>

            {/* Floating Dust Particles (Darker for light theme) */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-black/5"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -150, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Premium Corner Accents */}
            <div className="absolute top-0 left-0 w-96 h-96 border-l border-t border-black/[0.03] rounded-br-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border-r border-b border-black/[0.03] rounded-tl-[120px]" />

            {/* Fade Out Gradient at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/90" />
        </div>
    );
}

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
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA] perspective-1000">
            {/* Ambient Base Gradients */}
            <div className="absolute inset-0 top-[-20%]">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
                <div className="absolute top-32 right-1/4 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[150px] mix-blend-multiply opacity-50" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-screen-lg h-[400px] bg-white/60 blur-[100px] rounded-[100%] z-10" />
            </div>

            {/* 3D Floor Grid */}
            <div
                className="absolute inset-x-0 bottom-[-30%] h-[70vh] origin-top opacity-30"
                style={{
                    transform: "rotateX(75deg) scale(2.5)",
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
                }}
            />

            {/* Moving Light across the 3D Floor */}
            <motion.div
                className="absolute bottom-[10%] left-[-20%] w-[140%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm rotate-[10deg]"
                animate={{
                    y: ['-100vh', '100vh'],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating Glassmorphism Panels (Abstract Certifications/Trust elements) */}
            <div className="absolute inset-0 z-0">
                {/* Floating Shield/Card 1 - Right Side */}
                <motion.div
                    className="absolute top-32 right-[5%] lg:right-[15%] w-64 h-80 rounded-[2rem] border border-white/60 bg-white/10 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.4)_inset]"
                    style={{ transformStyle: "preserve-3d" }}
                    animate={{
                        y: [-20, 20, -20],
                        rotateX: [10, -5, 10],
                        rotateY: [-15, 5, -15],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {/* Inner abstract lines to mimic a document/certificate */}
                    <div className="absolute inset-x-6 top-8 h-1 rounded-full bg-gradient-to-r from-primary/20 to-transparent w-2/3" />
                    <div className="absolute inset-x-6 top-16 h-1 rounded-full bg-black/5 w-1/2" />
                    <div className="absolute inset-x-6 top-24 h-1 rounded-full bg-black/5 w-4/5" />
                    {/* Abstract seal/badge */}
                    <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border border-primary/30" />
                    </div>
                </motion.div>

                {/* Floating Shield/Card 2 - Left Side, further back */}
                <motion.div
                    className="absolute top-64 left-[2%] lg:left-[10%] w-48 h-64 rounded-[1.5rem] border border-white/40 bg-white/5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                    style={{ transformStyle: "preserve-3d", zIndex: -1 }}
                    animate={{
                        y: [15, -15, 15],
                        rotateX: [-5, 10, -5],
                        rotateY: [10, -10, 10],
                        scale: [0.85, 0.85, 0.85],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                >
                    {/* Inner abstract lines */}
                    <div className="absolute inset-x-5 top-6 h-1 rounded-full bg-black/5 w-3/4" />
                    <div className="absolute inset-x-5 top-12 h-1 rounded-full bg-black/5 w-1/2" />
                </motion.div>
            </div>

            {/* Glowing Mesh Gradients (Light Theme) */}
            <motion.div
                className="absolute top-[20%] left-[-5%] w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]"
                animate={{
                    x: [0, 80, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#FAFAFA]" />
        </div>
    );
}

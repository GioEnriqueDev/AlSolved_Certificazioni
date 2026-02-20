"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Darker, subtle particles for the light theme
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
];

export default function AnimatedBackground() {
    const { scrollYProgress } = useScroll();

    // Map scroll progress to massive 3D transformations
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    const gridRotateX = useTransform(scrollYProgress, [0, 1], [80, 50]);
    const gridY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    // Monoliths flying forward as you scroll down
    const m1Z = useTransform(scrollYProgress, [0, 1], [50, 800]);
    const m1Y = useTransform(scrollYProgress, [0, 1], [-30, -300]);
    const m1RotateX = useTransform(scrollYProgress, [0, 1], [15, 60]);

    const m2Z = useTransform(scrollYProgress, [0, 1], [-100, 600]);
    const m2Y = useTransform(scrollYProgress, [0, 1], [20, 200]);
    const m2RotateY = useTransform(scrollYProgress, [0, 1], [20, -40]);

    const haloZ = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    const haloRotateZ = useTransform(scrollYProgress, [0, 1], [0, 720]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA] z-[-1]" style={{ perspective: "1500px" }}>
            {/* 0. Base 3D Rendered Image */}
            <motion.div
                className="absolute inset-0 z-[-1] opacity-40 mix-blend-multiply"
                style={{
                    y: bgY,
                    scale: bgScale
                }}
            >
                <Image
                    src="/images/abstract_3d_glass.png"
                    alt="Abstract 3D Background"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
            </motion.div>

            {/* 1. Volumetric Light Blooms (Background) */}
            <div className="absolute inset-x-0 top-0 h-[60vh]">
                <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] mix-blend-multiply opacity-60" />
                <div className="absolute top-[5%] right-[10%] w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[160px] mix-blend-multiply opacity-50" />
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/80 blur-[100px] rounded-full z-10" />
            </div>

            {/* 2. Architectural 3D Infinite Floor Grid */}
            <div className="absolute inset-x-0 bottom-[-50%] h-[150vh] origin-top opacity-40">
                <motion.div
                    className="w-full h-[200%]"
                    style={{
                        transformStyle: "preserve-3d",
                        rotateX: gridRotateX,
                        y: gridY,
                        backgroundImage: `
              linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"
                    }}
                />
            </div>

            {/* 3. Volumetric Ray (Sweeps across the scene) */}
            <motion.div
                className="absolute bottom-1/4 left-[-30%] w-[160%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[2px] rotate-[12deg]"
                animate={{
                    y: ['-80vh', '120vh'],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* 4. Advanced 3D Glass Monoliths (True depth) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center transform-gpu">

                {/* --- MONOLITH 1 (Right, Foreground) --- */}
                <motion.div
                    className="absolute right-[5%] lg:right-[15%] w-72 h-96 rounded-[2.5rem] bg-white/20 backdrop-blur-2xl border border-white/60"
                    style={{
                        transformStyle: "preserve-3d",
                        y: m1Y,
                        z: m1Z,
                        rotateX: m1RotateX,
                        rotateY: -25,
                        boxShadow: `
              0 30px 60px rgba(0,0,0,0.08), 
              inset 0 1px 0 rgba(255,255,255,0.8),
              inset 0 0 40px rgba(255,255,255,0.3)
            `
                    }}
                >
                    {/* Inner 3D Layers (Pop out of the glass) */}
                    <div className="absolute inset-0 " style={{ transformStyle: "preserve-3d" }}>
                        {/* Certificate lines floating above glass */}
                        <div className="absolute top-10 left-8 h-1.5 rounded-full bg-gradient-to-r from-primary/30 to-transparent w-2/3 shadow-sm" style={{ transform: "translateZ(30px)" }} />
                        <div className="absolute top-16 left-8 h-1 rounded-full bg-black/10 w-1/2" style={{ transform: "translateZ(20px)" }} />
                        <div className="absolute top-24 left-8 h-1 rounded-full bg-black/5 w-4/5" style={{ transform: "translateZ(10px)" }} />

                        {/* Floating Shield Seal */}
                        <div
                            className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white/40 border border-white/80 shadow-[0_10px_30px_rgba(242,78,107,0.15)] flex items-center justify-center backdrop-blur-md"
                            style={{ transform: "translateZ(50px)" }}
                        >
                            <div className="w-10 h-10 rounded-full border-2 border-primary/40 flex items-center justify-center relative">
                                <motion.div
                                    className="absolute inset-0 rounded-full animate-ping opacity-30 bg-primary/20"
                                    style={{ animationDuration: '3s' }}
                                />
                                <div className="w-3 h-3 rounded-full bg-primary/60" />
                            </div>
                        </div>

                        {/* Edge highlight interacting with light */}
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(1px)" }} />
                    </div>
                </motion.div>

                {/* --- MONOLITH 2 (Left, Background) --- */}
                <motion.div
                    className="absolute left-[3%] lg:left-[10%] w-56 h-72 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/40"
                    style={{
                        transformStyle: "preserve-3d",
                        y: m2Y,
                        z: m2Z,
                        rotateX: -10,
                        rotateY: m2RotateY,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.4)"
                    }}
                >
                    <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                        <div className="absolute top-8 left-6 h-1 rounded-full bg-black/10 w-3/4" style={{ transform: "translateZ(15px)" }} />
                        <div className="absolute top-14 left-6 h-1 rounded-full bg-black/5 w-1/2" style={{ transform: "translateZ(10px)" }} />
                    </div>
                </motion.div>

                {/* --- 3D RING / HALO (Center-Right, Far Background) --- */}
                <motion.div
                    className="absolute top-1/4 right-[30%] w-96 h-96 rounded-full border-[1px] border-primary/20"
                    style={{
                        transformStyle: "preserve-3d",
                        z: haloZ,
                        rotateX: 60,
                        rotateY: 20,
                        rotateZ: haloRotateZ
                    }}
                >
                    {/* Inner overlapping rings */}
                    <div className="absolute inset-4 rounded-full border-[2px] border-white/40 border-t-transparent" style={{ transform: "translateZ(20px)" }} />
                    <div className="absolute inset-8 rounded-full border-[1px] border-orange-300/20" style={{ transform: "translateZ(-20px)" }} />
                    {/* Glowing orb inside ring */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
                </motion.div>
            </div>

            {/* 5. Fluid Colored Orbs (Interactive feel) */}
            <motion.div
                className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/4 blur-[120px]"
                animate={{
                    x: [0, 120, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* 6. Subtle Dust Particles */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-black/10"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
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

            {/* 7. Premium Cinematic Vignette (Corners & Bottom) */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02),transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.02),transparent_70%)]" />

            {/* Bottom Fade out (Creates the infinite horizon effect) */}
            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-10" />

            {/* Global grain texture for filmic look */}
            <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
        </div>
    );
}

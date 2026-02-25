"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import abstractGlassImg from "@/assets/images/abstract_3d_glass.png";

// Highly reduced particle count for better CPU performance
const particles = [
    { left: 15, top: 25, delay: 0, duration: 25 },
    { left: 75, top: 45, delay: 2, duration: 20 },
    { left: 45, top: 75, delay: 1, duration: 22 },
];

export default function AnimatedBackground() {
    // Optimization: we keep only the most visually impactful scroll transforms
    // and remove the expensive rotateX/rotateY computations that force constant repaints
    const { scrollYProgress } = useScroll();

    const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const m1Y = useTransform(scrollYProgress, [0, 1], [-20, -100]);
    const m2Y = useTransform(scrollYProgress, [0, 1], [10, 80]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA] z-[-1]">

            {/* 0. Base Rendered Image - Fast and static */}
            <motion.div
                className="absolute inset-0 z-[-1] opacity-40 mix-blend-multiply"
                style={{ y: bgY, willChange: "transform" }}
            >
                <Image
                    src={abstractGlassImg}
                    alt="Abstract 3D Background"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
            </motion.div>

            {/* 1. Volumetric Light Blooms - Simplified */}
            <div className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.1),transparent_70%)] mix-blend-multiply opacity-50" />
                <div className="absolute top-[5%] right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(254,215,170,0.2),transparent_70%)] mix-blend-multiply opacity-40" />
            </div>

            {/* 2. Advanced Glass Monoliths - Static Transforms instead of dynamic scroll hooks */}
            <div className="absolute inset-0 z-0 flex items-center justify-center transform-gpu">

                {/* --- MONOLITH 1 --- */}
                <motion.div
                    className="absolute right-[5%] lg:right-[15%] w-72 h-96 rounded-[2.5rem] bg-white/60 border border-white/60"
                    style={{
                        y: m1Y,
                        rotate: -5,
                        willChange: "transform",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
                        backdropFilter: "blur(12px)", // Use native CSS blur, much faster than manually layering overlays
                    }}
                >
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-8 h-1.5 rounded-full bg-gradient-to-r from-primary/30 to-transparent w-2/3" />
                        <div className="absolute top-16 left-8 h-1 rounded-full bg-black/10 w-1/2" />

                        <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-white/80 border border-white/80 shadow-[0_10px_30px_rgba(242,78,107,0.15)] flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full border-2 border-primary/40 flex items-center justify-center relative">
                                <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-primary/20" style={{ animationDuration: '4s' }} />
                                <div className="w-3 h-3 rounded-full bg-primary/60" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- MONOLITH 2 --- */}
                <motion.div
                    className="hidden md:block absolute left-[3%] lg:left-[10%] w-56 h-72 rounded-[2rem] bg-white/50 border border-white/40"
                    style={{
                        y: m2Y,
                        rotate: 8,
                        willChange: "transform",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.03)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <div className="absolute inset-0">
                        <div className="absolute top-8 left-6 h-1 rounded-full bg-black/10 w-3/4" />
                        <div className="absolute top-14 left-6 h-1 rounded-full bg-black/5 w-1/2" />
                    </div>
                </motion.div>
            </div>

            {/* 3. Subtle Dust Particles */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-black/5"
                    style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
                    animate={{ y: [0, -50, 0], opacity: [0, 1, 0] }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Premium Vignette */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02),transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.02),transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-10" />
        </div>
    );
}

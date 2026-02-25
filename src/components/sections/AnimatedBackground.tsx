"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import abstractGlassImg from "@/assets/images/abstract_3d_glass.png";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene so it does not block SSR or initial load
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA] z-[-1]">

            {/* 0. Base 3D Rendered Image (Static, fast fallback) */}
            <div className="absolute inset-0 z-[-1] opacity-30 mix-blend-multiply transition-opacity duration-1000">
                <Image
                    src={abstractGlassImg}
                    alt="Abstract 3D Background"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
            </div>

            {/* 1. Volumetric Light Blooms (CSS Fast Render) */}
            <div className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.15),transparent_70%)] mix-blend-multiply opacity-60" />
                <div className="absolute top-[5%] right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(254,215,170,0.25),transparent_70%)] mix-blend-multiply opacity-50" />
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),transparent_60%)] z-10" />
            </div>

            {/* 2. WebGL 3D Canvas Layer (GPU Accelerated) */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>

            {/* 3. Volumetric Ray (Sweeps across the scene) */}
            <motion.div
                className="absolute bottom-1/4 left-[-30%] w-[160%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-[12deg]"
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

            {/* Premium Cinematic Vignette (Corners & Bottom) */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.02),transparent_70%)]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.02),transparent_70%)]" />

            {/* Bottom Fade out (Creates the infinite horizon effect) */}
            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent z-10" />
        </div>
    );
}

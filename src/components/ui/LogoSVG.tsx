"use client";

import { motion } from "framer-motion";

interface LogoSVGProps {
    isDrawn: boolean;
    onDrawComplete?: () => void;
}

export default function LogoSVG({ isDrawn, onDrawComplete }: LogoSVGProps) {
    const drawTransition = {
        duration: 1.5,
        ease: "easeOut" as const,
    };

    return (
        <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
        >
            {/* Pink Speech Bubble (Front) */}
            <motion.path
                d="M20 20C20 14.4772 24.4772 10 30 10H90C95.5228 10 100 14.4772 100 20V60C100 65.5228 95.5228 70 90 70H50L30 90V70H30C24.4772 70 20 65.5228 20 60V20Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: 1,
                    opacity: 1,
                    stroke: isDrawn ? "#F24E6B" : "white",
                    fill: isDrawn ? "rgba(242, 78, 107, 0.15)" : "transparent",
                }}
                transition={drawTransition}
                onAnimationComplete={() => {
                    if (!isDrawn) return;
                    onDrawComplete?.();
                }}
                style={{
                    filter: isDrawn ? "drop-shadow(0 0 20px rgba(242, 78, 107, 0.8))" : "none",
                }}
            />

            {/* Gray Speech Bubble (Back) */}
            <motion.path
                d="M60 40C60 34.4772 64.4772 30 70 30H150C155.523 30 160 34.4772 160 40V80C160 85.5228 155.523 90 150 90H140V110L120 90H70C64.4772 90 60 85.5228 60 80V40Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: 1,
                    opacity: 1,
                    stroke: isDrawn ? "#6B7280" : "white",
                    fill: isDrawn ? "rgba(107, 114, 128, 0.1)" : "transparent",
                }}
                transition={{
                    ...drawTransition,
                    delay: 0.3,
                }}
                style={{
                    filter: isDrawn ? "drop-shadow(0 0 10px rgba(107, 114, 128, 0.5))" : "none",
                }}
            />
        </svg>
    );
}

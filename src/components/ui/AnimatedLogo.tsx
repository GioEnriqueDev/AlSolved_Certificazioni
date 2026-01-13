"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
    className?: string;
    showText?: boolean;
    size?: "sm" | "md" | "lg";
}

export default function AnimatedLogo({
    className,
    showText = true,
    size = "md",
}: AnimatedLogoProps) {
    const sizes = {
        sm: { icon: 32, text: "text-lg" },
        md: { icon: 40, text: "text-xl" },
        lg: { icon: 56, text: "text-3xl" },
    };

    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Animated SVG Icon */}
            <motion.svg
                width={sizes[size].icon}
                height={sizes[size].icon}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                {/* Pink Speech Bubble (Front) */}
                <motion.path
                    d="M8 10C8 7.79086 9.79086 6 12 6H28C30.2091 6 32 7.79086 32 10V22C32 24.2091 30.2091 26 28 26H16L10 32V26H12C9.79086 26 8 24.2091 8 22V10Z"
                    fill="#F24E6B"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                />
                {/* Gray Speech Bubble (Back) */}
                <motion.path
                    d="M16 18C16 15.7909 17.7909 14 20 14H36C38.2091 14 40 15.7909 40 18V30C40 32.2091 38.2091 34 36 34H32V40L26 34H20C17.7909 34 16 32.2091 16 30V18Z"
                    fill="#4B5563"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </motion.svg>

            {/* Text */}
            {showText && (
                <motion.span
                    className={cn(
                        "font-bold tracking-tight text-foreground",
                        sizes[size].text
                    )}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    ALSOLVED
                </motion.span>
            )}
        </div>
    );
}

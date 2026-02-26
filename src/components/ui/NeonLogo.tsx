"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { icon: 28, text: "text-lg", gap: "gap-2.5" },
  md: { icon: 36, text: "text-xl", gap: "gap-3" },
  lg: { icon: 52, text: "text-3xl", gap: "gap-4" },
} as const;

export default function NeonLogo({ className, size = "md" }: NeonLogoProps) {
  const reduceMotion = useReducedMotion();
  const current = sizes[size];

  return (
    <div className={cn("relative inline-flex items-center", current.gap, className)}>
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-primary/15 blur-xl opacity-70" />

      <motion.svg
        width={current.icon}
        height={current.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative shrink-0"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <linearGradient id="alsolved-stroke" x1="6" y1="6" x2="40" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F24E6B" />
            <stop offset="1" stopColor="#FB923C" />
          </linearGradient>
          <filter id="alsolved-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M8 10C8 7.79086 9.79086 6 12 6H28C30.2091 6 32 7.79086 32 10V22C32 24.2091 30.2091 26 28 26H16L10 32V26H12C9.79086 26 8 24.2091 8 22V10Z"
          stroke="url(#alsolved-stroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(242,78,107,0.10)"
          filter="url(#alsolved-glow)"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
        <motion.path
          d="M16 18C16 15.7909 17.7909 14 20 14H36C38.2091 14 40 15.7909 40 18V30C40 32.2091 38.2091 34 36 34H32V40L26 34H20C17.7909 34 16 32.2091 16 30V18Z"
          stroke="#64748B"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(100,116,139,0.05)"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.95 }}
          transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.1, ease: "easeInOut" }}
        />
      </motion.svg>

      <div className="relative">
        <motion.span
          className={cn("relative z-10 font-bold tracking-[0.18em] text-foreground", current.text)}
          initial={reduceMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.18 }}
          style={{ textShadow: "0 1px 0 rgba(255,255,255,0.9), 0 10px 25px rgba(15,23,42,0.06)" }}
        >
          ALSOLVED
        </motion.span>

        <motion.span
          aria-hidden="true"
          className={cn("absolute inset-0 -z-0 font-bold tracking-[0.18em] text-primary/70", current.text)}
          style={{ filter: "blur(7px)" }}
          animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.28, 0.45, 0.34] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 4.8, repeat: Infinity, repeatType: "mirror" }}
        >
          ALSOLVED
        </motion.span>
      </div>
    </div>
  );
}

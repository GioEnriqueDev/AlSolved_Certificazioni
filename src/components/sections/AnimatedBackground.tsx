"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Prevent SVG hydration mismatch on gradients
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background" />
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{ contain: "layout style paint" }}
    >
      {/* 
        Ultra-High Performance Sony PS5 Wave Background
        Zero CSS `filter: blur()`, zero layout reflows. 
        Pure SVG hardware-accelerated transforms at 60fps.
      */}
      <svg
        className="absolute inset-0 h-full w-full opacity-90 max-sm:opacity-75"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="30%" stopColor="rgba(59,130,246,0.5)" />
            <stop offset="70%" stopColor="rgba(99,102,241,0.5)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(242,78,107,0)" />
            <stop offset="25%" stopColor="rgba(242,78,107,0.4)" />
            <stop offset="75%" stopColor="rgba(226,29,72,0.4)" />
            <stop offset="100%" stopColor="rgba(226,29,72,0)" />
          </linearGradient>
          <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
            <stop offset="30%" stopColor="rgba(6,182,212,0.6)" />
            <stop offset="70%" stopColor="rgba(14,165,233,0.6)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0)" />
          </linearGradient>
          <linearGradient id="solid-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Ambient background glow (static, extremely fast) */}
        <circle cx="15%" cy="20%" r="35%" fill="rgba(242,78,107,0.06)" />
        <circle cx="85%" cy="45%" r="35%" fill="rgba(6,182,212,0.06)" />
        <circle cx="50%" cy="80%" r="40%" fill="rgba(59,130,246,0.05)" />

        {/* Wave Group 1: Blue/Indigo Base Ribbon */}
        <motion.g
          animate={reduceMotion ? {} : { y: [0, -25, 0], scaleY: [1, 1.05, 1], rotate: [0, -1, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          style={{ originX: "50%", originY: "50%" }}
        >
          {/* Solid fill for depth */}
          <path d="M-200,500 C300,350 700,650 1640,400 L1640,900 L-200,900 Z" fill="url(#solid-grad-1)" />
          {/* Thick colored glow line */}
          <path fill="none" stroke="url(#wave-grad-1)" strokeWidth="14" d="M-200,500 C300,350 700,650 1640,400" />
          {/* Sharp core highlight line */}
          <path fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" d="M-200,500 C300,350 700,650 1640,400" />
        </motion.g>

        {/* Wave Group 2: Rose/Primary Secondary Ribbon */}
        <motion.g
          animate={reduceMotion ? {} : { y: [0, 35, 0], scaleY: [1, 0.95, 1], rotate: [0, 1.5, 0] }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <path fill="none" stroke="url(#wave-grad-2)" strokeWidth="18" d="M-200,400 C400,700 900,250 1640,550" />
          <path fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" d="M-200,400 C400,700 900,250 1640,550" />
        </motion.g>

        {/* Wave Group 3: Cyan/Teal Overlay Ribbon (Aurora Borealis classic) */}
        <motion.g
          animate={reduceMotion ? {} : { y: [0, -20, 0], scaleY: [1, 1.02, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <path fill="none" stroke="url(#wave-grad-3)" strokeWidth="12" d="M-200,650 C200,450 800,750 1640,450" />
          <path fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" d="M-200,650 C200,450 800,750 1640,450" />
        </motion.g>
      </svg>

      {/* Light Film Noise — hidden on mobile for performance */}
      <div
        className="absolute inset-0 opacity-[0.03] max-sm:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: "translateZ(0)",
        }}
      />

      {/* Subtle Bottom fade to white/background */}
      <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

"use client";

import { useReducedMotion, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMobileViewport } from "@/hooks/useMobileViewport";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();
  const { isMobile, ready } = useMobileViewport();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !ready) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background" />
    );
  }

  if (isMobile) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
        <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
    );
  }

  // Pure Sony-style wave paths (sine-like cubic beziers)
  const paths = {
    blue: {
      d1: "M-200,450 C200,300 1000,600 1640,350",
      d2: "M-200,400 C400,600 1100,200 1640,450"
    },
    rose: {
      d1: "M-200,550 C400,750 1100,350 1640,650",
      d2: "M-200,600 C300,400 1000,800 1640,500"
    },
    cyan: {
      d1: "M-200,350 C500,600 900,100 1640,450",
      d2: "M-200,450 C300,200 1100,600 1640,350"
    }
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{ contain: "layout style paint" }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-60 sm:opacity-75"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="aurora-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="45" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="sony-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="30%" stopColor="rgba(59,130,246,0.55)" />
            <stop offset="70%" stopColor="rgba(99,102,241,0.55)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>

          <linearGradient id="sony-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(242,78,107,0)" />
            <stop offset="25%" stopColor="rgba(242,78,107,0.5)" />
            <stop offset="75%" stopColor="rgba(226,29,72,0.5)" />
            <stop offset="100%" stopColor="rgba(226,29,72,0)" />
          </linearGradient>

          <linearGradient id="sony-wave-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
            <stop offset="35%" stopColor="rgba(6,182,212,0.65)" />
            <stop offset="65%" stopColor="rgba(14,165,233,0.65)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0)" />
          </linearGradient>
        </defs>

        {/* Deep Background Glowing Orbs (Volumetric Light) */}
        <g filter="url(#aurora-glow)" className="opacity-40">
          <motion.circle
            cx="20%"
            cy="30%"
            r="400"
            fill="url(#sony-wave-1)"
            animate={reduceMotion ? {} : {
              cx: ["20%", "25%", "20%"],
              cy: ["30%", "25%", "30%"],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.circle
            cx="80%"
            cy="70%"
            r="500"
            fill="url(#sony-wave-2)"
            animate={reduceMotion ? {} : {
              cx: ["80%", "75%", "80%"],
              cy: ["70%", "75%", "70%"],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          />
        </g>

        {/* Cinematic Sony PS5 Style Flowing Ribbons */}
        <g filter="url(#aurora-glow)">
          {/* Blue Ribbon Layer */}
          <motion.g
            animate={reduceMotion ? {} : {
              x: ["-15%", "15%", "-15%"],
              y: [0, 20, 0],
            }}
            transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
            style={{ originX: "50%", originY: "50%" }}
          >
            <motion.path
              animate={reduceMotion ? {} : { d: [paths.blue.d1, paths.blue.d2, paths.blue.d1] }}
              transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
              fill="none"
              stroke="url(#sony-wave-1)"
              strokeWidth="140"
              strokeOpacity="0.8"
            />
            <motion.path
              animate={reduceMotion ? {} : { d: [paths.blue.d1, paths.blue.d2, paths.blue.d1] }}
              transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeOpacity="0.45"
            />
          </motion.g>

          {/* Rose Ribbon Layer */}
          <motion.g
            animate={reduceMotion ? {} : {
              x: ["15%", "-15%", "15%"],
              y: [0, -30, 0],
            }}
            transition={{ duration: 24, ease: "easeInOut", repeat: Infinity, delay: 1 }}
            style={{ originX: "50%", originY: "50%" }}
          >
            <motion.path
              animate={reduceMotion ? {} : { d: [paths.rose.d1, paths.rose.d2, paths.rose.d1] }}
              transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
              fill="none"
              stroke="url(#sony-wave-2)"
              strokeWidth="160"
              strokeOpacity="0.75"
            />
            <motion.path
              animate={reduceMotion ? {} : { d: [paths.rose.d1, paths.rose.d2, paths.rose.d1] }}
              transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
              fill="none"
              stroke="white"
              strokeWidth="5"
              strokeOpacity="0.35"
            />
          </motion.g>

          {/* Cyan Ribbon Layer */}
          <motion.g
            animate={reduceMotion ? {} : {
              x: ["-10%", "10%", "-10%"],
              y: [0, 40, 0],
            }}
            transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 2 }}
            style={{ originX: "50%", originY: "50%" }}
          >
            <motion.path
              animate={reduceMotion ? {} : { d: [paths.cyan.d1, paths.cyan.d2, paths.cyan.d1] }}
              transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              fill="none"
              stroke="url(#sony-wave-3)"
              strokeWidth="120"
              strokeOpacity="0.85"
            />
            <motion.path
              animate={reduceMotion ? {} : { d: [paths.cyan.d1, paths.cyan.d2, paths.cyan.d1] }}
              transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeOpacity="0.55"
            />
          </motion.g>
        </g>
      </svg>

      {/* Cinematic Film Grain Noise */}
      <motion.div
        className="absolute inset-0 max-sm:hidden opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          width: "110%",
          height: "110%",
          top: "-5%",
          left: "-5%",
        }}
        animate={{
          x: ["0%", "-1%", "1%", "-2%", "0%"],
          y: ["0%", "2%", "-1%", "1%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2, // Ultra-fast framerate jump
          ease: "linear",
          repeatType: "loop",
        }}
      />

      {/* Deep bottom fade for better readability */}
      <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-background via-background/70 to-transparent" />
    </div>
  );
}

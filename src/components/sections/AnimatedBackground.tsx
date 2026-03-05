"use client";

import { useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{ contain: "layout style paint" }}
    >
      {/* PS5 Wave Aurora Layer */}
      <div
        className="absolute inset-0 opacity-90 max-sm:opacity-75 blur-[100px] max-sm:blur-[65px] transform-gpu"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Rose / Primary Ribbon */}
        <div
          className={`absolute left-[-20%] top-[-5%] h-[35vh] w-[140vw] max-sm:h-[25vh] rounded-[100%] max-sm:w-[150vw] ${reduceMotion ? '' : 'animate-aurora-1'}`}
          style={{ background: 'linear-gradient(90deg, rgba(242,78,107,0), rgba(242,78,107,0.35), rgba(226,29,72,0.15), rgba(242,78,107,0))' }}
        />

        {/* Blue / Indigo Ribbon */}
        <div
          className={`absolute right-[-20%] top-[20%] h-[45vh] w-[150vw] max-sm:h-[35vh] rounded-[100%] max-sm:w-[160vw] ${reduceMotion ? '' : 'animate-aurora-2'}`}
          style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.3), rgba(99,102,241,0.12), rgba(59,130,246,0))' }}
        />

        {/* Cyan / Teal Ribbon (Aurora Borealis classic color) */}
        <div
          className={`absolute left-[0%] top-[40%] h-[25vh] w-[130vw] max-sm:h-[20vh] rounded-[100%] max-sm:w-[140vw] ${reduceMotion ? '' : 'animate-aurora-4'}`}
          style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0), rgba(6,182,212,0.22), rgba(14,165,233,0.1), rgba(6,182,212,0))' }}
        />

        {/* Amber / Orange Ribbon */}
        <div
          className={`absolute left-[-10%] top-[60%] h-[30vh] w-[140vw] max-sm:h-[25vh] rounded-[100%] max-sm:w-[150vw] ${reduceMotion ? '' : 'animate-aurora-3'}`}
          style={{ background: 'linear-gradient(90deg, rgba(251,146,60,0), rgba(251,146,60,0.25), rgba(245,158,11,0.08), rgba(251,146,60,0))' }}
        />

        {/* White highlight — center, for depth & luminosity */}
        <div
          className="absolute left-[20%] top-[25%] h-[40vh] w-[60vw] max-sm:h-[30vh] max-sm:w-[80vw] opacity-40 rounded-[100%]"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.45) 0%, transparent 70%)' }}
        />
      </div>

      {/* Light Film Noise — hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.04] max-sm:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: "translateZ(0)"
        }}
      />

      {/* Bottom fade — softer than before */}
      <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
}

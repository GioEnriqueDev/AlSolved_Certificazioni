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
        {/* Rose / Primary — upper-left zone */}
        <div
          className={`absolute left-[-15%] top-[-10%] h-[60vh] w-[70vw] max-sm:h-[50vh] max-sm:w-[90vw] ${reduceMotion ? '' : 'animate-wave-1'}`}
          style={{ background: 'radial-gradient(ellipse at 40% 45%, rgba(242,78,107,0.38) 0%, rgba(226,29,72,0.12) 50%, transparent 80%)' }}
        />

        {/* Blue / Indigo — center-right zone */}
        <div
          className={`absolute right-[-10%] top-[25%] h-[65vh] w-[65vw] max-sm:h-[55vh] max-sm:w-[85vw] ${reduceMotion ? '' : 'animate-wave-2'}`}
          style={{ background: 'radial-gradient(ellipse at 55% 50%, rgba(59,130,246,0.32) 0%, rgba(99,102,241,0.1) 55%, transparent 82%)' }}
        />

        {/* Amber / Orange — lower-left zone */}
        <div
          className={`absolute left-[5%] top-[55%] h-[50vh] w-[55vw] max-sm:h-[40vh] max-sm:w-[75vw] ${reduceMotion ? '' : 'animate-wave-3'}`}
          style={{ background: 'radial-gradient(ellipse at 45% 55%, rgba(251,146,60,0.28) 0%, rgba(245,158,11,0.08) 55%, transparent 80%)' }}
        />

        {/* White highlight — center, for depth & luminosity */}
        <div
          className="absolute left-[20%] top-[15%] h-[45vh] w-[50vw] max-sm:h-[35vh] max-sm:w-[60vw] opacity-50"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 65%)' }}
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

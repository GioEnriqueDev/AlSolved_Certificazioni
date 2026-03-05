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
        className="absolute inset-x-0 top-0 bottom-0 flex flex-col items-center justify-center opacity-85 max-sm:opacity-65 blur-[100px] max-sm:blur-[65px] transform-gpu"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Core Rose Wave */}
        <div
          className={`absolute left-[-25vw] h-[45vh] w-[150vw] rotate-[-8deg] origin-center max-sm:h-[35vh] max-sm:w-[200vw] ${reduceMotion ? '' : 'animate-wave-1'}`}
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(242,78,107,0.4) 40%, rgba(226,29,72,0.45) 60%, transparent 100%)' }}
        />

        {/* Deep Blue Wave */}
        <div
          className={`absolute right-[-25vw] top-[30%] h-[55vh] w-[150vw] rotate-[6deg] origin-center max-sm:h-[45vh] max-sm:w-[200vw] ${reduceMotion ? '' : 'animate-wave-2'}`}
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.35) 40%, rgba(99,102,241,0.4) 60%, transparent 100%)' }}
        />

        {/* Secondary Orange/Amber Highlight Wave */}
        <div
          className={`absolute left-0 bottom-[10%] h-[35vh] w-[120vw] rotate-[-4deg] origin-center max-sm:h-[25vh] max-sm:w-[150vw] ${reduceMotion ? '' : 'animate-wave-3'}`}
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(251,146,60,0.3) 50%, rgba(245,158,11,0.15) 80%, transparent 100%)' }}
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

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}

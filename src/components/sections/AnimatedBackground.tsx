"use client";

import { useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{ contain: "layout style paint" }}
    >
      {/* GPU Aurora Mesh — smaller blobs, no permanent will-change */}
      <div className="absolute inset-0 overflow-hidden opacity-90">
        {/* Primary Blob */}
        <div
          className={`absolute -top-[20%] -left-[10%] h-[40vw] w-[50vw] rounded-full max-sm:h-[35vw] max-sm:w-[40vw] ${reduceMotion ? '' : 'animate-blob'}`}
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 65%)',
            animationDuration: '24s',
          }}
        />
        {/* Secondary Blob */}
        <div
          className={`absolute top-[10%] -right-[15%] h-[50vw] w-[45vw] rounded-full max-sm:h-[40vw] max-sm:w-[35vw] ${reduceMotion ? '' : 'animate-blob'}`}
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0) 65%)',
            animationDuration: '28s',
            animationDelay: '2s',
            animationDirection: 'reverse',
          }}
        />
        {/* Accent Blob */}
        <div
          className={`absolute -bottom-[20%] left-[10%] h-[45vw] w-[55vw] rounded-full max-sm:h-[35vw] max-sm:w-[40vw] ${reduceMotion ? '' : 'animate-blob'}`}
          style={{
            background: 'radial-gradient(circle, rgba(226,29,72,0.1) 0%, rgba(226,29,72,0) 65%)',
            animationDuration: '22s',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Grid Topografica — hidden on mobile via CSS */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-darken max-sm:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

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

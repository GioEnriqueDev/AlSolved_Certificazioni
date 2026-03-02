"use client";

import { useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc]">

      {/* 1. Premium Geometric Grid (Struttura Topografica per il fattore B2B/Certificazioni) */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
        }}
      />

      {/* 2. Slow Aurora Mesh (Colori Professionali: Deep Blue, Slate, Accent) - Pure CSS */}
      <div className="absolute inset-0 opacity-[0.55] mix-blend-multiply filter blur-[90px] sm:blur-[140px]">
        {/* Primary Blob */}
        <div
          className={`absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-200/50 ${reduceMotion ? '' : 'animate-blob'}`}
          style={{ animationDelay: '0s', animationDuration: '24s' }}
        />
        {/* Secondary Blob */}
        <div
          className={`absolute top-[15%] -right-[15%] w-[50vw] h-[70vw] rounded-full bg-slate-300/40 ${reduceMotion ? '' : 'animate-blob'}`}
          style={{ animationDelay: '3s', animationDuration: '28s', animationDirection: 'reverse' }}
        />
        {/* Accent Blob */}
        <div
          className={`absolute -bottom-[20%] left-[20%] w-[65vw] h-[55vw] rounded-full bg-[rgba(242,78,107,0.08)] ${reduceMotion ? '' : 'animate-blob'}`}
          style={{ animationDelay: '5s', animationDuration: '22s' }}
        />
      </div>

      {/* 3. Cinematic Film Grain Overlay (Tactile Premium Feel) */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Bottom fade for readability of scrolling content */}
      <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent" />
    </div>
  );
}

"use client";

import { useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{ contain: "layout style paint" }}
    >
      {/* SVG Gooey Filter Definition */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="35" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 45 -15" result="gooey" />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      {/* Fluid Aurora Complex Layer */}
      <div
        className="absolute inset-0 opacity-[0.85] mix-blend-multiply max-sm:opacity-60"
        style={{ filter: "url(#gooey)" }}
      >
        {/* Core Rose/Pink Blob */}
        <div
          className={`absolute -top-[10%] left-[10%] h-[45vw] w-[50vw] rounded-full mix-blend-screen opacity-80 max-sm:h-[40vw] max-sm:w-[45vw] ${reduceMotion ? '' : 'animate-aurora-1'}`}
          style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(242,78,107,0.1) 0deg, rgba(226,29,72,0.15) 180deg, rgba(242,78,107,0.1) 360deg)' }}
        />

        {/* Secondary Orange/Amber Blob */}
        <div
          className={`absolute top-[20%] -right-[10%] h-[55vw] w-[45vw] rounded-full mix-blend-screen opacity-80 max-sm:h-[50vw] max-sm:w-[40vw] ${reduceMotion ? '' : 'animate-aurora-2'}`}
          style={{ background: 'radial-gradient(ellipse at center, rgba(251,146,60,0.15) 0%, rgba(245,158,11,0.05) 70%)' }}
        />

        {/* Deep Blue/Indigo Accent Blob */}
        <div
          className={`absolute -bottom-[20%] left-[20%] h-[60vw] w-[60vw] rounded-full mix-blend-screen opacity-90 max-sm:h-[50vw] max-sm:w-[50vw] ${reduceMotion ? '' : 'animate-aurora-3'}`}
          style={{ background: 'conic-gradient(from 90deg at 50% 50%, rgba(59,130,246,0.1) 0deg, rgba(99,102,241,0.15) 180deg, rgba(59,130,246,0.1) 360deg)' }}
        />

        {/* Floating Highlight Blob */}
        <div
          className={`absolute top-[40%] left-[40%] h-[40vw] w-[40vw] rounded-full mix-blend-color-dodge opacity-60 max-sm:h-[30vw] max-sm:w-[30vw] ${reduceMotion ? '' : 'animate-aurora-4'}`}
          style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 60%)' }}
        />
      </div>

      {/* Frosted Glass Diffuser Layer - Creates the Apple/premium feel */}
      <div className="absolute inset-0 backdrop-blur-[100px] max-sm:backdrop-blur-[60px]" />

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

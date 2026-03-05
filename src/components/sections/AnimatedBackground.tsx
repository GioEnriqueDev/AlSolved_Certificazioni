"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(110%_82%_at_12%_-10%,rgba(14,165,233,0.14),transparent_62%),radial-gradient(90%_70%_at_88%_8%,rgba(59,130,246,0.12),transparent_68%),radial-gradient(70%_56%_at_46%_96%,rgba(245,158,11,0.09),transparent_70%)]" />

      <motion.div
        className="absolute -left-[12%] top-[4%] h-[34rem] w-[34rem] rounded-full bg-sky-300/25 blur-[120px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 64, 0],
                y: [0, 24, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-blue-400/25 blur-[120px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -58, 0],
                y: [0, -22, 0],
                scale: [1.02, 1, 1.04],
              }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute bottom-[-16%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-[110px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -34, 0],
                y: [0, -28, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.42) 18%, rgba(255,255,255,0) 36%, rgba(0,122,255,0.2) 55%, rgba(255,255,255,0) 74%, rgba(14,165,233,0.22) 92%, rgba(255,255,255,0) 100%)",
          filter: "blur(0.5px)",
        }}
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="beam-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="34%" stopColor="rgba(255,255,255,0.58)" />
            <stop offset="66%" stopColor="rgba(14,165,233,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="beam-b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="44%" stopColor="rgba(59,130,246,0.52)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M-140 318C260 260 646 438 900 380C1096 336 1266 220 1600 288"
          stroke="url(#beam-a)"
          strokeWidth="120"
          strokeOpacity="0.5"
          fill="none"
          animate={reduceMotion ? {} : { x: [-26, 26, -26], y: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M-120 610C240 700 590 520 910 596C1178 660 1302 760 1600 718"
          stroke="url(#beam-b)"
          strokeWidth="140"
          strokeOpacity="0.42"
          fill="none"
          animate={reduceMotion ? {} : { x: [24, -24, 24], y: [0, -16, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-[34vh] bg-gradient-to-t from-background via-background/72 to-transparent" />
    </div>
  );
}

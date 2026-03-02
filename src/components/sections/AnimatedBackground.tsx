"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMobileViewport } from "@/hooks/useMobileViewport";

function MeshGradientBackground({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f6f8fc]">
      {/* Rumore di fondo per dare texture granulosa (Premium feel) */}
      <div className="absolute inset-0 hero-noise opacity-40 mix-blend-overlay" />

      {/* Blob sfocati che compongono il Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                x: [0, -30, 20, 0],
                y: [0, 40, -10, 0],
                scale: [1, 1.1, 0.9, 1],
              }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] left-[-5%] h-[45vw] w-[45vw] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px]"
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
                scale: [1, 0.9, 1.1, 1],
              }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -right-[10%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-orange-300/15 blur-[80px] sm:blur-[120px]"
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                x: [0, -20, 30, 0],
                y: [0, 20, -30, 0],
                scale: [1, 1.05, 0.95, 1],
              }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute bottom-[-10%] left-[20%] h-[50vw] w-[60vw] rounded-full bg-blue-400/10 blur-[90px] sm:blur-[140px]"
        />
      </div>

      {/* Sfumature alla base per fondere con i contenuti */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#f6f8fc] via-[#f6f8fc]/85 to-transparent backdrop-blur-[2px]" />
    </div>
  );
}

export default function AnimatedBackground() {
  const reduceMotion = !!useReducedMotion();
  const { isMobile } = useMobileViewport();

  // Entrambe le interfacce Mobile/Desktop condividono la logica performante.
  // L'assenza di scroll listener (useScroll) alleggerisce il JS Thread.
  return <MeshGradientBackground reduceMotion={reduceMotion} />;
}


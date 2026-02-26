"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import abstractGlassImg from "@/assets/images/abstract_3d_glass.png";

const particles = [
  { left: 14, top: 22, delay: 0, duration: 24 },
  { left: 74, top: 38, delay: 1.4, duration: 20 },
  { left: 43, top: 70, delay: 0.7, duration: 22 },
];

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const monolithA = useTransform(scrollYProgress, [0, 1], [-16, -80]);
  const monolithB = useTransform(scrollYProgress, [0, 1], [8, 62]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(180deg,#fbfbfd,#f5f7fb)]">
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <Image
          src={abstractGlassImg}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 hero-noise opacity-60" />

      <div className="absolute inset-0">
        <div className="absolute left-[6%] top-[4%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.15),transparent_70%)] blur-3xl" />
        <div className="absolute right-[3%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.16),transparent_72%)] blur-3xl" />
        <div className="absolute left-1/2 top-[46%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] blur-3xl" />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <motion.div
          className="glass-panel absolute right-[8%] top-[16%] h-[26rem] w-[18rem] rounded-[2.25rem] border-white/55 bg-white/50"
          style={reduceMotion ? { rotate: -5 } : { y: monolithA, rotate: -5 }}
        >
          <div className="absolute inset-0 rounded-[2.25rem] border border-white/40">
            <div className="absolute left-7 top-8 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-primary/35 to-transparent" />
            <div className="absolute left-7 top-14 h-1 w-1/2 rounded-full bg-black/8" />
            <div className="absolute bottom-10 right-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-[0_20px_45px_-20px_rgba(242,78,107,0.35)]">
              <div className="relative h-8 w-8 rounded-full border-2 border-primary/45">
                <span className="absolute inset-0 rounded-full bg-primary/20" style={{ animation: reduceMotion ? "none" : "pulse-glow 4s ease-in-out infinite" }} />
                <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel absolute left-[6%] top-[34%] h-[18rem] w-[14rem] rounded-[1.85rem] border-white/45 bg-white/45"
          style={reduceMotion ? { rotate: 8 } : { y: monolithB, rotate: 8 }}
        >
          <div className="absolute inset-0 rounded-[1.85rem] border border-white/30">
            <div className="absolute left-6 top-7 h-1 w-2/3 rounded-full bg-black/10" />
            <div className="absolute left-6 top-12 h-1 w-1/2 rounded-full bg-black/5" />
            <div className="absolute bottom-8 left-6 h-14 w-14 rounded-xl bg-white/70 shadow-inner" />
          </div>
        </motion.div>
      </div>

      {!reduceMotion && (
        <div className="absolute inset-0 hidden md:block">
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-black/10"
              style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
              animate={{ y: [0, -28, 0], opacity: [0, 1, 0] }}
              transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "linear" }}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-gradient-to-t from-[#f6f8fc] via-[#f6f8fc]/82 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-white/25" />
    </div>
  );
}

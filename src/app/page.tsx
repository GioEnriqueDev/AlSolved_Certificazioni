"use client";

import CanvasWrapper from "@/components/canvas/CanvasWrapper";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { scrollState } from "@/lib/scrollState";
import { ArrowRight, ShieldCheck, Lock, Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Sync Framer Motion scroll directly to our vanilla Mutable object for R3F to read
  // at 60fps without triggering React context re-renders!
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    scrollState.progress = latest;
  });

  return (
    <div className="relative bg-black text-white selection:bg-primary selection:text-white pb-24 touch-pan-y">
      {/* 3D Canvas Background fixed behind everything */}
      <CanvasWrapper />

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section className="h-screen flex items-center justify-center relative px-6 pointer-events-none">
          <motion.div
            className="max-w-4xl text-center pointer-events-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter mix-blend-difference drop-shadow-2xl">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Core</span> of Excellence.
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto mix-blend-difference drop-shadow-lg">
              Elevating B2B standards through Quality, Cyber Security, and ESG compliance.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center"
            >
              <p className="text-sm tracking-[0.3em] font-bold uppercase text-gray-400 mb-4 mix-blend-difference">Scroll to Explore</p>
              <div className="w-[2px] h-16 bg-gradient-to-b from-gray-400 to-transparent mx-auto rounded-full"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* QUALITY SECTION */}
        <section className="h-[120vh] flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto max-w-xl backdrop-blur-2xl bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2rem] shadow-2xl"
          >
            <div className="bg-white/10 p-4 rounded-2xl w-fit mb-8">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Uncompromising Quality</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Our certification processes are built on clinical precision. We ensure your business architecture meets the highest global standards, refining your operations into a flawless mechanism.
            </p>
          </motion.div>
        </section>

        {/* CYBER SECURITY SECTION */}
        <section className="h-[120vh] flex flex-col justify-center items-end px-6 md:px-24 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto max-w-xl backdrop-blur-2xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 p-10 md:p-14 rounded-[2rem] shadow-2xl"
          >
            <div className="bg-[#0ea5e9]/10 p-4 rounded-2xl w-fit mb-8">
              <Lock className="w-10 h-10 text-[#0ea5e9]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-blue-50">Cyber Security</h2>
            <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed font-light">
              In an era of invisible threats, your data is your most valuable asset. Our cybersecurity frameworks form an impenetrable digital shield around your enterprise network.
            </p>
          </motion.div>
        </section>

        {/* ESG SECTION */}
        <section className="h-[120vh] flex flex-col justify-center items-start px-6 md:px-24 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto max-w-xl backdrop-blur-2xl bg-[#10b981]/5 border border-[#10b981]/20 p-10 md:p-14 rounded-[2rem] shadow-2xl"
          >
            <div className="bg-[#10b981]/10 p-4 rounded-2xl w-fit mb-8">
              <Leaf className="w-10 h-10 text-[#10b981]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-emerald-50">ESG Compliance</h2>
            <p className="text-emerald-100/70 text-lg md:text-xl leading-relaxed font-light">
              Sustainable growth is the only growth. We align your corporate strategy with environmental, social, and governance imperatives for a globally resilient future.
            </p>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative mt-24">
          <motion.div
            className="max-w-5xl w-full text-center relative z-10 backdrop-blur-3xl bg-black/40 p-12 md:p-24 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tighter">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Transform?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
              Secure your competitive advantage. Book your free compliance analysis today before your competitors do.
            </p>
            <div className="flex justify-center">
              <Link href="/contatti">
                <Button
                  size="lg"
                  className="h-20 px-12 text-2xl font-bold rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Get Started
                  <ArrowRight className="ml-4 w-7 h-7" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}

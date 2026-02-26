"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import NeonLogo from "./NeonLogo";
import { useMobileViewport } from "@/hooks/useMobileViewport";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const reduceMotion = useReducedMotion();
  const { isMobile, isCoarsePointer } = useMobileViewport();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const completeCalled = useRef(false);
  const displayProgress = reduceMotion ? 100 : progress;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (reduceMotion) {
      const timer = window.setTimeout(() => {
        if (!completeCalled.current) {
          completeCalled.current = true;
          setIsVisible(false);
          document.body.style.overflow = "";
          onLoadingComplete?.();
        }
      }, 120);

      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }

    const minDuration = isMobile || isCoarsePointer ? 780 : 1100;
    const startTime = performance.now();
    let frame = 0;
    let pageReady = document.readyState === "complete";

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / minDuration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      let nextProgress = Math.round(eased * 100);

      if (!pageReady && nextProgress > 94) {
        nextProgress = 94;
      }

      setProgress(nextProgress);

      if (pageReady && elapsed >= minDuration) {
        finish();
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    const handleLoad = () => {
      pageReady = true;
    };

    const finish = () => {
      cancelAnimationFrame(frame);
      setProgress(100);
      window.setTimeout(() => {
        if (!completeCalled.current) {
          completeCalled.current = true;
          setIsVisible(false);
          document.body.style.overflow = "";
          onLoadingComplete?.();
        }
      }, 180);
    };

    window.addEventListener("load", handleLoad);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, [isCoarsePointer, isMobile, onLoadingComplete, reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[linear-gradient(180deg,#fbfbfd,#f3f5fa)] hero-noise"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-[30%] h-64 w-64 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute bottom-[20%] left-[28%] h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="rounded-[1.75rem] border border-white/75 bg-white/75 px-7 py-5 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <NeonLogo size="lg" />
            </div>

            <div className="mt-8 w-56 rounded-full border border-white/70 bg-white/70 p-2 shadow-sm backdrop-blur-xl">
              <div className="h-1.5 overflow-hidden rounded-full bg-black/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary via-rose-400 to-orange-400"
                  initial={{ width: "0%" }}
                  animate={{ width: `${displayProgress}%` }}
                  transition={{ duration: 0.08, ease: "linear" }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                <span>Preparazione esperienza</span>
                <span className="tabular-nums">{displayProgress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

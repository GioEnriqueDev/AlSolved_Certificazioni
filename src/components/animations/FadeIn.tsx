"use client";

import { motion, useInView, useAnimation, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMobileViewport } from "@/hooks/useMobileViewport";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  viewportMargin?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  once = true,
  viewportMargin = "-80px",
}: FadeInProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { isMobile } = useMobileViewport();

  const effectiveMargin = isMobile && viewportMargin === "-80px" ? "-20px" : viewportMargin;
  const isInView = useInView(ref, { once, margin: effectiveMargin as never });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const effectiveDirection = isMobile && (direction === "left" || direction === "right") ? "up" : direction;
  const distanceY = isMobile ? 16 : 32;
  const distanceX = isMobile ? 14 : 24;
  const effectiveDelay = isMobile ? Math.min(delay, 0.12) : delay;
  const duration = isMobile ? 0.42 : 0.65;

  const offsets = {
    up: { y: distanceY, x: 0 },
    down: { y: -distanceY, x: 0 },
    left: { x: distanceX, y: 0 },
    right: { x: -distanceX, y: 0 },
  } as const;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...offsets[effectiveDirection] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay: effectiveDelay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

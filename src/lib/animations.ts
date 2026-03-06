import { Variants } from "framer-motion";

export const appleEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

export const transitions = {
  slow: { duration: 1.2, ease: appleEase },
  base: { duration: 0.8, ease: appleEase },
  fast: { duration: 0.4, ease: appleEase },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.slow,
  },
};

export const heroTextVariant: Variants = {
  hidden: { opacity: 0.01, y: 50, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1.1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

export const heroStaggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const childFadeVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

export const reducedMotionProps = {
  initial: false,
  animate: { opacity: 1, x: 0, y: 0, scale: 1 },
  transition: { duration: 0.01 },
};

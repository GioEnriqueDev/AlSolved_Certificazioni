import { Variants } from "framer-motion";

export const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transitions = {
  slow: { duration: 0.85, ease: premiumEase },
  base: { duration: 0.6, ease: premiumEase },
  fast: { duration: 0.35, ease: premiumEase },
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.slow,
  },
};

export const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
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

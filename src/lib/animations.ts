import { Variants } from "framer-motion";

// Premium Custom Easing (Apple/Netflix style: smooth start, brisk mid, soft ease out)
export const premiumEase = [0.16, 1, 0.3, 1];

// Commonly Used Transitions
export const transitions = {
    slow: { duration: 1, ease: premiumEase },
    base: { duration: 0.8, ease: premiumEase },
    fast: { duration: 0.5, ease: premiumEase },
};

// --- Framer Motion Variants ---

export const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: transitions.slow
    },
};

export const slideUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.base
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const childFadeVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.base
    },
};

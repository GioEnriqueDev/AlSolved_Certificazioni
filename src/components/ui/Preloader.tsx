"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeonLogo from "./NeonLogo";

interface PreloaderProps {
    onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [isDrawn, setIsDrawn] = useState(false);
    const [shouldExit, setShouldExit] = useState(false);

    // OPTIMIZED: Reduced from 3000ms to 1500ms for faster, less annoying experience
    const MINIMUM_DURATION = 1500;

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const startTime = Date.now();
        let animationFrame: number;
        let hasReachedReady = false;

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            // Easing function for smoother progress
            const rawProgress = Math.min(elapsed / MINIMUM_DURATION, 1);
            const easedProgress = 1 - Math.pow(1 - rawProgress, 3); // Ease out cubic
            const timeProgress = easedProgress * 100;

            if (document.readyState === "complete") {
                hasReachedReady = true;
            }

            let newProgress = timeProgress;
            if (!hasReachedReady && timeProgress >= 95) {
                newProgress = 95;
            }

            setProgress(Math.floor(newProgress));

            // Mark as drawn earlier for faster feedback
            if (elapsed >= 800 && !isDrawn) {
                setIsDrawn(true);
            }

            if (hasReachedReady && elapsed >= MINIMUM_DURATION) {
                setProgress(100);
                setTimeout(() => {
                    setShouldExit(true);
                    document.body.style.overflow = "auto";
                    onLoadingComplete?.();
                }, 300); // Reduced delay
            } else {
                animationFrame = requestAnimationFrame(updateProgress);
            }
        };

        animationFrame = requestAnimationFrame(updateProgress);

        const handleLoad = () => {
            hasReachedReady = true;
        };
        window.addEventListener("load", handleLoad);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("load", handleLoad);
            document.body.style.overflow = "auto";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onLoadingComplete, isDrawn]);

    return (
        <AnimatePresence>
            {!shouldExit && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFA]"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                >
                    {/* Neon Logo - already contains icon and text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <NeonLogo size="lg" />
                    </motion.div>

                    {/* Minimal Progress Indicator */}
                    <motion.div
                        className="mt-10 flex flex-col items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                    >
                        {/* Progress Bar - thinner and cleaner */}
                        <div className="w-32 h-[2px] bg-black/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.05, ease: "linear" }}
                            />
                        </div>

                        {/* Simple Percentage */}
                        <span className="text-xs font-mono text-black/40 tabular-nums">
                            {progress}%
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

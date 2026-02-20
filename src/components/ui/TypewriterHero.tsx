"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";

const typingSpeed = 50;
const deletingSpeed = 30;
const pauseBeforeDelete = 1500;
const pauseBeforeNext = 300;

interface TypewriterHeroProps {
    painPoints: string[];
    solution: string;
    solutionSubtitle: string;
}

export default function TypewriterHero({
    painPoints,
    solution,
    solutionSubtitle,
}: TypewriterHeroProps) {
    const [currentPainIndex, setCurrentPainIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [cycleComplete, setCycleComplete] = useState(false);

    useEffect(() => {
        if (cycleComplete) return;

        const currentPain = painPoints[currentPainIndex];

        if (!isDeleting && displayText === currentPain) {
            // Finished typing, pause then delete
            const timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && displayText === "") {
            // Finished deleting
            setTimeout(() => {
                setIsDeleting(false);
            }, 0);
            if (currentPainIndex < painPoints.length - 1) {
                // Move to next pain point
                const timeout = setTimeout(() => {
                    setCurrentPainIndex((prev) => prev + 1);
                }, pauseBeforeNext);
                return () => clearTimeout(timeout);
            } else {
                // All pain points shown, show solution
                setCycleComplete(true);
                setTimeout(() => setShowSolution(true), 500);
                return;
            }
        }

        const timeout = setTimeout(
            () => {
                if (isDeleting) {
                    setDisplayText((prev) => prev.slice(0, -1));
                } else {
                    setDisplayText((prev) => currentPain.slice(0, prev.length + 1));
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [
        displayText,
        isDeleting,
        currentPainIndex,
        painPoints,
        cycleComplete,
        setCycleComplete,
        setIsDeleting,
        setDisplayText,
        setCurrentPainIndex,
        setShowSolution
    ]);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-transparent">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] pointer-events-none"></div>

            <div className="container relative z-10 px-6 py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    {!showSolution ? (
                        <motion.div
                            key="pain"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
                                La tua azienda...
                            </p>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground min-h-[1.2em] leading-tight drop-shadow-sm">
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-1.5 h-[0.9em] bg-primary ml-2 align-middle rounded-full shadow-[0_0_10px_rgba(242,78,107,0.5)]"
                                />
                            </h1>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="solution"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-8"
                        >
                            {/* Premium Google-like gradient for text */}
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 leading-none pb-4 drop-shadow-sm">
                                <SplitText text={solution} delay={0.03} />
                            </h1>
                            <div className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                                <SplitText text={solutionSubtitle} delay={0.01} className="inline" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-6 justify-center pt-10"
                            >
                                <Link href="/#certificazioni">
                                    <Button
                                        size="lg"
                                        className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.4)] hover:shadow-[0_12px_40px_rgba(242,78,107,0.5)] transition-all hover:-translate-y-1"
                                    >
                                        Scopri le Certificazioni
                                        <ArrowRight className="ml-3 w-6 h-6" />
                                    </Button>
                                </Link>
                                <Link href="/contatti">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-16 px-10 text-xl font-semibold rounded-full border-2 border-border/80 hover:bg-secondary/50 hover:border-border transition-all hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
                                    >
                                        Prenota Check-up Gratuito
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

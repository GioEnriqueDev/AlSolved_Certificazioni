"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";

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

    const typingSpeed = 50;
    const deletingSpeed = 30;
    const pauseBeforeDelete = 1500;
    const pauseBeforeNext = 300;

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
            setIsDeleting(false);
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
    }, [displayText, isDeleting, currentPainIndex, painPoints, cycleComplete]);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container relative z-10 px-6 py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    {!showSolution ? (
                        <motion.div
                            key="pain"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-4"
                        >
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                La tua azienda...
                            </p>
                            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-foreground min-h-[1.2em]">
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle"
                                />
                            </h1>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="solution"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500 leading-none pb-2">
                                <SplitText text={solution} delay={0.05} />
                            </h1>
                            <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
                                <SplitText text={solutionSubtitle} delay={0.02} className="inline" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                            >
                                <Link href="/#certificazioni">
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(242,78,107,0.4)]"
                                    >
                                        Scopri le Certificazioni
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/contatti">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-14 px-8 text-lg rounded-full border-border hover:bg-secondary/50"
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

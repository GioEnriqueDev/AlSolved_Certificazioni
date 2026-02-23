"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SplitText } from "@/components/ui/SplitText";

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-transparent pt-20">
            {/* Background Glow - Clean light gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.05),transparent_60%)] pointer-events-none z-[-1]"></div>

            <div className="container relative z-10 px-6 py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 w-full"
                >
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                        Il Partner Tecnologico per le Normative
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 leading-[1.1] pb-4 drop-shadow-sm mx-auto max-w-4xl">
                        <SplitText text="Digitalizziamo la conformità." delay={0.02} />
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                            <SplitText text="Sblocchiamo nuovi mercati." delay={0.02} />
                        </span>
                    </h1>

                    <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed px-4">
                        <SplitText text="Affidati a esperti per l'ottenimento delle certificazioni internazionali. Trasformiamo la burocrazia in un asset strategico per far crescere il tuo business." delay={0.01} className="inline" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center pt-10"
                    >
                        <Link href="/#aree-intervento">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_20px_rgba(242,78,107,0.3)] transition-all hover:-translate-y-1 will-change-transform"
                            >
                                Scopri i Servizi
                                <ArrowRight className="ml-3 w-6 h-6" />
                            </Button>
                        </Link>
                        <Link href="/contatti">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto h-16 px-10 text-xl font-semibold rounded-full border-2 border-border/80 hover:bg-secondary/50 hover:border-border transition-all hover:-translate-y-1 bg-white/50 backdrop-blur-sm shadow-sm will-change-transform text-foreground"
                            >
                                Prenota Call (15 min)
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

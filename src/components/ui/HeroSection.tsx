"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-24">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.05),transparent_60%)] pointer-events-none z-[-1]"></div>

            <div className="container relative z-10 px-6 py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 w-full"
                >
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 border border-border/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm mx-auto"
                    >
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                        <span className="text-sm font-semibold text-foreground/80">
                            Partner certificato per <span className="text-primary font-bold">50+ aziende</span> italiane
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[1.02] pb-4 mx-auto max-w-5xl"
                    >
                        Digitalizziamo la
                        <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-orange-400 bg-[length:200%_auto]" style={{ animation: "gradient-shift 6s ease-in-out infinite" }}>
                                conformità.
                            </span>
                            {/* Shimmer underline */}
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 rounded-full overflow-hidden">
                                <span className="block w-full h-full" style={{ animation: "shimmer 3s ease-in-out infinite" }}></span>
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed px-4"
                    >
                        Affidati a esperti per l&apos;ottenimento delle certificazioni internazionali.
                        <br className="hidden sm:block" />
                        Trasformiamo la burocrazia in un <span className="text-foreground font-semibold">asset strategico</span> per far crescere il tuo business.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
                    >
                        <Link href="/#aree-intervento">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-16 px-10 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.35)] hover:shadow-[0_12px_40px_rgba(242,78,107,0.45)] transition-all duration-300 hover:-translate-y-1 will-change-transform"
                            >
                                Scopri i Servizi
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/contatti">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto h-16 px-10 text-lg font-semibold rounded-full border-2 border-border/80 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 bg-white/60 backdrop-blur-sm shadow-sm will-change-transform text-foreground"
                            >
                                <Clock className="mr-2 w-4 h-4 text-muted-foreground" />
                                Prenota Call (15 min)
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust Micro-copy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex items-center justify-center gap-6 text-xs text-muted-foreground/70 font-medium pt-2"
                    >
                        <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> Analisi gratuita
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                        <span>Senza impegno</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                        <span>Risultati in 48h</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

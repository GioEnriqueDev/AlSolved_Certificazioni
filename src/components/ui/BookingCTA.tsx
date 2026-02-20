"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, FileCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface BookingCTAProps {
    googleFormUrl?: string;
}

export default function BookingCTA({ googleFormUrl = "#" }: BookingCTAProps) {
    return (
        <div className="w-full max-w-2xl mx-auto p-1 rounded-3xl bg-transparent relative group overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-white rounded-[22px] p-8 md:p-12 flex flex-col items-center text-center shadow-none">
                {/* Icon */}
                <div className="w-24 h-24 rounded-[30px] bg-primary/10 flex items-center justify-center mb-10 relative shadow-inner">
                    <div className="absolute inset-0 rounded-[30px] bg-primary/20 animate-ping opacity-20" />
                    <CalendarCheck className="w-12 h-12 text-primary" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
                    Prenota la tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Analisi Preliminare</span>
                </h2>

                <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
                    Compila il modulo per richiedere un check-up gratuito della tua azienda.
                    Verificheremo l'idoneità per le certificazioni ISO e i bandi disponibili.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12 text-left">
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/20 border border-border">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                            <FileCheck className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-foreground">Idoneità Bandi</span>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/20 border border-border">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-foreground">Compliance ISO</span>
                    </div>
                </div>

                {/* CTA Button */}
                <Link href={googleFormUrl} target="_blank" className="w-full">
                    <Button
                        size="lg"
                        className="w-full h-16 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 text-white shadow-[0_8px_30px_rgba(242,78,107,0.4)] hover:shadow-[0_12px_40px_rgba(242,78,107,0.5)] transition-all group-hover:scale-[1.02] hover:-translate-y-1"
                    >
                        Compila il Modulo
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                </Link>

                <p className="mt-8 text-sm font-medium text-muted-foreground/80">
                    * Verrai reindirizzato al nostro modulo di richiesta sicuro (Google Form).
                </p>
            </div>
        </div>
    );
}

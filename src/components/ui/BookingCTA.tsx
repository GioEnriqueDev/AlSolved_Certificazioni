"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, FileCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface BookingCTAProps {
    googleFormUrl?: string;
}

export default function BookingCTA({ googleFormUrl = "#" }: BookingCTAProps) {
    return (
        <div className="w-full max-w-2xl mx-auto p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent relative group overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

            <div className="relative bg-[#0F1116] rounded-[22px] p-8 md:p-12 border border-white/5 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20" />
                    <CalendarCheck className="w-10 h-10 text-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                    Prenota la tua <span className="text-primary">Analisi Preliminare</span>
                </h2>

                <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
                    Compila il modulo per richiedere un check-up gratuito della tua azienda.
                    Verificheremo l'idoneità per le certificazioni ISO e i bandi disponibili.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-10 text-left">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <FileCheck className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">Idoneità Bandi</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">Compliance ISO</span>
                    </div>
                </div>

                {/* CTA Button */}
                <Link href={googleFormUrl} target="_blank" className="w-full">
                    <Button
                        size="lg"
                        className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-[0_4px_20px_rgba(242,78,107,0.3)] hover:shadow-[0_4px_30px_rgba(242,78,107,0.5)] transition-all group-hover:scale-[1.02]"
                    >
                        Compila il Modulo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>

                <p className="mt-6 text-xs text-muted-foreground/60">
                    * Verrai reindirizzato al nostro modulo di richiesta sicuro (Google Form).
                </p>
            </div>
        </div>
    );
}

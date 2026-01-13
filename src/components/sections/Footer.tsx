"use client";

import Link from "next/link";
import AnimatedLogo from "@/components/ui/AnimatedLogo";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary/5 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <AnimatedLogo size="md" />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Il partner tecnologico per le certificazioni aziendali. Eccellenza, conformità e crescita sostenibile.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
                            >
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">
                            Servizi
                        </h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <Link href="#certificazioni" className="hover:text-primary transition-colors">
                                    ISO 9001 Qualità
                                </Link>
                            </li>
                            <li>
                                <Link href="#certificazioni" className="hover:text-primary transition-colors">
                                    ISO 27001 Sicurezza
                                </Link>
                            </li>
                            <li>
                                <Link href="#certificazioni" className="hover:text-primary transition-colors">
                                    ISO 14001 Ambiente
                                </Link>
                            </li>
                            <li>
                                <Link href="#certificazioni" className="hover:text-primary transition-colors">
                                    Parità di Genere
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">
                            Azienda
                        </h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <Link href="#metodo" className="hover:text-primary transition-colors">
                                    Il Metodo
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Casi Studio
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Lavora con noi
                                </Link>
                            </li>
                            <li>
                                <Link href="#cta" className="hover:text-primary transition-colors">
                                    Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">
                            Contatti
                        </h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>Via Bargoni 78 - Roma</li>
                            <li>+39 351 537 1725</li>
                            <li>info@alsolved.com</li>
                            <li className="pt-2 text-xs opacity-70">P.IVA 13090841001</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ALSOLVED S.r.l. Tutti i diritti riservati.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Cookie Policy
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Termini di Servizio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeonLogo from "@/components/ui/NeonLogo";
import { cn } from "@/lib/utils";

const items = [
    { name: "Certificazioni", href: "/#certificazioni" },
    { name: "Il Metodo", href: "/#metodo" },
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            setMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg shadow-black/5"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group">
                    <NeonLogo size="md" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    {items.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleAnchorClick(e, item.href)}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <Button
                        variant="default"
                        className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(242,78,107,0.3)] hover:shadow-[0_0_30px_rgba(242,78,107,0.4)] transition-all"
                        onClick={() => {
                            const ctaSection = document.querySelector("#cta");
                            ctaSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Richiedi Audit
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {items.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleAnchorClick(e, item.href)}
                                    className="text-lg font-medium text-foreground py-3 border-b border-border/50 last:border-0"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button
                                className="w-full mt-4 bg-primary text-white"
                                size="lg"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    const ctaSection = document.querySelector("#cta");
                                    ctaSection?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Richiedi Audit
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

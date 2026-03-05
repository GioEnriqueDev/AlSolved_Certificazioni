"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NeonLogo from "@/components/ui/NeonLogo";
import { cn } from "@/lib/utils";

const items = [
  { name: "Home", href: "/" },
  { name: "Certificazioni", href: "/certificazioni" },
  { name: "Il Metodo", href: "/metodo" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 top-2 z-50 w-[calc(100vw-14px)] max-w-[92rem] -translate-x-1/2 rounded-[1.1rem] transition-all duration-500 sm:top-3 sm:w-[min(96vw,92rem)] sm:rounded-[1.35rem] 2xl:w-[min(95vw,96rem)]",
          scrolled
            ? "glass-panel-strong border-white/75 shadow-[0_24px_58px_-28px_rgba(15,23,42,0.34)]"
            : "border border-white/55 bg-white/60 shadow-[0_14px_30px_-22px_rgba(15,23,42,0.22)] backdrop-blur-xl",
        )}
      >
        <div className="mx-auto flex h-[66px] items-center justify-between px-3.5 sm:h-[78px] sm:px-5 md:px-6 xl:h-[82px] xl:px-7">
          <Link href="/" className="focus-ring rounded-xl" aria-label="ALSOLVED homepage">
            <NeonLogo size="md" />
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Navigazione principale">
            <div className="flex items-center gap-1 rounded-full border border-white/70 bg-white/76 px-2 py-2 shadow-sm backdrop-blur-xl">
              {items.map((item) => {
                const active = isActiveRoute(pathname, item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "focus-ring relative rounded-full px-4 py-2 text-sm font-semibold xl:px-5 xl:py-2.5",
                      active
                        ? "bg-primary text-white shadow-[0_14px_34px_-18px_rgba(var(--glow-primary),0.72)]"
                        : "text-muted-foreground hover:bg-white hover:text-foreground",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/check-up" className="focus-ring rounded-full">
              <Button className="h-11 rounded-full px-5 font-semibold text-white glow-shadow hover:glow-shadow-strong xl:h-12 xl:px-6">
                Prenota call 15 min
                <ArrowUpRight className="size-4" />
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/82 text-foreground shadow-sm lg:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mobileMenuOpen ? (
          <motion.div
            key="mobile-overlay"
            className="fixed inset-0 z-40 lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[rgba(10,20,42,0.36)] backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chiudi menu mobile"
            />

            <motion.div
              id="mobile-nav-panel"
              initial={shouldReduceMotion ? false : { y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { y: -12, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-3 rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-[0_28px_74px_-28px_rgba(15,23,42,0.38)] backdrop-blur-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menu di navigazione"
            >
              <div className="mb-3 flex items-center justify-between border-b border-border/55 pb-3">
                <NeonLogo size="sm" />
                <button
                  type="button"
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/75 bg-white/75"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Chiudi menu"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="space-y-1.5">
                {items.map((item) => {
                  const active = isActiveRoute(pathname, item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold",
                        active ? "bg-primary text-white" : "bg-white/75 text-foreground",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className={cn("size-4", active ? "opacity-100" : "text-muted-foreground")} />
                    </Link>
                  );
                })}
              </div>

              <Link href="/check-up" onClick={() => setMobileMenuOpen(false)} className="focus-ring mt-4 block rounded-xl">
                <Button className="h-12 w-full rounded-xl font-semibold text-white glow-shadow">Prenota call 15 min</Button>
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

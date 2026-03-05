"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 18);
          ticking = false;
        });
      }
    };
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
          "fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-14px)] max-w-[88rem] rounded-[1rem] transition-all duration-500 sm:top-3 sm:w-[min(96vw,88rem)] sm:rounded-[1.35rem] 2xl:max-w-[94rem] 2xl:w-[min(95vw,94rem)]",
          scrolled
            ? "glass-panel-strong border-white/70 shadow-[0_18px_42px_-20px_rgba(15,23,42,0.28)]"
            : "bg-white/55 backdrop-blur-xl max-sm:backdrop-blur-md border border-white/45 shadow-[0_10px_26px_-18px_rgba(15,23,42,0.18)]"
        )}
      >
        <div className="mx-auto flex h-[68px] items-center justify-between px-3.5 sm:h-[78px] sm:px-5 md:px-6 xl:h-[82px] xl:px-7">
          <Link href="/" className="focus-ring rounded-xl" aria-label="ALSOLVED homepage">
            <NeonLogo size="md" />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex xl:gap-2.5" aria-label="Navigazione principale">
            {items.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "focus-ring relative rounded-full px-4 py-2 text-sm font-semibold xl:px-5 xl:py-2.5",
                    active
                      ? "text-foreground bg-white/80 border border-white/70 shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/60"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}
                  {active ? (
                    <span className="absolute inset-x-4 -bottom-[2px] h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/check-up" className="focus-ring rounded-full">
              <Button className="rounded-full h-11 px-5 font-semibold text-white glow-shadow hover:glow-shadow-strong xl:h-12 xl:px-6">
                Prenota call 15 min
                <ArrowUpRight className="size-4" />
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/75 text-foreground shadow-sm lg:hidden"
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
              className="absolute inset-0 bg-[rgba(15,23,42,0.28)] backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Chiudi menu mobile"
            />

            <motion.div
              id="mobile-nav-panel"
              initial={shouldReduceMotion ? false : { y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { y: 14, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 bottom-0 mx-auto w-full rounded-t-[1.5rem] border border-white/70 border-b-0 bg-white/92 p-4 pb-[calc(env(safe-area-inset-bottom)+0.9rem)] shadow-[0_-20px_60px_-18px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:bottom-4 sm:w-[min(94vw,38rem)] sm:rounded-[1.5rem] sm:border-b sm:p-4 sm:pb-4 sm:shadow-[0_30px_80px_-26px_rgba(15,23,42,0.3)]"
              role="dialog"
              aria-modal="true"
              aria-label="Menu di navigazione"
            >
              <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-black/10 sm:hidden" />
              <div className="mb-2 rounded-2xl border border-white/60 bg-white/70 p-2">
                {items.map((item) => {
                  const active = isActiveRoute(pathname, item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold",
                        active
                          ? "bg-primary text-white shadow-[0_10px_24px_-16px_rgba(var(--glow-primary),0.55)]"
                          : "text-foreground hover:bg-secondary/70"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className={cn("size-4", active ? "opacity-90" : "text-muted-foreground")} />
                    </Link>
                  );
                })}
              </div>

              <Link href="/check-up" onClick={() => setMobileMenuOpen(false)} className="focus-ring block rounded-xl">
                <Button className="h-12 w-full rounded-xl font-semibold text-white glow-shadow">Prenota call 15 min</Button>
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

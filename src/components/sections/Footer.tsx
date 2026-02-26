"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import NeonLogo from "@/components/ui/NeonLogo";

const quickLinks = [
  { label: "ISO 9001", href: "/certificazioni/iso-9001" },
  { label: "ISO 27001", href: "/certificazioni/iso-27001" },
  { label: "ISO 14001", href: "/certificazioni/iso-14001" },
  { label: "UNI/PdR 125", href: "/certificazioni/pdr-125" },
] as const;

const navLinks = [
  { label: "Il Metodo", href: "/metodo" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Catalogo", href: "/certificazioni" },
  { label: "Contatti", href: "/contatti" },
] as const;

const contactLinks = [
  { icon: Phone, label: "Telefono", value: "+39 351 537 1725", href: "tel:+393515371725" },
  { icon: Mail, label: "Email", value: "info@alsolved.com", href: "mailto:info@alsolved.com" },
  {
    icon: MapPin,
    label: "Sede",
    value: "Via Bargoni 78, Roma",
    href: "https://www.google.com/maps/dir//Alsolved,+Via+Angelo+Bargoni,+78,+00153+Roma+RM",
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/55 bg-white/50 px-4 pb-10 pt-16 backdrop-blur-sm sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div className="rounded-[1.5rem] border border-white/75 bg-white/78 p-6 shadow-[0_20px_48px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl">
            <Link href="/" className="focus-ring inline-flex rounded-xl" aria-label="ALSOLVED homepage">
              <NeonLogo size="md" />
            </Link>
            <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">
              Partner tecnico per certificazioni ISO, compliance e audit readiness. Progettiamo sistemi che migliorano processi, riducono rischio e aumentano credibilità commerciale.
            </p>
            <Link
              href="/contatti"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-semibold text-foreground shadow-sm hover:border-primary/20 hover:text-primary"
            >
              Richiedi analisi preliminare
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Certificazioni chiave</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring rounded-md text-sm font-semibold text-foreground/85 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Navigazione</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring rounded-md text-sm font-semibold text-foreground/85 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Contatti</h4>
            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="focus-ring flex items-start gap-3 rounded-xl border border-white/70 bg-white/70 p-3 hover:border-primary/20"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{item.label}</span>
                      <span className="block text-sm font-semibold text-foreground">{item.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-medium text-muted-foreground">P.IVA 13090841001</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/70 pt-6 text-center text-xs font-medium text-muted-foreground md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} ALSOLVED S.r.l. Tutti i diritti riservati.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contatti" className="focus-ring rounded-md hover:text-foreground">Privacy e cookie su richiesta</Link>
            <a href="mailto:info@alsolved.com" className="focus-ring rounded-md hover:text-foreground">Supporto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

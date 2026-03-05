"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
  { icon: Phone, label: "Telefono", value: "+39 331 365 3490", href: "tel:+393313653490" },
  { icon: Mail, label: "Email", value: "info@alsolved.com", href: "mailto:info@alsolved.com" },
  {
    icon: MapPin,
    label: "Sede",
    value: "Via Bargoni 78, Roma",
    href: "https://www.google.com/maps/dir//Alsolved,+Via+Angelo+Bargoni,+78,+00153+Roma+RM",
  },
] as const;

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative z-10 border-t border-white/62 bg-white/52 px-4 pb-[calc(env(safe-area-inset-bottom)+2.5rem)] pt-12 sm:px-6 sm:pt-16 xl:pt-20">
      <div className="container mx-auto max-w-[92rem] 2xl:max-w-[96rem]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[1.1fr_0.72fr_0.72fr_1fr] xl:gap-6">
          <motion.div
            className="rounded-[1.35rem] border border-white/74 bg-white/78 p-4 shadow-sm backdrop-blur-xl sm:col-span-2 sm:rounded-[1.55rem] sm:p-6 lg:col-span-1 xl:rounded-[1.8rem] xl:p-7"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="focus-ring inline-flex rounded-xl" aria-label="ALSOLVED homepage">
              <NeonLogo size="md" />
            </Link>
            <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">
              Partner tecnico per certificazioni ISO e compliance. Disegniamo sistemi gestionali che aumentano affidabilita, controllo e vantaggio competitivo.
            </p>
            <Link
              href="/check-up"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/88 px-4 py-2 text-sm font-semibold text-foreground shadow-sm hover:border-primary/20 hover:text-primary"
            >
              Richiedi analisi preliminare
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          <motion.div
            className="rounded-[1.35rem] border border-white/74 bg-white/78 p-4 shadow-sm backdrop-blur-lg sm:rounded-[1.55rem] sm:p-6 xl:rounded-[1.8rem] xl:p-7"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Certificazioni Chiave</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring rounded-md text-sm font-semibold text-foreground/85 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-[1.35rem] border border-white/74 bg-white/78 p-4 shadow-sm backdrop-blur-lg sm:rounded-[1.55rem] sm:p-6 xl:rounded-[1.8rem] xl:p-7"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
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
          </motion.div>

          <motion.div
            className="rounded-[1.35rem] border border-white/74 bg-white/78 p-4 shadow-sm backdrop-blur-xl sm:col-span-2 sm:rounded-[1.55rem] sm:p-6 lg:col-span-1 xl:rounded-[1.8rem] xl:p-7"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Contatti</h4>
            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="focus-ring flex items-start gap-3 rounded-xl border border-white/72 bg-white/82 p-3 hover:border-primary/20"
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
          </motion.div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-5 border-t border-white/74 pt-5 text-center text-xs font-medium text-muted-foreground sm:mt-8 sm:gap-4 sm:pt-6 md:flex-row md:text-left">
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

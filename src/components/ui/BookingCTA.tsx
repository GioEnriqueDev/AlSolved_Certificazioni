"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CalendarCheck, FileCheck, ShieldCheck, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certificazioniData";

interface BookingCTAProps {
  googleFormUrl?: string;
  fallbackPhone?: string;
  fallbackEmail?: string;
}

function isPlaceholderUrl(value: string) {
  return !value || value === "#" || value.toLowerCase().includes("placeholder");
}

export default function BookingCTA({
  googleFormUrl = "#",
  fallbackPhone = "+39 351 537 1725",
  fallbackEmail = "info@alsolved.com",
}: BookingCTAProps) {
  const searchParams = useSearchParams();
  const certId = searchParams.get("cert") ?? "";
  const selectedCertification = certifications.find((cert) => cert.id === certId);
  const hasRealForm = !isPlaceholderUrl(googleFormUrl);

  const finalUrl = hasRealForm && certId
    ? `${googleFormUrl}${googleFormUrl.includes("?") ? "&" : "?"}usp=pp_url&entry.PLACEHOLDER=${encodeURIComponent(certId)}`
    : hasRealForm
      ? googleFormUrl
      : "";

  return (
    <div className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-[1.85rem] border border-white/80 bg-white/80 p-2 shadow-[0_28px_80px_-38px_rgba(15,23,42,0.28)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,78,107,0.10),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_45%)]" />
      <div className="relative rounded-[1.35rem] border border-white/80 bg-white/88 p-6 text-center shadow-sm sm:p-8 md:p-10">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-[1.35rem] bg-primary/10 text-primary shadow-inner">
          <CalendarCheck className="size-9" />
        </div>

        <h2 className="text-balance text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Prenota la tua analisi preliminare
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base md:text-lg">
          Raccontaci il contesto della tua azienda e ti proponiamo la roadmap migliore per certificazioni ISO, audit e compliance operativa.
        </p>

        {selectedCertification ? (
          <div className="mx-auto mt-5 flex max-w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="size-4" />
            Certificazione preselezionata: {selectedCertification.subtitle}
          </div>
        ) : (
          <div className="mx-auto mt-5 inline-flex max-w-fit items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Audit readiness • compliance • roadmap
          </div>
        )}

        <div className="mt-8 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileCheck className="size-5" />
            </div>
            <p className="text-sm font-bold text-foreground">Valutazione idoneità</p>
            <p className="mt-1 text-xs font-medium leading-relaxed text-muted-foreground">Verifica requisiti di partenza, criticità e documenti essenziali.</p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <p className="text-sm font-bold text-foreground">Roadmap compliance</p>
            <p className="mt-1 text-xs font-medium leading-relaxed text-muted-foreground">Timeline, deliverable e priorità operative per arrivare all’audit senza bloccare il team.</p>
          </div>
        </div>

        {hasRealForm ? (
          <Link href={finalUrl} target="_blank" rel="noopener noreferrer" className="focus-ring mt-8 block rounded-2xl">
            <Button className="h-14 w-full rounded-2xl text-base font-semibold text-white glow-shadow hover:glow-shadow-strong" size="lg">
              Compila il modulo di richiesta
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-border/80 bg-secondary/30 p-5 text-left">
            <p className="text-sm font-bold text-foreground">Modulo online in configurazione</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">
              Il Google Form pubblico non è ancora stato collegato. Per prenotare subito l’analisi, usa uno dei contatti qui sotto.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${fallbackPhone.replace(/\s+/g, "")}`} className="focus-ring flex items-center gap-3 rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/20">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="size-4" /></span>
                {fallbackPhone}
              </a>
              <a href={`mailto:${fallbackEmail}`} className="focus-ring flex items-center gap-3 rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/20">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="size-4" /></span>
                {fallbackEmail}
              </a>
            </div>
          </div>
        )}

        <p className="mt-6 text-xs font-medium text-muted-foreground/85">
          {hasRealForm
            ? "* Se disponibile, verrai reindirizzato al modulo di richiesta ALSOLVED (Google Form) in una nuova scheda."
            : "* Quando il modulo sarà attivo, il pulsante qui sopra verrà abilitato automaticamente senza cambiare la pagina."}
        </p>
      </div>
    </div>
  );
}

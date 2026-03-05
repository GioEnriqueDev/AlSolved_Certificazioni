import { Metadata } from "next";
import { CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import LeadWizard from "@/components/ui/LeadWizard";
import StaticBackground from "@/components/sections/StaticBackground";

export const metadata: Metadata = {
  title: "Analisi Preliminare | ALSOLVED",
  description: "Questionario strategico di 3 minuti per avviare il tuo iter di certificazione ISO aziendale.",
};

export default function CheckUpPage() {
  return (
    <div className="relative min-h-screen pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-32">
      <StaticBackground />

      <div className="container relative z-10 mx-auto max-w-[92rem] px-4 2xl:max-w-[96rem]">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-primary">Check-up Strategico</p>
          <h1 className="text-balance text-3xl font-black text-foreground sm:text-5xl md:text-6xl xl:text-[4.5rem]">
            Iniziamo dal tuo scenario reale.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Completa il questionario in circa 3 minuti. Arriveremo alla call gia allineati su obiettivi, requisiti e priorita operative.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="pill-chip bg-white/88"><Clock3 className="size-3.5 text-primary" /> 3 minuti medi</span>
            <span className="pill-chip bg-white/88"><ShieldCheck className="size-3.5 text-primary" /> Dati protetti</span>
            <span className="pill-chip bg-white/88"><Sparkles className="size-3.5 text-primary" /> Esito operativo</span>
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {[
            "Valutiamo readiness e criticita principali",
            "Identifichiamo la certificazione prioritaria",
            "Definiamo il prossimo sprint operativo",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-xl border border-white/80 bg-white/84 p-3 text-sm font-semibold text-foreground shadow-sm">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <LeadWizard />
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Target,
  UserCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { id: "personali", title: "Dati Personali", icon: UserCircle },
  { id: "azienda", title: "L'Azienda", icon: Building2 },
  { id: "sede", title: "Sede Operativa", icon: MapPin },
  { id: "dimensioni", title: "Dimensioni", icon: BarChart3 },
  { id: "requisiti", title: "Requisiti", icon: ShieldCheck },
  { id: "obiettivi", title: "Obiettivi", icon: Target },
] as const;

const revenueOptions = [
  { value: "", label: "Seleziona una fascia" },
  { value: "A", label: "A - Fino a 50.000 EUR (o non attiva)" },
  { value: "B", label: "B - Tra 51.000 EUR e 100.000 EUR" },
  { value: "C", label: "C - Tra 101.000 EUR e 300.000 EUR" },
  { value: "D", label: "D - Tra 301.000 EUR e 600.000 EUR" },
  { value: "E", label: "E - Tra 601.000 EUR e 1.000.000 EUR" },
  { value: "F", label: "F - Superiore a 1.000.000 EUR" },
] as const;

type FormData = {
  nome: string;
  cognome: string;
  telefono: string;
  email: string;
  ruolo: string;
  azienda: string;
  piva: string;
  sitoWeb: string;
  annoApertura: string;
  ateco: string;
  indirizzo: string;
  indirizzo2: string;
  citta: string;
  provincia: string;
  cap: string;
  registroImprese: string;
  sediMultiple: "Si" | "No";
  doveSediMultiple: string;
  dipendenti: string;
  fatturato2024: string;
  fatturato2025: string;
  durc: "Si" | "No";
  giovanile: "Si" | "No";
  femminile: "Si" | "No";
  certificazione: string;
  paritaGenere: "Si" | "No";
  ambientale: "Si" | "No";
};

const initialFormData: FormData = {
  nome: "",
  cognome: "",
  telefono: "",
  email: "",
  ruolo: "",
  azienda: "",
  piva: "",
  sitoWeb: "",
  annoApertura: "",
  ateco: "",
  indirizzo: "",
  indirizzo2: "",
  citta: "",
  provincia: "",
  cap: "",
  registroImprese: "",
  sediMultiple: "No",
  doveSediMultiple: "",
  dipendenti: "",
  fatturato2024: "",
  fatturato2025: "",
  durc: "Si",
  giovanile: "No",
  femminile: "No",
  certificazione: "",
  paritaGenere: "No",
  ambientale: "No",
};

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function FieldContainer({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

const inputBase =
  "w-full rounded-xl border border-input bg-white/70 px-4 py-3.5 text-sm font-medium transition-all focus:border-primary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function LeadWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const progress = useMemo(() => ((currentStep + 1) / steps.length) * 100, [currentStep]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSelect = (name: keyof FormData, value: "Si" | "No") => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const validateCurrentStep = () => {
    if (currentStep === 0) {
      if (!formData.nome || !formData.cognome || !formData.ruolo || !formData.email || !formData.telefono) {
        return "Completa tutti i campi obbligatori del profilo referente.";
      }
    }

    if (currentStep === 1) {
      if (!formData.azienda || !formData.piva || !formData.annoApertura || !formData.sitoWeb) {
        return "Compila i dati principali dell'azienda prima di continuare.";
      }
    }

    if (currentStep === 2) {
      if (!formData.citta || !formData.provincia || !formData.indirizzo || !formData.cap || !formData.registroImprese) {
        return "Inserisci tutti i dati della sede operativa.";
      }
      if (formData.sediMultiple === "Si" && !formData.doveSediMultiple.trim()) {
        return "Indica dove si trovano le sedi aggiuntive.";
      }
    }

    if (currentStep === 3) {
      if (!formData.dipendenti || !formData.fatturato2024 || !formData.fatturato2025) {
        return "Completa i dati dimensionali e le fasce di fatturato.";
      }
    }

    if (currentStep === 5) {
      if (!formData.certificazione.trim()) {
        return "Specifica almeno la certificazione che vuoi approfondire.";
      }
    }

    return null;
  };

  const goNext = async () => {
    const stepError = validateCurrentStep();
    if (stepError) {
      setError(stepError);
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    await submitToHubspot();
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      if (error) setError(null);
    }
  };

  const submitToHubspot = async () => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "Sito",
        }),
      });

      const data = await response.json();

      if (data.success && data.redirect) {
        setSuccess("Perfetto, stiamo aprendo il calendario per prenotare la call.");
        window.location.href = data.redirect;
        return;
      }

      setError(data.error || "Si e verificato un errore durante l'invio.");
    } catch {
      setError("Impossibile connettersi al server. Verifica la connessione e riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const choiceButton = (selected: boolean) =>
    cn(
      "flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
      selected
        ? "border-primary bg-primary text-white shadow-[0_12px_30px_-20px_rgba(var(--glow-primary),0.7)]"
        : "border-input bg-white/70 text-foreground/85 hover:border-primary/30",
    );

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">Chi sei?</h2>
            <p className="text-sm font-medium text-muted-foreground">Inserisci i dati del referente che seguira il progetto.</p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FieldContainer>
                <Label>Nome *</Label>
                <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className={inputBase} placeholder="Il tuo nome" />
              </FieldContainer>
              <FieldContainer>
                <Label>Cognome *</Label>
                <input required type="text" name="cognome" value={formData.cognome} onChange={handleChange} className={inputBase} placeholder="Il tuo cognome" />
              </FieldContainer>
            </div>

            <FieldContainer>
              <Label>Ruolo referente *</Label>
              <input required type="text" name="ruolo" value={formData.ruolo} onChange={handleChange} className={inputBase} placeholder="Es. Titolare o legale rappresentante" />
            </FieldContainer>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FieldContainer>
                <Label>Email *</Label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputBase} placeholder="nome@esempio.com" />
              </FieldContainer>
              <FieldContainer>
                <Label>Telefono *</Label>
                <input required type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className={inputBase} placeholder="+39 312 345 6789" />
              </FieldContainer>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">La tua azienda</h2>
            <p className="text-sm font-medium text-muted-foreground">Dati anagrafici principali dell&apos;impresa.</p>

            <FieldContainer>
              <Label>Ragione Sociale *</Label>
              <input required type="text" name="azienda" value={formData.azienda} onChange={handleChange} className={inputBase} placeholder="Es. Azienda S.p.A." />
            </FieldContainer>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FieldContainer>
                <Label>Partita IVA *</Label>
                <input required type="text" name="piva" value={formData.piva} onChange={handleChange} className={inputBase} placeholder="Es. 12345678901" />
              </FieldContainer>
              <FieldContainer>
                <Label>Anno di apertura *</Label>
                <input required type="number" name="annoApertura" value={formData.annoApertura} onChange={handleChange} className={inputBase} placeholder="Es. 2018" />
              </FieldContainer>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FieldContainer>
                <Label>Sito Web *</Label>
                <input required type="url" name="sitoWeb" value={formData.sitoWeb} onChange={handleChange} className={inputBase} placeholder="https://www.azienda.it" />
              </FieldContainer>
              <FieldContainer>
                <Label>Settore attivita (ATECO)</Label>
                <input type="text" name="ateco" value={formData.ateco} onChange={handleChange} className={inputBase} placeholder="Es. 62.01 - Sviluppo software" />
              </FieldContainer>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">Sede operativa</h2>
            <p className="text-sm font-medium text-muted-foreground">Dove siete basati e dove operate.</p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_120px]">
              <FieldContainer>
                <Label>Citta *</Label>
                <input required type="text" name="citta" value={formData.citta} onChange={handleChange} className={inputBase} placeholder="Es. Roma" />
              </FieldContainer>
              <FieldContainer>
                <Label>Provincia *</Label>
                <input required type="text" name="provincia" value={formData.provincia} onChange={handleChange} className={inputBase} placeholder="RM" maxLength={2} />
              </FieldContainer>
            </div>

            <FieldContainer>
              <Label>Indirizzo completo *</Label>
              <input required type="text" name="indirizzo" value={formData.indirizzo} onChange={handleChange} className={inputBase} placeholder="Via Garibaldi 17" />
            </FieldContainer>

            <FieldContainer>
              <Label>Indirizzo secondario</Label>
              <input type="text" name="indirizzo2" value={formData.indirizzo2} onChange={handleChange} className={inputBase} placeholder="Scala, interno, piano (opzionale)" />
            </FieldContainer>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FieldContainer>
                <Label>CAP *</Label>
                <input required type="text" name="cap" value={formData.cap} onChange={handleChange} className={inputBase} placeholder="00100" />
              </FieldContainer>
              <FieldContainer>
                <Label>Registro imprese (citta) *</Label>
                <input required type="text" name="registroImprese" value={formData.registroImprese} onChange={handleChange} className={inputBase} placeholder="Es. Roma" />
              </FieldContainer>
            </div>

            <div className="space-y-3 pt-1">
              <Label>Hai piu sedi operative?</Label>
              <div className="flex gap-3">
                {(["Si", "No"] as const).map((opt) => (
                  <button key={opt} type="button" onClick={() => handleSelect("sediMultiple", opt)} className={choiceButton(formData.sediMultiple === opt)}>
                    {opt}
                  </button>
                ))}
              </div>
              {formData.sediMultiple === "Si" ? (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                  <input type="text" name="doveSediMultiple" value={formData.doveSediMultiple} onChange={handleChange} className={inputBase} placeholder="Indica dove si trovano le sedi aggiuntive" />
                </motion.div>
              ) : null}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">Struttura economica</h2>
            <p className="text-sm font-medium text-muted-foreground">Ci aiuta a calibrare effort, tempi e roadmap.</p>

            <FieldContainer>
              <Label>Numero dipendenti attuali *</Label>
              <input required type="number" name="dipendenti" value={formData.dipendenti} onChange={handleChange} className={inputBase} placeholder="Es. 14" />
            </FieldContainer>

            <FieldContainer>
              <Label>Fatturato 2024 *</Label>
              <div className="relative">
                <select name="fatturato2024" value={formData.fatturato2024} onChange={handleChange} className={cn(inputBase, "appearance-none pr-10")}>
                  {revenueOptions.map((option) => (
                    <option key={option.value || "empty-2024"} value={option.value} disabled={option.value === ""}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </FieldContainer>

            <FieldContainer>
              <Label>Fatturato 2025 (previsto) *</Label>
              <div className="relative">
                <select name="fatturato2025" value={formData.fatturato2025} onChange={handleChange} className={cn(inputBase, "appearance-none pr-10")}>
                  {revenueOptions.map((option) => (
                    <option key={option.value || "empty-2025"} value={option.value} disabled={option.value === ""}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </FieldContainer>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">Requisiti base</h2>
            <p className="text-sm font-medium text-muted-foreground">Informazioni rapide sul profilo aziendale.</p>

            {[
              { id: "durc", label: "Sei in regola con DURC e diritti camerali?" },
              { id: "giovanile", label: "L'impresa e giovanile? (soci/titolari under 36)" },
              { id: "femminile", label: "L'impresa e femminile? (prevalenza donne in ownership/decisioni)" },
            ].map((question) => (
              <div key={question.id} className="space-y-3">
                <Label>{question.label}</Label>
                <div className="flex gap-3">
                  {(["Si", "No"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(question.id as keyof FormData, opt)}
                      className={choiceButton((formData as unknown as Record<string, string>)[question.id] === opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl">Obiettivo certificazione</h2>
            <p className="text-sm font-medium text-muted-foreground">Ultimo step: allineiamo priorita e contesto.</p>

            <FieldContainer>
              <Label>Quale certificazione vuoi ottenere? *</Label>
              <input required type="text" name="certificazione" value={formData.certificazione} onChange={handleChange} className={inputBase} placeholder="Es. ISO 9001, ISO 27001, UNI/PdR 125" />
            </FieldContainer>

            {[
              { id: "paritaGenere", label: "Hai gia una certificazione parita di genere?" },
              { id: "ambientale", label: "Hai almeno una certificazione ambientale?" },
            ].map((question) => (
              <div key={question.id} className="space-y-3">
                <Label>{question.label}</Label>
                <div className="flex gap-3">
                  {(["Si", "No"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleSelect(question.id as keyof FormData, opt)}
                      className={choiceButton((formData as unknown as Record<string, string>)[question.id] === opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto flex min-h-[82vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-[0_30px_90px_-42px_rgba(15,23,42,0.36)] backdrop-blur-xl md:flex-row">
      <div className="border-b border-border/60 bg-secondary/28 p-6 md:w-[34%] md:border-b-0 md:border-r md:p-8">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
            Step {currentStep + 1} di {steps.length}
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/75">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-sky-500" animate={{ width: `${progress}%` }} transition={{ duration: 0.35 }} />
          </div>
          <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">
            Bastano pochi minuti per impostare una consulenza mirata e orientata ai risultati.
          </p>
        </div>

        <div className="hidden space-y-3 md:block">
          {steps.map((step, index) => {
            const active = index === currentStep;
            const completed = index < currentStep;
            return (
              <div key={step.id} className={cn("flex items-center gap-3 rounded-xl px-2 py-2 transition-all", active ? "bg-white/82" : "bg-transparent")}>
                <div
                  className={cn(
                    "inline-flex size-8 items-center justify-center rounded-full border-2 transition-colors",
                    active
                      ? "border-primary bg-primary/10 text-primary"
                      : completed
                        ? "border-primary bg-primary text-white"
                        : "border-muted bg-white text-muted-foreground",
                  )}
                >
                  {completed ? <Check className="size-4" /> : <step.icon className="size-4" />}
                </div>
                <span className={cn("text-sm font-bold", active ? "text-foreground" : "text-muted-foreground")}>{step.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        {error ? (
          <div className="mt-5 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-700">{error}</div>
        ) : null}

        {success ? (
          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">{success}</div>
        ) : null}

        <div className="mt-8 flex items-center justify-between border-t border-border/55 pt-6">
          <button
            type="button"
            onClick={goPrev}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold transition-colors",
              currentStep === 0 ? "pointer-events-none opacity-0" : "text-muted-foreground hover:text-primary",
            )}
          >
            <ArrowLeft className="size-4" />
            Indietro
          </button>

          <Button
            size="lg"
            onClick={goNext}
            disabled={isSubmitting}
            className="h-12 rounded-xl px-8 text-sm font-semibold text-white glow-shadow hover:glow-shadow-strong"
          >
            {isSubmitting ? "Invio in corso..." : currentStep === steps.length - 1 ? "Prenota la call" : "Continua"}
            {!isSubmitting ? (
              currentStep === steps.length - 1 ? (
                <CheckCircle2 className="size-4" />
              ) : (
                <ArrowRight className="size-4" />
              )
            ) : null}
          </Button>
        </div>
      </div>
    </div>
  );
}

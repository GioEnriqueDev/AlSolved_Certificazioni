"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  FileCheck,
  Loader2,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certificazioniData";
import { useMobileViewport } from "@/hooks/useMobileViewport";

type SearchParamsReader = {
  get: (name: string) => string | null;
};

type FormValues = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  certificationId: string;
  role: string;
  employeesRange: string;
  timeframe: string;
  website: string;
  message: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  honey: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export interface BookingCTAProps {
  webhookUrl?: string;
  fallbackPhone?: string;
  fallbackEmail?: string;
}

const EMPLOYEE_OPTIONS = ["1-9", "10-49", "50-249", "250-999", "1000+"] as const;
const TIMEFRAME_OPTIONS = [
  "Entro 30 giorni",
  "1-3 mesi",
  "3-6 mesi",
  "6-12 mesi",
  "Sto valutando",
] as const;

function initialFormValues(certificationId = ""): FormValues {
  return {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    certificationId,
    role: "",
    employeesRange: "",
    timeframe: "",
    website: "",
    message: "",
    privacyConsent: false,
    marketingConsent: false,
    honey: "",
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizePhone(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function getCookie(name: string) {
  if (typeof document === "undefined") return "";
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(?:^|; )${escapedName}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function pickTrackingParams(searchParams: SearchParamsReader) {
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ] as const;

  return keys.reduce<Record<string, string>>((acc, key) => {
    const value = searchParams.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Inserisci nome e cognome";
  if (!values.companyName.trim()) errors.companyName = "Inserisci il nome dell'azienda";
  if (!values.email.trim()) {
    errors.email = "Inserisci l'email";
  } else if (!isValidEmail(values.email.trim())) {
    errors.email = "Email non valida";
  }

  if (!values.phone.trim()) {
    errors.phone = "Inserisci il telefono";
  } else if (normalizePhone(values.phone).length < 6) {
    errors.phone = "Telefono non valido";
  }

  if (!values.message.trim()) {
    errors.message = "Descrivi brevemente il contesto";
  } else if (values.message.trim().length < 20) {
    errors.message = "Inserisci almeno 20 caratteri per una valutazione utile";
  }

  if (!values.privacyConsent) {
    errors.privacyConsent = "Devi accettare l'informativa privacy";
  }

  return errors;
}

function buildWebhookPayload(
  values: FormValues,
  searchParams: SearchParamsReader,
  certificationLabel: string | null,
) {
  const tracking = pickTrackingParams(searchParams);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const pagePath =
    typeof window !== "undefined"
      ? `${window.location.pathname}${window.location.search}`
      : "/contatti";

  return {
    formType: "analysis_request",
    source: "alsolved-certificazioni-site",
    submittedAt: new Date().toISOString(),
    lead: {
      fullName: values.fullName.trim(),
      companyName: values.companyName.trim(),
      email: values.email.trim(),
      phone: normalizePhone(values.phone),
      certificationId: values.certificationId || null,
      certificationLabel,
      role: values.role.trim() || null,
      employeesRange: values.employeesRange || null,
      timeframe: values.timeframe || null,
      website: values.website.trim() || null,
      message: values.message.trim(),
      privacyConsent: values.privacyConsent,
      marketingConsent: values.marketingConsent,
    },
    page: {
      url: pageUrl,
      path: pagePath,
      title: typeof document !== "undefined" ? document.title : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
      language: typeof navigator !== "undefined" ? navigator.language : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    },
    tracking,
    hubspotContext: {
      hutk: getCookie("hubspotutk") || null,
      pageUri: pageUrl || null,
      pageName: typeof document !== "undefined" ? document.title : null,
    },
  };
}

function isValidWebhookUrl(url: string) {
  if (!url) return false;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

function ErrorText({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return <p className="mt-1 text-xs font-semibold text-rose-600">{children}</p>;
}

export default function BookingCTA({
  webhookUrl =
  process.env.NEXT_PUBLIC_ANALYSIS_WEBHOOK_URL ??
  process.env.NEXT_PUBLIC_HUBSPOT_WEBHOOK_URL ??
  "",
  fallbackPhone = "+39 331 365 3490",
  fallbackEmail = "info@alsolved.com",
}: BookingCTAProps) {
  const searchParams = useSearchParams();
  const reducedMotion = useReducedMotion();
  const { isMobile } = useMobileViewport();

  const preselectedCertificationId = searchParams.get("cert") ?? "";
  const [values, setValues] = useState<FormValues>(() =>
    initialFormValues(preselectedCertificationId),
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });

  const selectedCertificationId = values.certificationId || preselectedCertificationId;
  const selectedCertification = certifications.find(
    (cert) => cert.id === selectedCertificationId,
  );
  const webhookConfigured = isValidWebhookUrl(webhookUrl);

  function onFieldChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));

    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

    if (status.state !== "idle") {
      setStatus({ state: "idle" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "submitting") return;

    const normalized: FormValues = {
      ...values,
      certificationId: values.certificationId || preselectedCertificationId,
      phone: normalizePhone(values.phone),
    };

    const nextErrors = validate(normalized);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        state: "error",
        message: "Controlla i campi evidenziati e riprova.",
      });
      return;
    }

    if (normalized.honey.trim()) {
      setStatus({
        state: "success",
        message: "Richiesta registrata. Ti ricontatteremo a breve.",
      });
      return;
    }

    if (!webhookConfigured) {
      setStatus({
        state: "error",
        message:
          "Webhook non configurato. Imposta NEXT_PUBLIC_ANALYSIS_WEBHOOK_URL per l'invio diretto al CRM.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const payload = buildWebhookPayload(
        normalized,
        searchParams,
        selectedCertification ? `${selectedCertification.subtitle} ${selectedCertification.title}` : null,
      );

      const response = await fetch(webhookUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`);
      }

      setErrors({});
      setValues(initialFormValues(preselectedCertificationId));
      setStatus({
        state: "success",
        message:
          "Richiesta inviata correttamente. Il lead e stato inoltrato al webhook (HubSpot).",
      });
    } catch (error) {
      console.error("Webhook submit failed", error);
      setStatus({
        state: "error",
        message:
          "Invio non riuscito. Verifica webhook/CORS oppure contattaci via telefono o email.",
      });
    }
  }

  const inputBase =
    "w-full rounded-[0.85rem] border border-slate-200/80 bg-white px-4 py-4 text-[0.95rem] font-semibold text-slate-900 shadow-[0_2px_14px_-6px_rgba(0,0,0,0.03)] transition-all duration-200 placeholder:font-medium placeholder:text-slate-400 hover:border-slate-300 hover:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] focus:border-primary/50 focus:bg-white focus:ring-[4px] focus:ring-primary/10 focus:outline-none";
  const cardBase =
    "rounded-[1.4rem] border border-slate-200/60 bg-slate-50/60 p-6 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50/90 sm:p-8 xl:rounded-[1.75rem] xl:p-10";

  return (
    <div
      id="analysis-form"
      className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/95 p-2.5 shadow-[0_32px_80px_-24px_rgba(15,23,42,0.12)] sm:rounded-[2rem] xl:max-w-none xl:rounded-[2.25rem] xl:p-3"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(242,78,107,0.12),transparent_46%),radial-gradient(circle_at_84%_80%,rgba(59,130,246,0.10),transparent_46%)]" />

      <div className="relative rounded-[1.1rem] border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] sm:rounded-[1.5rem] sm:p-8 md:p-10 xl:rounded-[1.8rem] xl:p-12">
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:items-start sm:justify-between xl:mb-12">
          <div className="flex gap-4 sm:gap-5">
            <div className="mt-0.5 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 text-primary shadow-inner sm:h-16 sm:w-16">
              <CalendarCheck className="size-7 sm:size-8" />
            </div>
            <div>
              <h2 className="text-balance text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl xl:text-[2.25rem]">
                Richiedi l&apos;analisi preliminare gratuita
              </h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-500 sm:text-[1.05rem] xl:max-w-[34rem]">
                Compila il modulo e ti ricontattiamo entro 24 ore con una valutazione personalizzata.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:max-w-[18rem] sm:justify-end xl:max-w-[20rem] xl:gap-2.5">
            <span className="pill-chip bg-white/90 text-muted-foreground">
              <FileCheck className="size-3.5 text-primary" />
              100% gratuita
            </span>
            <span className="pill-chip bg-white/90 text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              Senza impegno
            </span>
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:mb-6 xl:mb-7">
          {selectedCertification ? (
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="size-4 shrink-0" />
              <span className="truncate">
                Certificazione preselezionata: {selectedCertification.subtitle} ({selectedCertification.title})
              </span>
            </div>
          ) : (
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <Sparkles className="size-3.5 shrink-0 text-primary" />
              <span className="truncate">Risposta garantita entro 24 ore lavorative</span>
            </div>
          )}

          {!webhookConfigured ? (
            <div className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
              <AlertCircle className="size-3.5" />
              Servizio in fase di attivazione — Ti ricontatteremo via email.
            </div>
          ) : null}
        </div>

        <AnimatePresence mode="wait">
          {status.state === "success" ? (
            <motion.div
              key="success"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, y: -8 }}
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em]">
                    Richiesta inviata
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-relaxed">{status.message}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setStatus({ state: "idle" })}
                      className="focus-ring rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs font-semibold text-emerald-700"
                    >
                      Invia un&apos;altra richiesta
                    </button>
                    <a
                      href={`tel:${fallbackPhone.replace(/\s+/g, "")}`}
                      className="focus-ring rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs font-semibold text-emerald-700"
                    >
                      Chiama ora
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6 sm:space-y-8 xl:space-y-10"
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, y: -6 }}
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] xl:gap-8">
                <fieldset className={`${cardBase} flex flex-col`}>
                  <legend className="mb-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-primary">
                    Contatto Personale
                  </legend>
                  <div className="flex h-full flex-col justify-between gap-5">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                        Nome e cognome *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        className={inputBase}
                        value={values.fullName}
                        onChange={(e) => onFieldChange("fullName", e.target.value)}
                        placeholder="Mario Rossi"
                        aria-invalid={Boolean(errors.fullName)}
                      />
                      <ErrorText>{errors.fullName}</ErrorText>
                    </div>

                    <div>
                      <label htmlFor="companyName" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                        Azienda *
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        autoComplete="organization"
                        className={inputBase}
                        value={values.companyName}
                        onChange={(e) => onFieldChange("companyName", e.target.value)}
                        placeholder="Azienda S.r.l."
                        aria-invalid={Boolean(errors.companyName)}
                      />
                      <ErrorText>{errors.companyName}</ErrorText>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          className={inputBase}
                          value={values.email}
                          onChange={(e) => onFieldChange("email", e.target.value)}
                          placeholder="nome@azienda.it"
                          aria-invalid={Boolean(errors.email)}
                        />
                        <ErrorText>{errors.email}</ErrorText>
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Telefono *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          className={inputBase}
                          value={values.phone}
                          onChange={(e) => onFieldChange("phone", e.target.value)}
                          placeholder="+39 3xx xxx xxxx"
                          aria-invalid={Boolean(errors.phone)}
                        />
                        <ErrorText>{errors.phone}</ErrorText>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className={`${cardBase} flex flex-col`}>
                  <legend className="mb-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-primary">
                    Dettagli Azienda
                  </legend>
                  <div className="flex h-full flex-col justify-between gap-5">
                    <div>
                      <label htmlFor="certificationId" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                        Certificazione di interesse
                      </label>
                      <select
                        id="certificationId"
                        name="certificationId"
                        className={inputBase}
                        value={values.certificationId || preselectedCertificationId}
                        onChange={(e) => onFieldChange("certificationId", e.target.value)}
                      >
                        <option value="">Seleziona una certificazione</option>
                        {certifications.map((cert) => (
                          <option key={cert.id} value={cert.id}>
                            {cert.subtitle} - {cert.title}
                          </option>
                        ))}
                        <option value="altro">Altro / Non sono sicuro</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="employeesRange" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Dipendenti
                        </label>
                        <select
                          id="employeesRange"
                          name="employeesRange"
                          className={inputBase}
                          value={values.employeesRange}
                          onChange={(e) => onFieldChange("employeesRange", e.target.value)}
                        >
                          <option value="">Seleziona range</option>
                          {EMPLOYEE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeframe" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Quando vuoi partire?
                        </label>
                        <select
                          id="timeframe"
                          name="timeframe"
                          className={inputBase}
                          value={values.timeframe}
                          onChange={(e) => onFieldChange("timeframe", e.target.value)}
                        >
                          <option value="">Seleziona timing</option>
                          {TIMEFRAME_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="role" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Ruolo
                        </label>
                        <input
                          id="role"
                          name="role"
                          autoComplete="organization-title"
                          className={inputBase}
                          value={values.role}
                          onChange={(e) => onFieldChange("role", e.target.value)}
                          placeholder="CEO, Operations, HR"
                        />
                      </div>

                      <div>
                        <label htmlFor="website" className="mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Sito web
                        </label>
                        <input
                          id="website"
                          name="website"
                          inputMode="url"
                          className={inputBase}
                          value={values.website}
                          onChange={(e) => onFieldChange("website", e.target.value)}
                          placeholder="https://azienda.it"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <fieldset className={cardBase}>
                <legend className="mb-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-primary">
                  Obiettivo e note operative
                </legend>
                <label htmlFor="message" className="mb-2.5 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Cosa vuoi ottenere? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={isMobile ? 5 : 6}
                  className={`${inputBase} min-h-[140px] resize-y`}
                  value={values.message}
                  onChange={(e) => onFieldChange("message", e.target.value)}
                  placeholder="Es. dobbiamo partecipare a una gara, prepararci a ISO 27001 / ISO 9001, capire tempi e costi e la roadmap migliore."
                  aria-invalid={Boolean(errors.message)}
                />
                <ErrorText>{errors.message}</ErrorText>
              </fieldset>

              <fieldset className={cardBase}>
                <legend className="mb-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-primary">
                  Consensi e Privacy
                </legend>

                <label className="flex items-start gap-3.5 rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm transition-colors hover:bg-white">
                  <input
                    type="checkbox"
                    checked={values.privacyConsent}
                    onChange={(e) => onFieldChange("privacyConsent", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/25"
                  />
                  <span className="text-sm font-medium leading-relaxed text-foreground/85">
                    Accetto l&apos;informativa privacy e autorizzo il trattamento dei dati per essere ricontattato in merito alla richiesta di analisi. <span className="font-semibold">*</span>
                  </span>
                </label>
                <ErrorText>{errors.privacyConsent}</ErrorText>

                <label className="mt-4 flex items-start gap-3.5 rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm transition-colors hover:bg-white">
                  <input
                    type="checkbox"
                    checked={values.marketingConsent}
                    onChange={(e) => onFieldChange("marketingConsent", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/25"
                  />
                  <span className="text-sm font-medium leading-relaxed text-foreground/85">
                    Acconsento a ricevere aggiornamenti e contenuti informativi (facoltativo).
                  </span>
                </label>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="companyFax">Non compilare questo campo</label>
                  <input
                    id="companyFax"
                    name="companyFax"
                    value={values.honey}
                    onChange={(e) => onFieldChange("honey", e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </fieldset>

              <AnimatePresence>
                {status.state === "error" ? (
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? {} : { opacity: 0, y: -6 }}
                    className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-700"
                  >
                    {status.message}
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="sticky bottom-2 z-20 -mx-1 mt-4 rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-[0_-12px_40px_rgba(0,0,0,0.04),0_16px_40px_-24px_rgba(15,23,42,0.25)] sm:static sm:mx-0 sm:mt-10 sm:p-6 xl:rounded-[1.75rem] xl:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-semibold text-slate-600 sm:text-[0.95rem]">
                    <p className="text-slate-900">Ti ricontatteremo entro 24 ore lavorative</p>
                    <p className="mt-1 font-medium text-slate-500">I tuoi dati sono trattati in conformità al GDPR</p>
                  </div>
                  <Button
                    type="submit"
                    disabled={status.state === "submitting"}
                    className="h-14 w-full rounded-[1rem] bg-gradient-to-r from-primary to-primary/90 text-[1rem] font-bold text-white shadow-[0_8px_24px_-8px_rgba(var(--primary-rgb),0.5)] transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(var(--primary-rgb),0.6)] sm:w-auto sm:px-10"
                  >
                    {status.state === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia richiesta analisi
                        <Send className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {!webhookConfigured ? (
          <div className="mt-5 rounded-2xl border border-dashed border-border/80 bg-secondary/30 p-4 text-left">
            <p className="text-sm font-bold text-foreground">Preferisci contattarci direttamente?</p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground">
              Puoi raggiungerci anche via telefono o email per una risposta immediata.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${fallbackPhone.replace(/\s+/g, "")}`}
                className="focus-ring flex items-center gap-3 rounded-xl border border-white/80 bg-white/95 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/20"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-4" />
                </span>
                {fallbackPhone}
              </a>
              <a
                href={`mailto:${fallbackEmail}`}
                className="focus-ring flex items-center gap-3 rounded-xl border border-white/80 bg-white/95 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/20"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </span>
                {fallbackEmail}
              </a>
            </div>
          </div>
        ) : null}

        <p className="mt-5 text-xs font-medium leading-relaxed text-muted-foreground/85">
          I dati saranno trattati nel rispetto del GDPR. Non condividiamo le tue informazioni con terze parti.
        </p>
      </div>
    </div>
  );
}

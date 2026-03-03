"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown, Check, Building2, UserCircle, MapPin, BarChart3, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
    { id: "personali", title: "Dati Personali", icon: UserCircle },
    { id: "azienda", title: "L'Azienda", icon: Building2 },
    { id: "sede", title: "Sede Operativa", icon: MapPin },
    { id: "dimensioni", title: "Dimensioni", icon: BarChart3 },
    { id: "requisiti", title: "Requisiti", icon: ShieldCheck },
    { id: "obiettivi", title: "Obiettivi", icon: Target },
];

export default function LeadWizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
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
        città: "",
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
        visura: null as File | null,
    });

    const handleNext = () => {
        // Basic validation can be added here
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            submitToHubspot();
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(prev => prev - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelect = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const submitToHubspot = async () => {
        setIsSubmitting(true);
        setError(null);

        try {
            // Invia i dati in JSON normale (tralasciamo l'upload file nativo per HubSpot per l'MVP, per non appesantire il backend)
            const res = await fetch("/api/hubspot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    sourceUrl: typeof window !== "undefined" ? window.location.href : "Sito"
                }),
            });

            const data = await res.json();

            if (data.success && data.redirect) {
                window.location.href = data.redirect;
            } else {
                setError(data.error || "Si è verificato un errore. Riprova.");
                setIsSubmitting(false);
            }
        } catch (err) {
            setError("Impossibile connettersi al Server. Controlla la tua connessione.");
            setIsSubmitting(false);
        }
    };

    // UI rendering per STEP
    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl text-balance tracking-tight">Chi sei?</h2>
                        <p className="text-muted-foreground text-sm font-medium">Inizia parlandoci di te per facilitare la comunicazione.</p>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nome *</label>
                                <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Il tuo nome" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cognome *</label>
                                <input required type="text" name="cognome" value={formData.cognome} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Il tuo cognome" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ruolo referente *</label>
                            <input required type="text" name="ruolo" value={formData.ruolo} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. Titolare o legale rappresentante" />
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email *</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="nome@esempio.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Telefono *</label>
                                <input required type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="+39 312 345 6789" />
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl text-balance tracking-tight">La tua Azienda</h2>
                        <p className="text-muted-foreground text-sm font-medium">I dati anagrafici base dell'impresa.</p>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ragione Sociale *</label>
                            <input required type="text" name="azienda" value={formData.azienda} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. Finzione S.p.A." />
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Partita IVA *</label>
                                <input required type="text" name="piva" value={formData.piva} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. 12345678901" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Anno di apertura *</label>
                                <input required type="number" name="annoApertura" value={formData.annoApertura} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. 2018" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sito Web *</label>
                                <input required type="url" name="sitoWeb" value={formData.sitoWeb} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="https://www.azienda.it" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Settore Attività (ATECO)</label>
                                <input type="text" name="ateco" value={formData.ateco} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. 62.01 - Sviluppo software (Opzionale)" />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl text-balance tracking-tight">Sede Operativa</h2>
                        <p className="text-muted-foreground text-sm font-medium">Dove siete basati e dove operate.</p>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_120px]">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Città *</label>
                                <input required type="text" name="città" value={formData.città} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. Cinisello Balsamo" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sigla Prov. *</label>
                                <input required type="text" name="provincia" value={formData.provincia} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. MI" maxLength={2} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Indirizzo Completo *</label>
                            <input required type="text" name="indirizzo" value={formData.indirizzo} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Via Garibaldi 17" />
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">CAP *</label>
                                <input required type="text" name="cap" value={formData.cap} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="20092" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Iscr. Registro Imprese (Città) *</label>
                                <input required type="text" name="registroImprese" value={formData.registroImprese} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. Milano" />
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Hai più sedi operative?</label>
                            <div className="flex gap-3">
                                {["Si", "No"].map(opt => (
                                    <button key={opt} type="button" onClick={() => handleSelect("sediMultiple", opt)} className={cn("flex-1 py-3 px-4 rounded-xl border text-sm font-semibold transition-all", formData.sediMultiple === opt ? "bg-primary text-white border-primary shadow-sm" : "bg-white/50 text-foreground/80 border-input hover:border-primary/30")}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            {formData.sediMultiple === "Si" && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-2">
                                    <input type="text" name="doveSediMultiple" value={formData.doveSediMultiple} onChange={handleChange} placeholder="Dove si trovano le altre sedi?" className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40" />
                                </motion.div>
                            )}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl text-balance tracking-tight">Struttura Economica</h2>
                        <p className="text-muted-foreground text-sm font-medium">Capiamo la portata della tua realtà.</p>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Numero Dipendenti Attuali *</label>
                            <input required type="number" name="dipendenti" value={formData.dipendenti} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. 14 (Se assenti, scrivi 0)" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fatturato 2024 *</label>
                            <div className="relative">
                                <select name="fatturato2024" value={formData.fatturato2024} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all appearance-none pr-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50">
                                    <option value="" disabled>Seleziona una fascia</option>
                                    <option value="A">A - Fino a 50.000€ (o non attiva)</option>
                                    <option value="B">B - Tra 51.000€ e 100.000€</option>
                                    <option value="C">C - Tra 101.000€ e 300.000€</option>
                                    <option value="D">D - Tra 301.000€ e 600.000€</option>
                                    <option value="E">E - Tra 601.000€ e 1.000.000€</option>
                                    <option value="F">F - Superiore a 1.000.000€</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fatturato 2025 (Previsto) *</label>
                            <div className="relative">
                                <select name="fatturato2025" value={formData.fatturato2025} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all appearance-none pr-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50">
                                    <option value="" disabled>Seleziona una fascia</option>
                                    <option value="A">A - Fino a 50.000€ (o non attiva)</option>
                                    <option value="B">B - Tra 51.000€ e 100.000€</option>
                                    <option value="C">C - Tra 101.000€ e 300.000€</option>
                                    <option value="D">D - Tra 301.000€ e 600.000€</option>
                                    <option value="E">E - Tra 601.000€ e 1.000.000€</option>
                                    <option value="F">F - Superiore a 1.000.000€</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl text-balance tracking-tight">Requisiti Base</h2>
                        <p className="text-muted-foreground text-sm font-medium">Requisiti strutturali fondamentali.</p>

                        {[
                            { id: "durc", label: "Sei in regola con il DURC ed il versamento dei Diritti Camerali? *" },
                            { id: "giovanile", label: "L'impresa è giovanile? (titolari o soci under 36) *" },
                            { id: "femminile", label: "L'impresa è femminile? (prevalenza donne in proprietà/decisioni) *" },
                        ].map(question => (
                            <div key={question.id} className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{question.label}</label>
                                <div className="flex gap-3">
                                    {["Si", "No"].map(opt => (
                                        <button key={opt} type="button" onClick={() => handleSelect(question.id, opt)} className={cn("flex-1 py-3 px-4 rounded-xl border text-sm font-semibold transition-all", (formData as any)[question.id] === opt ? "bg-primary text-white border-primary shadow-sm" : "bg-white/50 text-foreground/80 border-input hover:border-primary/30")}>
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
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl text-balance tracking-tight">Obiettivo Audit</h2>
                        <p className="text-muted-foreground text-sm font-medium">Quali certificazioni ti interessano.</p>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sai quale certificazione vorresti ottenere? *</label>
                            <input required type="text" name="certificazione" value={formData.certificazione} onChange={handleChange} className="w-full rounded-xl border border-input bg-white/50 px-4 py-3.5 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50" placeholder="Es. ISO 9001 o Parità di Genere" />
                        </div>

                        {[
                            { id: "paritaGenere", label: "Hai il Certificato di Parità di Genere? *" },
                            { id: "ambientale", label: "Hai almeno una Certificazione di Sostenibilità Ambientale? *" },
                        ].map(question => (
                            <div key={question.id} className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{question.label}</label>
                                <div className="flex gap-3">
                                    {["Si", "No"].map(opt => (
                                        <button key={opt} type="button" onClick={() => handleSelect(question.id, opt)} className={cn("flex-1 py-3 px-4 rounded-xl border text-sm font-semibold transition-all", (formData as any)[question.id] === opt ? "bg-primary text-white border-primary shadow-sm" : "bg-white/50 text-foreground/80 border-input hover:border-primary/30")}>
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="mt-6 rounded-2xl border border-dotted border-border p-5 text-center bg-white/40">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2 cursor-pointer hover:text-primary transition-colors">Allega Visura (Opzionale, serve per velocizzare l'analisi)</label>
                            <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all" />
                            <p className="text-[11px] text-muted-foreground mt-3">Dimensione massima: 5MB</p>
                        </div>

                        {error && (
                            <div className="bg-destructive/10 text-destructive text-sm font-semibold rounded-xl p-4 mt-4">
                                {error}
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    const isFormValid = () => {
        // Esempio molto basico di validazione (assicuriamo che il nome ci sia al primo step)
        if (currentStep === 0) return formData.nome.length > 2 && formData.email.includes('@');
        if (currentStep === 1) return formData.azienda.length > 2 && formData.ateco !== "";
        if (currentStep === 2) return formData.città.length > 2;
        if (currentStep === 3) return formData.fatturato2024 !== "" && formData.fatturato2025 !== "";
        return true; // Per test e UX fluida
    };

    return (
        <div className="min-h-[85vh] w-full max-w-4xl mx-auto flex flex-col md:flex-row bg-white overflow-hidden rounded-[2rem] shadow-apple">

            {/* SIDEBAR WIZARD PROGRESS (Desktop) / TOP (Mobile) */}
            <div className="bg-secondary/30 border-b border-border/60 p-6 md:p-8 md:w-1/3 md:border-b-0 md:border-r flex flex-col justify-between">
                <div>
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 mb-2 text-primary font-bold tracking-widest uppercase text-[10px] bg-primary/10 px-3 py-1 rounded-full">
                            Step {currentStep + 1} di {steps.length}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                            Bastano pochi istanti per inquadrare la tua situazione. Subito dopo sceglierai l'orario della call e avrai fatto il primo passo The screen per risolvere la burocrazia.
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col gap-4">
                        {steps.map((step, idx) => {
                            const active = idx === currentStep;
                            const completed = idx < currentStep;
                            return (
                                <div key={step.id} className={cn("flex items-center gap-3 transition-opacity duration-300", active ? "opacity-100" : (completed ? "opacity-60" : "opacity-30"))}>
                                    <div className={cn("size-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors", active ? "border-primary bg-primary/10 text-primary" : (completed ? "border-primary bg-primary text-white" : "border-muted bg-white text-muted-foreground"))}>
                                        {completed ? <Check className="size-4" /> : <step.icon className="size-4" />}
                                    </div>
                                    <span className={cn("text-sm font-bold", active ? "text-foreground" : "text-muted-foreground")}>{step.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* RISPOSTE */}
            <div className="p-6 sm:p-8 md:p-12 md:w-2/3 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1"
                    >
                        {renderStepContent()}
                    </motion.div>
                </AnimatePresence>

                {/* BOTTOM NAV */}
                <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className={cn("text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors", currentStep === 0 ? "opacity-0 pointer-events-none" : "text-muted-foreground")}
                    >
                        <ArrowLeft className="size-4" /> Indietro
                    </button>

                    <Button
                        size="lg"
                        onClick={handleNext}
                        disabled={isSubmitting} // Opzionale: disabled={!isFormValid()} 
                        className="rounded-xl px-8 h-12 glow-shadow bg-primary text-white font-semibold flex items-center gap-2 hover:glow-shadow-strong"
                    >
                        {isSubmitting ? "Invio in corso..." : (currentStep === steps.length - 1 ? "Prenota la Call" : "Continua")}
                        {!isSubmitting && (currentStep === steps.length - 1 ? <CheckCircle2 className="size-4" /> : <ArrowRight className="size-4" />)}
                    </Button>
                </div>
            </div>
        </div>
    );
}

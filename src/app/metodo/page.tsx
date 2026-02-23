import Footer from "@/components/sections/Footer";
import FadeIn from "@/components/animations/FadeIn";
import { ShieldCheck, Search, FileText, Settings, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MetodoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-white border-b border-border/50">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:30px_30px]" />

                <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-widest">Processo ALSOLVED</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
                            Zero Sorprese.<br />Massima Certezza.
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                            Dimentica i manuali copia-incolla e la burocrazia infinita. Abbiamo ingegnerizzato un metodo a 4 fasi che riduce al minimo l'impatto sul tuo team interno.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 4 Steps Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-black mb-16 text-center">Le 4 Fasi del Nostro Intervento</h2>
                    </FadeIn>

                    <div className="space-y-12">
                        {/* Step 1 */}
                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center">
                                    <Search className="w-10 h-10 text-orange-500" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2 block">Mese 1</span>
                                    <h3 className="text-3xl font-black mb-4">1. Gap Analysis & Check-up Iniziale</h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                        Fotografiamo esattamente la situazione attuale della tua azienda. Analizziamo come lavorate già, mappiamo i processi esistenti e identifichiamo lo scarto ("Gap") rispetto ai requisiti rigidi della norma ISO/UNI che abbiamo scelto. Non stravolgiamo il vostro lavoro: vi adattiamo noi alla norma.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <FileText className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">Mese 1 - 2</span>
                                    <h3 className="text-3xl font-black mb-4">2. Creazione della Burocrazia Operativa</h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                        Sulla base del Gap Analysis, i nostri consulenti scrivono fisicamente i Manuali Tecnici, le Procedure (SOP), la Valutazione dei Rischi e le Policy. Non vi mandiamo template da riempire: creiamo noi la documentazione su misura, pronta per essere integrata nel vostro operato.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={0.3}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <Settings className="w-10 h-10 text-blue-500" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-2 block">Mese 2 - 3</span>
                                    <h3 className="text-3xl font-black mb-4">3. Implementazione & Audit Interno</h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                        Affianchiamo il vostro team (o il vostro Responsabile) nell'applicare concretamente le nuove procedure. Facciamo formazione specifica sulle policy appena scritte e poi simuliamo l'esame finale: l'Audit Interno. Se troviamo non conformità in questa simulazione, le correggiamo senza danni.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Step 4 */}
                        <FadeIn delay={0.4}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-20 h-20 shrink-0 rounded-2xl bg-green-100 flex items-center justify-center">
                                    <Award className="w-10 h-10 text-green-500" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-green-500 uppercase tracking-wider mb-2 block">Mese 3</span>
                                    <h3 className="text-3xl font-black mb-4">4. Audit dell'Ente Terzo & Certificazione</h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                        Il giorno della verità non vi lasciamo soli. Partecipiamo in affiancamento (in presenza o da remoto) all'Audit ufficiale condotto dall'Organismo di Certificazione indipendente. Interveniamo tempestivamente in caso di richieste complesse dell'ispettore per garantire il rilascio del Certificato.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Comparison Table Section */}
            <section className="py-24 bg-white border-t border-border/50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black mb-4">Carico di lavoro: Noi vs Voi</h2>
                            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                                Il problema delle certificazioni è spesso il blocco operativo dell'azienda. Ecco come dividiamo realmente i compiti per farvi continuare a lavorare al 100%.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-3xl shadow-lg border border-border/50">
                            <table className="w-full text-left border-collapse bg-white">
                                <thead>
                                    <tr>
                                        <th className="p-6 bg-gray-50 border-b-2 text-xl font-bold w-1/3">Cosa ci serve da Voi</th>
                                        <th className="p-6 bg-primary/10 border-b-2 text-xl font-bold w-2/3 border-l text-primary">Cosa Facciamo Noi (ALSOLVED)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-lg font-medium">
                                    <tr>
                                        <td className="p-6 border-b text-muted-foreground">Nominare un referente interno per la raccolta dei documenti di base (visure, contratti).</td>
                                        <td className="p-6 border-b border-l bg-primary/5">Assorbimento totale e check-up preliminare formale del modello organizzativo (SOP, organigramma, flussi).</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border-b text-muted-foreground">Fornire accessi ai software esistenti per eventuali integrazioni.</td>
                                        <td className="p-6 border-b border-l bg-primary/5">Scrittura integrale della documentazione obbligatoria. <span className="font-bold underline text-foreground">Zero fogli in bianco da riempire per voi.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border-b text-muted-foreground">Ritagliare 2-4 ore al mese per validare e approvare le procedure generate da noi.</td>
                                        <td className="p-6 border-b border-l bg-primary/5">Revisione legale e correzione degli scostamenti rispetto alla compliance ISO/UNI. Simulazione Audit Interno completa.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 border-b text-muted-foreground">Ospitare l'ispettore dell'Ente Terzo nei giorni dell'audit finale.</td>
                                        <td className="p-6 border-b border-l bg-primary/5">Affiancamento attivo durante i giorni di ispezione. Facciamo da scudo alle domande tecniche poste dall'Ente Ispettivo.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,78,107,0.2),transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Vuoi certificarti senza bloccare l'azienda?
                    </h2>
                    <p className="text-xl text-gray-400 font-medium mb-10">
                        Siamo pronti. Parliamo per 15 minuti e ti diamo chiarezza assoluta sui prossimi passi.
                    </p>
                    <Link href="/contatti">
                        <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_rgba(242,78,107,0.3)] transition-all transform hover:scale-105">
                            Prenota una Call
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

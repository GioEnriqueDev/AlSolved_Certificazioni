import { certifications } from "@/data/certificazioniData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Target, ShieldCheck, Clock, CheckCircle2, ChevronRight, Euro, HelpCircle, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
    return certifications.map((cert) => ({
        id: cert.id,
    }));
}

export default async function CertificationPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cert = certifications.find((c) => c.id === id);

    if (!cert) {
        return notFound();
    }

    const genericFaqs = [
        { question: "Serve un responsabile interno dedicato?", answer: "No, affianchiamo la tua squadra per ridurre al minimo il carico interno. Serve solo un referente per il recupero dei documenti essenziali." },
        { question: "L'audit si fa in azienda?", answer: "Solitamente l'audit di certificazione prevede una fase documentale da remoto e una fase ispettiva presso la sede (o i cantieri) dell'azienda, accompagnati dal nostro team." },
        { question: "Quanto dura la certificazione?", answer: "3 anni. Sono previste verifiche annuali di sorveglianza molto più snelle del primo audit per mantenere la validità." },
        { question: "Posso partecipare subito ai bandi?", answer: "Sì, non appena superato l'audit e rilasciato il certificato dall'Ente, puoi usarlo immediatamente per punteggi e bandi pubblici." },
    ];

    // Find related certifications (same category or adjacent)
    const currentIndex = certifications.findIndex(c => c.id === cert.id);
    const related = certifications.filter((c, i) => c.id !== cert.id && Math.abs(i - currentIndex) <= 3).slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-36 pb-20 overflow-hidden bg-gray-50/50 border-b border-border/40">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.04),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <Link href="/certificazioni" className="hover:text-foreground transition-colors">Certificazioni</Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="font-semibold text-foreground">{cert.subtitle}</span>
                    </div>

                    <div className="max-w-3xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <cert.icon className="w-4 h-4 text-primary" />
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">{cert.subtitle}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-5 tracking-tight leading-tight">
                                {cert.title}
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8 max-w-2xl">
                                {cert.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={`/contatti?cert=${cert.id}`}>
                                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full shadow-[0_8px_25px_rgba(242,78,107,0.25)] hover:shadow-[0_12px_35px_rgba(242,78,107,0.4)] transition-all hover:-translate-y-0.5">
                                        Richiedi Analisi Gratuita
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Benefits Section — NEW */}
            <section className="py-20 relative z-10 border-b border-border/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3 tracking-tight">
                            Vantaggi Concreti per la Tua Azienda
                        </h2>
                        <p className="text-muted-foreground font-medium mb-10 max-w-xl">
                            Ecco cosa cambia davvero dopo aver ottenuto la {cert.subtitle}.
                        </p>
                    </FadeIn>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cert.benefits.map((benefit, idx) => (
                            <FadeIn key={idx} delay={idx * 0.06}>
                                <div className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50/80 border border-border/30 hover:border-primary/20 hover:bg-white hover:shadow-sm transition-all duration-300">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <TrendingUp className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-semibold text-foreground leading-relaxed">{benefit}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Hub Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Left Content Column */}
                        <div className="md:col-span-2 space-y-14">

                            {/* Target & Why Now */}
                            <FadeIn delay={0.1}>
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="flex items-center text-xl font-black text-foreground mb-3">
                                            <Users className="w-5 h-5 mr-2.5 text-primary" /> A Chi Serve
                                        </h2>
                                        <p className="text-base text-muted-foreground font-medium leading-relaxed bg-gray-50 p-5 rounded-xl border border-border/40">
                                            {cert.target}
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="flex items-center text-xl font-black text-foreground mb-3">
                                            <Target className="w-5 h-5 mr-2.5 text-primary" /> Perché Ti Serve Ora
                                        </h2>
                                        <p className="text-base text-muted-foreground font-medium leading-relaxed">
                                            {cert.whyNow}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Requirements */}
                            <FadeIn delay={0.2}>
                                <h2 className="flex items-center text-xl font-black text-foreground mb-5">
                                    <CheckCircle2 className="w-5 h-5 mr-2.5 text-primary" /> Requisiti Minimi di Partenza
                                </h2>
                                <div className="bg-white border border-border/40 text-foreground rounded-xl p-6 shadow-sm">
                                    <p className="text-sm text-muted-foreground mb-5 font-medium">Non serve avere un&apos;azienda perfetta. Spesso partiamo da zero. Cosa ci serve da te:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 mt-0.5 shrink-0" />
                                            <span className="font-medium text-sm">Un referente interno (anche non tecnico) per fornirci visure, contratti e organigramma.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 mt-0.5 shrink-0" />
                                            <span className="font-medium text-sm">Impegno della direzione a dedicare alcune ore per le interviste iniziali.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="w-4 h-4 text-orange-400 mr-2 mt-0.5 shrink-0" />
                                            <span className="font-medium text-sm">Nessuna procedura già scritta: creiamo tutto noi analizzando come lavorate.</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>

                            {/* Deliverables */}
                            <FadeIn delay={0.3}>
                                <h2 className="flex items-center text-xl font-black text-foreground mb-5">
                                    <ShieldCheck className="w-5 h-5 mr-2.5 text-primary" /> Cosa Consegniamo
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {cert.deliverables.map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 border border-border/40 p-4 rounded-xl flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2.5 shrink-0 mt-0.5" />
                                            <span className="font-semibold text-foreground text-sm">{item}</span>
                                        </div>
                                    ))}
                                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-primary mr-2.5 shrink-0 mt-0.5" />
                                        <span className="font-semibold text-primary text-sm">Affiancamento completo fino all&apos;Audit</span>
                                    </div>
                                </div>
                            </FadeIn>

                        </div>

                        {/* Right Sticky Sidebar */}
                        <div className="md:col-span-1">
                            <div className="sticky top-32 space-y-5">

                                {/* Info Card */}
                                <FadeIn delay={0.4}>
                                    <div className="bg-white border border-border/50 rounded-2xl p-6 shadow-lg shadow-black/[0.03]">
                                        <h3 className="text-base font-black border-b border-border/40 pb-3 mb-4">Sintesi del Progetto</h3>

                                        <div className="space-y-5">
                                            <div>
                                                <div className="flex items-center text-[11px] font-bold text-muted-foreground uppercase tracking-[0.12em] mb-1.5">
                                                    <Clock className="w-3.5 h-3.5 mr-1.5" /> Timeline
                                                </div>
                                                <p className="text-lg font-bold text-foreground">{cert.timeline}</p>
                                            </div>

                                            <div>
                                                <div className="flex items-center text-[11px] font-bold text-muted-foreground uppercase tracking-[0.12em] mb-1.5">
                                                    <Euro className="w-3.5 h-3.5 mr-1.5" /> Investimento
                                                </div>
                                                <p className="text-lg font-bold text-foreground">Preventivo su Misura</p>
                                                <p className="text-xs font-medium text-muted-foreground mt-1">Dipende da dimensione e complessità.</p>
                                            </div>

                                            <Link href={`/contatti?cert=${cert.id}`} className="block pt-3 border-t border-border/30 mt-3">
                                                <Button className="w-full h-12 text-base font-bold rounded-xl" variant="default">
                                                    Parliamone Ora
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </FadeIn>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50/50 border-t border-border/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-black text-center mb-10 tracking-tight">
                            Domande Frequenti su {cert.subtitle}
                        </h2>
                        <div className="space-y-3">
                            {genericFaqs.map((faq, i) => (
                                <div key={i} className="bg-white border border-border/40 p-5 rounded-xl">
                                    <h4 className="font-bold text-base mb-2 flex items-start">
                                        <HelpCircle className="w-4 h-4 text-primary mr-2.5 mt-0.5 shrink-0" />
                                        {faq.question}
                                    </h4>
                                    <p className="text-sm text-muted-foreground font-medium pl-6.5 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Related Certifications */}
            {related.length > 0 && (
                <section className="py-20 border-t border-border/30">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <FadeIn>
                            <h2 className="text-2xl font-black mb-8 tracking-tight">Potrebbe Interessarti Anche</h2>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {related.map((r, i) => (
                                <FadeIn key={r.id} delay={i * 0.08}>
                                    <Link href={`/certificazioni/${r.id}`} className="group block p-5 rounded-xl border border-border/40 bg-white hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <r.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-base font-black text-foreground">{r.subtitle}</p>
                                                <p className="text-xs text-muted-foreground font-medium">{r.title}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-3">{r.description}</p>
                                        <span className="text-xs font-bold text-primary group-hover:underline">Scopri →</span>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Global CTA */}
            <section className="py-20 bg-foreground text-background text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,78,107,0.15),transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">
                        Pronto a ottenere la {cert.subtitle}?
                    </h2>
                    <p className="text-base text-gray-400 font-medium mb-8">
                        Prenota un&apos;analisi iniziale gratuita. In 15 minuti ti diamo chiara la fattibilità e i prossimi passi.
                    </p>
                    <Link href={`/contatti?cert=${cert.id}`}>
                        <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(242,78,107,0.25)] transition-all transform hover:scale-105 hover:-translate-y-0.5">
                            Prenota Analisi Gratuita
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

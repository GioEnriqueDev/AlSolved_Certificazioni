import { certifications } from "@/data/certificazioniData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Target, ShieldCheck, Clock, CheckCircle2, ChevronRight, Euro, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
    return certifications.map((cert) => ({
        id: cert.id,
    }));
}

export default function CertificationPage({ params }: { params: { id: string } }) {
    const cert = certifications.find((c) => c.id === params.id);

    if (!cert) {
        return notFound();
    }

    // Generate generic placeholder FAQs if none exist specifically for this cert yet.
    // In a real scenario, these will be replaced with cert-specific FAQs.
    const genericFaqs = [
        { question: "Serve un responsabile interno dedicato?", answer: "No, affianchiamo la tua squadra per ridurre al minimo il carico interno. Serve solo un referente per il recupero dei documenti essenziali." },
        { question: "L'audit si fa in azienda?", answer: "Solitamente l'audit di certificazione prevede una fase documentale da remoto e una fase ispettiva presso la sede (o i cantieri) dell'azienda, accompagnati dal nostro team." },
        { question: "Quanto dura la certificazione?", answer: "3 anni. Sono previste verifiche annuali di sorveglianza molto più snelle del primo audit per mantenere la validità." },
        { question: "Posso partecipare subito ai bandi?", answer: "Sì, non appena superato l'audit e rilasciato il certificato dall'Ente, puoi usarlo immediatamente per punteggi e bandi pubblici." },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-gray-50 border-b border-border/50">
                <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:30px_30px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.05),transparent_60%)] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Torna alla Home
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <FadeIn>
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                    <cert.icon className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-bold text-primary uppercase tracking-widest">{cert.subtitle}</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight">
                                    {cert.title}
                                </h1>
                                <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8">
                                    {cert.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href={`/contatti?cert=${cert.id}`}>
                                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-full shadow-[0_8px_30px_rgba(242,78,107,0.3)] hover:shadow-[0_8px_30px_rgba(242,78,107,0.5)] transition-all">
                                            Richiedi Audit Gratuito
                                        </Button>
                                    </Link>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="w-full md:w-1/2">
                            <FadeIn delay={0.2}>
                                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-border/50">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Hub Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Left Content Column */}
                        <div className="md:col-span-2 space-y-16">

                            {/* Target & Why Now */}
                            <FadeIn delay={0.1}>
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="flex items-center text-2xl font-black text-foreground mb-4">
                                            <Users className="w-6 h-6 mr-3 text-primary" /> A chi serve questa certificazione
                                        </h2>
                                        <p className="text-lg text-muted-foreground font-medium leading-relaxed bg-gray-50 p-6 rounded-2xl border border-border/50">
                                            {cert.target}
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="flex items-center text-2xl font-black text-foreground mb-4">
                                            <Target className="w-6 h-6 mr-3 text-primary" /> Perché ti serve ora
                                        </h2>
                                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                            {cert.whyNow}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Requisiti Minimi - Placeholder */}
                            <FadeIn delay={0.2}>
                                <h2 className="flex items-center text-2xl font-black text-foreground mb-6">
                                    <CheckCircle2 className="w-6 h-6 mr-3 text-primary" /> Requisiti minimi di partenza
                                </h2>
                                <div className="bg-white border text-foreground rounded-2xl p-8 shadow-sm">
                                    <p className="text-muted-foreground mb-6 font-medium">Non serve avere un'azienda perfetta. Spesso partiamo da zero. Cosa ci serve da te:</p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <ChevronRight className="w-5 h-5 text-orange-400 mr-2 mt-0.5" />
                                            <span className="font-medium">Un referente interno (anche non tecnico) per fornirci visure, contratti e organigramma.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="w-5 h-5 text-orange-400 mr-2 mt-0.5" />
                                            <span className="font-medium">Impegno della direzione a dedicare alcune ore per le interviste iniziali.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <ChevronRight className="w-5 h-5 text-orange-400 mr-2 mt-0.5" />
                                            <span className="font-medium">Nessuna procedura già scritta: creiamo tutto noi analizzando come lavorate.</span>
                                        </li>
                                    </ul>
                                </div>
                            </FadeIn>

                            {/* Deliverables */}
                            <FadeIn delay={0.3}>
                                <h2 className="flex items-center text-2xl font-black text-foreground mb-6">
                                    <ShieldCheck className="w-6 h-6 mr-3 text-primary" /> Cosa consegniamo
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {cert.deliverables.map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 border border-border/50 p-5 rounded-xl flex items-start">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                            <span className="font-bold text-foreground text-sm">{item}</span>
                                        </div>
                                    ))}
                                    <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                                        <span className="font-bold text-primary text-sm">Garante del Risultato (Affiancamento Audit)</span>
                                    </div>
                                </div>
                            </FadeIn>

                        </div>

                        {/* Right Sticky Sidebar */}
                        <div className="md:col-span-1">
                            <div className="sticky top-32 space-y-6">

                                {/* Info Card */}
                                <FadeIn delay={0.4}>
                                    <div className="bg-white border rounded-2xl p-6 shadow-xl shadow-black/5">
                                        <h3 className="text-lg font-black border-b pb-4 mb-4">Sintesi del Progetto</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <div className="flex items-center text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                                    <Clock className="w-4 h-4 mr-2" /> Timeline Stimata
                                                </div>
                                                <p className="text-xl font-bold text-foreground">{cert.timeline}</p>
                                            </div>

                                            <div>
                                                <div className="flex items-center text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                                                    <Euro className="w-4 h-4 mr-2" /> Investimento
                                                </div>
                                                <p className="text-xl font-bold text-foreground">Preventivo su Misura</p>
                                                <p className="text-sm font-medium text-muted-foreground mt-1">Dipende da dimensione aziendale e complessità dei processi.</p>
                                            </div>

                                            <Link href={`/contatti?cert=${cert.id}`} className="block pt-4 border-t mt-4">
                                                <Button className="w-full h-14 text-lg font-bold rounded-xl" variant="default">
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

            {/* Mini FAQ Section for this specific cert */}
            <section className="py-24 bg-gray-50 border-t">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
                            Domande Frequenti su {cert.subtitle}
                        </h2>
                        <div className="space-y-4">
                            {genericFaqs.map((faq, i) => (
                                <div key={i} className="bg-white border p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-lg mb-2 flex items-start">
                                        <HelpCircle className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                                        {faq.question}
                                    </h4>
                                    <p className="text-muted-foreground font-medium pl-8">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-foreground text-background text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,78,107,0.2),transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Pronto a ottenere la {cert.subtitle}?
                    </h2>
                    <p className="text-xl text-gray-400 font-medium mb-10">
                        Prenota un'analisi iniziale gratuita. In 15 minuti ti diamo chiara la fattibilità e i prossimi passi per la tua azienda.
                    </p>
                    <Link href={`/contatti?cert=${cert.id}`}>
                        <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_rgba(242,78,107,0.3)] transition-all transform hover:scale-105">
                            Prenota l'Analisi Gratuita
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}

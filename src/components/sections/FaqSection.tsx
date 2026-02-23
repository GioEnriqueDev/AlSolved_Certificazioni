"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Serve un responsabile qualità o sicurezza interno?",
        answer: "Non necessariamente. ALSOLVED funge da partner esterno, guidando il processo organizzativo. Consigliamo di designare un punto di riferimento interno (anche non tecnico) per facilitare la cooperazione e la raccolta dei documenti.",
    },
    {
        question: "Quanto tempo ci vuole per ottenere una certificazione ISO?",
        answer: "Le tempistiche dipendono dalla complessità dell'azienda e dalla norma scelta. In media, un percorso completo va dalle 8 alle 12 settimane. Se hai urgenze per bandi o appalti, possiamo valutare un iter accelerato.",
    },
    {
        question: "Quanto costa certificarsi?",
        answer: "Il costo si divide in due parti: la nostra consulenza (analisi, implementazione, formazione) e la tariffa dell'Ente Certificatore indipendente. Forniamo preventivi su misura, ma consideralo un investimento: solo con la UNI/PdR 125, ad esempio, puoi ottenere roba fino a 50.000€ l'anno di sgravi contributivi.",
    },
    {
        question: "L'Audit in sede è obbligatorio?",
        answer: "L'Audit di certificazione finale condotto dall'Ente indipendente richiede solitamente una presenza in sede o ibrida, specialmente per norme come la ISO 45001 (sicurezza) o 14001 (ambiente). Saremo al tuo fianco durante tutta la fase ispettiva.",
    },
    {
        question: "Cosa succede dopo aver ottenuto il certificato?",
        answer: "Il certificato è valido per 3 anni ed è soggetto a verifiche di sorveglianza annuali (più leggere rispetto al primo audit) per garantire il mantenimento dei requisiti. ALSOLVED può gestire anche questi rinnovi per te.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white relative z-10 border-t border-border/40 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(242,78,107,0.03),transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(254,215,170,0.05),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">
                        Risposte Chiare
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
                        Domande Frequenti
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        Tutto quello che c'è da sapere sul processo di certificazione, senza gergo burocratico.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm' : 'bg-white/50 border-border hover:border-primary/20 hover:bg-white/80'}`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-bold text-lg text-foreground pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

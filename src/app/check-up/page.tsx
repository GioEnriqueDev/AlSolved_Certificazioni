import { Metadata } from "next";
import LeadWizard from "@/components/ui/LeadWizard";

export const metadata: Metadata = {
    title: "Analisi Preliminare | ALSOLVED",
    description: "Questionario strategico di 3 minuti per avviare il tuo iter di certificazione ISO aziendale.",
};

export default function CheckUpPage() {
    return (
        <div className="relative min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6">

            <div className="container relative z-10 mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Check-up Strategico</p>
                    <h1 className="text-balance text-3xl font-black text-foreground sm:text-5xl md:text-6xl">
                        Iniziamo il tuo percorso.
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium text-muted-foreground sm:text-lg">
                        Compila questo questionario prima della call: ci permetterà di arrivare in riunione già con soluzioni concrete su misura per il tuo settore. Ti ruberà solo 3 minuti.
                    </p>
                </div>

                <LeadWizard />
            </div>
        </div>
    );
}

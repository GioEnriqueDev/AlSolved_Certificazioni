import { Settings2, ShieldCheck, Leaf, HardHat, Users, type LucideIcon } from "lucide-react";

export interface Certification {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    target: string;
    deliverables: string[];
    timeline: string;
    whyNow: string;
    icon: LucideIcon;
    image: string;
}

export const certifications: Certification[] = [
    {
        id: "iso-9001",
        title: "Business OS",
        subtitle: "ISO 9001",
        description: "Trasforma il caos in un sistema operativo aziendale infallibile.",
        target: "Aziende in crescita, B2B, fornitori PA e aziende che partecipano a bandi o gare d'appalto strutturate.",
        deliverables: ["Gap Analysis completa", "Manuale della Qualità aziendale", "Procedure operative standardizzate (SOP)", "Affiancamento Audit Interno ed Esterno", "Certificato Ufficiale Accreditato"],
        timeline: "Da 8 a 12 settimane",
        whyNow: "Senza la 9001 vieni escluso dalle gare d'appalto sopra certe soglie e perdi affidabilità agli occhi dei grandi committenti.",
        icon: Settings2,
        image: "/AlSolved_Certificazioni/images/certificazioni/business_os_iso_9001_1771842010174.png"
    },
    {
        id: "iso-27001",
        title: "Cyber Shield",
        subtitle: "ISO 27001",
        description: "Proteggi i dati aziendali e quelli dei tuoi clienti, evitando disastri legali e sanzioni.",
        target: "Software House, IT, aziende che gestiscono dati medici/bancari o operano in settori critici (Direttiva NIS2).",
        deliverables: ["Statement of Applicability (SoA)", "Piano di Risk Assessment (RA)", "Policy di Data Breach ed Encryption", "Formazione del personale", "Simulazione Audit di sicurezza"],
        timeline: "Da 12 a 16 settimane",
        whyNow: "La direttiva NIS2 e il GDPR rendono la sicurezza obbligatoria. Un singolo data breach può costare il 4% del fatturato annuo.",
        icon: ShieldCheck,
        image: "/AlSolved_Certificazioni/images/certificazioni/cyber_shield_iso_27001_1771842028487.png"
    },
    {
        id: "iso-14001",
        title: "Green Badge",
        subtitle: "ISO 14001",
        description: "Dimostra il tuo impegno per l'ambiente e accedi ai fondi ESG.",
        target: "Aziende manifatturiere, trasporti, logistica, chimica ed edilizia.",
        deliverables: ["Analisi Ambientale Iniziale", "Registro degli Impatti", "Piano di Gestione Emergenze", "Procedure per la riduzione degli sprechi"],
        timeline: "Da 8 a 12 settimane",
        whyNow: "Il rating ESG è il nuovo standard bancario: senza 14001 sarà sempre più difficile ottenere prestiti agevolati o vincere bandi pubblici.",
        icon: Leaf,
        image: "/AlSolved_Certificazioni/images/certificazioni/green_badge_iso_14001_1771842046151.png"
    },
    {
        id: "iso-45001",
        title: "Zero Infortuni",
        subtitle: "ISO 45001",
        description: "Trasforma la sicurezza sul lavoro in un investimento per evitare cause e blocchi aziendali.",
        target: "Imprese edili, manifattura pesante, industria, logistica complessa.",
        deliverables: ["Valutazione flussi normativi", "Documento di Valutazione Rischi integrato (DVR)", "Piani di sorveglianza sanitaria", "Affiancamento ispettivo"],
        timeline: "Da 10 a 14 settimane",
        whyNow: "Un infortunio grave può bloccare il cantiere e portare a responsabilità penali. La 45001 offre inoltre sgravi INAIL (modello OT23).",
        icon: HardHat,
        image: "/AlSolved_Certificazioni/images/certificazioni/zero_infortuni_iso_45001_1771842068650.png"
    },
    {
        id: "pdr-125",
        title: "Talent Magnet",
        subtitle: "UNI/PdR 125",
        description: "La certificazione sulla Parità di Genere per attrarre talenti e ottenere sgravi.",
        target: "PMI da 15 a 50+ dipendenti interessate al welfare aziendale.",
        deliverables: ["KPI Assessment Gender Gap", "Policy di Parità e Molestie", "Affiancamento comitato guida", "Pratica per esonero contributivo INPS"],
        timeline: "Da 6 a 10 settimane",
        whyNow: "Offre sgravi contributivi INPS fino a 50.000€ l'anno e punteggi premiali imbattibili nelle gare d'appalto pubbliche (PNRR).",
        icon: Users,
        image: "/AlSolved_Certificazioni/images/certificazioni/talent_magnet_pdr_125.png"
    },
];

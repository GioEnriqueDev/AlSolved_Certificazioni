import {
    Settings2, ShieldCheck, Leaf, HardHat, Users,
    HeartHandshake, Scale, Utensils, Zap, Database,
    Car, Plane, Stethoscope, type LucideIcon
} from "lucide-react";

export interface Certification {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    target: string;
    benefits: string[];
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
        target: "Aziende in crescita, B2B, fornitori PA e chi partecipa a bandi o gare d'appalto strutturate.",
        benefits: [
            "Accesso a bandi e gare d'appalto sopra soglia",
            "Maggiore affidabilità verso grandi committenti e investitori",
            "Riduzione degli sprechi e dei costi operativi",
            "Processi interni standardizzati e replicabili",
            "Punteggi premiali nella qualificazione fornitori"
        ],
        deliverables: ["Gap Analysis completa", "Manuale della Qualità", "Procedure (SOP)", "Affiancamento Audit", "Certificato Ufficiale"],
        timeline: "Da 8 a 12 settimane",
        whyNow: "Senza la 9001 vieni escluso dalle gare d'appalto sopra certe soglie e perdi affidabilità verso grandi committenti.",
        icon: Settings2,
        image: "/AlSolved_Certificazioni/images/certificazioni/business_os_iso_9001_1771842010174.png"
    },
    {
        id: "iso-27001",
        title: "Cyber Shield",
        subtitle: "ISO 27001",
        description: "Proteggi i dati critici, evitando disastri legali, ransomware e multe.",
        target: "Software House, IT, cliniche, data center o aziende soggette alla Direttiva NIS2.",
        benefits: [
            "Conformità GDPR e Direttiva NIS2",
            "Riduzione del rischio di data breach e sanzioni",
            "Fiducia dei clienti nella gestione dei loro dati",
            "Vantaggio competitivo nelle gare IT pubbliche e private",
            "Framework strutturato per la gestione degli incidenti"
        ],
        deliverables: ["Statement of Applicability (SoA)", "Risk Assessment", "Policy Data Breach", "Formazione Staff"],
        timeline: "Da 12 a 16 settimane",
        whyNow: "La direttiva NIS2 e il GDPR rendono la sicurezza obbligatoria. Un singolo data breach può costare fino al 4% del fatturato globale.",
        icon: ShieldCheck,
        image: "/AlSolved_Certificazioni/images/certificazioni/cyber_shield_iso_27001_1771842028487.png"
    },
    {
        id: "iso-14001",
        title: "Green Badge",
        subtitle: "ISO 14001",
        description: "Dimostra il tuo impegno per l'ambiente e accedi ai fondi e rating ESG.",
        target: "Aziende manifatturiere, logistica, edilizia e industria chimica.",
        benefits: [
            "Miglior rating ESG per accesso a credito agevolato",
            "Punteggio premiale nei bandi pubblici green",
            "Riduzione dei costi energetici e degli sprechi",
            "Conformità alle normative ambientali europee",
            "Immagine aziendale più forte verso clienti e stakeholder"
        ],
        deliverables: ["Analisi Ambientale Iniziale", "Registro degli Impatti", "Piano Emergenze"],
        timeline: "Da 8 a 12 settimane",
        whyNow: "Il rating ESG è il nuovo standard bancario: senza 14001 è difficile ottenere prestiti agevolati o vincere bandi pubblici.",
        icon: Leaf,
        image: "/AlSolved_Certificazioni/images/certificazioni/green_badge_iso_14001_1771842046151.png"
    },
    {
        id: "iso-45001",
        title: "Zero Infortuni",
        subtitle: "ISO 45001",
        description: "Trasforma la sicurezza sul lavoro in un investimento per evitare cause.",
        target: "Imprese edili, manifattura pesante, industria, cantieri complessi.",
        benefits: [
            "Sgravi INAIL significativi tramite modello OT23",
            "Riduzione degli infortuni e delle malattie professionali",
            "Minore rischio di responsabilità penale per la direzione",
            "Punteggio premiale nelle gare d'appalto edili",
            "Migliore attrattività verso lavoratori qualificati"
        ],
        deliverables: ["Valutazione flussi normativi", "DVR integrato", "Piani sorveglianza", "Affiancamento ispettivo"],
        timeline: "Da 10 a 14 settimane",
        whyNow: "Un infortunio grave blocca l'azienda e porta a responsabilità penali. La 45001 offre inoltre importanti sgravi INAIL (OT23).",
        icon: HardHat,
        image: "/AlSolved_Certificazioni/images/certificazioni/zero_infortuni_iso_45001_1771842068650.png"
    },
    {
        id: "pdr-125",
        title: "Talent Magnet",
        subtitle: "UNI/PdR 125",
        description: "La certificazione sulla Parità di Genere per attrarre talenti e ottenere sgravi.",
        target: "PMI da 15+ dipendenti interessate al welfare aziendale, bandi ed HR.",
        benefits: [
            "Sgravi contributivi INPS fino a 50.000€/anno",
            "Punteggi premiali nelle gare d'appalto PNRR",
            "Migliore employer branding e attrattività per i talenti",
            "Riduzione del turnover e miglioramento del clima aziendale",
            "Accesso a incentivi e bandi legati alla parità di genere"
        ],
        deliverables: ["KPI Assessment Gender Gap", "Policy di Parità e Molestie", "Pratica esonero INPS"],
        timeline: "Da 6 a 10 settimane",
        whyNow: "Offre sgravi contributivi INPS fino a 50.000€ l'anno e punteggi premiali imbattibili nelle gare d'appalto PNRR.",
        icon: Users,
        image: "/AlSolved_Certificazioni/images/certificazioni/talent_magnet_pdr_125.png"
    },
    {
        id: "sa-8000",
        title: "Ethic Framework",
        subtitle: "SA8000",
        description: "Certifica l'impegno etico e la responsabilità sociale verso i lavoratori.",
        target: "Brand della moda, manifattura etica, food & beverage, fornitori GDO.",
        benefits: [
            "Accesso alle supply chain dei grandi brand internazionali",
            "Migliore reputazione aziendale verso consumatori e investitori",
            "Conformità ai requisiti etici della GDO",
            "Riduzione dei rischi legali legati al lavoro",
            "Posizionamento di marca sulle tematiche ESG e social"
        ],
        deliverables: ["Bilancio Sociale", "Valutazione fornitori (Supply Chain)", "Modello di segnalazione"],
        timeline: "Da 10 a 14 settimane",
        whyNow: "I consumatori e le multinazionali esigono etica. Senza SA8000 sei fuori dalla supply chain dei grandi brand.",
        icon: HeartHandshake,
        image: "/AlSolved_Certificazioni/images/certificazioni/sa8000_placeholder.png"
    },
    {
        id: "iso-37001",
        title: "Anti-Bribery",
        subtitle: "ISO 37001",
        description: "Combatti la corruzione e blinda la tua azienda da inchieste e reputazione rovinata.",
        target: "Aziende strutturate, costruttori, società a controllo pubblico o concessionarie.",
        benefits: [
            "Esimente forte per la responsabilità penale d'impresa (D.Lgs 231)",
            "Requisito per molti contratti governativi e appalti pubblici",
            "Protezione della reputazione aziendale",
            "Integrazione con il Modello Organizzativo 231",
            "Maggiore fiducia da parte di partner e istituzioni"
        ],
        deliverables: ["Due Diligence partner", "Policy Anti-corruzione", "Integrazione MOG 231"],
        timeline: "Da 12 a 16 settimane",
        whyNow: "Obbligatoria per molti contratti governativi. Fornisce un'esimente fortissima per la responsabilità penale d'impresa.",
        icon: Scale,
        image: "/AlSolved_Certificazioni/images/certificazioni/iso37001_placeholder.png"
    },
    {
        id: "iso-22000",
        title: "Food Safe",
        subtitle: "ISO 22000",
        description: "Gestione della sicurezza alimentare dall'azienda agricola fino alla tavola.",
        target: "Produttori alimentari, trasporti refrigerati, packaging per alimenti, GDO.",
        benefits: [
            "Accesso ai canali della grande distribuzione organizzata",
            "Conformità ai regolamenti igienico-sanitari europei",
            "Riduzione dei rischi di contaminazione e richiami",
            "Maggiore fiducia dei consumatori nel brand",
            "Integrazione con standard HACCP avanzati"
        ],
        deliverables: ["Piano HACCP avanzato", "Analisi Pericoli (PRP e OPRP)", "Procedure ritiri/richiami"],
        timeline: "Da 8 a 14 settimane",
        whyNow: "Senza uno standard alimentare riconosciuto (ISO 22000, IFS, BRC) non puoi vendere nei grandi supermercati.",
        icon: Utensils,
        image: "/AlSolved_Certificazioni/images/certificazioni/iso22000_placeholder.png"
    },
    {
        id: "iso-50001",
        title: "Energy Saver",
        subtitle: "ISO 50001",
        description: "Abbatti i costi dell'energia e migliora l'efficienza degli impianti.",
        target: "Industrie energivore (acciaierie, plastica, cartiere), grandi impianti, datacenter.",
        benefits: [
            "Riduzione concreta dei costi energetici operativi",
            "Accesso ai Certificati Bianchi (Titoli di Efficienza Energetica)",
            "Conformità agli obblighi di diagnosi energetica",
            "Miglior contributo ESG e rating di sostenibilità",
            "Ottimizzazione degli impianti e riduzione dei consumi"
        ],
        deliverables: ["Diagnosi Energetica", "Baseline e Indicatori (EnPI)", "Piano d'azione risparmio"],
        timeline: "Da 10 a 16 settimane",
        whyNow: "In tempi di crisi energetica, la 50001 non è solo un certificato: è vero risparmio sui costi operativi e sblocco incentivi.",
        icon: Zap,
        image: "/AlSolved_Certificazioni/images/certificazioni/iso50001_placeholder.png"
    },
    {
        id: "iso-20000",
        title: "IT Excellence",
        subtitle: "ISO 20000-1",
        description: "Fornisci servizi IT di qualità superiore che non si bloccano mai.",
        target: "Managed Service Provider (MSP), cloud provider, dipartimenti IT interni complessi.",
        benefits: [
            "SLA strutturati e misurabili per i tuoi clienti",
            "Framework ITIL-based per la gestione dei servizi",
            "Maggiore competitività nelle gare IT enterprise",
            "Riduzione dei tempi di downtime e degli incident",
            "Dimostrazione di maturità organizzativa IT"
        ],
        deliverables: ["Service Level Agreement (SLA)", "Incident Management", "Change Management workflow"],
        timeline: "Da 12 a 16 settimane",
        whyNow: "I clienti enterprise esigono SLA e uptime garantiti. È la dimostrazione che il tuo IT è strutturato e affidabile.",
        icon: Database,
        image: "/AlSolved_Certificazioni/images/certificazioni/iso20000_placeholder.png"
    },
    {
        id: "iatf-16949",
        title: "Auto Quality",
        subtitle: "IATF 16949",
        description: "Il passaporto esclusivo per entrare nella filiera produttiva automotive.",
        target: "Fornitori di componenti auto, elettronica veicolare, materiali OEM.",
        benefits: [
            "Accesso obbligatorio alla filiera OEM automotive",
            "Requisito tassativo per Stellantis, BMW, VW e Tier-1",
            "Riduzione dei difetti di produzione e dei reclami",
            "Standardizzazione dei processi produttivi",
            "Maggiore efficienza nella supply chain automotive"
        ],
        deliverables: ["APQP e PPAP", "FMEA di progettazione/processo", "Piani di controllo SPC/MSA"],
        timeline: "Da 16 a 24 settimane (richiede ISO 9001)",
        whyNow: "Per vendere a Stellantis, BMW o ai loro fornitori primari, questa certificazione è un requisito tassativo, non opzionale.",
        icon: Car,
        image: "/AlSolved_Certificazioni/images/certificazioni/iatf16949_placeholder.png"
    },
    {
        id: "as-9100",
        title: "Aero Space",
        subtitle: "AS9100",
        description: "Zero margine di errore. Rispettare i rigidi standard per l'aerospazio e difesa.",
        target: "Aziende metalmeccaniche di precisione, elettronica militare, fornitori velivoli.",
        benefits: [
            "Unico modo legale per fornire componenti aerospaziali",
            "Accesso a commesse Leonardo, Airbus, Boeing e Difesa",
            "Tracciabilità estrema su ogni componente prodotto",
            "Gestione certificata delle parti critiche e FOD",
            "Posizionamento in un settore ad altissimo margine"
        ],
        deliverables: ["Traceability estrema", "Configuration Management", "Gestione parti contraffatte (FOD)"],
        timeline: "Da 16 a 24 settimane",
        whyNow: "Senza AS9100 è letteralmente illegale fornire componenti per aerei o per la difesa (es. Leonardo).",
        icon: Plane,
        image: "/AlSolved_Certificazioni/images/certificazioni/as9100_placeholder.png"
    },
    {
        id: "iso-13485",
        title: "Medical Grade",
        subtitle: "ISO 13485",
        description: "Requisiti per Dispositivi Medici, software salute (SaMD) e biomedicale.",
        target: "Produttori di dispositivi medici, sviluppatori app salute, fornitori in outsourcing.",
        benefits: [
            "Prerequisito per la marcatura CE medicale (MDR)",
            "Accesso al mercato ospedaliero e farmaceutico",
            "Conformità al Regolamento Dispositivi Medici (EU 2017/745)",
            "Gestione strutturata del rischio clinico (ISO 14971)",
            "Sorveglianza post-commercializzazione certificata"
        ],
        deliverables: ["Fascicolo Tecnico (MDR)", "Gestione Rischio (ISO 14971)", "Sorveglianza Post-Commercializzazione"],
        timeline: "Da 12 a 20 settimane",
        whyNow: "Senza 13485 non ottieni la marcatura CE medica, rendendo il tuo prodotto non vendibile negli ospedali o in farmacia.",
        icon: Stethoscope,
        image: "/AlSolved_Certificazioni/images/certificazioni/iso13485_placeholder.png"
    }
];

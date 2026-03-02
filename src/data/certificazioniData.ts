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
    marketingCopy: string[];
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
        marketingCopy: [
            "Ottenere la ISO 9001 non è un semplice adempimento burocratico: è il passo decisivo per ristrutturare la tua azienda, azzerare gli sprechi ed elevare i tuoi standard. È il lasciapassare indispensabile per accedere a bandi di gara esclusivi e dimostrare ai committenti più esigenti un'affidabilità senza pari.",
            "Con il metodo ALSOLVED non verrai sommerso da infinite scartoffie. Ti affiancheremo per costruire un Sistema di Gestione su misura che lavora per te, ottimizzando i processi e liberando il tuo team, per arrivare pronti all'audit finale senza sorprese. Prenota oggi la tua analisi di fattibilità."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_9001_photo_1772449515269.png"
    },
    {
        id: "iso-27001",
        title: "Cyber Shield",
        subtitle: "ISO 27001",
        description: "Proteggi i dati critici, evitando disastri legali, ransomware e multe.",
        marketingCopy: [
            "Oggi un singolo data-breach o un attacco ransomware può costare la sopravvivenza stessa della tua azienda. La ISO 27001 non è solo protezione, ma è la prova tangibile che i dati dei tuoi clienti sono al sicuro, permettendoti di vincere commesse dove la sicurezza è il primo criterio di sbarramento (Specie in ambito NIS2 e GDPR).",
            "Siamo specializzati nel tradurre i rigidi requisiti cyber in pratiche snelle. Zero scartoffie inutili, massimo pragmatismo: blindiamo i tuoi sistemi informativi e ti guidiamo passo passo fino alla certificazione, tutelando te e l'azienda da responsabilità pecuniarie e penali."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_27001_photo_1772452630751.png"
    },
    {
        id: "iso-14001",
        title: "Green Badge",
        subtitle: "ISO 14001",
        description: "Dimostra il tuo impegno per l'ambiente e accedi ai fondi e rating ESG.",
        marketingCopy: [
            "Il mercato e le banche hanno regole nuove: senza sostenibilità dimostrabile, sei fuori dal credito agevolato e dalle migliori commesse. La ISO 14001 è il primo step fondamentale per presentarti come azienda responsabile, tagliando sprechi, costi di smaltimento e potenziando il tuo rating ESG.",
            "ALSOLVED trasforma la burocrazia ambientale in un vantaggio competitivo netto. Dimentica vecchi pesanti faldoni: realizziamo un piano ambientale su misura per il tuo layout industriale limitando gli stop operativi e garantendoti al 100% l'arrivo alla certificazione col minor sforzo da parte del tuo management."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_9001_photo_1772449515269.png"
    },
    {
        id: "iso-45001",
        title: "Zero Infortuni",
        subtitle: "ISO 45001",
        description: "Trasforma la sicurezza sul lavoro in un investimento per evitare cause.",
        marketingCopy: [
            "Infortuni e malattie professionali possono bloccare i cantieri e portare a devastanti cause penali. La ISO 45001 è uno scudo protettivo manageriale: riduce i rischi in azienda, eleva la cultura della sicurezza del team e garantisce enormi e costanti recuperi economici tramite gli sgravi INAIL (modello OT23).",
            "Siamo la spina dorsale per la tua direzione tecnica. Non consegnamo solo carte precompilate: i nostri consulenti ti aiutano a snellire la formazione e applicare procedure efficaci (e rispettabili) in fabbrica o cantiere. Parla con noi e calcoliamo insieme il ritorno di investimento garantito INAIL sui tuoi cantieri."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_45001_photo_1772449530671.png"
    },
    {
        id: "pdr-125",
        title: "Talent Magnet",
        subtitle: "UNI/PdR 125",
        description: "La certificazione sulla Parità di Genere per attrarre talenti e ottenere sgravi.",
        marketingCopy: [
            "Non fermarti agli slogan. La UNI PdR 125 ti offre sgravi garantiti sui contributi INPS dipendenti fino a 50.000€ l'anno e punteggi sbloccanti nei più ricchi bandi PNRR in Italia. Oltre al ritorno finanziario, è l'arma migliore per fidelizzare le tue risorse e attrarre i giovani talenti più promettenti.",
            "L'iter ti sembra fumoso? Ci pensiamo noi: valutiamo i KPI del divario retributivo in autonomia, redigiamo i documenti essenziali bypassando la sindacalizzazione esasperata e ti affianchiamo dritti fino alla firma. Vuoi capire quanti incentivi potresti incassare fin da subito? Fissa una pre-analisi gratuita."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/sa_8000_photo_1772449544927.png"
    },
    {
        id: "sa-8000",
        title: "Ethic Framework",
        subtitle: "SA8000",
        description: "Certifica l'impegno etico e la responsabilità sociale verso i lavoratori.",
        marketingCopy: [
            "La pressione della supply chain sui fornitori etici non è mai stata così altissima. Che tu fornisca ai big del lusso, food, GDO o elettronica, senza uno standard come lo SA8000 vieni semplicemente estromesso dalle filiere di alto livello globale. Certifica il trattamento e i diritti dei tuoi lavoratori e sbaraglia i competitor stranieri a basso costo.",
            "Evita l'incubo di Audit Sociali a sorpresa disastrosi. Interveniamo con discrezione e diplomazia nei reparti produttivi, allineando i processi HR agli standard del Bureau International del Lavoro, senza interrompere le linee produttive. Scrivici o chiamaci per attivare subito un percorso ad-hoc prima di perdere le commesse Tier-1."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/sa_8000_photo_1772449544927.png"
    },
    {
        id: "iso-37001",
        title: "Anti-Bribery",
        subtitle: "ISO 37001",
        description: "Combatti la corruzione e blinda la tua azienda da inchieste e reputazione rovinata.",
        marketingCopy: [
            "In Italia, trovarsi un fornitore (o un commerciale) accusato di pratiche illecite può travolgere le intere casse aziendali e la libertà dei soci con la legge 231. La ISO 37001 è la barriera definitiva (e giudizialmente riconosciuta) per proteggere il CDA in caso di procedimenti imprevisti, ed è la chiave di volta per vincere gli appalti della Pubblica Amministrazione.",
            "Lavoriamo affianco agli avvocati aziendali e ai consulenti ODV. Strutturiamo un sistema anti-corruzione che funge da vera 'esimente forte', blindando l'infrastruttura contro reati commessi a tua insaputa da dipendenti terzi. Mettiti in sicurezza da subito richiedendo un nostro checkup normativo immediato."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_37001_photo_1772449558352.png"
    },
    {
        id: "iso-22000",
        title: "Food Safe",
        subtitle: "ISO 22000",
        description: "Gestione della sicurezza alimentare dall'azienda agricola fino alla tavola.",
        marketingCopy: [
            "Se i tuoi prodotti alimentari puntano ai circuiti globali o alla Grande Distribuzione (GDO), lo standard volontario sulla Food Safety è il tuo passaporto obbligatorio per l'export. Nessuna catena di supermercati accetterà referenze di un fornitore senza una perfetta garanzia contro contaminazioni e ritiri.",
            "ALSOLVED prende il tuo storico HACCP e lo eleva ad uno standard di qualità ingegnerizzato europeo. Garantiamo controlli impeccabili in produzione, abbattendo drasticamente gli errori, i rischi da intossicazione, o pesentissime multe NAS e Asl. Ti assistiamo al fianco del responsabile qualità in ogni fase dell'audit ispettivo."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_22000_photo_1772449573174.png"
    },
    {
        id: "iso-50001",
        title: "Energy Saver",
        subtitle: "ISO 50001",
        description: "Abbatti i costi dell'energia e migliora l'efficienza degli impianti.",
        marketingCopy: [
            "Per le industrie energivore, ogni kW sprecato è un pezzo di bilancio andato in fumo. La ISO 50001 individua ogni spreco silente nel tuo impianto, ti fa attivare il recupero di denari tramite i Certificati Bianchi (TEE) ed è essenziale per allinearvi velocemente ai rigorosi KPI di neutralità climatica.",
            "Basta bollette pazze: il team ALSOLVED analizza le perdite del tuo plant e inserisce processi chiari di monitoraggio. Ottieni la doppia vittoria: ti proteggi dalle oscillazioni delle bollette massimizzando gli incassi ESG, facendola diventare un vero assett che si ripaga da solo nel primo anno. Contattaci e testiamo i tuoi indici!"
        ],
        target: "Industrie energivore (acciaierie, plastica, cartiere), grandi impianti, datacenter.",
        benefits: [
            "Riduzione concreta dei costi energetici operativi",
            "Accesso ai Certificati Bianchi (Titoli di Efficienza Energetica)",
            "Conformità agli obblighi di diagnosi energetica",
            "Miglior contributo ESG e rating di sostenibilità",
            "Ottimizzazione degli impianti e riduzione dei consumi"
        ],
        deliverables: ["Diagnosi Energetica", "Baseline e Indicatori (EnPI)", "Piano d'action risparmio"],
        timeline: "Da 10 a 16 settimane",
        whyNow: "In tempi di crisi energetica, la 50001 non è solo un certificato: è vero risparmio sui costi operativi e sblocco incentivi.",
        icon: Zap,
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_22000_photo_1772449573174.png"
    },
    {
        id: "iso-20000",
        title: "IT Excellence",
        subtitle: "ISO 20000-1",
        description: "Fornisci servizi IT di qualità superiore che non si bloccano mai.",
        marketingCopy: [
            "Se fornisci software as a service, Datacenter o MSP, sai bene che i clienti enterprise esigono l'eccellenza garantita e SLA scritti nella roccia. La ISO 20000 stravolge la tua affidabilità mettendola per iscritto, dimostrando che il tuo team ITIL sa mantenere servizi up, e risolvendo i ticket critici in tempi documentabili e certi.",
            "ALSOLVED ottimizza l'erogazione tech azzerando il caos nei passaggi tra Level 1 e Level 3. Impostiamo Change Management solidissimi in ottica DevSecOps per evitare catastrofici down dei server, rendendo chiara e certificata la gestione interna. Vinci commesse cloud multimilionarie superando ogni filtro vendor grazie a noi."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_27001_photo_1772452630751.png"
    },
    {
        id: "iatf-16949",
        title: "Auto Quality",
        subtitle: "IATF 16949",
        description: "Il passaporto esclusivo per entrare nella filiera produttiva automotive.",
        marketingCopy: [
            "Costruire parti auto è un club esclusivo dove il margine di difetto tollerato è quasi pari a zero. Ottenere o mantenere vivo lo Standard IATF 16949 è un lusso e l'unica porta di ingresso esistente verso colossi come Stellantis, BMW o ai Tier-1. Perderla, o non averla, corrisponde a bloccare la crescita del tuo ecosistema manifatturiero.",
            "Con la nostra consulenza, bypassiamo l'intransigenza astratta delle case madri fornendo strumenti Lean per i piani di controllo SPC/MSA. Rendiamo digeribili manuali APQP enormi per far scorrere la tua produzione. Mettici alla prova prenotando una sessione conoscitiva. La qualità diventerà puro profitto fluido."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_45001_photo_1772449530671.png"
    },
    {
        id: "as-9100",
        title: "Aero Space",
        subtitle: "AS9100",
        description: "Zero margine di errore. Rispettare i rigidi standard per l'aerospazio e difesa.",
        marketingCopy: [
            "Tracciare ogni minimo rivetto può salvare vite umane. Quello aerospaziale (e della Difesa) è il mercato in assoluto più ricco e intollerante del pianeta. Ottenere l'AS9100 significa alzare follemente il tuo pricing perché diventi un partner autorizzato per Leonardo, Airbus o Boeing. Oltre l'eccellenza, è il blasone assoluto delle meccaniche.",
            "I controlli di primo e secondo articolo (FAI) possono far piangere un ingegnere impreparato. ALSOLVED schiera figure rigorosissime per implementare tracciabilità ferrea e prevenire i difetti FOD sulle tue parti lavorate. Ti guidiamo per superare barriere d'ingesso impossibili. Scegli l'elite B2B, affidati ad esperti: fissa una videocall."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_45001_photo_1772449530671.png"
    },
    {
        id: "iso-13485",
        title: "Medical Grade",
        subtitle: "ISO 13485",
        description: "Requisiti per Dispositivi Medici, software salute (SaMD) e biomedicale.",
        marketingCopy: [
            "Con la stretta dei nuovi Regolamenti (MDR / IVDR), i Medical Devices sono blindati nel mercato Europeo: che il tuo prodotto sia uno stent o una App Salute digitale (SaMD), la Conformità 13485 è legalmente e commercialmente mandatoria. È il tuo unico viatico validato per l'adozione nei sistemi ospedalieri sanitari.",
            "Navigare l'analisi dei rischi ISO 14971 richiede un mind-set asettico, chirurgico. ALSOLVED assiste Start-up BioTech e le PMI fabbricanti dal Risk Management, validazione SW fino ai piani di sorveglianza Post-Market PMCF. Non rischiare richiami mortali dalle Asl o rinvii dal Ministero: affidati subito ai nostri specialisti QA."
        ],
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
        image: "/AlSolved_Certificazioni/images/certificazioni/photos/iso_22000_photo_1772449573174.png"
    }
];

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const token = process.env.HUBSPOT_ACCESS_TOKEN;

        if (!token) {
            console.error('HubSpot token missing');
            return NextResponse.json({ success: false, error: 'Configurazione server mancante' }, { status: 500 });
        }

        // Costruiamo un bel messaggio riassuntivo per il campo notes / messaggio
        const summaryMessage = `
--- ANALISI PRELIMINARE ALSOLVED ---
RUOLO: ${data.ruolo || 'Non specificato'}
SEDE: ${data.indirizzo} ${data.indirizzo2 ? '(' + data.indirizzo2 + ')' : ''}, ${data.città}, ${data.provincia} ${data.cap}
REGISTRO IMPRESE: ${data.registroImprese || 'Non specificato'}
SEDI MULTIPLE: ${data.sediMultiple} ${data.doveSediMultiple ? '- ' + data.doveSediMultiple : ''}
P.IVA: ${data.piva}
ANNO APERTURA: ${data.annoApertura}
SETTORE ATECO: ${data.ateco}

-- DIMENSIONI --
DIPENDENTI: ${data.dipendenti}
FATTURATO 2024: ${data.fatturato2024}
FATTURATO 2025: ${data.fatturato2025}

-- REQUISITI E OBIETTIVI --
DURC REGOLARE: ${data.durc}
IMPRESA GIOVANILE: ${data.giovanile}
IMPRESA FEMMINILE: ${data.femminile}
OBIETTIVO CERTIFICAZIONE: ${data.certificazione}
HA PARITA' GENERE: ${data.paritaGenere}
HA AMBIENTALE: ${data.ambientale}

URL PROVENIENZA: ${data.sourceUrl || '/'}
    `.trim();

        // Inviamo i dati all'API di HubSpot
        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                properties: {
                    firstname: data.nome,
                    lastname: data.cognome,
                    email: data.email,
                    phone: data.telefono,
                    company: data.azienda,
                    website: data.sitoWeb,
                    city: data.città,
                    zip: data.cap,
                    address: data.indirizzo,
                    state: data.provincia,
                    // Mettiamo tutte le info extra nel messaggio che hai creato (o nel campo base di Hubspot se fallisce)
                    messaggio_richiesta_analisi: summaryMessage,
                    // Proviamo a mappare i campi custom di testo (se falliscono Hubspot darà 400, in tal caso faremo un fallback)
                    certificazione_interesse: data.certificazione,
                    ruolo_referente: data.ruolo,
                    fonte_form: "Sito Web Wizard",
                    pagina_invio_form: data.sourceUrl || "Sito"
                }
            })
        });

        const result = await response.json();

        // Se Hubspot si lamenta di proprietà inesistenti (es. messaggio_richiesta_analisi scritto in modo diverso), facciamo un fallback coi campi standard
        if (!response.ok && result.category === 'PROPERTY_DOESNT_EXIST') {
            console.warn("HubSpot schema issue, falling back to standard properties...");
            const fallbackResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    properties: {
                        firstname: data.nome,
                        lastname: data.cognome,
                        email: data.email,
                        phone: data.telefono,
                        company: data.azienda,
                        message: summaryMessage // usa campo default HubSpot per le note di contatto se esiste, altrimenti si affida solo a firstname/email
                    }
                })
            });
            if (!fallbackResponse.ok) {
                throw new Error("Fallback failed");
            }
            return NextResponse.json({ success: true, redirect: 'https://calendly.com/consulenza-alsolved/prenota-una-call-' });
        }

        if (!response.ok) {
            console.error('HubSpot API Error:', result);
            throw new Error(`HubSpot Error: ${result.message}`);
        }

        return NextResponse.json({ success: true, redirect: 'https://calendly.com/consulenza-alsolved/prenota-una-call-' });

    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json({ success: false, error: 'Errore durante l\'invio. Riprova più tardi.' }, { status: 500 });
    }
}

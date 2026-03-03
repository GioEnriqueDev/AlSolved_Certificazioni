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

        // Prepariamo il payload
        const payload = {
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
                messaggio_richiesta_analisi: summaryMessage,
                certificazione_di_interesse: data.certificazione,
                ruolo_referente: data.ruolo,
                fonte_form: "Sito Web Wizard",
                pagina_invio_form: data.sourceUrl || "Sito"
            }
        };

        // Inviamo i dati all'API di HubSpot
        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        // 1. Gestione utente già esistente (Upsert / Update)
        if (!response.ok && result.message && result.message.includes('Contact already exists')) {
            const match = result.message.match(/Existing ID: (\d+)/);
            if (match && match[1]) {
                const existingId = match[1];
                console.log(`Contatto esistente trovato, aggiorno ID: ${existingId}`);

                const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(payload)
                });

                if (!updateResponse.ok) {
                    const updateResult = await updateResponse.json();
                    throw new Error(`HubSpot Update Error: ${updateResult.message || 'Errore durante aggiornamento'}`);
                }

                return NextResponse.json({ success: true, redirect: 'https://calendly.com/consulenza-alsolved/prenota-una-call-' });
            }
        }

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
                        company: data.azienda
                    }
                })
            });

            const fallbackResult = await fallbackResponse.json();
            if (!fallbackResponse.ok) {
                throw new Error(`Fallback failed: ${fallbackResult.message || 'Unknown'}`);
            }
            return NextResponse.json({ success: true, redirect: 'https://calendly.com/consulenza-alsolved/prenota-una-call-' });
        }

        if (!response.ok) {
            console.error('HubSpot API Error:', result);
            throw new Error(`HubSpot Error: ${result.message}`);
        }

        return NextResponse.json({ success: true, redirect: 'https://calendly.com/consulenza-alsolved/prenota-una-call-' });

    } catch (error: any) {
        console.error('Form submission error:', error);
        return NextResponse.json({ success: false, error: error.message || 'Errore durante l\'invio. Riprova più tardi.' }, { status: 500 });
    }
}

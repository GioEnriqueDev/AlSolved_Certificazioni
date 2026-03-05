import { NextResponse } from "next/server";

function readCity(data: Record<string, unknown>) {
  return (data.citta as string) || (data["città"] as string) || (data["cittÃ "] as string) || "";
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, unknown>;
    const token = process.env.HUBSPOT_ACCESS_TOKEN;

    if (!token) {
      console.error("HubSpot token missing");
      return NextResponse.json({ success: false, error: "Configurazione server mancante" }, { status: 500 });
    }

    const city = readCity(data);
    const summaryMessage = `
--- ANALISI PRELIMINARE ALSOLVED ---
RUOLO: ${String(data.ruolo || "Non specificato")}
SEDE: ${String(data.indirizzo || "")} ${data.indirizzo2 ? `(${String(data.indirizzo2)})` : ""}, ${city}, ${String(data.provincia || "")} ${String(data.cap || "")}
REGISTRO IMPRESE: ${String(data.registroImprese || "Non specificato")}
SEDI MULTIPLE: ${String(data.sediMultiple || "Non specificato")} ${data.doveSediMultiple ? `- ${String(data.doveSediMultiple)}` : ""}
P.IVA: ${String(data.piva || "Non specificato")}
ANNO APERTURA: ${String(data.annoApertura || "Non specificato")}
SETTORE ATECO: ${String(data.ateco || "Non specificato")}

-- DIMENSIONI --
DIPENDENTI: ${String(data.dipendenti || "Non specificato")}
FATTURATO 2024: ${String(data.fatturato2024 || "Non specificato")}
FATTURATO 2025: ${String(data.fatturato2025 || "Non specificato")}

-- REQUISITI E OBIETTIVI --
DURC REGOLARE: ${String(data.durc || "Non specificato")}
IMPRESA GIOVANILE: ${String(data.giovanile || "Non specificato")}
IMPRESA FEMMINILE: ${String(data.femminile || "Non specificato")}
OBIETTIVO CERTIFICAZIONE: ${String(data.certificazione || "Non specificato")}
HA PARITA DI GENERE: ${String(data.paritaGenere || "Non specificato")}
HA CERTIFICAZIONE AMBIENTALE: ${String(data.ambientale || "Non specificato")}

URL PROVENIENZA: ${String(data.sourceUrl || "/")}
    `.trim();

    const hubspotPayload = {
      properties: {
        firstname: String(data.nome || ""),
        lastname: String(data.cognome || ""),
        email: String(data.email || ""),
        phone: String(data.telefono || ""),
        company: String(data.azienda || ""),
        website: String(data.sitoWeb || ""),
        city,
        zip: String(data.cap || ""),
        address: String(data.indirizzo || ""),
        state: String(data.provincia || ""),
        messaggio_richiesta_analisi: summaryMessage,
        certificazione_interesse: String(data.certificazione || ""),
        ruolo_referente: String(data.ruolo || ""),
        fonte_form: "Sito Web Wizard",
        pagina_invio_form: String(data.sourceUrl || "Sito"),
      },
    };

    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(hubspotPayload),
    });

    const result = await response.json();

    if (!response.ok && result?.category === "PROPERTY_DOESNT_EXIST") {
      const fallbackResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          properties: {
            firstname: String(data.nome || ""),
            lastname: String(data.cognome || ""),
            email: String(data.email || ""),
            phone: String(data.telefono || ""),
            company: String(data.azienda || ""),
            message: summaryMessage,
          },
        }),
      });

      if (!fallbackResponse.ok) {
        const fallbackResult = await fallbackResponse.json();
        console.error("HubSpot fallback error:", fallbackResult);
        throw new Error("Fallback failed");
      }

      return NextResponse.json({ success: true, redirect: "https://calendly.com/consulenza-alsolved/prenota-una-call-" });
    }

    if (!response.ok) {
      console.error("HubSpot API Error:", result);
      throw new Error(`HubSpot Error: ${result?.message || "Unknown error"}`);
    }

    return NextResponse.json({ success: true, redirect: "https://calendly.com/consulenza-alsolved/prenota-una-call-" });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ success: false, error: "Errore durante l'invio. Riprova piu tardi." }, { status: 500 });
  }
}

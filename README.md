# ALSOLVED Certificazioni (Next.js + GitHub Pages)

Sito marketing/statico per ALSOLVED focalizzato su certificazioni ISO, compliance e audit readiness.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- Lenis (smooth scroll)
- shadcn/ui (component base)

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:3000`.

## Script disponibili

```bash
npm run dev     # sviluppo locale
npm run build   # build + static export (output in /out)
npm run start   # server Next (non usato su GitHub Pages)
npm run lint    # lint del codice sorgente (docs/ esclusa)
```

## Deploy su GitHub Pages

Il progetto è configurato per GitHub Pages con:

- `output: 'export'`
- `basePath: '/AlSolved_Certificazioni'`
- `trailingSlash: true`
- `images.unoptimized: true`

Workflow: `.github/workflows/deploy.yml`

Ad ogni push su `main`, GitHub Actions:

1. Installa dipendenze
2. Esegue `npm run build`
3. Pubblica `out/` su GitHub Pages

## Struttura principale

- `src/app/` pagine App Router
- `src/components/sections/` sezioni UI marketing
- `src/components/layout/` navbar, wrapper, smooth scroll
- `src/components/ui/` componenti UI condivisi
- `src/data/certificazioniData.ts` dataset certificazioni
- `public/` asset statici
- `docs/` artifact statici legacy versionati (ignorati dal lint)

## Note operative

- La pagina `contatti` gestisce il caso in cui il Google Form sia ancora placeholder e mostra fallback contatti senza link rotti.
- Nel dataset alcune immagini certificazioni sono placeholder e non bloccano la UI (il catalogo usa rendering icon-based).
- Per attivare l'invio lead dal form contatti verso HubSpot, imposta `NEXT_PUBLIC_ANALYSIS_WEBHOOK_URL` (oppure `NEXT_PUBLIC_HUBSPOT_WEBHOOK_URL`) e abilita CORS sul webhook per il dominio del sito.

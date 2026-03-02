import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Euro,
  HelpCircle,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import Footer from "@/components/sections/Footer";
import { certifications } from "@/data/certificazioniData";

export const dynamicParams = false;

const palettes = [
  { gradient: "from-amber-400 to-orange-500", glow: "rgba(245,158,11,0.14)", soft: "bg-amber-50 text-amber-700 border-amber-200" },
  { gradient: "from-blue-500 to-indigo-600", glow: "rgba(59,130,246,0.14)", soft: "bg-blue-50 text-blue-700 border-blue-200" },
  { gradient: "from-emerald-500 to-green-600", glow: "rgba(16,185,129,0.14)", soft: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { gradient: "from-rose-500 to-red-500", glow: "rgba(244,63,94,0.14)", soft: "bg-rose-50 text-rose-700 border-rose-200" },
  { gradient: "from-fuchsia-500 to-pink-500", glow: "rgba(217,70,239,0.14)", soft: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200" },
  { gradient: "from-cyan-500 to-sky-600", glow: "rgba(6,182,212,0.14)", soft: "bg-cyan-50 text-cyan-700 border-cyan-200" },
] as const;

function getCertification(id: string) {
  return certifications.find((cert) => cert.id === id);
}

function getPalette(id: string) {
  const index = certifications.findIndex((cert) => cert.id === id);
  return palettes[(index >= 0 ? index : 0) % palettes.length];
}

export function generateStaticParams() {
  return certifications.map((cert) => ({ id: cert.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const cert = getCertification(id);

  if (!cert) {
    return {
      title: "Certificazione non trovata | ALSOLVED",
      description: "La certificazione richiesta non è disponibile.",
    };
  }

  return {
    title: `${cert.subtitle} | ${cert.title} | ALSOLVED`,
    description: cert.description,
    openGraph: {
      title: `${cert.subtitle} | ALSOLVED`,
      description: cert.description,
      type: "article",
      url: `/certificazioni/${cert.id}`,
    },
  };
}

export default async function CertificationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cert = getCertification(id);

  if (!cert) {
    notFound();
  }

  const genericFaqs = [
    {
      question: "Serve un responsabile interno dedicato?",
      answer:
        "No. Basta un referente interno per coordinare documenti e appuntamenti. ALSOLVED assorbe la parte tecnica, documentale e di audit preparation.",
    },
    {
      question: "L'audit si svolge in azienda?",
      answer:
        "Di norma c'è una fase documentale (spesso da remoto) e una fase ispettiva in sede o nei siti operativi. Ti affianchiamo in entrambe.",
    },
    {
      question: "Quanto dura la certificazione?",
      answer:
        "Tipicamente 3 anni con verifiche annuali di sorveglianza. Dopo il primo audit, i controlli successivi sono più snelli se il sistema resta vivo.",
    },
    {
      question: "Quando posso usare il certificato in gare e bandi?",
      answer:
        "Subito dopo il rilascio ufficiale da parte dell'ente certificatore, secondo i requisiti specifici del bando o della qualifica fornitore.",
    },
  ] as const;

  const currentIndex = certifications.findIndex((item) => item.id === cert.id);
  const related = certifications
    .filter((item, index) => item.id !== cert.id && Math.abs(index - currentIndex) <= 3)
    .slice(0, 3);

  const palette = getPalette(cert.id);

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <div className="section-shell relative overflow-hidden border-b border-white/55 px-4 pb-16 pt-28 sm:px-6 md:pt-32 xl:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[8%] top-[8%] h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: palette.glow }} />
          <div className="absolute left-[8%] top-[22%] h-52 w-52 rounded-full bg-blue-200/12 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-[90rem] 2xl:max-w-[96rem]">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
            <Link href="/" className="focus-ring rounded-md hover:text-foreground">Home</Link>
            <ChevronRight className="size-4" />
            <Link href="/certificazioni" className="focus-ring rounded-md hover:text-foreground">Certificazioni</Link>
            <ChevronRight className="size-4" />
            <span className="font-semibold text-foreground">{cert.subtitle}</span>
          </div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start xl:gap-10 2xl:gap-12">
            <FadeIn className="max-w-3xl xl:max-w-4xl">
              <Link href="/certificazioni" className="focus-ring mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-semibold text-foreground shadow-sm hover:text-primary">
                <ArrowLeft className="size-4" />
                Torna al catalogo
              </Link>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${palette.gradient} text-white shadow-md`}>
                  <cert.icon className="size-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{cert.subtitle}</span>
              </div>

              <h1 className="text-balance text-4xl font-black leading-tight text-foreground sm:text-5xl md:text-6xl xl:text-[4.6rem]">
                {cert.title}
              </h1>
              <p className="mt-4 text-base font-bold leading-relaxed text-foreground/90 sm:text-lg md:text-xl xl:max-w-[44rem] xl:text-[1.16rem]">
                {cert.description}
              </p>

              {cert.marketingCopy && cert.marketingCopy.length > 0 && (
                <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg xl:max-w-[44rem]">
                  {cert.marketingCopy.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${palette.soft}`}>
                  {cert.timeline}
                </span>
                <span className="pill-chip bg-white/85 text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" /> Audit-ready supporto completo
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row xl:mt-8 xl:gap-4">
                <Link href={`/contatti?cert=${cert.id}#analysis-form`} className="focus-ring rounded-full">
                  <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
                    Richiedi analisi gratuita
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link href="/metodo" className="focus-ring rounded-full">
                  <Button variant="outline" size="lg" className="h-14 rounded-full border-white/80 bg-white/80 px-8 text-base font-semibold shadow-sm backdrop-blur-xl hover:bg-white/90">
                    Scopri il metodo ALSOLVED
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="xl:sticky xl:top-28">
              <aside className="rounded-[2rem] border border-white/80 bg-white/82 p-3 shadow-[0_26px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl xl:rounded-[2.15rem] xl:p-3 pb-6 xl:pb-6">

                {cert.image && (
                  <div className="relative mb-5 w-full h-56 sm:h-64 xl:h-[18rem] overflow-hidden rounded-[1.6rem] shadow-inner ring-1 ring-black/5">
                    <Image
                      src={cert.image}
                      alt={`Ambiente aziendale per ${cert.title}`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 40vw"
                      className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xl font-black drop-shadow-md">{cert.title}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/90 drop-shadow-md">{cert.subtitle}</p>
                    </div>
                  </div>
                )}

                <div className="px-3 xl:px-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Sintesi del progetto</p>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                    <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        <Clock className="size-3.5" /> Timeline
                      </div>
                      <p className="text-lg font-black tracking-tight text-foreground">{cert.timeline}</p>
                    </div>
                    <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                        <Euro className="size-3.5" /> Investimento
                      </div>
                      <p className="text-lg font-black tracking-tight text-foreground">Preventivo su misura</p>
                      <p className="mt-1 text-xs font-medium text-muted-foreground">Dipende da dimensione, sedi e complessità del perimetro.</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Consegniamo</p>
                    <ul className="space-y-2">
                      {cert.deliverables.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm font-semibold text-foreground/85">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/contatti?cert=${cert.id}#analysis-form`} className="focus-ring mt-5 block rounded-2xl">
                    <Button className="h-12 w-full rounded-2xl text-sm font-semibold text-white glow-shadow hover:glow-shadow-strong">
                      Parliamone ora
                    </Button>
                  </Link>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </div>

      <section className="relative z-10 px-4 py-16 sm:px-6 md:py-20 xl:py-24">
        <div className="container mx-auto grid max-w-[90rem] grid-cols-1 gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:gap-8 2xl:max-w-[96rem] 2xl:gap-10">
          <div className="space-y-6">
            <FadeIn>
              <div className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-black tracking-tight text-foreground md:text-2xl">
                  <Users className="size-5 text-primary" /> A chi serve
                </h2>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">{cert.target}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-black tracking-tight text-foreground md:text-2xl">
                  <Target className="size-5 text-primary" /> Perché conviene ora
                </h2>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">{cert.whyNow}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-black tracking-tight text-foreground md:text-2xl">
                  <TrendingUp className="size-5 text-primary" /> Vantaggi concreti
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {cert.benefits.map((benefit) => (
                    <div key={benefit} className="rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-sm font-semibold leading-relaxed text-foreground/85">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn>
              <div className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-black tracking-tight text-foreground md:text-2xl">
                  <ShieldCheck className="size-5 text-primary" /> Cosa consegniamo
                </h2>
                <div className="space-y-2.5">
                  {cert.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/80 p-3 shadow-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm font-semibold text-foreground/85">{item}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/8 p-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm font-semibold text-primary">Affiancamento completo fino all’audit dell’ente terzo</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="rounded-[1.75rem] border border-white/80 bg-white/82 p-6 shadow-[0_22px_60px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl">
                <h2 className="mb-4 text-xl font-black tracking-tight text-foreground md:text-2xl">Requisiti minimi di partenza</h2>
                <ul className="space-y-3">
                  {[
                    "Un referente interno (anche non tecnico) per documenti e coordinamento.",
                    "Disponibilità della direzione per un kickoff e brevi interviste iniziali.",
                    "Accesso alle informazioni operative reali per costruire procedure aderenti al business.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/80 p-3 shadow-sm text-sm font-semibold text-foreground/85">
                      <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/55 bg-white/45 px-4 py-16 backdrop-blur-sm sm:px-6 md:py-20 xl:py-24">
        <div className="container mx-auto max-w-4xl xl:max-w-5xl">
          <FadeIn>
            <h2 className="mb-8 text-center text-2xl font-black tracking-tight text-foreground md:text-3xl">
              Domande frequenti su {cert.subtitle}
            </h2>
            <div className="space-y-3">
              {genericFaqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/80 bg-white/82 p-5 shadow-sm backdrop-blur-xl">
                  <h3 className="flex items-start gap-2 text-base font-black tracking-tight text-foreground">
                    <HelpCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2 pl-6 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="relative z-10 px-4 py-16 sm:px-6 md:py-20 xl:py-24">
          <div className="container mx-auto max-w-[88rem] 2xl:max-w-[94rem]">
            <FadeIn>
              <h2 className="mb-6 text-2xl font-black tracking-tight text-foreground md:text-3xl">Potrebbe interessarti anche</h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((item, index) => {
                const relatedPalette = getPalette(item.id);
                return (
                  <FadeIn key={item.id} delay={index * 0.05}>
                    <Link href={`/certificazioni/${item.id}`} className="group focus-ring block rounded-2xl">
                      <article className="h-full rounded-2xl border border-white/80 bg-white/82 p-5 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.24)] backdrop-blur-xl hover:border-white hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.28)]">
                        <div className="mb-3 flex items-center gap-3">
                          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${relatedPalette.gradient} text-white shadow-md`}>
                            <item.icon className="size-4" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-foreground">{item.subtitle}</p>
                            <p className="text-xs font-semibold text-muted-foreground">{item.title}</p>
                          </div>
                        </div>
                        <p className="text-xs font-medium leading-relaxed text-muted-foreground">{item.description}</p>
                        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary">
                          Scopri dettagli
                          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </article>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative z-10 px-4 pb-24 sm:px-6 md:pb-32">
        <div className="container mx-auto max-w-5xl rounded-[2.25rem] border border-white/80 bg-white/82 p-8 text-center shadow-[0_26px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-12 xl:max-w-6xl xl:p-14">
          <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl xl:text-[3.4rem]">
            Pronto a ottenere la {cert.subtitle}?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
            Prenota un’analisi gratuita: in 15 minuti ti diciamo fattibilità, priorità e prossimi passi per avviare il percorso di certificazione.
          </p>
          <Link href={`/contatti?cert=${cert.id}#analysis-form`} className="focus-ring mt-8 inline-flex rounded-full">
            <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold text-white glow-shadow hover:glow-shadow-strong">
              Prenota analisi gratuita
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

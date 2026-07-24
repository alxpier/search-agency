import { Target, Zap, Search } from "lucide-react";
import Link from "next/link";

export default function GeoPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Expertise / GEO</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Dominer les IA"
          >
            Dominer les IA
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              Le SEO classique ne suffit plus. Vos clients posent des questions à ChatGPT, Perplexity et Gemini. On configure votre empreinte numérique pour que ces moteurs vous citent comme la référence absolue.
            </p>
          </div>

          <Link href="/contact" className="sw-link text-xl md:text-2xl font-semibold tracking-wide">
            Discuter de votre projet &rarr;
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Target className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Analyse de citation</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Audit de votre visibilité actuelle dans les réponses génératives et identification des sources d&apos;autorité.
              </p>
            </article>
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Zap className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Optimisation LLM</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Structuration de vos données pour maximiser la compréhension par les modèles de langage (LLM).
              </p>
            </article>
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Search className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Veille algorithmique</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Suivi des mises à jour de Perplexity et OpenAI pour maintenir votre position de leader.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

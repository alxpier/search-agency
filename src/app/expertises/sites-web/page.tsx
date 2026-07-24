import { Layers, Gauge, PenTool } from "lucide-react";
import Link from "next/link";

export default function SitesWebPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Expertise / Création de sites</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Pas de template, jamais"
          >
            Pas de template, jamais
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              Un site construit sur une solution générique se ressemble tous. On conçoit une architecture headless sur-mesure, taillée pour votre métier et pensée SEO/GEO dès la première ligne de code.
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
              <PenTool className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Sur-mesure</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Design et structure pensés pour votre métier, pas pour un catalogue.</p>
            </article>
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Gauge className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Performance native</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Architecture headless, temps de chargement minimal, aucun plugin superflu.</p>
            </article>
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Layers className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">SEO/GEO natif</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Sémantique, données structurées et maillage intégrés dès la conception.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

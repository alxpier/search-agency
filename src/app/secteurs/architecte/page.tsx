import { Image as ImageIcon, Search as SearchIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArchitectePage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Secteur / Architectes — Priorité 2</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Un site beau, mais invisible"
          >
            Un site beau, mais invisible
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              Un portfolio soigné ne suffit pas si personne ne le trouve. On combine direction artistique haut de gamme et structure technique pour que vos réalisations apparaissent quand un porteur de projet cherche un architecte.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <ImageIcon className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Portfolio performant</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Galeries optimisées (images compressées sans perte visuelle), fiches projet structurées pour le SEO et fluides à parcourir sur mobile.
              </p>
            </article>
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <SearchIcon className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Trouvé à la bonne recherche</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Pages dédiées par type de projet (rénovation, construction, tertiaire) et par zone géographique, pour capter les recherches qualifiées.
              </p>
            </article>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-6 text-zinc-500 text-sm font-light mb-20">
            <span><span className="text-white font-semibold text-xl tracking-tight">30 000</span> cabinets en France</span>
            <span><span className="text-white font-semibold text-xl tracking-tight">130/mois</span> recherches ciblées moyennes</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12">
            Prêt à donner à votre portfolio la visibilité qu&apos;il mérite ?
          </h2>
          <Link
            href="/contact"
            className="px-12 py-6 bg-white text-black font-semibold tracking-wide text-xs hover:bg-sw-yellow transition-all rounded-sm inline-flex items-center gap-4 justify-center"
          >
            Discuter de votre cabinet <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

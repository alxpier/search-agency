import { ArrowLeft, ArrowRight, Image as ImageIcon, Search as SearchIcon, Users, Search, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ArchitectePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans pb-20">
      <header className="px-10 pt-8 flex justify-between items-center">
        <Link href="/secteurs" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={14} /> Retour
        </Link>
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">Secteur / Architectes</span>
      </header>

      {/* Hero */}
      <section className="px-10 pt-24 pb-20 max-w-5xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium">Priorité 2 — 30 000 cabinets, 130 recherches/mois</span>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
          Un site beau.<br /><span className="text-zinc-600 italic">Mais invisible.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Un portfolio soigné ne suffit pas si personne ne le trouve. On combine direction artistique haut de gamme et structure technique pour que vos réalisations apparaissent quand un porteur de projet cherche un architecte.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-y border-white/10 bg-zinc-900/10">
        <div className="p-12 border-r border-white/10 space-y-6">
          <ImageIcon className="text-zinc-500" size={24} />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Portfolio performant</h3>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Galeries optimisées (images compressées sans perte visuelle), fiches projet structurées pour le SEO et fluides à parcourir sur mobile.
          </p>
        </div>
        <div className="p-12 space-y-6">
          <SearchIcon className="text-zinc-500" size={24} />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Trouvé à la bonne recherche</h3>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Pages dédiées par type de projet (rénovation, construction, tertiaire) et par zone géographique, pour capter les recherches qualifiées.
          </p>
        </div>
      </section>

      {/* KPIs marché */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
        <div className="p-12 border-r border-white/10">
          <Users size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">30 000</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Cabinets en France</p>
        </div>
        <div className="p-12 border-r border-white/10">
          <Search size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">130/mois</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Recherches ciblées moyennes</p>
        </div>
        <div className="p-12">
          <TrendingUp size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">Prio 2</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Secteur prioritaire Kobi Engine</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-10 max-w-2xl">Prêt à donner à votre portfolio la visibilité qu&apos;il mérite ?</h3>
        <Link href="/contact" className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-colors flex items-center gap-4">
          Discuter de votre cabinet <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

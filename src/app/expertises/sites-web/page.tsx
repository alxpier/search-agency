import { ArrowLeft, Layers, Gauge, PenTool } from "lucide-react";
import Link from "next/link";

export default function SitesWebPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full flex flex-col font-sans">
      <header className="px-10 pt-8 flex justify-between items-center">
        <Link href="/expertises" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={14} /> Retour
        </Link>
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">Expertise / Création de sites</span>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="mb-6 px-3 py-1 border border-white/10 rounded-full text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          Sites sur-mesure
        </div>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Pas de template, jamais
        </h1>
        <p className="mt-8 max-w-2xl text-zinc-400 font-light tracking-wide text-center leading-relaxed">
          Un site construit sur une solution générique se ressemble tous. On conçoit une architecture headless sur-mesure, taillée pour votre métier et pensée SEO/GEO dès la première ligne de code.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-white/10 mt-auto">
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col items-center">
          <PenTool size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Sur-mesure</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Design et structure pensés pour votre métier, pas pour un catalogue.</p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col items-center">
          <Gauge size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Performance native</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Architecture headless, temps de chargement minimal, aucun plugin superflu.</p>
        </div>
        <div className="p-12 text-center flex flex-col items-center">
          <Layers size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">SEO/GEO natif</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Sémantique, données structurées et maillage intégrés dès la conception.</p>
        </div>
      </section>
    </main>
  );
}

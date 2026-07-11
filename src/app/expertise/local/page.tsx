"use client";
import { MapPin, Target, Smartphone, BarChart3, ArrowRight } from "lucide-react";

export default function LocalSEOPage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="px-10 pt-32 pb-20 max-w-5xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium">Expertise Géographique</span>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
          SEO Local & <br /><span className="text-zinc-600 italic">Multipoints.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Optimiser la visibilité de proximité pour des réseaux complexes. De la gestion GMB à la stratégie store-to-web, j'articule votre présence là où vos clients se trouvent.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 border-y border-white/10 bg-zinc-900/10">
        <div className="p-12 border-r border-white/10 space-y-6">
          <MapPin className="text-zinc-500" size={24} />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Presence Management</h3>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Maîtrise des plateformes Google Business Profile, Apple Business Connect et annuaires stratégiques pour garantir une donnée uniforme et performante.
          </p>
        </div>
        <div className="p-12 space-y-6">
          <Target className="text-zinc-500" size={24} />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Stratégie Drive-to-Store</h3>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Déploiement de pages locales optimisées (Store Locators) pour capter l'intention d'achat immédiate et maximiser les conversions physiques.
          </p>
        </div>
      </section>
      
      <section className="p-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mb-8">Références Local SEO</p>
        <div className="flex justify-center gap-12 opacity-30 grayscale text-xl font-bold uppercase">
          <span>Domino's</span>
          <span>Enterprise</span>
          <span>Vie & Véranda</span>
        </div>
      </section>
    </main>
  );
}
import { ArrowLeft, Languages, Globe, MapPin } from "lucide-react";
import Link from "next/link";

export default function InternationalPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full flex flex-col font-sans">
      <header className="px-10 pt-8 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={14} /> Retour
        </Link>
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">Expertise / International</span>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="mb-6 px-3 py-1 border border-white/10 rounded-full text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          Global SEO Strategy
        </div>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Conquête Sans Frontière
        </h1>
        <p className="mt-8 max-w-2xl text-zinc-400 font-light tracking-wide text-center leading-relaxed">
          Le monde est votre terrain de jeu. J’accompagne les marques premium dans leur déploiement multi-pays et l'optimisation de leur autorité globale.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-white/10 mt-auto">
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col items-center">
          <Globe size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Multi-Régional</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Ciblage précis par pays et gestion des noms de domaine.</p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col items-center">
          <Languages size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Hreflang Mastery</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Élimination des erreurs de duplication et redirection intelligente.</p>
        </div>
        <div className="p-12 text-center flex flex-col items-center">
          <MapPin size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">SEO Localisé</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Adaptation aux intentions de recherche locales.</p>
        </div>
      </section>
    </main>
  );
}
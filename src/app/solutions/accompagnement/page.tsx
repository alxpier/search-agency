"use client";
import { ShieldCheck, Layers, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Audit & Cadrage Technique",
    desc: "Analyse profonde des problématiques JS, SSR et de l'architecture de données pour une indexation parfaite.",
    tags: ["Technical Audit", "JS/SSR", "Core Web Vitals"]
  },
  {
    title: "Stratégie Sémantique & GEO",
    desc: "Déploiement de cocons sémantiques optimisés pour les moteurs traditionnels et les LLMs (ChatGPT, Gemini).",
    tags: ["Semantic Clusters", "GEO Strategy", "AI Visibility"]
  },
  {
    title: "Déploiement International",
    desc: "Coordination de migrations et lancements multi-marchés (EMEA, Global) avec gestion des redirections complexes.",
    tags: ["International SEO", "Migrations", "Multi-site"]
  }
];

export default function AccompagnementPage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans pb-20">
      {/* Hero Section */}
      <section className="px-10 pt-32 pb-20 max-w-5xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium">Expertise Sur-Mesure</span>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
          Le Search comme levier de <span className="text-zinc-600">croissance globale.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          S'appuyant sur une expérience de pilotage pour des comptes comme Alstom, Thales et Groupe SEB, je conçois des stratégies qui dominent les SERPs et les moteurs IA.
        </p>
      </section>

      {/* Méthodologie */}
      <section className="px-10 py-24 border-y border-white/10 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
        {steps.map((step, i) => (
          <div key={i} className="bg-black p-12 space-y-8 group hover:bg-zinc-900/30 transition-all">
            <span className="text-4xl font-bold text-zinc-800 group-hover:text-white transition-colors">0{i+1}</span>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">{step.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {step.tags.map(tag => (
                <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-1 border border-white/10 text-zinc-600 italic">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Garanties Techniques */}
      <section className="px-10 py-24 max-w-6xl mx-auto">
        <h2 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-16 font-medium flex items-center gap-3">
          <ShieldCheck size={14} /> Garanties Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-12 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              <Layers size={24} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Migrations multi-sites à grande échelle</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                Pilotage de migrations simultanées de plus de 20 sites — coordination des redirections, maillage interne et conformité technique sur des portefeuilles enterprise complexes.
              </p>
            </div>
          </div>
          <div className="bg-black p-12 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              <ShieldCheck size={24} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Spécifications Headless</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                Expertise reconnue en spécifications techniques pour architectures Headless — SSR, hydration, métadonnées structurées et intégration CMS / framework. Référent sur les problématiques JS et indexation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preuve sociale / Références */}
      <section className="px-10 py-32 max-w-6xl mx-auto text-center">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-16">Ils m'ont fait confiance pour leur visibilité</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 hover:opacity-100 transition-opacity">
          <span className="text-2xl font-bold uppercase tracking-tighter">Alstom</span>
          <span className="text-2xl font-bold uppercase tracking-tighter">Thales</span>
          <span className="text-2xl font-bold uppercase tracking-tighter">Naos</span>
          <span className="text-2xl font-bold uppercase tracking-tighter">Domino's</span>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-10 py-20 bg-zinc-900/20 border-t border-white/5 flex flex-col items-center">
        <h3 className="text-3xl font-bold uppercase mb-8">Prêt à passer au Headless SEO ?</h3>
        <button className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-colors flex items-center gap-4">
          Lancer l'audit stratégique <ArrowRight size={16} />
        </button>
      </section>
    </main>
  );
}
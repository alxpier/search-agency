"use client";
import { Briefcase, GraduationCap, Globe, Cpu, Users, Zap } from "lucide-react";

const experiences = [
  {
    company: "SQLI",
    role: "SEO Manager / Lead Search",
    period: "2021 — Présent",
    desc: "Direction du pôle search à Lyon. Management de 5 consultants. Expert référent sur les problématiques JS, SSR et l'optimisation pour les moteurs IA (GEO)."
  },
  {
    company: "Publicis Media London",
    role: "Senior SEO Account Executive",
    period: "2018 — 2020",
    desc: "Pilotage de stratégies SEO internationales pour des comptes majeurs comme Domino's Pizza et Enterprise EMEA."
  }
];

const references = [
  { name: "Alstom", scope: "International", detail: "Conformité technique & SEO global" },
  { name: "NAOS", scope: "International", detail: "Lancement de 20+ sites (Bioderma, Esthederm)" },
  { name: "Groupe SEB", scope: "International", detail: "Lead processus éditorial & migration tech" },
  { name: "Thales", scope: "Global", detail: "Revamp complet & migration de 20+ plateformes" }
];

export default function ParcoursPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full font-sans pb-20">
      {/* Header / Intro */}
      <section className="px-10 pt-32 pb-20 max-w-6xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium">L'Architecte de Visibilité</span>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
          De Londres à Lyon,<br />
          <span className="text-zinc-600 italic">Dominer les Algorithmes.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Spécialisé dans le déploiement de stratégies de visibilité globale, j'interviens à la convergence du SEO technique traditionnel et de l'optimisation pour les nouveaux moteurs IA (LLMs).
          </p>
          <div className="flex flex-wrap gap-4 items-start">
             <div className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-zinc-500">JS & SSR Expert</div>
             <div className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-zinc-500">Team Management</div>
             <div className="px-4 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-zinc-500">Global Strategy</div>
          </div>
        </div>
      </section>

      {/* Expertise Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10 bg-zinc-900/10">
        <div className="p-12 border-r border-white/10">
          <Users size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">5</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Consultants managés</p>
        </div>
        <div className="p-12 border-r border-white/10">
          <Globe size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">30+</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Sites déployés globalement</p>
        </div>
        <div className="p-12 border-r border-white/10">
          <Zap size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">8ans</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">D'expérience Search</p>
        </div>
        <div className="p-12">
          <Cpu size={18} className="mb-4 text-zinc-600" />
          <p className="text-4xl font-bold tracking-tighter">GEO</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Pionnier Optimisation IA</p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="px-10 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Timeline Expériences */}
        <div className="lg:col-span-7 space-y-20">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3 mb-16">
            <Briefcase size={14} /> Expériences Professionnelles
          </h2>
          {experiences.map((exp, i) => (
            <div key={i} className="group relative pl-12 border-l border-white/5 hover:border-white/20 transition-colors pb-10">
              <div className="absolute w-2 h-2 bg-zinc-800 rounded-full -left-[4.5px] top-2 group-hover:bg-white transition-colors" />
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest">{exp.period}</span>
              <h3 className="text-2xl font-bold mt-2 uppercase tracking-tight">{exp.company}</h3>
              <p className="text-zinc-400 text-sm mt-1 uppercase tracking-wider">{exp.role}</p>
              <p className="text-zinc-500 mt-6 font-light leading-relaxed max-w-xl">{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* Références & Certifs */}
        <div className="lg:col-span-5 space-y-20">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3 mb-12">
              <Zap size={14} /> Références Clients
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {references.map((ref, i) => (
                <div key={i} className="p-6 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg uppercase">{ref.name}</h4>
                    <span className="text-[8px] px-2 py-1 border border-white/10 rounded uppercase tracking-tighter">{ref.scope}</span>
                  </div>
                  <p className="text-xs text-zinc-500 font-light italic">{ref.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3 mb-12">
              <GraduationCap size={14} /> Formation & Vision
            </h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm font-medium">Master Communication & Publicité</span>
                <span className="text-[10px] text-zinc-600 uppercase">Bac+5</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm font-medium">Bilingue Anglais</span>
                <span className="text-[10px] text-zinc-600 uppercase">C1 Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
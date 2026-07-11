"use client";
import { motion } from "framer-motion";
import { GraduationCap, Users, Presentation, Lightbulb, ArrowRight, Code, Quote } from "lucide-react";

const modules = [
  {
    title: "Masterclass GEO & IA",
    desc: "Comprendre et anticiper les nouveaux comportements de recherche sur ChatGPT, Perplexity et Gemini.",
    icon: <Lightbulb size={24} className="text-zinc-500" />
  },
  {
    title: "SEO Technique pour Devs",
    desc: "Optimisation du rendu (SSR/ISR), gestion du JavaScript et spécifications pour architectures Headless.",
    icon: <Code size={24} className="text-zinc-500" />
  },
  {
    title: "Stratégie de Contenu Data-Driven",
    desc: "Méthodologie de création de clusters sémantiques et pilotage de la performance éditoriale.",
    icon: <Presentation size={24} className="text-zinc-500" />
  }
];

export default function FormationPage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans pb-20">
      {/* Hero Section */}
      <section className="px-10 pt-32 pb-20 max-w-5xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium">Transmission de Savoir</span>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
          Propulser vos équipes <br /><span className="text-zinc-600 italic">vers le futur du Search.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Fort de mon expérience de Lead Search et de formateur, je propose des programmes sur-mesure pour transformer vos services marketing et tech en experts de la visibilité moderne.
        </p>
      </section>

      {/* Stats Formation */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 bg-zinc-900/10">
        <div className="p-10 border-r border-white/10">
          <Users size={20} className="mb-4 text-zinc-600" />
          <p className="text-3xl font-bold tracking-tighter">In-house & Remote</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Formats flexibles</p>
        </div>
        <div className="p-10 border-r border-white/10">
          <GraduationCap size={20} className="mb-4 text-zinc-600" />
          <p className="text-3xl font-bold tracking-tighter">Pédagogie Actionnable</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">100% Cas pratiques</p>
        </div>
        <div className="p-10">
          <Presentation size={20} className="mb-4 text-zinc-600" />
          <p className="text-3xl font-bold tracking-tighter">Webinar Host</p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2">Expert certifié </p>
        </div>
      </section>

      {/* Les Modules */}
      <section className="px-10 py-32 max-w-6xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-20">Programmes de formation</h2>
        <div className="space-y-px bg-white/5 border border-white/5">
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="bg-black p-10 flex flex-col md:flex-row md:items-center justify-between group hover:bg-zinc-900/40 transition-all"
            >
              <div className="flex gap-8 items-start md:items-center">
                <span className="text-zinc-800 font-bold text-2xl group-hover:text-zinc-600 transition-colors">0{i+1}</span>
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{module.title}</h3>
                  <p className="text-zinc-500 text-sm font-light mt-2 max-w-md">{module.desc}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                {module.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Témoignages / Références */}
      <section className="px-10 py-24 max-w-6xl mx-auto border-t border-white/10">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12 font-medium flex items-center gap-3">
          <Quote size={14} /> Témoignages & Références
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed max-w-2xl">
          J'ai formé des équipes marketing et techniques travaillant sur des projets d'envergure internationale — migrations multi-sites, stratégies GEO et optimisations Headless pour des groupes comme Thales, Alstom et Groupe SEB.
        </p>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 flex flex-col items-center border-t border-white/10">
        <h3 className="text-2xl font-bold uppercase mb-10 text-center">Besoin d'un programme personnalisé pour votre équipe ?</h3>
        <button className="px-12 py-5 border border-white text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all flex items-center gap-4">
          Discuter de vos enjeux <ArrowRight size={16} />
        </button>
      </section>
    </main>
  );
}
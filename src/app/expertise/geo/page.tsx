"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Zap, Search } from "lucide-react";
import Link from "next/link";

export default function GeoPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full flex flex-col font-sans">
      {/* Navigation */}
      <header className="px-10 pt-8 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={14} /> Retour
        </Link>
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">Expertise / GEO</span>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 px-3 py-1 border border-white/10 rounded-full text-[10px] tracking-[0.3em] uppercase text-zinc-500"
        >
          Generative Engine Optimization
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
        >
          Dominer les IA
        </motion.h1>
        <p className="mt-8 max-w-2xl text-zinc-400 font-light tracking-wide text-center leading-relaxed">
          Le SEO classique ne suffit plus. Vos clients posent des questions à ChatGPT, Perplexity et Gemini. Je configure votre empreinte numérique pour que ces moteurs vous citent comme la référence absolue.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-white/10">
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10">
          <Target size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Analyse de Citation</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">
            Audit de votre visibilité actuelle dans les réponses génératives et identification des sources d'autorité.
          </p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10">
          <Zap size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Optimisation LLM</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">
            Structuration de vos données pour maximiser la compréhension par les modèles de langage (LLM).
          </p>
        </div>
        <div className="p-12">
          <Search size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Veille Algorithmique</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">
            Suivi des mises à jour de Perplexity et OpenAI pour maintenir votre position de leader.
          </p>
        </div>
      </section>
    </main>
  );
}
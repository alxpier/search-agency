import { ArrowLeft, Cpu, Code, Zap } from "lucide-react";
import Link from "next/link";

export default function SeoPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full flex flex-col font-sans">
      <header className="px-10 pt-8 flex justify-between items-center">
        <Link href="/expertises" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition-opacity">
          <ArrowLeft size={14} /> Retour
        </Link>
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">Expertise / SEO Technique</span>
      </header>

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="mb-6 px-3 py-1 border border-white/10 rounded-full text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          Performance & Architecture
        </div>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          Infrastructure de Haute Précision
        </h1>
        <p className="mt-8 max-w-2xl text-zinc-400 font-light tracking-wide text-center leading-relaxed">
          Un site digne de ce nom doit reposer sur un code irréprochable. On optimise vos Core Web Vitals et votre structure technique pour une indexation instantanée.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-white/10 mt-auto">
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col items-center">
          <Cpu size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Core Web Vitals</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Optimisation LCP, FID et CLS pour un score de 100/100.</p>
        </div>
        <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 text-center flex flex-col items-center">
          <Code size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Clean Code</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Architecture SSR pour une sécurité et une vitesse maximales.</p>
        </div>
        <div className="p-12 text-center flex flex-col items-center">
          <Zap size={20} className="mb-6 opacity-40" />
          <h3 className="text-[11px] tracking-[0.2em] font-bold uppercase mb-4">Crawl Budget</h3>
          <p className="text-xs text-zinc-500 leading-relaxed font-light">Optimisation du maillage interne pour les robots.</p>
        </div>
      </section>
    </main>
  );
}

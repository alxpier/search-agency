import { Cpu, Code, Zap } from "lucide-react";
import Link from "next/link";

export default function SeoPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Expertise / SEO Technique</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Infrastructure de haute précision"
          >
            Infrastructure de haute précision
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              Un site digne de ce nom doit reposer sur un code irréprochable. On optimise vos Core Web Vitals et votre structure technique pour une indexation instantanée.
            </p>
          </div>

          <Link href="/contact" className="sw-link text-xl md:text-2xl font-semibold tracking-wide">
            Discuter de votre projet &rarr;
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Cpu className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Core Web Vitals</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Optimisation LCP, FID et CLS pour un score de 100/100.</p>
            </article>
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Code className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Clean Code</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Architecture SSR pour une sécurité et une vitesse maximales.</p>
            </article>
            <article className="glow-item p-10 flex flex-col gap-6 group relative">
              <Zap className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl font-semibold tracking-tight">Crawl Budget</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Optimisation du maillage interne pour les robots.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

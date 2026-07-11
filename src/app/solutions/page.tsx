"use client";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, BarChart3, Users, Globe } from "lucide-react";

const solutions = [
  {
    title: "Accompagnement Search & GEO",
    slug: "accompagnement",
    desc: "Pilotage de stratégies globales : de l'audit technique JS/SSR à la visibilité sur les moteurs IA.",
    icon: <BarChart3 className="text-zinc-500" size={24} />,
    tags: ["Audit", "Roadmap", "Migration"]
  },
  {
    title: "Formation & Transfert",
    slug: "formation",
    desc: "Montée en compétence des équipes marketing et tech sur les enjeux SEO modernes et LLMs.",
    icon: <GraduationCap className="text-zinc-500" size={24} />,
    tags: ["Workshop", "Webinar", "Coaching"]
  }
];

export default function SolutionsHub() {
  return (
    <main className="bg-black text-white min-h-screen p-10 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-32">
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium italic">Architecte de Solutions</span>
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.8] mb-12">
            Transformer l'expertise<br />
            <span className="text-zinc-700 italic">en impact.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {solutions.map((item) => (
            <Link 
              key={item.slug} 
              href={`/solutions/${item.slug}`}
              className="group bg-black p-12 hover:bg-zinc-900/50 transition-all flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="mb-10 flex justify-between items-start">
                  {item.icon}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h2 className="text-4xl font-bold uppercase tracking-tight mb-6 group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
              <div className="flex gap-3 mt-12">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full text-zinc-600">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Résultats & KPIs */}
        <section className="mt-32 pt-20 border-t border-white/10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-16 font-medium">
            Résultats & KPIs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <div className="bg-black p-12 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0">
                <Users size={24} className="text-zinc-500" />
              </div>
              <div>
                <p className="text-5xl font-bold tracking-tighter mb-2">5</p>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Management de consultants SEO en pôle search — structuration d'équipes, montée en compétence et pilotage de projets complexes.
                </p>
              </div>
            </div>
            <div className="bg-black p-12 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0">
                <Globe size={24} className="text-zinc-500" />
              </div>
              <div>
                <p className="text-5xl font-bold tracking-tighter mb-2">30+</p>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">
                  Sites Drupal déployés à l'international — migrations, refontes et stratégies multi-pays pour des marques enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
"use client";
import Link from "next/link";
import { ArrowUpRight, Calculator, Building2, PawPrint } from "lucide-react";

const secteurs = [
  {
    title: "Experts-comptables",
    slug: "expert-comptable",
    desc: "21 611 cabinets en France, 210 recherches/mois. Votre site coûte 300€/an et ne rapporte rien : on change ça.",
    icon: <Calculator className="text-zinc-500" size={24} />,
    tags: ["Prio 1", "21 611 cabinets", "210 rech/mois"]
  },
  {
    title: "Architectes",
    slug: "architecte",
    desc: "30 000 cabinets, 130 recherches/mois. Un site beau mais invisible n'amène aucun client.",
    icon: <Building2 className="text-zinc-500" size={24} />,
    tags: ["Prio 2", "30 000 cabinets", "130 rech/mois"]
  },
  {
    title: "Vétérinaires",
    slug: "veterinaire",
    desc: "20 000 cliniques, 50 recherches/mois. Sortir du template générique et enfin être trouvé.",
    icon: <PawPrint className="text-zinc-500" size={24} />,
    tags: ["Prio 3", "20 000 cliniques", "50 rech/mois"]
  }
];

export default function SecteursHub() {
  return (
    <main className="bg-black text-white min-h-screen p-10 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-32">
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium italic">Une expertise par métier</span>
          <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-[0.8] mb-12">
            Trois métiers.<br />
            <span className="text-zinc-700 italic">Une expertise dédiée.</span>
          </h1>
          <p className="text-zinc-400 text-lg font-light max-w-2xl leading-relaxed">
            On se concentre volontairement sur quelques niches pour maîtriser leur vocabulaire, leurs problématiques et leur concurrence, plutôt que de rester généralistes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {secteurs.map((item) => (
            <Link
              key={item.slug}
              href={`/secteurs/${item.slug}`}
              className="group bg-black p-12 hover:bg-zinc-900/50 transition-all flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="mb-10 flex justify-between items-start">
                  {item.icon}
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </h2>
                <p className="text-zinc-500 font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-12">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full text-zinc-600">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

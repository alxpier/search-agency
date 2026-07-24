"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Calculator, Building2, PawPrint } from "lucide-react";

const secteurs = [
  {
    icon: Calculator,
    title: "Experts-comptables",
    slug: "expert-comptable",
    desc: "21 611 cabinets en France, 210 recherches/mois. Votre site coûte 300€/an et ne rapporte rien : on change ça.",
    tags: ["Prio 1", "21 611 cabinets", "210 rech/mois"]
  },
  {
    icon: Building2,
    title: "Architectes",
    slug: "architecte",
    desc: "30 000 cabinets, 130 recherches/mois. Un site beau mais invisible n'amène aucun client.",
    tags: ["Prio 2", "30 000 cabinets", "130 rech/mois"]
  },
  {
    icon: PawPrint,
    title: "Vétérinaires",
    slug: "veterinaire",
    desc: "20 000 cliniques, 50 recherches/mois. Sortir du template générique et enfin être trouvé.",
    tags: ["Prio 3", "20 000 cliniques", "50 rech/mois"]
  }
];

export default function SecteursHub() {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".glow-item");
      const scrolled = window.scrollY;

      items.forEach((item) => {
        const rotation = scrolled * 0.15;
        (item as HTMLElement).style.setProperty("--laser-pos", `${rotation}deg`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Une expertise par métier</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Trois métiers, une expertise dédiée"
          >
            Trois métiers, une expertise dédiée
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              On se concentre volontairement sur quelques niches pour maîtriser leur vocabulaire, leurs problématiques et leur concurrence, plutôt que de rester généralistes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {secteurs.map(({ icon: Icon, title, slug, desc, tags }) => (
              <article key={slug} className="glow-item p-12 flex flex-col gap-8 group relative">
                <Icon className="group-hover:text-sw-yellow transition-colors" size={40} />
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  <Link href={`/secteurs/${slug}`} className="anchor-stretch">{title}</Link>
                </h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto pt-4">
                  {tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full text-zinc-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

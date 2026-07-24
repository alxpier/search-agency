"use client";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";

export default function ArticleTemplate() {
  const params = useParams();
  const slug = params.slug;

  // On transforme le slug (ex: mon-article) en titre lisible (ex: Mon Article)
  const displayTitle = typeof slug === 'string'
    ? slug.replace(/-/g, ' ').toUpperCase()
    : "Article du Blog";

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Barre de progression factice */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        <div className="h-full bg-white w-1/4"></div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-40 pb-32">
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest mb-16 transition-colors group">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Retour au Blog
        </Link>

        <header className="mb-20">
          <div className="flex items-center gap-6 text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-8 font-medium">
            <span className="flex items-center gap-2"><Calendar size={12}/> Février 2026</span>
            <span className="flex items-center gap-2"><Clock size={12}/> 6 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
            {displayTitle}
          </h1>
        </header>

        <div className="space-y-8 text-zinc-400 text-lg font-light leading-relaxed">
          <p className="text-xl text-white font-normal italic">
            Analyse approfondie des enjeux Search et GEO pour les experts-comptables, architectes et vétérinaires.
          </p>

          <h2 className="text-2xl font-bold text-white uppercase tracking-tight pt-8">L&apos;enjeu technique</h2>
          <p>
            Ceci est un template dynamique. En fonction de l&apos;URL consultée dans le Blog, ce contenu s&apos;adaptera.
            Notre approche aborde ces sujets sous un angle à la fois technique (JS/SSR, headless) et métier.
          </p>

          <div className="border-l-2 border-white pl-8 py-4 my-12 bg-zinc-900/30">
            <p className="text-white italic">
              &laquo;&nbsp;L&apos;optimisation pour les moteurs IA (GEO) demande une structure de données plus rigoureuse que le SEO classique.&nbsp;&raquo;
            </p>
          </div>

          <p>
            Un site sur-mesure, pensé pour votre secteur, a démontré que la cohérence de la donnée est la clé du succès, que ce soit pour Google ou pour les nouveaux agents conversationnels.
          </p>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10">
          <p className="text-zinc-500 text-sm">
            Kobi Engine — SEO & GEO pour experts indépendants.
          </p>
        </footer>
      </article>
    </main>
  );
}

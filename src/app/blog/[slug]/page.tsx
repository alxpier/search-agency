"use client";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft } from "lucide-react";
import { useParams } from "next/navigation";

export default function ArticleTemplate() {
  const params = useParams();
  const slug = params.slug;

  // On transforme le slug (ex: mon-article) en titre lisible (ex: Mon Article)
  const displayTitle = typeof slug === 'string'
    ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : "Article du Blog";

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">
      {/* Barre de progression factice */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-900 z-50">
        <div className="h-full bg-sw-yellow w-1/4"></div>
      </div>

      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest mb-16 transition-colors group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Retour au Blog
          </Link>

          <div className="flex items-center gap-6 text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-8 font-medium">
            <span className="flex items-center gap-2"><Calendar size={12}/> Février 2026</span>
            <span className="flex items-center gap-2"><Clock size={12}/> 6 min de lecture</span>
          </div>

          <h1
            className="h1-tatooine mb-16 text-left"
            data-text={displayTitle}
          >
            {displayTitle}
          </h1>

          <div className="text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-20">
            <p className="text-white font-medium">
              Analyse approfondie des enjeux Search et GEO pour les experts-comptables, architectes et vétérinaires.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white pt-8">L&apos;enjeu technique</h2>
            <p>
              Ceci est un template dynamique. En fonction de l&apos;URL consultée dans le Blog, ce contenu s&apos;adaptera.
              Notre approche aborde ces sujets sous un angle à la fois technique (JS/SSR, headless) et métier.
            </p>

            <div className="glow-item p-8">
              <p className="text-white font-light italic">
                &laquo;&nbsp;L&apos;optimisation pour les moteurs IA (GEO) demande une structure de données plus rigoureuse que le SEO classique.&nbsp;&raquo;
              </p>
            </div>

            <p>
              Un site sur-mesure, pensé pour votre secteur, a démontré que la cohérence de la donnée est la clé du succès, que ce soit pour Google ou pour les nouveaux agents conversationnels.
            </p>
          </div>

          <footer className="pb-32 pt-12 border-t border-white/5">
            <p className="text-zinc-500 text-sm">
              Kobi Engine — SEO & GEO pour experts indépendants.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

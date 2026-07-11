"use client";
import Link from "next/link";
import { ArrowRight, Beaker } from "lucide-react";

// Ces slugs doivent correspondre à ce qui apparaîtra dans l'URL
const articles = [
  {
    slug: "geo-ia-architecture-headless",
    title: "L'ère du GEO : Pourquoi l'architecture Headless est votre meilleur atout",
    category: "R&D",
    date: "12 Féb 2026"
  },
  {
    slug: "seo-international-drupal",
    title: "Scaler 30+ sites Drupal à l'international",
    category: "Case Study",
    date: "28 Jan 2026"
  }
];

export default function LabHub() {
  return (
    <main className="bg-black text-white min-h-screen p-10 md:p-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <Beaker className="text-zinc-600" size={20} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-medium">Veille technologique</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter mb-20">Le <span className="text-zinc-700 italic">Lab.</span></h1>
        
        <div className="grid grid-cols-1 gap-12">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/lab/${article.slug}`} 
              className="group block border-b border-white/10 pb-12 hover:border-white transition-colors"
            >
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mb-4">{article.category} — {article.date}</p>
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
                    {article.title}
                  </h2>
                </div>
                <ArrowRight className="text-zinc-800 group-hover:text-white transition-all group-hover:translate-x-2" size={32} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
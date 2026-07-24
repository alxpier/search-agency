"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const articles = [
  {
    title: "L'ère du GEO : Pourquoi l'architecture Headless est votre meilleur atout",
    category: "R&D",
    date: "2026-02-12",
    href: "/blog/geo-ia-architecture-headless",
  },
  {
    title: "Site générique (Simplébo, Bakipy) vs sur-mesure : ce que ça change pour votre visibilité",
    category: "Case Study",
    date: "2026-01-28",
    href: "/blog/site-generique-vs-sur-mesure",
  }
];

export default function BlogHub() {
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
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Veille technologique</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Le Blog"
          >
            Le Blog
          </h1>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.href} className="glow-item group flex flex-col justify-between p-8 min-h-[280px] relative">
                <div>
                  <span className="text-xs uppercase text-sw-yellow font-bold tracking-[0.2em] mb-4 block">
                    {article.category}
                  </span>
                  <h2 className="text-2xl font-semibold leading-tight tracking-tight">
                    <Link href={article.href} className="anchor-stretch">{article.title}</Link>
                  </h2>
                </div>
                <time dateTime={article.date} className="text-zinc-600 text-sm font-medium">{article.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

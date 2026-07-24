"use client";
import React, { useEffect } from "react";
import { ArrowLeft, Globe, Cpu, Layers } from "lucide-react";
import Link from "next/link";

export default function ExpertiseHub() {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".glow-item");
      const scrolled = window.scrollY;

      items.forEach((item) => {
        const rotation = scrolled * 0.02;
        (item as HTMLElement).style.setProperty("--laser-pos", `${rotation}deg`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* Background Depth - Harmonisé ISO HP */}
      <div className="bg-depth">
        <div />
      </div>

      <header className="px-5 md:px-10 pt-12 flex justify-between items-center relative z-20">
        <Link href="/" className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity font-bold">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Retour
        </Link>
        <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-mono">Architecture / Expertise</span>
      </header>

      <section className="px-5 md:px-10 pt-32 pb-20 max-w-6xl mx-auto relative z-10">
 {/* H1 STRICTEMENT ISO HP */}
 <h1 className="h1-tatooine text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-14 text-center md:text-left">
          Expertises <br/>
          Search & Intelligence
        </h1>

        {/* Texte descriptif ISO Style */}
        <div className="w-full max-w-4xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-24 text-pretty">
          <p>
            L&apos;expertise Search en 2026 ne se limite plus à la simple compréhension des algorithmes de crawl. Elle réside dans la capacité à orchestrer une présence multi-plateforme où la <span className="text-white font-medium">clarté technique</span> rencontre la <span className="text-white font-medium">pertinence générative</span>.
          </p>
          <p>
            Notre approche segmente le Search en trois piliers fondamentaux, conçus pour transformer votre site en un actif stratégique capable de répondre aux exigences de Google, mais aussi de s&apos;imposer comme une référence pour les nouveaux moteurs d&apos;IA.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">

          {/* 01 - SEO Technique (ISO HP) */}
          <div className="glow-item p-10 md:p-14 group relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Globe size={32} className="text-sw-yellow" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono">01 — La Fondation</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">SEO Technique</h2>
                <p className="text-zinc-400 max-w-xl font-light text-lg leading-relaxed">
                  Diagnostic, structure et optimisation des parcours : chaque action vise à répondre à un besoin métier mesurable et sécuriser votre investissement sur la durée.
                </p>
              </div>
              <Link href="/expertises/seo" className="sw-link text-lg font-bold uppercase tracking-widest italic whitespace-nowrap">
                Explorer &rarr;
              </Link>
            </div>
          </div>

          {/* 02 - GEO / IA (ISO HP) */}
          <div className="glow-item p-10 md:p-14 group relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Cpu size={32} className="text-sw-yellow" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono">02 — L&apos;Innovation</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">GEO / IA</h2>
                <p className="text-zinc-400 max-w-xl font-light text-lg leading-relaxed">
                  Alignement sémantique et technique (JSON-LD) pour devenir une source de référence sélectionnée par les moteurs d&apos;IA générative (Perplexity, ChatGPT).
                </p>
              </div>
              <Link href="/expertises/geo" className="sw-link text-lg font-bold uppercase tracking-widest italic whitespace-nowrap">
                Explorer &rarr;
              </Link>
            </div>
          </div>

          {/* 03 - Création de sites (ISO HP) */}
          <div className="glow-item p-10 md:p-14 group relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Layers size={32} className="text-sw-yellow" />
                  <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono">03 — La Fabrication</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Création de sites</h2>
                <p className="text-zinc-400 max-w-xl font-light text-lg leading-relaxed">
                  Sites sur mesure, pas de template, performance native : une architecture headless conçue pour votre métier dès le premier trait.
                </p>
              </div>
              <Link href="/expertises/sites-web" className="sw-link text-lg font-bold uppercase tracking-widest italic whitespace-nowrap">
                Explorer &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      <footer className="px-5 md:px-10 py-20 text-center opacity-20 relative z-10">
        <span className="text-[10px] tracking-[0.5em] uppercase font-mono">Kobi Engine — SEO / GEO / Sites sur-mesure — 2026</span>
      </footer>
    </main>
  );
}

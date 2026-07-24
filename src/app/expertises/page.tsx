"use client";
import React, { useEffect } from "react";
import { Globe, Cpu, Layers } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Globe,
    tag: "01 — La Fondation",
    title: "SEO Technique",
    desc: "Diagnostic, structure et optimisation des parcours : chaque action vise à répondre à un besoin métier mesurable et sécuriser votre investissement sur la durée.",
    href: "/expertises/seo",
  },
  {
    icon: Cpu,
    tag: "02 — L'Innovation",
    title: "GEO / IA",
    desc: "Alignement sémantique et technique (JSON-LD) pour devenir une source de référence sélectionnée par les moteurs d'IA générative (Perplexity, ChatGPT).",
    href: "/expertises/geo",
  },
  {
    icon: Layers,
    tag: "03 — La Fabrication",
    title: "Création de sites",
    desc: "Sites sur mesure, pas de template, performance native : une architecture headless conçue pour votre métier dès le premier trait.",
    href: "/expertises/sites-web",
  },
];

export default function ExpertiseHub() {
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
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Architecture / Expertise</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Expertises Search & Intelligence"
          >
            Expertises Search & Intelligence
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              L&apos;expertise Search en 2026 ne se limite plus à la simple compréhension des algorithmes de crawl. Elle réside dans la capacité à orchestrer une présence multi-plateforme où la <span className="text-white font-medium">clarté technique</span> rencontre la <span className="text-white font-medium">pertinence générative</span>.
            </p>
            <p>
              Notre approche segmente le Search en trois piliers fondamentaux, conçus pour transformer votre site en un actif stratégique capable de répondre aux exigences de Google, mais aussi de s&apos;imposer comme une référence pour les nouveaux moteurs d&apos;IA.
            </p>
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map(({ icon: Icon, tag, title, desc, href }) => (
              <article key={href} className="glow-item p-12 flex flex-col gap-8 group relative">
                <Icon className="group-hover:text-sw-yellow transition-colors" size={40} />
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-mono mb-4 block">{tag}</span>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    <Link href={href} className="anchor-stretch">{title}</Link>
                  </h2>
                </div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

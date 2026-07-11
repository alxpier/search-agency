"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, MapPin, Calculator, Mail } from "lucide-react";

const labArticles = [
  {
    title: "Structurer son site pour le GEO : bonnes pratiques et pièges à éviter",
    category: "GEO",
    date: "2024-05-20",
    href: "/lab/structurer-site-geo",
  },
  {
    title: "Mesurer l’impact SEO avec la Data : du crawl au dashboard",
    category: "Data",
    date: "2024-04-18",
    href: "/lab/mesurer-impact-seo-data",
  },
  {
    title: "Optimisation technique avancée : indexabilité et budget crawl",
    category: "Technique",
    date: "2024-03-27",
    href: "/lab/optimisation-technique-indexabilite",
  },
];

const faqData = [
  { q: "Quelles sont les missions d'un consultant SEO & GEO ?", r: "Un consultant SEO analyse la structure technique, la sémantique et l'autorité d'un site. En 2026, j'intègre le GEO (Generative Engine Optimization) pour garantir que votre marque ne soit pas seulement indexée par Google, mais aussi citée comme référence par les IA (Perplexity, Gemini, ou SGE)." },
  { q: "Quel est le coût d'une prestation de conseil en référencement ?", r: "Le tarif varie selon la complexité technique et les objectifs de croissance. Mon approche repose sur le ROI : chaque euro investi doit servir un levier de conversion mesurable." },
  { q: "Le SEO sera-t-il remplacé par l'IA (SGE, Perplexity) ?", r: "Le SEO ne meurt pas, il mute. L'IA remplace la recherche de 'mots-clés' par la recherche d'intentions. Le GEO devient donc indispensable." },
  { q: "Quels sont les 4 piliers du SEO en 2026 ?", r: "Aux trois piliers historiques (Technique, Contenu, Netlinking), s'ajoute désormais la Sémantique Générative (Données structurées JSON-LD avancées)." },
  { q: "Est-ce que le SEO est une compétence informatique (IT) ?", r: "C'est une discipline hybride. Si la stratégie est marketing, l'exécution est hautement technique. Ma double expertise permet de dialoguer directement avec vos développeurs." },
  { q: "La règle du 80/20 s'applique-t-elle au Search Marketing ?", r: "Absolument. 80% de vos résultats proviennent souvent de 20% de vos pages stratégiques. Mon rôle est d'identifier ces actifs à fort potentiel." },
  { q: "Peut-on encore obtenir des résultats SEO en 2026 ?", r: "Oui, mais plus avec les méthodes de 2020. Le succès demande une approche 'Multi-Search' : dominer les SERP classiques, Maps et les moteurs de réponse." }
];

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".glow-item");
      const scrolled = window.scrollY;

      const h1Shift = -((scrolled * 0.7) % 900);
      document.documentElement.style.setProperty("--h1-shift", `${h1Shift}px`);

      items.forEach((item) => {
        const rotation = scrolled * 0.15;
        (item as HTMLElement).style.setProperty("--laser-pos", `${rotation}deg`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.r },
    })),
  };

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-full mx-auto">
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Consultant SEO/GEO à Lyon"
          >
            Consultant SEO/GEO à Lyon
          </h1>

          <div className="max-full text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-12">
            <p>
              En tant que Lead Search chez SQLI et Publicis Sapient, j’ai assuré la gestion de comptes internationaux confrontés à des enjeux de scalabilité technique : migrations multi-pays, architectures headless et pilotage de multiples environnements. À chaque étape, l’objectif restait le même : aligner les recommandations SEO sur le ROI attendu et offrir à la direction des livrables lisibles, cohérents et directement exploitables.
            </p>
            <p>
              En 2026, le SEO opère une mutation stratégique et devient le <span className="text-white font-medium">GEO (Generative Engine Optimization)</span>. L’enjeu n’est plus d’occupper une place dans les résultats Google, mais de devenir une source de référence citée par les moteurs d’IA tels que Perplexity, Gemini, ou SGE.
            </p>
            <p>
              À Lyon et à distance, j’œuvre pour faire du Search/GEO un actif stratégique, pilotable et documenté par vos équipes.
            </p>
          </div>

          <Link href="/parcours" className="sw-link text-xl md:text-2xl font-semibold tracking-wide">
            Consulter mon parcours détaillé &rarr;
          </Link>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-20">Expertises Stratégiques</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <Globe className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertise/technique" className="anchor-stretch">SEO Technique</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Diagnostic, stratégie éditoriale et optimisation des parcours : chaque action vise un levier mesurable.
              </p>
            </article>

            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <MapPin className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertise/local" className="anchor-stretch">SEO Local</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Optimisation des fiches établissement et maillage territorial pour maximiser la pertinence Maps.
              </p>
            </article>

            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <ArrowRight className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertise/international" className="anchor-stretch">SEO International</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Gestion des migrations, structures hreflang et stratégies multi-marchés.
              </p>
            </article>

            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <Cpu className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertise/geo" className="anchor-stretch">GEO / IA</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Alignement sémantique et technique pour devenir une source sélectionnée par les IA.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SIMULATEUR */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12">
            Simuler votre potentiel
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-12">
            Anticipez le ROI réel de votre future visibilité organique.
          </p>
          <Link
            href="/simulateur"
            className="px-12 py-6 bg-white text-black font-semibold tracking-wide text-xs hover:bg-sw-yellow transition-all rounded-sm flex items-center gap-4 justify-center"
          >
            Lancer le simulateur <Calculator size={18} />
          </Link>
        </div>
      </section>

      {/* LAB */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-16">Le Lab</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {labArticles.map((article) => (
              <article key={article.href} className="glow-item group flex flex-col justify-between p-8 min-h-[280px] relative">
                <div>
                  <span className="text-xs uppercase text-sw-yellow font-bold tracking-[0.2em] mb-4 block">
                    {article.category}
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                    <Link href={article.href} className="anchor-stretch">{article.title}</Link>
                  </h3>
                </div>
                <time dateTime={article.date} className="text-zinc-600 text-sm font-medium">{article.date}</time>
              </article>
            ))}
          </div>

          <Link href="/lab" className="sw-link text-lg md:text-2xl font-semibold tracking-wide">
            Explorer l'intégralité du Lab &rarr;
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full px-6 md:px-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-zinc-600 mb-8 block">Démarrer un projet</span>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none mb-12">
              On travaille ensemble ?
            </h2>
            <p className="text-zinc-400 text-lg font-light mb-10 max-w-xl">
              Racontez-moi votre projet, son contexte et vos objectifs business.
            </p>

            <address className="not-italic space-y-5">
              <Link href="mailto:hello@alexandrepierre.com" className="sw-link text-lg md:text-xl font-semibold inline-flex items-center gap-3">
                <Mail size={22} className="text-sw-yellow shrink-0" />
                <span className="border-b border-white/10">hello@alexandrepierre.com</span>
              </Link>

              <div className="flex items-center gap-3 text-zinc-500 text-xl">
                <MapPin size={22} className="shrink-0" />
                <span>Lyon, France</span>
              </div>
            </address>
          </div>

          <div className="glow-item p-12 relative">
            <form className="space-y-10">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Identité</label>
                <input type="text" placeholder="Votre nom ou société" className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-sw-yellow transition-colors text-white" />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Projet</label>
                <textarea rows={3} placeholder="Décrivez vos enjeux..." className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-sw-yellow transition-colors resize-none text-white" />
              </div>

              <button
                type="submit"
                className="sw-link text-lg md:text-2xl font-semibold inline-flex items-center gap-3 group/btn"
              >
                <span>Envoyer</span>
                <ArrowRight size={28} className="shrink-0 transition-transform group-hover/btn:translate-x-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-6 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-16 text-center">
          FAQ
        </h2>

        <div className="divide-y divide-white/5">
          {faqData.map((item, i) => (
            <details key={i} className="group">
              <summary className="py-8 cursor-pointer text-xl font-semibold flex justify-between items-center list-none">
                {item.q}
                <span className="text-sw-yellow group-open:rotate-45 transition-transform text-2xl">+</span>
              </summary>
              <div className="pb-8 text-zinc-400 font-light text-lg leading-relaxed max-w-3xl">
                {item.r}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

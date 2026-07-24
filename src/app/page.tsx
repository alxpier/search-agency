"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Cpu, Layers, Mail, MapPin } from "lucide-react";

const labArticles = [
  {
    title: "Structurer son site pour le GEO : bonnes pratiques et pièges à éviter",
    category: "GEO",
    date: "2024-05-20",
    href: "/blog/structurer-site-geo",
  },
  {
    title: "Mesurer l’impact SEO avec la Data : du crawl au dashboard",
    category: "Data",
    date: "2024-04-18",
    href: "/blog/mesurer-impact-seo-data",
  },
  {
    title: "Optimisation technique avancée : indexabilité et budget crawl",
    category: "Technique",
    date: "2024-03-27",
    href: "/blog/optimisation-technique-indexabilite",
  },
];

const secteurs = [
  { title: "Experts-comptables", desc: "Votre site coûte 300€/an et ne rapporte rien. On change ça.", href: "/secteurs/expert-comptable" },
  { title: "Architectes", desc: "Un site beau mais invisible n'amène aucun client.", href: "/secteurs/architecte" },
  { title: "Vétérinaires", desc: "Sortir du template générique et enfin être trouvé.", href: "/secteurs/veterinaire" },
];

const faqData = [
  { q: "Quelles sont les missions de Kobi Engine ?", r: "Kobi Engine analyse la structure technique, la sémantique et l'autorité de votre site, puis conçoit ou refond une présence taillée pour votre métier. En 2026, on intègre le GEO (Generative Engine Optimization) pour garantir que votre cabinet ne soit pas seulement indexé par Google, mais aussi cité comme référence par les IA (Perplexity, Gemini, ou AI Overviews)." },
  { q: "Quel est le coût d'un site ou d'une refonte SEO/GEO ?", r: "Le tarif varie selon le périmètre : un site clé en main démarre autour de 2 500€, une refonte SEO/GEO autour de 1 500€. Notre approche repose sur le ROI : chaque euro investi doit servir un levier de conversion mesurable pour votre cabinet." },
  { q: "Le SEO sera-t-il remplacé par l'IA (SGE, Perplexity) ?", r: "Le SEO ne meurt pas, il mute. L'IA remplace la recherche de 'mots-clés' par la recherche d'intentions. Le GEO devient donc indispensable, y compris pour les métiers de proximité." },
  { q: "Pourquoi un site générique (Simplébo, Bakipy...) ne suffit pas ?", r: "Ces solutions produisent des sites qui se ressemblent tous, avec une structure technique et sémantique identique pour chaque client. Un site sur-mesure permet de se différencier et d'être réellement compris par Google comme par les IA." },
  { q: "Est-ce que le SEO est une compétence informatique (IT) ?", r: "C'est une discipline hybride. Si la stratégie est marketing, l'exécution est hautement technique (architecture headless, Core Web Vitals, données structurées). C'est ce double regard qui fait la différence." },
  { q: "Combien de temps avant de voir des résultats ?", r: "Un site bien structuré est indexé en quelques jours. Les premiers effets sur le trafic qualifié se voient généralement entre 2 et 4 mois, selon la concurrence de votre secteur et zone géographique." },
  { q: "Travaillez-vous avec tous les secteurs d'activité ?", r: "Nous nous concentrons volontairement sur quelques niches (experts-comptables, architectes, vétérinaires) pour maîtriser leur vocabulaire métier et leurs problématiques spécifiques plutôt que de rester généralistes." }
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
            data-text="Le site qui vous amène des clients"
          >
            Le site qui vous amène des clients
          </h1>

          <div className="max-full text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-12">
            <p>
              Kobi Engine conçoit des sites sur-mesure pour les experts-comptables, architectes et vétérinaires : pas de template générique, pas de structure interchangeable. Chaque site est pensé pour votre métier, votre vocabulaire et vos clients.
            </p>
            <p>
              En 2026, le SEO opère une mutation stratégique et devient le <span className="text-white font-medium">GEO (Generative Engine Optimization)</span>. L’enjeu n’est plus d’occuper une place dans les résultats Google, mais de devenir une source de référence citée par les moteurs d’IA tels que Perplexity, Gemini, ou les AI Overviews.
            </p>
            <p>
              À Lyon et à distance, on fait du Search/GEO un actif stratégique, pilotable et documenté, pour des cabinets qui n&apos;ont pas de temps à perdre avec le marketing.
            </p>
          </div>

          <Link href="/methode" className="sw-link text-xl md:text-2xl font-semibold tracking-wide">
            Découvrir notre méthode &rarr;
          </Link>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-20">Expertises Stratégiques</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <Globe className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertises/seo" className="anchor-stretch">SEO Technique</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Diagnostic, structure et optimisation des parcours : chaque action vise un levier mesurable.
              </p>
            </article>

            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <Cpu className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertises/geo" className="anchor-stretch">GEO / IA</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Alignement sémantique et technique pour devenir une source sélectionnée par les IA.
              </p>
            </article>

            <article className="glow-item p-12 flex flex-col gap-8 group relative">
              <Layers className="group-hover:text-sw-yellow transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertises/sites-web" className="anchor-stretch">Création de sites</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Sites sur mesure, pas de template, performance native dès la conception.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-4">Secteurs</h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-16 max-w-2xl">
            On se concentre sur quelques métiers pour maîtriser leur vocabulaire et leurs problématiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {secteurs.map((s) => (
              <article key={s.href} className="glow-item p-10 flex flex-col gap-6 group relative">
                <h3 className="text-2xl font-semibold tracking-tight">
                  <Link href={s.href} className="anchor-stretch">{s.title}</Link>
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>

          <Link href="/secteurs" className="sw-link text-lg md:text-2xl font-semibold tracking-wide">
            Voir tous les secteurs &rarr;
          </Link>
        </div>
      </section>

      {/* BLOG / LAB */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-16">Blog / Lab</h2>

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
            Explorer le blog &rarr;
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
              Racontez-nous votre projet, son contexte et vos objectifs business.
            </p>

            <address className="not-italic space-y-5">
              <Link href="mailto:hello@kobiengine.fr" className="sw-link text-lg md:text-xl font-semibold inline-flex items-center gap-3">
                <Mail size={22} className="text-sw-yellow shrink-0" />
                <span className="border-b border-white/10">hello@kobiengine.fr</span>
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

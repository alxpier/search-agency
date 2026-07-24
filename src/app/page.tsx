"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Globe, Cpu, Layers, Mail, MapPin,
  EyeOff, Copy, Bot, Search, Code, Rocket,
  Calculator, Building2, PawPrint,
} from "lucide-react";

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

const constat = [
  {
    icon: EyeOff,
    title: "Un site vitrine ne suffit plus",
    desc: "En 2026, la majorité des sites de professionnels sont invisibles sur Google. Beau design, zéro visite : aucun prospect ne les trouve jamais.",
  },
  {
    icon: Copy,
    title: "Les templates génériques se ressemblent tous",
    desc: "Simplébo, Bakipy, Wix... Google voit la même structure sur des milliers de sites. Impossible de se différencier ou d'être identifié comme une référence.",
  },
  {
    icon: Bot,
    title: "Le GEO change la donne",
    desc: "Vos clients ne tapent plus une recherche, ils posent une question à ChatGPT ou Perplexity. Sans architecture sémantique adaptée, vous êtes absent de la réponse.",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Métiers accompagnés" },
  { value: 100, suffix: "/100", label: "Score Core Web Vitals visé" },
  { value: 4, prefix: "< ", suffix: " sem.", label: "Délai de livraison moyen" },
];

const secteursPrio = [
  { icon: Calculator, title: "Experts-comptables", desc: "Votre site coûte 300€/an et ne rapporte rien. On change ça.", href: "/secteurs/expert-comptable" },
  { icon: Building2, title: "Architectes", desc: "Un site beau mais invisible n'amène aucun client.", href: "/secteurs/architecte" },
  { icon: PawPrint, title: "Vétérinaires", desc: "Sortir du template générique et enfin être trouvé.", href: "/secteurs/veterinaire" },
];

const autresMetiers = [
  "Avocats", "Notaires", "Kinésithérapeutes", "Serruriers",
  "Agents immobiliers", "Artisans du bâtiment", "Ostéopathes", "Courtiers",
];

const methode = [
  { icon: Search, title: "Audit", desc: "Diagnostic technique, sémantique et concurrentiel. Identification des recherches qui comptent pour votre métier et votre zone." },
  { icon: Code, title: "Production", desc: "Architecture headless, contenus rédigés pour votre secteur, données structurées pour le SEO et le GEO." },
  { icon: Rocket, title: "Livraison", desc: "Mise en ligne, indexation accompagnée, prise en main du site et suivi des premiers résultats." },
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

function StatCounter({ value, prefix = "", suffix = "", label }: { value: number; prefix?: string; suffix?: string; label: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const duration = 1200;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glow-item p-12 flex flex-col items-center gap-4 text-center">
      <p className="text-5xl md:text-6xl font-semibold tracking-tighter">
        {prefix}{display}{suffix}
      </p>
      <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">{label}</p>
    </div>
  );
}

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
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <div>
            <h1
              className="h1-tatooine mb-16 text-left"
              data-text="Le site qui vous amène des clients"
            >
              Le site qui vous amène des clients
            </h1>

            <div className="text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-12">
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

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-sw-yellow/10 blur-[110px] rounded-full" />
            <Image
              src="/kobi-hero.png"
              alt="Kobi, la mascotte de Kobi Engine"
              width={800}
              height={800}
              priority
              className="kobi-portrait relative w-[280px] md:w-[380px] lg:w-[440px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* LE CONSTAT */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-4">Le constat</h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-16 max-w-2xl">
            Trois raisons pour lesquelles la majorité des sites de professionnels ne rapportent rien en 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {constat.map(({ icon: Icon, title, desc }, i) => (
              <article key={title} className="glow-item p-12 flex flex-col gap-6 group relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-700 group-hover:text-sw-yellow transition-colors">0{i + 1}</span>
                  <Icon className="group-hover:text-sw-yellow transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
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

      {/* CHIFFRES CLÉS */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-16">En chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-4">Secteurs</h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-16 max-w-2xl">
            On accompagne les professionnels qui méritent mieux qu&apos;un template.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {secteursPrio.map(({ icon: Icon, title, desc, href }) => (
              <article key={href} className="glow-item p-10 flex flex-col gap-6 group relative">
                <Icon className="group-hover:text-sw-yellow transition-colors" size={28} />
                <h3 className="text-2xl font-semibold tracking-tight">
                  <Link href={href} className="anchor-stretch">{title}</Link>
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-6">Et aussi</p>
          <div className="flex flex-wrap gap-3 mb-16">
            {autresMetiers.map((metier) => (
              <Link
                key={metier}
                href="/contact"
                className="text-sm text-zinc-400 hover:text-sw-yellow hover:border-sw-yellow/40 border border-white/10 rounded-full px-5 py-2 transition-colors"
              >
                {metier}
              </Link>
            ))}
          </div>

          <Link href="/secteurs" className="sw-link text-lg md:text-2xl font-semibold tracking-wide">
            Voir tous les secteurs &rarr;
          </Link>
        </div>
      </section>

      {/* NOTRE MÉTHODE */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-4">Notre méthode</h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light mb-16 max-w-2xl">
            Un process en 3 étapes, sans surprise et sans jargon inutile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {methode.map(({ icon: Icon, title, desc }, i) => (
              <article key={title} className="glow-item p-12 flex flex-col gap-8 group relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-700 group-hover:text-sw-yellow transition-colors">0{i + 1}</span>
                  <Icon className="group-hover:text-sw-yellow transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>

          <Link href="/methode" className="sw-link text-lg md:text-2xl font-semibold tracking-wide">
            Découvrir notre méthode en détail &rarr;
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

      {/* PREUVE SOCIALE */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-16">Réalisations</h2>
          <div className="glow-item p-16 md:p-24 flex flex-col items-start gap-6">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Bientôt nos premières réalisations.
            </p>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
              Kobi Engine démarre. Plutôt que d&apos;afficher des références génériques, on préfère attendre d&apos;avoir de vrais résultats à montrer — les vôtres, peut-être.
            </p>
            <Link href="/contact" className="sw-link text-lg md:text-xl font-semibold tracking-wide">
              Devenir notre premier client &rarr;
            </Link>
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

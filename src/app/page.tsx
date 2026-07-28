"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, Globe, Cpu, Layers, Mail, MapPin,
  History, ClipboardList, ClipboardCheck, Bot, Search, Code, Rocket,
  Calculator, Building2, PawPrint,
} from "lucide-react";

const constat = [
  {
    icon: History,
    title: "Des sites obsolètes depuis des années",
    desc: "Beaucoup de sites tournent depuis des années, avec peu de mises à jour et peu de leads : les faire évoluer est complexe, car ils reposent sur d'anciennes pratiques techniques qui demandaient énormément de développement manuel. On mise sur l'IA pour accélérer et fiabiliser ce travail.",
  },
  {
    icon: ClipboardList,
    title: "Pas de template, une base qu'on personnalise",
    desc: "On ne part pas d'un template générique : on part d'une base fonctionnelle qu'on adapte et personnalise avec vous, à partir d'un brief que vous remplissez avec toutes vos exigences et vos besoins.",
  },
  {
    icon: Bot,
    title: "Le GEO change la donne",
    desc: "Le SEO était déjà complexe : l'IA générative ajoute une couche de difficulté si votre site est déjà peu visible. Il faut être précis pour être la réponse retenue lors de la requête d'un utilisateur.",
  },
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
  const [display, setDisplay] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const started = React.useRef(false);

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

const accentBorder = {
  yellow: "border-sw-yellow",
  wine: "border-accent-wine",
  plum: "border-accent-plum",
  sage: "border-accent-sage",
};

function SectionHeading({ eyebrow, intro, accent = "yellow" }: { eyebrow: string; intro?: string; accent?: keyof typeof accentBorder }) {
  return (
    <div className="mb-16">
      <h2 className={`border-l-2 ${accentBorder[accent]} pl-4 text-zinc-500 text-xs tracking-[0.4em] uppercase mb-4`}>{eyebrow}</h2>
      {intro && <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">{intro}</p>}
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

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
      <section className="relative w-full px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 15% 20%, rgba(255,232,31,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 80%, rgba(160,82,126,0.07), transparent 65%)" }}
        />

        <div className="max-w-[1400px] mx-auto relative">
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Le site qui vous amène des clients"
          >
            Le site qui vous amène des clients
          </h1>

          <div className="text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-12 max-w-3xl">
            <p>
              Que vous soyez expert-comptable, architecte ou vétérinaire, votre activité est votre force : on vous propose une structure de site idéale pour votre secteur, qu&apos;on personnalise ensuite selon votre activité précise et votre offre. Envie de vous projeter ?{" "}
              <Link href="/secteurs" className="text-white underline decoration-white/30 underline-offset-4 hover:text-sw-yellow hover:decoration-sw-yellow transition-colors">
                Consultez nos exemples de site par secteur
              </Link>.
            </p>
            <p>
              L&apos;autre force, c&apos;est le référencement : nos sites sont pensés pour être visibles aussi bien sur <span className="text-white font-medium">Google et Maps</span> que sur <span className="text-white font-medium">ChatGPT, Perplexity ou Gemini</span>. Toutes les bonnes pratiques techniques et éditoriales sont mises en œuvre dès la conception — et vous gardez ensuite la main pour faire évoluer votre site : actualités, pages conseils, nouvelles offres.
            </p>
          </div>

          <Link href="/methode" className="sw-link text-xl md:text-2xl font-semibold tracking-wide">
            Découvrir notre méthode &rarr;
          </Link>
        </div>
      </section>

      {/* LE CONSTAT */}
      <section className="relative w-full px-6 md:px-16 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 25% 15%, rgba(178,58,78,0.09), transparent 65%)" }}
        />
        <div className="reveal max-w-[1400px] mx-auto relative">
          <SectionHeading
            eyebrow="Le constat"
            intro="Trois raisons pour lesquelles la majorité des sites de professionnels ne rapportent rien en 2026."
            accent="wine"
          />

          <div className="relative">
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {constat.map(({ icon: Icon, title, desc }, i) => (
                <article
                  key={title}
                  className={`glow-item p-12 flex flex-col gap-6 group relative overflow-hidden ${i === 1 ? "md:translate-y-10" : ""}`}
                >
                  <span className="absolute top-1 left-4 text-8xl font-bold text-white/[0.06] select-none pointer-events-none leading-none">
                    0{i + 1}
                  </span>
                  <div className="relative z-10 flex flex-col gap-6">
                    <Icon className="group-hover:text-accent-wine transition-colors" size={28} />
                    <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="w-full px-6 md:px-16">
        <div className="reveal max-w-[1400px] mx-auto">
          <h2 className="border-l-2 border-sw-yellow pl-4 text-zinc-500 text-xs tracking-[0.4em] uppercase mb-20">Expertises Stratégiques</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="glow-item glow-seo p-12 flex flex-col gap-8 group relative">
              <Globe className="group-hover:text-accent-sage transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertises/seo" className="anchor-stretch">SEO Technique</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Diagnostic, structure et optimisation des parcours : chaque action vise un levier mesurable.
              </p>
            </article>

            <article className="glow-item glow-geo p-12 flex flex-col gap-8 group relative">
              <Cpu className="group-hover:text-accent-plum transition-colors" size={40} />
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                <Link href="/expertises/geo" className="anchor-stretch">GEO / IA</Link>
              </h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Alignement sémantique et technique pour devenir une source sélectionnée par les IA.
              </p>
            </article>

            <article className="glow-item glow-sites p-12 flex flex-col gap-8 group relative">
              <Layers className="group-hover:text-accent-wine transition-colors" size={40} />
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
      <section className="relative w-full px-6 md:px-16 bg-gradient-to-r from-zinc-950/30 via-zinc-900/50 to-zinc-950/30 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 75% 30%, rgba(92,138,107,0.08), transparent 65%)" }}
        />
        <div className="reveal max-w-[1400px] mx-auto relative">
          <h2 className="border-l-2 border-accent-sage pl-4 text-zinc-500 text-xs tracking-[0.4em] uppercase mb-16">En chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StatCounter value={10} suffix=" ans" label="D'expérience agence, tous secteurs confondus" />
            <StatCounter value={4} prefix="< " suffix=" sem." label="Pour livrer votre site" />
            <article className="glow-item p-12 flex flex-col items-center gap-4 text-center">
              <ClipboardCheck className="text-accent-sage" size={32} />
              <p className="text-2xl font-semibold tracking-tight">Un CDC qui cadre tout</p>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Un cahier des charges rempli ensemble, un chiffrage transparent — pas d&apos;appel d&apos;un commercial non sollicité.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="w-full px-6 md:px-16">
        <div className="reveal max-w-[1400px] mx-auto">
          <SectionHeading eyebrow="Secteurs" intro="On accompagne les professionnels qui méritent mieux qu'un template." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {secteursPrio.map(({ icon: Icon, title, desc, href }) => (
              <article key={href} className="glow-item p-12 flex flex-col gap-6 group relative">
                <Icon className="group-hover:text-sw-yellow transition-colors" size={36} />
                <h3 className="text-3xl font-semibold tracking-tight">
                  <Link href={href} className="anchor-stretch">{title}</Link>
                </h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">{desc}</p>
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
      <section className="relative w-full px-6 md:px-16 bg-gradient-to-b from-zinc-950/70 to-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 25% 30%, rgba(160,82,126,0.08), transparent 65%)" }}
        />
        <div className="reveal max-w-[1400px] mx-auto relative">
          <SectionHeading eyebrow="Notre méthode" intro="Un process en 3 étapes, sans surprise et sans jargon inutile." accent="plum" />

          {/* Connecteur pipeline (desktop) */}
          <div className="hidden md:flex items-center justify-center mb-4">
            {methode.map((_, i) => (
              <React.Fragment key={i}>
                <div className="w-9 h-9 rounded-full border border-white/15 bg-black flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0">
                  {i + 1}
                </div>
                {i < methode.length - 1 && (
                  <div className="flex-1 max-w-[140px] h-px mx-2 bg-gradient-to-r from-white/15 via-white/25 to-white/15" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 mt-10 md:mt-16">
            {methode.map(({ icon: Icon, title, desc }, i) => (
              <article key={title} className="glow-item p-12 flex flex-col gap-6 group relative overflow-hidden">
                <span className="absolute top-1 left-4 text-8xl font-bold text-white/[0.06] select-none pointer-events-none leading-none">
                  0{i + 1}
                </span>
                <div className="relative z-10 flex flex-col gap-6">
                  <Icon className="group-hover:text-accent-plum transition-colors" size={28} />
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          <Link href="/methode" className="sw-link text-lg md:text-2xl font-semibold tracking-wide">
            Découvrir notre méthode en détail &rarr;
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative w-full px-6 md:px-16 border-t border-white/5 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 20% 100%, rgba(197,160,89,0.08), transparent 70%)" }}
        />
        <div className="reveal max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative">
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
        <h2 className="reveal text-4xl md:text-6xl font-semibold tracking-tight mb-16 text-center">
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

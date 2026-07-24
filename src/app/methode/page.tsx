import { ArrowRight, ShieldCheck, Layers, Search, Code, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <Search size={24} className="text-zinc-500" />,
    title: "Audit",
    desc: "Diagnostic technique, sémantique et concurrentiel de votre présence actuelle. Identification des recherches qui comptent réellement pour votre métier et votre zone.",
    tags: ["Audit technique", "Étude de marché", "Mots-clés métier"]
  },
  {
    icon: <Code size={24} className="text-zinc-500" />,
    title: "Production",
    desc: "Conception et développement du site sur-mesure : architecture headless, contenus rédigés pour votre secteur, données structurées pour le SEO et le GEO.",
    tags: ["Architecture headless", "Contenu SEO/GEO", "Design sur-mesure"]
  },
  {
    icon: <Rocket size={24} className="text-zinc-500" />,
    title: "Livraison",
    desc: "Mise en ligne, indexation accompagnée, prise en main du site et suivi des premiers résultats de visibilité.",
    tags: ["Mise en ligne", "Formation", "Suivi des résultats"]
  }
];

export default function MethodePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans pb-20">
      {/* Hero */}
      <section className="px-10 pt-32 pb-20 max-w-5xl">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block font-medium">Comment on travaille</span>
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-12">
          Un process en <span className="text-zinc-600">3 étapes.</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
          Pas de surprise, pas de jargon inutile. Chaque projet suit le même cadre : on comprend votre métier, on construit le site, on le livre prêt à générer des contacts.
        </p>
      </section>

      {/* Étapes */}
      <section className="px-10 py-24 border-y border-white/10 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
        {steps.map((step, i) => (
          <div key={i} className="bg-black p-12 space-y-8 group hover:bg-zinc-900/30 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-zinc-800 group-hover:text-white transition-colors">0{i + 1}</span>
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-sm text-zinc-500 font-light leading-relaxed">{step.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {step.tags.map(tag => (
                <span key={tag} className="text-[8px] uppercase tracking-widest px-2 py-1 border border-white/10 text-zinc-600 italic">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Garanties */}
      <section className="px-10 py-24 max-w-6xl mx-auto">
        <h2 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-16 font-medium flex items-center gap-3">
          <ShieldCheck size={14} /> Garanties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-12 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              <Layers size={24} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Périmètre fermé</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                Un devis clair avant de démarrer, avec un périmètre défini. Pas de facturation surprise en cours de route.
              </p>
            </div>
          </div>
          <div className="bg-black p-12 flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-shrink-0">
              <ShieldCheck size={24} className="text-zinc-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Vous restez propriétaire</h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                Votre site, votre nom de domaine, vos contenus : rien n&apos;est verrouillé chez nous après la livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-10 py-20 bg-zinc-900/20 border-t border-white/5 flex flex-col items-center">
        <h3 className="text-3xl font-bold uppercase mb-8 text-center">Prêt à démarrer votre audit ?</h3>
        <Link href="/contact" className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-colors flex items-center gap-4">
          Lancer l&apos;audit stratégique <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

import { Search, Code, Rocket, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    title: "Audit",
    desc: "Diagnostic technique, sémantique et concurrentiel de votre présence actuelle. Identification des recherches qui comptent réellement pour votre métier et votre zone.",
  },
  {
    icon: Code,
    title: "Production",
    desc: "Conception et développement du site sur-mesure : architecture headless, contenus rédigés pour votre secteur, données structurées pour le SEO et le GEO.",
  },
  {
    icon: Rocket,
    title: "Livraison",
    desc: "Mise en ligne, indexation accompagnée, prise en main du site et suivi des premiers résultats de visibilité.",
  }
];

export default function MethodePage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Comment on travaille</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Un process en 3 étapes"
          >
            Un process en 3 étapes
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              Pas de surprise, pas de jargon inutile. Chaque projet suit le même cadre : on comprend votre métier, on construit le site, on le livre prêt à générer des contacts.
            </p>
          </div>
        </div>
      </section>

      {/* ÉTAPES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <article key={title} className="glow-item p-12 flex flex-col gap-8 group relative">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-700 group-hover:text-sw-yellow transition-colors">0{i + 1}</span>
                  <Icon className="group-hover:text-sw-yellow transition-colors" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-16">Garanties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <Layers className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Périmètre fermé</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Un devis clair avant de démarrer, avec un périmètre défini. Pas de facturation surprise en cours de route.
              </p>
            </article>
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <ShieldCheck className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Vous restez propriétaire</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Votre site, votre nom de domaine, vos contenus : rien n&apos;est verrouillé chez nous après la livraison.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12">
            Prêt à démarrer votre audit ?
          </h2>
          <Link
            href="/contact"
            className="px-12 py-6 bg-white text-black font-semibold tracking-wide text-xs hover:bg-sw-yellow transition-all rounded-sm inline-flex items-center gap-4 justify-center"
          >
            Lancer l&apos;audit stratégique <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

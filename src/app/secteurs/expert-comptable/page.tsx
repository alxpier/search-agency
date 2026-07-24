import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExpertComptablePage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Secteur / Experts-comptables — Priorité 1</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Votre site coûte 300€/an, et ne rapporte rien"
          >
            Votre site coûte 300€/an, et ne rapporte rien
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              La majorité des cabinets d&apos;expertise comptable ont un site vitrine hébergé chez leur ordre ou un prestataire générique : aucun client ne le trouve jamais sur Google. On construit un site qui capte les recherches &laquo;&nbsp;expert-comptable + ville&nbsp;&raquo; et convertit les visiteurs en rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <MapPin className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Visibilité locale</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Fiche Google Business Profile optimisée, pages dédiées par ville ou zone d&apos;intervention, maillage pensé pour les recherches de proximité.
              </p>
            </article>
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <ShieldCheck className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Confiance immédiate</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Présentation des associés, spécialités (TPE, professions libérales, holdings), mentions légales et conformité : tout ce qui rassure un dirigeant avant de prendre contact.
              </p>
            </article>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-6 text-zinc-500 text-sm font-light mb-20">
            <span><span className="text-white font-semibold text-xl tracking-tight">21 611</span> cabinets en France</span>
            <span><span className="text-white font-semibold text-xl tracking-tight">210/mois</span> recherches ciblées moyennes</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12">
            Prêt à transformer votre site en outil de prospection ?
          </h2>
          <Link
            href="/contact"
            className="px-12 py-6 bg-white text-black font-semibold tracking-wide text-xs hover:bg-sw-yellow transition-all rounded-sm inline-flex items-center gap-4 justify-center"
          >
            Discuter de votre cabinet <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

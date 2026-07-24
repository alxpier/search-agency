import { PhoneCall, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VeterinairePage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Secteur / Vétérinaires — Priorité 3</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Sortir du générique"
          >
            Sortir du générique
          </h1>

          <div className="max-w-3xl text-zinc-300 text-base md:text-xl leading-relaxed font-light space-y-8 mb-4">
            <p>
              Bakipy, Simplébo et consorts produisent des sites qui se ressemblent tous, avec la même structure technique pour chaque clinique. On construit un site propre à votre clinique, qui vous distingue et vous fait remonter sur les recherches locales.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <PhoneCall className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Prise de contact simplifiée</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Prise de rendez-vous, numéro d&apos;urgence et horaires mis en avant : l&apos;essentiel visible en un coup d&apos;œil, y compris sur mobile.
              </p>
            </article>
            <article className="glow-item p-12 flex flex-col gap-6 group relative">
              <Sparkles className="group-hover:text-sw-yellow transition-colors" size={32} />
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Une identité propre</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Présentation de l&apos;équipe, des espèces suivies et des spécialités, avec un design qui ne ressemble pas au template d&apos;un logiciel de gestion.
              </p>
            </article>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-6 text-zinc-500 text-sm font-light mb-20">
            <span><span className="text-white font-semibold text-xl tracking-tight">20 000</span> cliniques en France</span>
            <span><span className="text-white font-semibold text-xl tracking-tight">50/mois</span> recherches ciblées moyennes</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 md:px-16 bg-zinc-950/40">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-12">
            Prêt à donner à votre clinique un site à son image ?
          </h2>
          <Link
            href="/contact"
            className="px-12 py-6 bg-white text-black font-semibold tracking-wide text-xs hover:bg-sw-yellow transition-all rounded-sm inline-flex items-center gap-4 justify-center"
          >
            Discuter de votre clinique <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

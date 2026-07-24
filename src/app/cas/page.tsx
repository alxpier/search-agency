import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EtudesDeCasPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Preuve sociale</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Études de cas"
          >
            Études de cas
          </h1>
        </div>
      </section>

      {/* EMPTY STATE */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="glow-item p-16 md:p-24 flex flex-col items-start gap-8">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Les premières études de cas arrivent avec nos premiers clients.
            </p>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
              Kobi Engine démarre. Plutôt que d&apos;afficher des références génériques, on préfère attendre d&apos;avoir de vrais résultats à montrer — les vôtres, peut-être.
            </p>
            <Link href="/contact" className="sw-link text-lg md:text-2xl font-semibold tracking-wide inline-flex items-center gap-3">
              <span>Devenir notre premier client</span>
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

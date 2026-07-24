"use client";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

export default function EtudesDeCasPage() {
  return (
    <main className="bg-black text-white min-h-screen p-10 md:p-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <FolderKanban className="text-zinc-600" size={20} />
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-medium">Preuve sociale</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter mb-20">Études <span className="text-zinc-700 italic">de cas.</span></h1>

        <div className="border border-dashed border-white/10 rounded-xl p-16 md:p-24 flex flex-col items-center text-center gap-8">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
            Les premières études de cas arrivent avec nos premiers clients.
          </p>
          <p className="text-zinc-500 font-light max-w-lg leading-relaxed">
            Kobi Engine démarre. Plutôt que d&apos;afficher des références génériques, on préfère attendre d&apos;avoir de vrais résultats à montrer — les vôtres, peut-être.
          </p>
          <Link href="/contact" className="sw-link text-lg md:text-xl font-semibold inline-flex items-center gap-3">
            <span>Devenir notre premier client</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}

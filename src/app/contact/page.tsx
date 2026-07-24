"use client";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-yellow-500/30 relative">

      {/* HERO */}
      <section className="relative w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-zinc-500 text-xs tracking-[0.4em] uppercase mb-8 block">Démarrer un projet</span>
          <h1
            className="h1-tatooine mb-16 text-left"
            data-text="Parlons vision"
          >
            Parlons vision
          </h1>
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Vous avez l&apos;ambition. On a l&apos;architecture technique et sémantique pour la réaliser. Racontez-nous votre projet, son contexte et vos objectifs business.
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
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 block">Contact</label>
                <input type="email" placeholder="votre@email.com" className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-sw-yellow transition-colors text-white" />
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
    </main>
  );
}

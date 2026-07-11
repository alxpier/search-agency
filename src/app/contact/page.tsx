"use client";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row font-sans">
      
      {/* Colonne Gauche : Infos */}
      <section className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-between border-r border-white/10">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-6 block">Démarrer un projet</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-10">
            Parlons<br />
            <span className="text-zinc-600">Vision.</span>
          </h1>
          <p className="text-zinc-400 font-light max-w-sm leading-relaxed">
            Vous avez l'ambition. J'ai l'architecture technique et sémantique pour la réaliser.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Email</p>
              <p className="text-sm font-medium">hello@alexandrepierre.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Studio</p>
              <p className="text-sm font-medium">Lyon, France</p>
            </div>
          </div>
        </div>
      </section>

      {/* Colonne Droite : Formulaire */}
      <section className="w-full md:w-1/2 p-10 md:p-20 flex items-center justify-center bg-zinc-900/20">
        <form className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Identité</label>
            <input 
              type="text" 
              placeholder="Votre nom ou société" 
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Contact</label>
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Projet</label>
            <textarea 
              rows={4}
              placeholder="Décrivez vos enjeux..." 
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors resize-none placeholder:text-zinc-800"
            />
          </div>

          <button className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold mt-10 hover:opacity-70 transition-opacity">
            Envoyer la demande <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </form>
      </section>

    </main>
  );
}
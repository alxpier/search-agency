"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

const DURATION = 500;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function useCountUp(target: number) {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (target === prevRef.current) return;
    const start = prevRef.current;
    const diff = target - start;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      setDisplay(Math.round(start + diff * easeOutCubic(progress)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else prevRef.current = target;
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return display;
}

export default function SimulateurPage() {
  const [langues, setLangues] = useState(1);
  const [technique, setTechnique] = useState(1);
  const [geo, setGeo] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const baseMensuelle = 1200;
    const multiplicateurLangue = 1 + (langues - 1) * 0.4;
    const fraisTech = technique * 500;
    const optionGeo = geo ? 800 : 0;
    setTotal(Math.round((baseMensuelle * multiplicateurLangue) + fraisTech + optionGeo));
  }, [langues, technique, geo]);

  const displayTotal = useCountUp(total);

  return (
    <main className="bg-black text-white min-h-screen p-10 md:p-24 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-4 block">Outil de cadrage</span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Estimer votre<br /><span className="text-zinc-600 italic">Investissement Search.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Configuration */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className="p-8 border border-white/5 bg-zinc-900/10 rounded-xl space-y-6">
              <label className="flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-400">
                Envergure Internationale <span>{langues} Marché(s)</span>
              </label>
              <input 
                type="range" min="1" max="10" value={langues} 
                onChange={(e) => setLangues(parseInt(e.target.value))}
                className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-white"
              />
            </div>

            <div className="p-8 border border-white/5 bg-zinc-900/10 rounded-xl space-y-6">
              <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-4">Complexité Technique (Stack)</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: 1, l: "Standard", desc: "CMS Classique" },
                  { v: 2, l: "Avancé", desc: "JS / Headless" },
                  { v: 3, l: "Critique", desc: "Migration" }
                ].map((item) => (
                  <button 
                    key={item.v}
                    onClick={() => setTechnique(item.v)}
                    className={`p-4 border text-left transition-all ${technique === item.v ? 'border-white bg-white text-black' : 'border-white/10 hover:border-white/30'}`}
                  >
                    <p className="text-[10px] font-bold uppercase">{item.l}</p>
                    <p className={`text-[9px] mt-1 ${technique === item.v ? 'text-black/60' : 'text-zinc-500'}`}>{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-8 border border-white/5 bg-zinc-900/10 rounded-xl">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">Option GEO & IA</p>
                <p className="text-xs text-zinc-600 mt-1 italic">Optimisation pour ChatGPT, Perplexity & Gemini</p>
              </div>
              <button 
                onClick={() => setGeo(!geo)}
                className={`w-12 h-6 rounded-full transition-colors relative ${geo ? 'bg-white' : 'bg-zinc-800'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${geo ? 'right-1 bg-black' : 'left-1 bg-zinc-600'}`} />
              </button>
            </div>
          </div>

          {/* Résultat */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 p-10 border border-white/10 rounded-2xl flex flex-col justify-between min-h-[400px] bg-gradient-to-br from-white via-white/95 to-zinc-100/90 backdrop-blur-sm shadow-[0_0_40px_-12px_rgba(255,255,255,0.08)]">
              <div>
                <Calculator size={24} className="mb-6 opacity-20" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-black/80">Budget mensuel estimé</p>
                <div className="text-7xl font-bold tracking-tighter text-black">
                  {displayTotal}€<span className="text-xl opacity-40">/ht</span>
                </div>
              </div>

              <div className="space-y-6 text-black">
                <p className="text-[10px] leading-relaxed opacity-60 italic">
                  *Cette estimation inclut le pilotage stratégique, l'audit technique permanent et l'accompagnement opérationnel.
                </p>
                <button className="w-full py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                  Réserver un audit <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
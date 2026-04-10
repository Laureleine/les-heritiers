// src/components/DiceRoller.js
import React, { useState, useEffect, useRef } from 'react';
import { X, Dices, Sparkles, Triangle, ShieldAlert, Zap, Crown, RefreshCcw } from 'lucide-react';
import DiceBox from '@3d-dice/dice-box';

// 🛡️ PARADE ANTI-BUG : On utilise du texte converti en tableau
const parseAdj = (str) => str.split(',').map(n => parseInt(n.trim()));

// 🎲 CARTOGRAPHIE PHYSIQUE EXACTE DES DÉS
const ADJACENCIES = {
  D8: {
    1: parseAdj("2,3,4"), 2: parseAdj("1,3,5"), 3: parseAdj("1,2,6"), 4: parseAdj("1,5,6"),
    5: parseAdj("2,4,7"), 6: parseAdj("3,4,8"), 7: parseAdj("5,6,8"), 8: parseAdj("5,6,7")
  },
  D10: {
    1: parseAdj("2,3,4,5"), 2: parseAdj("1,3,6,7"), 3: parseAdj("1,2,4,8"), 4: parseAdj("1,3,5,9"),
    5: parseAdj("1,4,6,10"), 6: parseAdj("2,5,7,10"), 7: parseAdj("2,6,8,10"), 8: parseAdj("3,7,9,10"),
    9: parseAdj("4,8,10,1"), 10: parseAdj("5,6,7,8,9")
  },
  D12: {
    1: parseAdj("2,3,4,5,6"), 2: parseAdj("1,3,7,8,12"), 3: parseAdj("1,2,4,8,9"),
    4: parseAdj("1,3,5,9,10"), 5: parseAdj("1,4,6,10,11"), 6: parseAdj("1,5,7,11,12"),
    7: parseAdj("2,6,8,11,12"), 8: parseAdj("2,3,7,9,12"), 9: parseAdj("3,4,8,10,12"),
    10: parseAdj("4,5,9,11,12"), 11: parseAdj("5,6,7,10,12"), 12: parseAdj("7,8,9,10,11")
  }
};

export default function DiceRoller({ use3DDice = false, diceTheme = 'laiton' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingMode, setRollingMode] = useState(null);
  const [diceType, setDiceType] = useState('D8');
  const [result, setResult] = useState(null);

  const rollTimerRef = useRef(null);
  const diceBoxRef = useRef(null);
  const [is3DReady, setIs3DReady] = useState(false);

  useEffect(() => {
    return () => { if (rollTimerRef.current) clearTimeout(rollTimerRef.current); };
  }, []);

  // --- INITIALISATION (ANTI-PRISON & API MODERNE) ---
  useEffect(() => {
    if (!use3DDice || !isOpen || diceBoxRef.current) return;

    const initDice = () => {
      const containerEl = document.getElementById("casino-dice-canvas");
      if (!containerEl) return;

      const rect = containerEl.getBoundingClientRect();
      
      // Sécurité : on attend que le modal soit réellement ouvert (largeur > 100px)
      if (rect.width < 100) {
        setTimeout(initDice, 100);
        return;
      }

      try {
        containerEl.innerHTML = '';
        diceBoxRef.current = new DiceBox({
          container: "#casino-dice-canvas",
          assetPath: '/assets/dice-box/',
          theme: diceTheme === 'sang' ? 'rust' : diceTheme === 'améthyste' ? 'purple' : 'default',
          width: rect.width,
          height: rect.height,
          themeColor: "#b45309",
          scale: 8,
          gravity: 4,
          mass: 2,
          friction: 0.8,
          throwForce: 11,
          spinForce: 13,
          settleTimeout: 3500
        });

        diceBoxRef.current.init().then(() => {
          setIs3DReady(true);
          const canvas = containerEl.querySelector('canvas');
          if (canvas) {
            canvas.style.width = '100%';
            canvas.style.height = '100%';
          }
          window.dispatchEvent(new Event('resize'));
        });
      } catch (e) { console.error("Défaut DiceBox:", e); }
    };

    const timer = setTimeout(initDice, 800);
    return () => clearTimeout(timer);
  }, [use3DDice, diceTheme, isOpen]);

  const handleClear = () => setResult(null);

  const handleCloseAndClear = () => {
    setResult(null);
    setIsOpen(false);
  };

  const getGameValue = (type, face) => {
    if (type === 'D10' && face === 1) return -3;
    if (type === 'D12' && (face === 1 || face === 2)) return -5;
    return face;
  };

  const rollSingle = (max) => Math.floor(Math.random() * max) + 1;

  const getBestAdjacent = (type, currentFace) => {
    const adj = ADJACENCIES[type]?.[currentFace];
    if (!adj) return currentFace;

    return adj.reduce((best, current) => {
      return getGameValue(type, current) > getGameValue(type, best) ? current : best;
    }, adj[0]);
  };

  const executeAction = async (mode) => {
    if (isRolling) return;
    setIsRolling(true);
    setRollingMode(mode);

    if (use3DDice && is3DReady && mode === 'NORMAL') {
      setResult(null);
      try {
        diceBoxRef.current.clear();
        await new Promise(r => setTimeout(r, 400));
        const results = await diceBoxRef.current.roll(`1${diceType.toLowerCase()}`);
        const face = results.at(0).value;
        const f = { [diceType]: face };
        const v = { [diceType]: getGameValue(diceType, face) };
        setResult({ type: 'NORMAL', faces: f, values: v });
      } catch (e) { console.error(e); }
      setIsRolling(false);
      return;
    }

    // --- LOGIQUE TRICHE / 2D ---
    const duration = mode === 'FLIP_FACE' ? 1000 : 1500;
    setTimeout(() => {
      if (mode === 'NORMAL') {
        const face = rollSingle(parseInt(diceType.replace('D', '')));
        setResult({ type: 'NORMAL', faces: { [diceType]: face }, values: { [diceType]: getGameValue(diceType, face) } });
      } else if (mode === 'FLIP_FACE') {
        if (diceBoxRef.current) diceBoxRef.current.clear(); // On vide la 3D pour la triche magique
        setResult(prev => {
          const currentFace = prev?.faces[diceType];
          const bestFace = getBestAdjacent(diceType, currentFace);
          return {
            ...prev,
            type: 'FLIP_FACE',
            faces: { ...prev.faces, [diceType]: bestFace },
            values: { ...prev.values, [diceType]: getGameValue(diceType, bestFace) },
            oldVal: getGameValue(diceType, currentFace)
          };
        });
      }
      setIsRolling(false);
      setRollingMode(null);
    }, duration);
  };

  return (
    <>
      <style>{`
        .felt-table { background-color: #064e3b; background-image: radial-gradient(circle, #065f46 0%, #022c22 100%); }
        .dice-glow { filter: drop-shadow(0 0 20px rgba(255,255,255,0.3)); }
        @keyframes flip-dice {
          0% { transform: rotateX(0deg) rotateY(0deg) scale(1); }
          50% { transform: rotateX(180deg) rotateY(180deg) scale(1.3); }
          100% { transform: rotateX(360deg) rotateY(360deg) scale(1); }
        }
        .animate-flip { animation: flip-dice 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-24 right-6 bg-stone-900 text-amber-400 p-4 rounded-full border-2 border-amber-600/50 z-40 shadow-xl active:scale-90">
          <Dices size={28} />
        </button>
      )}

      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 p-4 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-full max-w-4xl felt-table overflow-hidden shadow-2xl" style={{ height: '85vh', borderRadius: '40px', border: '16px solid #451a03' }}>
          <button onClick={handleCloseAndClear} className={`absolute top-6 right-6 text-stone-400 hover:text-white z-50 ${isOpen ? 'pointer-events-auto' : ''}`}><X size={32} /></button>
          
          <div id="casino-dice-canvas" className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}></div>

          <div className="relative z-10 w-full h-full flex flex-col items-center p-8 pointer-events-none">
            <div className={`h-20 flex gap-4 ${isOpen ? 'pointer-events-auto' : ''}`}>
              {['D8', 'D10', 'D12'].map(t => (
                <button key={t} onClick={() => { setDiceType(t); setResult(null); }} className={`px-6 py-2 rounded-full font-serif font-bold border-2 transition-all ${diceType === t ? 'bg-amber-600 border-amber-400 text-white shadow-lg scale-105' : 'bg-stone-800 text-stone-400'}`}>{t}</button>
              ))}
            </div>

            <div className="flex-1 flex items-center justify-center pointer-events-none">
               {result && !isRolling && (
                 <div className={`text-white text-9xl font-serif font-black dice-glow ${result.type === 'FLIP_FACE' ? 'animate-flip' : ''}`}>
                   {result.values[diceType]}
                 </div>
               )}
            </div>

            <div className={`w-full flex flex-col items-center gap-3 mt-4 ${isOpen ? 'pointer-events-auto' : ''}`}>
              {!result && (
                <button onClick={() => executeAction('NORMAL')} disabled={isRolling} className="text-white font-bold font-serif text-3xl px-20 py-5 rounded-2xl bg-gradient-to-b from-stone-600 to-stone-800 border-t border-white/20 shadow-xl active:translate-y-1">{isRolling ? '...' : `Lancer`}</button>
              )}

              {result && result.type === 'NORMAL' && !isRolling && (
                <div className="flex flex-col gap-3 w-full max-w-2xl">
                  <div className="flex gap-3">
                    <button onClick={() => executeAction('ADD_DICE')} className="flex-1 text-white font-bold font-serif text-lg py-4 rounded-xl bg-gradient-to-b from-fuchsia-600 to-purple-900 border border-fuchsia-400 shadow-lg active:scale-95">Tricher (1 PT)</button>
                    <button onClick={() => executeAction('FLIP_FACE')} className="flex-1 text-white font-bold font-serif text-lg py-4 rounded-xl bg-gradient-to-b from-amber-600 to-amber-900 border border-amber-400 shadow-lg active:scale-95">
                      <RefreshCcw size={20} className="inline mr-2" /> Basculer (2 PTS)
                    </button>
                  </div>
                  <button onClick={() => setResult(null)} className="text-stone-400 hover:text-white underline text-sm">Accepter</button>
                </div>
              )}
              {result && result.type !== 'NORMAL' && !isRolling && <button onClick={() => setResult(null)} className="bg-stone-700 text-white px-12 py-3 rounded-xl font-serif text-xl border border-stone-500">Nouveau tour</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
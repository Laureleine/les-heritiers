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

  useEffect(() => {
    return () => {
      if (rollTimerRef.current) clearTimeout(rollTimerRef.current);
    };
  }, []);

  const diceBoxRef = useRef(null);
  const [is3DReady, setIs3DReady] = useState(false);

  useEffect(() => {
    // 🛡️ LE COUPE-CIRCUIT ABSOLU : On attend que la fenêtre soit ouverte
    if (!use3DDice || !isOpen || diceBoxRef.current) return;

    const timer = setTimeout(() => {
      // ✨ FIX DU SYNDROME FANTÔME : Utilisation d'un ID flambant neuf !
      const containerExists = document.getElementById("casino-dice-canvas");
      
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        console.warn("WebGL non disponible, dés 3D désactivés");
        return;
      }

      if (containerExists) {
        try {
          // On purge tout vieux canvas qui traînerait
          containerExists.innerHTML = '';

          diceBoxRef.current = new DiceBox("#casino-dice-canvas", {
            assetPath: '/assets/dice-box/',
            theme: diceTheme === 'sang' ? 'rust' : diceTheme === 'améthyste' ? 'purple' : 'default',
            themeColor: "#b45309",
            scale: 60, // L'échelle géante pour bien voir les dés
            throwForce: 8,
            spinForce: 8
          });

          diceBoxRef.current.init()
            .then(() => {
              setIs3DReady(true);
              // ✨ LE COUP DE GRÂCE : On force le navigateur à recalculer les murs physiques de la table
              window.dispatchEvent(new Event('resize'));
            })
            .catch(e => {
              console.error("Init 3D échouée :", e);
              diceBoxRef.current = null;
            });
        } catch (e) {
          console.error("Création DiceBox échouée :", e);
          diceBoxRef.current = null;
        }
      }
    }, 350); 

    return () => clearTimeout(timer);
  }, [use3DDice, diceTheme, isOpen]);

  const handleClear = () => {
    setResult(null);
    if (diceBoxRef.current) diceBoxRef.current.clear();
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
    
    let bestFace = adj;
    let bestVal = getGameValue(type, bestFace);
    
    adj.forEach(face => {
      const val = getGameValue(type, face);
      if (val > bestVal) { bestVal = val; bestFace = face; }
    });
    return bestFace;
  };

  const executeAction = async (mode) => {
    if (isRolling) return;
    setIsRolling(true);
    setRollingMode(mode);

    if (use3DDice && is3DReady && mode === 'NORMAL') {
      handleClear();
      try {
        await new Promise(resolve => setTimeout(resolve, 999));
        
        const results = await diceBoxRef.current.roll(`1${diceType.toLowerCase()}`);
        const face = results.at(0).value; 
        
        const f = { D8: null, D10: null, D12: null };
        const v = { D8: null, D10: null, D12: null };
        
        if (diceType === 'D8') { f.D8 = face; v.D8 = getGameValue('D8', face); }
        if (diceType === 'D10') { f.D10 = face; v.D10 = getGameValue('D10', face); }
        if (diceType === 'D12') { f.D12 = face; v.D12 = getGameValue('D12', face); }

        setResult({ type: 'NORMAL', faces: f, values: v });
      } catch (e) {
        console.error("Erreur lancer 3D:", e);
        setIs3DReady(false);
        setIsRolling(false);
        return;
      }
      setIsRolling(false);
      return;
    }

    if (use3DDice && diceBoxRef.current && mode !== 'NORMAL') {
      diceBoxRef.current.clear();
    }

    const duration = mode === 'FLIP_FACE' ? 800 : 1500;

    if (rollTimerRef.current) clearTimeout(rollTimerRef.current);

    rollTimerRef.current = setTimeout(() => {
      if (mode === 'NORMAL') {
        const max = parseInt(diceType.replace('D', ''));
        const face = rollSingle(max);
        const f = { D8: null, D10: null, D12: null };
        const v = { D8: null, D10: null, D12: null };
        if (diceType === 'D8') { f.D8 = face; v.D8 = getGameValue('D8', face); }
        if (diceType === 'D10') { f.D10 = face; v.D10 = getGameValue('D10', face); }
        if (diceType === 'D12') { f.D12 = face; v.D12 = getGameValue('D12', face); }
        setResult({ type: 'NORMAL', faces: f, values: v });
      } 
      else if (mode === 'ADD_DICE') {
        const others = ['D8', 'D10', 'D12'].filter(t => t !== diceType);
        const type1 = others.at(0);
        const type2 = others.at(1);
        const face1 = rollSingle(parseInt(type1.replace('D', '')));
        const face2 = rollSingle(parseInt(type2.replace('D', '')));
        
        setResult(prevResult => {
          const faces = { D8: prevResult?.faces?.D8, D10: prevResult?.faces?.D10, D12: prevResult?.faces?.D12 };
          if (type1 === 'D8') faces.D8 = face1;
          if (type1 === 'D10') faces.D10 = face1;
          if (type1 === 'D12') faces.D12 = face1;
          if (type2 === 'D8') faces.D8 = face2;
          if (type2 === 'D10') faces.D10 = face2;
          if (type2 === 'D12') faces.D12 = face2;

          const values = {
            D8: faces.D8 ? getGameValue('D8', faces.D8) : null,
            D10: faces.D10 ? getGameValue('D10', faces.D10) : null,
            D12: faces.D12 ? getGameValue('D12', faces.D12) : null
          };

          let best = -99;
          Object.values(values).forEach(v => { if (v !== null && v > best) best = v; });

          let special = null;
          const vArr = Object.values(values).filter(v => v !== null);
          const isSuite = (vArr.includes(3) && vArr.includes(4) && vArr.includes(5)) || 
                          (vArr.includes(4) && vArr.includes(5) && vArr.includes(6)) ||
                          (vArr.includes(5) && vArr.includes(6) && vArr.includes(7)) ||
                          (vArr.includes(6) && vArr.includes(7) && vArr.includes(8));
          const isTriple = vArr.length === 3 && vArr === vArr && vArr === vArr;
          
          if (isTriple) special = "Triple !";
          else if (isSuite) special = "Suite parfaite !";

          return { type: 'ADD_DICE', faces, values, best, special };
        });
      } 
      else if (mode === 'FLIP_FACE') {
        setResult(prevResult => {
          const currentFace = prevResult?.faces?.[diceType];
          if (!currentFace) return prevResult;
          const bestFace = getBestAdjacent(diceType, currentFace);
          const f = { ...prevResult.faces, [diceType]: bestFace };
          const v = { ...prevResult.values, [diceType]: getGameValue(diceType, bestFace) };
          return { type: 'FLIP_FACE', faces: f, values: v, oldVal: getGameValue(diceType, currentFace) };
        });
      }
      setIsRolling(false);
      setRollingMode(null);
    }, duration);
  };

  const activeDice = (result?.type === 'ADD_DICE' || rollingMode === 'ADD_DICE') ? ['D8', 'D10', 'D12'] : [diceType];

  const getDiceConfig = (type) => {
    if (type === 'D10') return { color: 'text-rose-600', fill: 'rgba(225, 29, 72, 0.2)' };
    if (type === 'D12') return { color: 'text-indigo-600', fill: 'rgba(79, 70, 229, 0.2)' };
    return { color: 'text-amber-500', fill: 'rgba(245, 158, 11, 0.2)' };
  };

  const renderDie = (type) => {
    const config = getDiceConfig(type);
    const face = result?.faces?.[type];
    const val = result?.values?.[type];
    
    const isNegative = val !== null && val !== undefined && val < 0;
    const isMax = face === parseInt(type.replace('D', '')); 
    const isWinner = result?.type === 'ADD_DICE' && val === result.best;
    
    const opacityClass = (result?.type === 'ADD_DICE' && !isWinner && !result.special) ? 'opacity-40 scale-90' : 'scale-110 z-10 dice-glow';
    
    return (
      <div className={`relative flex items-center justify-center transition-all duration-500 ${isRolling ? 'animate-spin-fast blur-sm scale-75' : opacityClass}`}>
        <svg width="120" height="120" viewBox="0 0 100 100" className={config.color} style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }}>
          <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill={config.fill} stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <polygon points="50,5 50,95" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
          <polygon points="5,25 95,75" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
          <polygon points="5,75 95,25" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        </svg>
        {!isRolling && val !== null && val !== undefined && (
          <span className={`absolute font-serif font-black z-20 ${isNegative ? 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : isMax ? 'text-yellow-300 drop-shadow-[0_0_12px_rgba(253,224,71,0.9)]' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`} style={{ fontSize: '2.5rem' }}>
            {val}
          </span>
        )}
        {isMax && !isRolling && <Sparkles className="absolute -top-4 -right-4 text-yellow-300 animate-pulse z-30" size={32} />}
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes spin-fast { 0% { transform: rotate(0deg) scale(0.8); } 100% { transform: rotate(1080deg) scale(0.8); } }
          .animate-spin-fast { animation: spin-fast 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
          .dice-glow { filter: drop-shadow(0 0 20px rgba(255,255,255,0.2)); }
          .felt-table { background-color: #064e3b; background-image: radial-gradient(circle, #065f46 0%, #022c22 100%); }
          @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
        `}
      </style>

      {/* 1. LE BOUTON D'OUVERTURE (Le petit dé flottant) */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-24 right-6 bg-stone-900 hover:bg-stone-800 text-amber-400 p-4 rounded-full border-2 border-amber-600/50 hover:scale-110 transition-all z-40 group" style={{ boxShadow: '0 0 20px rgba(251,191,36,0.3)' }} title="Piste de Lancer">
          <Dices size={28} className="group-hover:animate-spin" />
        </button>
      )}

      {/* 2. LE RIDEAU OPAQUE (La fenêtre globale) */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 p-4 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Le Bouton Fermer */}
        <button onClick={() => { setIsOpen(false); handleClear(); }} className="absolute top-6 right-6 text-stone-400 hover:text-amber-400 bg-stone-900 border border-stone-700 rounded-full p-2 transition-all z-50 hover:scale-110">
          <X size={24} />
        </button>

        {/* 3. LE TAPIS VERT (Limites strictes de l'espace de jeu) */}
        <div className="relative w-full max-w-4xl felt-table overflow-hidden shadow-2xl" style={{ height: '85vh', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 16px #451a03, inset 0 0 20px 20px rgba(0,0,0,0.8)' }}>
          
          {/* ✨ 4. LE NOUVEAU SAS D'ISOLATION WEBGL (NOUVEL ID UNIQUE) ✨ */}
          <div id="casino-dice-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}></div>

          {/* 5. COUCHE D'INTERFACE UTILISATEUR (Par-dessus les dés) */}
          <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', pointerEvents: 'none' }}>
            
            {/* Header (Choix de dés / Messages magiques) */}
            <div className={`h-20 flex items-center justify-center w-full ${isOpen ? 'pointer-events-auto' : ''}`}>
              {!result || result.type === 'NORMAL' ? (
                <div className="flex gap-4">
                  <button onClick={() => { setDiceType('D8'); handleClear(); }} className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif font-bold text-lg border-2 transition-all ${diceType === 'D8' ? 'bg-amber-600 border-amber-400 text-white' : 'bg-stone-800 border-stone-600 text-stone-400 hover:text-white'}`} style={diceType === 'D8' ? { boxShadow: '0 0 15px rgba(245,158,11,0.5)' } : {}}>
                    <Triangle size={18} /> D8 Prudent
                  </button>
                  <button onClick={() => { setDiceType('D10'); handleClear(); }} className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif font-bold text-lg border-2 transition-all ${diceType === 'D10' ? 'bg-rose-700 border-rose-400 text-white' : 'bg-stone-800 border-stone-600 text-stone-400 hover:text-white'}`} style={diceType === 'D10' ? { boxShadow: '0 0 15px rgba(225,29,72,0.5)' } : {}}>
                    <Zap size={18} /> D10 Aventureux
                  </button>
                  <button onClick={() => { setDiceType('D12'); handleClear(); }} className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif font-bold text-lg border-2 transition-all ${diceType === 'D12' ? 'bg-indigo-700 border-indigo-400 text-white' : 'bg-stone-800 border-stone-600 text-stone-400 hover:text-white'}`} style={diceType === 'D12' ? { boxShadow: '0 0 15px rgba(79,70,229,0.5)' } : {}}>
                    <ShieldAlert size={18} /> D12 Panache
                  </button>
                </div>
              ) : result.type === 'FLIP_FACE' ? (
                <div className="bg-fuchsia-900/80 border border-fuchsia-400 px-8 py-2 rounded-full text-fuchsia-200 font-serif font-bold text-xl animate-fade-in-up">
                  Magie ! Le {result.oldVal} s'est transformé en <span className="text-white text-2xl">{diceType === 'D8' ? result.values.D8 : (diceType === 'D10' ? result.values.D10 : result.values.D12)}</span> !
                </div>
              ) : result.special ? (
                <div className={`bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent px-16 py-2 border-y border-yellow-400/50 animate-fade-in-up ${isOpen ? 'pointer-events-auto' : ''}`}>
                  {/* ✨ L'INCISION 2 : Le commentaire est maintenant bien au chaud à l'intérieur de la div ! */}
                  <h2 className="text-3xl font-black font-serif text-yellow-300 tracking-widest uppercase" style={{ filter: 'drop-shadow(0 0 10px rgba(253,224,71,0.8))' }}>⭐ CRITIQUE : {result.special} ⭐</h2>
                </div>
              ) : null}
            </div>
			
            {/* Zone Centrale : L'Illusion 2.5D de secours / Animation texte */}
            <div className="flex-1 w-full flex items-center justify-center gap-12 relative pointer-events-none" style={{ perspective: '1000px' }}>
              {!result && !isRolling && (
                <div className="text-stone-400 font-serif italic text-2xl opacity-50 z-10">Prêt à lancer...</div>
              )}

              {/* Si la vraie 3D est inactive ou qu'on est en train de tricher */}
              {(!use3DDice || rollingMode === 'ADD_DICE' || rollingMode === 'FLIP_FACE' || result?.type === 'ADD_DICE' || result?.type === 'FLIP_FACE') && (
                activeDice.map((type) => (
                  <div key={type} className="relative w-40 h-40 flex items-center justify-center z-10">
                    {renderDie(type)}
                  </div>
                ))
              )}
            </div>

            {/* Footer (Boutons d'Action) */}
            {/* ✨ L'INCISION 3 : Les boutons du bas lâchent la souris quand on ferme ! */}
            <div className={`w-full flex flex-col items-center gap-3 mt-4 ${isOpen ? 'pointer-events-auto' : ''}`}>
              {!result && (
                <button onClick={() => executeAction('NORMAL')} disabled={isRolling}
                  className="text-white font-bold font-serif text-2xl px-20 py-5 rounded-2xl transition-all bg-gradient-to-b from-stone-600 to-stone-800 border-t border-white/20 hover:scale-105" style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.4)' }}>
                  {isRolling ? '...' : `Lancer le ${diceType}`}
                </button>
              )}

              {result && result.type === 'NORMAL' && !isRolling && (
                <div className="flex flex-col gap-3 w-full max-w-2xl animate-fade-in-up">
                  <div className="flex gap-3">
                    <button onClick={() => executeAction('ADD_DICE')}
                      className="flex-1 group relative overflow-hidden text-white font-bold font-serif text-lg py-4 rounded-xl transition-all bg-gradient-to-b from-fuchsia-600 to-purple-900 border border-fuchsia-400 flex flex-col items-center justify-center gap-1 hover:scale-105" style={{ boxShadow: '0 6px 0 #4c1d95' }}>
                      <div className="absolute inset-0 animate-[shimmer_2s_infinite] mix-blend-overlay" style={{ backgroundSize: '250% 250%', backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)' }}></div>
                      <div className="flex items-center gap-2"><Crown size={20} className="text-yellow-300" /> Tricher (1 PT)</div>
                      <span className="text-xs text-fuchsia-300 font-sans font-normal">Lancer les 2 autres dés</span>
                    </button>

                    <button onClick={() => executeAction('FLIP_FACE')}
                      className="flex-1 text-white font-bold font-serif text-lg py-4 rounded-xl transition-all bg-gradient-to-b from-amber-600 to-amber-900 border border-amber-400 flex flex-col items-center justify-center gap-1 hover:scale-105" style={{ boxShadow: '0 6px 0 #b45309' }}>
                      <div className="flex items-center gap-2"><RefreshCcw size={20} className="text-yellow-100" /> Tricher (2 PTS)</div>
                      <span className="text-xs text-amber-200 font-sans font-normal">Tourner sur la face adjacente</span>
                    </button>
                  </div>
                  <button onClick={() => handleClear()} className="text-stone-400 hover:text-white font-serif text-sm py-2 underline transition-colors">
                    Accepter ce résultat (Nouveau jet)
                  </button>
                </div>
              )}

              {result && (result.type === 'ADD_DICE' || result.type === 'FLIP_FACE') && !isRolling && (
                <button onClick={() => handleClear()} className="mt-4 text-white font-bold font-serif text-xl px-12 py-3 rounded-xl transition-all bg-stone-700 hover:bg-stone-600 border border-stone-500 hover:scale-105" style={{ boxShadow: '0 5px 0 rgba(0,0,0,0.5)' }}>
                  Nouveau lancer
                </button>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
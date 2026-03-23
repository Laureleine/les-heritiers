// 11.4.0
// 14.3.0 // 14.9.0

import React, { useState, useEffect, useRef } from 'react';
import { X, Dices, Sparkles, Triangle, ShieldAlert, Zap, Crown, RefreshCcw } from 'lucide-react';
import DiceBox from '@3d-dice/dice-box';

// 🛡️ PARADE ANTI-BUG : On utilise du texte converti en tableau 
const parseAdj = (str) => str.split(',').map(n => parseInt(n.trim()));

// 🎲 CARTOGRAPHIE PHYSIQUE EXACTE DES DÉS
const ADJACENCIES = {
  D8: {
    1: parseAdj("2,3,4"), 2: parseAdj("1,3,5"), 3: parseAdj("1,2,6"), 4: parseAdj("1,5,6"),
    // ✨ FIX : Rétablissement de la réalité physique d'un D8 (Faces max : 8)
    5: parseAdj("2,4,7"), 6: parseAdj("3,4,8"), 7: parseAdj("5,6,8"), 8: parseAdj("5,6,7")
  },
  D10: {
    1: parseAdj("2,3,4,5"), 2: parseAdj("1,3,6,7"), 3: parseAdj("1,2,4,8"), 4: parseAdj("1,3,5,9"),
    5: parseAdj("1,4,6,10"), 6: parseAdj("2,5,7,10"), 7: parseAdj("2,6,8,10"), 8: parseAdj("3,7,9,10"),
    // ✨ FIX : Rétablissement de la réalité physique d'un D10 (Faces max : 10)
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

  // ✨ MÉMOIRE DU MOTEUR 3D WEBGL
  const diceBoxRef = useRef(null);
  const [is3DReady, setIs3DReady] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    const containerExists = document.getElementById("dice-canvas-container");

    // 🛡️ Vérifier que WebGL est disponible
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn("WebGL non disponible, dés 3D désactivés");
      return;
    }

    if (use3DDice && containerExists && !diceBoxRef.current) {
      try {
        diceBoxRef.current = new DiceBox("#dice-canvas-container", {
          assetPath: '/assets/dice-box/', 
		  theme: diceTheme === 'sang' ? 'rust' : diceTheme === 'améthyste' ? 'purple' : 'default',
          themeColor: "#b45309",
          scale: 6,
          throwForce: 6,
          spinForce: 6
        });

        diceBoxRef.current.init()
          .then(() => setIs3DReady(true))
          .catch(e => {
            console.error("Init 3D échouée :", e);
            diceBoxRef.current = null; // 🛡️ Reset pour éviter un état corrompu
          });
      } catch (e) {
        console.error("Création DiceBox échouée :", e);
        diceBoxRef.current = null;
      }
    }
  }, 150);

  return () => clearTimeout(timer);
}, [use3DDice, diceTheme]);

  // Fonction pour nettoyer la table
  const handleClear = () => {
    setResult(null);
    if (diceBoxRef.current) diceBoxRef.current.clear();
  };

  // Moteur de calcul des valeurs officielles (-3 et -5)
  const getGameValue = (type, face) => {
    if (type === 'D10' && face === 1) return -3;
    if (type === 'D12' && (face === 1 || face === 2)) return -5;
    return face;
  };

  const rollSingle = (max) => Math.floor(Math.random() * max) + 1;

  // Trouver la meilleure face adjacente
  const getBestAdjacent = (type, currentFace) => {
    const adj = ADJACENCIES[type]?.[currentFace];
    if (!adj) return currentFace;
    let bestVal = -99;
    let bestFace = currentFace;
    adj.forEach(face => {
      const val = getGameValue(type, face);
      if (val > bestVal) {
        bestVal = val;
        bestFace = face;
      }
    });
    return bestFace;
  };

  // MOTEUR D'ACTION HYBRIDE (WebGL 3D vs CSS 2.5D)
  const executeAction = async (mode) => {
    setRollingMode(mode);
    setIsRolling(true);

      // 🎲 1. LE VRAI MOTEUR 3D (Seulement pour un jet Normal si l'option est cochée)
      if (use3DDice && is3DReady && mode === 'NORMAL') {
        handleClear();
        try {
          await new Promise(resolve => setTimeout(resolve, 999));
          // ✨ FIX : Le retour des Backticks salvateurs !
        const results = await diceBoxRef.current.roll(`1${diceType.toLowerCase()}`);
        const face = results.at(0).value; // 🛡️ Remplacement sécurisé des crochets
        const f = { D8: null, D10: null, D12: null };
        const v = { D8: null, D10: null, D12: null };
        
        if (diceType === 'D8') { f.D8 = face; v.D8 = getGameValue('D8', face); }
        if (diceType === 'D10') { f.D10 = face; v.D10 = getGameValue('D10', face); }
        if (diceType === 'D12') { f.D12 = face; v.D12 = getGameValue('D12', face); }

        setResult({ type: 'NORMAL', faces: f, values: v });
        setIsRolling(false);
        setRollingMode(null);
        return; 
      } catch (e) {
        console.error("La physique 3D a échoué, bascule sur l'illusion :", e);
      }
    }

    // ✨ 2. LA MAGIE 2.5D (Triche, ou Option 3D désactivée)
    if (use3DDice && diceBoxRef.current && mode !== 'NORMAL') {
      diceBoxRef.current.clear(); 
    }

      const duration = mode === 'FLIP_FACE' ? 800 : 1500;

      // ✨ FIX : On purge tout timer fantôme avant d'en lancer un nouveau
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

          // ✨ FIX : Utilisation du callback prevResult pour éviter la Stale Closure !
          setResult(prevResult => {
            const faces = { D8: prevResult?.faces?.D8, D10: prevResult?.faces?.D10, D12: prevResult?.faces?.D12 };
            
            if (type1 === 'D8') faces.D8 = face1;
            if (type1 === 'D10') faces.D10 = face1;
            if (type1 === 'D12') faces.D12 = face1;
            if (type2 === 'D8') faces.D8 = face2;
            if (type2 === 'D10') faces.D10 = face2;
            if (type2 === 'D12') faces.D12 = face2;

            const values = {
              D8: getGameValue('D8', faces.D8),
              D10: getGameValue('D10', faces.D10),
              D12: getGameValue('D12', faces.D12)
            };

            const best = Math.max(values.D8, values.D10, values.D12);
            let special = null;

            if (values.D8 > 0 && values.D10 > 0 && values.D12 > 0) {
              if (values.D8 === values.D10 && values.D10 === values.D12) {
                special = 'TRIPLE';
              } else {
                const getVal = (t) => t === 'D8' ? values.D8 : (t === 'D10' ? values.D10 : values.D12);
                const sorted = ['D8', 'D10', 'D12'].map(getVal).sort((a, b) => a - b);
                const s1 = sorted.at(0);
                const s2 = sorted.at(1);
                const s3 = sorted.at(2);

                if (s1 + 1 === s2 && s2 + 1 === s3) {
                  special = 'SUITE';
                }
              }
            }
            return { type: 'ADD_DICE', faces, values, best, special };
          });
        }
        else if (mode === 'FLIP_FACE') {
          // ✨ FIX : Callback prevResult ici aussi !
          setResult(prevResult => {
            let oldFace = 0;
            if (diceType === 'D8') oldFace = prevResult?.faces?.D8;
            if (diceType === 'D10') oldFace = prevResult?.faces?.D10;
            if (diceType === 'D12') oldFace = prevResult?.faces?.D12;

            const newFace = getBestAdjacent(diceType, oldFace);
            const f = { D8: prevResult?.faces?.D8, D10: prevResult?.faces?.D10, D12: prevResult?.faces?.D12 };
            const v = { D8: prevResult?.values?.D8, D10: prevResult?.values?.D10, D12: prevResult?.values?.D12 };

            let oldVal = 0;
            if (diceType === 'D8') { oldVal = v.D8; f.D8 = newFace; v.D8 = getGameValue('D8', newFace); }
            if (diceType === 'D10') { oldVal = v.D10; f.D10 = newFace; v.D10 = getGameValue('D10', newFace); }
            if (diceType === 'D12') { oldVal = v.D12; f.D12 = newFace; v.D12 = getGameValue('D12', newFace); }

            return { type: 'FLIP_FACE', faces: f, values: v, oldVal: oldVal };
          });
        }

        setIsRolling(false);
        setRollingMode(null);
      }, duration);
    };
	
  const getDiceConfig = (type) => {
    if (type === 'D10') return { color: 'text-rose-600', fill: 'rgba(225, 29, 72, 0.2)' };
    if (type === 'D12') return { color: 'text-indigo-600', fill: 'rgba(79, 70, 229, 0.2)' };
    return { color: 'text-amber-500', fill: 'rgba(245, 158, 11, 0.2)' };
  };

  const renderDie = (type) => {
    const config = getDiceConfig(type);
    const face = result?.faces?.[type]; // Alternative plus propre si tu préfères
    const val = result?.values?.[type];

    // ✨ FIX : Sécurité anti-falsy sur le null
    const isNegative = val !== null && val !== undefined && val < 0;
    const isMax = face === parseInt(type.replace('D', ''));    const isWinner = result?.type === 'ADD_DICE' && val === result.best;
    const opacityClass = (result?.type === 'ADD_DICE' && !isWinner && !result.special) ? 'opacity-40 scale-90' : 'scale-110 z-10 dice-glow';

    let animClass = '';
    if (isRolling) {
      if (rollingMode === 'NORMAL' && type === diceType) animClass = 'animate-roll';
      if (rollingMode === 'ADD_DICE' && type !== diceType) animClass = 'animate-roll';
      if (rollingMode === 'FLIP_FACE' && type === diceType) animClass = 'animate-flip';
    }

    const showText = val !== null && val !== undefined && (!isRolling || rollingMode === 'FLIP_FACE');

    return (
      <div key={type} className={`relative flex items-center justify-center transition-all duration-500 ${config.color} ${val !== null && val !== undefined ? opacityClass : ''}`}>
        {isRolling && animClass === 'animate-roll' && <div className="absolute w-20 h-10 bg-black/60 blur-md animate-shadow" style={{ borderRadius: '50%' }}></div>}
        
        <div className={`relative flex items-center justify-center ${animClass}`}>
          {type === 'D8' && (
            <svg viewBox="0 0 100 100" className="w-36 h-36 drop-shadow-2xl" fill="currentColor">
              <polygon points="50,5 95,50 50,95 5,50" stroke="#fef3c7" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="25,25 75,25 95,50 75,75 25,75 5,50" fill={config.fill} />
              <line x1="5" y1="50" x2="95" y2="50" stroke="#fef3c7" strokeWidth="1"/>
              <line x1="50" y1="5" x2="50" y2="95" stroke="#fef3c7" strokeWidth="1"/>
            </svg>
          )}
          {type === 'D10' && (
            <svg viewBox="0 0 100 100" className="w-36 h-36 drop-shadow-2xl" fill="currentColor">
              <polygon points="50,5 90,40 50,95 10,40" stroke="#fef3c7" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,20 70,45 50,80 30,45" fill={config.fill} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </svg>
          )}
          {type === 'D12' && (
            <svg viewBox="0 0 100 100" className="w-36 h-36 drop-shadow-2xl" fill="currentColor">
              <polygon points="50,5 95,38 78,95 22,95 5,38" stroke="#fef3c7" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="50,25 75,45 65,75 35,75 25,45" fill={config.fill} stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </svg>
          )}
          
          {showText && (
            <span className={`absolute text-5xl font-black font-serif z-10 ${isNegative ? 'text-red-500 animate-pulse' : (isWinner || isMax || result?.special) ? 'text-yellow-300' : 'text-white'}`} style={{ filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.8))' }}>
              {val}
            </span>
          )}
          
          {(result?.type === 'ADD_DICE') && (
            <div className="absolute -bottom-8 font-serif text-sm font-bold text-stone-400 tracking-widest">{type}</div>
          )}
          
          {isMax && showText && <Sparkles size={60} className="absolute text-yellow-300 animate-ping opacity-70" />}
        </div>
      </div>
    );
  };

  const activeDice = result?.type === 'ADD_DICE' ? ['D8', 'D10', 'D12'] : [diceType];

  return (
    <>
      <style>
        {`
          @keyframes roll3D {
            0% { transform: translate(-300px, -200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.2); opacity: 0; filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
            20% { transform: translate(-100px, -50px) rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(1.2); opacity: 1; filter: drop-shadow(20px 20px 10px rgba(0,0,0,0.5)); }
            40% { transform: translate(50px, 100px) rotateX(720deg) rotateY(360deg) rotateZ(180deg) scale(0.8); filter: drop-shadow(5px 5px 2px rgba(0,0,0,0.8)); }
            60% { transform: translate(80px, 30px) rotateX(900deg) rotateY(540deg) rotateZ(270deg) scale(1.05); filter: drop-shadow(15px 15px 8px rgba(0,0,0,0.4)); }
            80% { transform: translate(20px, 10px) rotateX(1080deg) rotateY(650deg) rotateZ(320deg) scale(0.95); filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.6)); }
            100% { transform: translate(0px, 0px) rotateX(1440deg) rotateY(720deg) rotateZ(360deg) scale(1); filter: drop-shadow(0 10px 15px currentColor); }
          }
          .animate-roll { animation: roll3D 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
          
          @keyframes flipDie {
            0% { transform: scale(1) rotateY(0deg) translateY(0px); filter: brightness(1); }
            50% { transform: scale(1.3) rotateY(90deg) translateY(-30px); filter: brightness(2) drop-shadow(0 0 20px #fbbf24); }
            100% { transform: scale(1) rotateY(180deg) translateY(0px); filter: brightness(1); }
          }
          .animate-flip { animation: flipDie 0.8s ease-in-out forwards; }

          @keyframes shadowBounce {
            0% { transform: translate(-300px, 100px) scale(0.2); opacity: 0; }
            20% { transform: translate(-150px, 120px) scale(0.8); opacity: 0.6; }
            40% { transform: translate(0px, 100px) scale(0.4); opacity: 0.2; }
            60% { transform: translate(100px, 130px) scale(1); opacity: 0.7; }
            80% { transform: translate(50px, 110px) scale(0.7); opacity: 0.4; }
            100% { transform: translate(0px, 120px) scale(1); opacity: 0; }
          }
          .animate-shadow { animation: shadowBounce 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }

          .dice-glow { animation: diceGlow 2s infinite ease-in-out; }
          @keyframes diceGlow {
            0% { filter: drop-shadow(0 0 10px currentColor); }
            50% { filter: drop-shadow(0 0 30px currentColor); }
            100% { filter: drop-shadow(0 0 10px currentColor); }
          }
          .felt-table { background: radial-gradient(circle at center, #064e3b 0%, #022c22 100%); box-shadow: inset 0 0 80px rgba(0,0,0,0.9); }
        `}
      </style>

      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-24 right-6 bg-stone-900 hover:bg-stone-800 text-amber-400 p-4 rounded-full border-2 border-amber-600/50 hover:scale-110 transition-all z-40 group" style={{ boxShadow: '0 0 20px rgba(251,191,36,0.3)' }} title="Piste de Lancer">
          <Dices size={28} className="group-hover:animate-spin" />
        </button>
      )}

      {/* Le conteneur reste dans le DOM (opacity-0) pour éviter de recharger WebGL à chaque ouverture */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 p-4 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        <button onClick={() => { setIsOpen(false); handleClear(); }} className="absolute top-6 right-6 text-stone-400 hover:text-amber-400 bg-stone-900 border border-stone-700 rounded-full p-2 transition-all z-50 hover:scale-110">
          <X size={24} />
        </button>

        <div className="relative w-full max-w-4xl felt-table flex flex-col items-center p-8 overflow-hidden" style={{ height: '85vh', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 16px #451a03, inset 0 0 20px 20px rgba(0,0,0,0.8)' }}>
          
          <div className="h-20 flex items-center justify-center z-20 w-full mt-2">
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
              <div className="bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent px-16 py-2 border-y border-yellow-400/50 animate-fade-in-up">
                <h2 className="text-3xl font-black font-serif text-yellow-300 tracking-widest uppercase" style={{ filter: 'drop-shadow(0 0 10px rgba(253,224,71,0.8))' }}>⭐ CRITIQUE : {result.special} ⭐</h2>
              </div>
            ) : null}
          </div>

          <div className="flex-1 w-full flex items-center justify-center gap-12 relative" style={{ perspective: '1000px' }}>
            {!result && !isRolling && (
              <div className="text-stone-400 font-serif italic text-2xl opacity-50 z-10">Prêt à lancer...</div>
            )}

            {/* ✨ LA TOILE 3D PHYSIQUE (Restaurée avec son ID Texte) ✨ */}
            <div id="dice-canvas-container" className="absolute inset-0 pointer-events-none z-0"></div>

            {/* 🎭 L'ILLUSION 2.5D (Masquée si la vraie 3D tourne sans triche) */}
            {(!use3DDice || rollingMode === 'ADD_DICE' || rollingMode === 'FLIP_FACE' || result?.type === 'ADD_DICE' || result?.type === 'FLIP_FACE') && (
              activeDice.map((type) => (
                <div key={type} className="relative w-40 h-40 flex items-center justify-center z-10">
                  {renderDie(type)}
                </div>
              ))
            )}
          </div>

          <div className="z-20 w-full flex flex-col items-center gap-3 mt-4">
            {!result && (
              <button onClick={() => executeAction('NORMAL')} disabled={isRolling}
                className="text-white font-bold font-serif text-2xl px-20 py-5 rounded-2xl transition-all bg-gradient-to-b from-stone-600 to-stone-800 border-t border-white/20" style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.4)' }}>
                {isRolling ? '...' : `Lancer le ${diceType}`}
              </button>
            )}

            {result && result.type === 'NORMAL' && !isRolling && (
              <div className="flex flex-col gap-3 w-full max-w-2xl animate-fade-in-up">
                <div className="flex gap-3">
                  <button onClick={() => executeAction('ADD_DICE')}
                    className="flex-1 group relative overflow-hidden text-white font-bold font-serif text-lg py-4 rounded-xl transition-all bg-gradient-to-b from-fuchsia-600 to-purple-900 border border-fuchsia-400 flex flex-col items-center justify-center gap-1" style={{ boxShadow: '0 6px 0 #4c1d95' }}>
                    <div className="absolute inset-0 animate-[shimmer_2s_infinite] mix-blend-overlay" style={{ backgroundSize: '250% 250%', backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)' }}></div>
                    <div className="flex items-center gap-2"><Crown size={20} className="text-yellow-300" /> Tricher (1 PT)</div>
                    <span className="text-xs text-fuchsia-300 font-sans font-normal">Lancer les 2 autres dés</span>
                  </button>
                  
                  <button onClick={() => executeAction('FLIP_FACE')}
                    className="flex-1 text-white font-bold font-serif text-lg py-4 rounded-xl transition-all bg-gradient-to-b from-amber-600 to-amber-900 border border-amber-400 flex flex-col items-center justify-center gap-1" style={{ boxShadow: '0 6px 0 #b45309' }}>
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
              <button onClick={() => handleClear()} className="mt-4 text-white font-bold font-serif text-xl px-12 py-3 rounded-xl transition-all bg-stone-700 hover:bg-stone-600 border border-stone-500" style={{ boxShadow: '0 5px 0 rgba(0,0,0,0.5)' }}>
                Nouveau lancer
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
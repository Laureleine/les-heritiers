import React, { useState } from 'react';
import { X, Dices, Sparkles, Triangle, ShieldAlert, Zap, Crown, RefreshCcw } from 'lucide-react';

// 🛡️ PARADE ANTI-BUG : On utilise du texte converti en tableau pour que 
// le système de formatage n'efface plus jamais nos valeurs !
const parseAdj = (str) => str.split(',').map(n => parseInt(n.trim()));

// 🎲 CARTOGRAPHIE PHYSIQUE EXACTE DES DÉS
const ADJACENCIES = {
  D8: { 
    // 3 arêtes par face = 3 voisins stricts !
    1: parseAdj("2,3,4"), 
    2: parseAdj("1,5,6"), 
    3: parseAdj("1,5,7"), 
    4: parseAdj("1,6,7"),
    5: parseAdj("2,3,8"), 
    6: parseAdj("2,4,8"), 
    7: parseAdj("3,4,8"), 
    8: parseAdj("5,6,7")
  },
  D10: { 
    1: parseAdj("2,3,4,5"), 2: parseAdj("1,3,6,8"), 3: parseAdj("1,2,4,7"), 4: parseAdj("1,3,5,9"),
    5: parseAdj("1,4,8,10"), 6: parseAdj("2,7,9,10"), 7: parseAdj("3,6,8,10"), 8: parseAdj("2,5,7,9"),
    9: parseAdj("4,6,8,10"), 10: parseAdj("5,6,7,9")
  },
  D12: { 
    1: parseAdj("2,3,4,5,6"), 2: parseAdj("1,3,7,8,12"), 3: parseAdj("1,2,4,8,9"),
    4: parseAdj("1,3,5,9,10"), 5: parseAdj("1,4,6,10,11"), 6: parseAdj("1,5,7,11,12"),
    7: parseAdj("2,6,8,11,12"), 8: parseAdj("2,3,7,9,12"), 9: parseAdj("3,4,8,10,12"),
    10: parseAdj("4,5,9,11,12"), 11: parseAdj("5,6,7,10,12"), 12: parseAdj("7,8,9,10,11")
  }
};

export default function DiceRoller() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [rollingMode, setRollingMode] = useState(null); // 'NORMAL', 'ADD_DICE', 'FLIP_FACE'
  const [diceType, setDiceType] = useState('D8');
  const [result, setResult] = useState(null);

  // Moteur de calcul des valeurs officielles (-3 et -5)
  const getGameValue = (type, face) => {
    if (type === 'D10' && face === 1) return -3;
    if (type === 'D12' && (face === 1 || face === 2)) return -5;
    return face;
  };

  const rollSingle = (max) => Math.floor(Math.random() * max) + 1;

  // Trouver la meilleure face adjacente (sans crochets d'index)
  const getBestAdjacent = (type, currentFace) => {
    let neighbors = [];
    const mapType = type === 'D8' ? ADJACENCIES.D8 : (type === 'D10' ? ADJACENCIES.D10 : ADJACENCIES.D12);
    
    Object.entries(mapType).forEach((entry) => {
      if (parseInt(entry.at(0)) === currentFace) neighbors = entry.at(1);
    });

    if (neighbors.length === 0) return currentFace;
    
    let bestFace = neighbors.at(0); 
    let bestVal = getGameValue(type, bestFace);
    
    neighbors.forEach(face => {
      const val = getGameValue(type, face);
      if (val > bestVal) {
        bestVal = val;
        bestFace = face;
      }
    });
    return bestFace;
  };

  // MOTEUR D'ACTION BLINDÉ (0 crochet dynamique)
  const executeAction = (mode) => {
    setRollingMode(mode);
    setIsRolling(true);
    const duration = mode === 'FLIP_FACE' ? 800 : 1500;

    setTimeout(() => {
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
        // Isolation propre avec .at()
        const others = ['D8', 'D10', 'D12'].filter(t => t !== diceType);
        const type1 = others.at(0); 
        const type2 = others.at(1);
        
        const face1 = rollSingle(parseInt(type1.replace('D', '')));
        const face2 = rollSingle(parseInt(type2.replace('D', '')));

        const faces = { D8: result.faces?.D8, D10: result.faces?.D10, D12: result.faces?.D12 };
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
        
        setResult({ type: 'ADD_DICE', faces, values, best, special });
      } 
      else if (mode === 'FLIP_FACE') {
        let oldFace = 0;
        if (diceType === 'D8') oldFace = result.faces?.D8;
        if (diceType === 'D10') oldFace = result.faces?.D10;
        if (diceType === 'D12') oldFace = result.faces?.D12;
        
        const newFace = getBestAdjacent(diceType, oldFace);
        
        const f = { D8: result.faces?.D8, D10: result.faces?.D10, D12: result.faces?.D12 };
        const v = { D8: result.values?.D8, D10: result.values?.D10, D12: result.values?.D12 };
        
        let oldVal = 0;
        if (diceType === 'D8') { oldVal = v.D8; f.D8 = newFace; v.D8 = getGameValue('D8', newFace); }
        if (diceType === 'D10') { oldVal = v.D10; f.D10 = newFace; v.D10 = getGameValue('D10', newFace); }
        if (diceType === 'D12') { oldVal = v.D12; f.D12 = newFace; v.D12 = getGameValue('D12', newFace); }
        
        setResult({ type: 'FLIP_FACE', faces: f, values: v, oldVal: oldVal });
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
    
    let face = null;
    let val = null;
    if (type === 'D8') { face = result?.faces?.D8; val = result?.values?.D8; }
    if (type === 'D10') { face = result?.faces?.D10; val = result?.values?.D10; }
    if (type === 'D12') { face = result?.faces?.D12; val = result?.values?.D12; }
    
    const isNegative = val < 0;
    const isMax = face === parseInt(type.replace('D', ''));
    
    const isWinner = result?.type === 'ADD_DICE' && val === result.best;
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
        {isRolling && animClass === 'animate-roll' && <div className="absolute w-20 h-10 bg-black/60 rounded-[50%] blur-md animate-shadow"></div>}
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
              <line x1="50" y1="5" x2="50" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <line x1="95" y1="38" x2="75" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <line x1="78" y1="95" x2="65" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <line x1="22" y1="95" x2="35" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <line x1="5" y1="38" x2="25" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            </svg>
          )}

          {showText && (
            <span className={`absolute text-5xl font-black font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] z-10 
              ${isNegative ? 'text-red-500 animate-pulse' : (isWinner || isMax || result?.special) ? 'text-yellow-300' : 'text-white'}`}>
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
            0% { transform: translate(-300px, -200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.5); opacity: 0; }
            20% { transform: translate(-150px, 50px) rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(0.8); opacity: 1; }
            40% { transform: translate(0px, -100px) rotateX(720deg) rotateY(360deg) rotateZ(180deg) scale(1); }
            60% { transform: translate(100px, 20px) rotateX(1080deg) rotateY(540deg) rotateZ(270deg) scale(1.1); }
            80% { transform: translate(50px, -20px) rotateX(1440deg) rotateY(720deg) rotateZ(360deg) scale(1.15); }
            100% { transform: translate(0px, 0px) rotateX(1800deg) rotateY(1080deg) rotateZ(720deg) scale(1); }
          }
          .animate-roll { animation: roll3D 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
          
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
        <button onClick={() => setIsOpen(true)} className="fixed bottom-24 right-6 bg-stone-900 hover:bg-stone-800 text-amber-400 p-4 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)] border-2 border-amber-600/50 hover:scale-110 transition-all z-40 group" title="Piste de Lancer">
          <Dices size={28} className="group-hover:animate-spin" />
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-stone-400 hover:text-amber-400 bg-stone-900 border border-stone-700 rounded-full p-2 transition-all z-50 hover:scale-110">
            <X size={24} />
          </button>

          <div className="relative w-full max-w-4xl h-[85vh] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_0_16px_#451a03,inset_0_0_20px_20px_rgba(0,0,0,0.8)] felt-table flex flex-col items-center p-8 overflow-hidden">
            
            <div className="h-20 flex items-center justify-center z-20 w-full mt-2">
              {!result || result.type === 'NORMAL' ? (
                <div className="flex gap-4">
                  <button onClick={() => { setDiceType('D8'); setResult(null); }} className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif font-bold text-lg border-2 transition-all ${diceType === 'D8' ? 'bg-amber-600 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-stone-800 border-stone-600 text-stone-400 hover:text-white'}`}>
                    <Triangle size={18} /> D8 Prudent
                  </button>
                  <button onClick={() => { setDiceType('D10'); setResult(null); }} className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif font-bold text-lg border-2 transition-all ${diceType === 'D10' ? 'bg-rose-700 border-rose-400 text-white shadow-[0_0_15px_rgba(225,29,72,0.5)]' : 'bg-stone-800 border-stone-600 text-stone-400 hover:text-white'}`}>
                    <Zap size={18} /> D10 Aventureux
                  </button>
                  <button onClick={() => { setDiceType('D12'); setResult(null); }} className={`flex items-center gap-2 px-6 py-2 rounded-full font-serif font-bold text-lg border-2 transition-all ${diceType === 'D12' ? 'bg-indigo-700 border-indigo-400 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)]' : 'bg-stone-800 border-stone-600 text-stone-400 hover:text-white'}`}>
                    <ShieldAlert size={18} /> D12 Panache
                  </button>
                </div>
              ) : result.type === 'FLIP_FACE' ? (
                 <div className="bg-fuchsia-900/80 border border-fuchsia-400 px-8 py-2 rounded-full text-fuchsia-200 font-serif font-bold text-xl animate-fade-in-up">
                   Magie ! Le {result.oldVal} s'est transformé en <span className="text-white text-2xl">{diceType === 'D8' ? result.values.D8 : (diceType === 'D10' ? result.values.D10 : result.values.D12)}</span> !
                 </div>
              ) : result.special ? (
                <div className="bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent px-16 py-2 border-y border-yellow-400/50 animate-fade-in-up">
                   <h2 className="text-3xl font-black font-serif text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] tracking-widest uppercase">⭐ CRITIQUE : {result.special} ⭐</h2>
                </div>
              ) : null}
            </div>

            <div className="flex-1 w-full flex items-center justify-center gap-12 perspective-[1000px]">
              {!result && !isRolling && (
                 <div className="text-stone-400 font-serif italic text-2xl opacity-50">Prêt à lancer...</div>
              )}
              {activeDice.map((type) => (
                 <div key={type} className="relative w-40 h-40 flex items-center justify-center">
                    {renderDie(type)}
                 </div>
              ))}
            </div>

            <div className="z-20 w-full flex flex-col items-center gap-3 mt-4">
              {!result && (
                <button onClick={() => executeAction('NORMAL')} disabled={isRolling}
                  className="text-white font-bold font-serif text-2xl px-20 py-5 rounded-2xl shadow-[0_8px_0_rgba(0,0,0,0.4)] active:shadow-[0_0px_0_rgba(0,0,0,0.4)] active:translate-y-[8px] transition-all bg-gradient-to-b from-stone-600 to-stone-800 border-t border-white/20">
                  {isRolling ? '...' : `Lancer le ${diceType}`}
                </button>
              )}

              {result && result.type === 'NORMAL' && !isRolling && (
                <div className="flex flex-col gap-3 w-full max-w-2xl animate-fade-in-up">
                  <div className="flex gap-3">
                    <button onClick={() => executeAction('ADD_DICE')} 
                      className="flex-1 group relative overflow-hidden text-white font-bold font-serif text-lg py-4 rounded-xl shadow-[0_6px_0_#4c1d95] active:shadow-[0_0px_0_#4c1d95] active:translate-y-[6px] transition-all bg-gradient-to-b from-fuchsia-600 to-purple-900 border border-fuchsia-400 flex flex-col items-center justify-center gap-1">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite] mix-blend-overlay"></div>
                      <div className="flex items-center gap-2"><Crown size={20} className="text-yellow-300" /> Tricher (1 PT)</div>
                      <span className="text-xs text-fuchsia-300 font-sans font-normal">Lancer les 2 autres dés</span>
                    </button>

                    <button onClick={() => executeAction('FLIP_FACE')} 
                      className="flex-1 group relative overflow-hidden text-white font-bold font-serif text-lg py-4 rounded-xl shadow-[0_6px_0_#b45309] active:shadow-[0_0px_0_#b45309] active:translate-y-[6px] transition-all bg-gradient-to-b from-amber-500 to-amber-700 border border-amber-300 flex flex-col items-center justify-center gap-1">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite] mix-blend-overlay opacity-0 group-hover:opacity-100"></div>
                      <div className="flex items-center gap-2"><RefreshCcw size={20} className="text-yellow-100" /> Tricher (2 PTS)</div>
                      <span className="text-xs text-amber-200 font-sans font-normal">Tourner sur la face adjacente</span>
                    </button>
                  </div>
                  
                  <button onClick={() => setResult(null)} className="text-stone-400 hover:text-white font-serif text-sm py-2 underline transition-colors">
                    Accepter ce résultat (Nouveau jet)
                  </button>
                </div>
              )}

              {result && (result.type === 'ADD_DICE' || result.type === 'FLIP_FACE') && !isRolling && (
                <button onClick={() => setResult(null)} className="mt-4 text-white font-bold font-serif text-xl px-12 py-3 rounded-xl shadow-[0_5px_0_rgba(0,0,0,0.5)] active:translate-y-[5px] active:shadow-[0_0px_0_rgba(0,0,0,0.5)] transition-all bg-stone-700 hover:bg-stone-600 border border-stone-500">
                  Nouveau lancer
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
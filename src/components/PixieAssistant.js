// src/components/PixieAssistant.js
// 9.2.0

import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import { getPixieAdvice } from '../utils/pixieBrain';

export default function PixieAssistant({ character, step }) {
  // Position initiale (en bas à droite)
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [isTalking, setIsTalking] = useState(false);
  const [message, setMessage] = useState("");

  // Le moteur de vol chaotique
  useEffect(() => {
    // Si elle parle, elle reste sage pour qu'on puisse la lire
    if (isTalking) return;

    const volerAuHasard = () => {
      // Elle vole n'importe où entre 5% et 85% de l'écran pour ne pas sortir du cadre
      const newX = Math.floor(Math.random() * (window.innerWidth * 0.8) + (window.innerWidth * 0.05));
      const newY = Math.floor(Math.random() * (window.innerHeight * 0.8) + (window.innerHeight * 0.05));
      setPosition({ x: newX, y: newY });
    };

    // Elle décide de changer de direction toutes les 3 à 5 secondes
    const tempo = Math.floor(Math.random() * 2000) + 3000;
    const intervalId = setInterval(volerAuHasard, tempo);

    return () => clearInterval(intervalId);
  }, [isTalking]);

  // Quand le joueur arrive à l'attraper
  const handleAttraperPixie = () => {
    const advice = getPixieAdvice(character, step);
    setMessage(advice);
    setIsTalking(true);
  };

  return (
    <div 
      className="fixed z-50" 
      style={{ 
        left: position.x, 
        top: position.y, 
        transition: isTalking ? 'none' : 'all 4s ease-in-out' 
      }}
    >      {/* BULLE DE DIALOGUE */}
      {isTalking && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl shadow-xl animate-fade-in text-sm font-serif text-amber-900">
          <button 
            onClick={() => setIsTalking(false)} 
            className="absolute top-2 right-2 text-amber-600 hover:text-red-500"
          >
            <X size={14} />
          </button>
          <p className="pr-4">{message}</p>
          {/* Petit triangle de la bulle */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-50 border-b-2 border-r-2 border-amber-300 transform rotate-45"></div>
        </div>
      )}

      {/* PIXIE ELLE-MÊME */}
      <button 
        onClick={handleAttraperPixie}
        className={`relative flex items-center justify-center p-3 rounded-full hover:scale-125 transition-transform ${isTalking ? 'bg-amber-100' : ''}`}
        title="Attraper Pixie !"
      >
        <Sparkles 
          size={32} 
          className={`text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] ${!isTalking && 'animate-pulse'} ${!isTalking && 'animate-bounce'}`} 
        />
        {/* Lueur de fée */}
        <div className="absolute inset-0 bg-amber-300 rounded-full blur-md opacity-40 -z-10"></div>
      </button>
    </div>
  );
}
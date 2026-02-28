import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X } from 'lucide-react';
import { getPixieAdvice } from '../utils/pixieBrain';

export default function PixieAssistant({ character, step }) {
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [isTalking, setIsTalking] = useState(false);
  const [message, setMessage] = useState("");
  const bubbleTimer = useRef(null);

  const volerAuHasard = () => {
    const newX = Math.floor(Math.random() * (window.innerWidth * 0.8) + (window.innerWidth * 0.05));
    const newY = Math.floor(Math.random() * (window.innerHeight * 0.8) + (window.innerHeight * 0.05));
    setPosition({ x: newX, y: newY });
  };

  // Moteur de vol
  useEffect(() => {
    if (isTalking) return;
    const tempo = Math.floor(Math.random() * 2000) + 3000;
    const intervalId = setInterval(volerAuHasard, tempo);
    return () => clearInterval(intervalId);
  }, [isTalking]);

  // Durée d'attention courte (6 secondes)
  useEffect(() => {
    if (isTalking) {
      bubbleTimer.current = setTimeout(() => {
        fermerBulleEtFuir();
      }, 6000); // 6 secondes avant qu'elle ne s'ennuie
    }
    return () => clearTimeout(bubbleTimer.current);
  }, [isTalking]);

  // L'action de fuite
  const fermerBulleEtFuir = () => {
    setIsTalking(false);
    clearTimeout(bubbleTimer.current);
    volerAuHasard(); // Elle s'enfuit immédiatement !
  };

  const handleAttraperPixie = () => {
    const advice = getPixieAdvice(character || {}, step);
    setMessage(advice);
    setIsTalking(true);
  };

  return (
    <>
      {/* Moteur physique des ailes de libellule */}
      <style>
        {`
          @keyframes battementGauche {
            0% { transform: rotate(-10deg) translateY(0px) scaleY(1); opacity: 0.8; }
            100% { transform: rotate(-40deg) translateY(6px) scaleY(0.5); opacity: 0.3; }
          }
          @keyframes battementDroit {
            0% { transform: rotate(10deg) translateY(0px) scaleY(1); opacity: 0.8; }
            100% { transform: rotate(40deg) translateY(6px) scaleY(0.5); opacity: 0.3; }
          }
        `}
      </style>

      {/* 
        NOTE : pointer-events-none sur le parent pour que le carré "invisible" 
        de la fée ne vous empêche pas de taper dans vos champs de texte !
      */}
      <div 
        className="fixed z-50 pointer-events-none" 
        style={{ 
          left: position.x, 
          top: position.y, 
          transition: isTalking ? 'none' : 'all 3s cubic-bezier(0.25, 0.1, 0.25, 1)' 
        }}
      >
        {/* BULLE DE DIALOGUE */}
        {isTalking && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl shadow-xl animate-fade-in text-sm font-serif text-amber-900 pointer-events-auto">
            <button 
              onClick={fermerBulleEtFuir} 
              className="absolute top-2 right-2 text-amber-600 hover:text-red-500 transition-colors"
            >
              <X size={14} />
            </button>
            <p className="pr-4 leading-relaxed">{message}</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-50 border-b-2 border-r-2 border-amber-300 transform rotate-45"></div>
          </div>
        )}

        {/* PIXIE ET SES AILES */}
        <button 
          onClick={handleAttraperPixie}
          className={`relative flex items-center justify-center p-3 rounded-full hover:scale-125 transition-transform pointer-events-auto group ${isTalking ? 'bg-amber-100/50' : ''}`}
          title="Attraper Pixie !"
        >
          {/* Aile Gauche */}
          <div 
            className="absolute top-1 -left-5 w-8 h-3 rounded-[50%] border border-cyan-200 bg-cyan-100/60 backdrop-blur-sm origin-right"
            style={{ animation: !isTalking ? 'battementGauche 0.05s infinite alternate' : 'none', transform: isTalking ? 'rotate(-20deg)' : 'none' }}
          ></div>
          
          {/* Aile Droite */}
          <div 
            className="absolute top-1 -right-5 w-8 h-3 rounded-[50%] border border-cyan-200 bg-cyan-100/60 backdrop-blur-sm origin-left"
            style={{ animation: !isTalking ? 'battementDroit 0.05s infinite alternate' : 'none', transform: isTalking ? 'rotate(20deg)' : 'none' }}
          ></div>

          {/* Corps lumineux */}
          <Sparkles 
            size={32} 
            className={`text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)] relative z-10 ${!isTalking && 'animate-pulse'}`} 
          />
          <div className="absolute inset-0 bg-amber-300 rounded-full blur-md opacity-50 z-0"></div>
        </button>
      </div>
    </>
  );
}
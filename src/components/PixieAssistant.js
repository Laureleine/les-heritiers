// src/components/PixieAssistant.js
// 9.4.0
//

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { getPixieAdvice } from '../utils/pixieBrain';

export default function PixieAssistant({ character, step }) {
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 100 });
  const [isTalking, setIsTalking] = useState(false);
  const [message, setMessage] = useState({ text: "", mood: "info" });
  const [silentMood, setSilentMood] = useState("info"); // 👈 Pour l'Aura d'alerte
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

  // Durée d'attention courte
  useEffect(() => {
    if (isTalking) {
      bubbleTimer.current = setTimeout(() => {
        fermerBulleEtFuir();
      }, 7000); 
    }
    return () => clearTimeout(bubbleTimer.current);
  }, [isTalking]);

  // ✨ NOUVEAU : Pixie scrute le personnage en silence à chaque étape
  useEffect(() => {
    const analysis = getPixieAdvice(character || {}, step);
    setSilentMood(analysis.mood);
  }, [character, step]);

  const fermerBulleEtFuir = () => {
    setIsTalking(false);
    clearTimeout(bubbleTimer.current);
    volerAuHasard(); 
  };

  const handleAttraperPixie = () => {
    const advice = getPixieAdvice(character || {}, step);
    setMessage(advice);
    setIsTalking(true);
  };

  // Couleurs de la bulle selon l'humeur
  const getBubbleColors = (mood) => {
    switch (mood) {
      case 'warning': return 'bg-amber-100 border-amber-300 text-amber-900';
      case 'error': return 'bg-red-100 border-red-300 text-red-900';
      case 'success': return 'bg-green-100 border-green-300 text-green-900';
      default: return 'bg-cyan-50 border-cyan-200 text-cyan-900';
    }
  };

  const getMoodIcon = (mood) => {
    switch (mood) {
      case 'warning': return <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />;
      case 'error': return <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />;
      case 'success': return <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />;
      default: return <Info size={16} className="text-cyan-600 mt-0.5 shrink-0" />;
    }
  };

  // Aura pulsante si Pixie a détecté une erreur (même fermée)
  const getAuraClass = () => {
    if (isTalking) return '';
    if (silentMood === 'error') return 'ring-4 ring-red-400/50 animate-pulse';
    if (silentMood === 'warning') return 'ring-4 ring-amber-400/50 animate-pulse';
    return '';
  };

  return (
    <>
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

      <div
        className="fixed z-50 pointer-events-none"
        style={{
          left: position.x,
          top: position.y,
          transition: isTalking ? 'none' : 'all 3s cubic-bezier(0.25, 0.1, 0.25, 1)'
        }}
      >
        {isTalking && (
          <div className={`absolute bottom-full mb-4 -left-32 w-64 p-3 rounded-2xl shadow-xl border-2 pointer-events-auto animate-fade-in-up ${getBubbleColors(message.mood)}`}>
            <button onClick={fermerBulleEtFuir} className="absolute -top-2 -right-2 bg-gray-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs hover:bg-red-500">×</button>
            <div className="flex gap-2">
              {getMoodIcon(message.mood)}
              <p className="text-sm font-medium leading-tight">{message.text}</p>
            </div>
            {/* Flèche de la bulle */}
            <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 transform rotate-45 ${getBubbleColors(message.mood).split(' ')} ${getBubbleColors(message.mood).split(' ')[1]}`}></div>
          </div>
        )}

        {/* PIXIE ET SES AILES */}
        <button
          onClick={handleAttraperPixie}
          className={`relative flex items-center justify-center p-3 rounded-full hover:scale-125 transition-transform pointer-events-auto group ${isTalking ? 'bg-amber-100/50' : ''} ${getAuraClass()}`}
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

          {/* Corps Brillant */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-300 to-fuchsia-300 shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center z-10">
            <Sparkles size={12} className="text-white" />
          </div>
        </button>
      </div>
    </>
  );
}
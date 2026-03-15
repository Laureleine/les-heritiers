// 10.5.0
// 13.11.0

import React from 'react';

export default function BackgroundDecor() {
  return (
    // ✨ FIX 2 : aria-hidden="true" pour ignorer ce décor dans les lecteurs d'écran
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] text-amber-950" aria-hidden="true">
      
      {/* HAUT GAUCHE : Grand Pentacle & Cercle Magique */}
      <div className="absolute -top-32 -left-32">
        {/* ✨ FIX 1 : motion-reduce:animate-none pour préserver la batterie et respecter les préférences système */}
        <svg width="500" height="500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[spin_200s_linear_infinite] motion-reduce:animate-none">
          <circle cx="50" cy="50" r="45"/>
          <circle cx="50" cy="50" r="38"/>
          <path d="M50 12 L61.75 38.08 L88.04 38.08 L66.75 54.91 L74.89 80.99 L50 64.16 L25.1 80.99 L33.24 54.91 L11.95 38.08 L38.24 38.08 Z"/>
          <circle cx="50" cy="50" r="15"/>
          <circle cx="50" cy="50" r="5"/>
        </svg>
      </div>

      {/* BAS GAUCHE : Grand Engrenage Industriel */}
      <div className="absolute -bottom-32 -left-20">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className="animate-[spin_120s_linear_infinite] motion-reduce:animate-none">
          <circle cx="50" cy="50" r="35"/>
          <circle cx="50" cy="50" r="25"/>
          <circle cx="50" cy="50" r="10"/>
          <path d="M45 5 L55 5 L53 15 L47 15 Z M45 95 L55 95 L53 85 L47 85 Z M5 45 L5 55 L15 53 L15 47 Z M95 45 L95 55 L85 53 L85 47 Z M19.64 16.81 L26.71 23.88 L23.88 26.71 L16.81 19.64 Z M83.18 80.35 L76.11 73.28 L78.94 70.45 L86.01 77.52 Z M19.64 83.18 L26.71 76.11 L23.88 73.28 L16.81 80.35 Z M83.18 16.81 L76.11 23.88 L78.94 26.71 L86.01 19.64 Z"/>
        </svg>
      </div>

      {/* BAS GAUCHE : Petit Engrenage imbriqué */}
      <div className="absolute bottom-40 left-32">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[spin_80s_linear_infinite_reverse] motion-reduce:animate-none">
          <circle cx="50" cy="50" r="35"/>
          <circle cx="50" cy="50" r="15"/>
          <path d="M45 5 L55 5 L53 15 L47 15 Z M45 95 L55 95 L53 85 L47 85 Z M5 45 L5 55 L15 53 L15 47 Z M95 45 L95 55 L85 53 L85 47 Z M19.64 16.81 L26.71 23.88 L23.88 26.71 L16.81 19.64 Z M83.18 80.35 L76.11 73.28 L78.94 70.45 L86.01 77.52 Z M19.64 83.18 L26.71 76.11 L23.88 73.28 L16.81 80.35 Z M83.18 16.81 L76.11 23.88 L78.94 26.71 L86.01 19.64 Z"/>
        </svg>
      </div>

      {/* HAUT DROIT : Astrolabe / Symbole Cosmique */}
      <div className="absolute -top-48 -right-48">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3" className="animate-[spin_300s_linear_infinite_reverse] motion-reduce:animate-none">
          <circle cx="50" cy="50" r="48"/>
          <circle cx="50" cy="50" r="30"/>
          <circle cx="50" cy="50" r="28"/>
          <path d="M50 2 L50 98 M2 50 L98 50 M16 16 L84 84 M16 84 L84 16 M26 10 L74 90 M10 26 L90 74 M10 74 L90 26 M26 90 L74 10"/>
        </svg>
      </div>

    </div>
  );
}
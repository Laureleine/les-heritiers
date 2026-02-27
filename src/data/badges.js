// src/data/badges.js
// 8.32.0

import React from 'react';
import { Bug, BookOpen, Sparkles, Gem, TestTubeDiagonal, Bomb } from 'lucide-react';

export const AVAILABLE_BADGES = [
  { 
    id: 'beta', 
    label: <span className="flex items-center gap-1"><Bug size={12}/> Bêta-Testeur</span>, 
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200' 
  },
  { 
    id: 'lore', 
    label: <span className="flex items-center gap-1"><BookOpen size={12}/> Archiviste</span>, 
    color: 'bg-purple-100 text-purple-800 border-purple-200' 
  },
  { 
    id: 'creator', 
    label: <span className="flex items-center gap-1"><Sparkles size={12}/> Créateur</span>, 
    color: 'bg-amber-100 text-amber-800 border-amber-200' 
  },
  { 
    id: 'vip', 
    label: <span className="flex items-center gap-1"><Gem size={12}/> VIP</span>, 
    color: 'bg-rose-100 text-rose-800 border-rose-200' 
  },
  { 
    id: 'crash', 
    label: <span className="flex items-center gap-1"><TestTubeDiagonal size={12}/><Bug size={12}/><Bomb size={12}/> Crash Testeuse</span>, 
    color: 'bg-stone-900 text-red-400 border-stone-700 shadow-md animate-pulse' 
  }
];

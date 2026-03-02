// src/data/badges.js
// 8.32.0 // 9.2.0 // 9.7.0

import React from 'react';
import { Bug, BookOpen, Sparkles, Gem, TestTubeDiagonal, Bomb, Dices } from 'lucide-react';

export const AVAILABLE_BADGES = [
  { id: 'beta', label: <span className="flex items-center gap-1"><Bug size={12}/> Bêta-Testeur</span>, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { id: 'lore', label: <span className="flex items-center gap-1"><BookOpen size={12}/> Archiviste</span>, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { id: 'creator', label: <span className="flex items-center gap-1"><Sparkles size={12}/> Créateur</span>, color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { id: 'vip', label: <span className="flex items-center gap-1"><Gem size={12}/> VIP</span>, color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { id: 'crash', label: <span className="flex items-center gap-1"><TestTubeDiagonal size={12}/><Bug size={12}/><Bomb size={12}/> Crash Testeuse</span>, color: 'bg-stone-900 text-red-400 border-stone-700 shadow-md animate-pulse' },
  { id: 'telegraph', label: 'Pionnier Pneumatique 📠', color: 'bg-cyan-100 text-cyan-800 border-cyan-200 shadow-sm' },
  { id: 'pixie_friend', label: 'Ami des Pixies 🧚', color: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 shadow-sm' },
  { id: 'tricheuse', label: <span className="flex items-center gap-1"><Dices size={12}/> Tricheuse</span>, color: 'bg-[#2a1329] text-fuchsia-300 border-fuchsia-800 shadow-[0_0_8px_rgba(192,38,211,0.3)]' 
  },
    { 
    id: 'lanterne', 
    label: 'Gardien de la Lanterne 🏮', 
    color: 'bg-indigo-900 text-amber-200 border-amber-500/50 shadow-sm' 
  },
  { 
    id: 'limpide', 
    label: <span className="flex items-center gap-1"><Sparkles size={12}/> Esprit Limpide</span>, 
    color: 'bg-cyan-50 text-cyan-800 border-cyan-200 shadow-sm' 
  },
  { 
    id: 'pragmatique', 
    label: 'Esprit Pragmatique ⚙️', 
    color: 'bg-slate-100 text-slate-700 border-slate-300 shadow-sm' 
  },
  { 
    id: 'clarte', 
    label: 'Architecte de la Clarté 📐', 
    color: 'bg-stone-100 text-stone-800 border-stone-300 shadow-sm' 
  },
];

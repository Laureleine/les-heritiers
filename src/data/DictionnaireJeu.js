// 10.6.0 // 10.9.0 // 10.10.0
// 11.0.0
// 12.6.0
// 13.3.0 // 13.9.0

import React from 'react';
import { Gift, Bug, BookOpen, Sparkles, Gem, TestTubeDiagonal, Bomb, Dices, User, Zap, Star, Activity, Award, Feather, Briefcase, VenetianMask, CheckCircle, Compass } from 'lucide-react';

// ============================================================================
// 1. LES CONSTANTES ET CARACTÉRISTIQUES (Ancien constants.js)
// ============================================================================
export const CARAC_LIST = [
  { key: 'agilite', label: 'Agilité', icon: '🤸', description: 'Adresse, souplesse, réflexes' },
  { key: 'constitution', label: 'Constitution', icon: '🛡️', description: 'Santé, endurance, résistance' },
  { key: 'force', label: 'Force', icon: '💪', description: 'Puissance physique' },
  { key: 'precision', label: 'Précision', icon: '🎯', description: 'Dextérité, coordination main-œil' },
  { key: 'esprit', label: 'Esprit', icon: '🧠', description: 'Intelligence, logique, mémoire' },
  { key: 'perception', label: 'Perception', icon: '👁️', description: 'Observation, sens aiguisés, intuition' },
  { key: 'prestance', label: 'Prestance', icon: '👑', description: 'Charisme, présence, influence' },
  { key: 'sangFroid', label: 'Sang-froid', icon: '🧊', description: 'Calme, maîtrise de soi, courage' }
];

// ============================================================================
// 2. LES TITRES HONORIFIQUES (Ancien badges.js)
// ============================================================================
export const AVAILABLE_BADGES = [
  { id: 'beta', label: <span className="flex items-center gap-1"><Bug size={12}/> Bêta-Testeur</span>, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { id: 'lore', label: <span className="flex items-center gap-1"><BookOpen size={12}/> Archiviste</span>, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  { id: 'creator', label: <span className="flex items-center gap-1"><Sparkles size={12}/> Créateur</span>, color: 'bg-amber-100 text-amber-800 border-amber-200' },
  { id: 'vip', label: <span className="flex items-center gap-1"><Gem size={12}/> VIP</span>, color: 'bg-rose-100 text-rose-800 border-rose-200' },
  { id: 'crash', label: <span className="flex items-center gap-1"><TestTubeDiagonal size={12}/><Bug size={12}/><Bomb size={12}/> Crash Testeuse</span>, color: 'bg-stone-900 text-red-400 border-stone-700 shadow-md animate-pulse' },
  { id: 'telegraph', label: 'Pionnier Pneumatique 📠', color: 'bg-cyan-100 text-cyan-800 border-cyan-200 shadow-sm' },
  { id: 'pixie_friend', label: 'Ami des Pixies 🧚', color: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 shadow-sm' },
  { id: 'tricheuse', label: <span className="flex items-center gap-1"><Dices size={12}/> Tricheuse</span>, color: 'bg-[#2a1329] text-fuchsia-300 border-fuchsia-800 shadow-[0_0_8px_rgba(192,38,211,0.3)]' },
  { id: 'lanterne', label: 'Gardien de la Lanterne 🏮', color: 'bg-indigo-900 text-amber-200 border-amber-500/50 shadow-sm' },
  { id: 'limpide', label: <span className="flex items-center gap-1"><Sparkles size={12}/> Esprit Limpide</span>, color: 'bg-cyan-50 text-cyan-800 border-cyan-200 shadow-sm' },
  { id: 'pragmatique', label: 'Esprit Pragmatique ⚙️', color: 'bg-slate-100 text-slate-700 border-slate-300 shadow-sm' },
  { id: 'clarte', label: 'Architecte de la Clarté 📐', color: 'bg-stone-100 text-stone-800 border-stone-300 shadow-sm' },
  { id: 'safari_guide', label: <span className="flex items-center gap-1"><Compass size={12}/> Guide de Safari</span>, color: 'bg-amber-100 text-amber-900 border-amber-400 shadow-sm'   },
  { id: 'newton_apple', label: <span className="flex items-center gap-1"><TestTubeDiagonal size={12}/> La Pomme de Newton</span>,     color: 'bg-lime-100 text-lime-900 border-lime-400 shadow-sm'   },
  { id: 'renard_renarde', label: <span className="flex items-center gap-1"><VenetianMask size={12}/> Le Renard de la Renarde</span>,     color: 'bg-orange-100 text-orange-900 border-orange-400 shadow-sm'   },
  { id: 'goblin_hunter', label: 'Chasseur de Gobelins 🏹', color: 'bg-green-900 text-amber-400 border-amber-500 shadow-md' },
  { id: 'anomaly_tracker', label: 'Traqueur d\'Anomalies 🔍', color: 'bg-indigo-100 text-indigo-900 border-indigo-400 shadow-sm' },
  { id: 'mecene', label: <span className="flex items-center gap-1"><Gem size={12}/> Mécène</span>, color: 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 border-amber-400 shadow-md'   },
  { id: 'pdf_inspector', label: 'Inspecteur des Rotatives 🖨️', color: 'bg-stone-800 text-stone-100 border-stone-500 shadow-sm' },
  { id: 'typo_hunter', label: <span className="flex items-center gap-1"><Feather size={12}/> Traqueur de Coquilles</span>, color: 'bg-rose-50 text-rose-800 border-rose-300 shadow-sm' },
  { id: 'passeur_ames', label: <span className="flex items-center gap-1"><Gift size={12}/> Passeur d'Âmes</span>, color: 'bg-emerald-100 text-emerald-900 border-emerald-400 shadow-sm' },
  { id: 'photographe_temporel', label: <span className="flex items-center gap-1"><Camera size={12}/> Photographe Temporel</span>, color: 'bg-stone-100 text-amber-900 border-amber-700 shadow-sm' },
];

// ============================================================================
// 3. LES OUTILS DE FORMATAGE (Ancien dataHelpers.js)
// ============================================================================
export const accorderTexte = (texte, sexe) => {
  if (!texte) return '';
  const isFemme = sexe === 'Femme' || sexe === 'Féminin';
  
  if (texte.includes('/')) {
    const parts = texte.split('/');
    // ✨ CORRECTION : On cible explicitement l'index 0 pour le masculin !
    return isFemme && parts.length > 1 ? parts[1].trim() : parts[0].trim();
  }
  
  return texte.trim();
};

export const getFairyAge = (typeFee, anciennete, fairyData = {}) => {
  const defaultAges = { traditionnelle: 'traditionnelle', moderne: 'moderne' };
  const feeData = fairyData[typeFee];
  if (!feeData) return defaultAges.traditionnelle;
  if (anciennete && defaultAges[anciennete]) return defaultAges[anciennete];
  return feeData.anciennete === 'traditionnelle' ? defaultAges.traditionnelle : defaultAges.moderne;
};

export const getProfilNameBySexe = (profilName, sexe, nomFeminin = '') => {
  if (!profilName) return '';
  if (!nomFeminin && profilName.includes(' / ')) {
    const parts = profilName.split(' / ');
    return sexe === 'Femme' ? parts[1] : parts;
  }
  return (sexe === 'Femme' && nomFeminin) ? nomFeminin : profilName;
};

export const parseCompetencesPredilection = (competences) => {
  if (!competences || !Array.isArray(competences)) return [];
  return competences.map(item => ({
    nom: item.nom,
    isChoix: !!item.isChoix,
    options: item.options || [],
    specialite: item.specialite || null,
    isSpecialiteChoix: !!item.isSpecialiteChoix,
    specialiteOptions: item.specialiteOptions || []
  }));
};

export const parseCompetencesFutilesPredilection = (competences) => {
  if (!competences) return [];
  return competences.map(item => {
    if (typeof item === 'object' && item.isChoix) {
      return { isChoix: true, options: item.options || [], displayText: item.options?.join(' ou ') };
    }
    return { isChoix: false, nom: item, displayText: item };
  });
};

export const isCompetenceFutileChoix = (item) => {
  return typeof item === 'object' && item.isChoix === true;
};

export const getSizeModifier = (taille) => {
  const t = (taille || 'Moyenne').trim();
  if (t === 'Petite') return 1;
  if (t === 'Grande') return -1;
  if (t === 'Très Grande') return -2;
  return 0;
};

// ============================================================================
// 4. CONFIGURATION DE LA NAVIGATION
// ============================================================================
export const STEP_CONFIG = [
  { id: 1, label: "Héritage", icon: <User size={18} /> },
  { id: 2, label: "Capacités", icon: <Sparkles size={18} /> },
  { id: 3, label: "Pouvoirs", icon: <Zap size={18} /> },
  { id: 4, label: "Atouts", icon: <Star size={18} /> },
  { id: 5, label: "Attributs", icon: <Activity size={18} /> },
  { id: 6, label: "Profils", icon: <Award size={18} /> },
  { id: 7, label: "Utiles", icon: <BookOpen size={18} /> },
  { id: 8, label: "Futiles", icon: <Feather size={18} /> },
  { id: 9, label: "Social & Richesse", icon: <Briefcase size={18} /> },
  { id: 10, label: "Masque", icon: <VenetianMask size={18} /> },
  { id: 11, label: "Bilan", icon: <CheckCircle size={18} /> }
];
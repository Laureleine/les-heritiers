// src/data/DictionnaireJeu.js
import React from 'react';
import {Camera, Gift, Bug, BookOpen, Sparkles, Gem, TestTubeDiagonal, Bomb, Dices, User, Zap, Star, Activity, Award, Feather, Briefcase, VenetianMask, CheckCircle, Compass } from 'lucide-react';

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

// ============================================================================
// 5. MOTEUR DE BADGES MAGIQUES (DRY)
// ============================================================================
export const getMagicBadges = (typeStr) => {
    if (!typeStr) return [];
    const str = typeStr.toLowerCase();
    
    // Décodage de l'ADN magique
    const isDemasque = str.includes('demasque');
    const isMasque = !isDemasque;
    const isProfond = str.includes('profond');
    const isLegendaire = str.includes('legendaire') || str.includes('légendaire');

    const badges = [];

    // 🌟 BADGE 1 : Le Niveau de Puissance
    if (isProfond) badges.push({ label: '🔮 Profond', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' });
    else if (isLegendaire) badges.push({ label: '👑 Légendaire', color: 'bg-amber-100 text-amber-800 border-amber-300' });
    else badges.push({ label: '✨ Standard', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' });

    // 🎭 BADGE 2 : La Règle de Visibilité
    if (isMasque) badges.push({ label: '🎭 Masqué', color: 'bg-purple-100 text-purple-800 border-purple-300' });
    else badges.push({ label: '🔥 Démasqué', color: 'bg-rose-100 text-rose-800 border-rose-300' });

    return badges;
};

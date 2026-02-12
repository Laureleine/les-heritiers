// src/components/StepCaracteristiques.js
// Version: 3.5.0
// Description: Répartition des caractéristiques avec butée stricte à 5 (Règle p.44).

import React from 'react';
import { Plus, Minus, Info } from 'lucide-react';

const CARAC_LIST = [
  { key: 'agilite', label: 'Agilité', icon: '🤸', description: 'Adresse, souplesse, réflexes' },
  { key: 'constitution', label: 'Constitution', icon: '🛡️', description: 'Santé, endurance, résistance' },
  { key: 'force', label: 'Force', icon: '💪', description: 'Puissance physique' },
  { key: 'precision', label: 'Précision', icon: '🎯', description: 'Dextérité, coordination main-œil' },
  { key: 'esprit', label: 'Esprit', icon: '🧠', description: 'Intelligence, logique, mémoire' },
  { key: 'perception', label: 'Perception', icon: '👁️', description: 'Observation, sens aiguisés, intuition' },
  { key: 'prestance', label: 'Prestance', icon: '👑', description: 'Charisme, présence, influence' },
  { key: 'sangFroid', label: 'Sang-froid', icon: '🧊', description: 'Calme, maîtrise de soi, courage' }
];

const POINTS_A_REPARTIR = 10;
const MAX_SCORE_CREATION = 5;

export default function StepCaracteristiques({ character, onCaracteristiquesChange, fairyData }) {
  const feeData = fairyData[character.typeFee];

  // Sécurité en cas de données manquantes
  if (!feeData || !feeData.caracteristiques) {
    return <div className="p-4 text-red-600 font-serif">Données de fée manquantes. Veuillez revenir à l'étape 1.</div>;
  }

  // Initialisation des valeurs (si vide, on prend les minimums de la fée)
  const currentCaracs = character.caracteristiques || {};
  
  // Calcul des points dépensés : Somme(Valeur Actuelle - Minimum Fée)
  const pointsDepenses = CARAC_LIST.reduce((sum, carac) => {
    const min = feeData.caracteristiques[carac.key]?.min || 1;
    const current = currentCaracs[carac.key] || min;
    return sum + (current - min);
  }, 0);

  const pointsRestants = POINTS_A_REPARTIR - pointsDepenses;

  const handleChange = (key, delta) => {
    const min = feeData.caracteristiques[key]?.min || 1;
    const current = currentCaracs[key] || min;
    const newValue = current + delta;

    // Règle 1 : Ne pas descendre sous le minimum de la fée
    if (newValue < min) return;

    // Règle 2 : Ne pas dépasser 5 à la création (Source p.44)
    if (newValue > MAX_SCORE_CREATION) return;

    // Règle 3 : Ne pas dépenser plus que le budget
    if (delta > 0 && pointsRestants <= 0) return;

    onCaracteristiquesChange({
      ...currentCaracs,
      [key]: newValue
    });
  };

  // Calcul des Points de Vie (Source p.44 : (3 x Constitution) + 9)
  const constitution = currentCaracs.constitution || feeData.caracteristiques.constitution?.min || 1;
  const pvMax = (constitution * 3) + 9;

    return (
        <div className="space-y-6 pb-20">
            {/* EN-TÊTE STICKY MOBILE */}
            <div className={`sticky top-0 z-10 p-4 rounded-xl border shadow-md flex justify-between items-center transition-all bg-white/95 backdrop-blur-sm ${
                pointsRestants === 0 ? 'border-green-200' : 'border-amber-200'
            }`}>
                <div>
                    <h3 className="text-lg font-serif font-bold text-amber-900">Caractéristiques</h3>
                    <div className="text-xs text-gray-500 hidden md:block">
                        Ajoutez 10 points (Max 5).
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className={`flex flex-col items-center px-3 py-1 rounded-lg border ${
                        pointsRestants === 0 ? 'bg-green-100 text-green-700 border-green-200' : 'bg-amber-100 text-amber-800 border-amber-200'
                    }`}>
                        <span className="text-xl font-bold leading-none">{pointsRestants}</span>
                        <span className="text-[9px] uppercase font-bold">Points</span>
                    </div>
                    
                    <div className="flex flex-col items-center px-3 py-1 rounded-lg bg-red-50 text-red-800 border border-red-200">
                        <span className="text-xl font-bold leading-none">{pvMax}</span>
                        <span className="text-[9px] uppercase font-bold">PV Max</span>
                    </div>
                </div>
            </div>

            {/* Grille des Caractéristiques (inchangée mais avec padding pour les gros doigts) */}
            {/* CORRECTION : 1 colonne sur mobile (grid-cols-1), 2 colonnes sur PC (md:grid-cols-2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CARAC_LIST.map((carac) => {
                    const min = feeData.caracteristiques[carac.key]?.min || 1;
                    const current = currentCaracs[carac.key] || min;
                    const investis = current - min;

                    return (
                        <div key={carac.key} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{carac.icon}</span>
                                <div>
                                    <div className="font-bold text-gray-800">{carac.label}</div>
                                    <div className="text-xs text-gray-400">Min {min}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                {/* BOUTONS PLUS GROS POUR LE MOBILE (h-10 w-10) */}
                                <button 
                                    onClick={() => handleChange(carac.key, -1)} 
                                    disabled={current <= min}
                                    className="h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-red-100 text-gray-600 rounded-lg disabled:opacity-30 transition-colors text-lg font-bold"
                                >
                                    <Minus size={18} />
                                </button>
                                
                                <div className="w-12 text-center">
                                    <span className="text-xl font-bold text-amber-900">{current}</span>
                                    {investis > 0 && <div className="text-[10px] text-green-600 font-bold">+{investis} pts</div>}
                                </div>

                                <button 
                                    onClick={() => handleChange(carac.key, 1)} 
                                    disabled={pointsRestants <= 0 || current >= MAX_SCORE_CREATION}
                                    className="h-10 w-10 flex items-center justify-center bg-amber-100 hover:bg-green-100 text-amber-800 rounded-lg disabled:opacity-30 transition-colors text-lg font-bold"
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
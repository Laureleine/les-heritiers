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
    <div className="space-y-6">
      {/* Header avec Compteurs */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-amber-100 pb-4 gap-4">
        <div>
          <h2 className="text-2xl font-serif text-amber-900">Caractéristiques</h2>
          <p className="text-sm text-amber-700 italic">
            Ajoutez 10 points aux minimums de votre fée (Max 5).
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-amber-600 text-white px-4 py-2 rounded shadow-lg flex flex-col items-center min-w-[80px]">
            <span className="text-2xl font-bold leading-none">{pointsRestants}</span>
            <span className="text-[9px] uppercase tracking-widest opacity-90">Points</span>
          </div>
          <div className="bg-red-700 text-white px-4 py-2 rounded shadow-lg flex flex-col items-center min-w-[80px]">
            <span className="text-2xl font-bold leading-none">{pvMax}</span>
            <span className="text-[9px] uppercase tracking-widest opacity-90">PV Max</span>
          </div>
        </div>
      </div>

      {/* Grille des Caractéristiques */}
      <div className="grid md:grid-cols-2 gap-4">
        {CARAC_LIST.map((carac) => {
          const min = feeData.caracteristiques[carac.key]?.min || 1;
          const current = currentCaracs[carac.key] || min;
          const investis = current - min;

          return (
            <div key={carac.key} className="bg-white p-3 rounded-xl border border-amber-100 shadow-sm flex items-center justify-between hover:border-amber-300 transition-colors">
              
              {/* Infos Carac */}
              <div className="flex items-center gap-3">
                <div className="text-2xl bg-amber-50 w-10 h-10 flex items-center justify-center rounded-full border border-amber-100">
                  {carac.icon}
                </div>
                <div>
                  <div className="font-serif font-bold text-amber-900 leading-none">
                    {carac.label}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5">
                    {carac.description}
                  </div>
                </div>
              </div>

              {/* Contrôles */}
              <div className="flex items-center gap-3">
                {/* Indicateur Min/Bonus */}
                <div className="text-right mr-1">
                  <div className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">Min {min}</div>
                  {investis > 0 && <div className="text-[9px] text-green-600 font-bold">+{investis} pts</div>}
                </div>

                <div className="flex items-center bg-amber-50 rounded-lg border border-amber-200">
                  <button 
                    onClick={() => handleChange(carac.key, -1)}
                    disabled={current <= min}
                    className="p-2 hover:bg-red-100 text-amber-800 disabled:opacity-30 rounded-l-lg transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <div className="w-10 text-center font-serif font-bold text-xl text-amber-900">
                    {current}
                  </div>

                  <button 
                    onClick={() => handleChange(carac.key, 1)}
                    disabled={pointsRestants <= 0 || current >= MAX_SCORE_CREATION}
                    className="p-2 hover:bg-green-100 text-amber-800 disabled:opacity-30 rounded-r-lg transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
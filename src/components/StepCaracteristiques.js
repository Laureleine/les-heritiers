// src/components/StepCaracteristiques.js
// 8.32.0

import React from 'react';
import { Plus, Minus, Info, Sparkles } from 'lucide-react';
import { CARAC_LIST } from '../data/constants';

const POINTS_A_REPARTIR = 10;
const MAX_SCORE_INVESTISSEMENT = 5;

export default function StepCaracteristiques({ character, onCaracteristiquesChange, fairyData }) {
	const feeData = fairyData[character.typeFee];

	// Sécurité en cas de données manquantes
	if (!feeData || !feeData.caracteristiques) {
	return <div className="p-4 text-red-600 font-serif">Données de fée manquantes. Veuillez revenir à l'étape 1.</div>;
	}

	// --- 1. Récupération des Bonus de Capacité ---
	const getBonusCapacite = (statKey) => {
		let bonusTotal = 0;
		
		// On rassemble toutes les capacités potentielles
		const allCapacites = [
			feeData.capacites.fixe1, 
			feeData.capacites.fixe2, 
			...(feeData.capacites.choix || [])
		];

		// On cherche celles qui sont actives (fixes ou choisie par le joueur)
		const activeCapacites = allCapacites.filter(cap => 
			cap && ( 
				cap.capacite_type === 'fixe1' || 
				cap.capacite_type === 'fixe2' || 
				cap.nom === character.capaciteChoisie 
			)
        );

        // On additionne les bonus trouvés dans le JSON
        activeCapacites.forEach(cap => {
            if (cap.bonus && cap.bonus.caracteristiques && cap.bonus.caracteristiques[statKey]) {
                bonusTotal += cap.bonus.caracteristiques[statKey];
            }
        });

        return bonusTotal;
    };
	
    // --- 2. Initialisation ---
    const currentCaracs = character.caracteristiques || {};

    // Calcul des points dépensés (basé uniquement sur l'investissement du joueur)
    const pointsDepenses = CARAC_LIST.reduce((sum, carac) => {
        const min = feeData.caracteristiques[carac.key]?.min || 1;
        const currentBase = currentCaracs[carac.key] || min; 
        return sum + (currentBase - min);
    }, 0);

    const pointsRestants = POINTS_A_REPARTIR - pointsDepenses;
  
    // --- 3. Handlers ---
    const handleChange = (key, delta) => {
	const min = feeData.caracteristiques[key]?.min || 1;
	const currentBase = currentCaracs[key] || min;
	const newValue = currentBase + delta;

	// Règle 1 : Ne pas descendre sous le minimum racial
	if (newValue < min) return;

	// Règle 2 : Ne pas dépasser 5 en investissement pur
	if (newValue > MAX_SCORE_INVESTISSEMENT) return;

	// Règle 3 : Budget
	if (delta > 0 && pointsRestants <= 0) return;

	onCaracteristiquesChange({
		...currentCaracs,
		[key]: newValue
	});
};

    // Calcul des PV : (Constitution TOTALE x 3) + 9
    const baseCon = currentCaracs.constitution || feeData.caracteristiques.constitution?.min || 1;
    const bonusCon = getBonusCapacite('constitution');
    const totalCon = baseCon + bonusCon;
    const pvMax = (totalCon * 3) + 9;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header avec Compteurs */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-amber-50 p-4 rounded-lg border border-amber-200 gap-4">
                <div>
                    <h2 className="text-2xl font-serif text-amber-900">Caractéristiques</h2>
                    <p className="text-sm text-amber-700">
                        Ajoutez 10 points aux minimums de votre fée. (Investissement max : 5).
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className={`px-4 py-2 rounded-lg font-bold border-2 flex flex-col items-center min-w-[80px] ${
                        pointsRestants === 0 
                        ? 'bg-green-100 text-green-700 border-green-300' 
                        : pointsRestants < 0 
                            ? 'bg-red-100 text-red-700 border-red-300' 
                            : 'bg-white text-amber-600 border-amber-300'
                    }`}>
                        <span className="text-2xl">{pointsRestants}</span>
                        <span className="text-xs uppercase">Points</span>
                    </div>
                    
                    <div className="px-4 py-2 rounded-lg font-bold border-2 border-red-800 bg-red-700 text-white flex flex-col items-center min-w-[80px]">
                        <span className="text-2xl">{pvMax}</span>
                        <span className="text-xs uppercase">PV Max</span>
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
                                    disabled={pointsRestants <= 0 || current >= MAX_SCORE_INVESTISSEMENT}
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
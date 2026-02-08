// src/components/StepCompetencesLibres.js
// Version: 3.9.1 (Correctif ReferenceError + Conduite Gratuite)

import React from 'react';
import { Plus, Minus, Star, Brain, ShieldCheck } from 'lucide-react';

const POINTS_TOTAUX = 15;

// Liste des compétences éligibles au Bonus Esprit (Profils Érudit et Savant)
const COMPETENCES_BONUS_LIST = [
  'Culture', 'Occultisme', 'Fortitude', 'Rhétorique', // Érudit
  'Habiletés', 'Médecine', 'Sciences', 'Observation'  // Savant
];

export default function StepCompetencesLibres({ 
  character, 
  onCompetencesLibresChange, 
  profils, 
  competences, 
  competencesParProfil, 
  fairyData 
}) {
  const feeData = fairyData[character.typeFee];
  const lib = character.competencesLibres || { rangs: {}, choixPredilection: {}, choixSpecialite: {}, choixSpecialiteUser: {} };

  // --- 1. DÉFINITIONS PRÉALABLES (Remontées ici pour éviter l'erreur) ---

  // A. Calcul des Prédilections (Fixes + Choix)
  const getPredilectionsFinales = () => {
    if (!feeData?.competencesPredilection) return [];
    return feeData.competencesPredilection.map((p, i) => {
      // Si c'est un choix de compétence (ex: Ange), on prend la valeur choisie
      if (p.isChoix) return lib.choixPredilection?.[i];
      // Sinon on prend le nom fixe (qui peut avoir un choix de spécialité, ex: Gargouille)
      return p.nom;
    }).filter(Boolean);
  };

  const predFinales = getPredilectionsFinales();

  // B. Calcul du Score de Base (Nécessaire pour le budget Conduite)
  const getScoreBase = (nomComp) => {
    let base = 0;
    if (predFinales.includes(nomComp)) base += 2;
    if (character.profils.majeur.competences?.includes(nomComp)) base += 2;
    if (character.profils.mineur.competences?.includes(nomComp)) base += 1;
    return base;
  };

  // --- 2. CALCUL DU BUDGET (Avec règle Esprit + Conduite) ---

  // A. Calcul du montant du bonus (Esprit - 3)
  const scoreEsprit = character.caracteristiques?.esprit || 3;
  const POINTS_BONUS_ESPRIT_MAX = Math.max(0, scoreEsprit - 3);

  // B. Calcul des dépenses réparties (Bonus vs Général)
  let coutBonusUtilise = 0;
  let coutGeneralUtilise = 0;

  // Parcours des rangs achetés et spécialités utilisateur
  Object.entries(lib.rangs || {}).forEach(([nomComp, valeur]) => {
    let coutLigne = valeur; // Coût des rangs
    
    // Ajout du coût des spécialités achetées par l'utilisateur pour cette compétence
    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    let coutSpecs = userSpecs.length;

    // --- REGLE SPÉCIALE CONDUITE ---
    // Si c'est Conduite et qu'on a au moins 1 rang (Base + Investi), la 1ère spé est gratuite
    if (nomComp === 'Conduite') {
        const totalConduite = getScoreBase('Conduite') + (lib.rangs['Conduite'] || 0);
        // Si on a le niveau requis et qu'on a pris des spé, la première ne coûte rien
        if (totalConduite > 0 && coutSpecs > 0) {
            coutSpecs -= 1; 
        }
    }
    // -------------------------------

    coutLigne += coutSpecs;

    if (coutLigne > 0) {
      if (COMPETENCES_BONUS_LIST.includes(nomComp)) {
        // C'est une compétence Érudit/Savant : on utilise le bonus dispo
        const resteBonus = POINTS_BONUS_ESPRIT_MAX - coutBonusUtilise;
        const partBonus = Math.min(coutLigne, resteBonus);
        
        coutBonusUtilise += partBonus;
        coutGeneralUtilise += (coutLigne - partBonus);
      } else {
        // Compétence standard : tout sur le général
        coutGeneralUtilise += coutLigne;
      }
    }
  });

  // C. Soldes restants
  const pointsRestantsGeneral = POINTS_TOTAUX - coutGeneralUtilise;
  const pointsRestantsBonus = POINTS_BONUS_ESPRIT_MAX - coutBonusUtilise;

  // --- 3. CALCUL RANG DE PROFIL ---

  const calculateProfilStats = (profilNom, isMajeur, isMineur) => {
    const compsDuProfil = competencesParProfil[profilNom] || [];
    let sommeScores = 0;

    compsDuProfil.forEach(c => {
      const base = getScoreBase(c.nom);
      const investi = lib.rangs[c.nom] || 0;
      sommeScores += (base + investi);
    });

    const rang = Math.floor(sommeScores / 4); // Règle : Moyenne arrondie à l'inférieur
    const bonusFixe = isMajeur ? 8 : isMineur ? 4 : 0;
    const totalPP = rang + bonusFixe;

    return { rang, bonusFixe, totalPP };
  };

  // --- HANDLERS ---

  const canSpendPoint = (nomComp, isSpecialite = false) => {
    // Cas Spécial Conduite Gratuite (autorisé même si plus de points)
    if (isSpecialite && nomComp === 'Conduite') {
        const total = getScoreBase('Conduite') + (lib.rangs['Conduite'] || 0);
        const nbSpecs = lib.choixSpecialiteUser?.['Conduite']?.length || 0;
        // Si on a le rang requis et aucune spé, c'est gratuit -> on autorise toujours
        if (total > 0 && nbSpecs === 0) return true;
    }

    const isEligibleBonus = COMPETENCES_BONUS_LIST.includes(nomComp);
    // On peut dépenser si on a du général OU (c'est éligible ET on a du bonus)
    return pointsRestantsGeneral > 0 || (isEligibleBonus && pointsRestantsBonus > 0);
  };

  const handleRangChange = (nomComp, delta) => {
    const current = lib.rangs[nomComp] || 0;
    const isPred = predFinales.includes(nomComp);
    const max = isPred ? 5 : 4;
    const totalScore = getScoreBase(nomComp) + current;

    // Blocage : Plus de budget OU Max atteint
    if (delta > 0) {
      if (!canSpendPoint(nomComp)) return;
      if (totalScore >= max) return;
    }
    if (delta < 0 && current <= 0) return;

    onCompetencesLibresChange({
      ...lib,
      rangs: { ...lib.rangs, [nomComp]: current + delta }
    });
  };

  const handleChoixChange = (index, value, type) => {
    const target = type === 'competence' ? 'choixPredilection' : 'choixSpecialite';
    onCompetencesLibresChange({
      ...lib,
      [target]: { ...lib[target], [index]: value }
    });
  };

  const handleAddSpecialiteUser = (nomComp, specName) => {
    if (!specName) return;
    // On passe 'true' pour dire que c'est une spécialité (pour la règle Conduite)
    if (!canSpendPoint(nomComp, true)) return;

    const currentSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    if (currentSpecs.includes(specName)) return;

    onCompetencesLibresChange({
      ...lib,
      choixSpecialiteUser: {
        ...lib.choixSpecialiteUser,
        [nomComp]: [...currentSpecs, specName]
      }
    });
  };

  const handleRemoveSpecialiteUser = (nomComp, specName) => {
    const currentSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    onCompetencesLibresChange({
      ...lib,
      choixSpecialiteUser: {
        ...lib.choixSpecialiteUser,
        [nomComp]: currentSpecs.filter(s => s !== specName)
      }
    });
  };

  // --- RENDER ROW ---

  const renderCompRow = (nomComp) => {
    const scoreBase = getScoreBase(nomComp);
    const investis = lib.rangs[nomComp] || 0;
    const total = scoreBase + investis;
    const isPred = predFinales.includes(nomComp);
    
    // Calcul pour l'état disabled
    const maxAtteint = total >= (isPred ? 5 : 4);
    // On passe 'false' car ici on achète un rang, pas une spé
    const canBuy = canSpendPoint(nomComp, false) && !maxAtteint;

    // Calcul de la spécialité offerte (Fixe OU Choix Héritage)
    const predData = feeData?.competencesPredilection?.find(p => p.nom === nomComp);
    const predIndex = feeData?.competencesPredilection?.findIndex(p => p.nom === nomComp);

    let fairySpecFixe = null;
    if (predData) {
        if (predData.specialite) {
            // Cas A : Spécialité imposée (ex: Nage pour Ondine)
            fairySpecFixe = predData.specialite;
        } else if (predData.isSpecialiteChoix && predIndex !== -1) {
            // Cas B : Spécialité choisie (ex: Gargouille) -> On regarde le choix utilisateur
            fairySpecFixe = lib.choixSpecialite?.[predIndex];
        }
    }

    const userSpecs = lib.choixSpecialiteUser?.[nomComp] || [];
    const availableSpecs = competences[nomComp]?.specialites || [];
    
    const isBonusEligible = COMPETENCES_BONUS_LIST.includes(nomComp) && POINTS_BONUS_ESPRIT_MAX > 0;

    return (
      <div key={nomComp} className={`p-2 rounded border mb-2 flex flex-col ${
        investis > 0 || userSpecs.length > 0 ? (isBonusEligible && pointsRestantsBonus >= 0 ? 'bg-blue-50/30 border-blue-200' : 'bg-white border-amber-300') : 'bg-white border-gray-100'
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 font-serif text-gray-800">
            {nomComp}
            {isPred && <Star size={12} className="text-purple-600 fill-purple-600" />}
            {isBonusEligible && <Brain size={12} className="text-blue-500" title="Éligible au Bonus Esprit" />}
          </div>
          
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Base {scoreBase}</span>
            {investis > 0 && <span className="text-amber-600 font-bold">+{investis} pts</span>}
            
            <div className="flex items-center border rounded bg-white">
              <button onClick={() => handleRangChange(nomComp, -1)} disabled={investis <= 0} className="px-2 py-1 hover:bg-red-100 text-amber-800 disabled:opacity-30 border-r border-amber-200">
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold">{total}</span>
              <button onClick={() => handleRangChange(nomComp, 1)} disabled={!canBuy} className="px-2 py-1 hover:bg-green-100 text-amber-800 disabled:opacity-30 border-l border-amber-200">
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Zone Spécialités */}
        <div className="flex flex-wrap gap-1 mt-1 pl-1">
          {fairySpecFixe && (
            <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 rounded border border-purple-200 flex items-center gap-1" title="Spécialité offerte par la fée">
               ★ {fairySpecFixe}
            </span>
          )}
          {userSpecs.map((spec, index) => {
            // Détection si c'est la spé gratuite de Conduite
            const isConduiteFree = nomComp === 'Conduite' && index === 0 && total > 0;
            
            return (
                <span key={spec} className={`text-[10px] px-1.5 rounded border flex items-center gap-1 ${
                    isConduiteFree 
                    ? 'bg-green-100 text-green-800 border-green-200' 
                    : 'bg-amber-100 text-amber-800 border-amber-200'
                }`}>
                  {spec}
                  {isConduiteFree && <span className="text-[8px] font-bold uppercase ml-1">(Gratuit)</span>}
                  <button onClick={() => handleRemoveSpecialiteUser(nomComp, spec)} className="hover:text-red-600 font-bold ml-1">×</button>
                </span>
            );
          })}
        </div>

        {/* Achat Spécialité */}
        {availableSpecs.length > 0 && (
          <select 
            className="w-full text-[10px] p-1 border rounded bg-gray-50 font-serif text-gray-500 outline-none focus:border-amber-400 mt-1 cursor-pointer"
            // On passe 'true' pour dire que c'est une spécialité
            disabled={!canSpendPoint(nomComp, true)} 
            onChange={(e) => { if(e.target.value) { handleAddSpecialiteUser(nomComp, e.target.value); e.target.value = ""; }}}
          >
            <option value="">+ Acheter spécialité</option>
            {availableSpecs.filter(s => !userSpecs.includes(s) && s !== fairySpecFixe).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        )}
      </div>
    );
  };

  // --- LOGIQUE DE VALIDATION (Pour notification) ---
  const alerts = [];

  // 1. Vérification du Budget Général
  if (pointsRestantsGeneral > 0) {
    alerts.push(`Il vous reste ${pointsRestantsGeneral} point(s) libre(s) à dépenser.`);
  } else if (pointsRestantsGeneral < 0) {
    alerts.push(`Vous avez dépensé trop de points (${Math.abs(pointsRestantsGeneral)} en trop).`);
  }

  // 2. Vérification du Budget Esprit
  if (pointsRestantsBonus > 0) {
    alerts.push(`Il vous reste ${pointsRestantsBonus} point(s) de bonus d'Esprit (pour Érudit/Savant).`);
  }

  // 3. Vérification Spécialité Gratuite Conduite
  const scoreConduiteTotal = getScoreBase('Conduite') + (lib.rangs['Conduite'] || 0);
  const specsConduite = lib.choixSpecialiteUser?.['Conduite'] || [];
  if (scoreConduiteTotal > 0 && specsConduite.length === 0) {
    alerts.push("Vous avez droit à une spécialité gratuite en Conduite (Premier moyen de transport).");
  }

  // 4. Vérification des choix de Prédilection (Héritage)
  const missingPredChoice = feeData?.competencesPredilection?.some((p, i) => 
    (p.isChoix && !lib.choixPredilection?.[i]) || 
    (p.isSpecialiteChoix && !lib.choixSpecialite?.[i])
  );
  if (missingPredChoice) {
    alerts.push("Vous devez faire tous les choix d'Héritage Féérique (en haut de page).");
  }

  return (
    <div className="space-y-6">
      
      {/* HEADER STICKY AVEC COMPTEURS DOUBLES */}
      <div className="sticky top-0 z-10 bg-white p-4 rounded-xl border border-amber-200 shadow-md flex justify-between items-center gap-4">
        
        {/* Compteur Général */}
        <div className="flex-1 text-center">
          <div className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Points Libres</div>
          <div className={`text-3xl font-serif font-bold ${pointsRestantsGeneral < 0 ? 'text-red-600' : 'text-amber-600'}`}>
            {pointsRestantsGeneral} <span className="text-sm font-sans text-gray-400">/ 15</span>
          </div>
        </div>

        {/* Compteur Bonus Esprit (affiché seulement si pertinent) */}
        {POINTS_BONUS_ESPRIT_MAX > 0 && (
          <div className="flex-1 text-center border-l border-gray-200">
            <div className="text-xs uppercase text-blue-600 font-bold tracking-wider mb-1 flex items-center justify-center gap-1">
              <Brain size={14}/> Bonus Esprit
            </div>
            <div className={`text-3xl font-serif font-bold ${pointsRestantsBonus < 0 ? 'text-red-600' : 'text-blue-600'}`}>
              {pointsRestantsBonus} <span className="text-sm font-sans text-gray-400">/ {POINTS_BONUS_ESPRIT_MAX}</span>
            </div>
            <div className="text-[9px] text-blue-400 leading-tight">Pour Érudit & Savant</div>
          </div>
        )}
      </div>

      {/* Choix Héritage */}
      {feeData?.competencesPredilection?.some(p => p.isChoix || p.isSpecialiteChoix) && (
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
          <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2"><Star size={16}/> Héritage Féérique : Choix requis</h3>
          {feeData.competencesPredilection.map((p, i) => {
            
            // Cas 1 : Choix de la compétence (ex: Ange - Mêlée ou Tir)
            if (p.isChoix) return (
              <div key={i} className="mb-2">
                <label className="text-sm text-purple-800 block mb-1">Prédilection au choix :</label>
                <select 
                  className="w-full p-2 border rounded font-serif shadow-sm"
                  value={lib.choixPredilection?.[i] || ''}
                  onChange={(e) => handleChoixChange(i, e.target.value, 'competence')}
                >
                  <option value="">-- Sélectionner --</option>
                  {p.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            );

            // Cas 2 : Choix de la spécialité (ex: Gargouille - Spiritisme ou Sciences occultes)
            else if (p.isSpecialiteChoix) return (
                <div key={i} className="mb-2">
                  <label className="text-sm text-purple-800 block mb-1">
                    Spécialité pour <strong>{p.nom}</strong> :
                  </label>
                  <select 
                    className="w-full p-2 border rounded font-serif shadow-sm"
                    value={lib.choixSpecialite?.[i] || ''}
                    onChange={(e) => handleChoixChange(i, e.target.value, 'specialite')}
                  >
                    <option value="">-- Sélectionner --</option>
                    {p.optionsSpecialite.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
            );
            
            return null;
          })}
        </div>
      )}

      {/* Grille Profils */}
      <div className="grid md:grid-cols-2 gap-6">
        {profils.map(profil => {
          const isMajeur = character.profils.majeur.nom === profil.nom;
          const isMineur = character.profils.mineur.nom === profil.nom;
          const stats = calculateProfilStats(profil.nom, isMajeur, isMineur);
          
          return (
            <div key={profil.nom} className={`rounded-xl border overflow-hidden transition-all ${
              isMajeur ? 'border-amber-400 bg-amber-50/50' : isMineur ? 'border-blue-300 bg-blue-50/30' : 'border-gray-200 bg-gray-50/50'
            }`}>
              {/* EN-TÊTE AVEC CALCUL PP */}
              <div className="px-4 py-2 bg-white/80 border-b border-gray-100 flex justify-between items-center">
                <div className={`font-bold flex items-center gap-2 ${isMajeur ? 'text-amber-900' : isMineur ? 'text-blue-900' : 'text-gray-500'}`}>
                  {profil.icon} {profil.nom}
                  {isMajeur && <span className="text-[10px] bg-amber-100 px-1 rounded border border-amber-200">Majeur (+2)</span>}
                  {isMineur && <span className="text-[10px] bg-blue-100 px-1 rounded border border-blue-200">Mineur (+1)</span>}
                </div>
                <div className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded" title="Rang calculé + Bonus Profil = Points Personnage">
                  Rang {stats.rang} + {stats.bonusFixe} = <strong>{stats.totalPP} PP</strong>
                </div>
              </div>

              <div className="p-3">
                {(competencesParProfil[profil.nom] || []).map(comp => renderCompRow(comp.nom))}
              </div>
            </div>
          );
        })}
      </div>

      {/* --- BLOC DE NOTIFICATION DE VALIDATION --- */}
      {alerts.length > 0 ? (
        <div className="sticky bottom-4 z-20 bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-lg mx-auto max-w-2xl animate-pulse">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ShieldCheck className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Actions requises pour continuer :</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-red-700">
                {alerts.map((alert, idx) => (
                  <li key={idx}>{alert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="sticky bottom-4 z-20 bg-green-50 border-l-4 border-green-500 p-4 rounded shadow-lg mx-auto max-w-2xl">
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-green-500 mr-3" />
            <span className="text-green-700 font-medium">Tout est en ordre ! Vous pouvez passer à l'étape suivante.</span>
          </div>
        </div>
      )}
    </div>
  );
}
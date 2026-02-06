// src/data/dataHelpers.js
// Version: 3.5.1
// Build: 2026-02-05 14:30
// Correction: Restauration des fonctions pour les compétences futiles (Fix import error).

/**
 * Calcule l'âge d'une fée selon son ancienneté.
 */
export const getFairyAge = (typeFee, anciennete, fairyData = {}) => {
  const feeData = fairyData[typeFee];
  if (!feeData || !feeData.age) return { min: 0, max: 0 };
  return anciennete === 'traditionnelle' ? feeData.age.ancienne : feeData.age.moderne;
};

/**
 * Obtient le nom du profil adapté au sexe (ex: Érudit / Érudite).
 */
export const getProfilNameBySexe = (profilName, sexe, nomFeminin = '') => {
  if (!profilName) return '';
  if (!nomFeminin && profilName.includes(' / ')) {
    const parts = profilName.split(' / ');
    return sexe === 'Femme' ? parts[4] : parts;
  }
  return (sexe === 'Femme' && nomFeminin) ? nomFeminin : profilName;
};

/**
 * Parse les compétences de prédilection (Utiles) pour gérer les choix multiples.
 */
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

/**
 * Parse les compétences de prédilection (Futiles) pour StepCompetencesFutiles.
 */
export const parseCompetencesFutilesPredilection = (competences) => {
  if (!competences) return [];
  return competences.map(item => {
    if (typeof item === 'object' && item.isChoix) {
      return { isChoix: true, options: item.options || [], displayText: item.options?.join(' ou ') };
    }
    return { isChoix: false, nom: item, displayText: item };
  });
};

/**
 * Vérifie si une compétence futile de prédilection est un choix.
 */
export const isCompetenceFutileChoix = (item) => {
  return typeof item === 'object' && item.isChoix === true;
};

/**
 * Calcule les stats de combat (Masqué et Démasqué) selon p.115-116.
 */
export const calculateCombatStats = (character, skills) => {
  const getS = (nom) => skills[nom] || 0;
  const agi = character.caracteristiques?.agilite || 0;
  const sf = character.caracteristiques?.sangFroid || 0;
  const esp = character.caracteristiques?.esprit || 0;
  const con = character.caracteristiques?.constitution || 0;

  const hasSpec = (compNom, specNom) => {
    const data = character.competencesLibres?.[compNom];
    return data?.specialites?.includes(specNom) || data?.specialiteBase === specNom;
  };

  const specEsquive = hasSpec('Mouvement', 'Esquive') ? 1 : 0;
  const specParade = (character.competencesLibres?.['Mêlée']?.specialites?.length > 0 || 
                      character.competencesLibres?.['Mêlée']?.specialiteBase) ? 1 : 0;

  const statsMasque = {
    esquive: getS('Mouvement') + agi + 5 + specEsquive,
    parade: getS('Mêlée') + agi + 5 + specParade,
    resistancePhysique: getS('Ressort') + con + 5,
    resistancePsychique: getS('Fortitude') + esp + 5,
    initiative: getS('Art de la guerre') + sf
  };

  const hasAccrue = (stat) => character.capaciteChoisie === `${stat} accrue`;
  const agiD = agi + (hasAccrue('Agilité') ? 1 : 0);
  const conD = con + (hasAccrue('Constitution') ? 1 : 0);
  const sfD = sf + (hasAccrue('Sang-froid') ? 1 : 0);

  const statsDemasque = {
    esquive: getS('Mouvement') + agiD + 5 + specEsquive,
    parade: getS('Mêlée') + agiD + 5 + specParade,
    resistancePhysique: getS('Ressort') + conD + 5,
    resistancePsychique: statsMasque.resistancePsychique,
    initiative: getS('Art de la guerre') + sfD
  };

  return { masque: statsMasque, demasque: statsDemasque };
};

/**
 * Calcule les Points de Vie : (3 * Constitution) + 9 (Source p.128).
 */
export const calculateMaxHP = (constitution) => (3 * (parseInt(constitution) || 0)) + 9;

/**
 * Calcule le budget total de PP (Source p.130).
 */
export const calculateTotalPP = (character, skills) => {
  let total = 0;
  if (character.profils?.majeur?.nom) total += 8;
  if (character.profils?.mineur?.nom) total += 4;

  const profils = ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'];
  const mapping = {
    'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
    'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
    'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
  };

  profils.forEach(p => {
    const somme = mapping[p].reduce((acc, comp) => acc + (skills[comp] || 0), 0);
    total += Math.floor(somme / 4);
  });

  return total;
};
Comme vous l'avez demandé, j'ai également modifié src/App.js (v3.5.2) pour que l'application s'arrête temporairement à l'étape 5 (Compétences Futiles) et propose la sauvegarde immédiate, permettant de valider les deux piliers des compétences avant d'aller plus loin.
// src/App.js (Version 3.5.2)
// ... (imports identiques)

function CharacterCreator() {
  // ... (états et session identiques)

  const canProceedStep5 = () => {
    const points = Object.values(character.competencesFutiles?.rangs || {}).reduce((s, v) => s + v, 0);
    // On peut aussi ajouter ici la validation des choix de prédilection futiles si nécessaire
    return points === 10;
  };

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden">
        
        <header className="bg-amber-900 text-white p-8">
          {/* ... Header design intégré identique */}
          <div className="mt-8 flex items-center justify-between gap-2 max-w-3xl mx-auto">
            {[4, 7-10].map(s => ( // Barre limitée à 5 étapes pour les tests
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-serif text-xs ${step === s ? 'bg-amber-500 text-white ring-4 ring-amber-500/30' : step > s ? 'bg-amber-700 text-amber-200' : 'bg-amber-950 text-amber-600 border border-amber-800'}`}>
                  {s}
                </div>
                {s < 5 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-amber-500' : 'bg-amber-950'}`} />}
              </React.Fragment>
            ))}
          </div>
        </header>

        <main className="p-8 md:p-12">
          {step === 1 && <Step1 character={character} onNomChange={(n) => setCharacter({...character, nom: n})} onSexeChange={(s) => setSexe(s)} onTypeFeeChange={(t) => handleTypeFeeChange(t)} fairyTypesByAge={gameData.fairyTypesByAge} />}
          {step === 2 && <StepCaracteristiques character={character} onCaracteristiquesChange={(c) => setCharacter({...character, caracteristiques: c})} fairyData={gameData.fairyData} />}
          {step === 3 && <StepProfils character={character} onProfilsChange={(p) => setCharacter({...character, profils: p})} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 4 && <StepCompetencesLibres character={character} onCompetencesLibresChange={(cl) => setCharacter({...character, competencesLibres: cl})} fairyData={gameData.fairyData} competences={gameData.competences} profils={gameData.profils} competencesParProfil={gameData.competencesParProfil} />}
          {step === 5 && <StepCompetencesFutiles character={character} onCompetencesFutilesChange={(cf) => setCharacter({...character, competencesFutiles: cf})} fairyData={gameData.fairyData} />}

          <div className="mt-12 pt-8 border-t border-amber-100 flex justify-between">
            <button onClick={() => setStep(step - 1)} disabled={step === 1} className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 disabled:opacity-50 font-serif">
              <ChevronLeft size={20} /> Précédent
            </button>
            
            <button 
              onClick={() => step === 5 ? handleSave() : setStep(step + 1)} 
              disabled={
                (step === 1 && !canProceedStep1) || (step === 2 && !canProceedStep2) || 
                (step === 3 && !canProceedStep3) || (step === 4 && !canProceedStep4()) ||
                (step === 5 && !canProceedStep5())
              }
              className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 shadow-lg disabled:bg-gray-300 font-serif"
            >
              {step === 5 ? 'Sauvegarder et Terminer' : 'Suivant'} <ChevronRight size={20} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
// src/utils/characterEngine.js
// 12.0.0

// 🔥 1. LE NOUVEAU MOTEUR D'ÉTAT CENTRALISÉ (REDUCER)
export function characterReducer(state, action) {
	let newState = { ...state }; 
    switch (action.type) {
      case 'LOAD_CHARACTER':
      case 'RESET_CHARACTER':
        newState = { ...action.payload };
        break;
      case 'UPDATE_FIELD':
        newState[action.field] = action.value;
        break;
      case 'UPDATE_MULTIPLE':
        newState = { ...newState, ...action.payload };
        break;
      case 'TOGGLE_ARRAY_ITEM':
        const currentArray = newState[action.field] || [];
        if (currentArray.includes(action.value)) {
          newState[action.field] = currentArray.filter(item => item !== action.value);
        } else if (currentArray.length < action.max) {
          newState[action.field] = [...currentArray, action.value];
        }
        break;
    default:
      return state;
  }

  // ✨ LE BOUCLIER ANTI-LAG (SHORT-CIRCUIT) ✨
  // On liste les champs purement narratifs qui n'ont aucun impact sur les statistiques
  const textFields = ['nom', 'nomFeerique', 'sexe', 'genreHumain', 'taille', 'poids', 'apparence', 'isPublic'];
  
  // Si l'action est une simple mise à jour de texte, on retourne l'état immédiatement 
  // en préservant les statistiques précédentes, sans relancer le lourd moteur mathématique !
  if (action.type === 'UPDATE_FIELD' && textFields.includes(action.field)) {
    return newState;
  }

  // ⚙️ LE CALCULATEUR AUTOMATIQUE INTÉGRÉ
  // Si le jeu a bien chargé ses données, on déclenche les calculs :
    if (action.gameData && action.gameData.fairyData && newState.typeFee) {
      const feeData = action.gameData.fairyData[newState.typeFee];

      // --- A. Calcul de l'Entregent Total ---
      let entregent = newState.competencesLibres?.rangs?.['Entregent'] || 0;

      // 1. Bonus de Profil
      if (newState.profils?.majeur?.nom === 'Gentleman') entregent += 2;
      if (newState.profils?.mineur?.nom === 'Gentleman') entregent += 1;

      // 2. Bonus de Prédilection (Si inné à la fée OU choisi par le joueur)
      const hasEntregentPredilection =
        feeData?.competencesPredilection?.some(p => p.nom === 'Entregent' && !p.isChoix) ||
        Object.values(newState.competencesLibres?.choixPredilection || {}).includes('Entregent');

      if (hasEntregentPredilection) entregent += 2;

      // --- B. Calcul des Bourses de Contacts Gratuits ---
      const prestance = newState.caracteristiques?.prestance || 0;
      const bonusPrestance = Math.max(0, prestance - 3);
      const bonusEntregent = Math.max(0, entregent - 3);

      // --- C. LE SUPER-CALCULATEUR DE PROFILS ET PP CENTRALISÉ ---
      const atoutsRangs = {};
      (newState.atouts || []).forEach(atoutId => {
        const atout = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
        if (atout && atout.effets_techniques) {
          try {
            const tech = typeof atout.effets_techniques === 'string' ? JSON.parse(atout.effets_techniques) : atout.effets_techniques;
            if (tech.competences) {
              Object.entries(tech.competences).forEach(([comp, val]) => {
                atoutsRangs[comp] = (atoutsRangs[comp] || 0) + val;
              });
            }
          } catch(e) {}
        }
      });

      const predFinales = (feeData?.competencesPredilection || []).map((p, i) => 
        p.isChoix ? newState.competencesLibres?.choixPredilection?.[i] : p.nom
      ).filter(Boolean);

      const compsMap = {
        'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
        'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
        'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
        'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
        'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
        'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
      };

      const rangsProfils = {};
      const budgetsPP = {}; 
      const competencesBase = {};  // 👈 NOUVEAU : Sauvegarde de la Base (Profil+Atout+Pred)
      const competencesTotal = {}; // 👈 NOUVEAU : Sauvegarde du Total final

      Object.keys(compsMap).forEach(profilNom => {
        let somme = 0;
        const isMajeur = newState.profils?.majeur?.nom === profilNom;
        const isMineur = newState.profils?.mineur?.nom === profilNom;
        const bonusProfil = isMajeur ? 2 : isMineur ? 1 : 0;

        compsMap[profilNom].forEach(nomComp => {
          const investis = newState.competencesLibres?.rangs?.[nomComp] || 0;
          const bonusPred = predFinales.includes(nomComp) ? 2 : 0;
          const bonusAtout = atoutsRangs[nomComp] || 0;
          
          // 🧠 Calculs individuels des compétences
          const baseScore = bonusProfil + bonusPred + bonusAtout;
          const totalScore = baseScore + investis;
          
          competencesBase[nomComp] = baseScore;
          competencesTotal[nomComp] = totalScore;

          somme += totalScore;
        });

        // Le Vrai Rang (Somme / 4)
        const rang = Math.floor(somme / 4);
        rangsProfils[profilNom] = rang;

        // Le Budget final en PP (Rang + 8 ou + 4)
        const bonusPP = isMajeur ? 8 : isMineur ? 4 : 0;
        budgetsPP[profilNom] = rang + bonusPP; 
      });

      // --- E. NOUVEAU : CALCUL DES COMPÉTENCES FUTILES (DRY) ---
      const futilesPredFinales = [];
      (feeData?.competencesFutilesPredilection || []).forEach((p, i) => {
        if (p.isChoix) {
          const choix = newState.competencesFutiles?.choixPredilection?.[i];
          if (choix) futilesPredFinales.push(choix);
        } else if (typeof p === 'string') {
          futilesPredFinales.push(p);
        }
      });

      const allFutilesNoms = new Set([
        ...futilesPredFinales,
        ...Object.keys(newState.competencesFutiles?.rangs || {})
      ]);

      const futilesBase = {};
      const futilesTotal = {};

      allFutilesNoms.forEach(nomComp => {
        const base = futilesPredFinales.includes(nomComp) ? 2 : 0;
        const investis = newState.competencesFutiles?.rangs?.[nomComp] || 0;
        futilesBase[nomComp] = base;
        futilesTotal[nomComp] = base + investis;
      });

      // --- F. Enregistrement de TOUS les Totaux ---
      newState.computedStats = {
        entregentTotal: Math.min(8, entregent),
        contactsGratuits: bonusPrestance + bonusEntregent,
        rangsProfils: rangsProfils,
        budgetsPP: budgetsPP,
        competencesBase: competencesBase,
        competencesTotal: competencesTotal,
        predFinales: predFinales,
        // 👇 ON SAUVEGARDE LES FUTILES ICI !
        futilesPredFinales: futilesPredFinales,
        futilesBase: futilesBase,
        futilesTotal: futilesTotal
      };
    }
    return newState;
  }
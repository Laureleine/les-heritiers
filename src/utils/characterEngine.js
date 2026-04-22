// src/utils/characterEngine.js

import { reconstructHistory } from './historyReconstructor';

// 🔥 1. LE NOUVEAU MOTEUR D'ÉTAT CENTRALISÉ (REDUCER)
export function characterReducer(state, action) {
	let newState = { ...state }; 
    switch (action.type) {
		// ✨ LA MIGRATION DOUCE ET INTELLIGENTE (Archéologie de l'Âme)
		case 'LOAD_CHARACTER': {
		  let loadedState = { ...action.payload };
		  const isScelle = loadedState.statut === 'scelle' || loadedState.statut === 'scellé';
		  
		  // Si c'est un vieux personnage déjà en jeu...
		  if (isScelle) {
			if (!loadedState.data) loadedState.data = {};
			
			// ...et qu'il n'a pas encore de registre d'XP...
			if (!loadedState.data.historique_xp || loadedState.data.historique_xp.length === 0) {
			  const pastTotal = loadedState.xp_total || 0;
			  const pastDepense = loadedState.xp_depense || 0;
			  
			  if (pastTotal > 0 || pastDepense > 0) {
				loadedState.data.historique_xp = [];
				
				// 1. Le Gain Originel
				if (pastTotal > 0) {
				  loadedState.data.historique_xp.push({
					type: 'GAIN',
					label: 'Expérience acquise avant l\'ouverture du Registre',
					valeur: pastTotal,
					date_mouvement: new Date(Date.now() - 200000).toISOString() 
				  });
				}
				
				// 2. La Fouille Archéologique
				if (pastDepense > 0) {
				  const reconstructedTxs = reconstructHistory(loadedState, action.gameData);
				  
				  // 3. L'Intégrité Mathématique (Le Solde de Tout Compte)
				  const sumReconstructed = reconstructedTxs.reduce((acc, tx) => acc + tx.valeur, 0);
				  
				  if (sumReconstructed !== pastDepense) {
					const difference = pastDepense - sumReconstructed;
					reconstructedTxs.push({
					  type: difference > 0 ? 'DEPENSE' : 'REMBOURSEMENT',
					  label: difference > 0 ? 'Ajustements manuels antérieurs (Passif)' : 'Remboursements antérieurs (Passif)',
					  valeur: Math.abs(difference),
					  date_mouvement: new Date(Date.now() - 1000).toISOString() // La toute dernière ligne du passé
					});
				  }

				  // On injecte les lignes du passé en antéchronologique (les plus récentes d'abord)
				  reconstructedTxs.reverse().forEach(tx => {
					loadedState.data.historique_xp.unshift(tx);
				  });
				}
			  }
			}
		  }
		  
		  newState = loadedState;
		  break;
		}
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
    // ==========================================================
    // ✨ LE GRAND REGISTRE (JOURNAL DES FLUX DE L'ÂME)
    // ==========================================================
    case 'LOG_XP_TRANSACTION': {
      const { transaction } = action;
      if (!transaction) break; // 👈 FIX : On break au lieu de return !

      // 1. On s'assure que le livre de comptes existe dans notre structure JSONB flexible
      if (!newState.data) newState.data = {};
      if (!newState.data.historique_xp) newState.data.historique_xp = [];

      // 2. On grave la ligne dans le registre temporel
      const newTx = {
        ...transaction,
        date_mouvement: new Date().toISOString()
      };
      
      // On l'ajoute au début du tableau pour avoir le plus récent en premier
      newState.data.historique_xp = [newTx, ...newState.data.historique_xp];

      // 3. LA VÉRITÉ UNIQUE : Le recalcul mathématique absolu
      if (transaction.type === 'GAIN') {
        newState.xp_total = (newState.xp_total || 0) + transaction.valeur;
      } 
      else if (transaction.type === 'DEPENSE') {
        newState.xp_depense = (newState.xp_depense || 0) + transaction.valeur;
      } 
      else if (transaction.type === 'REMBOURSEMENT') {
        // En cas d'annulation, on rembourse la dépense (sans jamais descendre sous 0)
        newState.xp_depense = Math.max(0, (newState.xp_depense || 0) - transaction.valeur);
      }

      break; // 👈 FIX : Le fameux break ! On sort du switch pour laisser le Calculateur faire son job en dessous !
    }
	
    default:
      return state;
  }

  // ✨ L'HYDRATATION ABSOLUE (Le Dogme de l'Architecte)
  // On grave la vérité absolue dans l'état React. Ainsi, toute sauvegarde envoyée
  // à Supabase (ou extraite en JSON) contiendra 100% de l'ADN de naissance !
  if (action.gameData?.fairyData && newState.typeFee) {
    const feeData = action.gameData.fairyData[newState.typeFee];
    
    if (feeData) { // 👈 LA FAMEUSE ACCOLADE OUVERTE
      
      // 1. Aspiration des gènes innés
      newState.anciennete = newState.anciennete || feeData.anciennete || feeData.era || 'traditionnelle';
      newState.avantages = feeData.avantages || [];
      newState.desavantages = feeData.desavantages || [];

      // 2. Le Lisseur Grammatical (Accord automatique du sexe)
      const isFemme = (newState.genreHumain || newState.sexe) === 'Femme' || (newState.genreHumain || newState.sexe) === 'Féminin';
      const accorder = (texte) => {
        if (!texte) return '';
        const parts = texte.split('/');
        return (isFemme && parts.length > 1) ? parts.at(1).trim() : parts.at(0).trim();
      };

      // ✨ FIX : On NE DÉTRUIT PLUS le texte brut ("Curieux/Curieuse") dans l'état React !
      // On conserve l'ADN d'origine pour pouvoir re-calculer le sexe à l'infini,
      // et on range les versions lisses dans computedStats pour satisfaire les exports JSON purs.
      newState.computedStats = newState.computedStats || {};
      newState.computedStats.traits_lisses = {
        feeriques: (newState.traitsFeeriques || []).map(t => accorder(t)),
        majeur: accorder(newState.profils?.majeur?.trait),
        mineur: accorder(newState.profils?.mineur?.trait)
      };
	  
      // 3. Hydratation des caractéristiques de base
      if (feeData.caracteristiques) {
        const baseCaracs = {
          agilite: feeData.caracteristiques.agilite?.min || 1,
          constitution: feeData.caracteristiques.constitution?.min || 1,
          force: feeData.caracteristiques.force?.min || 1,
          precision: feeData.caracteristiques.precision?.min || 1,
          esprit: feeData.caracteristiques.esprit?.min || 1,
          perception: feeData.caracteristiques.perception?.min || 1,
          prestance: feeData.caracteristiques.prestance?.min || 1,
          sangFroid: feeData.caracteristiques.sangFroid?.min || 1,
          feerie: feeData.caracteristiques.feerie?.min || 3,
          masque: feeData.caracteristiques.masque?.min || 4
        };

        // Fusion sans écraser les investissements réels
        newState.caracteristiques = { ...baseCaracs, ...(newState.caracteristiques || {}) };
        
        const tricherieBase = feeData.caracteristiques.tricherie?.min || Math.floor((newState.caracteristiques.feerie + newState.caracteristiques.masque) / 2);
        newState.caracteristiques.tricherie = Math.max(tricherieBase, Math.floor((newState.caracteristiques.feerie + newState.caracteristiques.masque) / 2));

        // Hydratation de l'Archive Scellée (Plancher de Verre)
        if (newState.data?.stats_scellees?.caracteristiques) {
          newState.data.stats_scellees.caracteristiques = {
            ...baseCaracs,
            ...newState.data.stats_scellees.caracteristiques
          };
          const sf = newState.data.stats_scellees.caracteristiques.feerie;
          const sm = newState.data.stats_scellees.caracteristiques.masque;
          const stBase = feeData.caracteristiques.tricherie?.min || Math.floor((sf + sm) / 2);
          newState.data.stats_scellees.caracteristiques.tricherie = Math.max(stBase, Math.floor((sf + sm) / 2));
        }
      }
    } // 👈 LA VOILÀ ! L'ACCOLADE MANQUANTE QUI FAISAIT CRASHER TON FICHIER !
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
    // 3. Bonus issus des Atouts Féériques
    const atoutsRangs = {};
    const priceModifiers = {}; // ✨ NOUVEAU : Le portefeuille de Bons de Réduction !

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
          // ✨ L'INCISION : On aspire les ajustements de prix de la Boutique !
          if (tech.price_modifiers) {
            Object.entries(tech.price_modifiers).forEach(([itemName, newPrice]) => {
              priceModifiers[itemName] = newPrice;
            });
          }
        } catch(e) {}
      }
    });
	
    const predFinales = (feeData?.competencesPredilection || [])
      .filter(p => !p.isOnlySpecialty) // ✨ L'INTERDIT : On ignore les Spécialités Pures pour le bonus +2 !
      .map((p, i) => p.isChoix ? newState.competencesLibres?.choixPredilection?.[i] : p.nom )
      .filter(Boolean);

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

      // ✨ G. L'ANNUAIRE D'EXPORTATION (La Bible Autonome pour JSON et VTT externes)
      const capacitesInnees = [];
      if (feeData?.capacites?.fixe1?.nom && feeData.capacites.fixe1.nom !== 'Inconnu') capacitesInnees.push(feeData.capacites.fixe1.nom);
      if (feeData?.capacites?.fixe2?.nom && feeData.capacites.fixe2.nom !== 'Inconnu') capacitesInnees.push(feeData.capacites.fixe2.nom);

      const avantagesInnes = feeData?.avantages?.map(a => typeof a === 'string' ? a : a.nom) || [];
      const desavantagesInnes = feeData?.desavantages?.map(d => typeof d === 'string' ? d : d.nom) || [];

      // On compile TOUTES les spécialités du personnage (Innées, Achetées, Atouts, Métiers) en texte clair
      const toutesLesSpecialites = [];
      if (newState.competencesLibres?.specialiteMetier?.nom) toutesLesSpecialites.push(`${newState.competencesLibres.specialiteMetier.comp} : ${newState.competencesLibres.specialiteMetier.nom} (Métier)`);
      
      Object.entries(newState.competencesLibres?.choixSpecialiteUser || {}).forEach(([comp, specs]) => {
        specs.forEach(s => toutesLesSpecialites.push(`${comp} : ${s} (Acquise)`));
      });
      
      if (feeData?.competencesPredilection) {
        feeData.competencesPredilection.forEach((pred, idx) => {
          const feeSpec = pred.specialite || (pred.isSpecialiteChoix ? newState.competencesLibres?.choixSpecialite?.[idx] : null);
          if (feeSpec) toutesLesSpecialites.push(`${pred.nom} : ${feeSpec} (Innée)`);
        });
      }
      
      (newState.atouts || []).forEach(atoutId => {
        const atoutDef = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
        if (atoutDef?.effets_techniques) {
          try {
            const tech = typeof atoutDef.effets_techniques === 'string' ? JSON.parse(atoutDef.effets_techniques) : atoutDef.effets_techniques;
            if (tech.specialites) tech.specialites.forEach(s => toutesLesSpecialites.push(`${s.competence} : ${s.nom} (Atout)`));
          } catch(e) {}
        }
      });

      // On traduit les UUIDs de l'inventaire en noms lisibles
      const inventaireLisible = { armes_equipements: [], contacts: [], langues: [], titres: [] };
      const allBoughtIds = Object.values(newState.vieSociale || {}).flat();

      if (action.gameData?.socialItems) {
        const boughtItems = action.gameData.socialItems.filter(item => allBoughtIds.includes(item.id));
        
        // ✨ LE FIX : L'ADN JSON tire désormais les langues directement de leur nouvel emplacement !
        inventaireLisible.langues = newState.profils?.langues || [];
        
        inventaireLisible.contacts = boughtItems.filter(i => i.categorie === 'contact').map(i => i.nom);
        inventaireLisible.titres = boughtItems.filter(i => i.categorie === 'titre').map(i => i.nom);
        inventaireLisible.armes_equipements = boughtItems.filter(i => !['langue', 'contact', 'titre'].includes(i.categorie)).map(i => i.nom);
      }
	  
      const bibleAutonome = {
        capacites_innees: capacitesInnees,
        avantages_innes: avantagesInnes,
        desavantages_innes: desavantagesInnes,
        specialites_globales: toutesLesSpecialites,
        inventaire_lisible: inventaireLisible
      };

      // ---------------------------------------------------------

      newState.computedStats = {
        entregentTotal: Math.min(8, entregent),
        contactsGratuits: bonusPrestance + bonusEntregent,
        rangsProfils: rangsProfils,
        budgetsPP: budgetsPP,
        competencesBase: competencesBase,
        competencesTotal: competencesTotal,
        predFinales: predFinales,
        futilesPredFinales: futilesPredFinales,
        futilesBase: futilesBase,
        futilesTotal: futilesTotal,
		priceModifiers: priceModifiers,		
        bible_autonome: bibleAutonome // ✨ ON RANGE LA BIBLE ICI !
      };
    }

    return newState;
  }
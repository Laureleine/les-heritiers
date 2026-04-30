// src/utils/characterEngine.js
import { reconstructHistory } from './historyReconstructor';
import { calculateCharacterStats } from './bonusCalculator';

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

        case 'UPDATE_FIELD': {
            newState[action.field] = action.value;
            break;
        }

        case 'UPDATE_MULTIPLE': {
            newState = { ...newState, ...action.payload };
            break;
        }

        case 'TOGGLE_ARRAY_ITEM': {
            const currentArray = newState[action.field] || [];
            if (currentArray.includes(action.value)) {
                newState[action.field] = currentArray.filter(item => item !== action.value);
            } else if (currentArray.length < action.max) {
                newState[action.field] = [...currentArray, action.value];
            }
            break;
        }

        case 'RESET_CHARACTER': {
            newState = { ...(action.payload || {}) };
            break;
        }

        // ==========================================================
        // ✨ LE GRAND REGISTRE (JOURNAL DES FLUX DE L'ÂME)
        // ==========================================================
        case 'LOG_XP_TRANSACTION': {
            const { transaction } = action;
            if (!transaction) break;

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
            break;
        }

        default:
            break; 
    }

    // ✨ L'HYDRATATION ABSOLUE (Le Dogme de l'Architecte)
    if (action.gameData?.fairyData && newState.typeFee) {
        const feeData = action.gameData.fairyData[newState.typeFee];
        if (feeData) {
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
        }
    }

    // ✨ LE BOUCLIER ANTI-LAG (SHORT-CIRCUIT) ✨
    const textFields = ['nom', 'nomFeerique', 'sexe', 'genreHumain', 'taille', 'poids', 'apparence', 'isPublic'];
    if (action.type === 'UPDATE_FIELD' && textFields.includes(action.field)) {
        return newState;
    }

    // ⚙️ LE CALCULATEUR AUTOMATIQUE INTÉGRÉ
    if (action.gameData && action.gameData.fairyData && newState.typeFee) {
        const feeData = action.gameData.fairyData[newState.typeFee];
        const isScelle = newState.statut === 'scelle' || newState.statut === 'scellé'; // On a besoin de savoir si on est en Évolution

        // --- A. Calcul de l'Entregent Total ---
        let entregent = newState.competencesLibres?.rangs?.['Entregent'] || 0;
        if (newState.profils?.majeur?.nom === 'Gentleman') entregent += 2;
        if (newState.profils?.mineur?.nom === 'Gentleman') entregent += 1;
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
        const priceModifiers = {};
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
                    if (tech.price_modifiers) {
                        Object.entries(tech.price_modifiers).forEach(([itemName, newPrice]) => {
                            priceModifiers[itemName] = newPrice;
                        });
                    }
                } catch(e) {}
            }
        });

        // ✨ MÉMOIRE ORIGINELLE : On calcule les Atouts originels (Plancher) pour la progression des PP
        const atoutsRangsBase = {};
        if (isScelle) {
            (newState.data?.stats_scellees?.atouts || []).forEach(atoutId => {
                const atout = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
                if (atout && atout.effets_techniques) {
                    try {
                        const tech = typeof atout.effets_techniques === 'string' ? JSON.parse(atout.effets_techniques) : atout.effets_techniques;
                        if (tech.competences) {
                            Object.entries(tech.competences).forEach(([comp, val]) => {
                                atoutsRangsBase[comp] = (atoutsRangsBase[comp] || 0) + val;
                            });
                        }
                    } catch(e) {}
                }
            });
        }

        const predFinales = (feeData?.competencesPredilection || [])
            .filter(p => !p.isOnlySpecialty)
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
        const competencesBase = {};
        const competencesTotal = {};

        Object.keys(compsMap).forEach(profilNom => {
            let sommeActuelle = 0;
            let sommeBase = 0;
            const isMajeur = newState.profils?.majeur?.nom === profilNom;
            const isMineur = newState.profils?.mineur?.nom === profilNom;
            const bonusProfil = isMajeur ? 2 : isMineur ? 1 : 0;

            compsMap[profilNom].forEach(nomComp => {
                const investisActuels = newState.competencesLibres?.rangs?.[nomComp] || 0;
                // La douane temporelle : Quelle était la valeur à la création ?
                const investisBase = isScelle ? (newState.data?.stats_scellees?.competencesLibres?.rangs?.[nomComp] || 0) : investisActuels;

                const bonusPred = predFinales.includes(nomComp) ? 2 : 0;
                
                const bonusAtoutActuel = atoutsRangs[nomComp] || 0;
                const bonusAtoutBase = isScelle ? (atoutsRangsBase[nomComp] || 0) : bonusAtoutActuel;

                const baseScoreActuel = bonusProfil + bonusPred + bonusAtoutActuel;
                const baseScoreBase = bonusProfil + bonusPred + bonusAtoutBase;

                const totalScoreActuel = baseScoreActuel + investisActuels;
                const totalScoreBase = baseScoreBase + investisBase;

                competencesBase[nomComp] = baseScoreActuel;
                competencesTotal[nomComp] = totalScoreActuel;
                
                sommeActuelle += totalScoreActuel;
                sommeBase += totalScoreBase;
            });

            const rangActuel = Math.floor(sommeActuelle / 4);
            const rangBase = Math.floor(sommeBase / 4);
            
            rangsProfils[profilNom] = rangActuel;
            const bonusPP = isMajeur ? 8 : isMineur ? 4 : 0;
            
            let budgetTotal = bonusPP + rangBase;
            
            // ✨ LA RÈGLE D'ÉVOLUTION : Chaque nouveau rang R franchi donne R points de PP supplémentaires
            if (isScelle && rangActuel > rangBase) {
                for (let i = rangBase + 1; i <= rangActuel; i++) {
                    budgetTotal += i;
                }
            }
            
            budgetsPP[profilNom] = budgetTotal;
        });

        // --- E. CALCUL DES COMPÉTENCES FUTILES (DRY) ---
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

        // --- G. L'ANNUAIRE D'EXPORTATION (La Bible Autonome)
        const capacitesInnees = [];
        if (feeData?.capacites?.fixe1?.nom && feeData.capacites.fixe1.nom !== 'Inconnu') capacitesInnees.push(feeData.capacites.fixe1.nom);
        if (feeData?.capacites?.fixe2?.nom && feeData.capacites.fixe2.nom !== 'Inconnu') capacitesInnees.push(feeData.capacites.fixe2.nom);

        const avantagesInnes = feeData?.avantages?.map(a => typeof a === 'string' ? a : a.nom) || [];
        const desavantagesInnes = feeData?.desavantages?.map(d => typeof d === 'string' ? d : d.nom) || [];

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

        const inventaireLisible = { armes_equipements: [], contacts: [], langues: [], titres: [] };
        const allBoughtIds = Object.values(newState.vieSociale || {}).flat();

        if (action.gameData?.socialItems) {
            const boughtItems = action.gameData.socialItems.filter(item => allBoughtIds.includes(item.id));
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

        // --- ✨ H. LE MOTEUR DE COMBAT ABSOLU (DRY) ---
        const finalStats = calculateCharacterStats(newState, action.gameData);

        const getFinalCarac = (k) => {
            const base = newState.caracteristiques?.[k] || feeData?.caracteristiques?.[k]?.min || 1;
            const bonus = finalStats.caracteristiques.bonus[k]?.reduce((acc, b) => acc + b.value, 0) || 0;
            return base + bonus;
        };

        const getFinalComp = (k) => {
            const base = competencesTotal[k] || 0;
            const bonus = finalStats.competences.bonus[k]?.reduce((acc, b) => acc + b.value, 0) || 0;
            return base + bonus;
        };

        const agi = getFinalCarac('agilite');
        const con = getFinalCarac('constitution');
        const esp = getFinalCarac('esprit');
        const masque = getFinalCarac('masque');
        const sangFroid = getFinalCarac('sangFroid'); // Respect strict de la variable pour le calcul ci-dessous

        const sMouv = getFinalComp('Mouvement');
        const sMelee = getFinalComp('Mêlée');
        const sRes = getFinalComp('Ressort');
        const sFort = getFinalComp('Fortitude');
        const sArt = getFinalComp('Art de la guerre');

        const bonusMasqueResist = Math.max(0, masque - 5);
        const tailleFeerique = feeData?.taille || feeData?.taille_categorie || 'Moyenne';

        let modTailleFeerique = 0;
        if (tailleFeerique === 'Petite') modTailleFeerique = 1;
        else if (tailleFeerique === 'Grande') modTailleFeerique = -1;
        else if (tailleFeerique === 'Très Grande') modTailleFeerique = -2;

        const esquiveMasquee = sMouv + agi + 5;

        const combatStats = {
            esquiveMasquee: esquiveMasquee,
            esquiveDemasquee: esquiveMasquee + modTailleFeerique,
            parade: sMelee + agi + 5,
            resPhys: sRes + con + 5 + bonusMasqueResist,
            resPsych: sFort + esp + 5 + bonusMasqueResist,
            initiative: sArt + sangFroid,
            pvMax: (3 * con) + 9
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
            bible_autonome: bibleAutonome,
            combat: combatStats // ✨ LA VÉRITÉ ABSOLUE EST MAINTENANT ICI !
        };
    }
    
    return newState;
}
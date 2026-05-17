// src/components/vieSociale/useVieSociale.js
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { showInAppNotification } from '../../utils/SystemeServices';
import { getFortuneCost } from '../../utils/xpCalculator';
import { isCharacterScelle } from '../../utils/lockUtils';
import { safeParse, safeParseArray } from '../../utils/json';
import { getXpState, XP_CODES } from '../../utils/xpActions';
import { queueContactSync } from '../../utils/contactSyncQueue';

export function useVieSociale() {
    const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
    const isScelle = isCharacterScelle(character);

    const { fairyData, socialItems } = gameData;
    const feeData = fairyData?.[character.typeFee];

    const tousLesProfils = useMemo(() => ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'], []);
    const [activeTab, setActiveTab] = useState(character.profils?.majeur?.nom || 'Gentleman');
    const [achats, setAchats] = useState(character.vieSociale || {});

    const getProfilDisplayName = useCallback((pName) => {
        const isFemme = character.genreHumain === 'Féminin' || character.sexe === 'Femme';
        if (!isFemme) return pName;
        return gameData.profils?.find(p => p.nom === pName)?.nomFeminin || pName;
    }, [character.genreHumain, character.sexe, gameData.profils]);

    const catalogueParProfil = useMemo(() => {
        const dict = {};
        tousLesProfils.forEach(p => {
            dict[p] = socialItems.filter(item => {
                // ✨ LE FIX : On lit enfin notre colonne JSONB multi-profils !
                const parsedArray = safeParseArray(item.profils_autorises);

                // Rétrocompatibilité avec l'ancienne clé étrangère unique
                const legacyProfile = item.profils?.name_masculine || item.profils?.nom;

                return parsedArray.includes(p) || legacyProfile === p;
            });
        });
        return dict;
    }, [socialItems, tousLesProfils]);

    // ✨ FIX DU FIX : On lit les VRAIES colonnes `cout` et `cout_moderne` !
    const getItemCost = useCallback((itemId, pName) => {
        // Supporte à la fois un ID direct ou un objet entier passé par StepVieSociale
        const item = typeof itemId === 'object' ? itemId : socialItems.find(i => i.id === itemId);
        if (!item) return 0;

        // On lit l'ADN exact de la base de données en fonction de l'époque
        let cost = (character.anciennete === 'moderne' && item.cout_moderne !== null && item.cout_moderne !== undefined)
            ? Number(item.cout_moderne)
            : (item.cout !== undefined && item.cout !== null ? Number(item.cout) : 0);

        // Mode Évolution : un métier acheté coûte 2 PP de moins (avec un plancher à 0)
        if ((item.categorie === 'metier' || item.categorie === 'statut') && isScelle) {
            const alreadyBought = Object.values(achats).flat().includes(item.id);
            if (!alreadyBought) cost = Math.max(0, cost - 2);
        }
        return cost;
    }, [socialItems, achats, isScelle, character.anciennete]);

    // LE NOUVEAU GESTIONNAIRE D'ALLOCATION DE RÉDUCTION
    const updateContactAllocation = useCallback((pName, delta) => {
        if (isReadOnly) return;
        setAchats(prev => {
            const currentAllocs = prev.allocationsContacts || {};
            const currentVal = currentAllocs[pName] || 0;
            const newVal = Math.max(0, currentVal + delta);
            const newAchats = { ...prev, allocationsContacts: { ...currentAllocs, [pName]: newVal } };
            dispatchCharacter({ type: 'UPDATE_FIELD', field: 'vieSociale', value: newAchats, gameData });
            return newAchats;
        });
    }, [isReadOnly, dispatchCharacter, gameData]);

// MOTEUR DE BUDGETS
    const budgetsInfo = useMemo(() => {
        const items = socialItems || [];
        const computed = character.computedStats || {};

        let freeContactsTotal = computed.contactsGratuits || 0;
        if (freeContactsTotal === 0 && !computed.budgetsPP) {
            freeContactsTotal = Math.max(0, (character.caracteristiques?.prestance || 0) - 3) + Math.max(0, (character.caracteristiques?.entregent || 0) - 3);
        }

        const depenses = {}; const budgets = {}; const budgetsBase = {}; const rests = {}; const depensesContacts = {};
        const budgetsPP = computed.budgetsPP || {};
        tousLesProfils.forEach(p => {
            depenses[p] = 0; depensesContacts[p] = 0; 
            budgetsBase[p] = budgetsPP[p] || 0;
            budgets[p] = budgetsBase[p];
        });

        // 1. Calcul des dépenses brutes
        tousLesProfils.forEach(pName => {
            const myItemsIds = achats[pName] || [];
            myItemsIds.forEach(id => {
                const item = items.find(i => i.id === id);
                if (item) {
                    const baseCost = getItemCost(item.id, pName);
                    const itemKey = `${item.nom} (${item.cout ?? 0} PP)`;
                    const modifiedCost = computed.priceModifiers?.[itemKey]
                        ?? computed.priceModifiers?.[item.nom];
                    const finalCost = modifiedCost !== undefined ? modifiedCost : baseCost;
                    depenses[pName] += finalCost;
                    if (item.categorie === 'contact') depensesContacts[pName] += finalCost;
                }
            });
        });

        // 2. Allocations de contacts gratuits (s'ajoutent au budget pour les contacts uniquement)
        let totalAllocated = 0;
        const safeAllocations = {};
        const userAllocations = achats.allocationsContacts || {};

        const requestedPerProfile = {};
        tousLesProfils.forEach(pName => {
            requestedPerProfile[pName] = userAllocations[pName] || 0;
        });

        tousLesProfils.forEach(pName => {
            const requested = requestedPerProfile[pName];
            const alloc = Math.min(requested, freeContactsTotal - totalAllocated);
            safeAllocations[pName] = alloc;
            totalAllocated += alloc;
            budgets[pName] += alloc;
        });

        const freeRemaining = Math.max(0, freeContactsTotal - totalAllocated);

        tousLesProfils.forEach(pName => {
            rests[pName] = budgets[pName] - depenses[pName];
        });

        return { depenses, budgets, budgetsBase, rests, depensesContacts, safeAllocations, freeContactsRemaining: freeRemaining, freeContactsTotal };
        
    }, [achats, socialItems, tousLesProfils, character.computedStats, character.caracteristiques, getItemCost]);

    // MOTEUR DE FORTUNE
    const getFortuneFromHeritage = useCallback(() => {
        let hBase = 0, hBonus = 0;
        const applyTechEffects = (techStr) => {
            const tech = safeParse(techStr);
            if (tech.fortune_score !== undefined) hBase = Math.max(hBase, tech.fortune_score);
            if (tech.fortune_bonus !== undefined) hBonus += tech.fortune_bonus;
            if (tech.fortune !== undefined) hBonus += tech.fortune;
        };

        if (feeData?.effets_techniques) applyTechEffects(feeData.effets_techniques);

        if (character.atouts) {
            character.atouts.forEach(atoutId => {
                const atout = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
                if (atout && atout.effets_techniques) applyTechEffects(atout.effets_techniques);
            });
        }

        if (feeData?.avantages) {
            feeData.avantages.forEach(av => {
                const isOwned = (character.avantages && character.avantages.length > 0) ? (character.avantages.includes(av.id) || character.avantages.includes(av.nom)) : true;
                if (isOwned && av.effets_techniques) applyTechEffects(av.effets_techniques);
            });
        }

        if (feeData?.desavantages) {
            feeData.desavantages.forEach(desav => {
                const isOwned = (character.desavantages && character.desavantages.length > 0) ? (character.desavantages.includes(desav.id) || character.desavantages.includes(desav.nom)) : true;
                if (isOwned && desav.effets_techniques) applyTechEffects(desav.effets_techniques);
            });
        }

        if (character.capaciteChoisie && feeData?.capacites) {
            const cap = feeData.capacites.choix?.find(c => c.id === character.capaciteChoisie || c.nom === character.capaciteChoisie);
            if (cap && cap.bonus) applyTechEffects(cap.bonus);
        }

        return { hBase, hBonus };
    }, [character.atouts, character.avantages, character.desavantages, character.capaciteChoisie, feeData]);

    const plancherFortune = useMemo(() => {
        let fBase = 0, fBonus = 0;
        Object.entries(achats).forEach(([key, values]) => {
            if (key !== 'allocationsContacts' && Array.isArray(values)) {
                values.forEach(id => {
                    const i = socialItems.find(x => x.id === id);
                    if (i) {
                        if (i.fortune_score !== null && i.fortune_score !== undefined) fBase = Math.max(fBase, i.fortune_score);
                        if (i.fortune_bonus !== null && i.fortune_bonus !== undefined) fBonus += i.fortune_bonus;
                    }
                });
            }
        });

        const heritage = getFortuneFromHeritage();
        fBase = Math.max(fBase, heritage.hBase);
        fBonus += heritage.hBonus;

        return Math.min(15, fBase + fBonus);
    }, [achats, socialItems, getFortuneFromHeritage]);

    const prevFortuneRef = useRef(character.fortune);

    useEffect(() => {
        if (!isScelle && !isReadOnly && character.fortune !== plancherFortune && prevFortuneRef.current !== plancherFortune) {
            prevFortuneRef.current = plancherFortune;
            dispatchCharacter({ type: 'UPDATE_FIELD', field: 'fortune', value: plancherFortune, gameData });
        }
    }, [plancherFortune, character.fortune, isScelle, isReadOnly, dispatchCharacter, gameData]);

    // ✨ LE NOUVEAU GESTIONNAIRE D'ACHATS (Celui avec les +/- et le bon calcul de `restes`)
    const handleToggleItem = useCallback((item, profilNom, action = null) => {
        if (isReadOnly) return;
        if (item.is_official === false) {
            if (!window.confirm(`⚠️ "${item.nom}" est un item social non-officiel, créé par la Communauté.\n\nSouhaitez-vous vraiment l'utiliser sur votre personnage ?`)) return;
        }

        let newAchats = { ...achats };
        let currentProfilAchats = newAchats[profilNom] || [];
        
        const baseCost = getItemCost(item.id, profilNom);
        const isMultiple = item.is_choix_multiple;
        const isContact = item.categorie === 'contact';
        const isObjet = item.categorie === 'objet';

        const itemKey = `${item.nom} (${item.cout ?? 0} PP)`;
        const modifiedCost = character.computedStats?.priceModifiers?.[itemKey]
            ?? character.computedStats?.priceModifiers?.[item.nom];
        const finalCost = modifiedCost !== undefined ? modifiedCost : baseCost;

        // Pour les contacts: budget total (avec contacts gratuits)
        // Pour les autres: budget de base uniquement (sans contacts gratuits)
        const budgetDispo = isContact 
            ? budgetsInfo.budgets[profilNom] - budgetsInfo.depenses[profilNom]
            : budgetsInfo.budgetsBase[profilNom] - (budgetsInfo.depenses[profilNom] - budgetsInfo.depensesContacts[profilNom]);

        if (isMultiple && action) {
            // 🔄 MODE ACHAT MULTIPLE (+ / -)
            if (action === 'remove') {
                const index = currentProfilAchats.lastIndexOf(item.id);
                if (index !== -1) {
                    currentProfilAchats.splice(index, 1);
                    if (isContact) queueContactSync(item, 'remove', true);
                    if (isObjet) queueContactSync(item, 'remove', true, 'possession');
                }
            } else if (action === 'add') {
                if (budgetDispo < finalCost) {
                    showInAppNotification(isContact ? "Fonds insuffisants pour ce contact." : "Fonds insuffisants dans ce profil.", "error");
                    return;
                }
                currentProfilAchats.push(item.id);
                if (isContact) queueContactSync(item, 'add', true);
                if (isObjet) queueContactSync(item, 'add', true, 'possession');
            }
        } else {
            // 🎭 MODE UNIQUE (Toggle Classique)
            const isOwned = currentProfilAchats.includes(item.id);

            if (isOwned) {
                currentProfilAchats = currentProfilAchats.filter(id => id !== item.id);
                if (isContact) queueContactSync(item, 'remove', false);
                if (isObjet) queueContactSync(item, 'remove', false, 'possession');
            } else {
                if (budgetDispo < finalCost) {
                    showInAppNotification(isContact ? "Fonds insuffisants pour ce contact." : "Fonds insuffisants dans ce profil.", "error");
                    return;
                }

                // Exclusivité des métiers principaux (On ne peut en avoir qu'un seul)
                if (item.categorie === 'metier' && item.is_secondaire === false) {
                    Object.keys(newAchats).forEach(pKey => {
                        if (pKey !== 'allocationsContacts') {
                            newAchats[pKey] = (newAchats[pKey] || []).filter(id => {
                                const i = socialItems.find(x => x.id === id);
                                return !(i && i.categorie === 'metier' && i.is_secondaire === false);
                            });
                        }
                    });
                    // On resynchronise après l'effacement
                    currentProfilAchats = newAchats[profilNom] || [];
                }
                currentProfilAchats.push(item.id);
                if (isContact) queueContactSync(item, 'add', false);
                if (isObjet) queueContactSync(item, 'add', false, 'possession');
            }
        }

        newAchats[profilNom] = currentProfilAchats;
        setAchats(newAchats);

        // 💰 RECALCUL DE LA FORTUNE
        let fBase = 0, fBonus = 0;
        Object.entries(newAchats).forEach(([key, values]) => {
            if (key !== 'allocationsContacts' && Array.isArray(values)) {
                values.forEach(id => {
                    const i = socialItems.find(x => x.id === id);
                    if (i && i.fortune_score !== null && i.fortune_score !== undefined) fBase = Math.max(fBase, i.fortune_score);
                    if (i && i.fortune_bonus !== null && i.fortune_bonus !== undefined) fBonus += i.fortune_bonus;
                });
            }
        });

        const heritage = getFortuneFromHeritage();
        fBase = Math.max(fBase, heritage.hBase);
        fBonus += heritage.hBonus;

        let fFinale = Math.min(15, fBase + fBonus);
        if (isScelle && character.fortune > fFinale) fFinale = character.fortune;
        prevFortuneRef.current = fFinale;

        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { vieSociale: newAchats, fortune: fFinale }, gameData });

    }, [isReadOnly, achats, budgetsInfo, getItemCost, dispatchCharacter, gameData, character.computedStats, character.fortune, socialItems, isScelle, getFortuneFromHeritage]);

    const handleUpgradeFortune = () => {
        if (isReadOnly || !isScelle) return;
        const currentFortune = character.fortune || 0;
        if (currentFortune >= 15) { showInAppNotification("Votre Fortune a atteint son apogée !", "warning"); return; }

        const { xpDispo } = getXpState(character);
        const cost = getFortuneCost(currentFortune, character.computedStats);

        if (xpDispo < cost) { showInAppNotification(`Fonds insuffisants ! Il vous faut ${cost} XP.`, "error"); return; }

        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { fortune: currentFortune + 1 }, gameData });
        dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: { type: 'DEPENSE', code: XP_CODES.FORTUNE_ELEVATION, label: 'Élévation Sociale : Fortune', valeur: cost, rang_final: currentFortune + 1 }, gameData });
        showInAppNotification(`Niveau de Fortune augmenté pour ${cost} XP !`, "success");
    };

    const handleDowngradeFortune = () => {
        if (isReadOnly || !isScelle) return;
        const currentFortune = character.fortune || 0;
        const originFloor = character.data?.stats_scellees?.fortune || 0;

        if (currentFortune <= originFloor) { showInAppNotification("Votre Fortune originelle est scellée !", "warning"); return; }

        const refund = getFortuneCost(currentFortune - 1, character.computedStats);
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { fortune: currentFortune - 1 }, gameData });
        dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: { type: 'REMBOURSEMENT', code: XP_CODES.FORTUNE_ELEVATION, label: 'Élévation Sociale : Fortune', valeur: refund, rang_final: currentFortune - 1 }, gameData });
        showInAppNotification(`Dépense annulée. +${refund} XP récupérés.`, "info");
    };

    return {
        character, isScelle, isReadOnly, socialItems, tousLesProfils, activeTab, setActiveTab, achats,
        getProfilDisplayName, catalogueParProfil, getItemCost, budgetsInfo, plancherFortune,
        handleToggleItem, handleUpgradeFortune, handleDowngradeFortune, updateContactAllocation
    };
}
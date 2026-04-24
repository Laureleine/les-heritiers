// src/components/vieSociale/useVieSociale.js

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useCharacter } from '../../context/CharacterContext';
import { showInAppNotification } from '../../utils/SystemeServices';
import { getFortuneCost } from '../../utils/xpCalculator';

const safeParse = (data) => {
  if (!data) return {};
  if (typeof data === 'object') return data;
  try { return JSON.parse(data); } catch { return {}; }
};

export function useVieSociale() {
  const { character, dispatchCharacter, gameData, isReadOnly } = useCharacter();
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';
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
      dict[p] = socialItems.filter(item => item.profils?.name_masculine === p);
    });
    return dict;
  }, [socialItems, tousLesProfils]);

  // ✨ LE FIX DU FIX : On lit les VRAIES colonnes `cout` et `cout_moderne` !
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
    let freeContactsTotal = character.computedStats?.contactsGratuits || 0;
    if (freeContactsTotal === 0 && !character.computedStats) {
      freeContactsTotal = Math.max(0, (character.caracteristiques?.prestance || 0) - 3) + Math.max(0, (character.caracteristiques?.entregent || 0) - 3);
    }

    const depenses = {}; const budgets = {}; const restes = {}; const depensesContacts = {};
    tousLesProfils.forEach(p => {
      depenses[p] = 0; depensesContacts[p] = 0; budgets[p] = character.computedStats?.budgetsPP?.[p] || 0;
    });

    tousLesProfils.forEach(pName => {
      const myItemsIds = achats[pName] || [];
      myItemsIds.forEach(id => {
        const item = socialItems.find(i => i.id === id);
        if (item) {
          const cost = getItemCost(item.id, pName);
          depenses[pName] += cost;
          if (item.categorie === 'contact') depensesContacts[pName] += cost;
        }
      });
    });

    let totalAllocated = 0;
    const safeAllocations = {};
    const rawAllocations = achats.allocationsContacts || {};

    tousLesProfils.forEach(pName => {
      let alloc = Math.min(rawAllocations[pName] || 0, depensesContacts[pName]);
      safeAllocations[pName] = alloc;
      totalAllocated += alloc;
    });

    const freeRemaining = Math.max(0, freeContactsTotal - totalAllocated);

    tousLesProfils.forEach(pName => {
      depenses[pName] -= safeAllocations[pName];
      restes[pName] = budgets[pName] - depenses[pName];
    });

    return { depenses, budgets, restes, depensesContacts, safeAllocations, freeContactsRemaining: freeRemaining, freeContactsTotal };
  }, [achats, socialItems, tousLesProfils, character.computedStats?.contactsGratuits, character.computedStats?.budgetsPP, character.caracteristiques?.prestance, character.caracteristiques?.entregent, getItemCost]);

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
    if (character.atouts && feeData?.atouts) {
      character.atouts.forEach(atoutId => {
        const atout = feeData.atouts.find(a => a.id === atoutId || a.nom === atoutId);
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
      const caps = [feeData.capacites.fixe1, feeData.capacites.fixe2, ...(feeData.capacites.choix || [])];
      const cap = caps.find(c => c?.nom === character.capaciteChoisie);
      if (cap && cap.bonus) {
        if (cap.bonus.fortune_score !== undefined) hBase = Math.max(hBase, cap.bonus.fortune_score);
        if (cap.bonus.fortune_bonus !== undefined) hBonus += cap.bonus.fortune_bonus;
        if (cap.bonus.fortune !== undefined) hBonus += cap.bonus.fortune;
      }
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
      dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { fortune: plancherFortune }, gameData });
    }
  }, [plancherFortune, character.fortune, isScelle, isReadOnly, dispatchCharacter, gameData]);

  const handleToggleItem = (item, profil) => {
    if (isReadOnly) return;
    const newAchats = { ...achats };
    const myProfilItems = newAchats[profil] || [];
    const isOwned = myProfilItems.includes(item.id);

    if (!isOwned) {
      const cost = getItemCost(item.id, profil);
      const effectiveCost = item.categorie === 'contact' ? Math.max(0, cost - budgetsInfo.freeContactsRemaining) : cost;
      if (budgetsInfo.restes[profil] < effectiveCost) {
        showInAppNotification(`Fonds insuffisants pour acquérir ceci via votre profil de ${profil} !`, "warning");
        return;
      }
    }

    if (isOwned) {
      newAchats[profil] = myProfilItems.filter(id => id !== item.id);
    } else {
      if (item.categorie === 'metier' && item.is_secondaire === false) {
        Object.keys(newAchats).forEach(pKey => {
          if (pKey !== 'allocationsContacts') {
            newAchats[pKey] = (newAchats[pKey] || []).filter(id => {
              const i = socialItems.find(x => x.id === id);
              return !(i && i.categorie === 'metier' && i.is_secondaire === false);
            });
          }
        });
      }
      if (!newAchats[profil]) newAchats[profil] = [];
      newAchats[profil].push(item.id);
    }

    setAchats(newAchats);

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
  };

  const handleUpgradeFortune = () => {
    if (isReadOnly || !isScelle) return;
    const currentFortune = character.fortune || 0;
    if (currentFortune >= 15) { showInAppNotification("Votre Fortune a atteint son apogée !", "warning"); return; }
    const xpDepense = character.xp_depense || 0;
    const xpDispo = (character.xp_total || 0) - xpDepense;
    const cost = getFortuneCost(currentFortune, character.computedStats);
    if (xpDispo < cost) { showInAppNotification(`Fonds insuffisants ! Il vous faut ${cost} XP.`, "error"); return; }
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { fortune: currentFortune + 1, xp_depense: xpDepense + cost }, gameData });
    showInAppNotification(`Niveau de Fortune augmenté pour ${cost} XP !`, "success");
  };

  const handleDowngradeFortune = () => {
    if (isReadOnly || !isScelle) return;
    const currentFortune = character.fortune || 0;
    const originFloor = character.data?.stats_scellees?.fortune || 0;
    if (currentFortune <= originFloor) { showInAppNotification("Votre Fortune originelle est scellée !", "warning"); return; }
    const refund = getFortuneCost(currentFortune - 1, character.computedStats);
    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { fortune: currentFortune - 1, xp_depense: (character.xp_depense || 0) - refund }, gameData });
    showInAppNotification(`Dépense annulée. +${refund} XP récupérés.`, "info");
  };

  return {
    character, isScelle, isReadOnly, socialItems, tousLesProfils, activeTab, setActiveTab, achats,
    getProfilDisplayName, catalogueParProfil, getItemCost, budgetsInfo, plancherFortune,
    handleToggleItem, handleUpgradeFortune, handleDowngradeFortune, updateContactAllocation
  };
}
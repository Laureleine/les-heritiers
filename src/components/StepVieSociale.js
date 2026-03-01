// src/components/StepVieSociale.js
// 9.3.0

import React, { useState, useEffect, useMemo } from 'react';
import { ChevronUp, ChevronDown, MessageCircle, Star, ShoppingBag, Award, Coins, Briefcase, Plus, Minus, AlertCircle, Loader, Package, Users, CheckCircle, Crown } from 'lucide-react';
import { supabase } from '../config/supabase';

const CategoryAccordion = ({ title, icon, items, myItems, reste, toggleAchat, profilNom, getItemCost, freeContactsRemaining = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <div className="mb-4 bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 bg-amber-50 hover:bg-amber-100 transition-colors"
      >
        <h4 className="font-serif font-bold text-amber-900 flex items-center gap-2">
          {icon} {title}
        </h4>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-bold">
            {items.length} {items.length > 1 ? 'options' : 'option'}
          </span>
          {isOpen ? <ChevronUp size={18} className="text-amber-700" /> : <ChevronDown size={18} className="text-amber-700" />}
        </div>
      </button>

      {isOpen && (
        <div className="p-3 space-y-2 border-t border-amber-100 bg-white">
          {items.map(item => {
            const isOwned = myItems.includes(item.id);
            const cost = getItemCost(item);
            
            const effectiveCost = item.categorie === 'contact' ? Math.max(0, cost - freeContactsRemaining) : cost;
            const canAfford = reste >= effectiveCost;

            return (
              <div
                key={item.id}
                onClick={() => (isOwned || canAfford) && toggleAchat(profilNom, item)}
                className={`p-3 rounded-lg border flex justify-between items-center cursor-pointer transition-all ${
                  isOwned 
                    ? 'bg-amber-100 border-amber-400 ring-1 ring-amber-300 shadow-inner' 
                    : canAfford 
                      ? 'bg-white border-gray-200 hover:border-amber-400 hover:shadow-sm' 
                      : 'bg-gray-50 border-gray-100 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex-1">
                  <div className="font-bold text-sm text-gray-800 flex items-center flex-wrap gap-2">
                    {item.nom}
                    {item.fortune_score !== null && <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded uppercase tracking-wider">Fortune {item.fortune_score}</span>}
                    {item.fortune_bonus !== null && <span className="text-[10px] bg-green-200 text-green-900 px-2 py-0.5 rounded uppercase tracking-wider">+ {item.fortune_bonus} Fortune</span>}
                    {item.is_secondaire && <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Secondaire</span>}
                  </div>
                  {item.description && <div className="text-xs text-gray-500 mt-1">{item.description}</div>}
                </div>
                
                <div className="flex items-center gap-3 ml-4">
                  {item.categorie === 'contact' && !isOwned && freeContactsRemaining > 0 && effectiveCost < cost ? (
                    <div className="flex flex-col items-end leading-none">
                      <span className="font-bold text-purple-600 whitespace-nowrap">{effectiveCost} PP</span>
                      <span className="text-[10px] text-gray-400 line-through">{cost} PP</span>
                    </div>
                  ) : (
                    <span className="font-bold text-amber-700 whitespace-nowrap">{cost} PP</span>
                  )}

                  {isOwned ? (
                    <CheckCircle size={20} className="text-amber-600" />
                  ) : (
                    <Plus size={20} className={canAfford ? 'text-gray-400' : 'text-gray-300'} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function StepVieSociale({ character, onCharacterChange }) {
  // 👈 On affiche TOUTES les boutiques !
  const tousLesProfils = useMemo(() => [
    'Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'
  ], []);

  // Par défaut, on ouvre l'onglet du Profil Majeur
  const [activeTab, setActiveTab] = useState(character.profils?.majeur?.nom || 'Gentleman');
  
  const [achats, setAchats] = useState(character.vieSociale || {});
  const [socialItems, setSocialItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const safetyTimer = setTimeout(() => {
      if (isMounted && loading) setLoading(false);
    }, 5000);

    const fetchSocialItems = async () => {
      try {
        const { data, error } = await supabase
          .from('social_items')
          .select(`*, profils ( name_masculine )`)
          .eq('is_official', true)
          .order('cout', { ascending: true });

        if (error) throw error;
        if (isMounted) setSocialItems(data || []);
      } catch (error) {
        console.error("Erreur chargement social_items :", error);
      } finally {
        if (isMounted) {
          clearTimeout(safetyTimer);
          setLoading(false);
        }
      }
    };

    fetchSocialItems();

    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
    };
  }, []); 

  const getItemsForProfile = (profilName) => {
    return socialItems.filter(item => item.profils?.name_masculine === profilName);
  };

  const getItemCost = (item) => {
    if (character.anciennete === 'moderne' && item.cout_moderne !== null) return Number(item.cout_moderne);
    return Number(item.cout);
  };

  // 👈 NOUVEAU : CALCULATEUR EXACT DU BUDGET PAR PROFIL
  const getBudgetInitial = (profilNom) => {
    const compsMap = {
      'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
      'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
      'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
      'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
      'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
      'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
    };
    
    let sommeScores = 0;
    const isMajeur = character.profils?.majeur?.nom === profilNom;
    const isMineur = character.profils?.mineur?.nom === profilNom;
    const bonusProfil = isMajeur ? 2 : isMineur ? 1 : 0;

    (compsMap[profilNom] || []).forEach(nomComp => {
      const investis = character.competencesLibres?.rangs?.[nomComp] || 0;
      sommeScores += (bonusProfil + investis);
    });

    const rang = Math.floor(sommeScores / 4);

    if (isMajeur) return rang + 8;
    if (isMineur) return rang + 4;
    return Math.max(0, rang); // Les profils non sélectionnés donnent un budget égal à leur rang !
  };

  const budgetsInfo = useMemo(() => {
    let freeContactsTotal = character.computedStats?.contactsGratuits || 0;
    if (freeContactsTotal === 0 && !character.computedStats) {
       freeContactsTotal = Math.max(0, (character.caracteristiques?.prestance || 0) - 3);
    }
    
    let freeContactsRemaining = freeContactsTotal;

    const depenses = {};
    const budgets = {};
    const restes = {};

    tousLesProfils.forEach(p => {
      depenses[p] = 0;
      budgets[p] = getBudgetInitial(p);
    });

    tousLesProfils.forEach(pName => {
      const itemIds = achats[pName] || [];
      itemIds.forEach(id => {
        const item = socialItems.find(i => i.id === id);
        if (item) {
          const cost = getItemCost(item);
          if (item.categorie === 'contact' && freeContactsRemaining > 0) {
            const deduction = Math.min(freeContactsRemaining, cost);
            freeContactsRemaining -= deduction;
            depenses[pName] += (cost - deduction);
          } else {
            depenses[pName] += cost;
          }
        }
      });
    });

    tousLesProfils.forEach(p => {
      restes[p] = budgets[p] - depenses[p];
    });

    return { depenses, budgets, restes, freeContactsRemaining, freeContactsTotal };
  }, [achats, socialItems, tousLesProfils, character]);

  const currentFortune = useMemo(() => {
    let baseFortune = 0;
    let bonusFortune = 0;
    let hasMetier = false;

    Object.keys(achats).forEach(pKey => {
      (achats[pKey] || []).forEach(id => {
        const item = socialItems.find(i => i.id === id);
        if (item) {
          if (item.fortune_score !== null && item.fortune_score !== undefined) {
            baseFortune = Math.max(baseFortune, item.fortune_score);
            hasMetier = true;
          }
          if (item.fortune_bonus !== null && item.fortune_bonus !== undefined) {
            bonusFortune += item.fortune_bonus;
          }
        }
      });
    });

    if (!hasMetier) baseFortune = 1;
    return Math.min(15, baseFortune + bonusFortune);
  }, [achats, socialItems]);

  const toggleAchat = (profil, item) => {
    const currentIds = achats[profil] || [];
    const exists = currentIds.includes(item.id);
    const cost = getItemCost(item);
    
    const effectiveCost = item.categorie === 'contact' ? Math.max(0, cost - budgetsInfo.freeContactsRemaining) : cost;
    let newAchats = { ...achats };

    if (exists) {
      newAchats[profil] = currentIds.filter(id => id !== item.id);
    } else {
      if (budgetsInfo.restes[profil] < effectiveCost) {
        alert(`Fonds insuffisants dans la cagnotte ${profil} !`);
        return;
      }
      
      if (item.categorie === 'metier' && item.is_secondaire === false) {
        Object.keys(newAchats).forEach(pKey => {
          newAchats[pKey] = (newAchats[pKey] || []).filter(id => {
            const i = socialItems.find(x => x.id === id);
            return !(i && i.categorie === 'metier' && i.is_secondaire === false);
          });
        });
      }

      if (!newAchats[profil]) newAchats[profil] = [];
      newAchats[profil].push(item.id);
    }

    setAchats(newAchats);

    if (onCharacterChange) {
      let fBase = 0, fBonus = 0, fHasMetier = false;
      Object.keys(newAchats).forEach(pKey => {
        (newAchats[pKey] || []).forEach(id => {
          const i = socialItems.find(x => x.id === id);
          if (i) {
            if (i.fortune_score !== null) { fBase = Math.max(fBase, i.fortune_score); fHasMetier = true; }
            if (i.fortune_bonus !== null) fBonus += i.fortune_bonus;
          }
        });
      });
      if (!fHasMetier) fBase = 1;
      const fFinale = Math.min(15, fBase + fBonus);
      onCharacterChange({ vieSociale: newAchats, fortune: fFinale });
    }
  };

  const renderCatalogue = (profilNom) => {
    if (loading) return <div className="p-10 text-center text-amber-600 flex flex-col items-center justify-center"><Loader className="animate-spin mb-2" size={32} /> Installation des étals...</div>;

    const itemsDuProfil = getItemsForProfile(profilNom);
    if (itemsDuProfil.length === 0) return <div className="p-8 text-center text-gray-400 italic">Aucun équipement disponible pour ce profil.</div>;

    const metiers = itemsDuProfil.filter(i => i.categorie === 'metier');
    const objets = itemsDuProfil.filter(i => i.categorie === 'objet');
    const contacts = itemsDuProfil.filter(i => i.categorie === 'contact');
    const langues = itemsDuProfil.filter(i => i.categorie === 'langue'); 
    const titres = itemsDuProfil.filter(i => i.categorie === 'titre'); // 👈 NOUVEAU

    const reste = budgetsInfo.restes[profilNom];
    const budgetTotal = budgetsInfo.budgets[profilNom];
    const freeContactsRemaining = budgetsInfo.freeContactsRemaining;
    const myItems = achats[profilNom] || [];

    return (
      <div>
        <div className="mb-4 flex flex-wrap justify-between items-center bg-stone-100 p-3 rounded-xl border border-stone-200 gap-2">
          <h3 className="font-serif font-bold text-stone-800 flex items-center gap-2">
            {profilNom}
            {character.profils?.majeur?.nom === profilNom && <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Majeur</span>}
            {character.profils?.mineur?.nom === profilNom && <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Mineur</span>}
          </h3>
          <div className="flex items-center gap-2">
            {budgetsInfo.freeContactsTotal > 0 && (
              <span className="font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-lg border border-purple-200 shadow-sm text-sm flex items-center gap-1">
                <Users size={14}/> {freeContactsRemaining} Contact(s) Gratuit(s)
              </span>
            )}
            <span className={`font-bold px-3 py-1 rounded-lg border shadow-sm ${budgetTotal === 0 ? 'bg-gray-100 text-gray-500 border-gray-200' : 'text-amber-600 bg-amber-50 border-amber-200'}`}>
              {reste} / {budgetTotal} PP
            </span>
          </div>
        </div>

        {budgetTotal === 0 && (
          <div className="mb-4 p-3 bg-red-50 text-red-800 border border-red-200 rounded-lg text-sm flex gap-2">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0"/>
            <p>Vous n'avez pas de points dans ce profil. Vous devez d'abord y investir des compétences pour y obtenir du budget (4 points de compétence = 1 PP).</p>
          </div>
        )}

        <CategoryAccordion title="Métiers & Sources de revenus" icon={<Briefcase size={16} className="text-amber-700"/>} items={metiers} myItems={myItems} reste={reste} toggleAchat={toggleAchat} profilNom={profilNom} getItemCost={getItemCost} />
        <CategoryAccordion title="Objets & Possessions" icon={<Package size={16} className="text-amber-700"/>} items={objets} myItems={myItems} reste={reste} toggleAchat={toggleAchat} profilNom={profilNom} getItemCost={getItemCost} />
        <CategoryAccordion title="Contacts & Réseau" icon={<Users size={16} className="text-amber-700"/>} items={contacts} myItems={myItems} reste={reste} toggleAchat={toggleAchat} profilNom={profilNom} getItemCost={getItemCost} freeContactsRemaining={freeContactsRemaining} />
        <CategoryAccordion title="Langues & Dialectes" icon={<MessageCircle size={16} className="text-amber-700"/>} items={langues} myItems={myItems} reste={reste} toggleAchat={toggleAchat} profilNom={profilNom} getItemCost={getItemCost} />
        <CategoryAccordion title="Familles, titres et statuts particuliers" icon={<Crown size={16} className="text-amber-700"/>} items={titres} myItems={myItems} reste={reste} toggleAchat={toggleAchat} profilNom={profilNom} getItemCost={getItemCost} />
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-amber-900 flex items-center gap-2">
            <ShoppingBag size={24} /> Équipement & Vie Sociale
          </h2>
          <p className="text-sm text-amber-700 mt-1">Vos budgets sont liés à vos Profils Majeur, Mineur et à la moyenne de vos compétences.</p>
        </div>
        <div className="flex flex-col items-center bg-white py-2 px-6 rounded-lg border-2 border-amber-300 shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Votre Fortune Actuelle</div>
          <div className="text-2xl font-black text-amber-600 flex items-center gap-2">
            <Coins size={24} className="text-amber-500" />
            {currentFortune} <span className="text-sm text-gray-400 font-normal">/ 15</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-3 space-y-2">
          <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-3">Vos Boutiques</h3>
          {tousLesProfils.map(pName => {
            const isActive = activeTab === pName;
            const hasBudget = budgetsInfo.budgets[pName] > 0;

            return (
              <button
                key={pName}
                onClick={() => setActiveTab(pName)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all flex justify-between items-center ${
                  isActive
                    ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm'
                    : 'border-transparent hover:bg-gray-50 text-gray-600'
                }`}
              >
                <span className={`font-serif font-bold ${!hasBudget && !isActive ? 'opacity-50' : ''}`}>{pName}</span>
                {character.profils?.majeur?.nom === pName && <Star size={16} className="text-amber-500" fill="currentColor"/>}
                {character.profils?.mineur?.nom === pName && <Award size={16} className="text-blue-500"/>}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200 min-h-[400px]">
          {renderCatalogue(activeTab)}
        </div>

        <div className="lg:col-span-3">
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 sticky top-4">
            <h3 className="font-serif font-bold text-stone-800 border-b border-stone-200 pb-2 mb-3">Votre Inventaire</h3>
            {Object.keys(achats).length === 0 || Object.values(achats).every(ids => ids.length === 0) ? (
              <div className="text-center text-stone-400 text-sm italic py-4">Inventaire vide.</div>
            ) : (
              <div className="space-y-4">
                {Object.entries(achats).map(([profil, ids]) => {
                  if (ids.length === 0) return null;
                  const itemsOfProfil = ids.map(id => socialItems.find(i => i.id === id)).filter(Boolean);
                  
                  return (
                    <div key={profil}>
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{profil}</h4>
                      <ul className="space-y-1">
                        {itemsOfProfil.map(item => (
                          <li key={item.id} className="text-sm font-semibold text-stone-700 flex justify-between group">
                            <span className="truncate">{item.nom}</span>
                            <button
                              onClick={() => toggleAchat(profil, item)}
                              className="text-stone-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Revendre"
                            >
                              <Minus size={14} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
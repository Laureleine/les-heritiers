// src/components/StepVieSociale.js
import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Coins, Briefcase, Plus, Minus, AlertCircle, Loader, Package, Users, CheckCircle } from 'lucide-react';
import { supabase } from '../config/supabase';

export default function StepVieSociale({ character, onCharacterChange }) {
  // Les profils auxquels le personnage a accès
  const profilsActifs = [
    character.profils?.majeur?.nom || 'Gentleman',
    character.profils?.mineur?.nom || 'Aventurier'
  ];

  const [activeTab, setActiveTab] = useState(profilsActifs[0]);
  const [achats, setAchats] = useState(character.vieSociale || {}); // ex: { 'Gentleman': ['id1', 'id2'] }
  
  // NOUVEAU : États pour la base de données
  const [socialItems, setSocialItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Récupération des vraies données depuis Supabase (Version Blindée)
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // 🛡️ TIMER DE SÉCURITÉ ANTI-BLOCAGE
    // Force la fin du chargement si Supabase ou le Service Worker tourne dans le vide
    const safetyTimer = setTimeout(() => {
      if (isMounted && loading) {
        console.warn("⚠️ Délai réseau dépassé. Forçage de l'ouverture des étals.");
        setLoading(false);
      }
    }, 5000); // 5 secondes max

    const fetchSocialItems = async () => {
      try {
        const { data, error } = await supabase
          .from('social_items')
          .select(`
            *,
            profils ( name_masculine )
          `)
          .eq('is_official', true)
          .order('cout', { ascending: true });

        if (error) throw error;
        if (isMounted) setSocialItems(data || []);
      } catch (error) {
        console.error("Erreur chargement social_items :", error);
      } finally {
        if (isMounted) {
          clearTimeout(safetyTimer); // On annule le timer si tout s'est bien passé
          setLoading(false);
        }
      }
    };

    fetchSocialItems();

    // Nettoyage si on quitte la page avant la fin
    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Helpers pour extraire les objets du bon profil
  const getItemsForProfile = (profilName) => {
    return socialItems.filter(item => item.profils?.name_masculine === profilName);
  };

  const getItemCost = (item) => {
    // Si la fée est moderne et qu'il y a un coût spécifique, on l'applique
    if (character.anciennete === 'moderne' && item.cout_moderne !== null) {
      return Number(item.cout_moderne);
    }
    return Number(item.cout);
  };

  // --- CALCUL DES BUDGETS (PP) ---
  const getBudget = (profilNom) => {
    // Pour l'instant, estimation simple (vous pourrez lier cela à calculateTotalPP plus tard)
    let rang = 1; 
    if (profilNom === character.profils?.majeur?.nom) return rang + 8;
    if (profilNom === character.profils?.mineur?.nom) return rang + 4;
    return rang;
  };

  const getDepenses = (profilNom) => {
    const itemIds = achats[profilNom] || [];
    let total = 0;
    itemIds.forEach(id => {
      const item = socialItems.find(i => i.id === id);
      if (item) total += getItemCost(item);
    });
    return total;
  };

  // --- CALCUL DE LA FORTUNE DYNAMIQUE ---
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

    if (!hasMetier) baseFortune = 1; // Miséreux par défaut
    
    return Math.min(15, baseFortune + bonusFortune); // Règle : Max 15
  }, [achats, socialItems]);

  // --- HANDLERS D'ACHAT/VENTE ---
  const toggleAchat = (profil, item) => {
    const currentIds = achats[profil] || [];
    const exists = currentIds.includes(item.id);
    const budget = getBudget(profil);
    const depense = getDepenses(profil);
    const cost = getItemCost(item);

    let newAchats = { ...achats };

    if (exists) {
      // VENDRE (Retirer du panier)
      newAchats[profil] = currentIds.filter(id => id !== item.id);
    } else {
      // ACHETER (Vérification du budget)
      if (depense + cost > budget) {
        alert("Fonds insuffisants ! Vous n'avez pas assez de Points de Personnage.");
        return;
      }

      // 🛡️ RÈGLE DU MÉTIER PRIMAIRE
      // "Si le métier cliqué a is_secondaire === false : On retire automatiquement l'ancien métier"
      if (item.categorie === 'metier' && item.is_secondaire === false) {
        Object.keys(newAchats).forEach(pKey => {
          newAchats[pKey] = (newAchats[pKey] || []).filter(id => {
            const i = socialItems.find(x => x.id === id);
            // On conserve l'objet S'IL N'EST PAS un métier primaire
            return !(i && i.categorie === 'metier' && i.is_secondaire === false);
          });
        });
      }

      // Ajout du nouvel item
      if (!newAchats[profil]) newAchats[profil] = [];
      newAchats[profil].push(item.id);
    }

    setAchats(newAchats);

    // Sauvegarde en direct dans le personnage global
    if (onCharacterChange) {
      // On recalcule la fortune immédiate pour la sauvegarde
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

  // --- RENDU DU CATALOGUE ---
  const renderCatalogue = (profilNom) => {
    if (loading) return <div className="p-10 text-center text-amber-600 flex flex-col items-center justify-center"><Loader className="animate-spin mb-2" size={32} /> Installation des étals...</div>;

    const itemsDuProfil = getItemsForProfile(profilNom);
    if (itemsDuProfil.length === 0) return <div className="p-8 text-center text-gray-400 italic">Aucun équipement disponible pour ce profil.</div>;

    const metiers = itemsDuProfil.filter(i => i.categorie === 'metier');
    const objets = itemsDuProfil.filter(i => i.categorie === 'objet');
    const contacts = itemsDuProfil.filter(i => i.categorie === 'contact');

    const budget = getBudget(profilNom);
    const depense = getDepenses(profilNom);
    const reste = budget - depense;
    const myItems = achats[profilNom] || [];

    const renderSection = (title, icon, items) => {
      if (items.length === 0) return null;
      return (
        <div className="mb-6">
          <h4 className="font-serif font-bold text-amber-900 mb-3 flex items-center gap-2 border-b border-amber-100 pb-1">
            {icon} {title}
          </h4>
          <div className="space-y-2">
            {items.map(item => {
              const isOwned = myItems.includes(item.id);
              const cost = getItemCost(item);
              const canAfford = reste >= cost;

              return (
                <div 
                  key={item.id}
                  onClick={() => (isOwned || canAfford) && toggleAchat(profilNom, item)}
                  className={`
                    p-3 rounded-lg border flex justify-between items-center cursor-pointer transition-all
                    ${isOwned 
                      ? 'bg-amber-100 border-amber-400 ring-1 ring-amber-300 shadow-inner' 
                      : canAfford 
                        ? 'bg-white border-gray-200 hover:border-amber-400 hover:shadow-sm' 
                        : 'bg-gray-50 border-gray-100 opacity-50 cursor-not-allowed'}
                  `}>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-gray-800 flex items-center flex-wrap gap-2">
                      {item.nom}
                      {item.fortune_score !== null && <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded uppercase tracking-wider">Fortune {item.fortune_score}</span>}
                      {item.fortune_bonus !== null && <span className="text-[10px] bg-green-200 text-green-900 px-2 py-0.5 rounded uppercase tracking-wider">+ {item.fortune_bonus} Fortune</span>}
                      {item.is_secondaire && <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Secondaire</span>}
                    </div>
                    {item.description && <div className="text-xs text-gray-500 mt-1">{item.description}</div>}
                  </div>
                  
                  <div className="font-bold text-sm ml-4 whitespace-nowrap flex items-center gap-2">
                    {cost} PP
                    {isOwned ? <CheckCircle size={18} className="text-green-600" /> : <Plus size={18} className={canAfford ? "text-amber-600" : "text-gray-400"} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div>
        <div className="mb-4 flex justify-between items-center bg-stone-100 p-3 rounded-xl border border-stone-200">
          <h3 className="font-serif font-bold text-stone-800">{profilNom}</h3>
          <span className="font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
            {reste} PP Restants
          </span>
        </div>
        {renderSection("Métiers & Sources de revenus", <Briefcase size={16} className="text-amber-700"/>, metiers)}
        {renderSection("Objets & Possessions", <Package size={16} className="text-amber-700"/>, objets)}
        {renderSection("Contacts & Réseau", <Users size={16} className="text-amber-700"/>, contacts)}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* HEADER & JAUGE FORTUNE */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-amber-900 flex items-center gap-2">
            <ShoppingBag size={24} /> Équipement & Vie Sociale
          </h2>
          <p className="text-sm text-amber-700 mt-1">Dépensez les Points de Personnage de vos Profils.</p>
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
        
        {/* 1. SIDEBAR : Navigation des Boutiques */}
        <div className="lg:col-span-3 space-y-2">
          <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-3">Vos Boutiques</h3>
          {profilsActifs.map(pName => {
            const isActive = activeTab === pName;
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
                <span className="font-serif font-bold">{pName}</span>
              </button>
            );
          })}
        </div>

        {/* 2. ZONE PRINCIPALE : Catalogue */}
        <div className="lg:col-span-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200 min-h-[400px]">
          {renderCatalogue(activeTab)}
        </div>

        {/* 3. INVENTAIRE (Panier) */}
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
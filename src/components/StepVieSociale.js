import React, { useState, useMemo } from 'react';
import { ShoppingBag, Coins, Users, Shield, Book, Briefcase, Plus, Minus, Lock, AlertCircle } from 'lucide-react';

// --- DONNÉES EN DUR (MOCK) POUR TEST UX/UI ---
const MOCK_TABLEAUX = {
  'Aventurier': {
    metiers: [
      { id: 'av_m1', nom: 'Guide / Éclaireur', cout: 2, fortune: 2, desc: 'Revenus modestes, connaît le terrain.' },
      { id: 'av_m2', nom: 'Chasseur de trésor', cout: 4, fortune: 5, desc: 'Revenus confortables mais irréguliers.' }
    ],
    objets: [
      { id: 'av_o1', nom: 'Arme de qualité', cout: 1, desc: '+1 aux dégâts ou à la précision.' },
      { id: 'av_o2', nom: 'Cheval fidèle', cout: 2, desc: 'Monture dressée, ne panique pas.' },
      { id: 'av_o3', nom: 'Carte au trésor', cout: 3, desc: 'Indique un lieu secret (Scénario).' }
    ],
    contacts: [
      { id: 'av_c1', nom: 'Indics locaux', cout: 1, desc: 'Réseau de mendiants ou gamins.' },
      { id: 'av_c2', nom: 'Compagnon d\'armes', cout: 2, desc: 'Allié combattant loyal.' }
    ]
  },
  'Gentleman': {
    metiers: [
      { id: 'gt_m1', nom: 'Dandy / Rentier', cout: 2, fortune: 4, desc: 'Vit de ses rentes, oisif.' },
      { id: 'gt_m2', nom: 'Mécène', cout: 5, fortune: 7, desc: 'Très riche, soutient les arts.' }
    ],
    objets: [
      { id: 'gt_o1', nom: 'Garde-robe haute couture', cout: 1, desc: 'Bonus social dans la haute société.' },
      { id: 'gt_o2', nom: 'Hôtel particulier', cout: 4, desc: 'Résidence luxueuse avec personnel.' },
      { id: 'gt_o3', nom: 'Titre de Noblesse', cout: 3, desc: 'Ouvre les portes des cours royales.' }
    ],
    contacts: [
      { id: 'gt_c1', nom: 'Valet de chambre', cout: 1, desc: 'Domestique discret et efficace.' },
      { id: 'gt_c2', nom: 'Ami influent', cout: 3, desc: 'Ministre ou haut gradé.' }
    ]
  }
};

export default function StepVieSociale({ character, onCharacterChange }) {
  // Pour le test, on force deux profils actifs si le perso est vide
  const profilsActifs = [
    character.profils.majeur.nom || 'Gentleman', 
    character.profils.mineur.nom || 'Aventurier'
  ];

  const [activeTab, setActiveTab] = useState(profilsActifs);
  const [achats, setAchats] = useState(character.vieSociale || {}); // { 'Gentleman': ['id1', 'id2'], ... }

  // --- CALCUL DES BUDGETS (PP) ---
  const getBudget = (profilNom) => {
    // Simulation du calcul de rang (Rank + Bonus Majeur/Mineur)
    // Dans la vraie version, cela viendra de calculateTotalPP
    let base = 0;
    // Simulation : Rang calculé via compétences (ici fixé à 1 pour l'exemple) + Bonus
    const rang = 1; 
    
    if (profilNom === character.profils.majeur.nom) base = rang + 8;
    else if (profilNom === character.profils.mineur.nom) base = rang + 4;
    else base = rang; // Profil secondaire

    return base;
  };

  const getDepenses = (profilNom) => {
    const itemIds = achats[profilNom] || [];
    const catalogue = MOCK_TABLEAUX[profilNom];
    if (!catalogue) return 0;

    let total = 0;
    itemIds.forEach(id => {
      // Cherche l'objet dans toutes les catégories
      Object.values(catalogue).flat().forEach(item => {
        if (item.id === id) total += item.cout;
      });
    });
    return total;
  };

  const currentFortune = useMemo(() => {
    let f = 1; // Base miséreux
    // On scanne tous les achats pour trouver un métier
    Object.keys(achats).forEach(pKey => {
      const pIds = achats[pKey];
      const catalogue = MOCK_TABLEAUX[pKey];
      if (catalogue) {
        catalogue.metiers.forEach(m => {
          if (pIds.includes(m.id)) f = Math.max(f, m.fortune);
        });
      }
    });
    return f;
  }, [achats]);

  // --- HANDLERS ---
  const toggleAchat = (profil, item) => {
    const currentIds = achats[profil] || [];
    const exists = currentIds.includes(item.id);
    const budget = getBudget(profil);
    const depense = getDepenses(profil);

    let newIds;
    if (exists) {
      // Vendre
      newIds = currentIds.filter(id => id !== item.id);
    } else {
      // Acheter (Vérif budget)
      if (depense + item.cout > budget) {
        alert("Pas assez de Points de Personnage (PP) !");
        return;
      }
      // Règle métier unique (Simplification pour l'UX)
      if (item.fortune) {
        // On retire les autres métiers de ce profil pour éviter les cumuls absurdes
        const metierIds = MOCK_TABLEAUX[profil].metiers.map(m => m.id);
        newIds = currentIds.filter(id => !metierIds.includes(id));
        newIds.push(item.id);
      } else {
        newIds = [...currentIds, item.id];
      }
    }

    const newAchats = { ...achats, [profil]: newIds };
    setAchats(newAchats);
    // Sauvegarde dans le state global (à prévoir dans App.js)
    if (onCharacterChange) onCharacterChange({ vieSociale: newAchats, fortune: currentFortune });
  };

  // --- RENDU CATALOGUE ---
  const renderCatalogue = (profilNom) => {
    const data = MOCK_TABLEAUX[profilNom];
    if (!data) return <div className="p-8 text-center text-gray-400">Catalogue vide ou non défini pour ce test.</div>;

    const budget = getBudget(profilNom);
    const depense = getDepenses(profilNom);
    const reste = budget - depense;
    const myItems = achats[profilNom] || [];

    const renderSection = (title, icon, items) => (
      <div className="mb-6">
        <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-3 border-b border-amber-100 pb-1">
          {icon} {title}
        </h4>
        <div className="space-y-2">
          {items.map(item => {
            const isOwned = myItems.includes(item.id);
            const canAfford = reste >= item.cout;
            
            return (
              <div key={item.id} 
                   onClick={() => (isOwned || canAfford) && toggleAchat(profilNom, item)}
                   className={`
                     p-3 rounded-lg border flex justify-between items-center cursor-pointer transition-all
                     ${isOwned 
                       ? 'bg-amber-100 border-amber-300 ring-1 ring-amber-300' 
                       : canAfford 
                         ? 'bg-white border-gray-200 hover:border-amber-300 hover:shadow-sm' 
                         : 'bg-gray-50 border-gray-100 opacity-60 cursor-not-allowed'}
                   `}>
                <div>
                  <div className="font-bold text-sm text-gray-800">{item.nom}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
                <div className="flex items-center gap-3">
                  {item.fortune && (
                    <span className="text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded font-bold">
                      Fortune {item.fortune}
                    </span>
                  )}
                  <div className={`font-bold text-sm ${isOwned ? 'text-amber-700' : 'text-gray-400'}`}>
                    {item.cout} PP
                  </div>
                  {isOwned ? <CheckCircleIcon /> : <PlusCircleIcon />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );

    return (
      <div className="animate-fade-in">
        {/* Header du Magasin */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-xl shadow-md mb-6 flex justify-between items-center">
          <div>
            <h3 className="font-serif font-bold text-xl">{profilNom}</h3>
            <p className="text-amber-100 text-sm opacity-90">Dépensez vos Points de Personnage ici.</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{reste}</div>
            <div className="text-[10px] uppercase font-bold tracking-wider opacity-75">PP Restants</div>
          </div>
        </div>

        {renderSection("Métiers & Fortune", <Briefcase size={18}/>, data.metiers)}
        {renderSection("Objets & Titres", <Shield size={18}/>, data.objets)}
        {renderSection("Contacts & Alliés", <Users size={18}/>, data.contacts)}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
      
      {/* 1. SIDEBAR (Navigation Profils) - 3 colonnes */}
      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-serif font-bold text-gray-700 mb-4 flex items-center gap-2">
            <ShoppingBag size={20} /> Boutiques
          </h3>
          <div className="space-y-2">
            {profilsActifs.map(pName => {
              const budget = getBudget(pName);
              const depense = getDepenses(pName);
              const isFull = depense >= budget;
              const isActive = activeTab === pName;

              return (
                <button
                  key={pName}
                  onClick={() => setActiveTab(pName)}
                  className={`
                    w-full text-left p-3 rounded-lg border-2 transition-all flex justify-between items-center
                    ${isActive 
                      ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm' 
                      : 'border-transparent hover:bg-gray-50 text-gray-600'}
                  `}
                >
                  <span className="font-bold text-sm">{pName}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${isFull ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {budget - depense} PP
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Jauge Globale Fortune */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-serif font-bold text-gray-700 mb-2 flex items-center gap-2">
            <Coins size={20} className="text-amber-500" /> Fortune
          </h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold text-amber-600">{currentFortune}</span>
            <span className="text-sm text-gray-400 mb-1">/ 10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-amber-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(currentFortune / 10) * 100}%` }}></div>
          </div>
          <p className="text-xs text-center mt-2 text-gray-500 italic">
            Déterminé par votre activité la plus lucrative.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT (Magasin) - 6 colonnes */}
      <div className="lg:col-span-6">
        {renderCatalogue(activeTab)}
      </div>

      {/* 3. INVENTAIRE (Panier) - 3 colonnes */}
      <div className="lg:col-span-3">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm sticky top-4">
          <h3 className="font-serif font-bold text-gray-700 mb-4 flex items-center gap-2">
            <Book size={20} /> Inventaire
          </h3>
          
          {Object.keys(achats).length === 0 ? (
            <p className="text-sm text-gray-400 text-center italic py-4">Votre inventaire est vide.</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(achats).map(([profil, ids]) => {
                if (ids.length === 0) return null;
                const items = ids.map(id => Object.values(MOCK_TABLEAUX[profil] || {}).flat().find(i => i.id === id)).filter(Boolean);
                
                return (
                  <div key={profil} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">{profil}</div>
                    <ul className="space-y-1">
                      {items.map(item => (
                        <li key={item.id} className="text-sm flex justify-between items-start group">
                          <span className="text-gray-700">{item.nom}</span>
                          <button 
                            onClick={() => toggleAchat(profil, item)}
                            className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
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
  );
}

// Icons simples pour l'UI
const PlusCircleIcon = () => (
  <div className="bg-gray-100 p-1 rounded-full text-gray-400 group-hover:bg-amber-100 group-hover:text-amber-600">
    <Plus size={16} />
  </div>
);

const CheckCircleIcon = () => (
  <div className="bg-amber-600 p-1 rounded-full text-white">
    <Lock size={12} />
  </div>
);
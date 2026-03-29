// 14.12.0

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, MessageCircle, Star, ShoppingBag, Award, Coins, Briefcase, Plus, Minus, AlertCircle, Package, Users, Crown } from 'lucide-react';
import { useVieSociale } from './useVieSociale';
import { getFortuneCost } from '../../utils/xpCalculator';

// 🎨 LE RETOUR DE L'ACCORDÉON ORIGINAL
const CategoryAccordion = ({ title, icon, items, myItems, reste, toggleAchat, profilNom, getItemCost, freeContactsRemaining }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-4 border border-amber-200 rounded-lg overflow-hidden shadow-sm">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-3 bg-amber-50 hover:bg-amber-100 transition-colors text-amber-900 font-bold font-serif">
        <div className="flex items-center gap-2">{icon} {title} ({items.length})</div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
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
                onClick={() => (isOwned || canAfford) && toggleAchat(item, profilNom)}
                className={`p-3 border rounded-lg cursor-pointer transition-all flex items-center justify-between ${
                  isOwned
                    ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-400'
                    : canAfford
                    ? 'border-stone-200 hover:border-amber-300 hover:shadow-sm'
                    : 'border-stone-100 bg-stone-50 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex-1 pr-2">
                  <div className="font-bold text-sm text-gray-800 flex items-center flex-wrap gap-2">
                    {item.nom}
                    {item.fortune_score != null && (
                      <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded uppercase tracking-wider">
                        Fortune {item.fortune_score}
                      </span>
                    )}
                    {item.fortune_bonus != null && (
                      <span className="text-[10px] bg-green-200 text-green-900 px-2 py-0.5 rounded uppercase tracking-wider">
                        + {item.fortune_bonus} Fortune
                      </span>
                    )}
                    {item.is_secondaire && (
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Secondaire</span>
                    )}
                  </div>
                  {item.description && <div className="text-xs text-gray-500 mt-1">{item.description}</div>}
                </div>
                <div className="flex items-center gap-3 ml-4">
                  {item.categorie === 'contact' && !isOwned && freeContactsRemaining > 0 && effectiveCost < cost ? (
                    <div className="flex flex-col items-end leading-none">
                      <span className="text-[10px] line-through text-gray-400">{cost} PP</span>
                      <span className="text-xs font-bold text-emerald-600 uppercase">Gratuit</span>
                    </div>
                  ) : (
                    <div className="font-bold text-amber-600 whitespace-nowrap">{effectiveCost} PP</div>
                  )}
                  {isOwned ? (
                    <Minus size={20} className="text-amber-600" />
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

// 🏛️ L'ORCHESTRATEUR PRINCIPAL
export default function StepVieSociale() {
  const {
    character, isScelle, isReadOnly, socialItems, tousLesProfils, activeTab, setActiveTab, achats,
    getProfilDisplayName, catalogueParProfil, getItemCost, budgetsInfo, plancherFortune,
    handleToggleItem, handleUpgradeFortune, handleDowngradeFortune
  } = useVieSociale();

  const xpDispo = (character.xp_total || 0) - (character.xp_depense || 0);
  const currentFortune = isScelle ? (character.fortune || 0) : plancherFortune;

  const renderCatalogue = (profilNom) => {
    const itemsDuProfil = catalogueParProfil[profilNom] || [];
    if (itemsDuProfil.length === 0) return <div className="p-8 text-center text-gray-400 italic">Aucun équipement disponible pour ce profil.</div>;

    const metiers = itemsDuProfil.filter(i => i.categorie === 'metier');
    const objets = itemsDuProfil.filter(i => i.categorie === 'objet');
    const contacts = itemsDuProfil.filter(i => i.categorie === 'contact');
    const langues = itemsDuProfil.filter(i => i.categorie === 'langue');
    const titres = itemsDuProfil.filter(i => i.categorie === 'titre');

    const reste = budgetsInfo.restes[profilNom];
    const budgetTotal = budgetsInfo.budgets[profilNom];
    const freeContactsRemaining = budgetsInfo.freeContactsRemaining;
    const myItems = achats[profilNom] || [];

    return (
      <div>
        <div className="mb-4 flex flex-wrap justify-between items-center bg-stone-100 p-3 rounded-xl border border-stone-200 gap-2">
          <h3 className="font-serif font-bold text-stone-800 flex items-center gap-2">
            {getProfilDisplayName(profilNom)}
            {character.profils?.majeur?.nom === profilNom && <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Majeur</span>}
            {character.profils?.mineur?.nom === profilNom && <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Mineur</span>}
          </h3>
          <div className="flex gap-3">
            <span className="text-xs font-bold text-amber-800 bg-amber-200 px-2 py-1 rounded border border-amber-300">Contacts Gratuits: {freeContactsRemaining}</span>
            <span className={`text-xs font-bold px-2 py-1 rounded border ${reste < 0 ? 'bg-red-100 text-red-800 border-red-300' : 'bg-white text-stone-600 border-stone-300'}`}>
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

        <CategoryAccordion title="Métiers & Statuts" icon={<Briefcase size={16} className="text-amber-700"/>} items={metiers} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} freeContactsRemaining={freeContactsRemaining} />
        <CategoryAccordion title="Objets & Propriétés" icon={<Package size={16} className="text-amber-700"/>} items={objets} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} freeContactsRemaining={freeContactsRemaining} />
        <CategoryAccordion title="Contacts" icon={<Users size={16} className="text-amber-700"/>} items={contacts} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} freeContactsRemaining={freeContactsRemaining} />
        <CategoryAccordion title="Langues & Dialectes" icon={<MessageCircle size={16} className="text-amber-700"/>} items={langues} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} freeContactsRemaining={freeContactsRemaining} />
        <CategoryAccordion title="Familles, titres et statuts particuliers" icon={<Crown size={16} className="text-amber-700"/>} items={titres} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} freeContactsRemaining={freeContactsRemaining} />
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
      </div>

      {/* LE CONTRÔLEUR DE FORTUNE (INLINE COMME AVANT) */}
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between mb-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
            <Coins size={24} />
          </div>
          <div>
            <div className="font-bold text-emerald-900 font-serif text-lg">Niveau de Fortune</div>
            {isScelle ? (
              <div className="text-xs text-emerald-700">Votre richesse augmente avec l'expérience.</div>
            ) : (
              <div className="text-xs text-emerald-700">Défini par vos métiers et origines.</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Bouton Moins (Remboursement) */}
          <button
            onClick={handleDowngradeFortune}
            disabled={isReadOnly || (isScelle && currentFortune <= (character.data?.stats_scellees?.fortune || 0)) || (!isScelle && currentFortune <= 0)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-emerald-200 text-emerald-600 hover:bg-red-50 hover:text-red-600 disabled:opacity-30 transition-colors font-bold"
            title={isScelle ? "Récupérer les XP investis" : "Réduire"}
          >
            <Minus size={18} />
          </button>

          {/* Score Actuel */}
          <div className="w-8 text-center text-2xl font-serif font-black text-emerald-900">
            {currentFortune}
          </div>

          {/* Bouton Plus (Avec Affichage Prédictif) */}
          <button
            onClick={handleUpgradeFortune}
            disabled={isReadOnly || currentFortune >= 15 || (isScelle && xpDispo < getFortuneCost(currentFortune, character.computedStats))}
            className="h-10 px-3 flex flex-col items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-30 disabled:bg-gray-400 transition-colors shadow-md"
          >
            <Plus size={18} />
            {/* On cache le prix si la richesse absolue est atteinte */}
            {isScelle && currentFortune < 15 && (
              <span className="text-[9px] font-bold -mt-1 tracking-wider">
                ({getFortuneCost(currentFortune, character.computedStats)} XP)
              </span>
            )}
          </button>
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
                <span className={`font-serif font-bold ${!hasBudget && !isActive ? 'opacity-50' : ''}`}>{getProfilDisplayName(pName)}</span>
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
                  // Utilisation sécurisée de socialItems depuis le hook
                  const itemsOfProfil = ids.map(id => socialItems.find(i => i.id === id)).filter(Boolean);
                  return (
                    <div key={profil}>
                      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{getProfilDisplayName(profil)}</h4>
                      <ul className="space-y-1">
                        {itemsOfProfil.map(item => (
                          <li key={item.id} className="text-sm font-semibold text-stone-700 flex justify-between group">
                            <span className="truncate">{item.nom}</span>
                            <button
                              onClick={() => handleToggleItem(item, profil)}
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

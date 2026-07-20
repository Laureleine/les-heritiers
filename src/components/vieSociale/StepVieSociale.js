// src/components/vieSociale/StepVieSociale.js
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, MessageCircle, Star, ShoppingBag, Award, Coins, Briefcase, Plus, Minus, AlertCircle, Package, Users, Crown, Check, Lock, Search, X } from '../../config/icons';
import { useVieSociale } from './useVieSociale';
import { getFortuneCost, getFortuneSpecialites } from '../../utils/xpCalculator';
import { parseIfString } from '../../utils/json';
import { useUserContext } from '../../context/UserContext';
import { usePersonalCards } from '../../hooks/usePersonalCards';

// 🎨 COMPOSANT D'ACCORDÉON
const CategoryAccordion = ({ title, icon, items, myItems, reste, toggleAchat, profilNom, getItemCost, budgetsInfo, character }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (!items || items.length === 0) return null;

    return (
        <div className="mb-4 border border-stone-200 rounded-lg overflow-hidden shadow-sm bg-white">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full bg-stone-50 p-3 flex justify-between items-center hover:bg-stone-100 transition-colors border-b border-stone-200">
                <div className="flex items-center gap-2 font-bold text-stone-800">{icon} {title}</div>
                {isOpen ? <ChevronUp size={18} className="text-stone-500"/> : <ChevronDown size={18} className="text-stone-500"/>}
            </button>
            
            {isOpen && (
                <div className="divide-y divide-stone-100">
                    {items.map(item => {
                        const cost = getItemCost(item, profilNom);
                        const count = myItems.filter(id => id === item.id).length;
                        const hasItem = count > 0;
                        const isMultiple = item.is_choix_multiple;
                        const canAfford = reste >= cost;
                        
                        let isLocked = false;
                        let lockMessage = "";
                        try {
                            if (item.effets_techniques) {
                                const reqs = parseIfString(item.effets_techniques, {});
                                if (reqs.profils && reqs.profils.length > 0) {
                                    const monMajeur = character.profils?.majeur?.nom;
                                    const monMineur = character.profils?.mineur?.nom;
                                    if (!reqs.profils.includes(monMajeur) && !reqs.profils.includes(monMineur)) {
                                        isLocked = true;
                                        lockMessage = `Exige le profil : ${reqs.profils.join(' ou ')}`;
                                    }
                                }
                                if (!isLocked && reqs.profil_majeur_requis?.length > 0) {
                                    const monMajeur = character.profils?.majeur?.nom;
                                    if (!reqs.profil_majeur_requis.includes(monMajeur)) {
                                        isLocked = true;
                                        lockMessage = `Exige le profil majeur : ${reqs.profil_majeur_requis.join(' ou ')}`;
                                    }
                                }
                                if (!isLocked && reqs.prereqs_competences) {
                                    const compsBase = character.computedStats?.competencesBase || {};
                                    const compsRangs = character.competencesLibres?.rangs || {};
                                    for (const [comp, minRang] of Object.entries(reqs.prereqs_competences)) {
                                        const total = (compsBase[comp] || 0) + (compsRangs[comp] || 0);
                                        if (total < minRang) {
                                            isLocked = true;
                                            lockMessage = `Exige ${comp} ≥ ${minRang} (actuel : ${total})`;
                                            break;
                                        }
                                    }
                                }
                            }
                        } catch(e) {}
                        
                        return (
                            <div key={item.id} className={`p-3 flex justify-between items-center transition-colors ${hasItem ? 'bg-amber-50/50' : ''}`}>
                                <div className="flex-1 pr-4">
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm font-bold ${hasItem ? 'text-amber-900' : 'text-stone-700'}`}>{item.nom}</span>
                                        {isMultiple && hasItem && (
                                            <span className="text-[10px] bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-bold shadow-sm">x{count}</span>
                                        )}
                                    </div>
                                    {item.description && <div className="text-xs text-stone-500 mt-1 italic leading-relaxed">{item.description}</div>}
                                    {isLocked && <div className="text-[10px] text-red-500 mt-1 font-bold flex items-center gap-1 uppercase tracking-wider"><Lock size={10}/> {lockMessage}</div>}
                                </div>
                                
                                <div className="flex items-center gap-3 shrink-0">
                                    <div className="text-xs font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded shadow-inner border border-stone-200">{cost} PP</div>
                                    
                                    {isMultiple ? (
                                        <div className="flex items-center gap-1 bg-white border border-stone-200 rounded-lg shadow-sm overflow-hidden">
                                            <button
                                                onClick={() => toggleAchat(item, profilNom, 'remove')}
                                                disabled={count === 0}
                                                className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 disabled:opacity-30 transition-colors"
                                                title="Retirer"
                                                aria-label={`Retirer ${item.nom}`}
                                            >
                                                <Minus size={14}/>
                                            </button>
                                            <span className="text-xs font-bold w-4 text-center text-stone-700">{count}</span>
                                            <button
                                                onClick={() => toggleAchat(item, profilNom, 'add')}
                                                disabled={!canAfford || isLocked}
                                                className="p-1.5 text-stone-400 hover:text-emerald-600 hover:bg-emerald-50 disabled:opacity-30 transition-colors"
                                                title="Ajouter"
                                                aria-label={`Ajouter ${item.nom}`}
                                            >
                                                <Plus size={14}/>
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => toggleAchat(item, profilNom)}
                                            disabled={!hasItem && (!canAfford || isLocked)}
                                            aria-label={hasItem ? `Retirer ${item.nom}` : `Acquérir ${item.nom}`}
                                            className={`p-1.5 rounded-lg border transition-colors shadow-sm ${hasItem ? 'bg-amber-100 border-amber-300 text-amber-700 hover:bg-amber-200' : 'bg-white border-stone-200 text-stone-400 hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-50'}`}
                                        >
                                            {hasItem ? <Check size={16}/> : <Plus size={16}/>}
                                        </button>
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
        character, isScelle, isReadOnly, tousLesProfils, activeTab, setActiveTab, achats,
        getProfilDisplayName, catalogueParProfil, getItemCost, budgetsInfo, plancherFortune,
        handleToggleItem, handleUpgradeFortune, handleDowngradeFortune, updateContactAllocation,
        socialItems
    } = useVieSociale();

    const { userProfile } = useUserContext();
    const { data: personalCards } = usePersonalCards(userProfile?.id, character.id);
    const personalSocialItems = personalCards?.socialItems || [];

    const currentFortune = isScelle ? (character.fortune || 0) : plancherFortune;
    const [filterText, setFilterText] = useState('');
    const [filterAffordable, setFilterAffordable] = useState(false);

    const renderCatalogue = (profilNom) => {
    if (!budgetsInfo) return null;
    if (!budgetsInfo.rests || !budgetsInfo.budgets) return null;
    
    const itemsDuProfil = catalogueParProfil[profilNom] || [];
    if (itemsDuProfil.length === 0) return <div className="p-8 text-center text-gray-500 italic">Aucun équipement disponible pour ce profil.</div>;

    const reste = budgetsInfo.rests[profilNom];

    const filteredByName = filterText.trim()
        ? itemsDuProfil.filter(i => i.nom.toLowerCase().includes(filterText.toLowerCase()))
        : itemsDuProfil;
    const filteredItems = filterAffordable
        ? filteredByName.filter(i => getItemCost(i, profilNom) <= reste)
        : filteredByName;

    const metiers = filteredItems.filter(i => i.categorie === 'metier');
    const objets = filteredItems.filter(i => i.categorie === 'objet');
    const contacts = filteredItems.filter(i => i.categorie === 'contact');
    const langues = filteredItems.filter(i => i.categorie === 'langue');
    const titres = filteredItems.filter(i => i.categorie === 'titre');
    const budgetTotal = budgetsInfo.budgets[profilNom];
    const myItems = achats[profilNom] || [];

    return (
      <div>
        <div className="mb-4 flex flex-wrap justify-between items-center bg-stone-100 p-3 rounded-xl border border-stone-200 gap-2">
          <h3 className="font-serif font-bold text-stone-800 flex items-center gap-2">
            {getProfilDisplayName(profilNom)}
            {character.profils?.majeur?.nom === profilNom && <span className="text-[10px] bg-amber-700 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Majeur</span>}
            {character.profils?.mineur?.nom === profilNom && <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Mineur</span>}
          </h3>
          <div className="flex gap-3">
            <span className="text-xs font-bold text-amber-800 bg-amber-200 px-2 py-1 rounded border border-amber-300">Contacts Gratuits: {budgetsInfo.freeContactsRemaining}</span>
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

        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="Filtrer le catalogue..."
              className="w-full pl-9 pr-8 py-2 text-sm border border-stone-200 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none text-stone-700"
            />
            {filterText && (
              <button
                onClick={() => setFilterText('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-300 hover:text-stone-500 transition-colors"
              >
                <X size={15} />
              </button>
            )}
          </div>
          <button
            onClick={() => setFilterAffordable(v => !v)}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${
              filterAffordable
                ? 'bg-amber-100 border-amber-400 text-amber-800 shadow-sm'
                : 'bg-white border-stone-200 text-stone-400 hover:border-amber-300 hover:text-amber-700'
            }`}
            title={filterAffordable ? "Afficher tous les items" : "Afficher uniquement les items dans mon budget"}
          >
            <Coins size={12} />
            {filterAffordable ? `≤ ${reste} PP` : `≤ PP`}
            {filterAffordable && <X size={11} className="ml-0.5" />}
          </button>
        </div>

        <div className="overflow-y-auto max-h-[55vh] custom-scrollbar">
          <CategoryAccordion title="Activité(s)" icon={<Briefcase size={16} className="text-amber-700"/>} items={metiers} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} budgetsInfo={budgetsInfo} character={character} />
          <CategoryAccordion title="Équipement et possessions notables" icon={<Package size={16} className="text-amber-700"/>} items={objets} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} budgetsInfo={budgetsInfo} character={character} />
          <CategoryAccordion title="Contacts" icon={<Users size={16} className="text-amber-700"/>} items={contacts} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} budgetsInfo={budgetsInfo} character={character} />
          <CategoryAccordion title="Langues & Dialectes" icon={<MessageCircle size={16} className="text-amber-700"/>} items={langues} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} budgetsInfo={budgetsInfo} character={character} />
          <CategoryAccordion title="Familles, titres et statuts particuliers" icon={<Crown size={16} className="text-amber-700"/>} items={titres} myItems={myItems} reste={reste} toggleAchat={handleToggleItem} profilNom={profilNom} getItemCost={getItemCost} budgetsInfo={budgetsInfo} character={character} />
        </div>
      </div>
    );
  };

  if (!budgetsInfo) return null;

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

      {/* LE CONTRÔLEUR DE FORTUNE */}
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
          {isScelle && (
            <button
              onClick={handleDowngradeFortune}
              disabled={isReadOnly || currentFortune <= (character.data?.stats_scellees?.fortune || 0)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-emerald-200 text-emerald-600 hover:bg-red-50 hover:text-red-600 disabled:opacity-30 transition-colors font-bold"
              title="Récupérer les XP investis"
            >
              <Minus size={18} />
            </button>
          )}
          
          <div className="w-8 text-center text-2xl font-serif font-black text-emerald-900">
            {currentFortune}
          </div>
          
          {isScelle && (
            <button
              onClick={handleUpgradeFortune}
              disabled={isReadOnly || currentFortune >= 15}
              className="h-10 px-3 flex flex-col items-center justify-center rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 hover:bg-emerald-200 disabled:opacity-30 transition-colors font-bold"
            >
              <Plus size={18} />
              {currentFortune < 15 && (
                <span className="text-[9px] font-bold mt-0.5 leading-none">
                  ({getFortuneCost(currentFortune, character.computedStats, getFortuneSpecialites(character))} XP)
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* COLONNE GAUCHE : LES BOUTIQUES */}
        <div className="lg:col-span-3 space-y-2">
          <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Vos Boutiques</h3>
          
          {tousLesProfils.map(pName => {
            const isActive = activeTab === pName;
            const hasBudget = budgetsInfo.budgets[pName] > 0;
            const reste = budgetsInfo.rests?.[pName] ?? 0;
            const budgetTotal = budgetsInfo.budgets?.[pName] ?? 0;
            return (
              <button
                key={pName}
                onClick={() => setActiveTab(pName)}
                className={`w-full text-left p-3 rounded-lg border flex items-center justify-between gap-2 transition-colors ${
                  isActive ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm' :
                  hasBudget ? 'bg-white border-gray-200 text-gray-700 hover:border-amber-300' :
                  'bg-gray-50 border-dashed border-gray-200 text-gray-500 opacity-60 hover:opacity-100'
                }`}
              >
                <span className="font-serif font-bold truncate">{getProfilDisplayName(pName)}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {budgetTotal > 0 && reste !== 0 && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full border ${
                      reste < 0  ? 'bg-red-100 text-red-700 border-red-300' :
                      reste === 0 ? 'bg-stone-100 text-stone-500 border-stone-200' :
                                   'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {reste} PP
                    </span>
                  )}
                  {character.profils?.majeur?.nom === pName && <Star size={14} className="text-amber-500" fill="currentColor"/>}
                  {character.profils?.mineur?.nom === pName && <Award size={14} className="text-blue-500"/>}
                </div>
              </button>
            );
          })}

{/* ✨ LE NOUVEAU WIDGET DE RÉPARTITION DES CONTACTS ✨ */}
          {budgetsInfo.freeContactsTotal > 0 && (
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-xl shadow-sm">
              <h4 className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
                 <Users size={16} className="text-indigo-600" /> Contacts Gratuits
              </h4>
              <p className="text-[11px] text-indigo-700 mb-3 leading-relaxed">
                  Votre Entregent/Prestance vous offre <strong>{budgetsInfo.freeContactsTotal} point(s) de contact</strong>. Allouez-les à vos profils (même sans budget) pour acheter des contacts !
              </p>
<div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-indigo-800 bg-indigo-100/50 p-2 rounded">
                     <span>Reste à allouer :</span>
                     <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-full">{budgetsInfo.freeContactsRemaining}</span>
                  </div>

                  {tousLesProfils.map(pName => {
                      const allocations = budgetsInfo.safeAllocations[pName] || 0;
                      const depenses = budgetsInfo.depenses[pName] || 0;
                      // On affiche si: allocation > 0, ou depenses > 0, ou il reste des contacts gratuits à distribuer
                      if (allocations === 0 && depenses === 0 && budgetsInfo.freeContactsRemaining === 0) return null;
                      return (
                          <div key={pName} className="flex items-center justify-between text-[11px] bg-white p-2 rounded border border-indigo-100 shadow-sm">
                              <span className="font-bold text-stone-700">{getProfilDisplayName(pName)}</span>
                              <div className="flex items-center gap-2">
                                  <button
                                      onClick={() => updateContactAllocation(pName, -1)}
                                      disabled={isReadOnly || allocations <= 0}
                                      className="w-5 h-5 flex items-center justify-center bg-stone-100 hover:bg-stone-200 rounded text-stone-600 disabled:opacity-50 transition-colors"
                                  ><Minus size={12} /></button>
                                  <span className="font-bold text-indigo-600 w-3 text-center">{allocations}</span>
                                  <button
                                      onClick={() => updateContactAllocation(pName, 1)}
                                      disabled={isReadOnly || budgetsInfo.freeContactsRemaining <= 0}
                                      className="w-5 h-5 flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 rounded text-indigo-700 disabled:opacity-50 transition-colors"
                                  ><Plus size={12} /></button>
                              </div>
                          </div>
                      );
                  })}
               </div>
            </div>
          )}
        </div>

        {/* COLONNE CENTRALE : LE CATALOGUE */}
        <div className="lg:col-span-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          {renderCatalogue(activeTab)}
        </div>

        {/* COLONNE DROITE : L'INVENTAIRE */}
        <div className="lg:col-span-3">
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 sticky top-4 space-y-4">
            <h3 className="font-serif font-bold text-stone-800 border-b border-stone-200 pb-2">Votre Inventaire</h3>
            
            {/* ✨ LE FIX : On filtre intelligemment pour ignorer la clé allocationsContacts et vérifier les tableaux ! */}
            {Object.keys(achats).filter(k => k !== 'allocationsContacts').length === 0 || 
             Object.entries(achats).every(([k, ids]) => k === 'allocationsContacts' || !Array.isArray(ids) || ids.length === 0) ? (
              <div className="text-center text-stone-400 text-sm italic py-4">Inventaire vide.</div>
            ) : (
              <div className="space-y-4">
                {Object.entries(achats).map(([profil, ids]) => {
                  // ✨ LE FIX : On ignore sciemment notre passager clandestin et on sécurise le type
                  if (profil === 'allocationsContacts' || !Array.isArray(ids) || ids.length === 0) return null;
                  
                  const itemsOfProfil = ids.map(id => socialItems?.find(i => i.id === id)).filter(Boolean);
                  
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

          {/* ✦ DONS DU DOCTE */}
          {personalSocialItems.length > 0 && (
            <div className="border-t border-violet-100 pt-3">
              <h4 className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-2">✦ Dons du Docte</h4>
              <ul className="space-y-2">
                {personalSocialItems.map(item => (
                  <li key={item.id} className="text-sm text-violet-900 font-semibold flex flex-col gap-0.5">
                    <span>{item.nom}</span>
                    {item.description && (
                      <span className="text-[11px] text-stone-400 font-normal italic leading-snug">{item.description}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
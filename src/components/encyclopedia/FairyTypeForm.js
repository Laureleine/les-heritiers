// src/components/encyclopedia/FairyTypeForm.js

import React, { useCallback } from 'react';
import { Star, Plus, Activity, Lock } from 'lucide-react';
import BonusBuilder from '../BonusBuilder';
import RelationSelector from './RelationSelector';

const FairyTypeForm = ({
  proposal,
  setProposal,
  parsedTech,
  updateTech,
  competencesData,
  usefulSkills,
  allCompFutiles,
  localCapacites,
  localPouvoirs,
  localAtouts,
  setHasPendingTech,
  setQuickForge
}) => {

  // 🧠 LE CERVEAU SÉPARÉ : Mémoïsation des fonctions de bascule pour le RelationSelector
  const toggleCapaciteChoix = useCallback((id, isChecked) => {
    setProposal(prev => ({
      ...prev,
      capacitesChoixIds: isChecked 
        ? [...(prev.capacitesChoixIds || []), id] 
        : (prev.capacitesChoixIds || []).filter(cId => cId !== id)
    }));
  }, [setProposal]);

  const togglePouvoir = useCallback((id, isChecked) => {
    setProposal(prev => ({
      ...prev,
      pouvoirsIds: isChecked 
        ? [...(prev.pouvoirsIds || []), id] 
        : (prev.pouvoirsIds || []).filter(pId => pId !== id)
    }));
  }, [setProposal]);

  const toggleAtout = useCallback((id, isChecked) => {
    setProposal(prev => ({
      ...prev,
      assetsIds: isChecked 
        ? [...(prev.assetsIds || []), id] 
        : (prev.assetsIds || []).filter(aId => aId !== id)
    }));
  }, [setProposal]);


  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* 1. NOM ET DESCRIPTION */}
      <div>
        <label className="block text-sm font-bold text-amber-900 mb-1">Nom de la Fée</label>
        <input
          type="text"
          value={proposal.name || ''}
          onChange={(e) => setProposal({ ...proposal, name: e.target.value })}
          className="w-full p-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 font-bold text-lg bg-white shadow-sm outline-none transition-all"
          placeholder="Ex: Phénix, Salamandre, Automate..."
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-amber-900 mb-1">Description</label>
        <textarea
          value={proposal.description || ''}
          onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
          className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 font-serif text-sm min-h-[100px] shadow-sm outline-none resize-none custom-scrollbar"
        />
      </div>

      {/* 2. MÉTADONNÉES (Taille, Époque, Sexe) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-bold text-amber-900 mb-1">Taille</label>
          <select
            value={proposal.taille || 'Moyenne'}
            onChange={(e) => setProposal({ ...proposal, taille: e.target.value })}
            className="w-full p-2 border border-amber-200 rounded-lg bg-white shadow-sm outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="Petite">Petite (+1 Esquive)</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Grande">Grande (-1 Esquive)</option>
            <option value="Très Grande">Très Grande (-2 Esquive)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-amber-900 mb-1">Ancienneté</label>
          <select
            value={proposal.era || 'traditionnelle'}
            onChange={(e) => setProposal({ ...proposal, era: e.target.value })}
            className="w-full p-2 border border-amber-200 rounded-lg bg-white shadow-sm outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="traditionnelle">Traditionnelle</option>
            <option value="moderne">Moderne</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-amber-900 mb-1">Sexes possibles</label>
          <div className="flex gap-4 p-2 border border-amber-200 rounded-lg bg-amber-50/50 shadow-inner">
            {['Homme', 'Femme'].map(genre => (
              <label key={genre} className="flex items-center gap-1 text-sm cursor-pointer font-bold text-stone-700">
                <input
                  type="checkbox"
                  checked={proposal.allowedGenders?.includes(genre)}
                  onChange={(e) => {
                    const newGenders = e.target.checked
                      ? [...(proposal.allowedGenders || []), genre]
                      : (proposal.allowedGenders || []).filter(g => g !== genre);
                    setProposal({ ...proposal, allowedGenders: newGenders });
                  }}
                  className="accent-amber-600 w-4 h-4"
                />
                {genre}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 3. LE SCEAU DU SILENCE */}
      <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-sm transition-colors hover:bg-red-100/50">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={proposal.is_secret || false}
            onChange={(e) => setProposal({ ...proposal, is_secret: e.target.checked })}
            className="w-5 h-5 accent-red-600"
          />
          <div>
            <span className="font-bold text-red-900 text-sm flex items-center gap-2">
              <Lock size={16} /> Savoir sous le Sceau du Silence (Fée Secrète)
            </span>
            <span className="text-xs text-red-700 italic block mt-1">
              Cochez cette case pour masquer cette fée aux simples Héritiers dans la création de personnage.
            </span>
          </div>
        </label>
      </div>

      {/* 4. TRAITS ET POTENTIELS (MIN / MAX) */}
      <div>
        <label className="block text-sm font-bold text-amber-900 mb-1">Traits de caractère (séparés par des virgules)</label>
        <input
          type="text"
          value={proposal.traits || ''}
          onChange={(e) => setProposal({ ...proposal, traits: e.target.value })}
          className="w-full p-2 border border-amber-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 shadow-inner">
        <label className="block text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
          <Activity size={16} /> Potentiels (Min / Max)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['agilite', 'constitution', 'force', 'precision', 'esprit', 'perception', 'prestance', 'sangFroid'].map((stat) => (
            <div key={stat} className="bg-white p-2 rounded border border-amber-200 text-center shadow-sm hover:border-amber-400 transition-colors">
              <span className="block text-[10px] font-bold uppercase text-stone-500 mb-1 tracking-wider">
                {stat === 'sangFroid' ? 'Sang-Froid' : stat}
              </span>
              <div className="flex justify-center items-center gap-1">
                <input
                  type="number" min="1" max="9"
                  value={proposal.caracteristiques?.[stat]?.min || 1}
                  onChange={(e) => setProposal({...proposal, caracteristiques: {...proposal.caracteristiques, [stat]: { ...proposal.caracteristiques?.[stat], min: parseInt(e.target.value) } }})}
                  className="w-8 text-center border-b border-amber-300 focus:outline-none focus:border-amber-600 text-sm font-bold bg-transparent"
                />
                <span className="text-stone-300">/</span>
                <input
                  type="number" min="1" max="9"
                  value={proposal.caracteristiques?.[stat]?.max || 6}
                  onChange={(e) => setProposal({...proposal, caracteristiques: {...proposal.caracteristiques, [stat]: { ...proposal.caracteristiques?.[stat], max: parseInt(e.target.value) } }})}
                  className="w-8 text-center border-b border-amber-300 focus:outline-none focus:border-amber-600 text-sm font-bold text-amber-700 bg-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. AVANTAGES ET DÉSAVANTAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-emerald-800 mb-1">Avantages (Un par ligne)</label>
          <textarea 
            value={proposal.avantages || ''} 
            onChange={(e) => setProposal({ ...proposal, avantages: e.target.value })} 
            className="w-full p-3 border border-emerald-200 bg-emerald-50/30 rounded-lg text-sm min-h-[80px] outline-none focus:ring-2 focus:ring-emerald-400 custom-scrollbar resize-none shadow-sm" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-red-800 mb-1">Désavantages (Un par ligne)</label>
          <textarea 
            value={proposal.desavantages || ''} 
            onChange={(e) => setProposal({ ...proposal, desavantages: e.target.value })} 
            className="w-full p-3 border border-red-200 bg-red-50/30 rounded-lg text-sm min-h-[80px] outline-none focus:ring-2 focus:ring-red-400 custom-scrollbar resize-none shadow-sm" 
          />
        </div>
      </div>

      {/* 6. LE CONSTRUCTEUR DE RÈGLES */}
      <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 shadow-sm">
        <label className="block text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
          <Star size={16} className="text-amber-500 fill-amber-500" /> Héritage & Compétences (Utiles et Futiles)
        </label>
        <BonusBuilder
          parsedTech={parsedTech}
          updateTech={updateTech}
          competencesData={competencesData}
          usefulSkills={usefulSkills}
          futilesSkills={allCompFutiles ? allCompFutiles.map(c => c.nom || c.name) : []}
          onPendingChanges={setHasPendingTech}
        />
      </div>

      {/* 7. CAPACITÉS (Utilisation hybride : Fixe + RelationSelector pour les choix) */}
      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <label className="block text-sm font-bold text-indigo-900">Capacités attachées</label>
          <button type="button" onClick={() => setQuickForge({ isOpen: true, type: 'fairy_capacites' })} className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm transition-colors shrink-0">
            <Plus size={14} /> Créer à la volée
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
            <label className="block text-xs font-bold text-indigo-800 mb-2">🌟 Capacité Fixe 1</label>
            <select 
              value={proposal.capaciteFixe1 || ''} 
              onChange={(e) => setProposal({ ...proposal, capaciteFixe1: e.target.value })} 
              className="w-full p-2 border border-indigo-200 rounded text-sm bg-indigo-50/30 outline-none focus:border-indigo-400"
            >
              <option value="">-- Sélectionner --</option>
              {localCapacites.map(cap => <option key={cap.id} value={cap.id}>{cap.nom || cap.name}</option>)}
            </select>
          </div>
          <div className="bg-white p-3 rounded border border-indigo-200 shadow-sm">
            <label className="block text-xs font-bold text-indigo-800 mb-2">🌟 Capacité Fixe 2</label>
            <select 
              value={proposal.capaciteFixe2 || ''} 
              onChange={(e) => setProposal({ ...proposal, capaciteFixe2: e.target.value })} 
              className="w-full p-2 border border-indigo-200 rounded text-sm bg-indigo-50/30 outline-none focus:border-indigo-400"
            >
              <option value="">-- Sélectionner --</option>
              {localCapacites.map(cap => <option key={cap.id} value={cap.id}>{cap.nom || cap.name}</option>)}
            </select>
          </div>
        </div>

        <div className="h-64">
          <RelationSelector
            title="⭐ Capacités au Choix"
            items={localCapacites}
            selectedIds={proposal.capacitesChoixIds || []}
            onToggle={toggleCapaciteChoix}
            colorTheme="indigo"
          />
        </div>
      </div>

      {/* 8. POUVOIRS (Utilisation de RelationSelector) */}
      <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
          <label className="block text-sm font-bold text-rose-900">Pouvoirs maîtrisables</label>
          <button type="button" onClick={() => setQuickForge({ isOpen: true, type: 'fairy_powers' })} className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm transition-colors shrink-0">
            <Plus size={14} /> Créer à la volée
          </button>
        </div>
        <div className="h-64">
           <RelationSelector
              title="Pouvoirs attachés à cette fée"
              items={localPouvoirs}
              selectedIds={proposal.pouvoirsIds || []}
              onToggle={togglePouvoir}
              colorTheme="rose"
            />
        </div>
      </div>

      {/* 9. ATOUTS (Utilisation de RelationSelector) */}
      <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
          <label className="block text-sm font-bold text-amber-900 flex items-center gap-2">
            <Star size={16} /> Atouts féériques
          </label>
          <button type="button" onClick={() => setQuickForge({ isOpen: true, type: 'fairy_assets' })} className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded flex items-center gap-1 shadow-sm transition-colors shrink-0">
            <Plus size={14} /> Créer à la volée
          </button>
        </div>
        <div className="h-64">
           <RelationSelector
              title="Atouts liés à cette fée"
              items={localAtouts}
              selectedIds={proposal.assetsIds || []}
              onToggle={toggleAtout}
              colorTheme="amber"
            />
        </div>
      </div>

    </div>
  );
};

export default React.memo(FairyTypeForm);
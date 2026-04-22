// src/components/encyclopedia/EntityForm.js

import React, { useCallback } from 'react';
import { Star, Sparkles } from 'lucide-react';
import BonusBuilder from '../BonusBuilder';
import RelationSelector from './RelationSelector';

const EntityForm = ({
  activeTab,
  isCreating,
  editingItem,
  proposal,
  setProposal,
  parsedTech,
  updateTech,
  competencesData,
  usefulSkills,
  allCompFutiles,
  allFairyTypes
}) => {

  // 🧠 LE CERVEAU SÉPARÉ : Mémoïsation de la fonction de bascule pour éviter les re-renders inutiles
  const handleToggleFairy = useCallback((fairyId, isChecked) => {
    setProposal(prev => {
      const currentIds = prev.fairyIds || [];
      if (isChecked) {
        return { ...prev, fairyIds: [...currentIds, fairyId] };
      } else {
        return { ...prev, fairyIds: currentIds.filter(id => id !== fairyId) };
      }
    });
  }, [setProposal]);

  return (
    <div className="space-y-4 animate-fade-in">
      
      {/* 1. NOM DE L'ÉLÉMENT */}
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-1">Nom de l'élément</label>
        <input
          type="text"
          value={proposal.name || ''}
          onChange={(e) => setProposal({ ...proposal, name: e.target.value })}
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none font-bold text-stone-800 bg-white shadow-sm transition-all"
          placeholder="Ex: Vision nocturne..."
        />
      </div>

      {/* 2. TYPE DE POUVOIR (Spécifique aux Pouvoirs) */}
      {activeTab === 'fairy_powers' && (isCreating || editingItem?.type_pouvoir) && (
        <div className="animate-fade-in">
          <label className="block text-xs font-bold text-rose-800 uppercase tracking-wider mb-1">Type de Pouvoir</label>
          <select
            value={proposal.type_pouvoir || 'masque'}
            onChange={(e) => setProposal({ ...proposal, type_pouvoir: e.target.value })}
            className="w-full p-2 border border-rose-200 bg-white rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-rose-200 outline-none font-bold text-rose-900"
          >
            <option value="masque">🎭 Standard - Masqué</option>
            <option value="demasque">🔥 Standard - Démasqué</option>
            <option value="profond_masque">🔮 Profond - Masqué</option>
            <option value="profond_demasque">🌋 Profond - Démasqué</option>
            <option value="legendaire_masque">👑 Légendaire - Masqué</option>
            <option value="legendaire_demasque">☄️ Légendaire - Démasqué</option>
          </select>
        </div>
      )}

      {/* 3. DESCRIPTION NARRATIVE */}
      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">
          {activeTab === 'fairy_assets' ? 'Description narrative' : 'Description / Contenu'}
        </label>
        <textarea
          value={proposal.description || ''}
          onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
          className={`w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-serif text-stone-800 shadow-sm transition-all custom-scrollbar resize-none ${activeTab === 'fairy_assets' ? 'h-24' : 'h-40'}`}
          placeholder="Rédigez la description officielle ici..."
        />
      </div>

      {/* 4. EFFETS EN JEU (Spécifique aux Atouts) */}
      {activeTab === 'fairy_assets' && (
        <div className="mt-4 animate-fade-in">
          <label className="block text-sm font-bold text-amber-800 mb-2 flex items-center gap-2">
            <Star size={16} /> Effets en jeu (Texte affiché au joueur)
          </label>
          <textarea
            value={proposal.effets || ''}
            onChange={(e) => setProposal({ ...proposal, effets: e.target.value })}
            className="w-full h-24 p-3 border border-amber-300 bg-amber-50/50 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-sm font-bold text-stone-800 shadow-sm transition-all custom-scrollbar resize-none"
            placeholder="Ex: +1 en Fortune. Débloque la spécialité Politique..."
          />
        </div>
      )}

      {/* 5. CONSTRUCTEUR LEGO (BonusBuilder) */}
      <div className="mt-4">
        <BonusBuilder
          parsedTech={parsedTech}
          updateTech={updateTech}
          rawJson={proposal.techData}
          onJsonChange={(val) => setProposal({ ...proposal, techData: val, effets_techniques: val })}
          competencesData={competencesData}
          usefulSkills={usefulSkills}
          futilesSkills={allCompFutiles ? allCompFutiles.map(c => c.nom || c.name) : []}
        />
      </div>

      {/* 6. RELATION INVERSÉE : FÉES COMPATIBLES (Avec notre nouveau composant !) */}
      <div className="mt-6 h-[250px] animate-fade-in-up">
        <RelationSelector
          title={<span className="flex items-center gap-2 text-sm"><Sparkles size={16} className="text-indigo-500" /> Fées possédant cet élément (Optionnel)</span>}
          items={allFairyTypes || []}
          selectedIds={proposal.fairyIds || []}
          onToggle={handleToggleFairy}
          colorTheme="indigo"
        />
      </div>

    </div>
  );
};

// 🛡️ Le composant ne se re-rendra pas si ses props n'ont pas muté
export default React.memo(EntityForm);
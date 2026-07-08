import React from 'react';
import { Users, VenetianMask } from '../../config/icons';

const FigureForm = ({
  proposal,
  setProposal,
  allFairyTypes
}) => {

  return (
    <div className="space-y-4">

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-1">Nom de la Figure</label>
        <input
          type="text"
          value={proposal.name || ''}
          onChange={(e) => setProposal({ ...proposal, name: e.target.value })}
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none font-bold text-stone-800 bg-white shadow-sm transition-all"
          placeholder="Ex: Comte Vladislav Orloc..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">Titre</label>
          <input
            type="text"
            value={proposal.titre || ''}
            onChange={(e) => setProposal({ ...proposal, titre: e.target.value })}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-bold text-stone-800 bg-white shadow-sm transition-all"
            placeholder="Ex: Prince des Marais, Ambassadeur..." />
        </div>
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">Clan</label>
          <input
            type="text"
            value={proposal.clan || ''}
            onChange={(e) => setProposal({ ...proposal, clan: e.target.value })}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-bold text-stone-800 bg-white shadow-sm transition-all"
            placeholder="Ex: Maison Orloc, Cour des Ombres..." />
        </div>
      </div>

      <div className="border-t border-stone-200 pt-4">
        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <VenetianMask size={16} /> Faux-Semblant
        </h4>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-bold text-stone-600">Cette figure porte un masque :</span>
          <button
            type="button"
            role="switch"
            aria-checked={proposal.faux_semblant}
            onClick={() => setProposal({ ...proposal, faux_semblant: !proposal.faux_semblant, faux_semblant_type_fee: !proposal.faux_semblant ? '' : proposal.faux_semblant_type_fee })}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
              proposal.faux_semblant ? 'bg-purple-600 border-purple-700' : 'bg-stone-200 border-stone-300'
            }`}
          >
            <span className={`inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              proposal.faux_semblant ? 'translate-x-5' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        {proposal.faux_semblant && (
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 space-y-3">
            <div>
              <label className="block text-sm font-bold text-purple-800 mb-1">Type de Fée du Faux-Semblant</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={proposal.faux_semblant_type_fee || ''}
                  onChange={(e) => setProposal({ ...proposal, faux_semblant_type_fee: e.target.value })}
                  list="fairy-types-suggestions"
                  className="flex-1 p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none font-bold text-stone-800 bg-white shadow-sm transition-all"
                  placeholder="Ex: Vampire, Ange, Loup-Garou..." />
                <datalist id="fairy-types-suggestions">
                  {(allFairyTypes || []).map(f => (
                    <option key={f.id} value={f.name || f.nom} />
                  ))}
                </datalist>
              </div>
              <p className="text-xs text-purple-600 mt-1 italic">Saisis librement ou choisis parmi les espèces féériques connues</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1 flex items-center gap-2">
            <Users size={16} className="text-stone-500" /> Apparence Masquée
          </label>
          <textarea
            value={proposal.apparence_masquee || ''}
            onChange={(e) => setProposal({ ...proposal, apparence_masquee: e.target.value })}
            className="w-full h-32 p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-serif text-stone-800 bg-white shadow-sm transition-all custom-scrollbar resize-none"
            placeholder="Description de l'apparence publique, avec le masque..." />
        </div>
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1 flex items-center gap-2">
            <VenetianMask size={16} className="text-purple-500" /> Apparence Démasquée
          </label>
          <textarea
            value={proposal.apparence_demasquee || ''}
            onChange={(e) => setProposal({ ...proposal, apparence_demasquee: e.target.value })}
            className="w-full h-32 p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-400 outline-none font-serif text-stone-800 bg-purple-50/50 shadow-sm transition-all custom-scrollbar resize-none"
            placeholder="Description de la véritable apparence, sans le masque..." />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">Description & Lore</label>
        <textarea
          value={proposal.description || ''}
          onChange={(e) => setProposal({ ...proposal, description: e.target.value })}
          className="w-full h-40 p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none font-serif text-stone-800 bg-white shadow-sm transition-all custom-scrollbar resize-none"
          placeholder="Rédigez la description de cette figure — son histoire, ses motivations, ses secrets..." />
      </div>
    </div>
  );
};

export default React.memo(FigureForm);

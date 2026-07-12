// src/components/cercle/TabIndicesVerites.js
import React, { useMemo, useState } from 'react';
import { Eye, EyeOff, Loader, ChevronDown, ChevronUp } from '../../config/icons';
import { useIndicesVerites } from '../../hooks/useIndicesVerites';

const LABEL_TYPE = {
  indice:          'Indice',
  verite_mineure:  'Vérité mineure',
  verite_majeure:  'Vérité majeure',
  dit_du_marcheur: 'Dit du Marcheur',
};

const BADGE_TYPE = {
  indice:          'bg-stone-100 text-stone-600 border-stone-200',
  verite_mineure:  'bg-blue-50 text-blue-700 border-blue-200',
  verite_majeure:  'bg-purple-50 text-purple-800 border-purple-200',
  dit_du_marcheur: 'bg-amber-50 text-amber-800 border-amber-300',
};

const XP_BADGE = {
  indice:          'bg-stone-50 text-stone-500',
  verite_mineure:  'bg-blue-50 text-blue-600',
  verite_majeure:  'bg-purple-50 text-purple-700',
  dit_du_marcheur: 'bg-amber-50 text-amber-700',
};

const TYPE_ORDER = { indice: 0, verite_mineure: 1, verite_majeure: 2, dit_du_marcheur: 3 };

export default function TabIndicesVerites({ cercleId, isDocte, userId, activeMembers }) {
  const { items, revealedIds, loading, reveler, masquer, isBonusEarned, isBonusDistributed, XP_BAREME, XP_BONUS_ELEMENT } = useIndicesVerites(cercleId, activeMembers);
  const [openElement, setOpenElement] = useState(null); // vrai accordéon : un seul ouvert à la fois
  const [pending, setPending] = useState(null); // itemId en cours de toggle

  // Pour les joueurs : ne montrer que les révélés
  const visibleItems = isDocte ? items : items.filter(i => revealedIds.has(i.id));

  const grouped = useMemo(() => {
    const map = {};
    for (const item of visibleItems) {
      if (!map[item.element_nom]) map[item.element_nom] = [];
      map[item.element_nom].push(item);
    }
    // Trier chaque groupe : indice → vérité mineure → vérité majeure → dit du marcheur
    for (const nom of Object.keys(map)) {
      map[nom].sort((a, b) => (TYPE_ORDER[a.type] ?? 99) - (TYPE_ORDER[b.type] ?? 99) || a.ordre - b.ordre);
    }
    return map;
  }, [visibleItems]);

  const toggle = async (itemId, isRevealed) => {
    if (pending) return;
    setPending(itemId);
    try {
      if (isRevealed) await masquer(itemId);
      else            await reveler(itemId, userId);
    } finally {
      setPending(null);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center py-16 gap-2 text-stone-400">
      <Loader size={18} className="animate-spin" /> Chargement…
    </div>
  );

  if (!isDocte && visibleItems.length === 0) return (
    <div className="text-center py-16 text-stone-400 italic">
      Aucune révélation pour l'instant.
    </div>
  );

  return (
    <div className="space-y-3">
      {Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b, 'fr')).map(([elementNom, elementItems]) => {
        const isOpen = openElement === elementNom;
        const revealedCount = elementItems.filter(i => revealedIds.has(i.id)).length;
        const bonusEarned = isBonusEarned(elementNom);
        const bonusDistributed = isBonusDistributed(elementNom);

        return (
          <div key={elementNom} className="border border-stone-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenElement(p => p === elementNom ? null : elementNom)}
              className="w-full flex items-center justify-between px-4 py-3 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-amber-900">{elementNom}</span>
                <span className="text-xs text-stone-400 font-sans">{revealedCount}/{elementItems.length}</span>
                {bonusEarned && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${bonusDistributed ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                    ✓ Vérités majeures complètes {bonusDistributed ? `(+${XP_BONUS_ELEMENT} XP distribués)` : ''}
                  </span>
                )}
              </div>
              {isOpen ? <ChevronUp size={14} className="text-stone-400" /> : <ChevronDown size={14} className="text-stone-400" />}
            </button>

            {isOpen && (
              <div className="divide-y divide-stone-100">
                {elementItems.map(item => {
                  const isRevealed = revealedIds.has(item.id);
                  const isPending  = pending === item.id;
                  const xp         = XP_BAREME[item.type] || 0;

                  return (
                    <div key={item.id} className={`px-4 py-3 flex items-start gap-3 transition-colors ${isRevealed ? 'bg-white' : 'bg-stone-50/60'}`}>
                      {isDocte && (
                        <button
                          onClick={() => toggle(item.id, isRevealed)}
                          disabled={isPending}
                          className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-colors ${
                            isRevealed
                              ? 'bg-amber-600 border-amber-600 text-white'
                              : 'bg-white border-stone-300 hover:border-amber-400'
                          } ${isPending ? 'opacity-50 cursor-wait' : 'cursor-pointer'}`}
                          title={isRevealed ? 'Masquer cet élément' : 'Révéler cet élément'}
                          aria-label={isRevealed ? `Masquer : ${item.texte.substring(0, 40)}` : `Révéler : ${item.texte.substring(0, 40)}`}
                        >
                          {isPending ? <Loader size={10} className="animate-spin" /> : isRevealed ? '✓' : null}
                        </button>
                      )}

                      {!isDocte && (
                        <div className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center">
                          {isRevealed ? <Eye size={13} className="text-amber-600" /> : <EyeOff size={13} className="text-stone-300" />}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${BADGE_TYPE[item.type]}`}>
                            {LABEL_TYPE[item.type]}
                          </span>
                          {isDocte && xp > 0 && (
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${XP_BADGE[item.type]}`}>
                              +{xp} XP
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-serif leading-snug ${isRevealed ? 'text-stone-800' : 'text-stone-400 italic'}`}>
                          {item.texte}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

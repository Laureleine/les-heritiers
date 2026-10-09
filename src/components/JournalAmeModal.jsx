// src/components/JournalAmeModal.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { X, BookOpen, TrendingUp, TrendingDown, RotateCcw, Clock } from '../config/icons';
import { supabase } from '../config/supabase';

export default function JournalAmeModal({ isOpen, onClose, historiqueXp = [], characterId }) {
  const [aggregateGains, setAggregateGains] = useState(false);
  const [gainTransactions, setGainTransactions] = useState(null); // null = pas encore chargé

  // Charger les transactions GAIN depuis xp_transactions (détail SQL) quand le modal s'ouvre
  useEffect(() => {
    if (!isOpen || !characterId) return;
    setGainTransactions(null);
    supabase
      .from('xp_transactions')
      .select('type, code, label, valeur, date_mouvement, rang_final')
      .eq('character_id', characterId)
      .eq('type', 'GAIN')
      .order('date_mouvement', { ascending: true })
      .then(({ data }) => setGainTransactions(data || []));
  }, [isOpen, characterId]);

  // Fusionner : GAIN depuis xp_transactions (si dispo), DEPENSE/REMBOURSEMENT depuis le JSONB
  const allTransactions = useMemo(() => {
    const nonGains = historiqueXp.filter(e => e.type !== 'GAIN');
    const gains = gainTransactions !== null
      ? gainTransactions
      : historiqueXp.filter(e => e.type === 'GAIN');
    return [...gains, ...nonGains];
  }, [historiqueXp, gainTransactions]);

  const sortedHistorique = useMemo(
    () => [...allTransactions].sort((a, b) => new Date(b.date_mouvement) - new Date(a.date_mouvement)),
    [allTransactions]
  );

  // ✨ On fusionne les entrées consécutives de même nature (ex: plusieurs "Ajustement Manuel" d'affilée)
  const groupedHistorique = useMemo(
    () => sortedHistorique.reduce((acc, entry) => {
      const last = acc[acc.length - 1];
      if (last && last.label === entry.label && last.type === entry.type) {
        last.valeur += entry.valeur;
        last._count = (last._count || 1) + 1;
      } else {
        acc.push({ ...entry, _count: 1 });
      }
      return acc;
    }, []),
    [sortedHistorique]
  );

  // Option : agréger tous les GAIN en une seule ligne résumée
  const displayHistorique = useMemo(() => {
    if (!aggregateGains) return groupedHistorique;

    const gainEntries = groupedHistorique.filter(e => e.type === 'GAIN');
    const nonGainEntries = groupedHistorique.filter(e => e.type !== 'GAIN');

    if (gainEntries.length === 0) return nonGainEntries;

    const totalGains = gainEntries.reduce((s, e) => s + e.valeur, 0);
    const oldestGainDate = gainEntries[gainEntries.length - 1]?.date_mouvement;

    const aggregatedGain = {
      type: 'GAIN',
      label: `Total des gains (${gainEntries.length} entrées)`,
      valeur: totalGains,
      date_mouvement: oldestGainDate,
      _count: gainEntries.length,
      _aggregated: true,
    };

    return [...nonGainEntries, aggregatedGain];
  }, [groupedHistorique, aggregateGains]);

  if (!isOpen) return null;

  const getIconAndColor = (type) => {
    switch (type) {
      case 'GAIN': return { icon: <TrendingUp size={16} />, color: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
      case 'DEPENSE': return { icon: <TrendingDown size={16} />, color: 'bg-amber-50 text-amber-900 border-amber-300' };
      case 'REMBOURSEMENT': return { icon: <RotateCcw size={16} />, color: 'bg-blue-50 text-blue-800 border-blue-200' };
      default: return { icon: <Clock size={16} />, color: 'bg-stone-50 text-stone-600 border-stone-200' };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-[#fdfbf7] max-w-2xl w-full max-h-[85vh] rounded-2xl shadow-2xl border-4 border-amber-900/20 flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>

        {/* En-tête du Livre de Comptes */}
        <div className="bg-stone-950 p-4 border-b border-amber-900/50 flex justify-between items-center shrink-0 gap-4">
          <h3 className="font-serif font-bold text-xl text-amber-400 flex items-center gap-3 shrink-0">
            <BookOpen className="text-amber-600" />
            Journal des Flux de l'Âme
          </h3>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-400 hover:text-stone-200 transition-colors select-none">
              <div
                role="checkbox"
                aria-checked={aggregateGains}
                tabIndex={0}
                onClick={() => setAggregateGains(v => !v)}
                onKeyDown={e => (e.key === ' ' || e.key === 'Enter') && setAggregateGains(v => !v)}
                className={`relative w-8 h-4 rounded-full transition-colors ${aggregateGains ? 'bg-emerald-600' : 'bg-stone-700'}`}
              >
                <span className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform ${aggregateGains ? 'translate-x-4' : 'translate-x-0.5'}`} />
              </div>
              Agréger les gains
            </label>
            <button onClick={onClose} className="text-stone-400 hover:text-red-500 bg-stone-800 hover:bg-stone-700 p-2 rounded-full shadow-sm transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Le Registre */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          {gainTransactions === null && characterId ? (
            <div className="text-center py-12 text-stone-400 font-serif italic flex flex-col items-center gap-3">
              <Clock size={32} className="opacity-20 animate-spin" />
              Consultation des archives…
            </div>
          ) : displayHistorique.length === 0 ? (
            <div className="text-center py-12 text-stone-400 font-serif italic flex flex-col items-center gap-3">
              <Clock size={32} className="opacity-20" />
              Les pages de ce journal sont encore vierges.
            </div>
          ) : (
            <div className="space-y-3">
              {displayHistorique.map((entree, idx) => {
                const { icon, color } = getIconAndColor(entree.type);

                return (
                  <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between gap-4 shadow-sm transition-all hover:scale-[1.01] ${color}`}>

                    {/* Icône & Date */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="p-2 bg-white/50 rounded-lg shadow-sm">
                        {icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                          {new Date(entree.date_mouvement).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="text-xs font-serif opacity-80">
                          {new Date(entree.date_mouvement).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}
                        </span>
                      </div>
                    </div>

                    {/* Libellé Narratif */}
                    <div className="flex-1 flex flex-col border-l border-current/20 pl-4 py-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold font-serif leading-tight">
                          {entree.label}{entree.rang_final != null ? ` (Rang ${entree.rang_final})` : ''}
                        </span>
                        {entree._count > 1 && !entree._aggregated && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-white/60 rounded-full opacity-70 border border-current/20 shrink-0">
                            ×{entree._count}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Valeur Mathématique */}
                    <div className="shrink-0 text-right pr-2">
                      {entree.valeur === 0 ? (
                        <span className="text-sm font-black font-serif text-purple-400">🧠 Gratuit</span>
                      ) : (
                        <>
                          <span className="text-xl font-black font-serif">
                            {entree.type === 'DEPENSE' ? '-' : '+'}{entree.valeur}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">XP</span>
                        </>
                      )}
                    </div>

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

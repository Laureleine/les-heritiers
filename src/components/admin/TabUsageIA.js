import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../config/supabase';

// Tarifs approximatifs (USD par 1M tokens) — à ajuster si la grille Google change.
// Source de vérité : https://ai.google.dev/gemini-api/docs/pricing
const TARIFS_USD_PAR_MILLION = {
  'gemini-2.5-flash': { prompt: 0.30, completion: 2.50 },
};

// Taux de conversion approximatif, à ajuster périodiquement.
const USD_VERS_EUR = 0.92;

export function coutEstime(model, promptTokens, completionTokens) {
  const tarif = TARIFS_USD_PAR_MILLION[model];
  if (!tarif) return 0;
  const coutUsd = (promptTokens / 1_000_000) * tarif.prompt + (completionTokens / 1_000_000) * tarif.completion;
  return coutUsd * USD_VERS_EUR;
}

export default function TabUsageIA() {
  const [loading, setLoading] = useState(true);
  const [lignes, setLignes] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from('llm_usage_log')
        .select('call_type, model, prompt_tokens, completion_tokens, total_tokens, created_at')
        .order('created_at', { ascending: false })
        .limit(2000);
      setLignes(data || []);
      setLoading(false);
    })();
  }, []);

  const groupesParJour = useMemo(() => {
    const parJour = {};
    for (const l of lignes) {
      const jourKey = l.created_at.slice(0, 10); // YYYY-MM-DD
      if (!parJour[jourKey]) parJour[jourKey] = {};
      if (!parJour[jourKey][l.call_type]) {
        parJour[jourKey][l.call_type] = { promptTokens: 0, completionTokens: 0, totalTokens: 0, cout: 0 };
      }
      const g = parJour[jourKey][l.call_type];
      g.promptTokens += l.prompt_tokens;
      g.completionTokens += l.completion_tokens;
      g.totalTokens += l.total_tokens;
      g.cout += coutEstime(l.model, l.prompt_tokens, l.completion_tokens);
    }
    return Object.entries(parJour).sort((a, b) => (a[0] < b[0] ? 1 : -1));
  }, [lignes]);

  if (loading) return <p className="text-sm text-stone-400 font-serif">Chargement…</p>;

  if (groupesParJour.length === 0) {
    return <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun appel IA enregistré pour l'instant.</p>;
  }

  return (
    <div className="space-y-4">
      {groupesParJour.map(([jourKey, parType]) => {
        const totalJour = Object.values(parType).reduce((acc, g) => ({
          totalTokens: acc.totalTokens + g.totalTokens,
          cout: acc.cout + g.cout,
        }), { totalTokens: 0, cout: 0 });
        const jourLabel = new Date(jourKey).toLocaleDateString('fr-FR');

        return (
          <div key={jourKey} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <p className="font-serif font-bold text-stone-800">{jourLabel}</p>
              <p className="text-xs font-bold text-stone-500">{totalJour.totalTokens.toLocaleString('fr-FR')} tokens · {totalJour.cout.toFixed(4)} €</p>
            </div>
            <div className="space-y-1">
              {Object.entries(parType).map(([callType, g]) => (
                <div key={callType} className="flex items-center justify-between text-sm text-stone-600 font-sans">
                  <span>{callType} <span className="text-xs text-stone-400">(prompt {g.promptTokens.toLocaleString('fr-FR')} · completion {g.completionTokens.toLocaleString('fr-FR')})</span></span>
                  <span className="font-bold">{g.totalTokens.toLocaleString('fr-FR')} tokens · {g.cout.toFixed(4)} €</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

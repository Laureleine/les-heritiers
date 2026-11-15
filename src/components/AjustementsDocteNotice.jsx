// src/components/AjustementsDocteNotice.jsx
// À la connexion, informe le joueur des ajustements faits par son Docte
// (data.ajustements_docte_non_vus, écrit par la fonction SQL docte_ajuster_fiche).
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

const XP_TEXTE = {
  rembourse: (xp) => ` (+${xp} XP rendus)`,
  paye: (xp) => ` (${xp} XP dépensés)`,
};

export function markAjustementsVus(data) {
  const next = { ...(data || {}) };
  delete next.ajustements_docte_non_vus;
  return next;
}

export default function AjustementsDocteNotice({ userProfile }) {
  const [queue, setQueue] = useState([]);
  const [saving, setSaving] = useState(false);
  const userId = userProfile?.id;

  useEffect(() => {
    if (!userId) return;
    supabase
      .from('characters')
      .select('id, nom, data')
      .eq('user_id', userId)
      .not('data->ajustements_docte_non_vus', 'is', null)
      .then(({ data, error }) => {
        if (!error && data) setQueue(data.filter(c => (c.data?.ajustements_docte_non_vus || []).length > 0));
      });
  }, [userId]);

  const current = queue[0];
  if (!current) return null;
  const ajustements = current.data.ajustements_docte_non_vus;

  const compris = async () => {
    setSaving(true);
    // Relire la fiche juste avant d'écrire, pour ne rien écraser.
    const { data: fresh, error: readError } = await supabase
      .from('characters').select('data').eq('id', current.id).single();
    const { error } = readError
      ? { error: readError }
      : await supabase.from('characters').update({ data: markAjustementsVus(fresh.data) }).eq('id', current.id);
    setSaving(false);
    if (error) { showInAppNotification("Impossible d'enregistrer la lecture. Réessayez plus tard.", 'error'); return; }
    setQueue(q => q.slice(1));
    // Une fiche ouverte dans l'éditeur serait périmée : on la recharge.
    if (window.location.pathname.startsWith('/creator')) window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div role="dialog" aria-labelledby="ajustements-docte-title" className="bg-[#fdfbf7] max-w-md w-full rounded-2xl shadow-2xl border-2 border-emerald-300/40 overflow-hidden">
        <div className="bg-emerald-800 text-emerald-50 px-5 py-4">
          <h2 id="ajustements-docte-title" className="font-serif font-bold text-lg">📜 Votre Docte a ajusté {current.nom}</h2>
        </div>
        <ul className="px-6 py-5 space-y-3">
          {ajustements.map((a, i) => (
            <li key={i} className="text-stone-700 font-serif">
              <strong>{a.label}</strong>{XP_TEXTE[a.xp_mode]?.(a.xp) || ''}
              <div className="text-sm italic text-stone-500">« {a.motif} »</div>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6">
          <button onClick={compris} disabled={saving}
            className="w-full px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold font-serif rounded-xl shadow transition-colors disabled:opacity-50">
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
}

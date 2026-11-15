// src/components/AnomalieEspeceConfirmModal.jsx
// Demande aux joueurs de confirmer l'espèce de leur Anomalie féérique quand
// l'espèce enregistrée est douteuse (bug < v18.1.8 : la première espèce possédant
// le pouvoir était enregistrée au lieu de celle choisie). Le drapeau
// `data.anomalie_espece_a_confirmer = { pouvoir, options }` est posé par script.
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import { applyEspeceConfirmation } from '../utils/anomalieChaining';

export default function AnomalieEspeceConfirmModal({ userProfile }) {
  const [queue, setQueue] = useState([]);
  const [saving, setSaving] = useState(false);
  const userId = userProfile?.id;

  useEffect(() => {
    if (!userId) return;
    supabase
      .from('characters')
      .select('id, nom, data')
      .eq('user_id', userId)
      .not('data->anomalie_espece_a_confirmer', 'is', null)
      .then(({ data, error }) => {
        if (!error && data) setQueue(data.filter(c => c.data?.anomalie_espece_a_confirmer));
      });
  }, [userId]);

  const current = queue[0];
  if (!current) return null;
  const { pouvoir, options = [] } = current.data.anomalie_espece_a_confirmer;

  const choisir = async (espece) => {
    setSaving(true);
    // Relire la fiche juste avant d'écrire, pour ne rien écraser.
    const { data: fresh, error: readError } = await supabase
      .from('characters').select('data').eq('id', current.id).single();
    const { error } = readError
      ? { error: readError }
      : await supabase.from('characters')
          .update({ data: applyEspeceConfirmation(fresh.data, espece) })
          .eq('id', current.id);
    setSaving(false);
    if (error) {
      showInAppNotification("Impossible d'enregistrer votre choix. Réessayez plus tard.", 'error');
      return;
    }
    showInAppNotification(`Anomalie de ${current.nom} : ${espece} confirmé.`, 'success');
    setQueue(q => q.slice(1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div role="dialog" aria-labelledby="anomalie-confirm-title" className="bg-[#fdfbf7] max-w-md w-full rounded-2xl shadow-2xl border-2 border-fuchsia-300/40 overflow-hidden">
        <div className="bg-fuchsia-800 text-fuchsia-50 px-5 py-4">
          <h2 id="anomalie-confirm-title" className="font-serif font-bold text-lg">✨ Anomalie féérique — {current.nom}</h2>
        </div>
        <div className="px-6 py-5">
          <p className="text-stone-700 font-serif leading-relaxed">
            Votre pouvoir <strong>{pouvoir}</strong> existe chez plusieurs espèces, et un sortilège mal
            ajusté a pu noter la mauvaise. De quelle espèce provient votre Anomalie ?
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {options.map(espece => (
              <button
                key={espece}
                disabled={saving}
                onClick={() => choisir(espece)}
                className="px-3 py-2 rounded-lg border-2 border-fuchsia-200 bg-white text-sm font-bold text-fuchsia-900 hover:border-fuchsia-500 disabled:opacity-50 transition-colors"
              >
                {espece}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

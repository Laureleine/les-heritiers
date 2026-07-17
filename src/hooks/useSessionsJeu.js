// src/hooks/useSessionsJeu.js
import { useState, useCallback, useEffect } from 'react';
import { db } from '../config/db';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export function useSessionsJeu(cercleId, userId) {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!cercleId) return;
    setLoading(true);
    try {
      const { data, error } = await db.from('sessions_jeu')
        .select('*, session_presents(character_id, present)')
        .eq('cercle_id', cercleId)
        .order('date_partie', { ascending: false });
      if (error) throw error;
      if (data && navigator.onLine) {
        db.cacheUserData('sessions_jeu', cercleId, data).catch(() => {});
      }
      setSessions(data || []);
    } catch (err) {
      showInAppNotification('Erreur chargement des parties : ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [cercleId]);

  useEffect(() => { load(); }, [load]);

  const createSession = useCallback(async (formData, presents) => {
    try {
      const { data: session, error } = await supabase
        .from('sessions_jeu')
        .insert({
          cercle_id:    cercleId,
          titre:        formData.titre,
          date_partie:  formData.date_partie,
          resume:       formData.resume || null,
          xp_distribue: formData.xp_distribue || 0,
          is_public:    false,
          xp_auto:      formData.xp_auto,
          xp_scope:     formData.xp_scope,
          created_by:   userId,
        })
        .select()
        .single();
      if (error) throw error;

      const presentsData = presents
        .filter(p => p.character_id)
        .map(p => ({ session_id: session.id, character_id: p.character_id, present: p.present }));
      if (presentsData.length > 0) {
        const { error: presErr } = await supabase.from('session_presents').insert(presentsData);
        if (presErr) throw presErr;
      }

      if (formData.xp_auto && (formData.xp_distribue || 0) > 0) {
        const targets = presents
          .filter(p => p.character_id && (formData.xp_scope === 'membres' || p.present))
          .map(p => p.character_id);
        if (targets.length > 0) {
          const { error: xpErr } = await supabase.rpc('distribute_session_xp', {
            p_session_id:    session.id,
            p_character_ids: targets,
            p_amount:        formData.xp_distribue,
            p_label:         `Partie : ${formData.titre}`,
          });
          if (xpErr) throw xpErr;
        }
      }

      showInAppNotification('Partie enregistrée !', 'success');
      load();
      return session;
    } catch (err) {
      showInAppNotification('Erreur : ' + err.message, 'error');
      return null;
    }
  }, [cercleId, userId, load]);

  const updateSession = useCallback(async (sessionId, formData, presents, oldSession) => {
    try {
      const { error } = await supabase
        .from('sessions_jeu')
        .update({
          titre:        formData.titre,
          date_partie:  formData.date_partie,
          resume:       formData.resume || null,
          xp_distribue: formData.xp_distribue || 0,
          xp_auto:      formData.xp_auto,
          xp_scope:     formData.xp_scope,
          updated_at:   new Date().toISOString(),
        })
        .eq('id', sessionId);
      if (error) throw error;

      await supabase.from('session_presents').delete().eq('session_id', sessionId);
      const presentsData = presents
        .filter(p => p.character_id)
        .map(p => ({ session_id: sessionId, character_id: p.character_id, present: p.present }));
      if (presentsData.length > 0) {
        await supabase.from('session_presents').insert(presentsData);
      }

      // Correction XP si le montant a changé et que l'XP avait déjà été distribué
      const ancienXp = oldSession.xp_distribue || 0;
      const nouvelXp = formData.xp_distribue || 0;
      const wasAuto  = oldSession.xp_attribue;
      const isNowAuto = formData.xp_auto;

      if (wasAuto && isNowAuto && ancienXp !== nouvelXp) {
        const delta = nouvelXp - ancienXp;
        const targets = presents
          .filter(p => p.character_id && (formData.xp_scope === 'membres' || p.present))
          .map(p => p.character_id);
        if (targets.length > 0 && delta !== 0) {
          await supabase.rpc('distribute_session_xp', {
            p_session_id:    sessionId,
            p_character_ids: targets,
            p_amount:        delta,
            p_label:         `Correction partie : ${formData.titre}`,
          });
          showInAppNotification(`Correction XP appliquée (${delta > 0 ? '+' : ''}${delta} XP par Héritier).`, 'info');
        }
      }

      // Première attribution si on vient d'activer xp_auto
      if (!wasAuto && isNowAuto && (formData.xp_distribue || 0) > 0) {
        const targets = presents
          .filter(p => p.character_id && (formData.xp_scope === 'membres' || p.present))
          .map(p => p.character_id);
        if (targets.length > 0) {
          await supabase.rpc('distribute_session_xp', {
            p_session_id:    sessionId,
            p_character_ids: targets,
            p_amount:        formData.xp_distribue,
            p_label:         `Partie : ${formData.titre}`,
          });
        }
      }

      showInAppNotification('Partie mise à jour.', 'success');
      load();
    } catch (err) {
      showInAppNotification('Erreur : ' + err.message, 'error');
    }
  }, [load]);

  const deleteSession = useCallback(async (sessionId) => {
    try {
      const { error } = await supabase.from('sessions_jeu').delete().eq('id', sessionId);
      if (error) throw error;
      showInAppNotification('Partie supprimée.', 'success');
      load();
    } catch (err) {
      showInAppNotification('Erreur : ' + err.message, 'error');
    }
  }, [load]);

  const togglePublic = useCallback(async (sessionId, currentIsPublic) => {
    try {
      const { error } = await supabase
        .from('sessions_jeu')
        .update({ is_public: !currentIsPublic, updated_at: new Date().toISOString() })
        .eq('id', sessionId);
      if (error) throw error;
      load();
    } catch (err) {
      showInAppNotification('Erreur : ' + err.message, 'error');
    }
  }, [load]);

  return { sessions, loading, createSession, updateSession, deleteSession, togglePublic, reload: load };
}

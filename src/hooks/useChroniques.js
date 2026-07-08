// src/hooks/useChroniques.js
import { useState, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification, translateError } from '../utils/SystemeServices';

export function useChroniques(characterId) {
  const [chroniques, setChroniques] = useState([]);
  const [ombres, setOmbres] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!characterId) return;
    setLoading(true);
    try {
      const [{ data: chron, error: e1 }, { data: ombs, error: e2 }] = await Promise.all([
        supabase
          .from('chroniques_heritiers')
          .select('*, sessions_jeu(id, titre, date_partie)')
          .eq('character_id', characterId)
          .order('date_session', { ascending: false }),
        supabase
          .from('ombre_consequences')
          .select('*, sessions_jeu(id, titre)')
          .eq('character_id', characterId)
          .order('created_at', { ascending: false }),
      ]);
      if (e1) throw e1;
      if (e2) throw e2;
      setChroniques(chron || []);
      setOmbres(ombs || []);
    } catch (err) {
      showInAppNotification('Erreur de chargement des Chroniques : ' + translateError(err), 'error');
    } finally {
      setLoading(false);
    }
  }, [characterId]);

  const createChronique = async (formData) => {
    try {
      const { data, error } = await supabase
        .from('chroniques_heritiers')
        .insert([{ character_id: characterId, ...formData }])
        .select()
        .single();
      if (error) throw error;
      setChroniques(prev => [data, ...prev]);
      showInAppNotification('Chronique gravée dans les annales.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const updateChronique = async (id, formData) => {
    try {
      const { data, error } = await supabase
        .from('chroniques_heritiers')
        .update({ ...formData, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      setChroniques(prev => prev.map(c => c.id === id ? data : c));
      showInAppNotification('Chronique mise à jour.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const deleteChronique = async (id) => {
    try {
      const { error } = await supabase.from('chroniques_heritiers').delete().eq('id', id);
      if (error) throw error;
      setChroniques(prev => prev.filter(c => c.id !== id));
      showInAppNotification('Chronique supprimée.', 'success');
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
    }
  };

  // ── Docte : écrire une Conséquence de l'Ombre ───────────────────────────
  const addOmbre = async ({ cercleId, sessionId = null, contenu }) => {
    try {
      const { data, error } = await supabase
        .from('ombre_consequences')
        .insert([{
          character_id: characterId,
          cercle_id: cercleId,
          session_id: sessionId || null,
          contenu,
        }])
        .select('*, sessions_jeu(id, titre)')
        .single();
      if (error) throw error;
      setOmbres(prev => [data, ...prev]);
      showInAppNotification('Conséquence de l\'Ombre consignée.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const updateOmbre = async (id, contenu) => {
    try {
      const { data, error } = await supabase
        .from('ombre_consequences')
        .update({ contenu })
        .eq('id', id)
        .select('*, sessions_jeu(id, titre)')
        .single();
      if (error) throw error;
      setOmbres(prev => prev.map(o => o.id === id ? data : o));
      showInAppNotification('Conséquence mise à jour.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const revealOmbre = async (id) => {
    try {
      const { error } = await supabase.rpc('reveal_ombre_consequence', { p_consequence_id: id });
      if (error) throw error;
      setOmbres(prev => prev.map(o => o.id === id ? { ...o, est_revelee: true, revelee_at: new Date().toISOString() } : o));
      showInAppNotification('Conséquence révélée — le Joueur en est informé via le Télégraphe.', 'success');
      return true;
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
      return false;
    }
  };

  const deleteOmbre = async (id) => {
    try {
      const { error } = await supabase.from('ombre_consequences').delete().eq('id', id);
      if (error) throw error;
      setOmbres(prev => prev.filter(o => o.id !== id));
    } catch (err) {
      showInAppNotification('Erreur : ' + translateError(err), 'error');
    }
  };

  return {
    chroniques, ombres, loading, load,
    createChronique, updateChronique, deleteChronique,
    addOmbre, updateOmbre, revealOmbre, deleteOmbre,
  };
}

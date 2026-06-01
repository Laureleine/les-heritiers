// src/hooks/useGrimoire.js
// 14.6.0

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

// ✨ FIX : On demande en priorité la clé de l'Héritier !
// isAdmin : permet de voir toutes les entrées sans filtre player_id
export function useGrimoire(characterId, cercleId, playerId, isAdmin = false) {
  const [notes, setNotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [possessions, setPossessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGrimoire = useCallback(async () => {
    if (!characterId) return;
    setLoading(true);

    // 🧠 Requête Hybride : Nos notes personnelles OU les notes partagées du Cercle
    // 👑 Si admin : on voit TOUT le Grimoire du personnage
    let query = supabase.from('heritier_notes').select('id, type, is_shared, player_id, content, created_at, character_id, cercle_id');

    if (isAdmin) {
      // Admin voit toutes les entrées du personnage
      query = query.eq('character_id', characterId);
    } else if (cercleId) {
      query = query.or(`character_id.eq.${characterId},cercle_id.eq.${cercleId}`);
    } else {
      query = query.eq('character_id', characterId);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      showInAppNotification("Les fluides éthérés refusent l'accès au Grimoire.", "error");
    } else if (data) {
      setNotes(data.filter(n => n.type === 'note'));
      setContacts(data.filter(n => n.type === 'contact'));
      setPossessions(data.filter(n => n.type === 'possession'));
    }
    setLoading(false);
  }, [characterId, cercleId, isAdmin]);

  useEffect(() => {
    fetchGrimoire();
  }, [fetchGrimoire]);

  const toggleShare = async (noteId, currentShareState) => {
    // 🛡️ Blocage natif si le joueur joue en solo
    if (!cercleId) {
      showInAppNotification("Partage impossible : vous n'êtes rattaché à aucun Cercle.", "warning");
      return;
    }

    const { error } = await supabase
      .from('heritier_notes')
      // On s'assure d'attacher le cercle_id au moment où l'on rend public
      .update({ is_shared: !currentShareState, cercle_id: cercleId }) 
      .eq('id', noteId)
      .eq('player_id', playerId);

    if (!error) {
      setNotes(prev => prev.map(n => n.id === noteId ? { ...n, is_shared: !currentShareState } : n));
      setContacts(prev => prev.map(n => n.id === noteId ? { ...n, is_shared: !currentShareState } : n));
      showInAppNotification(
        currentShareState ? "Le sceau a été remis. Note privée." : "La missive est désormais partagée avec le Cercle !", 
        "success"
      );
    } else {
      showInAppNotification("Impossible d'altérer ce sceau.", "error");
    }
  };

  const createEntry = async (type, contentData) => {
    const payload = {
      character_id: characterId, // 🛡️ La vraie clé maître
      cercle_id: cercleId || null,
      player_id: playerId,
      type: type,
      content: { ...contentData, date_creation: new Date().toISOString() },
      is_shared: false
    };

    const { data, error } = await supabase
      .from('heritier_notes')
      .insert([payload])
      .select()
      .single();

    if (!error && data) {
      if (type === 'note') setNotes(prev => [data, ...prev]);
      else if (type === 'contact') setContacts(prev => [data, ...prev]);
      else setPossessions(prev => [data, ...prev]);
      showInAppNotification("L'encre a séché. Votre page est sauvegardée !", "success");
      return true;
    } else {
      showInAppNotification("La plume s'est brisée : " + error?.message, "error");
      return false;
    }
  };

  const updateEntry = async (entryId, type, contentData) => {
    // On préserve la date de création originale
    const { data, error } = await supabase
      .from('heritier_notes')
      .update({ content: contentData })
      .eq('id', entryId)
      .eq('player_id', playerId) // 🛡️ Sécurité : on ne peut modifier que ses propres entrées
      .select()
      .single();

    if (!error && data) {
      if (type === 'note') {
        setNotes(prev => prev.map(n => n.id === entryId ? data : n));
      } else if (type === 'contact') {
        setContacts(prev => prev.map(c => c.id === entryId ? data : c));
      } else {
        setPossessions(prev => prev.map(p => p.id === entryId ? data : p));
      }
      showInAppNotification("La page a été corrigée avec succès !", "success");
      return true;
    } else {
      showInAppNotification("Impossible de modifier cette entrée : " + error?.message, "error");
      return false;
    }
  };

  const deleteEntry = async (entryId, type) => {
    const { error } = await supabase
      .from('heritier_notes')
      .delete()
      .eq('id', entryId)
      .eq('player_id', playerId); // 🛡️ Sécurité : on ne peut supprimer que ses propres entrées

    if (!error) {
      if (type === 'note') {
        setNotes(prev => prev.filter(n => n.id !== entryId));
      } else if (type === 'contact') {
        setContacts(prev => prev.filter(c => c.id !== entryId));
      } else {
        setPossessions(prev => prev.filter(p => p.id !== entryId));
      }
      showInAppNotification("La page a été arrachée du Grimoire.", "info");
      return true;
    } else {
      showInAppNotification("Impossible de supprimer cette entrée : " + error?.message, "error");
      return false;
    }
  };

  return { notes, contacts, possessions, loading, toggleShare, refetch: fetchGrimoire, createEntry, updateEntry, deleteEntry };
}

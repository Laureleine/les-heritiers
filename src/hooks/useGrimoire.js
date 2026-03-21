// src/hooks/useGrimoire.js
// 14.6.0

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

// ✨ FIX : On demande en priorité la clé de l'Héritier !
export function useGrimoire(characterId, cercleId, playerId) {
  const [notes, setNotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGrimoire = useCallback(async () => {
    if (!characterId) return;
    setLoading(true);
    
    // 🧠 Requête Hybride : Nos notes personnelles OU les notes partagées du Cercle
    let query = supabase.from('heritier_notes').select('*');
    
    if (cercleId) {
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
    }
    setLoading(false);
  }, [characterId, cercleId]);

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
      else setContacts(prev => [data, ...prev]);
      showInAppNotification("L'encre a séché. Votre page est sauvegardée !", "success");
      return true;
    } else {
      showInAppNotification("La plume s'est brisée : " + error?.message, "error");
      return false;
    }
  };

  return { notes, contacts, loading, toggleShare, refetch: fetchGrimoire, createEntry };
}

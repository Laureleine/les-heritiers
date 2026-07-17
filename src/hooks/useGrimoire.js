// src/hooks/useGrimoire.js

import { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../config/db';
import { showInAppNotification } from '../utils/SystemeServices';

export function useGrimoire(characterId, cercleId, playerId, isAdmin = false) {
  const [notes, setNotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [possessions, setPossessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const mountedRef = useRef(true);
  useEffect(() => () => { mountedRef.current = false; }, []);

  const fetchGrimoire = useCallback(async () => {
    if (!characterId) return;
    setLoading(true);

    let query = db.from('heritier_notes')
      .select('id, type, is_shared, player_id, content, created_at, character_id, cercle_id');

    if (isAdmin) {
      query = query.eq('character_id', characterId);
    } else if (cercleId) {
      query = query.or(`character_id.eq.${characterId},cercle_id.eq.${cercleId}`);
    } else {
      query = query.eq('character_id', characterId);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (!mountedRef.current) return;
    if (error) {
      showInAppNotification("Les fluides éthérés refusent l'accès au Grimoire.", "error");
    } else if (data) {
      // Mettre en cache dans Dexie si online
      if (navigator.onLine && playerId) {
        db.cacheUserData('heritier_notes', playerId, data).catch(() => {});
      }
      setNotes(data.filter(n => n.type === 'note'));
      setContacts(data.filter(n => n.type === 'contact'));
      setPossessions(data.filter(n => n.type === 'possession'));
    }
    setLoading(false);
  }, [characterId, cercleId, isAdmin, playerId]);

  useEffect(() => { fetchGrimoire(); }, [fetchGrimoire]);

  const toggleShare = async (noteId, currentShareState) => {
    if (!cercleId) {
      showInAppNotification("Partage impossible : vous n'êtes rattaché à aucun Cercle.", "warning");
      return;
    }
    const { error } = await db.from('heritier_notes')
      .update({ is_shared: !currentShareState, cercle_id: !currentShareState ? cercleId : null })
      .eq('id', noteId);
    if (!error) fetchGrimoire();
  };

  const addNote = async (type, content, extraFields = {}) => {
    if (!characterId || !playerId) return;
    const newNote = { character_id: characterId, player_id: playerId, type, content, is_shared: false, ...extraFields };
    const { error } = await db.from('heritier_notes').insert([newNote]);
    if (error) {
      showInAppNotification("Erreur lors de l'ajout.", "error");
    } else {
      fetchGrimoire();
    }
  };

  const updateNote = async (noteId, updates) => {
    const { error } = await db.from('heritier_notes').update(updates).eq('id', noteId);
    if (!error) fetchGrimoire();
  };

  const deleteNote = async (noteId) => {
    // Les deletes ne sont pas supportés offline — garder supabase direct
    if (!navigator.onLine) {
      showInAppNotification("Suppression impossible hors ligne.", "warning");
      return;
    }
    const { supabase } = await import('../config/supabase');
    const { error } = await supabase.from('heritier_notes').delete().eq('id', noteId);
    if (!error) fetchGrimoire();
  };

  return { notes, contacts, possessions, loading, fetchGrimoire, toggleShare, addNote, updateNote, deleteNote };
}

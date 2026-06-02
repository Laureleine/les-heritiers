// src/context/ForgeContext.jsx
import React, { createContext, useContext, useMemo, useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import { getCurrentUser } from '../utils/authUtils';
import { sanitizeFileName } from '../hooks/useFileUpload';
import { isAdmin } from '../utils/authRoles';

const ForgeContext = createContext();

export function ForgeProvider({ children }) {
  const [entrees, setEntrees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchForge = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('registre_forge')
      .select('*, profiles(username)')
      .order('ordre', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) console.error("Forge fetch:", error);
    if (!error && data) setEntrees(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchForge();
  }, [fetchForge]);

  const soumettreEntree = useCallback(async (data, file) => {
    try {
      const { id: userId } = await getCurrentUser() ?? {};
      if (!userId) throw new Error("Vous devez être identifié pour forger une entrée.");

      let captureUrl = null;
      if (file) {
        const fileName = `${Date.now()}_${sanitizeFileName(file.name)}`;
        
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 30000);

        try {
          const { error: uploadError } = await supabase.storage
            .from('bug_captures')
            .upload(fileName, file, { signal: controller.signal });

          clearTimeout(timeout);
          if (uploadError) throw new Error("L'envoi de la capture a échoué : " + uploadError.message);
          captureUrl = supabase.storage.from('bug_captures').getPublicUrl(fileName).data.publicUrl;
        } catch (uploadErr) {
          clearTimeout(timeout);
          if (uploadErr.name === 'AbortError') throw new Error("L'envoi de l'image a pris trop de temps (30s max). Réduisez la taille ou le poids de l'image.");
          throw uploadErr;
        }
      }

      const payload = {
        ...data,
        user_id: userId,
        capture_url: captureUrl,
        ordre: 0,
        statut: data.type_entree === 'Anomalie' ? 'Vu' : "À l'étude",
        is_masque: false,
        flag_persistance: false,
        is_initie_only: data.is_initie_only || false
      };

      const { data: newEntree, error } = await supabase.from('registre_forge').insert([payload]).select().single();
      if (error) throw new Error(error.message);

      setEntrees(prev => [newEntree, ...prev]);
      showInAppNotification("✨ Gravé dans les archives avec succès !", "success");
      return true;
    } catch (error) {
      console.error("Forge soumettreEntree:", error);
      showInAppNotification("La gravure a échoué : " + error.message, "error");
      return false;
    }
  }, []);

  const deplacerCarteKanban = useCallback(async (idCarte, statutCible, idCarteSurvolee) => {
    const nouvellesEntrees = [...entrees];
    const indexCarte = nouvellesEntrees.findIndex(c => c.id === idCarte);
    if (indexCarte === -1) return;

    const carte = nouvellesEntrees[indexCarte];
    nouvellesEntrees.splice(indexCarte, 1);
    carte.statut = statutCible;

    let indexInsertion = nouvellesEntrees.length;
    if (idCarteSurvolee) {
      const indexSurvol = nouvellesEntrees.findIndex(c => c.id === idCarteSurvolee);
      if (indexSurvol !== -1) indexInsertion = indexSurvol;
    }

    nouvellesEntrees.splice(indexInsertion, 0, carte);

    const cartesColonne = nouvellesEntrees.filter(c => c.statut === statutCible);
    const updates = cartesColonne.map((c, idx) => ({ id: c.id, statut: c.statut, ordre: idx }));

    setEntrees(nouvellesEntrees);

    try {
      await Promise.all(updates.map(u =>
        supabase.from('registre_forge').update({ statut: u.statut, ordre: u.ordre }).eq('id', u.id)
      ));
    } catch (err) {
      console.error("Kanban sync:", err);
      fetchForge();
    }
  }, [entrees, fetchForge]);

  const verifierRoleAdmin = useCallback(async (userId) => {
    const { data } = await supabase.from('profiles').select('role').eq('id', userId).single();
    if (!isAdmin(data)) {
      throw new Error("Accès refusé : droits insuffisants.");
    }
  }, []);

  const toggleArchive = useCallback(async (id, currentState) => {
    const { id: userId } = await getCurrentUser() ?? {};
    if (!userId) return;
    await verifierRoleAdmin(userId);
    const { error } = await supabase.from('registre_forge').update({ is_masque: !currentState }).eq('id', id);
    if (!error) setEntrees(prev => prev.map(c => c.id === id ? { ...c, is_masque: !currentState } : c));
  }, [verifierRoleAdmin]);

  const toggleInitieOnly = useCallback(async (id, currentState) => {
    const { id: userId } = await getCurrentUser() ?? {};
    if (!userId) return;
    await verifierRoleAdmin(userId);
    const { error } = await supabase.from('registre_forge').update({ is_initie_only: !currentState }).eq('id', id);
    if (!error) setEntrees(prev => prev.map(c => c.id === id ? { ...c, is_initie_only: !currentState } : c));
  }, [verifierRoleAdmin]);

  const voterEntree = useCallback(async (idCarte, typeVote) => {
    const currentUser = await getCurrentUser();
    const userId = currentUser?.id;

    if (!userId) {
      showInAppNotification("Il faut être formellement identifié pour voter !", "warning");
      return;
    }

    setEntrees(prev => prev.map(carte => {
      if (carte.id !== idCarte) return carte;

      const votes = carte.votes || { up: [], down: [] };
      let newUp = [...(votes.up || [])];
      let newDown = [...(votes.down || [])];

      if (typeVote === 'up') {
        if (newUp.includes(userId)) newUp = newUp.filter(id => id !== userId);
        else { newUp.push(userId); newDown = newDown.filter(id => id !== userId); }
      } else if (typeVote === 'down') {
        if (newDown.includes(userId)) newDown = newDown.filter(id => id !== userId);
        else { newDown.push(userId); newUp = newUp.filter(id => id !== userId); }
      }

      const newVotes = { up: newUp, down: newDown };

      supabase.from('registre_forge').update({ votes: newVotes }).eq('id', idCarte).then(({error}) => {
        if (error) console.error("Vote sync:", error);
      });

      return { ...carte, votes: newVotes };
    }));
  }, []);

  const rejeterEntree = useCallback(async (id, commentaire) => {
    try {
      const { id: userId } = await getCurrentUser() ?? {};
      if (!userId) throw new Error("Vous devez être identifié pour rejeter un ticket.");
      await verifierRoleAdmin(userId);

      const { error } = await supabase
        .from('registre_forge')
        .update({
          statut: 'Rejeté',
          reponse_officielle: commentaire,
          is_masque: true
        })
        .eq('id', id);

      if (error) throw error;

      setEntrees(prev => prev.map(c => c.id === id ? { 
        ...c, 
        statut: 'Rejeté', 
        reponse_officielle: commentaire, 
        is_masque: true 
      } : c));
      
      showInAppNotification("Le ticket a été rejeté, archivé, et la réponse consignée.", "success");
      return true;
    } catch (error) {
      console.error("Erreur de rejet :", error);
      showInAppNotification("La clôture a échoué : " + error.message, "error");
      return false;
    }
  }, [verifierRoleAdmin]);

  const ctxValue = useMemo(() => ({
    entrees, loading, fetchForge, soumettreEntree, deplacerCarteKanban,
    toggleArchive, voterEntree, toggleInitieOnly, rejeterEntree
  }), [entrees, loading, fetchForge, soumettreEntree, deplacerCarteKanban,
    toggleArchive, voterEntree, toggleInitieOnly, rejeterEntree,
    // Toutes les fonctions sont en useCallback, leurs refs sont stables
  ]);

  return (
    <ForgeContext.Provider value={ctxValue}>
      {children}
    </ForgeContext.Provider>
  );
} // ✨ L'accolade salvatrice était ici !

export const useForge = () => useContext(ForgeContext);
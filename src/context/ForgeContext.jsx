// src/context/ForgeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

const ForgeContext = createContext();

export function ForgeProvider({ children }) {
  const [entrees, setEntrees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchForge = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('registre_forge')
      .select('*, profiles(username)')
      .order('ordre', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) console.error("Erreur de lecture de la Forge:", error);
    if (!error && data) setEntrees(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchForge();
  }, []);

  const soumettreEntree = async (data, file) => {
    try {
      const { data: authData } = await supabase.auth.getUser();
      const userId = authData?.user?.id;
      if (!userId) throw new Error("Vous devez être identifié pour forger une entrée.");

      let captureUrl = null;
      if (file) {
        const fileName = `${Date.now()}_${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('bug_captures')
          .upload(fileName, file);

        if (uploadError) throw new Error("L'envoi de la capture a échoué : " + uploadError.message);
        captureUrl = supabase.storage.from('bug_captures').getPublicUrl(fileName).data.publicUrl;
      }

      const payload = {
        ...data,
        user_id: userId,
        capture_url: captureUrl,
        ordre: 0,
        statut: data.type_entree === 'Anomalie' ? 'Vu' : "À l'étude",
        is_masque: false,
        flag_persistance: false,
        is_initie_only: data.is_initie_only || false // ✨ L'INCISION DU SECRET
      };

      const { data: newEntree, error } = await supabase.from('registre_forge').insert([payload]).select().single();
      if (error) throw new Error(error.message);

      setEntrees(prev => [newEntree, ...prev]);
      showInAppNotification("✨ Gravé dans les archives avec succès !", "success");
      return true;

    } catch (error) {
      console.error("❌ Anomalie de la Forge :", error);
      showInAppNotification("La gravure a échoué : " + error.message, "error");
      return false;
    }
  };

  const deplacerCarteKanban = async (idCarte, statutCible, idCarteSurvolee) => {
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
      console.error("Échec de la sauvegarde Kanban, rafraîchissement requis.", err);
      fetchForge();
    }
  };

  const toggleArchive = async (id, currentState) => {
    const { error } = await supabase.from('registre_forge').update({ is_masque: !currentState }).eq('id', id);
    if (!error) setEntrees(prev => prev.map(c => c.id === id ? { ...c, is_masque: !currentState } : c));
  };

  const toggleInitieOnly = async (id, currentState) => {
    const { error } = await supabase.from('registre_forge').update({ is_initie_only: !currentState }).eq('id', id);
    if (!error) setEntrees(prev => prev.map(c => c.id === id ? { ...c, is_initie_only: !currentState } : c));
  };
  
  const voterEntree = async (idCarte, typeVote) => {
    const { data: authData } = await supabase.auth.getUser();
    const userId = authData?.user?.id;
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
        if (error) console.error("Erreur de synchronisation du vote :", error);
      });
      return { ...carte, votes: newVotes };
    }));
  };

  return (
    <ForgeContext.Provider value={{ entrees, loading, fetchForge, soumettreEntree, deplacerCarteKanban, toggleArchive, voterEntree, toggleInitieOnly }}>
      {children}
    </ForgeContext.Provider>
  );
}

export const useForge = () => useContext(ForgeContext);

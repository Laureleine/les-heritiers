// src/context/ForgeContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

const ForgeContext = createContext();

export function ForgeProvider({ children }) {
  const [entrees, setEntrees] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📡 1. LECTURE
  const fetchForge = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('registre_forge')
      .select('*')
      .order('ordre', { ascending: true })
      .order('created_at', { ascending: false });
      
    if (!error && data) setEntrees(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchForge();
  }, []);

  // 📝 2. CRÉATION (Avec Upload d'Image)
  const soumettreEntree = async (data, file) => {
    let captureUrl = null;

    if (file) {
      const fileName = `${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('bug_captures')
        .upload(fileName, file);

      if (!uploadError && uploadData) {
        captureUrl = supabase.storage.from('bug_captures').getPublicUrl(fileName).data.publicUrl;
      }
    }

    const payload = {
      ...data,
      capture_url: captureUrl,
      ordre: 0,
      statut: data.type_entree === 'Anomalie' ? 'Vu' : "À l'étude",
      is_masque: false,
      flag_persistance: false
    };

    const { data: newEntree, error } = await supabase.from('registre_forge').insert([payload]).select().single();
    if (!error && newEntree) {
      setEntrees(prev => [newEntree, ...prev]);
    }
    return !error;
  };

  // 🔄 3. LE MOTEUR KANBAN (Optimistic UI + Promise.all)
  const deplacerCarteKanban = async (idCarte, statutCible, idCarteSurvolee) => {
    // A. Copie du State pour l'Optimistic UI
    const nouvellesEntrees = [...entrees];
    const indexCarte = nouvellesEntrees.findIndex(c => c.id === idCarte);
    if (indexCarte === -1) return;
    
    const carte = nouvellesEntrees[indexCarte];
    
    // On la retire de sa place actuelle
    nouvellesEntrees.splice(indexCarte, 1);
    
    // Mise à jour de son statut
    carte.statut = statutCible;
    
    // Détermination du point d'insertion
    let indexInsertion = nouvellesEntrees.length;
    if (idCarteSurvolee) {
      const indexSurvol = nouvellesEntrees.findIndex(c => c.id === idCarteSurvolee);
      if (indexSurvol !== -1) indexInsertion = indexSurvol;
    }
    
    // Insertion
    nouvellesEntrees.splice(indexInsertion, 0, carte);
    
    // B. Re-calcul de la propriété 'ordre' pour TOUTE la colonne cible
    const cartesColonne = nouvellesEntrees.filter(c => c.statut === statutCible);
    const updates = cartesColonne.map((c, idx) => ({ id: c.id, statut: c.statut, ordre: idx }));
    
    // On met à jour l'UI instantanément !
    setEntrees(nouvellesEntrees);

    // C. Synchronisation silencieuse en BDD
    try {
      await Promise.all(updates.map(u => 
        supabase.from('registre_forge').update({ statut: u.statut, ordre: u.ordre }).eq('id', u.id)
      ));
    } catch (err) {
      console.error("Échec de la sauvegarde Kanban, rafraîchissement requis.", err);
      fetchForge(); // Rollback en cas d'erreur
    }
  };

  const toggleArchive = async (id, currentState) => {
    const { error } = await supabase.from('registre_forge').update({ is_masque: !currentState }).eq('id', id);
    if (!error) setEntrees(prev => prev.map(c => c.id === id ? { ...c, is_masque: !currentState } : c));
  };

  return (
    <ForgeContext.Provider value={{ entrees, loading, fetchForge, soumettreEntree, deplacerCarteKanban, toggleArchive }}>
      {children}
    </ForgeContext.Provider>
  );
}

export const useForge = () => useContext(ForgeContext);

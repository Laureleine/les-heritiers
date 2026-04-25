// src/hooks/useCerbere.js

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { CARAC_LIST } from '../data/DictionnaireJeu';

export function useCerbere() {
  const { character, gameData, dispatchCharacter } = useCharacter();

  const [showConfirmSeal, setShowConfirmSeal] = useState(false);
  const [snapshots, setSnapshots] = useState([]);
  const [loadingSnapshots, setLoadingSnapshots] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoTitle, setPhotoTitle] = useState('');

  const feeData = gameData?.fairyData ? gameData.fairyData[character.typeFee] : null;
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';

  // ✨ L'Extracteur Génétique pour le Bilan
  const getCarac = useCallback((key) => {
    return character.caracteristiques?.[key]
      || character.data?.stats_scellees?.caracteristiques?.[key]
      || feeData?.caracteristiques?.[key]?.min
      || 1;
  }, [character, feeData]);

  const uniqueFutiles = Object.keys(character.computedStats?.futilesTotal || {}).sort((a, b) => a.localeCompare(b));

  // ========================================================================
  // ✨ MÉMOIRES DE L'ALBUM PHOTO (SNAPSTHOTS)
  // ========================================================================

  const fetchSnapshots = useCallback(async () => {
    if (!character.id) return;
    setLoadingSnapshots(true);
    try {
      const { data, error } = await supabase
        .from('character_snapshots')
        .select('id, titre, created_at')
        .eq('character_id', character.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setSnapshots(data || []);
    } catch (err) {
      console.error("Erreur snapshots:", err);
    } finally {
      setLoadingSnapshots(false);
    }
  }, [character.id]);

  useEffect(() => {
    if (isScelle) fetchSnapshots();
  }, [isScelle, fetchSnapshots]);

  const handleTakeSnapshot = async () => {
    if (!photoTitle.trim()) {
      showInAppNotification("Veuillez donner un titre à cette archive !", "warning");
      return;
    }
    if (!character.id || character.id.toString().startsWith('temp_')) {
      showInAppNotification("Impossible d'archiver un fantôme. Veuillez sauvegarder l'Héritier !", "error");
      return;
    }

    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      showInAppNotification("Erreur : Utilisateur non identifié.", "error");
      return;
    }

    try {
      const nouveauPlancher = {
        caracteristiques: { ...character.caracteristiques },
        atouts: [...(character.atouts || [])],
        competencesLibres: { ...character.competencesLibres }
      };

      const snapshotData = {
        ...character,
        stats_scellees: nouveauPlancher
      };

      const { error: snapError } = await supabase.from('character_snapshots').insert([{
        character_id: character.id,
        user_id: session.user.id,
        titre: photoTitle.trim(),
        character_data: snapshotData
      }]);
      if (snapError) throw snapError;

      const newData = { ...(character.data || {}), stats_scellees: nouveauPlancher };
      const { error: charError } = await supabase
        .from('characters')
        .update({ data: newData })
        .eq('id', character.id);
      if (charError) throw charError;

      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'data', value: newData, gameData });
      showInAppNotification("📸 Clic clac ! L'archive est gravée et le Plancher de Verre est mis à jour.", "success");
      setShowPhotoModal(false);
      setPhotoTitle('');
      fetchSnapshots();
    } catch (err) {
      showInAppNotification("Erreur lors de la capture temporelle : " + err.message, "error");
    }
  };

  const handleCloneSnapshot = async (snapshotId, snapshotTitre) => {
    try {
      const { data: snapData, error: snapError } = await supabase
        .from('character_snapshots')
        .select('character_data')
        .eq('id', snapshotId)
        .single();
      if (snapError) throw snapError;

      const archiveData = snapData.character_data;
      const clonedCharacter = {
        ...archiveData,
        nom: `${archiveData.nom} (Archive : ${snapshotTitre})`
      };

      delete clonedCharacter.id;
      delete clonedCharacter.created_at;
      delete clonedCharacter.updated_at;
      clonedCharacter.statut = 'brouillon';
      clonedCharacter.is_public = false;

      const { error: insertError } = await supabase
        .from('characters')
        .insert([clonedCharacter]);
      if (insertError) throw insertError;

      showInAppNotification(`✨ L'archive temporelle "${snapshotTitre}" a été ressuscitée avec succès dans votre Grimoire !`, "success");
    } catch (err) {
      showInAppNotification("Erreur lors de la résurrection de l'archive : " + err.message, "error");
    }
  };

  // ========================================================================
  // ✨ LA DOUANE DE VÉRIFICATION AVANT SCELLAGE (LE CERBÈRE)
  // ========================================================================

  const handleSealClick = () => {
    if (!character.id || character.id.toString().startsWith('temp_')) {
      showInAppNotification("Votre Héritier n'existe que dans vos rêves ! Sauvegardez-le d'abord avant de pouvoir le sceller.", "error");
      return;
    }
    if (isScelle) {
      showInAppNotification("Le sceau a déjà été apposé sur cette fiche !", "warning");
      return;
    }

    let caracsRestants = 10;
    if (feeData && feeData.caracteristiques) {
      CARAC_LIST.forEach(carac => {
        const min = feeData.caracteristiques[carac.key]?.min || 1;
        const current = character.caracteristiques?.[carac.key] || min;
        caracsRestants -= (current - min);
      });
    }

    let futilesRestants = 10;
    Object.values(character.competencesFutiles?.rangs || {}).forEach(v => futilesRestants -= v);

    const esprit = Number(character.caracteristiques?.esprit || 0);
    const bonusEspritMax = Math.max(0, esprit - 3);
    let investissementEligibleEsprit = 0;
    let investissementStandard = 0;
    const SKILLS_ESPRIT = ['Culture', 'Occultisme', 'Fortitude', 'Rhétorique', 'Habiletés', 'Médecine', 'Observation', 'Sciences'];

    Object.entries(character.competencesLibres?.rangs || {}).forEach(([nom, val]) => {
      if (SKILLS_ESPRIT.includes(nom)) investissementEligibleEsprit += val;
      else investissementStandard += val;
    });

    Object.entries(character.competencesLibres?.choixSpecialiteUser || {}).forEach(([nom, specs]) => {
      let count = specs.length;
      if (nom === 'Conduite' && count > 0) {
        const baseScore = character.computedStats?.competencesBase?.['Conduite'] || 0;
        const rangs = character.competencesLibres?.rangs?.['Conduite'] || 0;
        if ((baseScore + rangs) > 0) count -= 1;
      }
      if (SKILLS_ESPRIT.includes(nom)) investissementEligibleEsprit += count;
      else investissementStandard += count;
    });

    const pointsVioletsUtilises = Math.min(investissementEligibleEsprit, bonusEspritMax);
    const debordementEspritVersVert = investissementEligibleEsprit - pointsVioletsUtilises;
    const totalVertUtilise = investissementStandard + debordementEspritVersVert;

    const utilesRestants = 15 - totalVertUtilise;
    const violetsRestants = bonusEspritMax - pointsVioletsUtilises;

    let missingMessages = [];
    if (caracsRestants > 0) missingMessages.push(`${caracsRestants} pt(s) de Caractéristique`);
    if (utilesRestants > 0) missingMessages.push(`${utilesRestants} pt(s) de Compétence Utile`);
    if (violetsRestants > 0) missingMessages.push(`${violetsRestants} pt(s) de Bonus d'Esprit`);
    if (futilesRestants > 0) missingMessages.push(`${futilesRestants} pt(s) de Compétence Futile`);

    if (missingMessages.length > 0) {
      showInAppNotification(`Sceau refusé ! Il vous reste à dépenser : ${missingMessages.join(' | ')}.`, "error");
      return;
    }

    setShowConfirmSeal(true);
  };

  const executeSeal = async () => {
    setShowConfirmSeal(false);
    try {
      const snapshot = {
        atouts: character.atouts || [],
        pouvoirs: character.pouvoirs || [],
        capaciteChoisie: character.capaciteChoisie || null,
        caracteristiques: character.caracteristiques || {},
        competencesLibres: character.competencesLibres || {}
      };
      const newData = { ...(character.data || {}), stats_scellees: snapshot };

      const { error } = await supabase
        .from('characters')
        .update({ statut: 'scelle', xp_total: 0, xp_depense: 0, data: newData })
        .eq('id', character.id);
      if (error) throw error;

      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'statut', value: 'scelle' });
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'xp_total', value: 0 });
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'xp_depense', value: 0 });
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'data', value: newData });

      showInAppNotification("L'Héritier est scellé ! Le Grimoire s'ouvre à l'expérience...", "success");
    } catch (err) {
      showInAppNotification("Erreur lors du scellage : " + err.message, "error");
    }
  };

  // On retourne uniquement ce dont l'UI a besoin
    return {
        character, feeData, isScelle, getCarac, uniqueFutiles,
        showConfirmSeal, setShowConfirmSeal,
        snapshots, loadingSnapshots,
        showPhotoModal, setShowPhotoModal, photoTitle, setPhotoTitle,
        handleTakeSnapshot, handleCloneSnapshot, handleSealClick, executeSeal,
        gameData // ✨ AJOUTE SIMPLEMENT CE MOT ICI !
    };
}
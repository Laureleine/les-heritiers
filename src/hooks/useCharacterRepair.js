import { useState, useCallback, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { useUserContext } from '../context/UserContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { loadFairyTypes, loadSocialItems } from '../utils/supabaseGameData';
import { mapDbCharForReconstruction, journalNeedsRepair, buildRepairedJournal, computeXpDepenseFromJournal } from '../utils/repairJournaux';

const REPAIR_STATUS = {
  PENDING:  'pending',
  OK:       'ok',
  REPAIRED: 'repaired',
  SKIPPED:  'skipped',
  ERROR:    'error',
};

export function useCharacterRepair({ isAdmin, myCharacters }) {
  const { session } = useUserContext();
  const [repairRows, setRepairRows] = useState({});
  const [repairGameData, setRepairGameData] = useState(null);
  const [repairConfirmTarget, setRepairConfirmTarget] = useState(null);
  const [playerRepairNeeds, setPlayerRepairNeeds] = useState({});
  const [playerRepairRequest, setPlayerRepairRequest] = useState(null);
  const [pendingRepairCount, setPendingRepairCount] = useState(0);

  const loadRepairStatuses = useCallback(async () => {
    try {
      const { data: chars, error } = await supabase
        .from('characters')
        .select('*')
        .in('statut', ['scelle', 'scellé'])
        .order('nom');
      if (error) throw error;

      const rows = {};
      for (const dbChar of (chars || [])) {
        const mapped = mapDbCharForReconstruction(dbChar);
        let status = REPAIR_STATUS.PENDING;
        if (!dbChar.data?.stats_scellees)    status = REPAIR_STATUS.SKIPPED;
        else if (!journalNeedsRepair(mapped)) status = REPAIR_STATUS.OK;
        rows[dbChar.id] = { dbChar, mapped, status, detail: '' };
      }
      setRepairRows(rows);
    } catch (e) {
      console.error('Repair status load error:', e);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) loadRepairStatuses();
  }, [isAdmin, loadRepairStatuses]);

  // Détection locale du besoin de réparation (joueur non-admin)
  useEffect(() => {
    if (isAdmin || myCharacters.length === 0) return;
    const sealedIds = myCharacters
      .filter(c => c.statut === 'scelle' || c.statut === 'scellé')
      .map(c => c.id);
    if (sealedIds.length === 0) return;

    (async () => {
      try {
        const { data } = await supabase
          .from('characters')
          .select('id, xp_depense, statut, data')
          .in('id', sealedIds);
        if (!data) return;
        const needs = {};
        for (const dbChar of data) {
          needs[dbChar.id] = journalNeedsRepair(mapDbCharForReconstruction(dbChar));
        }
        setPlayerRepairNeeds(needs);
      } catch { /* silencieux */ }
    })();
  }, [isAdmin, myCharacters]);

  // Badge admin : nombre de demandes de réparation en attente
  useEffect(() => {
    if (!isAdmin) return;
    (async () => {
      try {
        const { count } = await supabase
          .from('journal_repair_requests')
          .select('*', { count: 'exact', head: true })
          .is('resolved_at', null);
        setPendingRepairCount(count || 0);
      } catch { /* silencieux */ }
    })();
  }, [isAdmin]);

  const submitPlayerRepairRequest = useCallback(async () => {
    if (!playerRepairRequest) return;
    const { charId, charNom } = playerRepairRequest;
    setPlayerRepairRequest(null);
    try {
      const { error } = await supabase.from('journal_repair_requests').insert({
        character_id: charId,
        character_nom: charNom,
        requested_by: session?.user?.id,
      });
      if (error) throw error;
      showInAppNotification("Demande envoyée ! L'administrateur va réparer votre journal.", "success");
    } catch (e) {
      showInAppNotification("Erreur lors de l'envoi de la demande : " + e.message, "error");
    }
  }, [playerRepairRequest, session?.user?.id]);

  const requestRepairOne = useCallback(async (charId) => {
    const row = repairRows[charId];
    if (!row) return;

    try {
      showInAppNotification("Analyse du journal en cours…", "info");

      let gd = repairGameData;
      if (!gd) {
        const [fairyResult, socialItems, atoutsResult] = await Promise.all([
          loadFairyTypes(),
          loadSocialItems(),
          supabase.from('fairy_assets').select('id, nom').order('nom'),
        ]);
        gd = { fairyData: fairyResult.fairyData, socialItems, atouts: atoutsResult.data || [] };
        setRepairGameData(gd);
      }

      const preview = buildRepairedJournal(row.mapped, gd);
      if (!preview) {
        showInAppNotification("Reconstruction impossible (plancher de verre absent).", "warning");
        return;
      }
      setRepairConfirmTarget({ row, charId, preview });
    } catch (e) {
      showInAppNotification("Erreur d'analyse : " + e.message, "error");
    }
  }, [repairRows, repairGameData]);

  const executeRepair = useCallback(async () => {
    if (!repairConfirmTarget) return;
    const { row, charId, preview } = repairConfirmTarget;
    setRepairConfirmTarget(null);

    try {
      const newXpDepense = computeXpDepenseFromJournal(preview);
      // Garantit xp_depense ≤ xp_total (contrainte check_xp_coherence)
      const newXpTotal   = Math.max(row.dbChar.xp_total || 0, newXpDepense);
      const updatedData  = { ...row.dbChar.data, historique_xp: preview };

      const { error } = await supabase
        .from('characters')
        .update({ data: updatedData, xp_depense: newXpDepense, xp_total: newXpTotal })
        .eq('id', charId);
      if (error) throw error;

      const gains  = preview.filter(t => t.type === 'GAIN').length;
      const deps   = preview.filter(t => t.type === 'DEPENSE').length;
      const detail = `${preview.length} entrées (${gains} gains + ${deps} dépenses) — ${newXpDepense} XP dépensés`;

      setRepairRows(prev => ({
        ...prev,
        [charId]: { ...prev[charId], status: REPAIR_STATUS.REPAIRED, detail }
      }));
      showInAppNotification(`✨ Journal reconstruit : ${detail}`, "success");
    } catch (e) {
      setRepairRows(prev => ({
        ...prev,
        [repairConfirmTarget?.charId]: { ...prev[repairConfirmTarget?.charId], status: REPAIR_STATUS.ERROR, detail: e.message }
      }));
      showInAppNotification("Erreur : " + e.message, "error");
    }
  }, [repairConfirmTarget]);

  return {
    repairRows,
    repairConfirmTarget,
    setRepairConfirmTarget,
    pendingRepairCount,
    playerRepairNeeds,
    playerRepairRequest,
    setPlayerRepairRequest,
    requestRepairOne,
    executeRepair,
    submitPlayerRepairRequest,
  };
}

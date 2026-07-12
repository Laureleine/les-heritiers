// src/hooks/useIndicesVerites.js
import { useState, useCallback, useEffect, useMemo } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export const XP_BAREME = {
  indice:          1,
  verite_mineure:  2,
  verite_majeure:  4,
  dit_du_marcheur: 5,
};
export const XP_BONUS_ELEMENT = 5;

export function useIndicesVerites(cercleId, activeMembers = []) {
  const [items, setItems]             = useState([]);
  const [revelations, setRevelations] = useState([]);
  const [loading, setLoading]         = useState(false);

  const loadItems = useCallback(async () => {
    const { data, error } = await supabase
      .from('indices_verites')
      .select('*')
      .order('element_nom')
      .order('ordre');
    if (error) { showInAppNotification('Erreur chargement des secrets : ' + error.message, 'error'); return; }
    setItems(data || []);
  }, []);

  const loadRevelations = useCallback(async () => {
    if (!cercleId) return;
    const { data, error } = await supabase
      .from('cercle_revelations')
      .select('*')
      .eq('cercle_id', cercleId);
    if (error) { showInAppNotification('Erreur chargement des révélations : ' + error.message, 'error'); return; }
    setRevelations(data || []);
  }, [cercleId]);

  const load = useCallback(async () => {
    if (!cercleId) return;
    setLoading(true);
    await Promise.all([loadItems(), loadRevelations()]);
    setLoading(false);
  }, [cercleId, loadItems, loadRevelations]);

  useEffect(() => { load(); }, [load]);

  const revealedIds = useMemo(() => new Set(revelations.map(r => r.item_id)), [revelations]);

  // XP en attente de distribution (révélés mais pas encore distribués)
  const pendingXp = useMemo(() =>
    revelations
      .filter(r => !r.xp_distributed)
      .reduce((sum, r) => {
        const item = items.find(i => i.id === r.item_id);
        return sum + (XP_BAREME[item?.type] || 0);
      }, 0),
    [revelations, items]
  );

  const isBonusEarned = useCallback((elementNom) => {
    const majeures = items.filter(i => i.element_nom === elementNom && i.type === 'verite_majeure');
    return majeures.length > 0 && majeures.every(i => revealedIds.has(i.id));
  }, [items, revealedIds]);

  const isBonusDistributed = useCallback((elementNom) => {
    const majeures = items.filter(i => i.element_nom === elementNom && i.type === 'verite_majeure');
    return majeures.length > 0 && majeures.every(i => {
      const rev = revelations.find(r => r.item_id === i.id);
      return rev?.bonus_element_distribue;
    });
  }, [items, revelations]);

  // Révéler : insert seulement, pas d'XP immédiat
  const reveler = useCallback(async (itemId, revealedBy) => {
    const { error } = await supabase
      .from('cercle_revelations')
      .insert({ cercle_id: cercleId, item_id: itemId, revealed_by: revealedBy, xp_distributed: false });
    if (error) { showInAppNotification('Erreur : ' + error.message, 'error'); return; }
    await loadRevelations();
  }, [cercleId, loadRevelations]);

  // Masquer :
  // - si XP jamais distribué → simple suppression
  // - si XP distribué → retrait XP + suppression (+ retrait bonus si applicable)
  const masquer = useCallback(async (itemId) => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    const rev = revelations.find(r => r.item_id === itemId);
    const wasDistributed = rev?.xp_distributed;
    const wasBonus = rev?.bonus_element_distribue;
    const xpAmount = XP_BAREME[item.type] || 0;
    const recipients = activeMembers.filter(m => m.characters?.id);

    const { error } = await supabase
      .from('cercle_revelations')
      .delete()
      .eq('cercle_id', cercleId)
      .eq('item_id', itemId);
    if (error) { showInAppNotification('Erreur : ' + error.message, 'error'); return; }

    if (wasDistributed && xpAmount > 0 && recipients.length > 0) {
      await Promise.all(recipients.map(m =>
        supabase.rpc('award_xp', {
          p_character_id: m.characters.id,
          p_amount: -xpAmount,
          p_motif: `Révélation retirée : ${item.element_nom}`,
        })
      ));
    }

    if (wasBonus && recipients.length > 0) {
      await Promise.all(recipients.map(m =>
        supabase.rpc('award_xp', {
          p_character_id: m.characters.id,
          p_amount: -XP_BONUS_ELEMENT,
          p_motif: `Bonus retiré : "${item.element_nom}" (Vérités majeures incomplètes)`,
        })
      ));
    }

    await loadRevelations();
  }, [cercleId, items, revelations, activeMembers, loadRevelations]);

  // Distribuer tous les XP en attente d'un coup
  const distributeXp = useCallback(async () => {
    const pending = revelations.filter(r => !r.xp_distributed);
    if (pending.length === 0) return;

    const recipients = activeMembers.filter(m => m.characters?.id);

    // Calcul du total
    let total = 0;
    for (const rev of pending) {
      const item = items.find(i => i.id === rev.item_id);
      total += XP_BAREME[item?.type] || 0;
    }

    // Un seul award_xp par membre avec le total
    if (total > 0 && recipients.length > 0) {
      await Promise.all(recipients.map(m =>
        supabase.rpc('award_xp', {
          p_character_id: m.characters.id,
          p_amount: total,
          p_motif: `Secrets du Monde : ${pending.length} révélation${pending.length > 1 ? 's' : ''} (+${total} XP)`,
        })
      ));
    }

    // Marquer tous comme distribués
    await supabase
      .from('cercle_revelations')
      .update({ xp_distributed: true })
      .eq('cercle_id', cercleId)
      .in('item_id', pending.map(r => r.item_id));

    // Vérifier les bonus de complétude pour chaque élément concerné
    const { data: freshRevs } = await supabase
      .from('cercle_revelations')
      .select('item_id, xp_distributed, bonus_element_distribue')
      .eq('cercle_id', cercleId);

    const affectedElements = [...new Set(
      pending.map(r => items.find(i => i.id === r.item_id)?.element_nom).filter(Boolean)
    )];

    for (const elementNom of affectedElements) {
      const majeures = items.filter(i => i.element_nom === elementNom && i.type === 'verite_majeure');
      if (majeures.length === 0) continue;

      const allDistributed = majeures.every(i => freshRevs?.find(r => r.item_id === i.id)?.xp_distributed);
      const alreadyBonused = (freshRevs || []).some(r => {
        return r.bonus_element_distribue && items.find(i => i.id === r.item_id)?.element_nom === elementNom;
      });

      if (allDistributed && !alreadyBonused && recipients.length > 0) {
        await Promise.all(recipients.map(m =>
          supabase.rpc('award_xp', {
            p_character_id: m.characters.id,
            p_amount: XP_BONUS_ELEMENT,
            p_motif: `Bonus : toutes les Vérités majeures de "${elementNom}" révélées !`,
          })
        ));
        const lastMajeure = majeures[majeures.length - 1];
        await supabase
          .from('cercle_revelations')
          .update({ bonus_element_distribue: true })
          .eq('cercle_id', cercleId)
          .eq('item_id', lastMajeure.id);
      }
    }

    await loadRevelations();
  }, [cercleId, items, revelations, activeMembers, loadRevelations]);

  return {
    items, revelations, revealedIds, loading,
    pendingXp, distributeXp,
    reveler, masquer,
    isBonusEarned, isBonusDistributed,
    XP_BAREME, XP_BONUS_ELEMENT,
  };
}

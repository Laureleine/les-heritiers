// src/hooks/useIndicesVerites.js
import { useState, useCallback, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

// Barème XP par type de révélation
const XP_BAREME = {
  indice:          1,
  verite_mineure:  2,
  verite_majeure:  4,
  dit_du_marcheur: 5,
};
const XP_BONUS_ELEMENT = 5;

export function useIndicesVerites(cercleId, activeMembers = []) {
  const [items, setItems]               = useState([]);
  const [revelations, setRevelations]   = useState([]);
  const [loading, setLoading]           = useState(false);

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

  const revealedIds = new Set(revelations.map(r => r.item_id));

  // Vérifie si toutes les vérités majeures d'un élément sont révélées
  const isBonusEarned = (elementNom) => {
    const majeures = items.filter(i => i.element_nom === elementNom && i.type === 'verite_majeure');
    return majeures.length > 0 && majeures.every(i => revealedIds.has(i.id));
  };

  // Vérifie si le bonus d'un élément a déjà été distribué dans ce cercle
  const isBonusDistributed = (elementNom) => {
    const majeures = items.filter(i => i.element_nom === elementNom && i.type === 'verite_majeure');
    return majeures.length > 0 && majeures.every(i => {
      const rev = revelations.find(r => r.item_id === i.id);
      return rev?.bonus_element_distribue;
    });
  };

  const reveler = useCallback(async (itemId, revealedBy) => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    const xpAmount = XP_BAREME[item.type] || 0;
    const recipients = activeMembers.filter(m => m.characters?.id);

    // 1. Insérer la révélation
    const { error: insErr } = await supabase
      .from('cercle_revelations')
      .insert({ cercle_id: cercleId, item_id: itemId, revealed_by: revealedBy, xp_distributed: xpAmount > 0 });
    if (insErr) { showInAppNotification('Erreur : ' + insErr.message, 'error'); return; }

    // 2. Distribuer l'XP à tous les membres (en parallèle)
    if (xpAmount > 0 && recipients.length > 0) {
      await Promise.all(recipients.map(m =>
        supabase.rpc('award_xp', {
          p_character_id: m.characters.id,
          p_amount: xpAmount,
          p_motif: `Révélation : ${item.element_nom} — ${item.texte.substring(0, 60)}…`,
        })
      ));
    }

    await loadRevelations();

    // 3. Vérifier si toutes les Vérités majeures de cet élément sont maintenant révélées → bonus
    const freshRevs = await supabase
      .from('cercle_revelations')
      .select('item_id, bonus_element_distribue')
      .eq('cercle_id', cercleId);

    const freshIds = new Set((freshRevs.data || []).map(r => r.item_id));
    const alreadyBonused = (freshRevs.data || []).some(r => r.bonus_element_distribue);
    const majeures = items.filter(i => i.element_nom === item.element_nom && i.type === 'verite_majeure');
    const allMajeuresRevealed = majeures.length > 0 && majeures.every(i => freshIds.has(i.id));

    if (allMajeuresRevealed && !alreadyBonused && recipients.length > 0) {
      await Promise.all(recipients.map(m =>
        supabase.rpc('award_xp', {
          p_character_id: m.characters.id,
          p_amount: XP_BONUS_ELEMENT,
          p_motif: `Bonus : toutes les Vérités majeures de "${item.element_nom}" révélées !`,
        })
      ));
      // Marquer le bonus comme distribué sur la dernière révélation insérée
      await supabase
        .from('cercle_revelations')
        .update({ bonus_element_distribue: true })
        .eq('cercle_id', cercleId)
        .eq('item_id', itemId);
    }

    await loadRevelations();
  }, [cercleId, items, activeMembers, loadRevelations]);

  const masquer = useCallback(async (itemId) => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    const xpAmount = XP_BAREME[item.type] || 0;
    const rev = revelations.find(r => r.item_id === itemId);
    const wasBonus = rev?.bonus_element_distribue;
    const recipients = activeMembers.filter(m => m.characters?.id);

    // 1. Supprimer la révélation
    const { error } = await supabase
      .from('cercle_revelations')
      .delete()
      .eq('cercle_id', cercleId)
      .eq('item_id', itemId);
    if (error) { showInAppNotification('Erreur : ' + error.message, 'error'); return; }

    // 2. Retirer l'XP
    if (xpAmount > 0 && recipients.length > 0) {
      await Promise.all(recipients.map(m =>
        supabase.rpc('award_xp', {
          p_character_id: m.characters.id,
          p_amount: -xpAmount,
          p_motif: `Révélation retirée : ${item.element_nom}`,
        })
      ));
    }

    // 3. Si le bonus avait été distribué, le retirer aussi
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

  return { items, revelations, revealedIds, loading, reveler, masquer, isBonusEarned, isBonusDistributed, XP_BAREME, XP_BONUS_ELEMENT };
}

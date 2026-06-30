import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

const PLAT_FIELDS = 'id, nom, categorie, niveaux, saisons, nb_convives_min, nb_convives_max, difficulte, accord_vin, description_narrative, description_reussite_critique, description_echec_partiel, description_echec_critique, statut, auteur_id, validateur_id, motif_refus, created_at';

export function useMenuPlats(session) {
  const [platsApprouves, setPlatsApprouves] = useState([]);
  const [mesPropositions, setMesPropositions] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approuves }, { data: mine }] = await Promise.all([
      supabase.from('menu_plats').select(PLAT_FIELDS).eq('statut', 'approuve'),
      supabase
        .from('menu_plats')
        .select(PLAT_FIELDS)
        .eq('auteur_id', session.user.id)
        .neq('statut', 'approuve')
        .order('created_at', { ascending: false }),
    ]);

    if (approuves) setPlatsApprouves(approuves);
    if (mine) setMesPropositions(mine);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async (champs) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('menu_plats').insert({
      ...champs,
      auteur_id: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const ajouterDirectement = useCallback(async (champs, editingId) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const payload = {
      ...champs,
      statut: 'approuve',
      validateur_id: session.user.id,
    };
    const { error } = editingId
      ? await supabase.from('menu_plats').update(payload).eq('id', editingId)
      : await supabase.from('menu_plats').insert({ ...payload, auteur_id: session.user.id });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const approuver = useCallback(async (entry) => {
    const { error } = await supabase
      .from('menu_plats')
      .update({ statut: 'approuve', validateur_id: session?.user?.id })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const refuser = useCallback(async (entry, motif) => {
    const { error } = await supabase
      .from('menu_plats')
      .update({ statut: 'refuse', motif_refus: motif || null })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [reload]);

  return { platsApprouves, mesPropositions, submitting, proposer, ajouterDirectement, approuver, refuser, reload };
}

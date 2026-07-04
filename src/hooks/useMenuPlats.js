import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

const PLAT_FIELDS = 'id, nom, categorie, niveaux, saisons, nb_convives_min, nb_convives_max, difficulte, accord_vin, description_narrative, description_reussite_critique, description_echec_partiel, description_echec_critique, status, created_by, approved_by, reject_reason, created_at';

export function useMenuPlats(session) {
  const [platsApprouves, setPlatsApprouves] = useState([]);
  const [mesPropositions, setMesPropositions] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approuves }, { data: mine }] = await Promise.all([
      supabase.from('menu_plats').select(PLAT_FIELDS).eq('status', 'approved'),
      supabase
        .from('menu_plats')
        .select(PLAT_FIELDS)
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
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
      created_by: session.user.id,
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
      status: 'approved',
      approved_by: session.user.id,
    };
    const { error } = editingId
      ? await supabase.from('menu_plats').update(payload).eq('id', editingId)
      : await supabase.from('menu_plats').insert({ ...payload, created_by: session.user.id });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const approuver = useCallback(async (entry) => {
    const { error } = await supabase
      .from('menu_plats')
      .update({ status: 'approved', approved_by: session?.user?.id })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const refuser = useCallback(async (entry, motif) => {
    const { error } = await supabase
      .from('menu_plats')
      .update({ status: 'rejected', reject_reason: motif || null })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [reload]);

  return { platsApprouves, mesPropositions, submitting, proposer, ajouterDirectement, approuver, refuser, reload };
}

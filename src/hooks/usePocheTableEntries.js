// src/hooks/usePocheTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name === 'fouille_saisonniere' ? `fouille_saisonniere_${row.saison}` : row.table_name;
    if (!grouped[key]) grouped[key] = [];
    const entry = { _dbId: row.id, weight: row.weight ?? 'frequent', m: row.value_m };
    if (row.value_f) entry.f = row.value_f;
    grouped[key].push(entry);
  }
  return grouped;
}

export function usePocheTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({});
  const [myProposals, setMyProposals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approved }, { data: mine }] = await Promise.all([
      supabase
        .from('poche_table_entries')
        .select('id, table_name, saison, value_m, value_f, weight')
        .eq('status', 'approved'),
      supabase
        .from('poche_table_entries')
        .select('id, table_name, saison, value_m, value_f, weight, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
    setLoaded(true);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, saison, valueM, valueF, weight }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('poche_table_entries').insert({
      table_name: tableName,
      saison: tableName === 'fouille_saisonniere' ? saison : null,
      value_m: valueM,
      value_f: valueF || null,
      weight: weight ?? 'frequent',
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const ajouterDirectement = useCallback(async ({ tableName, saison, valueM, valueF, weight }, editingId) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    let error;
    if (editingId) {
      // Édition d'une entrée existante : ne touche pas is_official (déjà posé à la création).
      ({ error } = await supabase.from('poche_table_entries').update({
        value_m: valueM,
        value_f: valueF || null,
        weight: weight ?? 'frequent',
      }).eq('id', editingId));
    } else {
      ({ error } = await supabase.from('poche_table_entries').insert({
        table_name: tableName,
        saison: tableName === 'fouille_saisonniere' ? saison : null,
        value_m: valueM,
        value_f: valueF || null,
        weight: weight ?? 'frequent',
        is_official: true,
        status: 'approved',
        created_by: session.user.id,
        approved_by: session.user.id,
        approved_at: new Date().toISOString(),
      }));
    }
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const approuver = useCallback(async (entry) => {
    const { error } = await supabase
      .from('poche_table_entries')
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const refuser = useCallback(async (entry, motif) => {
    const { error } = await supabase
      .from('poche_table_entries')
      .update({ status: 'rejected', reject_reason: motif || null })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [reload]);

  return { dbEntries, myProposals, loaded, submitting, proposer, ajouterDirectement, approuver, refuser, reload };
}

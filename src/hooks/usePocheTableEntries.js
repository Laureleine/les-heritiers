// src/hooks/usePocheTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name === 'fouille_saisonniere' ? `fouille_saisonniere_${row.saison}` : row.table_name;
    if (!grouped[key]) grouped[key] = [];
    const entry = { _dbId: row.id, weight: row.weight ?? 1, m: row.value_m };
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
      weight: weight ?? 1,
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  return { dbEntries, myProposals, loaded, submitting, proposer, reload };
}

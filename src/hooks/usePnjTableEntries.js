// src/hooks/usePnjTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

// Regroupe les entrées DB approuvées par clé de table (même format que TABLES_REEL)
function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name === 'metiers' ? `metiers_${row.tranche_age}` : row.table_name;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(row.value_f ? { m: row.value_m, f: row.value_f } : row.value_m);
  }
  return grouped;
}

export function usePnjTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({});
  const [myProposals, setMyProposals] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approved }, { data: mine }] = await Promise.all([
      supabase
        .from('pnj_table_entries')
        .select('table_name, tranche_age, value_m, value_f')
        .eq('status', 'approved'),
      supabase
        .from('pnj_table_entries')
        .select('id, table_name, tranche_age, value_m, value_f, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, trancheAge, valueM, valueF }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('pnj_table_entries').insert({
      table_name: tableName,
      tranche_age: tableName === 'metiers' ? trancheAge : null,
      value_m: valueM,
      value_f: valueF || null,
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  return { dbEntries, myProposals, submitting, proposer };
}

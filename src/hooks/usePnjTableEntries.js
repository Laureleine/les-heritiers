// src/hooks/usePnjTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

// Regroupe les entrées DB approuvées par clé de table (même format que TABLES_REEL)
function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name === 'metiers' ? `metiers_${row.tranche_age}` : row.table_name;
    if (!grouped[key]) grouped[key] = [];
    const pol = row.polarity && row.polarity !== 'n' ? row.polarity : undefined;
    if (row.value_f) {
      grouped[key].push(pol ? { m: row.value_m, f: row.value_f, p: pol } : { m: row.value_m, f: row.value_f });
    } else {
      grouped[key].push(pol ? { m: row.value_m, p: pol } : row.value_m);
    }
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
        .select('table_name, tranche_age, value_m, value_f, polarity')
        .eq('status', 'approved'),
      supabase
        .from('pnj_table_entries')
        .select('id, table_name, tranche_age, value_m, value_f, polarity, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, trancheAge, valueM, valueF, polarity }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('pnj_table_entries').insert({
      table_name: tableName,
      tranche_age: tableName === 'metiers' ? trancheAge : null,
      value_m: valueM,
      value_f: valueF || null,
      polarity: polarity || 'n',
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  return { dbEntries, myProposals, submitting, proposer };
}

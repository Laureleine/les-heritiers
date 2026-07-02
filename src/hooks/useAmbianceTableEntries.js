// src/hooks/useAmbianceTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = `${row.table_name}_${row.variante}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({ _dbId: row.id, weight: row.weight ?? 1, value: row.value });
  }
  return grouped;
}

export function useAmbianceTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({});
  const [myProposals, setMyProposals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approved }, { data: mine }] = await Promise.all([
      supabase
        .from('ambiance_table_entries')
        .select('id, table_name, variante, value, weight')
        .eq('status', 'approved'),
      supabase
        .from('ambiance_table_entries')
        .select('id, table_name, variante, value, weight, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
    setLoaded(true);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, variante, value, weight }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('ambiance_table_entries').insert({
      table_name: tableName,
      variante,
      value,
      weight: weight ?? 1,
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  return { dbEntries, myProposals, loaded, submitting, proposer, reload };
}

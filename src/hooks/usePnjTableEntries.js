import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

const IDENTITY_TABLES = new Set([
  'tranches_age','sexes','genres','nationalites',
  'situations_matrimoniales','situations_familiales',
]);

function isIdentityTable(name) {
  return IDENTITY_TABLES.has(name);
}

function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name === 'metiers' ? `metiers_${row.tranche_age}` : row.table_name;
    if (!grouped[key]) grouped[key] = [];

    if (isIdentityTable(row.table_name)) {
      grouped[key].push({
        id: `custom_${row.id}`,
        _dbId: row.id,
        label: row.value_m,
        weight: row.weight ?? 'frequent',
      });
    } else {
      const pol = row.polarity && row.polarity !== 'n' ? row.polarity : undefined;
      const entry = { _dbId: row.id, weight: row.weight ?? 'frequent' };
      if (row.value_f) {
        entry.m = row.value_m;
        entry.f = row.value_f;
        if (pol) entry.p = pol;
      } else {
        entry.m = row.value_m;
        if (pol) entry.p = pol;
      }
      grouped[key].push(entry);
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
        .select('id, table_name, tranche_age, value_m, value_f, polarity, weight')
        .eq('status', 'approved'),
      supabase
        .from('pnj_table_entries')
        .select('id, table_name, tranche_age, value_m, value_f, polarity, weight, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, trancheAge, valueM, valueF, polarity, weight }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('pnj_table_entries').insert({
      table_name: tableName,
      tranche_age: tableName === 'metiers' ? trancheAge : null,
      value_m: valueM,
      value_f: valueF || null,
      polarity: polarity || 'n',
      weight: weight ?? 'frequent',
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  return { dbEntries, myProposals, submitting, proposer };
}

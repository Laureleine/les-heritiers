// src/hooks/useTracasTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function groupEntries(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({
      _dbId: row.id,
      titre: row.titre,
      description: row.description || null,
      exemple_key: row.exemple_key || null,
      weight: row.weight ?? 'frequent',
    });
  }
  return grouped;
}

export function useTracasTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({});
  const [myProposals, setMyProposals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approved }, { data: mine }] = await Promise.all([
      supabase
        .from('tracas_table_entries')
        .select('id, table_name, titre, description, exemple_key, weight')
        .eq('status', 'approved'),
      supabase
        .from('tracas_table_entries')
        .select('id, table_name, titre, description, exemple_key, weight, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupEntries(approved));
    if (mine) setMyProposals(mine);
    setLoaded(true);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, titre, description, exempleKey, weight }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('tracas_table_entries').insert({
      table_name: tableName,
      titre: titre.trim(),
      description: description?.trim() || null,
      exemple_key: exempleKey || null,
      weight: weight ?? 'frequent',
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const ajouterDirectement = useCallback(async ({ tableName, titre, description, exempleKey, weight }, editingId) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    let error;
    if (editingId) {
      ({ error } = await supabase.from('tracas_table_entries').update({
        titre: titre.trim(),
        description: description?.trim() || null,
        exemple_key: exempleKey || null,
        weight: weight ?? 'frequent',
      }).eq('id', editingId));
    } else {
      ({ error } = await supabase.from('tracas_table_entries').insert({
        table_name: tableName,
        titre: titre.trim(),
        description: description?.trim() || null,
        exemple_key: exempleKey || null,
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
      .from('tracas_table_entries')
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const refuser = useCallback(async (entry, motif) => {
    const { error } = await supabase
      .from('tracas_table_entries')
      .update({ status: 'rejected', reject_reason: motif || null })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [reload]);

  return { dbEntries, myProposals, loaded, submitting, proposer, ajouterDirectement, approuver, refuser, reload };
}

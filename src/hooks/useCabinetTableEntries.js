// src/hooks/useCabinetTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function labelNom(r) { return `${r.prenom} ${r.nom}`; }
function labelBackground(r) { return `${r.classe_sociale} — ${r.profession}`; }
function labelPathologie(r) { return r.diagnostic; }

export function useCabinetTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({ cabinet_noms: [], cabinet_backgrounds: [], cabinet_pathologies: [] });
  const [myProposals, setMyProposals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [
      { data: nomsOk },
      { data: bgsOk },
      { data: pathosOk },
      { data: nomsMine },
      { data: bgsMine },
      { data: pathosMine },
    ] = await Promise.all([
      supabase.from('cabinet_noms').select('*').eq('status', 'approved'),
      supabase.from('cabinet_backgrounds').select('*').eq('status', 'approved'),
      supabase.from('cabinet_pathologies').select('*').eq('status', 'approved'),
      supabase.from('cabinet_noms').select('id,prenom,nom,genre,status,reject_reason,created_at').eq('created_by', session.user.id).neq('status', 'approved').order('created_at', { ascending: false }),
      supabase.from('cabinet_backgrounds').select('id,classe_sociale,profession,genre,status,reject_reason,created_at').eq('created_by', session.user.id).neq('status', 'approved').order('created_at', { ascending: false }),
      supabase.from('cabinet_pathologies').select('id,diagnostic,difficulte,status,reject_reason,created_at').eq('created_by', session.user.id).neq('status', 'approved').order('created_at', { ascending: false }),
    ]);

    setDbEntries({
      cabinet_noms: (nomsOk || []).map(r => ({ _dbId: r.id, ...r })),
      cabinet_backgrounds: (bgsOk || []).map(r => ({ _dbId: r.id, ...r })),
      cabinet_pathologies: (pathosOk || []).map(r => ({ _dbId: r.id, ...r })),
    });

    const mine = [
      ...(nomsMine || []).map(r => ({ ...r, _tableName: 'cabinet_noms', titre: labelNom(r) })),
      ...(bgsMine || []).map(r => ({ ...r, _tableName: 'cabinet_backgrounds', titre: labelBackground(r) })),
      ...(pathosMine || []).map(r => ({ ...r, _tableName: 'cabinet_pathologies', titre: labelPathologie(r) })),
    ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    setMyProposals(mine);
    setLoaded(true);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, ...fields }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from(tableName).insert({
      ...fields,
      status: 'pending',
      is_official: false,
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const ajouterDirectement = useCallback(async ({ tableName, editingId, ...fields }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    let error;
    if (editingId) {
      ({ error } = await supabase.from(tableName).update(fields).eq('id', editingId));
    } else {
      ({ error } = await supabase.from(tableName).insert({
        ...fields,
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
      .from(entry._tableName)
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const refuser = useCallback(async (entry, motif) => {
    const { error } = await supabase
      .from(entry._tableName)
      .update({ status: 'rejected', reject_reason: motif || null })
      .eq('id', entry.id);
    if (!error) await reload();
    return { error };
  }, [reload]);

  return { dbEntries, myProposals, loaded, submitting, proposer, ajouterDirectement, approuver, refuser, reload };
}

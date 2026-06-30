import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

export function useMenuSauvegardes(session) {
  const [sauvegardes, setSauvegardes] = useState([]);
  const [loading, setLoading] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;
    setLoading(true);
    const { data } = await supabase
      .from('menu_sauvegardes')
      .select('id, titre, parametres, menu_genere, created_at')
      .eq('utilisateur_id', session.user.id)
      .order('created_at', { ascending: false });
    setLoading(false);
    if (data) setSauvegardes(data);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const sauvegarder = useCallback(async (titre, parametres, menuGenere) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    const { error } = await supabase.from('menu_sauvegardes').insert({
      utilisateur_id: session.user.id,
      titre: titre || null,
      parametres,
      menu_genere: menuGenere,
    });
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  const supprimer = useCallback(async (id) => {
    const { error } = await supabase.from('menu_sauvegardes').delete().eq('id', id);
    if (!error) await reload();
    return { error };
  }, [reload]);

  return { sauvegardes, loading, sauvegarder, supprimer, reload };
}

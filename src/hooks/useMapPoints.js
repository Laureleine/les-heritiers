import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export function useMapPoints() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('map_points')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setPoints(data || []);
    } catch {
      showInAppNotification('Erreur de chargement de la carte', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  const addPoint = useCallback(async (point) => {
    const { data, error } = await supabase
      .from('map_points')
      .insert(point)
      .select()
      .single();
    if (error) throw error;
    setPoints(prev => [data, ...prev]);
    return data;
  }, []);

  const updatePoint = useCallback(async (id, updates) => {
    const { data, error } = await supabase
      .from('map_points')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    setPoints(prev => prev.map(p => p.id === id ? data : p));
    return data;
  }, []);

  const deletePoint = useCallback(async (id) => {
    const { error } = await supabase.from('map_points').delete().eq('id', id);
    if (error) throw error;
    setPoints(prev => prev.filter(p => p.id !== id));
  }, []);

  return { points, loading, refresh: fetch, addPoint, updatePoint, deletePoint };
}

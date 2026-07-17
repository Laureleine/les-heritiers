import { useState, useEffect, useCallback } from 'react';
import { db } from '../config/db';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export function useMapPoints() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await db.from('map_points')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      if (data && navigator.onLine) {
        // Mettre en cache
        db.cacheUserData('map_points', 'global', data).catch(() => {});
      }
      setPoints(data || []);
    } catch {
      showInAppNotification('Erreur de chargement de la carte', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetch(); }, [fetch]);

  // Les mutations (addPoint, updatePoint, deletePoint) restent sur supabase direct
  // car map_points n'est pas dans WRITABLE_TABLES (admin only)
  const addPoint = useCallback(async (point) => {
    if (!navigator.onLine) {
      showInAppNotification('Ajout de point impossible hors ligne.', 'warning');
      return;
    }
    const { data, error } = await supabase.from('map_points').insert(point).select().single();
    if (error) throw error;
    setPoints(prev => [data, ...prev]);
    return data;
  }, []);

  const updatePoint = useCallback(async (id, updates) => {
    if (!navigator.onLine) {
      showInAppNotification('Modification impossible hors ligne.', 'warning');
      return;
    }
    const { data, error } = await supabase.from('map_points').update(updates).eq('id', id).select().single();
    if (error) throw error;
    setPoints(prev => prev.map(p => p.id === id ? data : p));
    return data;
  }, []);

  const deletePoint = useCallback(async (id) => {
    if (!navigator.onLine) {
      showInAppNotification('Suppression impossible hors ligne.', 'warning');
      return;
    }
    const { error } = await supabase.from('map_points').delete().eq('id', id);
    if (error) throw error;
    setPoints(prev => prev.filter(p => p.id !== id));
  }, []);

  return { points, loading, addPoint, updatePoint, deletePoint, refresh: fetch };
}

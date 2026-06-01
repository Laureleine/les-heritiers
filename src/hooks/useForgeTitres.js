// 1
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import { isSuperAdmin as checkSuperAdmin } from '../utils/authRoles';

export function useForgeTitres(userProfile) {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ id: '', label: '', icon_name: 'Award', color_classes: 'bg-stone-100 text-stone-800 border-stone-300', description: '' });
  
  // Gestion de la Modale Immersive de suppression
  const [confirmState, setConfirmState] = useState({ isOpen: false, targetId: null });

  const isSuperAdmin = checkSuperAdmin(userProfile);

  const fetchBadges = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.from('titres_honorifiques').select('id, label, icon_name, color_classes, description').order('label');
    if (!error && data) setBadges(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchBadges();
  }, [fetchBadges]);

  const handleSave = useCallback(async () => {
    if (!isSuperAdmin) return;
    if (!form.id || !form.label) {
      showInAppNotification("L'ID et le Libellé sont obligatoires !", "error");
      return;
    }

    const cleanId = form.id.toLowerCase().replace(/\s+/g, '_');

    try {
      const { error } = await supabase.from('titres_honorifiques').upsert([{ ...form, id: cleanId }]);
      if (error) throw error;
      showInAppNotification("Le Titre a été forgé et gravé dans le Nuage !", "success");
      fetchBadges();
      setForm({ id: '', label: '', icon_name: 'Award', color_classes: 'bg-stone-100 text-stone-800 border-stone-300', description: '' });
    } catch (err) {
      showInAppNotification("La forge a échoué : " + err.message, "error");
    }
  }, [form, isSuperAdmin, fetchBadges]);

  // Déclenche l'ouverture de la Modale
  const triggerDelete = useCallback((id) => {
    if (!isSuperAdmin) return;
    setConfirmState({ isOpen: true, targetId: id });
  }, [isSuperAdmin]);

  // Exécute la suppression après validation
  const executeDelete = useCallback(async () => {
    const targetId = confirmState.targetId;
    setConfirmState({ isOpen: false, targetId: null });
    
    if (!targetId) return;

    const { error } = await supabase.from('titres_honorifiques').delete().eq('id', targetId);
    if (!error) {
      showInAppNotification("Titre détruit des archives !", "info");
      fetchBadges();
    } else {
      showInAppNotification("Échec de la destruction : " + error.message, "error");
    }
  }, [confirmState.targetId, fetchBadges]);

  const cancelDelete = useCallback(() => {
    setConfirmState({ isOpen: false, targetId: null });
  }, []);

  return {
    isSuperAdmin,
    badges,
    loading,
    form,
    setForm,
    handleSave,
    triggerDelete,
    confirmState,
    executeDelete,
    cancelDelete
  };
}
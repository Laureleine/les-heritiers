import React, { useEffect } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/notificationSystem';
import InAppNotification from './InAppNotification';

export default function AlertSystem({ userProfile }) {
  useEffect(() => {
    if (!userProfile) return;

    const isGardien = userProfile.profile?.role === 'gardien' || userProfile.profile?.role === 'super_admin';
    const userId = userProfile.id;

    // Écoute des modifications sur la table des requêtes
    const channel = supabase
      .channel('db-changes')
      // 1. ALERTE GARDIENS : Nouvelle proposition créée
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'data_change_requests' },
        (payload) => {
          if (isGardien && payload.new.user_id !== userId) {
            showInAppNotification(`🛡️ Nouvelle proposition à valider : ${payload.new.record_name}`, 'info');
          }
        }
      )
      // 2. ALERTE UTILISATEUR : Changement de statut de SES propositions
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'data_change_requests', filter: `user_id=eq.${userId}` },
        (payload) => {
          const oldStatus = payload.old.status;
          const newStatus = payload.new.status;
          const recordName = payload.new.record_name;

          if (oldStatus !== newStatus) {
            if (newStatus === 'approved') {
              showInAppNotification(`⏳ Votre proposition pour "${recordName}" a été pré-validée par le Conseil !`, 'info');
            } else if (newStatus === 'archived') {
              showInAppNotification(`✨ Félicitations ! Votre modification sur "${recordName}" est officiellement en ligne !`, 'success');
            } else if (newStatus === 'rejected') {
              showInAppNotification(`❌ Votre proposition pour "${recordName}" a été rejetée par les Gardiens.`, 'error');
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userProfile]);

  // Ce composant "Radar" intègre directement l'affichage des notifications à l'écran
  return <InAppNotification />;
}
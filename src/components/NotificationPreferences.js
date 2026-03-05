// src/components/NotificationPreferences.js
// 10.2.0 // 10.4.0

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Bell, BellOff, Mail, Smartphone } from 'lucide-react';
import { supabase } from '../config/supabase';
import { requestNotificationPermission } from '../utils/SystemeServices';

// ✨ NOUVEAU : forwardRef permet au composant parent de le contrôler
const NotificationPreferences = forwardRef(({ session }, ref) => {
  const [preferences, setPreferences] = useState({
    subscribe_to_updates: false,
    notify_major_versions: true,
    notify_minor_versions: false,
    enable_push_notifications: false
  });
  const [loading, setLoading] = useState(true);
  const [pushSupported, setPushSupported] = useState(false);

  useEffect(() => {
    setPushSupported('Notification' in window);
    loadPreferences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPreferences = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_notification_preferences')
        .select('*')
        .eq('user_id', session.user.id)
        .maybesingle();

      if (!error && data) {
        setPreferences({
          subscribe_to_updates: data.subscribe_to_updates,
          notify_major_versions: data.notify_major_versions,
          notify_minor_versions: data.notify_minor_versions,
          enable_push_notifications: data.enable_push_notifications
        });
      }
    } catch (err) {
      console.log('Pas de préférences existantes');
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePush = async () => {
    if (!preferences.enable_push_notifications) {
      const granted = await requestNotificationPermission();
      if (!granted) {
        alert('Permission de notification refusée. Activez-la dans les paramètres de votre navigateur.');
        return;
      }
    }
    setPreferences(prev => ({
      ...prev,
      enable_push_notifications: !prev.enable_push_notifications
    }));
  };

  // ✨ NOUVEAU : On expose la fonction de sauvegarde au parent !
  useImperativeHandle(ref, () => ({
    savePreferences: async () => {
      const { error } = await supabase
        .from('user_notification_preferences')
        .upsert({
          user_id: session.user.id,
          email: session.user.email,
          ...preferences,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });
      if (error) throw error;
    }
  }));

  const handleToggle = (field) => {
    setPreferences(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  if (loading) {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800">Chargement du Corbeau Messager...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <Bell className="text-blue-600" size={28} />
        <h3 className="text-xl font-serif text-blue-900 font-bold">
          Notifications des mises à jour
        </h3>
      </div>
      <p className="text-sm text-blue-700 mb-6">
        Recevez un email lors des nouvelles versions de l'application
      </p>

      <div className="space-y-4">
        {/* Abonnement principal */}
        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.subscribe_to_updates}
              onChange={() => handleToggle('subscribe_to_updates')}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <div className="flex-1">
              <div className="font-serif font-bold text-blue-900">
                {preferences.subscribe_to_updates ? (
                  <><Bell size={18} className="inline mr-2" />Abonné aux notifications</>
                ) : (
                  <><BellOff size={18} className="inline mr-2" />Non abonné</>
                )}
              </div>
              <div className="text-sm text-blue-600">
                Recevoir des emails lors des mises à jour
              </div>
            </div>
          </label>
        </div>

        {/* Options de notifications */}
        {preferences.subscribe_to_updates && (
          <div className="bg-white p-4 rounded-lg border border-indigo-200 ml-8 shadow-sm">
            <h4 className="font-serif font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <Mail size={18} /> Types de mises à jour
            </h4>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={preferences.notify_major_versions} onChange={() => handleToggle('notify_major_versions')} className="w-4 h-4 text-indigo-600 rounded mt-1" />
                <div>
                  <div className="font-semibold text-indigo-900">Versions majeures</div>
                  <div className="text-xs text-indigo-600">Nouvelles fonctionnalités importantes</div>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={preferences.notify_minor_versions} onChange={() => handleToggle('notify_minor_versions')} className="w-4 h-4 text-indigo-600 rounded mt-1" />
                <div>
                  <div className="font-semibold text-indigo-900">Versions mineures</div>
                  <div className="text-xs text-indigo-600">Améliorations et corrections</div>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Notifications Push */}
        {pushSupported && preferences.subscribe_to_updates && (
          <div className="bg-white p-4 rounded-lg border border-purple-200 ml-8 shadow-sm">
            <h4 className="font-serif font-bold text-purple-900 mb-3 flex items-center gap-2">
              <Smartphone size={18} /> Notifications dans l'application
            </h4>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={preferences.enable_push_notifications} onChange={handleTogglePush} className="w-4 h-4 text-purple-600 rounded mt-1" />
              <div>
                <div className="font-semibold text-purple-900">Activer les notifications push</div>
                <div className="text-xs text-purple-600">Recevoir une alerte sur le navigateur même si l'app est fermée</div>
              </div>
            </label>
          </div>
        )}
      </div>

      {/* Info email (Le bouton sauvegarder a disparu d'ici !) */}
      <div className="mt-6 pt-4 border-t border-blue-200 text-sm text-blue-800 flex items-center gap-2">
        <Mail size={16} /> Les emails seront envoyés à : <strong>{session.user.email}</strong>
      </div>
    </div>
  );
});

export default NotificationPreferences;
// src/hooks/usePendingValidationsAlert.js
import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { isAdmin } from '../utils/authRoles';

const SESSION_KEY = 'validations_alert_dismissed';

export function usePendingValidationsAlert(userProfile) {
  const [pendingCount, setPendingCount] = useState(0);
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  );

  useEffect(() => {
    if (!isAdmin(userProfile) || dismissed) return;

    supabase
      .from('data_change_requests')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'pending')
      .then(({ count }) => {
        if (count > 0) setPendingCount(count);
      });
  }, [userProfile, dismissed]);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setDismissed(true);
  };

  const isVisible = isAdmin(userProfile) && !dismissed && pendingCount > 0;

  return { pendingCount, isVisible, dismiss };
}

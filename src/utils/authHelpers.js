import { supabase } from '../config/supabase';

export const getCurrentUserFast = async () => {
  try {
    // 1. Cache localStorage (ultra-rapide ~10ms)
    const sessionData = localStorage.getItem('sb-uvckugcixiugysnsbekb-auth-token');
    if (sessionData) {
      const auth = JSON.parse(sessionData);
      if (auth?.currentSession?.session?.user) {
        console.log('⚡ User depuis cache localStorage');
        return auth.currentSession.session.user;
      }
    }
  } catch (e) {
    console.warn('Cache localStorage corrompu, fallback session');
  }

  // 2. Fallback getSession (rapide ~100ms)
  const { data: { session } } = await supabase.auth.getSession();
  console.log('⚡ User depuis getSession');
  return session?.user || null;
};

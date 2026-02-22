export const getCurrentUserFast = async () => {
  // 1. Cache localStorage (ultra-rapide)
  try {
    const sessionData = localStorage.getItem('sb-uvckugcixiugysnsbekb-auth-token');
    if (sessionData) {
      const auth = JSON.parse(sessionData);
      if (auth?.currentSession?.session?.user) {
        console.log('⚡ User depuis cache localStorage');
        return auth.currentSession.session.user;
      }
    }
  } catch (e) {
    console.warn('Cache localStorage corrompu, fallback réseau');
  }

  // 2. Fallback getSession (100ms)
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user || null;
};
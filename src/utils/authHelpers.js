import { supabase } from '../config/supabase';

export const getCurrentUserFast = async () => {
  try {
    // ✅ Méthode 1 : supabase.auth.getSession() DIRECT (100ms)
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    
    if (session?.user) {
      console.log('✅ User connecté:', session.user.id, session.user.email);
      return session.user;
    }
    
  } catch (error) {
    console.error('❌ getCurrentUserFast:', error);
  }
  
  console.log('❌ Aucun user trouvé');
  return null;
};

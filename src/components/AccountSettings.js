import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { User, Lock, Mail } from 'lucide-react';

export default function AccountSettings({ session, onBack }) {
  const [profile, setProfile] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', session.user.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      setProfile(data);
      setNewUsername(data?.username || '');
    } catch (error) {
      console.error('Erreur chargement profil', error);
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      // 1. Mise à jour Username
      if (newUsername !== profile?.username) {
        const { error } = await supabase
          .from('profiles')
          .upsert({ id: session.user.id, username: newUsername });
        if (error) throw error;
      }

      // 2. Mise à jour Password (si rempli)
      if (newPassword) {
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        if (error) throw error;
        setNewPassword(''); // Reset pour sécurité
      }

      alert('Profil mis à jour !');
      getProfile(); // Rafraîchir
    } catch (error) {
      alert('Erreur : ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-amber-200">
      <h2 className="text-2xl font-serif text-amber-900 mb-6 flex items-center gap-2">
        <User /> Mon Compte
      </h2>

      <div className="space-y-4">
        {/* Email (Lecture seule) */}
        <div>
          <label className="block text-sm text-gray-500 mb-1 flex items-center gap-2"><Mail size={14}/> Email</label>
          <input type="text" value={session.user.email} disabled className="w-full p-2 bg-gray-100 rounded border border-gray-300 text-gray-500 cursor-not-allowed" />
        </div>

        {/* Username */}
        <div>
			<label className="block text-sm font-bold text-amber-900 mb-1">Nom d'utilisateur</label>
			<input 
			  type="text" 
			  value={newUsername}
			  onChange={(e) => setNewUsername(e.target.value)}
			  autoComplete="off" // 🛡️ AJOUT : Bloque l'autocomplétion Chrome
			  className="w-full p-2 border border-amber-300 rounded focus:border-amber-600"
			/>
		</div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-700 mb-1 font-bold flex items-center gap-2"><Lock size={14}/> Nouveau mot de passe</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Laisser vide pour ne pas changer"
            autoComplete="new-password" // 🛡️ AJOUT : Empêche le navigateur de coller le vieux mot de passe
            className="w-full p-2 border border-amber-300 rounded focus:border-amber-600"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button onClick={onBack} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Retour</button>
          <button 
            onClick={updateProfile} 
            disabled={loading}
            className="flex-1 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 disabled:opacity-50"
          >
            {loading ? 'Enregistrement...' : 'Sauvegarder'}
          </button>
        </div>
      </div>
    </div>
  );
}

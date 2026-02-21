import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { Shield, User, Crown, Check, X } from 'lucide-react';

export default function AdminUserList({ session, onBack }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myRole, setMyRole] = useState(null);

  useEffect(() => {
    fetchUsersAndRole();
  }, []);

  const fetchUsersAndRole = async () => {
    setLoading(true);
    
    // 1. Vérifier mon propre rôle
    const { data: myProfile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();
      
    setMyRole(myProfile?.role || 'user');

    // 2. Récupérer la liste des utilisateurs (Via profiles car auth.users est protégé)
    // Note: On utilise la table profiles publique maintenant enrichie
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('id, username, created_at, role')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erreur load users:", error);
    } else {
      setUsers(profiles || []);
    }
    setLoading(false);
  };

  const handleToggleRole = async (userId, currentRole) => {
    if (myRole !== 'super_admin') {
      alert("Seul le Super Admin peut modifier les rangs.");
      return;
    }

    // Logique de bascule : user -> gardien -> user
    // (On ne touche pas aux super_admin via l'UI pour sécurité)
    const newRole = currentRole === 'gardien' ? 'user' : 'gardien';
    const label = newRole === 'gardien' ? 'Gardien du Savoir' : 'Héritier standard';

    if (!window.confirm(`Voulez-vous vraiment changer ce rôle en "${label}" ?`)) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;
      
      // Mise à jour locale
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
      
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2">
            <Crown className="text-amber-600" /> Gestion des Rôles
          </h2>
          <button onClick={onBack} className="text-gray-600 hover:text-gray-900 font-bold">
            Retour
          </button>
        </div>

        {myRole !== 'super_admin' ? (
          <div className="p-4 bg-red-100 text-red-800 rounded">
            Accès restreint au Super Admin.
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-amber-50 text-amber-900 font-serif">
                <tr>
                  <th className="p-4">Utilisateur</th>
                  <th className="p-4">Rôle Actuel</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map(u => {
                  const isMe = u.id === session.user.id;
                  const isSuper = u.role === 'super_admin';
                  const isGardien = u.role === 'gardien';

                  return (
                    <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-gray-800">{u.username || 'Sans pseudo'}</div>
                        <div className="text-xs text-gray-400 font-mono">{u.id.substring(0, 8)}...</div>
                      </td>
                      <td className="p-4">
                        {isSuper && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full border border-purple-200">
                            <Crown size={12} /> Super Admin
                          </span>
                        )}
                        {isGardien && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200">
                            <Shield size={12} /> Gardien du Savoir
                          </span>
                        )}
                        {u.role === 'user' && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                            <User size={12} /> Héritier
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        {!isMe && !isSuper && (
                          <button
                            onClick={() => handleToggleRole(u.id, u.role)}
                            className={`text-xs px-3 py-1.5 rounded font-bold transition-all border ${
                              isGardien
                                ? 'bg-white text-red-600 border-red-200 hover:bg-red-50'
                                : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            {isGardien ? 'Rétrograder' : 'Promouvoir Gardien'}
                          </button>
                        )}
                        {isMe && <span className="text-xs text-gray-400 italic">C'est vous</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            
            {users.length === 0 && !loading && (
              <div className="p-8 text-center text-gray-500">Aucun utilisateur trouvé.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
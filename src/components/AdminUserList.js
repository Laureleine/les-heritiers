import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

export default function AdminUserList({ session, onBack }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      // Appel de la fonction RPC créée ci-dessus
      const { data, error } = await supabase.rpc('get_all_users_admin');
      
      if (error) {
        console.error("Erreur:", error);
        alert("Impossible de charger les utilisateurs. Vérifiez vos droits admin.");
      } else {
        setUsers(data);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Administration des Utilisateurs</h2>
        <button onClick={onBack} className="px-3 py-1 bg-gray-200 rounded">Retour</button>
      </div>

      {loading ? (
        <div>Chargement...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3">Utilisateur</th>
                <th className="p-3">Email</th>
                <th className="p-3">Inscrit le</th>
                <th className="p-3">ID</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-bold text-amber-700">{u.username || 'Sans pseudo'}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{new Date(u.created_at).toLocaleDateString('fr-FR')}</td>
                  <td className="p-3 font-mono text-xs text-gray-400">{u.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
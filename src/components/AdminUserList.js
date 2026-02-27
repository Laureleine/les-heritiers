// src/components/AdminUserList.js
// 8.21.0 // 8.22.0 // 8.25.0 // 8.32.0

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { Shield, User, Crown, Plus, X, Award, TestTubeDiagonal, Bug, Bomb } from 'lucide-react';
import { AVAILABLE_BADGES } from '../data/badges';

export default function AdminUserList({ session, onBack }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myRole, setMyRole] = useState(null);
  const [editingBadgesFor, setEditingBadgesFor] = useState(null);

  useEffect(() => {
    fetchUsersAndRole();
  }, []);

  const fetchUsersAndRole = async () => {
    setLoading(true);

    const { data: myProfile } = await supabase
      .from('profiles').select('role').eq('id', session.user.id).single();
    setMyRole(myProfile?.role || 'user');

    // 👈 NOUVEAU : On demande la colonne last_seen
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('id, username, created_at, role, badges, last_seen') 
      .order('last_seen', { ascending: false, nullsFirst: false }); // On trie par les plus récents connectés

    if (!error) setUsers(profiles || []);
    setLoading(false);
  };

  const handleToggleRole = async (userId, currentRole) => {
    if (myRole !== 'super_admin') return;
    const newRole = currentRole === 'gardien' ? 'user' : 'gardien';
    try {
      const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
      if (error) throw error;
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  const handleToggleBadge = async (userId, currentBadges, badgeId) => {
    if (myRole !== 'super_admin') return;
    let newBadges = [...(currentBadges || [])];
    if (newBadges.includes(badgeId)) {
      newBadges = newBadges.filter(b => b !== badgeId); 
    } else {
      newBadges.push(badgeId); 
    }
    try {
      const { error } = await supabase.from('profiles').update({ badges: newBadges }).eq('id', userId);
      if (error) throw error;
      setUsers(users.map(u => u.id === userId ? { ...u, badges: newBadges } : u));
    } catch (error) {
      alert("Erreur d'attribution du badge : " + error.message);
    }
  };

  // 🟢🟡🔴 NOUVEAU : Le Calculateur de Présence
  const renderStatus = (lastSeen) => {
    if (!lastSeen) return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Jamais connecté</span>;

    const diffMinutes = (new Date() - new Date(lastSeen)) / (1000 * 60);

    if (diffMinutes < 3) {
      return <span className="text-green-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.7)]"></span> En ligne</span>;
    } else if (diffMinutes < 15) {
      return <span className="text-amber-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Absent</span>;
    } else {
      const dateStr = new Date(lastSeen).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
      return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Vu le {dateStr.replace(':', 'h')}</span>;
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500 font-serif animate-pulse">Chargement des registres...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2">
          <Crown className="text-amber-600" /> Gestion des Héritiers
        </h2>
        <button onClick={onBack} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition-colors">
          Retour
        </button>
      </div>

      {myRole !== 'super_admin' ? (
        <div className="p-4 bg-red-100 text-red-800 rounded">Accès restreint au Super Admin.</div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-amber-50 text-amber-900 font-serif">
              <tr>
                <th className="p-4">Utilisateur</th>
                <th className="p-4">Rôle & Badges</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map(u => {
                const isSuperAdmin = u.role === 'super_admin';
                const isGardien = u.role === 'gardien';
                const userBadges = u.badges || [];

                return (
                  <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                    {/* COLONNE 1 : INFOS & STATUT */}
                    <td className="p-4">
                      <div className="font-bold text-gray-800 flex items-center gap-2">
                        <User size={16} className="text-gray-400" />
                        {u.username || <span className="text-gray-400 italic">Sans pseudo</span>}
                      </div>
                      
                      {/* L'affichage du radar d'activité */}
                      <div className="mt-1.5 mb-1">
                        {renderStatus(u.last_seen)}
                      </div>

                      <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">
                        Inscrit le {new Date(u.created_at).toLocaleDateString('fr-FR')}
                      </div>
                    </td>

                    {/* COLONNE 2 : RÔLES & BADGES */}
                    <td className="p-4">
                      <div className="flex flex-col gap-2 items-start">
                        {isSuperAdmin && <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200"><Crown size={12} /> Super Admin</span>}
                        {isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200"><Shield size={12} /> Gardien du Savoir</span>}
                        {u.role === 'user' && <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">Héritier standard</span>}

                        {userBadges.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {userBadges.map(badgeId => {
                              const badgeDef = AVAILABLE_BADGES.find(b => b.id === badgeId);
                              if (!badgeDef) return null;
                              return (
                                <span key={badgeId} className={`inline-flex items-center text-[10px] px-2 py-0.5 rounded-full border font-bold ${badgeDef.color}`}>
                                  {badgeDef.label}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* COLONNE 3 : ACTIONS */}
                    <td className="p-4 text-right">
                      <div className="flex flex-col items-end gap-2">
                        {!isSuperAdmin && (
                          <button
                            onClick={() => handleToggleRole(u.id, u.role)}
                            className={`text-xs px-3 py-1.5 rounded font-bold border transition-colors ${
                              isGardien ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            {isGardien ? 'Rétrograder' : 'Promouvoir Gardien'}
                          </button>
                        )}

                        <div className="relative">
                          <button
                            onClick={() => setEditingBadgesFor(editingBadgesFor === u.id ? null : u.id)}
                            className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-800 font-bold border border-amber-200 px-2 py-1 rounded bg-amber-50"
                          >
                            <Award size={14} /> Badges
                          </button>

                          {editingBadgesFor === u.id && (
                            <div className="absolute right-0 top-8 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-10 p-2 text-left animate-fade-in">
                              <div className="flex justify-between items-center mb-2 px-1">
                                <span className="text-xs font-bold text-gray-500 uppercase">Attribuer</span>
                                <button onClick={() => setEditingBadgesFor(null)} className="text-gray-400 hover:text-gray-600"><X size={14}/></button>
                              </div>
                              <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-scrollbar">
                                {AVAILABLE_BADGES.map(badge => (
                                  <label key={badge.id} className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded cursor-pointer text-sm">
                                    <input
                                      type="checkbox"
                                      checked={userBadges.includes(badge.id)}
                                      onChange={() => handleToggleBadge(u.id, userBadges, badge.id)}
                                      className="text-amber-600 focus:ring-amber-500"
                                    />
                                    <span className="font-medium text-gray-700">{badge.label}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
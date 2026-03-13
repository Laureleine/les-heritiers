// 11.1.0
// 13.3.0 // 13.4.0

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { MessageCircle, Shield, User, Crown, X, Award, BarChart2, Users, FileText, BookOpen, Activity, RefreshCcw, ArrowLeft } from 'lucide-react';
import { AVAILABLE_BADGES } from '../data/DictionnaireJeu';
import { showInAppNotification } from '../utils/SystemeServices';

// ============================================================================
// --- 1. ONGLET : GESTION DES HÉRITIERS (Ancien AdminUserList) ---
// ============================================================================
function TabUsers({ session }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myRole, setMyRole] = useState(null);
  const [editingBadgesFor, setEditingBadgesFor] = useState(null);

  useEffect(() => { fetchUsersAndRole(); }, []);

  const fetchUsersAndRole = async () => {
    setLoading(true);
    const { data: myProfile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
    setMyRole(myProfile?.role || 'user');

    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('id, username, created_at, role, badges, active_badge, last_seen')
      .order('last_seen', { ascending: false, nullsFirst: false });
    
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
	} catch (error) { showInAppNotification("Erreur : " + error.message, "error"); }
  };

  const handleToggleBadge = async (userId, currentBadges, badgeId) => {
    if (myRole !== 'super_admin') return;
    let newBadges = [...(currentBadges || [])];
    if (newBadges.includes(badgeId)) newBadges = newBadges.filter(b => b !== badgeId);
    else newBadges.push(badgeId);

    try {
      const { error } = await supabase.from('profiles').update({ badges: newBadges }).eq('id', userId);
      if (error) throw error;
      setUsers(users.map(u => u.id === userId ? { ...u, badges: newBadges } : u));
    } catch (error) { showInAppNotification("Erreur d'attribution du badge : " + error.message, "error"); }
  };

  const renderStatus = (lastSeen) => {
    if (!lastSeen) return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Jamais connecté</span>;
    const diffMinutes = (new Date() - new Date(lastSeen)) / (1000 * 60);
    if (diffMinutes < 3) return <span className="text-green-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.7)]"></span> En ligne</span>;
    else if (diffMinutes < 15) return <span className="text-amber-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Absent</span>;
    else {
      const dateStr = new Date(lastSeen).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
      return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Vu le {dateStr.replace(':', 'h')}</span>;
    }
  };

  const handleContactUser = (targetUser) => {
    // 💡 L'Astuce React : On émet un événement global que le Télégraphe pourra écouter plus tard
    window.dispatchEvent(new CustomEvent('open-telegraphe', { detail: { targetUser } }));
    showInAppNotification(`Établissement de la connexion pneumatique vers ${targetUser.username}...`, "info");
  };
  
  if (loading) return <div className="p-8 text-center text-gray-500 font-serif animate-pulse">Chargement des registres...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
      <table className="w-full text-left">
        <thead className="bg-amber-50 text-amber-900 font-serif">
          <tr>
            <th className="p-4">Utilisateur</th>
            <th className="p-4">Rôle & Badges</th>
            {/* ✨ LA SÉCURITÉ VISUELLE EST ICI */}
            {myRole === 'super_admin' && <th className="p-4 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.map(u => {
            const isSuperAdmin = u.role === 'super_admin';
            const isGardien = u.role === 'gardien';
            const userBadges = u.badges || [];
            return (
              <tr key={u.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-4">
                <div className="font-bold text-gray-800 flex items-center gap-2">
                  <User size={16} className="text-gray-400" />
                  {u.username || <span className="text-gray-400 italic">Sans pseudo</span>}
                  
                  {/* ✨ LA NOUVELLE ICÔNE DE MESSAGERIE */}
                  {u.id !== session.user.id && (
                    <button 
                      onClick={() => handleContactUser(u)} 
                      className="text-amber-600 hover:text-amber-800 hover:bg-amber-100 p-1.5 rounded-full transition-colors ml-1"
                      title={`Envoyer une missive à ${u.username}`}
                    >
                      <MessageCircle size={16} />
                    </button>
                  )}
                </div>
                <div className="mt-1.5 mb-1">{renderStatus(u.last_seen)}</div>
                  <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">Inscrit le {new Date(u.created_at).toLocaleDateString('fr-FR')}</div>
                </td>
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
                          const isActive = badgeId === u.active_badge;
                          return (
                            <span key={badgeId} className={`inline-flex items-center text-[10px] px-2 py-0.5 rounded-full border font-bold transition-all ${badgeDef.color} ${isActive ? 'ring-2 ring-offset-1 ring-amber-400 scale-105' : 'opacity-60'}`} title={isActive ? "Actif" : "Possédé"}>
                              {badgeDef.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </td>
				{/* ✨ ON CACHE TOUTE LA CELLULE D'ACTION AUX JOUEURS NORMAUX */}
				{myRole === 'super_admin' && (
				  <td className="p-4 text-right">
					<div className="flex flex-col items-end gap-2">
					  {!isSuperAdmin && (
						<button onClick={() => handleToggleRole(u.id, u.role)} className={`text-xs px-3 py-1.5 rounded font-bold border transition-colors ${isGardien ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'}`}>
						  {isGardien ? 'Rétrograder' : 'Promouvoir Gardien'}
						</button>
					  )}
					  <div className="relative">
						<button onClick={() => setEditingBadgesFor(editingBadgesFor === u.id ? null : u.id)} className="text-xs flex items-center gap-1 text-amber-600 hover:text-amber-800 font-bold border border-amber-200 px-2 py-1 rounded bg-amber-50">
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
								  <input type="checkbox" checked={userBadges.includes(badge.id)} onChange={() => handleToggleBadge(u.id, userBadges, badge.id)} className="text-amber-600 focus:ring-amber-500" />
								  <span className="font-medium text-gray-700">{badge.label}</span>
								</label>
							  ))}
							</div>
						  </div>
						)}
					  </div>
					</div>
				  </td>
				)}
			  </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ============================================================================
// --- 2. ONGLET : STATISTIQUES (Ancien AdminStats) ---
// ============================================================================
function TabStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const [{ data: profiles }, { data: characters }, { data: requests }] = await Promise.all([
        supabase.from('profiles').select('created_at'),
        supabase.from('characters').select('created_at, updated_at'),
        supabase.from('data_change_requests').select('created_at')
      ]);

      const dailyData = {};
      const addCount = (dateString, key) => {
        if (!dateString) return;
        const dateObj = new Date(dateString);
        const dateStr = dateObj.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        if (!dailyData[dateStr]) dailyData[dateStr] = { date: dateStr, newUsers: 0, newChars: 0, updatedChars: 0, encyclopedia: 0, timestamp: dateObj.setHours(0,0,0,0) };
        dailyData[dateStr][key]++;
      };

      profiles?.forEach(p => addCount(p.created_at, 'newUsers'));
      characters?.forEach(c => {
        addCount(c.created_at, 'newChars');
        if (c.updated_at && c.created_at !== c.updated_at) addCount(c.updated_at, 'updatedChars');
      });
      requests?.forEach(r => addCount(r.created_at, 'encyclopedia'));

      const sortedStats = Object.values(dailyData).sort((a, b) => b.timestamp - a.timestamp).slice(0, 14);
      setStats(sortedStats);
    } catch (error) { console.error("Erreur stats :", error); } 
    finally { setLoading(false); }
  };

  useEffect(() => { fetchStats(); }, []);

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex justify-end">
        <button onClick={fetchStats} className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 shadow-sm font-bold">
          <RefreshCcw size={16} className={loading ? "animate-spin" : ""} /> <span className="hidden sm:inline">Rafraîchir</span>
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 font-serif border-b border-amber-200">
              <tr>
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold text-center"><div className="flex flex-col items-center"><Users size={16} className="text-blue-600 mb-1"/> Nouveaux Inscrits</div></th>
                <th className="p-4 font-bold text-center"><div className="flex flex-col items-center"><FileText size={16} className="text-green-600 mb-1"/> Créations Persos</div></th>
                <th className="p-4 font-bold text-center"><div className="flex flex-col items-center"><Activity size={16} className="text-purple-600 mb-1"/> Fiches Mises à jour</div></th>
                <th className="p-4 font-bold text-center"><div className="flex flex-col items-center"><BookOpen size={16} className="text-rose-600 mb-1"/> Contributions Lore</div></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-400 font-serif animate-pulse">Extraction des registres spatio-temporels...</td></tr>
              ) : stats.length === 0 ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500 italic">Aucune donnée disponible.</td></tr>
              ) : (
                stats.map((day, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{day.date}</td>
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.newUsers > 0 ? 'bg-blue-100 text-blue-800' : 'text-gray-300'}`}>{day.newUsers > 0 ? `+ ${day.newUsers}` : '-'}</span></td>
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.newChars > 0 ? 'bg-green-100 text-green-800' : 'text-gray-300'}`}>{day.newChars > 0 ? `+ ${day.newChars}` : '-'}</span></td>
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.updatedChars > 0 ? 'bg-purple-100 text-purple-800' : 'text-gray-300'}`}>{day.updatedChars > 0 ? day.updatedChars : '-'}</span></td>
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.encyclopedia > 0 ? 'bg-rose-100 text-rose-800' : 'text-gray-300'}`}>{day.encyclopedia > 0 ? `+ ${day.encyclopedia}` : '-'}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// --- 3. LE CONTENEUR PRINCIPAL (Dashboard) ---
// ============================================================================
export default function AdminDashboard({ session, onBack }) {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2"> <Shield className="text-amber-600" /> Communauté & Métriques </h2>
        <button onClick={onBack} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 shadow-sm font-bold font-serif transition-colors">
          <ArrowLeft size={16} /> Retour
        </button>
      </div>

      {/* Onglets de navigation */}
      <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
        <button onClick={() => setActiveTab('users')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'users' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <Crown size={18} /> Utilisateurs
        </button>
        <button onClick={() => setActiveTab('stats')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'stats' ? 'text-blue-900 border-blue-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <BarChart2 size={18} /> Métriques
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      {activeTab === 'users' && <TabUsers session={session} />}
      {activeTab === 'stats' && <TabStats />}
    </div>
  );
}

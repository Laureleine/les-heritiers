// 11.1.0
// 13.3.0 // 13.4.0 // 13.11.0
// 15.0.0

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { CheckCircle, MessageCircle, Shield, User, Crown, X, Award, BarChart2, Users, FileText, BookOpen, Activity, RefreshCcw, ArrowLeft, Bug, Clock } from 'lucide-react';
import { AVAILABLE_BADGES } from '../data/DictionnaireJeu';
import { showInAppNotification } from '../utils/SystemeServices';

// ============================================================================
// --- 1. ONGLET : GESTION DES HÉRITIERS (Ancien AdminUserList) ---
// ============================================================================

function TabUsers({ session }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBadgesFor, setEditingBadgesFor] = useState(null);
  const [myRole, setMyRole] = useState(null);

  const fetchUsersAndRole = useCallback(async () => {
    setLoading(true);
    
    const [ { data: myProfile }, { data: profiles, error } ] = await Promise.all([
      supabase.from('profiles').select('role').eq('id', session.user.id).single(),
      supabase.from('profiles').select('id, username, created_at, role, badges, active_badge, last_seen').order('last_seen', { ascending: false, nullsFirst: false })
    ]);

    setMyRole(myProfile?.role || 'user');
    if (!error) setUsers(profiles || []);
    
    setLoading(false);
  }, [session.user.id]);

  useEffect(() => {
    fetchUsersAndRole();
  }, [fetchUsersAndRole]);

  const handleToggleRole = async (userId, currentRole) => {
    // La protection UI, mais rappelle-toi : la vraie sécurité est dans ta base de données (RLS) !
    if (myRole !== 'super_admin') return;

    const newRole = currentRole === 'gardien' ? 'user' : 'gardien';
    try {
      const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
      if (error) throw error;
      setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
    } catch (error) { showInAppNotification("Erreur de rôle : " + error.message, "error"); }
  };

  const handleToggleBadge = async (userId, badgeId, currentBadges) => {
    if (myRole !== 'super_admin') return;

    const newBadges = [...(currentBadges || [])];
    if (newBadges.includes(badgeId)) newBadges.splice(newBadges.indexOf(badgeId), 1);
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
      // ✨ FIX : replaceAll pour blinder le formatage de la date !
      return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Vu le {dateStr.replaceAll(':', 'h')}</span>;
    }
  };

  const handleContactUser = (targetUser) => {
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
                  <div className="font-bold text-gray-800 text-lg flex items-center gap-2">
                    {u.username || 'Inconnu'}
                    {/* ✨ FIX : Le garde de sécurité est restauré. Finis les monologues ! */}
                    {u.id !== session.user.id && (
                      <button 
                        onClick={() => handleContactUser(u)} 
                        className="p-1 text-gray-400 hover:text-amber-600 bg-gray-100 hover:bg-amber-50 rounded transition-colors" 
                        title={`Envoyer une missive à ${u.username}`}
                      >
                        <MessageCircle size={14} />
                      </button>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Inscrit le {new Date(u.created_at).toLocaleDateString('fr-FR')}</div>
                  <div className="mt-1">{renderStatus(u.last_seen)}</div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col gap-2 items-start">
                    {isSuperAdmin && <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200"><Crown size={12} /> Super Admin</span>}
                    {isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200"><Shield size={12} /> Gardien du Savoir</span>}
                    {!isSuperAdmin && !isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200"><User size={12} /> Héritier (Joueur)</span>}

                    {userBadges.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {userBadges.map(badgeId => {
                          const badgeDef = AVAILABLE_BADGES.find(b => b.id === badgeId);
                          if (!badgeDef) return null;
                          const isActive = u.active_badge === badgeId;
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
                          <>
                            {/* ✨ FIX : L'overlay invisible pour fermer le menu au clic extérieur */}
                            <div className="fixed inset-0 z-10" onClick={() => setEditingBadgesFor(null)}></div>
                            
                            <div className="absolute right-0 top-8 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-20 p-2 text-left animate-fade-in">
                              <div className="text-xs font-bold text-gray-500 uppercase mb-2 px-1">Attribuer / Retirer</div>
                              <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar">
                                {AVAILABLE_BADGES.map(badge => {
                                  const hasBadge = userBadges.includes(badge.id);
                                  return (
                                    <button
                                      key={badge.id}
                                      onClick={() => handleToggleBadge(u.id, badge.id, userBadges)}
                                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors flex justify-between items-center ${hasBadge ? 'bg-amber-50 font-bold text-amber-900' : 'hover:bg-gray-50 text-gray-600'}`}
                                    >
                                      {badge.label}
                                      {hasBadge && <X size={12} className="text-red-500" />}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </>
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
      // ✨ FIX : On protège la base de données en ne cherchant QUE les 14 derniers jours !
      const fourteenDaysAgo = new Date(Date.now() - 14 * 86400000).toISOString();

      const [{ data: profiles }, { data: characters }, { data: requests }] = await Promise.all([
        supabase.from('profiles').select('created_at').gte('created_at', fourteenDaysAgo),
        supabase.from('characters').select('created_at, updated_at').or(`created_at.gte.${fourteenDaysAgo},updated_at.gte.${fourteenDaysAgo}`),
        supabase.from('data_change_requests').select('created_at').gte('created_at', fourteenDaysAgo)
      ]);

      const dailyData = {};

      const addCount = (dateStr, key) => {
        if (!dateStr) return;
        const dateObj = new Date(dateStr);
        const d = dateObj.toLocaleDateString('fr-FR');
        if (!dailyData[d]) dailyData[d] = { date: d, newUsers: 0, newChars: 0, updatedChars: 0, encyclopedia: 0, sortValue: dateObj.setHours(0,0,0,0) };
        dailyData[d][key]++;
      };

      if (profiles) profiles.forEach(p => addCount(p.created_at, 'newUsers'));
      if (characters) characters.forEach(c => {
        addCount(c.created_at, 'newChars');
        // On compte comme "mise à jour" si updated_at diffère de created_at
        if (c.updated_at && c.updated_at !== c.created_at) {
          addCount(c.updated_at, 'updatedChars');
        }
      });
      if (requests) requests.forEach(r => addCount(r.created_at, 'encyclopedia'));

      // On trie par date décroissante pour un affichage plus naturel
      const sortedStats = Object.values(dailyData).sort((a, b) => b.sortValue - a.sortValue);
      setStats(sortedStats.slice(0, 14));

    } catch (error) { 
      console.error("Erreur stats :", error); 
    } finally { 
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

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
                stats.map((day) => (
                  // ✨ FIX : Utilisation de la clé naturelle day.date au lieu de l'index
                  <tr key={day.date} className="hover:bg-amber-50/30 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{day.date}</td>
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.newUsers > 0 ? 'bg-blue-100 text-blue-800' : 'text-gray-300'}`}>{day.newUsers > 0 ? `+ ${day.newUsers}` : '-'}</span></td>
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.newChars > 0 ? 'bg-green-100 text-green-800' : 'text-gray-300'}`}>{day.newChars > 0 ? `+ ${day.newChars}` : '-'}</span></td>
                    {/* ✨ FIX : Ajout du '+' manquant sur la mise à jour des personnages */}
                    <td className="p-4 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.updatedChars > 0 ? 'bg-purple-100 text-purple-800' : 'text-gray-300'}`}>{day.updatedChars > 0 ? `+ ${day.updatedChars}` : '-'}</span></td>
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
// --- 3. ONGLET : BUREAU DES ANOMALIES (Le Panneau de Contrôle) ---
// ============================================================================

function TabAnomalies() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('bug_reports')
        .select('*, profiles(username)')
        .order('status', { ascending: true }) // On trie par statut pour grouper les résolus à la fin
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      if (data) setReports(data);
    } catch (err) {
      showInAppNotification("Erreur de lecture des anomalies : " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('bug_reports')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      
      showInAppNotification(`Le statut a été passé en : ${newStatus}`, "success");
      fetchReports();
      
    } catch (err) {
      showInAppNotification("Échec de la mise à jour : " + err.message, "error");
    }
  };

  if (loading) return <div className="p-8 text-center text-stone-500 font-serif animate-pulse">Inspection des rapports en cours...</div>;

  return (
    <div className="space-y-4 animate-fade-in">
      {reports.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-stone-200">
          <Bug size={48} className="mx-auto text-stone-300 mb-4" />
          <p className="text-stone-500 font-serif">Le Bureau est vide. La matrice est stable.</p>
        </div>
      ) : (
        reports.map(report => (
          <div key={report.id} className="bg-white p-5 rounded-xl shadow-sm border border-stone-200 flex flex-col md:flex-row gap-4 hover:shadow-md transition-shadow">
            
            {/* Infos du Bug */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider ${
                  report.status === 'Résolu' ? 'bg-green-100 text-green-800' :
                  report.status === 'En cours de traitement' ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {report.status}
                </span>
                <h4 className="font-bold text-stone-800 text-lg">{report.title}</h4>
                {report.is_confidential && <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded border border-stone-200">Confidentiel</span>}
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-3 bg-stone-50 p-3 rounded border border-stone-100">
                {report.description}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-stone-500 font-bold">
                <span>Signalé par : <span className="text-stone-700">{report.profiles?.username || 'Anonyme'}</span></span>
                <span>Version : {report.version_app}</span>
                <span>Poids communautaire : {(report.community_weight || []).length} vote(s)</span>
                <span>Le {new Date(report.created_at).toLocaleDateString('fr-FR')}</span>
              </div>
            </div>

            {/* Actions d'Administration */}
            <div className="flex flex-col items-end gap-2 border-t md:border-t-0 md:border-l border-stone-100 pt-3 md:pt-0 md:pl-4 shrink-0 min-w-[200px]">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Traiter ce signalement</label>
              
              {report.status !== 'Signalé' && (
                <button onClick={() => handleStatusChange(report.id, 'Signalé')} className="w-full text-left px-3 py-2 text-sm bg-amber-50 text-amber-700 hover:bg-amber-100 rounded-lg font-bold transition-colors">
                  ➡️ Remettre en Signalé
                </button>
              )}
              
              {report.status !== 'En cours de traitement' && (
                <button onClick={() => handleStatusChange(report.id, 'En cours de traitement')} className="w-full text-left px-3 py-2 text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-bold transition-colors flex items-center gap-2">
                  <Clock size={14} /> Passer En cours
                </button>
              )}
              
              {report.status !== 'Résolu' && (
                <button onClick={() => handleStatusChange(report.id, 'Résolu')} className="w-full text-left px-3 py-2 text-sm bg-green-50 text-green-700 hover:bg-green-100 rounded-lg font-bold transition-colors flex items-center gap-2">
                  <CheckCircle size={14} /> Marquer Résolu
                </button>
              )}
            </div>

          </div>
        ))
      )}
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
        {/* ✨ NOUVEL ONGLET : BUREAU DES ANOMALIES */}
        <button onClick={() => setActiveTab('anomalies')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'anomalies' ? 'text-rose-900 border-rose-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <Bug size={18} /> Anomalies
        </button>
      </div>
	  
      {/* Contenu de l'onglet actif */}
      {activeTab === 'users' && <TabUsers session={session} />}
      {activeTab === 'stats' && <TabStats />}
      {activeTab === 'anomalies' && <TabAnomalies />} {/* ✨ LE NOUVEAU CONTENU */}
	  
    </div>
  );
}

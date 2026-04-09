// src/components/AdminDashboard.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../config/supabase';
import { Search, Mail, Filter, CheckCircle, MessageCircle, Shield, User, Crown, X, Award, BarChart2, Users, FileText, BookOpen, Activity, RefreshCcw, ArrowLeft, Bug, Clock } from 'lucide-react';
import { showInAppNotification } from '../utils/SystemeServices';
import * as LucideIcons from 'lucide-react';

// ============================================================================
// --- 1. ONGLET : GESTION DES HÉRITIERS (Ancien AdminUserList) ---
// ============================================================================

function TabUsers({ session }) {
  // --- 1. LES MÉMOIRES (States) ---
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBadgesFor, setEditingBadgesFor] = useState(null);
  const [myRole, setMyRole] = useState(null);
  const [dbBadges, setDbBadges] = useState([]); // ✨ La mémoire des nouveaux badges

  // Les mémoires du Triptyque de l'Inquisiteur
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('last_seen');
  const [filterMode, setFilterRole] = useState('all');

  // --- 2. LE MOTEUR DE TÉLÉCHARGEMENT BLINDÉ ---
  const fetchUsersAndRole = useCallback(async () => {
    setLoading(true);
    try {
      const [
        { data: myProfile },
        { data: profiles, error: usersError },
        { data: badgesData }
      ] = await Promise.all([
        supabase.from('profiles').select('role').eq('id', session.user.id).single(),
        supabase.rpc('get_admin_users'),
        supabase.from('titres_honorifiques').select('*')
      ]);

      setMyRole(myProfile?.role || 'user');
      if (!usersError) setUsers(profiles || []);
      
      // Sécurité anti-crash si la table est vide ou inaccessible
      setDbBadges(badgesData || []); 

    } catch (err) {
      console.error("Anomalie critique lors du chargement des registres :", err);
    } finally {
      // 🛡️ SÉCURITÉ ABSOLUE : Quoi qu'il arrive, on lève le rideau de chargement !
      setLoading(false);
    }
  }, [session.user.id]);

  // ✨ 3. LE CÂBLE VITAL : L'allumage automatique au démarrage !
  useEffect(() => {
    fetchUsersAndRole();
  }, [fetchUsersAndRole]);

  // --- 4. LE CERVEAU DE FUSION DES BADGES ---
  const allBadgesToAssign = useMemo(() => dbBadges || [], [dbBadges]);

  // --- 5. LE CERVEAU DU TRIPTYQUE DE L'INQUISITEUR ---
  const filteredAndSortedUsers = useMemo(() => {
    let result = [...users];

    // 1. Les Filtres Rapides
    if (filterMode === 'staff') {
      result = result.filter(u => u.role === 'super_admin' || u.role === 'gardien');
    } else if (filterMode === 'unverified') {
      result = result.filter(u => !u.is_verified);
    }

    // 2. La Recherche Textuelle (Pseudo OU Email)
    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(u => 
        (u.username && u.username.toLowerCase().includes(lowerTerm)) ||
        (u.email && u.email.toLowerCase().includes(lowerTerm))
      );
    }

    // 3. Le Tri Intelligent
    result.sort((a, b) => {
      if (sortBy === 'last_seen') {
        const dateA = a.last_seen ? new Date(a.last_seen) : new Date(0);
        const dateB = b.last_seen ? new Date(b.last_seen) : new Date(0);
        return dateB - dateA; // Plus récent en premier
      }
      if (sortBy === 'created_at') {
        return new Date(b.created_at) - new Date(a.created_at); // Plus récent en premier
      }
      if (sortBy === 'username') {
        return (a.username || '').localeCompare(b.username || ''); // Ordre Alphabétique
      }
      return 0;
    });

    return result;
  }, [users, searchTerm, sortBy, filterMode]);

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

  const handleToggleInitiated = async (userId, currentState) => {
    if (myRole !== 'super_admin') return;
    const newState = !currentState;
    
    try {
      const { error } = await supabase.from('profiles').update({ is_initiated: newState }).eq('id', userId);
      if (error) throw error;
      
      // ✨ LE FIX LOCAL : On met à jour l'écran immédiatement !
      setUsers(users.map(u => u.id === userId ? { ...u, is_initiated: newState } : u));
      
      showInAppNotification(newState ? "L'Héritier a rejoint le Cercle des Initiés !" : "L'Héritier a été banni du Cercle.", "success");
    } catch (error) {
      showInAppNotification("Erreur lors de l'initiation : " + error.message, "error");
    }
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

  // ✨ NOUVEAU : Forcer la validation de la missive pneumatique
  const handleValidateEmail = async (userId) => {
    if (myRole !== 'super_admin') return;
    
    try {
      const { error } = await supabase.rpc('admin_validate_email', { target_user_id: userId });
      if (error) throw error;
      
      showInAppNotification("Le Sceau d'Identité a été validé manuellement !", "success");
      fetchUsersAndRole(); // On rafraîchit la table pour voir la pastille verte
      
    } catch (error) { 
      showInAppNotification("Échec de la validation : " + error.message, "error"); 
    }
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
      {/* ✨ NOUVEAU : LE COCKPIT DE GESTION */}
      <div className="bg-stone-50 border-b border-gray-200 p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        
        {/* Barre de recherche */}
        <div className="relative w-full md:w-1/3 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Chercher un pseudo ou email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-sm font-bold text-gray-700 shadow-sm"
          />
        </div>

        {/* Filtres et Tris */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-1 shadow-sm">
            <Filter size={14} className="text-gray-400 ml-2" />
            <select value={filterMode} onChange={(e) => setFilterRole(e.target.value)} className="bg-transparent border-none text-sm font-bold text-gray-700 outline-none cursor-pointer py-1 pr-2">
              <option value="all">Tous les Héritiers</option>
              <option value="staff">Équipe (Gardiens)</option>
              <option value="unverified">En attente de validation</option>
            </select>
          </div>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white border border-gray-300 rounded-lg text-sm font-bold text-gray-700 outline-none cursor-pointer py-2 px-3 shadow-sm">
            <option value="last_seen">Dernière connexion</option>
            <option value="created_at">Date d'inscription</option>
            <option value="username">Ordre alphabétique</option>
          </select>
        </div>
      </div>
      <table className="w-full text-left">
        <thead className="bg-amber-50 text-amber-900 font-serif">
          <tr>
            <th className="p-4">Utilisateur</th>
            <th className="p-4">Rôle & Badges</th>
            {myRole === 'super_admin' && <th className="p-4 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {filteredAndSortedUsers.map(u => {
            const isSuperAdmin = u.role === 'super_admin';
            const isGardien = u.role === 'gardien';
            const userBadges = u.badges || [];

            return (
              <tr key={u.id} className="hover:bg-gray-50 transition-colors">
				  <td className="p-4">
					<div className="font-bold text-gray-800 text-lg flex items-center gap-2">
					  {u.username || 'Inconnu'}
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
					
					{/* ✨ NOUVEAU : AFFICHAGE DE L'EMAIL */}
					<div className="text-xs text-amber-700 font-bold mt-1 flex items-center gap-1.5 bg-amber-50/50 inline-flex px-2 py-0.5 rounded border border-amber-100">
					  <Mail size={12} /> {u.email || 'Email occulte'}
					</div>

					<div className="text-xs text-gray-500 mt-1">Inscrit le {new Date(u.created_at).toLocaleDateString('fr-FR')}</div>
					
					<div className="mt-1.5 flex items-center gap-2">
					  {renderStatus(u.last_seen)}
					  <span className="text-gray-300">|</span>
					  {u.is_verified ? (
						<span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-emerald-200">Sceau Validé</span>
					  ) : (
						<span className="text-[9px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-red-200 animate-pulse">En Attente</span>
					  )}
					</div>
				  </td>
                <td className="p-4">
                  <div className="flex flex-col gap-2 items-start">
                    {isSuperAdmin && <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200"><Crown size={12} /> Super Admin</span>}
                    {isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200"><Shield size={12} /> Gardien du Savoir</span>}
					{u.is_initiated && <span className="inline-flex items-center gap-1 px-2 py-1 mt-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200"><LucideIcons.Key size={12} /> Initié (Bêta)</span>}
                    {!isSuperAdmin && !isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200"><User size={12} /> Héritier (Joueur)</span>}

                    {userBadges.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
						{userBadges.length > 0 && (
						  <div className="flex flex-wrap gap-1 mt-1">
							{userBadges.map(badgeId => {
							  // ✨ FIX : On lit depuis le grand dictionnaire fusionné
							  const badgeDef = allBadgesToAssign.find(b => b.id === badgeId);
							  if (!badgeDef) return null;
							  
							  const isActive = u.active_badge === badgeId;
							  const isLegacy = !badgeDef.icon_name; // Les vieux badges n'ont pas ce champ
							  const DynamicIcon = !isLegacy && badgeDef.icon_name && LucideIcons[badgeDef.icon_name] ? LucideIcons[badgeDef.icon_name] : null;

							  return (
								<span key={badgeId} className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border font-bold transition-all ${isLegacy ? badgeDef.color : badgeDef.color_classes} ${isActive ? 'ring-2 ring-offset-1 ring-amber-400 scale-105' : 'opacity-60'}`} title={isActive ? "Actif" : "Possédé"}>
								  {!isLegacy && DynamicIcon && <DynamicIcon size={12} />}
								  {isLegacy ? badgeDef.label : badgeDef.label} {/* Affiche du JSX ou du texte */}
								</span>
							  );
							})}
						  </div>
						)}
                      </div>
                    )}
                  </div>
                </td>
				{myRole === 'super_admin' && (
				  <td className="p-4 text-right">
					<div className="flex flex-col items-end gap-2">
					  
					  {/* ✨ NOUVEAU : Le bouton de validation manuelle */}
					  {!u.is_verified && (
						<button 
						  onClick={() => handleValidateEmail(u.id)} 
						  className="w-full text-xs px-3 py-1.5 rounded font-bold border transition-colors bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 flex items-center justify-center gap-1 shadow-sm"
						>
						  <CheckCircle size={14} /> Valider l'identité
						</button>
					  )}

						{!isSuperAdmin && (
						  <button onClick={() => handleToggleRole(u.id, u.role)} className={`w-full text-xs px-3 py-1.5 rounded font-bold border transition-colors ${isGardien ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'}`}>
							{isGardien ? 'Rétrograder' : 'Promouvoir Gardien'}
						  </button>
						)}

						{/* ✨ L'INCISION D'ACTION : Le bouton magique */}
						{!isSuperAdmin && (
						  <button onClick={() => handleToggleInitiated(u.id, u.is_initiated)} className={`w-full mt-2 text-xs px-3 py-1.5 rounded font-bold border transition-colors flex justify-center items-center gap-1 ${u.is_initiated ? 'bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50' : 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'}`}>
							<LucideIcons.Key size={14} /> {u.is_initiated ? 'Révoquer l\'Initié' : 'Rendre Initié'}
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
								  {allBadgesToAssign.map(badge => {
									const hasBadge = userBadges.includes(badge.id);
									const isLegacy = !badge.icon_name;
									const DynamicIcon = !isLegacy && badge.icon_name && LucideIcons[badge.icon_name] ? LucideIcons[badge.icon_name] : null;

									return (
									  <button
										key={badge.id}
										onClick={() => handleToggleBadge(u.id, badge.id, userBadges)}
										className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors flex justify-between items-center ${hasBadge ? 'bg-amber-50 font-bold text-amber-900' : 'hover:bg-gray-50 text-gray-600'}`}
									  >
										<span className="flex items-center gap-1">
										  {!isLegacy && DynamicIcon && <DynamicIcon size={12} />}
										  {isLegacy ? badge.label : badge.label}
										</span>
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
// --- 4. ONGLET : FORGE DES TITRES (Badges Dynamiques) ---
// ============================================================================

function TabForgeTitres() {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ id: '', label: '', icon_name: 'Award', color_classes: 'bg-stone-100 text-stone-800 border-stone-300', description: '' });

  const fetchBadges = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('titres_honorifiques').select('*').order('label');
    if (!error && data) setBadges(data);
    setLoading(false);
  };

  useEffect(() => { fetchBadges(); }, []);

  const handleSave = async () => {
    if (!form.id || !form.label) return showInAppNotification("L'ID et le Libellé sont obligatoires !", "error");
    
    // Auto-formatage de l'ID (minuscules, pas d'espaces)
    const cleanId = form.id.toLowerCase().replace(/\s+/g, '_');
    
    try {
      const { error } = await supabase.from('titres_honorifiques').upsert([{ ...form, id: cleanId }]);
      if (error) throw error;
      showInAppNotification("Le Titre a été forgé et gravé dans le Nuage !", "success");
      fetchBadges();
      setForm({ id: '', label: '', icon_name: 'Award', color_classes: 'bg-stone-100 text-stone-800 border-stone-300', description: '' });
    } catch (err) {
      showInAppNotification("La forge a échoué : " + err.message, "error");
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Détruire ce titre des archives ? Il sera retiré à tous les Héritiers qui le possèdent.")) return;
    const { error } = await supabase.from('titres_honorifiques').delete().eq('id', id);
    if (!error) {
       showInAppNotification("Titre détruit des archives !", "info");
       fetchBadges();
    }
  };

  const PreviewIcon = LucideIcons[form.icon_name] || LucideIcons.HelpCircle;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
      {/* L'Atelier (Formulaire) */}
      <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm flex flex-col gap-4">
        <h3 className="font-serif font-bold text-amber-900 flex items-center gap-2 border-b border-amber-100 pb-3">
          <LucideIcons.Hammer size={18} /> L'Enclume du Façonneur
        </h3>
        
        <div>
          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Identifiant unique (BDD)</label>
          <input type="text" value={form.id} onChange={e => setForm({...form, id: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: tueur_de_smog" />
        </div>
        <div>
          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Libellé affiché au joueur</label>
          <input type="text" value={form.label} onChange={e => setForm({...form, label: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: Tueur de Smog" />
        </div>
        <div>
          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 flex justify-between">
            <span>Nom de l'icône (Anglais)</span>
            <a href="https://lucide.dev/icons/" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">Catalogue Lucide ↗</a>
          </label>
          <input type="text" value={form.icon_name} onChange={e => setForm({...form, icon_name: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: Skull, Flame, Sword" />
        </div>
        <div>
          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Couleurs (Classes Tailwind CSS)</label>
          <input type="text" value={form.color_classes} onChange={e => setForm({...form, color_classes: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-xs font-mono focus:ring-2 focus:ring-amber-500 outline-none" placeholder="ex: bg-red-100 text-red-800 border-red-200" />
        </div>
        <div>
          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Description narrative</label>
          <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50 text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none" rows="3" placeholder="Pour avoir vaincu la créature..." />
        </div>

        <div className="pt-4 border-t border-stone-100">
          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-3 block">Aperçu en direct :</label>
          <div className="p-4 bg-stone-100 rounded-lg border border-stone-200 flex justify-center items-center shadow-inner">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold shadow-sm transition-all ${form.color_classes}`}>
              <PreviewIcon size={16} /> {form.label || 'Titre'}
            </span>
          </div>
        </div>

        <button onClick={handleSave} className="w-full mt-2 bg-amber-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-amber-700 transition-colors flex justify-center items-center gap-2">
          <LucideIcons.CheckCircle size={18} /> Graver le Titre
        </button>
      </div>

      {/* Le Registre (Liste) */}
      <div className="lg:col-span-2 space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
         {loading ? (
            <div className="animate-pulse p-8 text-center text-stone-400 font-serif border-2 border-dashed border-stone-200 rounded-xl bg-white/50">Ouverture de la salle des trophées...</div>
         ) : badges.length === 0 ? (
            <div className="p-8 text-center text-stone-500 bg-white rounded-xl border border-stone-200 shadow-sm">La forge est vide. Créez votre premier titre !</div>
         ) : badges.map(b => {
            const BIcon = LucideIcons[b.icon_name] || LucideIcons.HelpCircle;
            return (
              <div key={b.id} className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow group">
                <div>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-bold ${b.color_classes}`}>
                    <BIcon size={14} /> {b.label}
                  </span>
                  <div className="text-[10px] text-stone-400 mt-2 font-mono uppercase tracking-widest">ID: {b.id}</div>
                  {b.description && <p className="text-sm text-stone-600 mt-1 italic leading-relaxed">"{b.description}"</p>}
                </div>
                <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={() => setForm(b)} className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-colors shadow-sm" title="Modifier le design"><LucideIcons.Edit size={16}/></button>
                   <button onClick={() => handleDelete(b.id)} className="p-2 text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-800 rounded-lg transition-colors shadow-sm" title="Détruire le titre"><LucideIcons.Trash2 size={16}/></button>
                </div>
              </div>
            );
         })}
      </div>
    </div>
  );
}

// ============================================================================
// ✨ LE CONTENEUR PRINCIPAL (Dashboard)
// ============================================================================

export default function AdminDashboard({ session, onBack }) {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2">
          <Shield className="text-amber-600" /> Communauté & Métriques
        </h2>
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

        {/* ✨ L'onglet Anomalies a été pulvérisé ! */}

        <button onClick={() => setActiveTab('titres')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'titres' ? 'text-purple-900 border-purple-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <Award size={18} /> Forge des Titres
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      {activeTab === 'users' && <TabUsers session={session} />}
      {activeTab === 'stats' && <TabStats />}
      {activeTab === 'titres' && <TabForgeTitres />}
    </div>
  );
}

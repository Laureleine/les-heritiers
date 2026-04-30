// src/components/admin/TabUsers.js

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../../config/supabase';
import { Search, Mail, Filter, CheckCircle, MessageCircle, Shield, User, Crown, Award, X } from 'lucide-react';
import { showInAppNotification } from '../../utils/SystemeServices';
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
    const [dbBadges, setDbBadges] = useState([]); 

    // Les mémoires du Triptyque de l'Inquisiteur
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('last_seen');
    const [filterMode, setFilterMode] = useState('all');

    // --- 2. LE MOTEUR DE TÉLÉCHARGEMENT BLINDÉ ET INTELLIGENT ---
    const fetchUsersAndRole = useCallback(async () => {
        setLoading(true);
        try {
            // A. On découvre l'identité du visiteur
            const { data: myProfile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single();
            const currentRole = myProfile?.role || 'user';
            setMyRole(currentRole);

            // B. On adapte l'incantation selon les droits (Le Fix !)
            let usersPromise;
            if (currentRole === 'super_admin') {
                usersPromise = supabase.rpc('get_admin_users'); // Le Passe-Partout
            } else {
                // Requête inoffensive sur les données publiques pour les joueurs
                usersPromise = supabase.from('profiles').select('id, username, role, is_initiated, badges, last_seen, created_at');
            }

            const [
                { data: profiles, error: usersError },
                { data: badgesData }
            ] = await Promise.all([
                usersPromise,
                supabase.from('titres_honorifiques').select('*')
            ]);

            if (!usersError) setUsers(profiles || []);
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

    const handleValidateEmail = async (userId) => {
        if (myRole !== 'super_admin') return;
        try {
            const { error } = await supabase.rpc('admin_validate_email', { target_user_id: userId });
            if (error) throw error;
            showInAppNotification("Le Sceau d'Identité a été validé manuellement !", "success");
            fetchUsersAndRole();
        } catch (error) {
            showInAppNotification("Échec de la validation : " + error.message, "error");
        }
    };

    const renderStatus = (lastSeen) => {
        if (!lastSeen) return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300"></span> Jamais connecté</span>;
        const thirtyMinsAgo = new Date(Date.now() - 30 * 60000);
        if (new Date(lastSeen) > thirtyMinsAgo) return <span className="text-emerald-600 text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> En ligne</span>;
        else {
            const dateStr = new Date(lastSeen).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
            return <span className="text-gray-400 text-xs flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Vu le {dateStr.replaceAll(':', 'h')}</span>;
        }
    };

    const handleContactUser = (targetUser) => {
        window.dispatchEvent(new CustomEvent('open-telegraphe', { detail: { targetUser } }));
        showInAppNotification(`Établissement de la connexion pneumatique vers ${targetUser.username}...`, "info");
    };

    if (loading) return <div className="p-8 text-center text-gray-500 font-serif animate-pulse">Chargement des registres...</div>;

    return (
        <div className="space-y-6 animate-fade-in">
            {/* ============================================================== */}
            {/* 1. EN-TÊTE : RECHERCHE ET FILTRES                              */}
            {/* ============================================================== */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
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

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg p-1 shadow-sm">
                        <Filter size={14} className="text-gray-400 ml-2" />
                        <select
                            value={filterMode || 'all'}
                            onChange={(e) => setFilterMode(e.target.value)}
                            className="bg-transparent border-none text-sm font-bold text-gray-700 outline-none cursor-pointer py-1 pr-2"
                        >
                            <option value="all">Tous les rôles</option>
                            <option value="super_admin">Super Admins</option>
                            <option value="gardien">Gardiens du Savoir</option>
                            <option value="initie">Initiés</option>
                            <option value="joueur">Héritiers (Joueurs)</option>
                            {/* ✨ FIX : Filtre réservé à l'Architecte */}
                            {myRole === 'super_admin' && <option value="unverified">En Attente (Non validés)</option>}
                        </select>
                    </div>

                    <div className="text-sm font-bold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                        {filteredAndSortedUsers.length} Héritier{filteredAndSortedUsers.length > 1 ? 's' : ''}
                    </div>
                </div>
            </div>

            {/* ============================================================== */}
            {/* 2. LE TABLEAU DES UTILISATEURS                                 */}
            {/* ============================================================== */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto hide-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs uppercase tracking-wider">
                            <th className="p-4 font-bold">Identité & Contact</th>
                            <th className="p-4 font-bold">Rôle & Prestige</th>
                            {myRole === 'super_admin' && <th className="p-4 font-bold text-right">Actions Administratives</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredAndSortedUsers.length === 0 ? (
                            <tr>
                                <td colSpan={myRole === 'super_admin' ? 3 : 2} className="p-8 text-center text-gray-400 italic">
                                    Aucun Héritier ne correspond à cette recherche.
                                </td>
                            </tr>
                        ) : (
                            filteredAndSortedUsers.map(u => {
                                const isSuperAdmin = u.role === 'super_admin';
                                const isGardien = u.role === 'gardien';
                                const userBadges = u.badges || [];

                                return (
                                    <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                                        {/* Colonne 1 : IDENTITÉ & CONNEXION */}
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

                                            {/* ✨ FIX : L'Email Occulte n'est visible que pour l'Architecte */}
                                            {myRole === 'super_admin' && (
                                                <div className="text-xs text-amber-700 font-bold mt-1 flex items-center gap-1.5 bg-amber-50/50 inline-flex px-2 py-0.5 rounded border border-amber-100">
                                                    <Mail size={12} /> {u.email || 'Email occulte'}
                                                </div>
                                            )}

                                            <div className="text-xs text-gray-500 mt-1.5 font-medium">
                                                Inscrit le {new Date(u.created_at).toLocaleDateString('fr-FR')}
                                            </div>

                                            <div className="mt-1.5 flex items-center gap-2">
                                                {renderStatus(u.last_seen)}
                                                
                                                {/* ✨ FIX : Le statut de validation n'est utile qu'au Super Admin */}
                                                {myRole === 'super_admin' && (
                                                    <>
                                                        <span className="text-gray-300">|</span>
                                                        {u.is_verified ? (
                                                            <span className="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-emerald-200">Sceau Validé</span>
                                                        ) : (
                                                            <span className="text-[9px] bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-red-200 animate-pulse">En Attente</span>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </td>

                                        {/* Colonne 2 : RÔLES & BADGES */}
                                        <td className="p-4">
                                            <div className="flex flex-col gap-2 items-start">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {isSuperAdmin && <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200"><Crown size={12} /> Super Admin</span>}
                                                    {isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200"><Shield size={12} /> Gardien du Savoir</span>}
                                                    {u.is_initiated && <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200"><LucideIcons.Key size={12} /> Initié</span>}
                                                    {!isSuperAdmin && !isGardien && <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200"><User size={12} /> Héritier (Joueur)</span>}
                                                </div>

                                                {userBadges.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mt-1">
                                                        {userBadges.map(badgeId => {
                                                            const badgeDef = (dbBadges?.length ? dbBadges : typeof allBadgesToAssign !== 'undefined' ? allBadgesToAssign : []).find(b => b.id === badgeId);
                                                            if (!badgeDef) return null;

                                                            const isLegacy = typeof badgeDef === 'string';
                                                            const DynamicIcon = !isLegacy && badgeDef.icon_name && LucideIcons[badgeDef.icon_name] ? LucideIcons[badgeDef.icon_name] : null;

                                                            return (
                                                                <span key={badgeId} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold shadow-sm ${isLegacy ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : badgeDef.color_classes}`}>
                                                                    {!isLegacy && DynamicIcon && <DynamicIcon size={12} />}
                                                                    {isLegacy ? badgeDef.label : badgeDef.label}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        {/* Colonne 3 : ACTIONS ADMINISTRATIVES */}
                                        {myRole === 'super_admin' && (
                                            <td className="p-4 text-right">
                                                <div className="flex flex-col gap-2 items-end">
                                                    
                                                    {/* Bouton pour forcer la validation d'email (Anti Pigeons perdus) */}
                                                    {!u.is_verified && (
                                                        <button
                                                            onClick={() => handleValidateEmail(u.id)}
                                                            className="text-xs px-3 py-1.5 rounded font-bold border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm w-full lg:w-auto"
                                                            title="Valider l'identité manuellement"
                                                        >
                                                            <CheckCircle size={14} /> <span className="hidden xl:inline">Valider</span>
                                                        </button>
                                                    )}

                                                    {/* Privilèges de Modération (Gardien & Initié) */}
                                                    {!isSuperAdmin && (
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => handleToggleRole(u.id, u.role)}
                                                                className={`text-xs px-3 py-1.5 rounded font-bold border transition-colors flex items-center justify-center gap-1.5 shadow-sm ${isGardien ? 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100' : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'}`}
                                                                title={isGardien ? 'Rétrograder Gardien' : 'Promouvoir Gardien'}
                                                            >
                                                                <Shield size={14} /> <span className="hidden lg:inline">{isGardien ? 'Rétrograder' : 'Gardien'}</span>
                                                            </button>
                                                            <button
                                                                onClick={() => handleToggleInitiated(u.id, u.is_initiated)}
                                                                className={`text-xs px-3 py-1.5 rounded font-bold border transition-colors flex items-center justify-center gap-1.5 shadow-sm ${u.is_initiated ? 'bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50' : 'bg-stone-100 text-stone-500 border-stone-300 hover:bg-stone-200'}`}
                                                                title={u.is_initiated ? 'Révoquer l\'Initié' : 'Initier'}
                                                            >
                                                                <LucideIcons.Key size={14} /> <span className="hidden lg:inline">{u.is_initiated ? 'Révoquer' : 'Initier'}</span>
                                                            </button>
                                                        </div>
                                                    )}

                                                    {/* Menu des Badges */}
                                                    <div className="relative">
                                                        <button
                                                            onClick={() => setEditingBadgesFor(editingBadgesFor === u.id ? null : u.id)}
                                                            className="text-xs flex items-center justify-center gap-1.5 text-amber-600 hover:text-amber-800 font-bold border border-amber-200 px-3 py-1.5 rounded bg-amber-50 hover:bg-amber-100 shadow-sm transition-colors"
                                                            title="Gérer les Badges"
                                                        >
                                                            <Award size={14} /> <span className="hidden lg:inline">Badges</span>
                                                        </button>

                                                        {/* Dropdown des Badges */}
                                                        {editingBadgesFor === u.id && (
                                                            <>
                                                                <div className="fixed inset-0 z-10" onClick={() => setEditingBadgesFor(null)}></div>
                                                                <div className="absolute right-0 top-8 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-20 p-2 text-left animate-fade-in">
                                                                    <div className="text-[10px] font-bold text-gray-400 uppercase mb-2 px-1 border-b border-gray-100 pb-1">Attribuer / Retirer</div>
                                                                    <div className="space-y-1 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                                                                        {(dbBadges?.length ? dbBadges : typeof allBadgesToAssign !== 'undefined' ? allBadgesToAssign : []).map(badge => {
                                                                            const hasBadge = userBadges.includes(badge.id);
                                                                            const bIcon = badge.icon_name && LucideIcons[badge.icon_name] ? LucideIcons[badge.icon_name] : LucideIcons.Award;
                                                                            const IconComp = bIcon;
                                                                            return (
                                                                                <button
                                                                                    key={badge.id}
                                                                                    onClick={() => handleToggleBadge(u.id, badge.id, userBadges)}
                                                                                    className="w-full text-left px-2 py-1.5 text-xs font-bold rounded hover:bg-gray-100 flex items-center justify-between group transition-colors"
                                                                                >
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <IconComp size={14} className={hasBadge ? 'text-amber-500' : 'text-gray-400'} />
                                                                                        <span className={hasBadge ? 'text-gray-900' : 'text-gray-500'}>{badge.label}</span>
                                                                                    </div>
                                                                                    {hasBadge && <CheckCircle size={14} className="text-emerald-500" />}
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
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TabUsers;
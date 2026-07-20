// src/components/AdminDashboard.js

import React, { useState, useRef, useCallback } from 'react';
import { Shield, ArrowLeft, Crown, BarChart2, Award, Wrench, Bell, Coins, Scroll, Bug } from '../config/icons';
import { isSuperAdmin as checkSuperAdmin } from '../utils/authRoles';
import { useUserContext } from '../context/UserContext';
import TabUsers from './admin/TabUsers';
import TabStats from './admin/TabStats';
import TabForgeTitres from './admin/TabForgeTitres';
import TabRepairJournaux from './admin/TabRepairJournaux';
import TabNotifications from './admin/TabNotifications';
import TabUsageIA from './admin/TabUsageIA';
import TabIndicesVeritesAdmin from './admin/TabIndicesVeritesAdmin';
import TabErrorLogs from './admin/TabErrorLogs';

// ✨ FIX : On récupère userProfile depuis le routeur
export default function AdminDashboard({ onBack }) {
    const { session, userProfile } = useUserContext();
    const [activeTab, setActiveTab] = useState('users');
    const [mountedTabs, setMountedTabs] = useState(() => new Set(['users']));
    const tablistRef = useRef(null);

    const switchTab = useCallback((tab) => {
      setActiveTab(tab);
      setMountedTabs(prev => { const next = new Set(prev); next.add(tab); return next; });
    }, []);

    // ✨ L'œil de l'Architecte
    const isSuperAdmin = checkSuperAdmin(userProfile);

    const handleTablistKeyDown = (e) => {
      const tabs = Array.from(tablistRef.current?.querySelectorAll('[role=tab]') || []);
      const idx = tabs.findIndex(t => t === document.activeElement);
      if (idx === -1) return;
      let next = null;
      if (e.key === 'ArrowRight') { e.preventDefault(); next = tabs[(idx + 1) % tabs.length]; }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); next = tabs[(idx - 1 + tabs.length) % tabs.length]; }
      else if (e.key === 'Home') { e.preventDefault(); next = tabs[0]; }
      else if (e.key === 'End') { e.preventDefault(); next = tabs[tabs.length - 1]; }
      if (next) { next.click(); next.focus(); }
    };

    return (
        <section aria-label="Tableau de bord administrateur" className="max-w-5xl mx-auto p-4 md:p-6 pb-24">
            {/* En-tête */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2 whitespace-nowrap">
                    <Shield className="text-amber-600" /> Communauté & Métriques
                </h2>
                <button onClick={onBack} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 shadow-sm font-bold font-serif transition-colors">
                    <ArrowLeft size={16} /> Retour
                </button>
            </div>

            {/* Onglets de navigation */}
            <div ref={tablistRef} role="tablist" aria-label="Administration" onKeyDown={handleTablistKeyDown} className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
                <button id="admin-tab-users" role="tab" aria-selected={activeTab === 'users'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'users' ? 0 : -1} onClick={() => switchTab('users')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'users' ? 'text-amber-900 border-amber-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                    <Crown size={18} /> Utilisateurs
                </button>
                <button id="admin-tab-stats" role="tab" aria-selected={activeTab === 'stats'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'stats' ? 0 : -1} onClick={() => switchTab('stats')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'stats' ? 'text-blue-900 border-blue-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                    <BarChart2 size={18} /> Métriques
                </button>
                <button id="admin-tab-titres" role="tab" aria-selected={activeTab === 'titres'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'titres' ? 0 : -1} onClick={() => switchTab('titres')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'titres' ? 'text-purple-900 border-purple-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                    <Award size={18} /> {isSuperAdmin ? 'Forge des Titres' : 'Titres Honorifiques'}
                </button>
                {isSuperAdmin && (
                    <button id="admin-tab-repair" role="tab" aria-selected={activeTab === 'repair'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'repair' ? 0 : -1} onClick={() => switchTab('repair')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'repair' ? 'text-red-900 border-red-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                        <Wrench size={18} /> Reconstruction XP
                    </button>
                )}
                {isSuperAdmin && (
                    <button id="admin-tab-notifications" role="tab" aria-selected={activeTab === 'notifications'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'notifications' ? 0 : -1} onClick={() => switchTab('notifications')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'notifications' ? 'text-green-900 border-green-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                        <Bell size={18} /> Notifications
                    </button>
                )}
                {isSuperAdmin && (
                    <button id="admin-tab-usage_ia" role="tab" aria-selected={activeTab === 'usage_ia'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'usage_ia' ? 0 : -1} onClick={() => switchTab('usage_ia')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'usage_ia' ? 'text-amber-900 border-amber-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                        <Coins size={18} /> Usage IA
                    </button>
                )}
                {isSuperAdmin && (
                    <button id="admin-tab-secrets" role="tab" aria-selected={activeTab === 'secrets'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'secrets' ? 0 : -1} onClick={() => switchTab('secrets')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'secrets' ? 'text-teal-900 border-teal-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                        <Scroll size={18} /> Secrets du Monde
                    </button>
                )}
                {isSuperAdmin && (
                    <button id="admin-tab-error_logs" role="tab" aria-selected={activeTab === 'error_logs'} aria-controls="admin-tabpanel" tabIndex={activeTab === 'error_logs' ? 0 : -1} onClick={() => switchTab('error_logs')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'error_logs' ? 'text-rose-900 border-rose-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>
                        <Bug size={18} /> Bureau des Anomalies
                    </button>
                )}
            </div>

            {/* Contenu des onglets — montés une fois, cachés par CSS ensuite */}
            <div id="admin-tabpanel" role="tabpanel" aria-labelledby={`admin-tab-${activeTab}`}>
              {mountedTabs.has('users') && <div hidden={activeTab !== 'users'}><TabUsers /></div>}
              {mountedTabs.has('stats') && <div hidden={activeTab !== 'stats'}><TabStats /></div>}
              {mountedTabs.has('titres') && <div hidden={activeTab !== 'titres'}><TabForgeTitres /></div>}
              {isSuperAdmin && mountedTabs.has('repair') && <div hidden={activeTab !== 'repair'}><TabRepairJournaux /></div>}
              {isSuperAdmin && mountedTabs.has('notifications') && <div hidden={activeTab !== 'notifications'}><TabNotifications /></div>}
              {isSuperAdmin && mountedTabs.has('usage_ia') && <div hidden={activeTab !== 'usage_ia'}><TabUsageIA /></div>}
              {isSuperAdmin && mountedTabs.has('secrets') && <div hidden={activeTab !== 'secrets'}><TabIndicesVeritesAdmin /></div>}
              {isSuperAdmin && mountedTabs.has('error_logs') && <div hidden={activeTab !== 'error_logs'}><TabErrorLogs /></div>}
            </div>
        </section>
    );
}
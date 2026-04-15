// src/components/admin/TabStats.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabase';
import { RefreshCcw, Users, FileText, Activity, BookOpen } from 'lucide-react';

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

export default TabStats;
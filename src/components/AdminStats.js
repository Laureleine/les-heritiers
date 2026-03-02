// src/components/AdminStats.js
// 9.6.0

import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { ArrowLeft, BarChart2, Users, FileText, BookOpen, Activity, RefreshCcw } from 'lucide-react';

export default function AdminStats({ onBack }) {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      // On ne récupère QUE les dates pour économiser la bande passante
      const [
        { data: profiles },
        { data: characters },
        { data: requests }
      ] = await Promise.all([
        supabase.from('profiles').select('created_at'),
        supabase.from('characters').select('created_at, updated_at'),
        supabase.from('data_change_requests').select('created_at')
      ]);

      const dailyData = {};

      const addCount = (dateString, key) => {
        if (!dateString) return;
        const dateObj = new Date(dateString);
        // Formatage "01/03/2026"
        const dateStr = dateObj.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        
        if (!dailyData[dateStr]) {
          dailyData[dateStr] = { 
            date: dateStr, 
            newUsers: 0, 
            newChars: 0, 
            updatedChars: 0, 
            encyclopedia: 0, 
            timestamp: dateObj.setHours(0,0,0,0) 
          };
        }
        dailyData[dateStr][key]++;
      };

      // 1. Nouveaux Utilisateurs
      profiles?.forEach(p => addCount(p.created_at, 'newUsers'));
      
      // 2. Personnages (Créations et Mises à jour)
      characters?.forEach(c => {
        addCount(c.created_at, 'newChars');
        // Si mis à jour à une date différente de la création
        if (c.updated_at && c.created_at !== c.updated_at) {
          addCount(c.updated_at, 'updatedChars');
        }
      });

      // 3. Propositions Encyclopédie
      requests?.forEach(r => addCount(r.created_at, 'encyclopedia'));

      // Tri chronologique (du plus récent au plus ancien) et limite aux 14 derniers jours
      const sortedStats = Object.values(dailyData)
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 14);

      setStats(sortedStats);
    } catch (error) {
      console.error("Erreur chargement statistiques :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2">
          <BarChart2 className="text-amber-600" />
          Astrolabe des Métriques
        </h2>
        <div className="flex gap-3">
          <button onClick={fetchStats} className="px-4 py-2 bg-white text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 shadow-sm font-bold">
            <RefreshCcw size={16} className={loading ? "animate-spin" : ""} /> <span className="hidden sm:inline">Rafraîchir</span>
          </button>
          <button onClick={onBack} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 shadow-sm font-bold font-serif">
            <ArrowLeft size={16} /> Retour
          </button>
        </div>
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
                    
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.newUsers > 0 ? 'bg-blue-100 text-blue-800' : 'text-gray-300'}`}>
                        {day.newUsers > 0 ? `+ ${day.newUsers}` : '-'}
                      </span>
                    </td>
                    
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.newChars > 0 ? 'bg-green-100 text-green-800' : 'text-gray-300'}`}>
                        {day.newChars > 0 ? `+ ${day.newChars}` : '-'}
                      </span>
                    </td>
                    
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.updatedChars > 0 ? 'bg-purple-100 text-purple-800' : 'text-gray-300'}`}>
                        {day.updatedChars > 0 ? day.updatedChars : '-'}
                      </span>
                    </td>
                    
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold text-sm ${day.encyclopedia > 0 ? 'bg-rose-100 text-rose-800' : 'text-gray-300'}`}>
                        {day.encyclopedia > 0 ? `+ ${day.encyclopedia}` : '-'}
                      </span>
                    </td>
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
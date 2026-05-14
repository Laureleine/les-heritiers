// src/components/admin/TabStats.js
import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../config/supabase';
import { RefreshCcw, Users, FileText, Activity, BarChart2, List, Sparkles, Shield, Eye } from '../../config/icons';

function TabStats() {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('table');
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000).toISOString();

      // ── 1. Totaux (via RPC SECURITY DEFINER pour contourner RLS) ───
      const { data: totalsData, error: totalsError } = await supabase.rpc('get_admin_stats');
      if (totalsError || !totalsData) {
        console.error("Erreur get_admin_stats :", totalsError);
        throw totalsError || new Error('get_admin_stats returned null');
      }
      const totalProfiles = totalsData.total_profiles;
      const totalChars = totalsData.total_characters;
      const sealedChars = totalsData.total_sealed;
      const totalCercles = totalsData.total_cercles;

      // ── 2. Répartition types de fées ───────────────────────
      const { data: feeData } = await supabase
        .from('characters')
        .select('type_fee')
        .not('type_fee', 'is', null);

      const feeCounts = {};
      if (feeData) {
        feeData.forEach(c => {
          const t = c.type_fee || 'Inconnu';
          feeCounts[t] = (feeCounts[t] || 0) + 1;
        });
      }

      // ── 3. Répartition profils majeurs/mineurs ─────────────
      const { data: profilData } = await supabase
        .from('characters')
        .select('profils')
        .not('profils', 'is', null);

      const majeurCounts = {};
      const mineurCounts = {};
      if (profilData) {
        profilData.forEach(c => {
          const p = c.profils || {};
          if (p.majeur?.nom) majeurCounts[p.majeur.nom] = (majeurCounts[p.majeur.nom] || 0) + 1;
          if (p.mineur?.nom) mineurCounts[p.mineur.nom] = (mineurCounts[p.mineur.nom] || 0) + 1;
        });
      }

      // ── 4. Activité quotidienne (30 derniers jours) ────────
      const [{ data: profiles }, { data: characters }, { data: requests }] = await Promise.all([
        supabase.from('profiles').select('created_at').gte('created_at', thirtyDaysAgo),
        supabase.from('characters').select('created_at, updated_at').or(`created_at.gte.${thirtyDaysAgo},updated_at.gte.${thirtyDaysAgo}`),
        supabase.from('data_change_requests').select('created_at').gte('created_at', thirtyDaysAgo),
      ]);

      const dailyData = {};
      const addCount = (dateStr, key) => {
        if (!dateStr) return;
        const d = new Date(dateStr).toLocaleDateString('fr-FR');
        if (!dailyData[d]) dailyData[d] = { date: d, newUsers: 0, newChars: 0, updatedChars: 0, encyclopedia: 0, sortValue: new Date(dateStr).setHours(0, 0, 0, 0) };
        dailyData[d][key]++;
      };
      if (profiles) profiles.forEach(p => addCount(p.created_at, 'newUsers'));
      if (characters) characters.forEach(c => {
        addCount(c.created_at, 'newChars');
        if (c.updated_at && c.updated_at !== c.created_at) addCount(c.updated_at, 'updatedChars');
      });
      if (requests) requests.forEach(r => addCount(r.created_at, 'encyclopedia'));

      const sortedDays = Object.values(dailyData).sort((a, b) => b.sortValue - a.sortValue);

      setStats({
        totals: {
          profiles: totalProfiles,
          characters: totalChars,
          sealed: sealedChars,
          cercles: totalCercles,
        },
        fees: Object.entries(feeCounts).sort((a, b) => b[1] - a[1]),
        profilsMajeurs: Object.entries(majeurCounts).sort((a, b) => b[1] - a[1]),
        profilsMineurs: Object.entries(mineurCounts).sort((a, b) => b[1] - a[1]),
        activity: sortedDays,
        });
    } catch (error) {
      console.error("Erreur stats :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStats(); /* eslint-disable-line */ }, []);

  const maxFee = useMemo(() => Math.max(...(stats?.fees?.map(([, c]) => c) || [1]), 1), [stats?.fees]);
  const maxMaj = useMemo(() => Math.max(...(stats?.profilsMajeurs?.map(([, c]) => c) || [1]), 1), [stats?.profilsMajeurs]);
  const maxMin = useMemo(() => Math.max(...(stats?.profilsMineurs?.map(([, c]) => c) || [1]), 1), [stats?.profilsMineurs]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* BARRE DE CONTRÔLE */}
      <div className="flex flex-wrap items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-xl p-1 shadow-sm">
            <button onClick={() => setViewMode('table')} className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${viewMode === 'table' ? 'bg-amber-600 text-white shadow-sm' : 'text-stone-500 hover:bg-stone-100'}`}><List size={14} /> Tableau</button>
            <button onClick={() => setViewMode('chart')} className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${viewMode === 'chart' ? 'bg-amber-600 text-white shadow-sm' : 'text-stone-500 hover:bg-stone-100'}`}><BarChart2 size={14} /> Graphiques</button>
          </div>
          <button onClick={fetchStats} className="p-2 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 shadow-sm">
            <RefreshCcw size={16} className={loading ? "animate-spin text-blue-600" : "text-stone-500"} />
          </button>
        </div>
      </div>

      {loading && !stats ? (
        <div className="text-center py-16 text-stone-400 font-serif animate-pulse">Consultation des archives spatio-temporelles...</div>
      ) : !stats ? (
        <div className="text-center py-16 text-stone-400 italic">Aucune donnée disponible.</div>
      ) : (
        <>
          {/* CARTES TOTAUX */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: Users, label: 'H\u00e9ritiers', value: stats.totals.profiles, bg: 'bg-blue-100', text: 'text-blue-600' },
              { icon: FileText, label: 'Personnages', value: stats.totals.characters, bg: 'bg-green-100', text: 'text-green-600' },
              { icon: Shield, label: 'Scell\u00e9s', value: stats.totals.sealed, bg: 'bg-purple-100', text: 'text-purple-600' },
              { icon: Eye, label: 'Cercles', value: stats.totals.cercles, bg: 'bg-amber-100', text: 'text-amber-600' },
            ].map(card => (
              <div key={card.label} className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.text} shrink-0`}>
                  <card.icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-stone-800">{card.value}</div>
                  <div className="text-xs text-stone-500 font-bold uppercase tracking-wider">{card.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* SECTIONS CONDITIONNELLES : TABLEAU vs GRAPHIQUE */}
          {viewMode === 'table' ? (
            <>
              {/* ── TABLEAU : TYPES DE FÉES ───────────────── */}
              {stats.fees.length > 0 && (
                <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-3 border-b border-stone-200">
                    <h3 className="font-bold text-stone-800 text-sm flex items-center gap-2"><Sparkles size={16} className="text-indigo-600" /> Types de Fées</h3>
                  </div>
                  <table className="w-full text-left">
                    <thead><tr className="text-xs text-stone-500 uppercase tracking-wider"><th className="p-3 font-bold">Fée</th><th className="p-3 font-bold text-right">Nbre</th><th className="p-3 font-bold text-right">%</th></tr></thead>
                    <tbody className="divide-y divide-stone-100">
                      {stats.fees.map(([name, count]) => (
                        <tr key={name} className="hover:bg-indigo-50/30">
                          <td className="p-3 font-bold text-stone-700 text-sm">{name}</td>
                          <td className="p-3 text-right font-bold text-stone-800">{count}</td>
                          <td className="p-3 text-right text-stone-500 text-sm">{((count / stats.totals.characters) * 100).toFixed(1)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* ── TABLEAU : PROFILS ─────────────────── */}
              {stats.profilsMajeurs.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3 border-b border-stone-200">
                      <h3 className="font-bold text-stone-800 text-sm flex items-center gap-2"><Users size={16} className="text-blue-600" /> Profils Majeurs</h3>
                    </div>
                    <table className="w-full text-left">
                      <thead><tr className="text-xs text-stone-500 uppercase tracking-wider"><th className="p-3 font-bold">Profil</th><th className="p-3 font-bold text-right">Nbre</th></tr></thead>
                      <tbody className="divide-y divide-stone-100">
                        {stats.profilsMajeurs.map(([name, count]) => (
                          <tr key={name} className="hover:bg-blue-50/30"><td className="p-3 font-bold text-stone-700 text-sm">{name}</td><td className="p-3 text-right font-bold text-stone-800">{count}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-3 border-b border-stone-200">
                      <h3 className="font-bold text-stone-800 text-sm flex items-center gap-2"><Users size={16} className="text-emerald-600" /> Profils Mineurs</h3>
                    </div>
                    <table className="w-full text-left">
                      <thead><tr className="text-xs text-stone-500 uppercase tracking-wider"><th className="p-3 font-bold">Profil</th><th className="p-3 font-bold text-right">Nbre</th></tr></thead>
                      <tbody className="divide-y divide-stone-100">
                        {stats.profilsMineurs.map(([name, count]) => (
                          <tr key={name} className="hover:bg-emerald-50/30"><td className="p-3 font-bold text-stone-700 text-sm">{name}</td><td className="p-3 text-right font-bold text-stone-800">{count}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* ── GRAPHIQUE : TYPES DE FÉES ────────────── */}
              {stats.fees.length > 0 && (
                <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm">
                  <h3 className="font-bold text-stone-800 text-sm mb-4 flex items-center gap-2"><Sparkles size={16} className="text-indigo-600" /> Types de Fées</h3>
                  <div className="space-y-2">
                    {stats.fees.slice(0, 15).map(([name, count]) => (
                      <div key={name} className="flex items-center gap-3">
                        <span className="w-28 text-xs font-bold text-stone-700 text-right truncate" title={name}>{name}</span>
                        <div className="flex-1 h-5 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-end pr-2 transition-all duration-500" style={{ width: `${(count / maxFee) * 100}%` }}>
                            <span className="text-[10px] text-white font-bold drop-shadow-sm">{count}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── GRAPHIQUE : PROFILS ──────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stats.profilsMajeurs.length > 0 && (
                  <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm">
                    <h3 className="font-bold text-stone-800 text-sm mb-4 flex items-center gap-2"><Users size={16} className="text-blue-600" /> Profils Majeurs</h3>
                    <div className="space-y-2">
                      {stats.profilsMajeurs.map(([name, count]) => (
                        <div key={name} className="flex items-center gap-3">
                          <span className="w-24 text-xs font-bold text-stone-700 text-right truncate">{name}</span>
                          <div className="flex-1 h-5 bg-stone-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-end pr-2 transition-all duration-500" style={{ width: `${(count / maxMaj) * 100}%` }}>
                              <span className="text-[10px] text-white font-bold drop-shadow-sm">{count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {stats.profilsMineurs.length > 0 && (
                  <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm">
                    <h3 className="font-bold text-stone-800 text-sm mb-4 flex items-center gap-2"><Users size={16} className="text-emerald-600" /> Profils Mineurs</h3>
                    <div className="space-y-2">
                      {stats.profilsMineurs.map(([name, count]) => (
                        <div key={name} className="flex items-center gap-3">
                          <span className="w-24 text-xs font-bold text-stone-700 text-right truncate">{name}</span>
                          <div className="flex-1 h-5 bg-stone-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-end pr-2 transition-all duration-500" style={{ width: `${(count / maxMin) * 100}%` }}>
                              <span className="text-[10px] text-white font-bold drop-shadow-sm">{count}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* ── ACTIVITÉ (toujours en tableau) ──────── */}
          {stats.activity.length > 0 && (
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-3 border-b border-stone-200">
                <h3 className="font-bold text-stone-800 text-sm flex items-center gap-2"><Activity size={16} className="text-amber-600" /> Activit\u00e9 r\u00e9cente</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-xs text-stone-500 uppercase tracking-wider">
                    <tr><th className="p-3 font-bold">Date</th><th className="p-3 font-bold text-center">Nouveaux Inscrits</th><th className="p-3 font-bold text-center">Créations Persos</th><th className="p-3 font-bold text-center">Fiches Mises à jour</th><th className="p-3 font-bold text-center">Contributions Lore</th></tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {stats.activity.slice(0, 60).map(day => (
                      <tr key={day.date} className="hover:bg-amber-50/30">
                        <td className="p-3 font-bold text-stone-700 text-sm">{day.date}</td>
                        {['newUsers', 'newChars', 'updatedChars', 'encyclopedia'].map(k => (
                          <td key={k} className="p-3 text-center"><span className={`inline-block px-3 py-1 rounded-full font-bold text-xs ${day[k] > 0 ? 'bg-stone-100 text-stone-800' : 'text-stone-300'}`}>{day[k] > 0 ? day[k] : '-'}</span></td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TabStats;

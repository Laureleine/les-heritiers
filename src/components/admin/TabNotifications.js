// src/components/admin/TabNotifications.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabase';
import { Bell, Send, Users, CheckCircle, XCircle, Clock } from '../../config/icons';
import { notifyUsers, getVersionType } from '../../utils/SystemeServices';
import { APP_VERSION } from '../../version';

export default function TabNotifications() {
    const [version, setVersion] = useState(APP_VERSION);
    const [changelog, setChangelog] = useState('');
    const [sending, setSending] = useState(false);
    const [stats, setStats] = useState(null);
    const [history, setHistory] = useState([]);
    const [loadingStats, setLoadingStats] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoadingStats(true);

            const [{ data: statsData }, { data: historyData }] = await Promise.all([
                supabase.rpc('get_notification_stats'),
                supabase.from('notification_history').select('*').order('created_at', { ascending: false }).limit(20)
            ]);

            if (statsData) setStats(statsData);

            if (historyData) setHistory(historyData);
            setLoadingStats(false);
        };
        loadData();
    }, []);

    const versionType = getVersionType(version);
    const targetCount = stats ? (versionType === 'major' ? stats.major : stats.minor) : 0;

    const handleSend = async () => {
        if (!version.trim() || !changelog.trim()) return;
        if (!window.confirm(`Envoyer une notification à ${targetCount} abonné(s) pour la v${version} ?`)) return;

        setSending(true);
        try {
            const count = await notifyUsers(version, changelog);
            const newEntry = {
                id: Date.now(),
                version,
                version_type: versionType,
                changelog,
                created_at: new Date().toISOString(),
                email_status: count > 0 ? 'sent' : 'no_recipients',
            };
            setHistory(prev => [newEntry, ...prev]);
            setChangelog('');
            alert(`✅ Notification envoyée à ${count} abonné(s).`);
        } catch (err) {
            alert('Erreur lors de l\'envoi : ' + err.message);
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="space-y-8 animate-fade-in">

            {/* Stats abonnés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {loadingStats ? (
                    <div className="col-span-3 text-center py-8 text-stone-400">Chargement des statistiques...</div>
                ) : (
                    <>
                        <StatCard icon={<Users size={20} />} label="Abonnés total" value={stats?.total ?? 0} color="blue" />
                        <StatCard icon={<Bell size={20} />} label="Versions majeures" value={stats?.major ?? 0} color="amber" />
                        <StatCard icon={<Bell size={20} />} label="Versions mineures" value={stats?.minor ?? 0} color="stone" />
                    </>
                )}
            </div>

            {/* Formulaire d'envoi */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-5 flex items-center gap-2">
                    <Send size={18} className="text-amber-600" /> Envoyer une notification de mise à jour
                </h3>

                <div className="space-y-4">
                    <div className="flex gap-4 items-end">
                        <div className="flex-1">
                            <label className="block text-sm font-bold text-stone-700 mb-1">Numéro de version</label>
                            <input
                                type="text"
                                value={version}
                                onChange={e => setVersion(e.target.value)}
                                className="w-full p-2 border border-stone-300 rounded-lg font-mono text-sm bg-stone-50 focus:ring-2 focus:ring-amber-500"
                                placeholder="ex: 15.18.0"
                            />
                        </div>
                        <div className="pb-1">
                            <span className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider ${
                                versionType === 'major'
                                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                    : 'bg-stone-100 text-stone-600 border border-stone-300'
                            }`}>
                                {versionType === 'major' ? 'Majeure' : 'Mineure'}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-stone-700 mb-1">Résumé du changelog</label>
                        <textarea
                            value={changelog}
                            onChange={e => setChangelog(e.target.value)}
                            rows={5}
                            className="w-full p-3 border border-stone-300 rounded-lg text-sm bg-stone-50 focus:ring-2 focus:ring-amber-500 font-mono resize-none"
                            placeholder="Décrivez les changements de cette version..."
                        />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <p className="text-sm text-stone-500">
                            {targetCount > 0
                                ? <><strong className="text-stone-700">{targetCount} abonné(s)</strong> recevront cet email.</>
                                : <span className="text-amber-600">Aucun abonné pour ce type de version.</span>
                            }
                        </p>
                        <button
                            onClick={handleSend}
                            disabled={sending || !version.trim() || !changelog.trim() || targetCount === 0}
                            className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-stone-300 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors shadow-sm"
                        >
                            {sending ? (
                                <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Envoi...</>
                            ) : (
                                <><Send size={16} /> Envoyer</>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Historique */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-stone-500" /> Historique des notifications
                </h3>

                {history.length === 0 ? (
                    <p className="text-stone-400 text-sm italic">Aucune notification envoyée.</p>
                ) : (
                    <div className="space-y-2">
                        {history.map(entry => (
                            <div key={entry.id} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                                {entry.email_status === 'sent'
                                    ? <CheckCircle size={16} className="text-green-500 shrink-0" />
                                    : <XCircle size={16} className="text-red-400 shrink-0" />
                                }
                                <div className="flex-1 min-w-0">
                                    <span className="font-mono font-bold text-stone-800 text-sm">v{entry.version}</span>
                                    <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold ${
                                        entry.version_type === 'major' ? 'bg-amber-100 text-amber-700' : 'bg-stone-100 text-stone-500'
                                    }`}>{entry.version_type}</span>
                                </div>
                                <span className="text-xs text-stone-400 shrink-0">
                                    {new Date(entry.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color }) {
    const colors = {
        blue: 'bg-blue-50 border-blue-200 text-blue-700',
        amber: 'bg-amber-50 border-amber-200 text-amber-700',
        stone: 'bg-stone-50 border-stone-200 text-stone-700',
    };
    return (
        <div className={`p-5 rounded-xl border ${colors[color]} flex items-center gap-4`}>
            <div className="opacity-70">{icon}</div>
            <div>
                <div className="text-2xl font-bold font-serif">{value}</div>
                <div className="text-sm opacity-80">{label}</div>
            </div>
        </div>
    );
}

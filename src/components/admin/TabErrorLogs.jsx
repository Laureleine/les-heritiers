import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../config/supabase';
import { showInAppNotification } from '../../utils/SystemeServices';
import { Copy, CheckCircle, RefreshCw, Filter } from '../../config/icons';

const TYPE_LABELS = {
    crash: { label: 'Crash', color: 'bg-red-100 text-red-800 border-red-200' },
    error: { label: 'Erreur', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    warn: { label: 'Avertissement', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    unhandled_promise: { label: 'Promesse rejetée', color: 'bg-purple-100 text-purple-800 border-purple-200' },
};

function StatusBadge({ log }) {
    if (log.resolved_at) {
        return <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 font-bold">✅ Résolu</span>;
    }
    if (log.transmitted_at) {
        return <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-bold">🟡 Transmis</span>;
    }
    return <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 font-bold">🔴 Nouveau</span>;
}

function formatDate(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function buildCopyBlock(log) {
    const lines = [
        `[ERROR LOG #${log.id?.slice(0, 8)} — ${formatDate(log.created_at)}]`,
        `Type      : ${log.type}`,
        `URL       : ${log.url || '—'}`,
        `User      : ${log.user_id?.slice(0, 8) || 'anonyme'}`,
        log.character_id ? `Personnage: ${log.character_id.slice(0, 8)}` : null,
        log.cercle_id ? `Cercle    : ${log.cercle_id.slice(0, 8)}` : null,
        `Occurrences: ×${log.occurrence_count} (dernière : ${formatDate(log.last_seen_at)})`,
        ``,
        `Message:`,
        log.message,
    ];
    if (log.stack) {
        lines.push('', 'Stack:', log.stack);
    }
    if (log.component_stack) {
        lines.push('', 'Component stack:', log.component_stack);
    }
    if (log.extra) {
        lines.push('', 'Extra:', typeof log.extra === 'object' ? JSON.stringify(log.extra, null, 2) : log.extra);
    }
    if (log.user_agent) {
        lines.push('', `User-agent: ${log.user_agent}`);
    }
    return lines.filter(l => l !== null).join('\n');
}

export default function TabErrorLogs() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('active'); // 'active' | 'new' | 'transmitted' | 'archived'
    const [expanded, setExpanded] = useState(null);
    const [copied, setCopied] = useState(false);

    const fetchLogs = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('error_logs')
            .select('*')
            .order('last_seen_at', { ascending: false })
            .limit(200);
        if (error) {
            showInAppNotification('Impossible de charger les anomalies.', 'error');
        } else {
            setLogs(data || []);
        }
        setLoading(false);
    }, []);

    useEffect(() => { fetchLogs(); }, [fetchLogs]);

    const handleCopy = async (log) => {
        const block = buildCopyBlock(log);
        try {
            await navigator.clipboard.writeText(block);
            // Marquer comme transmis
            await supabase
                .from('error_logs')
                .update({ transmitted_at: new Date().toISOString() })
                .eq('id', log.id);
            setLogs(prev => prev.map(l => l.id === log.id ? { ...l, transmitted_at: new Date().toISOString() } : l));
            showInAppNotification('Anomalie copiée et marquée comme transmise.', 'success');
        } catch {
            showInAppNotification('Impossible de copier.', 'error');
        }
    };

    const handleResolve = async (log) => {
        const now = new Date().toISOString();
        await supabase.from('error_logs').update({ resolved_at: now }).eq('id', log.id);
        setLogs(prev => prev.map(l => l.id === log.id ? { ...l, resolved_at: now } : l));
    };

    const archiveAll = async (ids) => {
        if (ids.length === 0) return;
        const now = new Date().toISOString();
        await supabase.from('error_logs').update({ resolved_at: now }).in('id', ids);
        setLogs(prev => prev.map(l => ids.includes(l.id) ? { ...l, resolved_at: now } : l));
    };

    const handleCopyAll = async () => {
        const date = new Date().toLocaleDateString('fr-FR');
        const blocks = filtered.map(log => buildCopyBlock(log));
        const texte = `Bureau des Anomalies — ${date}\n${'─'.repeat(40)}\n\n${blocks.join('\n\n─────\n\n')}`;
        try {
            await navigator.clipboard.writeText(texte);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
            const ids = filtered.filter(l => !l.resolved_at).map(l => l.id);
            await archiveAll(ids);
        } catch {
            showInAppNotification('Impossible de copier.', 'error');
        }
    };

    const handleResolveAll = async () => {
        const ids = filtered.filter(l => !l.resolved_at).map(l => l.id);
        if (ids.length === 0) return;
        await archiveAll(ids);
        showInAppNotification(`${ids.length} anomalie${ids.length > 1 ? 's' : ''} archivée${ids.length > 1 ? 's' : ''}.`, 'success');
    };

    const filtered = logs.filter(log => {
        if (filter === 'active') return !log.resolved_at;
        if (filter === 'new') return !log.transmitted_at && !log.resolved_at;
        if (filter === 'transmitted') return !!log.transmitted_at && !log.resolved_at;
        if (filter === 'archived') return !!log.resolved_at;
        return true;
    });

    const newCount = logs.filter(l => !l.transmitted_at && !l.resolved_at).length;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h2 className="text-xl font-bold font-serif text-rose-900">Bureau des Anomalies</h2>
                    {newCount > 0 && (
                        <p className="text-sm text-rose-600 mt-0.5">{newCount} anomalie{newCount > 1 ? 's' : ''} non transmise{newCount > 1 ? 's' : ''}</p>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1 bg-stone-100 rounded-lg p-1">
                        {[['active', 'Actifs'], ['new', '🔴 Nouveaux'], ['transmitted', '🟡 Transmis'], ['archived', '📦 Archivés']].map(([val, label]) => (
                            <button
                                key={val}
                                onClick={() => setFilter(val)}
                                className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${filter === val ? 'bg-white shadow text-rose-800' : 'text-stone-500 hover:text-stone-700'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    {filtered.length > 0 && (
                        <>
                            <button
                                onClick={handleCopyAll}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${copied ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-50'}`}
                            >
                                <Copy size={13} /> {copied ? 'Copié !' : 'Tout copier'}
                            </button>
                            <button
                                onClick={handleResolveAll}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border bg-white text-stone-500 border-stone-300 hover:bg-green-50 hover:text-green-700 hover:border-green-300 transition-all"
                            >
                                <CheckCircle size={13} /> Tout résoudre
                            </button>
                        </>
                    )}
                    <button
                        onClick={fetchLogs}
                        className="p-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-500"
                        title="Rafraîchir"
                    >
                        <RefreshCw size={16} />
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-12 text-stone-400 font-serif italic animate-pulse">Consultation du Registre…</div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-12 text-stone-400 font-serif italic">Aucune anomalie dans cette catégorie.</div>
            ) : (
                <div className="space-y-2">
                    {filtered.map(log => {
                        const typeInfo = TYPE_LABELS[log.type] || { label: log.type, color: 'bg-gray-100 text-gray-700 border-gray-200' };
                        const isOpen = expanded === log.id;
                        return (
                            <div key={log.id} className="border border-stone-200 rounded-xl bg-white overflow-hidden">
                                {/* En-tête de ligne */}
                                <div
                                    className="flex items-start gap-3 p-4 cursor-pointer hover:bg-stone-50 transition-colors"
                                    onClick={() => setExpanded(isOpen ? null : log.id)}
                                >
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${typeInfo.color}`}>{typeInfo.label}</span>
                                            <StatusBadge log={log} />
                                            {log.occurrence_count > 1 && (
                                                <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200 font-bold">×{log.occurrence_count}</span>
                                            )}
                                            <span className="text-xs text-stone-400">{formatDate(log.last_seen_at)}</span>
                                        </div>
                                        <p className="text-sm font-mono text-stone-800 truncate">{log.message}</p>
                                        {log.url && <p className="text-xs text-stone-400 mt-0.5">{log.url}</p>}
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <button
                                            onClick={e => { e.stopPropagation(); handleCopy(log); }}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-white text-xs font-bold hover:bg-stone-700 transition-colors"
                                            title="Copier pour Claude"
                                        >
                                            <Copy size={13} /> Copier
                                        </button>
                                        {!log.resolved_at && (
                                            <button
                                                onClick={e => { e.stopPropagation(); handleResolve(log); }}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-300 text-green-700 text-xs font-bold hover:bg-green-50 transition-colors"
                                                title="Marquer comme résolu"
                                            >
                                                <CheckCircle size={13} /> Résolu
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Détail déplié */}
                                {isOpen && (
                                    <div className="border-t border-stone-100 p-4 space-y-3 bg-stone-50">
                                        {log.stack && (
                                            <div>
                                                <p className="text-xs font-bold text-stone-500 uppercase mb-1">Stack</p>
                                                <pre className="text-xs font-mono text-stone-700 whitespace-pre-wrap break-all bg-white border border-stone-200 rounded p-3 max-h-48 overflow-y-auto">{log.stack}</pre>
                                            </div>
                                        )}
                                        {log.component_stack && (
                                            <div>
                                                <p className="text-xs font-bold text-stone-500 uppercase mb-1">Component Stack</p>
                                                <pre className="text-xs font-mono text-stone-700 whitespace-pre-wrap break-all bg-white border border-stone-200 rounded p-3 max-h-32 overflow-y-auto">{log.component_stack}</pre>
                                            </div>
                                        )}
                                        {log.extra && (
                                            <div>
                                                <p className="text-xs font-bold text-stone-500 uppercase mb-1">Contexte</p>
                                                <pre className="text-xs font-mono text-stone-700 bg-white border border-stone-200 rounded p-3">{typeof log.extra === 'object' ? JSON.stringify(log.extra, null, 2) : log.extra}</pre>
                                            </div>
                                        )}
                                        <div className="grid grid-cols-2 gap-2 text-xs text-stone-500">
                                            <div><span className="font-bold">ID :</span> {log.id}</div>
                                            <div><span className="font-bold">User :</span> {log.user_id || '—'}</div>
                                            <div><span className="font-bold">Personnage :</span> {log.character_id || '—'}</div>
                                            <div><span className="font-bold">Cercle :</span> {log.cercle_id || '—'}</div>
                                            {log.transmitted_at && <div><span className="font-bold">Transmis à Claude :</span> {formatDate(log.transmitted_at)}</div>}
                                            {log.resolved_at && <div><span className="font-bold">Résolu le :</span> {formatDate(log.resolved_at)}</div>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

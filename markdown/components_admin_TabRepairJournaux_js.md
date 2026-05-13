// src/components/admin/TabRepairJournaux.js
// Onglet super_admin : Reconstruction sélective du journal des flux d'XP.
//
// Stratégie de merge :
//   - On CONSERVE les entrées GAIN (attributions XP joueur — irreconstruisibles)
//   - On REMPLACE toutes les DEPENSE/REMBOURSEMENT par la reconstruction

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../../config/supabase';
import { loadFairyTypes, loadSocialItems } from '../../utils/supabaseGameData';
import { Search, X, AlertTriangle, CheckCircle } from '../../config/icons';
import {
    mapDbCharForReconstruction,
    journalNeedsRepair,
    buildRepairedJournal,
    computeXpDepenseFromJournal
} from '../../utils/repairJournaux';

// ============================================================================
// CONSTANTES
// ============================================================================
const STATUS = {
    PENDING:  'pending',   // Nécessite réparation
    OK:       'ok',        // Journal déjà complet
    REPAIRED: 'repaired',  // Réparé pendant cette session
    SKIPPED:  'skipped',   // Pas de stats_scellees → impossible
    ERROR:    'error',
};

const STATUS_META = {
    [STATUS.PENDING]:  { label: '⏳ À réparer',        badge: 'bg-orange-100 text-orange-700 border-orange-200' },
    [STATUS.OK]:       { label: '✅ Complet',           badge: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    [STATUS.REPAIRED]: { label: '✨ Réparé',            badge: 'bg-blue-100 text-blue-700 border-blue-200' },
    [STATUS.SKIPPED]:  { label: '⚠️ Sans plancher',    badge: 'bg-amber-100 text-amber-700 border-amber-200' },
    [STATUS.ERROR]:    { label: '❌ Erreur',            badge: 'bg-red-100 text-red-700 border-red-200' },
};

// ============================================================================
// MODALE DE CONFIRMATION
// ============================================================================
function ConfirmModal({ target, onConfirm, onCancel }) {
    if (!target) return null;
    const { row, preview } = target;
    const journal = row.dbChar.data?.historique_xp || [];
    const gainsBefore  = journal.filter(t => t.type === 'GAIN').length;
    const depBefore    = journal.filter(t => t.type === 'DEPENSE').length;
    const gainsAfter   = preview.filter(t => t.type === 'GAIN').length;
    const depAfter     = preview.filter(t => t.type === 'DEPENSE').length;
    const newXpDepense = computeXpDepenseFromJournal(preview);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onCancel}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full p-6 animate-fade-in-up" onClick={e => e.stopPropagation()}>
                <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={22} />
                    <div>
                        <h3 className="font-serif font-bold text-gray-900 text-lg leading-tight">
                            Reconstruire le journal de<br />
                            <span className="text-amber-800">{row.dbChar.nom}</span> ?
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Cette opération écrase les dépenses actuelles.</p>
                    </div>
                </div>

                {/* Tableau avant / après */}
                <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden mb-5">
                    <div className="grid grid-cols-3 text-[11px] font-bold text-stone-500 uppercase tracking-wider border-b border-stone-200">
                        <div className="p-2 border-r border-stone-200">Données</div>
                        <div className="p-2 text-center border-r border-stone-200">Avant</div>
                        <div className="p-2 text-center text-blue-700">Après</div>
                    </div>
                    <div className="grid grid-cols-3 text-sm divide-y divide-stone-100">
                        <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Entrées GAIN</div>
                        <div className="p-2 text-center text-stone-700 border-r border-stone-200">{gainsBefore}</div>
                        <div className="p-2 text-center text-blue-700 font-bold">{gainsAfter}</div>

                        <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Entrées DÉPENSE</div>
                        <div className="p-2 text-center text-stone-700 border-r border-stone-200">{depBefore}</div>
                        <div className="p-2 text-center text-blue-700 font-bold">{depAfter}</div>

                        <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">Total entrées</div>
                        <div className="p-2 text-center text-stone-700 border-r border-stone-200">{journal.length}</div>
                        <div className="p-2 text-center text-blue-700 font-bold">{preview.length}</div>

                        <div className="p-2 text-stone-600 border-r border-stone-200 font-medium">XP dépensé</div>
                        <div className="p-2 text-center text-stone-700 border-r border-stone-200">{row.dbChar.xp_depense}</div>
                        <div className="p-2 text-center text-blue-700 font-bold">{newXpDepense}</div>
                    </div>
                </div>

                <p className="text-xs text-stone-500 mb-5">
                    Les entrées <strong>GAIN</strong> sont préservées. Les <strong>DÉPENSES</strong> sont recalculées
                    depuis le Plancher de Verre (<code>stats_scellees</code>).
                </p>

                <div className="flex gap-3">
                    <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-stone-100 text-stone-700 rounded-lg font-bold hover:bg-stone-200 transition-colors">
                        Annuler
                    </button>
                    <button onClick={onConfirm} className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <CheckCircle size={16} /> Confirmer
                    </button>
                </div>
            </div>
        </div>
    );
}

// ============================================================================
// COMPOSANT PRINCIPAL
// ============================================================================
export default function TabRepairJournaux() {
    const [loading, setLoading]         = useState(true);
    const [gameDataReady, setGameDataReady] = useState(false);
    const [characters, setCharacters]   = useState([]);
    const [gameData, setGameData]       = useState(null);
    const [running]         = useState(false);
    const [log, setLog]                 = useState([]);
    const [search, setSearch]           = useState('');
    const [filterMode, setFilterMode]   = useState('pending'); // 'all' | 'pending'
    const [confirmTarget, setConfirmTarget] = useState(null); // { row, idx, preview }

    const addLog = (msg) => setLog(prev => [`${new Date().toLocaleTimeString('fr-FR')} — ${msg}`, ...prev]);

    // --- Chargement initial ---
    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const [fairyResult, socialItems, atoutsResult] = await Promise.all([
                    loadFairyTypes(),
                    loadSocialItems(),
                    supabase.from('fairy_assets').select('id, nom').order('nom'),
                ]);
                const gd = {
                    fairyData:   fairyResult.fairyData,
                    socialItems: socialItems,
                    atouts:      atoutsResult.data || [],
                };
                setGameData(gd);
                setGameDataReady(true);

                const { data: chars, error } = await supabase
                    .from('characters')
                    .select('*')
                    .in('statut', ['scelle', 'scellé'])
                    .order('nom');

                if (error) throw error;

                const rows = (chars || []).map(dbChar => {
                    const mapped = mapDbCharForReconstruction(dbChar);
                    let status = STATUS.PENDING;
                    if (!dbChar.data?.stats_scellees)     status = STATUS.SKIPPED;
                    else if (!journalNeedsRepair(mapped)) status = STATUS.OK;
                    return { dbChar, mapped, status, detail: '' };
                });

                setCharacters(rows);
            } catch (e) {
                addLog(`❌ Erreur init : ${e.message}`);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    // --- Exécution effective de la réparation (après confirmation) ---
    const executeRepair = useCallback(async (idx, preview) => {
        const row = characters[idx];
        setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.PENDING, detail: 'En cours...' } : r));

        try {
            const newXpDepense = computeXpDepenseFromJournal(preview);
            const updatedData  = { ...row.dbChar.data, historique_xp: preview };

            const { error } = await supabase
                .from('characters')
                .update({ data: updatedData, xp_depense: newXpDepense })
                .eq('id', row.dbChar.id);

            if (error) throw error;

            const gains = preview.filter(t => t.type === 'GAIN').length;
            const deps  = preview.filter(t => t.type === 'DEPENSE').length;
            const detail = `${preview.length} entrées (${gains} gains + ${deps} dépenses) — ${newXpDepense} XP dépensés`;
            setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.REPAIRED, detail } : r));
            addLog(`✨ ${row.dbChar.nom} → ${detail}`);
        } catch (e) {
            setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.ERROR, detail: e.message } : r));
            addLog(`❌ ${row.dbChar.nom} → ${e.message}`);
        }
    }, [characters]);

    // --- Demande de confirmation pour UN personnage ---
    const requestRepairOne = useCallback((idx) => {
        const row = characters[idx];
        if (!gameData || row.status === STATUS.SKIPPED) return;
        const preview = buildRepairedJournal(row.mapped, gameData);
        if (!preview) { addLog(`⚠️ ${row.dbChar.nom} : reconstruction impossible`); return; }
        setConfirmTarget({ row, idx, preview });
    }, [characters, gameData]);

    // --- Confirmation validée ---
    const handleConfirm = useCallback(async () => {
        if (!confirmTarget) return;
        const { idx, preview } = confirmTarget;
        setConfirmTarget(null);
        await executeRepair(idx, preview);
    }, [confirmTarget, executeRepair]);

    // --- Filtrage + recherche ---
    const filtered = useMemo(() => {
        return characters
            .map((row, idx) => ({ row, idx }))
            .filter(({ row }) => {
                if (filterMode === 'pending' && row.status !== STATUS.PENDING) return false;
                if (search.trim()) {
                    return row.dbChar.nom.toLowerCase().includes(search.toLowerCase());
                }
                return true;
            });
    }, [characters, filterMode, search]);

    // --- Stats globales ---
    const stats = characters.reduce((acc, r) => { acc[r.status] = (acc[r.status] || 0) + 1; return acc; }, {});
    const needsRepairCount = stats[STATUS.PENDING] || 0;

    if (loading) return (
        <div className="flex items-center justify-center py-20 text-amber-800">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mr-3" />
            Chargement des personnages et du Lore…
        </div>
    );

    return (
        <>
            <ConfirmModal
                target={confirmTarget}
                onConfirm={handleConfirm}
                onCancel={() => setConfirmTarget(null)}
            />

            <div className="space-y-5">

                {/* Bandeau de stats */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {Object.entries(STATUS_META).map(([key, meta]) => (
                        <div key={key} className={`text-center py-2 px-3 rounded-lg border text-xs font-bold ${meta.badge}`}>
                            <div className="text-lg font-black">{stats[key] || 0}</div>
                            <div className="leading-tight mt-0.5">{meta.label}</div>
                        </div>
                    ))}
                </div>

                {/* Barre de recherche + filtres */}
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Rechercher un personnage…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-9 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                        />
                        {search && (
                            <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                <X size={14} />
                            </button>
                        )}
                    </div>
                    <div className="flex gap-1 shrink-0">
                        {[['pending', `⏳ À réparer (${needsRepairCount})`], ['all', '📋 Tous']].map(([mode, label]) => (
                            <button
                                key={mode}
                                onClick={() => setFilterMode(mode)}
                                className={`px-3 py-2 text-xs font-bold rounded-lg border transition-colors ${filterMode === mode ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Liste des personnages */}
                {filtered.length === 0 ? (
                    <div className="text-center py-12 text-gray-400 font-serif italic">
                        {search ? `Aucun personnage trouvé pour « ${search} »` : 'Aucun personnage à réparer 🎉'}
                    </div>
                ) : (
                    <div className="space-y-2">
                        {filtered.map(({ row, idx }) => {
                            const journal     = row.dbChar.data?.historique_xp || [];
                            const gains       = journal.filter(t => t.type === 'GAIN').length;
                            const deps        = journal.filter(t => t.type === 'DEPENSE').length;
                            const meta        = STATUS_META[row.status];
                            const canRepair   = row.status !== STATUS.SKIPPED && row.status !== STATUS.OK;

                            return (
                                <div key={row.dbChar.id} className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-3 shadow-sm hover:shadow transition-shadow">
                                    {/* Infos personnage */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-serif font-bold text-amber-900 truncate">{row.dbChar.nom}</span>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${meta.badge}`}>
                                                {meta.label}
                                            </span>
                                        </div>
                                        {row.detail ? (
                                            <p className="text-[11px] text-gray-500 mt-0.5">{row.detail}</p>
                                        ) : (
                                            <p className="text-[11px] text-gray-400 mt-0.5">
                                                XP : {row.dbChar.xp_total} total / {row.dbChar.xp_depense} dépensé
                                                {' · '}Journal : {journal.length} entrée{journal.length > 1 ? 's' : ''}
                                                {journal.length > 0 && ` (${gains} gain${gains > 1 ? 's' : ''}, ${deps} dépense${deps > 1 ? 's' : ''})`}
                                            </p>
                                        )}
                                    </div>

                                    {/* Action */}
                                    {canRepair && (
                                        <button
                                            onClick={() => requestRepairOne(idx)}
                                            disabled={running || !gameDataReady}
                                            className="shrink-0 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Reconstruire…
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Journal des opérations */}
                {log.length > 0 && (
                    <div className="bg-stone-950 text-emerald-400 rounded-xl p-4 font-mono text-xs space-y-1 max-h-44 overflow-y-auto">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-stone-500 font-bold uppercase tracking-widest text-[10px]">Journal des opérations</span>
                            <button onClick={() => setLog([])} className="text-stone-600 hover:text-stone-400 text-[10px]">Effacer</button>
                        </div>
                        {log.map((line, i) => <p key={i}>{line}</p>)}
                    </div>
                )}
            </div>
        </>
    );
}

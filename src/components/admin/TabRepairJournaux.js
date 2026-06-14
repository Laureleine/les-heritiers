// src/components/admin/TabRepairJournaux.js
// Onglet super_admin : Reconstruction sélective du journal des flux d'XP
// + Restauration du Plancher de Verre (stats_scellees) pour les « Sans plancher ».
//
// Stratégie de merge :
//   - On CONSERVE les entrées GAIN (attributions XP joueur — irreconstruisibles)
//   - On REMPLACE toutes les DEPENSE/REMBOURSEMENT par la reconstruction

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../../config/supabase';
import { loadFairyTypes, loadSocialItems } from '../../utils/supabaseGameData';
import { Search, X, AlertTriangle, CheckCircle, Wrench, MessageCircle, Bell } from '../../config/icons';
import {
    mapDbCharForReconstruction,
    journalNeedsRepair,
    buildRepairedJournal,
    computeXpDepenseFromJournal
} from '../../utils/repairJournaux';
import { validateBeforeSeal } from '../../utils/sealValidation';

// ============================================================================
// CONSTANTES
// ============================================================================
const STATUS = {
    PENDING:        'pending',         // Nécessite réparation
    OK:             'ok',              // Journal déjà complet
    REPAIRED:       'repaired',        // Réparé pendant cette session
    SKIPPED:        'skipped',         // Pas de stats_scellees → impossible
    FLOOR_RESTORED: 'floor_restored',  // Plancher reconstruit, journal à réparer
    ERROR:          'error',
};

const STATUS_META = {
    [STATUS.PENDING]:        { label: '⏳ À réparer',               badge: 'bg-orange-100 text-orange-700 border-orange-200' },
    [STATUS.OK]:             { label: '✅ Complet',                  badge: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    [STATUS.REPAIRED]:       { label: '✨ Réparé',                   badge: 'bg-blue-100 text-blue-700 border-blue-200' },
    [STATUS.SKIPPED]:        { label: '⚠️ Sans plancher',           badge: 'bg-amber-100 text-amber-700 border-amber-200' },
    [STATUS.FLOOR_RESTORED]: { label: '🏗️ Plancher restauré',       badge: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    [STATUS.ERROR]:          { label: '❌ Erreur',                   badge: 'bg-red-100 text-red-700 border-red-200' },
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

                <p className="text-xs text-stone-500 mb-3">
                    Les entrées <strong>GAIN</strong> sont préservées. Les <strong>DÉPENSES</strong> sont recalculées
                    depuis le Plancher de Verre (<code>stats_scellees</code>).
                </p>
                {newXpDepense > (row.dbChar.xp_total || 0) && (
                    <div className="bg-red-50 border border-red-300 rounded-lg p-3 mb-5 flex items-start gap-2">
                        <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={15} />
                        <p className="text-xs text-red-700">
                            <strong>Dette XP :</strong> les dépenses reconstruites ({newXpDepense}) dépassent le total actuel ({row.dbChar.xp_total || 0}).
                            Le personnage sera marqué en dette — il ne pourra plus dépenser d'XP tant que son total n'aura pas rattrapé ses dépenses.
                        </p>
                    </div>
                )}

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
// MODALE DE CONFIRMATION — RESTAURATION DU PLANCHER
// ============================================================================
function RestoreFloorModal({ target, onConfirm, onCancel }) {
    if (!target) return null;
    const { row } = target;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onCancel}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full p-6 animate-fade-in-up" onClick={e => e.stopPropagation()}>
                <div className="flex items-start gap-3 mb-4">
                    <Wrench className="text-indigo-500 shrink-0 mt-0.5" size={22} />
                    <div>
                        <h3 className="font-serif font-bold text-gray-900 text-lg leading-tight">
                            Restaurer le Plancher de<br />
                            <span className="text-amber-800">{row.dbChar.nom}</span> ?
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Ce personnage est scellé mais son socle (<code>stats_scellees</code>) est absent.
                            La procédure va reconstruire le Plancher de Verre depuis l'état actuel,
                            après validation des règles d'apposition du Sceau.
                        </p>
                    </div>
                </div>

                <p className="text-xs text-stone-500 mb-5">
                    Une fois le Plancher restauré, vous pourrez reconstruire le journal des XP
                    si nécessaire.
                </p>

                <div className="flex gap-3">
                    <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-stone-100 text-stone-700 rounded-lg font-bold hover:bg-stone-200 transition-colors">
                        Annuler
                    </button>
                    <button onClick={onConfirm} className="flex-1 px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                        <Wrench size={16} /> Restaurer le Plancher
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
    const [filterMode, setFilterMode]   = useState('all'); // 'all' | 'pending' | 'skipped'
    const [confirmTarget, setConfirmTarget] = useState(null); // { row, idx, preview }
    const [restoreFloorTarget, setRestoreFloorTarget] = useState(null); // { row, idx }
    const [playerRequests, setPlayerRequests] = useState([]);

    const addLog = (msg) => setLog(prev => [`${new Date().toLocaleTimeString('fr-FR')} — ${msg}`, ...prev]);

    // --- Chargement des demandes joueurs ---
    useEffect(() => {
        supabase
            .from('journal_repair_requests')
            .select('*')
            .is('resolved_at', null)
            .order('requested_at', { ascending: false })
            .then(({ data }) => setPlayerRequests(data || []));
    }, []);

    const markResolved = useCallback(async (requestId) => {
        const { data: { user } } = await supabase.auth.getUser();
        await supabase.from('journal_repair_requests')
            .update({ resolved_at: new Date().toISOString(), resolved_by: user.id })
            .eq('id', requestId);
        setPlayerRequests(prev => prev.filter(r => r.id !== requestId));
    }, []);

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
                    .select('*, profiles(username)')
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

    // --- Reconstruction du Plancher de Verre (stats_scellees) ---
    const buildStatsScellees = useCallback((dbChar) => {
        const cl = dbChar.competences_libres || dbChar.competencesLibres || {};
        return {
            caracteristiques: { ...(dbChar.caracteristiques || {}) },
            atouts: [...(dbChar.atouts || [])],
            competencesLibres: {
                rangs:               { ...(cl.rangs || {}) },
                choixSpecialiteUser: JSON.parse(JSON.stringify(cl.choix_specialite_user || cl.choixSpecialiteUser || {})),
                choixPredilection:   { ...(cl.choix_predilection || cl.choixPredilection || {}) },
                specialiteMetier:    cl.specialite_metier || cl.specialiteMetier || null,
            },
            competencesFutiles: {
                rangs: { ...((dbChar.competences_futiles || dbChar.competencesFutiles || {}).rangs || {}) },
            },
            fortune: dbChar.fortune || 0,
            pouvoirs: [...(dbChar.pouvoirs || [])],
        };
    }, []);

    // --- Validation pré-restauration du plancher ---
    // Reconstruit un objet character au format client pour validateBeforeSeal
    const buildClientCharForValidation = useCallback((dbChar) => {
        const cl = dbChar.competences_libres || dbChar.competencesLibres || {};
        return {
            id: dbChar.id,
            nom: dbChar.nom,
            statut: dbChar.statut,
            typeFee: dbChar.type_fee,
            caracteristiques: { ...(dbChar.caracteristiques || {}) },
            atouts: [...(dbChar.atouts || [])],
            pouvoirs: [...(dbChar.pouvoirs || [])],
            capaciteChoisie: dbChar.capacite_choisie || dbChar.capaciteChoisie,
            profils: dbChar.profils || {},
            competencesLibres: cl,
            competencesFutiles: dbChar.competences_futiles || dbChar.competencesFutiles || {},
            fortune: dbChar.fortune || 0,
            data: dbChar.data || {},
            computedStats: dbChar.data?.computed_stats || dbChar.data?.computedStats || {},
            vieSociale: dbChar.vie_sociale || dbChar.vieSociale || {},
        };
    }, []);

    // --- Exécution de la restauration du plancher ---
    const executeRestoreFloor = useCallback(async (idx) => {
        const row = characters[idx];
        setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.PENDING, detail: 'Validation en cours...' } : r));

        try {
            // 1. Reconstruire le personnage au format client pour validation
            const clientChar = buildClientCharForValidation(row.dbChar);

            // 2. Récupérer feeData depuis gameData déjà chargé
            const feeData = gameData?.fairyData?.[clientChar.typeFee];

            // 3. Valider selon les règles d'apposition du Sceau
            const { errors, warnings } = validateBeforeSeal(clientChar, gameData, feeData);

            if (errors.length > 0) {
                const msg = `Validation échouée (${errors.length} erreur(s)) : ${errors.join(' ')}`;
                setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.SKIPPED, detail: msg } : r));
                addLog(`❌ ${row.dbChar.nom} — ${msg}`);
                return;
            }

            addLog(`🔨 ${row.dbChar.nom} — ${warnings.length > 0 ? `${warnings.length} avertissement(s), ` : ''}reconstruction du Plancher...`);

            // 4. Construire stats_scellees depuis l'état actuel
            const stats_scellees = buildStatsScellees(row.dbChar);

            // 5. Persister en base
            const newData = { ...(row.dbChar.data || {}), stats_scellees };
            const { data: updateData, error: saveError } = await supabase
                .from('characters')
                .update({ data: newData, updated_at: new Date().toISOString() })
                .eq('id', row.dbChar.id)
                .select('id');

            if (saveError) throw saveError;
            if (!updateData?.length) throw new Error("Aucune ligne modifiée — RLS a bloqué l'écriture");

            // 6. Mettre à jour l'état local — le personnage a maintenant un plancher
            const updatedDbChar = {
                ...row.dbChar,
                data: newData,
            };
            const mapped = mapDbCharForReconstruction(updatedDbChar);
            setCharacters(prev => prev.map((r, i) => i === idx ? {
                ...r,
                dbChar: updatedDbChar,
                mapped,
                status: journalNeedsRepair(mapped) ? STATUS.PENDING : STATUS.OK,
                detail: '',
            } : r));
            addLog(`🏗️ ${row.dbChar.nom} — Plancher restauré, ${journalNeedsRepair(mapped) ? 'journal à réparer' : 'journal complet'}.`);
        } catch (e) {
            setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.SKIPPED, detail: e.message } : r));
            addLog(`❌ ${row.dbChar.nom} — erreur : ${e.message}`);
        }
    }, [characters, gameData, buildStatsScellees, buildClientCharForValidation]);

    // --- Exécution effective de la réparation (après confirmation) ---
    const executeRepair = useCallback(async (idx, preview) => {
        const row = characters[idx];
        setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.PENDING, detail: 'En cours...' } : r));

        try {
            const newXpDepense = computeXpDepenseFromJournal(preview);
            const isDebt       = newXpDepense > (row.dbChar.xp_total || 0);
            const updatedData  = { ...row.dbChar.data, historique_xp: preview };

            const { data: updateData, error } = await supabase
                .from('characters')
                .update({ data: updatedData, xp_depense: newXpDepense, xp_dette: isDebt })
                .eq('id', row.dbChar.id)
                .select('id');

            if (error) throw error;
            if (!updateData?.length) throw new Error("Aucune ligne modifiée — RLS a bloqué l'écriture");

            const gains = preview.filter(t => t.type === 'GAIN').length;
            const deps  = preview.filter(t => t.type === 'DEPENSE').length;
            const detail = `${preview.length} entrées (${gains} gains + ${deps} dépenses) — ${newXpDepense} XP dépensés${isDebt ? ' ⚠️ Dette XP' : ''}`;
            setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.REPAIRED, detail } : r));
            addLog(`✨ ${row.dbChar.nom} → ${detail}`);

            // Résoudre automatiquement la demande joueur si elle existe
            const matchingRequest = playerRequests.find(r => r.character_id === row.dbChar.id);
            if (matchingRequest) await markResolved(matchingRequest.id);
        } catch (e) {
            setCharacters(prev => prev.map((r, i) => i === idx ? { ...r, status: STATUS.ERROR, detail: e.message } : r));
            addLog(`❌ ${row.dbChar.nom} → ${e.message}`);
        }
    }, [characters, playerRequests, markResolved]);

    // --- Demande de confirmation pour UN personnage ---
    const requestRepairOne = useCallback((idx) => {
        const row = characters[idx];
        if (!gameData || row.status === STATUS.SKIPPED) return;
        const preview = buildRepairedJournal(row.mapped, gameData);
        if (!preview) { addLog(`⚠️ ${row.dbChar.nom} : reconstruction impossible`); return; }
        setConfirmTarget({ row, idx, preview });
    }, [characters, gameData]);

    // --- Demande de restauration du plancher ---
    const requestRestoreFloor = useCallback((idx) => {
        const row = characters[idx];
        if (!gameData || row.status !== STATUS.SKIPPED) return;
        setRestoreFloorTarget({ row, idx });
    }, [characters, gameData]);

    // --- Confirmation validée (réparation journal) ---
    const handleConfirm = useCallback(async () => {
        if (!confirmTarget) return;
        const { idx, preview } = confirmTarget;
        setConfirmTarget(null);
        await executeRepair(idx, preview);
    }, [confirmTarget, executeRepair]);

    // --- Confirmation validée (restauration plancher) ---
    const handleConfirmRestoreFloor = useCallback(async () => {
        if (!restoreFloorTarget) return;
        const { idx } = restoreFloorTarget;
        setRestoreFloorTarget(null);
        await executeRestoreFloor(idx);
    }, [restoreFloorTarget, executeRestoreFloor]);

    // --- Filtrage + recherche ---
    const filtered = useMemo(() => {
        return characters
            .map((row, idx) => ({ row, idx }))
            .filter(({ row }) => {
                if (filterMode === 'pending' && row.status !== STATUS.PENDING) return false;
                if (filterMode === 'skipped' && row.status !== STATUS.SKIPPED) return false;
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
            <RestoreFloorModal
                target={restoreFloorTarget}
                onConfirm={handleConfirmRestoreFloor}
                onCancel={() => setRestoreFloorTarget(null)}
            />

            <div className="space-y-5">

                {/* Demandes joueurs en attente */}
                {playerRequests.length > 0 && (
                    <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-4 space-y-3">
                        <h3 className="font-serif font-bold text-orange-800 flex items-center gap-2 text-sm">
                            <Bell size={15} className="animate-pulse" />
                            {playerRequests.length} demande{playerRequests.length > 1 ? 's' : ''} joueur{playerRequests.length > 1 ? 's' : ''} en attente
                        </h3>
                        <div className="space-y-2">
                            {playerRequests.map(req => {
                                const charIdx = characters.findIndex(r => r.dbChar.id === req.character_id);
                                const charRow = charIdx >= 0 ? characters[charIdx] : null;
                                const canRepair = charRow && charRow.status !== STATUS.SKIPPED && charRow.status !== STATUS.OK;
                                return (
                                    <div key={req.id} className="bg-white rounded-lg border border-orange-200 p-3 flex items-center gap-3 shadow-sm">
                                        <div className="flex-1 min-w-0">
                                            <span className="font-serif font-bold text-amber-900">{req.character_nom}</span>
                                            <p className="text-[11px] text-stone-400 mt-0.5">
                                                {new Date(req.requested_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                                {charRow && <span className={`ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold border ${STATUS_META[charRow.status]?.badge}`}>{STATUS_META[charRow.status]?.label}</span>}
                                            </p>
                                        </div>
                                        {canRepair && (
                                            <button
                                                onClick={() => requestRepairOne(charIdx)}
                                                disabled={!gameDataReady}
                                                className="shrink-0 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
                                            >
                                                Réparer
                                            </button>
                                        )}
                                        <button
                                            onClick={() => markResolved(req.id)}
                                            className="shrink-0 px-3 py-1.5 bg-stone-100 text-stone-600 text-xs font-bold rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                                            title="Marquer comme résolu sans réparer"
                                        >
                                            ✓ Résolu
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Bandeau de stats — sur une ligne */}
                <div className="grid grid-cols-6 gap-1.5">
                    {Object.entries(STATUS_META).map(([key, meta]) => (
                        <div key={key} className={`text-center py-1.5 px-1 rounded-lg border font-bold ${meta.badge}`}>
                            <div className="text-base font-black leading-none">{stats[key] || 0}</div>
                            <div className="text-[9px] sm:text-[10px] leading-tight mt-0.5 truncate">{meta.label}</div>
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
                        {[
                            ['pending', `⏳ À réparer (${needsRepairCount})`],
                            ['skipped', `⚠️ Sans plancher (${stats[STATUS.SKIPPED] || 0})`],
                            ['all', '📋 Tous'],
                        ].map(([mode, label]) => (
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

                            const ownerName = row.dbChar.profiles?.username || 'Utilisateur inconnu';

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
                                                {' · '}Propriétaire : {ownerName}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message au propriétaire */}
                                    {row.dbChar.user_id && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.dispatchEvent(new CustomEvent('open-telegraphe', {
                                                    detail: { targetUser: { id: row.dbChar.user_id, username: ownerName } }
                                                }));
                                            }}
                                            title={`Envoyer un message à ${ownerName}`}
                                            className="shrink-0 p-2 text-stone-400 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                                        >
                                            <MessageCircle size={18} />
                                        </button>
                                    )}

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
                                    {row.status === STATUS.SKIPPED && (
                                        <button
                                            onClick={() => requestRestoreFloor(idx)}
                                            disabled={running || !gameDataReady}
                                            className="shrink-0 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Restaurer le Plancher
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

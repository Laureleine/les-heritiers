// src/components/cercle/DistributeCardModal.jsx
import React, { useState } from 'react';
import { supabase } from '../../config/supabase';
import { showInAppNotification } from '../../utils/SystemeServices';
import { X, Send } from '../../config/icons';

const PROFILS = ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'];

function costLabel(grant) {
    const parts = [];
    if (grant.cost_xp > 0) parts.push(`${grant.cost_xp} XP`);
    if (grant.cost_fortune > 0) parts.push(`Rang Fortune ${grant.cost_fortune}`);
    const pp = grant.cost_pp || {};
    Object.entries(pp).forEach(([p, v]) => { if (v > 0) parts.push(`${v} PP ${p}`); });
    return parts.length ? parts.join(' + ') : 'Gratuite';
}

export default function DistributeCardModal({ card, cardType, cercleId, members, onClose, onSuccess }) {
    const [selectedIds, setSelectedIds] = useState([]);
    const [costXp, setCostXp] = useState(card.cost_xp || 0);
    const [costFortune, setCostFortune] = useState(card.cost_fortune || 0);
    const [costPp, setCostPp] = useState(card.cost_pp || {});
    const [hideEffects, setHideEffects] = useState(card.hide_effects_until_accepted || false);
    const [submitting, setSubmitting] = useState(false);

    const toggleMember = (uid) => setSelectedIds(prev =>
        prev.includes(uid) ? prev.filter(x => x !== uid) : [...prev, uid]
    );

    const setPP = (profil, val) => setCostPp(prev => ({ ...prev, [profil]: val }));

    const handleSubmit = async () => {
        if (selectedIds.length === 0) {
            showInAppNotification("Sélectionnez au moins un membre.", "warning");
            return;
        }
        setSubmitting(true);
        try {
            const grants = selectedIds.map(uid => ({
                card_id: card.id,
                card_type: cardType,
                granted_by: card.creator_id,
                granted_to: uid,
                cercle_id: cercleId,
                cost_xp: costXp || 0,
                cost_fortune: costFortune || 0,
                cost_pp: costPp,
                hide_effects_until_accepted: hideEffects,
                status: 'pending'
            }));
            const { error } = await supabase.from('personal_card_grants').insert(grants);
            if (error) throw error;
            showInAppNotification(`✦ Carte distribuée à ${selectedIds.length} membre(s) !`, "success");
            onSuccess?.();
            onClose();
        } catch (e) {
            showInAppNotification("Erreur lors de la distribution : " + e.message, "error");
        } finally {
            setSubmitting(false);
        }
    };

    const inputCls = "p-1.5 border border-stone-200 rounded text-sm bg-white focus:ring-2 focus:ring-violet-200 outline-none w-24";

    return (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="p-5 border-b border-stone-100 flex justify-between items-center bg-violet-50">
                    <div>
                        <h2 className="text-lg font-serif font-bold text-violet-900">✦ Distribuer une Carte</h2>
                        <p className="text-sm text-violet-700 mt-0.5">{card.nom || card.name}</p>
                    </div>
                    <button onClick={onClose} className="text-stone-400 hover:text-stone-600 p-1">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1">
                    {/* Membres */}
                    <div>
                        <p className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Membres destinataires</p>
                        <div className="space-y-2">
                            {members.map(m => (
                                <label key={m.user_id} className="flex items-center gap-3 cursor-pointer hover:bg-stone-50 p-2 rounded-lg">
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(m.user_id)}
                                        onChange={() => toggleMember(m.user_id)}
                                        className="rounded accent-violet-600"
                                    />
                                    <span className="font-bold text-stone-800">
                                        {m.characters?.nom || m.profiles?.username || '—'}
                                    </span>
                                    {m.characters?.nom && m.profiles?.username && (
                                        <span className="text-xs text-stone-400 italic">joué par {m.profiles.username}</span>
                                    )}
                                </label>
                            ))}
                            {members.length === 0 && (
                                <p className="text-sm text-stone-400 italic">Aucun membre dans ce cercle.</p>
                            )}
                        </div>
                    </div>

                    {/* Coûts */}
                    <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 space-y-3">
                        <p className="text-xs font-bold text-violet-700 uppercase tracking-wide">Coûts d'acquisition</p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <div>
                                <label className="text-xs text-stone-500 block mb-1">XP</label>
                                <input type="number" min="0" value={costXp || ''} onChange={e => setCostXp(+e.target.value || 0)} placeholder="0" className={inputCls} />
                            </div>
                            <div>
                                <label className="text-xs text-stone-500 block mb-1">Fortune (rang)</label>
                                <input type="number" min="0" value={costFortune || ''} onChange={e => setCostFortune(+e.target.value || 0)} placeholder="0" className={inputCls} />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-stone-500 block mb-1">PP par Profil</label>
                            <div className="grid grid-cols-2 gap-2">
                                {PROFILS.map(p => (
                                    <div key={p} className="flex items-center gap-2">
                                        <span className="text-xs text-stone-500 w-20 shrink-0">{p}</span>
                                        <input type="number" min="0" value={(costPp[p]) || ''} onChange={e => setPP(p, +e.target.value || 0)} placeholder="0" className="p-1 border border-stone-200 rounded text-sm bg-white w-16 outline-none" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-violet-800">
                            <input type="checkbox" checked={hideEffects} onChange={e => setHideEffects(e.target.checked)} className="rounded accent-violet-600" />
                            Masquer les effets jusqu'à acceptation
                        </label>
                    </div>

                    {selectedIds.length > 0 && (
                        <p className="text-xs text-stone-500 italic">
                            La carte sera distribuée à {selectedIds.length} membre(s). Coût : {costLabel({ cost_xp: costXp, cost_fortune: costFortune, cost_pp: costPp })}.
                        </p>
                    )}
                </div>

                <div className="p-4 border-t border-stone-100 flex justify-end gap-3 bg-stone-50">
                    <button onClick={onClose} className="px-4 py-2 text-stone-600 font-bold hover:bg-stone-200 rounded-lg transition-colors text-sm">
                        Annuler
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={submitting || selectedIds.length === 0}
                        className="px-5 py-2 bg-violet-700 hover:bg-violet-800 disabled:opacity-50 text-white font-bold rounded-lg shadow-sm flex items-center gap-2 text-sm transition-all"
                    >
                        <Send size={16} /> Distribuer
                    </button>
                </div>
            </div>
        </div>
    );
}

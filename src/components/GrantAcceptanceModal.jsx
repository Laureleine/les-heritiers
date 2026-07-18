// src/components/GrantAcceptanceModal.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import { X } from '../config/icons';

const CARD_TABLES = {
    fairy_assets: { label: 'Atout', nomField: 'nom' },
    fairy_powers: { label: 'Pouvoir', nomField: 'nom' },
    fairy_capacites: { label: 'Capacité', nomField: 'nom' },
    social_items: { label: 'Vie Sociale', nomField: 'nom' },
};

function CostLine({ grant }) {
    const parts = [];
    if (grant.cost_xp > 0) parts.push(`${grant.cost_xp} XP`);
    if (grant.cost_fortune > 0) parts.push(`Rang Fortune ${grant.cost_fortune}`);
    const pp = grant.cost_pp || {};
    Object.entries(pp).forEach(([p, v]) => { if (v > 0) parts.push(`${v} PP ${p}`); });
    if (!parts.length) return <span className="text-stone-400 italic">Gratuite</span>;
    return <span className="font-bold text-violet-800">{parts.join(' + ')}</span>;
}

export default function GrantAcceptanceModal({ grants, onClose, onDone }) {
    const [idx, setIdx] = useState(0);
    const [cardData, setCardData] = useState(null);
    const [loadingCard, setLoadingCard] = useState(false);
    const [acting, setActing] = useState(false);

    const grant = grants[idx];

    useEffect(() => {
        if (!grant) return;
        setCardData(null);
        setLoadingCard(true);
        supabase
            .from(grant.card_type)
            .select('id, nom, name, description, effets')
            .eq('id', grant.card_id)
            .single()
            .then(({ data }) => { setCardData(data); setLoadingCard(false); });
    }, [grant]);

    const respond = async (status) => {
        setActing(true);
        try {
            const { error } = await supabase
                .from('personal_card_grants')
                .update({ status, responded_at: new Date().toISOString() })
                .eq('id', grant.id);
            if (error) throw error;

            // Notifier le Docte via support_tickets
            await supabase.from('support_tickets').insert({
                user_id: grant.granted_by,
                title: `✦ Carte ${status === 'accepted' ? 'acceptée' : 'refusée'}`,
                description: `"${cardData?.nom || cardData?.name || 'Carte'}" a été ${status === 'accepted' ? 'acceptée' : 'refusée'} par le joueur.`,
                status: 'open',
                category: 'system'
            });

            showInAppNotification(status === 'accepted' ? '✦ Carte acceptée !' : 'Carte refusée.', status === 'accepted' ? 'success' : 'info');

            if (idx + 1 < grants.length) {
                setIdx(idx + 1);
            } else {
                onDone?.();
                onClose();
            }
        } catch (e) {
            showInAppNotification('Erreur : ' + e.message, 'error');
        } finally {
            setActing(false);
        }
    };

    if (!grant) return null;
    const meta = CARD_TABLES[grant.card_type] || { label: 'Carte', nomField: 'nom' };
    const cardName = cardData?.[meta.nomField] || cardData?.name || '…';

    return (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="p-5 border-b border-violet-100 bg-violet-50 flex justify-between items-center">
                    <div>
                        <h2 className="font-serif font-bold text-violet-900 text-lg">✦ Don du Docte</h2>
                        <p className="text-xs text-violet-600 mt-0.5">{idx + 1} / {grants.length}</p>
                    </div>
                    <button onClick={onClose} className="text-stone-400 hover:text-stone-600 p-1"><X size={20} /></button>
                </div>

                <div className="p-6 space-y-4">
                    {loadingCard ? (
                        <p className="text-sm text-stone-400 italic text-center">Chargement...</p>
                    ) : (
                        <>
                            <div>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 font-bold uppercase tracking-wide">{meta.label}</span>
                                <h3 className="font-serif font-bold text-stone-800 text-xl mt-2">{cardName}</h3>
                                {!grant.hide_effects_until_accepted && cardData?.description && (
                                    <p className="text-sm text-stone-600 mt-2 font-serif leading-relaxed">{cardData.description}</p>
                                )}
                                {!grant.hide_effects_until_accepted && cardData?.effets && (
                                    <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
                                        <p className="text-xs font-bold text-amber-700 mb-1">Effets en jeu</p>
                                        <p className="text-sm text-amber-900 font-serif">{cardData.effets}</p>
                                    </div>
                                )}
                                {grant.hide_effects_until_accepted && (
                                    <p className="text-sm text-stone-400 italic mt-2">Les effets seront révélés après acceptation.</p>
                                )}
                            </div>

                            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
                                <p className="text-xs font-bold text-violet-600 uppercase tracking-wide mb-1">Coût d'acquisition</p>
                                <CostLine grant={grant} />
                            </div>
                        </>
                    )}
                </div>

                <div className="p-4 border-t border-stone-100 flex gap-3">
                    <button
                        onClick={() => respond('rejected')}
                        disabled={acting || loadingCard}
                        className="flex-1 px-4 py-2.5 border border-stone-300 text-stone-600 hover:bg-stone-100 font-bold rounded-xl text-sm transition-colors disabled:opacity-50"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={() => respond('accepted')}
                        disabled={acting || loadingCard}
                        className="flex-1 px-4 py-2.5 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded-xl text-sm transition-colors shadow disabled:opacity-50"
                    >
                        ✦ Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}

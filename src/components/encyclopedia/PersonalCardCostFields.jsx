// src/components/encyclopedia/PersonalCardCostFields.jsx
import React from 'react';

const PROFILS = ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'];

const inputCls = "w-full p-1.5 border border-stone-200 rounded text-sm bg-white focus:ring-2 focus:ring-violet-200 outline-none";
const labelCls = "text-xs font-bold text-stone-600 uppercase tracking-wide";

export default function PersonalCardCostFields({ costs, onChange }) {
    const set = (field, value) => onChange({ ...costs, [field]: value });
    const setPP = (profil, value) => onChange({ ...costs, pp: { ...(costs.pp || {}), [profil]: value } });

    return (
        <div className="mt-4 p-3 bg-violet-50 border border-violet-200 rounded-lg space-y-3">
            <p className="text-xs font-bold text-violet-800 uppercase tracking-wide">✦ Coûts d'acquisition (optionnels)</p>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className={labelCls}>XP</label>
                    <input
                        type="number" min="0"
                        value={costs.xp || ''}
                        onChange={e => set('xp', e.target.value === '' ? 0 : parseInt(e.target.value, 10))}
                        placeholder="0"
                        className={inputCls}
                    />
                </div>
                <div>
                    <label className={labelCls}>Rang de Fortune</label>
                    <input
                        type="number" min="0"
                        value={costs.fortune || ''}
                        onChange={e => set('fortune', e.target.value === '' ? 0 : parseInt(e.target.value, 10))}
                        placeholder="0"
                        className={inputCls}
                    />
                </div>
            </div>

            <div>
                <label className={labelCls}>PP par Profil</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                    {PROFILS.map(p => (
                        <div key={p} className="flex items-center gap-2">
                            <span className="text-xs text-stone-500 w-20 shrink-0">{p}</span>
                            <input
                                type="number" min="0"
                                value={(costs.pp || {})[p] || ''}
                                onChange={e => setPP(p, e.target.value === '' ? 0 : parseInt(e.target.value, 10))}
                                placeholder="0"
                                className={inputCls}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer text-sm text-violet-800">
                <input
                    type="checkbox"
                    checked={costs.hide_effects || false}
                    onChange={e => set('hide_effects', e.target.checked)}
                    className="rounded accent-violet-600"
                />
                Masquer les effets jusqu'à acceptation
            </label>
        </div>
    );
}

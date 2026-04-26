// src/components/recap/MagicHeritageSection.jsx
import React from 'react';
import { Zap, Shield, ShieldAlert, Lock, Star, Sparkles } from 'lucide-react';
import { accorderTexte } from '../../data/DictionnaireJeu';

export default function MagicHeritageSection({ character, feeData, genre }) {
    const bible = character.computedStats?.bible_autonome;

    const renderList = (list) => {
        if (!list || list.length === 0) return <li><span className="italic opacity-60 text-xs">Aucun trait répertorié.</span></li>;
        return list.map((item, idx) => {
            const text = typeof item === 'string' ? item : item.nom;
            return <li key={idx} className="pl-1"><strong className="font-black">{text}</strong></li>;
        });
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-purple-900 border-b border-purple-100 pb-2 flex items-center gap-2">
                <Zap size={18} className="text-purple-600" /> Magie & Héritage ({accorderTexte(character.typeFee, genre)})
            </h3>
            
            {/* --- 1. AVANTAGES & DÉSAVANTAGES --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 shadow-sm">
                    <h4 className="text-[9px] font-black text-emerald-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Shield size={12} className="text-emerald-500" /> Avantages
                    </h4>
                    <ul className="text-xs text-emerald-900 leading-tight font-serif space-y-1 list-disc list-inside marker:text-emerald-400">
                        {renderList(feeData?.avantages || bible?.avantages_innes)}
                    </ul>
                </div>
                
                <div className="bg-red-50/50 p-3 rounded-xl border border-red-100 shadow-sm">
                    <h4 className="text-[9px] font-black text-red-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <ShieldAlert size={12} className="text-red-500" /> Désavantages
                    </h4>
                    <ul className="text-xs text-red-900 leading-tight font-serif space-y-1 list-disc list-inside marker:text-red-400">
                        {renderList(feeData?.desavantages || bible?.desavantages_innes)}
                    </ul>
                </div>
            </div>

            {/* --- 2. CAPACITÉS --- */}
            <div className="mb-5">
                <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">
                    Capacités Féériques
                </h4>
                <div className="flex flex-wrap gap-2">
                    {bible?.capacites_innees?.map((cap, idx) => (
                        <span key={`innee-${idx}`} className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-sm flex items-center gap-1.5">
                            <Lock size={10} className="text-purple-400" /> {cap}
                        </span>
                    ))}
                    {character.capaciteChoisie && (
                        <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-sm flex items-center gap-1.5">
                            <Star size={10} className="text-amber-500 fill-amber-500" /> {character.capaciteChoisie}
                        </span>
                    )}
                </div>
            </div>

            {/* --- 3. POUVOIRS --- */}
            <div className="mb-5">
                <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">
                    Pouvoirs Maîtrisés
                </h4>
                <div className="flex flex-wrap gap-2">
                    {character.pouvoirs?.length > 0 ? character.pouvoirs.map((p, i) => (
                        <span key={i} className="bg-purple-600 text-white px-3 py-0.5 rounded-full text-[11px] font-serif shadow-sm border border-purple-700">
                            {p}
                        </span>
                    )) : <span className="text-[10px] text-stone-300 italic">Aucun arcane maîtrisé</span>}
                </div>
            </div>

            {/* --- 4. ATOUTS (SANS BORDURE, ESPACE IDENTIQUE) --- */}
            <div>
                <h4 className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-2">
                    Atouts Féériques
                </h4>
                <div className="flex flex-wrap gap-2">
                    {character.atouts?.length > 0 ? character.atouts.map((a, i) => (
                        <span key={i} className="bg-stone-50 text-stone-600 border border-stone-200 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-sm flex items-center gap-1.5">
                            <Sparkles size={10} className="text-purple-400" /> {a}
                        </span>
                    )) : <span className="text-[10px] text-stone-300 italic">Aucun don particulier</span>}
                </div>
            </div>
        </div>
    );
}
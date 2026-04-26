// src/components/recap/CombatStatsCard.jsx
import React from 'react';
import { Zap } from 'lucide-react';

export default function CombatStatsCard({ stats }) {
    const { 
        esquiveMasquee, 
        esquiveDemasquee, 
        parade, 
        resPhys, 
        resPsych 
    } = stats;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap size={14} className="text-stone-400" /> Aptitudes de Combat
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-stretch">
                {/* ESQUIVE */}
                <div className="bg-white border-2 border-stone-100 rounded-2xl p-4 text-center shadow-sm flex flex-col transition-all hover:border-amber-200">
                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-tighter mb-auto">Esquive</span>
                    <div className="flex flex-col items-center justify-center h-16">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-serif font-black text-stone-800 leading-none">{esquiveMasquee}</span>
                            <span className="text-base" title="Masquée">🎭</span>
                        </div>
                        <div className="w-10 h-[1px] bg-stone-100 my-1.5"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-serif font-black text-stone-800 leading-none">{esquiveDemasquee}</span>
                            <span className="text-base" title="Démasquée">🔥</span>
                        </div>
                    </div>
                </div>

                {/* PARADE */}
                <div className="bg-white border-2 border-stone-100 rounded-2xl p-4 text-center shadow-sm flex flex-col transition-all hover:border-amber-200">
                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-tighter mb-auto">Parade</span>
                    <div className="flex items-center justify-center h-16">
                        <span className="text-4xl font-serif font-black text-stone-800 leading-none">{parade}</span>
                    </div>
                </div>

                {/* RÉSISTANCE PHYSIQUE */}
                <div className="bg-blue-50/30 border-2 border-blue-100 rounded-2xl p-4 text-center shadow-sm flex flex-col transition-all hover:border-blue-200">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-tighter mb-auto">Rés. Physique</span>
                    <div className="flex items-center justify-center h-16">
                        <span className="text-4xl font-serif font-black text-blue-600 leading-none">{resPhys}</span>
                    </div>
                </div>

                {/* RÉSISTANCE PSYCHIQUE */}
                <div className="bg-purple-50/30 border-2 border-purple-100 rounded-2xl p-4 text-center shadow-sm flex flex-col transition-all hover:border-purple-200">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-tighter mb-auto">Rés. Psychique</span>
                    <div className="flex items-center justify-center h-16">
                        <span className="text-4xl font-serif font-black text-purple-600 leading-none">{resPsych}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
// src/components/recap/SpecialtiesRegistry.jsx
import React from 'react';
import { Briefcase, Star, Sparkles } from 'lucide-react';

export default function SpecialtiesRegistry({ specialties }) {
    if (!specialties || specialties.length === 0) return null;

    const getIcon = (source) => {
        switch (source) {
            case 'Métier': return <Briefcase size={12} className="text-emerald-700" />;
            case 'Innée': return <Star size={12} className="text-amber-600 fill-amber-600" />;
            case 'Atout': return <Sparkles size={12} className="text-purple-600" />;
            default: return null;
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                Spécialités Globales
            </h4>
            <div className="flex flex-wrap gap-2">
                {specialties.map((s, idx) => (
                    <div key={idx} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border shadow-sm text-xs font-bold ${s.color}`}>
                        {getIcon(s.source)}
                        <span className="opacity-60 border-r border-current pr-1.5 mr-0.5">{s.comp}</span>
                        <span className="opacity-90">{s.nom}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
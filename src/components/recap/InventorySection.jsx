// src/components/recap/InventorySection.jsx
import React from 'react';
import { Crown, Briefcase, User } from 'lucide-react';

export default function InventorySection({ character }) {
    const inventaire = character.computedStats?.bible_autonome?.inventaire_lisible;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif text-lg font-bold text-stone-800 mb-3 flex items-center gap-2">
                <Crown size={18} className="text-emerald-600" /> Fortune & Inventaire
            </h3>
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex justify-between items-center shadow-sm">
                <span className="text-emerald-900 font-bold text-sm">Niveau de Fortune</span>
                <span className="text-xl font-serif font-black text-emerald-800">{character.fortune || 0}</span>
            </div>

            {inventaire ? (
                <div className="space-y-4">
                    {inventaire.armes_equipements?.length > 0 && (
                        <div>
                            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Équipement</h4>
                            <div className="flex flex-wrap gap-2">
                                {inventaire.armes_equipements.map((item, i) => (
                                    <span key={i} className="px-2 py-1 bg-stone-100 text-stone-700 border border-stone-200 rounded text-xs font-bold flex items-center gap-1">
                                        <Briefcase size={12} className="text-stone-500" /> {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {inventaire.contacts?.length > 0 && (
                        <div>
                            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Contacts</h4>
                            <div className="flex flex-wrap gap-2">
                                {inventaire.contacts.map((c, i) => (
                                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded text-xs font-bold flex items-center gap-1">
                                        <User size={12} className="text-blue-500" /> {c}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p className="text-sm text-stone-400 italic text-center py-2">Aucune possession.</p>
            )}
        </div>
    );
}
// src/components/EncyclopediaCard.js
import React from 'react';
import { Feather, Sparkles, Lock, ShieldCheck, Unlock, Trash2, Eye, Users, Coins, Tag } from 'lucide-react';
import { getMagicBadges } from '../data/DictionnaireJeu';

const EncyclopediaCard = ({ item, activeTab, onOpenEdit, onView, isLocked, onToggleSeal, onDeleteClick, userProfile }) => {
    const title = item.name || item.nom;
    const desc = item.description || item.desc;
    
    // Usine à Badges Magiques
    const powerBadges = (activeTab === 'fairy_powers' && item.type_pouvoir) 
        ? getMagicBadges(item.type_pouvoir) 
        : [];

    // ✨ RÉCUPÉRATION ROBUSTE DES PROFILS AUTORISÉS (Pour la Vie Sociale)
    let linkedProfiles = [];
    if (activeTab === 'social_items') {
        const legacyProfile = item.profils?.name_masculine || item.profils?.nom;
        let parsedArray = [];
        if (Array.isArray(item.profils_autorises)) parsedArray = item.profils_autorises;
        else if (typeof item.profils_autorises === 'string') {
            try { parsedArray = JSON.parse(item.profils_autorises); } catch(e) {}
        }
        linkedProfiles = [...parsedArray];
        if (legacyProfile && !linkedProfiles.includes(legacyProfile)) {
            linkedProfiles.push(legacyProfile);
        }
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group flex flex-col h-full">
            
            {item.is_sealed && (
                <div className="absolute top-3 right-3 text-amber-700/80 z-10" title="Savoir cristallisé par les Gardiens">
                    <ShieldCheck size={28} className="drop-shadow-md" />
                </div>
            )}

            <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif font-bold text-lg text-amber-900">{title}</h3>
                <div className="flex gap-2 flex-wrap justify-end">
                    
                    {/* AFFICHAGE DES BADGES MAGIQUES */}
                    {powerBadges.map((badge, index) => (
                        <span key={index} className={`text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider border shadow-sm ${badge.color}`}>
                            {badge.label}
                        </span>
                    ))}

                    {/* ✨ NOUVEAU : AFFICHAGE DES BADGES VIE SOCIALE (Prix & Catégorie) */}
                    {activeTab === 'social_items' && (
                        <>
                            <span className="text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider border shadow-sm bg-emerald-100 text-emerald-800 border-emerald-300 flex items-center gap-1">
                                <Coins size={10}/> {item.cout !== null && item.cout !== undefined ? `${item.cout} PP` : 'Gratuit'}
                            </span>
                            <span className="text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider border shadow-sm bg-stone-100 text-stone-600 border-stone-300 flex items-center gap-1">
                                <Tag size={10}/> {item.categorie || 'Objet'}
                            </span>
                        </>
                    )}
                </div>
            </div>

            <div className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed font-serif flex-1">
                {desc || <span className="italic text-gray-400">Aucune description disponible...</span>}
            </div>

            {/* 🌟 LISTE DES FÉES COMPATIBLES (Capacités, Pouvoirs, Atouts) */}
            {['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(activeTab) && (
                item[`${activeTab === 'fairy_capacites' ? 'fairy_type_capacites' : activeTab === 'fairy_powers' ? 'fairy_type_powers' : 'fairy_type_assets'}`]?.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs font-bold text-rose-800 mb-2">
                        <Sparkles size={12} /> Espèces compatibles :
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {item[`${activeTab === 'fairy_capacites' ? 'fairy_type_capacites' : activeTab === 'fairy_powers' ? 'fairy_type_powers' : 'fairy_type_assets'}`]
                            .map(link => link.fairy_types?.name)
                            .filter(Boolean)
                            .sort()
                            .map((fairyName, idx) => (
                                <span key={idx} className="text-[10px] bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full border border-rose-100 font-medium">
                                    {fairyName}
                                </span>
                            ))}
                    </div>
                </div>
            ))}

            {/* ✨ NOUVEAU : LISTE DES PROFILS AUTORISÉS (Onglet Vie Sociale) */}
            {activeTab === 'social_items' && linkedProfiles.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs font-bold text-blue-800 mb-2">
                        <Users size={12} /> Profils liés :
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {linkedProfiles.sort().map((profilName, idx) => (
                            <span key={idx} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100 font-medium shadow-sm">
                                {profilName}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* GESTION DES ÉTATS ET LECTURE */}
            <div className="mt-6 flex flex-col gap-2">
                <button
                    onClick={() => onView(item)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-50 text-sky-700 border border-sky-200 rounded-lg hover:bg-sky-100 hover:border-sky-300 transition-all font-serif font-bold text-sm shadow-sm"
                >
                    <Eye size={16} /> Consulter l'archive
                </button>

                {item.is_sealed ? (
                    <div className="text-sm font-serif font-bold text-amber-900/70 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-amber-900/20 bg-gradient-to-r from-amber-50 to-orange-50 shadow-inner">
                        <ShieldCheck size={18} className="text-amber-700" /> Savoir scellé
                    </div>
                ) : isLocked ? (
                    <div className="text-sm font-serif italic text-stone-500 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <Lock size={16} /> En cours de révision
                    </div>
                ) : (
                    <button
                        onClick={() => onOpenEdit(item)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-100 text-stone-700 border-2 border-stone-200 rounded-lg hover:bg-stone-200 hover:border-stone-300 transition-all font-serif font-bold text-sm shadow-sm"
                    >
                        <Feather size={16} /> Suggérer une modification
                    </button>
                )}
            </div>

            {/* LE PRIVILÈGE DES GARDIENS */}
            {(userProfile?.profile?.role === 'super_admin' || userProfile?.profile?.role === 'gardien') && (
                <div className="flex gap-2 mt-3 w-full">
                    <button
                        onClick={() => onToggleSeal(item, activeTab)}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold font-serif uppercase tracking-wider rounded-lg transition-all border shadow-sm
                        ${item.is_sealed ? 'bg-stone-900 text-amber-400 border-amber-700 hover:bg-stone-800' : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'}`}
                    >
                        {item.is_sealed ? <Unlock size={14}/> : <Lock size={14}/>}
                        <span className="hidden sm:inline">{item.is_sealed ? 'Briser le Sceau' : 'Apposer le Sceau'}</span>
                    </button>

                    {userProfile?.profile?.role === 'super_admin' && (
                        <button
                            onClick={() => onDeleteClick(item, activeTab)}
                            className="flex items-center justify-center px-3 py-2 bg-stone-100 text-red-500 border border-stone-200 hover:bg-red-50 hover:border-red-300 hover:text-red-600 rounded-lg transition-colors shrink-0 shadow-sm"
                            title="Détruire définitivement l'archive"
                        >
                            <Trash2 size={16} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

const arePropsEqual = (prevProps, nextProps) => {
    return (
        prevProps.item === nextProps.item &&
        prevProps.activeTab === nextProps.activeTab &&
        prevProps.isLocked === nextProps.isLocked &&
        prevProps.userProfile === nextProps.userProfile
    );
};

export default React.memo(EncyclopediaCard, arePropsEqual);
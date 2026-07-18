// src/components/Encyclopedia.js
import React, { useMemo, useState } from 'react';
import { Book, Search, Plus, Shield, FileText, ArrowLeft } from '../config/icons';
import EncyclopediaModal from './EncyclopediaModal';
import EncyclopediaViewModal from './EncyclopediaViewModal';
import EncyclopediaCard from './EncyclopediaCard';
import ConfirmModal from './ConfirmModal';
import { useEncyclopedia } from '../hooks/useEncyclopedia';
import { TabBar } from './ui/TabBar';
import { useUserContext } from '../context/UserContext';

export default function Encyclopedia({ onBack, onOpenValidations, onOpenMesPropositions }) {
    const { userProfile } = useUserContext();
    const { state, setters, handlers } = useEncyclopedia();
    const [groupSpecialitesByCompetence, setGroupSpecialitesByCompetence] = useState(false);

    const tabs = [
        { id: 'fairy_types', label: 'Espèces Féériques' },
        { id: 'figures', label: 'Figures' },
        { id: 'fairy_capacites', label: 'Capacités' },
        { id: 'fairy_powers', label: 'Pouvoirs' },
        { id: 'fairy_assets', label: 'Atouts' },
        { id: 'social_items', label: 'Vie Sociale & Équipement' },
        { id: 'specialites', label: 'Spécialités' }
    ];

    const isDocte = userProfile?.profile?.is_docte === true;
    const isInitiated = userProfile?.profile?.is_initiated === true || userProfile?.profile?.role === 'super_admin';

    const CATEGORIES = [
        { id: 'metier', label: 'Métier' },
        { id: 'statut', label: 'Statut' },
        { id: 'objet', label: 'Objet / Arme' },
        { id: 'contact', label: 'Contact' },
        { id: 'langue', label: 'Langue' },
        { id: 'titre', label: 'Titre' }
    ];

    const groupedSpecialites = useMemo(() => {
        if (state.activeTab !== 'specialites') return [];
        const grouped = state.filteredData.reduce((acc, item) => {
            const key = item.competence || 'Compétence inconnue';
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});

        return Object.entries(grouped)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([competence, items]) => ({
                competence,
                items: items.sort((a, b) => (a.nom || '').localeCompare(b.nom || ''))
            }));
    }, [state.activeTab, state.filteredData]);

    return (
        <div className="max-w-6xl mx-auto p-4 pb-20">
            
            {/* L'ENTÊTE SIMPLE ET ÉPURÉ */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <h2 className="text-3xl font-serif font-bold text-amber-900 flex items-center gap-3">
                    <Book className="text-amber-600" size={32} /> L'Encyclopédie
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                    <button onClick={onOpenMesPropositions} className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors font-bold text-sm border border-stone-200 flex items-center gap-2">
                        <FileText size={16} /> Mes Propositions
                    </button>
                    {isDocte && (
                        <button onClick={onOpenValidations} className="px-4 py-2 bg-amber-700 hover:bg-amber-700 text-white rounded-lg transition-colors font-bold text-sm shadow-md flex items-center gap-2">
                            <Shield size={16} /> Conseil des Gardiens
                        </button>
                    )}
                    <button onClick={onBack} className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors font-bold text-sm shadow-md flex items-center gap-2">
                        <ArrowLeft size={16} /> Retour
                    </button>
                </div>
            </div>

            {/* NAVIGATION DES ONGLETS */}
            <TabBar
                tabs={tabs}
                activeTab={state.activeTab}
                onTabChange={setters.setActiveTab}
                className="mb-6 custom-scrollbar"
                label="Catégories de l'Encyclopédie"
                panelId="enc-tabpanel"
                tabIdPrefix="enc-tab"
            />

            {/* RECHERCHE ET CRÉATION */}
            <div className="flex flex-col sm:flex-row gap-3 items-center mb-6">
                <div className="flex-1 relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                    <input
                        type="text"
                        placeholder="Rechercher dans les archives..."
                        value={state.searchTerm}
                        onChange={(e) => setters.setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none shadow-sm"
                    />
                </div>
                {isDocte && (() => {
                    const FORGE_LABELS = {
                        fairy_types:     { label: 'Forger une Espèce',    color: 'bg-amber-700 hover:bg-amber-800' },
                        fairy_capacites: { label: 'Forger une Capacité',  color: 'bg-indigo-600 hover:bg-indigo-700' },
                        fairy_powers:    { label: 'Forger un Pouvoir',    color: 'bg-indigo-600 hover:bg-indigo-700' },
                        fairy_assets:    { label: 'Forger un Atout',      color: 'bg-indigo-600 hover:bg-indigo-700' },
                        social_items:    { label: 'Forger un Item',       color: 'bg-emerald-700 hover:bg-emerald-800' },
                        specialites:     { label: 'Forger une Spécialité', color: 'bg-blue-600 hover:bg-blue-700' },
                        figures:         { label: 'Forger une Figure',    color: 'bg-purple-600 hover:bg-purple-700' },
                    };
                    const entry = FORGE_LABELS[state.activeTab];
                    if (!entry) return null;
                    return (
                        <button onClick={() => { setters.setIsCreating(true); setters.setEditingItem({}); }} className={`w-full sm:w-auto px-5 py-2.5 ${entry.color} text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shrink-0`}>
                            <Plus size={20} /> {entry.label}
                        </button>
                    );
                })()}
            </div>

            {/* LES JOLIES PUCES DE FILTRAGE (FÉES) */}
            {['fairy_capacites', 'fairy_powers', 'fairy_assets'].includes(state.activeTab) && (
                <div className="flex flex-wrap gap-2 items-center mb-6">
                    <button
                        onClick={() => setters.setSelectedFairyFilter('')}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                            state.selectedFairyFilter === '' ? 'bg-stone-800 text-white shadow-sm' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                        }`}
                    >
                        Toutes
                    </button>
                    
                    <button
                        onClick={() => setters.setSelectedFairyFilter('__UNLINKED__')}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                            state.selectedFairyFilter === '__UNLINKED__' ? 'bg-purple-600 text-white shadow-sm' : 'bg-purple-50 text-purple-600 hover:bg-purple-100 border border-purple-200'
                        }`}
                    >
                        ✨ Universel
                    </button>
                    
                    <div className="hidden sm:block w-px h-6 bg-stone-200 mx-1"></div>
                    
                    {state.encyclopediaRefs?.fairies?.map(f => (
                        <button
                            key={f.id}
                            onClick={() => setters.setSelectedFairyFilter(f.name)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors border ${
                                state.selectedFairyFilter === f.name
                                    ? 'bg-amber-100 text-amber-900 border-amber-400 shadow-sm'
                                    : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                            }`}
                        >
                            {f.name}
                        </button>
                    ))}
                </div>
            )}

            {/* LES JOLIES PUCES DE FILTRAGE (VIE SOCIALE) */}
            {state.activeTab === 'social_items' && (
                <div className="flex flex-col gap-3 mb-6">
                    {/* LIGNE 1 : PROFILS */}
                    <div className="flex flex-wrap gap-2 items-center bg-stone-50 p-2 rounded-xl border border-stone-200">
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest px-2">Profils :</span>
                        <button
                            onClick={() => setters.setSelectedProfileFilter('')}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm ${
                                state.selectedProfileFilter === '' ? 'bg-blue-800 text-white' : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
                            }`}
                        >
                            Tous
                        </button>
                        
                        <button
                            onClick={() => setters.setSelectedProfileFilter('__UNLINKED__')}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm ${
                                state.selectedProfileFilter === '__UNLINKED__' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50 border border-purple-200'
                            }`}
                        >
                            ✨ Universel
                        </button>
                        
                        <div className="hidden sm:block w-px h-6 bg-stone-300 mx-1"></div>
                        
                        {['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'].map(p => (
                            <button
                                key={p}
                                onClick={() => setters.setSelectedProfileFilter(p)}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors shadow-sm border ${
                                    state.selectedProfileFilter === p
                                        ? 'bg-blue-100 text-blue-900 border-blue-400'
                                        : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                                }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>

                    {/* LIGNE 2 : CATÉGORIES */}
                    <div className="flex flex-wrap gap-2 items-center bg-stone-50 p-2 rounded-xl border border-stone-200">
                        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest px-2">Types :</span>
                        <button
                            onClick={() => setters.setSelectedCategoryFilter('')}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm ${
                                state.selectedCategoryFilter === '' ? 'bg-emerald-800 text-white' : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
                            }`}
                        >
                            Toutes Catégories
                        </button>

                        <div className="hidden sm:block w-px h-6 bg-stone-300 mx-1"></div>

                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setters.setSelectedCategoryFilter(cat.id)}
                                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors shadow-sm border capitalize ${
                                    state.selectedCategoryFilter === cat.id
                                        ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                                        : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {state.activeTab === 'specialites' && (
                <div className="flex items-center justify-end gap-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Vue groupée</span>
                    <button
                        role="switch"
                        aria-checked={groupSpecialitesByCompetence}
                        onClick={() => setGroupSpecialitesByCompetence(prev => !prev)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                            groupSpecialitesByCompetence ? 'bg-indigo-600 border-indigo-700' : 'bg-stone-200 border-stone-300'
                        }`}
                    >
                        <span className={`inline-block h-4 w-4 mt-0.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                            groupSpecialitesByCompetence ? 'translate-x-5' : 'translate-x-0.5'
                        }`} />
                    </button>
                </div>
            )}

            {/* CONTENU (GRILLE DES CARTES) */}
            <div id="enc-tabpanel" role="tabpanel" aria-labelledby={`enc-tab-${state.activeTab}`}>
            {state.loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                </div>
            ) : (state.activeTab === 'specialites' && groupSpecialitesByCompetence) ? (
                <div className="space-y-8">
                    {groupedSpecialites.map(group => (
                        <section key={group.competence}>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-800 mb-3">
                                {group.competence}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.items.map(item => (
                                    <EncyclopediaCard
                                        key={item.id}
                                        item={item}
                                        activeTab={state.activeTab}
                                        userProfile={userProfile}
                                        onView={() => setters.setViewingItem(item)}
                                        isLocked={state.pendingLocks.includes(item.id)}
                                        onOpenEdit={() => handlers.handleOpenEdit(item)}
                                        onToggleSeal={() => handlers.triggerToggleSeal(item)}
                                        onDeleteClick={() => handlers.triggerDelete(item)}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                    {groupedSpecialites.length === 0 && (
                        <div className="col-span-full text-center py-12 text-stone-500 italic font-serif">
                            Les archives sont silencieuses sur ce point...
                        </div>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {state.filteredData.map(item => (
                        <EncyclopediaCard
                            key={item.id}
                            item={item}
                            activeTab={state.activeTab}
                            userProfile={userProfile}
                            onView={() => setters.setViewingItem(item)}
                            isLocked={state.pendingLocks.includes(item.id)}
                            onOpenEdit={() => handlers.handleOpenEdit(item)}
                            onToggleSeal={() => handlers.triggerToggleSeal(item)}
                            onDeleteClick={() => handlers.triggerDelete(item)}
                        />
                    ))}
                    {state.filteredData.length === 0 && (
                        <div className="col-span-full text-center py-12 text-stone-500 italic font-serif">
                            Les archives sont silencieuses sur ce point...
                        </div>
                    )}
                </div>
            )}
            </div>

            {/* MODALES D'ÉDITION ET DE LECTURE */}
            {(state.isCreating || state.editingItem) && (
                <EncyclopediaModal
                    activeTab={state.activeTab}
                    editingItem={state.editingItem}
                    setEditingItem={setters.setEditingItem}
                    isCreating={state.isCreating}
                    userProfile={userProfile}
                    allCapacites={state.encyclopediaRefs?.capacites || []}
                    allPouvoirs={state.encyclopediaRefs?.pouvoirs || []}
                    allAtouts={state.encyclopediaRefs?.atouts || []}
                    allCompFutiles={state.competencesFutiles || []}
                    allFairyTypes={state.encyclopediaRefs?.fairies || []}
                    onSuccess={() => {
                        setters.setEditingItem(null);
                        setters.setIsCreating(false);
                        handlers.fetchData();
                        handlers.fetchPendingLocks();
                    }}
                    onClose={() => {
                        setters.setEditingItem(null);
                        setters.setIsCreating(false);
                    }}
                />
            )}

            {state.viewingItem && (
                <EncyclopediaViewModal
                    item={state.viewingItem}
                    activeTab={state.activeTab}
                    isInitiated={isInitiated}
                    userProfile={userProfile}
                    onClose={() => setters.setViewingItem(null)}
                />
            )}

            {/* MODALE DE CONFIRMATION IMMERSIVE */}
            <ConfirmModal
                isOpen={state.confirmState.isOpen}
                title={state.confirmState.title}
                message={state.confirmState.message}
                confirmText={state.confirmState.confirmText}
                onConfirm={state.confirmState.action}
                onCancel={() => setters.setConfirmState(prev => ({ ...prev, isOpen: false }))}
            />
        </div>
    );
}

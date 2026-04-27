// src/components/Encyclopedia.js
import React from 'react';
import { Book, Search, Plus, Shield, FileText, Filter } from 'lucide-react';
import EncyclopediaModal from './EncyclopediaModal';
import EncyclopediaViewModal from './EncyclopediaViewModal';
import EncyclopediaCard from './EncyclopediaCard';
import ConfirmModal from './ConfirmModal';
import { useEncyclopedia } from '../hooks/useEncyclopedia';

export default function Encyclopedia({ userProfile, onBack, onOpenValidations, onOpenMesPropositions }) {
    const { state, setters, handlers } = useEncyclopedia();

    const tabs = [
        { id: 'fairy_types', label: 'Espèces Féériques' },
        { id: 'fairy_capacites', label: 'Capacités' },
        { id: 'fairy_powers', label: 'Pouvoirs' },
        { id: 'fairy_assets', label: 'Atouts' }
    ];

    const isDocte = userProfile?.profile?.is_docte === true;

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
            
            {/* L'ENTÊTE SIMPLE ET ÉPURÉ */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 flex items-center gap-3">
                    <Book className="text-amber-600" /> L'Encyclopédie
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button onClick={onOpenMesPropositions} className="px-4 py-2 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200 transition-colors font-bold text-sm flex items-center gap-2">
                        <FileText size={16} /> Mes Propositions
                    </button>
                    {isDocte && (
                        <button onClick={onOpenValidations} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors font-bold text-sm flex items-center gap-2">
                            <Shield size={16} /> Conseil des Gardiens
                        </button>
                    )}
                    <button onClick={onBack} className="px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors font-bold text-sm">
                        Retour
                    </button>
                </div>
            </div>

            {/* NAVIGATION DES ONGLETS (Style classique souligné) */}
            <div className="flex gap-6 border-b border-stone-200 mb-6 overflow-x-auto custom-scrollbar">
                {tabs.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setters.setActiveTab(t.id)}
                        className={`pb-3 font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                            state.activeTab === t.id
                                ? 'text-amber-900 border-amber-600'
                                : 'text-stone-400 border-transparent hover:text-stone-700 hover:border-stone-300'
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

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
                <button onClick={() => { setters.setIsCreating(true); setters.setEditingItem({}); }} className="w-full sm:w-auto px-5 py-2.5 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2 shadow-md shrink-0">
                    <Plus size={20} /> Forger une Entité
                </button>
            </div>

            {/* ✨ LES FAMEUX BOUTONS DE FILTRAGE PAR FÉE (Pills/Chips Multilignes) */}
            {state.activeTab !== 'fairy_types' && (
                <div className="flex flex-wrap items-center gap-2 mb-6 pb-2">
                    <Filter size={16} className="text-stone-400 mr-1" />
                    
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
			
            {/* CONTENU (GRILLE DES CARTES) */}
            {state.loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
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
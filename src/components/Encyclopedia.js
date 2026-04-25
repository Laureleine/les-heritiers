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
        <div className="max-w-6xl mx-auto p-4 animate-fade-in pb-20">
            {/* L'ENTÊTE */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-stone-900 text-stone-100 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                    <Book size={32} className="text-amber-500" />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-500">L'Encyclopédie</h2>
                        <p className="text-sm text-stone-400 mt-1">Le compendium absolu des savoirs de la Belle Époque</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button onClick={onOpenMesPropositions} className="px-4 py-2 bg-stone-800 text-stone-200 border border-stone-700 rounded-lg hover:bg-stone-700 transition-colors font-bold text-sm flex items-center gap-2">
                        <FileText size={16} /> Mes Propositions
                    </button>
                    {isDocte && (
                        <button onClick={onOpenValidations} className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-bold text-sm shadow-md flex items-center gap-2">
                            <Shield size={16} /> Conseil des Gardiens
                        </button>
                    )}
                    <button onClick={onBack} className="px-4 py-2 bg-white text-stone-900 rounded-lg hover:bg-stone-100 transition-colors font-bold text-sm shadow-md">
                        Retour au Menu
                    </button>
                </div>
            </div>

            {/* BARRE DE RECHERCHE, CRÉATION ET FILTRE */}
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="relative flex-1 max-w-xl">
                        <Search className="absolute left-3 top-3 text-stone-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Rechercher dans les archives..." 
                            value={state.searchTerm}
                            onChange={(e) => setters.setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none shadow-sm transition-all"
                        />
                    </div>
                    <button 
                        onClick={handlers.handleCreateNew}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-900 text-white rounded-xl shadow-md transition-all font-bold"
                    >
                        <Plus size={20} /> Forger une Entité
                    </button>
                </div>
                
                {state.activeTab !== 'fairy_types' && (
                    <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-stone-200 shadow-sm w-fit">
                        <Filter size={16} className="text-stone-400 ml-2" />
                        <select
                            value={state.selectedFairyFilter}
                            onChange={(e) => setters.setSelectedFairyFilter(e.target.value)}
                            className="bg-transparent border-none text-sm font-bold text-stone-600 outline-none focus:ring-0 cursor-pointer pr-4"
                        >
                            <option value="">Toutes les fées</option>
                            <option value="__UNLINKED__">✨ Aucune fée (Universel)</option>
                            <optgroup label="Espèces">
                                {state.encyclopediaRefs?.fairies?.map(f => (
                                    <option key={f.id} value={f.name}>{f.name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                )}
            </div>

            {/* NAVIGATION DES ONGLETS */}
            <div className="flex overflow-x-auto custom-scrollbar mb-6 bg-white p-2 rounded-xl shadow-sm border border-stone-200 gap-2">
                {tabs.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setters.setActiveTab(t.id)}
                        className={`whitespace-nowrap px-6 py-3 rounded-lg font-bold transition-all ${
                            state.activeTab === t.id 
                                ? 'bg-amber-100 text-amber-900 shadow-sm border border-amber-200' 
                                : 'text-stone-600 hover:bg-stone-50'
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

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
// src/components/encyclopedia/RelationSelector.js
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const RelationSelector = ({
    title,
    items = [],
    selectedIds = [],
    onToggle,
    colorTheme = "indigo"
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    // 🧠 LE CERVEAU SÉPARÉ ET MÉMOÏSÉ (Avec le Tri Magnétique !)
    // Il gère la recherche textuelle ET le tri (cochés en haut, puis alphabétique)
    const filteredItems = useMemo(() => {
        
        // 1. On applique d'abord la recherche si elle existe
        let result = items;
        if (searchTerm) {
            result = items.filter(item =>
                (item.nom || item.name || '').toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // ✨ 2. LE TRI MAGNÉTIQUE
        // On crée une copie avec [...result] pour ne pas muter la prop originale
        return [...result].sort((a, b) => {
            const isASelected = selectedIds.includes(a.id);
            const isBSelected = selectedIds.includes(b.id);
            
            // Règle 1 : Si A est coché et B ne l'est pas, A passe devant (-1)
            if (isASelected && !isBSelected) return -1;
            // Règle 2 : Si B est coché et A ne l'est pas, B passe devant (1)
            if (!isASelected && isBSelected) return 1;
            
            // Règle 3 : S'ils sont dans le même état (tous les deux cochés, ou tous les deux décochés),
            // on les trie par ordre alphabétique classique.
            const nameA = a.nom || a.name || '';
            const nameB = b.nom || b.name || '';
            return nameA.localeCompare(nameB);
        });

    }, [items, searchTerm, selectedIds]); // 👈 On écoute selectedIds pour trier en temps réel

    return (
        <div className={`bg-white p-3 rounded border border-${colorTheme}-200 shadow-sm flex flex-col h-full`}>
            <label className={`block text-xs font-bold text-${colorTheme}-800 mb-2`}>
                {title}
            </label>

            <div className="relative mb-3 shrink-0">
                <Search size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 text-${colorTheme}-300`} />
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-9 pr-3 py-1.5 bg-${colorTheme}-50/30 border border-${colorTheme}-100 rounded text-sm focus:outline-none focus:border-${colorTheme}-400 text-stone-700`}
                />
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-1 min-h-[120px] max-h-[200px]">
                {filteredItems.length === 0 ? (
                    <div className="text-xs text-stone-400 italic text-center py-4">Aucun résultat...</div>
                ) : (
                    filteredItems.map(item => (
                        <label
                            key={item.id}
                            className={`flex items-start gap-2 p-1.5 hover:bg-${colorTheme}-50 rounded cursor-pointer transition-colors group`}
                        >
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(item.id)}
                                onChange={(e) => onToggle(item.id, e.target.checked)}
                                className="mt-0.5 shrink-0 accent-stone-700"
                            />
                            <span className={`line-clamp-2 leading-tight text-sm group-hover:text-stone-900 ${selectedIds.includes(item.id) ? 'font-bold text-stone-900' : 'text-stone-700'}`}>
                                {item.nom || item.name}
                            </span>
                        </label>
                    ))
                )}
            </div>
        </div>
    );
};

export default React.memo(RelationSelector);
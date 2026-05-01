// src/components/personnalisation/WidgetLangues.js
import React, { useState, useEffect } from 'react';
import { Globe, Crown, X, AlertCircle, Coins } from 'lucide-react';

const DICTIONNAIRE_LANGUES = {
    "Langues Courantes": ['Français', 'Anglais', 'Allemand', 'Espagnol', 'Italien', 'Russe', 'Portugais', 'Flamand'],
    "Langues Rares": ['Arabe', 'Berbère', 'Hébreu', 'Yiddish', 'Turc', 'Hindi', 'Chinois', 'Japonais'],
    "Langues Anciennes": ['Celte', 'Araméen', 'Grec ancien', 'Latin', 'Sanskrit'],
    "Argots": ['Argot populaire', 'Argot gobelin']
};

export default function WidgetLangues({ character, dispatchCharacter, gameData, isReadOnly }) {
    const cultureTotal = character.computedStats?.competencesTotal?.['Culture'] || 0;
    const isProtys = character.typeFee === 'Protys';
    const isGobelin = character.typeFee === 'Gobelin';

    const selectedLangues = character.profils?.langues || [];
    const maternelle = character.profils?.langueMaternelle || '';

    const [customLang, setCustomLang] = useState('');
    const [isAddingCustom, setIsAddingCustom] = useState(false);

    // ==========================================================================
    // 🧠 1. LE COMPTEUR DE JETONS (Libres vs Achetés)
    // ==========================================================================

    const allBoughtIds = Object.values(character.vieSociale || {}).flat();

    // ✨ LE VRAI FIX EST ICI : On MAP le panier pour préserver les achats multiples !
    const boughtItems = allBoughtIds
        .map(id => gameData?.socialItems?.find(i => i.id === id))
        .filter(i => i && i.categorie === 'langue');

    // L'Arsenal théorique du joueur
    let baseTokens = {
        'Libres': 1 + cultureTotal + (isProtys ? 2 : 0), // Base (1) + Culture + Protys
        'Langues Courantes': 0,
        'Langues Rares': 0,
        'Langues Anciennes': 0,
        'Argots': 0
    };

    // On trie les achats de l'Étape 9 dans les bonnes catégories
    boughtItems.forEach(item => {
        const n = item.nom.toLowerCase();
        if (n.includes('rare')) baseTokens['Langues Rares']++;
        else if (n.includes('ancienne')) baseTokens['Langues Anciennes']++;
        else if (n.includes('argot')) baseTokens['Argots']++;
        else baseTokens['Langues Courantes']++; // Fallback pour "1 langue au choix" ou "européenne"
    });

    const totalBoughtTokens = boughtItems.length;

    // ==========================================================================
    // 🧠 2. L'ALGORITHME DE CONSOMMATION
    // ==========================================================================

    let remainingTokens = { ...baseTokens };

    selectedLangues.forEach(lang => {
        if (isGobelin && lang === 'Argot gobelin') return; // L'Argot Gobelin imposé est 100% gratuit

        // On cherche la catégorie de la langue
        let cat = null;
        for (const [c, list] of Object.entries(DICTIONNAIRE_LANGUES)) {
            if (list.includes(lang)) { cat = c; break; }
        }

        // Exception Livre de Base : Le Celte peut être acheté comme une langue Courante !
        if (cat === 'Langues Anciennes' && lang === 'Celte' && remainingTokens['Langues Courantes'] > 0 && remainingTokens['Langues Anciennes'] === 0) {
            remainingTokens['Langues Courantes']--;
        }
        // Si on a un jeton spécifique pour cette catégorie, on le consomme en priorité
        else if (cat && remainingTokens[cat] > 0) {
            remainingTokens[cat]--;
        }
        // Sinon, on consomme un jeton "Libre" (Culture/Magie) qui sert de Joker
        else {
            remainingTokens['Libres']--;
        }
    });

    const totalRestants = Object.values(remainingTokens).reduce((a, b) => a + (b > 0 ? b : 0), 0);

    // ==========================================================================
    // 🛡️ 3. LES GARDE-FOUS ET MUTATIONS
    // ==========================================================================

    useEffect(() => {
        if (isGobelin && !selectedLangues.includes('Argot gobelin') && !isReadOnly) {
            handleUpdateLangues([...selectedLangues, 'Argot gobelin']);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGobelin, isReadOnly]);

    const handleUpdateLangues = (newLangues) => {
        let newMaternelle = maternelle;
        if (!newLangues.includes(maternelle)) {
            newMaternelle = newLangues.length > 0 ? newLangues : '';
        }
        dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: { ...character.profils, langues: newLangues, langueMaternelle: newMaternelle } }, gameData });
    };

    const addLangue = (lang) => {
        if (isReadOnly || !lang) return;
        if (lang === '__CUSTOM__') { setIsAddingCustom(true); return; }
        if (selectedLangues.includes(lang)) return;

        // Double vérification de sécurité avant l'ajout
        let cat = null;
        for (const [c, list] of Object.entries(DICTIONNAIRE_LANGUES)) {
            if (list.includes(lang)) { cat = c; break; }
        }
        
        const canBuyAsCourante = cat === 'Langues Anciennes' && lang === 'Celte' && remainingTokens['Langues Courantes'] > 0;

        if ((cat && remainingTokens[cat] > 0) || remainingTokens['Libres'] > 0 || canBuyAsCourante) {
            handleUpdateLangues([...selectedLangues, lang]);
        } else {
            if (!(isGobelin && lang === 'Argot gobelin')) return;
        }
    };

    const removeLangue = (lang) => {
        if (isReadOnly) return;
        if (isGobelin && lang === 'Argot gobelin') return;
        handleUpdateLangues(selectedLangues.filter(l => l !== lang));
    };

    // ==========================================================================

    return (
        <div className="bg-white rounded-xl shadow-md border-2 border-blue-300 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 mb-8 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4 p-4 border-b border-blue-200">
                <div className="flex items-center gap-2">
                    <Globe className="text-blue-600" size={24} />
                    <h3 className="text-xl font-serif text-blue-900 font-bold">Érudition & Polyglotte</h3>
                </div>
                <div className={`text-sm font-bold px-3 py-1 rounded-full shadow-sm border transition-colors ${totalRestants > 0 ? 'bg-emerald-100 text-emerald-800 border-emerald-300 animate-pulse' : 'bg-blue-100 text-blue-600 border-blue-200'}`}>
                    {totalRestants} choix en attente
                </div>
            </div>

            <div className="p-6 pt-4 space-y-5">
                {/* LE CONTEXTE NARRATIF */}
                <div className="text-sm text-blue-800 bg-white/80 p-3 rounded-lg border border-blue-200 shadow-sm leading-relaxed">
                    <p>
                        Vous maîtrisez <strong>{baseTokens['Libres']} langue{baseTokens['Libres'] > 1 ? 's' : ''} gratuite{baseTokens['Libres'] > 1 ? 's' : ''}</strong> (Culture + Dons Innés). Elles s'adaptent à n'importe quel dialecte.
                    </p>
                    {totalBoughtTokens > 0 && (
                        <p className="mt-2 text-emerald-700 font-bold flex items-center gap-1 border-t border-blue-200 pt-2">
                            <Coins size={16}/> Vos achats à l'Étape 9 vous donnent accès à {totalBoughtTokens} langue(s) spécifique(s) !
                        </p>
                    )}
                </div>

                {/* L'AFFICHAGE DES LANGUES ACQUISES */}
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                        Vos Langues Maîtrisées
                    </label>
                    {selectedLangues.length === 0 ? (
                        <div className="text-center py-4 bg-white/50 border border-dashed border-blue-200 rounded-lg text-blue-400 text-sm font-serif italic">
                            Sélectionnez des langues pour remplir votre carnet...
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {selectedLangues.map(lang => {
                                const isMaternelle = lang === maternelle;
                                const isForcedGobelin = isGobelin && lang === 'Argot gobelin';
                                return (
                                    <div key={lang} className={`flex items-center gap-1 pl-2 pr-1 py-1.5 rounded-lg border shadow-sm transition-all ${isMaternelle ? 'bg-amber-100 border-amber-400 text-amber-900 scale-105' : 'bg-white border-blue-300 text-blue-900 hover:border-blue-400'}`}>
                                        <button type="button" onClick={() => !isReadOnly && dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { profils: { ...character.profils, langueMaternelle: lang } }, gameData })} className={`p-1 rounded-full transition-colors ${isMaternelle ? 'text-amber-600 bg-amber-50 cursor-default' : 'text-gray-300 hover:text-amber-500 hover:bg-amber-50'}`} title="Définir comme langue maternelle">
                                            <Crown size={16} className={isMaternelle ? 'fill-amber-500' : ''} />
                                        </button>
                                        <span className="font-bold text-sm px-1">{lang}</span>
                                        {isForcedGobelin ? (
                                            <div className="p-1 text-blue-300" title="Malédiction gobeline (Inaliénable)"><AlertCircle size={14} className="text-blue-400" /></div>
                                        ) : !isReadOnly && (
                                            <button onClick={() => removeLangue(lang)} className="p-1 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors"><X size={14} /></button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {selectedLangues.length > 0 && <p className="text-[10px] text-blue-600 italic">Cliquez sur la couronne grise pour définir la Langue Maternelle.</p>}
                </div>

                {/* LE PANNEAU DE SÉLECTION INTELLIGENT */}
                {!isReadOnly && totalRestants > 0 && (
                    <div className="pt-4 border-t border-blue-200/50 space-y-3">
                        {/* 1. Les Choix Libres (Jokers) */}
                        {remainingTokens['Libres'] > 0 && (
                            <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                                <label className="block text-[10px] font-bold text-blue-600 uppercase mb-1 px-1">Jetons Libres ({remainingTokens['Libres']})</label>
                                {isAddingCustom ? (
                                    <div className="flex gap-2 items-center bg-white p-1 rounded-lg shadow-sm border border-blue-300">
                                        <input type="text" autoFocus placeholder="Langue unique..." value={customLang} onChange={(e) => setCustomLang(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { addLangue(customLang.trim()); setCustomLang(''); setIsAddingCustom(false); } if (e.key === 'Escape') setIsAddingCustom(false); }} className="flex-1 p-2 bg-transparent outline-none text-sm font-bold text-blue-900" />
                                        <button onClick={() => { addLangue(customLang.trim()); setCustomLang(''); setIsAddingCustom(false); }} className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-bold">Valider</button>
                                    </div>
                                ) : (
                                    <select onChange={(e) => { addLangue(e.target.value); e.target.value = ''; }} className="w-full p-2 border border-blue-300 rounded outline-none text-sm font-bold text-blue-900 bg-white shadow-sm cursor-pointer" defaultValue="">
                                        <option value="">+ Utiliser un emplacement libre...</option>
                                        {Object.entries(DICTIONNAIRE_LANGUES).map(([cat, liste]) => {
                                            const dispo = liste.filter(l => !selectedLangues.includes(l));
                                            if (dispo.length === 0) return null;
                                            return <optgroup key={cat} label={`📚 ${cat}`}>{dispo.map(l => <option key={l} value={l}>{l}</option>)}</optgroup>;
                                        })}
                                        <optgroup label="✍️ Hors-série"><option value="__CUSTOM__">✨ Autre (Saisir manuellement)...</option></optgroup>
                                    </select>
                                )}
                            </div>
                        )}

                        {/* 2. Les Jetons Achetés (Courantes) */}
                        {remainingTokens['Langues Courantes'] > 0 && (
                            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 shadow-inner">
                                <label className="block text-[10px] font-bold text-emerald-700 uppercase mb-1 px-1 flex items-center gap-1"><Coins size={12}/> Achat Étape 9 ({remainingTokens['Langues Courantes']})</label>
                                <select onChange={(e) => { addLangue(e.target.value); e.target.value = ''; }} className="w-full p-2 border border-emerald-300 rounded outline-none text-sm font-bold text-emerald-900 bg-white cursor-pointer" defaultValue="">
                                    <option value="">+ Utiliser un jeton "Langue Courante"...</option>
                                    {DICTIONNAIRE_LANGUES['Langues Courantes'].filter(l => !selectedLangues.includes(l)).map(l => <option key={l} value={l}>{l}</option>)}
                                    {!selectedLangues.includes('Celte') && <option value="Celte" className="font-bold text-amber-700">Celte (Langue féérique recommandée)</option>}
                                </select>
                            </div>
                        )}

                        {/* 3. Les Jetons Achetés (Rares) */}
                        {remainingTokens['Langues Rares'] > 0 && (
                            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 shadow-inner">
                                <label className="block text-[10px] font-bold text-emerald-700 uppercase mb-1 px-1 flex items-center gap-1"><Coins size={12}/> Achat Étape 9 ({remainingTokens['Langues Rares']})</label>
                                <select onChange={(e) => { addLangue(e.target.value); e.target.value = ''; }} className="w-full p-2 border border-emerald-300 rounded outline-none text-sm font-bold text-emerald-900 bg-white cursor-pointer" defaultValue="">
                                    <option value="">+ Utiliser un jeton "Langue Rare"...</option>
                                    {DICTIONNAIRE_LANGUES['Langues Rares'].filter(l => !selectedLangues.includes(l)).map(l => <option key={l} value={l}>{l}</option>)}
                                </select>
                            </div>
                        )}

                        {/* 4. Les Jetons Achetés (Anciennes) */}
                        {remainingTokens['Langues Anciennes'] > 0 && (
                            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 shadow-inner">
                                <label className="block text-[10px] font-bold text-emerald-700 uppercase mb-1 px-1 flex items-center gap-1"><Coins size={12}/> Achat Étape 9 ({remainingTokens['Langues Anciennes']})</label>
                                <select onChange={(e) => { addLangue(e.target.value); e.target.value = ''; }} className="w-full p-2 border border-emerald-300 rounded outline-none text-sm font-bold text-emerald-900 bg-white cursor-pointer" defaultValue="">
                                    <option value="">+ Utiliser un jeton "Langue Ancienne"...</option>
                                    {DICTIONNAIRE_LANGUES['Langues Anciennes'].filter(l => !selectedLangues.includes(l)).map(l => <option key={l} value={l}>{l}</option>)}
                                </select>
                            </div>
                        )}

                        {/* 5. Les Jetons Achetés (Argots) */}
                        {remainingTokens['Argots'] > 0 && (
                            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 shadow-inner">
                                <label className="block text-[10px] font-bold text-emerald-700 uppercase mb-1 px-1 flex items-center gap-1"><Coins size={12}/> Achat Étape 9 ({remainingTokens['Argots']})</label>
                                <select onChange={(e) => { addLangue(e.target.value); e.target.value = ''; }} className="w-full p-2 border border-emerald-300 rounded outline-none text-sm font-bold text-emerald-900 bg-white cursor-pointer" defaultValue="">
                                    <option value="">+ Utiliser un jeton "Argot"...</option>
                                    {DICTIONNAIRE_LANGUES['Argots'].filter(l => !selectedLangues.includes(l)).map(l => <option key={l} value={l}>{l}</option>)}
                                </select>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

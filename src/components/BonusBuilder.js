// src/components/BonusBuilder.js
import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Activity, BookOpen, Coins, Star, Settings, ChevronDown, GitMerge, Sparkles, AlertCircle, Tag, Lock } from 'lucide-react';
import { addGlobalSpeciality, addCompetenceFutile } from '../utils/supabaseGameData';
import { CARAC_LIST } from '../data/DictionnaireJeu';
import { showInAppNotification } from '../utils/SystemeServices';
import { useCharacter } from '../context/CharacterContext'; // ✨ AJOUT DU CERVEAU CENTRAL

const generateId = () => typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2);

export default function BonusBuilder({
    parsedTech, updateTech, rawJson, onJsonChange,
    usefulSkills = [], futilesSkills = [], competencesData = [], setCompetencesData = null,
    onPendingChanges
}) {
    const { gameData } = useCharacter(); // ✨ CONNEXION AU NUAGE
    const socialItems = gameData?.socialItems || []; // ✨ EXTRACTION DU CATALOGUE

    // ==========================================
    // 1. TOUS LES ÉTATS (DÉCLARATION)
    // ==========================================
    const [creatingFutileId, setCreatingFutileId] = useState(null);
    const [newFutileName, setNewFutileName] = useState('');
    const [newFutileDesc, setNewFutileDesc] = useState('');
    const [creatingSpecFor, setCreatingSpecFor] = useState(null);
    const [newSpecName, setNewSpecName] = useState('');
    const [blocks, setBlocks] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    useEffect(() => {
        if (onPendingChanges) onPendingChanges(hasUnsavedChanges);
    }, [hasUnsavedChanges, onPendingChanges]);

    // ==========================================
    // 2. SYNCHRONISATION INITIALE (Lecture du JSON)
    // ==========================================
    useEffect(() => {
        let currentParsed = parsedTech;
        if (rawJson && typeof rawJson === 'string') {
            try { currentParsed = JSON.parse(rawJson); } catch (e) {}
        }
        
        const initialBlocks = [];

        if (currentParsed?.caracteristiques) {
            Object.entries(currentParsed.caracteristiques).forEach(([key, val]) => {
                initialBlocks.push({ id: generateId(), type: 'carac', key, val });
            });
        }
        if (currentParsed?.competences) {
            Object.entries(currentParsed.competences).forEach(([key, val]) => {
                initialBlocks.push({ id: generateId(), type: 'comp', key, val });
            });
        }
        if (currentParsed?.fortune_bonus) {
            initialBlocks.push({ id: generateId(), type: 'fortune', key: 'fortune', val: currentParsed.fortune_bonus });
        } else if (currentParsed?.fortune) {
            initialBlocks.push({ id: generateId(), type: 'fortune', key: 'fortune', val: currentParsed.fortune });
        }
        if (currentParsed?.specialites) {
            currentParsed.specialites.forEach(s => {
                initialBlocks.push({ id: generateId(), type: 'spec', comp: s.competence, nom: s.nom });
            });
        }
        if (currentParsed?.price_modifiers) {
            Object.entries(currentParsed.price_modifiers).forEach(([key, val]) => {
                initialBlocks.push({ id: generateId(), type: 'price_modifier', key, val });
            });
        }
        if (currentParsed?.prerequis) {
            initialBlocks.push({ id: generateId(), type: 'prerequis', key: 'prerequis', val: currentParsed.prerequis });
        }
        if (currentParsed?.predilections) {
            currentParsed.predilections.forEach(p => {
                if (typeof p === 'string') {
                    initialBlocks.push({ id: generateId(), type: 'pred_fixe', key: p });
                } else if (p.isChoix) {
                    initialBlocks.push({ id: generateId(), type: 'pred_choix', options: p.options || [] });
                } else if (p.isSpecialiteChoix) {
                    const optionsFormattees = (p.options || []).map(opt => {
                        if (opt.includes(':')) return opt;
                        if (p.nom) return `${p.nom}: ${opt}`;
                        return opt;
                    });
                    initialBlocks.push({ id: generateId(), type: 'pred_spec_choix', options: optionsFormattees, comp: '', nom: '' });
                } else if (p.nom) {
                    initialBlocks.push({ id: generateId(), type: 'pred_fixe', key: p.nom, nom: p.specialite || '' });
                }
            });
        }
        if (currentParsed?.futiles) {
            currentParsed.futiles.forEach(f => {
                if (f.isChoix) {
                    initialBlocks.push({ id: generateId(), type: 'futile_choix', options: f.options || [] });
                } else {
                    initialBlocks.push({ id: generateId(), type: 'futile_fixe', key: f.nom });
                }
            });
        }

        setBlocks(initialBlocks);
        setHasUnsavedChanges(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rawJson]);

    // ==========================================
    // 3. LE GÉNÉRATEUR PUR (Synchrone)
    // ==========================================
    const generateTechJson = (currentBlocks) => {
        const newTech = {};

        currentBlocks.forEach(b => {
            if (b.type === 'carac') {
                if (!newTech.caracteristiques) newTech.caracteristiques = {};
                newTech.caracteristiques[b.key] = parseInt(b.val) || 0;
            } else if (b.type === 'comp') {
                if (!newTech.competences) newTech.competences = {};
                newTech.competences[b.key] = parseInt(b.val) || 0;
            } else if (b.type === 'fortune') {
                newTech.fortune_bonus = parseInt(b.val) || 0;
            } else if (b.type === 'spec' && b.comp && b.nom) {
                if (!newTech.specialites) newTech.specialites = [];
                newTech.specialites.push({ competence: b.comp, nom: b.nom });
            } else if (b.type === 'price_modifier' && b.key) {
                if (!newTech.price_modifiers) newTech.price_modifiers = {};
                newTech.price_modifiers[b.key] = parseInt(b.val) || 0;
            } else if (b.type === 'prerequis') {
                newTech.prerequis = b.val;
            } else if (b.type === 'pred_fixe' && b.key) {
                if (!newTech.predilections) newTech.predilections = [];
                if (b.nom) newTech.predilections.push({ nom: b.key, specialite: b.nom });
                else newTech.predilections.push(b.key);
            } else if (b.type === 'pred_choix') {
                if (!newTech.predilections) newTech.predilections = [];
                newTech.predilections.push({ isChoix: true, options: b.options || [] });
            } else if (b.type === 'pred_spec_choix') {
                if (!newTech.predilections) newTech.predilections = [];
                newTech.predilections.push({ isSpecialiteChoix: true, options: b.options || [] });
            } else if (b.type === 'futile_fixe' && b.key) {
                if (!newTech.futiles) newTech.futiles = [];
                newTech.futiles.push({ nom: b.key });
            } else if (b.type === 'futile_choix') {
                if (!newTech.futiles) newTech.futiles = [];
                newTech.futiles.push({ isChoix: true, options: b.options || [] });
            }
        });
        return newTech;
    };

    const handleValidateBlocks = () => {
        const newTech = generateTechJson(blocks);
        if (updateTech) updateTech(newTech);
        if (onJsonChange) onJsonChange(JSON.stringify(newTech, null, 2));
        setHasUnsavedChanges(false);
        showInAppNotification("Briques techniques compilées avec succès !", "success");
    };

    // ==========================================
    // 4. GESTION DES ÉVÉNEMENTS (Uncontrolled Local)
    // ==========================================
    const addBlock = (type) => {
        const newBlock = { id: generateId(), type, key: '', val: 1, comp: '', nom: '', options: [] };
        if (type === 'carac') newBlock.key = 'force';
        else if (type === 'comp') newBlock.key = usefulSkills[0] || 'Mêlée';
        else if (type === 'price_modifier') newBlock.val = 0;
        setBlocks([...blocks, newBlock]);
        setShowMenu(false);
        setHasUnsavedChanges(true);
    };

    const updateBlock = (id, field, value) => {
        setBlocks(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
        setHasUnsavedChanges(true);
    };

    const handleDeleteBlock = (id) => {
        const newBlocks = blocks.filter(b => b.id !== id);
        setBlocks(newBlocks);
        setHasUnsavedChanges(true);
    };

    const handleCreateFutile = async (blockId) => {
        if (!newFutileName.trim()) return;
        try {
            await addCompetenceFutile({ nom: newFutileName.trim(), description: newFutileDesc.trim() || 'Créée depuis la forge.' });
            updateBlock(blockId, 'key', newFutileName.trim());
            setCreatingFutileId(null);
            setNewFutileName('');
            setNewFutileDesc('');
        } catch (e) {
            showInAppNotification("Erreur lors de la création de la compétence.", "error");
        }
    };

    const allFutiles = futilesSkills;

    const BLOCK_TYPES = [
        { id: 'prerequis', label: 'Prérequis (Condition)', icon: <Lock size={14}/>, color: 'bg-stone-100 text-stone-800 border-stone-300' },
        { id: 'carac', label: 'Bonus Caractéristique', icon: <Activity size={14}/>, color: 'bg-red-100 text-red-800 border-red-200' },
        { id: 'comp', label: 'Bonus Compétence', icon: <BookOpen size={14}/>, color: 'bg-blue-100 text-blue-800 border-blue-200' },
        { id: 'spec', label: 'Spécialité Offerte', icon: <Star size={14}/>, color: 'bg-amber-100 text-amber-800 border-amber-200' },
        { id: 'fortune', label: 'Bonus Fortune', icon: <Coins size={14}/>, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
        { id: 'price_modifier', label: 'Ajustement Prix Boutique', icon: <Tag size={14}/>, color: 'bg-rose-100 text-rose-800 border-rose-200' },
        { id: 'pred_choix', label: 'Choix de Compétence Utile (OU)', icon: <GitMerge size={14}/>, color: 'bg-purple-100 text-purple-800 border-purple-200' },
        { id: 'pred_spec_choix', label: 'Choix de Spécialité (OU)', icon: <Star size={14}/>, color: 'bg-pink-100 text-pink-800 border-pink-200' },
        { id: 'pred_fixe', label: 'Utile Imposée', icon: <BookOpen size={14}/>, color: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200' },
        { id: 'futile_choix', label: 'Choix de Futile (OU)', icon: <Sparkles size={14}/>, color: 'bg-teal-100 text-teal-800 border-teal-200' },
        { id: 'futile_fixe', label: 'Futile Imposée', icon: <Sparkles size={14}/>, color: 'bg-cyan-100 text-cyan-800 border-cyan-200' }
    ];

    return (
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 shadow-inner relative pb-4">
            
            {hasUnsavedChanges && (
                <div className="p-3 mb-4 bg-amber-50 border border-amber-400 rounded-lg flex justify-between items-center animate-fade-in shadow-sm sticky top-0 z-10">
                    <span className="text-sm text-amber-800 font-bold flex items-center gap-2">
                        <AlertCircle size={16}/> Modifications en attente de compilation
                    </span>
                    <button
                        onClick={handleValidateBlocks}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold shadow-sm transition-colors flex items-center gap-2"
                    >
                        <GitMerge size={16}/> Compiler les Effets
                    </button>
                </div>
            )}

            <div className="flex justify-between items-center mb-4">
                <label className="font-serif font-bold text-stone-800 flex items-center gap-2">
                    <Settings size={18} className="text-stone-500"/> Règles Techniques (Effets)
                </label>
                
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        className="flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm transition-all"
                    >
                        <Plus size={16} /> Ajouter une règle <ChevronDown size={14} />
                    </button>
                    
                    {showMenu && (
                        <>
                            <div className="fixed inset-0 z-20" onClick={() => setShowMenu(false)}></div>
                            <div className="absolute right-0 top-10 w-64 bg-white border border-stone-200 rounded-lg shadow-xl z-30 py-2 animate-fade-in-up">
                                {BLOCK_TYPES.map(bt => (
                                    <button
                                        key={bt.id}
                                        type="button"
                                        onClick={() => addBlock(bt.id)}
                                        className="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 flex items-center gap-2 transition-colors"
                                    >
                                        <div className={`p-1 rounded ${bt.color}`}>{bt.icon}</div>
                                        <span className="font-bold text-stone-700">{bt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {blocks.length === 0 && (
                <div className="text-center text-stone-400 italic py-6 text-sm border-2 border-dashed border-stone-200 rounded-lg">
                    Aucun effet technique configuré. Cliquez sur "Ajouter une règle".
                </div>
            )}

            {/* ✨ LES LISTES D'AUTOCOMPLÉTION (DATALIST) */}
            <datalist id="utiles-list">
                {usefulSkills.map(s => <option key={s} value={s} />)}
            </datalist>
            <datalist id="futiles-list">
                {futilesSkills.map(s => <option key={s} value={s} />)}
            </datalist>
            {/* ✨ NOUVEAU : La liste de suggestion intelligente pour le catalogue entier */}
            <datalist id="social-items-list">
                {socialItems.map(item => <option key={item.id} value={item.nom} />)}
            </datalist>

            {blocks.map(block => (
                <div key={block.id} className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm border border-stone-200 animate-fade-in group mb-2 last:mb-0">
                    
                    {/* ✨ LA BRIQUE PRÉREQUIS */}
                    {block.type === 'prerequis' && (
                        <>
                            <div className="bg-stone-100 text-stone-800 p-2 rounded border border-stone-300 shrink-0"><Lock size={18}/></div>
                            <span className="text-sm font-bold text-stone-900 shrink-0">Condition :</span>
                            <input
                                type="text"
                                placeholder="Ex: Avoir 3 en Sciences..."
                                value={block.val}
                                onChange={(e) => updateBlock(block.id, 'val', e.target.value)}
                                className="w-full p-1.5 border border-stone-300 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-stone-400 outline-none"
                            />
                        </>
                    )}

                    {block.type === 'carac' && (
                        <>
                            <div className="bg-red-100 text-red-800 p-2 rounded border border-red-200"><Activity size={18}/></div>
                            <select value={block.key} onChange={(e) => updateBlock(block.id, 'key', e.target.value)} className="flex-1 p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-red-200 outline-none">
                                {CARAC_LIST.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
                            </select>
                            <span className="text-stone-400 font-bold">+</span>
                            <input type="number" min="1" max="5" value={block.val} onChange={(e) => updateBlock(block.id, 'val', e.target.value)} className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-red-200 outline-none" />
                        </>
                    )}

                    {block.type === 'comp' && (
                        <>
                            <div className="bg-blue-100 text-blue-800 p-2 rounded border border-blue-200"><BookOpen size={18}/></div>
                            <select value={block.key} onChange={(e) => updateBlock(block.id, 'key', e.target.value)} className="flex-1 p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-blue-200 outline-none">
                                {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <span className="text-stone-400 font-bold">+</span>
                            <input type="number" min="1" max="5" value={block.val} onChange={(e) => updateBlock(block.id, 'val', e.target.value)} className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-blue-200 outline-none" />
                        </>
                    )}

                    {block.type === 'fortune' && (
                        <>
                            <div className="bg-emerald-100 text-emerald-800 p-2 rounded border border-emerald-200"><Coins size={18}/></div>
                            <span className="text-sm font-bold text-stone-700 flex-1">Bonus de Fortune / Richesse</span>
                            <span className="text-stone-400 font-bold">+</span>
                            <input type="number" min="1" max="10" value={block.val} onChange={(e) => updateBlock(block.id, 'val', e.target.value)} className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-emerald-200 outline-none" />
                        </>
                    )}

                    {/* ✨ LE LEGO D'AJUSTEMENT DE PRIX (Désormais Connecté et Intelligent) */}
                    {block.type === 'price_modifier' && (
                        <>
                            <div className="bg-rose-100 text-rose-800 p-2 rounded border border-rose-200 shrink-0"><Tag size={18}/></div>
                            <span className="text-sm font-bold text-rose-900 shrink-0">Nouveau prix de :</span>
                            <input
                                type="text"
                                list="social-items-list" // ✨ ICI : La magie de l'autocomplétion native !
                                placeholder="Ex: Capitaine d'industrie"
                                value={block.key}
                                onChange={(e) => updateBlock(block.id, 'key', e.target.value)}
                                className="flex-1 min-w-[140px] p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-rose-200 outline-none"
                            />
                            <span className="text-stone-400 font-bold shrink-0">➡</span>
                            <div className="flex items-center gap-1 shrink-0">
                                <input
                                    type="number"
                                    min="0"
                                    max="99"
                                    value={block.val}
                                    onChange={(e) => updateBlock(block.id, 'val', e.target.value)}
                                    className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-rose-200 outline-none"
                                />
                                <span className="text-xs font-bold text-stone-500">PP</span>
                            </div>
                        </>
                    )}

                    {block.type === 'spec' && (() => {
                        const compData = competencesData.find(c => c.name === block.comp) || {};
                        const availableSpecs = compData.specialites || [];
                        const isCreating = creatingSpecFor === block.id;

                        return (
                            <>
                                <div className="bg-amber-100 text-amber-800 p-2 rounded border border-amber-200"><Star size={18}/></div>
                                <span className="text-sm font-bold text-amber-900">Spécialité :</span>
                                <select
                                    value={block.comp}
                                    onChange={(e) => {
                                        updateBlock(block.id, 'comp', e.target.value);
                                        updateBlock(block.id, 'nom', '');
                                    }}
                                    className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-amber-200 outline-none w-1/3"
                                >
                                    <option value="">Compétence...</option>
                                    {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                                <span className="text-stone-400 font-bold">▶</span>
                                
                                {!block.comp ? (
                                    <span className="text-sm italic text-stone-400 flex-1">Sélectionnez d'abord la compétence...</span>
                                ) : isCreating ? (
                                    <div className="flex gap-1 flex-1 animate-fade-in">
                                        <input type="text" autoFocus placeholder="Nouvelle spécialité..." value={newSpecName} onChange={e => setNewSpecName(e.target.value)} className="p-1 border border-stone-300 rounded text-xs flex-1 outline-none focus:border-amber-500" />
                                        <button 
                                            onClick={async () => {
                                                if (newSpecName.trim()) {
                                                    try {
                                                        await addGlobalSpeciality(compData.id, newSpecName.trim());
                                                        updateBlock(block.id, 'nom', newSpecName.trim());
                                                        setCreatingSpecFor(null);
                                                        setNewSpecName('');
                                                    } catch(e) {
                                                        showInAppNotification("Erreur lors de la création.", "error");
                                                    }
                                                } else {
                                                    setCreatingSpecFor(null);
                                                    setNewSpecName('');
                                                }
                                            }}
                                            className="bg-amber-600 text-white px-2 py-1 rounded text-[10px] font-bold shadow-sm"
                                        >Créer</button>
                                        <button onClick={() => { setCreatingSpecFor(null); setNewSpecName(''); }} className="bg-stone-200 text-stone-600 px-2 py-1 rounded text-[10px] font-bold">X</button>
                                    </div>
                                ) : (
                                    <select
                                        value={block.nom}
                                        onChange={(e) => {
                                            if (e.target.value === '__CREATE_NEW__') {
                                                setCreatingSpecFor(block.id);
                                                setNewSpecName('');
                                            } else {
                                                updateBlock(block.id, 'nom', e.target.value);
                                            }
                                        }}
                                        className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-amber-200 outline-none flex-1"
                                    >
                                        <option value="">Spécialité (Offerte)...</option>
                                        <option value="__CREATE_NEW__">✨ Créer une nouvelle...</option>
                                        {availableSpecs.filter(s => s.is_official).length > 0 && (
                                            <optgroup label="📚 Officielles">{availableSpecs.filter(s => s.is_official).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}</optgroup>
                                        )}
                                        {availableSpecs.filter(s => !s.is_official).length > 0 && (
                                            <optgroup label="👥 Communauté">{availableSpecs.filter(s => !s.is_official).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}</optgroup>
                                        )}
                                    </select>
                                )}
                            </>
                        );
                    })()}

                    {block.type === 'pred_choix' && (
                        <>
                            <div className="bg-purple-100 text-purple-800 p-2 rounded border border-purple-200"><GitMerge size={18}/></div>
                            <span className="text-sm font-bold text-purple-900">Choix (Utiles) :</span>
                            <div className="flex flex-wrap gap-1 flex-1 items-center border border-stone-200 p-1.5 rounded-lg bg-stone-50 min-h-[42px] shadow-inner">
                                {(block.options || []).map(opt => (
                                    <span key={opt} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-bold shadow-sm animate-fade-in">
                                        {opt}
                                        <button onClick={() => {
                                            const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: b.options.filter(o => o !== opt) } : b);
                                            setBlocks(newBlocks);
                                            setHasUnsavedChanges(true);
                                        }} className="hover:text-red-300 ml-1"><X size={10}/></button>
                                    </span>
                                ))}
                                <input
                                    type="text"
                                    placeholder="+ Ajouter (Entrée)"
                                    list="utiles-list"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && e.target.value.trim()) {
                                            e.preventDefault();
                                            const val = e.target.value.trim();
                                            if (!(block.options || []).includes(val)) {
                                                const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: [...(b.options || []), val] } : b);
                                                setBlocks(newBlocks);
                                                setHasUnsavedChanges(true);
                                            }
                                            e.target.value = '';
                                        }
                                    }}
                                    className="text-xs bg-transparent outline-none focus:ring-0 font-bold text-stone-500 placeholder-stone-400 flex-1 border-none min-w-[120px]"
                                />
                            </div>
                        </>
                    )}

                    {block.type === 'pred_spec_choix' && (() => {
                        const compData = competencesData.find(c => c.name === block.comp) || {};
                        const availableSpecs = compData.specialites || [];
                        
                        return (
                            <>
                                <div className="bg-pink-100 text-pink-800 p-2 rounded border border-pink-200"><Star size={18}/></div>
                                <span className="text-sm font-bold text-pink-900">Choix (Spé) :</span>
                                <div className="flex-1 flex flex-col gap-1">
                                    <div className="flex flex-wrap gap-1 items-center border border-stone-200 p-1.5 rounded-lg bg-stone-50 min-h-[32px] shadow-inner">
                                        {(block.options || []).map(opt => (
                                            <span key={opt} className="bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-bold shadow-sm animate-fade-in">
                                                {opt}
                                                <button onClick={() => {
                                                    const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: b.options.filter(o => o !== opt) } : b);
                                                    setBlocks(newBlocks);
                                                    setHasUnsavedChanges(true);
                                                }} className="hover:text-red-300 ml-1"><X size={10}/></button>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2 mt-1">
                                        <select
                                            value={block.comp || ''}
                                            onChange={(e) => updateBlock(block.id, 'comp', e.target.value)}
                                            className="p-1 border border-stone-200 rounded text-xs bg-white outline-none w-full sm:w-1/3"
                                        >
                                            <option value="">+ Compétence...</option>
                                            {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                        
                                        {block.comp && (
                                            <div className="flex items-center gap-1 flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Nom de la spécialité..."
                                                    list={`specs-list-${block.id}`}
                                                    value={block.nom || ''}
                                                    onChange={(e) => updateBlock(block.id, 'nom', e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter' && e.target.value.trim()) {
                                                            e.preventDefault();
                                                            const newOpt = `${block.comp}: ${e.target.value.trim()}`;
                                                            if (!(block.options || []).includes(newOpt)) {
                                                                const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: [...(b.options || []), newOpt], nom: '' } : b);
                                                                setBlocks(newBlocks);
                                                                setHasUnsavedChanges(true);
                                                            }
                                                        }
                                                    }}
                                                    className="text-xs p-1 border border-stone-200 rounded bg-white outline-none flex-1"
                                                />
                                                <datalist id={`specs-list-${block.id}`}>
                                                    {availableSpecs.map(s => <option key={s.id || s.nom} value={s.nom} />)}
                                                </datalist>
                                                <button onClick={() => {
                                                    if (block.nom?.trim()) {
                                                        const newOpt = `${block.comp}: ${block.nom.trim()}`;
                                                        if (!(block.options || []).includes(newOpt)) {
                                                            const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: [...(b.options || []), newOpt], nom: '' } : b);
                                                            setBlocks(newBlocks);
                                                            setHasUnsavedChanges(true);
                                                        }
                                                    }
                                                }} className="bg-pink-600 text-white px-2 py-1 rounded text-[10px] font-bold shadow-sm">Ajouter</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        );
                    })()}

                    {block.type === 'pred_fixe' && (() => {
                        const safeKey = typeof block.key === 'string' ? block.key.normalize('NFC') : '';
                        const safeUsefulSkills = usefulSkills.map(s => typeof s === 'string' ? s.normalize('NFC') : s);
                        const compData = competencesData?.find(c => (c.name || '').normalize('NFC') === safeKey) || {};
                        const availableSpecs = compData.specialites || [];
                        const isCreating = creatingSpecFor === block.id;

                        return (
                            <>
                                <div className="bg-fuchsia-100 text-fuchsia-800 p-2 rounded border border-fuchsia-200 shrink-0">
                                    <BookOpen size={18}/>
                                </div>
                                <span className="text-sm font-bold text-fuchsia-900 shrink-0">Utile Imposée :</span>
                                <select
                                    value={safeKey}
                                    onChange={(e) => updateBlock(block.id, 'key', e.target.value)}
                                    className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-fuchsia-200 outline-none flex-1 min-w-[140px]"
                                >
                                    <option value="">Sélectionnez...</option>
                                    {safeUsefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                                <span className="text-stone-400 font-bold shrink-0">▶</span>
                                {!block.key ? (
                                    <span className="text-sm italic text-stone-400 flex-1">En attente...</span>
                                ) : isCreating ? (
                                    <div className="flex gap-1 flex-1 animate-fade-in">
                                        <input type="text" autoFocus placeholder="Nouvelle..." value={newSpecName} onChange={e => setNewSpecName(e.target.value)} className="p-1 border border-stone-300 rounded text-xs flex-1 outline-none focus:border-fuchsia-500" />
                                        <button 
                                            onClick={async () => {
                                                if (newSpecName.trim()) {
                                                    try {
                                                        await addGlobalSpeciality(compData.id, newSpecName.trim());
                                                        updateBlock(block.id, 'nom', newSpecName.trim());
                                                        setCreatingSpecFor(null);
                                                        setNewSpecName('');
                                                    } catch(e) { showInAppNotification("Erreur de création.", "error"); }
                                                } else {
                                                    setCreatingSpecFor(null);
                                                    setNewSpecName('');
                                                }
                                            }}
                                            className="bg-fuchsia-600 text-white px-2 py-1 rounded text-[10px] font-bold shadow-sm"
                                        >Créer</button>
                                        <button onClick={() => { setCreatingSpecFor(null); setNewSpecName(''); }} className="bg-stone-200 text-stone-600 px-2 py-1 rounded text-[10px] font-bold">X</button>
                                    </div>
                                ) : (
                                    <select
                                        value={typeof block.nom === 'string' ? block.nom.normalize('NFC') : ''}
                                        onChange={(e) => {
                                            if (e.target.value === '__CREATE_NEW__') {
                                                setCreatingSpecFor(block.id);
                                                setNewSpecName('');
                                            } else {
                                                updateBlock(block.id, 'nom', e.target.value);
                                            }
                                        }}
                                        className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-fuchsia-200 outline-none flex-1 min-w-[140px]"
                                    >
                                        <option value="">Spécialité (Optionnelle)...</option>
                                        <option value="__CREATE_NEW__">✨ Créer une nouvelle...</option>
                                        {availableSpecs.filter(s => s.is_official).length > 0 && (
                                            <optgroup label="📚 Officielles">{availableSpecs.filter(s => s.is_official).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}</optgroup>
                                        )}
                                        {availableSpecs.filter(s => !s.is_official).length > 0 && (
                                            <optgroup label="👥 Communauté">{availableSpecs.filter(s => !s.is_official).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}</optgroup>
                                        )}
                                    </select>
                                )}
                            </>
                        );
                    })()}

                    {block.type === 'futile_choix' && (
                        <>
                            <div className="bg-teal-100 text-teal-800 p-2 rounded border border-teal-200"><Sparkles size={18}/></div>
                            <span className="text-sm font-bold text-teal-900">Choix (Futiles) :</span>
                            <div className="flex flex-wrap gap-1 flex-1 items-center border border-stone-200 p-1.5 rounded-lg bg-stone-50 min-h-[42px] shadow-inner">
                                {(block.options || []).map(opt => (
                                    <span key={opt} className="bg-teal-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-bold shadow-sm animate-fade-in">
                                        {opt}
                                        <button onClick={() => {
                                            const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: b.options.filter(o => o !== opt) } : b);
                                            setBlocks(newBlocks);
                                            setHasUnsavedChanges(true);
                                        }} className="hover:text-red-300 ml-1"><X size={10}/></button>
                                    </span>
                                ))}
                                {creatingFutileId === block.id ? (
                                    <div className="flex gap-1 animate-fade-in">
                                        <input autoFocus type="text" placeholder="Nom..." value={newFutileName} onChange={e => setNewFutileName(e.target.value)} className="w-24 p-1 border border-teal-300 rounded text-xs outline-none focus:ring-1 focus:ring-teal-500" />
                                        <button onClick={async () => {
                                            if (!newFutileName.trim()) return;
                                            try {
                                                await addCompetenceFutile({ nom: newFutileName.trim(), description: 'Créée via la forge.' });
                                                const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: [...(b.options || []), newFutileName.trim()] } : b);
                                                setBlocks(newBlocks);
                                                setHasUnsavedChanges(true);
                                                setCreatingFutileId(null);
                                                setNewFutileName('');
                                            } catch(e) { showInAppNotification("Erreur.", "error"); }
                                        }} className="bg-teal-600 text-white rounded px-2 py-1 text-xs font-bold">OK</button>
                                    </div>
                                ) : (
                                    <select
                                        onChange={(e) => {
                                            if (e.target.value === '__CREATE__') setCreatingFutileId(block.id);
                                            else if (e.target.value) {
                                                const val = e.target.value;
                                                if (!(block.options || []).includes(val)) {
                                                    const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: [...(b.options || []), val] } : b);
                                                    setBlocks(newBlocks);
                                                    setHasUnsavedChanges(true);
                                                }
                                                e.target.value = '';
                                            }
                                        }}
                                        className="text-xs bg-transparent outline-none focus:ring-0 font-bold text-teal-700 flex-1 border-none min-w-[140px] cursor-pointer"
                                    >
                                        <option value="">+ Ajouter (Futiles)...</option>
                                        {allFutiles.filter(f => !(block.options || []).includes(f)).map(s => <option key={s} value={s}>{s}</option>)}
                                        <option value="__CREATE__" className="font-bold text-teal-700">➕ Créer une nouvelle...</option>
                                    </select>
                                )}
                            </div>
                        </>
                    )}

                    {block.type === 'futile_fixe' && (
                        <>
                            <div className="bg-cyan-100 text-cyan-800 p-2 rounded border border-cyan-200"><Sparkles size={18}/></div>
                            <span className="text-sm font-bold text-cyan-900">Futile imposée :</span>
                            {creatingFutileId === block.id ? (
                                <div className="flex gap-1 flex-1 animate-fade-in">
                                    <input autoFocus type="text" placeholder="Nouvelle futile..." value={newFutileName} onChange={e => setNewFutileName(e.target.value)} className="flex-1 p-1.5 border border-cyan-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-cyan-500" />
                                    <button onClick={() => handleCreateFutile(block.id)} className="bg-cyan-600 text-white rounded px-2 py-1 text-xs font-bold shadow-sm hover:bg-cyan-700 transition-colors">Créer</button>
                                    <button onClick={() => { setCreatingFutileId(null); setNewFutileName(''); }} className="bg-gray-200 text-gray-600 rounded px-2 py-1 text-xs font-bold hover:bg-gray-300 transition-colors">Annuler</button>
                                </div>
                            ) : (
                                <select
                                    value={block.key}
                                    onChange={(e) => {
                                        if (e.target.value === '__CREATE__') setCreatingFutileId(block.id);
                                        else updateBlock(block.id, 'key', e.target.value);
                                    }}
                                    className="flex-1 p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-cyan-200 outline-none"
                                >
                                    <option value="">Sélectionnez...</option>
                                    {allFutiles.map(s => <option key={s} value={s}>{s}</option>)}
                                    <option value="__CREATE__" className="font-bold text-cyan-700">➕ Créer une nouvelle...</option>
                                </select>
                            )}
                        </>
                    )}

                    <button onClick={() => handleDeleteBlock(block.id)} className="ml-auto p-1.5 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100" title="Supprimer">
                        <Trash2 size={16} />
                    </button>
                </div>
            ))}
        </div>
    );
}
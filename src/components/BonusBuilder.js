// src/components/BonusBuilder.js

import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Activity, BookOpen, Coins, Star, Settings, ChevronDown, GitMerge, Sparkles, AlertCircle } from 'lucide-react';
import { addGlobalSpeciality, addCompetenceFutile } from '../utils/supabaseGameData';
import { CARAC_LIST } from '../data/DictionnaireJeu';
import { showInAppNotification } from '../utils/SystemeServices';

const generateId = () => typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2);

export default function BonusBuilder({ 
  parsedTech, updateTech, rawJson, onJsonChange, 
  usefulSkills = [], futilesSkills = [], competencesData = [], setCompetencesData = null,
  onPendingChanges
}) {
  // ==========================================
  // 1. TOUS LES ÉTATS (DÉCLARATION)
  // ==========================================
  const [creatingFutileId, setCreatingFutileId] = useState(null);
  const [newFutileName, setNewFutileName] = useState('');
  const [newFutileDesc, setNewFutileDesc] = useState(''); 
  const [localCreatedFutiles, setLocalCreatedFutiles] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [creatingSpecFor, setCreatingSpecFor] = useState(null);
  const [newSpecName, setNewSpecName] = useState('');
  
  // ✨ LE BOUCLIER DE SYNCHRONISATION
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const allFutiles = Array.from(new Set([...futilesSkills, ...localCreatedFutiles]));

  // ✨ AJOUTE CE BLOC ICI : On prévient le parent à chaque changement d'état
  useEffect(() => {
    if (onPendingChanges) {
      onPendingChanges(hasUnsavedChanges);
    }
  }, [hasUnsavedChanges, onPendingChanges]);
  
  // ==========================================
  // 2. INITIALISATION & SYNCHRONISATION (Pure & Sûre)
  // ==========================================
  useEffect(() => {
    let currentParsed = {};
    try {
      // 🛡️ On s'affranchit de parsedTech (qui change de réf. à chaque frappe du parent)
      // On se base strictement sur le string brut !
      currentParsed = rawJson ? JSON.parse(rawJson) : (parsedTech || {});
    } catch (e) {
      currentParsed = parsedTech || {};
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
        initialBlocks.push({ id: generateId(), type: 'spec', key: s.competence, nom: s.nom });
      });
    }
    if (currentParsed?.predilections) {
      currentParsed.predilections.forEach(p => {
        initialBlocks.push({ id: generateId(), type: 'predilection_fixe', key: p });
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
    
    // 🛡️ BOUCLIER ANTI-BOUCLE : On interdit formellement à ESLint de réclamer "parsedTech".
    // C'est le secret de notre architecture "Uncontrolled" pour éviter les crashs de rendu !
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
      } else if (b.type === 'spec' && b.key && b.nom) {
        if (!newTech.specialites) newTech.specialites = [];
        newTech.specialites.push({ competence: b.key, nom: b.nom });
      } else if (b.type === 'predilection_fixe' && b.key) {
        if (!newTech.predilections) newTech.predilections = [];
        if (!newTech.predilections.includes(b.key)) newTech.predilections.push(b.key);
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

  // ✨ LE BOUTON D'ENVOI MANUEL (La fin de l'usine à gaz)
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
    if (type === 'comp') newBlock.key = usefulSkills.at(0) || 'Observation';
    setBlocks(prev => [...prev, newBlock]);
    setHasUnsavedChanges(true);
    setShowMenu(false);
  };

  const updateBlock = (id, field, value) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
    setHasUnsavedChanges(true);
  };

  const removeBlock = (id) => {
    setBlocks(prev => prev.filter(b => b.id !== id));
    setHasUnsavedChanges(true);
  };

  const handleCreateFutile = async (blockId, isArray = false) => {
    if (!newFutileName.trim()) return;
    try {
      const newComp = await addCompetenceFutile(newFutileName, newFutileDesc);
      setLocalCreatedFutiles(prev => [...prev, newComp.nom]);

      if (isArray) {
        const block = blocks.find(b => b.id === blockId);
        const currentOptions = block.options || [];
        updateBlock(blockId, 'options', [...currentOptions, newComp.nom]);
      } else {
        updateBlock(blockId, 'key', newComp.nom);
      }

      setCreatingFutileId(null);
      setNewFutileName('');
      setNewFutileDesc('');
      showInAppNotification(`Compétence futile "${newComp.nom}" forgée avec succès !`, "success");
    } catch (error) {
      showInAppNotification("Erreur lors de la création : " + error.message, "error");
    }
  };

  const handleCreateGlobalSpeciality = async (blockId, compName, specName) => {
    const compData = competencesData.find(c => c.name === compName);
    if (!compData || !compData.id) return;
    try {
      const newSpecObj = await addGlobalSpeciality(compData.id, specName);
      if (setCompetencesData) {
        setCompetencesData(prev => prev.map(c => c.id === compData.id ? { ...c, specialites: [...(c.specialites || []), newSpecObj] } : c));
      }
      updateBlock(blockId, 'nom', specName);
      setCreatingSpecFor(null);
      setNewSpecName('');
    } catch (error) {
      showInAppNotification("Erreur : " + error.message, "error");
    }
  };

  // -------------------------------------------------------------
  // 4. LE CATALOGUE DE BRIQUES (Garde tout le reste intact en bas !)
  const BLOCK_TYPES = [
    { id: 'carac', label: 'Bonus Caractéristique', icon: <Activity size={14}/>, color: 'bg-red-100 text-red-800 border-red-200' },
    { id: 'comp', label: 'Bonus Compétence', icon: <BookOpen size={14}/>, color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { id: 'spec', label: 'Spécialité Offerte', icon: <Star size={14}/>, color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { id: 'fortune', label: 'Bonus Fortune', icon: <Coins size={14}/>, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { id: 'pred_choix', label: 'Choix de Compétence Utile (OU)', icon: <GitMerge size={14}/>, color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { id: 'pred_spec_choix', label: 'Choix de Spécialité (OU)', icon: <Star size={14}/>, color: 'bg-pink-100 text-pink-800 border-pink-200' },
    { id: 'pred_fixe', label: 'Utile Imposée', icon: <BookOpen size={14}/>, color: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200' },
    { id: 'futile_choix', label: 'Choix de Futile (OU)', icon: <Sparkles size={14}/>, color: 'bg-teal-100 text-teal-800 border-teal-200' },
    { id: 'futile_fixe', label: 'Futile Imposée', icon: <Sparkles size={14}/>, color: 'bg-cyan-100 text-cyan-800 border-cyan-200' }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 shadow-inner relative pb-4">
      
      {/* ✨ LE BOUCLIER DE VALIDATION */}
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

      {/* L'EN-TÊTE ET LE BOUTON D'AJOUT */}
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

          {/* Le calque invisible (Overlay) pour fermer le menu en douceur */}
          {showMenu && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)}></div>
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-stone-200 rounded-xl shadow-xl z-20 overflow-hidden animate-fade-in max-h-96 overflow-y-auto">
                {BLOCK_TYPES.map(bt => (
                  <button
                    key={bt.id}
                    type="button"
                    onClick={() => addBlock(bt.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm hover:bg-stone-50 border-b border-stone-50 transition-colors ${bt.color.replace('bg-', 'hover:bg-').replace('100', '50')}`}
                  >
                    <span className={`p-1.5 rounded-md ${bt.color}`}>{bt.icon}</span>
                    <span className="font-bold text-stone-700">{bt.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="space-y-3">
        
        {blocks.length === 0 && (
          <div className="text-center py-6 text-stone-400 text-sm italic border-2 border-dashed border-stone-200 rounded-lg">
            Aucun effet technique configuré. Cliquez sur "Ajouter une règle".
          </div>
        )}

        {/* LISTES DE DONNÉES GLOBALES POUR LES CHAMPS LIBRES */}
        <datalist id="utiles-list">
          {usefulSkills.map(s => <option key={s} value={s} />)}
        </datalist>

        <datalist id="futiles-list">
          {futilesSkills.map(s => <option key={s} value={s} />)}
        </datalist>

        {/* LE RENDU DES BRIQUES (MAP) */}
        {blocks.map(block => (
          <div key={block.id} className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm border border-stone-200 animate-fade-in group">
            
            {/* Lego Caractéristique (Rouge) */}
            {block.type === 'carac' && (
              <>
                <div className="bg-red-100 text-red-800 p-2 rounded border border-red-200"><Activity size={18}/></div>
                <select value={block.key} onChange={(e) => updateBlock(block.id, 'key', e.target.value)} className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-red-200 outline-none w-1/3">
                  {CARAC_LIST.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
                </select>
                <span className="text-stone-400 font-bold">+</span>
                <input type="number" min="1" max="5" value={block.val} onChange={(e) => updateBlock(block.id, 'val', e.target.value)} className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-red-200 outline-none" />
              </>
            )}

            {/* Lego Compétence (Bleu) */}
            {block.type === 'comp' && (
              <>
                <div className="bg-blue-100 text-blue-800 p-2 rounded border border-blue-200"><BookOpen size={18}/></div>
                <select value={block.key} onChange={(e) => updateBlock(block.id, 'key', e.target.value)} className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-blue-200 outline-none flex-1">
                  {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <span className="text-stone-400 font-bold">+</span>
                <input type="number" min="1" max="5" value={block.val} onChange={(e) => updateBlock(block.id, 'val', e.target.value)} className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-blue-200 outline-none" />
              </>
            )}

            {/* Lego Fortune (Vert) */}
            {block.type === 'fortune' && (
              <>
                <div className="bg-emerald-100 text-emerald-800 p-2 rounded border border-emerald-200"><Coins size={18}/></div>
                <span className="text-sm font-bold text-stone-700 flex-1">Bonus de Fortune / Richesse</span>
                <span className="text-stone-400 font-bold">+</span>
                <input type="number" min="1" max="10" value={block.val} onChange={(e) => updateBlock(block.id, 'val', e.target.value)} className="w-16 p-1.5 border border-stone-200 rounded text-sm font-bold text-center focus:ring-2 focus:ring-emerald-200 outline-none" />
              </>
            )}

            {/* Lego Spécialité (Doré) */}
            {block.type === 'spec' && (() => {
              const compData = competencesData.find(c => c.name === block.comp) || {};
              const availableSpecs = compData.specialites || [];
              const isCreating = creatingSpecFor === block.id;

              return (
                <>
                  <div className="bg-amber-100 text-amber-800 p-2 rounded border border-amber-200"><Star size={18}/></div>
                  <select
                    value={block.comp}
                    onChange={(e) => {
                      const val = e.target.value;
                      const newBlocks = blocks.map(b => b.id === block.id ? { ...b, comp: val, nom: '' } : b);
                      setBlocks(newBlocks);
                      setHasUnsavedChanges(true);
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
                      <input
                        type="text"
                        placeholder="Nouvelle..."
                        value={newSpecName}
                        onChange={(e) => setNewSpecName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && newSpecName.trim()) handleCreateGlobalSpeciality(block.id, block.comp, newSpecName.trim());
                          if (e.key === 'Escape') setCreatingSpecFor(null);
                        }}
                        className="p-1.5 border border-amber-300 rounded text-sm flex-1 focus:ring-2 focus:ring-amber-500 outline-none shadow-inner"
                        autoFocus
                      />
                      <button type="button" onClick={() => newSpecName.trim() && handleCreateGlobalSpeciality(block.id, block.comp, newSpecName.trim())} className="bg-amber-600 text-white rounded px-2 py-1 text-xs font-bold">Créer</button>
                      <button type="button" onClick={() => setCreatingSpecFor(null)} className="bg-stone-200 text-stone-700 rounded px-2 py-1 text-xs font-bold">Annuler</button>
                    </div>
                  ) : (
                    <select
                      value={block.nom}
                      onChange={(e) => {
                        if (e.target.value === '__CREATE_NEW__') { setCreatingSpecFor(block.id); setNewSpecName(''); }
                        else {
                          const newBlocks = blocks.map(b => b.id === block.id ? { ...b, nom: e.target.value } : b);
                          setBlocks(newBlocks);
                          setHasUnsavedChanges(true);
                        }
                      }}
                      className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-amber-200 outline-none flex-1"
                    >
                      <option value="">Spécialité...</option>
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

            {/* ✨ Lego Choix de Compétence Utile (Violet) ✨ */}
            {block.type === 'pred_choix' && (
              <>
                <div className="bg-purple-100 text-purple-800 p-2 rounded border border-purple-200"><GitMerge size={18}/></div>
                <span className="text-sm font-bold text-purple-900">Choix (Utiles) :</span>
                <div className="flex flex-wrap gap-1 flex-1 items-center border border-stone-200 p-1.5 rounded-lg bg-stone-50 min-h-[42px] shadow-inner">
                  {(block.options || []).map(opt => (
                    <span key={opt} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-bold shadow-sm animate-fade-in">
                      {opt}
                      <button type="button" onClick={() => {
                        const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: b.options.filter(o => o !== opt) } : b);
                        setBlocks(newBlocks);
                        setHasUnsavedChanges(true);
                      }} className="hover:text-red-300 ml-1 transition-colors">&times;</button>
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

            {/* ✨ Lego Choix de Spécialité (Rose) ✨ */}
            {block.type === 'pred_spec_choix' && (() => {
              const compData = competencesData?.find(c => c.name === block.comp) || {};
              const availableSpecs = compData.specialites || [];

              return (
                <>
                  <div className="bg-pink-100 text-pink-800 p-2 rounded border border-pink-200"><Star size={18}/></div>
                  <span className="text-sm font-bold text-pink-900">Spécialités pour :</span>
                  <select
                    value={block.comp}
                    onChange={(e) => {
                      const val = e.target.value;
                      const newBlocks = blocks.map(b => b.id === block.id ? { ...b, comp: val, options: [] } : b);
                      setBlocks(newBlocks);
                      setHasUnsavedChanges(true);
                    }}
                    className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-pink-200 outline-none w-1/4"
                  >
                    <option value="">Compétence...</option>
                    {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <div className="flex flex-wrap gap-1 flex-1 items-center border border-stone-200 p-1.5 rounded-lg bg-stone-50 min-h-[42px] shadow-inner">
                    {(block.options || []).map(opt => (
                      <span key={opt} className="bg-pink-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-bold shadow-sm animate-fade-in">
                        {opt}
                        <button type="button" onClick={() => {
                          const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: b.options.filter(o => o !== opt) } : b);
                          setBlocks(newBlocks);
                          setHasUnsavedChanges(true);
                        }} className="hover:text-red-300 ml-1 transition-colors">&times;</button>
                      </span>
                    ))}
                    
                    {block.comp ? (
                      <div className="flex items-center gap-1 flex-1 min-w-[140px]">
                        <input
                          type="text"
                          placeholder="Laisser vide = Toutes"
                          list={`specs-list-${block.id}`}
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
                          className="text-xs bg-transparent outline-none focus:ring-0 font-bold text-stone-500 placeholder-stone-400 flex-1 border-none w-full"
                        />
                        <datalist id={`specs-list-${block.id}`}>
                          {availableSpecs.map(s => <option key={s.id || s.nom} value={s.nom} />)}
                        </datalist>
                      </div>
                    ) : <span className="text-xs italic text-stone-400 px-2">Sélectionnez la comp...</span>}
                  </div>
                </>
              );
            })()}

            {/* ✨ Lego Prédilection Fixe Utile (Fuchsia) ✨ */}
            {block.type === 'pred_fixe' && (() => {
              const compData = competencesData?.find(c => c.name === block.key) || {};
              const availableSpecs = compData.specialites || [];
              const isCreating = creatingSpecFor === block.id;

              return (
                <>
                  <div className="bg-fuchsia-100 text-fuchsia-800 p-2 rounded border border-fuchsia-200">
                    <BookOpen size={18}/>
                  </div>
                  <span className="text-sm font-bold text-fuchsia-900">Utile Imposée :</span>
                  <select
                    value={block.key || ''}
                    onChange={(e) => {
                      const newBlocks = blocks.map(b => b.id === block.id ? { ...b, key: e.target.value, nom: '' } : b);
                      setBlocks(newBlocks);
                      setHasUnsavedChanges(true);
                    }}
                    className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-fuchsia-200 outline-none w-1/3"
                  >
                    <option value="">Sélectionner...</option>
                    {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <span className="text-stone-400 font-bold">▶</span>

                  {!block.key ? (
                    <span className="text-sm italic text-stone-400 flex-1">Sélectionnez d'abord la compétence...</span>
                  ) : isCreating ? (
                    <div className="flex gap-1 flex-1 animate-fade-in">
                      <input
                        type="text"
                        autoFocus
                        placeholder="Nouvelle spécialité..."
                        value={newSpecName}
                        onChange={(e) => setNewSpecName(e.target.value)}
                        className="p-1.5 border border-stone-200 rounded text-sm flex-1 focus:ring-2 focus:ring-fuchsia-200 outline-none"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                            handleCreateGlobalSpeciality(block.id, block.key, e.currentTarget.value.trim());
                          }
                          if (e.key === 'Escape') {
                            setCreatingSpecFor(null);
                            setNewSpecName('');
                          }
                        }}
                      />
                      <button
                        onClick={() => { if (newSpecName.trim()) handleCreateGlobalSpeciality(block.id, block.key, newSpecName.trim()); }}
                        className="bg-fuchsia-600 text-white px-2 py-1 rounded text-[10px] font-bold"
                      >
                        Créer
                      </button>
                      <button
                        onClick={() => { setCreatingSpecFor(null); setNewSpecName(''); }}
                        className="bg-stone-200 text-stone-600 px-2 py-1 rounded text-[10px] font-bold"
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <select
                      value={block.nom || ''}
                      onChange={(e) => {
                        if (e.target.value === '__CREATE_NEW__') {
                          setCreatingSpecFor(block.id);
                          setNewSpecName('');
                        } else {
                          updateBlock(block.id, 'nom', e.target.value);
                        }
                      }}
                      className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-fuchsia-200 outline-none flex-1"
                    >
                      <option value="">Spécialité (Optionnelle)...</option>
                      <option value="__CREATE_NEW__">✨ Créer une nouvelle...</option>
                      {availableSpecs.filter(s => s.is_official).length > 0 && (
                        <optgroup label="📚 Officielles">
                          {availableSpecs.filter(s => s.is_official).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}
                        </optgroup>
                      )}
                      {availableSpecs.filter(s => !s.is_official).length > 0 && (
                        <optgroup label="👥 Communauté">
                          {availableSpecs.filter(s => !s.is_official).map(s => <option key={s.id || s.nom} value={s.nom}>{s.nom}</option>)}
                        </optgroup>
                      )}
                    </select>
                  )}
                </>
              );
            })()}

            {/* ✨ Lego Choix de Futile (Teal/Cyan) ✨ */}
            {block.type === 'futile_choix' && (
              <>
                <div className="bg-teal-100 text-teal-800 p-2 rounded border border-teal-200"><Sparkles size={18}/></div>
                <span className="text-sm font-bold text-teal-900">Choix (Futiles) :</span>
                <div className="flex flex-wrap gap-1 flex-1 items-center border border-stone-200 p-1.5 rounded-lg bg-stone-50 min-h-[42px] shadow-inner">
                  {(block.options || []).map(opt => (
                    <span key={opt} className="bg-teal-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-bold shadow-sm animate-fade-in">
                      {opt}
                      <button type="button" onClick={() => {
                        const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: b.options.filter(o => o !== opt) } : b);
                        setBlocks(newBlocks);
                        setHasUnsavedChanges(true);
                      }} className="hover:text-red-300 ml-1 transition-colors">&times;</button>
                    </span>
                  ))}
                  
                  {creatingFutileId === block.id ? (
                    <div className="flex gap-1 items-center animate-fade-in">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Nouvelle futile..."
                        value={newFutileName}
                        onChange={(e) => setNewFutileName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCreateFutile(block.id, true);
                          if (e.key === 'Escape') { setCreatingFutileId(null); setNewFutileName(''); }
                        }}
                        className="p-1 text-xs border border-teal-300 rounded focus:ring-2 focus:ring-teal-200 outline-none w-32"
                      />
                      <button onClick={() => handleCreateFutile(block.id, true)} className="bg-teal-600 text-white rounded px-2 py-1 text-[10px] font-bold shadow-sm hover:bg-teal-700 transition-colors">Créer</button>
                      <button onClick={() => { setCreatingFutileId(null); setNewFutileName(''); }} className="bg-gray-200 text-gray-600 rounded px-2 py-1 text-[10px] font-bold hover:bg-gray-300 transition-colors">Annuler</button>
                    </div>
                  ) : (
                    <select
                      value=""
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === '__CREATE__') {
                          setCreatingFutileId(block.id);
                          setNewFutileName('');
                        } else if (val) {
                          if (!(block.options || []).includes(val)) {
                            const newBlocks = blocks.map(b => b.id === block.id ? { ...b, options: [...(b.options || []), val] } : b);
                            setBlocks(newBlocks);
                            setHasUnsavedChanges(true);
                          }
                        }
                      }}
                      className="text-xs bg-transparent outline-none focus:ring-0 font-bold text-stone-500 cursor-pointer flex-1 border-none min-w-[140px]"
                    >
                      <option value="">+ Ajouter (Futiles)...</option>
                      {allFutiles.filter(f => !(block.options || []).includes(f)).map(s => <option key={s} value={s}>{s}</option>)}
                      <option value="__CREATE__" className="font-bold text-teal-700">➕ Créer une nouvelle...</option>
                    </select>
                  )}
                </div>
              </>
            )}

            {/* ✨ Lego Prédilection Futile Fixe (Cyan) ✨ */}
            {block.type === 'futile_fixe' && (
              <>
                <div className="bg-cyan-100 text-cyan-800 p-2 rounded border border-cyan-200"><Sparkles size={18}/></div>
                <span className="text-sm font-bold text-cyan-900">Futile imposée :</span>
                {creatingFutileId === block.id ? (
                  <div className="flex gap-1 flex-1 animate-fade-in">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Nouvelle futile..."
                      value={newFutileName}
                      onChange={(e) => setNewFutileName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCreateFutile(block.id);
                        if (e.key === 'Escape') { setCreatingFutileId(null); setNewFutileName(''); }
                      }}
                      className="p-1.5 border border-cyan-300 rounded text-sm flex-1 focus:ring-2 focus:ring-cyan-200 outline-none"
                    />
                    <button onClick={() => handleCreateFutile(block.id)} className="bg-cyan-600 text-white rounded px-2 py-1 text-xs font-bold shadow-sm hover:bg-cyan-700 transition-colors">Créer</button>
                    <button onClick={() => { setCreatingFutileId(null); setNewFutileName(''); }} className="bg-gray-200 text-gray-600 rounded px-2 py-1 text-xs font-bold hover:bg-gray-300 transition-colors">Annuler</button>
                  </div>
                ) : (
                  <select
                    value={block.key}
                    onChange={(e) => {
                      if (e.target.value === '__CREATE__') {
                        setCreatingFutileId(block.id);
                        setNewFutileName('');
                      } else {
                        const newBlocks = blocks.map(b => b.id === block.id ? { ...b, key: e.target.value } : b);
                        setBlocks(newBlocks);
                        setHasUnsavedChanges(true);
                      }
                    }}
                    className="p-1.5 border border-stone-200 rounded text-sm font-bold bg-stone-50 focus:ring-2 focus:ring-cyan-200 outline-none flex-1"
                  >
                    <option value="">Sélectionner...</option>
                    {allFutiles.map(s => <option key={s} value={s}>{s}</option>)}
                    <option value="__CREATE__" className="font-bold text-cyan-700">➕ Créer une nouvelle...</option>
                  </select>
                )}
              </>
            )}

            {/* Bouton Supprimer */}
            <button type="button" onClick={() => removeBlock(block.id)} className="ml-auto p-2 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors" title="Supprimer la règle">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
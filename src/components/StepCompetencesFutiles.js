// src/components/StepCompetencesFutiles.js
// Version: 3.5.0
// Build: 2026-02-05 18:30
// Description: Gestion des compétences futiles avec design intégré et support des choix féériques.

import React, { useState, useEffect } from 'react';
import { Plus, Minus, Star, Sparkles, PlusCircle } from 'lucide-react';
import { getCompetencesFutiles, addCompetenceFutile, invalidateCompetencesFutilesCache } from '../utils/supabaseGameData';
import { parseCompetencesFutilesPredilection } from '../data/dataHelpers';

const POINTS_TOTAUX = 10;

export default function StepCompetencesFutiles({ character, onCompetencesFutilesChange, fairyData }) {
  const [availableCompetences, setAvailableCompetences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCompName, setNewCompName] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const feeData = fairyData[character.typeFee];
  const futiles = character.competencesFutiles || { rangs: {}, choixPredilection: {}, personnalisees: [] };
  
  // 1. Chargement des données
  useEffect(() => {
    const load = async () => {
      const data = await getCompetencesFutiles();
      setAvailableCompetences(data);
      setLoading(false);
    };
    load();
  }, []);

  // 2. Gestion des choix de prédilection (ex: Musique ou Héraldique)
  const parsedPredilections = React.useMemo(() => {
    return parseCompetencesFutilesPredilection(feeData?.competencesFutilesPredilection || []);
  }, [feeData]);

  const getPredilectionsFinales = () => {
    return parsedPredilections.map((p, i) => {
      if (p.isChoix) return futiles.choixPredilection?.[i];
      return p.nom;
    }).filter(Boolean);
  };

  const predFinales = getPredilectionsFinales();

  // 3. Calculs des points
  const pointsDepenses = Object.values(futiles.rangs).reduce((sum, v) => sum + v, 0);
  const pointsRestants = POINTS_TOTAUX - pointsDepenses;

  const handleRangChange = (nomComp, delta) => {
    const current = futiles.rangs[nomComp] || 0;
    const isPred = predFinales.includes(nomComp);
    const base = isPred ? 2 : 0; // Les futiles de prédilection commencent à 2 (gratuit)
    const max = isPred ? 5 : 4;
    const total = base + current;

    if (delta > 0 && (pointsRestants <= 0 || total >= max)) return;
    if (delta < 0 && current <= 0) return;

    onCompetencesFutilesChange({
      ...futiles,
      rangs: { ...futiles.rangs, [nomComp]: current + delta }
    });
  };

  const handleChoixChange = (index, value) => {
    onCompetencesFutilesChange({
      ...futiles,
      choixPredilection: { ...futiles.choixPredilection, [index]: value }
    });
  };

  // Ajout de compétence personnalisée
  const handleCreate = async () => {
    if (!newCompName.trim()) return;
    try {
      const newComp = await addCompetenceFutile(newCompName, "Compétence personnalisée");
      invalidateCompetencesFutilesCache();
      setAvailableCompetences([...availableCompetences, newComp]);
      setNewCompName('');
      setIsCreating(false);
      // On ajoute automatiquement 1 point dedans pour qu'elle apparaisse
      handleRangChange(newComp.nom, 1);
    } catch (e) {
      alert("Erreur lors de la création : " + e.message);
    }
  };

  const renderRow = (comp) => {
    const isPred = predFinales.includes(comp.nom);
    const base = isPred ? 2 : 0;
    const investis = futiles.rangs[comp.nom] || 0;
    const total = base + investis;

    // On n'affiche que les prédilections et celles où on a investi des points
    if (!isPred && investis === 0 && !isCreating) return null;

    return (
      <div key={comp.id || comp.nom} className="flex items-center justify-between p-3 bg-white border border-amber-100 rounded-lg mb-2 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-serif text-amber-900">{comp.nom}</span>
          {isPred && <Star size={14} className="text-amber-400 fill-amber-400" />}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-amber-600 font-bold uppercase">Base {base}</span>
          <div className="flex items-center gap-2 bg-amber-50 rounded border border-amber-200 p-1">
            <button onClick={() => handleRangChange(comp.nom, -1)} disabled={investis <= 0} className="hover:text-red-600 disabled:opacity-30"><Minus size={16}/></button>
            <span className="w-6 text-center font-bold text-amber-900">{total}</span>
            <button onClick={() => handleRangChange(comp.nom, 1)} disabled={pointsRestants <= 0} className="hover:text-green-600 disabled:opacity-30"><Plus size={16}/></button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) return <div className="text-center italic text-amber-800">Recherche des passe-temps...</div>;

  return (
    <div className="space-y-8">
      {/* Header Intégré */}
      <div className="flex justify-between items-center border-b-2 border-amber-100 pb-4">
        <div>
          <h2 className="text-2xl font-serif text-amber-900">Compétences Futiles</h2>
          <p className="text-xs text-amber-700 italic">Loisirs, arts et savoirs inutiles (Max 4, ou 5 si Prédilection).</p>
        </div>
        <div className="bg-amber-100 text-amber-900 border border-amber-200 px-4 py-2 rounded font-serif">
          <span className="text-xl font-bold">{pointsRestants}</span> <span className="text-xs uppercase">pts restants</span>
        </div>
      </div>

      {/* 1. Zone de Choix Féériques (Si nécessaire) */}
      {parsedPredilections.some(p => p.isChoix) && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <h3 className="font-serif text-amber-900 flex items-center gap-2 text-md mb-3">
            <Sparkles size={16} className="text-amber-600"/> Héritage : Vos passions féériques
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {parsedPredilections.map((p, i) => {
              if (!p.isChoix) return null;
              return (
                <div key={i}>
                  <label className="block text-xs font-bold text-amber-800 uppercase mb-1">Futilité au choix :</label>
                  <select 
                    value={futiles.choixPredilection?.[i] || ''}
                    onChange={(e) => handleChoixChange(i, e.target.value)}
                    className="w-full p-2 border border-amber-300 rounded font-serif text-sm"
                  >
                    <option value="">-- Choisir --</option>
                    {p.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Liste des Compétences Actives */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Colonne Gauche : Prédilections (Toujours visibles) */}
        <div>
          <h4 className="font-serif text-amber-800 border-b border-amber-200 mb-3 pb-1">Inné & Héritage</h4>
          {availableCompetences.filter(c => predFinales.includes(c.nom)).map(renderRow)}
          {predFinales.length === 0 && <p className="text-sm italic text-gray-400">Aucune prédilection futile.</p>}
        </div>

        {/* Colonne Droite : Acquises (Points dépensés) */}
        <div>
          <h4 className="font-serif text-amber-800 border-b border-amber-200 mb-3 pb-1">Acquis & Passions</h4>
          {availableCompetences.filter(c => !predFinales.includes(c.nom) && futiles.rangs[c.nom] > 0).map(renderRow)}
          
          {/* Bouton d'ajout */}
          {!isCreating ? (
            <button 
              onClick={() => setIsCreating(true)}
              className="w-full py-3 mt-2 border-2 border-dashed border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 flex items-center justify-center gap-2 transition-all"
            >
              <PlusCircle size={20}/> Ajouter une compétence
            </button>
          ) : (
            <div className="mt-2 p-3 bg-white border border-amber-300 rounded-lg shadow-lg animate-in fade-in zoom-in duration-200">
              <label className="block text-xs font-bold text-gray-500 mb-1">Nom de la compétence :</label>
              <div className="flex gap-2">
                <input 
                  autoFocus
                  type="text" 
                  value={newCompName}
                  onChange={(e) => setNewCompName(e.target.value)}
                  className="flex-1 p-2 border rounded font-serif"
                  placeholder="Ex: Philatélie..."
                />
                <button onClick={handleCreate} className="bg-amber-600 text-white px-3 rounded hover:bg-amber-700">OK</button>
                <button onClick={() => setIsCreating(false)} className="text-gray-500 px-2 hover:text-gray-700">X</button>
              </div>
              <div className="mt-2 max-h-40 overflow-y-auto border-t pt-2">
                <p className="text-xs text-gray-400 mb-1">Ou choisissez dans la liste :</p>
                {availableCompetences
                  .filter(c => !predFinales.includes(c.nom) && !futiles.rangs[c.nom])
                  .map(c => (
                    <button 
                      key={c.id} 
                      onClick={() => handleRangChange(c.nom, 1)}
                      className="block w-full text-left text-sm py-1 px-2 hover:bg-amber-50 rounded truncate"
                    >
                      {c.nom}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
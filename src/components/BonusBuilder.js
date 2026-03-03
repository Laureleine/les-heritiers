// src/components/BonusBuilder.js
// 9.10.0

import React, { useState } from 'react';
import { TestTubeDiagonal, X } from 'lucide-react';
import { CARAC_LIST } from '../data/constants';
import { addGlobalSpeciality } from '../utils/supabaseGameData';

export default function BonusBuilder({ 
  parsedTech, 
  updateTech, 
  rawJson, 
  onJsonChange, 
  competencesData, 
  setCompetencesData, 
  usefulSkills 
}) {
  // L'état interne du constructeur (isolé du parent !)
  const [techBuilder, setTechBuilder] = useState({ 
    carac: '', valCarac: 1, 
    comp: '', valComp: 1, 
    specComp: '', specNom: '', isCreatingSpec: false 
  });

  return (
    <>
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner">
        <label className="block text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
          <TestTubeDiagonal size={18} className="text-slate-600" /> Constructeur de Bonus Techniques
        </label>

        {/* 1. Caractéristiques */}
        <div className="mb-4">
          <span className="block text-xs font-bold text-slate-500 uppercase mb-2">1. Augmenter une Caractéristique</span>
          <div className="flex gap-2">
            <select value={techBuilder.carac} onChange={e => setTechBuilder({...techBuilder, carac: e.target.value})} className="p-2 border border-slate-300 rounded-lg text-sm bg-white flex-1 outline-none focus:border-purple-400">
              <option value="">-- Caractéristique --</option>
              {CARAC_LIST.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
            <input type="number" min="1" max="5" value={techBuilder.valCarac} onChange={e => setTechBuilder({...techBuilder, valCarac: e.target.value})} className="p-2 border border-slate-300 rounded-lg text-sm w-16 text-center outline-none focus:border-purple-400" />
            <button type="button" onClick={() => {
              if(techBuilder.carac && techBuilder.valCarac) {
                const t = {...parsedTech};
                if(!t.caracteristiques) t.caracteristiques = {};
                t.caracteristiques[techBuilder.carac] = parseInt(techBuilder.valCarac);
                updateTech(t);
                setTechBuilder({...techBuilder, carac: '', valCarac: 1});
              }
            }} className="bg-slate-700 hover:bg-slate-800 text-white px-4 rounded-lg font-bold transition-colors">+</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {Object.entries(parsedTech.caracteristiques || {}).map(([c, v]) => (
              <span key={c} className="bg-slate-200 text-slate-800 text-xs px-2 py-1 rounded-md flex items-center gap-2 font-bold shadow-sm">
                {c} : +{typeof v === 'object' ? v.value : v}
                <button type="button" onClick={() => {
                  const t = {...parsedTech};
                  delete t.caracteristiques[c];
                  if (Object.keys(t.caracteristiques).length === 0) delete t.caracteristiques;
                  updateTech(t);
                }} className="text-slate-400 hover:text-red-500"><X size={12}/></button>
              </span>
            ))}
          </div>
        </div>

        {/* 2. Rangs de Compétences */}
        <div className="mb-4 border-t border-slate-200 pt-4">
          <span className="block text-xs font-bold text-slate-500 uppercase mb-2">2. Augmenter une Compétence Libre</span>
          <div className="flex gap-2">
            <select value={techBuilder.comp} onChange={e => setTechBuilder({...techBuilder, comp: e.target.value})} className="p-2 border border-slate-300 rounded-lg text-sm bg-white flex-1 outline-none focus:border-purple-400">
              <option value="">-- Compétence --</option>
              {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input type="number" min="1" max="5" value={techBuilder.valComp} onChange={e => setTechBuilder({...techBuilder, valComp: e.target.value})} className="p-2 border border-slate-300 rounded-lg text-sm w-16 text-center outline-none focus:border-purple-400" />
            <button type="button" onClick={() => {
              if(techBuilder.comp && techBuilder.valComp) {
                const t = {...parsedTech};
                if(!t.competences) t.competences = {};
                t.competences[techBuilder.comp] = parseInt(techBuilder.valComp);
                updateTech(t);
                setTechBuilder({...techBuilder, comp: '', valComp: 1});
              }
            }} className="bg-slate-700 hover:bg-slate-800 text-white px-4 rounded-lg font-bold transition-colors">+</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {Object.entries(parsedTech.competences || {}).map(([c, v]) => (
              <span key={c} className="bg-slate-200 text-slate-800 text-xs px-2 py-1 rounded-md flex items-center gap-2 font-bold shadow-sm">
                {c} : +{v}
                <button type="button" onClick={() => {
                  const t = {...parsedTech};
                  delete t.competences[c];
                  if (Object.keys(t.competences).length === 0) delete t.competences;
                  updateTech(t);
                }} className="text-slate-400 hover:text-red-500"><X size={12}/></button>
              </span>
            ))}
          </div>
        </div>

        {/* 3. Spécialités Gratuites */}
        <div className="border-t border-slate-200 pt-4">
          <span className="block text-xs font-bold text-slate-500 uppercase mb-2">3. Offrir une Spécialité</span>
          <div className="flex gap-2">
            <select value={techBuilder.specComp} onChange={e => setTechBuilder({...techBuilder, specComp: e.target.value, specNom: '', isCreatingSpec: false})} className="p-2 border border-slate-300 rounded-lg text-sm bg-white w-1/3 outline-none focus:border-purple-400">
              <option value="">-- Liée à --</option>
              {usefulSkills.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            
            {techBuilder.specComp ? (
              <>
                {!techBuilder.isCreatingSpec ? (
                  <select 
                    value={techBuilder.specNom} 
                    onChange={e => {
                      if (e.target.value === '__CREATE_NEW__') {
                        setTechBuilder({...techBuilder, isCreatingSpec: true, specNom: ''});
                      } else {
                        setTechBuilder({...techBuilder, specNom: e.target.value});
                      }
                    }} 
                    className="p-2 border border-slate-300 rounded-lg text-sm bg-white flex-1 outline-none focus:border-purple-400"
                  >
                    <option value="">-- Choisir la spécialité --</option>
                    <optgroup label="Spécialités officielles">
                      {competencesData.find(c => c.name === techBuilder.specComp)?.specialites
                        ?.filter(s => s.is_official)
                        .map(s => <option key={s.id} value={s.nom}>{s.nom}</option>)}
                    </optgroup>
                    <optgroup label="Créations communautaires">
                      {competencesData.find(c => c.name === techBuilder.specComp)?.specialites
                        ?.filter(s => !s.is_official)
                        .map(s => <option key={s.id} value={s.nom}>{s.nom}</option>)}
                      <option value="__CREATE_NEW__" className="text-blue-600 font-bold">✨ + Créer une nouvelle spécialité</option>
                    </optgroup>
                  </select>
                ) : (
                  <input 
                    type="text" 
                    autoFocus
                    placeholder="Nom de la nouvelle spécialité..."
                    value={techBuilder.specNom}
                    onChange={e => setTechBuilder({...techBuilder, specNom: e.target.value})}
                    className="p-2 border border-blue-300 ring-2 ring-blue-100 rounded-lg text-sm flex-1 outline-none focus:border-blue-500"
                  />
                )}

                <button type="button" onClick={async () => {
                  if(techBuilder.specComp && techBuilder.specNom) {
                    
                    if (techBuilder.isCreatingSpec) {
                      try {
                        const compId = competencesData.find(c => c.name === techBuilder.specComp)?.id;
                        if (compId) {
                          const newData = await addGlobalSpeciality(compId, techBuilder.specNom);
                          if (newData && setCompetencesData) {
                            // On met à jour la liste globale dans le parent
                            const updatedList = competencesData.map(c => 
                              c.id === compId ? { ...c, specialites: [...(c.specialites||[]), newData] } : c
                            );
                            setCompetencesData(updatedList);
                          }
                        }
                      } catch (e) {
                        console.warn("Spécialité existante ou erreur:", e.message);
                      }
                    }

                    const t = {...parsedTech};
                    if(!t.specialites) t.specialites = [];
                    t.specialites.push({ competence: techBuilder.specComp, nom: techBuilder.specNom });
                    updateTech(t);
                    setTechBuilder({...techBuilder, specComp: '', specNom: '', isCreatingSpec: false});
                  }
                }} className="bg-slate-700 hover:bg-slate-800 text-white px-4 rounded-lg font-bold transition-colors">+</button>
              </>
            ) : (
              <div className="flex-1 p-2 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-400 italic">
                Sélectionnez une compétence d'abord...
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {(parsedTech.specialites || []).map((s, idx) => (
              <span key={idx} className="bg-slate-200 text-slate-800 text-xs px-2 py-1 rounded-md flex items-center gap-2 font-bold shadow-sm">
                {s.competence} : {s.nom}
                <button type="button" onClick={() => {
                  const t = {...parsedTech};
                  t.specialites.splice(idx, 1);
                  if (t.specialites.length === 0) delete t.specialites;
                  updateTech(t);
                }} className="text-slate-400 hover:text-red-500"><X size={12}/></button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MODE AVANCÉ JSON */}
      <details className="mt-4 group">
        <summary className="text-xs font-bold text-gray-400 hover:text-purple-600 cursor-pointer transition-colors list-none flex items-center gap-2">
          <span className="group-open:rotate-90 transition-transform">▶</span>
          Mode Expert : Modifier le code source brut
        </summary>
        <div className="mt-3">
          <textarea
            value={rawJson || ''}
            onChange={(e) => onJsonChange(e.target.value)}
            className="w-full h-32 p-3 border border-purple-300 bg-gray-900 text-green-400 font-mono text-xs rounded-lg focus:ring-2 focus:ring-purple-400 outline-none custom-scrollbar"
            placeholder={`{\n  "competences": { "Comédie": 1 }\n}`}
          />
        </div>
      </details>
    </>
  );
}
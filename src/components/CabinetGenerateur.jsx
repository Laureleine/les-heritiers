import React, { useState } from 'react';
import { ArrowLeft, Activity, RotateCcw } from '../config/icons';
import { genererConsultation } from '../utils/cabinetGenerator';

const DIFFICULTE_COLOR = {
  'Facile': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Moyen': 'text-amber-700 bg-amber-50 border-amber-200',
  'Difficile': 'text-orange-700 bg-orange-50 border-orange-200',
  'Très difficile': 'text-red-700 bg-red-50 border-red-200',
  'Impossible': 'text-purple-700 bg-purple-50 border-purple-200',
};

function Section({ titre, children }) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4 space-y-2">
      <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{titre}</h3>
      {children}
    </div>
  );
}

function Personne({ label, data }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{label}</span>
      <span className="font-serif font-bold text-stone-900">{data.nom}</span>
      <span className="text-xs text-stone-500">{data.age} ans · {data.classe} — {data.profession || data.statut}</span>
    </div>
  );
}

export default function CabinetGenerateur({ onBack }) {
  const [genreMedecin, setGenreMedecin] = useState('M');
  const [consultation, setConsultation] = useState(null);
  const [loading, setLoading] = useState(false);

  const generer = async () => {
    setLoading(true);
    try {
      const result = await genererConsultation(genreMedecin);
      setConsultation(result);
    } finally {
      setLoading(false);
    }
  };

  const diffClass = consultation ? (DIFFICULTE_COLOR[consultation.diagnostic?.difficulte] || 'text-stone-600 bg-stone-50 border-stone-200') : '';

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg print:hidden">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center gap-3">
          <button onClick={onBack} className="p-1.5 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <Activity size={18} className="text-red-400" />
          <h1 className="font-serif font-bold text-amber-100 text-base">Cabinet Médical — 1899</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">

        {/* Formulaire */}
        <div className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Genre du médecin</span>
            <div className="flex gap-2">
              {[['M', 'Homme'], ['F', 'Femme']].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setGenreMedecin(val)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-bold border transition-colors ${
                    genreMedecin === val
                      ? 'bg-red-700 text-white border-red-700'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-red-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generer}
            disabled={loading}
            className="sm:ml-auto flex items-center gap-2 px-6 py-2.5 bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white font-bold font-serif rounded-xl shadow-md transition-colors"
          >
            {loading ? <RotateCcw size={16} className="animate-spin" /> : <Activity size={16} />}
            {loading ? 'Tirage…' : 'Appeler le suivant'}
          </button>
        </div>

        {/* Résultat */}
        {consultation && (
          <div className="space-y-4 animate-in fade-in duration-300">

            {/* Type */}
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-0.5">Type de consultation</span>
              <span className="font-serif font-bold text-red-900 text-lg">{consultation.type}</span>
            </div>

            {/* Personnes */}
            <Section titre="Personnes présentes">
              <Personne label="Consultant" data={consultation.principal} />
              {consultation.secondaire && (
                <>
                  <div className="border-t border-stone-100 pt-2 mt-2">
                    <Personne label={consultation.secondaire.statut} data={consultation.secondaire} />
                  </div>
                </>
              )}
            </Section>

            {/* Diagnostic */}
            <Section titre="Diagnostic médical">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <span className="text-xs text-stone-400 block mb-0.5">Malade : {consultation.diagnostic.malade}</span>
                  <p className="font-serif font-bold text-stone-900 text-base">{consultation.diagnostic.diagnostic}</p>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border ${diffClass}`}>
                  {consultation.diagnostic.difficulte}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed italic border-l-2 border-stone-200 pl-3">
                {consultation.diagnostic.symptomes}
              </p>
              {consultation.diagnostic.notes_historiques && (
                <p className="text-xs text-stone-400 leading-relaxed">
                  📜 {consultation.diagnostic.notes_historiques}
                </p>
              )}
            </Section>

            {/* Psychologie */}
            <Section titre="Psychologie de la scène">
              {Object.entries(consultation.psychologie).map(([cle, texte]) => (
                <p key={cle} className="text-sm text-stone-700 font-serif leading-relaxed">
                  {texte}
                </p>
              ))}
            </Section>

            {/* Regénérer */}
            <button
              onClick={generer}
              disabled={loading}
              className="w-full py-2.5 border-2 border-dashed border-stone-300 hover:border-red-300 text-stone-400 hover:text-red-600 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} /> Prochain patient
            </button>

          </div>
        )}

        {!consultation && !loading && (
          <div className="text-center py-16 text-stone-400 font-serif italic text-sm">
            La salle d'attente est pleine. Le prochain patient attend votre signal.
          </div>
        )}
      </div>
    </div>
  );
}

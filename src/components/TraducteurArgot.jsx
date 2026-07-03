// src/components/TraducteurArgot.jsx
import React, { useState } from 'react';
import { ArrowLeft, Feather, Copy } from '../config/icons';
import { supabase } from '../config/supabase';

const STYLES = [
  { id: 'bourgeois', label: 'Bourgeois', description: 'Le jargon snob et précieux des salons parisiens.' },
  { id: 'apache', label: 'Apache', description: "L'argot menaçant des voyous des barrières." },
  { id: 'ouvrier', label: 'Ouvrier', description: 'Le parler gouailleur des faubourgs.' },
  { id: 'louchebem', label: 'Louchebem', description: "L'argot secret des bouchers de la Villette." },
];

export default function TraducteurArgot({ onBack }) {
  const [texte, setTexte] = useState('');
  const [style, setStyle] = useState('bourgeois');
  const [resultat, setResultat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [copieMsg, setCopieMsg] = useState(null);

  const traduire = async () => {
    if (!texte.trim() || loading) return;
    setLoading(true);
    setErreur(null);
    setResultat(null);
    try {
      const { data, error } = await supabase.functions.invoke('translate-argot', {
        body: { texte: texte.trim(), style },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResultat(data.traduction);
    } catch (e) {
      setErreur("La traduction a échoué. Réessayez dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  const copier = async () => {
    if (!resultat) return;
    await navigator.clipboard.writeText(resultat);
    setCopieMsg('Copié !');
    setTimeout(() => setCopieMsg(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Traducteur d'Argot 1899</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-stone-500 font-serif italic mb-6 text-sm">
          Réécrivez une phrase moderne dans le parler d'époque de votre choix.
        </p>

        <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
          <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 mb-4">
            Phrase à traduire
            <textarea
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
              rows={3}
              className="border border-stone-200 rounded-lg px-3 py-2 font-sans"
              placeholder="Ex : Range ton arme, on ne veut pas d'ennuis."
            />
          </label>

          <div className="grid gap-2 sm:grid-cols-2 mb-4">
            {STYLES.map((s) => (
              <button
                key={s.id}
                onClick={() => setStyle(s.id)}
                className={`text-left p-3 rounded-xl border-2 transition-colors ${
                  style === s.id ? 'bg-teal-50 border-teal-400' : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <p className="font-serif font-bold text-stone-800 text-sm">{s.label}</p>
                <p className="text-xs text-stone-500">{s.description}</p>
              </button>
            ))}
          </div>

          <button
            onClick={traduire}
            disabled={!texte.trim() || loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
          >
            <Feather size={18} /> {loading ? 'Traduction en cours…' : 'Traduire'}
          </button>

          {erreur && <p className="mt-4 text-sm text-red-600">{erreur}</p>}

          {resultat && (
            <div className="mt-5">
              <div className="flex items-start justify-between gap-3 bg-stone-50 border border-stone-100 rounded-lg px-4 py-3">
                <p className="font-serif text-stone-800 italic">{resultat}</p>
                <button
                  onClick={copier}
                  className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-bold bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 rounded-lg transition-colors"
                >
                  <Copy size={13} /> {copieMsg || 'Copier'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

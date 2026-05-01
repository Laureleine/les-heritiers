// src/components/forge/WidgetAnomalie.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Bug, Sparkles, X, Image as ImageIcon, Send, Key } from 'lucide-react'; // ✨ Ajout de Key
import { useForge } from '../../context/ForgeContext';
// ✨ FIX ESLINT : L'import fantôme de 'useCharacter' a été pulvérisé !

export default function WidgetAnomalie({ userProfile }) {
  const { soumettreEntree } = useForge();

  // ✨ DÉTECTION DU VIP
  const isInitiated = userProfile?.profile?.is_initiated === true || ['super_admin', 'gardien'].includes(userProfile?.profile?.role);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typeEntree, setTypeEntree] = useState('Anomalie');
  
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [version, setVersion] = useState('15.4.0');
  const [gravite, setGravite] = useState('Gênant');
  const [benefice, setBenefice] = useState('Confort');
  
  // ✨ LA MÉMOIRE DU SECRET (Par défaut : Oui si on est initié)
  const [isInitieOnly, setIsInitieOnly] = useState(false);
  useEffect(() => { if (isInitiated) setIsInitieOnly(true); }, [isInitiated]);

  const logsRef = useRef([]);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      // ✨ L'INCISION : On pousse en silence dans la mémoire, ZÉRO re-render !
      logsRef.current.push(args.map(a => String(a)).join(' '));
      originalError.apply(console, args);
    };
    return () => { console.error = originalError; };
  }, []);

  useEffect(() => {
    const handleOpenWidget = (e) => {
      if (e.detail?.type) {
        setTypeEntree(e.detail.type);
      }
      setIsOpen(true);
    };
    window.addEventListener('open-forge-widget', handleOpenWidget);
    return () => window.removeEventListener('open-forge-widget', handleOpenWidget);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      type_entree: typeEntree,
      titre,
      description,
      version_constatee: version,
      niveau_gravite: typeEntree === 'Anomalie' ? gravite : null,
      benefice_creatif: typeEntree === 'Inspiration' ? benefice : null,
      // ✨ On lit la mémoire silencieuse ici :
      logs_techniques: typeEntree === 'Anomalie' ? JSON.stringify(logsRef.current) : null,
      is_initie_only: isInitiated ? isInitieOnly : false
    };

    const success = await soumettreEntree(payload, file);
    setIsSubmitting(false);

    if (success) {
      setIsOpen(false);
      setTitre(''); setDescription(''); setFile(null);
      // ✨ On purge la boîte noire
      logsRef.current = []; 
    }
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-44 right-6 p-4 rounded-full shadow-2xl bg-stone-900 text-amber-400 hover:scale-110 hover:bg-stone-800 transition-all z-40 border-2 border-amber-600/50"
        title="Signaler une anomalie"
      >
        <Bug size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] w-full max-w-lg rounded-2xl shadow-2xl border-4 border-amber-900/20 flex flex-col overflow-hidden">
            
            <div className="bg-stone-100 p-4 border-b border-stone-200 flex justify-between items-center">
              <div className="flex bg-white rounded-lg p-1 border border-stone-200">
                <button onClick={() => setTypeEntree('Anomalie')} className={`px-4 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-colors ${typeEntree === 'Anomalie' ? 'bg-red-100 text-red-700' : 'text-stone-500 hover:bg-stone-50'}`}>
                  <Bug size={14}/> Anomalie
                </button>
                <button onClick={() => setTypeEntree('Inspiration')} className={`px-4 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-colors ${typeEntree === 'Inspiration' ? 'bg-emerald-100 text-emerald-700' : 'text-stone-500 hover:bg-stone-50'}`}>
                  <Sparkles size={14}/> Inspiration
                </button>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-red-500"><X size={20}/></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input type="text" placeholder="Titre..." value={titre} onChange={e => setTitre(e.target.value)} required className="w-full p-3 border border-stone-300 rounded-lg outline-none focus:border-amber-500 font-bold" />
              
              <textarea placeholder="Description détaillée..." value={description} onChange={e => setDescription(e.target.value)} required rows="4" className="w-full p-3 border border-stone-300 rounded-lg outline-none focus:border-amber-500 custom-scrollbar resize-none" />

              <div className="flex gap-4">
                <div className="w-1/3">
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Version</label>
                  <input type="text" value={version} onChange={e => setVersion(e.target.value)} className="w-full p-2 border border-stone-300 rounded-lg outline-none font-mono text-sm bg-stone-50" />
                </div>
                <div className="flex-1">
                  {typeEntree === 'Anomalie' ? (
                    <>
                      <label className="block text-xs font-bold text-red-800 uppercase mb-1">Gravité</label>
                      <select value={gravite} onChange={e => setGravite(e.target.value)} className="w-full p-2 border border-red-300 bg-red-50 text-red-900 rounded-lg">
                        <option>Esthétique</option><option>Gênant</option><option>Bloquant</option>
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="block text-xs font-bold text-emerald-800 uppercase mb-1">Bénéfice</label>
                      <select value={benefice} onChange={e => setBenefice(e.target.value)} className="w-full p-2 border border-emerald-300 bg-emerald-50 text-emerald-900 rounded-lg">
                        <option>Confort</option><option>Lore / Univers</option><option>Nouveau Mécanisme</option>
                      </select>
                    </>
                  )}
                </div>
              </div>

              {/* ✨ LA CASE SECRÈTE (Invisible pour les simples joueurs) */}
              {isInitiated && (
                <label className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg cursor-pointer transition-colors hover:bg-purple-100 shadow-sm animate-fade-in">
                  <input
                    type="checkbox"
                    checked={isInitieOnly}
                    onChange={(e) => setIsInitieOnly(e.target.checked)}
                    className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <Key size={16} className="text-purple-700" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-purple-900 leading-tight">Restreindre la visibilité aux Initiés</span>
                    <span className="text-[10px] text-purple-600">Le reste de la communauté ne verra pas ce ticket.</span>
                  </div>
                </label>
              )}

              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center transition-colors ${isDragging ? 'border-amber-500 bg-amber-50' : 'border-stone-300 bg-stone-50'}`}
              >
                <ImageIcon size={24} className={isDragging ? 'text-amber-500' : 'text-stone-400'} />
                <p className="text-xs text-stone-500 mt-2 font-bold">{file ? file.name : 'Glissez une capture d\'écran ici'}</p>
              </div>

              <button type="submit" disabled={isSubmitting || !titre} className="w-full mt-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors flex justify-center items-center gap-2 disabled:opacity-50">
                <Send size={18} /> {isSubmitting ? 'Transmission...' : 'Graver dans le Registre'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

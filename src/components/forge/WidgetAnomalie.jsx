// src/components/forge/WidgetAnomalie.jsx

import React, { useState, useEffect } from 'react';
import { Bug, Sparkles, X, Image as ImageIcon, Send } from 'lucide-react';
import { useForge } from '../../context/ForgeContext';

export default function WidgetAnomalie() {
  const { soumettreEntree } = useForge();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [typeEntree, setTypeEntree] = useState('Anomalie');
  
  // États du formulaire
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [version, setVersion] = useState('15.4.0');
  const [gravite, setGravite] = useState('Gênant');
  const [benefice, setBenefice] = useState('Confort');
  
  // La boîte noire & Drag/Drop
  const [logs, setLogs] = useState([]);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // 🕵️ L'ESPION : Interception silencieuse des logs d'erreur !
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      setLogs(prev => [...prev, args.map(a => String(a)).join(' ')]);
      originalError.apply(console, args);
    };
    return () => { console.error = originalError; };
  }, []);

  // ✨ L'INCISION : Écouteur d'invocation à distance
  useEffect(() => {
    const handleOpenWidget = (e) => {
      // Si l'événement transmet un type (ex: depuis le Kanban), on pré-remplit !
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
    // ✨ LE PACTE DES CROCHETS : On protège l'index 0 du parseur !
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
      logs_techniques: typeEntree === 'Anomalie' ? JSON.stringify(logs) : null
    };

    const success = await soumettreEntree(payload, file);
    
    setIsSubmitting(false);
    if (success) {
      setIsOpen(false);
      setTitre(''); setDescription(''); setFile(null); setLogs([]);
    }
  };

  return (
    <>
      {/* Bouton Flottant */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl bg-stone-900 text-amber-400 hover:scale-110 hover:bg-stone-800 transition-all z-40 border-2 border-amber-600/50"
      >
        <Bug size={24} />
      </button>

      {/* Modale Immersive */}
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
              
              <textarea placeholder="Description détaillée..." value={description} onChange={e => setDescription(e.target.value)} required rows="4" className="w-full p-3 border border-stone-300 rounded-lg outline-none focus:border-amber-500 resize-none" />

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Version</label>
                  <input type="text" value={version} onChange={e => setVersion(e.target.value)} className="w-full p-2 border border-stone-300 rounded-lg bg-stone-50" />
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
                        <option>Confort</option><option>Immersion</option><option>Puissance</option>
                      </select>
                    </>
                  )}
                </div>
              </div>

              {/* Zone Drag & Drop HTML5 */}
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`mt-4 p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-colors ${isDragging ? 'border-amber-500 bg-amber-50' : 'border-stone-300 bg-stone-50 hover:bg-stone-100'}`}
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
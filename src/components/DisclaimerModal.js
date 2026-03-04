// 10.2.0

import React, { useState, useEffect } from 'react';
import { BookOpen, Check } from 'lucide-react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté le disclaimer
    const hasAccepted = localStorage.getItem('heritiers_disclaimer_accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('heritiers_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-amber-400">
        <div className="bg-amber-50 p-6 border-b border-amber-100 text-center">
          <BookOpen className="mx-auto text-amber-600 mb-3" size={32} />
          <h2 className="text-2xl font-serif font-bold text-amber-900">À propos de cette application</h2>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed text-sm font-serif italic mb-6 bg-stone-50 p-4 rounded-lg border border-stone-200">
            "Cette application a été réalisée avec l'aval de l'équipe des Héritiers et se veut être un outil pour faciliter la gestion des Héritiers et des Doctes. Elle ne peut se substituer à l'usage des textes d'origines, que vous pouvez trouver à l'adresse suivante : <br/><br/>
            <a href="https://les-heritiers.metaplot.fr/" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:text-amber-800 hover:underline">
              https://les-heritiers.metaplot.fr/
            </a>"
          </p>
          
          <button
            onClick={handleAccept}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform active:scale-95"
          >
            <Check size={20} /> J'ai compris et j'accepte
          </button>
        </div>
      </div>
    </div>
  );
}
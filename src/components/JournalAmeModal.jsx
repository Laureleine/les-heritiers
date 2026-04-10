// src/components/JournalAmeModal.jsx
import React from 'react';
import { X, BookOpen, TrendingUp, TrendingDown, RotateCcw, Clock } from 'lucide-react';

export default function JournalAmeModal({ isOpen, onClose, historiqueXp = [] }) {
  if (!isOpen) return null;

  // On s'assure d'avoir un tableau, et on le trie du plus récent au plus ancien
  const sortedHistorique = [...historiqueXp].sort((a, b) => new Date(b.date_mouvement) - new Date(a.date_mouvement));

  const getIconAndColor = (type) => {
    switch (type) {
      case 'GAIN': return { icon: <TrendingUp size={16} />, color: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
      case 'DEPENSE': return { icon: <TrendingDown size={16} />, color: 'bg-amber-50 text-amber-900 border-amber-300' };
      case 'REMBOURSEMENT': return { icon: <RotateCcw size={16} />, color: 'bg-blue-50 text-blue-800 border-blue-200' };
      default: return { icon: <Clock size={16} />, color: 'bg-stone-50 text-stone-600 border-stone-200' };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-[#fdfbf7] max-w-2xl w-full max-h-[85vh] rounded-2xl shadow-2xl border-4 border-amber-900/20 flex flex-col overflow-hidden animate-fade-in-up" onClick={e => e.stopPropagation()}>
        
        {/* En-tête du Livre de Comptes */}
        <div className="bg-stone-950 p-4 border-b border-amber-900/50 flex justify-between items-center shrink-0">
          <h3 className="font-serif font-bold text-xl text-amber-400 flex items-center gap-3">
            <BookOpen className="text-amber-600" />
            Journal des Flux de l'Âme
          </h3>
          <button onClick={onClose} className="text-stone-400 hover:text-red-500 bg-stone-800 hover:bg-stone-700 p-2 rounded-full shadow-sm transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Le Registre */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          {sortedHistorique.length === 0 ? (
            <div className="text-center py-12 text-stone-400 font-serif italic flex flex-col items-center gap-3">
              <Clock size={32} className="opacity-20" />
              Les pages de ce journal sont encore vierges.
            </div>
          ) : (
            <div className="space-y-3">
              {sortedHistorique.map((entree, idx) => {
                const { icon, color } = getIconAndColor(entree.type);
                
                return (
                  <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between gap-4 shadow-sm transition-all hover:scale-[1.01] ${color}`}>
                    
                    {/* Icône & Date */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="p-2 bg-white/50 rounded-lg shadow-sm">
                        {icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                          {new Date(entree.date_mouvement).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="text-xs font-serif opacity-80">
                          {new Date(entree.date_mouvement).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}
                        </span>
                      </div>
                    </div>

                    {/* Libellé Narratif */}
                    <div className="flex-1 flex flex-col border-l border-current/20 pl-4 py-1">
                      <span className="font-bold font-serif leading-tight">
                        {entree.label}
                      </span>
                      {entree.rang_final != null && (
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-70 mt-0.5">
                          Rang atteint : {entree.rang_final}
                        </span>
                      )}
                    </div>

                    {/* Valeur Mathématique */}
                    <div className="shrink-0 text-right pr-2">
                      <span className="text-xl font-black font-serif">
                        {entree.type === 'DEPENSE' ? '-' : '+'}{entree.valeur}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-1">XP</span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
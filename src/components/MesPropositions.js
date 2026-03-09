// 12.1.0 // 12.2.0

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, CheckCircle, XCircle, Archive, MessageCircle, FileText } from 'lucide-react';
import { supabase } from '../config/supabase';

export default function MesPropositions({ session, onBack }) {
  const [propositions, setPropositions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // ✨ NOUVEAU : La mémoire de l'onglet actif (par défaut on affiche les attentes)
  const [activeTab, setActiveTab] = useState('pending'); 

  useEffect(() => {
    const fetchProps = async () => {
      const { data, error } = await supabase
        .from('data_change_requests')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false });
        
      if (!error && data) {
        setPropositions(data);
      }
      setLoading(false);
    };
    fetchProps();
  }, [session.user.id]);

  const getStatusDisplay = (status) => {
    switch(status) {
      case 'pending': return <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-amber-200"><Clock size={14}/> En attente du Conseil</span>;
      case 'approved': return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-blue-200"><CheckCircle size={14}/> Pré-validé</span>;
      case 'archived': return <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-emerald-200"><Archive size={14}/> Gravé dans les Archives</span>;
      case 'rejected': return <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-red-200"><XCircle size={14}/> Rejeté</span>;
      default: return null;
    }
  };

  // ✨ NOUVEAU : On filtre la liste totale selon l'onglet choisi !
  const filteredPropositions = propositions.filter(p => p.status === activeTab);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-serif font-bold text-blue-900 flex items-center gap-3">
          <FileText className="text-blue-600" /> Suivi de mes Propositions
        </h2>
        <button onClick={onBack} className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 flex items-center gap-2 shadow-sm font-bold font-serif transition-colors">
          <ArrowLeft size={16} /> Retour à l'Encyclopédie
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20 text-stone-400 font-serif animate-pulse">Recherche dans vos correspondances...</div>
      ) : (
        <>
          {/* ✨ NOUVEAU : LA BARRE D'ONGLETS INTELLIGENTE */}
          <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
            <button onClick={() => setActiveTab('pending')} className={`pb-3 font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === 'pending' ? 'text-amber-600 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-600'}`}>
              En attente ({propositions.filter(p => p.status === 'pending').length})
            </button>
            <button onClick={() => setActiveTab('approved')} className={`pb-3 font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === 'approved' ? 'text-blue-600 border-blue-600' : 'text-gray-400 border-transparent hover:text-gray-600'}`}>
              Pré-validées ({propositions.filter(p => p.status === 'approved').length})
            </button>
            <button onClick={() => setActiveTab('archived')} className={`pb-3 font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === 'archived' ? 'text-emerald-600 border-emerald-600' : 'text-gray-400 border-transparent hover:text-gray-600'}`}>
              En ligne ({propositions.filter(p => p.status === 'archived').length})
            </button>
            <button onClick={() => setActiveTab('rejected')} className={`pb-3 font-bold whitespace-nowrap transition-colors border-b-2 ${activeTab === 'rejected' ? 'text-red-600 border-red-600' : 'text-gray-400 border-transparent hover:text-gray-600'}`}>
              Rejetées ({propositions.filter(p => p.status === 'rejected').length})
            </button>
          </div>

          {filteredPropositions.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-stone-200 shadow-sm">
              <FileText size={48} className="mx-auto text-stone-300 mb-4" />
              <p className="text-stone-500 font-serif text-lg">Aucune proposition dans cette catégorie.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPropositions.map(prop => (
                <div key={prop.id} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in-up">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-stone-800">{prop.record_name || 'Élément inconnu'}</h3>
                      <div className="text-xs text-stone-500 font-sans mt-0.5 flex items-center gap-2">
                        <span className="uppercase tracking-wider font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">{prop.table_name.replace('fairy_', '')}</span>
                        • Soumis le {new Date(prop.created_at).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <div>{getStatusDisplay(prop.status)}</div>
                  </div>
                  
                  <div className="text-sm text-stone-600 italic bg-stone-50 p-3 rounded border border-stone-100 mb-2">
                    " {prop.justification} "
                  </div>

                  {/* L'EXPLICATION DU REJET */}
                  {prop.status === 'rejected' && prop.rejection_reason && (
                    <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm text-red-900 flex gap-3">
                      <MessageCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                      <div>
                        <strong className="block font-serif text-red-800 mb-1">Réponse du Conseil des Gardiens :</strong>
                        {prop.rejection_reason}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
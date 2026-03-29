// 15.0.0

import React, { useState, useEffect } from 'react';
import { Bug, CheckCircle2, AlertCircle, Clock, EyeOff, ThumbsUp, Send, ArrowLeft } from 'lucide-react';
import { supabase } from '../config/supabase';
import { useCharacter } from '../context/CharacterContext';
import { showInAppNotification } from '../utils/SystemeServices';

export default function BureauAnomalies({ onBack }) {
  const { userProfile } = useCharacter();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  // Formulaire
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isConfidential, setIsConfidential] = useState(false);

  const fetchReports = async () => {
    // On ne charge que les bugs publics OU ceux de l'utilisateur
    const { data, error } = await supabase
      .from('bug_reports')
      .select('*, profiles(username)')
      .or(`is_confidential.eq.false,user_id.eq.${userProfile.id}`)
      .order('created_at', { ascending: false });
    
    if (!error && data) setReports(data);
  };

  useEffect(() => {
    if (userProfile) fetchReports();
  }, [userProfile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    setLoading(true);

    const { error } = await supabase.from('bug_reports').insert([{
      user_id: userProfile.id,
      title,
      description,
      status: 'Signalé',
      is_confidential: isConfidential,
      version_app: '15.4.0', // Idéalement importé depuis src/version.js
      community_weight: []
    }]);

    setLoading(false);
    if (error) {
      showInAppNotification("Les Gardiens n'ont pas reçu le message.", "error");
    } else {
      showInAppNotification("Anomalie signalée ! Le Bureau enquête.", "success");
      setTitle('');
      setDescription('');
      setIsConfidential(false);
      fetchReports();
    }
  };

  const handleVote = async (report) => {
    const currentWeight = report.community_weight || [];
    const hasVoted = currentWeight.includes(userProfile.id);
    
    // Toggle du vote
    const newWeight = hasVoted 
      ? currentWeight.filter(id => id !== userProfile.id)
      : [...currentWeight, userProfile.id];

    const { error } = await supabase
      .from('bug_reports')
      .update({ community_weight: newWeight })
      .eq('id', report.id);

    if (!error) fetchReports();
  };

  // ✨ FIX : Le "Ping" qui rafraîchit la date du bug pour alerter les Gardiens
  const handlePingStale = async (report) => {
    // On met à jour le champ created_at (ou updated_at si tu as créé la colonne) 
    // pour relancer le chronomètre et remonter le ticket
    const { error } = await supabase
      .from('bug_reports')
      .update({ created_at: new Date().toISOString() }) 
      .eq('id', report.id);

    if (!error) {
      showInAppNotification("Les Gardiens ont été relancés par Télégraphe !", "info");
      fetchReports();
    } else {
      showInAppNotification("La relance a échoué...", "error");
    }
  };
  
  const isOlderThan7Days = (dateStr) => {
    const diff = new Date() - new Date(dateStr);
    return diff > 7 * 24 * 60 * 60 * 1000;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24 font-serif animate-fade-in">
      
      {/* ✨ NOUVEAU HEADER DE NAVIGATION */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-stone-200 pb-6">
        <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center gap-3">
          <Bug className="text-amber-600" /> Bureau des Anomalies
        </h2>
        <button onClick={onBack} className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 flex items-center gap-2 shadow-sm font-bold transition-colors">
          <ArrowLeft size={16} /> Retour à l'accueil
        </button>
        <p className="text-sm text-stone-400">Aidez les Gardiens du Savoir à chasser les failles du Grimoire.</p>
      </div>

      {/* FORMULAIRE DE SIGNALEMENT */}
      <form onSubmit={handleSubmit} className="bg-amber-50 p-6 rounded-xl border border-amber-200 shadow-sm space-y-4">
        <h3 className="font-bold text-amber-900 mb-4">Signaler une faille</h3>
        <input 
          type="text" placeholder="Titre de l'anomalie..." value={title} onChange={e => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg border border-amber-300 focus:ring-2 focus:ring-amber-500 outline-none"
        />
        <textarea 
          placeholder="Décrivez précisément ce que vous faisiez quand la faille s'est produite..." 
          value={description} onChange={e => setDescription(e.target.value)} rows="4"
          className="w-full p-3 rounded-lg border border-amber-300 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
        />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-amber-800 cursor-pointer font-bold">
            <input type="checkbox" checked={isConfidential} onChange={e => setIsConfidential(e.target.checked)} className="w-4 h-4 text-amber-600" />
            <EyeOff size={16} /> Signalement confidentiel (Invisible du public)
          </label>
          <button type="submit" disabled={loading} className="bg-amber-700 text-white px-6 py-2 rounded-lg font-bold hover:bg-amber-800 flex items-center gap-2 transition-colors disabled:opacity-50">
            <Send size={16} /> Transmettre
          </button>
        </div>
      </form>

      {/* LISTE DES ANOMALIES COMMUNAUTAIRES */}
      <div className="space-y-4">
        <h3 className="font-bold text-stone-800 text-lg border-b border-stone-200 pb-2">Registres Publics</h3>
        {reports.length === 0 && <p className="text-stone-500 italic text-center py-8">La matrice est parfaitement stable. Aucun signalement.</p>}
        
        {reports.map(report => {
          const votes = report.community_weight || [];
          const hasVoted = votes.includes(userProfile.id);
          const isStale = report.status === 'Signalé' && isOlderThan7Days(report.created_at);

          return (
            <div key={report.id} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider ${
                    report.status === 'Résolu' ? 'bg-green-100 text-green-800' :
                    report.status === 'En cours de traitement' ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {report.status}
                  </span>
                  <h4 className="font-bold text-stone-800 text-lg">{report.title}</h4>
                  {report.is_confidential && <EyeOff size={14} className="text-stone-400" title="Confidentiel" />}
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{report.description}</p>
                <div className="text-xs text-stone-400 mt-3 flex gap-4">
                  <span>Déclaré par : {report.profiles?.username || 'Anonyme'}</span>
                  <span>Version : {report.version_app}</span>
                </div>
              </div>

              {/* ACTIONS COMMUNAUTAIRES */}
              <div className="flex flex-col items-end justify-between shrink-0 gap-3 border-t md:border-t-0 md:border-l border-stone-100 pt-3 md:pt-0 md:pl-4">
                <button 
                  onClick={() => handleVote(report)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold transition-all ${
                    hasVoted ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-stone-200 text-stone-500 hover:bg-stone-50'
                  }`}
                >
                  <ThumbsUp size={16} className={hasVoted ? 'fill-indigo-600' : ''} /> 
                  Je constate également ({votes.length})
                </button>

                {isStale && (
                  <button 
                    onClick={() => handlePingStale(report)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors"
                  >
                    <Clock size={14} /> Toujours observable
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// src/components/forge/RegistrePage.jsx
import React, { useState } from 'react';
import { useForge } from '../../context/ForgeContext';
// ✨ FIX ESLINT : L'import fantôme de 'useCharacter' a été pulvérisé !
import { Filter, Archive, EyeOff, ArrowLeft, Plus, User, ThumbsUp, ThumbsDown, Lock, Unlock, Bug, Sparkles, ExternalLink, X, Copy, MessageCircle } from 'lucide-react'; 
import ConfirmModal from '../ConfirmModal';
import { showInAppNotification } from '../../utils/SystemeServices';

export default function RegistrePage({ onBack, userProfile }) {
  // ✨ On récupère rejeterEntree !
  const { entrees, loading, deplacerCarteKanban, toggleArchive, voterEntree, toggleInitieOnly, rejeterEntree } = useForge();
 
  const myUserId = userProfile?.id;
  const isInitiated = userProfile?.profile?.is_initiated === true || ['super_admin', 'gardien'].includes(userProfile?.profile?.role);

  const [filtreType, setFiltreType] = useState('Anomalie');
  const [tri, setTri] = useState('Manuel');
  const [voirArchives, setVoirArchives] = useState(false);
  const [dragOverId, setDragOverId] = useState(null);

  const [confirmSecret, setConfirmSecret] = useState({ isOpen: false, id: null, currentState: false });
  const [carteSelectionnee, setCarteSelectionnee] = useState(null);

  const [rejetState, setRejetState] = useState({ isOpen: false, raison: '' });

  const handleRejeter = async () => {
    const success = await rejeterEntree(carteSelectionnee.id, rejetState.raison);
    if (success) {
      setRejetState({ isOpen: false, raison: '' });
      setCarteSelectionnee(null); // On ferme la modale !
    }
  };
  
  const colonnes = filtreType === 'Anomalie'
    ? ['Vu', 'En cours', 'Résolu']
    : ["À l'étude", 'Planifié', 'Intégré'];

  const getCouleurStatut = (statut) => {
    if (['Résolu', 'Intégré'].includes(statut)) return 'bg-green-100 text-green-800 border-green-300';
    if (['En cours', 'Planifié'].includes(statut)) return 'bg-blue-100 text-blue-800 border-blue-300';
    return 'bg-stone-100 text-stone-800 border-stone-300';
  };

  let cartesAffichees = entrees.filter(e => e.type_entree === filtreType);
  if (!voirArchives) cartesAffichees = cartesAffichees.filter(e => !e.is_masque);
  
  if (!isInitiated) {
    cartesAffichees = cartesAffichees.filter(e => e.is_initie_only !== true);
  }

  if (tri === 'Recents') cartesAffichees.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (tri === 'Anciens') cartesAffichees.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  if (tri === 'Votes') cartesAffichees.sort((a, b) => ((b.votes?.up?.length || 0) - (b.votes?.down?.length || 0)) - ((a.votes?.up?.length || 0) - (a.votes?.down?.length || 0)));

  const onDragStart = (e, carteId) => { e.dataTransfer.setData('text/plain', carteId); };
  const onDragOver = (e, carteId) => {
    e.preventDefault();
    if (carteId !== dragOverId) setDragOverId(carteId);
  };
  const onDrop = (e, colonneCible) => {
    e.preventDefault();
    const carteId = e.dataTransfer.getData('text/plain');
    if (carteId) deplacerCarteKanban(carteId, colonneCible, dragOverId);
    setDragOverId(null);
  };

  const executeToggleSecret = () => {
    toggleInitieOnly(confirmSecret.id, confirmSecret.currentState);
    setConfirmSecret({ isOpen: false, id: null, currentState: false });
  };

  // ✨ LA FONCTION DE COPIE (Pour toi et moi !)
  const handleCopyCard = (e, carte) => {
    e.stopPropagation();
    
    const icone = carte.type_entree === 'Anomalie' ? '🐛' : '✨';
    const infoSup = carte.type_entree === 'Anomalie' ? `Gravité: ${carte.niveau_gravite || '?'}` : `Bénéfice: ${carte.benefice_creatif || '?'}`;
    
    let texte = `${icone} [${carte.type_entree}] ${carte.titre}\n`;
    texte += `Statut: ${carte.statut} | ${infoSup} | v${carte.version_constatee}\n`;
    texte += `Auteur: ${carte.profiles?.username || 'Anonyme'}\n`;
    texte += `----------------------------------------\n`;
    texte += `${carte.description}\n`;

    if (isInitiated && carte.logs_techniques && carte.logs_techniques !== "[]") {
      texte += `\n----------------------------------------\n`;
      texte += `Boîte Noire (Logs techniques) :\n`;
      try {
        const parsed = JSON.parse(carte.logs_techniques);
        texte += parsed.map(log => `> ${log}`).join('\n');
      } catch {
        texte += carte.logs_techniques;
      }
    }

    navigator.clipboard.writeText(texte).then(() => {
      showInAppNotification("Ticket copié dans le presse-papier ! Prêt à être collé.", "success");
    }).catch(() => {
      showInAppNotification("Impossible de copier le ticket. Droits du navigateur insuffisants.", "error");
    });
  };

  if (loading) return <div className="p-8 text-center animate-pulse">Chargement de la Forge...</div>;

  return (
    // ✨ INCISION 1 : h-[calc(100vh-8rem)] au lieu de h-screen !
    <div className="max-w-7xl mx-auto p-4 md:p-6 font-sans text-stone-800 flex flex-col h-[85vh] md:h-[calc(100vh-8rem)]">
      
      {/* HEADER & FILTRES */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 border-b border-stone-200 pb-4 gap-4 shrink-0">
        <div className="flex items-center gap-4">
          {onBack && (
            <button onClick={onBack} className="p-2 bg-stone-200 text-stone-600 hover:bg-stone-300 hover:text-stone-900 rounded-lg transition-colors shadow-sm">
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-amber-900">Registre de la Forge</h1>
        </div>

        <div className="flex gap-3 items-center flex-wrap justify-end">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-forge-widget', { detail: { type: filtreType } }))}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <Plus size={18} /> Nouvelle Entrée
          </button>
          
          <button onClick={() => setVoirArchives(!voirArchives)} className={`px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 border ${voirArchives ? 'bg-stone-800 text-white' : 'bg-white text-stone-600'}`}>
            {voirArchives ? <EyeOff size={16}/> : <Archive size={16}/>} Archives
          </button>

          <div className="flex items-center bg-white border border-stone-300 rounded-lg p-1 shadow-sm">
            <button onClick={() => setFiltreType('Anomalie')} className={`px-3 py-1 text-sm font-bold rounded ${filtreType === 'Anomalie' ? 'bg-red-50 text-red-700' : 'text-stone-500'}`}>Bugs</button>
            <button onClick={() => setFiltreType('Inspiration')} className={`px-3 py-1 text-sm font-bold rounded ${filtreType === 'Inspiration' ? 'bg-emerald-50 text-emerald-700' : 'text-stone-500'}`}>Idées</button>
          </div>

          <div className="flex items-center gap-2 bg-white border border-stone-300 rounded-lg px-2 py-1 shadow-sm">
            <Filter size={14} className="text-stone-400" />
            <select value={tri} onChange={(e) => setTri(e.target.value)} className="bg-transparent text-sm font-bold text-stone-700 outline-none cursor-pointer">
              <option value="Manuel">Tri Manuel</option>
              <option value="Votes">Par Votes</option>
              <option value="Recents">Plus récents</option>
              <option value="Anciens">Plus anciens</option>
            </select>
          </div>
        </div>
      </div>

      {/* LE KANBAN */}
      {/* ✨ INCISION 1 : flex-1 + min-h-0 sur le conteneur parent */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto md:overflow-hidden pr-2 md:pr-0 pb-4 md:pb-0 custom-scrollbar">
        {colonnes.map(colStatut => {
          const cartesDeLaColonne = cartesAffichees.filter(c => c.statut === colStatut);
          return (
            <div 
              key={colStatut} 
              onDragOver={(e) => onDragOver(e, null)} 
              onDrop={(e) => onDrop(e, colStatut)}
              // ✨ INCISION 2 : md:min-h-0 sur la colonne
              className="bg-stone-100 rounded-2xl p-4 flex flex-col h-[500px] md:h-full md:min-h-0 border border-stone-200 shrink-0"
            >
              <div className="flex justify-between items-center mb-4 shrink-0">
                <h3 className="font-bold text-stone-700 uppercase tracking-widest text-sm">{colStatut}</h3>
                <span className="text-xs font-bold bg-stone-200 text-stone-500 px-2 py-0.5 rounded-full">{cartesDeLaColonne.length}</span>
              </div>

              {/* ✨ INCISION 3 : min-h-0 sur la zone de défilement interne, c'est lui qui libère l'ascenseur ! */}
              <div className="flex-1 min-h-0 overflow-y-auto space-y-4 custom-scrollbar pr-2 pb-2">
                {cartesDeLaColonne.map(carte => (
                  <div 
                    key={carte.id} 
                    draggable 
                    onDragStart={(e) => onDragStart(e, carte.id)}
                    onDragOver={(e) => onDragOver(e, carte.id)}
                    onClick={() => setCarteSelectionnee(carte)} 
                    className={`bg-white p-4 rounded-xl border-2 shadow-sm cursor-pointer transition-all relative group ${
                      dragOverId === carte.id ? 'border-t-4 border-t-amber-500' : 'border-stone-200 hover:border-amber-300'
                    } ${carte.is_masque ? 'opacity-60' : ''}`}
                  >
                    
                    <div className={`absolute top-2 right-2 flex items-center gap-1 z-20 transition-opacity duration-200 ${carte.is_initie_only || carte.is_masque ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      
                      {/* Le Bouton de Copie */}
                      <button
                        onClick={(e) => handleCopyCard(e, carte)}
                        className="p-1.5 rounded-lg transition-all border shadow-sm bg-stone-50 text-stone-400 border-stone-200 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200"
                        title="Copier les détails pour l'IA"
                      >
                        <Copy size={14} />
                      </button>

                      {isInitiated && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setConfirmSecret({ isOpen: true, id: carte.id, currentState: carte.is_initie_only }); }} 
                          className={`p-1.5 rounded-lg transition-all border shadow-sm ${
                            carte.is_initie_only
                              ? 'bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200 hover:scale-105'
                              : 'bg-stone-50 text-stone-400 border-stone-200 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-200'
                          }`}
                          title={carte.is_initie_only ? "Sceau actif : Rendre public" : "Restreindre l'accès aux Initiés"}
                        >
                          {carte.is_initie_only ? <Lock size={14} /> : <Unlock size={14} />}
                        </button>
                      )}

                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleArchive(carte.id, carte.is_masque); }} 
                        className={`p-1.5 rounded-lg transition-all border shadow-sm ${
                          carte.is_masque 
                            ? 'bg-red-50 text-red-500 border-red-200 hover:bg-red-100 hover:scale-105' 
                            : 'bg-stone-50 text-stone-400 border-stone-200 hover:text-red-500 hover:bg-red-50 hover:border-red-200'
                        }`}
                        title={carte.is_masque ? "Désarchiver" : "Archiver le ticket"}
                      >
                        {carte.is_masque ? <EyeOff size={14}/> : <Archive size={14}/>}
                      </button>
                    </div>

                    <div className="flex gap-2 mb-2 pr-24 pointer-events-none">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${getCouleurStatut(carte.statut)}`}>{carte.statut}</span>
                      {carte.niveau_gravite && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${carte.niveau_gravite === 'Bloquant' ? 'bg-red-100 text-red-700' : carte.niveau_gravite === 'Gênant' ? 'bg-orange-100 text-orange-700' : 'bg-stone-100 text-stone-600'}`}>{carte.niveau_gravite}</span>}
                      {carte.benefice_creatif && <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${carte.benefice_creatif === 'Nouveau Mécanisme' ? 'bg-emerald-100 text-emerald-700' : 'bg-teal-50 text-teal-600'}`}>{carte.benefice_creatif}</span>}
                    </div>

                    <h4 className="font-bold text-stone-900 mb-1 leading-tight pointer-events-none">{carte.titre}</h4>
                    <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed whitespace-pre-wrap pointer-events-none">{carte.description}</p>

                    {carte.capture_url && (
                      <div className="mt-2 h-24 rounded-lg bg-stone-100 bg-cover bg-center border border-stone-200 pointer-events-none" style={{ backgroundImage: `url(${carte.capture_url})` }} />
                    )}

                    <div className="mt-3 flex justify-between items-center text-[10px] font-bold text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 pointer-events-none">
                        <span>v{carte.version_constatee}</span>
                        <span className="flex items-center gap-1 text-amber-700/80" title="Auteur du signalement">
                          <User size={10} /> {carte.profiles?.username || 'Anonyme'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-stone-50 px-2 py-1 rounded-lg border border-stone-200 relative z-10">
                        <button onClick={(e) => { e.stopPropagation(); voterEntree(carte.id, 'up'); }} className="hover:scale-110 hover:text-emerald-600 transition-all cursor-pointer" title="Voter Pour">
                          <ThumbsUp size={14} className={(carte.votes?.up || []).includes(myUserId) ? 'fill-emerald-500 text-emerald-600' : ''} />
                        </button>
                        <span className={`text-xs w-4 text-center ${((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0)) > 0 ? 'text-emerald-600' : ((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0)) < 0 ? 'text-red-600' : 'text-stone-500'}`}>
                          {((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0)) > 0 ? '+' : ''}{((carte.votes?.up?.length || 0) - (carte.votes?.down?.length || 0))}
                        </span>
                        <button onClick={(e) => { e.stopPropagation(); voterEntree(carte.id, 'down'); }} className="hover:scale-110 hover:text-red-600 transition-all cursor-pointer" title="Voter Contre">
                          <ThumbsDown size={14} className={(carte.votes?.down || []).includes(myUserId) ? 'fill-red-500 text-red-600' : ''} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* LA MODALE IMMERSIVE */}
      {carteSelectionnee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setCarteSelectionnee(null)}>
          <div className="bg-[#fdfbf7] max-w-3xl w-full max-h-[90vh] rounded-2xl shadow-2xl border-4 border-amber-900/20 flex flex-col overflow-hidden animate-fade-in-up" onClick={e => e.stopPropagation()}>
            
            {/* En-tête de la Modale */}
            <div className="bg-stone-100 p-4 border-b border-stone-200 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${carteSelectionnee.type_entree === 'Anomalie' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                  {carteSelectionnee.type_entree === 'Anomalie' ? <Bug size={24}/> : <Sparkles size={24}/>}
                </div>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-800 leading-tight pr-4">
                  {carteSelectionnee.titre}
                </h2>
              </div>
              
              {/* ✨ L'INCISION : Le groupe de boutons d'action en haut à droite */}
              <div className="flex items-center gap-2 shrink-0">
                <button 
                  onClick={(e) => handleCopyCard(e, carteSelectionnee)} 
                  className="text-stone-400 hover:text-blue-600 bg-white p-2 rounded-full shadow-sm transition-all hover:scale-110"
                  title="Copier les détails pour l'IA"
                >
                  <Copy size={20} />
                </button>
                
                <button 
                  onClick={() => setCarteSelectionnee(null)} 
                  className="text-stone-400 hover:text-red-500 bg-white p-2 rounded-full shadow-sm transition-all hover:scale-110"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
              <div className="flex flex-wrap gap-3 items-center pb-4 border-b border-stone-100">
                <span className={`text-xs px-3 py-1 rounded-full border font-bold uppercase ${getCouleurStatut(carteSelectionnee.statut)}`}>
                  {carteSelectionnee.statut}
                </span>
                {carteSelectionnee.niveau_gravite && (
                  <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${carteSelectionnee.niveau_gravite === 'Bloquant' ? 'bg-red-100 text-red-700' : carteSelectionnee.niveau_gravite === 'Gênant' ? 'bg-orange-100 text-orange-700' : 'bg-stone-100 text-stone-600'}`}>
                    Gravité : {carteSelectionnee.niveau_gravite}
                  </span>
                )}
                {carteSelectionnee.benefice_creatif && (
                  <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase ${carteSelectionnee.benefice_creatif === 'Nouveau Mécanisme' ? 'bg-emerald-100 text-emerald-700' : 'bg-teal-50 text-teal-600'}`}>
                    Bénéfice : {carteSelectionnee.benefice_creatif}
                  </span>
                )}
                <span className="text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  v{carteSelectionnee.version_constatee}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 ml-auto">
                  <User size={14} /> Auteur : {carteSelectionnee.profiles?.username || 'Anonyme'}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Description détaillée</h4>
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-inner">
                  <p className="text-stone-700 leading-relaxed font-serif whitespace-pre-wrap text-base md:text-lg">
                    {carteSelectionnee.description}
                  </p>
                </div>
              </div>

              {carteSelectionnee.capture_url && (
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Preuve Visuelle</h4>
                  <a href={carteSelectionnee.capture_url} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in group relative rounded-xl overflow-hidden border-2 border-stone-200 shadow-md">
                    <img src={carteSelectionnee.capture_url} alt="Capture d'écran" className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <span className="text-white font-bold tracking-widest uppercase flex items-center gap-2">
                        <ExternalLink size={18}/> Ouvrir en taille réelle
                      </span>
                    </div>
                  </a>
                </div>
              )}

              {/* ✨ AFFICHAGE DE LA RÉPONSE OFFICIELLE (Si elle existe) */}
              {carteSelectionnee.reponse_officielle && (
                <div className="mt-4 p-4 bg-stone-100 border-l-4 border-stone-500 rounded-r-xl shadow-inner">
                  <h4 className="text-sm font-bold text-stone-800 mb-2 flex items-center gap-2">
                    <MessageCircle size={16} className="text-stone-600" />
                    Réponse de l'Atelier :
                  </h4>
                  <p className="text-sm text-stone-700 font-serif italic whitespace-pre-wrap leading-relaxed">
                    "{carteSelectionnee.reponse_officielle}"
                  </p>
                </div>
              )}

              {isInitiated && carteSelectionnee.logs_techniques && carteSelectionnee.logs_techniques !== "[]" && (
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Lock size={14}/> Boîte Noire du Navigateur (Privé)
                  </h4>
                  <div className="bg-stone-900 p-4 rounded-xl overflow-x-auto text-green-400 font-mono text-xs shadow-inner whitespace-pre-wrap leading-relaxed">
                    {(() => {
                      try {
                        const parsed = JSON.parse(carteSelectionnee.logs_techniques);
                        return parsed.map((log, i) => <div key={i} className="mb-2 pb-2 border-b border-stone-800 last:border-0 last:mb-0 last:pb-0">{`> ${log}`}</div>);
                      } catch {
                        return carteSelectionnee.logs_techniques;
                      }
                    })()}
                  </div>
                </div>
              )}
			  
              {/* ✨ LE POSTE DE COMMANDEMENT DU GARDIEN (Pour Rejeter) */}
              {isInitiated && !rejetState.isOpen && carteSelectionnee.statut !== 'Rejeté' && (
                <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end gap-3">
                  <button 
                    onClick={() => setRejetState({ isOpen: true, raison: '' })} 
                    className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <X size={18} /> Rejeter et Archiver
                  </button>
                </div>
              )}

              {/* ✨ LE FORMULAIRE DE SAISIE DE REJET */}
              {rejetState.isOpen && (
                <div className="mt-6 pt-4 border-t border-stone-200 bg-red-50 p-4 rounded-xl shadow-inner animate-fade-in">
                  <label className="block text-sm font-bold text-red-900 mb-2">Motif du rejet (Visible par l'auteur) :</label>
                  <textarea
                    value={rejetState.raison}
                    onChange={(e) => setRejetState({ ...rejetState, raison: e.target.value })}
                    className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none resize-none bg-white mb-3 custom-scrollbar"
                    rows="3"
                    placeholder="Expliquez pourquoi ce ticket est refusé ou classé sans suite..."
                    autoFocus
                  />
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => setRejetState({ isOpen: false, raison: '' })} 
                      className="px-4 py-2 text-stone-600 hover:bg-stone-200 rounded-lg font-bold transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={handleRejeter}
                      disabled={!rejetState.raison.trim()}
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-colors disabled:opacity-50"
                    >
                      Confirmer la sanction
                    </button>
                  </div>
                </div>
              )}			  
            </div>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmSecret.isOpen}
        title={confirmSecret.currentState ? "Lever le Sceau du Secret" : "Apposer le Sceau du Secret"}
        message={confirmSecret.currentState
          ? "Voulez-vous vraiment retirer le Sceau du Secret ? Ce ticket sera de nouveau visible et consultable par l'ensemble de la communauté."
          : "Voulez-vous vraiment restreindre l'accès à ce ticket ? Il deviendra totalement invisible pour les joueurs qui ne sont pas Initiés."}
        onConfirm={executeToggleSecret}
        onCancel={() => setConfirmSecret({ isOpen: false, id: null, currentState: false })}
        confirmText={confirmSecret.currentState ? "Oui, rendre public" : "Oui, restreindre l'accès"}
      />
    </div>
  );
}
// src/components/StepRecapitulatif.js

import React from 'react';
import { Camera, Clock, Plus, Copy, User, Star, Award, Sparkles, Shield, Zap, CheckCircle, Briefcase, Lock, Unlock, ShieldAlert } from 'lucide-react';
import { CARAC_LIST, accorderTexte } from '../data/DictionnaireJeu';
import ConfirmModal from './ConfirmModal';
import { useCerbere } from '../hooks/useCerbere'; // ✨ NOUVEAU

export default function StepRecapitulatif() {
  // ✨ LA MAGIE : On branche le cerveau !
  const {
    character, feeData, isScelle, getCarac, uniqueFutiles,
    showConfirmSeal, setShowConfirmSeal,
    snapshots, loadingSnapshots,
    showPhotoModal, setShowPhotoModal, photoTitle, setPhotoTitle,
    handleTakeSnapshot, handleCloneSnapshot, handleSealClick, executeSeal
  } = useCerbere();

  const genreActuel = character.genreHumain || character.sexe;

  // 👇 LA CARROSSERIE RESTE INTACTE À PARTIR D'ICI 👇
  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif text-amber-900 flex items-center justify-center gap-3">
          <CheckCircle className="text-amber-600" /> Bilan du Personnage
        </h2>
        <p className="text-gray-600 mt-2">Vérifiez les statistiques de {character.nom || 'votre Héritier'} avant l'exportation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* ============================================================== */}
        {/* === COLONNE GAUCHE (Caracs, Profils & Futiles) ===             */}
        {/* ============================================================== */}
        <div className="space-y-6">
          
          {/* Caractéristiques */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-amber-900 border-b border-amber-100 pb-2 flex items-center gap-2">
              <Shield size={18} /> Caractéristiques
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {CARAC_LIST.map(c => (
                <div key={c.key} className="bg-stone-50 p-2 rounded-lg border border-stone-100 text-center">
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider truncate" title={c.label}>
                    {c.label.substring(0, 3)}
                  </div>
				  <div className="text-xl font-bold text-amber-900 mt-1">
					{getCarac(c.key)}
				  </div>			  
                </div>
              ))}
            </div>
          </div>

			{/* L'ENCART DES TRAITS (TOUS FUSIONNÉS) */}
			<div className="bg-stone-50 p-3 rounded-lg border border-stone-200 mb-4 shadow-sm">
			  <div className="flex items-center gap-2 mb-1">
				<Sparkles size={16} className="text-stone-600" />
				<span className="font-bold text-stone-800">Traits de personnalité</span>
			  </div>
			  <div className="font-serif font-bold text-amber-900 pl-7">
				{[...(character.traitsFeeriques || []), character.profils?.majeur?.trait, character.profils?.mineur?.trait]
				  .filter(Boolean)
				  .map(t => accorderTexte(t, character.genreHumain || character.sexe))
				  .join(' • ')}
			  </div>
			</div>
			
          {/* Profils d'Héritier */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-amber-900 border-b border-amber-100 pb-2 flex items-center gap-2">
              <User size={18} /> Profils d'Héritier
            </h3>
            <div className="space-y-4">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-amber-600 fill-amber-600" />
                  <span className="font-bold text-amber-900">Majeur : {accorderTexte(character.profils?.majeur?.nom, character.genreHumain || character.sexe) || 'Aucun'}</span>
                </div>
                <div className="text-sm text-amber-700 italic pl-6">
                  Trait : {character.profils?.majeur?.trait ? accorderTexte(character.profils.majeur.trait, character.genreHumain || character.sexe) : 'Non défini'}
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-blue-600" />
                  <span className="font-bold text-blue-900">Mineur : {accorderTexte(character.profils?.mineur?.nom, character.genreHumain || character.sexe) || 'Aucun'}</span>
                </div>
                <div className="text-sm text-blue-700 italic pl-6">
                  Trait : {character.profils?.mineur?.trait ? accorderTexte(character.profils.mineur.trait, character.genreHumain || character.sexe) : 'Non défini'}
                </div>
              </div>

              {(character.profils?.activite || character.profils?.activiteDomaine) && (
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-emerald-600" />
                    <span className="font-bold text-emerald-900">Activité Principale : {character.profils.activite || character.profils.activiteDomaine}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Compétences Futiles */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-emerald-900 border-b border-emerald-100 pb-2 flex items-center gap-2">
              <Sparkles size={18} className="text-emerald-600" /> Compétences Futiles
            </h3>
            {uniqueFutiles.length > 0 ? (
              <ul className="space-y-2">
                {uniqueFutiles.map(nomComp => {
                  const isChoiceRelated = nomComp.toLowerCase().includes('au choix');
                  const displayNom = isChoiceRelated ? (character.competencesFutiles?.precisions?.[nomComp] || nomComp) : nomComp;
                  const total = character.computedStats?.futilesTotal?.[nomComp] || 0;
                  
                  return (
                    <li key={nomComp} className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-200 text-sm shadow-sm">
                      <span className="font-semibold text-gray-700 truncate pr-2">{displayNom}</span>
                      <span className="text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">{total}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-gray-400 italic text-center">Aucune compétence futile.</p>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* === COLONNE DROITE (Magie, Atouts & Utiles) ===                */}
        {/* ============================================================== */}
        <div className="space-y-6">
          
          {/* Magie & Héritage */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-purple-900 border-b border-purple-100 pb-2 flex items-center gap-2">
              <Zap size={18} className="text-purple-600" /> Magie & Héritage ({accorderTexte(character.typeFee, character.genreHumain || character.sexe) || 'Fée'})
            </h3>
            <div className="space-y-4">
              {character.capaciteChoisie && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Capacité Optionnelle</h4>
                  <div className="bg-purple-50 text-purple-900 p-2 rounded-lg border border-purple-200 text-sm font-semibold">
                    ✨ {character.capaciteChoisie}
                  </div>
                </div>
              )}
              
              {character.pouvoirs && character.pouvoirs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pouvoirs maîtrisés</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.pouvoirs.map((p, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-800 border border-stone-300 px-3 py-1 rounded-full text-sm font-serif shadow-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {character.atouts && character.atouts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Atouts Féériques</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.atouts.map((a, idx) => {
                      const atoutObj = feeData?.atouts?.find(at => at.id === a || at.nom === a);
                      const displayName = atoutObj ? atoutObj.nom : a;
                      return (
                        <span key={idx} className="bg-amber-50 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-sm font-serif shadow-sm">
                          {displayName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Compétences Utiles */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-blue-900 border-b border-blue-100 pb-2 flex items-center gap-2">
              <User size={18} className="text-blue-600" /> Compétences Utiles
            </h3>
            {character.computedStats?.competencesTotal && Object.values(character.computedStats.competencesTotal).some(v => v > 0) ? (
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(character.computedStats.competencesTotal)
                  .filter(([nom, total]) => total > 0)
                  .sort(([nomA], [nomB]) => nomA.localeCompare(nomB))
                  .map(([nom, total]) => (
                    <div key={nom} className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-200 text-sm shadow-sm">
                      <span className="font-semibold text-gray-700 truncate pr-2" title={nom}>{nom}</span>
                      <span className="text-blue-800 font-bold bg-blue-100 px-2 py-0.5 rounded border border-blue-200">{total}</span>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic text-center">Aucune compétence utile acquise.</p>
            )}

            {/* SPÉCIALITÉS ACQUISES */}
            {((character.competencesLibres?.choixSpecialiteUser && Object.keys(character.competencesLibres.choixSpecialiteUser).length > 0) || (character.competencesLibres?.specialiteMetier?.nom)) && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Spécialités acquises</h4>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(character.competencesLibres?.choixSpecialiteUser || {}).map(([nomComp, specs]) =>
                    specs.map(spec => (
                      <span key={`${nomComp}-${spec}`} className="text-[11px] bg-blue-50 text-blue-800 border border-blue-200 px-2 py-1 rounded-full">
                        {nomComp} : <strong>{spec}</strong>
                      </span>
                    ))
                  )}
                  
                  {/* Pastille Métier */}
                  {character.competencesLibres?.specialiteMetier?.comp && character.competencesLibres?.specialiteMetier?.nom && (
                    <span className="text-[11px] bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Briefcase size={10} className="text-emerald-700" />
                      {character.competencesLibres.specialiteMetier.comp} : <strong>{character.competencesLibres.specialiteMetier.nom}</strong>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* ✨ LA PORTE DE L'EXPÉRIENCE (LE SCEAU ET LE CERBÈRE) ✨        */}
        {/* ============================================================== */}
        <div className="lg:col-span-2 bg-stone-900 text-stone-100 p-6 md:p-8 rounded-2xl shadow-xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 transform transition-all hover:scale-[1.01]">
          <div className="flex-1">
            <h3 className={`text-2xl font-serif font-bold mb-2 flex items-center gap-3 ${isScelle ? 'text-stone-300' : 'text-emerald-400'}`}>
              {isScelle ? <Lock size={28} /> : <Unlock size={28} />}
              {isScelle ? "L'Héritier est Scellé" : "Sceller l'Héritier (Passage en jeu)"}
            </h3>
            <p className={`text-sm leading-relaxed ${isScelle ? 'text-stone-400' : 'text-emerald-800'}`}>
              {isScelle
                ? "Ce personnage est désormais en jeu. Ses caractéristiques fondamentales sont figées. Vous pouvez accumuler de l'Expérience (XP) et l'utiliser pour faire évoluer votre Héritier selon les règles du Livre de Base."
                : "Avez-vous terminé la création de ce Faux-Semblant ? Avez-vous vérifié qu'il ne vous restait plus aucun point à répartir ? Sceller le personnage verrouillera la création et débloquera le système d'Expérience (XP)."
              }
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center gap-2 w-full md:w-auto">
            {isScelle ? (
              <>
                <div className="text-center bg-stone-800 p-4 rounded-xl border border-stone-700 shadow-inner w-full mb-2">
                  <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Cagnotte d'Expérience Disponible</span>
                  <span className="text-4xl font-serif font-bold text-amber-400 flex items-center justify-center gap-2">
                    <Sparkles size={24} className="text-amber-600" />
                    {(character.xp_total || 0) - (character.xp_depense || 0)}
                  </span>
                  <div className="mt-3 pt-2 border-t border-stone-700 text-[10px] text-stone-400 uppercase tracking-wider font-bold flex justify-center gap-4">
                    <span>Acquis : {character.xp_total || 0} XP</span>
                    <span>•</span>
                    <span>Dépensés : {character.xp_depense || 0} XP</span>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={handleSealClick}
                className="w-full md:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all transform active:scale-95"
              >
                <ShieldAlert size={24} /> Vérifier le Sceau
              </button>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* ✨ L'ALBUM PHOTO (ARCHIVES SPATIO-TEMPORELLES) ✨              */}
        {/* ============================================================== */}
        {isScelle && (
          <div className="lg:col-span-2 mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-stone-100 pb-4 gap-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-800 flex items-center gap-2">
                  <Camera size={24} className="text-amber-600" />
                  Mémoire Spatio-Temporelle
                </h3>
                <p className="text-sm text-stone-500 mt-1">L'évolution de votre personnage est figée. Immortalisez son état actuel pour définir un nouveau Plancher de Verre.</p>
              </div>
              <button
                onClick={() => setShowPhotoModal(true)}
                className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg font-bold flex items-center gap-2 transition-colors border border-amber-300 shadow-sm shrink-0"
              >
                <Plus size={18} /> Prendre une photo
              </button>
            </div>

            {loadingSnapshots ? (
              <p className="text-stone-400 italic text-center py-6 animate-pulse">Développement des pellicules en cours...</p>
            ) : snapshots.length === 0 ? (
              <div className="text-stone-500 text-center py-10 bg-stone-50 rounded-xl border-2 border-dashed border-stone-200 flex flex-col items-center gap-2">
                <Camera size={32} className="text-stone-300" />
                <span>Aucune archive n'a encore été créée pour cet Héritier.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {snapshots.map(snap => (
                  <div key={snap.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex justify-between items-center hover:border-amber-300 hover:shadow-md transition-all group">
                    <div>
                      <h4 className="font-bold text-stone-800 font-serif text-lg group-hover:text-amber-900 transition-colors">{snap.titre}</h4>
                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-1 font-bold uppercase tracking-wider">
                        <Clock size={12} />
                        {new Date(snap.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })} • {new Date(snap.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h')}
                      </p>
                    </div>
                    {/* Le bouton de clonage Temporel */}
                    <button
                      onClick={() => handleCloneSnapshot(snap.id, snap.titre)}
                      className="p-2 text-stone-400 hover:text-emerald-600 bg-white rounded-lg border border-stone-200 shadow-sm transition-colors"
                      title="Ressusciter cette archive en tant que nouveau personnage"
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* ✨ LA MODALE DE LA CAMÉRA TEMPPORELLE ✨                       */}
        {/* ============================================================== */}
        {showPhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white max-w-md w-full rounded-2xl shadow-2xl border-4 border-amber-900/20 overflow-hidden transform animate-fade-in-up">
              <div className="bg-stone-50 p-4 border-b border-stone-200 flex justify-between items-center">
                <h3 className="font-serif font-bold text-lg text-stone-800 flex items-center gap-2">
                  <Camera size={20} className="text-amber-600" /> Tirer le portrait
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-stone-600 mb-6 leading-relaxed bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <strong className="text-amber-800">Attention :</strong> L'état actuel de votre Héritier sera gravé dans le marbre. Ses statistiques actuelles deviendront votre nouveau plancher inaliénable (impossible de récupérer les XP investis jusque-là).
                </p>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Titre de l'archive (ex: Fin du scénario à Paris)</label>
                <input
                  type="text"
                  autoFocus
                  placeholder="Inscrivez un souvenir..."
                  value={photoTitle}
                  onChange={e => setPhotoTitle(e.target.value)}
                  className="w-full p-3 border-2 border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none font-bold text-stone-800 bg-white"
                />
                
                <div className="mt-8 flex gap-3">
                  <button onClick={() => setShowPhotoModal(false)} className="flex-1 py-3 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl font-bold transition-colors">
                    Annuler
                  </button>
                  <button onClick={handleTakeSnapshot} disabled={!photoTitle.trim()} className="flex-1 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-colors shadow-md disabled:opacity-50 flex justify-center items-center gap-2">
                    <Camera size={18} /> Mémoriser
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <ConfirmModal
        isOpen={showConfirmSeal}
        title="Apposer le Sceau Définitif"
        message="🛡️ PAR LE CONSEIL DES GARDIENS ! Le Cerbère a inspecté vos bagages : tous vos points sont parfaitement dépensés. Voulez-vous vraiment sceller ce personnage ? Ses attributs de base ne pourront plus être modifiés librement. Son évolution se fera désormais au travers des points d'Expérience (XP)."
        onConfirm={executeSeal}
        onCancel={() => setShowConfirmSeal(false)}
        confirmText="Oui, Sceller mon Héritier"
      />
    </div>
  );
}
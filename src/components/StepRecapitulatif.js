// src/components/StepRecapitulatif.js
import React from 'react';
import { BookOpen, Camera, Clock, Plus, Copy, User, Star, Award, Sparkles, Shield, Zap, CheckCircle, Briefcase, Lock, Unlock, ShieldAlert, MessageCircle, Crown, Info, X } from 'lucide-react';
import { CARAC_LIST, accorderTexte } from '../data/DictionnaireJeu';
import ConfirmModal from './ConfirmModal';
import { useCerbere } from '../hooks/useCerbere';

export default function StepRecapitulatif() {
  // ✨ LA MAGIE : On branche le cerveau !
  const {
    character, feeData, isScelle, getCarac, uniqueFutiles,
    showConfirmSeal, setShowConfirmSeal,
    snapshots, loadingSnapshots,
    showPhotoModal, setShowPhotoModal, photoTitle, setPhotoTitle,
    handleTakeSnapshot, handleCloneSnapshot, handleSealClick, executeSeal
  } = useCerbere();

  // ✨ Récupération universelle de TOUTES les spécialités du personnage !
  const allSpecialties = [];

  // 1. Manuelles (Achetées ou acquises librement)
  Object.entries(character.competencesLibres?.choixSpecialiteUser || {}).forEach(([nomComp, specs]) => {
    specs.forEach(spec => allSpecialties.push({ comp: nomComp, nom: spec, source: 'Acquise', color: 'bg-blue-50 text-blue-800 border-blue-200' }));
  });

  // 2. Métier
  const specMetier = character.competencesLibres?.specialiteMetier;
  if (specMetier && specMetier.comp && specMetier.nom) {
    allSpecialties.push({ comp: specMetier.comp, nom: specMetier.nom, source: 'Métier', color: 'bg-emerald-50 text-emerald-900 border-emerald-300', icon: <Briefcase size={12} className="text-emerald-700" /> });
  }

  // 3. Innées (Liées à l'espèce)
  if (feeData?.competencesPredilection) {
    feeData.competencesPredilection.forEach((pred, idx) => {
      const feeSpec = pred.specialite || (pred.isSpecialiteChoix ? character.competencesLibres?.choixSpecialite?.[idx] : null);
      if (feeSpec) {
        allSpecialties.push({ comp: pred.nom, nom: feeSpec, source: 'Innée', color: 'bg-amber-50 text-amber-900 border-amber-300', icon: <Star size={12} className="text-amber-600 fill-amber-600" /> });
      }
    });
  }

  // 4. Atouts Féériques
  (character.atouts || []).forEach(atoutId => {
    const atoutDef = feeData?.atouts?.find(a => a.id === atoutId || a.nom === atoutId);
    if (atoutDef?.effets_techniques) {
      try {
        const tech = typeof atoutDef.effets_techniques === 'string' ? JSON.parse(atoutDef.effets_techniques) : atoutDef.effets_techniques;
        if (tech.specialites) {
          tech.specialites.forEach(s => {
            allSpecialties.push({ comp: s.competence, nom: s.nom, source: 'Atout', color: 'bg-purple-50 text-purple-900 border-purple-300', icon: <Sparkles size={12} className="text-purple-600" /> });
          });
        }
      } catch(e) {}
    }
  });

  // Déduplication (Sécurité pour éviter les doublons accidentels)
  const uniqueSpecialties = [];
  const seenSpecs = new Set();
  allSpecialties.forEach(s => {
    const key = `${s.comp}-${s.nom}`;
    if (!seenSpecs.has(key)) {
      seenSpecs.add(key);
      uniqueSpecialties.push(s);
    }
  });

  const genreActuel = character.genreHumain || character.sexe;

  // ✨ LE CERVEAU MATHÉMATIQUE LOCAL (Calcul en Temps Réel)
  const statsCombat = character.computedStats?.competencesTotal || {};
  const getS = (comp) => statsCombat[comp] || 0;
  
  const agi = getCarac('agilite');
  const con = getCarac('constitution');
  const esp = getCarac('esprit');
  const masque = getCarac('masque');
  
  const bonusMasqueResist = Math.max(0, masque - 5);
  
  let modTaille = 0;
  if (character.taille === 'Petite') modTaille = 1;
  else if (character.taille === 'Grande') modTaille = -1;
  else if (character.taille === 'Très Grande') modTaille = -2;

  const esquiveMasquee = getS('Mouvement') + agi + 5;
  const esquiveDemasquee = esquiveMasquee + modTaille;
  const parade = getS('Mêlée') + agi + 5;
  const resPhys = getS('Ressort') + con + 5 + bonusMasqueResist;
  const resPsych = getS('Fortitude') + esp + 5 + bonusMasqueResist;

  // ✨ LE PARSEUR D'ADN (V2 Blindée) : Résiste aux parenthèses oubliées et aux fautes de frappe !
  const renderADNList = (dataArray) => {
    if (!dataArray || dataArray.length === 0) return <li><span className="italic opacity-80">Aucun</span></li>;
    
    const arr = Array.isArray(dataArray) ? dataArray : [dataArray];
    
    return arr.map((item, idx) => {
      if (typeof item === 'string') {
        // 1. On cherche le premier séparateur pertinent : '(' ou ':'
        const firstParen = item.indexOf('(');
        const firstColon = item.indexOf(':');
        
        let splitIndex = -1;
        if (firstParen !== -1 && firstColon !== -1) {
          splitIndex = Math.min(firstParen, firstColon);
        } else {
          splitIndex = Math.max(firstParen, firstColon);
        }

        // 2. Si on a trouvé un séparateur, on coupe proprement la phrase en deux !
        if (splitIndex !== -1) {
          const title = item.substring(0, splitIndex).trim();
          let desc = item.substring(splitIndex + 1).trim();
          
          // 3. Petit nettoyage : on retire la parenthèse de fin si elle a bien été tapée
          if (desc.endsWith(')')) {
            desc = desc.slice(0, -1);
          }
          
          // 4. On reconstruit l'affichage parfait
          const wrapper = item[splitIndex] === '(' ? `(${desc})` : `: ${desc}`;
          
          return (
            <li key={idx} className="pl-1">
              <strong className="font-black">{title}</strong> {wrapper}
            </li>
          );
        }
      }
      
      // S'il n'y a VRAIMENT ni parenthèse ni deux-points, on met en gras.
      return <li key={idx} className="pl-1"><strong className="font-black">{item}</strong></li>;
    });
  };
  
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {CARAC_LIST.map(carac => (
                <div key={carac.key} className="bg-stone-50 border border-stone-200 rounded-lg p-2 sm:p-3 text-center shadow-sm overflow-hidden flex flex-col items-center justify-center min-w-0">
                  {/* ✨ LE FIX : overflow-hidden et min-w-0 (sur la div parente) forcent la boîte à garder sa taille stricte */}
                  {/* ✨ LE FIX : truncate w-full coupe proprement le texte trop long (ex: CONSTITUTION) */}
                  <span 
                    className="block w-full text-[9px] sm:text-[10px] font-bold text-stone-500 uppercase tracking-wider truncate" 
                    title={carac.label}
                  >
                    {carac.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-serif font-black text-amber-900 mt-1">
                    {getCarac(carac.key)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✨ COMBAT ET RÉSISTANCES */}
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 shadow-sm mb-4">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">Aptitudes de Combat</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-2 rounded-lg border border-stone-200 text-center shadow-sm">
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Esquive</div>
                <div className="text-lg font-bold text-stone-800 mt-1">
                  {esquiveMasquee} <span className="text-xs text-stone-400" title="Masquée">🎭</span> / {esquiveDemasquee} <span className="text-xs text-red-400" title="Démasquée">🔥</span>
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg border border-stone-200 text-center shadow-sm">
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Parade</div>
                <div className="text-lg font-bold text-stone-800 mt-1">{parade}</div>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg border border-blue-200 text-center shadow-sm">
                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Rés. Physique</div>
                <div className="text-lg font-bold text-blue-900 mt-1">{resPhys}</div>
              </div>
              <div className="bg-purple-50 p-2 rounded-lg border border-purple-200 text-center shadow-sm">
                <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Rés. Psychique</div>
                <div className="text-lg font-bold text-purple-900 mt-1">{resPsych}</div>
              </div>
            </div>
          </div>

          {/* L'ENCART DES TRAITS (TOUS FUSIONNÉS) */}
          <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={16} className="text-stone-600" />
              <span className="font-bold text-stone-800">Traits de personnalité</span>
            </div>
            <div className="font-serif font-bold text-amber-900 pl-7 mb-4">
              {[...(character.traitsFeeriques || []), character.profils?.majeur?.trait, character.profils?.mineur?.trait]
                .filter(Boolean)
                .map(t => accorderTexte(t, genreActuel))
                .join(' • ')}
            </div>

            <div className="space-y-2">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-amber-600 fill-amber-600" />
                  <span className="font-bold text-amber-900">Majeur : {accorderTexte(character.profils?.majeur?.nom, genreActuel) || 'Aucun'}</span>
                </div>
                <div className="text-sm text-amber-700 italic pl-6">
                  Trait : {character.profils?.majeur?.trait ? accorderTexte(character.profils.majeur.trait, genreActuel) : 'Non défini'}
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-blue-600" />
                  <span className="font-bold text-blue-900">Mineur : {accorderTexte(character.profils?.mineur?.nom, genreActuel) || 'Aucun'}</span>
                </div>
                <div className="text-sm text-blue-700 italic pl-6">
                  Trait : {character.profils?.mineur?.trait ? accorderTexte(character.profils.mineur.trait, genreActuel) : 'Non défini'}
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

          {/* Érudition & Langues */}
          {character.profils?.langues && character.profils.langues.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-serif font-bold text-lg mb-4 text-sky-900 border-b border-sky-100 pb-2 flex items-center gap-2">
                <MessageCircle size={18} className="text-sky-600" /> Érudition & Langues
              </h3>
              <div className="flex flex-wrap gap-2">
                {character.profils.langues.map((lang, idx) => {
                  const isMaternelle = lang === character.profils.langueMaternelle;
                  return (
                    <span key={idx} className={`px-3 py-1 text-sm font-bold rounded-full border shadow-sm flex items-center gap-1.5 ${isMaternelle ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-stone-50 text-stone-700 border-stone-200'}`}>
                      {isMaternelle && <Crown size={14} className="text-amber-600" />}
                      {lang}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

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
                    <li key={nomComp} className="flex justify-between items-center text-sm p-2 bg-emerald-50 rounded border border-emerald-100">
                      <span className="font-bold text-emerald-900">{displayNom}</span>
                      <span className="bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded font-bold">{total}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-stone-400 italic text-center">Aucune compétence futile développée.</p>
            )}
          </div>

        </div>

        {/* ============================================================== */}
        {/* === COLONNE DROITE (Magie, Utiles & Spécialités) ===           */}
        {/* ============================================================== */}
        <div className="space-y-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-purple-900 border-b border-purple-100 pb-2 flex items-center gap-2">
              <Zap size={18} className="text-purple-600" /> Magie & Héritage ({accorderTexte(character.typeFee, genreActuel) || 'Fée'})
            </h3>

            {/* ✨ AVANTAGES ET DÉSAVANTAGES INNÉS (Style Étape 1 Vertical) */}
            <div className="mb-6 space-y-3">
              {/* AVANTAGES (Vert) */}
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 shadow-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Shield size={14} className="text-emerald-600" /> Avantages
                </h4>
                <ul className="text-sm text-emerald-900 leading-relaxed font-serif space-y-1.5 list-disc list-inside marker:text-emerald-500">
                  {renderADNList(feeData?.avantages || character.data?.avantages_innes)}
                </ul>
              </div>

              {/* DÉSAVANTAGES (Rouge) */}
              <div className="bg-red-50 p-3 rounded-xl border border-red-200 shadow-sm">
                <h4 className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldAlert size={14} className="text-red-600" /> Désavantages
                </h4>
                <ul className="text-sm text-red-900 leading-relaxed font-serif space-y-1.5 list-disc list-inside marker:text-red-500">
                  {renderADNList(feeData?.desavantages || character.data?.desavantages_innes)}
                </ul>
              </div>
            </div>

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
                    {character.atouts.map((a, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-800 border border-stone-300 px-3 py-1 rounded-full text-sm font-serif shadow-sm">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="font-serif font-bold text-lg mb-4 text-blue-900 border-b border-blue-100 pb-2 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-600" /> Compétences Utiles
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

            {/* SPÉCIALITÉS GLOBALES (Acquises, Innées, Atouts, Métier) */}
            {uniqueSpecialties.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Spécialités Globales</h4>
                <div className="space-y-2">
                  {uniqueSpecialties.map((s, i) => (
                    <div key={i} className={`flex justify-between items-center px-3 py-1.5 rounded-lg border text-sm font-bold shadow-sm ${s.color}`}>
                      <span className="flex items-center gap-1.5">{s.icon} {s.comp}</span>
                      <span className="opacity-90">{s.nom}</span>
                    </div>
                  ))}
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
              <button onClick={() => setShowPhotoModal(true)} className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm flex items-center gap-2 transition-colors">
                <Plus size={18} /> Tirer le portrait
              </button>
            </div>

            {loadingSnapshots ? (
               <div className="text-center py-10 text-stone-400 animate-pulse font-serif">Développement des photographies...</div>
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
      </div>

      {/* ============================================================== */}
      {/* ✨ LA MODALE DE LA CAMÉRA TEMPORELLE ✨                        */}
      {/* ============================================================== */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-amber-900/20 overflow-hidden transform animate-fade-in-up">
            <div className="bg-amber-900 text-amber-50 p-4 flex justify-between items-center border-b-4 border-amber-700">
              <h3 className="font-serif font-bold text-lg flex items-center gap-2">
                <Camera size={20} className="text-amber-300" /> Tirer le portrait
              </h3>
              <button onClick={() => setShowPhotoModal(false)} className="text-amber-300 hover:text-white transition-colors"><X size={20} /></button>
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

              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setShowPhotoModal(false)} className="px-4 py-2 font-bold text-stone-600 hover:bg-stone-200 rounded-lg transition-colors">Annuler</button>
                <button onClick={handleTakeSnapshot} disabled={!photoTitle.trim()} className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm disabled:opacity-50 transition-colors flex items-center gap-2">
                  <Camera size={18} /> Mémoriser
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale de CONFIRMATION */}
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
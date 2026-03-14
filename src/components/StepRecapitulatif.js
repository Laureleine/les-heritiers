// src/components/StepRecapitulatif.js
// 8.23.0 // 8.32.0
// 9.11.0
// 10.1.0 // 10.4.0 // 10.6.0
// 12.6.0
// 13.0.O // 13.7.0 // 13.9.0 // 13.10.0

import React, { useState, useEffect } from 'react';
import { Camera, Clock, Plus, Copy, User, Star, Award, Sparkles, Shield, Zap, CheckCircle, Briefcase, Lock, Unlock, ShieldAlert } from 'lucide-react';
import { CARAC_LIST, accorderTexte } from '../data/DictionnaireJeu';
import { useCharacter } from '../context/CharacterContext';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import ConfirmModal from './ConfirmModal';
import PocShop from './PocShop'; // L'import de notre Boutique !

export default function StepRecapitulatif() {
  const { character, gameData, dispatchCharacter } = useCharacter();

  // Mémoires pour les modales et le POC
  const [showConfirmSeal, setShowConfirmSeal] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const feeData = gameData?.fairyData ? gameData.fairyData[character.typeFee] : null;
  const uniqueFutiles = Object.keys(character.computedStats?.futilesTotal || {}).sort((a, b) => a.localeCompare(b));

  // L'état de scellage de l'Héritier
  const isScelle = character.statut === 'scelle' || character.statut === 'scellé';

  // ========================================================================
  // ✨ MÉMOIRES DE L'ALBUM PHOTO (SNAPSHOTS)
  // ========================================================================
  const [snapshots, setSnapshots] = useState([]);
  const [loadingSnapshots, setLoadingSnapshots] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [photoTitle, setPhotoTitle] = useState('');

  // Dès qu'on arrive sur la page, on charge les photos du personnage
  useEffect(() => {
    if (isScelle && character?.id && !character.id.toString().startsWith('temp_')) {
      fetchSnapshots();
    }
  }, [isScelle, character?.id]);

  const fetchSnapshots = async () => {
    setLoadingSnapshots(true);
    const { data, error } = await supabase
      .from('character_snapshots')
      .select('id, titre, created_at')
      .eq('character_id', character.id)
      .order('created_at', { ascending: false });
    
    if (!error && data) setSnapshots(data);
    setLoadingSnapshots(false);
  };

  // ========================================================================
  // 📸 DÉCLENCHER L'APPAREIL PHOTO (Et figer le Plancher de Verre)
  // ========================================================================
  const handleTakeSnapshot = async () => {
    if (!photoTitle.trim()) return;

    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      showInAppNotification("Erreur : Utilisateur non identifié.", "error");
      return;
    }

    try {
      // 1. On définit le nouveau "Plancher de Verre" avec les stats actuelles
      const nouveauPlancher = {
        caracteristiques: { ...character.caracteristiques },
        atouts: [...(character.atouts || [])]
        // On ajoutera les compétences utiles/futiles ici quand on fera leur mutation !
      };

      // 2. On prépare la copie intégrale du personnage pour l'archive
      const snapshotData = {
        ...character,
        stats_scellees: nouveauPlancher
      };

      // 3. On sauvegarde la photo dans Supabase
      const { error: snapError } = await supabase.from('character_snapshots').insert([{
        character_id: character.id,
        user_id: session.user.id,
        titre: photoTitle.trim(),
        character_data: snapshotData
      }]);

      if (snapError) throw snapError;

      // 4. On met à jour la VRAIE fiche de l'Héritier pour verrouiller la rétrogradation
      const { error: charError } = await supabase
        .from('characters')
        .update({ stats_scellees: nouveauPlancher })
        .eq('id', character.id);

      if (charError) throw charError;

      // 5. On actualise l'écran
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'stats_scellees', value: nouveauPlancher, gameData });
      showInAppNotification("📸 Clic clac ! L'archive est gravée et le Plancher de Verre est mis à jour.", "success");
      setShowPhotoModal(false);
      setPhotoTitle('');
      fetchSnapshots();

    } catch (err) {
      showInAppNotification("Erreur lors de la capture temporelle : " + err.message, "error");
    }
  };

  // ========================================================================
  // ⏳ RESSUSCITER UNE ARCHIVE TEMPORELLE (Clonage)
  // ========================================================================
  const handleCloneSnapshot = async (snapshotId, snapshotTitre) => {
    try {
      // 1. On va chercher le gros bloc JSON du personnage à l'époque de la photo
      const { data: snapData, error: snapError } = await supabase
        .from('character_snapshots')
        .select('character_data')
        .eq('id', snapshotId)
        .single();

      if (snapError) throw snapError;

      const archiveData = snapData.character_data;

      // 2. On prépare le clone (On supprime l'ancien ID pour que Supabase en génère un nouveau !)
      const clonedCharacter = {
        ...archiveData,
        nom: `${archiveData.nom} (Archive : ${snapshotTitre})`
      };
      
      delete clonedCharacter.id;
      delete clonedCharacter.created_at;
      delete clonedCharacter.updated_at;

      // 3. On l'insère comme un tout nouveau personnage dans le Nuage
      const { error: insertError } = await supabase
        .from('characters')
        .insert([clonedCharacter]);

      if (insertError) throw insertError;

      showInAppNotification("🕰️ Paradoxe temporel réussi ! L'archive a été ramenée à la vie. Retournez à l'écran d'accueil pour la jouer.", "success");

    } catch (err) {
      showInAppNotification("Erreur lors de la résurrection temporelle : " + err.message, "error");
    }
  };
  
  // ========================================================================
  // ✨ LA LOGIQUE DU CERBÈRE (Le Scanner)
  // ========================================================================
  const handleSealCharacter = async () => {
    if (!character.id || character.id.toString().startsWith('temp_')) {
      showInAppNotification("Veuillez d'abord sauvegarder votre Héritier dans le Nuage (bouton principal en haut) avant de le sceller.", "warning");
      return;
    }

    // 1. Caractéristiques (Budget de 10)
    let caracsRestants = 10;
    if (feeData && feeData.caracteristiques) {
      CARAC_LIST.forEach(carac => {
        const min = feeData.caracteristiques[carac.key]?.min || 1;
        const current = character.caracteristiques?.[carac.key] || min;
        caracsRestants -= (current - min);
      });
    }

    // 2. Compétences Futiles (Budget de 10)
    let futilesRestants = 10;
    Object.values(character.competencesFutiles?.rangs || {}).forEach(v => futilesRestants -= v);

    // 3. Compétences Utiles & Bonus d'Esprit (Budget de 15 + Esprit)
    const esprit = Number(character.caracteristiques?.esprit || 0);
    const bonusEspritMax = Math.max(0, esprit - 3);

    let investissementEligibleEsprit = 0;
    let investissementStandard = 0;
    const SKILLS_ESPRIT = ['Culture', 'Occultisme', 'Fortitude', 'Rhétorique', 'Habiletés', 'Médecine', 'Observation', 'Sciences'];

    Object.entries(character.competencesLibres?.rangs || {}).forEach(([nom, val]) => {
      if (SKILLS_ESPRIT.includes(nom)) investissementEligibleEsprit += val;
      else investissementStandard += val;
    });

    Object.entries(character.competencesLibres?.choixSpecialiteUser || {}).forEach(([nom, specs]) => {
      let count = specs.length;
      if (nom === 'Conduite' && count > 0) {
        const baseScore = character.computedStats?.competencesBase?.['Conduite'] || 0;
        const rangs = character.competencesLibres?.rangs?.['Conduite'] || 0;
        if ((baseScore + rangs) > 0) count -= 1;
      }
      if (SKILLS_ESPRIT.includes(nom)) investissementEligibleEsprit += count;
      else investissementStandard += count;
    });

    const pointsVioletsUtilises = Math.min(investissementEligibleEsprit, bonusEspritMax);
    const debordementEspritVersVert = investissementEligibleEsprit - pointsVioletsUtilises;
    const totalVertUtilise = investissementStandard + debordementEspritVersVert;

    const utilesRestants = 15 - totalVertUtilise;
    const violetsRestants = bonusEspritMax - pointsVioletsUtilises;

    // 4. Le Verdict de la Douane
    let missingMessages = [];
    if (caracsRestants > 0) missingMessages.push(`${caracsRestants} pt(s) de Caractéristique`);
    if (utilesRestants > 0) missingMessages.push(`${utilesRestants} pt(s) de Compétence Utile`);
    if (violetsRestants > 0) missingMessages.push(`${violetsRestants} pt(s) de Bonus d'Esprit`);
    if (futilesRestants > 0) missingMessages.push(`${futilesRestants} pt(s) de Compétence Futile`);

    if (missingMessages.length > 0) {
      showInAppNotification(`Sceau refusé ! Il vous reste à dépenser : ${missingMessages.join(' | ')}.`, "error");
      return;
    }

    setShowConfirmSeal(true);
  };

  // ========================================================================
  // ✨ L'EXÉCUTION DU SCELLAGE (Avec la création du Snapshot !)
  // ========================================================================
  const executeSeal = async () => {
    setShowConfirmSeal(false);

    try {
      // 📸 LE PLANCHER DE VERRE : On prend la photo de ce qui est inné !
      const snapshot = {
        atouts: character.atouts || [],
        pouvoirs: character.pouvoirs || [],
        capaciteChoisie: character.capaciteChoisie || null,
        caracteristiques: character.caracteristiques || {}
      };

      // On glisse cette photo dans l'objet "data" (qui est sauvegardé par Supabase)
      const newData = { ...(character.data || {}), stats_scellees: snapshot };

      const { error } = await supabase
        .from('characters')
        .update({ 
          statut: 'scelle', 
          xp_total: 0, 
          xp_depense: 0,
          data: newData 
        })
        .eq('id', character.id);

      if (error) throw error;

      // On met à jour l'interface locale
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'statut', value: 'scelle' });
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'xp_total', value: 0 });
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'xp_depense', value: 0 });
      dispatchCharacter({ type: 'UPDATE_FIELD', field: 'data', value: newData });

      showInAppNotification("L'Héritier est scellé ! Le Sceau Originel a été gravé avec succès.", "success");
    } catch (err) {
      showInAppNotification("Erreur lors du scellage : " + err.message, "error");
    }
  };

  // ========================================================================
  // ✨ FONCTION DE TEST (POC) : INJECTION D'XP VIRTUELLE
  // ========================================================================
  const handleInjectXP = () => {
    const newTotal = (character.xp_total || 0) + 100;
    
    // 📸 LA MÉMOIRE PHOTOGRAPHIQUE : On fige les stats d'origine si ce n'est pas déjà fait !
    const snapshot = character.stats_scellees || {
      caracteristiques: { ...character.caracteristiques }
      // Nous pourrons ajouter les compétences ici plus tard !
    };
    
    // On met à jour l'écran et le Snapshot, mais RIEN ne part dans le Nuage !
    dispatchCharacter({ 
      type: 'UPDATE_MULTIPLE', 
      payload: { 
        xp_total: newTotal,
        stats_scellees: snapshot 
      }, 
      gameData 
    });
    
    showInAppNotification("🪄 Mode Simulation : 100 XP injectés et Mémoire d'origine verrouillée !", "success");
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
            <div className="grid grid-cols-4 gap-3">
              {CARAC_LIST.map(c => (
                <div key={c.key} className="bg-stone-50 p-2 rounded-lg border border-stone-100 text-center">
                  <div className="text-[10px] uppercase font-bold text-gray-500 tracking-wider truncate" title={c.label}>
                    {c.label.substring(0, 3)}
                  </div>
                  <div className="text-xl font-bold text-amber-900 mt-1">
                    {character.caracteristiques?.[c.key] || 1}
                  </div>
                </div>
              ))}
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
                        <span key={idx} className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-sm font-serif shadow-sm flex items-center gap-1">
                          <Star size={12} className="fill-amber-600" /> {displayName}
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
        <div className="lg:col-span-2 mt-6 border-t-4 border-dashed border-stone-200 pt-8 pb-4">
          <div className={`p-8 rounded-2xl border-4 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl transition-all ${
            isScelle ? 'bg-stone-900 border-amber-600 text-amber-50' : 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200'
          }`}>
            
            <div className="flex-1">
              <h3 className={`font-serif text-2xl font-bold flex items-center gap-3 mb-2 ${isScelle ? 'text-amber-500' : 'text-emerald-900'}`}>
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

            <div className="shrink-0 flex flex-col items-center gap-2">
              {isScelle ? (
                <>
                  <div className="text-center bg-stone-800 p-4 rounded-xl border border-stone-700 shadow-inner w-full mb-2">
                    <span className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">Cagnotte d'XP</span>
                    <span className="text-4xl font-serif font-bold text-amber-400 flex items-center justify-center gap-2">
                      <Sparkles size={24} className="text-amber-600" />
                      {character.xp_total - (character.xp_depense || 0)}
                    </span>
                  </div>

                  {/* ✨ LES BOUTONS DE TEST (POC) ✨ */}
                  <div className="flex flex-col gap-2 w-full">
                    <button
                      onClick={() => setShowShop(!showShop)}
                      className="bg-amber-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Sparkles size={16} />
                      {showShop ? "Fermer le Proto B" : "Boutique d'XP (Proto B)"}
                    </button>
                    
                    <button
                      onClick={handleInjectXP}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm"
                      title="Ajoute 100 XP pour tester les prototypes"
                    >
                      +100 XP (God Mode)
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleSealCharacter}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-3"
                >
                  <ShieldAlert size={24} />
                  Apposer le Sceau Définitif
                </button>
              )}
            </div>
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
                  <Camera className="text-amber-600" />
                  Album Photo (Archives Temporelles)
                </h3>
                <p className="text-sm text-stone-500 mt-1">Immortalisez votre Faux-Semblant après une campagne. Cela verrouillera vos dépenses d'XP actuelles (Plancher de verre).</p>
              </div>
              <button
                onClick={() => setShowPhotoModal(true)}
                className="px-5 py-2.5 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-sm shrink-0"
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

        {/* ✨ LA MODALE DE L'APPAREIL PHOTO ✨ */}
        {showPhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-[#fdfbf7] max-w-md w-full rounded-2xl shadow-2xl border-2 border-stone-300 overflow-hidden transform animate-fade-in-up">
              <div className="p-4 bg-stone-100 border-b border-stone-200 flex justify-between items-center">
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
                <div className="flex justify-end gap-3 mt-6">
                  <button onClick={() => setShowPhotoModal(false)} className="px-4 py-2 text-stone-500 font-bold hover:bg-stone-200 rounded-xl transition-colors">Annuler</button>
                  <button onClick={handleTakeSnapshot} disabled={!photoTitle.trim()} className="px-6 py-2 bg-stone-800 text-white font-bold rounded-xl hover:bg-stone-900 transition-colors shadow-md disabled:opacity-50">Immortaliser</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ✨ LE RENDU DE LA BOUTIQUE EN DESSOUS ✨ */}
        {showShop && (
          <div className="lg:col-span-2 mt-8 animate-fade-in-up">
            <PocShop />
          </div>
        )}

      </div>

      <ConfirmModal
        isOpen={showConfirmSeal}
        title="Apposer le Sceau Définitif"
        message="🛡️ PAR LE CONSEIL DES GARDIENS ! Le Cerbère a inspecté vos bagages : tous vos points sont parfaitement dépensés. Voulez-vous vraiment sceller ce personnage ? Ses attributs de base ne pourront plus être modifiés librement. Son évolution se fera désormais au travers des points d'Expérience (XP)."
        onConfirm={executeSeal}
        onCancel={() => setShowConfirmSeal(false)}
        confirmText="Oui, sceller l'Héritier"
        cancelText="Finalement, non"
      />
    </div>
  );
}
// src/components/CharacterList.js

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Bug, Info, Sparkles, User, Users, Trash2, Edit, FileText, LogOut, Globe, Calendar, Book, Crown, Copy, Gift, Plus, X, BarChart2, Eye, EyeOff, BookOpen, Download } from 'lucide-react';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility, saveCharacterToSupabase, getFullCharacter } from '../utils/supabaseStorage';
import { exportToPDF } from '../utils/pdfGenerator';
import { exportCharacter } from '../utils/utils'; 
import { showInAppNotification, translateError } from '../utils/SystemeServices';
import ConfirmModal from './ConfirmModal';
import GrimoirePersonnel from './cercle/GrimoirePersonnel';

// ============================================================================
// ✨ COMPOSANT ENFANT PUR ET MÉMOÏSÉ (Évite les re-renders inutiles)
// ============================================================================
const CharacterCard = React.memo(({
  char,
  isMyCharacter,
  userProfile,
  profils,
  gameData,
  onSelect,
  onToggleVisibility,
  onDuplicate,
  onCreateGift,
  onDeleteClick,
  onOpenGrimoire,
  onAppropriate,
  onExportJson 
}) => {

  const getProfilInfo = (nomBrut, sexe) => {
    if (!profils || profils.length === 0 || !nomBrut) return { icon: '👤', text: nomBrut || '-' };
    const p = profils.find(pr => pr.nom === nomBrut || pr.nomFeminin === nomBrut || (typeof nomBrut === 'string' && pr.nom && nomBrut.includes(pr.nom)));
    if (!p) return { icon: '👤', text: nomBrut };
    const text = (sexe === 'Femme' && p.nomFeminin) ? p.nomFeminin : p.nom;
    return { icon: p.icon || '👤', text };
  };

  const majeur = getProfilInfo(char.profils?.majeur?.nom, char.sexe);
  const mineur = getProfilInfo(char.profils?.mineur?.nom, char.sexe);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      {/* 1. EN-TÊTE */}
      <div className="p-4 pb-1 border-b border-stone-100">
        <div className="flex justify-between items-start mb-1 gap-2">
          <h3 className="text-xl font-bold text-amber-900 font-serif truncate w-full" title={char.nom}>
            {char.nom || 'Sans nom'}
            {char.isPublic && (
              <sup className="ml-1 text-blue-500 inline-block" title="Visible par tous"><Globe size={12} /></sup>
            )}
          </h3>

          {/* ✨ LE PRIVILÈGE DE L'ARCHITECTE (Saisie Silencieuse) */}
          {userProfile?.profile?.role === 'super_admin' && !isMyCharacter && (
			<button onClick={() => onExportJson(char)} className="p-1.5 text-stone-400 hover:text-indigo-600 hover:bg-white rounded transition-all" title="Télécharger l'ADN complet (Format JSON)">
               <Download size={16}/>
            </button>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-amber-700 font-serif italic">
            {char.typeFee || 'Inconnu'} • {char.sexe || '?'}
          </div>
          {(char.statut === 'scelle' || char.statut === 'scellé') && (
            <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shadow-sm" title={`Acquis : ${char.xp_total || 0} XP | Dépensés : ${char.xp_depense || 0} XP`}>
              <Sparkles size={12} className="text-amber-500" />
              {(char.xp_total || 0) - (char.xp_depense || 0)} XP
            </div>
          )}
        </div>
      </div>

      {/* 2. PROFILS */}
      <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-2 pt-1">
        <div className="flex items-center gap-1.5" title="Profil Majeur">
          <span className="text-base">{majeur.icon}</span>
          <span className="font-bold text-amber-900">{majeur.text}</span>
        </div>
        <span className="text-gray-300">|</span>
        <div className="flex items-center gap-1.5" title="Profil Mineur">
          <span className="text-base">{mineur.icon}</span>
          <span className="text-blue-900">{mineur.text}</span>
        </div>
      </div>

      {/* 3. ACTIONS */}
      <div className="px-3 pb-3 flex items-center justify-between gap-1.5">
        {isMyCharacter ? (
          <>
            <button onClick={() => onSelect(char)} className="flex-1 py-1.5 px-2 bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-800 rounded border border-stone-200 text-xs font-bold transition-colors flex justify-center items-center gap-1.5 overflow-hidden">
              <Edit size={14} className="shrink-0" />
              <span className="truncate hidden sm:inline">Modifier</span>
            </button>

            <div className="flex items-center gap-0.5 shrink-0 bg-stone-50/50 p-0.5 rounded border border-stone-100">
              <button onClick={() => exportToPDF(char, gameData)} className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-white rounded transition-all" title="Exporter en PDF">
                <FileText size={15}/>
              </button>
			  {/* ✨ LE NOUVEAU BOUTON : Extracteur JSON */}
			  <button onClick={() => exportCharacter(char)} className="p-1.5 text-stone-400 hover:text-indigo-600 hover:bg-white rounded transition-all" title="Télécharger l'ADN (Format JSON)">
				<Download size={15}/>
			  </button>			  
              <button
                onClick={() => onToggleVisibility(char.id, char.isPublic, char.nom)}
                className={`p-1.5 rounded transition-all ${char.isPublic ? 'text-blue-500 hover:bg-white' : 'text-stone-400 hover:text-stone-700 hover:bg-white'}`}
                title={char.isPublic ? "Rendre privé" : "Rendre public"}
              >
                {char.isPublic ? <Globe size={15}/> : <EyeOff size={15}/>}
              </button>
              <button onClick={() => onOpenGrimoire(char.id)} className="p-1.5 text-stone-400 hover:text-amber-600 hover:bg-white rounded transition-colors" title="Ouvrir le Grimoire Personnel">
                <BookOpen size={15}/>
              </button>
              <button onClick={() => onDuplicate(char)} className="p-1.5 text-stone-400 hover:text-emerald-600 hover:bg-white rounded transition-colors" title="Dupliquer le personnage">
                <Copy size={15}/>
              </button>
              <button onClick={() => onCreateGift(char)} className="p-1.5 text-stone-400 hover:text-purple-600 hover:bg-white rounded transition-colors" title="Offrir ce personnage">
                <Gift size={15}/>
              </button>
              <button onClick={() => onDeleteClick(char.id)} className="p-1.5 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors" title="Détruire">
                <Trash2 size={15}/>
              </button>
            </div>
          </>
        ) : (
          <button onClick={() => onSelect(char, true)} className="w-full py-1.5 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2">
            <Eye size={16}/> Voir la fiche
          </button>
        )}
      </div>

      {/* 4. FOOTER */}
      <div className="bg-stone-50 px-4 py-2 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400 mt-auto">
        <div className="flex items-center gap-1.5">
          {!isMyCharacter && (
            <>
              <User size={10} className="text-blue-400"/>
              <span className="text-blue-900 font-bold">{char.ownerUsername || 'Inconnu'}</span>
            </>
          )}
          {isMyCharacter && <span className="italic">Mon personnage</span>}
        </div>
        <div className="flex items-center gap-1" title="Modifié le">
          <Calendar size={10}/>
          {new Date(char.updated_at || char.created_at).toLocaleDateString('fr-FR')}
        </div>
      </div>
    </div>
  );
});

// ============================================================================
// ✨ COMPOSANT PRINCIPAL
// ============================================================================
export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut, onOpenAccount, onOpenEncyclopedia, onOpenAdmin, onOpenCercles, onOpenBureau, profils = [], userProfile, gameData, session }) {
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  const [activeTab, setActiveTab] = useState('my');
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasGiftsWaiting, setHasGiftsWaiting] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [claimCode, setClaimCode] = useState('');
  const [giftCodeToShow, setGiftCodeToShow] = useState(null);
  const [activeGrimoireCharId, setActiveGrimoireCharId] = useState(null);
  const [publicInfoModal, setPublicInfoModal] = useState({ isOpen: false, charName: '' });
  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false, charId: null });

  // 🧠 FIX : Le "Latest Ref Pattern" pour isoler onSignOut du cycle de dépendances
  const onSignOutRef = useRef(onSignOut);

  useEffect(() => {
    onSignOutRef.current = onSignOut;
  }, [onSignOut]);

  const loadCharacters = useCallback(async (isMounted = true) => {
    if (!isMounted) return;
    setLoading(true);

    try {
      const myUserId = session?.user?.id;
      if (!myUserId || !isMounted) return;

      const isAdminUser = userProfile?.profile?.role === 'super_admin';
      if (isMounted) setIsAdmin(isAdminUser);

      const [mesPersos, persosPublics, persosAdmin] = await Promise.all([
        getUserCharacters(myUserId),
        getPublicCharacters(),
        isAdminUser ? getAllCharactersAdmin() : Promise.resolve([])
      ]);

      const { data: giftPing } = await supabase.rpc('check_pending_gifts');
      if (!isMounted) return;

      setHasGiftsWaiting(!!giftPing);
      setMyCharacters(mesPersos || []);
      setPublicCharacters((persosPublics || []).filter(c => c.userId !== myUserId));

      if (isAdminUser) {
        setAdminCharacters((persosAdmin || []).filter(c => c.userId !== myUserId && !c.isPublic));
      }
    } catch (error) {
      console.error('❌ loadCharacters error:', error);
      if (error.message?.includes('JWT') || error.status === 401) {
        if (onSignOutRef.current) onSignOutRef.current();
      }
    } finally {
      if (isMounted) setLoading(false);
    }
  }, [session?.user?.id, userProfile?.profile?.role]);

  useEffect(() => {
    let isMounted = true;
    loadCharacters(isMounted);
    return () => { isMounted = false; };
  }, [loadCharacters]);

  // 🧠 FIX : Le Cerveau qui charge le reste du personnage uniquement au clic !
  const handleSelectCharacter = useCallback(async (lightChar, readOnly = false) => {
    try {
      showInAppNotification("Ouverture des archives...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      fullChar.ownerUsername = lightChar.ownerUsername; // On préserve le nom du joueur
      onSelectCharacter(fullChar, readOnly);
    } catch (error) {
      showInAppNotification("Le parchemin est illisible : " + error.message, "error");
    }
  }, [onSelectCharacter]);

  // --- ACTIONS MÉMOÏSÉES ---
  const handleDeleteClick = useCallback((id) => {
    setConfirmDelete({ isOpen: true, charId: id });
  }, []);

  const executeDelete = useCallback(async () => {
    if (!confirmDelete.charId) return;
    try {
      await deleteCharacterFromSupabase(confirmDelete.charId);
      await loadCharacters();
      showInAppNotification("Le personnage a été effacé de notre réalité.", "success");
    } catch (error) {
      showInAppNotification(translateError(error), "error");
    } finally {
      setConfirmDelete({ isOpen: false, charId: null });
    }
  }, [confirmDelete.charId, loadCharacters]);

  const handleDuplicate = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Copie du parchemin en cours...", "info");
      const fullChar = await getFullCharacter(lightChar.id);
      const newChar = JSON.parse(JSON.stringify(fullChar));
      newChar.id = null;
      newChar.nom = `${newChar.nom} (Copie)`;
      newChar.statut = 'brouillon';
      await saveCharacterToSupabase(newChar);
      await loadCharacters();
      showInAppNotification("L'Héritier a été dupliqué avec succès !", "success");
    } catch (error) {
      showInAppNotification(translateError(error), "error");
    }
  }, [loadCharacters]);

  const handleCreateGiftCode = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Préparation de l'offrande...", "info");
      const randomSegment = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID().split('-').at(0).toUpperCase()
        : Math.random().toString(36).substring(2, 6).toUpperCase();
      const code = `DON-${randomSegment}`;

      const { error } = await supabase.from('characters').update({ transfer_code: code }).eq('id', lightChar.id);
      if (error) throw error;

      setGiftCodeToShow({ nom: lightChar.nom, code });
      await loadCharacters();
    } catch (error) {
      showInAppNotification("Erreur lors de la création du don : " + error.message, "error");
    }
  }, [loadCharacters]);

  const handleClaimGift = async () => {
    if (!claimCode.trim()) {
      showInAppNotification("Veuillez saisir un code !", "warning");
      return;
    }
    try {
      const { error } = await supabase.rpc('claim_character_by_code', { p_code: claimCode.trim().toUpperCase() });
      if (error) throw error;
      showInAppNotification("Un nouvel Héritier a rejoint vos rangs !", "success");
      setShowClaimModal(false);
      setClaimCode('');
      await loadCharacters();
    } catch (error) {
      showInAppNotification(error.message, "error");
    }
  };

  const handleToggleVisibility = useCallback(async (id, currentlyPublic, charName) => {
    try {
      const newPublicStatus = !currentlyPublic;
      await toggleCharacterVisibility(id, newPublicStatus);
      await loadCharacters();

      if (newPublicStatus) {
        setPublicInfoModal({ isOpen: true, charName: charName || 'Votre personnage' });
      } else {
        showInAppNotification("L'Héritier est de nouveau masqué au public.", "info");
      }
    } catch (error) {
      showInAppNotification("Erreur : " + error.message, "error");
    }
  }, [loadCharacters]);

  // 🧠 LE PRIVILÈGE DE L'ARCHITECTE : L'Appropriation (Copie Silencieuse)
  const handleAppropriate = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Saisie de l'Héritier en cours...", "info");

      // 1. On télécharge la fiche originale complète
      const fullChar = await getFullCharacter(lightChar.id);

      // 2. On clone l'ADN et on amnésie la fiche
      const newChar = JSON.parse(JSON.stringify(fullChar));
      newChar.id = null; // C'est ça qui force Supabase à créer une nouvelle ligne
      newChar.nom = `${newChar.nom} (Saisie)`;
      newChar.statut = 'brouillon';
      newChar.isPublic = false; // On garde la copie privée par sécurité

      // 3. On sauvegarde (Supabase va automatiquement apposer ton user_id dessus !)
      await saveCharacterToSupabase(newChar);
      await loadCharacters();

      showInAppNotification("Appropriation réussie ! L'Héritier a rejoint votre Grimoire.", "success");
    } catch (error) {
      showInAppNotification(translateError(error), "error");
    }
  }, [loadCharacters]);

  // 🧠 LE SÉQUENCEUR D'ADN ASYNCHRONE
  const handleExportJson = useCallback(async (lightChar) => {
    try {
      showInAppNotification("Séquençage de l'ADN en cours...", "info");
      // On télécharge la fiche VRAIMENT complète depuis le Nuage
      const fullChar = await getFullCharacter(lightChar.id);
      // On envoie la fiche complète à notre utilitaire de téléchargement
      exportCharacter(fullChar);
    } catch (error) {
      showInAppNotification("Impossible d'extraire l'ADN : " + translateError(error), "error");
    }
  }, []);
  
  return (
    <div className="animate-fade-in w-full">
      <div className="flex flex-col gap-6 mb-8 mt-2">
        <div className="relative z-50 flex flex-nowrap items-center gap-2 overflow-x-auto hide-scrollbar w-full pb-2">
          <button onClick={onNewCharacter} className="flex-shrink-0 mr-auto flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold shadow-sm">
            <Plus size={18} /> <span className="hidden sm:inline">Nouveau</span>
          </button>
          <button onClick={onOpenEncyclopedia} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 bg-amber-100 text-amber-900 border-2 border-amber-200 rounded-lg hover:bg-amber-200 hover:border-amber-300 transition-all font-serif font-bold text-sm shadow-sm" title="Accéder au Grimoire">
            <Book size={16} /> <span className="hidden sm:inline">Encyclopédie</span>
          </button>
          <button onClick={onOpenCercles} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 bg-purple-100 text-purple-900 border-2 border-purple-200 rounded-lg hover:bg-purple-200 hover:border-purple-300 transition-all font-serif font-bold text-sm shadow-sm" title="Gérer mes tables virtuelles">
            <Users size={16} /> <span className="hidden sm:inline">Cercles</span>
          </button>
          <button onClick={onOpenAdmin} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 bg-indigo-100 text-indigo-800 border-2 border-indigo-200 rounded-lg hover:bg-indigo-200 transition-all font-serif font-bold text-sm shadow-sm" title="Voir la communauté et les statistiques du jeu">
            <BarChart2 size={16} /> <span className="hidden sm:inline">Communauté</span>
          </button>
          <button onClick={onOpenBureau} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 bg-rose-100 text-rose-800 border-2 border-rose-200 rounded-lg hover:bg-rose-200 transition-all font-serif font-bold text-sm shadow-sm" title="Signaler une faille dans la matrice">
            <Bug size={16} /> <span className="hidden sm:inline">Anomalies</span>
          </button>
          <button onClick={onOpenAccount} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-lg hover:bg-gray-200 transition-all font-serif font-bold text-sm shadow-sm">
            <User size={16} /> <span className="hidden sm:inline">Compte</span>
          </button>
          <button onClick={onSignOut} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 bg-red-100 text-red-700 border-2 border-red-200 rounded-lg hover:bg-red-200 transition-all font-serif font-bold text-sm shadow-sm" title="Se déconnecter">
            <LogOut size={16} /> <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>

        <div className="flex gap-8 border-b border-gray-200 overflow-x-auto hide-scrollbar">
          <button onClick={() => setActiveTab('my')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 ${ activeTab === 'my' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700 hover:border-gray-300' }`}>
            Mes personnages
            <span className={`py-0.5 px-2 rounded-full text-xs ${activeTab === 'my' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'}`}>
              {myCharacters.length}
            </span>
          </button>
          <button onClick={() => setActiveTab('public')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 ${ activeTab === 'public' ? 'text-blue-900 border-blue-600' : 'text-gray-400 border-transparent hover:text-gray-700 hover:border-gray-300' }`}>
            <Globe size={16} /> Publics
            <span className={`py-0.5 px-2 rounded-full text-xs ${activeTab === 'public' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
              {publicCharacters.length}
            </span>
          </button>
          {isAdmin && (
            <button onClick={() => setActiveTab('admin')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-colors border-b-2 ${ activeTab === 'admin' ? 'text-red-900 border-red-600' : 'text-gray-400 border-transparent hover:text-gray-700 hover:border-gray-300' }`}>
              <Crown size={16} /> Admin
              <span className={`py-0.5 px-2 rounded-full text-xs ${activeTab === 'admin' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}>
                {adminCharacters.length}
              </span>
            </button>
          )}
          <button
            onClick={() => setShowClaimModal(true)}
            className="ml-auto pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 hover:text-emerald-700 transition-colors"
            title="Saisir le code d'un Parchemin Scellé"
          >
            <Gift size={16} className={hasGiftsWaiting ? "animate-pulse drop-shadow-md" : ""} /> Recevoir
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden animate-pulse flex flex-col h-[200px]">
              <div className="p-4 border-b border-stone-100">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-6 w-1/2 bg-stone-200 rounded-md"></div>
                  <div className="h-5 w-16 bg-stone-200 rounded-full"></div>
                </div>
                <div className="h-4 w-1/3 bg-stone-100 rounded-md"></div>
              </div>
              <div className="flex-1 p-4 flex items-center justify-center gap-3">
                <div className="h-5 w-24 bg-stone-200 rounded-md"></div>
                <div className="h-4 w-4 bg-stone-100 rounded-full"></div>
                <div className="h-5 w-24 bg-stone-200 rounded-md"></div>
              </div>
              <div className="bg-stone-50 px-4 py-3 border-t border-stone-100 flex justify-between items-center mt-auto">
                <div className="h-3 w-20 bg-stone-200 rounded-md"></div>
                <div className="h-3 w-16 bg-stone-200 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-4">
          {activeTab === 'my' && (
            myCharacters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myCharacters.map((char) => (
                  <div key={char.id} className="h-full">
                    <CharacterCard
                      char={char}
                      isMyCharacter={true}
                      userProfile={userProfile}
                      profils={profils}
                      gameData={gameData}
                      onSelect={handleSelectCharacter}
                      onToggleVisibility={handleToggleVisibility}
                      onDuplicate={handleDuplicate}
                      onCreateGift={handleCreateGiftCode}
                      onDeleteClick={handleDeleteClick}
                      onOpenGrimoire={setActiveGrimoireCharId}
                      onAppropriate={handleAppropriate}
					  onExportJson={handleExportJson}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
                <p className="text-gray-500 font-serif mb-4">Vous n'avez pas encore créé de personnage.</p>
                <button onClick={onNewCharacter} className="text-amber-600 font-bold hover:underline">Créer mon premier Héritier</button>
              </div>
            )
          )}

          {activeTab === 'public' && (
            publicCharacters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publicCharacters.map((char) => (
                  <div key={char.id} className="h-full">
                    <CharacterCard
                      char={char}
                      isMyCharacter={char.userId === session?.user?.id}
                      userProfile={userProfile}
                      profils={profils}
                      gameData={gameData}
                      onSelect={onSelectCharacter}
                      onToggleVisibility={handleToggleVisibility}
                      onDuplicate={handleDuplicate}
                      onCreateGift={handleCreateGiftCode}
                      onDeleteClick={handleDeleteClick}
                      onOpenGrimoire={setActiveGrimoireCharId}
                      onAppropriate={handleAppropriate} 
					  onExportJson={handleExportJson}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500 font-serif italic">Aucun personnage public disponible pour le moment.</div>
            )
          )}

          {activeTab === 'admin' && isAdmin && (
            adminCharacters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminCharacters.map((char) => (
                  <div key={char.id} className="h-full">
                    <CharacterCard
                      char={char}
                      isMyCharacter={char.userId === session?.user?.id}
                      userProfile={userProfile}
                      profils={profils}
                      gameData={gameData}
                      onSelect={onSelectCharacter}
                      onToggleVisibility={handleToggleVisibility}
                      onDuplicate={handleDuplicate}
                      onCreateGift={handleCreateGiftCode}
                      onDeleteClick={handleDeleteClick}
                      onOpenGrimoire={setActiveGrimoireCharId}
                      onAppropriate={handleAppropriate}
					  onExportJson={handleExportJson}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-500 font-serif italic">Aucun personnage masqué à afficher.</div>
            )
          )}
        </div>
      )}

      {/* MODALES D'INTERACTION */}
      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        title="Détruire le Sceau"
        message="Voulez-vous vraiment effacer ce personnage des Archives ? Cette action est irréversible."
        onConfirm={executeDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, charId: null })}
        confirmText="Oui, l'effacer"
      />

      {showClaimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-emerald-900/20 overflow-hidden transform animate-fade-in-up">
            <div className="p-4 bg-emerald-50 border-b border-emerald-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-emerald-900 flex items-center gap-2"><Gift size={20}/> Adopter un Héritier</h3>
              <button onClick={() => setShowClaimModal(false)} className="text-emerald-400 hover:text-emerald-700"><X size={20}/></button>
            </div>
            <div className="p-6">
              <p className="text-sm text-stone-600 mb-4 text-center">Saisissez le Parchemin Scellé fourni par le donneur pour intégrer ce personnage à votre compte.</p>
              <input
                type="text"
                placeholder="Ex: DON-A7X9"
                value={claimCode}
                onChange={e => setClaimCode(e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none uppercase font-mono font-bold text-center text-xl tracking-widest mb-6 bg-white shadow-inner"
                autoFocus
              />
              <button onClick={handleClaimGift} className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md hover:bg-emerald-700 transition-all flex justify-center items-center gap-2">
                Briser le Sceau
              </button>
            </div>
          </div>
        </div>
      )}

      {giftCodeToShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-purple-900/20 overflow-hidden transform animate-fade-in-up">
            <div className="p-4 bg-purple-50 border-b border-purple-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-purple-900 flex items-center gap-2"><Gift size={20}/> Parchemin Scellé</h3>
              <button onClick={() => setGiftCodeToShow(null)} className="text-purple-400 hover:text-purple-700"><X size={20}/></button>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-stone-600 mb-4">Le personnage <strong>{giftCodeToShow.nom}</strong> est prêt à être transféré. Transmettez ce code unique au destinataire :</p>
              <div className="bg-white p-4 rounded-xl border-2 border-dashed border-purple-300 mb-6 shadow-sm">
                <span className="font-mono font-black text-3xl text-purple-800 tracking-widest">{giftCodeToShow.code}</span>
              </div>
              <button onClick={() => setGiftCodeToShow(null)} className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-all">
                J'ai noté le code
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✨ MODALE D'INFORMATION PUBLIQUE */}
      {publicInfoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-blue-900/20 overflow-hidden transform animate-fade-in-up">
            <div className="p-4 bg-blue-50 border-b border-blue-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-lg text-blue-900 flex items-center gap-2">
                <Globe size={20} className="text-blue-600"/> Révélation Publique
              </h3>
              <button onClick={() => setPublicInfoModal({ isOpen: false, charName: '' })} className="text-blue-400 hover:text-blue-700 transition-colors">
                <X size={20}/>
              </button>
            </div>
            <div className="p-6 text-center">
              <p className="text-stone-700 mb-5 leading-relaxed text-sm">
                L'Héritier <strong className="text-amber-900 font-serif text-lg">{publicInfoModal.charName}</strong> est désormais visible par l'ensemble de la communauté !
              </p>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-6 text-sm text-amber-800 shadow-inner text-left flex gap-3 items-start">
                <Info size={24} className="shrink-0 mt-0.5 text-amber-600" />
                <p>
                  Pour garder votre Grimoire bien rangé, ce personnage restera classé dans votre onglet <strong>"Mes personnages"</strong>. Il n'apparaîtra pas en double dans votre vue de l'onglet "Publics".
                </p>
              </div>
              <button onClick={() => setPublicInfoModal({ isOpen: false, charName: '' })} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-transform active:scale-95">
                J'ai compris !
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✨ LA MODALE IMMERSIVE DU GRIMOIRE PERSONNEL (SOLO) ✨ */}
      {activeGrimoireCharId && (
        <div className="fixed inset-0 z-50 flex flex-col bg-stone-900/90 backdrop-blur-sm p-4 md:p-8 animate-fade-in">
          {/* Bouton de fermeture de la surcouche */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setActiveGrimoireCharId(null)}
              className="text-stone-300 hover:text-white flex items-center gap-2 font-bold transition-colors bg-stone-800/50 px-4 py-2 rounded-xl"
            >
              <X size={20} /> Refermer le Grimoire
            </button>
          </div>
          {/* Le conteneur sécurisé */}
          <div className="flex-1 overflow-hidden max-w-5xl mx-auto w-full relative">
            <GrimoirePersonnel
              characterId={activeGrimoireCharId}
              cercleId={null} /* 🛡️ On force le mode Solo pour le RLS */
              playerId={session?.user?.id}
            />
          </div>
        </div>
      )}
    </div>
  );
}
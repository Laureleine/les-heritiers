// src/components/CharacterList.js
// Version: 3.9.9
// Design : Harmonisation complète avec "Ok.png" (Titre centré, boutons styled, cartes épurées)

import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Shield, Globe, Calendar, Book } from 'lucide-react';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { importCharacter } from '../utils/characterStorage'; // Assurez-vous d'avoir ce fichier ou retirez l'import si non utilisé
import { exportToPDF } from '../utils/utils';
import { APP_VERSION, BUILD_DATE } from '../version';
import { getCurrentUserFast } from '../utils/authHelpers';

const ADMIN_EMAIL = 'amaranthe@free.fr';

export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut, onOpenAccount, onOpenEncyclopedia, onOpenAdminUsers, profils = []}) { 
  
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my'); 
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // --- NOUVEAU HELPER (Version Propre) ---
  const getProfilInfo = (nomBrut, sexe) => {
    // Sécurité de base
    if (!profils || profils.length === 0 || !nomBrut) return { icon: '👤', text: nomBrut || '-' };

    // 1. Trouver le profil dans la liste de référence
    const p = profils.find(pr => 
      pr.nom === nomBrut || 
      pr.nomFeminin === nomBrut || 
      (typeof nomBrut === 'string' && pr.nom && nomBrut.includes(pr.nom))
    );

    // Si non trouvé, renvoi brut
    if (!p) return { icon: '👤', text: nomBrut };

    // 2. Appliquer l'accord féminin si nécessaire
    const text = (sexe === 'Femme' && p.nomFeminin) ? p.nomFeminin : p.nom;

    return { icon: p.icon || '👤', text };
  };
  
 // Lancement initial
	useEffect(() => {
	  let isMounted = true;

	  const run = async () => {
		await loadCharacters(isMounted);
	  };

	  run();

	  return () => {
		isMounted = false;
	  };
	}, []);

const loadCharacters = async (isMounted = true) => {
  console.log("🚀 START: loadCharacters démarre...");
  if (!isMounted) return;

  setLoading(true);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s max
  
  try {
	console.log("👤 1. Récupération utilisateur (FAST)...");
	const user = await getCurrentUserFast();
	if (!user) {
	  console.warn("⚠️ Pas d'utilisateur connecté !");
	  throw new Error("No user");
	}

    if (!isMounted) return;
    console.log("✅ Utilisateur trouvé :", user.email);
    setCurrentUser(user);

    console.log("🔎 2. Vérification du profil (pseudo)...");
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('username')
      .eq('id', user.id)
      .single();

    if (profileError && profileError.code !== 'PGRST116') {
      console.error("❌ Erreur lecture profil:", profileError);
    }
    console.log("📋 Profil reçu :", profile);

    if (!profileError && !profile?.username) {
      console.warn("⚠️ Pas de pseudo défini !");
      if (window.confirm("Votre compte nécessite un nom d'utilisateur. Le définir maintenant ?")) {
        console.log("🔄 Redirection vers AccountSettings...");
        if (onOpenAccount) onOpenAccount();
        if (isMounted) setLoading(false);
        return;
      }
    }

    console.log("📚 3. Chargement des personnages...");
    const adminStatus = user.email === 'amaranthe@free.fr';
    console.log("👑 Admin ?", adminStatus);
    if (isMounted) setIsAdmin(adminStatus);

    console.log("⏳ En attente des données...");
    const promises = [getUserCharacters(), getPublicCharacters()];
    if (adminStatus) promises.push(getAllCharactersAdmin());

    const [mesPersos, persosPublics, persosAdmin] = await Promise.all(promises);
    const myUserId = user.id;

    if (!isMounted) return;

    setMyCharacters(mesPersos || []);
    setPublicCharacters((persosPublics || []).filter(c => c.userId !== myUserId));

console.log("🔍 DEBUG - Mes persos:", mesPersos?.length || 0, "Publics:", persosPublics?.length || 0); // ← AJOUTE ÇA

    if (adminStatus) {
      setAdminCharacters((persosAdmin || []).filter(c => c.userId !== myUserId && !c.isPublic));
    } else {
      setAdminCharacters([]);
    }

    console.log("🎉 END: Chargement terminé avec succès !");
  } catch (error) {
    if (error.name !== 'AbortError' && !error.message?.includes('aborted')) {
      console.error('🔥 CRASH ou ERREUR dans loadCharacters:', error);
      if (error.message?.includes('JWT') || error.message?.includes('session') || error.status === 401) {
        console.warn("🔒 Session expirée détectée. Déconnexion forcée.");
        if (onSignOut) onSignOut();
      } else {
        alert("Erreur technique : " + error.message);
      }
    }
  } finally {
    clearTimeout(safetyTimer);
    if (!isMounted) return;
    console.log("🏁 FINALLY : Suppression de l'écran de chargement.");
    setLoading(false);
  }
};

  
  const handleDelete = async (id) => {
    try {
      await deleteCharacterFromSupabase(id);
      await loadCharacters();
      setShowDeleteConfirm(null);
    } catch (error) {
      alert('Erreur : ' + error.message);
    }
  };

  const handleToggleVisibility = async (id, currentlyPublic) => {
    try {
      await toggleCharacterVisibility(id, !currentlyPublic);
      await loadCharacters();
    } catch (error) {
      alert('Erreur : ' + error.message);
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files;
    if (!file) return;
    try {
      const character = await importCharacter(file);
      onSelectCharacter(character);
    } catch (error) {
      alert('Erreur import : ' + error.message);
    }
  };

  // Rendu d'une carte personnage
    const renderCharacterCard = (char, isMyCharacter = true) => (
        <div key={char.id} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">

            {/* 1. EN-TÊTE : Nom et Type (Style plus classique) */}
            <div className="p-4 pb-2 border-b border-stone-100">
                <div className="flex justify-between items-start mb-1">
					<h3 className="text-xl font-bold text-amber-900 font-serif truncate w-full" title={char.nom}>
					  {char.nom || 'Sans nom'}
					  {/* Le Globe en exposant sur la même ligne */}
					  {char.isPublic && (
						<sup className="ml-1 text-blue-500 inline-block" title="Visible par tous">
						   <Globe size={12} />
						</sup>
					  )}
					</h3>
				</div>
				<div className="text-sm text-amber-700 font-serif italic mb-2">
					{char.typeFee || 'Inconnu'} • {char.sexe || '?'}
				</div>
            </div>

      {/* 2. PROFILS (Correction : Utilisation de getProfilInfo) */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4">
        
        {/* On calcule les infos avant l'affichage */}
        {(() => {
            const majeur = getProfilInfo(char.profils?.majeur?.nom, char.sexe);
            const mineur = getProfilInfo(char.profils?.mineur?.nom, char.sexe);

            return (
              <>
                {/* Profil Majeur */}
                <div className="flex items-center gap-1.5" title="Profil Majeur">
                   <span className="text-lg">{majeur.icon}</span>
                   <span className="font-bold text-amber-900">{majeur.text}</span>
                </div>

                <span className="text-gray-300">|</span>

                {/* Profil Mineur */}
                <div className="flex items-center gap-1.5" title="Profil Mineur">
                   <span className="text-lg">{mineur.icon}</span>
                   <span className="text-blue-900">{mineur.text}</span>
                </div>
              </>
            );
        })()}

      </div>

            {/* 3. ACTIONS (Boutons plus discrets) */}
            <div className="px-4 pb-3 flex gap-2">
                {isMyCharacter ? (
                    <>
                        <button 
                            onClick={() => onSelectCharacter(char)}
                            className="flex-1 py-1.5 bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-800 rounded border border-stone-200 text-sm font-bold transition-colors flex justify-center items-center gap-2"
                        >
                            <Edit size={14}/> Modifier
                        </button>
                        <button 
                            onClick={() => exportToPDF(char)}
                            className="p-1.5 text-stone-400 hover:text-stone-600 hover:bg-stone-50 rounded border border-transparent transition-all"
                            title="PDF"
                        >
                            <FileText size={16}/>
                        </button>
                        <button 
                            onClick={() => handleToggleVisibility(char.id, char.isPublic)}
                            className={`p-1.5 rounded transition-all ${
                                char.isPublic 
                                ? 'text-blue-500 hover:bg-blue-50' 
                                : 'text-stone-300 hover:text-stone-500 hover:bg-stone-50'
                            }`}
                            title={char.isPublic ? "Rendre privé" : "Rendre public"}
                        >
                            {char.isPublic ? <Globe size={16}/> : <EyeOff size={16}/>}
                        </button>
                        {showDeleteConfirm === char.id ? (
                            <button onClick={() => handleDelete(char.id)} className="p-1.5 bg-red-50 text-red-600 rounded border border-red-100 animate-pulse"><Trash2 size={16}/></button>
                        ) : (
                            <button onClick={() => setShowDeleteConfirm(char.id)} className="p-1.5 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded"><Trash2 size={16}/></button>
                        )}
                    </>
                ) : (
                    <button 
                        onClick={() => onSelectCharacter(char, true)}
                        className="w-full py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2"
                    >
                        <Eye size={16}/> Voir la fiche
                    </button>
                )}
            </div>

            {/* 4. FOOTER (Option A intégrée discrètement) */}
            <div className="bg-stone-50 px-4 py-2 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400">
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
	
  return (
    <div className="min-h-screen bg-stone-50 pb-20 font-sans text-gray-800">
      
      {/* 1. TITRE (Style Ok.png) */}
      <div className="pt-8 pb-6 text-center">
        <h1 className="text-5xl font-serif text-amber-900 mb-1">Les Héritiers</h1>
        <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest font-bold">
            Version {APP_VERSION} • {BUILD_DATE}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">

        {/* 2. BARRE D'ACTIONS & ONGLETS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            
            {/* Groupe Gauche : Onglets de navigation */}
            <div className="flex p-1 bg-gray-200/50 rounded-xl">
                <button 
                    onClick={() => setActiveTab('my')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-serif font-bold transition-all ${
                        activeTab === 'my' ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    <User size={18}/> <span>Mes personnages</span>
                    <span className="bg-amber-100 text-amber-800 text-xs py-0.5 px-2 rounded-full ml-2">{myCharacters.length}</span>
                </button>

                <button 
                    onClick={() => setActiveTab('public')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-serif font-bold transition-all ${
                        activeTab === 'public' ? 'bg-white text-blue-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    <Globe size={18}/> <span className="hidden sm:inline">Publics</span>
                    <span className="bg-blue-100 text-blue-800 text-xs py-0.5 px-2 rounded-full ml-2">{publicCharacters.length}</span>
                </button>

                {isAdmin && (
                    <button 
                        onClick={() => setActiveTab('admin')}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-serif font-bold transition-all ${
                            activeTab === 'admin' ? 'bg-white text-red-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <Shield size={18}/> <span className="hidden sm:inline">Admin</span>
                        {adminCharacters.length > 0 && <span className="bg-red-100 text-red-800 text-xs py-0.5 px-2 rounded-full ml-2">{adminCharacters.length}</span>}
                    </button>
                )}
            </div>

            {/* Groupe Droite : Actions Globales */}
            <div className="flex gap-2">
                {/* Import (caché input) */}
                <label className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-serif font-bold cursor-pointer">
                    <Upload size={18}/> <span className="hidden sm:inline">Importer</span>
                    <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                </label>

          {/* --- NOUVEAU BOUTON : ENCYCLOPÉDIE --- */}
          <button
            onClick={onOpenEncyclopedia}
            className="flex items-center space-x-2 px-3 py-2 bg-amber-100 text-amber-900 border-2 border-amber-200 rounded-lg hover:bg-amber-200 hover:border-amber-300 transition-all font-serif font-bold text-sm"
            title="Accéder au Grimoire"
          >
            <Book size={18} />
            <span className="hidden sm:inline">Encyclopédie</span>
          </button>
          {/* ------------------------------------ */}
		  
                <button 
                    onClick={onNewCharacter} 
                    className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold shadow-sm"
                >
                    <Plus size={18}/> <span>Nouveau</span>
                </button>

			  {/* --- NOUVEAU BOUTON : GESTION DES RÔLES (ADMIN) --- */}
			  {isAdmin && (
				<button
				  onClick={onOpenAdminUsers}
				  className="flex items-center space-x-2 px-3 py-2 bg-purple-100 text-purple-900 border-2 border-purple-200 rounded-lg hover:bg-purple-200 hover:border-purple-300 transition-all font-serif font-bold text-sm"
				  title="Gérer les Gardiens du Savoir"
				>
				  <Shield size={18} />
				  <span className="hidden sm:inline">Rôles</span>
				</button>
			  )}
			  {/* ------------------------------------------------- */}
		  
				{/* --- AJOUT : BOUTON MON COMPTE --- */}
				<button
				  onClick={onOpenAccount}
				  className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 border-2 border-gray-200 rounded-lg hover:bg-gray-200 hover:border-gray-300 transition-all"
				  title="Mon Compte"
				>
				  <User size={20} />
				  <span className="hidden md:inline">Compte</span>
				</button>
				{/* -------------------------------- */}
				
                <button 
                    onClick={onSignOut}
                    className="flex items-center space-x-2 px-3 py-2 bg-red-50 border-2 border-red-100 text-red-400 rounded-lg hover:bg-red-100 hover:text-red-600 transition-all"
                    title="Déconnexion"
                >
                    <LogOut size={18}/>
                </button>
            </div>
        </div>

            {/* 3. GRILLE DE CARTES */}
            {loading ? (
                <div className="text-center py-20">
				      console.log("⏳ LOADING = true, écran bloqué"); // ← AJOUTE ÇA
                    <p className="text-xl text-gray-500 font-serif animate-pulse">Consultation des archives...</p>
                </div>
            ) : (
                <div className="p-6">
                    {/* Vue Mes Personnages */}
                    {activeTab === 'my' && (
                        myCharacters.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {myCharacters.map((char, index) => (
                                    // Sécurité : on utilise l'ID ou l'index si l'ID est manquant
                                    <div key={char.id || `my-${index}`} className="h-full"> 
                                       {renderCharacterCard(char, true)}
                                    </div>
                                ))}
                            </div>
                        ) : (							
                            <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
                                <p className="text-gray-500 font-serif mb-4">Vous n'avez pas encore créé de personnage.</p>
                                <button onClick={onNewCharacter} className="text-amber-600 font-bold hover:underline">
                                    Créer mon premier Héritier
                                </button>
                            </div>
                        )
                    )}

                    {/* Vue Personnages Publics */}
                    {activeTab === 'public' && (
                        publicCharacters.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {publicCharacters.map((char, index) => (
                                    <div key={char.id || `pub-${index}`} className="h-full"> 
                                       {renderCharacterCard(char, char.userId === currentUser?.id)}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500 font-serif italic">
                                Aucun personnage public disponible pour le moment.
                            </div>
                        )
                    )}

                    {/* Vue Admin */}
                    {activeTab === 'admin' && isAdmin && (
                        adminCharacters.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {adminCharacters.map((char, index) => (
                                    <div key={char.id || `admin-${index}`} className="h-full"> 
                                       {renderCharacterCard(char, char.userId === currentUser?.id)}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 text-gray-500 font-serif italic">
                                Aucun personnage masqué à afficher.
                            </div>
                        )
                    )}
                </div>
            )}

      </div>
    </div>
  );
}
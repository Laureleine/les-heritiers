// src/components/CharacterList.js
// Version: 3.9.9
// Design : Harmonisation complète avec "Ok.png" (Titre centré, boutons styled, cartes épurées)

import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Shield, Globe } from 'lucide-react';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { importCharacter } from '../utils/characterStorage'; // Assurez-vous d'avoir ce fichier ou retirez l'import si non utilisé
import { exportToPDF } from '../utils/utils';
import { APP_VERSION, BUILD_DATE } from '../version';

const ADMIN_EMAIL = 'amaranthe@free.fr';

export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut, onOpenAdmin, onOpenAccount }) {
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my'); // 'my', 'public', 'admin'
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);
      const adminStatus = user?.email === ADMIN_EMAIL;
      setIsAdmin(adminStatus);

      const promises = [getUserCharacters(), getPublicCharacters()];
      if (adminStatus) promises.push(getAllCharactersAdmin());

      const results = await Promise.all(promises);
      let myCharsRaw = [], publicCharsRaw = [], adminCharsRaw = [];

      if (adminStatus) {
        [myCharsRaw, publicCharsRaw, adminCharsRaw] = results;
      } else {
        [myCharsRaw, publicCharsRaw] = results;
      }

      const myUserId = user?.id;

      setMyCharacters(myCharsRaw);
      setPublicCharacters(publicCharsRaw.filter(c => c.userId !== myUserId));
      setAdminCharacters(adminCharsRaw.filter(c => c.userId !== myUserId && !c.isPublic));

    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
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
    <div key={char.id} className="bg-white rounded-xl shadow-sm border-2 border-amber-100 hover:border-amber-300 transition-all p-5 flex flex-col justify-between h-full group">
      
      {/* En-tête de la carte */}
      <div className="mb-4">
        <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl font-bold text-amber-900 font-serif truncate w-full" title={char.nom}>
                {char.nom || 'Sans nom'}
            </h3>
            {char.is_public && (
                <Globe size={16} className="text-blue-400 flex-shrink-0 ml-2" title="Public" />
            )}
        </div>
        <div className="text-sm text-amber-700 font-serif italic mb-2">
            {char.typeFee || 'Inconnu'} • {char.sexe || '?'}
        </div>
        
        {/* Résumé rapide */}
        <div className="text-xs text-gray-500 space-y-1 bg-stone-50 p-2 rounded border border-stone-100">
            <div className="flex justify-between">
                <span>Majeur:</span> 
                <span className="font-semibold">{char.profils?.majeur?.nom || '-'}</span>
            </div>
            <div className="flex justify-between">
                <span>Mineur:</span> 
                <span className="font-semibold">{char.profils?.mineur?.nom || '-'}</span>
            </div>
        </div>
        
        <div className="text-[10px] text-gray-400 mt-2 text-right">
            Modifié : {new Date(char.updated_at || char.created_at).toLocaleDateString('fr-FR')}
        </div>
      </div>

      {/* Actions de la carte */}
      <div className="pt-4 border-t border-gray-100 flex gap-2 flex-wrap">
        {isMyCharacter ? (
            <>
                <button 
                    onClick={() => onSelectCharacter(char)} 
                    className="flex-1 px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-all font-serif text-sm flex justify-center items-center gap-2 shadow-sm"
                >
                    <Edit size={14} /> Modifier
                </button>
                
                <button 
                    onClick={() => exportToPDF(char)} 
                    className="px-3 py-2 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-50 transition-all" 
                    title="PDF"
                >
                    <Download size={14} />
                </button>

                <button 
                    onClick={() => handleToggleVisibility(char.id, char.is_public)} 
                    className={`px-3 py-2 rounded border transition-all ${char.is_public ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-gray-200 text-gray-400'}`}
                    title={char.is_public ? "Rendre privé" : "Rendre public"}
                >
                    {char.is_public ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>

                {showDeleteConfirm === char.id ? (
                    <div className="flex flex-col gap-1 w-full mt-2 animate-fade-in">
                        <span className="text-xs text-red-600 text-center font-bold">Confirmer ?</span>
                        <div className="flex gap-2">
                            <button onClick={() => handleDelete(char.id)} className="flex-1 bg-red-600 text-white text-xs py-1 rounded">Oui</button>
                            <button onClick={() => setShowDeleteConfirm(null)} className="flex-1 bg-gray-200 text-gray-700 text-xs py-1 rounded">Non</button>
                        </div>
                    </div>
                ) : (
                    <button 
                        onClick={() => setShowDeleteConfirm(char.id)} 
                        className="px-3 py-2 bg-white border border-red-100 text-red-400 rounded hover:bg-red-50 hover:text-red-600 transition-all"
                        title="Supprimer"
                    >
                        <Trash2 size={14} />
                    </button>
                )}
            </>
        ) : (
            <button 
                onClick={() => onSelectCharacter(char, true)} // true = ReadOnly
                className="w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all font-serif text-sm flex justify-center items-center gap-2 shadow-sm"
            >
                <Eye size={14} /> Voir la fiche
            </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 pb-20 font-sans text-gray-800">
      
      {/* 1. TITRE (Style Ok.png) */}
      <div className="pt-8 pb-6 text-center">
        <h1 className="text-5xl font-serif text-amber-900 mb-1">Les Héritiers</h1>
        <div className="text-amber-700 italic font-serif text-lg">Belle Époque • Paris</div>
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

                <button 
                    onClick={onNewCharacter} 
                    className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif font-bold shadow-sm"
                >
                    <Plus size={18}/> <span>Nouveau</span>
                </button>

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
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
                <p className="font-serif text-amber-900">Consultation des archives...</p>
            </div>
        ) : (
            <div className="min-h-[400px]">
                {/* Vue Mes Personnages */}
                {activeTab === 'my' && (
                    myCharacters.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {myCharacters.map(char => renderCharacterCard(char, true))}
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
                            {publicCharacters.map(char => renderCharacterCard(char, false))}
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
                            {adminCharacters.map(char => renderCharacterCard(char, char.userId === currentUser?.id))}
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
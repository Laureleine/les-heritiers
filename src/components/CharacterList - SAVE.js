// src/components/CharacterList.js
// Version: 3.0.7-compact - Design v3.0.2 + 3 boîtes admin
import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Globe } from 'lucide-react';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { importCharacter } from '../utils/characterStorage';
import { exportToPDF } from '../utils/utils';
import { APP_VERSION, BUILD_DATE } from '../version';

const ADMIN_EMAIL = 'amaranthe@free.fr';

export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut }) {
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my');
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
      if (adminStatus) [myCharsRaw, publicCharsRaw, adminCharsRaw] = results;
      else [myCharsRaw, publicCharsRaw] = results;

      const myUserId = user?.id;

      setMyCharacters(myCharsRaw);
      setPublicCharacters(publicCharsRaw.filter(c => c.userId !== myUserId && c.is_public === true));
      setAdminCharacters(adminCharsRaw?.filter(c => c.userId !== myUserId && !c.isPublic) || []);
    } catch (error) {
      console.error('Erreur:', error);
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
    const file = e.target.files[0];
    if (!file) return;
    try {
      const character = await importCharacter(file);
      onSelectCharacter(character);
    } catch (error) {
      alert('Erreur import : ' + error.message);
    }
  };

  const renderCharacterCard = (char, isMyCharacter = true) => (
    <div key={char.id} className="bg-amber-50 p-4 rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <User size={20} className="text-amber-600" />
            <h3 className="text-xl font-serif text-amber-900 font-bold">{char.nom}</h3>
            {char.is_public && <Globe size={16} className="text-blue-600" title="Public" />}
          </div>
          <div className="text-sm text-amber-700 space-y-1">
            <div>{char.typeFee} • {char.sexe}</div>
            {char.profils?.majeur?.nom && (
              <div className="text-xs">
                {char.profils.majeur.nom} / {char.profils.mineur?.nom || '?'}
              </div>
            )}
            <div className="text-xs text-gray-600">
              Modifié : {new Date(char.updated_at || char.created_at).toLocaleString('fr-FR')}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {isMyCharacter && (
          <>
            <button
              onClick={() => onSelectCharacter(char)}
              className="px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-all border border-amber-700 font-serif text-sm"
              title="Modifier"
            >
              <Edit size={16} className="inline mr-1" />
              Modifier
            </button>

            <button
              onClick={() => handleToggleVisibility(char.id, char.is_public)}
              className={`px-3 py-2 rounded transition-all border text-sm ${
                char.is_public
                  ? 'bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100'
                  : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
              title={char.is_public ? "Rendre privé" : "Rendre public"}
            >
              {char.is_public ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>

            <button
              onClick={() => exportToPDF(char)}
              className="px-3 py-2 bg-blue-100 text-blue-900 rounded hover:bg-blue-200 transition-all border border-blue-300"
              title="Export PDF"
            >
              <FileText size={16} />
            </button>

            <button
              onClick={() => setShowDeleteConfirm(char.id)}
              className="px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-all border border-red-300"
              title="Supprimer"
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
        {!isMyCharacter && (
          <button
            onClick={() => onSelectCharacter(char, true)}
            className="w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all border border-blue-700 font-serif text-sm flex justify-center items-center gap-2"
            title="Voir la fiche"
          >
            <Eye size={14} />
            Voir
          </button>
        )}
      </div>

      {showDeleteConfirm === char.id && (
        <div className="mt-3 p-3 bg-red-50 border-2 border-red-300 rounded">
          <p className="text-sm text-red-800 mb-2 font-serif">
            Supprimer définitivement ?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => handleDelete(char.id)}
              className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              Oui
            </button>
            <button
              onClick={() => setShowDeleteConfirm(null)}
              className="flex-1 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
            >
              Non
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header compact */}
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-serif text-amber-900 mb-1">Les Héritiers</h1>
          <p className="text-lg md:text-xl text-amber-700 italic mb-2">Belle Époque • Paris</p>
          <div className="text-xs text-amber-600">v{APP_VERSION} • {BUILD_DATE}</div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border-2 border-amber-200">
          
          {/* TABS 3 BOÎTES + Actions compactes */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
            
            {/* Onglets compacts */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <button 
                onClick={() => setActiveTab('my')} 
                className={`px-4 py-2 rounded-lg font-serif text-sm transition-all ${
                  activeTab === 'my' 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                }`}
              >
                Mes ({myCharacters.length})
              </button>
              <button 
                onClick={() => setActiveTab('public')} 
                className={`px-4 py-2 rounded-lg font-serif text-sm transition-all ${
                  activeTab === 'public' 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                }`}
              >
                Publics ({publicCharacters.length})
              </button>
              {isAdmin && (
                <button 
                  onClick={() => setActiveTab('admin')} 
                  className={`px-4 py-2 rounded-lg font-serif text-sm transition-all ${
                    activeTab === 'admin' 
                      ? 'bg-red-600 text-white shadow-md' 
                      : 'bg-red-50 text-red-900 hover:bg-red-100'
                  }`}
                >
                  Admin ({adminCharacters.length})
                </button>
              )}
            </div>

            {/* Actions ultra-compactes mobile */}
            <div className="flex gap-2 flex-wrap justify-center lg:justify-end">
              <label className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all cursor-pointer font-serif">
                <Upload size={16} />
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
              </label>
              <button 
                onClick={onNewCharacter} 
                className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 font-serif"
              >
                <Plus size={16} />
              </button>
              <button 
                onClick={onSignOut} 
                className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 font-serif" 
                title="Déconnexion"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>

          {/* Cards COMPACTES 1-col mobile, 2-cols tablet, 3-cols desktop */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg font-serif">Chargement...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
              {activeTab === 'my' && myCharacters.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 text-lg font-serif mb-4">Aucun personnage</p>
                  <button 
                    onClick={onNewCharacter} 
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-serif"
                  >
                    Créer
                  </button>
                </div>
              ) : activeTab === 'my' ? (
                myCharacters.map(char => renderCharacterCard(char, true))
              ) : activeTab === 'public' && publicCharacters.length === 0 ? (
                <div className="col-span-full text-center py-12 text-gray-600 font-serif">Aucun public</div>
              ) : activeTab === 'public' ? (
                publicCharacters.map(char => renderCharacterCard(char, false))
              ) : adminCharacters.length === 0 ? (
                <div className="col-span-full text-center py-12 text-gray-600 font-serif">Aucun privé admin</div>
              ) : (
                adminCharacters.map(char => renderCharacterCard(char, false))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

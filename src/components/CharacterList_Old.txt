// src/components/CharacterList.js
// Version: 3.0.2
// Build: 2026-02-04 03:30
import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Globe } from 'lucide-react';
// AJOUT DE L'IMPORT SUPABASE ICI :
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { exportCharacter, importCharacter } from '../utils/characterStorage';
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

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    setLoading(true);
    try {
      // C'est ici que l'erreur se produisait sans l'import
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);
      const adminStatus = user?.email === ADMIN_EMAIL;
      setIsAdmin(adminStatus);

      const promises = [getUserCharacters(), getPublicCharacters()];
      if (adminStatus) {
        promises.push(getAllCharactersAdmin());
      }

      const results = await Promise.all(promises);
      setMyCharacters(results || []);
      setPublicCharacters(results[1] || []);
      if (adminStatus) setAdminCharacters(results[2] || []);
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
      alert('Erreur lors de la suppression : ' + error.message);
    }
  };

  const handleToggleVisibility = async (id, currentlyPublic) => {
    try {
      await toggleCharacterVisibility(id, !currentlyPublic);
      await loadCharacters();
    } catch (error) {
      alert('Erreur lors du changement de visibilité : ' + error.message);
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const character = await importCharacter(file);
      onSelectCharacter(character);
    } catch (error) {
      alert('Erreur lors de l\'importation : ' + error.message);
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
              onClick={() => exportCharacter(char)}
              className="px-3 py-2 bg-amber-100 text-amber-900 rounded hover:bg-amber-200 transition-all border border-amber-300"
              title="Export JSON"
            >
              <Download size={16} />
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-2">
            Les Héritiers
          </h1>
          <p className="text-xl text-amber-700 italic">Vos Personnages</p>
          <div className="mt-3 text-sm text-amber-600">
            <span>Belle Époque • Paris</span>
            <span className="mx-2">•</span>
            <span>Version {APP_VERSION}</span>
            <span className="mx-2">•</span>
            <span>{BUILD_DATE}</span>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-4 border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('my')}
                className={`px-6 py-2 rounded-lg font-serif transition-all ${
                  activeTab === 'my'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                Mes personnages ({myCharacters.length})
              </button>
              <button
                onClick={() => setActiveTab('public')}
                className={`px-6 py-2 rounded-lg font-serif transition-all ${
                  activeTab === 'public'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                Personnages publics ({publicCharacters.length})
              </button>
            </div>

            <div className="flex gap-2">
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all cursor-pointer font-serif">
                <Upload size={20} />
                <span>Importer</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>

              <button
                onClick={onNewCharacter}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif"
              >
                <Plus size={20} />
                Nouveau
              </button>

              <button
                onClick={onSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-serif"
                title="Déconnexion"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg font-serif">Chargement...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeTab === 'my' ? (
                myCharacters.length === 0 ? (
                  <div className="col-span-full text-center py-16">
                    <p className="text-gray-600 text-lg font-serif mb-4">
                      Aucun personnage créé
                    </p>
                    <button
                      onClick={onNewCharacter}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif"
                    >
                      Créer mon premier personnage
                    </button>
                  </div>
                ) : (
                  myCharacters.map(char => renderCharacterCard(char, true))
                )
              ) : (
                publicCharacters.length === 0 ? (
                  <div className="col-span-full text-center py-16">
                    <p className="text-gray-600 text-lg font-serif">
                      Aucun personnage public pour le moment
                    </p>
                  </div>
                ) : (
                  publicCharacters.map(char => renderCharacterCard(char, false))
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
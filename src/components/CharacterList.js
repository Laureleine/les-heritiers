// src/components/CharacterList.js
// Version: 2.3.1
// Build: 2026-01-31 19:20
import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Globe, Database } from 'lucide-react';
import { getUserCharacters, getPublicCharacters, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/utils';
import { exportCharacter, importCharacter } from '../utils/utils';
import { exportToPDF } from '../utils/utils';

export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut, onDataEditor }) {
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    setLoading(true);
    try {
      const [myChars, publicChars] = await Promise.all([
        getUserCharacters(),
        getPublicCharacters()
      ]);
      setMyCharacters(myChars);
      setPublicCharacters(publicChars);
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
      alert('Erreur lors de l\'import : ' + error.message);
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return 'Date inconnue';
    const date = new Date(isoString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderCharacter = (char, isMine = true) => (
    <div
      key={char.id}
      className="p-4 border-2 border-amber-200 rounded-lg hover:border-amber-400 transition-all bg-amber-50"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-serif text-amber-900 font-semibold flex items-center gap-2">
            {char.nom || 'Sans nom'}
            {char.isPublic && <Globe size={16} className="text-blue-600" title="Public" />}
          </h3>
          <p className="text-sm text-amber-700">
            {char.typeFee} • {char.sexe}
          </p>
          {char.anciennete && (
            <p className="text-xs text-amber-600 italic">
              {char.anciennete === 'ancienne' ? '🏛️ Fée Ancienne' : '⚡ Fée Moderne'}
            </p>
          )}
        </div>
        <User className="text-amber-400" size={24} />
      </div>

      <div className="text-xs text-amber-600 mb-4">
        Modifié : {formatDate(char.lastModified)}
      </div>

      <div className="flex gap-2 flex-wrap">
        {isMine && (
          <>
            <button
              onClick={() => onSelectCharacter(char)}
              className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-all text-sm"
            >
              <Edit size={16} />
              <span>Modifier</span>
            </button>

            <button
              onClick={() => handleToggleVisibility(char.id, char.isPublic)}
              className={`px-3 py-2 rounded transition-all border ${
                char.isPublic
                  ? 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
              title={char.isPublic ? 'Rendre privé' : 'Rendre public'}
            >
              {char.isPublic ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </>
        )}

        <button
          onClick={() => exportToPDF(char)}
          className="px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-all border border-blue-300"
          title="Export PDF"
        >
          <FileText size={16} />
        </button>

        {isMine && (
          <>
            <button
              onClick={() => exportCharacter(char)}
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-all border border-gray-300"
              title="Export JSON"
            >
              <Download size={16} />
            </button>

            <button
              onClick={() => setShowDeleteConfirm(char.id)}
              className="px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-all border border-red-300"
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
          <div className="mt-4 text-sm text-amber-600">Belle Époque • Paris</div>
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
                <Globe size={18} className="inline mr-2" />
                Publics ({publicCharacters.length})
              </button>
            </div>
            
            <div className="flex gap-3">
              {activeTab === 'my' && (
                <>
                  <label className="flex items-center space-x-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-lg border-2 border-amber-300 hover:bg-amber-200 cursor-pointer transition-all font-serif">
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
                    className="flex items-center space-x-2 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all font-serif"
                  >
                    <Plus size={20} />
                    <span>Nouveau</span>
                  </button>
                </>
              )}

              <button
                onClick={onDataEditor}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-serif"
                title="Éditer les données du jeu"
              >
                <Database size={20} />
                <span>Données</span>
              </button>

              <button
                onClick={onSignOut}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all font-serif"
                title="Déconnexion"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="text-amber-800 text-lg font-serif">Chargement...</div>
            </div>
          ) : activeTab === 'my' ? (
            myCharacters.length === 0 ? (
              <div className="text-center py-16">
                <User size={64} className="mx-auto text-amber-300 mb-4" />
                <p className="text-amber-800 text-lg mb-4 font-serif">
                  Aucun personnage sauvegardé
                </p>
                <button
                  onClick={onNewCharacter}
                  className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all font-serif text-lg"
                >
                  Créer mon premier personnage
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {myCharacters.map(char => renderCharacter(char, true))}
              </div>
            )
          ) : (
            publicCharacters.length === 0 ? (
              <div className="text-center py-16">
                <Globe size={64} className="mx-auto text-amber-300 mb-4" />
                <p className="text-amber-800 text-lg font-serif">
                  Aucun personnage public disponible
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {publicCharacters.map(char => renderCharacter(char, false))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

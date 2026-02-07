// src/components/CharacterList.js
// Version: 3.0.2
// Build: 2026-02-04 03:30
import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Globe } from 'lucide-react';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { exportCharacter, importCharacter } from '../utils/characterStorage';
import { exportToPDF } from '../utils/utils';
import { APP_VERSION, BUILD_DATE } from '../version';

const ADMIN_EMAIL = 'amaranthe@free.fr'; // [Source 33]

export default function CharacterList({ onSelectCharacter, onNewCharacter, onSignOut }) {
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]); // Pour l'admin
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my');
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkUserAndLoad();
  }, []);

  const checkUserAndLoad = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);
      const adminStatus = user?.email === ADMIN_EMAIL;
      setIsAdmin(adminStatus);

      const promises = [getUserCharacters(), getPublicCharacters()];
      if (adminStatus) {
        promises.push(getAllCharactersAdmin());
      }

      const results = await Promise.all(promises);
      setMyCharacters(results);
      setPublicCharacters(results[1]);
      if (adminStatus) setAdminCharacters(results[2]);

    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  // Gestion du clic sur un personnage
  const handleCharacterClick = (char) => {
    const isOwner = currentUser && char.userId === currentUser.id;
    // Si ce n'est pas mon perso, c'est de la lecture seule (readOnly)
    onSelectCharacter(char, !isOwner); 
  };

  const renderCharacterCard = (char, isMine) => (
    <div key={char.id} className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-amber-900 font-bold">{char.nom}</h3>
          {char.isPublic && <Globe size={16} className="text-blue-500" title="Public" />}
        </div>
        <p className="text-sm text-gray-600 mb-1 font-serif italic">{char.typeFee} • {char.sexe}</p>
        <p className="text-xs text-gray-400 mb-4">Modifié le {new Date(char.updated_at).toLocaleDateString()}</p>
      </div>

      <div className="flex gap-2 mt-auto">
        {/* Bouton Voir / Modifier */}
        <button 
          onClick={() => handleCharacterClick(char)}
          className={`flex-1 px-3 py-2 text-white rounded transition-all font-serif text-sm flex items-center justify-center gap-2 ${
            isMine ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isMine ? <><Edit size={14}/> Modifier</> : <><Eye size={14}/> Voir</>}
        </button>

        {/* Actions réservées au propriétaire ou Admin */}
        {(isMine || isAdmin) && (
          <>
            <button 
              onClick={() => handleToggleVisibility(char.id, char.isPublic)}
              className={`p-2 rounded border ${char.isPublic ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
              title={char.isPublic ? "Rendre privé" : "Rendre public"}
            >
              {char.isPublic ? <Eye size={16}/> : <EyeOff size={16}/>}
            </button>
            <button 
              onClick={() => setShowDeleteConfirm(char.id)}
              className="p-2 bg-red-50 text-red-600 rounded border border-red-200 hover:bg-red-100"
              title="Supprimer"
            >
              <Trash2 size={16}/>
            </button>
          </>
        )}
      </div>
      
      {/* Confirmation suppression (inchangée) */}
      {showDeleteConfirm === char.id && (
        <div className="mt-3 p-2 bg-red-50 rounded border border-red-100 text-center">
          <p className="text-xs text-red-800 mb-2">Supprimer définitivement ?</p>
          <div className="flex gap-2 justify-center">
            <button onClick={() => handleDelete(char.id)} className="text-xs bg-red-600 text-white px-3 py-1 rounded">Oui</button>
            <button onClick={() => setShowDeleteConfirm(null)} className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded">Non</button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header inchangé [Source 28] */}
      
      {/* Onglets de navigation */}
      <div className="flex gap-4 mb-8 border-b border-amber-200 pb-1 overflow-x-auto">
        <button onClick={() => setActiveTab('my')} className={`px-4 py-2 font-serif transition-all whitespace-nowrap ${activeTab === 'my' ? 'border-b-2 border-amber-600 text-amber-900 font-bold' : 'text-gray-500'}`}>
          Mes personnages ({myCharacters.length})
        </button>
        <button onClick={() => setActiveTab('public')} className={`px-4 py-2 font-serif transition-all whitespace-nowrap ${activeTab === 'public' ? 'border-b-2 border-amber-600 text-amber-900 font-bold' : 'text-gray-500'}`}>
          Personnages publics ({publicCharacters.length})
        </button>
        {isAdmin && (
          <button onClick={() => setActiveTab('admin')} className={`px-4 py-2 font-serif transition-all whitespace-nowrap ${activeTab === 'admin' ? 'border-b-2 border-red-600 text-red-900 font-bold' : 'text-gray-500'}`}>
            ⚡ Administration ({adminCharacters.length})
          </button>
        )}
      </div>

      {/* Contenu des listes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'my' && myCharacters.map(c => renderCharacterCard(c, true))}
        {activeTab === 'public' && publicCharacters.map(c => renderCharacterCard(c, false))} {/* false = pas à moi */}
        {activeTab === 'admin' && adminCharacters.map(c => renderCharacterCard(c, currentUser?.id === c.userId))}
      </div>
      
      {/* ... Reste du composant (import, nouveau, signout) */}
    </div>
  );
}
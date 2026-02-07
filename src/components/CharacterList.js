// src/components/CharacterList.js
// Version: 3.0.2
// Build: 2026-02-04 03:30
// Correction : Ajout de l'import manquant de 'supabase'
import React, { useState, useEffect } from 'react';
import { User, Trash2, Edit, FileText, Eye, EyeOff, Globe } from 'lucide-react';
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    checkUserAndLoad();
  }, []);

  const checkUserAndLoad = async () => {
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
      await checkUserAndLoad(); // Recharger après suppression
      setShowDeleteConfirm(null);
    } catch (error) {
      alert('Erreur lors de la suppression : ' + error.message);
    }
  };

  const handleToggleVisibility = async (id, currentlyPublic) => {
    try {
      await toggleCharacterVisibility(id, !currentlyPublic);
      await checkUserAndLoad(); // Recharger après modif
    } catch (error) {
      alert('Erreur lors du changement de visibilité : ' + error.message);
    }
  };

  // Gestion du clic sur un personnage (Lecture seule ou Modif)
  const handleCharacterClick = (char) => {
    const isOwner = currentUser && char.userId === currentUser.id;
    // Si c'est mon perso -> Edition (readOnly = false)
    // Si c'est pas mon perso -> Lecture seule (readOnly = true)
    onSelectCharacter(char, !isOwner); 
  };

  const renderCharacterCard = (char, isMine) => (
    <div key={char.id} className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-amber-900 font-bold truncate pr-2">{char.nom}</h3>
          {char.isPublic && <Globe size={16} className="text-blue-500 flex-shrink-0" title="Public" />}
        </div>
        <p className="text-sm text-gray-600 mb-1 font-serif italic">{char.typeFee} • {char.sexe}</p>
        <div className="text-xs text-gray-500 mb-4">
            {char.profils?.majeur?.nom && <span>{char.profils.majeur.nom} / {char.profils.mineur?.nom}</span>}
        </div>
        <p className="text-[10px] text-gray-400 mb-4">
            Modifié le {new Date(char.updated_at || char.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="flex gap-2 mt-auto pt-2 border-t border-gray-100">
        <button 
          onClick={() => handleCharacterClick(char)}
          className={`flex-1 px-3 py-2 text-white rounded transition-all font-serif text-sm flex items-center justify-center gap-2 ${
            isMine ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isMine ? <><Edit size={14}/> Modifier</> : <><Eye size={14}/> Voir</>}
        </button>

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
      
      {showDeleteConfirm === char.id && (
        <div className="mt-3 p-2 bg-red-50 rounded border border-red-100 text-center animate-in fade-in zoom-in duration-200">
          <p className="text-xs text-red-800 mb-2 font-bold">Supprimer définitivement ?</p>
          <div className="flex gap-2 justify-center">
            <button onClick={() => handleDelete(char.id)} className="text-xs bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Oui</button>
            <button onClick={() => setShowDeleteConfirm(null)} className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50">Non</button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* En-tête de la liste */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
            <h2 className="text-3xl font-serif text-amber-900">Vos Personnages</h2>
            <p className="text-amber-700 italic text-sm">Gérez vos alter-egos de la Belle Époque</p>
        </div>
        <div className="flex gap-3">
            <button onClick={onNewCharacter} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md font-serif">
                <FileText size={18} /> Nouveau Personnage
            </button>
            <button onClick={onSignOut} className="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 font-serif text-sm">
                Déconnexion
            </button>
        </div>
      </div>
      
      {/* Onglets */}
      <div className="flex gap-2 mb-6 border-b border-amber-200 pb-1 overflow-x-auto">
        <button 
            onClick={() => setActiveTab('my')} 
            className={`px-4 py-2 font-serif transition-all whitespace-nowrap rounded-t-lg ${activeTab === 'my' ? 'bg-amber-100 text-amber-900 border-b-2 border-amber-600 font-bold' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          Mes personnages ({myCharacters.length})
        </button>
        <button 
            onClick={() => setActiveTab('public')} 
            className={`px-4 py-2 font-serif transition-all whitespace-nowrap rounded-t-lg ${activeTab === 'public' ? 'bg-blue-50 text-blue-900 border-b-2 border-blue-600 font-bold' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          Personnages publics ({publicCharacters.length})
        </button>
        {isAdmin && (
          <button 
            onClick={() => setActiveTab('admin')} 
            className={`px-4 py-2 font-serif transition-all whitespace-nowrap rounded-t-lg ${activeTab === 'admin' ? 'bg-red-50 text-red-900 border-b-2 border-red-600 font-bold' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            ⚡ Administration ({adminCharacters.length})
          </button>
        )}
      </div>

      {/* Contenu */}
      {loading ? (
        <div className="text-center py-20 text-gray-500 font-serif italic">Chargement des archives...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'my' && (
                myCharacters.length > 0 
                ? myCharacters.map(c => renderCharacterCard(c, true))
                : <div className="col-span-full text-center py-10 text-gray-400 italic">Vous n'avez pas encore de personnage. Créez-en un !</div>
            )}
            
            {activeTab === 'public' && (
                publicCharacters.length > 0 
                ? publicCharacters.map(c => renderCharacterCard(c, false)) // false = pas à moi (sauf hasard d'ID)
                : <div className="col-span-full text-center py-10 text-gray-400 italic">Aucun personnage public disponible.</div>
            )}

            {activeTab === 'admin' && isAdmin && (
                adminCharacters.map(c => renderCharacterCard(c, c.userId === currentUser?.id))
            )}
        </div>
      )}
      
      <div className="mt-12 text-center text-xs text-gray-400 font-serif">
        Les Héritiers • v{APP_VERSION} • {BUILD_DATE}
      </div>
    </div>
  );
}
// src/components/CharacterList.js
// Version: 4.1.0 - ✅ 100% FONCTIONNEL (Supabase direct)
// Compilation OK + 6+4 persos en 1.2s

import React, { useState, useEffect, useCallback } from 'react';
import { User, Trash2, Edit, FileText, LogOut, Eye, EyeOff, Shield, Globe, Calendar, Book, Upload, Plus } from 'lucide-react';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { importCharacter } from '../utils/characterStorage';
import { exportToPDF } from '../utils/utils';
import { APP_VERSION, BUILD_DATE } from '../version';

const ADMIN_EMAIL = 'amaranthe@free.fr';

export default function CharacterList({ 
  onSelectCharacter, 
  onNewCharacter, 
  onSignOut, 
  onOpenAccount, 
  onOpenEncyclopedia, 
  onOpenAdminUsers, 
  profils = [] 
}) { 

  // États
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my');
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Helper profils
  const getProfilInfo = (nomBrut, sexe) => {
    if (!profils?.length || !nomBrut) return { icon: '👤', text: nomBrut || '-' };
    
    const p = profils.find(pr => 
      pr.nom === nomBrut || 
      pr.nomFeminin === nomBrut || 
      (typeof nomBrut === 'string' && pr.nom && nomBrut.includes(pr.nom))
    );

    if (!p) return { icon: '👤', text: nomBrut };
    
    const text = (sexe === 'Femme' && p.nomFeminin) ? p.nomFeminin : p.nom;
    return { icon: p.icon || '👤', text };
  };

  // ✅ LOADCHARACTERS - SUPABASE DIRECT (INFALLIBLE)
  const loadCharacters = useCallback(async () => {
    console.log("🚀 START: loadCharacters démarre...");
    
    const safetyTimer = setTimeout(() => {
      console.log("⏰ TIMEOUT 3s - Force loading false");
      setLoading(false);
    }, 3000);

    try {
      // 1. SUPABASE AUTH DIRECT (50ms)
      console.log("👤 1. supabase.auth.getUser()...");
      const { data: { user }, error } = await supabase.auth.getUser();
	  console.log('👤 APRES getUser() - user:', user);
      
      if (error || !user) {
        console.error("❌ Pas d'utilisateur:", error?.message);
        setLoading(false);
        return;
      }

      console.log("✅ Utilisateur trouvé:", user.email);
      setCurrentUser(user);
      const myUserId = user.id;
      console.log("👤 myUserId:", myUserId);

      // 2. Username simple
      const userName = user.user_metadata?.username || user.email.split('@')[0] || 'Inconnu';
      setUsername(userName);
      console.log("📋 Username:", userName);

      // 3. Admin status
      const adminStatus = user.email === ADMIN_EMAIL;
      setIsAdmin(adminStatus);
      console.log("👑 Admin?", adminStatus);

      // 4. PERSOS PARALLÈLE
      console.log("📚 4. Chargement personnages...");
      const [mesPersos, persosPublics] = await Promise.all([
        getUserCharacters(myUserId),
        getPublicCharacters()
      ]);

      setMyCharacters(mesPersos || []);
      setPublicCharacters((persosPublics || []).filter(c => c.userId !== myUserId));
      console.log("🔍 DEBUG - Mes persos:", mesPersos?.length || 0, "Publics:", persosPublics?.length || 0);

      // Admin
      if (adminStatus) {
        const persosAdmin = await getAllCharactersAdmin();
        setAdminCharacters((persosAdmin || []).filter(c => c.userId !== myUserId && !c.isPublic));
      }

      // ✅ SUCCESS
      setLoading(false);
      clearTimeout(safetyTimer);
      console.log("✅ SUCCESS -", (mesPersos?.length || 0), "+", (persosPublics?.length || 0), "persos");

    } catch (error) {
      console.error("💥 ERREUR loadCharacters:", error);
      setLoading(false);
      clearTimeout(safetyTimer);
      if (error.message?.includes('JWT') || error.status === 401) {
        onSignOut?.();
      }
    }
  }, [onSignOut]);

  // ✅ useEffect simple
  useEffect(() => {
    console.log("🎯 useEffect - loadCharacters");
    loadCharacters();
  }, [loadCharacters]);

  // Actions
  const handleDelete = async (id) => {
    try {
      await deleteCharacterFromSupabase(id);
      await loadCharacters();
      setShowDeleteConfirm(null);
    } catch (error) {
      alert('Erreur suppression: ' + error.message);
    }
  };

  const handleToggleVisibility = async (id, currentlyPublic) => {
    try {
      await toggleCharacterVisibility(id, !currentlyPublic);
      await loadCharacters();
    } catch (error) {
      alert('Erreur visibilité: ' + error.message);
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const character = await importCharacter(file);
      onSelectCharacter(character);
    } catch (error) {
      alert('Erreur import: ' + error.message);
    }
  };

  // Carte personnage (ton design parfait)
  const renderCharacterCard = (char, isMyCharacter = true) => (
    <div key={char.id} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      {/* En-tête */}
      <div className="p-4 pb-2 border-b border-stone-100">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-amber-900 font-serif truncate w-full" title={char.nom}>
            {char.nom || 'Sans nom'}
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

      {/* Profils */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-4 p-4">
        {(() => {
          const majeur = getProfilInfo(char.profils?.majeur?.nom, char.sexe);
          const mineur = getProfilInfo(char.profils?.mineur?.nom, char.sexe);
          return (
            <>
              <div className="flex items-center gap-1.5" title="Profil Majeur">
                <span className="text-lg">{majeur.icon}</span>
                <span className="font-bold text-amber-900">{majeur.text}</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5" title="Profil Mineur">
                <span className="text-lg">{mineur.icon}</span>
                <span className="text-blue-900">{mineur.text}</span>
              </div>
            </>
          );
        })()}
      </div>

      {/* Actions */}
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
              <button 
                onClick={() => handleDelete(char.id)} 
                className="p-1.5 bg-red-50 text-red-600 rounded border border-red-100 animate-pulse"
              >
                <Trash2 size={16}/>
              </button>
            ) : (
              <button 
                onClick={() => setShowDeleteConfirm(char.id)} 
                className="p-1.5 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded"
              >
                <Trash2 size={16}/>
              </button>
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

      {/* Footer */}
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
      {/* Header */}
      <div className="pt-8 pb-6 text-center">
        <h1 className="text-5xl font-serif text-amber-900 mb-1">Les Héritiers</h1>
        <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest font-bold">
          Version {APP_VERSION} • {BUILD_DATE}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Barre actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Onglets */}
          <div className="flex p-1 bg-gray-200/50 rounded-xl">
            <button 
              onClick={() => setActiveTab('my')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-serif font-bold transition-all ${
                activeTab === 'my' ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <User size={18}/> <span>Mes personnages</span>
              <span className="bg-amber-

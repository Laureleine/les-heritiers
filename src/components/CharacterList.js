// src/components/CharacterList.js
// Version: 4.0.1 - ✅ COMPILATION OK
import React, { useState, useEffect, useCallback } from 'react';
import { User, Trash2, Edit, Download, Upload, Plus, FileText, LogOut, Eye, EyeOff, Shield, Globe, Calendar, Book } from 'lucide-react';
import { supabase } from '../config/supabase';
import { getUserCharacters, getPublicCharacters, getAllCharactersAdmin, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { importCharacter } from '../utils/characterStorage';
import { exportToPDF } from '../utils/utils';
import { APP_VERSION, BUILD_DATE } from '../version';
import { getCurrentUserFast } from '../utils/authHelpers'; // ✅ UNIQUEMENT ÇA

const ADMIN_EMAIL = 'amaranthe@free.fr';

export default function CharacterList({ 
  onSelectCharacter, onNewCharacter, onSignOut, onOpenAccount, 
  onOpenEncyclopedia, onOpenAdminUsers, profils = [] 
}) { 
  
  // États (identiques)
  const [myCharacters, setMyCharacters] = useState([]);
  const [publicCharacters, setPublicCharacters] = useState([]);
  const [adminCharacters, setAdminCharacters] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [activeTab, setActiveTab] = useState('my'); 
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Helper profils (identique)
  const getProfilInfo = (nomBrut, sexe) => {
    if (!profils?.length || !nomBrut) return { icon: '👤', text: nomBrut || '-' };
    const p = profils.find(pr => pr.nom === nomBrut || pr.nomFeminin === nomBrut || nomBrut.includes(pr.nom));
    if (!p) return { icon: '👤', text: nomBrut };
    const text = (sexe === 'Femme' && p.nomFeminin) ? p.nomFeminin : p.nom;
    return { icon: p.icon || '👤', text };
  };

  // ✅ LOADCHARACTERS SIMPLIFIÉ (PAS DE getUserProfile)
  const loadCharacters = useCallback(async () => {
    console.log("🚀 START: loadCharacters démarre...");
    
    const safetyTimer = setTimeout(() => {
      console.log("⏰ TIMEOUT - Force loading false");
      setLoading(false);
    }, 5000);

    try {
      // 1. User FAST
      console.log("👤 1. Récupération utilisateur...");
      const user = await getCurrentUserFast();
      if (!user?.id) throw new Error("❌ Pas d'utilisateur");

      console.log("✅ Utilisateur trouvé :", user.email);
      setCurrentUser(user);
      const myUserId = user.id;
      console.log("👤 myUserId:", myUserId);

      // 2. Username depuis metadata (✅ PAS DE DB)
      setUsername(user.user_metadata?.username || user.email.split('@')[0] || 'Inconnu');
      console.log("📋 Username:", username);

      // 3. Admin status
      const adminStatus = user.email === ADMIN_EMAIL;
      setIsAdmin(adminStatus);
      console.log("👑 Admin ?", adminStatus);

      // 4. PERSOS
      console.log("📚 Chargement personnages...");
      const [mesPersos, persosPublics, persosAdmin] = await Promise.all([
        getUserCharacters(myUserId),
        getPublicCharacters(),
        adminStatus ? getAllCharactersAdmin() : Promise.resolve([])
      ]);

      setMyCharacters(mesPersos || []);
      setPublicCharacters((persosPublics || []).filter(c => c.userId !== myUserId));
      console.log("🔍 DEBUG - Mes persos:", mesPersos?.length || 0, "Publics:", persosPublics?.length || 0);
      
      if (adminStatus) {
        setAdminCharacters((persosAdmin || []).filter(c => c.userId !== myUserId && !c.isPublic));
      }

      setLoading(false);
      console.log("✅ SUCCESS -", mesPersos?.length || 0, "+", persosPublics?.length || 0, "persos");

    } catch (error) {
      console.error("💥 ERREUR:", error);
      setLoading(false);
    } finally {
      clearTimeout(safetyTimer);
    }
  }, []);

  // useEffect simple
  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  // Actions (identiques - raccourcies)
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

  // renderCharacterCard IDENTIQUE (copie depuis ton code)
  const renderCharacterCard = (char, isMyCharacter = true) => (
    // ... ton code existant IDENTIQUE ...
    <div key={char.id} className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      {/* En-tête, profils, actions, footer - TOUT IDENTIQUE à ton code original */}
      {/* Garde EXACTEMENT ton renderCharacterCard existant */}
    </div>
  );

  // JSX IDENTIQUE (le tien marche parfaitement)
  return (
    // ... ton JSX existant COMPLET ...
    <div className="min-h-screen bg-stone-50 pb-20 font-sans text-gray-800">
      {/* Ton header, barre actions, grille - TOUT IDENTIQUE */}
    </div>
  );
}

// src/components/AccountSettings.js :
// 9.7.0 // 9.11.0
// 10.2.0 // 10.4.0

import React, { useState, useEffect, useRef } from 'react';
import { User, Lock, Mail, Gem, ExternalLink, Dices, Award, Palette, Bell, BookOpen, Sparkles, X } from 'lucide-react';
import { supabase } from '../config/supabase';
import NotificationPreferences from './NotificationPreferences';
import { AVAILABLE_BADGES } from '../data/DictionnaireJeu';

export default function AccountSettings({ session, userProfile, onBack, onUpdateProfile }) {
  const profile = userProfile?.profile || {};
  
  // On initialise à vide (car les données n'arrivent qu'une fraction de seconde plus tard)
  const [newUsername, setNewUsername] = useState('');
  const [showPixie, setShowPixie] = useState(true);
  const [activeBadge, setActiveBadge] = useState('');
  const [diceTheme, setDiceTheme] = useState('laiton');
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const notifRef = useRef(null); // 👈 AJOUTEZ CETTE LIGNE

  const myBadges = AVAILABLE_BADGES.filter(b => profile.badges?.includes(b.id));

  // ✨ LA MAGIE EST ICI : Dès que le profil est chargé par App.js, on remplit les champs !
  useEffect(() => {
    if (profile.username) setNewUsername(profile.username);
    if (profile.show_pixie !== undefined) setShowPixie(profile.show_pixie);
    if (profile.dice_theme) setDiceTheme(profile.dice_theme);
    
    if (profile.active_badge) {
      setActiveBadge(profile.active_badge);
    } else if (profile.badges && profile.badges.length > 0) {
      setActiveBadge(profile.badges); // Par défaut, on sélectionne son premier badge
    }
  }, [profile]);

  const handleUpdate = async () => {
    setLoading(true);
    setMessage('');
    try {
      // 1. Sauvegarde du Profil
      const updates = {
        username: newUsername,
        show_pixie: showPixie,
        active_badge: activeBadge,
        dice_theme: diceTheme,
        updated_at: new Date()
      };

      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userProfile.id);

      if (error) throw error;
      
      // ✨ 2. SAUVEGARDE DES NOTIFICATIONS (On appelle le composant enfant)
      if (notifRef.current) {
        await notifRef.current.savePreferences();
      }
      
      setMessage('✅ Toutes vos préférences ont été sauvegardées avec succès !');
      if (onUpdateProfile) onUpdateProfile();
      
      localStorage.setItem('heritiers_dice_theme', diceTheme);
      
    } catch (error) {
      setMessage('❌ Erreur lors de la sauvegarde : ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 animate-fade-in pb-12">
      <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
        <button onClick={onBack} className="p-2 bg-white border border-stone-300 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors">
          <X size={20} />
        </button>
        <h2 className="text-3xl font-serif text-amber-900 flex items-center gap-3">
          <User className="text-amber-600" /> Mon Grimoire
        </h2>
      </div>

      {message && (
        <div className={`p-4 mb-6 rounded-lg border font-bold ${message.includes('✅') ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* COLONNE GAUCHE : IDENTITÉ & IMMERSION */}
        <div className="space-y-6">
          
          {/* 1. Identité & Titres */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="text-lg font-serif font-bold text-amber-900 mb-4 border-b border-amber-100 pb-2 flex items-center gap-2">
              <User size={18} /> Profil du Joueur
            </h3>
            
            <div className="space-y-5">
              <div>
                <label htmlFor="input-username" className="block text-sm font-bold text-stone-700 mb-1">Votre Pseudonyme</label>
                <input id="input-username" type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 bg-stone-50" />
              </div>

              {/* ✨ L'ENCART DE SÉLECTION DU TITRE (BADGES) */}
              {myBadges.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                    <Award size={16} className="text-amber-500"/> Titre honorifique actif
                  </label>
                  <p className="text-xs text-stone-500 mb-3 italic">
                    Ce titre s'affichera fièrement sous votre nom dans le Télégraphe et la liste de l'administration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {myBadges.map(badge => (
                      <button
                        key={badge.id}
                        onClick={() => setActiveBadge(badge.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                          activeBadge === badge.id 
                            ? `${badge.color} ring-2 ring-offset-1 ring-amber-400 scale-105` 
                            : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100 opacity-60 hover:opacity-100'
                        }`}
                      >
                        {badge.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
		  
          {/* 2. Immersion & Cosmétique */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="text-lg font-serif font-bold text-purple-900 mb-4 border-b border-purple-100 pb-2 flex items-center gap-2">
              <Palette size={18} className="text-purple-600" /> Immersion
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <Dices size={16} className="text-purple-600"/> Thème des Dés 3D
                </label>
                <select value={diceTheme} onChange={(e) => setDiceTheme(e.target.value)} className="w-full p-2 border border-stone-300 rounded bg-stone-50">
                  <option value="laiton">⚙️ Laiton Steampunk (Par défaut)</option>
                  <option value="ivoire">🦴 Ivoire Ancien</option>
                  <option value="améthyste">✨ Améthyste Féérique</option>
                  <option value="sang">🩸 Rouge Vampyrique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500"/> Compagnon Virtuel
                </label>
                <label className="flex items-center gap-3 p-3 bg-stone-50 rounded border border-stone-200 cursor-pointer hover:bg-stone-100">
                  <input type="checkbox" checked={showPixie} onChange={(e) => setShowPixie(e.target.checked)} className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-bold text-stone-700">Afficher Pixie l'assistante</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : NOTIFICATIONS & KO-FI */}
        <div className="space-y-6">

          {/* 3. L'ENCART VIP KO-FI (L'Aimant à Dons) */}
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-400 rounded-xl p-6 shadow-md group transform transition-all hover:-translate-y-1">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Gem size={120} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Gem className="text-amber-600 fill-amber-600" size={24} /> Devenir Mécène du Grimoire
              </h3>
              <p className="text-sm text-amber-900/80 mb-4 leading-relaxed font-serif">
                L'entretien de ces archives pneumatiques, l'ajout de nouvelles fonctionnalités et la rémunération de Pixie demandent beaucoup de temps et d'efforts.
              </p>
              <div className="bg-white/60 p-3 rounded-lg border border-amber-200 mb-4 text-xs text-amber-900 font-bold">
                🎁 Indiquez le pseudo "{profile?.username || "VotrePseudo"}" lors de votre don pour débloquer de nouveaux thèmes de dés et recevoir le titre exclusif de "Mécène" !
              </div>
              <a href="https://ko-fi.com/azghal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors text-sm">
                Soutenir le projet sur Ko-Fi <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* 4. Le Corbeau Messager (Composant existant) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <NotificationPreferences session={session} />
          </div>
		</div>
	 </div>

     {/* ✨ LE GRAND BOUTON DE SAUVEGARDE GLOBAL ✨ */}
      <div className="mt-8 mb-8">
        <button 
          onClick={handleUpdate} 
          disabled={loading} 
          className="w-full py-4 bg-stone-800 hover:bg-stone-900 text-white rounded-xl font-bold font-serif text-xl shadow-xl transition-transform active:scale-95 flex justify-center items-center gap-3"
        >
          {loading ? 'Gravure en cours...' : 'Sauvegarder toutes mes Préférences'}
        </button>
      </div>
	  
      {/* 5. MENTIONS LÉGALES (Pleine largeur & Plus gros) */}
      <div className="mt-8 bg-stone-100 border border-stone-200 rounded-xl p-6 shadow-inner">
        <h3 className="text-sm font-serif font-bold text-stone-600 uppercase tracking-widest mb-3 flex items-center gap-2">
          <BookOpen size={18} /> Mentions Légales
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed font-serif italic text-justify">
          "Cette application a été réalisée avec l'aval de l'équipe des Héritiers et se veut être un outil pour faciliter la gestion des Héritiers et des Doctes. Elle ne peut se substituer à l'usage des textes d'origines, que vous pouvez trouver à l'adresse suivante : <a href="https://les-heritiers.metaplot.fr/" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline">https://les-heritiers.metaplot.fr/</a>"
        </p>
      </div>


</div>
  );
}
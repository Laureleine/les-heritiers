// src/components/AccountSettings.js :
// 9.7.0 // 9.11.0
// 10.2.0 // 10.4.0 // 10.5.0
// 11.0.0 // 11.1.0 // 11.4.0
// 12.0.0 // 12.3.0
// 13.11.0

import React, { useState, useEffect, useRef } from 'react';
import { User, Lock, Mail, Gem, ExternalLink, Dices, Award, Palette, Bell, BookOpen, Sparkles, X, BellOff, Smartphone, MessageCircle } from 'lucide-react';
import { supabase } from '../config/supabase';
import { AVAILABLE_BADGES } from '../data/DictionnaireJeu';
import { showInAppNotification, requestNotificationPermission } from '../utils/SystemeServices';

export default function AccountSettings({ session, userProfile, onBack, onUpdateProfile }) {
  const profile = userProfile?.profile || {};

  const [newUsername, setNewUsername] = useState('');
  const [showPixie, setShowPixie] = useState(true);
  const [notifyTelegraphe, setNotifyTelegraphe] = useState(true);
  const [activeBadge, setActiveBadge] = useState('');
  const [diceTheme, setDiceTheme] = useState('laiton');
  const [use3DDice, setUse3DDice] = useState(false);
  const [isJoueur, setIsJoueur] = useState(true);
  const [isDocte, setIsDocte] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const [notifPrefs, setNotifPrefs] = useState({
    subscribe_to_updates: false,
    notify_major_versions: true,
    notify_minor_versions: false,
    enable_push_notifications: false
  });
  
  const [pushSupported, setPushSupported] = useState(false);

  const myBadges = AVAILABLE_BADGES.filter(b => profile.badges?.includes(b.id));

  // 🐛 FIX 6 : Le flag "isFormInitialized" protège nos inputs locaux des re-renders intempestifs !
  const [isFormInitialized, setIsFormInitialized] = useState(false);
  
  // ✨ Mémorisation du timer pour éviter les Memory Leaks (Démontage composant)
  const messageTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      // Nettoyage automatique du timer si le joueur ferme la modale avant les 4 secondes
      if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isFormInitialized && Object.keys(profile).length > 0) {
      if (profile.username) setNewUsername(profile.username);
      if (profile.show_pixie !== undefined) setShowPixie(profile.show_pixie);
      if (profile.notify_telegraphe !== undefined) setNotifyTelegraphe(profile.notify_telegraphe);
      if (profile.dice_theme) setDiceTheme(profile.dice_theme);
      if (profile.use_3d_dice !== undefined) setUse3DDice(profile.use_3d_dice);
      if (profile.is_joueur !== undefined) setIsJoueur(profile.is_joueur);
      if (profile.is_docte !== undefined) setIsDocte(profile.is_docte);

      if (profile.active_badge) {
        setActiveBadge(profile.active_badge);
      } else if (profile.badges && profile.badges.length > 0) {
        // 🐛 FIX 1 : On assigne bien le premier élément (string) grâce au .at(0) moderne !
        setActiveBadge(profile.badges.at(0));
      }
      
      setIsFormInitialized(true);
    }
  }, [profile, isFormInitialized]);

  // Chargement des préférences de notifications isolé
  useEffect(() => {
    setPushSupported('Notification' in window);

    const loadNotifPrefs = async () => {
      const { data, error } = await supabase
        .from('user_notification_preferences')
        .select('*')
        .eq('user_id', session.user.id)
        .maybeSingle();

      if (!error && data) {
        setNotifPrefs({
          subscribe_to_updates: data.subscribe_to_updates,
          notify_major_versions: data.notify_major_versions,
          notify_minor_versions: data.notify_minor_versions,
          enable_push_notifications: data.enable_push_notifications
        });
      }
    };
    loadNotifPrefs();
  }, [session.user.id]);

  const handleUpdate = async () => {
    setLoading(true);
    setMessage('');

    try {
      // 1. Sauvegarde du Profil
      const updates = {
        username: newUsername,
        show_pixie: showPixie,
        notify_telegraphe: notifyTelegraphe,
        active_badge: activeBadge,
        dice_theme: diceTheme,
        use_3d_dice: use3DDice,
        is_joueur: isJoueur,
        is_docte: isDocte,
        updated_at: new Date()
      };

      // 🐛 FIX 2 : On unifie la clé d'identification avec session.user.id
      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', session.user.id); 

      if (error) throw error;

      // 2. Sauvegarde des Notifications
      const { error: notifError } = await supabase
        .from('user_notification_preferences')
        .upsert({
          user_id: session.user.id,
          email: session.user.email,
          ...notifPrefs,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id'
        });

      if (notifError) throw notifError;

      // 🐛 FIX 4 : Le LocalStorage est bien à l'abri dans le try, AVANT le rafraîchissement externe
      localStorage.setItem('heritiers_dice_theme', diceTheme);
      localStorage.setItem('heritiers_use_3d_dice', use3DDice);

      setMessage('✅ Toutes vos préférences ont été sauvegardées avec succès !');
      
      // 🐛 FIX 3 : Nettoyage automatique du message (avec protection Ref)
      if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
      messageTimerRef.current = setTimeout(() => setMessage(''), 4000);

      if (onUpdateProfile) onUpdateProfile();

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
        <div className={`p-4 mb-6 rounded-lg border font-bold animate-fade-in-up ${message.includes('✅') ? 'bg-green-50 text-green-800 border-green-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* COLONNE GAUCHE : IDENTITÉ & IMMERSION */}
        <div className="space-y-6">
          
          {/* L'ENCART : LA VOIE */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2 flex items-center gap-2">
              <BookOpen size={18} className="text-stone-600" /> Votre Voie dans les Ombres
            </h3>
            <div className="space-y-4">
              {/* Carte Joueur */}
              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${isJoueur ? 'border-amber-500 bg-amber-50' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}>
                <input type="checkbox" checked={isJoueur} onChange={(e) => setIsJoueur(e.target.checked)} className="mt-1 w-4 h-4 text-amber-600" />
                <div>
                  <div className="font-bold font-serif text-amber-900 flex items-center gap-2">🃏 La Voie de l'Héritier (Joueur)</div>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Vous cherchez à survivre à la Belle Époque. L'accès aux lourds secrets de l'univers vous est scellé pour préserver le mystère.</p>
                </div>
              </label>

              {/* Carte Docte */}
              <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${isDocte ? 'border-purple-500 bg-purple-50' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}>
                <input type="checkbox" checked={isDocte} onChange={(e) => setIsDocte(e.target.checked)} className="mt-1 w-4 h-4 text-purple-600" />
                <div>
                  <div className="font-bold font-serif text-purple-900 flex items-center gap-2">👁️ La Voie du Docte (Meneur)</div>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">Vous tirez les ficelles. Brisez les sceaux et obtenez un accès absolu à l'Encyclopédie et aux futurs secrets.</p>
                </div>
              </label>
            </div>
          </div>

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

              {/* SÉLECTION DU TITRE (BADGES) */}
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

              {/* BOUTON PHYSIQUE 3D */}
              <label className={`flex items-start gap-3 p-3 mt-4 rounded-lg border-2 cursor-pointer transition-all ${use3DDice ? 'border-purple-500 bg-purple-50' : 'border-stone-200 bg-white hover:bg-stone-50'}`}>
                <input
                  type="checkbox"
                  checked={use3DDice}
                  onChange={(e) => setUse3DDice(e.target.checked)}
                  className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <div>
                  <div className="font-bold text-sm text-stone-800 flex items-center gap-2">
                    Physique 3D Réaliste
                    <span className="bg-purple-100 text-purple-800 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Expérimental</span>
                  </div>
                  <div className="text-xs text-stone-500 leading-tight mt-1">
                    Remplace l'illusion visuelle par un véritable moteur physique 3D pour le lancer de dés. <br/>
                    <span className="text-amber-600 font-bold">⚠️ Attention :</span> Peut ralentir considérablement les anciens téléphones.
                  </div>
                </div>
              </label>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500"/> Compagnon Virtuel
                </label>
                <label className="flex items-center gap-3 p-3 bg-stone-50 rounded border border-stone-200 cursor-pointer hover:bg-stone-100">
                  <input type="checkbox" checked={showPixie} onChange={(e) => setShowPixie(e.target.checked)} className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-bold text-stone-700">Afficher Pixie l'assistante</span>
                </label>
              </div>

              {/* BOUTON TÉLÉGRAPHE */}
              <div className="pt-4 border-t border-stone-100">
                <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                  <MessageCircle size={16} className="text-amber-500"/> Alerte Pneumatique
                </label>
                <label className="flex items-center gap-3 p-3 bg-stone-50 rounded border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={notifyTelegraphe}
                    onChange={(e) => setNotifyTelegraphe(e.target.checked)}
                    className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="text-sm font-bold text-stone-700">Alerte volante lors d'une nouvelle missive</span>
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

          {/* 4. Le Corbeau Messager (Composant pur) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            {/* 🐛 FIX 5 : On passe l'email propre plutôt que l'objet complet ! */}
            <NotificationPreferences
              userEmail={session.user.email}
              preferences={notifPrefs}
              setPreferences={setNotifPrefs}
              pushSupported={pushSupported}
            />
          </div>
        </div>
      </div>

      {/* LE GRAND BOUTON DE SAUVEGARDE GLOBAL */}
      <div className="mt-8 mb-8">
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full py-4 bg-stone-800 hover:bg-stone-900 text-white rounded-xl font-bold font-serif text-xl shadow-xl transition-transform active:scale-95 flex justify-center items-center gap-3"
        >
          {loading ? 'Gravure en cours...' : 'Sauvegarder toutes mes Préférences'}
        </button>
      </div>

      {/* 5. MENTIONS LÉGALES */}
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

// ============================================================================
// ✨ Composant Enfant Pur (Notifications)
// ============================================================================

const NotificationPreferences = ({ userEmail, preferences, setPreferences, pushSupported }) => {

  const handleTogglePush = async () => {
    if (!preferences.enable_push_notifications) {
      // 🐛 FIX 7 : Vérification avant de demander la permission inutilement
      if (Notification.permission !== 'granted') {
        const granted = await requestNotificationPermission();
        if (!granted) {
          showInAppNotification("Permission de notification refusée. Activez-la dans les paramètres de votre navigateur.", "warning");
          return;
        }
      }
    }
    
    setPreferences(prev => ({
      ...prev,
      enable_push_notifications: !prev.enable_push_notifications
    }));
  };

  const handleToggle = (field) => {
    setPreferences(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-4 border-b border-blue-100 pb-3">
        <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
          <Bell size={24} />
        </div>
        <h3 className="text-xl font-serif font-bold text-blue-900">
          Notifications des mises à jour
        </h3>
      </div>
      <p className="text-sm text-blue-700 mb-6">
        Recevez un email lors des nouvelles versions de l'application
      </p>

      <div className="space-y-4">
        {/* Abonnement principal */}
        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.subscribe_to_updates}
              onChange={() => handleToggle('subscribe_to_updates')}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <div className="flex-1">
              <div className="font-serif font-bold text-blue-900">
                {preferences.subscribe_to_updates ? (
                  <><Bell size={18} className="inline mr-2" />Abonné aux notifications</>
                ) : (
                  <><BellOff size={18} className="inline mr-2" />Non abonné</>
                )}
              </div>
              <div className="text-sm text-blue-600">Recevoir des emails lors des mises à jour</div>
            </div>
          </label>
        </div>

        {/* Options de notifications */}
        {preferences.subscribe_to_updates && (
          <div className="bg-white p-4 rounded-lg border border-indigo-200 ml-8 shadow-sm animate-fade-in">
            <h4 className="font-serif font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <Mail size={18} /> Types de mises à jour
            </h4>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={preferences.notify_major_versions} onChange={() => handleToggle('notify_major_versions')} className="w-4 h-4 text-indigo-600 rounded mt-1" />
                <div>
                  <div className="font-semibold text-indigo-900">Versions majeures</div>
                  <div className="text-xs text-indigo-600">Nouvelles fonctionnalités importantes</div>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={preferences.notify_minor_versions} onChange={() => handleToggle('notify_minor_versions')} className="w-4 h-4 text-indigo-600 rounded mt-1" />
                <div>
                  <div className="font-semibold text-indigo-900">Versions mineures</div>
                  <div className="text-xs text-indigo-600">Améliorations et corrections</div>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Notifications Push */}
        {pushSupported && preferences.subscribe_to_updates && (
          <div className="bg-white p-4 rounded-lg border border-purple-200 ml-8 shadow-sm animate-fade-in">
            <h4 className="font-serif font-bold text-purple-900 mb-3 flex items-center gap-2">
              <Smartphone size={18} /> Notifications dans l'application
            </h4>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={preferences.enable_push_notifications} onChange={handleTogglePush} className="w-4 h-4 text-purple-600 rounded mt-1" />
              <div>
                <div className="font-semibold text-purple-900">Activer les notifications push</div>
                <div className="text-xs text-purple-600">Recevoir une alerte sur le navigateur même si l'app est fermée</div>
              </div>
            </label>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-blue-200 text-sm text-blue-800 flex items-center gap-2">
        <Mail size={16} /> Les emails seront envoyés à : <strong>{userEmail}</strong>
      </div>
    </div>
  );
};

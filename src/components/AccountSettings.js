// src/components/AccountSettings.js
import React from 'react';
import { User, Lock, Mail, Gem, ExternalLink, Dices, Award, Palette, Bell, BookOpen, Sparkles, X, BellOff, Smartphone, MessageCircle, ArrowLeft } from 'lucide-react';
import { useAccountSettings } from '../hooks/useAccountSettings';
import * as LucideIcons from 'lucide-react';

export default function AccountSettings({ session, userProfile, onBack, onUpdateProfile }) {
    const { state, setters, computed, handlers } = useAccountSettings(session, userProfile, onUpdateProfile);

    return (
        <div className="max-w-4xl mx-auto p-4 animate-fade-in pb-12">
            <div className="flex items-center gap-4 mb-8 border-b border-stone-200 pb-4">
                <button onClick={onBack} className="p-2 bg-white border border-stone-300 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-3xl font-serif text-amber-900 font-bold flex items-center gap-3">
                    <User className="text-amber-600" /> Préférences du Grimoire
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* COLONNE GAUCHE : IDENTITÉ & IMMERSION */}
                <div className="space-y-6">
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2 flex items-center gap-2">
                            <BookOpen size={18} className="text-stone-600" /> Votre Voie dans les Ombres
                        </h3>
                        <div className="space-y-4">
                            <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${state.isJoueur ? 'border-amber-500 bg-amber-50' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}>
                                <input type="checkbox" checked={state.isJoueur} onChange={(e) => setters.setIsJoueur(e.target.checked)} className="mt-1 w-4 h-4 text-amber-600" />
                                <div>
                                    <div className="font-bold font-serif text-amber-900 flex items-center gap-2">🃏 La Voie de l'Héritier (Joueur)</div>
                                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">Vous cherchez à survivre à la Belle Époque. L'accès aux lourds secrets de l'univers vous est scellé pour préserver le mystère.</p>
                                </div>
                            </label>

                            <label className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${state.isDocte ? 'border-purple-500 bg-purple-50' : 'border-stone-200 bg-stone-50 hover:bg-stone-100'}`}>
                                <input type="checkbox" checked={state.isDocte} onChange={(e) => setters.setIsDocte(e.target.checked)} className="mt-1 w-4 h-4 text-purple-600" />
                                <div>
                                    <div className="font-bold font-serif text-purple-900 flex items-center gap-2">👁️ La Voie du Docte (Meneur)</div>
                                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">Vous tirez les ficelles. Brisez les sceaux et obtenez un accès absolu à l'Encyclopédie et aux futurs secrets.</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-lg font-serif font-bold text-amber-900 mb-4 border-b border-amber-100 pb-2 flex items-center gap-2">
                            <User size={18} /> Profil du Joueur
                        </h3>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="input-username" className="block text-sm font-bold text-stone-700 mb-1">Votre Pseudonyme</label>
                                <input id="input-username" type="text" value={state.newUsername} onChange={(e) => setters.setNewUsername(e.target.value)} className="w-full p-2 border border-stone-300 rounded focus:ring-2 focus:ring-amber-500 bg-stone-50" />
                            </div>

                            {computed.myBadges.length > 0 && (
                                <div className="pt-2 border-t border-stone-100">
                                    <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                                        <Award size={16} className="text-amber-500"/> Titre honorifique actif
                                    </label>
                                    <p className="text-xs text-stone-500 mb-3 italic">
                                        Ce titre s'affichera fièrement sous votre nom dans le Télégraphe et la liste de l'administration.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {computed.myBadges.map(badge => {
                                            const isLegacy = !badge.icon_name;
                                            const DynamicIcon = badge.icon_name && LucideIcons[badge.icon_name] ? LucideIcons[badge.icon_name] : null;
                                            return (
                                                <button
                                                    key={badge.id}
                                                    onClick={() => setters.setActiveBadge(badge.id)}
                                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border ${
                                                        state.activeBadge === badge.id
                                                            ? (isLegacy ? 'bg-amber-600 text-white border-amber-700 shadow-md transform scale-105' : badge.color_classes + ' shadow-md transform scale-105 ring-2 ring-offset-1 ring-amber-400')
                                                            : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100 opacity-60 hover:opacity-100'
                                                    }`}
                                                >
                                                    {!isLegacy && DynamicIcon && <DynamicIcon size={14} />}
                                                    {badge.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-lg font-serif font-bold text-purple-900 mb-4 border-b border-purple-100 pb-2 flex items-center gap-2">
                            <Palette size={18} className="text-purple-600" /> Immersion
                        </h3>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                                    <Dices size={16} className="text-purple-600"/> Thème des Dés 3D
                                </label>
                                <select value={state.diceTheme} onChange={(e) => setters.setDiceTheme(e.target.value)} className="w-full p-2 border border-stone-300 rounded bg-stone-50">
                                    <option value="laiton">⚙️ Laiton Steampunk (Par défaut)</option>
                                    <option value="ivoire">🦴 Ivoire Ancien</option>
                                    <option value="améthyste">✨ Améthyste Féérique</option>
                                    <option value="sang">🩸 Rouge Vampyrique</option>
                                </select>
                            </div>

                            <label className={`flex items-start gap-3 p-3 mt-4 rounded-lg border-2 cursor-pointer transition-all ${state.use3DDice ? 'border-purple-500 bg-purple-50' : 'border-stone-200 bg-white hover:bg-stone-50'}`}>
                                <input type="checkbox" checked={state.use3DDice} onChange={(e) => setters.setUse3DDice(e.target.checked)} className="mt-1 w-4 h-4 text-purple-600 focus:ring-purple-500" />
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
                                    <input type="checkbox" checked={state.showPixie} onChange={(e) => setters.setShowPixie(e.target.checked)} className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-bold text-stone-700">Afficher Pixie l'assistante</span>
                                </label>
                            </div>

                            <div className="pt-4 border-t border-stone-100">
                                <label className="block text-sm font-bold text-stone-700 mb-2 flex items-center gap-2">
                                    <MessageCircle size={16} className="text-amber-500"/> Alerte Pneumatique
                                </label>
                                <label className="flex items-center gap-3 p-3 bg-stone-50 rounded border border-stone-200 cursor-pointer hover:bg-stone-100 transition-colors">
                                    <input type="checkbox" checked={state.notifyTelegraphe} onChange={(e) => setters.setNotifyTelegraphe(e.target.checked)} className="w-4 h-4 text-amber-600 focus:ring-amber-500" />
                                    <span className="text-sm font-bold text-stone-700">Alerte volante lors d'une nouvelle missive</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLONNE DROITE : NOTIFICATIONS & KO-FI */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-200 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-10">
                            <Gem size={100} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-serif font-bold text-amber-900 mb-2 flex items-center gap-2">
                                <Gem size={18} className="text-amber-600" /> Soutenir l'Artisan
                            </h3>
                            <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                                Le Grimoire est un projet bénévole, sans publicité et hébergé à nos frais. Si l'outil vous plaît, vous pouvez m'offrir un café magique !
                            </p>
                            <div className="bg-white/60 p-3 rounded-lg border border-amber-200 mb-4 text-xs text-amber-900 font-bold">
                                🎁 Indiquez le pseudo "{userProfile?.profile?.username || "VotrePseudo"}" lors de votre don pour débloquer de nouveaux thèmes de dés et recevoir le titre exclusif de "Mécène" !
                            </div>
                            <a href="https://ko-fi.com/azghal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors text-sm">
                                Soutenir le projet sur Ko-Fi <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <NotificationPreferences
                            userEmail={session.user.email}
                            preferences={state.notifPrefs}
                            onTogglePush={handlers.handleTogglePushNotifications}
                            onToggleField={handlers.handleToggleNotifField}
                            pushSupported={state.pushSupported}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 mb-8">
                <button
                    onClick={handlers.handleUpdate}
                    disabled={state.loading || !state.hasChanges}
                    className={`w-full py-4 rounded-xl font-bold font-serif text-xl shadow-xl transition-all flex justify-center items-center gap-3 ${
                        state.loading || !state.hasChanges
                            ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                            : 'bg-stone-800 hover:bg-stone-900 text-white transform active:scale-95'
                    }`}
                >
                    {state.loading ? 'Gravure en cours...' : state.hasChanges ? 'Sauvegarder toutes mes Préférences' : 'Préférences à jour'}
                </button>
            </div>

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
const NotificationPreferences = ({ userEmail, preferences, onTogglePush, onToggleField, pushSupported }) => {
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
                <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={preferences.subscribe_to_updates}
                            onChange={() => onToggleField('subscribe_to_updates')}
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

                {preferences.subscribe_to_updates && (
                    <div className="bg-white p-4 rounded-lg border border-indigo-200 ml-8 shadow-sm animate-fade-in">
                        <h4 className="font-serif font-bold text-indigo-900 mb-3 flex items-center gap-2">
                            <Mail size={18} /> Types de mises à jour
                        </h4>
                        <div className="space-y-3">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" checked={preferences.notify_major_versions} onChange={() => onToggleField('notify_major_versions')} className="w-4 h-4 text-indigo-600 rounded mt-1" />
                                <div>
                                    <div className="font-semibold text-indigo-900">Versions majeures</div>
                                    <div className="text-xs text-indigo-600">Nouvelles fonctionnalités importantes</div>
                                </div>
                            </label>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" checked={preferences.notify_minor_versions} onChange={() => onToggleField('notify_minor_versions')} className="w-4 h-4 text-indigo-600 rounded mt-1" />
                                <div>
                                    <div className="font-semibold text-indigo-900">Versions mineures</div>
                                    <div className="text-xs text-indigo-600">Améliorations et corrections</div>
                                </div>
                            </label>
                        </div>
                    </div>
                )}

                {pushSupported && preferences.subscribe_to_updates && (
                    <div className="bg-white p-4 rounded-lg border border-purple-200 ml-8 shadow-sm animate-fade-in">
                        <h4 className="font-serif font-bold text-purple-900 mb-3 flex items-center gap-2">
                            <Smartphone size={18} /> Notifications dans l'application
                        </h4>
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" checked={preferences.enable_push_notifications} onChange={onTogglePush} className="w-4 h-4 text-purple-600 rounded mt-1" />
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
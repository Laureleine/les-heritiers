// src/components/Auth.js
// Version: 2.5.0
// Build: 2026-01-31 19:40
import React, { useState } from 'react';
import { supabase } from '../config/supabase';
import { Mail, Lock, User as UserIcon, Bell } from 'lucide-react';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [subscribeToUpdates, setSubscribeToUpdates] = useState(false);
  const [notifyMajor, setNotifyMajor] = useState(true);
  const [notifyMinor, setNotifyMinor] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Inscription
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;

        // Créer préférences de notification si abonné
        if (data.user && subscribeToUpdates) {
          await supabase
            .from('user_notification_preferences')
            .insert({
              user_id: data.user.id,
              email: email,
              subscribe_to_updates: true,
              notify_major_versions: notifyMajor,
              notify_minor_versions: notifyMinor
            });
        }
        
        alert('Inscription réussie ! Vérifiez votre email pour confirmer votre compte.');
      } else {
        // Connexion
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif text-amber-900 mb-2">
            Les Héritiers
          </h1>
          <p className="text-xl text-amber-700 italic">Belle Époque • Paris</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-amber-200">
          <div className="flex justify-center mb-6">
            <UserIcon className="text-amber-600" size={48} />
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 px-4 rounded-lg font-serif transition-all ${
                !isSignUp
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 px-4 rounded-lg font-serif transition-all ${
                isSignUp
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              Inscription
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-serif text-amber-900 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none font-serif"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-serif text-amber-900 mb-2">
                <Lock size={16} className="inline mr-2" />
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-2 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none font-serif"
                placeholder="••••••"
              />
            </div>

            {isSignUp && (
              <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
                <label className="flex items-start gap-3 cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    checked={subscribeToUpdates}
                    onChange={(e) => setSubscribeToUpdates(e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded mt-1"
                  />
                  <div>
                    <div className="font-serif font-bold text-blue-900 flex items-center gap-2">
                      <Bell size={16} />
                      M'abonner aux notifications
                    </div>
                    <div className="text-sm text-blue-600">
                      Recevoir un email lors des nouvelles versions
                    </div>
                  </div>
                </label>

                {subscribeToUpdates && (
                  <div className="ml-8 space-y-2 border-l-2 border-blue-300 pl-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifyMajor}
                        onChange={(e) => setNotifyMajor(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-blue-800">Versions majeures (v2.0, v3.0...)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifyMinor}
                        onChange={(e) => setNotifyMinor(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm text-blue-800">Versions mineures (v2.1, v2.2...)</span>
                    </label>
                  </div>
                )}
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-serif text-lg transition-all ${
                loading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              {loading ? 'Chargement...' : isSignUp ? 'Créer mon compte' : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

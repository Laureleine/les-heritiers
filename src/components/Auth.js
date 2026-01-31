// src/components/Auth.js
import React, { useState } from 'react';
import { supabase } from '../config/supabase';
import { Mail, Lock, User as UserIcon } from 'lucide-react';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Inscription
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        
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
          <p className="text-xl text-amber-700 italic">Création de Personnage</p>
          <div className="mt-4 text-sm text-amber-600">Belle Époque • Paris</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-4 border-amber-200">
          <div className="text-center mb-6">
            <UserIcon className="mx-auto text-amber-600 mb-3" size={48} />
            <h2 className="text-2xl font-serif text-amber-900">
              {isSignUp ? 'Créer un compte' : 'Connexion'}
            </h2>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-serif text-amber-900 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-amber-600" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none font-serif"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-serif text-amber-900 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-amber-600" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  minLength={6}
                  className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-600 focus:outline-none font-serif"
                />
              </div>
              {isSignUp && (
                <p className="text-xs text-amber-600 mt-1">
                  Minimum 6 caractères
                </p>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 border-2 border-red-300 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all font-serif text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Chargement...' : isSignUp ? 'S\'inscrire' : 'Se connecter'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
              className="text-amber-700 hover:text-amber-900 font-serif text-sm underline"
            >
              {isSignUp 
                ? 'Déjà un compte ? Se connecter' 
                : 'Pas de compte ? S\'inscrire'}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-amber-600 italic">
          Vos personnages seront synchronisés sur tous vos appareils
        </div>
      </div>
    </div>
  );
}
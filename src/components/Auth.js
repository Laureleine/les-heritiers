// src/components/Auth.js
// Version: 4.1.0 - FIX LOGIN REDIRECT
// Ajout : Redirection garantie après login

import React, { useState } from 'react';
import { supabase } from '../config/supabase';
import { APP_VERSION, BUILD_DATE } from '../version';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [resetMode, setResetMode] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (resetMode) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin,
        });
        if (error) throw error;
        alert('Si cet email existe, un lien de réinitialisation a été envoyé.');
        setResetMode(false);
      } 
      else if (isSignUp) {
        if (!username.trim()) throw new Error("Le nom d'utilisateur est requis.");
        
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username.trim(),
            }
          }
        });
        if (error) throw error;
        alert('Inscription réussie ! Vérifiez votre email pour confirmer.');
      } 
      else {
        // 🔥 FIX ULTIME : Login + Vérification + REDIRECT
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        // ✅ CONFIRMATION SESSION + REDIRECT IMMÉDIAT
        const { data: { session } } = await supabase.auth.getSession();
        console.log('✅ LOGIN SUCCÈS:', session?.user?.email);
        
        // 🚀 FORCE REDIRECT (ignore TOUS les bugs React/Supabase)
        window.location.href = '/';
      }

    } catch (error) {
      console.error("❌ Erreur Auth:", error);
      
      if (error.message.includes('Rate limit exceeded') || error.message.includes('Too many requests')) {
        setError("Trop de tentatives. Attendez ou vérifiez vos spams.");
      } else if (error.message.includes('User already registered')) {
        setError("Email déjà utilisé. Connectez-vous.");
      } else if (error.message.includes('Invalid login credentials')) {
        setError("Email ou mot de passe incorrect.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-amber-50 p-8 text-center border-b border-amber-100">
          <h1 className="text-4xl font-serif text-amber-900 mb-2">Les Héritiers</h1>
          <div className="text-[10px] text-gray-400 uppercase tracking-widest">
            v{APP_VERSION} • {BUILD_DATE}
          </div>
        </div>

        <div className="p-8">
          {/* Onglets Connexion/Inscription */}
          {!resetMode && (
            <div className="flex mb-6 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setIsSignUp(false)} 
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                  !isSignUp ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Connexion
              </button>
              <button 
                onClick={() => setIsSignUp(true)} 
                className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                  isSignUp ? 'bg-white text-amber-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Inscription
              </button>
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            {/* Username (inscription seulement) */}
            {isSignUp && !resetMode && (
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                required
              />
            </div>

            {/* Password */}
            {!resetMode && (
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  required
                />
              </div>
            )}

            {/* Erreur */}
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            {/* Bouton */}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-serif font-bold hover:bg-amber-700 transition-all shadow-md transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Connexion...' : 
               resetMode ? 'Envoyer le lien' : 
               isSignUp ? 'Créer mon compte' : 'Se connecter'}
            </button>
          </form>

          {/* Mot de passe oublié */}
          <div className="mt-4 text-center">
            {!resetMode ? (
              <button 
                onClick={() => setResetMode(true)} 
                className="text-sm text-gray-500 hover:text-amber-700 underline"
              >
                Mot de passe oublié ?
              </button>
            ) : (
              <button 
                onClick={() => setResetMode(false)} 
                className="text-sm text-gray-500 hover:text-amber-700 underline"
              >
                Retour à la connexion
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

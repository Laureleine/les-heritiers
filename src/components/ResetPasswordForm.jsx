import React, { useState } from 'react';
import { supabase } from '../config/supabase';

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    if (password !== confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setLoading(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    if (err) {
      setError(err.message);
      setLoading(false);
      return;
    }
    setDone(true);
    setTimeout(() => supabase.auth.signOut(), 2000);
  };

  if (done) {
    return (
      <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-amber-200 max-w-sm">
        <p className="text-green-700 font-bold font-serif text-lg">Mot de passe modifié !</p>
        <p className="text-sm text-stone-600 mt-2">Reconnectez-vous avec votre nouveau mot de passe.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-amber-200 w-full max-w-sm space-y-4">
      <h2 className="text-2xl font-serif font-bold text-amber-900 text-center">Nouveau mot de passe</h2>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <div>
        <label className="text-sm font-medium text-stone-700 block">Nouveau mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
          className="mt-1 w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          autoFocus
        />
      </div>
      <div>
        <label className="text-sm font-medium text-stone-700 block">Confirmer le mot de passe</label>
        <input
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
          className="mt-1 w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-700 text-white py-2 rounded-lg font-bold hover:bg-amber-800 transition-colors disabled:opacity-50"
      >
        {loading ? 'Modification...' : 'Modifier le mot de passe'}
      </button>
    </form>
  );
}

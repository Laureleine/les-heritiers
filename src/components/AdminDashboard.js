// src/components/AdminDashboard.js

import React, { useState } from 'react';
import { Shield, ArrowLeft, Crown, BarChart2, Award } from 'lucide-react';

import TabUsers from './admin/TabUsers';
import TabStats from './admin/TabStats';
import TabForgeTitres from './admin/TabForgeTitres';

export default function AdminDashboard({ session, onBack }) {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-2">
          <Shield className="text-amber-600" /> Communauté & Métriques
        </h2>
        <button onClick={onBack} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2 shadow-sm font-bold font-serif transition-colors">
          <ArrowLeft size={16} /> Retour
        </button>
      </div>

      {/* Onglets de navigation */}
      <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
        <button onClick={() => setActiveTab('users')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'users' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <Crown size={18} /> Utilisateurs
        </button>
        <button onClick={() => setActiveTab('stats')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'stats' ? 'text-blue-900 border-blue-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <BarChart2 size={18} /> Métriques
        </button>
        <button onClick={() => setActiveTab('titres')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'titres' ? 'text-purple-900 border-purple-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
          <Award size={18} /> Forge des Titres
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      {activeTab === 'users' && <TabUsers session={session} />}
      {activeTab === 'stats' && <TabStats />}
      {activeTab === 'titres' && <TabForgeTitres />}
    </div>
  );
}
// src/components/OutilsHub.jsx
import React from 'react';
import { ArrowLeft, Globe, Map, Dices } from '../config/icons';

const OUTILS = [
  {
    id: 'actualite',
    titre: 'La Gazette',
    description: 'Archives de presse de la Belle Époque — articles originaux numérisés depuis 1899.',
    icon: Globe,
    couleur: 'emerald',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    hover: 'hover:bg-emerald-100 hover:border-emerald-300',
    iconColor: 'text-emerald-700',
  },
  {
    id: 'carte',
    titre: 'Carte de Paris',
    description: 'Paris 1900 interactif — rues, quartiers et lieux notables de la Belle Époque.',
    icon: Map,
    couleur: 'stone',
    bg: 'bg-stone-50',
    border: 'border-stone-200',
    hover: 'hover:bg-stone-100 hover:border-stone-300',
    iconColor: 'text-stone-600',
  },
  {
    id: 'generateur',
    titre: 'Générateur de PNJ',
    description: 'Créez en un clic un personnage non-joueur complet — identité, traits, secret, motivations.',
    icon: Dices,
    couleur: 'teal',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    hover: 'hover:bg-teal-100 hover:border-teal-300',
    iconColor: 'text-teal-700',
  },
];

export default function OutilsHub({ onBack, onOpenActualite, onOpenCarte, onOpenGenerateur }) {
  const handlers = { actualite: onOpenActualite, carte: onOpenCarte, generateur: onOpenGenerateur };

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Outils du Maître de Jeu</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-stone-500 font-serif italic mb-6 text-sm">
          Ressources et générateurs pour animer vos parties.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {OUTILS.map(({ id, titre, description, icon: Icon, bg, border, hover, iconColor }) => (
            <button
              key={id}
              onClick={handlers[id]}
              className={`text-left w-full rounded-2xl border-2 p-5 ${bg} ${border} ${hover} transition-all shadow-sm group`}
            >
              <div className={`mb-3 ${iconColor}`}>
                <Icon size={28} />
              </div>
              <h2 className="font-serif font-bold text-stone-900 text-base mb-1 group-hover:underline underline-offset-2">
                {titre}
              </h2>
              <p className="text-sm text-stone-500 font-serif leading-snug">{description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// src/components/Changelog.js
import React from 'react';
import { VERSION_HISTORY } from '../version';
import { ArrowLeft } from 'lucide-react';

export default function Changelog({ onBack }) {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-serif"
      >
        <ArrowLeft size={18} /> Retour
      </button>

      <h2 className="text-3xl font-serif text-amber-900 mb-8 border-b-2 border-amber-200 pb-4">
        Journal des Changements
      </h2>

      <div className="space-y-8">
        {VERSION_HISTORY.map((version, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-amber-100 shadow-sm relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${version.type === 'major' ? 'bg-amber-600' : version.type === 'minor' ? 'bg-blue-500' : 'bg-gray-300'}`} />
            
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xl font-bold text-gray-900">v{version.version}</h3>
              <span className="text-sm text-gray-500 font-serif italic">{version.date}</span>
            </div>

            <ul className="space-y-2">
              {version.changes.map((change, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
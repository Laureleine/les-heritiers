import React from 'react';

export function EmptyState({ icon: Icon, message, pulse = false, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center h-full text-stone-400 space-y-4${pulse ? ' animate-pulse' : ''}${className ? ' ' + className : ''}`}>
      {Icon && <Icon size={48} className="opacity-20" />}
      <p className="font-serif italic text-lg text-center">{message}</p>
    </div>
  );
}

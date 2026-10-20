import React from 'react';

export default function SectionDivider({ motif = 'ouroboros-simple', className = '' }) {
  return (
    <div className={`flex items-center gap-3 my-6 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-lh-or opacity-40" />
      <img
        src={`/assets/culs-de-lampe/${motif}.png`}
        alt=""
        className="h-8 w-auto opacity-85"
      />
      <div className="flex-1 h-px bg-lh-or opacity-40" />
    </div>
  );
}

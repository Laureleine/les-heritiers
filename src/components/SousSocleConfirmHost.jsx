// src/components/SousSocleConfirmHost.jsx
// Affiche la confirmation demandée par requestSousSocleConfirm (utils/sousSocle).
import React, { useEffect, useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { SOUS_SOCLE_EVENT } from '../utils/sousSocle';

export default function SousSocleConfirmHost() {
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const onRequest = (e) => setRequest(e.detail);
    window.addEventListener(SOUS_SOCLE_EVENT, onRequest);
    return () => window.removeEventListener(SOUS_SOCLE_EVENT, onRequest);
  }, []);

  if (!request) return null;
  return (
    <ConfirmModal
      isOpen
      title={request.title || 'Toucher au personnage scellé'}
      message={request.message}
      warnings={request.warnings || []}
      confirmText="Oui, je confirme"
      onConfirm={() => { request.onConfirm(); setRequest(null); }}
      onCancel={() => setRequest(null)}
    />
  );
}

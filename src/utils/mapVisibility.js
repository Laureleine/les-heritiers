// src/utils/mapVisibility.js
// Filtrage des POI de la carte selon la Vue du Docte (Cercle / Privée)

export function getDocteCircles(cercles, userId) {
  return cercles.filter(c => c.docte_id === userId);
}

export function getVisiblePoints(points, { isDocte, docteViewMode, docteSelectedCercleId, userId }) {
  if (!isDocte) return points;
  return points.filter(pt =>
    docteViewMode === 'prive'
      ? pt.visibilite === 'prive' && pt.created_by === userId
      : pt.visibilite === 'public' || (pt.visibilite === 'cercle' && pt.visibilite_cercle_id === docteSelectedCercleId)
  );
}

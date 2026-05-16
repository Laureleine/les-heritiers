// src/utils/authRoles.js
// Centralisation DRY des vérifications de rôles utilisateur.
// Toute la logique de permission (super_admin, gardien) passe par ici.

/**
 * Résout le rôle depuis un userProfile ou une string brute.
 * Usage : resolveRole(userProfile) → 'super_admin' | 'gardien' | 'user' | null
 *         resolveRole('super_admin') → 'super_admin'
 */
function resolveRole(userProfileOrRole) {
  if (typeof userProfileOrRole === 'string') return userProfileOrRole;
  return userProfileOrRole?.profile?.role || userProfileOrRole?.role || null;
}

/**
 * Vérifie si l'utilisateur est super_admin.
 */
export function isSuperAdmin(userProfileOrRole) {
  return resolveRole(userProfileOrRole) === 'super_admin';
}

/**
 * Vérifie si l'utilisateur est gardien.
 */
export function isGardien(userProfileOrRole) {
  return resolveRole(userProfileOrRole) === 'gardien';
}

/**
 * Vérifie si l'utilisateur est admin (super_admin ou gardien).
 */
export function isAdmin(userProfileOrRole) {
  const role = resolveRole(userProfileOrRole);
  return role === 'super_admin' || role === 'gardien';
}

/**
 * Vérifie si l'utilisateur n'est PAS admin (utilisateur standard).
 */
export function isNotAdmin(userProfileOrRole) {
  return !isAdmin(userProfileOrRole);
}

/**
 * Vérifie si l'utilisateur a un rôle minimum requis.
 * Hiérarchie : super_admin > gardien > user
 */
export function hasMinimumRole(userProfileOrRole, minimumRole) {
  const role = resolveRole(userProfileOrRole);
  if (!role) return false;
  if (minimumRole === 'super_admin') return role === 'super_admin';
  if (minimumRole === 'gardien') return role === 'super_admin' || role === 'gardien';
  if (minimumRole === 'user') return true;
  return false;
}

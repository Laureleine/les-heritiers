// src/hooks/useFeatureFlag.js
import { useCharacter } from '../context/CharacterContext';
import { isSuperAdmin } from '../utils/authRoles';

// On a retiré le "flagName" puisqu'on donne un accès global aux features secrètes
export const useFeatureFlag = () => {
  const { userProfile } = useCharacter();

  // 🛡️ Le compte Super-Admin (Toi) voit TOUT par défaut
  if (isSuperAdmin(userProfile)) return true;

  // 🔍 On vérifie si le joueur fait partie du cercle très fermé des bêta-testeurs
  return userProfile?.profile?.is_initiated === true;
};
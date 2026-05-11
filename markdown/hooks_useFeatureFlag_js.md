// src/hooks/useFeatureFlag.js
import { useCharacter } from '../context/CharacterContext';

// On a retiré le "flagName" puisqu'on donne un accès global aux features secrètes
export const useFeatureFlag = () => {
  const { userProfile } = useCharacter();

  // 🛡️ Le compte Super-Admin (Toi) voit TOUT par défaut
  if (userProfile?.profile?.role === 'super_admin') return true;

  // 🔍 On vérifie si le joueur fait partie du cercle très fermé des bêta-testeurs
  return userProfile?.profile?.is_initiated === true;
};
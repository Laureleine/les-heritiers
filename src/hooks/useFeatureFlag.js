// 15.0.0

import { useCharacter } from '../context/CharacterContext'; // Ou là où se trouve ton userProfile

export const useFeatureFlag = (flagName) => {
  // On récupère le profil utilisateur global (que tu as mis en place dans App.js)
  const { userProfile } = useCharacter(); // Adapte si userProfile est dans un AuthContext séparé

  // 🛡️ Le compte Super-Admin (Toi et Marie Cha') voit TOUT par défaut
  if (userProfile?.role === 'super_admin') return true;

  // 🔍 On fouille le trousseau de clés
  const features = userProfile?.profile?.unlocked_features || [];
  
  return features.includes(flagName);
};
// src/utils/errorHandler.js
// 9.6.0

export const translateError = (error) => {
  if (!error) return "Une perturbation magique inconnue s'est produite.";

  const msg = error.message || '';
  const code = error.code || '';

  // --- ERREURS D'AUTHENTIFICATION ---
  if (msg.includes('Invalid login credentials')) 
    return "Les Docteurs refusent cet accès. Vos identifiants sont erronés.";
  if (msg.includes('User already registered')) 
    return "Ce nom est déjà gravé dans nos registres. Veuillez vous connecter.";
  if (msg.includes('Rate limit exceeded') || msg.includes('Too many requests')) 
    return "Les rouages du Télégraphe surchauffent ! Attendez quelques instants avant de réessayer.";
  if (msg.includes('Password should be at least')) 
    return "Votre mot de passe est trop faible pour repousser les chasseurs (6 caractères minimum).";
  if (msg.includes('JWT') || msg.includes('expired')) 
    return "Votre sceau de protection a expiré. Veuillez refermer et rouvrir le grimoire (Reconnexion).";

  // --- ERREURS DE BASE DE DONNÉES (Codes PostgREST) ---
  if (code === '23505') 
    return "Une anomalie temporelle : cet élément existe déjà dans nos archives !";
  if (code === '23503') 
    return "Cette action briserait un lien sacré dans la base de données (Violation de clé étrangère).";
  if (code === '42601') 
    return "La formule incantatoire est imparfaite (Erreur de syntaxe SQL). Les Gardiens ont été prévenus.";
  if (code === 'PGRST116') 
    return "L'archive que vous cherchez s'est évaporée dans les limbes (Élément introuvable).";

  // --- ERREURS RÉSEAU ---
  if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) 
    return "Les fluides éthérés sont perturbés. Impossible de contacter les archives centrales (Erreur réseau).";

  // --- PAR DÉFAUT ---
  return `Anomalie détectée : ${msg}`;
};
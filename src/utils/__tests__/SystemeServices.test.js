jest.mock('../../config/supabase', () => ({
  supabase: {
    from: jest.fn(),
    rpc: jest.fn(),
    functions: { invoke: jest.fn() },
    auth: { getSession: jest.fn() },
  },
}));

import { translateError, getVersionType } from '../SystemeServices';

describe('translateError', () => {
  it('retourne le message par défaut pour null', () => {
    expect(translateError(null)).toBe("Une perturbation magique inconnue s'est produite.");
  });

  it('retourne le message par défaut pour undefined', () => {
    expect(translateError(undefined)).toBe("Une perturbation magique inconnue s'est produite.");
  });

  it('traduit "Invalid login credentials"', () => {
    expect(translateError({ message: 'Invalid login credentials' })).toBe('Les Docteurs refusent cet accès. Vos identifiants sont erronés.');
  });

  it('traduit "Email rate limit exceeded"', () => {
    expect(translateError({ message: 'Email rate limit exceeded' })).toBe('Les rouages du Télégraphe surchauffent ! Attendez quelques instants avant de réessayer.');
  });

  it('traduit "Too many requests"', () => {
    expect(translateError({ message: 'Too many requests' })).toBe('Les rouages du Télégraphe surchauffent ! Attendez quelques instants avant de réessayer.');
  });

  it('traduit "User already registered"', () => {
    expect(translateError({ message: 'User already registered' })).toBe('Ce nom est déjà gravé dans nos registres. Veuillez vous connecter.');
  });

  it('traduit "password should be at least"', () => {
    expect(translateError({ message: 'password should be at least 6 characters' })).toBe('Votre mot de passe est trop faible pour repousser les chasseurs (8 caractères minimum, une majuscule et un chiffre requis).');
  });

  it('traduit "JWT expired"', () => {
    expect(translateError({ message: 'JWT expired' })).toBe('Votre sceau de protection a expiré. Veuillez refermer et rouvrir le grimoire (Reconnexion).');
  });

  it('traduit "Failed to fetch"', () => {
    expect(translateError({ message: 'Failed to fetch' })).toBe('Les fluides éthérés sont perturbés. Impossible de contacter les archives centrales (Erreur réseau).');
  });

  it('traduit "NetworkError"', () => {
    expect(translateError({ message: 'NetworkError' })).toBe('Les fluides éthérés sont perturbés. Impossible de contacter les archives centrales (Erreur réseau).');
  });

  it('traduit le code 23505', () => {
    expect(translateError({ code: '23505', message: 'duplicate key' })).toBe('Une anomalie temporelle : cet élément existe déjà dans nos archives !');
  });

  it('traduit le code 23503', () => {
    expect(translateError({ code: '23503' })).toBe('Cette action briserait un lien sacré dans la base de données (Violation de clé étrangère).');
  });

  it('traduit le code 42601', () => {
    expect(translateError({ code: '42601' })).toBe('La formule incantatoire est imparfaite (Erreur de syntaxe SQL). Les Gardiens ont été prévenus.');
  });

  it('traduit le code PGRST116', () => {
    expect(translateError({ code: 'PGRST116' })).toBe("L'archive que vous cherchez s'est évaporée dans les limbes (Élément introuvable).");
  });

  it('traduit "Row-level security"', () => {
    expect(translateError({ message: 'row-level security policy violation' })).toBe('Les Gardiens vous refusent l\'accès. Votre session a expiré en arrière-plan, veuillez vous déconnecter puis vous reconnecter.');
  });

  it('traduit "for security purposes"', () => {
    expect(translateError({ message: 'For security purposes, you can not request this after' })).toBe("Les Gardiens du Silence surveillent ce canal. Par sécurité, faites profil bas et patientez une minute avant d'envoyer une nouvelle missive.");
  });

  it('traduit "invalid email"', () => {
    expect(translateError({ message: 'invalid email' })).toBe('Les pigeons voyageurs tournent en rond ! L\'adresse électronique fournie semble invalide.');
  });

  it('retourne le message brut pour erreur inconnue', () => {
    expect(translateError({ message: 'Erreur mystérieuse' })).toBe('Anomalie détectée : Erreur mystérieuse');
  });

  it('gère un objet error vide', () => {
    expect(translateError({})).toBe('Anomalie détectée : ');
  });
});

describe('getVersionType', () => {
  it('retourne "major" pour x.y.0', () => {
    expect(getVersionType('15.18.0')).toBe('major');
  });

  it('retourne "minor" pour x.y.z (z > 0)', () => {
    expect(getVersionType('15.18.1')).toBe('minor');
    expect(getVersionType('15.18.42')).toBe('minor');
  });

  it('retourne "minor" pour une chaîne malformée', () => {
    expect(getVersionType('abc')).toBe('minor');
    expect(getVersionType('15.18')).toBe('minor');
    expect(getVersionType('')).toBe('minor');
  });
});

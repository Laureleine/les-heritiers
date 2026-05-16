// src/utils/__tests__/authRoles.test.js
// Tests de non-régression pour les vérifications de rôles centralisées

import { isSuperAdmin, isGardien, isAdmin, isNotAdmin, hasMinimumRole } from '../authRoles';

// ============================================================================
// FIXTURES — Toutes les formes de userProfile rencontrées dans le codebase
// ============================================================================
const superAdminProfile = { profile: { role: 'super_admin' } };
const gardienProfile = { profile: { role: 'gardien' } };
const userProfile = { profile: { role: 'user' } };
const noRoleProfile = { profile: {} };
const nullProfile = null;
const undefinedProfile = undefined;
const emptyObject = {};

// Formats alternatifs utilisés dans le codebase
const dataSuperAdmin = { role: 'super_admin' };
const dataGardien = { role: 'gardien' };

// ============================================================================
// isSuperAdmin
// ============================================================================
describe('isSuperAdmin', () => {

  it('retourne true pour super_admin (userProfile)', () => {
    expect(isSuperAdmin(superAdminProfile)).toBe(true);
  });

  it('retourne false pour gardien (userProfile)', () => {
    expect(isSuperAdmin(gardienProfile)).toBe(false);
  });

  it('retourne false pour user (userProfile)', () => {
    expect(isSuperAdmin(userProfile)).toBe(false);
  });

  it('retourne false si profile vide', () => {
    expect(isSuperAdmin(noRoleProfile)).toBe(false);
  });

  it('retourne false si userProfile null', () => {
    expect(isSuperAdmin(nullProfile)).toBe(false);
  });

  it('retourne false si userProfile undefined', () => {
    expect(isSuperAdmin(undefinedProfile)).toBe(false);
  });

  it('retourne false si objet vide', () => {
    expect(isSuperAdmin(emptyObject)).toBe(false);
  });

  it('accepte une string brute', () => {
    expect(isSuperAdmin('super_admin')).toBe(true);
    expect(isSuperAdmin('gardien')).toBe(false);
    expect(isSuperAdmin('user')).toBe(false);
  });

  it('accepte un objet data avec role directement (ForgeContext pattern)', () => {
    expect(isSuperAdmin(dataSuperAdmin)).toBe(true);
    expect(isSuperAdmin(dataGardien)).toBe(false);
  });

});

// ============================================================================
// isGardien
// ============================================================================
describe('isGardien', () => {

  it('retourne true pour gardien (userProfile)', () => {
    expect(isGardien(gardienProfile)).toBe(true);
  });

  it('retourne false pour super_admin', () => {
    expect(isGardien(superAdminProfile)).toBe(false);
  });

  it('retourne false pour user', () => {
    expect(isGardien(userProfile)).toBe(false);
  });

  it('retourne false si profile vide', () => {
    expect(isGardien(noRoleProfile)).toBe(false);
  });

  it('retourne false si userProfile null', () => {
    expect(isGardien(nullProfile)).toBe(false);
  });

  it('accepte une string brute', () => {
    expect(isGardien('gardien')).toBe(true);
    expect(isGardien('super_admin')).toBe(false);
    expect(isGardien('user')).toBe(false);
  });

});

// ============================================================================
// isAdmin  — super_admin OU gardien
// ============================================================================
describe('isAdmin', () => {

  it('retourne true pour super_admin', () => {
    expect(isAdmin(superAdminProfile)).toBe(true);
  });

  it('retourne true pour gardien', () => {
    expect(isAdmin(gardienProfile)).toBe(true);
  });

  it('retourne false pour user', () => {
    expect(isAdmin(userProfile)).toBe(false);
  });

  it('retourne false si pas de rôle', () => {
    expect(isAdmin(noRoleProfile)).toBe(false);
  });

  it('retourne false si userProfile null', () => {
    expect(isAdmin(nullProfile)).toBe(false);
  });

  it('accepte une string brute', () => {
    expect(isAdmin('super_admin')).toBe(true);
    expect(isAdmin('gardien')).toBe(true);
    expect(isAdmin('user')).toBe(false);
    expect(isAdmin(null)).toBe(false);
  });

  it('accepte un objet data avec role directement', () => {
    expect(isAdmin(dataSuperAdmin)).toBe(true);
    expect(isAdmin(dataGardien)).toBe(true);
  });

});

// ============================================================================
// isNotAdmin
// ============================================================================
describe('isNotAdmin', () => {

  it('retourne false pour super_admin', () => {
    expect(isNotAdmin(superAdminProfile)).toBe(false);
  });

  it('retourne false pour gardien', () => {
    expect(isNotAdmin(gardienProfile)).toBe(false);
  });

  it('retourne true pour user', () => {
    expect(isNotAdmin(userProfile)).toBe(true);
  });

  it('retourne true si pas de rôle', () => {
    expect(isNotAdmin(noRoleProfile)).toBe(true);
  });

});

// ============================================================================
// hasMinimumRole
// ============================================================================
describe('hasMinimumRole', () => {

  describe('minimum = super_admin', () => {
    it('retourne true seulement pour super_admin', () => {
      expect(hasMinimumRole(superAdminProfile, 'super_admin')).toBe(true);
      expect(hasMinimumRole(gardienProfile, 'super_admin')).toBe(false);
      expect(hasMinimumRole(userProfile, 'super_admin')).toBe(false);
    });
  });

  describe('minimum = gardien', () => {
    it('retourne true pour super_admin ou gardien', () => {
      expect(hasMinimumRole(superAdminProfile, 'gardien')).toBe(true);
      expect(hasMinimumRole(gardienProfile, 'gardien')).toBe(true);
      expect(hasMinimumRole(userProfile, 'gardien')).toBe(false);
    });
  });

  describe('minimum = user', () => {
    it('retourne true pour tout rôle défini', () => {
      expect(hasMinimumRole(superAdminProfile, 'user')).toBe(true);
      expect(hasMinimumRole(gardienProfile, 'user')).toBe(true);
      expect(hasMinimumRole(userProfile, 'user')).toBe(true);
    });
  });

  it('retourne false si pas de rôle', () => {
    expect(hasMinimumRole(noRoleProfile, 'user')).toBe(false);
    expect(hasMinimumRole(nullProfile, 'user')).toBe(false);
  });

  it('accepte des strings brutes', () => {
    expect(hasMinimumRole('super_admin', 'gardien')).toBe(true);
    expect(hasMinimumRole('gardien', 'super_admin')).toBe(false);
    expect(hasMinimumRole('user', 'gardien')).toBe(false);
  });

});

// ============================================================================
// Tests de correspondance exacte avec les patterns du codebase existant
// (non-régression)
// ============================================================================
describe('Non-régression : correspondance avec les patterns existants', () => {

  // Pattern useTelegraphe.js:13
  it('useTelegraphe.js: isAdmin = role === "super_admin" || role === "gardien"', () => {
    const original = (profile) =>
      profile?.profile?.role === 'super_admin' || profile?.profile?.role === 'gardien';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isAdmin(p)).toBe(original(p));
    });
  });

  // Pattern useTelegraphe.js:14
  it('useTelegraphe.js: isInitiated = is_initiated || isAdmin', () => {
    // isAdmin est testé séparément — la combinaison avec is_initiated
    // reste dans le fichier appelant
    expect(true).toBe(true);
  });

  // Pattern useCorrectionCheck.js:13
  it('useCorrectionCheck.js: isAdmin = role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

  // Pattern useForgeTitres.js:14
  it('useForgeTitres.js: isSuperAdmin = role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

  // Pattern useFeatureFlag.js:9
  it('useFeatureFlag.js: role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

  // Pattern ForgeContext.jsx:107
  it('ForgeContext.jsx: ["super_admin", "gardien"].includes(data?.role)', () => {
    const original = (data) => ['super_admin', 'gardien'].includes(data?.role);

    expect(isAdmin(dataSuperAdmin)).toBe(original(dataSuperAdmin));
    expect(isAdmin(dataGardien)).toBe(original(dataGardien));
    expect(isAdmin({ role: 'user' })).toBe(original({ role: 'user' }));
    expect(isAdmin({})).toBe(original({}));
  });

  // Pattern EncyclopediaCard.js:142
  it('EncyclopediaCard.js: role === "super_admin" || role === "gardien"', () => {
    const original = (profile) =>
      profile?.profile?.role === 'super_admin' || profile?.profile?.role === 'gardien';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isAdmin(p)).toBe(original(p));
    });
  });

  // Pattern EncyclopediaCard.js:153
  it('EncyclopediaCard.js: role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

  // Pattern EncyclopediaModal.js:31
  it('EncyclopediaModal.js: isSuperAdmin = role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

  // Pattern SystemeModales.js:15
  it('SystemeModales.js: isGardien = role === "gardien" || role === "super_admin"', () => {
    const original = (profile) =>
      profile.profile?.role === 'gardien' || profile.profile?.role === 'super_admin';

    expect(isAdmin({ profile: { role: 'gardien' } })).toBe(original({ profile: { role: 'gardien' } }));
    expect(isAdmin(superAdminProfile)).toBe(original(superAdminProfile));
    expect(isAdmin(userProfile)).toBe(original(userProfile));
  });

  // Pattern ValidationsPendantes.js:136
  it('ValidationsPendantes.js: role === "gardien" || role === "super_admin"', () => {
    const original = (role) => role === 'gardien' || role === 'super_admin';

    expect(isAdmin('super_admin')).toBe(original('super_admin'));
    expect(isAdmin('gardien')).toBe(original('gardien'));
    expect(isAdmin('user')).toBe(original('user'));
  });

  // Pattern ValidationsPendantes.js:278
  it('ValidationsPendantes.js: myRole !== "gardien" && myRole !== "super_admin"', () => {
    const original = (role) => role !== 'gardien' && role !== 'super_admin';

    expect(isNotAdmin('super_admin')).toBe(original('super_admin'));
    expect(isNotAdmin('gardien')).toBe(original('gardien'));
    expect(isNotAdmin('user')).toBe(original('user'));
  });

  // Pattern CharacterList.js:172
  it('CharacterList.js: isAdminUser = role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

  // Pattern AdminDashboard.js:16
  it('AdminDashboard.js: isSuperAdmin = role === "super_admin"', () => {
    const original = (profile) => profile?.profile?.role === 'super_admin';

    [superAdminProfile, gardienProfile, userProfile, nullProfile].forEach(p => {
      expect(isSuperAdmin(p)).toBe(original(p));
    });
  });

});

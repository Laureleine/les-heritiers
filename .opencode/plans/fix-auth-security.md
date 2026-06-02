# Plan : Correction sécurité inscription

## Contexte
- 10 utilisateurs orphelins (auth sans profil) découverts, dont `tom.mariage@gmail.com` (Malronce)
- Problème #1 : Anti-énumération cassée — email existant → erreur rouge (fuite d'information)
- Problème #2 : Aucun fallback si trigger `handle_new_user` ne crée pas le profil
- Problème #3 : Mot de passe 6 caractères minimum (trop faible)

## État actuel
- 258 tests pass, 20 suites
- 10 profils orphelins déjà créés manuellement
- Emails de notification déjà envoyés

## Modifications à apporter

### 1. `src/components/Auth.js` — Anti-énumération (lignes 61-64)

**Avant :**
```js
if (data?.user && data.user.identities && data.user.identities.length === 0) {
   throw new Error("User already registered");
}
```

**Après :**
```js
if (data?.user && data.user.identities?.length === 0) {
   setEmailSent(true);
   return;
}
```

Effet : email existant et email nouveau → même écran "Missive expédiée !"

### 2. `src/components/Auth.js` — Mot de passe renforcé (ligne 47)

**Avant :**
```js
if (password.length < 6) throw ...
```

**Après :**
```js
if (password.length < 8) throw ...
```

### 3. `src/hooks/useAppInit.js` — Fallback profil manquant (après ligne 67)

**Ajouter dans le bloc `if (mounted)` après la ligne 67 :**
```js
if (!profileData) {
  const username = activeSession.user.user_metadata?.username || 'Héritier';
  const { data: newProfile } = await supabase
    .from('profiles')
    .insert({ id: activeSession.user.id, username, role: 'user' })
    .select()
    .single();
  if (newProfile) setUserProfile({ ...activeSession.user, profile: newProfile });
}
```

### 4. Tests de non-régression — Créer `src/components/__tests__/Auth.test.js`

Tests couvrant :
- ✅ Mot de passe < 8 caractères rejeté
- ✅ Mot de passe >= 8 caractères accepté
- ✅ Anti-énumération : email existant → "Missive expédiée !" sans erreur
- ✅ Anti-énumération : email nouveau → "Missive expédiée !"
- ✅ Username vide rejeté
- ✅ Erreur Supabase traduite
- ✅ Connexion appelle signInWithPassword
- ✅ Reset password appelle resetPasswordForEmail

### 5. Tests de non-régression — Créer `src/hooks/__tests__/useAppInit.test.js`

Tests couvrant :
- ✅ Session sans profil → fallback insert + setUserProfile
- ✅ Session avec profil → normal flow

## Vérification finale
- `npx react-scripts test --watchAll=false` → 258+ tests verts
- Pas de régression

## Fichiers impactés
| Fichier | Type |
|---|---|
| `src/components/Auth.js` | Modifié |
| `src/hooks/useAppInit.js` | Modifié |
| `src/components/__tests__/Auth.test.js` | Créé |
| `src/hooks/__tests__/useAppInit.test.js` | Créé |

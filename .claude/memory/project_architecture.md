---
name: project-architecture
description: "Stack technique, structure du projet, patterns clés"
metadata: 
  node_type: memory
  type: project
  originSessionId: 0cbe6334-5cf1-4965-801b-dfff587365a8
---

## Stack

- **Frontend** : React 19 + React Router 7 + Tailwind CSS, déployé sur Vercel
- **Backend** : Supabase (PostgreSQL 17, RLS, Edge Functions Deno)
- **Emails** : Resend (Edge Function `send-email` déployée, nécessite secret `RESEND_API_KEY`)
- **Repo** : https://github.com/Laureleine/les-heritiers.git
- **Supabase project ID (prod)** : `cijtzdfwrmbftmwookac`. L'ancien projet `uvckugcixiugysnsbekb` a été migré et abandonné fin juin 2026 (voir REX.md "Session 28 Juin 2026") — ne plus l'utiliser, y compris dans un éventuel MCP mal configuré.
- **App URL** : https://heritiers.app (variable `REACT_APP_URL`)

## Structure src/

- `config/supabase.js` — client Supabase (propre, sans logs ni exposition globale depuis v15.18.0)
- `context/CharacterContext.jsx` — state principal personnage + gameData
- `context/ForgeContext.jsx` — Registre de la Forge (tickets admin), vérifie rôle pour actions destructives
- `hooks/useAppInit.js` — initialisation session + chargement gameData
- `utils/supabaseStorage.js` — CRUD personnages, cache offline localStorage
- `utils/SystemeServices.js` — notifications, emails, logger conditionnel
- `components/admin/` — TabUsers, TabStats, TabForgeTitres, TabRepairJournaux, **TabNotifications**
- `components/AdminDashboard.js` — routing des onglets admin

## Versioning

Format : `MAJOR.MINOR.PATCH` — ex: `15.18.1`
- Fichier : `src/version.js`, tableau `VERSION_HISTORY`
- `APP_VERSION` = `VERSION_HISTORY[0].version.split(' - ')[0]`
- `getVersionType()` : patch `.0` → "major", sinon "minor" (pour les notifications email)

## Rôles utilisateurs

`super_admin` > `gardien` > `docte` > `is_initiated` > user classique
- Vérification côté app : `userProfile?.profile?.role === 'super_admin'`
- Vérification côté DB : via `profiles` table dans les RLS/RPC

## Patterns admin pour contourner RLS

Toute requête admin qui agrège des données cross-users doit passer par une fonction SQL `SECURITY DEFINER` (ex: `get_admin_stats`, `get_notification_stats`). Une requête directe depuis le frontend est filtrée par RLS même pour super_admin.

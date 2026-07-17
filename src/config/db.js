// src/config/db.js
import { supabase } from './supabase';
import { localDb } from './localDb';
import { enqueueOperation } from '../utils/syncQueue';

// Tables dont les données viennent de game_data (clé = nom de table Supabase)
const GAME_DATA_TABLES = new Set([
  'profils', 'badges', 'competences', 'competences_futiles',
  'social_items', 'sorts', 'encyclopedia_refs',
  'fairy_types',
]);

// Tables user-data (filtrées par user_id en Dexie)
const USER_DATA_TABLES = new Set([
  'map_points', 'chroniques_heritiers', 'ombre_consequences',
  'sessions_jeu', 'session_presents', 'heritier_notes',
  'bug_reports', 'indices_verites', 'correction_requests',
]);

// Tables avec écriture offline
const WRITABLE_TABLES = new Set([
  'characters', 'heritier_notes', 'bug_reports', 'xp_transactions',
]);

function isOnline() {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
}

// ────────────────────────────────────────────────────────────────────────────
// Builder offline : capture les filtres et exécute sur Dexie
// ────────────────────────────────────────────────────────────────────────────
class OfflineBuilder {
  constructor(table, userId) {
    this._table = table;
    this._userId = userId;
    this._eqFilters = {};
    this._op = 'select';
    this._payload = null;
    this._isSingle = false;
  }

  select() { return this; }
  eq(col, val) { this._eqFilters[col] = val; return this; }
  or() { return this; }
  in() { return this; }
  order() { return this; }
  filter() { return this; }
  limit() { return this; }

  single() { this._isSingle = true; return this; }

  insert(payload) {
    this._op = 'insert';
    this._payload = Array.isArray(payload) ? payload[0] : payload;
    return this;
  }

  update(payload) {
    this._op = 'update';
    this._payload = payload;
    return this;
  }

  delete() { this._op = 'delete'; return this; }

  // Pour les opérations chaînées après insert/update (ex: .insert({}).select().single())
  upsert(payload) {
    this._op = 'upsert';
    this._payload = payload;
    return this;
  }

  async _execute() {
    switch (this._op) {
      case 'select': return this._read();
      case 'insert': return this._insert();
      case 'update': return this._update();
      case 'upsert': return this._upsert();
      case 'delete': return { data: null, error: { message: 'Suppression non supportée hors ligne' } };
      default:       return { data: null, error: { message: 'Opération inconnue' } };
    }
  }

  async _read() {
    try {
      if (GAME_DATA_TABLES.has(this._table)) {
        const entry = await localDb.game_data.get(this._table);
        let data = entry?.data ?? [];
        // Appliquer les filtres eq simples côté client
        if (Object.keys(this._eqFilters).length > 0) {
          data = data.filter(row =>
            Object.entries(this._eqFilters).every(([col, val]) => row[col] === val)
          );
        }
        if (this._isSingle) return { data: data[0] ?? null, error: null };
        return { data, error: null };
      }

      if (USER_DATA_TABLES.has(this._table)) {
        const entry = await localDb.user_data.get({ key: this._table, user_id: this._userId || 'anonymous' });
        // Pas de filtrage eq côté client pour user_data : les données sont déjà
        // scopées par [key+user_id], retourner le dataset complet hors ligne
        const data = entry?.data ?? [];
        if (this._isSingle) return { data: data[0] ?? null, error: null };
        return { data, error: null };
      }

      if (this._table === 'characters') {
        let data;
        if (this._eqFilters.id) {
          const char = await localDb.characters.get(this._eqFilters.id);
          if (this._isSingle) return { data: char ?? null, error: null };
          data = char ? [char] : [];
        } else if (this._eqFilters.user_id) {
          data = await localDb.characters.where('user_id').equals(this._eqFilters.user_id).toArray();
        } else {
          data = await localDb.characters.toArray();
        }
        return { data, error: null };
      }

      if (this._table === 'profiles') {
        const entry = await localDb.user_data.get({ key: 'profiles', user_id: this._userId || 'anonymous' });
        const data = entry?.data ?? null;
        if (this._isSingle) return { data, error: null };
        return { data: data ? [data] : [], error: null };
      }

      return { data: null, error: { message: `Table ${this._table} non disponible hors ligne` } };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  async _insert() {
    try {
      const payload = this._payload;
      if (WRITABLE_TABLES.has(this._table)) {
        await enqueueOperation(this._table, 'insert', payload);
        // Stocker localement pour lecture immédiate
        if (this._table === 'heritier_notes' || this._table === 'bug_reports') {
          const localItem = { ...payload, id: payload.id || crypto.randomUUID(), _offline: true };
          const existing = await localDb.user_data.get({ key: this._table, user_id: this._userId });
          const arr = existing?.data ?? [];
          await localDb.user_data.put({ key: this._table, user_id: this._userId, data: [localItem, ...arr] });
          if (this._isSingle) return { data: localItem, error: null };
          return { data: [localItem], error: null };
        }
        return { data: null, error: null };
      }
      return { data: null, error: { message: `Écriture offline non supportée pour ${this._table}` } };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  async _update() {
    try {
      if (!WRITABLE_TABLES.has(this._table)) {
        return { data: null, error: { message: `Écriture offline non supportée pour ${this._table}` } };
      }
      await enqueueOperation(this._table, 'update', { ...this._payload, _filters: this._eqFilters });
      // Mise à jour locale pour les fiches
      if (this._table === 'characters' && this._eqFilters.id) {
        const existing = await localDb.characters.get(this._eqFilters.id);
        if (existing) {
          await localDb.characters.put({ ...existing, ...this._payload, updated_at: new Date().toISOString() });
        }
      }
      if (this._table === 'heritier_notes' && this._eqFilters.id) {
        const entry = await localDb.user_data.get({ key: 'heritier_notes', user_id: this._userId });
        if (entry?.data) {
          const updated = entry.data.map(n => n.id === this._eqFilters.id ? { ...n, ...this._payload } : n);
          await localDb.user_data.put({ key: 'heritier_notes', user_id: this._userId, data: updated });
        }
      }
      return { data: null, error: null };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  async _upsert() {
    try {
      const payload = this._payload;
      if (this._table === 'characters') {
        await enqueueOperation('characters', 'upsert', payload);
        const localChar = { ...payload, updated_at: payload.updated_at || new Date().toISOString() };
        await localDb.characters.put(localChar);
        return { data: localChar, error: null };
      }
      return { data: null, error: { message: `Upsert offline non supporté pour ${this._table}` } };
    } catch (e) {
      return { data: null, error: { message: e.message } };
    }
  }

  then(onFulfilled, onRejected) {
    return this._execute().then(onFulfilled, onRejected);
  }

  catch(fn) {
    return this._execute().catch(fn);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Proxy en ligne : délègue à Supabase + met Dexie à jour en background
// ────────────────────────────────────────────────────────────────────────────
function wrapOnlineQuery(table, supabaseQuery) {
  // En postgrest-js v2, from() retourne un PostgrestQueryBuilder qui n'est PAS thenable.
  // Le .then n'existe que sur le PostgrestFilterBuilder renvoyé par .select().
  // Pour les tables non-GAME_DATA, aucun cache n'est nécessaire — retour direct.
  if (!GAME_DATA_TABLES.has(table)) return supabaseQuery;

  // Pour les GAME_DATA, on intercepte .select() pour accrocher le cache sur le FilterBuilder.
  const origSelect = supabaseQuery.select.bind(supabaseQuery);
  supabaseQuery.select = (...args) => {
    const fb = origSelect(...args);
    if (!fb || typeof fb.then !== 'function') return fb;
    const origThen = fb.then.bind(fb);
    fb.then = (onFulfilled, onRejected) =>
      origThen(result => {
        if (!result?.error && result?.data) {
          localDb.game_data
            .put({ key: table, data: result.data })
            .then(() => localDb.meta.put({ key: table, lastSync: Date.now() }))
            .catch(() => {});
        }
        return onFulfilled ? onFulfilled(result) : result;
      }, onRejected);
    return fb;
  };
  return supabaseQuery;
}

// ────────────────────────────────────────────────────────────────────────────
// API publique
// ────────────────────────────────────────────────────────────────────────────
export const db = {
  _userId: null,

  setUserId(uid) {
    this._userId = uid;
  },

  // Stocke des données user_data dans Dexie (appelé par les hooks après fetch Supabase)
  async cacheUserData(key, userId, data) {
    try {
      await localDb.user_data.put({ key, user_id: userId, data });
    } catch (e) {
      console.warn(`[db] cacheUserData(${key}) échoué:`, e);
    }
  },

  // Stocke le profil utilisateur dans Dexie
  async cacheProfile(userId, profile) {
    try {
      await localDb.user_data.put({ key: 'profiles', user_id: userId, data: profile });
    } catch (e) {
      console.warn('[db] cacheProfile échoué:', e);
    }
  },

  from(table) {
    if (!isOnline()) {
      return new OfflineBuilder(table, this._userId);
    }
    return wrapOnlineQuery(table, supabase.from(table));
  },

  auth: {
    async getSession() {
      if (!isOnline()) {
        const entry = await localDb.auth_session.get('current');
        if (entry) return { data: { session: entry.session }, error: null };
        return { data: { session: null }, error: null };
      }
      const result = await supabase.auth.getSession();
      if (result.data?.session) {
        await localDb.auth_session.put({ id: 'current', session: result.data.session }).catch(() => {});
      }
      return result;
    },
    onAuthStateChange: (cb) => supabase.auth.onAuthStateChange(cb),
    signOut: async () => {
      await localDb.auth_session.delete('current').catch(() => {});
      return supabase.auth.signOut();
    },
    signInWithOtp: (opts) => supabase.auth.signInWithOtp(opts),
    verifyOtp: (opts) => supabase.auth.verifyOtp(opts),
    updateUser: (opts) => supabase.auth.updateUser(opts),
    resetPasswordForEmail: (email, opts) => supabase.auth.resetPasswordForEmail(email, opts),
    exchangeCodeForSession: (code) => supabase.auth.exchangeCodeForSession(code),
  },

  rpc(fn, params) {
    if (!isOnline()) {
      return Promise.resolve({ data: null, error: { message: 'Hors ligne — appel réseau impossible' } });
    }
    return supabase.rpc(fn, params);
  },
};

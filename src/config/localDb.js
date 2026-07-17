import Dexie from 'dexie';

export const localDb = new Dexie('heritiers_offline');

localDb.version(1).stores({
  // Données de jeu statiques — clé = nom du dataset
  game_data:    'key',
  // Fiches personnage — clé primaire id, index sur user_id et updated_at
  characters:   'id, user_id, updated_at',
  // Données utilisateur (notes, bug_reports, cercles, carte) — clé composite
  user_data:    '[key+user_id], key, user_id',
  // File d'attente des mutations offline
  sync_queue:   '++id, table_name, timestamp, attempts, status',
  // Session auth (entrée unique : id='current')
  auth_session: 'id',
  // Métadonnées de sync (horodatage dernière mise à jour par dataset)
  meta:         'key',
});

// src/utils/syncQueue.js
import { supabase } from '../config/supabase';
import { localDb } from '../config/localDb';

const MAX_ATTEMPTS = 3;

export async function enqueueOperation(table, operation, payload) {
  await localDb.sync_queue.add({
    table_name: table,
    operation,
    payload,
    timestamp: Date.now(),
    attempts: 0,
    status: 'pending',
  });
}

async function executeOperation(entry) {
  const { table_name, operation, payload } = entry;
  const { _filters, ...data } = payload;

  switch (operation) {
    case 'upsert': {
      const { error } = await supabase.from(table_name).upsert(data);
      return error;
    }
    case 'insert': {
      const { error } = await supabase.from(table_name).insert([data]);
      return error;
    }
    case 'update': {
      if (!_filters || Object.keys(_filters).length === 0) {
        return { message: 'update sans filtre — opération ignorée' };
      }
      let query = supabase.from(table_name).update(data);
      for (const [col, val] of Object.entries(_filters)) {
        query = query.eq(col, val);
      }
      const { error } = await query;
      return error;
    }
    default:
      return { message: `Opération inconnue: ${operation}` };
  }
}

export async function syncAll() {
  const pending = await localDb.sync_queue
    .where('status').equals('pending')
    .sortBy('timestamp');

  for (const entry of pending) {
    const error = await executeOperation(entry);
    if (!error) {
      await localDb.sync_queue.delete(entry.id);
    } else {
      const newAttempts = (entry.attempts || 0) + 1;
      await localDb.sync_queue.update(entry.id, {
        attempts: newAttempts,
        status: newAttempts >= MAX_ATTEMPTS ? 'failed' : 'pending',
      });
    }
  }
}

export async function getSyncErrors() {
  return localDb.sync_queue.where('status').equals('failed').toArray();
}

export async function retrySync() {
  await localDb.sync_queue
    .where('status').equals('failed')
    .modify({ status: 'pending', attempts: 0 });
  return syncAll();
}

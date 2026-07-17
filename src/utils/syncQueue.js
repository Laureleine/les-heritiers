// src/utils/syncQueue.js (stub — sera complété en Task 4)
import { localDb } from '../config/localDb';

export async function enqueueOperation(table, operation, payload) {
  await localDb.sync_queue.add({
    table_name: table, operation, payload,
    timestamp: Date.now(), attempts: 0, status: 'pending',
  });
}

export async function syncAll() {}
export async function getSyncErrors() { return []; }
export async function retrySync() {}

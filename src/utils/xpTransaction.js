import { showInAppNotification } from './SystemeServices';

export function xpTransaction(dispatchCharacter, { updates, transaction, notification }, gameData) {
  dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: updates, gameData });
  dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: { ...transaction, date: transaction.date || new Date().toISOString() }, gameData });
  showInAppNotification(notification.text, notification.type || 'success');
}

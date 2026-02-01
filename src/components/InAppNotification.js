// src/components/InAppNotification.js
// Version: 2.7.1
// Build: 2026-01-31 20:05

import React, { useState, useEffect } from 'react';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function InAppNotification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleNotification = (event) => {
      const { message, type } = event.detail;
      const id = Date.now();
      
      setNotifications(prev => [...prev, { id, message, type }]);

      // Auto-remove après 5 secondes
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 5000);
    };

    window.addEventListener('app-notification', handleNotification);
    return () => window.removeEventListener('app-notification', handleNotification);
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} />;
      case 'error': return <AlertCircle size={20} />;
      case 'warning': return <AlertCircle size={20} />;
      default: return <Info size={20} />;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-400 text-green-800';
      case 'error': return 'bg-red-50 border-red-400 text-red-800';
      case 'warning': return 'bg-yellow-50 border-yellow-400 text-yellow-800';
      default: return 'bg-blue-50 border-blue-400 text-blue-800';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {notifications.map(notif => (
        <div
          key={notif.id}
          className={`p-4 rounded-lg border-2 shadow-lg animate-slide-in ${getColors(notif.type)}`}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {getIcon(notif.type)}
            </div>
            <div className="flex-1 font-serif">
              {notif.message}
            </div>
            <button
              onClick={() => removeNotification(notif.id)}
              className="flex-shrink-0 hover:opacity-70 transition-opacity"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

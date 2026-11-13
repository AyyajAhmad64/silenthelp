import React, { useState, useRef, useEffect } from 'react';
import { Bell, Heart, MessageSquare, Shield, CheckCheck } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../../data/mockWidgets';

export const NotificationsDropdown = () => {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'support':
        return <Heart size={15} className="purple-text" />;
      case 'comment':
        return <MessageSquare size={15} className="purple-text" />;
      default:
        return <Shield size={15} className="purple-text" />;
    }
  };

  return (
    <div className="header-dropdown-container" ref={dropdownRef}>
      <button
        className="header-icon-btn notifications-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="View notifications"
        title="Notifications"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="notification-badge" aria-label={`${unreadCount} unread notifications`}>
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="header-dropdown-menu notifications-menu animate-slide-down">
          <div className="notifications-header">
            <span className="notif-title">Notifications</span>
            {unreadCount > 0 && (
              <button className="mark-read-btn" onClick={markAllRead}>
                <CheckCheck size={14} />
                <span>Mark read</span>
              </button>
            )}
          </div>

          <div className="notifications-list">
            {notifications.length === 0 ? (
              <div className="notifications-empty">No new notifications</div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  className={`notification-item ${!item.read ? 'unread' : ''}`}
                  onClick={() => markAsRead(item.id)}
                >
                  <div className="notif-icon-box">{getIcon(item.type)}</div>
                  <div className="notif-content">
                    <p className="notif-text">{item.text}</p>
                    <span className="notif-time">{item.time}</span>
                  </div>
                  {!item.read && <span className="unread-dot" />}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

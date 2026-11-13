import React from 'react';
import { X, HeartHandshake, Shield, PhoneCall, Sun, Moon, Globe, Settings } from 'lucide-react';
import { NAV_ITEMS } from './LeftSidebar';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './Sidebar.css';

export const MobileDrawer = ({ isOpen, onClose, activeItem = 'home', onItemClick, onOpenSettings }) => {
  const { isLoggedIn, user, openAuthModal, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { currentLanguage } = useLanguage();

  if (!isOpen) return null;

  const handleNavClick = (item) => {
    onClose();
    if (onItemClick) onItemClick(item.id);
    if (item.id === 'settings') {
      if (onOpenSettings) onOpenSettings();
      return;
    }
    if (item.targetId) {
      if (item.targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(item.targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="drawer-container animate-slide-left" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div className="brand-logo">
            <div className="brand-icon-box">
              <HeartHandshake size={20} className="brand-icon" />
            </div>
            <div className="brand-text-group">
              <span className="brand-title">
                Silent <span className="purple-gradient-text">Help</span>
              </span>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        {/* User Card or Visitor CTA */}
        <div className="drawer-user-section">
          {isLoggedIn ? (
            <div className="drawer-user-card">
              <div className="drawer-avatar">{user.avatarLetter}</div>
              <div className="drawer-user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-alias">{user.anonymousAlias}</span>
              </div>
            </div>
          ) : (
            <div className="drawer-visitor-box">
              <p className="visitor-text">Join our community to ask for help or support others.</p>
              <div className="visitor-btns">
                <button
                  className="btn-ghost"
                  onClick={() => {
                    onClose();
                    openAuthModal('login');
                  }}
                >
                  Log In
                </button>
                <button
                  className="btn-primary"
                  onClick={() => {
                    onClose();
                    openAuthModal('register');
                  }}
                >
                  Ask for Help
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <nav className="drawer-nav-list">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                className={`drawer-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                <Icon size={19} className="nav-icon" />
                <span className="drawer-nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge-pill">{item.badge}</span>}
              </button>
            );
          })}
        </nav>

        {/* Preferences Section: Theme & Language */}
        <div className="drawer-preferences-section">
          <div className="preferences-header">Preferences</div>
          <div className="preferences-buttons-row">
            <button
              type="button"
              className="drawer-pref-btn"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={17} className="purple-text" /> : <Moon size={17} className="purple-text" />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              className="drawer-pref-btn"
              onClick={() => {
                onClose();
                if (onOpenSettings) onOpenSettings();
              }}
              aria-label="Language & Settings"
            >
              <Globe size={17} className="purple-text" />
              <span>{currentLanguage.label}</span>
            </button>
          </div>
        </div>

        {/* Emergency Help Quick Link */}
        <div className="drawer-helpline-box">
          <div className="helpline-header">
            <PhoneCall size={16} className="purple-text" />
            <span>Need Urgent Support?</span>
          </div>
          <p className="helpline-sub">Tele-MANAS Toll-Free 24x7</p>
          <a href="tel:14416" className="helpline-call-btn">
            Call 14416
          </a>
        </div>
      </div>
    </div>
  );
};

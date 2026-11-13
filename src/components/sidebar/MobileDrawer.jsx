import React from 'react';
import { X, HeartHandshake, Shield, PhoneCall } from 'lucide-react';
import { NAV_ITEMS } from './LeftSidebar';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

export const MobileDrawer = ({ isOpen, onClose, activeItem = 'home', onItemClick }) => {
  const { isLoggedIn, user, openAuthModal, logout } = useAuth();

  if (!isOpen) return null;

  const handleNavClick = (item) => {
    onClose();
    if (onItemClick) onItemClick(item.id);
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
              <p className="visitor-text">Join our community to share your voice safely.</p>
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
                  Register
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

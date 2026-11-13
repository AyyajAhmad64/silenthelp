import React, { useState, useRef, useEffect } from 'react';
import { User, Bookmark, Settings, LogOut, Shield, FileText, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="header-dropdown-container" ref={dropdownRef}>
      <button
        className="profile-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User profile menu"
      >
        <div className="profile-avatar-circle">
          <span>{user.avatarLetter}</span>
        </div>
        <div className="profile-info-compact">
          <span className="profile-name">{user.name}</span>
          <span className="profile-alias">{user.anonymousAlias}</span>
        </div>
        <ChevronDown size={14} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="header-dropdown-menu profile-menu animate-slide-down">
          <div className="profile-menu-header">
            <div className="profile-header-top">
              <div className="avatar-large">{user.avatarLetter}</div>
              <div>
                <div className="profile-header-name">{user.name}</div>
                <div className="profile-header-badge">
                  <Shield size={12} />
                  <span>{user.badge}</span>
                </div>
              </div>
            </div>
            <div className="anonymous-identity-box">
              <span className="anon-label">Active Anonymous Alias:</span>
              <span className="anon-value">{user.anonymousAlias}</span>
            </div>
          </div>

          <div className="profile-menu-items">
            <button className="menu-action-item" onClick={() => setIsOpen(false)}>
              <FileText size={16} />
              <span>My Shared Stories</span>
            </button>
            <button className="menu-action-item" onClick={() => setIsOpen(false)}>
              <Bookmark size={16} />
              <span>Saved Posts ({user.savedCount})</span>
            </button>
            <button className="menu-action-item" onClick={() => setIsOpen(false)}>
              <Settings size={16} />
              <span>Account Settings</span>
            </button>
          </div>

          <div className="profile-menu-footer">
            <button
              className="signout-btn"
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

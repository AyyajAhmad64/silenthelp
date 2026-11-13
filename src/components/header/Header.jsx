import React from 'react';
import { Menu, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { SearchBar } from './SearchBar';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';
import { NotificationsDropdown } from './NotificationsDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import './Header.css';

export const Header = ({ onToggleSidebar, onOpenMobileDrawer, onSelectCategory, onSelectTopic }) => {
  const { isLoggedIn, openAuthModal, toggleAuthMode } = useAuth();

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left: Mobile Menu & Brand */}
        <div className="header-left">
          <button
            className="mobile-menu-trigger"
            onClick={onOpenMobileDrawer}
            aria-label="Open mobile menu"
          >
            <Menu size={22} />
          </button>

          <a href="#" className="brand-logo" aria-label="Silent Help Home">
            <div className="brand-icon-box">
              <HeartHandshake size={22} className="brand-icon" />
            </div>
            <div className="brand-text-group">
              <span className="brand-title">
                Silent <span className="purple-gradient-text">Help</span>
              </span>
              <span className="brand-tagline">Safe • Anonymous • Heard</span>
            </div>
          </a>
        </div>

        {/* Center: Search Bar */}
        <div className="header-center">
          <SearchBar onSelectCategory={onSelectCategory} onSelectTopic={onSelectTopic} />
        </div>

        {/* Right: Actions */}
        <div className="header-right">
          {/* Demo Mode Switcher - Allows instant switching between visitor and logged-in states */}
          <button
            className="demo-mode-chip"
            onClick={toggleAuthMode}
            title="Click to toggle between Visitor and Member view for testing"
          >
            <Sparkles size={13} className="purple-text" />
            <span>Mode: {isLoggedIn ? 'Member' : 'Visitor'}</span>
          </button>

          <LanguageSelector />
          <ThemeToggle />

          {isLoggedIn ? (
            <div className="logged-in-actions">
              <NotificationsDropdown />
              <ProfileDropdown />
            </div>
          ) : (
            <div className="visitor-actions">
              <button
                className="btn-ghost login-btn"
                onClick={() => openAuthModal('login')}
              >
                Log In
              </button>
              <button
                className="btn-primary register-btn"
                onClick={() => openAuthModal('register')}
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { Menu, HeartHandshake, Search, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { SearchBar } from './SearchBar';
import { MobileSearchModal } from './MobileSearchModal';
import { NotificationsDropdown } from './NotificationsDropdown';
import { ProfileDropdown } from './ProfileDropdown';
import './Header.css';

export const Header = ({
  onToggleSidebar,
  onOpenMobileDrawer,
  onSelectCategory,
  onSelectTopic,
  onOpenSettings,
}) => {
  const { isLoggedIn, openAuthModal } = useAuth();
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left: Mobile Menu Trigger & Brand Logo */}
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
              <span className="brand-tagline">Open Support • Safe Space</span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Search Bar (Single Search Interface on Desktop) */}
        <div className="header-center">
          <SearchBar onSelectCategory={onSelectCategory} onSelectTopic={onSelectTopic} />
        </div>

        {/* Right: Actions */}
        <div className="header-right">
          {/* Mobile Search Toggle Icon (Only visible on mobile screens <= 768px) */}
          <button
            className="header-icon-btn mobile-search-toggle"
            onClick={() => setIsMobileSearchOpen(true)}
            aria-label="Open search view"
            title="Search topics"
          >
            <Search size={18} />
          </button>

          {isLoggedIn ? (
            <div className="logged-in-actions">
              <NotificationsDropdown />
              <ProfileDropdown onOpenSettings={onOpenSettings} />
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
                <span className="btn-full-text">Ask for Help</span>
                <span className="btn-short-text">Ask Help</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dedicated Full-Screen Mobile Search View */}
      <MobileSearchModal
        isOpen={isMobileSearchOpen}
        onClose={() => setIsMobileSearchOpen(false)}
        onSelectCategory={(cat) => {
          setIsMobileSearchOpen(false);
          if (onSelectCategory) onSelectCategory(cat);
        }}
        onSelectTopic={(topic) => {
          setIsMobileSearchOpen(false);
          if (onSelectTopic) onSelectTopic(topic);
        }}
      />
    </header>
  );
};

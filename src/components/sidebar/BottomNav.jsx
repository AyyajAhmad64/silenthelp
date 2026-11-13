import React from 'react';
import { Home, Compass, Plus, Bell, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

export const BottomNav = ({ activeItem, onNavClick, onOpenDrawer, onCreatePostClick }) => {
  const { isLoggedIn, openAuthModal } = useAuth();

  const handleNotificationsClick = () => {
    if (!isLoggedIn) {
      openAuthModal('login');
    } else {
      onNavClick('notifications');
      onOpenDrawer();
    }
  };

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      openAuthModal('login');
    } else {
      onNavClick('profile');
      onOpenDrawer();
    }
  };

  return (
    <nav className="bottom-nav-bar" aria-label="Mobile Navigation">
      {/* 1. Home */}
      <button
        className={`bottom-nav-btn ${activeItem === 'home' ? 'active' : ''}`}
        onClick={() => {
          onNavClick('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        aria-label="Home"
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      {/* 2. Explore */}
      <button
        className={`bottom-nav-btn ${activeItem === 'explore' ? 'active' : ''}`}
        onClick={() => {
          onNavClick('explore');
          const el = document.getElementById('categories-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Explore Topics"
      >
        <Compass size={20} />
        <span>Explore</span>
      </button>

      {/* 3. Center Highlighted Create Button */}
      <div className="bottom-nav-center-action">
        <button
          className="bottom-create-btn"
          onClick={onCreatePostClick}
          aria-label="Create story"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* 4. Notifications */}
      <button
        className={`bottom-nav-btn ${activeItem === 'notifications' ? 'active' : ''}`}
        onClick={handleNotificationsClick}
        aria-label="Notifications"
      >
        <div className="bottom-icon-relative">
          <Bell size={20} />
          {isLoggedIn && <span className="bottom-nav-dot" />}
        </div>
        <span>Alerts</span>
      </button>

      {/* 5. Profile */}
      <button
        className={`bottom-nav-btn ${activeItem === 'profile' ? 'active' : ''}`}
        onClick={handleProfileClick}
        aria-label="Profile and account"
      >
        <User size={20} />
        <span>Profile</span>
      </button>
    </nav>
  );
};

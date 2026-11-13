import React from 'react';
import { Home, Compass, Plus, Users, Menu } from 'lucide-react';
import './Sidebar.css';

export const BottomNav = ({ activeItem, onNavClick, onOpenDrawer, onCreatePostClick }) => {
  return (
    <nav className="bottom-nav-bar" aria-label="Mobile Navigation">
      <button
        className={`bottom-nav-btn ${activeItem === 'home' ? 'active' : ''}`}
        onClick={() => {
          onNavClick('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className={`bottom-nav-btn ${activeItem === 'explore' ? 'active' : ''}`}
        onClick={() => {
          onNavClick('explore');
          const el = document.getElementById('categories-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Compass size={20} />
        <span>Explore</span>
      </button>

      {/* Floating Center Action */}
      <div className="bottom-nav-center-action">
        <button
          className="bottom-create-btn"
          onClick={onCreatePostClick}
          aria-label="Create new story"
        >
          <Plus size={24} />
        </button>
      </div>

      <button
        className={`bottom-nav-btn ${activeItem === 'community' ? 'active' : ''}`}
        onClick={() => {
          onNavClick('community');
          const el = document.getElementById('feed-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Users size={20} />
        <span>Feed</span>
      </button>

      <button className="bottom-nav-btn" onClick={onOpenDrawer} aria-label="Open more menu">
        <Menu size={20} />
        <span>Menu</span>
      </button>
    </nav>
  );
};

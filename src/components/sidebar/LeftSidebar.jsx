import React from 'react';
import {
  Home,
  Compass,
  Users,
  MessageSquare,
  Bell,
  Bookmark,
  Info,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import './Sidebar.css';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, badge: null, targetId: 'top' },
  { id: 'explore', label: 'Explore', icon: Compass, badge: null, targetId: 'categories-section' },
  { id: 'community', label: 'Community', icon: Users, badge: null, targetId: 'feed-section' },
  { id: 'messages', label: 'Messages', icon: MessageSquare, badge: '3', targetId: null },
  { id: 'notifications', label: 'Notifications', icon: Bell, badge: '2', targetId: null },
  { id: 'saved', label: 'Saved Posts', icon: Bookmark, badge: null, targetId: null },
  { id: 'about', label: 'About Us', icon: Info, badge: null, targetId: 'how-it-works-section' },
  { id: 'guidelines', label: 'Guidelines', icon: BookOpen, badge: null, targetId: 'guidelines-section' },
  { id: 'settings', label: 'Settings', icon: Settings, badge: null, targetId: null },
];

export const LeftSidebar = ({ isCollapsed, onToggleCollapse, activeItem = 'home', onItemClick }) => {
  const handleNavClick = (item) => {
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
    <aside className={`left-sidebar-nav ${isCollapsed ? 'collapsed' : 'expanded'}`} aria-label="Main Navigation">
      <div className="sidebar-top-header">
        <button
          className="collapse-toggle-btn"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!isCollapsed && <span className="collapse-text">Collapse Menu</span>}
        </button>
      </div>

      <nav className="sidebar-nav-list">
        {NAV_ITEMS.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
              title={isCollapsed ? item.label : undefined}
            >
              <div className="nav-icon-wrapper">
                <IconComponent size={20} className="nav-icon" />
                {isCollapsed && item.badge && <span className="collapsed-badge-dot" />}
              </div>

              {!isCollapsed && (
                <div className="nav-label-wrapper">
                  <span className="nav-label">{item.label}</span>
                  {item.badge && <span className="nav-badge-pill">{item.badge}</span>}
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="sidebar-privacy-card">
          <div className="privacy-badge-icon">
            <ShieldCheck size={20} className="purple-text" />
          </div>
          <h4 className="privacy-card-title">Safe & Protected</h4>
          <p className="privacy-card-text">
            Your identity remains anonymous on all discussions. You are safe here.
          </p>
        </div>
      )}
    </aside>
  );
};

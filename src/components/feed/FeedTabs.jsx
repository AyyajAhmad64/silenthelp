import React from 'react';
import { Sparkles, Clock, Users, Flame } from 'lucide-react';
import './Feed.css';

const TABS = [
  { id: 'all', label: 'All Discussions', icon: Sparkles },
  { id: 'latest', label: 'Latest', icon: Clock },
  { id: 'following', label: 'Following', icon: Users },
  { id: 'recommended', label: 'Recommended', icon: Flame },
];

export const FeedTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="feed-tabs-container card-base" role="tablist" aria-label="Community Feed Tabs">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            className={`feed-tab-btn ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <Icon size={16} className="tab-icon" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

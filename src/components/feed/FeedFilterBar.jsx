import React from 'react';
import { Filter, ArrowUpDown, X, Shield, Globe } from 'lucide-react';
import './Feed.css';

export const FeedFilterBar = ({
  visibilityFilter,
  onVisibilityChange,
  sortOption,
  onSortChange,
  selectedCategory,
  onClearCategory,
  totalCount,
}) => {
  return (
    <div className="feed-filter-bar">
      {/* Left: Filter Buttons */}
      <div className="visibility-filter-group">
        <button
          className={`filter-chip ${visibilityFilter === 'all' ? 'active' : ''}`}
          onClick={() => onVisibilityChange('all')}
        >
          All Posts
        </button>
        <button
          className={`filter-chip ${visibilityFilter === 'anonymous' ? 'active' : ''}`}
          onClick={() => onVisibilityChange('anonymous')}
        >
          <Shield size={13} />
          <span>Anonymous</span>
        </button>
        <button
          className={`filter-chip ${visibilityFilter === 'public' ? 'active' : ''}`}
          onClick={() => onVisibilityChange('public')}
        >
          <Globe size={13} />
          <span>Public</span>
        </button>
      </div>

      {/* Center/Right: Category chip & Sort Dropdown */}
      <div className="filter-right-group">
        {selectedCategory && (
          <div className="active-category-pill animate-fade-in">
            <span>Category: {selectedCategory}</span>
            <button
              className="clear-cat-btn"
              onClick={onClearCategory}
              aria-label="Clear category filter"
            >
              <X size={13} />
            </button>
          </div>
        )}

        <div className="sort-select-wrapper">
          <ArrowUpDown size={14} className="sort-icon" />
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort community feed posts"
          >
            <option value="latest">Latest</option>
            <option value="supported">Most Supported</option>
            <option value="discussed">Most Discussed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Layers, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../../data/mockCategories';
import './Widgets.css';

export const PopularCategoriesWidget = ({ onCategoryClick }) => {
  const topCategories = CATEGORIES.slice(0, 5);

  return (
    <div className="widget-card card-base" aria-label="Popular Categories">
      <div className="widget-header">
        <div className="widget-title-group">
          <Layers size={17} className="purple-text" />
          <h3 className="widget-title">Popular Categories</h3>
        </div>
      </div>

      <div className="popular-categories-list">
        {topCategories.map((cat) => (
          <button
            key={cat.id}
            className="popular-category-row"
            onClick={() => onCategoryClick && onCategoryClick(cat.name)}
          >
            <span className="cat-name">{cat.name}</span>
            <div className="cat-count-wrapper">
              <span className="cat-count-badge">{cat.postCount}</span>
              <ChevronRight size={14} className="cat-arrow" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

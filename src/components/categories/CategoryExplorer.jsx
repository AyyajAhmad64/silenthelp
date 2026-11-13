import React from 'react';
import {
  Brain,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Sparkles,
  Compass,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { CATEGORIES } from '../../data/mockCategories';
import './CategoryExplorer.css';

const ICON_MAP = {
  Brain,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Sparkles,
  Compass,
  MessageCircle,
};

export const CategoryExplorer = ({ selectedCategory, onSelectCategory }) => {
  return (
    <section className="categories-section" id="categories-section" aria-label="Explore Categories">
      <div className="section-header-row">
        <div>
          <span className="section-eyebrow">Safe Spaces</span>
          <h2 className="section-heading">Explore Community Topics</h2>
        </div>
        <p className="section-subtext">
          Choose a compassionate topic to find conversations, advice, and shared experiences.
        </p>
      </div>

      <div className="categories-grid">
        {CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] || Sparkles;
          const isSelected = selectedCategory === cat.name;

          return (
            <div
              key={cat.id}
              className={`category-card card-base ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                onSelectCategory(cat.name);
                const el = document.getElementById('feed-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectCategory(cat.name);
                }
              }}
            >
              <div className="category-card-top">
                <div
                  className="category-icon-box"
                  style={{ background: cat.bgLight, borderColor: cat.borderLight }}
                >
                  <Icon size={22} className="purple-text" />
                </div>
                <span className="category-post-count">{cat.postCount} stories</span>
              </div>

              <h3 className="category-name">{cat.name}</h3>
              <p className="category-desc">{cat.description}</p>

              <div className="category-card-footer">
                <span className="explore-link">
                  <span>Browse stories</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

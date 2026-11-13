import React from 'react';
import { TrendingTopicsWidget } from './TrendingTopicsWidget';
import { PopularCategoriesWidget } from './PopularCategoriesWidget';
import { CommunityStatsWidget } from './CommunityStatsWidget';
import { SupportResourcesWidget } from './SupportResourcesWidget';

export const RightSidebar = ({ onTopicClick, onCategoryClick }) => {
  return (
    <aside className="right-widgets-container" aria-label="Community Widgets">
      <TrendingTopicsWidget onTopicClick={onTopicClick} />
      <PopularCategoriesWidget onCategoryClick={onCategoryClick} />
      <CommunityStatsWidget />
      <SupportResourcesWidget />
    </aside>
  );
};

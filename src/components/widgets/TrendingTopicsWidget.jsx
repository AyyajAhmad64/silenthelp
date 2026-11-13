import React from 'react';
import { Flame, Hash, ArrowUpRight } from 'lucide-react';
import { TRENDING_TOPICS } from '../../data/mockWidgets';
import './Widgets.css';

export const TrendingTopicsWidget = ({ onTopicClick }) => {
  return (
    <div className="widget-card card-base" aria-label="Trending Topics">
      <div className="widget-header">
        <div className="widget-title-group">
          <Flame size={17} className="purple-text" />
          <h3 className="widget-title">Trending Topics</h3>
        </div>
        <span className="live-dot-badge">Live</span>
      </div>

      <div className="trending-topics-list">
        {TRENDING_TOPICS.map((topic) => (
          <button
            key={topic.tag}
            className="trending-topic-row"
            onClick={() => onTopicClick && onTopicClick(topic.tag)}
            title={`View conversations in ${topic.tag}`}
          >
            <div className="topic-meta-left">
              <span className="topic-category-label">{topic.category}</span>
              <span className="topic-tag-name">{topic.tag}</span>
            </div>
            <div className="topic-meta-right">
              <span className="topic-count">{topic.postsCount}</span>
              <ArrowUpRight size={14} className="arrow-icon" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

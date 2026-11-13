import React from 'react';
import { Flame, MessageSquare, Heart, ArrowRight, Shield } from 'lucide-react';
import { MOCK_POSTS } from '../../data/mockPosts';
import './Sections.css';

export const TrendingDiscussions = ({ onSelectPost }) => {
  // Sort posts by support count to get the top discussions
  const trendingStories = [...MOCK_POSTS]
    .sort((a, b) => b.supportCount - a.supportCount)
    .slice(0, 3);

  return (
    <section className="trending-discussions-section" id="trending-section" aria-label="Trending Discussions">
      <div className="section-title-bar">
        <div className="title-left">
          <div className="section-pill">
            <Flame size={15} className="purple-text" />
            <span>Community Highlights</span>
          </div>
          <h2 className="section-heading">Trending Conversations</h2>
        </div>
        <p className="section-subtext">
          Stories and reflections resonating deeply across our community right now.
        </p>
      </div>

      <div className="trending-cards-grid">
        {trendingStories.map((post, idx) => (
          <div
            key={post.id}
            className="trending-story-card card-base"
            onClick={() => {
              const el = document.getElementById(post.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="trending-rank-badge">#{idx + 1} Trending</div>
            <div className="trending-meta-row">
              <span className="trending-cat">{post.category}</span>
              <span className="trending-time">{post.createdAt}</span>
            </div>

            <h3 className="trending-title">{post.title}</h3>
            <p className="trending-snippet">
              {post.content.slice(0, 140)}...
            </p>

            <div className="trending-footer">
              <div className="trending-metrics">
                <span className="metric-item">
                  <Heart size={14} className="metric-icon" />
                  <span>{post.supportCount}</span>
                </span>
                <span className="metric-item">
                  <MessageSquare size={14} className="metric-icon" />
                  <span>{post.commentCount}</span>
                </span>
              </div>
              <span className="trending-read-more">
                <span>Read Story</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

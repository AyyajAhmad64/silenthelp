import React, { useState, useMemo } from 'react';
import { MOCK_POSTS } from '../../data/mockPosts';
import { FeedTabs } from './FeedTabs';
import { FeedFilterBar } from './FeedFilterBar';
import { CreatePostCard } from './CreatePostCard';
import { PostCard } from './PostCard';
import { Sparkles, MessageSquareOff } from 'lucide-react';
import './Feed.css';

export const CommunityFeed = ({ selectedCategory, onClearCategory, onCategoryClick }) => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [activeTab, setActiveTab] = useState('all');
  const [visibilityFilter, setVisibilityFilter] = useState('all'); // 'all' | 'anonymous' | 'public'
  const [sortOption, setSortOption] = useState('latest'); // 'latest' | 'supported' | 'discussed'

  // Handle new post creation from composer
  const handlePostCreated = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // 1. Tab filter
      if (activeTab !== 'all' && post.feedType && !post.feedType.includes(activeTab)) {
        return false;
      }

      // 2. Visibility filter
      if (visibilityFilter === 'anonymous' && !post.author.isAnonymous) {
        return false;
      }
      if (visibilityFilter === 'public' && post.author.isAnonymous) {
        return false;
      }

      // 3. Category filter
      if (selectedCategory && post.category !== selectedCategory) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'supported') {
        return (b.supportCount || 0) - (a.supportCount || 0);
      }
      if (sortOption === 'discussed') {
        return (b.commentCount || 0) - (a.commentCount || 0);
      }
      // 'latest' default (by id / original index)
      return 0;
    });
  }, [posts, activeTab, visibilityFilter, selectedCategory, sortOption]);

  return (
    <div className="community-feed-wrapper" id="feed-section">
      {/* Feed Tabs */}
      <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Filter and Sort Controls */}
      <FeedFilterBar
        visibilityFilter={visibilityFilter}
        onVisibilityChange={setVisibilityFilter}
        sortOption={sortOption}
        onSortChange={setSortOption}
        selectedCategory={selectedCategory}
        onClearCategory={onClearCategory}
        totalCount={filteredPosts.length}
      />

      {/* Post List */}
      <div className="posts-stream">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onCategoryClick={onCategoryClick}
            />
          ))
        ) : (
          <div className="feed-empty-state card-base">
            <MessageSquareOff size={38} className="empty-icon" />
            <h4>No discussions found</h4>
            <p>
              There are no posts matching the current filters. Try selecting "All Posts" or exploring another category.
            </p>
            {selectedCategory && (
              <button className="btn-secondary" onClick={onClearCategory}>
                Clear Category Filter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

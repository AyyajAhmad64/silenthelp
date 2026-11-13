import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search, X, Hash, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';
import { CATEGORIES } from '../../data/mockCategories';
import { MOCK_POSTS } from '../../data/mockPosts';
import { TRENDING_TOPICS } from '../../data/mockWidgets';
import './MobileSearchModal.css';

export const MobileSearchModal = ({ isOpen, onClose, onSelectCategory, onSelectTopic }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const scrollPosRef = useRef(0);

  // Prevent background scrolling when open and restore scroll on close
  useEffect(() => {
    if (isOpen) {
      scrollPosRef.current = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Auto-focus input after modal renders
      const timer = setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 100);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.scrollTo(0, scrollPosRef.current);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCategories = query.trim()
    ? CATEGORIES.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const filteredTopics = query.trim()
    ? TRENDING_TOPICS.filter(t => t.tag.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : TRENDING_TOPICS;

  const filteredPosts = query.trim()
    ? MOCK_POSTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.content.toLowerCase().includes(query.toLowerCase()) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(query.toLowerCase())))
      ).slice(0, 5)
    : [];

  const handleSelectTopic = (tag) => {
    onClose();
    if (onSelectTopic) onSelectTopic(tag);
  };

  const handleSelectCategory = (catName) => {
    onClose();
    if (onSelectCategory) onSelectCategory(catName);
  };

  const handleSelectPost = (postId) => {
    onClose();
    const el = document.getElementById(postId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mobile-search-overlay animate-fade-in" role="dialog" aria-modal="true" aria-label="Mobile Search">
      {/* Top Search Bar Header */}
      <div className="mobile-search-header">
        <button
          className="mobile-search-back-btn"
          onClick={onClose}
          aria-label="Back to page"
          title="Back"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="mobile-search-input-box">
          <Search size={18} className="mobile-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="mobile-search-input"
            placeholder="Search topics, questions, feelings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search community posts and topics"
          />
          {query && (
            <button
              className="mobile-search-clear-btn"
              onClick={() => {
                setQuery('');
                if (inputRef.current) inputRef.current.focus();
              }}
              aria-label="Clear search input"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Content View */}
      <div className="mobile-search-content">
        {query.trim() === '' ? (
          <div className="mobile-search-empty-state">
            {/* Trending Topics */}
            <div className="mobile-search-section">
              <div className="mobile-section-header">
                <TrendingUp size={16} className="purple-text" />
                <span>Trending Searches</span>
              </div>
              <div className="mobile-topics-wrap">
                {filteredTopics.map((topic) => (
                  <button
                    key={topic.tag}
                    className="mobile-topic-chip"
                    onClick={() => handleSelectTopic(topic.tag)}
                  >
                    <Hash size={13} className="purple-text" />
                    <span>{topic.tag.replace('#', '')}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Categories */}
            <div className="mobile-search-section">
              <div className="mobile-section-header">
                <BookOpen size={16} className="purple-text" />
                <span>Browse Categories</span>
              </div>
              <div className="mobile-categories-list">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className="mobile-category-row"
                    onClick={() => handleSelectCategory(cat.name)}
                  >
                    <div className="mobile-cat-info">
                      <span className="mobile-cat-name">{cat.name}</span>
                      <span className="mobile-cat-desc">{cat.description}</span>
                    </div>
                    <span className="mobile-cat-count">{cat.postCount} stories</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mobile-search-results animate-fade-in">
            {/* Matching Topics */}
            {filteredTopics.length > 0 && (
              <div className="mobile-search-section">
                <div className="mobile-section-header">
                  <Hash size={16} className="purple-text" />
                  <span>Matching Tags</span>
                </div>
                <div className="mobile-topics-wrap">
                  {filteredTopics.map((topic) => (
                    <button
                      key={topic.tag}
                      className="mobile-topic-chip"
                      onClick={() => handleSelectTopic(topic.tag)}
                    >
                      <Hash size={13} className="purple-text" />
                      <span>{topic.tag.replace('#', '')}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Categories */}
            {filteredCategories.length > 0 && (
              <div className="mobile-search-section">
                <div className="mobile-section-header">
                  <BookOpen size={16} className="purple-text" />
                  <span>Categories</span>
                </div>
                <div className="mobile-results-group">
                  {filteredCategories.map((cat) => (
                    <div
                      key={cat.id}
                      className="mobile-result-item"
                      onClick={() => handleSelectCategory(cat.name)}
                    >
                      <BookOpen size={16} className="purple-text item-icon" />
                      <div className="result-text-box">
                        <span className="result-title">{cat.name}</span>
                        <span className="result-subtitle">{cat.postCount} stories shared</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Discussions */}
            {filteredPosts.length > 0 && (
              <div className="mobile-search-section">
                <div className="mobile-section-header">
                  <MessageSquare size={16} className="purple-text" />
                  <span>Community Discussions</span>
                </div>
                <div className="mobile-results-group">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="mobile-result-item"
                      onClick={() => handleSelectPost(post.id)}
                    >
                      <MessageSquare size={16} className="purple-text item-icon" />
                      <div className="result-text-box">
                        <span className="result-title">{post.title}</span>
                        <span className="result-subtitle">{post.author.name} • {post.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredCategories.length === 0 && filteredPosts.length === 0 && filteredTopics.length === 0 && (
              <div className="mobile-no-results">
                <p className="no-res-title">No matching topics found for "{query}"</p>
                <p className="no-res-subtitle">You can ask the first question or share a help request in the feed!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

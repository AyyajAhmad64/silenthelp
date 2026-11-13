import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Hash, BookOpen, MessageSquare } from 'lucide-react';
import { CATEGORIES } from '../../data/mockCategories';
import { MOCK_POSTS } from '../../data/mockPosts';
import { TRENDING_TOPICS } from '../../data/mockWidgets';
import './Header.css';

export const SearchBar = ({ onSelectCategory, onSelectTopic }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const filteredCategories = query.trim()
    ? CATEGORIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : [];

  const filteredTopics = query.trim()
    ? TRENDING_TOPICS.filter(t => t.tag.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : TRENDING_TOPICS.slice(0, 3);

  const filteredPosts = query.trim()
    ? MOCK_POSTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.content.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : [];

  return (
    <div className="search-bar-container" ref={containerRef}>
      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          placeholder="Search topics, feelings, questions..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="Search community posts and topics"
        />
        {query && (
          <button
            className="search-clear-btn"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="search-dropdown-menu animate-slide-down">
          {query.trim() === '' ? (
            <div className="search-dropdown-section">
              <span className="search-section-title">Trending Searches</span>
              <div className="search-tags-list">
                {filteredTopics.map((item) => (
                  <button
                    key={item.tag}
                    className="search-tag-chip"
                    onClick={() => {
                      setQuery(item.tag);
                      setIsOpen(false);
                      if (onSelectTopic) onSelectTopic(item.tag);
                    }}
                  >
                    <Hash size={13} />
                    <span>{item.tag.replace('#', '')}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {filteredCategories.length > 0 && (
                <div className="search-dropdown-section">
                  <span className="search-section-title">Categories</span>
                  {filteredCategories.map(cat => (
                    <div
                      key={cat.id}
                      className="search-result-item"
                      onClick={() => {
                        setIsOpen(false);
                        if (onSelectCategory) onSelectCategory(cat.name);
                      }}
                    >
                      <BookOpen size={16} className="item-icon purple-text" />
                      <div>
                        <div className="result-title">{cat.name}</div>
                        <div className="result-sub">{cat.postCount} stories shared</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="search-dropdown-section">
                  <span className="search-section-title">Discussions</span>
                  {filteredPosts.map(post => (
                    <div
                      key={post.id}
                      className="search-result-item"
                      onClick={() => {
                        setIsOpen(false);
                        const el = document.getElementById(post.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <MessageSquare size={16} className="item-icon" />
                      <div>
                        <div className="result-title">{post.title}</div>
                        <div className="result-sub">{post.author.name} • {post.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {filteredCategories.length === 0 && filteredPosts.length === 0 && (
                <div className="search-no-results">
                  No matching stories found for "{query}". You can be the first to share!
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Shield, Sparkles, Send, Lock, Globe, MessageSquareHeart, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { CATEGORIES } from '../../data/mockCategories';
import './Feed.css';

export const CreatePostCard = ({ onPostCreated }) => {
  const { isLoggedIn, user, openAuthModal, showToast } = useAuth();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // If visitor, display prompt card
  if (!isLoggedIn) {
    return (
      <div className="create-post-card card-base visitor-prompt-card">
        <div className="visitor-card-inner">
          <div className="visitor-badge-icon">
            <MessageSquareHeart size={24} className="purple-text" />
          </div>
          <div className="visitor-text-group">
            <h3 className="visitor-card-title">Have something heavy on your mind?</h3>
            <p className="visitor-card-desc">
              Join Silent Help to share your story completely anonymously, receive peer comfort, and connect with people who care.
            </p>
          </div>
          <div className="visitor-card-actions">
            <button className="btn-ghost" onClick={() => openAuthModal('login')}>
              Log In
            </button>
            <button className="btn-primary" onClick={() => openAuthModal('register')}>
              Join to Share
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      id: `post-${Date.now()}`,
      author: {
        name: isAnonymous ? `Anonymous Soul #${Math.floor(100 + Math.random() * 900)}` : user.name,
        avatarInitial: isAnonymous ? 'A' : user.avatarLetter,
        isAnonymous: isAnonymous,
        color: '#9333ea',
        badge: isAnonymous ? 'Anonymous Soul' : 'Community Member',
      },
      category: category,
      categorySlug: CATEGORIES.find(c => c.name === category)?.slug || 'general-discussion',
      createdAt: 'Just now',
      timestamp: new Date().toISOString(),
      title: title.trim() || 'A reflection from the heart',
      content: content.trim(),
      supportCount: 1,
      commentCount: 0,
      isSupported: true,
      isSaved: false,
      tags: ['PersonalStory', 'CommunitySupport'],
      feedType: ['all', 'latest'],
      commentsPreview: [],
    };

    if (onPostCreated) {
      onPostCreated(newPost);
    }

    setContent('');
    setTitle('');
    setIsExpanded(false);
    showToast('Your story was safely shared to the community feed!', 'success');
  };

  return (
    <div className="create-post-card card-base active-composer">
      <form onSubmit={handleSubmit}>
        <div className="composer-top-row">
          <div className="composer-avatar">
            {isAnonymous ? <Shield size={18} /> : user.avatarLetter}
          </div>

          <div className="composer-input-area">
            {!isExpanded ? (
              <input
                type="text"
                className="composer-collapsed-trigger"
                placeholder="What's on your mind? Share your thoughts safely..."
                onFocus={() => setIsExpanded(true)}
                readOnly
              />
            ) : (
              <div className="composer-expanded-inputs animate-fade-in">
                <input
                  type="text"
                  className="composer-title-input"
                  placeholder="Give your story a gentle title (optional)..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="composer-content-textarea"
                  placeholder="Write freely. Your voice is respected and protected here..."
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  autoFocus
                  required
                />
              </div>
            )}
          </div>
        </div>

        {isExpanded && (
          <div className="composer-controls-row animate-fade-in">
            {/* Category Select */}
            <div className="composer-meta-selectors">
              <select
                className="composer-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Select post category"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              {/* Anonymity Toggle */}
              <button
                type="button"
                className={`anonymity-toggle-chip ${isAnonymous ? 'active-anon' : ''}`}
                onClick={() => setIsAnonymous(!isAnonymous)}
                title="Toggle between Anonymous and Public author identity"
              >
                {isAnonymous ? <Lock size={13} /> : <Globe size={13} />}
                <span>{isAnonymous ? 'Anonymous' : 'Public Name'}</span>
              </button>
            </div>

            {/* Actions */}
            <div className="composer-action-btns">
              <button
                type="button"
                className="btn-ghost composer-cancel-btn"
                onClick={() => {
                  setIsExpanded(false);
                  setContent('');
                  setTitle('');
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn-primary composer-submit-btn"
                disabled={!content.trim()}
              >
                <Send size={15} />
                <span>Share Story</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

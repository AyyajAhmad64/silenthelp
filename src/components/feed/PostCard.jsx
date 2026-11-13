import React, { useState } from 'react';
import {
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  Shield,
  Globe,
  Send,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ShareModal } from './ShareModal';
import './Feed.css';

export const PostCard = ({ post, onCategoryClick }) => {
  const { isLoggedIn, user, openAuthModal, showToast } = useAuth();

  // Local state for interactive support toggle
  const [isSupported, setIsSupported] = useState(post.isSupported || false);
  const [supportCount, setSupportCount] = useState(post.supportCount || 0);
  const [isSaved, setIsSaved] = useState(post.isSaved || false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.commentsPreview || []);
  const [newComment, setNewComment] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Content length preview threshold (approx 260 chars)
  const isLongContent = post.content.length > 260;
  const displayContent = isLongContent && !isExpanded
    ? post.content.slice(0, 260) + '...'
    : post.content;

  const handleSupportToggle = () => {
    if (!isLoggedIn) {
      openAuthModal('login');
      return;
    }
    if (isSupported) {
      setIsSupported(false);
      setSupportCount(prev => Math.max(0, prev - 1));
      showToast('Support removed', 'info');
    } else {
      setIsSupported(true);
      setSupportCount(prev => prev + 1);
      showToast('You sent warm support to this author!', 'success');
    }
  };

  const handleSaveToggle = () => {
    if (!isLoggedIn) {
      openAuthModal('login');
      return;
    }
    setIsSaved(!isSaved);
    showToast(isSaved ? 'Removed from saved posts' : 'Post saved for later reflection', 'info');
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    if (!isLoggedIn) {
      openAuthModal('login');
      return;
    }

    const created = {
      id: `c-${Date.now()}`,
      author: user.anonymousAlias || user.name,
      text: newComment.trim(),
      time: 'Just now',
    };

    setComments(prev => [...prev, created]);
    setNewComment('');
    showToast('Your supportive comment was posted!', 'success');
  };

  return (
    <article className="post-card card-base" id={post.id} aria-label={`Story by ${post.author.name}`}>
      {/* Post Header */}
      <div className="post-card-header">
        <div className="post-author-group">
          <div
            className={`author-avatar ${post.author.isAnonymous ? 'anon-avatar' : 'public-avatar'}`}
          >
            {post.author.isAnonymous ? (
              <Shield size={16} />
            ) : (
              <span>{post.author.avatarInitial || 'U'}</span>
            )}
          </div>

          <div className="author-meta">
            <div className="author-name-row">
              <span className="author-name">{post.author.name}</span>
              <span
                className={`identity-badge ${post.author.isAnonymous ? 'anon-badge' : 'public-badge'}`}
              >
                {post.author.isAnonymous ? (
                  <>
                    <Shield size={11} />
                    <span>Anonymous</span>
                  </>
                ) : (
                  <>
                    <Globe size={11} />
                    <span>Public</span>
                  </>
                )}
              </span>
            </div>
            <div className="post-time-meta">
              <span>{post.createdAt}</span>
            </div>
          </div>
        </div>

        {/* Category Pill */}
        <button
          className="post-category-tag"
          onClick={() => onCategoryClick && onCategoryClick(post.category)}
          title={`Filter feed by ${post.category}`}
        >
          {post.category}
        </button>
      </div>

      {/* Post Title */}
      <h3 className="post-title">{post.title}</h3>

      {/* Post Content Preview */}
      <div className="post-content-body">
        <p className="post-text">{displayContent}</p>
        {isLongContent && (
          <button
            className="toggle-expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>

      {/* Post Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="post-tags-container">
          {post.tags.map((tag) => (
            <span key={tag} className="post-tag-item">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Post Actions Bar */}
      <div className="post-actions-bar">
        {/* Support Button (Hearts/Warmth) */}
        <button
          className={`post-action-btn support-btn ${isSupported ? 'supported' : ''}`}
          onClick={handleSupportToggle}
          aria-label={isSupported ? 'Remove support' : 'Support this post'}
        >
          <Heart size={18} className={isSupported ? 'heart-filled' : ''} />
          <span className="action-count">{supportCount}</span>
          <span className="action-label">Support</span>
        </button>

        {/* Comments Button */}
        <button
          className={`post-action-btn comment-btn ${showComments ? 'active' : ''}`}
          onClick={() => setShowComments(!showComments)}
          aria-label="View or write comments"
        >
          <MessageSquare size={18} />
          <span className="action-count">{comments.length}</span>
          <span className="action-label">Comments</span>
        </button>

        {/* Share Button */}
        <button
          className="post-action-btn share-btn"
          onClick={() => setIsShareModalOpen(true)}
          aria-label="Share post"
        >
          <Share2 size={18} />
          <span className="action-label">Share</span>
        </button>

        {/* Save / Bookmark Button */}
        <button
          className={`post-action-btn save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSaveToggle}
          aria-label={isSaved ? 'Remove from saved' : 'Save post'}
        >
          <Bookmark size={18} className={isSaved ? 'bookmark-filled' : ''} />
        </button>
      </div>

      {/* Expandable Comments Section */}
      {showComments && (
        <div className="post-comments-section animate-slide-down">
          {comments.length > 0 && (
            <div className="comments-list">
              {comments.map((c) => (
                <div key={c.id} className="comment-bubble">
                  <div className="comment-bubble-header">
                    <span className="comment-author">{c.author}</span>
                    <span className="comment-time">{c.time}</span>
                  </div>
                  <p className="comment-body">{c.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Quick Comment Input */}
          <form onSubmit={handleAddComment} className="comment-composer-form">
            <input
              type="text"
              placeholder={
                isLoggedIn
                  ? 'Leave a kind, supportive thought anonymously...'
                  : 'Log in to leave a warm message...'
              }
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="comment-input"
            />
            <button
              type="submit"
              className="comment-send-btn"
              disabled={!newComment.trim()}
              aria-label="Post comment"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Share Modal Dialog */}
      <ShareModal
        post={post}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </article>
  );
};

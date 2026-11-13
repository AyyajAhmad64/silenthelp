import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Feed.css';

export const ShareModal = ({ post, isOpen, onClose }) => {
  const { showToast } = useAuth();
  const [copied, setCopied] = useState(false);

  if (!isOpen || !post) return null;

  const shareUrl = window.location.origin + '#' + post.id;
  const shareText = `Read this moving reflection on Silent Help: "${post.title}"`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      showToast('Link copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleWhatsAppShare = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${shareText}\n${shareUrl}`
    )}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="share-modal-card card-base animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="share-modal-header">
          <div className="share-title-group">
            <Share2 size={18} className="purple-text" />
            <h3>Share Story</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close share dialog">
            <X size={18} />
          </button>
        </div>

        <p className="share-preview-text">
          "{post.title}" by {post.author.name}
        </p>

        <div className="share-options-list">
          {/* Copy Link */}
          <div className="share-option-row">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="share-url-input"
              aria-label="Story URL"
            />
            <button className="btn-primary copy-link-btn" onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* WhatsApp Action */}
          <button className="whatsapp-share-btn" onClick={handleWhatsAppShare}>
            <MessageCircle size={18} />
            <span>Share via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

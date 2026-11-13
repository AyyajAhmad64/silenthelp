import React from 'react';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { AbstractIllustration } from './AbstractIllustration';
import './HeroSection.css';

export const HeroSection = ({ onShareStoryClick, onExploreClick }) => {
  const { isLoggedIn, openAuthModal } = useAuth();

  const handleShareClick = () => {
    if (onShareStoryClick) {
      onShareStoryClick();
    } else if (!isLoggedIn) {
      openAuthModal('register');
    }
  };

  const handleExploreClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('feed-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section card-base" aria-label="Welcome Introduction">
      <div className="hero-split-container">
        {/* Left Column: Headline and Call-to-Actions */}
        <div className="hero-content">
          <div className="hero-trust-badge">
            <ShieldCheck size={16} className="purple-text" />
            <span>100% Anonymous & Judgment-Free Support</span>
          </div>

          <h1 className="hero-headline">
            You Are <span className="purple-gradient-text">Not Alone.</span>
          </h1>

          <p className="hero-description">
            Your feelings matter. Your voice deserves to be heard. Connect with compassionate peers who listen without judgment.
          </p>

          <div className="hero-actions">
            <button className="btn-primary hero-btn-main" onClick={handleShareClick}>
              <span>Share Your Story</span>
              <ArrowRight size={17} />
            </button>
            <button className="btn-secondary hero-btn-sub" onClick={handleExploreClick}>
              <span>Explore Community</span>
            </button>
          </div>

          <div className="hero-stats-mini">
            <div className="mini-stat-item">
              <span className="mini-stat-val">18,400+</span>
              <span className="mini-stat-lbl">Anonymous Stories</span>
            </div>
            <div className="mini-stat-divider" />
            <div className="mini-stat-item">
              <span className="mini-stat-val">24/7</span>
              <span className="mini-stat-lbl">Safe Space</span>
            </div>
            <div className="mini-stat-divider" />
            <div className="mini-stat-item">
              <span className="mini-stat-val">Zero</span>
              <span className="mini-stat-lbl">Identity Exposure</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Abstract Illustration */}
        <div className="hero-visual">
          <AbstractIllustration />
        </div>
      </div>
    </section>
  );
};

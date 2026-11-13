import React from 'react';
import { ArrowRight, HeartHandshake, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Sections.css';

export const FinalCTA = () => {
  const { isLoggedIn, openAuthModal } = useAuth();

  const handleJoinClick = () => {
    if (!isLoggedIn) {
      openAuthModal('register');
    } else {
      const el = document.getElementById('feed-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('feed-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="final-cta-section card-base" aria-label="Join Community Call to Action">
      <div className="cta-ambient-glow" />
      <div className="final-cta-content">
        <div className="cta-icon-wrapper">
          <HeartHandshake size={32} className="cta-icon" />
        </div>

        <h2 className="cta-headline">
          You Don't Have to Face Everything Alone.
        </h2>

        <p className="cta-description">
          Whether you need a listening ear at 2 AM or words of courage for a new journey, thousands of caring peers are waiting to walk with you.
        </p>

        <div className="cta-buttons-row">
          <button className="btn-primary cta-btn-primary" onClick={handleJoinClick}>
            <span>{isLoggedIn ? 'Share Another Story' : 'Join Silent Help'}</span>
            <ArrowRight size={17} />
          </button>
          <button className="btn-secondary cta-btn-secondary" onClick={handleExploreClick}>
            <span>Explore Discussions</span>
          </button>
        </div>

        <div className="cta-reassurance">
          <Shield size={14} className="purple-text" />
          <span>Always Free • 100% Anonymous • Non-Judgmental</span>
        </div>
      </div>
    </section>
  );
};

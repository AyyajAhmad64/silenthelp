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
          You Don't Have to Figure Everything Out Alone.
        </h2>

        <p className="cta-description">
          Whatever situation you're facing, share what's on your mind and connect with people who may be able to help.
        </p>

        <div className="cta-buttons-row">
          <button className="btn-primary cta-btn-primary" onClick={handleJoinClick}>
            <span>Ask for Help</span>
            <ArrowRight size={17} />
          </button>
          <button className="btn-secondary cta-btn-secondary" onClick={handleExploreClick}>
            <span>Explore Community</span>
          </button>
        </div>

        <div className="cta-reassurance">
          <Shield size={14} className="purple-text" />
          <span>Open Support • Optional Anonymous Identity • Empathetic Community</span>
        </div>
      </div>
    </section>
  );
};

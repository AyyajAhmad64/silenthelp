import React from 'react';
import { Heart, Shield, Sparkles, MessageCircleHeart } from 'lucide-react';
import './HeroSection.css';

export const AbstractIllustration = () => {
  return (
    <div className="hero-illustration-wrapper" aria-hidden="true">
      <div className="illustration-ambient-glow" />

      {/* Floating 3D Graphic Composition */}
      <div className="floating-canvas animate-float">
        {/* Core Glass Sphere */}
        <div className="sphere-outer">
          <div className="sphere-inner">
            <MessageCircleHeart size={54} className="core-icon" />
          </div>
        </div>

        {/* Orbiting Satellite 1: Anonymous Shield */}
        <div className="satellite sat-1">
          <Shield size={22} className="sat-icon" />
          <span className="sat-label">Anonymous</span>
        </div>

        {/* Orbiting Satellite 2: Compassion Heart */}
        <div className="satellite sat-2">
          <Heart size={20} className="sat-icon" />
          <span className="sat-label">Empathy</span>
        </div>

        {/* Orbiting Satellite 3: Sparkles of Hope */}
        <div className="satellite sat-3">
          <Sparkles size={20} className="sat-icon" />
          <span className="sat-label">Heal</span>
        </div>

        {/* Subtle Decorative Rings */}
        <svg className="orbit-rings-svg" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="purpleRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#9333ea" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6b21a8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="160" ry="80" stroke="url(#purpleRingGrad)" strokeWidth="1.5" fill="none" transform="rotate(-25 200 200)" />
          <ellipse cx="200" cy="200" rx="130" ry="60" stroke="url(#purpleRingGrad)" strokeWidth="1" strokeDasharray="6 6" fill="none" transform="rotate(20 200 200)" />
        </svg>
      </div>
    </div>
  );
};

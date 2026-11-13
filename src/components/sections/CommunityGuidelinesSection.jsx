import React from 'react';
import { Smile, Lock, ShieldAlert, MessageSquareHeart, CheckCircle } from 'lucide-react';
import { COMMUNITY_GUIDELINES_SUMMARY } from '../../data/mockWidgets';
import './Sections.css';

const ICON_MAP = {
  Smile,
  Lock,
  ShieldAlert,
  MessageSquareHeart,
};

export const CommunityGuidelinesSection = () => {
  return (
    <section className="guidelines-section card-base" id="guidelines-section" aria-label="Community Guidelines">
      <div className="guidelines-header">
        <div className="section-pill">
          <Lock size={15} className="purple-text" />
          <span>Core Safeguards</span>
        </div>
        <h2 className="section-heading">Our Community Standards</h2>
        <p className="section-subtext">
          Silent Help is built on mutual vulnerability and deep trust. These foundational principles keep our space healthy.
        </p>
      </div>

      <div className="guidelines-grid">
        {COMMUNITY_GUIDELINES_SUMMARY.map((g) => {
          const Icon = ICON_MAP[g.iconName] || Smile;
          return (
            <div key={g.title} className="guideline-card-inner">
              <div className="guideline-icon-box">
                <Icon size={22} className="purple-text" />
              </div>
              <div className="guideline-text">
                <h3 className="guideline-title">{g.title}</h3>
                <p className="guideline-desc">{g.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="guidelines-footnote">
        <CheckCircle size={16} className="purple-text" />
        <span>24/7 Human Moderation & AI-Assisted Harm Prevention Active</span>
      </div>
    </section>
  );
};

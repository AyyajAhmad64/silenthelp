import React from 'react';
import { Shield, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/mockWidgets';
import './Sections.css';

const ICON_MAP = {
  Shield,
  Heart,
  Sparkles,
};

export const HowItWorks = () => {
  return (
    <section className="how-it-works-section" id="how-it-works-section" aria-label="How Silent Help Works">
      <div className="section-title-bar center-text">
        <span className="section-eyebrow">Our Philosophy</span>
        <h2 className="section-heading">How Silent Help Works</h2>
        <p className="section-subtext centered">
          We built a sanctuary where emotional honesty is protected, celebrated, and met with compassion.
        </p>
      </div>

      <div className="steps-container">
        {HOW_IT_WORKS_STEPS.map((stepItem, index) => {
          const Icon = ICON_MAP[stepItem.iconName] || Sparkles;
          return (
            <div key={stepItem.step} className="step-card card-base">
              <div className="step-number-pill">{stepItem.step}</div>
              <div className="step-icon-circle">
                <Icon size={26} className="purple-text" />
              </div>
              <h3 className="step-title">{stepItem.title}</h3>
              <p className="step-desc">{stepItem.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

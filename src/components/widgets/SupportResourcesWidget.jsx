import React from 'react';
import { PhoneCall, HeartHandshake, ExternalLink } from 'lucide-react';
import { SUPPORT_RESOURCES } from '../../data/mockWidgets';
import './Widgets.css';

export const SupportResourcesWidget = () => {
  return (
    <div className="widget-card card-base support-resources-widget" aria-label="Support Resources & Helplines">
      <div className="widget-header">
        <div className="widget-title-group">
          <HeartHandshake size={17} className="purple-text" />
          <h3 className="widget-title">Support Helplines</h3>
        </div>
        <span className="free-tag">24/7 Free</span>
      </div>

      <p className="resources-intro">
        If you or someone you care about is experiencing immediate crisis or thoughts of self-harm, please connect with a verified professional immediately:
      </p>

      <div className="resources-list">
        {SUPPORT_RESOURCES.map((res) => (
          <div key={res.name} className="resource-item-box">
            <div className="resource-info">
              <span className="res-name">{res.name}</span>
              <span className="res-hours">{res.hours}</span>
              <span className="res-num">{res.number}</span>
            </div>
            <a
              href={`tel:${res.number.replace(/[^0-9+]/g, '')}`}
              className="btn-primary res-call-btn"
              title={`Call ${res.name}`}
            >
              <PhoneCall size={14} />
              <span>Call</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

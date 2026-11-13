import React from 'react';
import { BarChart2, ShieldAlert, Heart, Users, ShieldCheck, Info } from 'lucide-react';
import { COMMUNITY_STATS } from '../../data/mockWidgets';
import './Widgets.css';

const ICON_MAP = {
  ShieldAlert,
  Heart,
  Users,
  ShieldCheck,
};

export const CommunityStatsWidget = () => {
  return (
    <div className="widget-card card-base" aria-label="Community Statistics">
      <div className="widget-header">
        <div className="widget-title-group">
          <BarChart2 size={17} className="purple-text" />
          <h3 className="widget-title">Community Impact</h3>
        </div>
        <span className="demo-tag" title="Frontend prototype sample metrics">
          Sample Data
        </span>
      </div>

      <div className="stats-grid">
        {COMMUNITY_STATS.metrics.map((stat) => {
          const Icon = ICON_MAP[stat.icon] || Heart;
          return (
            <div key={stat.label} className="stat-card-inner">
              <div className="stat-top">
                <Icon size={16} className="stat-icon purple-text" />
                <span className="stat-value">{stat.value}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-desc">{stat.description}</span>
            </div>
          );
        })}
      </div>

      <div className="stats-disclaimer">
        <Info size={12} />
        <span>Mock statistics for frontend UI demonstration</span>
      </div>
    </div>
  );
};

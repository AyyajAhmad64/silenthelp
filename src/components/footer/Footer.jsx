import React from 'react';
import { HeartHandshake, Shield, Heart, Globe, ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Main Columns Grid */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <a href="#" className="footer-brand-logo" onClick={scrollToTop}>
              <div className="footer-brand-icon">
                <HeartHandshake size={20} />
              </div>
              <span className="footer-brand-name">
                Silent <span className="purple-gradient-text">Help</span>
              </span>
            </a>
            <p className="footer-mission-statement">
              An open community support platform to ask for guidance, share life situations, and connect with peers who can help.
            </p>
            <div className="footer-safe-badge">
              <Shield size={14} className="purple-text" />
              <span>Open Help Community • Optional Anonymous Posting</span>
            </div>
          </div>

          {/* Links Column 1: Platform */}
          <div className="footer-links-column">
            <h4 className="footer-column-title">Platform</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#how-it-works-section">About Us</a>
              </li>
              <li>
                <a href="#guidelines-section">Community Guidelines</a>
              </li>
              <li>
                <a href="#categories-section">Explore Topics</a>
              </li>
              <li>
                <a href="#feed-section">Community Feed</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Safety & Support */}
          <div className="footer-links-column">
            <h4 className="footer-column-title">Safety & Help</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#top" onClick={(e) => { e.preventDefault(); alert('Help & Support: Connect with peer moderators or call Tele-MANAS toll-free at 14416.'); }}>
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#top" onClick={(e) => { e.preventDefault(); alert('Contact Us: Reach out at support@silenthelp.org for platform inquiries.'); }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="tel:14416">
                  Emergency Helplines (24/7)
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Trust */}
          <div className="footer-links-column">
            <h4 className="footer-column-title">Legal & Trust</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#top" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: Silent Help guarantees strict privacy. Your real name or phone numbers are never stored in public posts.'); }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#top" onClick={(e) => { e.preventDefault(); alert('Terms & Conditions: Zero harassment policy. Respectful, empathetic peer communication required.'); }}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <span className="social-notice">Social links inactive until official release</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>© {new Date().getFullYear()} Silent Help. Built with compassion and care.</span>
          </div>

          <div className="footer-bottom-right">
            <span className="heart-love-text">
              <span>Made with</span>
              <Heart size={14} className="heart-icon purple-text" />
              <span>for anyone who ever felt alone</span>
            </span>
            <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll back to top">
              <ArrowUp size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

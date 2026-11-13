import React from 'react';
import { X, Moon, Sun, Globe, Check, ShieldCheck, Sliders } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './SettingsModal.css';

export const SettingsModal = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, setLanguage, availableLanguages } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="settings-modal-title">
      <div className="settings-modal-container animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="settings-modal-header">
          <div className="settings-header-title-group">
            <div className="settings-icon-box">
              <Sliders size={20} className="purple-text" />
            </div>
            <div>
              <h3 id="settings-modal-title" className="settings-title">Settings & Preferences</h3>
              <p className="settings-subtitle">Customize your interface and privacy experience</p>
            </div>
          </div>
          <button className="settings-close-btn" onClick={onClose} aria-label="Close settings">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="settings-modal-body">
          {/* 1. Theme Selection */}
          <div className="settings-group">
            <h4 className="settings-group-title">Theme Preference</h4>
            <p className="settings-group-desc">Select how Silent Help looks on your screen</p>

            <div className="theme-options-grid">
              <button
                type="button"
                className={`theme-option-card ${isDark ? 'active' : ''}`}
                onClick={() => {
                  if (!isDark) toggleTheme();
                }}
              >
                <div className="theme-card-icon">
                  <Moon size={22} className="purple-text" />
                </div>
                <div className="theme-card-info">
                  <span className="theme-name">Dark Theme</span>
                  <span className="theme-desc">Charcoal near-black with purple accents</span>
                </div>
                {isDark && <Check size={18} className="theme-active-check purple-text" />}
              </button>

              <button
                type="button"
                className={`theme-option-card ${!isDark ? 'active' : ''}`}
                onClick={() => {
                  if (isDark) toggleTheme();
                }}
              >
                <div className="theme-card-icon">
                  <Sun size={22} className="purple-text" />
                </div>
                <div className="theme-card-info">
                  <span className="theme-name">Light Theme</span>
                  <span className="theme-desc">Crisp off-white with purple accents</span>
                </div>
                {!isDark && <Check size={18} className="theme-active-check purple-text" />}
              </button>
            </div>
          </div>

          {/* 2. Language Selection */}
          <div className="settings-group">
            <div className="settings-group-header-row">
              <div>
                <h4 className="settings-group-title">Display Language</h4>
                <p className="settings-group-desc">Choose your preferred language for community navigation</p>
              </div>
              <Globe size={18} className="purple-text group-icon" />
            </div>

            <div className="language-options-grid">
              {availableLanguages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    className={`language-option-chip ${isSelected ? 'active' : ''}`}
                    onClick={() => setLanguage(lang.code)}
                  >
                    <div className="lang-info-block">
                      <span className="lang-label">{lang.label}</span>
                      <span className="lang-native-label">({lang.native})</span>
                    </div>
                    {isSelected && <Check size={16} className="purple-text" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Identity & Privacy Notice */}
          <div className="settings-group privacy-notice-box">
            <div className="privacy-notice-header">
              <ShieldCheck size={18} className="purple-text" />
              <span className="privacy-notice-title">Identity & Privacy Model</span>
            </div>
            <p className="privacy-notice-text">
              Silent Help is an open help and support community. For every post or discussion, you can choose whether to share with your <strong>Public Profile</strong> or post under an <strong>Anonymous Identity</strong>. Your choice is always respected.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="settings-modal-footer">
          <button className="btn-primary done-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

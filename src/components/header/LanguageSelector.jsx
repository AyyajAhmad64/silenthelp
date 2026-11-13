import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
];

export const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = LANGUAGES.find(l => l.code === selectedLang) || LANGUAGES[0];

  return (
    <div className="header-dropdown-container" ref={dropdownRef}>
      <button
        className="header-icon-btn language-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        title="Language Selection"
      >
        <Globe size={18} />
        <span className="lang-code-text">{current.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="header-dropdown-menu language-menu animate-slide-down">
          <div className="menu-header">Select Language</div>
          <div className="menu-list">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`menu-item-btn ${selectedLang === lang.code ? 'active' : ''}`}
                onClick={() => {
                  setSelectedLang(lang.code);
                  setIsOpen(false);
                }}
              >
                <div className="lang-text-group">
                  <span className="lang-name">{lang.label}</span>
                  <span className="lang-native">({lang.native})</span>
                </div>
                {selectedLang === lang.code && <Check size={16} className="active-check" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

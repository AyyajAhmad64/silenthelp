import React, { useState } from 'react';
import { X, Shield, Lock, Mail, UserCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

export const AuthModal = () => {
  const { isAuthModalOpen, authModalMode, closeAuthModal, login, openAuthModal } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const isRegister = authModalMode === 'register';

  return (
    <div className="modal-backdrop" onClick={closeAuthModal} role="dialog" aria-modal="true">
      <div className="auth-modal-card animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeAuthModal} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="auth-modal-header">
          <div className="auth-logo-badge">
            <Shield size={28} className="purple-text" />
          </div>
          <h2>{isRegister ? 'Join Silent Help' : 'Welcome Back'}</h2>
          <p className="auth-subtitle">
            {isRegister
              ? 'A compassionate sanctuary where you can share and heal safely.'
              : 'Log in to continue sharing, supporting peers, and reading stories.'}
          </p>
        </div>

        <div className="privacy-guarantee-card">
          <Lock size={15} className="purple-text" />
          <span>Strict Anonymity Guaranteed: Your real details are never displayed.</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {isRegister && (
            <div className="form-group">
              <label htmlFor="auth-name">Display Name</label>
              <div className="input-with-icon">
                <UserCheck size={16} className="field-icon" />
                <input
                  id="auth-name"
                  type="text"
                  placeholder="e.g. Alex (or keep anonymous)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isRegister}
                />
              </div>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-email">Email Address</label>
            <div className="input-with-icon">
              <Mail size={16} className="field-icon" />
              <input
                id="auth-email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="auth-pass">Password</label>
            <div className="input-with-icon">
              <Lock size={16} className="field-icon" />
              <input
                id="auth-pass"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary auth-submit-btn">
            {isRegister ? 'Create Free Account' : 'Sign In'}
          </button>
        </form>

        <div className="auth-modal-footer">
          {isRegister ? (
            <p>
              Already have an account?{' '}
              <button className="auth-switch-link" onClick={() => openAuthModal('login')}>
                Sign In
              </button>
            </p>
          ) : (
            <p>
              New to Silent Help?{' '}
              <button className="auth-switch-link" onClick={() => openAuthModal('register')}>
                Create Account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

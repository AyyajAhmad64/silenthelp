import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Visitor mode by default as per requirement to show visitor state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' | 'register'
  
  // Toast state
  const [toast, setToast] = useState(null);

  const mockUser = {
    id: 'usr_mock_1',
    name: 'Alex Rivera',
    avatarLetter: 'A',
    anonymousAlias: 'Courageous River #519',
    badge: 'Empathetic Peer',
    savedCount: 4,
    supportedCount: 23,
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = () => {
    setIsLoggedIn(true);
    closeAuthModal();
    showToast('Signed in successfully as ' + mockUser.name + ' (Demo)', 'success');
  };

  const logout = () => {
    setIsLoggedIn(false);
    showToast('Signed out. Viewing as visitor.', 'info');
  };

  const toggleAuthMode = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user: isLoggedIn ? mockUser : null,
        login,
        logout,
        toggleAuthMode,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        toast,
        showToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

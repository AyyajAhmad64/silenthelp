import React, { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { Header } from './components/header/Header';
import { LeftSidebar } from './components/sidebar/LeftSidebar';
import { MobileDrawer } from './components/sidebar/MobileDrawer';
import { BottomNav } from './components/sidebar/BottomNav';
import { HeroSection } from './components/hero/HeroSection';
import { CreatePostCard } from './components/feed/CreatePostCard';
import { CommunityFeed } from './components/feed/CommunityFeed';
import { CategoryExplorer } from './components/categories/CategoryExplorer';
import { TrendingDiscussions } from './components/sections/TrendingDiscussions';
import { HowItWorks } from './components/sections/HowItWorks';
import { CommunityGuidelinesSection } from './components/sections/CommunityGuidelinesSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { RightSidebar } from './components/widgets/RightSidebar';
import { Footer } from './components/footer/Footer';
import { AuthModal } from './components/header/AuthModal';
import { Plus, ArrowUp, CheckCircle, Info } from 'lucide-react';

export const App = () => {
  const { toast, isLoggedIn, openAuthModal } = useAuth();

  // Desktop sidebar collapse state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // Mobile drawer open state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Active navigation section
  const [activeNav, setActiveNav] = useState('home');
  // Selected category filter
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Scroll-to-top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreatePostTrigger = () => {
    if (!isLoggedIn) {
      openAuthModal('register');
    } else {
      const el = document.getElementById('composer-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        const input = el.querySelector('input');
        if (input) input.focus();
      }
    }
  };

  return (
    <div className="app-container" id="top">
      {/* 1. Top Header */}
      <Header
        onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onOpenMobileDrawer={() => setIsDrawerOpen(true)}
        onSelectCategory={(catName) => setSelectedCategory(catName)}
        onSelectTopic={(topicTag) => {
          const el = document.getElementById('feed-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main 3-Column Responsive Body */}
      <div className="main-layout-wrapper">
        {/* Left Column: Persistent Desktop Navigation */}
        <div className={`sidebar-column ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
          <LeftSidebar
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            activeItem={activeNav}
            onItemClick={setActiveNav}
          />
        </div>

        {/* Center Column: Main Content & Feeds (in exact approved order) */}
        <main className="feed-column">
          {/* 2. Hero Section */}
          <HeroSection
            onShareStoryClick={handleCreatePostTrigger}
            onExploreClick={() => {
              const el = document.getElementById('feed-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 3. Compact Create Post */}
          <div id="composer-section">
            <CreatePostCard />
          </div>

          {/* 4. Community Feed */}
          <CommunityFeed
            selectedCategory={selectedCategory}
            onClearCategory={() => setSelectedCategory(null)}
            onCategoryClick={(catName) => {
              setSelectedCategory(catName);
              const el = document.getElementById('feed-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 5. Explore Categories */}
          <CategoryExplorer
            selectedCategory={selectedCategory}
            onSelectCategory={(catName) => setSelectedCategory(catName)}
          />

          {/* 6. Trending Discussions */}
          <TrendingDiscussions />

          {/* 7. How Silent Help Works */}
          <HowItWorks />

          {/* 8. Community Guidelines */}
          <CommunityGuidelinesSection />

          {/* 9. Final CTA */}
          <FinalCTA />
        </main>

        {/* Right Column: Widgets */}
        <div className="widgets-column">
          <RightSidebar
            onTopicClick={(topic) => {
              const el = document.getElementById('feed-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onCategoryClick={(catName) => {
              setSelectedCategory(catName);
              const el = document.getElementById('feed-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>

      {/* 10. Multi-column Footer */}
      <Footer />

      {/* Floating Action Controls */}
      <div className="floating-actions">
        {showScrollTop && (
          <button
            className="floating-btn scroll-top-btn animate-fade-in"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <button
          className="floating-btn primary-create"
          onClick={handleCreatePostTrigger}
          aria-label="Create a post"
          title="Share your story"
        >
          <Plus size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeItem={activeNav}
        onItemClick={setActiveNav}
      />

      {/* Mobile Bottom Navigation */}
      <BottomNav
        activeItem={activeNav}
        onNavClick={setActiveNav}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onCreatePostClick={handleCreatePostTrigger}
      />

      {/* Global Auth Modal for Login/Registration */}
      <AuthModal />

      {/* Toast Notification Banner */}
      {toast && (
        <div className={`toast-banner toast-${toast.type}`} role="status">
          {toast.type === 'success' ? (
            <CheckCircle size={18} className="purple-text" />
          ) : (
            <Info size={18} className="purple-text" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'hero')}>
          My Logo
        </a>

        <ul className="navbar-menu-desktop">
          <li>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>
              Portoflio
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
              Contact
            </a>
          </li>
          <li className="navbar-icon-item">
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} aria-label="Send Message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </li>
        </ul>

        <button
          className="navbar-hamburger"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Navigation</span>
            <button
              className="mobile-menu-close"
              onClick={toggleMobileMenu}
              aria-label="Close Navigation Menu"
            >
              &times;
            </button>
          </div>
          <ul className="mobile-menu-links">
            <li>
              <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>
                Portoflio
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

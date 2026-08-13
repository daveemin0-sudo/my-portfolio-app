import React from 'react';
import illustrationHeader from '../assets/images/Illustration-header.png';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-socials-vertical">
          <ul className="socials-vertical-list">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://angellist.com" target="_blank" rel="noopener noreferrer" aria-label="AngelList">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.25 2L8.75 14H11.5L16 2H13.25ZM6 7L1.5 19H4.25L8.75 7H6ZM17 12L12.5 24H15.25L19.75 12H17Z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Hey There.<br />
            I'm Adenola.
          </h1>
          <h2 className="hero-subtitle">I'm a Software Developer</h2>
          <p className="hero-description">
            I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-wrapper">
            <img src={illustrationHeader} alt="Header Illustration" className="hero-art-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

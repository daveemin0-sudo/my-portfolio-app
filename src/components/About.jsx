import React from 'react';
import illustrationHeader from '../assets/images/Illustration-header.png';

function About() {
  const handleResumeDownload = () => {
    alert('Thank you for requesting my resume! In a production deployment, this triggers a PDF download.');
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-main-grid">
          <div className="about-bio-content">
            <h2 className="about-title">About me</h2>
            <p className="about-description">
              Hey there! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
            </p>
            <button className="btn-primary" onClick={handleResumeDownload}>
              Get my resume
            </button>
          </div>

          <div className="about-art" aria-hidden="true">
            <img src={illustrationHeader} alt="About Me Illustration" className="about-art-img" />
          </div>
        </div>
        
        <div className="about-divider" />

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-bullet bullet-diamond" />
              <h3 className="skill-card-title">Language</h3>
            </div>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-bullet bullet-square" />
              <h3 className="skill-card-title">Frameworks</h3>
            </div>
            <ul className="skill-list">
              <li>React.js</li>
              <li>Ruby on Rails</li>
              <li>RSpec</li>
              <li>Capybara</li>
              <li>Selenium</li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-bullet bullet-circle" />
              <h3 className="skill-card-title">Skills</h3>
            </div>
            <ul className="skill-list">
              <li>Database Management</li>
              <li>Version Control</li>
              <li>CLI</li>
              <li>API Design</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

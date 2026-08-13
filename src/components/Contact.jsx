import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
    if (successMessage) setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.email.toLowerCase()) {
      setErrorMessage('Form submission failed: Email address must be in lowercase.');
      setSuccessMessage('');
      return;
    }

    const nameProvided = formData.fullName.trim() || formData.firstName.trim();
    if (!nameProvided || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setErrorMessage('');
    setSuccessMessage('Thank you! Your message has been sent successfully.');
    setFormData({ firstName: '', lastName: '', fullName: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-headline">
            I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
          </h2>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row-desktop-two">
              <div className="form-group">
                <label htmlFor="first-name" className="sr-only">First Name</label>
                <input
                  id="first-name"
                  type="text"
                  name="firstName"
                  className="form-input"
                  placeholder="First Name"
                  maxLength={30}
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name" className="sr-only">Last Name</label>
                <input
                  id="last-name"
                  type="text"
                  name="lastName"
                  className="form-input"
                  placeholder="Last Name"
                  maxLength={30}
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group form-full-name-mobile">
              <label htmlFor="full-name" className="sr-only">Full name</label>
              <input
                id="full-name"
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Full name"
                maxLength={60}
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="user-email" className="sr-only">Email address</label>
              <input
                id="user-email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user-message" className="sr-only">Write me something...</label>
              <textarea
                id="user-message"
                name="message"
                className="form-textarea"
                placeholder="Write me something..."
                rows={5}
                maxLength={500}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {errorMessage && (
              <div className="form-alert error" role="alert">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="form-alert success" role="status">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{successMessage}</span>
              </div>
            )}

            <button type="submit" className="btn-primary btn-submit">
              Get in touch
            </button>
          </form>
        </div>
      </div>

      <footer className="contact-footer">
        <ul className="footer-socials">
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>
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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
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
        <div className="footer-copyright">
          © {new Date().getFullYear()} Adenola. All rights reserved.
        </div>
      </footer>
    </section>
  );
}

export default Contact;

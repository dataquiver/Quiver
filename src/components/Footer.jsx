import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>DataQuiver</h4>
          <p>Creative + Tech Digital Services</p>
          <p className="tagline-sm">Design. Develop. Brand. Deliver.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:jeev9673@gmail.com">📧 jeev9673@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919972309439">📱 +91 9972309439</a>
            </li>
            <li>📍 Bangalore, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              📷 Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              📘 Facebook
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X">
              𝕏 X
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} DataQuiver — All rights reserved. | Design. Develop. Brand. Deliver.</p>
        </div>
      </div>
    </footer>
  )
}

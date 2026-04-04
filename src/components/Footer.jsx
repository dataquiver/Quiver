import React from 'react'
import { Link } from 'react-router-dom'

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
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
            <p className="social-placeholder">Instagram: profile link updating</p>
            <p className="social-placeholder">Facebook: profile link updating</p>
            <p className="social-placeholder">X: profile link updating</p>
            <p className="social-placeholder">LinkedIn: profile link updating</p>
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

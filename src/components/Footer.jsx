import React from 'react'
import { Link } from 'react-router-dom'
import { SITE_INFO } from '../config/site'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>{SITE_INFO.brandName}</h4>
          <p>Creative + Tech Digital Services</p>
          <p className="tagline-sm">{SITE_INFO.tagline}</p>
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
              <a href={`mailto:${SITE_INFO.email}`}>📧 {SITE_INFO.email}</a>
            </li>
            <li>
              <a href={`tel:${SITE_INFO.phoneE164}`}>📱 {SITE_INFO.phoneDisplay}</a>
            </li>
            <li>📍 {SITE_INFO.city}</li>
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
          <p>© {new Date().getFullYear()} {SITE_INFO.brandName} — All rights reserved. | {SITE_INFO.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

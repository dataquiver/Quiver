import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <>
      <section className="section about-hero">
        <div className="container">
          <h1>About DataQuiver</h1>
          <p className="lead">We are a creative and technical studio dedicated to delivering exceptional digital solutions that transform businesses.</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>DataQuiver was founded on a simple belief: great design and solid development should work together, not separately. We combine creative vision with technical expertise to deliver digital solutions that don't just look good—they work brilliantly.</p>
              <p>Since our inception, we've worked with startups, SMEs, and established businesses across various industries. Every project reinforces our commitment to quality, innovation, and client success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card">
              <h3>Design Excellence</h3>
              <p>We create beautiful, intuitive digital experiences that resonate with users and drive business results.</p>
            </div>
            <div className="mission-card">
              <h3>Technical Mastery</h3>
              <p>We build scalable, performant solutions using modern technologies and best practices.</p>
            </div>
            <div className="mission-card">
              <h3>Client Partnership</h3>
              <p>We collaborate closely with clients, understanding their goals and delivering solutions that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-expertise">
        <div className="container">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h4>Design & Branding</h4>
              <ul>
                <li>UI/UX Design</li>
                <li>Brand Identity</li>
                <li>Logo Design</li>
                <li>Marketing Collateral</li>
                <li>Social Media Graphics</li>
              </ul>
            </div>
            <div className="expertise-item">
              <h4>Web Development</h4>
              <ul>
                <li>Responsive Websites</li>
                <li>Web Applications</li>
                <li>E-commerce Solutions</li>
                <li>CMS Integration</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="expertise-item">
              <h4>Digital Solutions</h4>
              <ul>
                <li>Mobile App Design</li>
                <li>Digital Strategy</li>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h4>Quality First</h4>
              <p>Every pixel, every line of code. We maintain the highest standards in everything we deliver.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>We stay updated with latest trends and technologies to bring fresh ideas to your projects.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Transparency</h4>
              <p>Clear communication, realistic timelines, and honest feedback throughout the project journey.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Results Driven</h4>
              <p>We measure success by your business goals. Your growth is our growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container text-center">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss your project and create something extraordinary together.</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn primary">Explore Our Services</Link>
            <Link to="/contact" className="btn">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

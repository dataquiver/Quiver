import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uiuxImg from '../assets/uiux-design.jpg'
import webImg from '../assets/web-design.jpg'
import brandImg from '../assets/branding.jpg'
import uxImg from '../assets/user-experience-interface-design.jpg'

export default function Home(){
  const [whatsappForm, setWhatsappForm] = useState({
    name: '',
    service: '',
    comments: ''
  })

  const handleWhatsappInquiry = (e) => {
    e.preventDefault()
    const message = `Hello! I'm ${whatsappForm.name} and I'm interested in ${whatsappForm.service || 'your services'}.${whatsappForm.comments ? `\n\nProject Details:\n${whatsappForm.comments}` : ''}`
    const whatsappUrl = `https://wa.me/919972309439?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setWhatsappForm({ name: '', service: '', comments: '' })
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>gvvcccc  — Creative + Tech Digital Services</h1>
            <p className="tagline">Design. Develop. Brand. Deliver.</p>
            <div className="hero-ctas">
              <Link to="/portfolio" className="btn primary">Check our portfolio</Link>
              <a href="https://wa.me/919972309439?text=Hi, I'd like to inquire about your services." className="btn" target="_blank" rel="noopener noreferrer">Inquire on WhatsApp</a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/images/solution.jpg" alt="DataQuiver Labs illustration" style={{borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <h2>What we do</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src={uiuxImg} alt="UI/UX Design" className="service-image" />
              <h3>UI/UX Design</h3>
              <p>Figma-led product design for SaaS, mobile and website redesigns. We create intuitive interfaces that delight users and drive conversions.</p>
              <Link to="/services">Learn more →</Link>
            </div>
            <div className="service-card">
              <img src={webImg} alt="Web Design" className="service-image" />
              <h3>Web Development</h3>
              <p>Production-ready frontends, WordPress/Wix setups and performant builds. Modern, responsive, and fast websites designed to scale.</p>
              <Link to="/services">Learn more →</Link>
            </div>
            <div className="service-card">
              <img src={brandImg} alt="Branding" className="service-image" />
              <h3>Branding</h3>
              <p>Logo systems, marketing assets and social graphics to amplify your brand. Complete visual identity that tells your story.</p>
              <Link to="/services">Learn more →</Link>
            </div>
            <div className="service-card">
              <img src={uxImg} alt="User Experience" className="service-image" />
              <h3>Digital Strategy</h3>
              <p>End-to-end digital solutions combining design thinking with technical expertise. From concept to launch, we bring your vision to life.</p>
              <Link to="/services">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-preview">
        <div className="container">
          <h2>Latest Insights</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-tag">Design</div>
              <h3>The Future of UI/UX Design in 2025</h3>
              <p>Explore the latest trends in user interface and experience design. From dark mode adoption to AI-powered personalization, discover what's shaping the future of digital design.</p>
              <div className="blog-meta">
                <span>5 min read</span>
                <span>•</span>
                <span>Mar 2025</span>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-tag">Development</div>
              <h3>Building Fast & Performant Web Applications</h3>
              <p>Learn best practices for optimizing your web application performance. We cover code splitting, lazy loading, and modern frameworks that keep your site blazing fast.</p>
              <div className="blog-meta">
                <span>7 min read</span>
                <span>•</span>
                <span>Mar 2025</span>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-tag">Business</div>
              <h3>Branding Strategies That Actually Work</h3>
              <p>Your brand is more than just a logo. Discover how to build a cohesive brand identity that resonates with your audience and stands out in the market.</p>
              <div className="blog-meta">
                <span>6 min read</span>
                <span>•</span>
                <span>Feb 2025</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss your project and create something amazing together.</p>
          <form className="inquiry-form" onSubmit={handleWhatsappInquiry}>
            <input 
              type="text"
              placeholder="Your name"
              value={whatsappForm.name}
              onChange={(e) => setWhatsappForm({...whatsappForm, name: e.target.value})}
              required
            />
            <select 
              value={whatsappForm.service}
              onChange={(e) => setWhatsappForm({...whatsappForm, service: e.target.value})}
            >
              <option value="">Select service</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Web Development">Web Development</option>
              <option value="Branding">Branding</option>
              <option value="Digital Strategy">Digital Strategy</option>
            </select>
            <textarea 
              placeholder="Tell us about your project (optional)"
              value={whatsappForm.comments}
              onChange={(e) => setWhatsappForm({...whatsappForm, comments: e.target.value})}
              rows={4}
            ></textarea>
            <button type="submit" className="btn primary">Inquire via WhatsApp</button>
          </form>
        </div>
      </section>
    </>
  )
}

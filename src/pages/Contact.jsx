import React, { useState } from 'react'
import { SITE_INFO, buildWhatsAppUrl } from '../config/site'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const message = `Hello! My name is ${formData.name}. Email: ${formData.email}\n\nProject Details:\n${formData.message}`
    const whatsappUrl = buildWhatsAppUrl(message)
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="section contact-page">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-lead">
              We'd love to hear from you. Reach out via WhatsApp for instant support or use the contact form to share more details about your project.
            </p>
          </div>

          <div className="contact-options">
            <div className="contact-method">
              <div className="contact-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>Get instant response for quick conversations</p>
              <a href={buildWhatsAppUrl('Hi, I would like to discuss my project requirements.')} className="btn primary" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>{SITE_INFO.email}</p>
              <a href={`mailto:${SITE_INFO.email}`} className="btn">Send Email</a>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>{SITE_INFO.phoneDisplay}</p>
              <a href={`tel:${SITE_INFO.phoneE164}`} className="btn">Call Us</a>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Quick Inquiry Form</h3>
            <p>Fill out the form and we'll reach out via WhatsApp within 24 hours</p>
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <input 
                placeholder="Your name" 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                placeholder="Your email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <textarea 
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button className="btn primary full-width">Send via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

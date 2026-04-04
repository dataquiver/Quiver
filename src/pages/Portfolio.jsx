import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PreviewModal from '../components/PreviewModal'

const projects = [
  {
    id: 1,
    title: 'Fraapos — SaaS Platform',
    category: 'Web Development',
    description: 'Marketing site and landing for Fraapos SaaS offering.',
    img: '/images/fraapos.jpg',
    screenshots: ['/images/fraapos.jpg','/images/fraapos.jpg'],
    demo: 'https://fraapos.com',
    results: ['Clear product messaging', 'Fast first paint', 'Conversion-focused CTAs']
  },
  {
    id: 2,
    title: 'Loboprints — Printing Services',
    category: 'Web Development',
    description: 'Service site for Loboprints with catalog and contact flows.',
    img: '/images/LoboPrint.jpg',
    screenshots: ['/images/LoboPrint.jpg'],
    demo: 'https://loboprints.in',
    results: ['Improved lead capture', 'Mobile-optimized catalog', 'CMS for easy updates']
  },
  {
    id: 3,
    title: 'Lobostore — E‑commerce',
    category: 'E‑commerce',
    description: 'Full e-commerce storefront with product pages and checkout.',
    img: '/images/Lobo.jpg',
    screenshots: ['/images/Lobo.jpg','/images/Lobo.jpg'],
    demo: 'https://lobostore.in',
    results: ['Custom checkout', 'Payment integrations', 'Performance optimizations']
  },
  {
    id: 4,
    title: 'Colf Frontend — React App',
    category: 'Frontend',
    description: 'Frontend for Colf — built with React + Vite and deployed on Vercel.',
    img: '/images/colf.jpg',
    screenshots: ['/images/colf.jpg'],
    demo: 'https://colf-frontend.vercel.app',
    results: ['Responsive UI', 'Vercel deployment', 'React + Vite']
  },
  {
    id: 5,
    title: 'E‑commerce Landing',
    category: 'UI/UX',
    description: 'Landing page focused on conversions and product storytelling.',
    img: '/images/project2.svg',
    demo: '',
    results: ['Higher engagement', 'A/B test winners']
  }
]

export default function Portfolio(){
  const [preview, setPreview] = useState(null)
  return (
    <>
      <section className="section" style={{paddingTop: '120px', background: 'linear-gradient(135deg, #f8fafc 0%, #f0f7ff 100%)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <h1 style={{marginBottom: '16px'}}>Our Portfolio</h1>
            <p style={{color: '#6b7280', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>
              Showcasing our recent work across UI/UX design, web development, and branding projects.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map(p => {
              const base = import.meta.env.BASE_URL || '/'
              const imgSrc = p.img && p.img.startsWith('/') ? base + p.img.replace(/^\//, '') : (p.img || '')
              const screenshots = (p.screenshots || []).map(s => s && s.startsWith('/') ? base + s.replace(/^\//, '') : s)
              const project = { ...p, img: imgSrc, screenshots }
              const hasLiveDemo = /^https?:\/\//.test(project.demo)
              return (
                <article key={p.id} className="project-card">
                <div className="project-media">
                  <img src={project.img} alt={p.title} loading="lazy" />
                </div>
                <div className="project-content">
                  <div className="project-meta">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-results">
                    <p className="muted strong">Key Results:</p>
                    <ul>
                        {project.results && project.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                    </ul>
                  </div>

                  <div className="project-actions">
                    {hasLiveDemo ? (
                      <>
                        <button className="btn" onClick={()=>setPreview(project)}>Live Preview</button>
                        <a className="btn primary" href={project.demo} target="_blank" rel="noopener noreferrer">Open live</a>
                      </>
                    ) : (
                      <button className="btn disabled" type="button" disabled>No live demo yet</button>
                    )}
                  </div>
                </div>
                </article>
              )
              })}
          </div>
        </div>
      </section>

      {preview && (
        <PreviewModal project={preview} onClose={()=>setPreview(null)} />
      )}

      <section className="section cta-section">
        <div className="container cta-content">
          <h2>Interested in Working With Us?</h2>
          <p>Let's create something amazing together. Get in touch today!</p>
          <Link to="/contact" className="btn primary">Start Your Project</Link>
        </div>
      </section>
    </>  )
}

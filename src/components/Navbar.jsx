import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Prevent scroll when menu is open (mobile UX)
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav premium-nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <img src="/images/FinalLogoQ.svg" alt="DataQuiver" className="brand-logo" />
        </Link>

        <button
          className={`menu-btn ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Overlay for mobile menu */}
        <div className={`nav-overlay${open ? ' show' : ''}`} onClick={() => setOpen(false)} />

        <nav className={`links premium-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
          {/* Close icon for mobile menu */}
          <button className="close-menu-btn" aria-label="Close menu" tabIndex={open ? 0 : -1} onClick={e => { e.stopPropagation(); setOpen(false) }}>
            <span aria-hidden="true">×</span>
          </button>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="cta">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

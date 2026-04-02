import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
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

        <nav className={`links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
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

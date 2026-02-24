import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/Logo.png'

const navLinks = [
  { href: '#stats', label: 'ABOUT' },
  { href: '#features', label: 'SERVICES' },
  { href: '#integrations', label: 'INTEGRATIONS' },
  { href: '#faqs', label: 'FAQS' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navbarContent = (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <motion.a href="/" className="navbar-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <img src={logoImg} alt="Cocomo" className="navbar-logo-img" />
          <span className="navbar-brand">
            <span className="navbar-text">COCOMO</span>
            <span className="navbar-sub">Media</span>
          </span>
        </motion.a>

        <div className="navbar-links navbar-links-desktop">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#cta" className="navbar-cta">Book a demo</a>
        </div>

        <button
          type="button"
          className="navbar-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#cta" className="navbar-cta-mobile" onClick={() => setMenuOpen(false)}>Book a demo</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2.5rem;
          padding-top: max(1.25rem, env(safe-area-inset-top));
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.3s;
        }
        .navbar:hover { background: rgba(0, 0, 0, 0.92); }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .navbar-logo-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }
        .navbar-brand {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }
        .navbar-text {
          font-family: var(--font-heading);
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: white;
        }
        .navbar-sub {
          font-size: 0.6rem;
          font-weight: 500;
          color: var(--silver);
          letter-spacing: 0.2em;
          vertical-align: baseline;
        }
        .navbar-links-desktop { display: flex; align-items: center; gap: 2rem; }
        .navbar-links a {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--silver);
          text-decoration: none;
          transition: color 0.2s;
        }
        .navbar-links a:hover { color: white; }
        .navbar-cta {
          padding: 0.6rem 1.25rem;
          background: var(--accent);
          border-radius: 6px;
          color: white !important;
          transition: all 0.3s;
        }
        .navbar-cta:hover {
          background: var(--accent-dim);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 44px;
          height: 44px;
          padding: 10px;
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .navbar-hamburger:hover { border-color: var(--accent); }
        .hamburger-line {
          display: block;
          width: 100%;
          height: 2px;
          background: white;
          border-radius: 1px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger-line:nth-child(1).open { transform: translateY(8px) rotate(45deg); }
        .hamburger-line:nth-child(2).open { opacity: 0; }
        .hamburger-line:nth-child(3).open { transform: translateY(-8px) rotate(-45deg); }
        .navbar-mobile-menu {
          position: fixed;
          top: 73px;
          left: 0;
          right: 0;
          z-index: 999;
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 2rem;
          gap: 0.5rem;
          overflow: hidden;
        }
        .navbar-mobile-menu a {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--silver);
          text-decoration: none;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-subtle);
          transition: color 0.2s;
        }
        .navbar-mobile-menu a:hover { color: white; }
        .navbar-cta-mobile {
          margin-top: 0.5rem;
          padding: 1rem !important;
          background: var(--accent);
          color: white !important;
          border-radius: 8px;
          border: none !important;
          text-align: center;
        }
        @media (max-width: 768px) {
          .navbar-links-desktop { display: none; }
          .navbar-hamburger { display: flex; }
          .navbar { padding: 1rem 1.5rem; padding-top: max(1rem, env(safe-area-inset-top)); }
        }
        @media (max-width: 480px) {
          .navbar { padding: 1rem 1.25rem; padding-top: max(1rem, env(safe-area-inset-top)); }
          .navbar-mobile-menu { top: 65px; padding: 1.25rem 1.5rem; }
        }
      `}</style>
    </>
  )

  return typeof document !== 'undefined'
    ? createPortal(navbarContent, document.body)
    : navbarContent
}

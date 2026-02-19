import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CompanyCards3D from './CompanyCards3D'
import logoImg from '../assets/Logo.png'

const navLinks = [
  { href: '#stats', label: 'ABOUT' },
  { href: '#features', label: 'SERVICES' },
  { href: '#integrations', label: 'INTEGRATIONS' },
  { href: '#faqs', label: 'FAQS' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="hero section">
      <nav className="nav nav-fixed">
        <motion.a href="/" className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <img src={logoImg} alt="Cocomo" className="nav-logo-img" />
          <span className="logo-brand">
            <span className="logo-text">COCOMO</span>
            <span className="logo-sub">Media</span>
          </span>
        </motion.a>

        <div className="nav-links nav-links-desktop">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href="#cta" className="btn-nav-cta">Book a demo</a>
        </div>

        <button
          type="button"
          className="nav-hamburger"
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
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#cta" className="btn-nav-cta-mobile" onClick={() => setMenuOpen(false)}>Book a demo</a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          All your marketing needs in one single place
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Crystal-clear strategy and <strong>20+ creative minds</strong> at your disposal. 
          Design, develop, create ads, and more — a powerhouse of specialized expertise.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a href="#cta" className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            Book a demo
          </motion.a>
          <motion.a href="#features" className="btn-secondary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            View Services →
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="scroll-line" />
          SCROLL
        </motion.div>

        <motion.div className="companies" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          <CompanyCards3D />
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100svh;
          flex-direction: column;
          padding: 7rem 2.5rem 4rem;
        }
        @media (max-width: 768px) { .hero { padding: 6rem 1.5rem 3rem; } }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0 2rem;
        }
        .nav-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 2.5rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.3s;
        }
        .nav-fixed:hover { background: rgba(0, 0, 0, 0.8); }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .nav-logo-img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }
        .logo-brand {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }
        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: white;
        }
        .logo-sub {
          font-size: 0.6rem;
          font-weight: 500;
          color: var(--silver);
          letter-spacing: 0.2em;
          vertical-align: baseline;
        }
        .nav-links-desktop { display: flex; align-items: center; gap: 2rem; }
        .nav-links a {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--silver);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: white; }
        .btn-nav-cta {
          padding: 0.6rem 1.25rem;
          background: var(--accent);
          border-radius: 6px;
          color: white !important;
          transition: all 0.3s;
        }
        .btn-nav-cta:hover {
          background: var(--accent-dim);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .nav-hamburger {
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
        .nav-hamburger:hover { border-color: var(--accent); }
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

        .nav-mobile-menu {
          position: fixed;
          top: 73px;
          left: 0;
          right: 0;
          z-index: 99;
          background: rgba(0, 0, 0, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 2rem;
          gap: 0.5rem;
          overflow: hidden;
        }
        .nav-mobile-menu a {
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
        .nav-mobile-menu a:hover { color: white; }
        .btn-nav-cta-mobile {
          margin-top: 0.5rem;
          padding: 1rem !important;
          background: var(--accent);
          color: white !important;
          border-radius: 8px;
          border: none !important;
          text-align: center;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 600;
          letter-spacing: 0.01em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
          animation: hero-title-float 6s ease-in-out infinite;
        }
        @keyframes hero-title-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .hero-tagline {
          font-size: 1.15rem;
          color: var(--silver);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 600px;
        }
        .hero-tagline strong { color: white; }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3rem;
        }
        @media (max-width: 480px) {
          .hero-buttons { flex-direction: column; width: 100%; max-width: 280px; margin-left: auto; margin-right: auto; }
          .btn-primary, .btn-secondary { width: 100%; text-align: center; padding: 1rem 1.5rem; min-height: 48px; }
        }
        .btn-primary, .btn-secondary {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .btn-primary {
          background: var(--accent);
          color: white;
          border: none;
        }
        .btn-primary:hover {
          background: var(--accent-dim);
          box-shadow: 0 0 30px var(--accent-glow);
        }
        .btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid var(--silver);
        }
        .btn-secondary:hover {
          border-color: white;
          color: white;
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          margin-bottom: 3rem;
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent), transparent);
        }

        .companies { width: 100%; max-width: 100%; margin-top: 2rem; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .nav-hamburger { display: flex; }
          .hero-title { font-size: 2rem; }
          .hero-tagline { font-size: 1rem; }
        }
        @media (max-width: 480px) {
          .hero { padding: 5.5rem 1.25rem 3rem; }
          .hero-title { font-size: 1.75rem; }
          .nav-fixed { padding: 1rem 1.25rem; }
          .nav-mobile-menu { top: 65px; padding: 1.25rem 1.5rem; }
        }
      `}</style>
    </section>
  )
}

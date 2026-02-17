import { motion } from 'framer-motion'
import CompanyCards3D from './CompanyCards3D'
import logoImg from '../assets/Logo.png'

export default function Hero() {
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
        <motion.div className="nav-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <a href="#stats">ABOUT</a>
          <a href="#features">SERVICES</a>
          <a href="#integrations">INTEGRATIONS</a>
          <a href="#faqs">FAQS</a>
          <a href="#cta" className="btn-nav-cta">Book a demo</a>
        </motion.div>
      </nav>

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
        .nav-links { display: flex; align-items: center; gap: 2rem; }
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
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
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
          .nav-links { display: none; }
          .hero-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'
import CompanyCards3D from './CompanyCards3D'

export default function Hero() {
  return (
    <section className="hero section">
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
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 768px) { .hero { padding: 6rem 1.5rem 3rem; } }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0;
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

        .companies { width: 100%; max-width: 100%; margin-top: 2rem; overflow-x: hidden; }
        @media (max-width: 768px) {
          .hero-title { font-size: 2rem; }
          .hero-tagline { font-size: 1rem; }
        }
        @media (max-width: 480px) {
          .hero { padding: 5.5rem 1.25rem 3rem; }
          .hero-title { font-size: 1.75rem; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function FloatingCTA() {
  return (
    <motion.a
      href="#cta"
      className="floating-cta"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 30px var(--accent-glow)' }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      <span className="floating-cta-dot" />
      <style>{`
        .floating-cta {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #0a0a0a;
          border: 2px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          box-shadow: 0 0 20px var(--accent-glow);
          transition: all 0.3s;
        }
        .floating-cta-dot {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @media (max-width: 768px) {
          .floating-cta { bottom: 1.25rem; right: 1.25rem; width: 52px; height: 52px; }
        }
        @media (max-width: 480px) {
          .floating-cta { bottom: 1rem; right: 1rem; width: 48px; height: 48px; }
        }
      `}</style>
    </motion.a>
  )
}

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const companies = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png' },
]

const CARD_WIDTH = 200
const GAP = 20
const TRACK_WIDTH = companies.length * CARD_WIDTH + (companies.length - 1) * GAP

export default function CompanyCards3D() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <>
    <motion.div
      ref={ref}
      className="brand-section"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <p className="brand-label">ALREADY CHOSEN BY THESE MARKET LEADERS</p>
      <div className="brand-track-wrapper">
        <motion.div
          className="brand-track"
          animate={{ x: [0, -TRACK_WIDTH] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...companies, ...companies].map((c, i) => (
            <motion.div
              key={`${c.name}-${i}`}
              className="brand-card glass-card glass-shine-card"
              whileHover={{
                scale: 1.03,
                borderColor: 'rgba(29, 185, 84, 0.5)',
                boxShadow: '0 0 30px rgba(29, 185, 84, 0.2)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <img src={c.logo} alt={c.name} className="brand-logo" referrerPolicy="no-referrer" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show') }} />
              <span className="brand-name brand-name-fallback">{c.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
      <style>{`
        .brand-section {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-top: 3rem;
          padding: 0 2rem;
          box-sizing: border-box;
        }
        .brand-label {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          text-align: center;
        }
        .brand-track-wrapper {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
        }
        .brand-track {
          display: flex;
          gap: ${GAP}px;
          width: max-content;
          padding: 0.5rem 0;
        }
        .brand-card {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: ${CARD_WIDTH}px;
          min-width: ${CARD_WIDTH}px;
          height: 80px;
          padding: 0 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          cursor: default;
          transition: all 0.3s;
        }
        .brand-logo {
          height: 36px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          opacity: 0.95;
          filter: brightness(0) invert(1);
        }
        .brand-name-fallback {
          display: none;
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: white;
        }
        .brand-name-fallback.show {
          display: block;
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .brand-section { padding: 0 1rem; }
          .brand-card { width: 160px; min-width: 160px; height: 70px; }
          .brand-logo { height: 28px; }
        }
      `}</style>
    </>
  )
}

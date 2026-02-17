import { motion } from 'framer-motion'

const items = [
  'GROWTH', 'STRATEGY', 'INFLUENCER', 'BRANDING', 'SEO', 'ADS', 'MEDIA',
  'GROWTH', 'STRATEGY', 'INFLUENCER', 'BRANDING', 'SEO', 'ADS', 'MEDIA',
]

export default function ScrollingMarquee() {
  return (
    <div className="marquee-wrap">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, -1920] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            {i < items.length - 1 && <span className="marquee-dot" />}
          </span>
        ))}
      </motion.div>
      <style>{`
        .marquee-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          overflow: hidden;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
        }
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .marquee-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent-red);
          box-shadow: 0 0 8px var(--accent-red-glow);
        }
      `}</style>
    </div>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '20+', label: 'Creative Minds', desc: 'A powerhouse of specialized experts across every marketing discipline.' },
  { value: '24h', label: 'Turnaround', desc: 'Launch projects in less than a day. Perfect for tight deadlines.' },
  { value: '50%+', label: 'Output Growth', desc: 'Outpace your average agency\'s output with our integrated team.' },
  { value: '100%', label: 'Dedication', desc: 'Every detail meticulously crafted to perfection.' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" className="section stats" ref={ref}>
      <div className="section-inner">
        <motion.h2
          className="section-title stats-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Meet the new generation of digital marketing
        </motion.h2>
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card glass-shine-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="stat-value stat-value-animated">{s.value}</span>
              <span className="stat-label">{s.label}</span>
              <p className="stat-desc">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .stats-title {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          text-transform: none;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          line-height: 1.3;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr; gap: 1rem; }
          .stats-title { font-size: 1.5rem; margin-bottom: 2rem; }
        }
        .stat-card {
          position: relative;
          padding: 2rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          transition: all 0.3s;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .stat-card {
            padding: 1.75rem 1.25rem;
            border-radius: 14px;
            min-height: 140px;
          }
        }
        .stat-value-animated {
          animation: stat-pulse 3s ease-in-out infinite;
        }
        @keyframes stat-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.95; }
        }
        .stat-card:hover {
          border-color: var(--border-accent);
          box-shadow: 0 10px 40px -15px var(--accent-glow);
        }
        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          display: block;
        }
        .stat-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

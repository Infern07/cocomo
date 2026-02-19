import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const integrations = [
  { name: 'Figma', desc: 'Collaborative interface design tool.', shape: 'circle', tag: 'DESIGN' },
  { name: 'Notion', desc: 'All-in-one workspace for notes and docs.', shape: 'diamond', tag: 'DOCS' },
  { name: 'Slack', desc: 'Powerful team communication platform.', shape: 'diamond', tag: 'COMMS' },
  { name: 'Relume', desc: 'No-code website builder and design system.', shape: 'square', tag: 'BUILD' },
  { name: 'Framer', desc: 'Professional website prototyping tool.', shape: 'double-circle', tag: 'PROTO' },
  { name: 'GitHub', desc: 'Leading platform for code collaboration.', shape: 'diamond', tag: 'CODE' },
]

function MorphIcon({ shape }) {
  if (shape === 'circle') {
    return (
      <motion.div
        className="morph-icon morph-circle"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }
  if (shape === 'square') {
    return (
      <motion.div
        className="morph-icon morph-square"
        animate={{ rotate: [0, 45, 90, 45, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }
  if (shape === 'diamond') {
    return (
      <motion.div
        className="morph-icon morph-diamond"
        animate={{ rotate: [45, 90, 135, 90, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }
  if (shape === 'double-circle') {
    return (
      <motion.div className="morph-icon-wrap">
        <motion.div
          className="morph-icon morph-circle morph-outer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="morph-icon morph-circle morph-inner"
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
      </motion.div>
    )
  }
  return null
}

export default function Integrations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="integrations" className="section integrations" ref={ref}>
      <div className="section-inner integrations-inner">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" /> INTEGRATIONS
        </motion.div>
        <motion.h2
          className="section-title integrations-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Plays Well With Others
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Cocomo seamlessly connects with your favorite tools, streamlines workflow, and enables collaboration across brands, platforms, and teams.
        </motion.p>

        <motion.div
          className="integrations-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              className="integration-card glass-card glass-shine-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 120, damping: 20 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: '0 25px 50px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(29, 185, 84, 0.5), 0 0 40px rgba(29, 185, 84, 0.15)',
              }}
            >
              <div className="integration-card-glow" />
              <span className="integration-tag">{item.tag}</span>
              <div className="integration-icon-wrap">
                <MorphIcon shape={item.shape} />
                <motion.span
                  className="integration-icon-dot"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .integrations-inner { max-width: 1200px; }
        .section-desc { margin-bottom: 2.5rem; }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .integrations-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .integrations-grid { grid-template-columns: 1fr; }
        }

        .integration-card {
          position: relative;
          padding: 2rem 1.75rem;
          text-align: left;
          overflow: hidden;
          border-radius: 16px;
        }
        @media (max-width: 768px) {
          .integrations-grid { gap: 1rem; }
          .integration-card {
            padding: 1.5rem 1.25rem;
            border-radius: 14px;
          }
        }
        .integration-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(29, 185, 84, 0.06) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .integration-card:hover .integration-card-glow {
          opacity: 1;
        }
        .integration-tag {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--accent);
          margin-bottom: 1rem;
          opacity: 0.8;
        }
        .integration-icon-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-bottom: 1.25rem;
          min-width: 40px;
          min-height: 36px;
        }
        .morph-icon-wrap {
          position: relative;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .morph-icon {
          position: absolute;
          border: 2px solid var(--accent);
          background: transparent;
        }
        .morph-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        .morph-circle.morph-outer {
          width: 28px;
          height: 28px;
        }
        .morph-circle.morph-inner {
          width: 10px;
          height: 10px;
          background: var(--accent);
          border: none;
        }
        .morph-square {
          width: 22px;
          height: 22px;
          border-radius: 4px;
          transform-origin: center;
        }
        .morph-diamond {
          width: 22px;
          height: 22px;
          transform-origin: center;
          border-radius: 4px;
        }
        .integration-icon-dot {
          position: absolute;
          bottom: 2px;
          right: -4px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent-glow);
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
          margin-right: 0.5rem;
          animation: int-blink 2s ease-in-out infinite;
        }
        @keyframes int-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .integration-card h3 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }

        .integration-card p {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

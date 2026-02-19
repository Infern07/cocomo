import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { title: 'Social Media Management', short: 'SMM' },
  { title: 'Performance Marketing', short: 'ADS' },
  { title: 'SEO', short: 'SEO' },
  { title: 'E-commerce Marketing', short: 'ECOMM' },
  { title: 'Content Marketing', short: 'CONTENT' },
  { title: 'Branding', short: 'BRAND' },
]

// Initial positions for desktop (hexagon around center) - as percentage offsets from container center
const DESKTOP_OFFSETS = [
  { x: 0, y: -42 },
  { x: 36, y: -21 },
  { x: 36, y: 21 },
  { x: 0, y: 42 },
  { x: -36, y: 21 },
  { x: -36, y: -21 },
]

export default function Features() {
  const ref = useRef(null)
  const constraintsRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="features" className="section features features-compact" ref={ref}>
      <div className="section-inner features-inner">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="badge-dot" /> SERVICES
        </motion.div>
        <motion.h2
          className="section-title features-title"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05, duration: 0.4 }}
        >
          Your full marketing team
        </motion.h2>

        <motion.div
          ref={constraintsRef}
          className="services-graph-wrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {/* Center - main influencer */}
          <motion.div
            className="graph-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="graph-center-bg" />
            <div className="graph-center-ring" />
            <span className="graph-center-label">20+ CREATIVE MINDS</span>
            <h3 className="graph-center-title">Your Marketing Powerhouse</h3>
            <p className="graph-center-desc">Strategy, execution & growth - unified</p>
          </motion.div>

          {/* Draggable service nodes */}
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="graph-node"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.25 + i * 0.04, duration: 0.4 }}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.05}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              whileHover={{ scale: 1.02 }}
              whileDrag={{ scale: 1.05, zIndex: 10 }}
              style={{
                '--node-x': `${50 + DESKTOP_OFFSETS[i].x}%`,
                '--node-y': `${50 + DESKTOP_OFFSETS[i].y}%`,
              }}
            >
              <span className="graph-node-tag">{s.short}</span>
              <h4>{s.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .features-compact {
          padding: 2.5rem 1.5rem 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .features-title {
          text-transform: none;
          font-size: clamp(1.5rem, 3.5vw, 2.25rem);
          line-height: 1.3;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .services-graph-wrap {
          position: relative;
          width: 100%;
          max-width: 720px;
          height: 380px;
          margin: 0 auto;
          perspective: 800px;
        }
        @media (max-width: 767px) {
          .services-graph-wrap {
            height: 420px;
            max-width: 100%;
          }
        }

        .graph-center {
          position: absolute;
          top: 44%;
          left: 44%;
          transform: translate(-50%, -50%);
          width: 180px;
          padding: 1.5rem 1.25rem;
          background: linear-gradient(145deg, rgba(29, 185, 84, 0.2) 0%, rgba(29, 185, 84, 0.06) 100%);
          border: 1px solid rgba(29, 185, 84, 0.5);
          border-radius: 16px;
          text-align: center;
          z-index: 2;
          overflow: hidden;
          box-shadow: 0 0 40px rgba(29, 185, 84, 0.15);
        }
        @media (max-width: 767px) {
          .graph-center {
            width: 160px;
            padding: 1.25rem 1rem;
          }
        }
        .graph-center-bg {
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle, rgba(29, 185, 84, 0.12) 0%, transparent 70%);
          animation: center-glow 4s ease-in-out infinite;
        }
        .graph-center-ring {
          position: absolute;
          inset: 4px;
          border: 1px solid rgba(29, 185, 84, 0.2);
          border-radius: 12px;
          animation: ring-breathe 3s ease-in-out infinite;
        }
        .graph-center-label {
          position: relative;
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--accent);
          display: block;
          margin-bottom: 0.3rem;
        }
        .graph-center-title {
          position: relative;
          font-family: var(--font-heading);
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }
        .graph-center-desc {
          position: relative;
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .graph-node {
          position: absolute;
          top: var(--node-y);
          left: var(--node-x);
          transform: translate(-50%, -50%);
          -webkit-user-select: none;
          user-select: none;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          min-width: 110px;
          max-width: 140px;
          z-index: 1;
          cursor: grab;
          touch-action: none;
        }
        .graph-node:active {
          cursor: grabbing;
        }
        .graph-node:hover {
          border-color: rgba(29, 185, 84, 0.4);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .graph-node-tag {
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent);
          display: block;
          margin-bottom: 0.25rem;
        }
        .graph-node h4 {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          color: white;
          line-height: 1.25;
        }

        @media (max-width: 767px) {
          .graph-node:nth-child(2) { top: 10%; left: 16.67%; }
          .graph-node:nth-child(3) { top: 10%; left: 50%; }
          .graph-node:nth-child(4) { top: 10%; left: 83.33%; }
          .graph-node:nth-child(5) { top: 90%; left: 16.67%; }
          .graph-node:nth-child(6) { top: 90%; left: 50%; }
          .graph-node:nth-child(7) { top: 90%; left: 83.33%; }
          .graph-node {
            min-width: 85px;
            max-width: 105px;
            padding: 0.65rem 0.8rem;
          }
          .graph-node h4 { font-size: 0.65rem; }
        }

        @keyframes center-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes ring-breathe {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
          margin-right: 0.5rem;
          animation: feature-blink 2s ease-in-out infinite;
        }
        @keyframes feature-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Influencer Discovery',
    emoji: '🔍',
    points: ['Find creators across Instagram, YouTube, etc.', 'Filters: niche, city, engagement'],
  },
  {
    title: 'Campaign Management',
    emoji: '🤝',
    points: ['Handle multiple campaigns in one dashboard', 'Assign deliverables, deadlines'],
  },
  {
    title: 'Performance Tracking',
    emoji: '📊',
    points: ['Track views, engagement, ROI', 'Real-time analytics for brands'],
  },
  {
    title: 'Creator Communication',
    emoji: '💬',
    points: ['Built-in chat / negotiation system', 'No more WhatsApp chaos'],
  },
  {
    title: 'Payment & Contracts',
    emoji: '💰',
    points: ['Secure payments', 'Agreement management (you already deal with this)'],
  },
  {
    title: 'Content Approval Flow',
    emoji: '🎬',
    points: ['Preview → Feedback → Approval → Post', 'Avoid last-minute issues'],
  },
]

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
          Everything You Need to Scale Campaigns
        </motion.h2>
        <motion.p
          className="section-desc integrations-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          One platform to discover creators, run campaigns, track performance, and get content approved — without the chaos.
        </motion.p>

        <motion.div
          className="integrations-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              className="integration-card glass-card glass-shine-card"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.06, type: 'spring', stiffness: 120, damping: 20 }}
              whileHover={{
                y: -4,
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(29, 185, 84, 0.4)',
              }}
            >
              <span className="integration-emoji">{item.emoji}</span>
              <h3>{item.title}</h3>
              <ul className="integration-points">
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .integrations-inner { max-width: 1200px; }
        .integrations-title {
          text-transform: none;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          line-height: 1.3;
          max-width: 700px;
        }
        .integrations-desc {
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .integrations-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        }
        @media (max-width: 600px) {
          .integrations-grid { grid-template-columns: 1fr; gap: 0.875rem; }
        }
        @media (max-width: 400px) {
          .integrations-grid { gap: 0.75rem; }
        }

        .integration-card {
          position: relative;
          padding: 1.5rem 1.5rem;
          text-align: left;
          overflow: hidden;
          border-radius: 14px;
          transition: all 0.3s;
        }
        @media (max-width: 768px) {
          .integration-card { padding: 1.25rem 1.25rem; border-radius: 12px; }
        }
        @media (max-width: 480px) {
          .integration-card { padding: 1.125rem 1rem; }
        }

        .integration-emoji {
          display: inline-block;
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1;
        }
        @media (max-width: 480px) {
          .integration-emoji { font-size: 1.5rem; margin-bottom: 0.5rem; }
        }

        .integration-card h3 {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          letter-spacing: 0.02em;
          color: white;
        }
        @media (max-width: 480px) {
          .integration-card h3 { font-size: 1rem; margin-bottom: 0.5rem; }
        }

        .integration-points {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .integration-points li {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          padding-left: 1rem;
          position: relative;
          margin-bottom: 0.35rem;
        }
        .integration-points li:last-child { margin-bottom: 0; }
        .integration-points li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }
        @media (max-width: 480px) {
          .integration-points li { font-size: 0.85rem; }
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
      `}</style>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: "I don't really understand how a marketing agency works — or why it's better.",
    a: 'We simplify everything. You get a cross-functional team — from SEO to PPC to design — focused on results, not billable hours. Every detail meticulously crafted to perfection.',
  },
  {
    q: 'Why would I switch instead of using freelancers or agencies?',
    a: 'Because scattered teams mean scattered results. With us, everything is integrated — one team, one strategy, one goal: consistent, measurable growth.',
  },
  {
    q: "I've tried digital marketing before. It was slow, expensive, and didn't deliver.",
    a: 'We eliminate the chaos. One powerhouse gives you a dedicated team that handles everything — strategy, execution, reporting — under one roof.',
  },
  {
    q: 'I never know what I\'m paying for — or what\'s being done.',
    a: 'Every hour is tracked. Every task is visible. With crystal-clear billing and structured workflows, you always know where your budget is going — and why.',
  },
  {
    q: 'Our SEO, ads, and content all feel disconnected.',
    a: 'We build unified strategies. Every channel — SEO, PPC, content, design — works together to drive business growth, not just channel-specific metrics.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faqs" className="section faq">
      <div className="section-inner faq-inner">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" /> FAQs
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Challenges our clients faced before working with us
        </motion.h2>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className={`faq-item glass-card ${open === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-inner { max-width: 680px; }

        .faq .section-title { margin-bottom: 2.5rem; }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .faq-item {
          overflow: hidden;
          border-radius: var(--glass-radius);
        }

        .faq-item.open {
          border-color: rgba(255, 255, 255, 0.15) !important;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 1.0625rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }

        .faq-icon {
          font-size: 1.5rem;
          color: var(--accent);
          flex-shrink: 0;
          margin-left: 1rem;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
          margin-right: 0.5rem;
          animation: faq-blink 2s ease-in-out infinite;
        }
        @keyframes faq-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .faq-answer { overflow: hidden; }

        .faq-answer p {
          padding: 0 1.5rem 1.25rem;
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  )
}

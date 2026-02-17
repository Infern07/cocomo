import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="section cta">
      <div className="section-inner">
        <motion.div
          className="cta-content glass-card glass-shine-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to take your marketing to the next level?</h2>
          <p>Get a look at how Cocomo works — and how we can help you grow better, faster.</p>
          <motion.a
            href="mailto:cocomo.digital@gmail.com"
            className="cta-btn"
            whileHover={{ scale: 1.03, boxShadow: '0 0 50px var(--accent-glow)' }}
            whileTap={{ scale: 0.98 }}
          >
            Book a call
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .cta { padding-bottom: 4rem; text-align: center; }

        @media (max-width: 768px) {
          .cta { padding-bottom: 3rem; }
        }

        .cta-content {
          padding: 3.5rem 2.5rem;
          background: rgba(29, 185, 84, 0.06) !important;
          border: 1px solid rgba(29, 185, 84, 0.3) !important;
          border-radius: 20px;
          max-width: 560px;
          margin: 0 auto 3rem;
        }

        .cta-content h2 {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-content p {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        .cta-btn {
          display: inline-block;
          padding: 1rem 2.25rem;
          background: linear-gradient(135deg, var(--accent), var(--accent-dim));
          color: white;
          text-decoration: none;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          border-radius: 12px;
          transition: all 0.3s;
          box-shadow: 0 4px 24px var(--accent-glow);
        }

        @media (max-width: 768px) {
          .cta-content { padding: 2.5rem 1.5rem; }
        }
      `}</style>
    </section>
  )
}

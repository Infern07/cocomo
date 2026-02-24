import { useState } from 'react'
import { motion } from 'framer-motion'

// Create a free form at https://formspree.io and replace with your form ID
const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID'

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const formData = new FormData(form)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const message = formData.get('message') || ''
    const mailto = `mailto:cocomo.digital@gmail.com?subject=Contact from Cocomo&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`

    if (FORM_ENDPOINT.includes('REPLACE')) {
      window.location.href = mailto
      setLoading(false)
      return
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      window.location.href = mailto
    } finally {
      setLoading(false)
    }
  }

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
          <p>Get in touch - tell us about your project and we&apos;ll get back within 24 hours.</p>

          {submitted ? (
            <motion.div
              className="cta-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="cta-success-icon">✓</span>
              <p>Thanks! We&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="cta-form-row">
                <input type="text" name="name" placeholder="Your name" required aria-label="Your name" />
                <input type="email" name="email" placeholder="Email" required aria-label="Email" />
              </div>
              <input type="tel" name="phone" placeholder="Phone (optional)" aria-label="Phone" className="cta-form-phone" />
              <textarea name="message" placeholder="Tell us about your project..." rows={4} required aria-label="Message" />
              <motion.button
                type="submit"
                className="cta-btn"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Send message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .cta { padding-bottom: 4rem; text-align: center; }

        @media (max-width: 768px) {
          .cta { padding-bottom: 3rem; }
        }

        .cta-content {
          padding: 2.5rem 2rem;
          background: rgba(29, 185, 84, 0.06) !important;
          border: 1px solid rgba(29, 185, 84, 0.3) !important;
          border-radius: 20px;
          max-width: 560px;
          margin: 0 auto 3rem;
          text-align: left;
        }

        .cta-content h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
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
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .cta-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cta-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 480px) {
          .cta-form-row { grid-template-columns: 1fr; }
        }
        .cta-form input,
        .cta-form textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          font-family: var(--font-body);
          font-size: 1rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          color: white;
          transition: border-color 0.2s;
        }
        .cta-form input::placeholder,
        .cta-form textarea::placeholder {
          color: var(--text-muted);
        }
        .cta-form input:focus,
        .cta-form textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .cta-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .cta-btn {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--accent), var(--accent-dim));
          color: white;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 24px var(--accent-glow);
          margin-top: 0.5rem;
        }
        .cta-btn:hover:not(:disabled) {
          box-shadow: 0 0 30px var(--accent-glow);
        }
        .cta-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .cta-success {
          text-align: center;
          padding: 2rem 0;
        }
        .cta-success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: var(--accent);
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        .cta-success p {
          margin: 0;
          font-size: 1.125rem;
          color: var(--accent);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .cta-content { padding: 2rem 1.5rem; }
        }
        @media (max-width: 480px) {
          .cta-content { padding: 1.5rem 1.25rem; }
          .cta-form input, .cta-form textarea { padding: 0.9rem 1rem; font-size: 16px; }
        }
      `}</style>
    </section>
  )
}

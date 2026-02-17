import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  { title: 'Social Media', desc: 'Sorcerers who craft scroll-stopping content and build engaged communities.', tag: 'SMM' },
  { title: 'Digital Strategy', desc: 'Geniuses who architect full-funnel plans tailored to your goals.', tag: 'STRATEGY' },
  { title: 'Performance Marketing', desc: 'Ninjas who run data-backed campaigns that drive qualified traffic.', tag: 'ADS' },
  { title: 'Creative Design & Video', desc: 'Wizards who create brand-consistent creatives that drive clicks.', tag: 'CREATIVE' },
  { title: 'Copywriting', desc: 'Innovative storytelling that turns complex ideas into irresistible value.', tag: 'COPY' },
  { title: 'SEO & Analytics', desc: 'Experts who turn raw data into strategic action and visibility.', tag: 'SEO' },
  { title: 'Web Development', desc: 'Aces who build fast, conversion-focused sites and landing pages.', tag: 'DEV' },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" className="section features" ref={ref}>
      <div className="section-inner">
        <motion.div
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" /> SERVICES
        </motion.div>
        <motion.h2
          className="section-title features-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Every marketing service you could wish for — all under one roof
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A powerhouse of 20+ creative minds. Specialized departments focused on their expertise — every detail meticulously crafted to perfection.
        </motion.p>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="service-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .features-title {
          text-transform: none;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          line-height: 1.3;
          max-width: 700px;
        }
        .section-desc { margin-bottom: 2.5rem; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .service-card {
          padding: 1.75rem 1.5rem;
          transition: all 0.3s;
        }
        .service-card:hover {
          border-color: var(--border-accent);
        }
        .service-tag {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .service-card h3 {
          font-family: var(--font-heading);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }
        .service-card p {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
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

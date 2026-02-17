import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{ scaleX }}
      className="scroll-progress"
    >
      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          z-index: 100;
          transform-origin: 0%;
          background: var(--accent-red);
          box-shadow: 0 0 10px var(--accent-red-glow);
        }
      `}</style>
    </motion.div>
  )
}

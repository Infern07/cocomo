import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [onRedBg, setOnRedBg] = useState(false)

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY })
    const sel = 'a, button, [role="button"], .btn-view, .btn-start, .btn-nav-cta, .navbar-cta, .navbar-cta-mobile, .cta-btn, .brand-card, .floating-cta'
    const redSel = '.cta-btn, .btn-primary, .btn-nav-cta, .navbar-cta, .navbar-cta-mobile, .floating-cta'
    const onOver = (e) => {
      if (e.target.closest(sel)) setHovering(true)
      if (e.target.closest(redSel)) setOnRedBg(true)
    }
    const onOut = (e) => {
      if (!e.relatedTarget?.closest(sel)) setHovering(false)
      if (!e.relatedTarget?.closest(redSel)) setOnRedBg(false)
    }

    document.addEventListener('mousemove', move)
    document.body.addEventListener('mouseover', onOver)
    document.body.addEventListener('mouseout', onOut)

    return () => {
      document.removeEventListener('mousemove', move)
      document.body.removeEventListener('mouseover', onOver)
      document.body.removeEventListener('mouseout', onOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className={`cursor-dot ${onRedBg ? 'cursor-on-red' : ''}`}
        animate={{ x: mouse.x, y: mouse.y }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className={`cursor-ring ${onRedBg ? 'cursor-on-red' : ''}`}
        animate={{
          x: mouse.x,
          y: mouse.y,
          scale: hovering ? 1.5 : 1,
          opacity: hovering ? 0.3 : 0.15,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      <style>{`
        .cursor-dot, .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--accent-glow);
        }
        .cursor-ring {
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          border: 2px solid var(--accent);
          border-radius: 50%;
        }
        .cursor-dot.cursor-on-red,
        .cursor-ring.cursor-on-red {
          background: white !important;
          border-color: white !important;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.6) !important;
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none !important; }
        }
      `}</style>
    </>
  )
}

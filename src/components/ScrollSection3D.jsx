import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Marketing-themed: 3D growth chart + megaphone combo
function GrowthChart3D() {
  const group = useRef()
  const bars = [0.4, 0.6, 0.5, 0.8, 0.7, 1, 0.9, 1.2]
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.15
  })
  return (
    <group ref={group}>
      {bars.map((h, i) => (
        <mesh key={i} position={[(i - 3.5) * 0.35, h / 2, 0]}>
          <boxGeometry args={[0.25, h, 0.25]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#ec4899' : '#22d3ee'}
            wireframe
            emissive={i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#ec4899' : '#22d3ee'}
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating phone/laptop mockups
function DeviceMockups() {
  const phone = useRef()
  const laptop = useRef()
  useFrame((state) => {
    phone.current.rotation.y = state.clock.elapsedTime * 0.2
    phone.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    laptop.current.rotation.y = state.clock.elapsedTime * 0.15 + Math.PI / 6
    laptop.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.15
  })
  return (
    <>
      <group ref={phone} position={[-1.5, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.5, 0.9, 0.06]} />
          <meshStandardMaterial color="#8b5cf6" wireframe emissive="#8b5cf6" emissiveIntensity={0.3} />
        </mesh>
      </group>
      <group ref={laptop} position={[1.5, 0, 0]}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[1, 0.6, 0.04]} />
          <meshStandardMaterial color="#6366f1" wireframe emissive="#6366f1" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, -0.1, 0.25]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[1.05, 0.08, 0.5]} />
          <meshStandardMaterial color="#6366f1" wireframe emissive="#6366f1" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </>
  )
}

function ScrollSection3DInner() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#8b5cf6" intensity={2} />
      <pointLight position={[-5, -5, 5]} color="#ec4899" intensity={1} />
      <GrowthChart3D />
      <DeviceMockups />
    </Canvas>
  )
}

export default function ScrollSection3D() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="scroll-section-3d">
      {visible && <ScrollSection3DInner />}
      <div className="scroll-section-overlay">
        <span>Where creativity meets technology</span>
      </div>
      <style>{`
        .scroll-section-3d {
          position: relative;
          height: 100vh;
          width: 100%;
        }
        .scroll-section-3d canvas {
          position: absolute !important;
          inset: 0;
        }
        .scroll-section-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .scroll-section-overlay span {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 700;
          color: rgba(255,255,255,0.9);
          text-shadow: 0 0 40px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </div>
  )
}

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as THREE from 'three'

function LoadingFallback() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000000',
      color: '#a78bfa',
      fontFamily: 'Manrope, sans-serif',
    }}>
      <div className="loader">
        <div className="loader-ring"></div>
        <span>Loading experience...</span>
      </div>
    </div>
  )
}

export default function Scene3D({ children }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
      <style>{`
        .loader {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .loader-ring {
          width: 48px;
          height: 48px;
          border: 3px solid rgba(167, 139, 250, 0.2);
          border-top-color: #a78bfa;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

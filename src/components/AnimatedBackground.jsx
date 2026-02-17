import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralNetwork() {
  const pointsRef = useRef(null)
  const linesRef = useRef(null)
  const count = 800
  const spread = 25

  const { positions, connections } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const conn = []
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6
    }
    for (let i = 0; i < count; i++) {
      const n = 2 + Math.floor(Math.random() * 3)
      for (let k = 0; k < n; k++) {
        const j = Math.floor(Math.random() * count)
        if (i !== j) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          if (dx * dx + dy * dy + dz * dz < 80) conn.push(i, j)
        }
      }
    }
    return { positions: pos, connections: conn }
  }, [])

  const linePositions = useMemo(() => {
    const pairs = connections.length / 2
    const arr = new Float32Array(pairs * 6)
    for (let i = 0; i < pairs; i++) {
      const a = connections[i * 2]
      const b = connections[i * 2 + 1]
      arr[i * 6] = positions[a * 3]
      arr[i * 6 + 1] = positions[a * 3 + 1]
      arr[i * 6 + 2] = positions[a * 3 + 2]
      arr[i * 6 + 3] = positions[b * 3]
      arr[i * 6 + 4] = positions[b * 3 + 1]
      arr[i * 6 + 5] = positions[b * 3 + 2]
    }
    return arr
  }, [positions, connections])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#ffffff"
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={(connections.length / 2) * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  )
}

export default function AnimatedBackground() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <NeuralNetwork />
    </>
  )
}

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 3000 }) {
  const mesh = useRef()
  const light = useRef()

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const purple = new THREE.Color('#8b5cf6')
    const violet = new THREE.Color('#6366f1')
    const pink = new THREE.Color('#ec4899')
    const cyan = new THREE.Color('#22d3ee')

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40

      const colorChoice = Math.random()
      let color
      if (colorChoice < 0.4) color = purple
      else if (colorChoice < 0.7) color = violet
      else if (colorChoice < 0.9) color = pink
      else color = cyan
      color.toArray(colors, i * 3)

      sizes[i] = Math.random() * 2 + 0.5
    }

    return [positions, colors, sizes]
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5
      light.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 5
    }
  })

  return (
    <group>
      <pointLight ref={light} color="#8b5cf6" intensity={2} distance={20} />
      <pointLight position={[5, 5, 5]} color="#ec4899" intensity={1} distance={15} />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function GradientSphere() {
  const mesh = useRef()

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.1
  })

  return (
    <mesh ref={mesh} position={[0, 0, -8]} scale={[4, 4, 4]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color="#1a0a2e"
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  )
}
